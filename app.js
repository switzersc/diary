document.addEventListener('DOMContentLoaded', function() {
  registerEvents()
})

function postEvent() {
  // send event data to Cal API
}

function registerEvents() {
  var saveButton = document.querySelector('[data-event="saveEvent"]')
  saveButton.addEventListener('click', function() {
    console.log('clicked')
  })
}
