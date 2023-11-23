use rocket::{fairing::AdHoc, http::Status, response::status, serde::json::Json};

use crate::{
    models::{
        response::Response,
        user::{LoginDTO, NewUserDTO},
    },
    services::account_service,
};

// #[post("/signup", format = "json", data = "<user>")]
// pub async fn user_signup( user: Json<UserDTO>) -> status::Custom<Json<Response>> {

//     status::Custom(
//         Status::from_code(_response.code).unwrap(),
//         Json(_response)
//     )

// }

/**
* 用户登录
*
localhost:8000/users/login
  {
   "username_or_email":"test",
   "pwd":"123456"
   }
*/
#[post("/login", format = "json", data = "<login>")]
async fn user_login(login: Json<LoginDTO>) -> status::Custom<Json<Response>> {
    let _response = Response {
        code: Status::Ok.code,
        message: "success".to_string(),
        data: rocket::serde::json::to_value(login.0).unwrap(),
    };

    status::Custom(Status::Ok, Json(_response))
}

/**
* 用户注册
*
localhost:8000/users/signup
  {
   "username":"test",
   "email":"test@test.com",
   "pwd":"123456"
   }
*/
#[post("/signup", format = "json", data = "<user>")]
pub async fn signin(user: Json<NewUserDTO>) -> status::Custom<Json<Response>> {
    let _response = account_service::signup(user.0).await;

    status::Custom(Status::Ok, Json(_response))
}

pub fn stage() -> AdHoc {
    AdHoc::on_ignite("user all ", |rocket| async {
        rocket.mount("/users", routes![user_login,signin])
    })
}
