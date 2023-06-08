#![no_std]
use gstd::{prelude::*, msg, debug};

#[no_mangle]
extern "C" fn init() {
    let init_message: String = msg::load().expect("Can't load the incoming message");
    debug!("Program initialized {:?}", init_message);
}

#[no_mangle]
extern "C" fn handle() {
    msg::reply(String::from("Hello"), 0).expect("Error in sending a reply message");
}
