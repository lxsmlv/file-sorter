export const mergeSort = (arr: string[]): string[] => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (left: string[], right: string[]): string[] => {
    const result: string[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (parseInt(left[i]) < parseInt(right[j])) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i), right.slice(j));
};