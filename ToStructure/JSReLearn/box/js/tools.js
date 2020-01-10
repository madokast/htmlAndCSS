//工具对象
var Tools = {
    // min 到 max 之间随机数，左右包括
    getRandom: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};