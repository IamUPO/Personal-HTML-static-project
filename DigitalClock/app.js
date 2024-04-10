// Function to update the clock display and date display
function updateClockAndDate() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    const month = now.toLocaleString('en-US', { month: 'long' });
    const date = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('date').textContent = date;
    document.getElementById('year').textContent = year;
}

// Event listeners for navigation buttons
document.getElementById('navleft').addEventListener('click', scrollCalendarLeft);
document.getElementById('navright').addEventListener('click', scrollCalendarRight);

// Function to generate the calendar for the current year
function generateCalendar() {
    const calendarWidget = document.querySelector('.calendar-widget');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    let calendarHTML = '<div class="calendar">';
    for (let month = 0; month < 12; month++) {
        calendarHTML += `<div class="month">
                                                <h3>${months[month]}</h3>
                                                <div class="days">`;
        const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentYear, month, 1).getDay();

        // Add days of the week
        for (let i = 0; i < daysOfWeek.length; i++) {
            calendarHTML += `<span>${daysOfWeek[i]}</span>`;
        }

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarHTML += `<span></span>`;
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const isCurrentDay = day === currentDate.getDate() && month === currentDate.getMonth();
            calendarHTML += `<span class="${isCurrentDay ? 'current-day' : ''}">${day}</span>`;
        }
        calendarHTML += `</div></div>`;
    }
    calendarHTML += '</div>';
    calendarWidget.innerHTML = calendarHTML;
}

// Function to scroll the calendar to the left
function scrollCalendarLeft() {
    const calendar = document.querySelector('.calendar');
    calendar.scroll({
        left: calendar.scrollLeft - 630,
        behavior: 'smooth'
    });
}

// Function to scroll the calendar to the right
function scrollCalendarRight() {
    const calendar = document.querySelector('.calendar');
    calendar.scroll({
        left: calendar.scrollLeft + 630,
        behavior: 'smooth'
    });
}

// Update clock and date every second
setInterval(updateClockAndDate, 1000);

// Generate calendar on page load
generateCalendar();


// // JavaScript for Settings Panel
document.getElementById('time-format').addEventListener('change', function() {
    var timeFormat = this.value;
    // Update the clock display based on the selected time format
    updateTimeFormat(timeFormat);
  });
  
  document.getElementById('date-format').addEventListener('change', function() {
    var dateFormat = this.value;
    // Update the date display based on the selected date format
    updateDateFormat(dateFormat);
  });
  
  function updateTimeFormat(format) {
    // Implement the logic to update the clock display to 12-hour or 24-hour format
  }
  
  function updateDateFormat(format) {
    // Implement the logic to update the date display to the selected date format
  }
  
