function clearContents(element) {
  element.value = '';
}
var remove_element = document.getElementById("remove_calss");
if(navigator.userAgent.indexOf("Firefox") != -1) {
         remove_element.className = "footer_body_firfox";
}

