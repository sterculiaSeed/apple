<?php
include('mysql.php');
// 获取购物车中所有景点的id  1,2,3,4
$name = $_GET["name"];
$res = mysqli_query($link, "select * from scenics where name in($name)");
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


/* 
    sql 语句中的where条件
    select * from user where name in('leon','leo','jack','tom');
        查询到user表中名字是'leon','leo','jack','tom'中的所有数据
*/