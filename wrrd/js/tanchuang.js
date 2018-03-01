



// 删除弹窗： onclick="removePage($(this))"
/*   <div id="deletelist" class="popover ng-scope left" ng-class="vm.popoverPlacement" style="display: none;">
        <div class="arrow"></div>
        <div class="popover-content">
            <p  class="ng-binding">确认删除？</p>
            <button class="btn btn-sm ng-binding btn-primary"  style="">确认</button>
            <button class="btn btn-sm ng-binding btn-default"  style="">取消</button>
        </div>
    </div>
*/
var deleteMemory;
function removePage(that){
            deleteMemory=that;
            var top1=that.offset().top;
            var top2=that.outerHeight()/2;
            var width=that.outerWidth();
            var top=top1+top2-35+'px';
            var left=that.offset().left-123+'px';
            $('#deletelist').css({'top':top,'left':left}).show();
}
$('#deletelist button:first').click(function(){
    $(this).parents('#deletelist').hide();
    deleteMemory.parents('tr').remove();
})
$('#deletelist button:last').click(function(){
    $(this).parents('#deletelist').hide();
})




//链接弹窗:onclick="open_copy($(this))"
/*<div id="ng-popover" class="left">
    <div class="arrow ng-scope"></div>
    <div class="content ng-scope">
        <div class="form-inline">
            <div class="input-group input-group-sm">
                <input type="text" id="hrtext" class="form-control input-sm disabled ng-pristine ng-untouched ng-valid" disabled="" style="width: 216px;" value="10">
                <button style="outline: none" class="input-group-addon ng-isolate-scope" clip-copy="copy_text" clip-click="showMessage()" onclick="copy($(this));">复制</button>
            </div>
        </div>
    </div>
</div>*/

function open_copy(that){
    var top1=that.offset().top;
    var top2=that.outerHeight()/2;
    var width=that.outerWidth();
    var top=top1+top2-25+'px';
    var left=that.offset().left-285+'px';
    $('#ng-popover').css({'top':top,'left':left}).show();
}

function copy(that){
    
    var Url=$("#hrtext").val();
    copyToClipboard(Url);
    
}
function copyToClipboard(maintext){
  if (window.clipboardData){
    window.clipboardData.setData("Text", maintext);
    }else if (window.netscape){
      try{
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
    }catch(e){
        alert("该浏览器不支持一键复制！n请手工复制文本框链接地址～");
    }

    var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
    if (!clip) return;
    var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
    if (!trans) return;
    trans.addDataFlavor('text/unicode');
    var str = new Object();
    var len = new Object();
    var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
    var copytext=maintext;
    str.data=copytext;
    trans.setTransferData("text/unicode",str,copytext.length*2);
    var clipid=Components.interfaces.nsIClipboard;
    if (!clip) return false;
    clip.setData(trans,null,clipid.kGlobalClipboard);
  }
  alert("以下内容已经复制到剪贴板n^o^n" + maintext);
}






//设为首页弹窗:

/*<div id="firstPset" class="popover ng-scope left" ng-class="vm.popoverPlacement" style="display: block; top: 188px; left: 1062px;">
    <div class="arrow"></div>
    <div class="popover-content">
        <p ng-bind-html="vm.message" class="ng-binding">确认设为首页？</p>
        <button class="btn btn-sm ng-binding btn-primary" ng-class="'btn-' + (vm.confirmButtonType || vm.defaults.confirmButtonType)" ng-click="vm.onConfirm(); vm.hidePopover()" ng-bind-html="vm.confirmText || vm.defaults.confirmText" style="">确认</button>
        <button class="btn btn-sm ng-binding btn-default" ng-class="'btn-' + (vm.cancelButtonType || vm.defaults.cancelButtonType)" ng-click="vm.onCancel(); vm.hidePopover()" ng-bind-html="vm.cancelText || vm.defaults.cancelText" style="">取消</button>
    </div>
</div>*/

function setHomePage(that){
        deleteMemory=that;
        var top1=that.offset().top;
        var top2=that.outerHeight()/2;
        var width=that.outerWidth();
        var top=top1+top2-35+'px';
        var left=that.offset().left-123+'px';
        $('#firstPset').css({'top':top,'left':left}).show();
}
$('#firstPset button:first').click(function(){
    $(this).parents('#firstPset').hide();
    deleteMemory.parents('tr').remove();
})
$('#firstPset button:last').click(function(){
    $(this).parents('#firstPset').hide();
})
