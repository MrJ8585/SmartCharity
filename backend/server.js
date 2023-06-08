const { createClient } = require("@supabase/supabase-js");
const express = require("express");
const cors = require("cors");
const app = express();

const port = 80;

app.use(express.json());
app.use(cors({ credentials: false, origin: "*" }));

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://sfyuuhdffsvorpifibhs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmeXV1aGRmZnN2b3JwaWZpYmhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjIxNzM4MywiZXhwIjoyMDAxNzkzMzgzfQ.1T9WUqQbZVo0KNir_w0A_6rkPRzgvbm6beIRtvYw2Xo"
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cat", async (req, res) => {
  const { data, error } = await supabase.from("Badges").select("*");
  res.send(data);
});

// insertar/crear una nueva donacion
app.post("/donacion", async (req, res) => {
  const { userWallet, companyWallet, quantity, block, date } = req.body;

  const { error } = await supabase
    .from("Donacion")
    .insert({ userWallet, companyWallet, quantity, block, date });

  if (error) {
    console.log(error);
    res.status(400).send();
    return;
  }
  res.status(200).send();
});

// obtener todas las donaciones de un usuario en particular
app.post("/donacion/user/wallet", async (req, res) => {
  const { userWallet } = req.body;

  const { data, error } = await supabase
    .from("Donacion")
    .select("*")
    .eq("userWallet", userWallet);

  if (error) {
    console.log(error);
    res.status(400).send();
    return;
  }
  res.send(data);
});

// obtener todas las donaciones de una compañía en particular
app.post("/donacion/company/wallet", async (req, res) => {
  const { companyWallet } = req.body;

  const { data, error } = await supabase
    .from("Donacion")
    .select("*")
    .eq("companyWallet", companyWallet);

  if (error) {
    console.log(error);
    res.status(400).send();
    return;
  }
  res.send(data);
});

// obtener los gastos de una compañía
app.get("/gastos/company/:wallet", async (req, res) => {
  const { wallet } = req.params;

  const { data, error } = await supabase
    .from("Gastos")
    .select("*")
    .eq("companyWallet", wallet);

  if (error) {
    console.log(error);
    res.status(400).send();
    return;
  }
  res.send(data);
});

// crear/insertar gastos de una compañía
app.post("/gastos/company", async (req, res) => {
  const { companyWallet, quantity, descripcion, titulo, date } = req.body;

  const { error } = await supabase
    .from("Gastos")
    .insert({ companyWallet, quantity, descripcion, titulo, date });

  if (error) {
    console.log(error);
    res.status(400).send();
    return;
  }
  res.status(200).send();
});

// POST gastos
// GET gastos de compañia

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
