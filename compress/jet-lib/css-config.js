!function(){var C=Jet.__base__;Jet.__base__._useList.push("css-config");var _JT=C._JT,_load=_JT.load,_reg=new RegExp("({{)((.|\\n)*?)(}})","g"),_numReg=new RegExp("(\\[)((.|\\n)*?)(\\])","g"),_commonStyle="JcommonStyle",_COMMON_CSS="COMMON_CSS",conf={preloadCss:function(t){var m=t.match(new RegExp("(\\(\\()((.|\\n)*?)(\\)\\))","g"));if(null!==m){var vars=[];m.forEach(function(item){var _i=item.indexOf("[");if(-1!=_i){var arr=eval(item.match(_numReg)[0]),_v=item.substring(2,_i).trim(),_var=conf.conf.variable[_v],_varMatch=_var.match(_reg);null!==_varMatch&&(arr.forEach(function(e,n){_var=_var.replace(new RegExp("(({{"+(n+1)+"\\|)((.|\\n)*?)(}}))|(\\{\\{"+(n+1)+"\\}\\})","g"),e)}),_var=_var.replace(new RegExp("{{[0-9]*\\||{{|}}","g"),"")),vars.push(item),t=t.replace(item,_var)}else{var pure=item.replace(/\s/g,"");-1==vars.indexOf(item)&&(vars.push(item),t=t.replace(new RegExp("\\(\\("+item.substring(2,item.length-2)+"\\)\\)","g"),conf.conf.variable[pure.substring(2,pure.length-2)]))}})}return t.replace(/[\r\n]/g,"")}},o=document.createElement("style");o.setAttribute("type","text/css");var common=document.getElementById(_COMMON_CSS),commonCssName="common.css",url=common.href;function _loadCommonCssCall(e,n){var t=_JT.id(_COMMON_CSS);0==n&&(0<e.length?_JT.id(_commonStyle)._JT_exist()?e.join("")!=_JT.id(_commonStyle).innerHTML&&_JT.id(_commonStyle)._JT_html(C._less(e.join(""),t)):document.head.appendChild(_JT.ct("style")._JT_attr("id",_commonStyle)._JT_html(C._less(e.join(""),t))):_JT.id(_commonStyle)._JT_exist(function(e){e._JT_empty()}))}-1!==url.indexOf("src/css/common.less")&&(commonCssName="common.less"),conf.xhr=_load(url.replace(commonCssName,"css.conf"),function(res){eval("Jet.__css_conf.conf="+res),_load(url,function(e){e="false"==_JT.id(_COMMON_CSS)._JT_attr("jless")?conf.preloadCss(e):C._less(e);var n=o.cloneNode();n.innerHTML=e,document.head.insertBefore(n,common),document.head.removeChild(common)})}),conf._loadCommonCss=function(){var n=[],r=Jet.router.path.substring(Jet.router.base.length),o=0,s=[];Jet.__css_conf.conf.common.forEach(function(e){if(-1!=e.router.indexOf(r)){var n=e.css.trim();if(".css"==n.substring(n.length-4)){var t=n.split(",");s.push(t),o+=t.length}else s.push(e.css),o++}}),s.forEach(function(e){"string"==typeof e?(o--,n.push(e),_loadCommonCssCall(n,o)):e.forEach(function(e){_JT.load(C._getSrc(e,"css"),function(e){o--,n.push(e),_loadCommonCssCall(n,o)})})})},conf._reloadCssConf=function(call){var c=Jet.__css_conf;c.xhr&&c.xhr.abort(),c.xhr=_JT.load(Jet.router.conf.css+"/css.conf",function(res){eval("Jet.__css_conf.conf="+res),c.xhr=void 0,_JT.load(Jet.router.conf.css+"/"+commonCssName,function(e){e="false"==_JT.id(_COMMON_CSS)._JT_attr("jless")?conf.preloadCss(e):C._less(e);var n=document.createElement("style");n.innerHTML=e,document.head.insertBefore(n,_JT.id(_COMMON_CSS)),document.head.removeChild(_JT.id(_COMMON_CSS)),c.preloadCss=void 0,call()})})},conf._replaceCssVar=function(t){var m=t.match(new RegExp("(\\(\\()((.|\\n)*?)(\\)\\))","g"));if(null!==m){var vars=[];m.forEach(function(item){var _i=item.indexOf("[");if(-1!=_i){var arr=eval(item.match(C._numReg)[0]),_v=item.substring(2,_i).trim(),_var=Jet.__css_conf.conf.variable[_v],_varMatch=_var.match(_reg);null!==_varMatch&&(arr.forEach(function(e,n){_var=_var.replace(new RegExp("(({{"+(n+1)+"\\|)((.|\\n)*?)(}}))|(\\{\\{"+(n+1)+"\\}\\})","g"),e)}),_var=_var.replace(new RegExp("{{[0-9]*\\|","g"),"").replace(new RegExp("}}","g"),"")),vars.push(item),t=t.replace(item,_var)}else{var pure=item.replace(/\s/g,"");-1==vars.indexOf(item)&&(vars.push(item),t=t.replace(new RegExp("\\(\\("+item.substring(2,item.length-2)+"\\)\\)","g"),Jet.__css_conf.conf.variable[pure.substring(2,pure.length-2)]))}})}return t.replace(/[\r\n]/g,"")},Jet.__css_conf=conf}();