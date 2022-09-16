const contentBox = document.getElementById('content');


contentBox.appendChild(generateNav());

function generateNav() {
  const navElem = document.createElement("nav");
  navElem.classList.add('centerflex');

  const homeAnchor = document.createElement("a");
  homeAnchor.href = '#';
  homeAnchor.textContent = "Home";
  homeAnchor.onmouseup = function() {tes()};

  const menuAnchor = document.createElement("a");
  menuAnchor.href = '#';
  menuAnchor.textContent = "Menu";
  menuAnchor.onmouseup = function() {test()};
  

  const contactAnchor = document.createElement("a");
  contactAnchor.href = '#';
  contactAnchor.textContent = "Contact";

  navElem.appendChild(homeAnchor);
  navElem.appendChild(menuAnchor);
  navElem.appendChild(contactAnchor);

  return navElem;
}

function tes(){
    console.log('hello beeetch');
}

function test(){
    console.log('beeetch please');
}