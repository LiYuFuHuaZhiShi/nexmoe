(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{223:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"统计系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计系统","aria-hidden":"true"}},[t._v("#")]),t._v(" 统计系统")]),t._v(" "),s("h2",{attrs:{id:"google"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://analytics.google.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("登陆 Google Analytics 管理后台，找到你的站点 - 媒体资源设置，找到 "),s("code",[t._v("跟踪 ID")]),t._v("，一般是以 "),s("code",[t._v("UA-")]),t._v(" 开头。\n根据你想使用的方式，将 "),s("code",[t._v("跟踪 ID")]),t._v(" 填写到 "),s("code",[t._v("google_site_id")]),t._v(" 或 "),s("code",[t._v("gtags_site_id")]),t._v(" 中。\n"),s("strong",[t._v("请注意: "),s("code",[t._v("gtags")]),t._v(" 需要加载更大更多的文件。")])]),t._v(" "),s("h2",{attrs:{id:"cnzz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cnzz","aria-hidden":"true"}},[t._v("#")]),t._v(" CNZZ")]),t._v(" "),s("p",[t._v("登陆 CNZZ 后台，找到代码安装页面，应该会提供类似如下形式的代码：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//s95.cnzz.com/z_stat.php?id=<%= theme.analytics.cnzz_site_id %>&web_id={你的站点 ID}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("JavaScript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("把那一长串 ID 设置在 "),s("code",[t._v("cnzz_site_id")]),t._v(" 中。")]),t._v(" "),s("blockquote",[s("p",[t._v("脚本生成的内容会产生“站长统计”，Nexmoe已将其隐藏。")])]),t._v(" "),s("h2",{attrs:{id:"腾讯分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#腾讯分析","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"http://ta.qq.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯分析"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("登录腾讯分析控制台，登录并获取分析的 ID，填入 "),s("code",[t._v("tencent_site_id")]),t._v(" 中。")]),t._v(" "),s("h2",{attrs:{id:"百度统计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#百度统计","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"http://tongji.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度统计"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("登陆百度统计后台，定位到代码获取页面，应该会提供类似如下形式的代码：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _hmt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _hmt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    hm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://hm.baidu.com/hm.js?{这一长串就是你的 ID}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("把那一长串 ID 设置在 "),s("code",[t._v("baidu_site_id")]),t._v(" 中。")]),t._v(" "),s("h2",{attrs:{id:"_51-la统计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_51-la统计","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.51.la/",target:"_blank",rel:"noopener noreferrer"}},[t._v("51.La统计"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("登陆51.La统计后台，定位到代码获取页面，应该会提供类似如下形式的代码：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//js.users.51.la/{这一长串就是你的 ID}.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("把那一长串 ID 设置在 "),s("code",[t._v("la_site_id")]),t._v(" 中。")])])}),[],!1,null,null,null);a.default=e.exports}}]);