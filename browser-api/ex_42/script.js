
const images = ['batmanwb', 'flashwb','supermanwb','wonder_womanwb']
const body = document.querySelector('body')
images.forEach(e => {
    const img = document.createElement('img');
    img.setAttribute('src',`./img/${e}.png`)
    console.log(img)

    const name = e.replace("wb","")
    console.log(name);
    img.onmouseover = ()=>{
        
        img.setAttribute('src',`./img/${name}.png`)  
    }
    img.onmouseout = ()=>{
        
        img.setAttribute('src',`./img/${e}.png`)  
    }

    img.onclick  = ()=>{
        alert(name.toUpperCase())
    }



    body.appendChild(img);


})











