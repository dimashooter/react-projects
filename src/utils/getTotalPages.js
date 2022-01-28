export const getTotalPages = (totalComments, limit) => {
    return Math.ceil( +totalComments / limit)
}