// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "GF 3-Cheese Tomato Tart",
    "GF Cheat Lemon Pie",
    "Pineapple Cucumber Salad",
    "GF Honey Jalapeno Cornbread",
    "Chili Mac",
    "Over-Roasted Herb Chicken",
    "Carnitas",
    "Veggie Casserole",
    "Asian Meatballs",
    "Wild Rice Pilaf",
    "Mushroom Galette",
    "Snickers Apple Salad",
    "THE Cheesecake (GF)",
    "Parmensan Chopped Salad",
    "Corn Chips, Guac, and Salsa",
    "The Reg Pato Chips and Dip",
    "GF Maple Bourbon Cupcakes",
    "(A suprise, but fresh baked, I promise!!) Cookies..."
  ];
  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);

    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}!`;
    //Note for later - You’re using guest.innerText to access the name inside the li element. If you used guest without innerText, you’d grab the actual list element instead of the text.
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
// I'm just updating/ uploading this code unforked. There's something going on with my Git, the site won't let me fork any of the current projects I have. The Fork option is completely grayed out. :(
