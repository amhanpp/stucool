/******************************

脚本功能：有诗——解锁全家桶VIP
下载地址：https://is.gd/iEflZn
软件版本：1.0.1
脚本作者：彭于晏💞
更新时间：2023-10-13
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^http[s]?:\/\/(youshiapp.com|judouapp.com|lengapp.com)(/api/v1/users/me|/api/v2/mine/profile|/api/v1/mine) url script-response-body https://raw.githubusercontent.com/amhanpp/stucool/main/11.js

[mitm] 

hostname = (youshiapp.com|judouapp.com|lengapp.com)

*******************************/


var body = $response.body;
var url = $request.url;

if (url.indexOf("/api/v1/users/me") != -1) {
    body = body.replace(/member_expired_at":\w+/g，'member_expired_at":8888888888')
.replace(/last_profile_change_at":\d+/g，'last_profile_change_at":8888888888')
.replace(/is_lifetime_member":\w+/g，'is_lifetime_member":true')
.replace(/last_avatar_change_at":\d+/g，'last_avatar_change_at":8888888888')
.replace(/is_member":\w+/g，'is_member":true')
}

if (url.indexOf("/api/v2/mine/profile") != -1) {
    body = body.replace(/member_expired_at":\w+/g，'member_expired_at":8888888888')
.replace(/last_profile_change_at":\d+/g，'last_profile_change_at":8888888888')
.replace(/is_lifetime_member":\w+/g，'is_lifetime_member":true')
.replace(/last_avatar_change_at":\d+/g，'last_avatar_change_at":8888888888')
.replace(/is_member":\w+/g，'is_member":true')
}

if (url.indexOf("/api/v1/mine") != -1) {
    body = body.replace(/member_expired_at":\w+/g，'member_expired_at":8888888888')
.replace(/last_profile_change_at":\d+/g，'last_profile_change_at":8888888888')
.replace(/is_lifetime_member":\w+/g，'is_lifetime_member":true')
.replace(/last_avatar_change_at":\d+/g，'last_avatar_change_at":8888888888')
.replace(/is_member":\w+/g，'is_member":true')
}


$done({ body });
