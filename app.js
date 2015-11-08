var formData = {}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentUrl()
    .then(buildData)
  
  var saveButton = document.querySelector('[data-event="saveEvent"]')
  
  saveButton.addEventListener('click', function(e) {
    var data = formatData(formData)
    postData(data)
  })
})

function buildData(url) {
  formData.url = url
}

function formatData(obj) {
  var data = {
    title: document.getElementById('title').value,
    data: document.getElementById('date').value,
    time: document.getElementById('time').value,
    url: obj.url
  }
  return data
}

function postData(data) {
  console.log(data)
}

function getCurrentUrl() {
  var promise = new Promise(function(resolve, reject) {
    var queryInfo = {
      active: true,
      currentWindow: true
    }
    
    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0]
      var url = tab.url
      resolve(url)
    })
  })
  return promise
}

