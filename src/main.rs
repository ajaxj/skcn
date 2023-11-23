#[macro_use]
extern crate rocket;
use controllers::user_controller;
use models::response::Response;
use rocket::{
    http::{Method, Status},
    response::status,
    serde::json::Json,
    Request,
};

use rocket_cors::{AllowedHeaders, AllowedOrigins, Cors};

mod controllers;
mod models;
mod services;

#[get("/")]
async fn index() -> status::Custom<Json<Response>> {
    let _response = Response {
        code: Status::Ok.code,
        message: "success".to_string(),
        data: rocket::serde::json::to_value("hello").unwrap(),
    };

    status::Custom(Status::Ok, Json(_response))
}

#[catch(404)]
pub fn not_found(req: &Request<'_>) -> status::Custom<Json<Response>> {
    let _response = Response {
        code: Status::NotFound.code,
        message: "NotFoud".to_string(),
        data: rocket::serde::json::to_value(req.uri().to_string()).unwrap(),
    };

    status::Custom(Status::NotFound, Json(_response))
}

fn cors() -> Cors {
    // let allowed_origins = AllowedOrigins::some_exact(&["http://localhost:3000", "http://127.0.0.1:8000"]);
    let allowed_origins = AllowedOrigins::All;

    rocket_cors::CorsOptions {
        allowed_origins,
        allowed_methods: vec![Method::Get, Method::Post, Method::Delete]
            .into_iter()
            .map(From::from)
            .collect(),
        allowed_headers: AllowedHeaders::all(),
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .unwrap()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(cors())
        .mount("/", routes![index])
        .attach(user_controller::stage())
        .register("/", catchers![not_found])
}
