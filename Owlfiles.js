/*************************************

项目名称：猫头鹰文件
下载地址：https://t.cn/A6Kotbjs
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/www\.skyjos\.c(om|n) url script-response-body  https://raw.githubusercontent.com/amhanpp/stucool/main/Owlfiles.js

[mitm]
hostname = www.skyjos.cn, www.skyjos.com

*************************************/


body = $response.body.replace(/\"memberLevel":(.*?)/g, '\"memberLevel":3').replace(/\"succ":"(.*?)"/g, '\"succ":"true"').replace(/\"dispName":"(.*?)"/g, '\"dispName":"chxm1023"').replace(/\"expireAt":"(.*?)"/g, '\"expireAt":"4092599349000"')

$done({body});
