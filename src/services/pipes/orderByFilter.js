const orderByFilter = (arr, type) => {
    if (!type && !arr) return arr;
    return arr.fetchedData.sort((a, b) => {
        switch (type) {
            case 'asc':
                return (a.id > b.id) ? 1 : -1;
            case 'desc':
                return (a.id < b.id) ? 1 : -1;
            default:
                return (a.id > b.id) ? 1 : -1;
        }
    });
}

export default orderByFilter;