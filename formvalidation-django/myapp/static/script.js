
// form validation
function submitClick() {

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone = /^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                            // Javascript reGex for Name validation
    var regUser = /^[a-zA-Z\-]+$/;
    var letters = /^[A-Za-z]+$/;                                      //string only


    // username validation
    var user = document.getElementById('uname').value;

    if (user == "") {
        document.getElementById('uerror').innerHTML = 'This field canot be empty'
        return false;

    } else if (!regUser.test(user)) {
        document.getElementById('uerror').innerHTML = 'Enter a valid username'
        return false;
    } else {
        document.getElementById('uerror').innerHTML = ""

    }


    // firstname validation
    var fname = document.getElementById('fname').value

    if (fname == "") {
        document.getElementById('ferror').innerHTML = 'This field canot be empty'
        return false
    } else if (regName.test(fname)) {
        document.getElementById('ferror').innerHTML = 'Enter a valid First Name'
        return false
    } else {
        document.getElementById('ferror').innerHTML = ""

    }


    // second name validation
    var sname = document.getElementById('lname').value

    if (sname == "") {
        document.getElementById('lerror').innerHTML = 'This field canot be empty'
        return false
    } else if (regName.test(sname)) {
        document.getElementById('lerror').innerHTML = 'Enter a valid second Name'
        return false
    } else {
        document.getElementById('lerror').innerHTML = ""

    }


    // email validation
    var email = document.getElementById('email').value

    if (email == "") {
        document.getElementById('mailerror').innerHTML = ' field canot be empty'
        return false
    }
    else if (!regEmail.test(email)) {
        document.getElementById('mailerror').innerHTML = 'Enter a Valid Email'
        return false
    }
    else {
        document.getElementById('mailerror').innerHTML = ""

    }

    //  address validation
    var addresses = document.getElementById('address').value;

    if (addresses == "") {
        document.getElementById('aderror').innerHTML = 'Enter your address'
        return false
    } else {
        document.getElementById('aderror').innerHTML = ""

    }




    // place validation
    var placeData = document.getElementById('place-data').value

    if (placeData == "") {
        document.getElementById('place-error').innerHTML = 'This field canot be empty'
        return false
    } else if (!placeData.match(letters)) {
        document.getElementById('place-error').innerHTML = 'Enter a valid place'
        return false
    } else {
        document.getElementById('place-error').innerHTML = ""
    }


    // phone validation
    var phone = document.getElementById('phone').value
    if (phone == "") {
        document.getElementById('perror').innerHTML = 'This field cannot be empty'
        return false
    } else if (!regPhone.test(phone)) {
        document.getElementById('perror').innerHTML = 'Enter valid phone number'
        return false
    } else {
        document.getElementById('perror').innerHTML = ''
    }


    // radiobutton
    if (document.getElementById('male').checked == false && document.getElementById('female').checked == false) {
        document.getElementById('gerror').innerHTML = 'Select an option'
        return false
    } else {
        document.getElementById('gerror').innerHTML = ''
    }



    //password validation
    var password = document.getElementById('password').value
    var rePassword = document.getElementById('re-password').value

    if (password == "") {
        document.getElementById('paserror').innerHTML = 'this field is not to be empty'
        return false
    } else {
        document.getElementById('paserror').innerHTML = ''
    }
    // password length checking
    if (password.length < 6) {
        document.getElementById('paserror').innerHTML = "minimum 6 characters required"
        return false
    } else {
        document.getElementById('paserror').innerHTML = ""
    }

    if (password.length > 12) {
        document.getElementById('paserror').innerHTML = "maximum length 12 character "
        return false
    } else {
        document.getElementById('paserror').innerHTML = ""
    }


    // password confirmation
    if (rePassword == "") {
        document.getElementById('rperror').innerHTML = 'Re enter your password'
        return false
    } else if (password != rePassword) {
        document.getElementById('rperror').innerHTML = "Password doesn't match"
        return false
    } else {
        document.getElementById('rperror').innerHTML = ''
    }

    //checkbox validation
    if (document.getElementById('checkbox').checked == false) {
        document.getElementById('checkerror').innerHTML = 'agree terms and conditions'
        return false
    } else {
        document.getElementById('checkerror').innerHTML = ''

    }

}
