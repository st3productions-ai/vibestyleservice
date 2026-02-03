
/**
 * VIBESTYLE TRYON: ABSOLUTE FORCE SYNC ENGINE v10.0
 * 
 * REQUIRED HEADINGS: ["Date", "Name", "Phone", "Email", "Business Name", "Employee Size"]
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this script.
 * 4. Click 'Save' (floppy disk icon).
 * 5. Click 'Deploy' > 'New Deployment'.
 * 6. Select Type: 'Web App'.
 * 7. Set 'Execute as': Me.
 * 8. Set 'Who has access': Anyone.
 * 9. Click 'Deploy' and authorize permissions.
 * 10. Copy the Web App URL and update your leadService.ts file.
 */

function doPost(e) {
  var timestamp = new Date();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  
  // 1. FORCED HEADER SELF-CORRECTION
  // Ensures Row 1 always contains the exact requested headings.
  var expectedHeaders = ["Date", "Name", "Phone", "Email", "Business Name", "Employee Size"];
  var currentHeaders = sheet.getLastRow() > 0 ? sheet.getRange(1, 1, 1, 6).getValues()[0] : [];
  
  if (sheet.getLastRow() === 0 || JSON.stringify(currentHeaders) !== JSON.stringify(expectedHeaders)) {
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(expectedHeaders);
    } else {
      sheet.insertRowBefore(1);
      sheet.getRange(1, 1, 1, 6).setValues([expectedHeaders]);
    }
    
    // Aesthetic Styling
    sheet.getRange(1, 1, 1, 6)
         .setBackground("#8A2BE2") // Electric Purple
         .setFontColor("#FFFFFF")
         .setFontWeight("bold")
         .setHorizontalAlignment("center")
         .setVerticalAlignment("middle");
    sheet.setRowHeight(1, 45);
    sheet.setFrozenRows(1);
  }

  // 2. DATA EXTRACTION OBJECT (Triple Redundancy)
  var rawData = {
    Name: "",
    Phone: "",
    Email: "",
    BusinessName: "",
    EmployeeSize: ""
  };

  // Helper function to map keys regardless of case/format
  function mapData(key, value) {
    var k = key.toLowerCase().replace(/[\s_]/g, '');
    if (k === "name") rawData.Name = value;
    if (k === "phone" || k === "contactphone") rawData.Phone = value;
    if (k === "email" || k === "businessemail") rawData.Email = value;
    if (k === "businessname" || k === "bizname") rawData.BusinessName = value;
    if (k === "employeesize" || k === "size") rawData.EmployeeSize = value;
  }

  // CHANNEL A: Standard Parameters (e.parameter)
  if (e && e.parameter) {
    for (var p in e.parameter) {
      mapData(p, e.parameter[p]);
    }
  }

  // CHANNEL B: Raw Post Content (Critical for fetch 'no-cors' requests)
  if (e && e.postData && e.postData.contents) {
    var contents = e.postData.contents;
    
    // Attempt URL Decoding
    try {
      var pairs = contents.split('&');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        mapData(decodeURIComponent(pair[0]), decodeURIComponent(pair[1] || ""));
      }
    } catch (err) {}

    // Attempt JSON Parsing
    try {
      var json = JSON.parse(contents);
      for (var key in json) {
        mapData(key, json[key]);
      }
    } catch (err) {}
  }

  // 3. FORCE PERSISTENCE
  try {
    var finalRow = [
      timestamp,
      rawData.Name || "!! MISSING_FIELD_NAME !!",
      "'" + (rawData.Phone || "!! MISSING_FIELD_PHONE !!"), // Force string format
      rawData.Email || "!! MISSING_FIELD_EMAIL !!",
      rawData.BusinessName || "!! MISSING_FIELD_BIZ !!",
      rawData.EmployeeSize || "Not Specified"
    ];

    sheet.appendRow(finalRow);
    sheet.autoResizeColumns(1, 6);
    
    // Confirmation response
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "captured": rawData.Name,
      "timestamp": timestamp.toISOString()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput("CRITICAL SYNC FAILURE: " + err.toString());
  }
}
