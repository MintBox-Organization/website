import { bufferToHex, keccak256 } from 'ethereumjs-util'

export default class MerkleTree {
	private readonly elements: Buffer[]
	private readonly bufferElementPositionIndex: { [hexElement: string]: number }
	private readonly layers: Buffer[][]

	constructor(elements: Buffer[]) {
		if (MerkleTree.elementRepeat(elements)) {
			throw 'repeat leaves'
		}
		this.elements = Array.from(elements)
		// Sort elements
		this.elements.sort(Buffer.compare)
		// Deduplicate elements
		this.elements = MerkleTree.bufDedup(this.elements)

		this.bufferElementPositionIndex = this.elements.reduce<{ [hexElement: string]: number }>((memo, el, index) => {
			memo[bufferToHex(el)] = index
			return memo
		}, {})

		// Create layers
		this.layers = this.getLayers(this.elements)
	}

	public getLayers(elements: Buffer[]): Buffer[][] {
		if (elements.length === 0) {
			throw new Error('empty tree')
		}

		const layers = []
		layers.push(elements)

		// Get next layer until we reach the root
		while (layers[layers.length - 1].length > 1) {
			layers.push(this.getNextLayer(layers[layers.length - 1]))
		}

		return layers
	}

	public getNextLayer(elements: Buffer[]): Buffer[] {
		return elements.reduce<Buffer[]>((layer, el, idx, arr) => {
			if (idx % 2 === 0) {
				// Hash the current element with its pair element
				layer.push(MerkleTree.combinedHash(el, arr[idx + 1]))
			}

			return layer
		}, [])
	}

	public static combinedHash(first: Buffer, second: Buffer): Buffer {
		if (!first) {
			return second
		}
		if (!second) {
			return first
		}

		return keccak256(MerkleTree.sortAndConcat(first, second))
	}

	public getRoot(): Buffer {
		return this.layers[this.layers.length - 1][0]
	}

	public getHexRoot(): string {
		return bufferToHex(this.getRoot())
	}

	public getProof(el: Buffer) {
		let idx = this.bufferElementPositionIndex[bufferToHex(el)]

		if (typeof idx !== 'number') {
			throw new Error('Element does not exist in Merkle tree')
		}

		return this.layers.reduce((proof, layer) => {
			const pairElement = MerkleTree.getPairElement(idx, layer)

			if (pairElement) {
				proof.push(pairElement)
			}

			idx = Math.floor(idx / 2)

			return proof
		}, [])
	}

	public getHexProof(el: Buffer): string[] {
		const proof = this.getProof(el)

		return MerkleTree.bufArrToHexArr(proof)
	}

	private static getPairElement(idx: number, layer: Buffer[]): Buffer | null {
		const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1

		if (pairIdx < layer.length) {
			return layer[pairIdx]
		} else {
			return null
		}
	}

	private static bufDedup(elements: Buffer[]): Buffer[] {
		return elements.filter((el, idx) => {
			return idx === 0 || !elements[idx - 1].equals(el)
		})
	}

	private static bufArrToHexArr(arr: Buffer[]): string[] {
		if (arr.some((el) => !Buffer.isBuffer(el))) {
			throw new Error('Array is not an array of buffers')
		}

		return arr.map((el) => '0x' + el.toString('hex'))
	}

	private static sortAndConcat(...args: Buffer[]): Buffer {
		console.log(Buffer.concat(Array.from(args).sort(Buffer.compare)).toString('hex'))
		return Buffer.concat(Array.from(args).sort(Buffer.compare))
	}

	public static elementRepeat(elements: Buffer[]): boolean {
		if (elements.length == 0) {
			return true
		}
		const m = new Map<string, string>()
		for (const element of elements) {
			const key = element.toString('hex')
			if (m.get(key)) return true
			m.set(key, key)
		}
		return false
	}
}

