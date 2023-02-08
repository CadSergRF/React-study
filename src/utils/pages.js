export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  let pageArray = []
for(let i = 0; i < totalPages; i++) {
  pageArray.push(i + 1)
}

return pageArray;
}