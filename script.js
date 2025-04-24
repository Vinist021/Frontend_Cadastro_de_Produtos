var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel I7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel I7, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel I5, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];


//OnLoad
loadProducts();


function loadProducts(){
    for(let prod of products) {
        addNewRow(prod);
    }
}

//Add new row
function addNewRow(prod) {
    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();

    //Insert product id
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    //Insert product name
    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    //Insert product description
    var descriptionNode = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(descriptionNode);

    //Insert product price
    var priceNode = document.createTextNode(prod.price);
    newRow.insertCell().appendChild(priceNode);

    //Insert product category
    var categoryNode = document.createTextNode(categories[prod.id - 1].name);
    newRow.insertCell().appendChild(categoryNode);

    var options = '';

    if(prod.promotion) {
        options = '<span class="badge text-bg-success">P</span>';
    }

    if(prod.new) {
        options += '<span class="badge text-bg-primary">L</span>';
    }

    newRow.insertCell().innerHTML = options;
       
}

