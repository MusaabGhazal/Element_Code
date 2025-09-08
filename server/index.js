import express from "express";
import cors from "cors";
import { google } from "googleapis";
import credentials from "../front/credentials.json" with { type: "json" }; // ✅ Adjust path if needed

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Spreadsheet details
const SPREADSHEET_ID = "1NotZGTT4mTKka5-xuT4wrQ23Ys8jl3YatFVdWfEli48";
const RANGE = "Students!A:B"; // Adjust range for your sheet

// Function to get sheet data
async function getSheetData() {
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
  });

  return res.data.values || [];
}

// Function to add a row
async function addRowToSheet(row) {
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row], 
    },
  });
}

// ✅ Get students
app.get("/api/students", async (req, res) => {
  try {
    const data = await getSheetData();
    res.json({ students: data });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Failed to fetch student data" });
  }
});

// ✅ Add student
app.post("/api/students", async (req, res) => {
  try {
    const { name, grade } = req.body;

    if (!name || !grade) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await addRowToSheet([name, grade]);

    res.json({ message: "Student added successfully" });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ error: "Failed to add student" });
  }
});

app.listen(5004, () => {
  console.log("✅ Server running on http://localhost:5004");
});
