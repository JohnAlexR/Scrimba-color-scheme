// render colors and hex codes

let hexCodeArray = []

document.getElementById('submit').addEventListener('click', ()=> {

    hexCodeArray = []
    
    let selectedHex = document.getElementById('colorPicker').value
    let selectedScheme = document.getElementById('scheme').value
    console.log(selectedScheme)
    console.log(selectedHex.substr(1))

    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedHex.substr(1)}&format=json&mode=${selectedScheme}`)
        .then(res => res.json())
        .then(data => {
            let colorArray = data.colors
            colorArray.forEach(color => {
                hexCodeArray.push(color.hex.value)
            });
            render()    
            })

})

function render() {

    let innerHexHtml = ''
    let innerColorHtml = ''

    hexCodeArray.forEach(hex => {
        innerHexHtml += `<p class="hex">${hex}</p>`
        innerColorHtml += `
            <div class="color-strip" style="background-color: ${hex}"></div>
        `
    })

    document.getElementById('hex-codes').innerHTML = innerHexHtml
    document.getElementById('colors').innerHTML = innerColorHtml

}

