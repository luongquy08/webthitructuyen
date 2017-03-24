$(function() {

    //Tạo phương thức validate số điện thoại

    function validatePhone(value, element, param) {

        if (/^[0-9]{10}$/.test(value)) {

            return true;

        } else {

            return false;

        }

    }

    jQuery.validator.addMethod('checkPhone', validatePhone, 'Please enter a valid phone number');

    //Tạo phương thức validate email

    function validateEmail(value, element, param) {

        if (/^[^@\s]+@hocweb123.com$/i.test(value)) {

            return true;

        } else {

            return false;

        }

    }

    jQuery.validator.addMethod('checkEmail', validateEmail, 'Please enter a valid email address');

    //Tạo phương thức validate password

    function validatePassword(value, element, param) {

        if (/^(?=.*\d)[0-9a-zA-Z]{8,}$/.test(value)) {

            return true;

        } else {

            return false;

        }

    }

    jQuery.validator.addMethod('checkPassword', validatePassword, 'Please enter a valid password');

    $("#register-form").validate({

        rules: {

            fullname-register: {

                required: true, //Yêu cầu username không được để trống

                minlength: 5, //Yêu cầu username có ít nhất 6 ký tự

                maxlength: 15 //Yêu cầu username có nhiều nhất 20 ký tự

            },

            email-register: {

                required: true, //Yêu cầu email không được để trống

                email: true, //Email nhập vào phải đúng định dạng email

                checkEmail: true

            },

            password-register: {

                required: true,

                checkPassword: true, //Gọi phương thức validate mật khẩu

                minlength: 6,

                maxlength: 12

            },

            confirmPassword: {

                checkPassword: true, //Gọi phương thức validate mật khẩu

                required: true,

                minlength: 6,

                maxlength: 12,

                equalTo: "#password"

            },

            phoneNumber: {

                checkPhone: true //Gọi phương thức validate số điện thoại

            },

            address: {

                required: true, //Yêu cầu địa chỉ không được để trống

                minlength: 5, //Yêu cầu nhập vào địa chỉ gồm ít nhất 5 ký tự

                maxlength: 20 //Yêu cầu nhập vào địa chỉ gồm tối đa 15 ký tự

            }

        },

        messages: {

            fullname-register: {

                required: "Vui lòng nhập username!", //Thông báo khi trường username bị để trống

                minlength: "Vui lòng nhập ít nhất 5 ký tự!", //Thông báo khi trường username bị để trống

                maxlength: "Vui lòng nhập tối đa 15 ký tự!" //Thông báo khi trường username bị để trống

            },

            email-register: {

                required: "Vui lòng nhập email!", //Thông báo khi trường email bị để trống

                email: "Email của bạn không hợp lệ, vui lòng nhập đúng định dạng địa chỉ email!", //Thông báo khi trường email không hợp lệ

                checkEmail: "Vui lòng nhập email với định dạng example @hocweb123.com"

            },

            password-register: {

                required: "Mật khẩu không được để trống",

                minlength: "Mật khẩu phải có ít nhất 6 ký tự",

                maxlength: "Mật khẩu phải có tối đa 12 ký tự",

                checkPassword: "Mật khẩu phải bao gồm ít nhất 1 ký tự và 1 số"

            },

            confirmPassword: {

                required: "Mật khẩu xác nhận không được để trống",

                minlength: "Mật khẩu xác nhận phải có ít nhất 6 ký tự",

                maxlength: "Mật khẩu xác nhận phải có tối đa 12 ký tự",

                checkPassword: "Xác nhận mật khẩu phải bao gồm ít nhất 1 ký tự và 1 số",

                equalTo: "Mật khẩu xác nhận không khớp với mật khẩu ban đầu"

            },

            phoneNumber: {

                checkPhone: "Vui lòng nhập 10 chữ số cho số điện thoại"

            },

            address: {

                required: "Vui lòng nhập địa chỉ của bạn!", //Thông báo khi trường address bị để trống

                minlength: "Vui lòng nhập địa chỉ có ít nhất 5 ký tự", //Thông báo khi trường address ít hơn 5 ký tự

                maxlength: "Vui lòng nhập địa chỉ tối đa là 20 ký tự" //Thông báo khi trường address lớn hơn 15 ký tự

            }

        },

    });

});