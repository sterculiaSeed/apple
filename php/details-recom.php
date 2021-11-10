<?php
// include './mysql.php';
$iss = $_GET['iss'];

// 连接数据库文件
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'apple');

// 判断是否连接成功
if (!$link) {
    echo "连接数据库失败";
    die(); // 结束php代码的执行
}


$sql = "SELECT * FROM `scenics` WHERE `isshowindex` = $iss ";

$res = mysqli_query($link, $sql);

$arr = [];
while ($row = mysqli_fetch_assoc($res)) {
    $arr[] = $row;
}
echo json_encode([
    "meta" => [
        "status" => 1,
        "msg" => "数据获取成功"
    ],
    "data" => $arr
]);
// echo $arr;
