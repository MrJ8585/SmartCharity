use gtest::{Log, Program, System};

#[test]
fn hello_world() {
    let system = System::new();
    system.init_logger();
    let hello_program = Program::current_with_id(&system, 100);
    hello_program.send(10, String::from("Init message"));
}
