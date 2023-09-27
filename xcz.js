/*

西窗烛：https://apps.apple.com/app/id912139104

[rewrite_local]
^https?:\/\/lchttpapi\.xczim\.com\/1.1\/users url script-response-body https://raw.githubusercontent.com/amhanpp/stucool/main/xcz.js

[MITM]
hostname = lchttpapi.xczim.com

*/
var guding = JSON.parse($response.body);
guding.username = "别境花时圆";
guding.membership = true;
guding.lifetimeMembership = true;
guding.avatar.url = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Done\.png";
$done({ body: JSON.stringify(guding) });
