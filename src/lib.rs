use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sum(a: u64, b: u64) -> u64 {
    a + b
}
