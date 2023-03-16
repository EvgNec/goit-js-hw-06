

const liItem = document.querySelectorAll("#categories > li.item")
console.log("Number of categories: ", liItem.length);

liItem.forEach(el => {
    console.log("Category: ", el.firstElementChild.textContent)
    console.log("Elements: ",el.lastElementChild.children.length)
})


