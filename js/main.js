// random color generator 

function randompickerbtn() {
  const randomPicker = document.getElementById("randomPicker")
  const randomValuePara = document.getElementById("randomValuePara")
  const r = Math.floor(Math.random()*255)
  const g = Math.floor(Math.random()*255)
  const b = Math.floor(Math.random()*255)

  const colors = "#" + hex(r) + hex(g) + hex(b)
  console.log(colors)
  randomValuePara.innerHTML = colors
  randomPicker.style.backgroundColor = colors  

  function hex(val){
      const allcolor = val.toString(16)
      return allcolor
  }
}

//  color by hex code
function hexFindbtn() {
  const hexInput = document.getElementById("hexInput").value
  const colorbox = document.getElementById("color-box")
  console.log(hexInput)
  colorbox.style.backgroundColor = hexInput
  colorbox.innerHTML = hexInput

}

// color by rgb 
function RGBFindbtn() {
  const rgbcolorbox = document.getElementById("rgb-color-box")
  const RInput = document.getElementById("RInput").value
  const GInput = document.getElementById("GInput").value
  const BInput = document.getElementById("BInput").value
  console.log("hey")
 
    const rgbcol = "#" + rgb(RInput) + rgb(GInput) + rgb(BInput)
    console.log(rgbcol);
    rgbcolorbox.innerHTML = rgbcol
    rgbcolorbox.style.backgroundColor = rgbcol

    function rgb(val) {
      let allrgb = parseInt(val).toString(16)
      return allrgb
  }
  
}

//  color code show range selector
function RangeSelector() {
    const RrInput = parseInt(document.getElementById("RrInput").value)
    const GrInput = parseInt(document.getElementById("GrInput").value)
    const BrInput = parseInt(document.getElementById("BrInput").value)
    const colobox = document.getElementById("range-color-box")

    const rangeVl = "#" + rang(RrInput) + rang(GrInput) + rang(BrInput)
    console.log(rangeVl);
    colobox.innerHTML = rangeVl
    colobox.style.backgroundColor = rangeVl

    function rang(val){
        let allrgb = val.toString(16)
        console.log(allrgb)
        return allrgb.length == 1 ? "0" + allrgb : allrgb
        
    }
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  if (this.length != 6) {
    alert("Only six-digit hex colors are allowed.");
  }
  else{
     var aRgbHex = this.match(/.{1,2}/g);
     //  console.log(aRgbHex)
     var aRgb = [
       parseInt(aRgbHex[0], 16),
       parseInt(aRgbHex[1], 16),
       parseInt(aRgbHex[2], 16)
     ];
     return aRgb
  }
};

function hexConvbtn() {
  const hexCOut = document.getElementById("hexCOut")
  const hexCInp = document.getElementById("hexCInp").value
  const col = (hexCInp.convertToRGB());
  console.log(col)
  const colors = "rgb(" + col +")"
  hexCOut.innerHTML = colors;
  hexCOut.style.backgroundColor = colors;
  console.log(colors);
  
}

// RGB to HEX convert
function rgbConvbtn() {
    const RCInput = parseInt(document.getElementById('RCInput').value)
    const GCInput = parseInt(document.getElementById("GCInput").value)
    const BCInput = parseInt(document.getElementById("BCInput").value)
    const rgbCOut = document.getElementById("rgbCOut")

    const colordata = "#" + hex(RCInput) + hex(GCInput) + hex(BCInput)

    rgbCOut.innerHTML = colordata
    rgbCOut.style.backgroundColor = colordata;
    console.log(colordata)
    

    function hex(value){
        let allval = value.toString(16)
        if(allval < 16 ) {
            allval = "0" + allval
        }
        return allval
    }

  console.log(RCInput + GCInput + BCInput)
}
