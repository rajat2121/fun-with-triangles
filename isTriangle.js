const input = document.querySelectorAll(".angle")
const checkTriangleBtn = document.querySelector("#check-Triangle-Btn");
const output = document.querySelector("#output")

// input from user
function calSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}

// processing sum of Triangles (used typecasting to convert string to number)
function checkTriangle() {
    const sumOfAngles = calSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value))

    // output
    if(sumOfAngles===180) {
        output.innerText = "triangle"
    } else {
        output.innerText = "not a triangle"
    }
}


// button for processing input through checkTriangle function and returning output
checkTriangleBtn.addEventListener("click", checkTriangle)