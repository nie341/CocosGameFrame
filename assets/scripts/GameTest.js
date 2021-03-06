var ResPath = require("./ResPath.js");
var ResLoader = require("./resMgr/ResLoader.js");
var TimeTake = require("./TimeTake.js")

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {


        var self = this;



        //重复加载测试
        // TimeTake.start("加载预制1");
        // ResMgr.loadPrefab(ResPath.PrefabPath.prefab,function(prefab){
        //     TimeTake.end("加载预制1");
        //     TimeTake.start("加载预制2");
        //     ResMgr.loadPrefab(ResPath.PrefabPath.prefab,function(prefab){
        //         TimeTake.end("加载预制2");
        //     });              
        // }); 


        // cc.textureCache.dumpCachedTextureInfo();
        // cc.log(Object.keys(cc.loader._cache));             
        // ResMgr.loadPrefab(ResPath.PrefabPath.prefab,function(prefab){
        //     cc.log(prefab);
        //     var node = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(node);
        //     cc.log(Object.keys(cc.loader._cache));
        // }); 

        // cc.log("图集加载测试");
        // ResMgr.loadAtlas(ResPath.AtlasPath.Common,function(atlas){
        //     cc.log(atlas);
        //     cc.log(Object.keys(cc.loader._cache));
        //     cc.log(cc.loader._cache);
        // });

        // cc.loader.releaseAll();

        //scene 加载释放测试
        // cc.log("scene 加载释放测试");
        // cc.loader.loadRes("../Scene/Login/LoginScene",cc.SceneAsset,function (err,asset) {
        //     if (err) {
        //         cc.error(err.message || err);
        //         return;
        //     }            
        //     cc.log("加载后资源统计"+Object.keys(cc.loader._cache).length);  
        //     var deps = cc.loader.getDependsRecursively(asset);
        //     deps.forEach(function(item){
        //         cc.loader.release(item);
        //     });
        //     cc.log("释放了"+deps.length);                        
        //     cc.log("释放后资源统计"+Object.keys(cc.loader._cache).length); 
        //     cc.textureCache.dumpCachedTextureInfo();                    
        // });        


        //prefab 加载释放测试
        // cc.log("prefab 加载释放测试");
        // cc.loader.loadRes("Common/BuyDiamond/Prefab/BuyDiamond",cc.Prefab,function (err,prefab) {
        //     if (err) {
        //         cc.error(err.message || err);
        //         return;
        //     }  

        //     cc.log("加载后资源统计"+Object.keys(cc.loader._cache).length);  

        //     var deps = cc.loader.getDependsRecursively(prefab);
        //     cc.log("释放了"+deps.length);
        //     deps.forEach(function(item){
        //         cc.loader.release(item);
        //     });            
        //     cc.log("释放后资源统计"+Object.keys(cc.loader._cache).length); 
        //     cc.textureCache.dumpCachedTextureInfo();                    
        // });


        // cc.log("脚本onload测试");
        // cc.loader.loadRes("Common/BuyDiamond/Prefab/BuyDiamond",cc.Prefab,function (err,prefab) {
        //     if (err) {
        //         cc.error(err.message || err);
        //         return;
        //     }  
        //     // cc.log(prefab);
        //     cc.log("after instantiate");
        //     var prefabNode = cc.instantiate(prefab);
        //     prefabNode.active = false; 
        //     cc.log("after addChild");                       
        //     self.node.addChild(prefabNode);
        //     cc.log("after active");            
        //     prefabNode.active = true;
        //     cc.log("after remove");                 
        // });        
    },

    prefabLoadTest: function(){
        var self = this;
        var prefabNode = self.node.getChildByName("prefab");
        if(prefabNode == null){
            TimeTake.start("加载prefab");
            ResLoader.loadPrefab(ResPath.PrefabPath.prefab,function(prefab){
                TimeTake.end("加载prefab");
                var node = cc.instantiate(prefab);
                node.name = "prefab";
                node.parent = self.node;
                cc.log(Object.keys(cc.loader._cache));
            }); 
        }else{
            prefabNode.parent = null;
            cc.log(Object.keys(cc.loader._cache));
        }      
    },
});
