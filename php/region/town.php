<?php
// 获取到城区的id
$aid = $_GET['aid'];
// 连接数据库文件
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'apple');

// 判断是否连接成功
if (!$link) {
  echo "连接数据库失败";
  die(); // 结束php代码的执行
}


$sql = "SELECT * FROM `town` WHERE `area_id`='$aid'";
// 执行sql
$res = mysqli_query($link, $sql);
// 解析结果
$arr = [];
while ($row = mysqli_fetch_assoc($res)) {
  array_push($arr, $row);
}

echo json_encode($arr);
