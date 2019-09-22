(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{227:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"使用-mathjax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-mathjax","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 Mathjax")]),a._v(" "),t("h2",{attrs:{id:"使用kramed代替-marked"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用kramed代替-marked","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用Kramed代替 Marked")]),a._v(" "),t("p",[t("code",[a._v("hexo")]),a._v(" 默认的渲染引擎是 "),t("code",[a._v("marked")]),a._v(" ，但是 "),t("code",[a._v("marked")]),a._v(" 不支持 "),t("code",[a._v("mathjax")]),a._v(" 。 "),t("code",[a._v("kramed")]),a._v(" 是在 "),t("code",[a._v("marked")]),a._v(" 的基础上进行修改。我们在工程目录下执行以下命令来安装 "),t("code",[a._v("kramed")]),a._v(" 。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" uninstall hexo-renderer-marked --save\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" hexo-renderer-kramed --save\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("然后，打开 "),t("code",[a._v("/node_modules/hexo-renderer-kramed/lib/renderer.js")]),a._v(" ，更改：")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("formatText")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Fit kramed's rule: $$ + \\1 + $$")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/`\\$(.*?)\\$`/g")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$$$$$1$$$$'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("为")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("formatText")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"安装mathjax包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mathjax包","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装mathjax包")]),a._v(" "),t("p",[a._v("如果之前安装过 "),t("code",[a._v("hexo-math")]),a._v(" ,则先卸载 "),t("code",[a._v("hexo-math")]),a._v(" 再安装 "),t("code",[a._v("mathjax")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" uninstall hexo-math --save\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" hexo-renderer-mathjax --save\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"更新-mathjax-的-cdn-链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新-mathjax-的-cdn-链接","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新 Mathjax 的 CDN 链接")]),a._v(" "),t("p",[a._v("打开 "),t("code",[a._v("/node_modules/hexo-renderer-mathjax/mathjax.html")]),a._v(" 修改")]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}}),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("为")]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}}),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"更改默认转义规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改默认转义规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 更改默认转义规则")]),a._v(" "),t("p",[a._v("因为 "),t("code",[a._v("hexo")]),a._v(" 默认的转义规则会将一些字符进行转义，比如 "),t("code",[a._v("_")]),a._v(" 转为 "),t("code",[a._v("<em>")]),a._v(" , 所以我们需要对默认的规则进行修改。打开 "),t("code",[a._v("/node_modules/kramed/lib/rules/inline.js")]),a._v(" ,修改 "),t("code",[a._v("inline")]),a._v(" 变量中。")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("escape"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^\\\\([\\\\`*{}\\[\\]()#$+\\-.!_>])/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("更改为:")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("escape"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^\\\\([`*\\[\\]()# +\\-.!_>])/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("把")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("em"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^\\b_((?:__|[\\s\\S])+?)_\\b|^\\*((?:\\*\\*|[\\s\\S])+?)\\*(?!\\*)/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("更改为:")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("em"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^\\*((?:\\*\\*|[\\s\\S])+?)\\*(?!\\*)/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"开启mathjax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启mathjax","aria-hidden":"true"}},[a._v("#")]),a._v(" 开启mathjax")]),a._v(" "),t("p",[a._v("打开 "),t("code",[a._v("主题配置文件")]),a._v(" ,增加以下字段：")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mathjax")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("per_page")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 按需加载mathjax")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("在每次需要用的博文中，在文章的 "),t("code",[a._v("Front-matter")]),a._v(" 里打开 "),t("code",[a._v("mathjax")]),a._v(" 开关")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mathjax")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("————————————————")]),a._v(" "),t("p",[a._v("版权声明：本文为CSDN博主「冉茂松」的原创文章，遵循 "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[a._v("CC 4.0 by-sa版权协议"),t("OutboundLink")],1),a._v(" ，转载请附上原文出处链接及本声明。")]),a._v(" "),t("p",[a._v("原文链接："),t("a",{attrs:{href:"https://blog.csdn.net/u014630987/article/details/78670258",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/u014630987/article/details/78670258"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);