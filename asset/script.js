// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#time-display');
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


  // TODO: Add a listener for click events on the save button.

  $('.saveBtn').on('click', function() {
    // get nearby values
    var value = $(this)
      .siblings('.description')
      .val();
    var time = $(this)
      .parent()
      .attr('id');
    // save in localStorage
    localStorage.setItem(time, value);
    // Show notification that item was saved to localStorage by adding class 'show'
    $('.btn').addClass('show');
    // Timeout to remove 'show' class after 5 seconds
    setTimeout(function() {
      $('.btn').removeClass('show');
    }, 5000);
  });
 
  
  // This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  //create a var for current hour
   var currentHour = dayjs().hour()
 
  // loop over time blocks
    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );
      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  


  // // TODO: Add code to get any user input that was saved in localStorage and set
  // // the values of the corresponding textarea elements. HINT: How can the id
  // // attribute of each time-block be used to do this?
 
  

displayTime();
setInterval(displayTime, 1000);