(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{207:function(t,s,a){"use strict";a.r(s);var p=a(0),r=Object(p.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"前端构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端构建工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端构建工具")]),t._v(" "),a("p",[t._v("构建工具就是将源代码转换成可执行的JavaScript、css、HTML代码，包括如下内容。")]),t._v(" "),a("ul",[a("li",[t._v("代码转换:将TypeScript编译成JavaScript、将scss编译成css等。")]),t._v(" "),a("li",[t._v("文件优化:压缩 JavaScript、 css、 HT鸟也代码，压缩合并图片等。")]),t._v(" "),a("li",[t._v("代码分割:提取多个页面的公共代码，提取首屏不需要执行部分的代码让其异步加载。")]),t._v(" "),a("li",[t._v("模块合并:在采用模块化的项目里会有很多个模块和文件，需要通过构建功能将模块分类合并成一个文件 。")]),t._v(" "),a("li",[t._v("自动刷新:监昕本地源代码的变化，自动重新构建、刷新浏览器。")]),t._v(" "),a("li",[t._v("代码校验:在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过 。")]),t._v(" "),a("li",[t._v("自动发布:更新代码后，自动构建出线上发布代码井传输给发布系统。")])]),t._v(" "),a("p",[t._v("构建其实是工程化、自动化思想在前端开发中的体现，将一系列流程用 代码去实现，让 代码自动化地执行这一系列复杂的流程。构建为前端开发注入了更大的活力，解放了我们的 生产力。")]),t._v(" "),a("h2",{attrs:{id:"npm-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-script","aria-hidden":"true"}},[t._v("#")]),t._v(" Npm Script")]),t._v(" "),a("p",[t._v("Npm Script (https://docs.npmjs.com/misc/scripts)是一个任务执行者。 Npm 是在安装 Node. js 时附带的包管理器， Npm Script 则是 Npm 内置的 一个功能，允许在 package.json 文件 里面使用 scripts 字段定义任务:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node dev. js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node build.js"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("里面的 scripts 字段是一个对象，每个属性对应一段 Shell 脚本，以上代码定义 了两个 任务: dev 和 pub。其底层实现原理是通过调用 Shell 去运行脚本命令，例如，执行 npm run pub命令等同于执行 node build.js命令。\nNpm Script 的优点是内置，无须安装其他依赖 。其缺点是功能太简单，虽然提供 了 pre 和 post 两个钩子，但不能方便地管理多个任务之间的依赖 。")]),t._v(" "),a("h2",{attrs:{id:"grunt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grunt","aria-hidden":"true"}},[t._v("#")]),t._v(" Grunt")]),t._v(" "),a("p",[t._v("Grunt (https://gruntjs.com)和NpmScript类似，也是一个任务执行者。 Grunt有大量现成的插件封装了常见的任务，也能管理任务之间的依赖关系，自动化地执行依赖的任务 ，每个任务的具体执行代码和依赖关系写在配置文件Gruntfile.js里。\nGrunt 的优点是:")]),t._v(" "),a("ul",[a("li",[t._v("灵活，它只负 责执行我们定义的任务;")]),t._v(" "),a("li",[t._v("大量的可复用插件封装好了常见的构建任务。\nGrunt的缺点是集成度不高 ，要写很多配置后才可以用，无法做到开箱即用。 Grunt相当于进化版的 NpmScript，它的诞生其实是为了弥补NpmScript的不足。")])]),t._v(" "),a("h2",{attrs:{id:"gulp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gulp","aria-hidden":"true"}},[t._v("#")]),t._v(" Gulp")]),t._v(" "),a("p",[t._v("Gulp (http://gulpjs.com)是一个基于流的自动化构建工具。除了可以管理和执行任务，还支持监听文件、读写文件。Gulp被设计得非常简单，只通过下面5种方法就可以支持几乎所有构建场景:")]),t._v(" "),a("ul",[a("li",[t._v("通过 gulp.task注册一个任务;")]),t._v(" "),a("li",[t._v("通过 gulp.run 执行任务;")]),t._v(" "),a("li",[t._v("通过 gulp.watch 监听文件的变化;")]),t._v(" "),a("li",[t._v("通过 gulp.src 读取文件:")]),t._v(" "),a("li",[t._v("通过 gulp.dest 写文件。")])]),t._v(" "),a("p",[t._v("Gulp的优点是好用又不失灵活，既可以单独完成构建，也可以和其他工具搭配使用 。其缺点和Grunt类似，集成度不高，要写很多配置后才可以用，无法做到开箱即用。\n可以将Gulp看作Grunt的加强版。相对于Grunt, Gulp增加了监昕文件、读写文件、流式处理的功能。")]),t._v(" "),a("h2",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),a("p",[t._v("Webpack(https://webpack.js.org)是一个打包模块化JavaScript的工具，在Webpack里一切文件皆模块，通过Loader转换文件，通过Plugin注入钩子，最后输出由多个模块组合成的文件。 Webpack专注于构建模块化项目。\n一切文件如JavaScript、css、scss、图片、模板，对于Webpack来说都是一个个模块，这样的好处是能清晰地描述各个模块之间的依赖关系，以方便Webpack对模块进行组合和打包。经过Webpack的处理，最终会输出浏览器能使用的静态资源。")]),t._v(" "),a("p",[t._v("Webpack的优点是:")]),t._v(" "),a("ul",[a("li",[t._v("专注于处理模块化的项目，能做到开箱即用、一步到位。")]),t._v(" "),a("li",[t._v("可通过Plugin扩展，完整好用又不失灵活。")]),t._v(" "),a("li",[t._v("使用场景不局限于Web开发。")]),t._v(" "),a("li",[t._v("社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展。")]),t._v(" "),a("li",[t._v("良好的开发体验。")])]),t._v(" "),a("p",[t._v("Webpack的缺点是只能用于采用模块化开发的项目。")]),t._v(" "),a("h2",{attrs:{id:"rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup","aria-hidden":"true"}},[t._v("#")]),t._v(" Rollup")]),t._v(" "),a("p",[t._v("Rollup(https://rollupjs.org)是一个和Webpack很类似但专注于ES6的模块打包工具。它的亮点在于，能针对ES6源码进行Tree Shaking，以去除那些己被定义但没被使用的代码并进行Scope Hoisting，以减小输出文件的大小和提升运行性能 。然而Rollup的这些亮点随后就被Webpack模仿和实现。由于Rollup的使用方法和Webpack差不多，所以这里就不详细介绍如何使用Rollup了，而是详细说明它们的差别。")]),t._v(" "),a("p",[t._v("Rollup是在Webpack流行后出现的替代品:")]),t._v(" "),a("ul",[a("li",[t._v("Rollup生态链还不完善，体验不如Webpack;")]),t._v(" "),a("li",[t._v("Rollup的功能不如Webpack完善，但其配置和使用更简单:")]),t._v(" "),a("li",[t._v("Rollup不支持CodeSpliting，但好处是在打包出来的代码中没有Webpack那段模块的加载、执行和缓存的代码。")])]),t._v(" "),a("p",[t._v("Rollup在用于打包JavaScript库时比Webpack更有优势，因为其打包出来的代码更小、更快。但它的功能不够完善，在很多场景下都找不到现成的解决方案。")])])}],!1,null,null,null);s.default=r.exports}}]);