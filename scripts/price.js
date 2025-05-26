const times = [
    "Trước 12h<br>Before 12PM",
    "Từ 12:00 đến trước 17:00<br>From 12PM to before 5PM",
    "Từ 17:00 đến trước 23:00<br>From 5PM to before 11PM",
    "Từ 23:00<br>From 11PM"
  ];
  
  const data2D = [
    ["55.000đ", "65.000đ", "140.000đ", "70.000đ", "80.000đ", "170.000đ"],
    ["70.000đ", "75.000đ", "160.000đ", "80.000đ", "85.000đ", "180.000đ"],
    ["80.000đ", "85.000đ", "180.000đ", "90.000đ", "95.000đ", "200.000đ"],
    ["65.000đ", "70.000đ", "150.000đ", "75.000đ", "80.000đ", "170.000đ"]
  ];
  
  
  const data3D = [
    ["60.000đ", "80.000đ", "160.000đ", "80.000đ", "100.000đ", "200.000đ"],
    ["80.000đ", "90.000đ", "180.000đ", "100.000đ", "110.000đ", "220.000đ"],
    ["100.000đ", "110.000đ", "220.000đ", "130.000đ", "140.000đ", "280.000đ"],
    ["100.000đ", "110.000đ", "220.000đ", "120.000đ", "130.000đ", "260.000đ"]
  ];
  
  function populateTable(id, data) {
    const tbody = document.getElementById(id);
    data.forEach((row, index) => {
      const tr = document.createElement("tr");
  
      const timeCell = document.createElement("td");
      timeCell.innerHTML = times[index];
      timeCell.classList.add("time-column");
      tr.appendChild(timeCell);
  
      row.forEach((cell, i) => {
        const td = document.createElement("td");
        td.innerText = cell;
        td.classList.add(["standard", "vip", "sweetbox", "standard", "vip", "sweetbox"][i]);
        tr.appendChild(td);
      });
  
      tbody.appendChild(tr);
    });
  }
  
  populateTable("table-2d", data2D);
  populateTable("table-3d", data3D);
  