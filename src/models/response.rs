use rocket::serde::{Deserialize, Serialize, json::Value};




#[derive(Debug,Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
pub struct Response {
    pub code:u16,
    pub message: String,
    pub data: Value,
}
