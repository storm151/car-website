// the color number (generated from 0 to 6)
let num = Math.round(Math.random() * 6)

// the seven rainbow colors - from red to violet
let colors = ["#f00707", "#fc9300", "#fff200", "#51ff00", 
                "#00ffea", "#002fff", "#ee00ff"];

// represents whether the dark mode is activated
let dark = true;

// The box that is displayed on the top
let top_box = document.getElementsByClassName("main-box")[0];

let p_elements = document.getElementsByTagName("p");
let h1_elements = document.getElementsByTagName("h1");
let bottom_box = document.getElementsByName("bottom-box");
let bottom_box_p_elements = btmBoxElements();


// sets the background color of the top box to a random color
top_box.style.background = colors[num];

// called when a person clicks on the box
function onTopBoxClick() {
    num++;
    if (num > 6) num = 0;
    top_box.style.background = colors[num];
}

// sets the top box colors to black
function reset() {
    top_box.style.background = "#000000";
}

// sets the website into dark mode and vice versa
function darkMode() {
    dark = !dark;
    if (dark) {
        for (let i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "#ffffff";
        }
        for (let i = 0; i < h1_elements.length; i++) {
            if (document.getElementsByClassName("top-box")[0] != h1_elements[i])
                h1_elements[i].style.color = "#ffffff";
        }
        document.body.style.background = "#403f3e";
    } else {
        for (let i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "#000000";
        }
        for (let i = 0; i < h1_elements.length; i++) {
            if (document.getElementsByClassName("top-box")[0] != h1_elements[i])
                h1_elements[i].style.color = "#000000";
        }
        document.body.style.background = "#ffffff";
    }
    for (let i = 0; i < bottom_box_p_elements.length; i++) {
        bottom_box_p_elements[i].style.color = "#ffffff";
    }
}


// gets bottom box elements
function btmBoxElements() {
    let list = new Array();
    for (let i = 0; i < bottom_box.length; i++) {
        for (let e = 0; e < document.getElementsByTagName("p").length; i++) {
            if (e.toString().equals(bottom_box[i]).toString())
                continue;
        }
        list.push(bottom_box[i]);
    }
    return list;
}