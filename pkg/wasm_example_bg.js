let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @param {number} limit
* @returns {number}
*/
export function count_primes_wasm(limit) {
    const ret = wasm.count_primes_wasm(limit);
    return ret >>> 0;
}

