// import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"
// let testVar = [1, 2, 3];
// export function sendData(data) {
// 	const payload = {'testVar[]': data}
// 	return axios.post('', payload)
//   }

window.onload = function() {
	Particles.init({
	  selector: '.background',
	  connectParticles: true,
	  maxParticals: 100,
	  color: "#74992e"
	});
};

var questionModal = document.getElementById("questionModal");
var usageModal = document.getElementById("usageModal");

function openQuestionModal() {
	questionModal.style.display = "block";
	usageModal.style.display = "none";
}

function openUsageModal() {
	usageModal.style.display = "block";
	questionModal.style.display = "none";
}

function closeModal() {
	questionModal.style.display = "none";
	usageModal.style.display = "none";
}
  
window.onclick = function(event) {
	if (event.target == questionModal || event.target == usageModal) {
	  questionModal.style.display = "none";
	  usageModal.style.display = "none";
	}
}

function toggleDisplay(element, FLAG) {
	if (FLAG == 0){
		element.style.opacity = '0'
		element.style.height = '0';
		element.style.overflow = 'hidden';
	}

	else {
		element.style.opacity = '0'
		element.style.height = 0;
	}	
}

function updateInputContent() {
	var fieldValue = document.getElementById('file-upload').value
	var fieldValueModified = fieldValue.replace(/^.*\\/, "") + " Selected.";
	document.getElementById('inputContainer').innerHTML = fieldValueModified
	document.getElementById('inputActionContainer').style.display = 'block'
}

function restart() {
	location.reload()
}

function submit() {
	// document.getElementById('inputContainer').style.display = 'none'
	// document.getElementById('inputActionContainer').style.display = 'none'
	// document.getElementById('headerSubtitle').style.display = 'none'
	var inputCont = document.getElementById('inputContainer')
	toggleDisplay(inputCont, 0)
	var inputActionCont = document.getElementById('inputActionContainer')
	toggleDisplay(inputActionCont, 0)
	var header = document.getElementById('header')
	toggleDisplay(header, 0)
	document.getElementById('resultPanel').style.display = 'block'
	document.getElementById('resultActionContainer').style.display = 'block'
	document.getElementById('header').style.marginTop = '9%'
	// sendData(testVar)
}

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the parameters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

 function post(path, params, method='post') {
	const form = document.createElement('form');
	form.method = method;
	form.action = path;
  
	for (const key in params) {
	  if (params.hasOwnProperty(key)) {
		const hiddenField = document.createElement('input');
		hiddenField.type = 'hidden';
		hiddenField.name = key;
		hiddenField.value = params[key];
  
		form.appendChild(hiddenField);
	  }
	}
  
	document.body.appendChild(form);
	form.submit();
  }
