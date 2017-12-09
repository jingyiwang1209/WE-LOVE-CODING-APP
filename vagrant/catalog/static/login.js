var Login = (function() {
    function toggle() {
        dropdownContent.toggle();
    }
    function init() {
        dropdownContent = $(".dropdown-content");
        dropDown = $(".dropdown");
        dropDown.on("click", toggle);
    }

    return {
        init: init
    };
    var dropdownContent, dropDown;
})();

$(document).ready(Login.init);