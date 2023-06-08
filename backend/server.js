const { createClient } = require("@supabase/supabase-js");

const express = require("express");
const app = express();
const port = 80;

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://sfyuuhdffsvorpifibhs.supabase.co",
<<<<<<< HEAD
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmeXV1aGRmZnN2b3JwaWZpYmhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjIxNzM4MywiZXhwIjoyMDAxNzkzMzgzfQ.1T9WUqQbZVo0KNir_w0A_6rkPRzgvbm6beIRtvYw2Xo"
=======
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmeXV1aGRmZnN2b3JwaWZpYmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMTczODMsImV4cCI6MjAwMTc5MzM4M30.1mgEvo5Le5rOYTRI5Ptwsx4j_mquuKp4wr4vGe2mFVs"
>>>>>>> e81325439f306d68161a6ae13347888c0fbab0e9
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cat", async (req, res) => {
<<<<<<< HEAD
  const { data, error } = await supabase.from("Badges").select("*");
=======
  const { data, error } = await supabase.from("Badges").select();
>>>>>>> e81325439f306d68161a6ae13347888c0fbab0e9
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
