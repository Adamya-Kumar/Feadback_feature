document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var comment = document.getElementById("comment").value;

    // Here you can handle the submission, for now just logging the values
    console.log("Rating: ", rating);
    console.log("Comment: ", comment);
    var reaction = "";
    if (rating === 1) reaction = "🥲";
    if (rating === 2) reaction = "😒";
    if (rating === 3) reaction = "😏";
    if (rating === 4) reaction = "🙂";
    if (rating === 5) reaction = "😍";

    alert(
      "this is my " + rating + "comment: " + comment + "reaction: " + reaction
    );

    // You can send this data to the server using AJAX or other methods
    // For simplicity, I'm just logging it here
  });
