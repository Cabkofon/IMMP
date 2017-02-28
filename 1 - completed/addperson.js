function addPerson(form) {
    var name = form.nameOfPerson.value;
  var list = document.getElementById('PersonList');
  list.innerHTML += "<p>" + name + "</p>";
}