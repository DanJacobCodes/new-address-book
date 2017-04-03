function Contact(first, last, street, state) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("#new-street").val();
    var inputtedState = $("#new-state").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedState);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".state").text(newContact.state);
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-state").val("");
  });
});
