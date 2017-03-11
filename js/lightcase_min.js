!function(e){"use strict";var t={cache:{},support:{},objects:{},init:function(t){return this.each(function(){e(this).unbind("click.lightcase").bind("click.lightcase",function(i){i.preventDefault(),e(this).lightcase("start",t)})})},start:function(i){t.origin=lightcase.origin=this,t.settings=lightcase.settings=e.extend(!0,{idPrefix:"lightcase-",classPrefix:"lightcase-",attrPrefix:"lc-",transition:"elastic",transitionIn:null,transitionOut:null,cssTransitions:!0,speedIn:250,speedOut:250,maxWidth:800,maxHeight:500,forceWidth:!1,forceHeight:!1,liveResize:!0,fullScreenModeForMobile:!0,mobileMatchExpression:/(iphone|ipod|ipad|android|blackberry|symbian)/,disableShrink:!1,shrinkFactor:.75,overlayOpacity:.9,slideshow:!1,slideshowAutoStart:!0,timeout:5e3,swipe:!0,useKeys:!0,useCategories:!0,navigateEndless:!0,closeOnOverlayClick:!0,title:null,caption:null,showTitle:!0,showCaption:!0,showSequenceInfo:!0,inline:{width:"auto",height:"auto"},ajax:{width:"auto",height:"auto",type:"get",dataType:"html",data:{}},iframe:{width:800,height:500,frameborder:0},flash:{width:400,height:205,wmode:"transparent"},video:{width:400,height:225,poster:"",preload:"auto",controls:!0,autobuffer:!0,autoplay:!0,loop:!1},attr:"data-rel",href:null,type:null,typeMapping:{image:"jpg,jpeg,gif,png,bmp",flash:"swf",video:"mp4,mov,ogv,ogg,webm",iframe:"html,php",ajax:"json,txt",inline:"#"},errorMessage:function(){return'<p class="'+t.settings.classPrefix+'error">'+t.settings.labels.errorMessage+"</p>"},labels:{errorMessage:"Source could not be found...","sequenceInfo.of":" of ",close:"Close","navigator.prev":"Prev","navigator.next":"Next","navigator.play":"Play","navigator.pause":"Pause"},markup:function(){e("body").append(t.objects.overlay=e('<div id="'+t.settings.idPrefix+'overlay"></div>'),t.objects.loading=e('<div id="'+t.settings.idPrefix+'loading" class="'+t.settings.classPrefix+'icon-spin"></div>'),t.objects["case"]=e('<div id="'+t.settings.idPrefix+'case" aria-hidden="true" role="dialog"></div>')),t.objects["case"].after(t.objects.nav=e('<div id="'+t.settings.idPrefix+'nav"></div>')),t.objects.nav.append(t.objects.close=e('<a href="#" class="'+t.settings.classPrefix+'icon-close"><span>'+t.settings.labels.close+"</span></a>"),t.objects.prev=e('<a href="#" class="'+t.settings.classPrefix+'icon-prev"><span>'+t.settings.labels["navigator.prev"]+"</span></a>").hide(),t.objects.next=e('<a href="#" class="'+t.settings.classPrefix+'icon-next"><span>'+t.settings.labels["navigator.next"]+"</span></a>").hide(),t.objects.play=e('<a href="#" class="'+t.settings.classPrefix+'icon-play"><span>'+t.settings.labels["navigator.play"]+"</span></a>").hide(),t.objects.pause=e('<a href="#" class="'+t.settings.classPrefix+'icon-pause"><span>'+t.settings.labels["navigator.pause"]+"</span></a>").hide()),t.objects["case"].append(t.objects.content=e('<div id="'+t.settings.idPrefix+'content"></div>'),t.objects.info=e('<div id="'+t.settings.idPrefix+'info"></div>')),t.objects.content.append(t.objects.contentInner=e('<div class="'+t.settings.classPrefix+'contentInner"></div>')),t.objects.info.append(t.objects.sequenceInfo=e('<div id="'+t.settings.idPrefix+'sequenceInfo"></div>'),t.objects.title=e('<h4 id="'+t.settings.idPrefix+'title"></h4>'),t.objects.caption=e('<p id="'+t.settings.idPrefix+'caption"></p>'))},onInit:{},onStart:{},onFinish:{},onClose:{},onCleanup:{}},i,t.origin.data?t.origin.data("lc-options"):{}),t._callHooks(t.settings.onInit),t.objectData=t._setObjectData(this),t._cacheScrollPosition(),t._watchScrollInteraction(),t._addElements(),t._open(),t.dimensions=t.getViewportDimensions()},get:function(e){return t.objects[e]},getObjectData:function(){return t.objectData},_setObjectData:function(i){var n=e(i),s={title:t.settings.title||n.attr(t._prefixAttributeName("title"))||n.attr("title"),caption:t.settings.caption||n.attr(t._prefixAttributeName("caption"))||n.children("img").attr("alt"),url:t._determineUrl(),requestType:t.settings.ajax.type,requestData:t.settings.ajax.data,requestDataType:t.settings.ajax.dataType,rel:n.attr(t._determineAttributeSelector()),type:t.settings.type||t._verifyDataType(t._determineUrl()),isPartOfSequence:t._isPartOfSequence(n.attr(t.settings.attr),":"),isPartOfSequenceWithSlideshow:t._isPartOfSequence(n.attr(t.settings.attr),":slideshow"),currentIndex:e(t._determineAttributeSelector()).index(n),sequenceLength:e(t._determineAttributeSelector()).length};return s.sequenceInfo=s.currentIndex+1+t.settings.labels["sequenceInfo.of"]+s.sequenceLength,s.prevIndex=s.currentIndex-1,s.nextIndex=s.currentIndex+1,s},_prefixAttributeName:function(e){return"data-"+t.settings.attrPrefix+e},_determineLinkTarget:function(){return t.settings.href||e(t.origin).attr(t._prefixAttributeName("href"))||e(t.origin).attr("href")},_determineAttributeSelector:function(){var i=e(t.origin),n="";if("undefined"!=typeof t.cache.selector)n=t.cache.selector;else if(t.settings.useCategories===!0&&i.attr(t._prefixAttributeName("categories"))){var s=i.attr(t._prefixAttributeName("categories")).split(" ");e.each(s,function(e,i){e>0&&(n+=","),n+="["+t._prefixAttributeName("categories")+'~="'+i+'"]'})}else n="["+t.settings.attr+'="'+i.attr(t.settings.attr)+'"]';return t.cache.selector=n,n},_determineUrl:function(){var i,n=t._verifyDataUrl(t._determineLinkTarget()),s=0,o=0;return e.each(n,function(e,n){t._devicePixelRatio()>=n.density&&n.density>=o&&t._matchMedia()("screen and (min-width:"+n.width+"px)").matches&&n.width>=s&&(s=n.width,o=n.density,i=n.url)}),i},_normalizeUrl:function(e){var t=/^\d+$/;return e.split(",").map(function(e){var i={width:0,density:0};return e.trim().split(/\s+/).forEach(function(e,n){if(0===n)return i.url=e;var s=e.substring(0,e.length-1),o=e[e.length-1],a=parseInt(s,10),r=parseFloat(s);"w"===o&&t.test(s)?i.width=a:"h"===o&&t.test(s)?i.height=a:"x"!==o||isNaN(r)||(i.density=r)}),i})},_isPartOfSequence:function(i,n){var s=e("["+t.settings.attr+'="'+i+'"]');return new RegExp(n).test(i)&&s.length>1},isSlideshowEnabled:function(){return t.objectData.isPartOfSequence&&(t.settings.slideshow===!0||t.objectData.isPartOfSequenceWithSlideshow===!0)},_loadContent:function(){t.cache.originalObject&&t._restoreObject(),t._createObject()},_createObject:function(){var i;switch(t.objectData.type){case"image":i=e(new Image),i.attr({src:t.objectData.url,alt:t.objectData.title});break;case"inline":i=e('<div class="'+t.settings.classPrefix+'inlineWrap"></div>'),i.html(t._cloneObject(e(t.objectData.url))),e.each(t.settings.inline,function(e,n){i.attr(t._prefixAttributeName(e),n)});break;case"ajax":i=e('<div class="'+t.settings.classPrefix+'inlineWrap"></div>'),e.each(t.settings.ajax,function(e,n){"data"!==e&&i.attr(t._prefixAttributeName(e),n)});break;case"flash":i=e('<embed src="'+t.objectData.url+'" type="application/x-shockwave-flash"></embed>'),e.each(t.settings.flash,function(e,t){i.attr(e,t)});break;case"video":i=e("<video></video>"),i.attr("src",t.objectData.url),e.each(t.settings.video,function(e,t){i.attr(e,t)});break;default:i=e("<iframe></iframe>"),i.attr({src:t.objectData.url}),e.each(t.settings.iframe,function(e,t){i.attr(e,t)})}t._addObject(i),t._loadObject(i)},_addObject:function(e){t.objects.contentInner.html(e),t._loading("start"),t._callHooks(t.settings.onStart),t.settings.showSequenceInfo===!0&&t.objectData.isPartOfSequence?(t.objects.sequenceInfo.html(t.objectData.sequenceInfo),t.objects.sequenceInfo.show()):(t.objects.sequenceInfo.empty(),t.objects.sequenceInfo.hide()),t.settings.showTitle===!0&&void 0!==t.objectData.title&&""!==t.objectData.title?(t.objects.title.html(t.objectData.title),t.objects.title.show()):(t.objects.title.empty(),t.objects.title.hide()),t.settings.showCaption===!0&&void 0!==t.objectData.caption&&""!==t.objectData.caption?(t.objects.caption.html(t.objectData.caption),t.objects.caption.show()):(t.objects.caption.empty(),t.objects.caption.hide())},_loadObject:function(i){switch(t.objectData.type){case"inline":e(t.objectData.url)?t._showContent(i):t.error();break;case"ajax":e.ajax(e.extend({},t.settings.ajax,{url:t.objectData.url,type:t.objectData.requestType,dataType:t.objectData.requestDataType,data:t.objectData.requestData,success:function(e){"json"===t.objectData.requestDataType?t.objectData.data=e:i.html(e),t._showContent(i)},error:function(){t.error()}}));break;case"flash":t._showContent(i);break;case"video":"function"==typeof i.get(0).canPlayType||0===t.objects["case"].find("video").length?t._showContent(i):t.error();break;default:t.objectData.url?(i.on("load",function(){t._showContent(i)}),i.on("error",function(){t.error()})):t.error()}},error:function(){t.objectData.type="error";var i=e('<div class="'+t.settings.classPrefix+'inlineWrap"></div>');i.html(t.settings.errorMessage),t.objects.contentInner.html(i),t._showContent(t.objects.contentInner)},_calculateDimensions:function(e){t._cleanupDimensions();var i={objectWidth:e.attr("width")?e.attr("width"):e.attr(t._prefixAttributeName("width")),objectHeight:e.attr("height")?e.attr("height"):e.attr(t._prefixAttributeName("height"))};if(!t.settings.disableShrink)switch(i.maxWidth=parseInt(t.dimensions.windowWidth*t.settings.shrinkFactor),i.maxHeight=parseInt(t.dimensions.windowHeight*t.settings.shrinkFactor),i.maxWidth>t.settings.maxWidth&&(i.maxWidth=t.settings.maxWidth),i.maxHeight>t.settings.maxHeight&&(i.maxHeight=t.settings.maxHeight),i.differenceWidthAsPercent=parseInt(100/i.maxWidth*i.objectWidth),i.differenceHeightAsPercent=parseInt(100/i.maxHeight*i.objectHeight),t.objectData.type){case"image":case"flash":case"video":i.differenceWidthAsPercent>100&&i.differenceWidthAsPercent>i.differenceHeightAsPercent&&(i.objectWidth=i.maxWidth,i.objectHeight=parseInt(i.objectHeight/i.differenceWidthAsPercent*100)),i.differenceHeightAsPercent>100&&i.differenceHeightAsPercent>i.differenceWidthAsPercent&&(i.objectWidth=parseInt(i.objectWidth/i.differenceHeightAsPercent*100),i.objectHeight=i.maxHeight),i.differenceHeightAsPercent>100&&i.differenceWidthAsPercent<i.differenceHeightAsPercent&&(i.objectWidth=parseInt(i.maxWidth/i.differenceHeightAsPercent*i.differenceWidthAsPercent),i.objectHeight=i.maxHeight);break;case"error":!isNaN(i.objectWidth)&&i.objectWidth>i.maxWidth&&(i.objectWidth=i.maxWidth);break;default:(isNaN(i.objectWidth)||i.objectWidth>i.maxWidth)&&!t.settings.forceWidth&&(i.objectWidth=i.maxWidth),(isNaN(i.objectHeight)&&"auto"!==i.objectHeight||i.objectHeight>i.maxHeight)&&!t.settings.forceHeight&&(i.objectHeight=i.maxHeight)}t.settings.forceWidth?i.maxWidth=i.objectWidth:e.attr(t._prefixAttributeName("max-width"))&&(i.maxWidth=e.attr(t._prefixAttributeName("max-width"))),t.settings.forceHeight?i.maxHeight=i.objectHeight:e.attr(t._prefixAttributeName("max-height"))&&(i.maxHeight=e.attr(t._prefixAttributeName("max-height"))),t._adjustDimensions(e,i)},_adjustDimensions:function(e,i){e.css({width:i.objectWidth,height:i.objectHeight,"max-width":i.maxWidth,"max-height":i.maxHeight}),t.objects.contentInner.css({width:e.outerWidth(),height:e.outerHeight(),"max-width":"100%"}),t.objects["case"].css({width:t.objects.contentInner.outerWidth()}),t.objects["case"].css({"margin-top":parseInt(-(t.objects["case"].outerHeight()/2)),"margin-left":parseInt(-(t.objects["case"].outerWidth()/2))})},_loading:function(e){"start"===e?(t.objects["case"].addClass(t.settings.classPrefix+"loading"),t.objects.loading.show()):"end"===e&&(t.objects["case"].removeClass(t.settings.classPrefix+"loading"),t.objects.loading.hide())},getViewportDimensions:function(){return{windowWidth:e(window).innerWidth(),windowHeight:e(window).innerHeight()}},_verifyDataUrl:function(e){return!(!e||void 0===e||""===e)&&(e.indexOf("#")>-1&&(e=e.split("#"),e="#"+e[e.length-1]),t._normalizeUrl(e.toString()))},_verifyDataType:function(e){var i=t.settings.typeMapping;if(!e)return!1;for(var n in i)if(i.hasOwnProperty(n))for(var s=i[n].split(","),o=0;o<s.length;o++){var a=s[o].toLowerCase(),r=new RegExp(".("+a+")$","i"),c=e.toLowerCase().split("?")[0].substr(-5);if(r.test(c)===!0||"inline"===n&&e.indexOf(a)>-1)return n}return"iframe"},_addElements:function(){"undefined"!=typeof t.objects["case"]&&e("#"+t.objects["case"].attr("id")).length||t.settings.markup()},_showContent:function(e){switch(t.objects["case"].attr(t._prefixAttributeName("type"),t.objectData.type),t.cache.object=e,t._calculateDimensions(e),t._callHooks(t.settings.onFinish),t.settings.transitionIn){case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollHorizontal":case"scrollVertical":t.transition.scroll(t.objects["case"],"in",t.settings.speedIn),t.transition.fade(t.objects.contentInner,"in",t.settings.speedIn);break;case"elastic":t.objects["case"].css("opacity")<1&&(t.transition.zoom(t.objects["case"],"in",t.settings.speedIn),t.transition.fade(t.objects.contentInner,"in",t.settings.speedIn));case"fade":case"fadeInline":t.transition.fade(t.objects["case"],"in",t.settings.speedIn),t.transition.fade(t.objects.contentInner,"in",t.settings.speedIn);break;default:t.transition.fade(t.objects["case"],"in",0)}t._loading("end"),t.isBusy=!1},_processContent:function(){switch(t.isBusy=!0,t.settings.transitionOut){case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollVertical":case"scrollHorizontal":t.objects["case"].is(":hidden")?(t.transition.fade(t.objects["case"],"out",0,0,function(){t._loadContent()}),t.transition.fade(t.objects.contentInner,"out",0)):t.transition.scroll(t.objects["case"],"out",t.settings.speedOut,function(){t._loadContent()});break;case"fade":t.objects["case"].is(":hidden")?t.transition.fade(t.objects["case"],"out",0,0,function(){t._loadContent()}):t.transition.fade(t.objects["case"],"out",t.settings.speedOut,0,function(){t._loadContent()});break;case"fadeInline":case"elastic":t.objects["case"].is(":hidden")?t.transition.fade(t.objects["case"],"out",0,0,function(){t._loadContent()}):t.transition.fade(t.objects.contentInner,"out",t.settings.speedOut,0,function(){t._loadContent()});break;default:t.transition.fade(t.objects["case"],"out",0,0,function(){t._loadContent()})}},_handleEvents:function(){t._unbindEvents(),t.objects.nav.children().not(t.objects.close).hide(),t.isSlideshowEnabled()&&(t.settings.slideshowAutoStart!==!0&&!t.isSlideshowStarted||t.objects.nav.hasClass(t.settings.classPrefix+"paused")?t._stopTimeout():t._startTimeout()),t.settings.liveResize&&t._watchResizeInteraction(),t.objects.close.click(function(e){e.preventDefault(),t.close()}),t.settings.closeOnOverlayClick===!0&&t.objects.overlay.css("cursor","pointer").click(function(e){e.preventDefault(),t.close()}),t.settings.useKeys===!0&&t._addKeyEvents(),t.objectData.isPartOfSequence&&(t.objects.nav.attr(t._prefixAttributeName("ispartofsequence"),!0),t.objects.nav.data("items",t._setNavigation()),t.objects.prev.click(function(e){e.preventDefault(),t.settings.navigateEndless!==!0&&t.item.isFirst()||(t.objects.prev.unbind("click"),t.cache.action="prev",t.objects.nav.data("items").prev.click(),t.isSlideshowEnabled()&&t._stopTimeout())}),t.objects.next.click(function(e){e.preventDefault(),t.settings.navigateEndless!==!0&&t.item.isLast()||(t.objects.next.unbind("click"),t.cache.action="next",t.objects.nav.data("items").next.click(),t.isSlideshowEnabled()&&t._stopTimeout())}),t.isSlideshowEnabled()&&(t.objects.play.click(function(e){e.preventDefault(),t._startTimeout()}),t.objects.pause.click(function(e){e.preventDefault(),t._stopTimeout()})),t.settings.swipe===!0&&(e.isPlainObject(e.event.special.swipeleft)&&t.objects["case"].on("swipeleft",function(e){e.preventDefault(),t.objects.next.click(),t.isSlideshowEnabled()&&t._stopTimeout()}),e.isPlainObject(e.event.special.swiperight)&&t.objects["case"].on("swiperight",function(e){e.preventDefault(),t.objects.prev.click(),t.isSlideshowEnabled()&&t._stopTimeout()})))},_addKeyEvents:function(){e(document).bind("keyup.lightcase",function(e){if(!t.isBusy)switch(e.keyCode){case 27:t.objects.close.click();break;case 37:t.objectData.isPartOfSequence&&t.objects.prev.click();break;case 39:t.objectData.isPartOfSequence&&t.objects.next.click()}})},_startTimeout:function(){t.isSlideshowStarted=!0,t.objects.play.hide(),t.objects.pause.show(),t.cache.action="next",t.objects.nav.removeClass(t.settings.classPrefix+"paused"),t.timeout=setTimeout(function(){t.objects.nav.data("items").next.click()},t.settings.timeout)},_stopTimeout:function(){t.objects.play.show(),t.objects.pause.hide(),t.objects.nav.addClass(t.settings.classPrefix+"paused"),clearTimeout(t.timeout)},_setNavigation:function(){var i=e(t.cache.selector||t.settings.attr),n=t.objectData.sequenceLength-1,s={prev:i.eq(t.objectData.prevIndex),next:i.eq(t.objectData.nextIndex)};return t.objectData.currentIndex>0?t.objects.prev.show():s.prevItem=i.eq(n),t.objectData.nextIndex<=n?t.objects.next.show():s.next=i.eq(0),t.settings.navigateEndless===!0&&(t.objects.prev.show(),t.objects.next.show()),s},item:{isFirst:function(){return 0===t.objectData.currentIndex},isLast:function(){return t.objectData.currentIndex===t.objectData.sequenceLength-1}},_cloneObject:function(e){var i=e.clone(),n=e.attr("id");return e.is(":hidden")?(t._cacheObjectData(e),e.attr("id",t.settings.idPrefix+"temp-"+n).empty()):i.removeAttr("id"),i.show()},isMobileDevice:function(){return!!navigator.userAgent.toLowerCase().match(t.settings.mobileMatchExpression)},isTransitionSupported:function(){var i=e("body").get(0),n=!1,s={transition:"",WebkitTransition:"-webkit-",MozTransition:"-moz-",OTransition:"-o-",MsTransition:"-ms-"};for(var o in s)s.hasOwnProperty(o)&&o in i.style&&(t.support.transition=s[o],n=!0);return n},transition:{fade:function(e,i,n,s,o){var a="in"===i,r={},c=e.css("opacity"),l={},d=s?s:a?1:0;!t.isOpen&&a||(r.opacity=c,l.opacity=d,e.css(r).show(),t.support.transitions?(l[t.support.transition+"transition"]=n+"ms ease",setTimeout(function(){e.css(l),setTimeout(function(){e.css(t.support.transition+"transition",""),!o||!t.isOpen&&a||o()},n)},15)):(e.stop(),e.animate(l,n,o)))},scroll:function(e,i,n,s){var o="in"===i,a=o?t.settings.transitionIn:t.settings.transitionOut,r="left",c={},l=o?0:1,d=o?"-50%":"50%",u={},f=o?1:0,p=o?"50%":"-50%";if(t.isOpen||!o){switch(a){case"scrollTop":r="top";break;case"scrollRight":d=o?"150%":"50%",p=o?"50%":"150%";break;case"scrollBottom":r="top",d=o?"150%":"50%",p=o?"50%":"150%";break;case"scrollHorizontal":d=o?"150%":"50%",p=o?"50%":"-50%";break;case"scrollVertical":r="top",d=o?"-50%":"50%",p=o?"50%":"150%"}if("prev"===t.cache.action)switch(a){case"scrollHorizontal":d=o?"-50%":"50%",p=o?"50%":"150%";break;case"scrollVertical":d=o?"150%":"50%",p=o?"50%":"-50%"}c.opacity=l,c[r]=d,u.opacity=f,u[r]=p,e.css(c).show(),t.support.transitions?(u[t.support.transition+"transition"]=n+"ms ease",setTimeout(function(){e.css(u),setTimeout(function(){e.css(t.support.transition+"transition",""),!s||!t.isOpen&&o||s()},n)},15)):(e.stop(),e.animate(u,n,s))}},zoom:function(e,i,n,s){var o="in"===i,a={},r=e.css("opacity"),c=o?"scale(0.75)":"scale(1)",l={},d=o?1:0,u=o?"scale(1)":"scale(0.75)";!t.isOpen&&o||(a.opacity=r,a[t.support.transition+"transform"]=c,l.opacity=d,e.css(a).show(),t.support.transitions?(l[t.support.transition+"transform"]=u,l[t.support.transition+"transition"]=n+"ms ease",setTimeout(function(){e.css(l),setTimeout(function(){e.css(t.support.transition+"transform",""),e.css(t.support.transition+"transition",""),!s||!t.isOpen&&o||s()},n)},15)):(e.stop(),e.animate(l,n,s)))}},_callHooks:function(i){"object"==typeof i&&e.each(i,function(e,i){"function"==typeof i&&i.call(t.origin)})},_cacheObjectData:function(i){e.data(i,"cache",{id:i.attr("id"),content:i.html()}),t.cache.originalObject=i},_restoreObject:function(){var i=e('[id^="'+t.settings.idPrefix+'temp-"]');i.attr("id",e.data(t.cache.originalObject,"cache").id),i.html(e.data(t.cache.originalObject,"cache").content)},resize:function(){t.isOpen&&(t.isSlideshowEnabled()&&t._stopTimeout(),t.dimensions=t.getViewportDimensions(),t._calculateDimensions(t.cache.object))},_cacheScrollPosition:function(){var i=e(window),n=e(document),s={top:i.scrollTop(),left:i.scrollLeft()};t.cache.scrollPosition=t.cache.scrollPosition||{},t._assertContentInvisible()?t.cache.cacheScrollPositionSkipped?(delete t.cache.cacheScrollPositionSkipped,t._restoreScrollPosition()):(n.width()>i.width()&&(t.cache.scrollPosition.left=s.left),n.height()>i.height()&&(t.cache.scrollPosition.top=s.top)):t.cache.cacheScrollPositionSkipped=!0},_watchResizeInteraction:function(){e(window).resize(t.resize)},_unwatchResizeInteraction:function(){e(window).off("resize",t.resize)},_watchScrollInteraction:function(){e(window).scroll(t._cacheScrollPosition),e(window).resize(t._cacheScrollPosition)},_unwatchScrollInteraction:function(){e(window).off("scroll",t._cacheScrollPosition),e(window).off("resize",t._cacheScrollPosition)},_assertContentInvisible:function(){return e(e("body").children().not("[id*="+t.settings.idPrefix+"]").get(0)).height()>0},_restoreScrollPosition:function(){e(window).scrollTop(parseInt(t.cache.scrollPosition.top)).scrollLeft(parseInt(t.cache.scrollPosition.left)).resize()},_switchToFullScreenMode:function(){t.settings.shrinkFactor=1,t.settings.overlayOpacity=1,e("html").addClass(t.settings.classPrefix+"fullScreenMode")},_open:function(){switch(t.isOpen=!0,t.support.transitions=!!t.settings.cssTransitions&&t.isTransitionSupported(),t.support.mobileDevice=t.isMobileDevice(),t.support.mobileDevice&&(e("html").addClass(t.settings.classPrefix+"isMobileDevice"),t.settings.fullScreenModeForMobile&&t._switchToFullScreenMode()),t.settings.transitionIn||(t.settings.transitionIn=t.settings.transition),t.settings.transitionOut||(t.settings.transitionOut=t.settings.transition),t.settings.transitionIn){case"fade":case"fadeInline":case"elastic":case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollVertical":case"scrollHorizontal":t.objects["case"].is(":hidden")&&(t.objects.close.css("opacity",0),t.objects.overlay.css("opacity",0),t.objects["case"].css("opacity",0),t.objects.contentInner.css("opacity",0)),t.transition.fade(t.objects.overlay,"in",t.settings.speedIn,t.settings.overlayOpacity,function(){t.transition.fade(t.objects.close,"in",t.settings.speedIn),t._handleEvents(),t._processContent()});break;default:t.transition.fade(t.objects.overlay,"in",0,t.settings.overlayOpacity,function(){t.transition.fade(t.objects.close,"in",0),t._handleEvents(),t._processContent()})}e("html").addClass(t.settings.classPrefix+"open"),t.objects["case"].attr("aria-hidden","false")},close:function(){switch(t.isOpen=!1,t.isSlideshowEnabled()&&(t._stopTimeout(),t.isSlideshowStarted=!1,t.objects.nav.removeClass(t.settings.classPrefix+"paused")),t.objects.loading.hide(),t._unbindEvents(),t._unwatchResizeInteraction(),t._unwatchScrollInteraction(),e("html").removeClass(t.settings.classPrefix+"open"),t.objects["case"].attr("aria-hidden","true"),t.objects.nav.children().hide(),t._restoreScrollPosition(),t._callHooks(t.settings.onClose),t.settings.transitionOut){case"fade":case"fadeInline":case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollHorizontal":case"scrollVertical":t.transition.fade(t.objects["case"],"out",t.settings.speedOut,0,function(){t.transition.fade(t.objects.overlay,"out",t.settings.speedOut,0,function(){t.cleanup()})});break;case"elastic":t.transition.zoom(t.objects["case"],"out",t.settings.speedOut,function(){t.transition.fade(t.objects.overlay,"out",t.settings.speedOut,0,function(){t.cleanup()})});break;default:t.cleanup()}},_unbindEvents:function(){t.objects.overlay.unbind("click"),e(document).unbind("keyup.lightcase"),t.objects["case"].unbind("swipeleft").unbind("swiperight"),t.objects.prev.unbind("click"),t.objects.next.unbind("click"),t.objects.play.unbind("click"),t.objects.pause.unbind("click"),t.objects.close.unbind("click")},_cleanupDimensions:function(){var e=t.objects.contentInner.css("opacity");t.objects["case"].css({width:"",height:"",top:"",left:"","margin-top":"","margin-left":""}),t.objects.contentInner.removeAttr("style").css("opacity",e),t.objects.contentInner.children().removeAttr("style")},cleanup:function(){t._cleanupDimensions(),t.objects.loading.hide(),t.objects.overlay.hide(),t.objects["case"].hide(),t.objects.prev.hide(),t.objects.next.hide(),t.objects.play.hide(),t.objects.pause.hide(),t.objects["case"].removeAttr(t._prefixAttributeName("type")),t.objects.nav.removeAttr(t._prefixAttributeName("ispartofsequence")),t.objects.contentInner.empty().hide(),t.objects.info.children().empty(),t.cache.originalObject&&t._restoreObject(),t._callHooks(t.settings.onCleanup),t.cache={}},_matchMedia:function(){return window.matchMedia||window.msMatchMedia},_devicePixelRatio:function(){return window.devicePixelRatio||1},_isPublicMethod:function(e){return"function"==typeof t[e]&&"_"!==e.charAt(0)},_export:function(){window.lightcase={},e.each(t,function(e){t._isPublicMethod(e)&&(lightcase[e]=t[e])})}};t._export(),e.fn.lightcase=function(i){return t._isPublicMethod(i)?t[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.lightcase"):t.init.apply(this,arguments)}}(jQuery);