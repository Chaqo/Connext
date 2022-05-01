// Created in App Lab

var fullname;
var address;
var phoneNum;
var productName = [];
var price = [];
var stock = [];
var productionCap = [];
var orderNum;
var quantity;
var customerAddress;
var orderID = [];

onEvent("signUp", "click", function( ) {
  fullname = getText("fullnameInput");
  address = getText("addressInput");
  phoneNum = getText("phoneNumInput");
  setScreen("homePage");
});

onEvent("addProduct", "click", function( ) {
  setScreen("productAddPage");
});

onEvent("ConfAddProduct", "click", function( ) {
  appendItem(productName, getText("productNameInput"));
  appendItem(price, getText("priceInput"));
  appendItem(stock, getText("stockInput"));
  appendItem(productionCap, getText("productionCapInput"));
  setScreen("productAddPage");
  // Also make it appear on the user's side
});

onEvent("openChat", "click", function( ) {
  setScreen("chatPage");
});

onEvent("chatSend", "click", function( ) {
  setText("messageInput", "");
});

if (orderNum >= 1) {
  setText("notifications", "You Have An Order!");
}

onEvent("orderBtn", "click", function( ) {
  setText("productNameOutput", productName[orderID]);
  setText("productQuantityOutput", quantity);
  setText("deliveryAdressOutput", customerAddress);
});

onEvent("finlit", "click", function( ) {
  setScreen("fitlit");
});