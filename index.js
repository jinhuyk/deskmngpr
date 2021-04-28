const googleSpreadsheet = require("google-spreadsheet");

const creds = require("./deskmng-6d651803f822.json");

const doc = new googleSpreadsheet("1CresGAQfPLxIln2NoS_jvLCDHrI5IMOVHqwQ8eolzPU");



doc.useServiceAccountAuth(creds, function(err) {

	

	doc.getCells(

		  1

		, {

			  "max-row" : 6	// Cell의 최대 열(row)의 갯수( 필수 )

			, "max-col" : 3      // Cell의 최대 행(column)의 갯수( 필수 )

			, "return-empty" : true

		}

		, function(err, cells) {

			

                        // 해당 셀(Cell)을 지정한뒤, 변경사항을 수정하고 저장한다.

                        // 셀(Cell)을 수정하면 바로 저장을 해주어야 한다.
			cells[4].value = "301132";          // 해당 셀(Cell)의 값을 변경한다.

			cells[4].save();                        // 해당 셀(Cell)의 변경사항을 저장한다.
                   // 해당 셀(Cell)의 변경사항을 저장한다.

		}

	);

});