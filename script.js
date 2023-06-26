let button = document.getElementsByTagName('input')[0];
button.addEventListener('click',func);

function func() {
	let selectmainelem=document.getElementById('colorSelect');
	let selectedelem = selectmainelem.options[selectmainelem.selectedIndex];
	console.log(selectedelem);
   selectmainelem.removeChild(selectedelem);
}