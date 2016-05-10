(function() {
	'use strict';

	var foo = function() {
		var tabsWrap = document.getElementById('tabs'),
			tabs = document.querySelectorAll('*[data-rel]'),
			tabsParent = [0,0,0,0],
			tabsContent = document.querySelectorAll('*[data-id]'),
			i;

		for( i=0; i<tabs.length; i++){
			tabsParent[i] = tabs[i].parentElement;
		}

		tabsWrap.addEventListener( "click" , function(event) {
			var elem = event.target,
				elemAttr = elem.dataset.rel;

			if(elem.nodeName.toLowerCase() == 'li'){
				return false;
			}

			clearActive(tabsContent);
			clearActive(tabsParent);

			for( i=0; i<tabs.length; i++){	
				if( tabs[i].dataset.rel === elemAttr )	{		
					tabs[i].parentElement.classList.add('active');
					tabsContent[i].classList.add('active');	
				}	
			}
		});
	};

	var clearActive = function(array){
		for (var i=0; i<array.length; i++){
			array[i].classList.remove('active');
		}
	};

	window.onload = foo; 
})();

