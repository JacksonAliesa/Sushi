// Make sure we wait to attach our handlers until the DOM is fully loaded.
//calls all onclicks that trigger the actions
$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      //the new sushi will be inserted in this section of the body when the add buttn is clicked
      var newSushi = {
        sushi_name: $("#addSushi").val().trim(),
        devoured: 0
       
    };
  
      // Send the POST request.
      $.ajax("/api/sushi", {
        type: "POST",
        data: newSushi
      }).then(
        function() {
          console.log("created new sushi roll");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $('.devouredSushi').on('click', function(event){
    
      var id = $(this).data("id");

      var updateDevour = {
       devoured: 1
      }
      $.ajax("/api/sushi/" + id, {
        type: "PUT", 
        data: updateDevour
      }).then(
        function() {
          console.log("sushi devoured", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })
  

    //this is the onclick function for the delete button
    $(".deleteBtn").on("click", function(event) {
      var id = $(this).data("id");
  
      console.log("delete button was clicked")
      // Send the DELETE request.
      $.ajax("/api/sushi/" + id, {
        type: "DELETE"
      
      }).then(
        function() {
          console.log("deleted sushi", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });