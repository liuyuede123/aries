(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddd38e10"],{"9b3f":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return l})),o.d(t,"h",(function(){return n})),o.d(t,"g",(function(){return m})),o.d(t,"m",(function(){return i})),o.d(t,"i",(function(){return c})),o.d(t,"d",(function(){return u})),o.d(t,"k",(function(){return p})),o.d(t,"e",(function(){return g})),o.d(t,"l",(function(){return d})),o.d(t,"f",(function(){return b})),o.d(t,"j",(function(){return f}));var r=o("22ce");function a(){return Object(r["b"])({url:"/sys_setting/blog_vars",method:"get"})}function s(e){return Object(r["b"])({url:"/sys_setting/items?name=".concat(e),method:"get"})}function l(){return Object(r["b"])({url:"/sys_setting/index_info",method:"get"})}function n(e){return Object(r["b"])({url:"/sys_setting/site",method:"post",data:e})}function m(e){return Object(r["b"])({url:"/sys_setting/smtp",method:"post",data:e})}function i(e){return Object(r["b"])({url:"/sys_setting/email/test",method:"post",data:e})}function c(e){return Object(r["b"])({url:"/sys_setting/pic_bed/smms",method:"post",data:e})}function u(e){return Object(r["b"])({url:"/sys_setting/pic_bed/imgbb",method:"post",data:e})}function p(e){return Object(r["b"])({url:"/sys_setting/pic_bed/tencent_cos",method:"post",data:e})}function g(e){return Object(r["b"])({url:"/sys_setting/comment/local",method:"post",data:e})}function d(e){return Object(r["b"])({url:"/sys_setting/comment/twikoo",method:"post",data:e})}function b(e){return Object(r["b"])({url:"/sys_setting/param",method:"post",data:e})}function f(e){return Object(r["b"])({url:"/sys_setting/social_info",method:"post",data:e})}},f399:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("d2-container",[o("template",{slot:"header"},[e._v("系统 / 设置")]),o("el-tabs",{attrs:{"tab-position":e.tabPosition,type:"border-card"},on:{"tab-click":e.handleTabClick}},[o("el-tab-pane",{staticStyle:{width:"500px"},attrs:{label:"网站设置"}},[o("el-form",{ref:"siteForm",attrs:{model:e.siteForm,rules:e.siteRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"网站名称",prop:"site_name"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"网站名称"},model:{value:e.siteForm.site_name,callback:function(t){e.$set(e.siteForm,"site_name",t)},expression:"siteForm.site_name"}})],1),o("el-form-item",{attrs:{label:"网站描述",prop:"site_desc"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"网站描述"},model:{value:e.siteForm.site_desc,callback:function(t){e.$set(e.siteForm,"site_desc",t)},expression:"siteForm.site_desc"}})],1),o("el-form-item",{attrs:{label:"网站地址",prop:"site_url"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"网站地址"},model:{value:e.siteForm.site_url,callback:function(t){e.$set(e.siteForm,"site_url",t)},expression:"siteForm.site_url"}})],1),o("el-form-item",{attrs:{label:"Logo",prop:"site_logo"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"图标地址"},model:{value:e.siteForm.site_logo,callback:function(t){e.$set(e.siteForm,"site_logo",t)},expression:"siteForm.site_logo"}})],1),o("el-form-item",{attrs:{label:"SEO 关键词",prop:"seo_key_words"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"关键词以逗号隔开，如 Java,python,Golang"},model:{value:e.siteForm.seo_key_words,callback:function(t){e.$set(e.siteForm,"seo_key_words",t)},expression:"siteForm.seo_key_words"}})],1),o("el-form-item",{attrs:{label:"备案号",prop:"record_number"}},[o("el-input",{attrs:{size:"small",rows:5,type:"text",autocomplete:"off",placeholder:"备案号"},model:{value:e.siteForm.record_number,callback:function(t){e.$set(e.siteForm,"record_number",t)},expression:"siteForm.record_number"}})],1),o("el-form-item",{attrs:{label:"全局 head",prop:"head_content"}},[o("el-input",{attrs:{size:"small",rows:5,type:"textarea",autocomplete:"off",placeholder:"全局 head"},model:{value:e.siteForm.head_content,callback:function(t){e.$set(e.siteForm,"head_content",t)},expression:"siteForm.head_content"}})],1),o("el-form-item",{attrs:{label:"全局 footer",prop:"footer_content"}},[o("el-input",{attrs:{size:"small",rows:5,type:"textarea",autocomplete:"off",placeholder:"全局 footer"},model:{value:e.siteForm.footer_content,callback:function(t){e.$set(e.siteForm,"footer_content",t)},expression:"siteForm.footer_content"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.siteSaveLoading},on:{click:e.saveSiteForm}},[e._v("保存")])],1)],1)],1),o("el-tab-pane",{staticStyle:{width:"600px"},attrs:{label:"邮件设置"}},[o("el-tabs",{attrs:{"tab-position":"left"}},[o("el-tab-pane",{attrs:{label:"SMTP 服务配置"}},[o("el-form",{ref:"emailForm",attrs:{model:e.emailForm,rules:e.emailRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"SMTP 地址",prop:"address"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"SMTP 地址"},model:{value:e.emailForm.address,callback:function(t){e.$set(e.emailForm,"address",t)},expression:"emailForm.address"}})],1),o("el-form-item",{attrs:{label:"端口",prop:"port"}},[o("el-input",{attrs:{size:"small",type:"number",autocomplete:"off",placeholder:"端口"},model:{value:e.emailForm.port,callback:function(t){e.$set(e.emailForm,"port",t)},expression:"emailForm.port"}})],1),o("el-form-item",{attrs:{label:"邮箱帐号",prop:"account"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"邮箱帐号"},model:{value:e.emailForm.account,callback:function(t){e.$set(e.emailForm,"account",t)},expression:"emailForm.account"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[o("el-input",{attrs:{size:"small",type:"password",autocomplete:"off",placeholder:"密码","show-password":""},model:{value:e.emailForm.pwd,callback:function(t){e.$set(e.emailForm,"pwd",t)},expression:"emailForm.pwd"}})],1),o("el-form-item",{attrs:{label:"发件人",prop:"sender"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"发件人"},model:{value:e.emailForm.sender,callback:function(t){e.$set(e.emailForm,"sender",t)},expression:"emailForm.sender"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.smtpSaveLoading},on:{click:e.saveEmailForm}},[e._v("保存 ")])],1)],1)],1),o("el-tab-pane",{attrs:{label:"邮件发送测试"}},[o("el-form",{ref:"emailSendForm",attrs:{model:e.emailSendForm,rules:e.emailSendRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"发送人",prop:"sender"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"发送人"},model:{value:e.emailSendForm.sender,callback:function(t){e.$set(e.emailSendForm,"sender",t)},expression:"emailSendForm.sender"}})],1),o("el-form-item",{attrs:{label:"接收邮箱",prop:"receive_email"}},[o("el-input",{attrs:{size:"small",type:"email",autocomplete:"off",placeholder:"接收邮箱"},model:{value:e.emailSendForm.receive_email,callback:function(t){e.$set(e.emailSendForm,"receive_email",t)},expression:"emailSendForm.receive_email"}})],1),o("el-form-item",{attrs:{label:"邮件标题",prop:"title"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"邮件标题"},model:{value:e.emailSendForm.title,callback:function(t){e.$set(e.emailSendForm,"title",t)},expression:"emailSendForm.title"}})],1),o("el-form-item",{attrs:{label:"邮件内容",prop:"content"}},[o("el-input",{attrs:{size:"small",rows:5,type:"textarea",autocomplete:"off",placeholder:"邮件内容"},model:{value:e.emailSendForm.content,callback:function(t){e.$set(e.emailSendForm,"content",t)},expression:"emailSendForm.content"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.emailSendLoading},on:{click:e.saveEmailSendForm}},[e._v("发送 ")])],1)],1)],1)],1)],1),o("el-tab-pane",{staticStyle:{width:"500px"},attrs:{label:"图床设置"}},[o("el-form",{ref:"storageForm",attrs:{model:e.storageForm,rules:e.storageFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"存储类型",prop:"storage_type"}},[o("el-select",{attrs:{size:"small",placeholder:"请选择存储类型"},on:{change:e.storageTypeSelectChange},model:{value:e.storageForm.storage_type,callback:function(t){e.$set(e.storageForm,"storage_type",t)},expression:"storageForm.storage_type"}},e._l(e.storageTypes,(function(e){return o("el-option",{key:e.value,attrs:{value:e.value,label:e.name}})})),1)],1)],1),o("el-form",{directives:[{name:"show",rawName:"v-show",value:"sm.ms"===e.storageForm.storage_type,expression:"storageForm.storage_type==='sm.ms'"}],ref:"smmsForm",attrs:{model:e.smmsForm,rules:e.smmsFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"Token",prop:"token"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"Token"},model:{value:e.smmsForm.token,callback:function(t){e.$set(e.smmsForm,"token",t)},expression:"smmsForm.token"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.bedSaveLoading},on:{click:e.saveSmmsForm}},[e._v("保存")])],1)],1),o("el-form",{directives:[{name:"show",rawName:"v-show",value:"imgbb"===e.storageForm.storage_type,expression:"storageForm.storage_type==='imgbb'"}],ref:"imgbbForm",attrs:{model:e.imgbbForm,rules:e.imgbbFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"Token",prop:"token"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"Token"},model:{value:e.imgbbForm.token,callback:function(t){e.$set(e.imgbbForm,"token",t)},expression:"imgbbForm.token"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.bedSaveLoading},on:{click:e.saveImgbbForm}},[e._v("保存")])],1)],1),o("el-form",{directives:[{name:"show",rawName:"v-show",value:"cos"===e.storageForm.storage_type,expression:"storageForm.storage_type==='cos'"}],ref:"tencentCosForm",attrs:{model:e.tencentCosForm,rules:e.tencentCosFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"存储桶地址",prop:"host"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"存储桶地址"},model:{value:e.tencentCosForm.host,callback:function(t){e.$set(e.tencentCosForm,"host",t)},expression:"tencentCosForm.host"}})],1),o("el-form-item",{attrs:{label:"传输协议",prop:"scheme"}},[o("el-radio",{attrs:{label:"http"},model:{value:e.tencentCosForm.scheme,callback:function(t){e.$set(e.tencentCosForm,"scheme",t)},expression:"tencentCosForm.scheme"}},[e._v("http")]),o("el-radio",{attrs:{label:"https"},model:{value:e.tencentCosForm.scheme,callback:function(t){e.$set(e.tencentCosForm,"scheme",t)},expression:"tencentCosForm.scheme"}},[e._v("https")])],1),o("el-form-item",{attrs:{label:"区域",prop:"region"}},[o("el-select",{attrs:{size:"small",placeholder:"请选择区域"},model:{value:e.tencentCosForm.region,callback:function(t){e.$set(e.tencentCosForm,"region",t)},expression:"tencentCosForm.region"}},e._l(e.cosRegions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.name,value:t.value}},[o("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1)],1),o("el-form-item",{attrs:{label:"secret_id",prop:"secret_id"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"secret_id"},model:{value:e.tencentCosForm.secret_id,callback:function(t){e.$set(e.tencentCosForm,"secret_id",t)},expression:"tencentCosForm.secret_id"}})],1),o("el-form-item",{attrs:{label:"secret_key",prop:"secret_key"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"secret_key"},model:{value:e.tencentCosForm.secret_key,callback:function(t){e.$set(e.tencentCosForm,"secret_key",t)},expression:"tencentCosForm.secret_key"}})],1),o("el-form-item",{attrs:{label:"上传目录",prop:"folder_path"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"上传目录"},model:{value:e.tencentCosForm.folder_path,callback:function(t){e.$set(e.tencentCosForm,"folder_path",t)},expression:"tencentCosForm.folder_path"}})],1),o("el-form-item",{attrs:{label:"图片处理",prop:"img_process"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off",placeholder:"请参照腾讯云 COS 图片处理文档"},model:{value:e.tencentCosForm.img_process,callback:function(t){e.$set(e.tencentCosForm,"img_process",t)},expression:"tencentCosForm.img_process"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.bedSaveLoading},on:{click:e.saveTencentCosForm}},[e._v("保存 ")])],1)],1)],1),o("el-tab-pane",{staticStyle:{width:"500px"},attrs:{label:"评论设置"}},[o("el-form",{ref:"commentPlugInForm",attrs:{model:e.commentPlugInForm,rules:e.commentPlugInFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"评论组件",prop:"plug_in"}},[o("el-select",{attrs:{size:"small",placeholder:"请选择评论组件"},on:{change:e.commentPlugInSelectChange},model:{value:e.commentPlugInForm.plug_in,callback:function(t){e.$set(e.commentPlugInForm,"plug_in",t)},expression:"commentPlugInForm.plug_in"}},e._l(e.commentPlugIns,(function(e){return o("el-option",{key:e.value,attrs:{value:e.value,label:e.name}})})),1)],1)],1),o("el-form",{directives:[{name:"show",rawName:"v-show",value:"local-comment"===e.commentPlugInForm.plug_in,expression:"commentPlugInForm.plug_in==='local-comment'"}],ref:"localCommentForm",attrs:{model:e.localCommentForm,rules:e.localCommentFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"评论功能",prop:"is_on"}},[o("el-switch",{attrs:{size:"small","active-value":"1","inactive-value":"0"},model:{value:e.localCommentForm.is_on,callback:function(t){e.$set(e.localCommentForm,"is_on",t)},expression:"localCommentForm.is_on"}})],1),o("el-form-item",{attrs:{label:"评论审核",prop:"is_review_on"}},[o("el-switch",{attrs:{size:"small","active-value":"1","inactive-value":"0"},model:{value:e.localCommentForm.is_review_on,callback:function(t){e.$set(e.localCommentForm,"is_review_on",t)},expression:"localCommentForm.is_review_on"}})],1),o("el-form-item",{attrs:{label:"回复后邮件通知",prop:"is_reply_on"}},[o("el-switch",{attrs:{size:"small","active-value":"1","inactive-value":"0"},model:{value:e.localCommentForm.is_reply_on,callback:function(t){e.$set(e.localCommentForm,"is_reply_on",t)},expression:"localCommentForm.is_reply_on"}})],1),o("el-form-item",{attrs:{label:"每页评论个数",prop:"page_size"}},[o("el-input",{attrs:{size:"small",type:"number",autocomplete:"off"},model:{value:e.localCommentForm.page_size,callback:function(t){e.$set(e.localCommentForm,"page_size",t)},expression:"localCommentForm.page_size"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.localCommentSaveLoading},on:{click:e.saveLocalCommentForm}},[e._v("保存 ")])],1)],1),o("el-form",{directives:[{name:"show",rawName:"v-show",value:"twikoo-comment"===e.commentPlugInForm.plug_in,expression:"commentPlugInForm.plug_in==='twikoo-comment'"}],ref:"twikooForm",attrs:{model:e.twikooForm,rules:e.twikooFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"环境 id",prop:"env_id"}},[o("el-input",{attrs:{size:"small",type:"text",placeholder:"env ID"},model:{value:e.twikooForm.env_id,callback:function(t){e.$set(e.twikooForm,"env_id",t)},expression:"twikooForm.env_id"}})],1),o("el-form-item",{attrs:{label:"区域",prop:"region"}},[o("el-input",{attrs:{size:"small",type:"text",placeholder:"region"},model:{value:e.twikooForm.region,callback:function(t){e.$set(e.twikooForm,"region",t)},expression:"twikooForm.region"}})],1),o("el-form-item",{attrs:{label:"路径",prop:"path"}},[o("el-input",{attrs:{size:"small",type:"text",placeholder:"path"},model:{value:e.twikooForm.path,callback:function(t){e.$set(e.twikooForm,"path",t)},expression:"twikooForm.path"}})],1),o("el-form-item",{attrs:{label:"语言",prop:"lang"}},[o("el-input",{attrs:{size:"small",type:"text",placeholder:"lang"},model:{value:e.twikooForm.lang,callback:function(t){e.$set(e.twikooForm,"lang",t)},expression:"twikooForm.lang"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.twikooSaveLoading},on:{click:e.saveTwikooForm}},[e._v("保存 ")])],1)],1)],1),o("el-tab-pane",{staticStyle:{width:"500px"},attrs:{label:"参数设置"}},[o("el-form",{ref:"paramForm",attrs:{model:e.paramForm,rules:e.paramFormRules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"首页每页条数",prop:"index_page_size"}},[o("el-input",{attrs:{size:"small",type:"number",autocomplete:"off"},model:{value:e.paramForm.index_page_size,callback:function(t){e.$set(e.paramForm,"index_page_size",t)},expression:"paramForm.index_page_size"}})],1),o("el-form-item",{attrs:{label:"归档页每页条数",prop:"archive_page_size"}},[o("el-input",{attrs:{size:"small",type:"number",autocomplete:"off"},model:{value:e.paramForm.archive_page_size,callback:function(t){e.$set(e.paramForm,"archive_page_size",t)},expression:"paramForm.archive_page_size"}})],1),o("el-form-item",{attrs:{label:"站点地图每页条数",prop:"site_map_page_size"}},[o("el-input",{attrs:{size:"small",type:"number",autocomplete:"off"},model:{value:e.paramForm.site_map_page_size,callback:function(t){e.$set(e.paramForm,"site_map_page_size",t)},expression:"paramForm.site_map_page_size"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.paramSaveLoading},on:{click:e.saveParamForm}},[e._v("保存 ")])],1)],1)],1),o("el-tab-pane",{staticStyle:{width:"500px"},attrs:{label:"社交信息"}},[o("el-form",{ref:"socialForm",attrs:{model:e.socialForm,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"QQ",prop:"qq"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off"},model:{value:e.socialForm.qq,callback:function(t){e.$set(e.socialForm,"qq",t)},expression:"socialForm.qq"}})],1),o("el-form-item",{attrs:{label:"微信",prop:"wechat"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off"},model:{value:e.socialForm.wechat,callback:function(t){e.$set(e.socialForm,"wechat",t)},expression:"socialForm.wechat"}})],1),o("el-form-item",{attrs:{label:"github",prop:"github"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off"},model:{value:e.socialForm.github,callback:function(t){e.$set(e.socialForm,"github",t)},expression:"socialForm.github"}})],1),o("el-form-item",{attrs:{label:"微博",prop:"weibo"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off"},model:{value:e.socialForm.weibo,callback:function(t){e.$set(e.socialForm,"weibo",t)},expression:"socialForm.weibo"}})],1),o("el-form-item",{attrs:{label:"知乎",prop:"zhihu"}},[o("el-input",{attrs:{size:"small",type:"text",autocomplete:"off"},model:{value:e.socialForm.zhihu,callback:function(t){e.$set(e.socialForm,"zhihu",t)},expression:"socialForm.zhihu"}})],1),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"primary",loading:e.btn.socialSaveLoading},on:{click:e.saveSocialInfoForm}},[e._v("保存 ")])],1)],1)],1)],1)],2)},a=[],s=(o("b64b"),o("96cf"),o("1da1")),l=o("9b3f"),n={name:"setting",data:function(){return{tabPosition:"top",storageTypes:[{value:"sm.ms",name:"sm.ms"},{value:"imgbb",name:"imgbb"},{value:"cos",name:"腾讯云"}],cosRegions:[{name:"北京一区",value:"ap-beijing-1"},{name:"北京",value:"ap-beijing"},{name:"南京",value:"ap-nanjing"},{name:"上海",value:"ap-shanghai"},{name:"广州",value:"ap-guangzhou"},{name:"成都",value:"ap-chengdu"},{name:"重庆",value:"ap-chongqing"},{name:"深圳金融",value:"ap-shenzhen-fsi"},{name:"上海金融",value:"ap-shanghai-fsi"},{name:"北京金融",value:"ap-beijing-fsi"}],commentPlugIns:[{name:"本地评论组件",value:"local-comment"},{name:"twikoo 评论组件",value:"twikoo-comment"}],siteForm:{sys_id:null,type_name:"网站设置",site_name:"",site_desc:"",site_url:"",site_logo:"",seo_key_words:"",record_number:"",head_content:"",footer_content:""},emailForm:{sys_id:null,type_name:"邮件设置",address:"",port:null,account:"",pwd:"",sender:""},emailSendForm:{sender:"",receive_email:"",title:"",content:""},storageForm:{storage_type:"sm.ms"},smmsForm:{sys_id:null,storage_type:"sm.ms",token:""},imgbbForm:{sys_id:null,storage_type:"imgbb",token:""},tencentCosForm:{sys_id:null,storage_type:"cos",host:"",scheme:"https",region:"",secret_id:"",secret_key:"",folder_path:"",img_process:""},commentPlugInForm:{plug_in:"local-comment"},localCommentForm:{sys_id:"",plug_in:"local-comment",is_on:"1",is_review_on:"1",is_reply_on:"0",page_size:"10"},twikooForm:{sys_id:"",plug_in:"twikoo-comment",env_id:"",region:"",path:"window.location.pathname",lang:"zh-CN"},paramForm:{sys_id:"",type_name:"参数设置",index_page_size:null,archive_page_size:null,site_map_page_size:null},socialForm:{sys_id:"",type_name:"社交信息",qq:"",wechat:"",github:"",weibo:"",zhihu:""},siteRules:{site_name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{max:50,message:"网站名称长度不能超过 50",trigger:"blur"}],site_url:[{required:!0,message:"请输入网站地址",trigger:"blur"},{max:255,message:"网站地址长度不能超过 255",trigger:"blur"},{type:"url",message:"请输入正确的 URL",trigger:"blur"}],site_desc:[{max:255,message:"网站描述长度不能超过 255",trigger:"blur"}],site_logo:[{max:255,message:"网站 logo 长度不能超过 255",trigger:"blur"}],seo_key_words:[{max:255,message:"SEO 关键词长度不能超过 255",trigger:"blur"}],head_content:[{max:1e3,message:"全局 head 脚本长度不能超过 1000",trigger:"blur"}],footer_content:[{max:1e3,message:"全局 footer 脚本长度不能超过 1000",trigger:"blur"}]},emailRules:{address:[{required:!0,message:"请输入SMTP 地址",trigger:"blur"},{max:50,message:"SMTP 地址长度不能超过 50",trigger:"blur"}],port:[{required:!0,message:"请输入端口",trigger:"blur"},{max:3,message:"端口长度不能超过 3",trigger:"blur"}],account:[{required:!0,message:"请输入邮箱帐号",trigger:"blur"},{max:30,message:"邮箱帐号长度不能超过 30",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{max:30,message:"密码长度不能超过 30",trigger:"blur"}],sender:[{required:!0,message:"请输入发件人",trigger:"blur"},{max:30,message:"发件人长度不能超过 30",trigger:"blur"}]},emailSendRules:{sender:[{required:!0,message:"请输入发送人",trigger:"blur"},{max:30,message:"发送人长度不能超过 30",trigger:"blur"}],receive_email:[{required:!0,message:"请输入接收邮箱",trigger:"blur"},{max:30,message:"邮箱长度不能超过 30",trigger:"blur"},{type:"email",message:"请输入正确的邮箱帐号",trigger:"blur"}],title:[{required:!0,message:"请输入邮件标题",trigger:"blur"},{max:100,message:"邮件标题长度不能超过 100",trigger:"blur"}],content:[{required:!0,message:"请输入邮件内容",trigger:"blur"},{max:1e3,message:"邮件内容长度不能超过 1000",trigger:"blur"}]},storageFormRules:{storageType:[{required:!0,message:"请选择存储类型",trigger:"blur"}]},smmsFormRules:{token:[{required:!0,message:"请输入 Token",trigger:"blur"},{max:100,message:"Token 长度不能超过 100",trigger:"blur"}]},imgbbFormRules:{token:[{required:!0,message:"请输入 Token",trigger:"blur"},{max:100,message:"Token 长度不能超过 100",trigger:"blur"}]},tencentCosFormRules:{host:[{required:!0,message:"请输入存储桶地址",trigger:"blur"},{max:255,message:"存储桶地址长度不能超过 255 ",trigger:"blur"}],scheme:[{required:!0,message:"请选择传输协议",trigger:"blur"},{max:5,message:"传输协议只能为 http 或者 https",trigger:"blur"}],region:[{required:!0,message:"请选择区域",trigger:"blur"},{max:20,message:"区域长度不能超过 20 ",trigger:"blur"}],secret_id:[{required:!0,message:"请输入 secret_id",trigger:"blur"},{max:255,message:"secret_id 长度不能超过 255 ",trigger:"blur"}],secret_key:[{required:!0,message:"请输入 secret_key",trigger:"blur"},{max:255,message:"secret_key 长度不能超过 255 ",trigger:"blur"}],folder_path:[{required:!0,message:"请输入上传目录",trigger:"blur"},{max:255,message:"上传目录长度不能超过 255 ",trigger:"blur"}]},commentPlugInFormRules:{plug_in:[{required:!0,message:"请选择评论组件",trigger:"blur"}]},localCommentFormRules:{is_on:[{required:!0,message:"请选择是否开启评论功能",trigger:"blur"}],is_review_on:[{required:!0,message:"请选择是否开启评论审核功能",trigger:"blur"}]},twikooFormRules:{env_id:[{required:!0,message:"请输入环境 id",trigger:"blur"}]},paramFormRules:{},btn:{siteSaveLoading:!1,smtpSaveLoading:!1,emailSendLoading:!1,bedSaveLoading:!1,localCommentSaveLoading:!1,twikooSaveLoading:!1,paramSaveLoading:!1,socialSaveLoading:!1},is_public:!0}},created:function(){this.getSysSetItem("网站设置","siteForm")},methods:{handleTabClick:function(e){"邮件设置"===e.label?this.getSysSetItem(e.label,"emailForm"):"网站设置"===e.label?this.getSysSetItem(e.label,"siteForm"):"图床设置"===e.label?this.initPicBedSetting():"评论设置"===e.label?this.initCommentSetting():"参数设置"===e.label?this.getSysSetItem(e.label,"paramForm"):"社交信息"===e.label&&this.getSysSetItem(e.label,"socialForm")},getSysSetItem:function(e,t){var o=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(l["c"])(e).then((function(e){Object.keys(e.data).length>0&&(o[t]=e.data)})).catch((function(){}));case 2:case"end":return r.stop()}}),r)})))()},initPicBedSetting:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSysSetItem("图床设置","storageForm");case 2:return t.next=4,e.storageTypeSelectChange();case 4:case"end":return t.stop()}}),t)})))()},initCommentSetting:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSysSetItem("评论组件设置","commentPlugInForm");case 2:return t.next=4,e.commentPlugInSelectChange();case 4:case"end":return t.stop()}}),t)})))()},storageTypeSelectChange:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=e.storageForm.storage_type,t.next="sm.ms"===t.t0?3:"imgbb"===t.t0?6:"cos"===t.t0?9:12;break;case 3:return t.next=5,e.getSysSetItem("sm.ms","smmsForm");case 5:return t.abrupt("break",12);case 6:return t.next=8,e.getSysSetItem("imgbb","imgbbForm");case 8:return t.abrupt("break",12);case 9:return t.next=11,e.getSysSetItem("cos","tencentCosForm");case 11:return t.abrupt("break",12);case 12:case"end":return t.stop()}}),t)})))()},commentPlugInSelectChange:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=e.commentPlugInForm.plug_in,t.next="local-comment"===t.t0?3:"twikoo-comment"===t.t0?6:8;break;case 3:return t.next=5,e.getSysSetItem("local-comment","localCommentForm");case 5:return t.abrupt("break",8);case 6:return t.next=8,e.getSysSetItem("twikoo-comment","twikooForm");case 8:case"end":return t.stop()}}),t)})))()},saveSiteForm:function(){var e=this;this.$refs.siteForm.validate((function(t){t&&(e.btn.siteSaveLoading=!0,setTimeout((function(){Object(l["h"])(e.siteForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("网站设置","siteForm")})).catch((function(){})),e.btn.siteSaveLoading=!1}),300))}))},saveEmailForm:function(){var e=this;this.$refs.emailForm.validate((function(t){t&&(e.btn.smtpSaveLoading=!0,setTimeout((function(){Object(l["g"])(e.emailForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("邮件设置","emailForm")})).catch((function(){})),e.btn.smtpSaveLoading=!1}),300))}))},saveEmailSendForm:function(){var e=this;this.$refs.emailSendForm.validate((function(t){t&&(e.btn.emailSendLoading=!0,setTimeout((function(){Object(l["m"])(e.emailSendForm).then((function(t){e.$message.success(t.msg)})).catch((function(){})),e.btn.emailSendLoading=!1}),300))}))},saveSmmsForm:function(){var e=this;this.$refs.smmsForm.validate((function(t){t&&(e.btn.bedSaveLoading=!0,setTimeout((function(){Object(l["i"])(e.smmsForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("sm.ms","smmsForm")})).catch((function(){})),e.btn.bedSaveLoading=!1}),300))}))},saveImgbbForm:function(){var e=this;this.$refs.imgbbForm.validate((function(t){t&&(e.btn.bedSaveLoading=!0,setTimeout((function(){Object(l["d"])(e.imgbbForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("imgbb","imgbbForm")})).catch((function(){})),e.btn.bedSaveLoading=!1}),300))}))},saveTencentCosForm:function(){var e=this;this.$refs.tencentCosForm.validate((function(t){t&&(e.btn.bedSaveLoading=!0,setTimeout((function(){Object(l["k"])(e.tencentCosForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("cos","tencentCosForm")})).catch((function(){})),e.btn.bedSaveLoading=!1}),300))}))},saveLocalCommentForm:function(){var e=this;this.$refs.localCommentForm.validate((function(t){t&&(e.btn.localCommentSaveLoading=!0,setTimeout((function(){Object(l["e"])(e.localCommentForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("local-comment","localCommentForm")})).catch((function(){})),e.btn.localCommentSaveLoading=!1}),300))}))},saveTwikooForm:function(){var e=this;this.$refs.twikooForm.validate((function(t){t&&(e.btn.twikooSaveLoading=!0,setTimeout((function(){Object(l["l"])(e.twikooForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("twikoo-comment","twikooForm")})).catch((function(){})),e.btn.twikooSaveLoading=!1}),300))}))},saveParamForm:function(){var e=this;this.$refs.paramForm.validate((function(t){t&&(e.btn.paramSaveLoading=!0,setTimeout((function(){Object(l["f"])(e.paramForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("参数设置","paramForm")})).catch((function(){})),e.btn.paramSaveLoading=!1}),300))}))},saveSocialInfoForm:function(){var e=this;this.btn.socialSaveLoading=!0,setTimeout((function(){Object(l["j"])(e.socialForm).then((function(t){e.$message.success(t.msg),e.getSysSetItem("社交信息","socialForm")})).catch((function(){})),e.btn.socialSaveLoading=!1}),300)}}},m=n,i=o("2877"),c=Object(i["a"])(m,r,a,!1,null,"6b11a7ea",null);t["default"]=c.exports}}]);