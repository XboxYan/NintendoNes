;(function(){
    var BUT_LIST = document.getElementsByTagName('button');
    var player = 1;
    for(var i=0;i<BUT_LIST.length;i++){
        (function(i){
            var action = BUT_LIST[i].getAttribute('role');
            BUT_LIST[i].addEventListener('touchstart',function(){
                nes.buttonDown(player,jsnes.Controller[action]);
            },false);
            BUT_LIST[i].addEventListener('touchend',function(){
                nes.buttonUp(player,jsnes.Controller[action])
            },false);
        })(i)
    }

    //var url = "http://jsnes.cn/roms/rom1/%28W%29%20Super%20Mario%20Bros.%20%5B%21%5D.nes";
    var url = "./roms/Super Mario Bros.nes";
    nes_load_url("nes-canvas",url);
})()