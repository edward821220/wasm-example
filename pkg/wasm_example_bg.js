let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @param {bigint} a
* @param {bigint} b
* @returns {bigint}
*/
export function sum(a, b) {
    const ret = wasm.sum(a, b);
    return BigInt.asUintN(64, ret);
}

