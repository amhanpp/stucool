/*******************************

脚本名称: Wake+解锁课程
下载地址：https://is.gd/W6aM4C
软件版本：4.0.0
脚本作者：彭于晏💞
更新时间：2023-9-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.wakeyoga.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wakeyoga.js

[mitm] 

hostname = api.wakeyoga.com

*******************************/

var body = $response.body.replace(/"isOrderSvip":\w+/g，'"isOrderSvip":true')
.replace(/"uSvipExpireAt":\d+/g，'"uSvipExpireAt":4567891456')
.replace(/"lifetimeMembershipStatus":\d/g，'"lifetimeMembershipStatus":1')
.replace(/"canPlay":\w+/g，'"canPlay":1')
.replace(/"user_has":\w+/g，'"user_has":1')
.replace(/"order_status":\d/g，'"order_status":1')
.replace(/"order_expire_at":null/g，'"order_expire_at":4567891456')
.replace(/"canPlay":\d/g，'"canPlay":1')
.replace(/"vipType":\d/g，'"vipType":1')
.replace(/"isBuy":\d/g，'"isBuy":1')
.replace(/"isSvip":\d/g，'"isSvip":1')
.replace(/"isCantplay":\d/g，'"isCantplay":0')
.replace(/"unloakDay":\d+/g，'"unloakDay":99')
$done({ body });
