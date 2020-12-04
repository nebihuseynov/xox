let x = "X";
let o = "O";
let count = 1;
let M = [];
let n = 3;

onload = function() {
    Start();
};

function Start() {
    count = 1;
    Arr();
    Table();
}

function Arr() {
    for (let i = 0; i < n; i++) {
        M[i] = [];
    }
}

function Table() {
    let tbl = "<table>";
    for (let i = 0; i < n; i++) {
        tbl += "<tr>";
        for (let j = 0; j < n; j++) {
            M[i][j] = M[i][j] === undefined ? "" : M[i][j];
            tbl += `<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
        }
        tbl += "</tr>";
    }
    tbl += "</table>";
    document.getElementsByTagName("main")[0].innerHTML = tbl;
}

function Click(i, j) {
    if (M[i][j] === "") {
        if (count % 2 == 0) {
            M[i][j] = o;
        } else {
            M[i][j] = x;
        }
        count++;
        Table();
        setTimeout(Check, 300);

    }
}
let p1c = 0;
let p2c = 0;
let a;

function Check() {
    if (M[0][0] == M[1][1] && M[0][0] == M[2][2] && M[0][0] != "") {
        alert("Win! " + M[0][0]);
        a = M[0][0];
        sil();
    } else if (M[0][2] == M[1][1] && M[0][2] == M[2][0] && M[0][2] != "") {
        alert("Win! " + M[0][2]);
        a = M[0][2];
        sil();
    } else if (M[0][0] == M[1][0] && M[0][0] == M[2][0] && M[0][0] != "") {
        alert("Win! " + M[0][0]);
        a = M[0][0];
        sil();
    } else if (M[0][1] == M[1][1] && M[0][1] == M[2][1] && M[0][1] != "") {
        alert("Win! " + M[0][1]);
        a = M[0][1];
        sil();
    } else if (M[0][2] == M[1][2] && M[0][2] == M[2][2] && M[0][2] != "") {
        alert("Win! " + M[0][2]);
        a = M[0][2];
        sil();
    } else if (M[0][2] == M[1][2] && M[0][2] == M[2][2] && M[0][2] != "") {
        alert("Win! " + M[0][2]);
        a = M[0][2];
        sil();
    } else if (M[0][0] == M[0][1] && M[0][0] == M[0][2] && M[0][0] != "") {
        alert("Win! " + M[0][0]);
        a = M[0][0];
        sil();
    } else if (M[1][0] == M[1][1] && M[1][0] == M[1][2] && M[1][0] != "") {
        alert("Win! " + M[1][0]);
        a = M[1][0];
        sil();
    } else if (M[2][0] == M[2][1] && M[2][0] == M[2][2] && M[2][0] != "") {
        alert("Win! " + M[2][0]);
        a = M[2][0];
        sil();
    } else if (function() {

            let c = true;
            while (c == true) {
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n; j++) {
                        if (M[i][j] != "") {
                            M[i][j] = ""

                            c = true
                        } else {
                            c = false
                            break;
                        }
                    }
                }
            }
        }) {
        if (c == true) {
            alert("Hello World");
        }
    }

}


function sil() {
    if (a == x) {
        p1c++
    } else {
        p2c++;
    }
    // M.splice(0, 3)
    Arr();
    Table();
    document.getElementById("player1").innerHTML = `Player 1:${p1c} Xal`
    document.getElementById("player2").innerHTML = `Player 2:${p2c} Xal`
}