(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{186:function(s,a,n){"use strict";n.r(a);var t=n(0),r=Object(t.a)({},function(){var s=this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"linux-crontab定时任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-crontab定时任务","aria-hidden":"true"}},[s._v("#")]),s._v(" linux crontab定时任务")]),s._v(" "),n("h2",{attrs:{id:"ubuntu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu","aria-hidden":"true"}},[s._v("#")]),s._v(" ubuntu")]),s._v(" "),n("h3",{attrs:{id:"基本命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" status             //查看状态\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" start              //启动\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" stop               //停止\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" restart            //重启\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -l          //显示用户的crontab文件的内容\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e          //编辑用户的crontab文件的内容\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -r          //删除用户的crontab文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"cron-格式介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cron-格式介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" cron 格式介绍")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("每项工作的格式都是具有六个字段：\n第一个：分钟（0～59）\n第二个：小时（0～23）\n第三个：日期（1～31）\n第四个：月份（1～12）\n第五个：周（0～7），数字0或7都代表“星期日”\n第六个：就是要执行的命令\n\n特殊字符：\n*（星号）：代表任何时刻都接受\n例如：* "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" * * * command表示无论何月，何日，周几的5点都会执行\n\n,（逗号）：代表分割时段的意思。\n例如：要执行的任务是在4:00和5:00 就是 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5,6")]),s._v(" * * * command。\n\n-（减号）：代表一段时间范围内\n例如9点到12点之间每个小时的10时都进行一项工作，就是 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("-12 * * *\n\n/n（斜线）：n代表某一个数字，即表示每隔n单位间隔\n例如每一分钟执行一次，就是 */1 * * * * "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"实战"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实战","aria-hidden":"true"}},[s._v("#")]),s._v(" 实战")]),s._v(" "),n("blockquote",[n("p",[s._v("shell脚本需要 chmod +x ***.sh 赋予可执行权限")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("//每月的 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 号 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("点0分执行\n00 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9,17")]),s._v(",25,1 * * /usr/local/***.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /usr/local/***.log\n\n每分钟执行      * * * * *\n每五分钟执行    */5 * * * *\n每小时执行      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * * *\n每天执行       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * *\n每周执行       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n每月执行       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * *\n每年执行       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" *\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}],!1,null,null,null);a.default=r.exports}}]);