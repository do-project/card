var rootview, page;
rootview = ui("$");
page = sm("do_Page");

rootview.setMapping({   // 此处的Mapping只能设置在 RootView 上 ;
    "do_imageview_1.source" : "do_imageview_1",
    "do_label_1.text" : "do_label_1",
});
 
 
var AlayoutRoot=ui("AlayoutRoot");

AlayoutRoot.on("touchDown",function(data, e){
    AlayoutRoot.bgColor = "FF9A35FF";
});
AlayoutRoot.on("touch",function(data, e){
    AlayoutRoot.bgColor = "FFFFFFFF";
});  
