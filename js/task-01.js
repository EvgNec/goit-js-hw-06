const technologies = ["HTML1", "CSS1", "JavaScript1", "React1", "Node1"];
const listEL = document.createElement("ul");


// for (const technology of technologies) {
//     const liEl = document.createElement("li");
//     liEl.textContent = technology;
//     listEL.appendChild(liEl);
// }
// document.body.appendChild(listEL);

for (const technology of technologies) { 
    const liEl = document.createElement("li");
    const text = document.createTextNode(technology);
    liEl.appendChild(text);   
    listEL.appendChild(liEl);
}
document.body.appendChild(listEL);

