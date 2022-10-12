var urlheader = 'img/'
var currentIndex = 0

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



$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});