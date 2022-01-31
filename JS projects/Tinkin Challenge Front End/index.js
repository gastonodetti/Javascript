 //all recipes list and their status

 let dataAll = [{
    name: "Mixed Berry Melody",
    status: "active"
},
{
    name: "Thai red curry cauliflower soup",
    status: "active"
},
{
    name: "Crispy spiced eggplant",
    status: "active"
},
{
    name: "Pumpkin soup with a twist",
    status: "active"
},
{
    name: "Charred tofu, corn and asparagus salad",
    status: "active"
},
{
    name: "One-pan creamy pesto chicken & gnocchi",
    status: "active"
},
{
    name: "Creamy chicken bake",
    status: "active"
},
{
    name: "French-style chicken and potatoes",
    status: "inactive"
},
{
    name: "Braised beef and vegetables",
    status: "active"
},
{
    name: "Pumpkin, spinach and lentil lasagne",
    status: "active"
},
{
    name: "Soothing chicken soup",
    status: "active"
},
{
    name: "Cornflake-crumbed chicken with wedges",
    status: "active"
},
{
    name: "Quick beef enchiladas",
    status: "active"
},
{
    name: "One-pan creamy pesto chicken & gnocchi",
    status: "active"
},
{
    name: "Cheesy broccoli bake",
    status: "active"
},
{
    name: "Lamb shank ragu with pappardelle",
    status: "active"
}
];


//dynamic list that shows in website

let list = document.getElementById("myList");

//listing function
function listRecipes(recipeList) {

recipeList.forEach((item) => {

    //adding recipes names
    let li = document.createElement("li");
    let recipe = document.createElement("span")
    recipe.className = "recipeSpan"
    let text = document.createTextNode(item.name);
    recipe.appendChild(text)

    //adding star figures
    let star = document.createElement("span");
    for (let i = 0; i < 4; i++) {
        let i = document.createElement("i");
        i.className = "fas fa-star empty";
        star.appendChild(i)
    }

    //adding switch button
    let switchButton = document.createElement("label");
    switchButton.className = "switch"

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let slider = document.createElement("span");
    slider.className = "slider round"

    switchButton.appendChild(checkbox)
    switchButton.appendChild(slider)


    li.appendChild(recipe);
    li.appendChild(star)
    li.appendChild(switchButton)
    list.appendChild(li);

});
}


//aux function to clear recipes list
function clearList() {
while (list.firstChild) {
    list.removeChild(list.firstChild)
}
}


//order list alphabe alphabetically from Z to A
document.getElementById("orderZA").addEventListener("click", function () {
clearList()
dataAll.sort(function (a, b) {
    if (a.name < b.name) {
        return 1;
    } else if (a.name > b.name) {
        return -1;
    } else {
        return 0;
    }
})
listRecipes(dataAll)
})

//order list alphabe alphabetically from A to Z
document.getElementById("orderAZ").addEventListener("click", function () {
clearList()
dataAll.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
})
listRecipes(dataAll)
})


//popUp "add recipe" sign
document.getElementById("plusButton").addEventListener("mouseover", function () {
document.getElementById("popUp").className = "showPopUp";
})
document.getElementById("plusButton").addEventListener("mouseout", function () {
document.getElementById("popUp").className = "popUpHide";
})



listRecipes(dataAll)

//listing all recipes filter
document.getElementById("all").addEventListener("click", function () {
clearList()
listRecipes(dataAll)
});

//listing active recipes filter
document.getElementById("active").addEventListener("click", function () {
clearList()
let dataActive = dataAll.filter(recipeStatus => recipeStatus.status == "active")
listRecipes(dataActive)
});

//listing inactive recipes filter
document.getElementById("inactive").addEventListener("click", function () {
clearList()
let dataInactive = dataAll.filter(recipeStatus => recipeStatus.status == "inactive")
listRecipes(dataInactive)

});

function searchFunction() {
let input = document.getElementById("myInput")
let filter = input.value.toUpperCase()
let ul = document.getElementById("myList")
let li = ul.getElementsByTagName('li')

for (i = 0; i < li.length; i++) {
let span = li[i].getElementsByTagName("span")[0];
txtValue = span.textContent || span.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
li[i].style.display = "";
} else {
li[i].style.display = "none";
}

}     
}