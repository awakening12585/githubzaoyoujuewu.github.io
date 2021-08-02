(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{200:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),n("p",[n("a",{attrs:{href:"https://gitee.com/fjc0k/docker-YApi#git-readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("gitee"),n("OutboundLink")],1)]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._m(4),s._v(" "),s._m(5),s._m(6),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9)])},[function(){var s=this.$createElement,a=this._self._c||s;return a("h1",{attrs:{id:"yapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yapi","aria-hidden":"true"}},[this._v("#")]),this._v(" yapi")])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("yapi跨域问题:低版本的yapi确实存在跨域问题，但是现在官方出了一个google插件，所以不用nginx解决了所以可以不用搞了")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建目录")])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" -p /data/docker/yapi\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("cd")]),this._v(" /data/docker/yapi\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br"),a("span",{staticClass:"line-number"},[this._v("2")]),a("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[this._v("#")]),this._v(" docker-compose")])},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\nservices:\n  yapi-web:\n    image: jayfong/yapi:latest\n    container_name: yapi-web\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":3000\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# volumes:")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  - ./config.json:/yapi/config.json")]),s._v("\n    environment:\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_ADMIN_ACCOUNT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin@juneyaoair.com\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_ADMIN_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_CLOSE_REGISTER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_DB_SERVERNAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yapi-mongo\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_DB_PORT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_DB_DATABASE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yapi\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_MAIL_ENABLE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_LDAP_LOGIN_ENABLE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YAPI_PLUGINS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    depends_on:\n      - yapi-mongo\n    privileged: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    restart: always\n    networks:\n      - yapi-net\n  yapi-mongo:\n    image: mongo:latest\n    container_name: yapi-mongo\n    volumes:\n      - ./data/db:/data/db\n    expose:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n\tdepends_on:\n      - yapi-nginx\n    privileged: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    restart: always\n    networks:\n      - yapi-net\n  yapi-nginx:\n    image: nginx:latest\n    container_name: yapi-nginx\n    privileged: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\trestart: always\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80\n    environment:\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NGINX_PORT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    networks:\n      - yapi-net\n    volumes:\n      - ./nginx/configs/:/etc/nginx/conf.d/\nnetworks:\n  yapi-net:\n    driver: bridge\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"nginx-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx.conf")])},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# cat nginx.conf\nserver {\n    listen       80;\n    server_name localhost;\n   # access_log  /data/log/nginx/yapi/access.log main;\n\n    location / {\n      proxy_pass  http://yapi-web:3000;\n      proxy_set_header Host $host;\n      proxy_set_header  X-Real-IP        $remote_addr;\n      proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;\n      proxy_set_header X-NginX-Proxy true;\n      proxy_set_header Connection "upgrade";\n      proxy_set_header Upgrade $http_upgrade;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动")])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("docker-compose up\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br")])])}],!1,null,null,null);a.default=t.exports}}]);