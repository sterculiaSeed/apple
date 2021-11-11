<?php
include './mysql.php';
// 接受模糊查询的关键字
$keyword = $_GET['keyword'];

$sql = "SELECT * FROM `scenics` WHERE `name` like '%$keyword%'";

$res = mysqli_query($link,$sql);
$arr = [];

while($row=mysqli_fetch_assoc($res)){
  array_push($arr,$row);
}
echo json_encode([
  'message'=>[
    'status'=>0,
    'msg'=>"获取成功"
  ],
  'data'=>$arr
]);