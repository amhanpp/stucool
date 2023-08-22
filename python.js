/*******************************
脚本名称:  PYTHON手册破解
更新时间：2023年8月22日 下午6:30
感谢大佬 自留备份
*******************************
[rewrite_local]
^http[s]?:\/\/book.haoapp8.cn\/API\/programming\/v5\/booklist.php url script-response-body https://raw.githubusercontent.com/stucool/python.js
[mitm] 
hostname = book.haoapp8.cn

*******************************/

var modifiedHeaders = $request.headers;
modifiedHeaders[''] = 'vip":"0';
modifiedHeaders['Host'] = '  ';
modifiedHeaders['Host'] = ' ';
modifiedHeaders['Host'] = ' ';
$done({headers : modifiedHeaders});
