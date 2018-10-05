function getElementsWithAttribute(attr)
{
	var elementsWithAttribute = [];
	var elements = document.body.getElementsByTagName('*');
	for (var i = 0; i < elements.length; i++)
	{
		if (elements[i].getAttribute(attr))
		{
			elementsWithAttribute.push(elements[i]);
		}
	}
	return elementsWithAttribute;
}

function addCustomOriginalDisplayAttribute ()
{
	var elements = document.body.getElementsByTagName('*');
	for (var i = 0; i < elements.length; i++)
	{
		elements[i].setAttribute('data-original-display-attribute-value', elements[i].style.display);
	}

}

function showHideVersion() {
	var elements = getElementsWithAttribute('data-mc-conditions');
	var e = document.getElementById('version-select');
	var selectedVersion = e.options[e.selectedIndex].value;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].getAttribute('data-mc-conditions').indexOf(selectedVersion) > -1 ) {
			if (elements[i].getAttribute('data-original-display-attribute-value') != '') {
				elements[i].style.display = elements[i].getAttribute('data-original-display-attribute-value')
				}
			else{
				elements[i].style.display = 'block';
			}
		}
		else {
			elements[i].style.display = 'none';
		}
	}
}

window.onload=addCustomOriginalDisplayAttribute()
window.onload=showHideVersion()