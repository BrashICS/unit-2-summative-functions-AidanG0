/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("difference").addEventListener("click", find_difference);
document.getElementById("slope").addEventListener("click", find_slope);
document.getElementById("average").addEventListener("click", find_average);
document.getElementById("length_of_line_segment").addEventListener("click", find_length_of_line_segment);
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);



/*** Functions ***/

// Round to the nearest `decimals` number of decimals


// Round to the user's number of decimals




// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}



// 1

function find_difference() {
    let a1 = Number(document.getElementById("a").value);
    let b1 = Number(document.getElementById("b").value);
// Calc
    let diff = Math.abs(a1 - b1);
    document.getElementById("difference_answer").textContent = diff
    return diff;
    
}

// 2
function find_slope() {
    const input = document.getElementById("coordinates").value;
        const regex = /\(([^,]+),([^,]+)\) \(([^,]+),([^,]+)\)/;
        const match = input.match(regex);
        if (match) {
            const x1 = parseFloat(match[1]);
            const y1 = parseFloat(match[2]);
            const x2 = parseFloat(match[3]);
            const y2 = parseFloat(match[4]);
            const slp = (y2 - y1) / (x2 - x1);
            document.getElementById("slope_answer").textContent = slp;
            return slp;
        }
}

// 3
function find_average() {
    const arg = document.getElementById('numbers_for_average').value;
    const theArgs = arg.split(', ').map(num => parseFloat(num.trim()));
    let avg = 0;
    for (const arg of theArgs) {
      avg += arg;
    }
    avg = avg/theArgs.length
    document.getElementById("average_answer").textContent = avg
    return avg;
}
// 4 rounding box in html

function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

function round_user(value) {
    let d = Number(document.getElementById("rounding").value)
}

// 5

function find_length_of_line_segment(x1, y1, x2, y2) {
    let lols = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));
    return lols;
}

