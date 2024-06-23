const getColor = () => {
    const randomNumber = Math.floor(Math.random()*1677215)
    // console.log(randomNumber)
    const randomCode = "#"+randomNumber.toString(16)
    // console.log(randomNumber,randomCode)
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;

    //copy to clipboard
    navigator.clipboard.writeText(randomCode)

}

//event cell 
document.getElementById("btn").addEventListener(
    "click",
    getColor 
)
// color cell
getColor();