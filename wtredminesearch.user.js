// ==UserScript==
// @name         Filtro redmine para Wellness Telecom.
// @namespace    jQuerySearcherForWTRedmine
// @include      https://redmine.wtelecom.es/redmine/time_tracking
// @author       Juan Carlos Delgado -- jcdelgado@wtelecom.es
// @description  Este script añade un campo para filtrar proyectos por nombre, cliente u horas imputadas.
// ==/UserScript==

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);

	
    var script = document.createElement("script");
    textContent = "jQuery.expr[':'].contains = function(a, i, m) {  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;}; jQuery('#searchbyjcdelgado').keyup(function(){ jQuery('tr.odd:not(contains(\"'+this.value+'\")),tr.even:not(contains(\"'+this.value+'\"))').hide(); for (x=0;x < this.value.split(\",\").length; x++) {  jQuery('tr:contains(\"'+this.value.split(\",\")[x]+'\")').show();  } }); ";
    script.textContent = textContent;
    document.body.appendChild(script);												

  }, false);
  document.body.appendChild(script);
}



function main() {
  	asd = document.createElement("div");
  	asd.setAttribute("style","margin: 7px")
  	txt = document.createElement('span');
  	txt.textContent = "Filtro por nombres o clientes ";
	sear = document.createElement('input');
	sear.id ="searchbyjcdelgado";
	sear.type = 'text';
	sear.placeholder = 'Proyectos separados por coma';
  sear.setAttribute("style", "width: 200px");
	asd.appendChild(txt);
	asd.appendChild(sear);
	jQ('div.dataTables_wrapper').prepend(asd)

}

addJQuery(main);



