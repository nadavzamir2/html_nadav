function init() {
    addData();
    showData()
}
const productButtonEL = Document.getElementById("productButton");
const form_data_El = Document.getElementById("form_data");
const ProductName_EL = Document.getElementById("ProductName");
const ProductPrice_EL = Document.getElementById("ProductPrice");
const CategorySelect_EL = Document.getElementById("CategorySelect");
const url_EL = Document.getElementById("url");
// const SubmitButton_EL = Document.getElementById("submitButton");

form_dataOBJ = {
    "productName": "ProductName_EL.value",
    "ProductPrice": "ProductPrice_EL.value",
    "CategorySelect": "CategorySelect_EL.value",
    "url": "url_EL.value",

}




// function addToCart(form_dataOBJ) {
//     if(addToCartButton === true) {
//         myCart.push(form_dataOBJ)
const addToCartButton = productButtonEL.addeventlistener("click", addToCart)

function addData() {
    
        localStorage.setItem('formData', JSON.stringify(form_dataOBJ));
        document.getElementById('form_dataOBJ').reset();

       
       showData();
    }



function showData() {
    const saved_data = JSON.parse(localStorage.getItem('form_dataOBJ'));
    const products_table = document.getElementById('products_table').getElementsByTagName('tbody');
}

