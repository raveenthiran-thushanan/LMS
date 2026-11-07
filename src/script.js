var searchInput = document.getElementById("searchInput");

var bookList = document.getElementById("bookList");

searchInput.addEventListener("input", function () {

    var searchValue = searchInput.value.toLowerCase();

    var books = bookList.getElementsByTagName("li");

    for (var i = 0; i < books.length; i++) {

        var bookName = books[i].textContent.toLowerCase();

        if (bookName.includes(searchValue)) {
            books[i].style.display = "";
        } else {
            books[i].style.display = "none";
        }

    }

});