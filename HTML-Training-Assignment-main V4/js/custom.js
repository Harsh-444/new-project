const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const layout = document.querySelector(".layout");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    layout.classList.toggle("sidebar-hidden");
});


// document.addEventListener('DOMContentLoaded', () => {
//     const menuBtn = document.getElementById('menu-btn');
//     const content = document.querySelector('.contents');

//     menuBtn.addEventListener('click', () => {
//         sidebar.classList.toggle('collapsed');
//         content.classList.toggle('collapsed'); 
//     });
// });

// Initialization for ES Users
import { Tab, initMDB } from "mdb-ui-kit";

initMDB({ Tab });