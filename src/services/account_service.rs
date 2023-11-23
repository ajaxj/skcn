use bcrypt::{hash, DEFAULT_COST};
use rocket::http::Status;

use crate::models::{response::Response, user::NewUserDTO};

//用户注册
pub async fn signup(user: NewUserDTO) -> Response {
    let hashed_pwd = hash(&user.pwd, DEFAULT_COST).unwrap(); //加密
    let _user = NewUserDTO {
        pwd: hashed_pwd,
        ..user
    };

    Response {
        code: Status::Ok.code,
        message: String::from("success"),
        data: rocket::serde::json::to_value(_user).unwrap(),
    }
}
