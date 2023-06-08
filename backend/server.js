const { createClient } = require("@supabase/supabase-js");

const express = require("express");
const app = express();
const port = 80;

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://sfyuuhdffsvorpifibhs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmeXV1aGRmZnN2b3JwaWZpYmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMTczODMsImV4cCI6MjAwMTc5MzM4M30.1mgEvo5Le5rOYTRI5Ptwsx4j_mquuKp4wr4vGe2mFVs"
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cat", async (req, res) => {
  const { data, error } = await supabase.from("Badges").select();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
