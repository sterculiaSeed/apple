<?php
// 获取到城市的id
$cid = $_GET['cid'];
// 连接数据库文件
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'apple');

// 判断是否连接成功
if (!$link) {
  echo "连接数据库失败";
  die(); // 结束php代码的执行
}


$sql = "SELECT * FROM `area` WHERE `city_id`='$cid'";
// 执行sql
$res = mysqli_query($link, $sql);
// 解析结果
$arr = [];
while ($row = mysqli_fetch_assoc($res)) {
  array_push($arr, $row);
}

echo json_encode($arr);
