$(document).ready(function () {
    $("input").click(function () {
        $(this).prev().css({ "display": "block", "margin-bottom": "0rem" });
    });

    $("input").blur(function () {
        if ($(this).val().length <= 0) {
            $(this).prev().css({ "display": "none" });   
        }
    });

    $(".vertical-dots").click(function (e) {
        console.log("click");
        e.stopPropagation();
        $(this).next(".notification").css({ "display": "block", "margin-bottom": "0rem" });
    });

    $(document).on('click', function (e) {
        $(".notification").hide();
    });

    // keypress event
    $('input[type="text"]').keypress(function () {
        $("#email-err").show();
    });
    $('input[type="password"]').keyup(function () {
        console.log($(this).val().length);
        if (($(this).val().length) == 0) {
            $("#password-err").show();
        } else {
            $("#password-err").hide();
        }
    });

    // for email validation
    // $("#sign-inBtn").click(function (e) {
    //     var isEmail = $("#email").val();

    //     console.log("enside email check");
    //     // check empty email
    //     if ($.trim(isEmail).length == 0) {
    //         $(this).parent().siblings(".email-data").find("#email-err").css({ "display": "block" });
    //         e.preventDefault();
    //     }
    //     if (validateEmail(isEmail)) {
    //         $(this).parent().siblings(".email-data").find("#email-err").css({ "display": "none" });
    //     }
    //     else {
    //         $(this).parent().siblings(".email-data").find("#email-err").css({ "display": "block" });
    //     }   

    // });
    // function validateEmail(isEmail) {
    //     var filter = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    //     if (filter.test(isEmail)) {
    //         console.log(filter.test(isEmail)+"------------------------------------------");
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }


});

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         document.form1.text1.focus();
//         return true;
//     }
//     else {
//         document.getElementById('email-err').style.display = "block";
//         document.form1.text1.focus();
//         return false;
//     }

// }
