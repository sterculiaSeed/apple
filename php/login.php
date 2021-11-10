<?php
/*
登录表中判断用户名和密码
*/
//获取数据
$email = $_POST['email'];
$pas = $_POST['pas'];

//连接数据库
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'apple');

// 判断是否连接成功
if (!$link) {
    echo "连接数据库失败";
    die(); // 结束php代码的执行
}

// $username = 'liulm';
// $password = '123456';


//执行SQL语句 查询数据库中是否有$usrname这个用户名
$sql = "SELECT * FROM `server` WHERE `email` = '$email' ";

//判断用户名是否存在 存在会返回一个资源集对象
$res = mysqli_query($link, $sql);

//解析获取到的结果集
$row = mysqli_fetch_assoc($res);

//如果取到了结果 则为true  进行取反 
if (!$row) {
    $arr = ['code' => 0, 'msg' => '用户名不存在'];
} else {
    if ($row['pas'] == $pas) {
        $arr = ['code' => 1, 'msg' => '登录成功'];
    } else {
        $arr = ['code' => 2, 'msg' => '你输入的 Apple ID 或密码不正确。请在下方重新输入密码。'];
    }
}

//返回结果 转换为json格式的数据
echo json_encode($arr);
