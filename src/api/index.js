import request from "@/utils/request";

export function exchangeCode(publicAddress) {
  return request({
    url: `/code/${publicAddress}`,
    method: "post",
  });
}

export function login(publicAddress, signature) {
  return request({
    url: `/auth/${publicAddress}`,
    method: "post",
    data: {
      signature,
    },
  });
}

export function bucket() {
  return request({
    url: `/bucket`,
    method: "get",
  });
}

export function getFormToken() {
  return request({
    url: `/formtoken`,
    method: "get",
    loading: false,
  });
}

export function getContractSuccess(contractAddress) {
  return request({
    url: `/collections/result/${contractAddress}`,
    method: "get",
    loading: false,
  });
}

export function setContractResult(token) {
  return request({
    url: `/result/${token}`,
    method: "post",
  });
}

export function bucketHeadObject(data) {
  return request({
    url: `/bucket/headObject`,
    method: "post",
    data,
    loading: false,
  });
}

export function cidCheck(cid) {
  return request({
    url: `/ipfs/${cid}`,
    method: "get",
    loading: false,
  });
}

export function createNft(data) {
  return request({
    url: `/nfts`,
    method: "post",
    data,
  });
}

export function readNft(contractAddress) {
  return request({
    url: `/nfts/item/${contractAddress}`,
    method: "post",
  });
}

export function editCollection(contractAddress, data) {
  return request({
    url: `/collections/${contractAddress}`,
    method: "put",
    data,
  });
}

export function getExplorerList(page, pageSize) {
  return request({
    url: `/explorer/${page}?pageSize=${pageSize}`,
    method: "get",
  });
}

export function getMyNftList() {
  return request({
    url: `/collections`,
    method: "get",
  });
}

export function deleteMyCollection(contractAddress) {
  return request({
    url: `/collections/${contractAddress}`,
    method: "delete",
  });
}

export function getNFTsCollectionItem(id) {
  return request({
    url: `/collections/${id}`,
    method: "get",
  });
}

export function getNFTsCollectionItemList(id, page) {
  return request({
    url: `/collections/${id}/${page}`,
    method: "get",
  });
}

export function getNFTsCollectionItemDetail(cid) {
  return request({
    url: `/nfts/items/${cid}`,
    method: "get",
  });
}
