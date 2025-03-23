// Ex - 1
// implement search by category
// start with fetching all the categories and draw them inside Select Option https://dummyjson.com/products/categories
// when changing the select option - trigger a request to https://dummyjson.com/products/category/beauty with the selected category - in this example: beauty
// EX - 2
// support the skip&result functionality
// create 2 buttons prev & next.
// when clicking on next bring the next 3 items.
// when clicking on prev bring the prev 3 items

const DOM = {
    searchInput: null
}
function init() {
    DOM.searchInput = document.getElementById("searchText")
    document.getElementById("searchButton").addEventListener("click", searchProduct)

    document.getElementById("searchOnlyIphones").addEventListener("click", searchOnlyIphones)
}
function searchOnlyIphones() {
    callApi("iphone")
}
function searchProduct() {
    const inputText = DOM.searchInput?.value?.toLowerCase()
    callApi(inputText)
}

function callApi(inputText) {
    fetch(`'https://dummyjson.com/products/category-list'`).then(success).catch(failed)
    function success(data) {
        data.json().then((s) => {
            draw(s.products.category)
        })
    }
    function failed(error) {
        console.log(error)
        alert("Something went wrong!")
    }
}

function draw(products) {
    const titles = products.map(p => { return `<h2>${p.category}</h2>` })
    document.querySelector("#content").innerHTML = titles.join("")
}
init()
const productsUrl = "https://dummyjson.com/products"
function callGetProducts() {
    showLoader(true)
    fetch(productsUrl).then((result) => { // result = HTTP response object
        result.json().then(data => {
            const products = data.products
            showLoader(false)
            draw(products)
        })
    }).catch(res => console.log(res))
}
function showLoader(show) {
    if (show) {
        document.querySelector("#content").innerHTML = "<h1>Loading...</h1>"
    } else {
        document.querySelector("#content").innerHTML = ""
    }
}