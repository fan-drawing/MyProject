//下面用于多图片上传预览功能
// function IdName(name) {
//     var dd = document.getElementById(name);
//     // return dd;
//     // setImagePreviews()
// }
// IdName("imgShowBox");


function setImagePreviews(name) {

    var docObj = document.getElementById("doc");
    var docObj2 = document.getElementById("doc2");

    var dd = document.getElementById(name);
    dd.innerHTML = "";

    var fileList = docObj.files;
    var fileList2 = docObj2.files;

    for (var i = 0; i < fileList.length; i++) {



        dd.innerHTML += "<div style='float:left' > <img id='img" + i + "'  /> </div>";

        var imgObjPreview = document.getElementById("img" + i);

        if (docObj.files && docObj.files[i]) {

            //火狐下，直接设img属性

            imgObjPreview.style.display = 'block';

            imgObjPreview.style.width = '5.25rem';

            imgObjPreview.style.height = '5.25rem';

            //imgObjPreview.src = docObj.files[0].getAsDataURL();

            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式

            imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);

        } else {

            //IE下，使用滤镜

            docObj.select();

            var imgSrc = document.selection.createRange().text;

            alert(imgSrc)

            var localImagId = document.getElementById("img" + i);

            //必须设置初始大小

            localImagId.style.width = "5.25rem";

            localImagId.style.height = "5.25rem";

            //图片异常的捕捉，防止用户修改后缀来伪造图片

            try {

                localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

            } catch (e) {

                alert("您上传的图片格式不正确，请重新选择!");

                return false;

            }

            imgObjPreview.style.display = 'none';

            document.selection.empty();

        }

    }


    for (var i = 0; i < fileList2.length; i++) {

        dd.innerHTML += "<div style='float:left' > <img id='img2" + i + "'  /> </div>";

        var imgObjPreview = document.getElementById("img2" + i);
        if (docObj2.files && docObj2.files[i]) {

            //火狐下，直接设img属性

            imgObjPreview.style.display = 'block';

            imgObjPreview.style.width = '5.25rem';

            imgObjPreview.style.height = '5.25rem';

            //imgObjPreview.src = docObj.files[0].getAsDataURL();

            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式

            imgObjPreview.src = window.URL.createObjectURL(docObj2.files[i]);

        } else {

            //IE下，使用滤镜

            docObj2.select();

            var imgSrc = document.selection.createRange().text;

            alert(imgSrc)

            var localImagId = document.getElementById("img" + i);

            //必须设置初始大小

            localImagId.style.width = "5.25rem";

            localImagId.style.height = "5.25rem";

            //图片异常的捕捉，防止用户修改后缀来伪造图片

            try {

                localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

            } catch (e) {

                alert("您上传的图片格式不正确，请重新选择!");

                return false;

            }

            imgObjPreview.style.display = 'none';

            document.selection.empty();

        }

    }
    return true;

}

// setImagePreviews("imgShowBox");


$(function() {
    $('.removeLi').on('click', function() {
        $(this).parents('li').remove();
    })
    $('.relevancy li').on('click', function() {
        $(this).addClass('li-current').siblings().removeClass('li-current');
        var vaLue = $(this).text();
        $('.gradeInput').val(vaLue);
    })
    $('.head').on('click', function() {
        $('.create-popUp').hide();


    })
    $('.gradeInput').on('click', function() {
        $('.create-popUp').show();
    })
    $('.right-collect').on('click', function() {
        $(this).find('img').toggle();
    })

    $('.Details-bom .box').eq(1).on('click', function() {
        $(this).find('img').toggle();
    })
});