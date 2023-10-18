
var timeDisplayEl = $('#time-display');
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


$('.saveBtn').on('click', function () {
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
  setTimeout(function () {
    $('.btn').removeClass('show');
  }, 5000);
});

//create a var for current hour
var currentHour = dayjs().hour()

// loop over time blocks
$('.time-block').each(function () {
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

  var savedText = localStorage.getItem($(this).attr('id'))
  if (savedText) {
    $(this).children(".description").val(savedText)
  }
});


displayTime();
setInterval(displayTime, 1000);