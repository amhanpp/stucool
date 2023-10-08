/*************************************

长相思 




[rewrite_local]


https://poetry.nanxiani.cn/api/User/loginUserInfo url script-response-body https://raw.githubusercontent.com/amhanpp/stucool/main/99.js



[mitm]
hostname = poetry.nanxiani.cn

*/






var baby = JSON.parse($response.body);

baby.data.id = xsan;//用户id
baby.data.vip_expire = "2123-08-25 12:22:45";//vip到期时间
baby.data.head = "https://raw.githubusercontent.com/Yu9191/-/main/A559C8EF-B4C6-4A94-8488-3D0BF36A6673.jpeg";//用户头像
baby.data.had_vip = true;//false改为true不知道是啥
baby.data.vip_type = "lifetime";//会员类型终身
baby.data.name = "Lov";//用户名字


$done({body : JSON.stringify(baby)});



#https://t.me/chxm1023_Chat/192059
