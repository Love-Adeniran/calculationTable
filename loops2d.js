
display = document.getElementById("disp")
function addition(){
    display.innerHTML = ""
    for(i = 1; i<=row.value; i++){
        result = "<tr>"
        for(j=1; j<=column.value ; j++){
            resultAdd = j+i;
            result += "<td>"+ j+ "+" + i +"="+ resultAdd +"</td>"
        }
        result += "</tr>";
        display.innerHTML +=  result;
    }
     
}
function subtract(){
    display.innerHTML = ""
    for(i = 1; i<=row.value; i++){
        result = "<tr>";
        for(j = 1; j <= column.value; j++){
            resultSub = j-i;
            result += "<td>"+ j + "-" + i + "=" + resultSub + "</td>";
        }
        result += "</tr>";
        display.innerHTML += result;
    }
}
function multiply(){
    display.innerHTML = ""
    for(i = 1; i<= row.value; i++){
        result = "<tr>";
        for(j = 1; j<=column.value; j++){
            resultMlt = (j * i);
            result += "<td>"+ j + "x" + i + "=" + resultMlt +"</td>";
        }
        result += "</tr>";
        display.innerHTML += result;
    }
}
function divide(){
    display.innerHTML = ""
    for(i = 1; i<=row.value; i++){
        result = "<tr>";
        for(j = 1; j <= column.value; j++){
            resultSub = j/i;
            result += "<td>"+ j + "/" + i + "=" + resultSub + "</td>";
        }
        result += "</tr>";
        display.innerHTML += result;
    }
}