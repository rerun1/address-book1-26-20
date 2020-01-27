// Business logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


AddressBook.prototype.findContact = function(id) {
  for (var i=0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i < this.contacts.length; i ++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
      delete this.contacts[i];
      return true;
      }
    }
  };
  return false;
}
AddressBook.prototype.updateFirstNameContact = function(id,newFirstName) {
  for (var i=0; i < this.contacts.length; i ++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id){
      this.contacts[i].firstName = newFirstName;
      return true;
      }
    }
  };
  return false;
}
// Business logic for Contacts
function Contact (firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

// User logic
var addressBook = new AddressBook();

var resetForm = function(){
  var inputFirstName = $("input#contactFirstName").val("");
  var inputLastName = $("input#contactLastName").val("");
  var inputPhone = $("input#contactPhone").val("");
}

function displayContactDetails(addressBookToDisplay){
  var contactsList = $("ul#contactList");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact){
    htmlForContactInfo += "<li id=" + contact.id + ">"+contact.firstName+" "+contact.lastName+"<br>"+contact.phoneNumber+"</li>";
  });
  contactsList.html(htmlForContactInfo);
}

$(document).ready(function(){
    $("form#addContact").submit(function(event){
      event.preventDefault();
      var inputFirstName = $("input#contactFirstName").val();
      var inputLastName = $("input#contactLastName").val();
      var inputPhone = $("input#contactPhone").val();

      var contact = new Contact(inputFirstName,inputLastName,inputPhone);

      addressBook.addContact(contact);

      console.log(addressBook);

      displayContactDetails(addressBook);


      resetForm();


    });
});
