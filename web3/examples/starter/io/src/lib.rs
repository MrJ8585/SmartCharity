#![no_std]
use gstd::{prelude::*,ActorId,Encode,Decode,TypeInfo,Debug};
use gmeta::{InOut, Metadata}

pub struct miMetaData;

#[derive(Encode,Decode,TypeInfo,Debug)]
pub enum InputMessage{
    
}