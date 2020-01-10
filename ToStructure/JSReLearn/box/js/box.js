//生成方块
function Box(parent, options) {
    options = options || {}; //没有传值，就变成 {}
    this.bgcolor = options.bgcolor || 'red';
    this.width = options.width || 20;
    this.hight = options.hight || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.parent = parent;

    // create div
    this.div = document.createElement('div');
    parent.appendChild(this.div);
};

// div css
Box.prototype.init = function () {
    this.div.style.backgroundColor = this.bgcolor;
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.hight + 'px';
    this.div.style.left = this.x + 'px';
    this.div.style.top = this.y + 'px';

    //脱离文档流

    this.div.style.position = 'absolute';
};

Box.prototype.remove = function(){
    // console.log('remove');
    this.bgcolor = this.parent.style.backgroundColor;

    this.init();
};

// random
Box.prototype.random = function () {
    var x = Tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
    var y = Tools.getRandom(0, this.parent.offsetHeight / this.hight - 1) * this.hight;

    this.x = x;
    this.y = y;

    // console.log(x);
    // console.log(y);

};