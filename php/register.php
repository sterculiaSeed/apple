<?php

// 注册表中增加数据


// 获取数据
$username = $_GET['username'];
$surname = $_GET['surname'];
$data = $_GET['data'];
$email = $_GET['email'];
$pas = $_GET['pas'];
$phnum = $_GET['phnum'];


//连接数据库
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'apple');

//数据库操作
$sql = "INSERT INTO `server` (`username`,`surname`,`data`,`email`,`pas`,`phnum`) VALUE ('$username','$surname','$data','$email','$pas','$phnum')";

//执行sql语句
$res = mysqli_query($link, $sql);

if ($res) {
    $arr = ['code' => 1, 'msg' => '注册成功'];
} else {
    $arr = ['code' => 0, 'msg' => '注册失败'];
}

echo json_encode($arr);
