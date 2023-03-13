
// Example1
// ==============================================
const technologies = ["HTML1", "CSS1", "JavaScript1", "React1", "Node1"];
// const listEL = document.createElement("ul");
// for (const technology of technologies) {
//     const liEl = document.createElement("li");
//     liEl.textContent = technology;
//     listEL.appendChild(liEl);
// }
// document.body.appendChild(listEL);

// for (const technology of technologies) {
//     const liEl = document.createElement("li");
//     const text = document.createTextNode(technology);
//     liEl.appendChild(text);
//     listEL.appendChild(liEl);
// }
// document.body.appendChild(listEL);

// =================== map ===========================
// const markup = `<ul>${technologies.map(technology => `<li>${technology}<li>`).join("")}</ul>`
// document.body.insertAdjacentHTML("afterbegin", markup);

 // =================== reduce ===========================
// const markup = `<ul>${technologies.reduce(
//     (acc, technology) => (acc += `<li>${technology}</li>`), "")
//     }</ul>`

//     document.body.insertAdjacentHTML("afterbegin", markup);



