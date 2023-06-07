function isEmpty(array) {
    return Array.isArray(array) && (array.length == 0 || array.every(isEmpty));
  }

function print_test(n) {
    document.getElementById("test").innerHTML += n +"<br>";
}