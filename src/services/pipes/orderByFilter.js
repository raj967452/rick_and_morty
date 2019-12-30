export const orderByFilter = (arr, type) => {
    if (!type) return arr;
    if (type === 'asc') {
        return arr.slice().sort((a, b) => a.id - b.id);
    } else {
        return arr.slice().sort((a, b) => b.id - a.id);
    }
}