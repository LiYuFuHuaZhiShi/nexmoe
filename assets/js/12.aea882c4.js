(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"welcome-to-nexmoe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#welcome-to-nexmoe","aria-hidden":"true"}},[e._v("#")]),e._v(" Welcome to Nexmoe")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("Hexo is a static site generator which is based on "),o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v(" You can learn how to install Hexo and generate your own website or blog at "),o("a",{attrs:{href:"https://hexo.io/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexo’s Official Documents."),o("OutboundLink")],1),e._v(" .")]),e._v(" "),o("blockquote",[o("p",[e._v("In this documentation, we suppose you have already successfully installed hexo and finished "),o("code",[e._v("hexo init")]),e._v(" to set up a site.")])]),e._v(" "),o("p",[e._v("There are two configuration files in Hexo Project, one in the root directory of your Hexo Project and the other in the theme directory. For the convenience of description, the former is referred to as "),o("code",[e._v("_config.yml")]),e._v("；and the latter as "),o("code",[e._v("_config.yml")]),e._v(".")]),e._v(" "),o("p",[e._v("Before using “Nexmoe” theme, please read "),o("a",{attrs:{href:"https://hexo.io/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexo’s Official Documents"),o("OutboundLink")],1),e._v("，carefully and configure the basic configuration, such as title, subtitle, description, author, timezone, language etc.")]),e._v(" "),o("p",[e._v("##Download")]),e._v(" "),o("h4",{attrs:{id:"download-latest-release"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-latest-release","aria-hidden":"true"}},[e._v("#")]),e._v(" "),o("a",{attrs:{href:"https://github.com/nexmoe/hexo-theme-nexmoe/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download latest Release"),o("OutboundLink")],1)]),e._v(" "),o("blockquote",[o("p",[e._v("The latest release. Recommended for most users.")])]),e._v(" "),o("h4",{attrs:{id:"download-other-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-other-version","aria-hidden":"true"}},[e._v("#")]),e._v(" "),o("a",{attrs:{href:"https://github.com/nexmoe/hexo-theme-nexmoe/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download other version"),o("OutboundLink")],1)]),e._v(" "),o("blockquote",[o("p",[e._v("You can decide which version to use. Some releases are no longer supported.")])]),e._v(" "),o("p",[e._v("Choose the version you want to deploy, expand "),o("code",[e._v("Assets")]),e._v(" tab in releases page, and download Source Code (zip).\nUnpack it and rename it to "),o("code",[e._v("nexmoe")]),e._v(", and then move it to "),o("code",[e._v("themes")]),e._v(" directory of your Hexo Project.")]),e._v(" "),o("h4",{attrs:{id:"using-git"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-git","aria-hidden":"true"}},[e._v("#")]),e._v(" "),o("a",{attrs:{href:"https://github.com/nexmoe/hexo-theme-nexmoe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Git"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("With git you can decide which version and branch you want to use. You can use "),o("code",[e._v("git pull")]),e._v(" to update the theme if you goes this way.")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd themes\ngit clone https://github.com/nexmoe/hexo-theme-nexmoe.git nexmoe\ncd nexmoe\ngit checkout {branch/tags name/commit hash}\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br")])]),o("h2",{attrs:{id:"install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[e._v("#")]),e._v(" Install")]),e._v(" "),o("p",[e._v("When installing “Nexmoe” you need extra steps which is diffrent from other themes.The theme has integrated the article [word count], [reading time] statistics function by default, and can not be closed temporarily. If the "),o("code",[e._v("hexo-wordcount")]),e._v(" plugin is not installed, install the plugin first:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm i --save hexo-wordcount\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[o("strong",[e._v("Before Node version 7.6.0, please install the 2.x version (Node.js v7.6.0 and previous), the installation command is as follows:")])]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm install hexo-wordcount@2 --save\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("Then you need to make a copy of "),o("code",[e._v("_config.example.yml")]),e._v(" and rename it to "),o("code",[e._v("_config.yml")]),e._v("。")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cp -i _config.example.yml _config.yml\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("With the theme being developed, the theme config template will change. By copying the config you can avoid potential conflicts for users who use git pull to upgrade the theme.")]),e._v(" "),o("h2",{attrs:{id:"enable"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable")]),e._v(" "),o("p",[e._v("Change "),o("code",[e._v("theme")]),e._v(" key’s value to "),o("code",[e._v("nexmoe")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[e._v("#")]),e._v(" Start")]),e._v(" "),o("p",[e._v("Run the command below to start a local Hexo Server.")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("hexo s --debug\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("blockquote",[o("p",[e._v("During the service startup process, pay attention any abnormal outputs. If you want to report issues, those information will help.")])]),e._v(" "),o("p",[e._v("When the output looks like the lines below.It means Hexo is already running on your device, check "),o("a",{attrs:{href:"https://localhost:4000",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://localhost:4000"),o("OutboundLink")],1),e._v(" in your browser.")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("blockquote",[o("p",[e._v("If you have any problem using “nexmoe”, try searching in the documentation at sidebar or "),o("a",{attrs:{href:"https://github.com/nexmoe/hexo-theme-nexmoe/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("open new issue"),o("OutboundLink")],1),e._v(" at GitHub.")])]),e._v(" "),o("h2",{attrs:{id:"update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[e._v("#")]),e._v(" Update")]),e._v(" "),o("p",[e._v("If you downloaded “Nexmoe” from a GitHub release, you should rename your theme directory from "),o("code",[e._v("nexmoe")]),e._v(" to "),o("code",[e._v("nexmoe-old")]),e._v(", and rename the newer version of “nexmoe” directory to "),o("code",[e._v("nexmoe")]),e._v(". Then follow the guide at changelog to migrate your configuration to the newer version. You can delete "),o("code",[e._v("nexmoe-old")]),e._v(" directory afterwards if you want.")]),e._v(" "),o("p",[e._v("If you use git to download “nexmoe”, you need to backup your "),o("code",[e._v("theme config")]),e._v(" (for example, rename it to "),o("code",[e._v("_config.old.yml")]),e._v("), and then run "),o("code",[e._v("git pull")]),e._v(" to update “nexmoe”. You will see a new "),o("code",[e._v("_config.example.yml")]),e._v(". Make a copy of it and rename it as "),o("code",[e._v("_config.yml")]),e._v(". Now you can migrate your settings from "),o("code",[e._v("_config.old.yml")]),e._v(" to "),o("code",[e._v("_config.yml")]),e._v(". After the test you can delete "),o("code",[e._v("_config.old.yml")]),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);