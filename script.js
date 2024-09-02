let input = document.querySelector("#searchInput")
let btn = document.querySelector('#searchButton')


async function fetchimage(inputvalue) {
    const key = "owaawJ1csr1LWKq71CJ2CuoZHspU6KEA-izGvQdVaxY";
    const api = `https://api.unsplash.com/search/photos?query=${inputvalue}&client_id=${key}`
    let result = (await (await fetch(api)).json())
    console.log(result);
    display(result.results)

}

btn.addEventListener('click', () => {
    let inputvalue = input.value
    console.log(inputvalue);
    fetchimage(inputvalue)
})

function display(images) {
    const imageContainer = document.querySelector("#imageResults")
    imageContainer.innerHTML = ''
    images.forEach(image => {
        const imageElement = document.createElement('img')
        imageElement.src = image.urls.small
        imageContainer.appendChild(imageElement)
    });
}