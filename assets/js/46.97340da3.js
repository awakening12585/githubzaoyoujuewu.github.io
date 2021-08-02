(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{177:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"python学习第五天-元组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python学习第五天-元组","aria-hidden":"true"}},[s._v("#")]),s._v(" python学习第五天 元组")]),s._v(" "),a("p",[s._v("一个元组可以存储多个数据,元组内的数据是不能修改的.")]),s._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多个数据元组")]),s._v("\nt1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tom'")]),s._v(",1,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单个元组")]),s._v("\nt2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("注意: 如果定义的元组只有一个数据,是必须要添加逗号,否则数据类型为唯一的这个数据的数据类型")])]),s._v(" "),a("h2",{attrs:{id:"常见操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 常见操作")]),s._v(" "),a("p",[s._v("元组数据不支持修改,只支持查找")]),s._v(" "),a("ul",[a("li",[s._v("按下标查找数据")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tuple1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(",3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("index():获取指定数据的下标,如果不存在则报错")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tuple1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1.index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1.index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 报错 ValueError: tuple.index(x): x not in tuple")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("count(): 统计某个数据在当前元组出现的次数")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tuple1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cc'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1.count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1.count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1.count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'213'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("len(): 统计元组中数据的个数")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tuple1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cc'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("修改元组中的列表")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tuple1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bb'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cc'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(",3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntuple1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tuple1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ('aa', 'bb', 'cc', [666, 2, 3])")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);