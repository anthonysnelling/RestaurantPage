const contentBox = document.getElementById("content");

contentBox.appendChild(generateNav());
contentBox.appendChild(generateHome());

function generateNav() {
  const navElem = document.createElement("nav");
  navElem.classList.add("centerflex");

  const homeAnchor = document.createElement("a");
  homeAnchor.href = "#";
  homeAnchor.textContent = "Home";
  homeAnchor.onmouseup = function () {
    createHomePage();
  };

  const menuAnchor = document.createElement("a");
  menuAnchor.href = "#";
  menuAnchor.textContent = "Menu";
  menuAnchor.onmouseup = function () {
    createMenuPage();
  };

  const contactAnchor = document.createElement("a");
  contactAnchor.href = "#";
  contactAnchor.textContent = "Contact";
  contactAnchor.onmouseup = function () {
    createContactPage();
  };

  navElem.appendChild(homeAnchor);
  navElem.appendChild(menuAnchor);
  navElem.appendChild(contactAnchor);

  return navElem;
}

function generateHome() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("centerflex");

  const mainFlexBox = document.createElement("main");
  mainFlexBox.id = "flexbx";
  mainFlexBox.classList.add("textAlignment");
  mainDiv.appendChild(mainFlexBox);

  const flexBox2 = document.createElement("div");
  flexBox2.classList.add("centerflex");
  mainFlexBox.appendChild(flexBox2);

  const contentSizer = document.createElement("div");
  contentSizer.id = "innerContentSizer";
  flexBox2.appendChild(contentSizer);

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Tony's Pizza and Pasta";
  contentSizer.appendChild(mainHeader);

  const restaurantBlurb = document.createElement("p");
  restaurantBlurb.textContent =
    "Tony's Pizza and Pasta is some of the best food in town! the " +
    "pizza is hande made and stone oven baked and the noodles are " +
    "made in house and by hand! The sauces perform a medley for the " +
    "senses and all the ingredients are sourced locally and fresh! so " +
    "come on down to the best place in town and grab a slice or slurp " +
    "some noodles!";
  contentSizer.appendChild(restaurantBlurb);

  const hours = document.createElement("div");
  contentSizer.appendChild(hours);
  const hourHead = document.createElement("h2");
  hourHead.textContent = "Hours";
  hours.appendChild(hourHead);

  const sunday = document.createElement("p");
  sunday.textContent = "Sunday: 8am-8pm";
  hours.appendChild(sunday);
  const monday = document.createElement("p");
  monday.textContent = "Monday: 8am-10pm";
  hours.appendChild(monday);
  const tuesday = document.createElement("p");
  tuesday.textContent = "Tuesday: 8am-10pm";
  hours.appendChild(tuesday);
  const wednesday = document.createElement("p");
  wednesday.textContent = "Wednesday: 8am-10pm";
  hours.appendChild(wednesday);
  const thursday = document.createElement("p");
  thursday.textContent = "Thursday: 8am-10pm";
  hours.appendChild(thursday);
  const friday = document.createElement("p");
  friday.textContent = "Friday: 8am-12pm";
  hours.appendChild(friday);
  const saturday = document.createElement("p");
  saturday.textContent = "Saturday: 8am-12pm";
  hours.appendChild(saturday);

  const locationDiv = document.createElement("div");
  contentSizer.appendChild(locationDiv);
  const locationH2 = document.createElement("h2");
  locationH2.textContent = "Location";
  locationDiv.appendChild(locationH2);
  const address = document.createElement("p");
  address.textContent = "123 PizzaTown, USA";
  locationDiv.appendChild(address);

  return mainDiv;
}

function generateMenu() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("centerflex");

  const mainFlexBox = document.createElement("main");
  mainFlexBox.id = "flexbx";
  mainFlexBox.classList.add("textAlignment");
  mainDiv.appendChild(mainFlexBox);

  const flexBox2 = document.createElement("div");
  flexBox2.classList.add("centerflex");
  mainFlexBox.appendChild(flexBox2);

  const contentSizer = document.createElement("div");
  contentSizer.id = "innerContentSizer";
  flexBox2.appendChild(contentSizer);

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Tony's Pizza and Pasta";
  contentSizer.appendChild(mainHeader);

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";
  contentSizer.appendChild(menuHeader);

  const pizzaDiv = document.createElement("div");
  contentSizer.appendChild(pizzaDiv);
  const pizzaHeader = document.createElement("h2");
  pizzaHeader.textContent = "Pizza";
  pizzaDiv.appendChild(pizzaHeader);
  const pizzaDescription = document.createElement("p");
  pizzaDescription.innerHTML =
    "A pizza made to your order in 6, 8, 12, or 16 inches! " +
    "ingredients include: <br/>" +
    "Pepperoni, Pineapple, Olives, Sausage, Red Onion, Onion, " +
    "Ham, Red Peppers, <br/>" +
    "or Green Peppers.";
  pizzaDiv.appendChild(pizzaDescription);

  const pastaDiv = document.createElement("div");
  contentSizer.appendChild(pastaDiv);
  const pastaHeader = document.createElement("h2");
  pastaHeader.innerText = "Pasta";
  pastaDiv.appendChild(pastaHeader);
  const pastaDescription = document.createElement("p");
  pastaDescription.innerHTML =
    "Delicious pasta just for you! choices of Spaghetti, Linguini, Ravioli, <br />" +
    "or Tortellini with Tomato, White, or Cheese for a sauce!";
  pastaDiv.appendChild(pastaDescription);

  return mainDiv;
}

function generateContact() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("centerflex");

  const mainFlexBox = document.createElement("main");
  mainFlexBox.id = "flexbx";
  mainFlexBox.classList.add("textAlignment");
  mainDiv.appendChild(mainFlexBox);

  const flexBox2 = document.createElement("div");
  flexBox2.classList.add("centerflex");
  mainFlexBox.appendChild(flexBox2);

  const contentSizer = document.createElement("div");
  contentSizer.id = "innerContentSizer";
  flexBox2.appendChild(contentSizer);

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Tony's Pizza and Pasta";
  contentSizer.appendChild(mainHeader);

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact Us";
  contentSizer.appendChild(contactHeader);

  const phoneNum = document.createElement("p");
  phoneNum.textContent = "Phone: 555-123-234";
  contentSizer.appendChild(phoneNum);

  const email = document.createElement("p");
  email.textContent = "E-mail: Pizza@Pasta.com";
  contentSizer.appendChild(email);

  return mainDiv;
}

function createHomePage() {
  contentBox.replaceChildren(generateNav());
  contentBox.appendChild(generateHome());
}

function createMenuPage() {
  contentBox.replaceChildren(generateNav());
  contentBox.appendChild(generateMenu());
}

function createContactPage() {
  contentBox.replaceChildren(generateNav());
  contentBox.appendChild(generateContact());
}
