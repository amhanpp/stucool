
[rewrite_local]
  
# > 财新周刊☆解锁阅读权限（2023-08-02）@ddgksf2013
https?:\/\/ipadcms\.caixin\.com\/tmp\/articles url script-response-body https://github.com/ddgksf2013/MoYu/raw/master/CaiXinZhouKanProCrack.js


[mitm] 

hostname=ipadcms.caixin.com

***********************************/





var body = $response.body.replace(/isfree":0/g, 'isfree":1')
$done({ body })
