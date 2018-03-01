CKEDITOR.plugins.add( 'uploadimage', {
    icons: 'uploadimage',
    init: function( editor ) {
        var openimagespace;
        angular.module('ckeditor', ['ui.bootstrap','mch']).run(function($modal){
            openimagespace=function(editor) {
                var modalInstance = $modal.open({
                    animation: false,
                    windowClass: 'imageUploadModal',
                    templateUrl: 'assets/js/apps/common/templates/addimage.space.html',
                    controller: ['$scope', '$http', '$modalInstance', 'attachment', 'attachmentGroup', function ($scope, $http, $modalInstance, attachment, attachmentGroup) {
                        $scope._global = _global;
                        $scope.upimages=0;
                        $scope.searchParam = {groupid: 0};
                        $scope.lastSearchParam = {};
                        $scope.paginationConf = {
                            currentPage: 1,
                            itemsPerPage: 18
                        };

                        //分组
                        attachmentGroup.get(function(res) {
                            $scope.groupList = res.data;
                        });

                        var reGetProducts = function(){
                            var postData = {
                                offset: ($scope.paginationConf.currentPage - 1) * $scope.paginationConf.itemsPerPage,
                                limit: $scope.paginationConf.itemsPerPage,
                                type: 'image',
                                group_id: $scope.searchParam.groupid,
                                title: $scope.searchParam.title
                            };

                            if($scope.searchParam.title){
                                $scope.lastSearchParam.title = $scope.searchParam.title;
                            }
                            
                            attachment.getList(postData, function(data){
                                $scope.paginationConf.totalItems = data._count;
                                $scope.images = data.data;
                            });
                        };
                        
                        $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage + upimages', reGetProducts);
                        $scope.choose = function(item){
                            $scope.selectedImages = [];
                            item.checked = !item.checked;
                            angular.forEach($scope.images,function(item){
                                if(item.checked == true)
                                {
                                    $scope.selectedImages.push(item);
                                }
                            });
                        };

                        $scope.ok = function () {
                            if(!angular.isUndefined($scope.selectedImages))
                            {
                                $modalInstance.close($scope.selectedImages);
                            }else{
                                $modalInstance.dismiss('cancel');
                            }

                        };

                        $scope.cancel = function () {
                            $modalInstance.dismiss('cancel');
                        };

                        $scope.search = function(groupid) {
                            if(angular.isDefined(groupid) && $scope.searchParam.groupid != groupid){
                                delete $scope.searchParam.title;
                                delete $scope.lastSearchParam.title
                                $scope.searchParam.groupid = parseInt(groupid);

                                //通知 upLoad 指令更改 group_id 值
                                $scope.$broadcast('group_id', $scope.searchParam.groupid);

                                pageStep();
                            }else{
                                if($scope.lastSearchParam.title != $scope.searchParam.title){
                                    reGetProducts();
                                }
                            }
                        }

                        var pageStep = function(){
                            if ($scope.paginationConf.currentPage != 1) {
                                $scope.paginationConf.currentPage = 1;
                            } else {
                                reGetProducts();
                            }
                        }
                    }]
                });
                modalInstance.result.then(function (selectedImages) {
                    function getSelectedImage( editor ) {
                        var sel = editor.getSelection();
                        var element = sel.getSelectedElement();
                        return element;
                    }
                    var img = getSelectedImage( editor );

                    if(img!=null){
                        img.setAttribute( 'src',selectedImages[0].url);
                    }else{
                        var html = '';
                        angular.forEach(selectedImages, function (item) {
                            if(!angular.isUndefined(editor.config.size)) {
                                html += '<img style="max-width:100%" src="' + _global.url.ms + item.url +'?imageMogr2/thumbnail/640x/interlace/1'+ '"/>'
                            } else {
                                html += '<img style="max-width:100%" src="' + _global.url.ms + item.url +'"/>'
                            }

                        });
                        editor.insertHtml(html);
                    }

                });
            }
        });
        angular.bootstrap(editor.element, ['ckeditor']);



        editor.addCommand( 'uploadimage', {
            exec: function(editor) {
                openimagespace(editor);
            }
        } );

        editor.ui.addButton( 'Uploadimage', {
            label: '插入图片',
            command: 'uploadimage',
            toolbar: 'uploadimage'
        });

    }
});