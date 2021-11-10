<?php
$email = $_GET['email'];

//测试数据库是否可用
// $email = '2665328537@qq.com';

//连接数据库
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'apple');

//数据库语句
$sql = "SELECT * FROM `server` WHERE `email`='$email' ";

//执行数据库语句
$res = mysqli_query($link, $sql);

//解析结果集
$row = mysqli_fetch_assoc($res);
//判断
if ($row) {
    $arr = ['code' => 0, 'msg' => '当前用户名不可用'];
} else {
    $arr = ['code' => 1, 'msg' => '当前用户名可用'];
}

//返回结果集
echo json_encode($arr);
