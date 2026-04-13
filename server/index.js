import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yug@1234",
  database: "echo_forge",
});

db.connect(err => {
  if (err) console.error("DB Error:", err);
  else console.log("MySQL Connected ✅");
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, service, description } = req.body;
  const sql = "INSERT INTO contacts (name, email, phone, service, description) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, email, phone, service, description], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Message sent successfully." });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));