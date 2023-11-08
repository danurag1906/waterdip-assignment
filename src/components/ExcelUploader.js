import React from "react";
import Papa from "papaparse";

function ExcelUploader({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          console.log("before parsing");
          console.log(result.data); // Log the parsed data to the console
          onUpload(result.data);
        },
        header: true, // Set this to 'true' if the first row of the CSV contains headers
      });
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
}

export default ExcelUploader;
