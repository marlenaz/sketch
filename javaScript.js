//Zmienne globalne

var container = document.getElementById("container");
let reset = document.getElementById("reset");
let newCells = document.getElementById("new");
let random = document.getElementById("random");
let colorPink = document.getElementById("pink");
let rainbow = false;

//let cellSize = ((960 / numb) - 2) + 'px';
// -2 w rozmiarze, bo cell's border ma 1px, każdy cell ma 2xborder

//Funkcja generujaca pierwotna siatke

function genGrid(numb) {
//numb - ilosc kolumn i wierszy jak� ma mie� siatka

	  for(var r = 0; r < numb; r++) {
	    var row = document.createElement("div");
	    row.setAttribute("class", "row");

	    for(var c = 0; c < numb; c++) {
	      var cell = document.createElement("div");
        let cellSize = ((960 / numb) - 2) + 'px';
	      cell.setAttribute("class", "cell");
        cell.setAttribute("style", `width: ${cellSize}; height: ${cellSize}`);
	      row.appendChild(cell);
        changeColor(cell);
        resetCell(cell);

	    }
	    container.appendChild(row);
	  }
}

function mixedColor() {
  let mixColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	let newColor = "#";
	for(var i = 0; i < 6; i++) {
		newColor += mixColors[Math.floor(Math.random() * 16)];
	}
	return newColor;
}

function changeColor(cell) {
  cell.addEventListener("mouseover", () => {
		if (rainbow === false) {
			cell.style.background = "#ff0080";
		}
		else if (rainbow === true) {
			cell.style.background = mixedColor();
		}

  });
}

random.addEventListener("click", () => {
	rainbow = true;
});

colorPink.addEventListener("click", () => {
	rainbow = false;
});

function resetCell(cell) {
  reset.addEventListener("click", () => {
    cell.style.background = "black";
  })
}


function setNewGrid() {

	let newNumb = prompt("How big you want your sketch to be (100 max)?", "16");
	let oldGrid = document.querySelectorAll(".row");
	oldGrid.forEach((oldGrid) => container.removeChild(oldGrid));

	for(var r = 0; r < newNumb; r++) {
		var row = document.createElement("div");
		row.setAttribute("class", "row");

		for(var c = 0; c < newNumb; c++) {
			var cell = document.createElement("div");
			let cellSize = ((960 / newNumb) - 2) + 'px';
			cell.setAttribute("class", "cell");
			cell.setAttribute("style", `width: ${cellSize}; height: ${cellSize}`);
			row.appendChild(cell);
			changeColor(cell);
			resetCell(cell);

		}
		container.appendChild(row);
	}
}

newCells.addEventListener("click", setNewGrid);

genGrid(16);
