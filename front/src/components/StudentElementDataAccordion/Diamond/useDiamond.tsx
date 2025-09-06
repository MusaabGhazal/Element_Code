// import { google } from "googleapis";
// import credentials from "../../../../credentials.json" with { type: "json" };

// export async function getSheetData() {
//   // Authenticate with object syntax
//   const auth = new google.auth.JWT({
//     email: credentials.client_email,
//     key: credentials.private_key,
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   // Replace with your actual spreadsheet ID
//   const spreadsheetId = "1NotZGTT4mTKka5-xuT4wrQ23Ys8jl3YatFVdWfEli48";
//   const range = "Students!A:B";

//   try {
//     const res = await sheets.spreadsheets.values.get({
//       spreadsheetId,
//       range,
//     });

//     const rows = res.data.values;
//     if (!rows || rows.length === 0) {
//       console.log("No data found.");
//       return;
//     }

//     console.log("Data from sheet:");
//     rows.forEach((row) => console.log(row));
//   } catch (err) {
//     console.error("Error fetching sheet data:", err);
//   }
// }

// getSheetData();
