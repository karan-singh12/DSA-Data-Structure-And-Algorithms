function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let Sum = target - arr[i];
        if (map.has(Sum)) {
            return [map.get(Sum), i];
        } else {
            map.set(arr[i], i);
        }
    }
    return 0;
}