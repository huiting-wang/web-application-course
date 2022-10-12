"use strict";(self["webpackChunkvue_front_exam"]=self["webpackChunkvue_front_exam"]||[]).push([[896],{1896:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home-page"},[e._m(0),t("div",{staticClass:"markdown-body"},[t("RulesMd")],1)])},r=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{alt:"Vue logo",src:s(6949)}})])}],a=function(){var e=this;e._self._c;return e._m(0)},p=[function(){var e=this,t=e._self._c;return t("section",[t("html",[t("head"),t("body",[t("h1",[e._v("一、Coding 原則")]),t("ul",[t("li",[e._v("風格：Javascript ES6 (ECMAScript 2015)")]),t("li",[e._v("邏輯 Scope 需添加“註解”，Methods & 函式使用“註釋標籤”，依據 "),t("a",{attrs:{href:"https://jsdoc.app/"}},[e._v("JSDoc")]),e._v(" 規則")]),t("li",[e._v("正式環境，不必要的 "),t("code",{pre:!0},[e._v("console.log")]),e._v(" 與 "),t("code",{pre:!0},[e._v("註解")]),e._v(" 需移除")]),t("li",[e._v("SCSS 使用 "),t("a",{attrs:{href:"http://getbem.com/naming/"}},[e._v("BEM")]),e._v(" Class 命名設計模式")])]),t("h1",[e._v("二、一般編碼規範")]),t("h3",[e._v("2.1 JS、CSS、SCSS、HTML、圖檔文件命名")]),t("p",[e._v("採小寫命名方式，以中畫線分隔")]),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("正例：render-dom.js / signup.css / index.html / company-logo.svg")])])]),t("h3",[e._v("2.2 Javascript 命名規範")]),t("p",[e._v("採用小寫駝峰命名，代碼中的命名均不能以下劃線或美元符號結束")]),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("反例： _name / name_ / name$")])])]),t("p",[e._v("方法名、參數名、成員變量、局部變量都統一使用小寫駝峰命名風格。")]),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("正例： localValue / getHttpMessage() / inputUserId")])])]),t("h3",[e._v("2.3 常數命名全部大寫，單詞間用下劃線隔開，力求語義表達完整清楚，不要嫌名字長。")]),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("正例： MAX_STOCK_COUNT")])])]),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("反例： MAX_COUNT")])])]),t("h1",[e._v("三、Vue 項目規範")]),t("h3",[e._v("以 Vue 官方 "),t("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/"}},[e._v("風格指南")]),e._v(" 中的 A 規範基礎，請所有代碼遵守其規範。")]),t("p",[e._v("組件名應該始終是多個單詞的，根組件 App 以及 "),t("code",{pre:!0},[e._v("<transition>")]),e._v("、"),t("code",{pre:!0},[e._v("<component>")]),e._v(" 之類的 Vue 內置組件除外。")]),t("p",[e._v("這樣做可以避免跟現有的以及未來的 HTML 元素相沖突，因為所有的 HTML 元素名稱都是單個單詞的。")]),t("h3",[e._v("3.1 Components 檔案命名規範")]),t("p",[e._v("採大駝峰命名方式")]),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("正例： Hamburger.vue")])])]),t("p",[e._v("如有子資料夾以 index.vue 為入口檔")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[e._v("└─ components\n  └─ layout\n    └─ index.vue\n")])]),t("h3",[e._v("3.2 自閉合組件標籤規範")]),t("p",[e._v("在單文件組件、字符串模板和 JSX 中沒有內容的組件應該是自閉合的——但在 DOM 模板裡永遠不要這樣做。")]),t("p",[e._v("自閉合組件表示它們不僅沒有內容，而且刻意沒有內容。其不同之處就好像書上的一頁白紙對比貼有“本頁有意留白”標籤的白紙。而且沒有了額外的閉合標籤，你的代碼也更簡潔。")]),t("p",[e._v("不幸的是，HTML 並不支持自閉合的自定義元素——只有官方的“空”元素。所以上述策略僅適用於進入 DOM 之前 Vue 的模板編譯器能夠觸達的地方，然後再產出符合 DOM 規範的 HTML。")]),t("p",[e._v("反例：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("\x3c!-- 在 JS 檔组件、字符串模板和 JSX 中 --\x3e")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("MyComponent")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("MyComponent")]),e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("\x3c!-- 在 DOM 模板中 --\x3e")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("my-component")]),e._v("/>")]),e._v("\n")])]),t("p",[e._v("正例：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("\x3c!-- 在 JS 檔组件、字符串模板和 JSX 中 --\x3e")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("MyComponent")]),e._v("/>")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("\x3c!-- 在 DOM 模板中 --\x3e")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("my-component")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("my-component")]),e._v(">")]),e._v("\n")])]),t("h3",[e._v("3.3 Views 檔案命名規範")]),t("p",[e._v("採大駝峰命名方式")]),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("正例： HomePage.vue")])])]),t("p",[e._v("如有子資料夾以 index.vue 為入口檔")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[e._v("└─ views\n  └─ home\n    └─ index.vue\n")])]),t("h1",[e._v("四、Git 規範")]),t("h3",[e._v("Commit 開發分類標籤：")]),t("ul",[t("li",[t("code",{pre:!0},[e._v("[WIP]")]),e._v(": 開發中暫存，每日開發內容下班前上傳暫存")]),t("li",[t("code",{pre:!0},[e._v("[Dev]")]),e._v(": 專案功能開發")]),t("li",[t("code",{pre:!0},[e._v("[Patch]")]),e._v(": 除錯、修補 (小幅度邏輯調整、效能調整、資料格式調整、防呆等)")]),t("li",[t("code",{pre:!0},[e._v("[Bug]")]),e._v(": 除錯 (功能或程式異常，來自客服部/產品部反應)")]),t("li",[t("code",{pre:!0},[e._v("[Anno]")]),e._v(": 修改註釋內容")]),t("li",[t("code",{pre:!0},[e._v("[NPM]")]),e._v(": 套件更新")]),t("li",[t("code",{pre:!0},[e._v("[ENV]")]),e._v(": 環境變數設定變更")]),t("li",[t("code",{pre:!0},[e._v("[Doc]")]),e._v(": 開發或規範文件")])]),t("hr"),t("h1",[e._v("Installation")]),t("p",[e._v("To install this package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm).")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm install -g @vue/cli@5.0.8\n")])]),t("p",[e._v("After installation, you will have access to the "),t("code",{pre:!0},[e._v("vue")]),e._v(" binary in your command line.")]),t("p",[e._v("You can run scripts with additional features using the GUI with the ｀vue ui｀ command.")]),t("hr"),t("h1",[e._v("NPM Scripts")]),t("h3",[e._v("Compiles and hot-reloads for development")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm run serve\n")])]),t("h3",[e._v("Compiles and minifies for production")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm run build\n")])]),t("h3",[e._v("Run your unit tests")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm run test:unit\n")])]),t("h3",[e._v("Run your end-to-end tests")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm run test:e2e\n")])]),t("h3",[e._v("Lints and fixes files")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm run lint\n")])]),t("h3",[e._v("Check every module defined in "),t("code",{pre:!0},[e._v("package.json")]),e._v(" and if there is a newer version in the NPM registry.")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm outdated\n")])]),t("p",[e._v("or install "),t("a",{attrs:{href:"https://www.npmjs.com/package/npm-check"}},[e._v("npm-check")]),e._v(" plugin")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm-check -u\n")])]),t("h3",[e._v("Export webpack config file")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("vue inspect > output.js\n")])]),t("h3",[e._v("Customize configuration")]),t("p",[e._v("See "),t("a",{attrs:{href:"https://cli.vuejs.org/config/"}},[e._v("Configuration Reference")]),e._v(".")])])])])}],v=s(1001),c={},l=(0,v.Z)(c,a,p,!1,null,null,null),o=l.exports,i={name:"HomePage",components:{RulesMd:o}},h=i,u=(0,v.Z)(h,n,r,!1,null,null,null),m=u.exports},6949:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"}}]);