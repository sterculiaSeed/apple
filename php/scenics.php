<?php
// include './mysql.php';
$pid = $_GET['pid'];
// 连接数据库文件
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'apple');

// 判断是否连接成功
if (!$link) {
  echo "连接数据库失败";
  die(); // 结束php代码的执行
}

$sql = "SELECT * FROM `scenics` WHERE `pid` = '$pid' ";

$res = mysqli_query($link, $sql);
$arr = [];

while ($row = mysqli_fetch_assoc($res)) {
  array_push($arr, $row);
}
echo json_encode([
  'message' => ['status' => 0, 'msg' => "获取成功"],
  'data' => $arr
]);
