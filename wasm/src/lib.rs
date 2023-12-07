use reqwest;
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::to_value;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[derive(Debug, Deserialize,Serialize)]
struct MyData {
    id: i64,
    hitokoto:String,
}


#[wasm_bindgen]
pub async fn fetch_data(url: &str) -> Result<JsValue, JsValue> {
    let response = reqwest::get(url).await.map_err(|err| JsValue::from_str(&err.to_string()))?;
    let response_text = response.text().await.map_err(|err| JsValue::from_str(&err.to_string()))?;
    let data: MyData = serde_json::from_str(&response_text).map_err(|err| JsValue::from_str(&err.to_string()))?;
    let jsv = to_value(&data).map_err(|err| JsValue::from_str(&err.to_string()))?;
    Ok(jsv)
}
