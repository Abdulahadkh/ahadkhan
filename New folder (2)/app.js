function printDateTimeAndPosition(event) {
    let dateTime = new Date();
    let dateTimeText = 'Date: ' + dateTime.toDateString() + ' Time: ' + dateTime.toLocaleTimeString();
    document.getElementById('dateTime').textContent = dateTimeText;

    let positionText = 'Position: X = ' + event.clientX + ', Y = ' + event.clientY;
    document.getElementById('position').textContent = positionText;
}