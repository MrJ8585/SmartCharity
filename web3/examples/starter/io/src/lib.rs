#![no_std]
use gstd::{prelude::*,ActorId,Encode,Decode,TypeInfo,Debug};
use gmeta::{InOut, Metadata}


#[derive(Encode,Decode,TypeInfo,Debug)]
pub enum InputMessage{
    
}