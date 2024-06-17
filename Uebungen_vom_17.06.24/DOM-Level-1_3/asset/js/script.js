const divBox = document.querySelector("div");
let applicationNum = 1;

divBox.innerHTML =
    "<figure><img src='https://images.unsplash.com/photo-1718040506078-5a7b90746511?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D' alt='House' />";
divBox.innerHTML += `<figcaption>Abbildung. ${applicationNum} </figcaption>`;
divBox.innerHTML +=
    "<figure><img src='https://images.unsplash.com/photo-1718085201099-66f5f34cbc8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8' alt='persons' />";
divBox.innerHTML += `<figcaption>Abbildung. ${
    applicationNum + 1
} </figcaption>`;
divBox.innerHTML +=
    "<figure><img src='https://plus.unsplash.com/premium_photo-1718479227189-d5f36431b2a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D' alt='breakfast' />";
divBox.innerHTML += `<figcaption>Abbildung. ${
    applicationNum + 2
} </figcaption>`;
divBox.innerHTML += "</figure>";
