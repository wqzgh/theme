/*! light-blue - v3.1.0 - 2014-12-06 */$(function(){function a(){"use strict";var a=$("#fileupload");a.fileupload({url:"server/php/",dropZone:$("#dropzone")}),a.fileupload("option","redirect",window.location.href.replace(/\/[^\/]*$/,"/cors/result.html?%s")),$.ajax({url:a.fileupload("option","url"),dataType:"json",context:a[0]}).done(function(a){$(this).fileupload("option","done").call(this,$.Event("done"),{result:a})})}a(),PjaxApp.onPageLoad(a)});