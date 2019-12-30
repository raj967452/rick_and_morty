export const filterByGender = (cData, fType) => {
    if (!fType) return cData;
    if (!!fType && fType.length > 0) {
        cData = cData.filter(p => cData.find(filterType => p.gender === filterType));
    }
}