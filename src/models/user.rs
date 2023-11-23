use rocket::serde::{Deserialize, Serialize};



#[derive(Debug,  Deserialize,Serialize)]
#[serde(crate = "rocket::serde")]
pub struct NewUserDTO {
    pub username: String,
    pub email: String,
    pub pwd: String,
}



//登录用的DTO ,  反序列化
#[derive(Deserialize, Serialize)] 
#[serde(crate = "rocket::serde")]
pub struct LoginDTO {
    pub username_or_email: String,
    pub pwd: String,
}