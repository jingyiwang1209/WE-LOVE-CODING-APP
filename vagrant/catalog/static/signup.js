var Signup = (function() {
    function show() {
        modal.show();
    }

    function hide() {
        modal.hide();
    }

    function init() {
        modal = $(".modal");
        sendFeedback = $(".sendFeedback");
        login = $(".login");
        addNew = $(".addNew");
        login.on("click", show);
        modal.on("click", hide);
        addNew.on("click", show);
        sendFeedback.on("click", show);
    }

    return {
        init:init,
    };
    var modal, sendFeedback, login, addNew;
})();

$(document).ready(Signup.init);