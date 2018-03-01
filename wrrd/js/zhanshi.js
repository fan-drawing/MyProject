
function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return "";
}
Vue.use(VueDragging)
var vm = new Vue({
      el: '#index',
      data:{
        apply:{
           applyset:1,/*退可申请设置，1需要申请，2关注即成为推客*/
           applymode:1,/*申请审核方式，1系统自动审核，2上级分销商审核，3总部审核*/
           applydateset:1,/*邀请有效期，1一次，2永久*/
           applyterm:false,/*申请条件设置*/
           applyitem:false,/*需要完善信息*/
           lists:[
              {name:"",type:""}   /*1单行文本 2多行文本 3数字格式 4邮件格式 5日期 6时间 7身份证号码*/
           ],


        },
           
        selectindex:1,
        kuangindex:0,
        imgindex:0,
        kuangindexs:0,
        show:[],
        zhanshi:[],
        selectgoods:{
            show:false,
            lists:[
            {select:false,imggoods:"./img/FgbY8YSDPf5UXomE1Ik0G77YUJrH.jpg",namegoods:"葡萄酒",price:"",allnum:"1",paynum:"1"},
            {select:false,imggoods:"./img/FiQqYn_4aoe8kyO8sqlgYZxxVutz.jpg",namegoods:"香水",price:"",allnum:"2",paynum:"1"},
            {select:false,imggoods:"./img/FiQqYn_4aoe8kyO8sqlgYZxxVutz.jpg",namegoods:"女士短袖",price:"",allnum:"3",paynum:"1"},
            {select:false,imggoods:"./img/FtcAqhQbTmtnfbqw3kVjU9boaK2F.jpg",namegoods:"测试用品",price:"",allnum:"4",paynum:"1"}
          ],
        },
        selectgroup:{
          show:false,
          count:1,
          use:["所有商品"],
          lists:["香水系列","兰蔻香水","长效","乳制品"],
        },
        addgoods:[],
        picset:{

          show:false,
          lists:[
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"},
            {select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name1"},{select:false,img:'./img/FhAFNb6bG-P8K43fn967lQG9AeTZ.jpg',name:"name2"},{select:false,img:'./img/FhuIPmZqq4SeUpEt3KsOuGkn-g2_.jpg',name:"name3"}
          
          ],
        }
        

      },
      mounted:function(){
             // initSample();
            

      },
      methods:{
        color:function(index){
              $('.colorselector-in').ColorPicker({
                  color: '#0000ff',
                  onShow: function (colpkr) {
                      $(colpkr).fadeIn(500);
                      return false;
                  },
                  onHide: function (colpkr) {
                      $(colpkr).fadeOut(500);
                      return false;
                  },
                  onChange: function (hsb, hex, rgb) {
                      $('#three section .search-inner').css('backgroundColor', '#' + hex);
                      $('.colorselector-in .colorSelector .color-child').css('backgroundColor', '#' + hex);
                      this.zhanshi[index].value.incolor="#"+hex;
                  }.bind(this)

              });
             $('.colorselector-out').ColorPicker({
                color: '#0000ff',
                onShow: function (colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function (colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function (hsb, hex, rgb) {
                   $('#three section ').css('backgroundColor', '#' + hex);
                   $('.colorselector-out .colorSelector .color-child').css('backgroundColor', '#' + hex);
                   this.zhanshi[index].value.outcolor="#"+hex;

                }.bind(this)

            });
        },
   

           applyset:function(num){
              this.apply.applyset=num;
           },
           applymode:function(num){
              this.apply.applymode=num;
           },
           applydateset:function(num){
              this.apply.applydateset=num;
           },
           applyterm:function(){
              this.apply.applyterm=!this.apply.applyterm;
           },
           applyitem:function(){
              this.apply.applyitem=!this.apply.applyitem;
           },
           addField:function(){
              this.apply.lists.push({name:"",type:1}); 
           },
           deleteFields:function(index){
              this.apply.lists.splice(index,1);
           },

          showgroup:function(){
            this.selectgroup.show=!this.selectgroup.show;
          },
          deleteuse:function(index,indexs){
            var ji=this.zhanshi[index].value.select[index];
            this.selectgroup.lists.push(ji);
            this.zhanshi[index].value.select.splice(index,1);
          },
          addgroups:function(index,indexs){
            if(this.zhanshi[index].value.select.length<4){
              var ji=this.selectgroup.lists[index];
              this.zhanshi[index].value.select.push(ji);
              this.selectgroup.lists.splice(index,1);

            }else{
              alert('不能多于4个');
            }
            this.selectgroup.show=!this.selectgroup.show;

          },

/*分组*/
        highttasks:function(num,index){
          this.zhanshi[index].value.hightstyle=num;
          if(num==1){
            this.zhanshi[index].value.pageHeight="";
          }
        },

        selector1:function(index){
            this.zhanshi[index].value.style=1;
        },
         selector2:function(index){
            this.zhanshi[index].value.style=2;
             this.$nextTick(function () {
              console.log("更新完成") ;// => '更新完成'
              this.color(index);
            });
        },
        tuilogo:function(index){/*店招*/
            this.zhanshi[index].value.type=1;

            this.zhanshi[index].value.title="XXX的小店";
        },
        dianlogo:function(index){/*店招*/
           this.zhanshi[index].value.type=2;
            this.zhanshi[index].value.title="战狼舰队";
        },
         logoone:function(index){/*店招*/
            this.zhanshi[index].value.style="first";
        },
        logotwo:function(index){/*店招*/
          this.zhanshi[index].value.style="second";
        },

        remove:function(index){/*删除一条*/
          this.zhanshi.splice(index,1);
        },



//cubes
      changecubestyle:function(num,index){
        var array=[];
          this.zhanshi[index].value.style=num;
          switch(num){
            case 1: array=[ {img:"./img/640X.png",name:"导航",href:""},{img:"./img/640X.1.png",name:"导航",href:""}]; break;
            case 2: array=[ {img:"./img/640X.png",name:"导航",href:""},{img:"./img/640X.1.png",name:"导航",href:""}]; break;
            case 3: array=[ {img:"./img/300X300.png",name:"导航",href:""},{img:"./img/300X300.png",name:"导航",href:""}]; break;
            case 4: array=[ {img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""}]; break;
            case 5: array=[ {img:"./img/640X.png",name:"导航",href:""},{img:"./img/640X.1.png",name:"导航",href:""}]; break;
            case 6: array=[ {img:"./img/300X320.png",name:"导航",href:""},{img:"./img/300X150.png",name:"导航",href:""},{img:"./img/300X150.png",name:"导航",href:""}]; break;
            case 7: array=[ {img:"./img/200X200.png",name:"导航",href:""},{img:"./img/400X200.png",name:"导航",href:""},{img:"./img/400X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""}]; break;
            case 8: array=[ {img:"./img/300X150.png",name:"导航",href:""},{img:"./img/300X300.png",name:"导航",href:""},{img:"./img/300X300.png",name:"导航",href:""},{img:"./img/300X150.png",name:"导航",href:""}]; break;
            case 9: array=[ {img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X420.png",name:"导航",href:""}]; break;
          }
          this.zhanshi[index].value.lists=array;

      },
      changecubestylef:function(b,num,index){
        var array=[];
          this.zhanshi[index].value.tasklist[b].style=num;
          switch(num){
            case 1: array=[ {img:"./img/640X.png",name:"导航",href:""},{img:"./img/640X.1.png",name:"导航",href:""}]; break;
            case 2: array=[ {img:"./img/640X.png",name:"导航",href:""},{img:"./img/640X.1.png",name:"导航",href:""}]; break;
            case 3: array=[ {img:"./img/300X300.png",name:"导航",href:""},{img:"./img/300X300.png",name:"导航",href:""}]; break;
            case 4: array=[ {img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""}]; break;
            case 5: array=[ {img:"./img/640X.png",name:"导航",href:""},{img:"./img/640X.1.png",name:"导航",href:""}]; break;
            case 6: array=[ {img:"./img/300X320.png",name:"导航",href:""},{img:"./img/300X150.png",name:"导航",href:""},{img:"./img/300X150.png",name:"导航",href:""}]; break;
            case 7: array=[ {img:"./img/200X200.png",name:"导航",href:""},{img:"./img/400X200.png",name:"导航",href:""},{img:"./img/400X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""}]; break;
            case 8: array=[ {img:"./img/300X150.png",name:"导航",href:""},{img:"./img/300X300.png",name:"导航",href:""},{img:"./img/300X300.png",name:"导航",href:""},{img:"./img/300X150.png",name:"导航",href:""}]; break;
            case 9: array=[ {img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X200.png",name:"导航",href:""},{img:"./img/200X420.png",name:"导航",href:""}]; break;
          }
          this.zhanshi[index].value.tasklist[b].lists=array;

      },



        adddaohang:function(index){
          this.zhanshi[index].value.lists.push({img:"./image/tag-icon.png",title:"导航1",href:"#",color:"#fff",colorsfont:'black'});
          this.$nextTick(function (){
                this.colors(index);
                this.colorsfont(index);
          })
          
        },
        deletedaohang:function(index,indexs){
           this.zhanshi[index].value.lists.splice(indexs,1);
        },
        


        iconstyle:function(ins,index){
          this.zhanshi[index].value.iconstyle=ins;
        },
        daohang:function(index){
          this.zhanshi[index].value.style=2;
        },
        fenzu:function(index){
          this.zhanshi[index].value.style=1;
        },

        widthyes:function(index){
          this.zhanshi[index].value.width="4px";
        },
        widthno:function(index){
          this.zhanshi[index].value.width="0px";
        },



        bullhornstyle1:function(index){
          this.zhanshi[index].value.style=1;
        },
         bullhornstyle2:function(index){
          this.zhanshi[index].value.style=2;
        },
        bullhornleft1:function(index){
          this.zhanshi[index].value.left=1;
        },
        bullhornleft2:function(index){
          this.zhanshi[index].value.left=2;
        },
        bullhornplay1:function(index){
          this.zhanshi[index].value.play=1;
        },
        bullhornplay2:function(index){
          this.zhanshi[index].value.play=2;
        },
        bullhornloop:function(index){
          this.zhanshi[index].value.loop=!this.zhanshi[index].value.loop;
        },
        showlists:function(index){
          this.zhanshi[index].value.active=!this.zhanshi[index].value.active;
        },

       
        close2:function(){
          this.picset.show=!this.picset.show;
        },
        selectset:function(index){
          this.picset.lists.select=!this.picset.lists.select;
        },


        showt:function(index,indexs){
          this.kuangindex=index;
          this.kuangindexs=indexs;
          imgindex=indexs;
          this.picset.show=true;
        },
        selectset:function(index){
          var l=this.picset.lists.length;
          this.picset.lists[index].select=!this.picset.lists[index].select;

        },
        ok2:function(){
            var l=this.picset.lists.length;
            alert(0);
            for(var i=0;i<l;i++){
              if(this.picset.lists[i].select){
                  this.zhanshi[this.kuangindex].value.lists[this.kuangindexs].img=this.picset.lists[i].img;
                break;
              }
            }
            
        },



        sign:function(index){
          this.zhanshi[index].value.sign=!this.zhanshi[index].value.sign;
        },
        driver:function(index){
          this.zhanshi[index].value.driver=!this.zhanshi[index].value.driver;
        },
        price:function(index){
          this.zhanshi[index].value.price=!this.zhanshi[index].value.price;
        },
        numpay:function(index){
          this.zhanshi[index].value.numpay=!this.zhanshi[index].value.numpay;
        },
        allbig:function(index){
          var i=1;
          this.zhanshi[index].value.style=i;
        },
        allrectangle:function(index){
          var i=2;
          this.zhanshi[index].value.style=2;
        },
        alllists:function(index){
          var i=3;
          this.zhanshi[index].value.style=3;
        },

        thumbset:function(num,index){
         this.zhanshi[index].value.num=num;       
        },
        thumbsort:function(sort,index){
         this.zhanshi[index].value.sort=sort;       
        },
        thumbstyle:function(style,index){
         this.zhanshi[index].value.style=style;       
        },
        thumbsign:function(index){
         this.zhanshi[index].value.sign=!this.zhanshi[index].value.sign;       
        },
         thumbcar:function(index){
         this.zhanshi[index].value.car=!this.zhanshi[index].value.car;       
        },
         thumbprice:function(index){
         this.zhanshi[index].value.price=!this.zhanshi[index].value.price;       
        },
         thumbpaynums:function(index){
         this.zhanshi[index].value.paynums=!this.zhanshi[index].value.paynums;       
        },

        // 分组分类
        tasksicon:function(b,num,index){
          this.zhanshi[index].value.tasklist[b].icontype=num;
        },
        taskslistnavtype:function(b,num,index){
          this.zhanshi[index].value.tasklist[b].listnavtype=num;
        },
        removetask:function(index,indexs){
          this.zhanshi[index].value.tasklist.splice(indexs,1);
        },
        changelist:function(index,indexs){
          this.zhanshi[index].value.slec=indexs;

        },
        addtasklist:function(index){
          var d={
                    style:1,
                    kindname:"分组",
                    listtopstyle:2,
                    listnavtype:1,
                    icontype:1,
                    iconheight:'30',
                    lists:[
                         
                    ],
                    listsnav:[
                      
                    ]
                };
          this.zhanshi[index].value.tasklist.push(d);
        },

        colors:function(index){
          var l=this.zhanshi[index].value.lists.length;
          var c=this.zhanshi[index].value.lists;
         
          for(var i=0;i<l;i++){
            function c(){
              var s= $('#'+index+'color'+i);
              var num=i;
              $('#'+index+'color'+num).ColorPicker({
                    color: '#0000ff',
                    onShow: function (colpkr){
                        $(colpkr).fadeIn(500);
                        return false;
                    },
                    onHide: function (colpkr) {
                        $(colpkr).fadeOut(500);
                        return false;
                    },
                    onChange: function (hsb, hex, rgb) {
                        vm.zhanshi[index].value.lists[num].color='#'+hex;
                        s.find('.color-child').css('backgroundColor', '#' + hex);

                    }.bind(this)

                }).bind(this);
            }
            c();
          }    
        },
        colorsfont:function(index){
          var l=this.zhanshi[index].value.lists.length;
          var c=this.zhanshi[index].value.lists;
         
          for(var i=0;i<l;i++){
            function b(){
              var s= $('#'+index+'colorfont'+i);
              var num=i;
              $('#'+index+'colorfont'+num).ColorPicker({
                    color: '#0000ff',
                    onShow: function (colpkr){
                        $(colpkr).fadeIn(500);
                        return false;
                    },
                    onHide: function (colpkr) {
                        $(colpkr).fadeOut(500);
                        return false;
                    },
                    onChange: function (hsb, hex, rgb) {
                        var x=vm.zhanshi[index].value.lists[num];
                        x.colors='#'+hex;
                        vm.zhanshi[index].value.lists.splice(num,1,x);
                        s.find('.color-child').css('backgroundColor', '#' + hex);

                    }.bind(this)

                }).bind(this);
            }
            b();
          }    
        },
        colortaska:function(bo,index){
          var l=this.zhanshi[index].value.tasklist[bo].listsnav.length;
          var c=this.zhanshi[index].value.tasklist[bo].listsnav;
         
          for(var i=0;i<l;i++){
            function d(){
              var s= $('#'+index+'colortask'+i);
              var num=i;
              $('#'+index+'colortask'+num).ColorPicker({
                    color: '#0000ff',
                    onShow: function (colpkr){
                        $(colpkr).fadeIn(500);
                        return false;
                    },
                    onHide: function (colpkr) {
                        $(colpkr).fadeOut(500);
                        return false;
                    },
                    onChange: function (hsb, hex, rgb) {
                        vm.zhanshi[index].value.tasklist[bo].listsnav[num].colors='#'+hex;
                        s.find('.color-child').css('backgroundColor', '#' + hex);
                    }.bind(this)

                }).bind(this);
            }
            d();
          }    
        },
         colortaskb:function(bo,index){
          var l=this.zhanshi[index].value.tasklist[bo].listsnav.length;
          var c=this.zhanshi[index].value.tasklist[bo].listsnav;
          for(var i=0;i<l;i++){
            function f(){
              var s= $('#'+index+'colortaskf'+i);
              var num=i;
              $('#'+index+'colortaskf'+num).ColorPicker({
                    color: '#0000ff',
                    onShow: function (colpkr){
                        $(colpkr).fadeIn(500);
                        return false;
                    },
                    onHide: function (colpkr) {
                        $(colpkr).fadeOut(500);
                        return false;
                    },
                    onChange: function (hsb, hex, rgb) {
                        var x=vm.zhanshi[index].value.tasklist[bo].listsnav[num];
                        x.fcolor='#'+hex;
                        vm.zhanshi[index].value.tasklist[bo].listsnav.splice(num,1,x);
                        s.find('.color-child').css('backgroundColor', '#' + hex);

                    }.bind(this)

                }).bind(this);
            }
            f();
          }    
        },

        /*点击编辑自动更新*/
        gengxin:function(){

        },
        removetaskb:function(b,index,indexs){
          this.zhanshi[index].value.tasklist[b].listsnav.splice(indexs,1);
        },
        removepiclist:function(index,indexs){
          this.zhanshi[index].value.lists.splice(indexs,1);
        },
        addtaskb:function(b,index){
          
          this.zhanshi[index].value.tasklist[b].listsnav.push({img:"./image/tag-icon.png",name:"导航1",href:"",colors:"#fff",fcolor:"#333"});
          this.$nextTick(function (){
            var bo=vm.zhanshi[index].value.slec;
            $( "#slidericon" ).slider({ value: this.zhanshi[index].value.tasklist[bo].iconheight+"px" });
            $( "#slidericon" ).on("slidechange", function() {var x=(Math.ceil(parseInt($('.ui-slider-handle').css('left')))/300)*100;var height=Math.ceil(x); vm.zhanshi[index].value.tasklist[bo].iconheight=height;});  
            this.colortaskb(bo,index);
            this.colortaska(bo,index);
          })


        },

/*{img:"./image/goods_01.png",title:'第1件商品名称',price:'10.00',num:'1'}
          selectgoods:{
            show:false,
            lists:[
            {select:false,imggoods:"./img/FgbY8YSDPf5UXomE1Ik0G77YUJrH.jpg",namegoods:"葡萄酒",price:"",allnum:"1",paynum:"1"},
            {select:false,imggoods:"./img/FiQqYn_4aoe8kyO8sqlgYZxxVutz.jpg",namegoods:"香水",price:"",allnum:"2",paynum:"1"},
            {select:false,imggoods:"./img/FiQqYn_4aoe8kyO8sqlgYZxxVutz.jpg",namegoods:"女士短袖",price:"",allnum:"3",paynum:"1"},
            {select:false,imggoods:"./img/FtcAqhQbTmtnfbqw3kVjU9boaK2F.jpg",namegoods:"测试用品",price:"",allnum:"4",paynum:"1"}
          ],
        },*/
    /*  推荐商品add*/
      checkgoods:function(index){
          this.selectgoods.lists[index].select=true;
      },
      ok:function(){
        var index=this.selectindex;
        var length=this.selectgoods.lists.length;
        if(this.zhanshi[index].value.first==true){
          this.zhanshi[index].value.lists=[];
          this.zhanshi[index].value.first=false;
        }
        
        for(var i=0;i<length;i++){
            if(this.selectgoods.lists[i].select==true){
              var obj={};
              obj.img=this.selectgoods.lists[i].imggoods;
              obj.title=this.selectgoods.lists[i].namegoods;
              obj.price=this.selectgoods.lists[i].price;
              obj.num=this.selectgoods.lists[i].paynum;
              this.zhanshi[index].value.lists.push(obj);
            }
        }
         for(var i=0;i<length;i++){
             this.selectgoods.lists[i].select=false;
         }
         this.selectgoods.show=false;
      },
      removetimg:function(index,indexs){
        this.zhanshi[index].value.lists.splice(indexs,1);
      },



        showright:function(index){
          var length=this.show.length;
          for(var i=0;i<length;i++){
            this.show[i]=false;
          }
          this.show.splice(index,1,true);
          this.$nextTick(function () {
            console.log(this.zhanshi[index].type);
            if(this.zhanshi[index].type=='search'||this.zhanshi[index].type=='volumeup'){
              this.color(index);//搜索的颜色
            }
            if(this.zhanshi[index].type=='tasks'){
               var bo=vm.zhanshi[index].value.slec;
               $( "#slidericon" ).slider({ value: this.zhanshi[index].value.tasklist[bo].iconheight+"px" });
               $( "#slidericon" ).on("slidechange", function() {var x=(Math.ceil(parseInt($('.ui-slider-handle').css('left')))/300)*100;var height=Math.ceil(x); vm.zhanshi[index].value.tasklist[bo].iconheight=height;});  
               this.colortaska(bo,index);
               this.colortaskb(bo,index);
            }
            if(this.zhanshi[index].type=='square'){
               $( "#slider" ).slider({ value: this.zhanshi[index].value.height });
               $( "#slider" ).on("slidechange", function() {var x=(Math.ceil(parseInt($('.ui-slider-handle').css('left')))/300)*100;var height=Math.ceil(x); vm.zhanshi[index].value.height=height;});  
            }
           
            if(this.zhanshi[index].type=="pifont"){
              initSample();
              function test(){
                      var val = CKEDITOR.instances.editor;
                      val.on('change',function(){vm.zhanshi[index].value.rich=val.getData();});
              }
              test();
            }


            if(this.zhanshi[index].type=='bars'){//导航的颜色
                this.colors(index);
                this.colorsfont(index);
            }


            console.log("更新完成") ;// => '更新完成'
           
          });
        }

      },
     
});


//拖拽部分
function allowDrop(ev)
{
        ev.preventDefault();
   

}
var x=0;
xianz="";
function drag(ev,id){
    xianz=id;
    $('#meng').show();
} 
var count=0;
function drop(ev){ 
   
    var html={};
    if(xianz!=""){
      switch(xianz){
        case "drag0":html={type:"bookmark",value:{headimg:"./image/FoPRarlkNvOXzcJOm8dtYb1gehil.jpg",title:"XXX的小店",style:"first",type:1,}}/*店招*/;break;
        case "drag1":html={type:"bars",value:{style:2,iconstyle:1,iconshow:1,lists:[{img:"./image/tag-icon.png",title:"导航1",href:"#",color:"#fff",colorsfont:'#333'},{img:"./image/tag-icon.png",title:"导航2",href:"#",color:"#fff",colorsfont:'#333'},{img:"./image/tag-icon.png",title:"导航3",href:"#",color:"#fff",colorsfont:'#333'},{img:"./image/tag-icon.png",title:"导航4",href:"#",color:"#fff",colorsfont:'#333'}],  }}/*导航*/;break;
        case "drag2":html={type:"search",value:{style:2,outcolor:'#ffffff',incolor:"#ffffff"}}/*搜索框*/;break;
        case "drag3":html={type:"tuijian",value:{style:2,sign:true,driver:true,price:true,numpay:true,first:true,color1:'',lists:[{img:"./image/goods_01.png",title:'第1件商品名称',price:'10.00',num:'1'},{img:"./image/goods_02.png",title:'第2件商品名称',price:'10.00',num:'2'},{img:"./image/goods_03.png",title:'第3件商品名称',price:'10.00',num:'3'},{img:"./image/goods_04.png",title:'第4件商品名称',price:'10.00',num:'4'}]}}/*推荐商品框*/;break;
        case "drag4":html={type:"thumbs",value:{style:2,num:6,sort:1,pay:1,sign:true,car:true,price:true,paynums:true,select:['所有分组'],lists:[{img:"./img/goods_01.png",title:"第1件商品名称",price:"9.00",num:"1"},{img:"./img/goods_02.png",title:"第2件商品名称",price:"18.00",num:"2"},{img:"./img/goods_03.png",title:"第3件商品名称",price:"36.00",num:"3"},{img:"./img/goods_04.png",title:"第4件商品名称",price:"72.00",num:"4"},{img:"./img/goods_05.png",title:"第5件商品名称",price:"144.00",num:"5"},{img:"./img/goods_06.png",title:"第6件商品名称",price:"0.00",num:"6"}]}}/*商品分株*/;break;
        case "drag5":html={type:"list",value:{head:"",des:"",imgh:"",type:1,style:1,lists:[{img:"./image/goods_01.png",title:"第1个商品名称",price:"9.00"},{img:"./image/goods_02.png",title:"第2个商品名称",price:"18.00"},{img:"./image/goods_03.png",title:"第3个商品名称",price:"27.00"},]}}/*分组分类*/  ;break;
        case "drag6":html={type:"tasks",value:{s:0,slec:0,hightstyle:1,pageHeight:0,tasklist:[{style:1,kindname:"分组",listtopstyle:2,listnavtype:1,icontype:1,iconheight:'30',lists:[{img:"./image/640X.png",name:"",href:"#"},{img:"./image/640X.1.png",name:"",href:"#"}],listsnav:[{img:"./image/tag-icon.png",name:"导航1",href:"",colors:"#fff",fcolor:"#333"},{img:"./image/tag-icon.png",name:"导航1",href:"",colors:"#fff",fcolor:"#333"},{img:"./image/tag-icon.png",name:"导航1",href:"",colors:"#fff",fcolor:"#333"},{img:"./image/tag-icon.png",name:"导航1",href:"",colors:"#fff",fcolor:"#333"}]}],}}/*商品分类*/ ;break;
        case "drag7":html={type:"cubes",value:{style:1,lists:[{img:"./image/640X.png",name:"导航",href:""},{img:"./image/640X.1.png",name:"导航",href:""}]}}/*搭配*/;break;
        case "drag8":html={type:"imagem",value:{width:"0px",lists:{},}}/*图片模板*/;break;
        case "drag9":html={type:"pifont",value:{rich:""}}/*富文本*/;break;
        case "drag10":html={type:"sign",value:{title:"左侧标题",text:"右侧文字",href:"",}}/*标题*/;break;
        case "drag11":html={type:"film",value:{video:"https://v.qq.com/iframe/player.html?vid=n0341nmmg98&tiny=0&auto=0"}}/*视频*/ ;break;
        case "drag12":html={type:"bullhorn",value:{active:true,style:2,sign:"audio标题",left:2,img:"./img/FoPRarlkNvOXzcJOm8dtYb1gehil.jpg",play:1,audio:"",loop:false,}}/*语音*/;break;
        case "drag13":html={type:"volumeup",value:{active:true,talk:"公告，本产品是一个fffff",outcolor:"rgb(255, 255, 204)",href:"https://v.qq.com/iframe/player.html?vid=n0341nmmg98&tiny=0&auto=0"}}/*公告*/;break;
        case "drag14":html={type:"phone",value:{text:"客服电话",phonenum:"18629948868"}}/*客服电话*/;break;
        case "drag15":html={type:"square",value:{height:"50"}} /*辅助空白*/;break;
        case "drag16":html={type:"clock",value:{lists:["./image/goods_01.png","./image/goods_02.png"],}}/*限时秒杀*/;break;
        case "drag17":html={type:"puzzle",value:{our:"请选择自定义模块"}}/*自定义模块*/  ;break;
      }
      html.value.id=count;
      count++;
      vm.show.push(false);
      xianz="";
      vm.zhanshi.push(html);
      $('#meng').hide();
    }
    
  
}






