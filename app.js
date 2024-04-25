// Javascript Appn --> Unsplash Appn(Security Key)
// d2z3Dpjla34rBnC1Aps9dObVQrO7hMVCOVry2QIQxmA

const imageContainer = document.getElementById("imagecontainer")

const myLoader = document.getElementById("loader")

function controlLoader()
{
    myLoader.hidden = false
}

controlLoader()

async function getImages()
{
    //Logic to connect to unsplash, get the images
    const response = await fetch("https://api.unsplash.com/photos/?client_id=d2z3Dpjla34rBnC1Aps9dObVQrO7hMVCOVry2QIQxmA")
    const imagesData = await response.json()
    
    imagesData.map(function(i)
    {
        let imageUrl = i.urls.full

        const myImageElement = document.createElement("img")
        // console.log(myImageElement)
        myImageElement.setAttribute("src", imageUrl)
        // console.log(myImageElement)
        imageContainer.append(myImageElement)
    })
}

// getImages()

setTimeout(function()
{
    getImages()
    myLoader.hidden = true
}, 1000)

window.addEventListener("scroll", function()
{
    let myClientHeight = document.documentElement.clientHeight
    let myScrollHeight = document.documentElement.scrollHeight
    let myScrollTop = document.documentElement.scrollTop

    console.log(myClientHeight, myScrollHeight, myScrollTop)

    if(myClientHeight + myScrollTop >= myScrollHeight)
    {
        getImages()
    }
    
})