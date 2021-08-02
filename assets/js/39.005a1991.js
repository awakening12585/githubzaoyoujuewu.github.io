(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{184:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/v4.4/tutorial/deploy-replica-set/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("本文以mongod 4.4 版本为例")]),t._v(" "),a("li",[t._v("在一台虚拟机上演示")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mongodb-副本集搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-副本集搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" MongoDB 副本集搭建")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-利用systemctl-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-利用systemctl-服务","aria-hidden":"true"}},[this._v("#")]),this._v(" (1)利用systemctl 服务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("复制官网安装时候自带的 mongod.service 到 /etc/systemd/system")]),this._v(" "),s("li",[this._v("可执行权限")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 替换为文件名称\nchmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-修改文件里面指定的-conf地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改文件里面指定的-conf地址","aria-hidden":"true"}},[this._v("#")]),this._v(" (2)修改文件里面指定的 conf地址")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-修改conf-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改conf-配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" (3) 修改conf 配置文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[t._v("# 指定副本集名称\nreplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   replSetName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rs0"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-启动副本集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动副本集","aria-hidden":"true"}},[this._v("#")]),this._v(" (4) 启动副本集")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[t._v("rs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initiate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   _id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rs0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb0.example.net:27017"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb1.example.net:27017"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb2.example.net:27017"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-修改副本集权重"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改副本集权重","aria-hidden":"true"}},[this._v("#")]),this._v(" (5) 修改副本集权重")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[t._v("conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t         #获取副本集的配置，默认权重都是"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nconf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\t     #索引号从"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("开始，每次递增"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("，类似数组\n\nconf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nconf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\nrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reconfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t        #更新mongodb副本集的配置，优先权重最高的提升为primary，关闭启动后也为主\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_6-开启认证模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-开启认证模式","aria-hidden":"true"}},[this._v("#")]),this._v(" (6) 开启认证模式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建用户")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Root#123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" roles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("role"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建key文件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@m1 mongodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("keyfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@m1 keyfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# openssl rand "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("base64 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("756")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@m1 keyfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# chmod "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" mongo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key # 必须修改为"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v("权限，否则无法启动\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("以上完成后，将文件复制到另外2个节点")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("修改配置文件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[t._v("security"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n authorization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" enabled\n clusterAuthMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keyFile\n keyFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("keyfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mongo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("重启后并用认证模式登陆")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-flow js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[t._v("mongo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27019")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Root#123'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("authenticationDatabase admin\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])}],!1,null,null,null);s.default=e.exports}}]);