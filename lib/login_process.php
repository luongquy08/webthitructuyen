<?php
//Xử lí đăng nhập
$errlogin = "";
//  Kiểm tra nếu người dùng đã ân nút đăng nhập thì mới xử lý
	if (isset($_POST["btn-login"])) {
		// lấy thông tin người dùng
		$email = $_POST["email-login"];
		$password = $_POST["password-login"];
		//làm sạch thông tin, xóa bỏ các tag html, ký tự đặc biệt 
		//mà người dùng cố tình thêm vào để tấn công theo phương thức sql injection
		if ($email == "" || $password =="") {
			$errlogin = "<p style='color: red'>Tên đăng nhập hoặc mật khẩu bạn không được để trống!</p>";
		}else{
			$sql = "select * from users where email = '{$email}' and password = '{$password}' ";
			$query = $conn->query($sql);
			$num_rows = $query->num_rows;
            echo $num_rows;
			if ($num_rows==0) {
				$errlogin = "<p style='color: red'>Tên đăng nhập hoặc mật khẩu không đúng !</p>";
			}else{
                $row = $query->fetch_object();
                if($row->role == 2){
                    // Nếu là tài khoản admin thì tạo session riêng cho admin
                    $_SESSION['email-admin'] = $email;
                    header('Location: admin/index.php');
                }else{
                    //Nếu là người dùng bình thường thì tiến hành lưu tên đăng nhập vào session để tiện xử lý sau này
                    $_SESSION['email'] = $email;
                    header('Location: 5.php');
                }
				
			}
		}
	}

?>