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
document.getElementById("average").addEventListener("click", find_average);
document.getElementById("round").addEventListener("click", find_rounded);
document.getElementById("slope_length_of_line_segment").addEventListener("click", find_line_segment);
document.getElementById("rec_prism_vol_sur").addEventListener("click", find_rectangular_prysm);
document.getElementById("cylinder_v_sa").addEventListener("click", find_cylinder);
document.getElementById("sphere_vol_sur").addEventListener("click", find_sphere);
document.getElementById("zeros_vertex").addEventListener("click", find_parabola);




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
    const input = document.getElementById("numbers_for_difference").value;
    const numbers = input.split(', ').map(Number);
            const a1 = numbers[0];
            const b1 = numbers[1];
// Calc
    const diff = Math.abs(a1 - b1);
    document.getElementById("difference_answer").textContent = diff
    let Difference = diff
    return {Difference};
    }


// 2


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
    let Average = avg
    return {Average};
}
// 4 rounding box in html
function find_rounded() {
    const input = document.getElementById("numbers_for_rounding").value;
    const numbers = input.split(', ').map(Number);
            const value = numbers[0];
            const decimals = numbers[1];
// Calc
    const rounded = Math.round(value * 10**decimals) / 10**decimals;
    document.getElementById("rounded_answer").textContent = rounded
    let RoundedTo = rounded
    return {RoundedTo};
    }




// 5

function find_line_segment() {
    const input = document.getElementById("lols_coordinates").value;
        const regex = /\(([^,]+),([^,]+)\) \(([^,]+),([^,]+)\)/;
        const match = input.match(regex);
        if (match) {
            const x1 = parseFloat(match[1]);
            const y1 = parseFloat(match[2]);
            const x2 = parseFloat(match[3]);
            const y2 = parseFloat(match[4]);
            const slp = (y2 - y1) / (x2 - x1);
            const lols = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));
            const mid = lols/2;
            document.getElementById("length_of_line_segment_answer").textContent = lols
            document.getElementById("mid_of_line_segment_answer").textContent = mid
            document.getElementById("slope_answer").textContent = slp
            let Slope = slp
            let LengthOfLineSegment = lols
            let Midpoint = mid
            return {Slope, LengthOfLineSegment, Midpoint};
}
}

// 6
function find_rectangular_prysm() {
    const input = document.getElementById("dimensions").value;
    const numbers = input.split(', ').map(Number);
            const l = numbers[0];
            const w = numbers[1];
            const h = numbers[2];
// Calc
    const vol = w*h*l;
    const sur = ((2*h)*l)+(2*(vol/l))+(2*(vol/h));
    document.getElementById("volume_answer").textContent = vol
    document.getElementById("surface_answer").textContent = sur
    let Volume = vol
    let SurfaceArea = sur
    return {Volume, SurfaceArea};
    }


    function find_cylinder() {
        const input = document.getElementById("dimensions_cyl").value;
        const numbers = input.split(', ').map(Number);
                const h = numbers[0];
                const r = numbers[1];
    // Calc
        const vol = Math.PI*((r)**2)*h;
        const sur = 2(Math.PI*((r)**3) + vol)/r;
        document.getElementById("volume_answer_cyl").textContent = vol
        document.getElementById("surface_answer_cyl").textContent = sur
        let Volume = vol
        let SurfaceArea = sur
        return {Volume, SurfaceArea};
        }

    function find_sphere() {
        let r = document.getElementById("sph_dimensions").value;
    // Calc
        const vol = (4/3)*Math.PI*r**3;
        const sur = 4*Math.PI*r**2;
        document.getElementById("sph_volume_answer").textContent = vol
        document.getElementById("sph_surface_answer").textContent = sur
        let Volume = vol
        let SurfaceArea = sur
        return {Volume, SurfaceArea};
        }


function find_parabola() {
    const input = document.getElementById("abc").value;
    const numbers = input.split(', ').map(Number);
            const a = numbers[0];
            const b = numbers[1];
            const c = numbers[2];
// Calc
    const z1 = ((-b) + (Math.sqrt(((b)**2) - ((4*a)*c))))/(2*a);
    const z2 = ((-b) - (Math.sqrt(((b)**2) - ((4*a)*c))))/(2*a);
    const x = (z1 + z2)/2;
    const y = (a*(x)**2) + (b*x) + c
    let zro = `(${z1}, ${z2})`;
    let vrt = `(${x}, ${y})`;
    document.getElementById("zeros_answer").textContent = zro
    document.getElementById("vertex_answer").textContent = vrt
    let Zeros = zro
    let Vertex = vrt
    return {Zeros, Vertex};
    }