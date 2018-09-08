'use strict';

var rowEqualCol = function rowEqualCol(inData){
    let row = inData[0];         //行
    let col = inData[2];         //列
    var renderRow = 0;           //渲染完成后总共的行数
    var renderCol = 0;           //渲染完成后总共的列数
    var renderArr = new Array();    //渲染形成的二维数组
    var twoDimensionalArr = new Array();    //向二维数组中填充所用
    var middleArr = new Array();    //将用户输入的数据切割后用此数组存储
    var middleRow = 0;         //填数时循环遍历所用
    middleArr = inData.split("\n");
    renderRow = middleArr[0].split(" ")[0] * 2 + 1;
    renderCol = middleArr[0].split(" ")[1] * 2 + 1;

    for(var i = 0;i < renderRow;i++){
        let actualRow = middleRow * 2 + 1;
        var [...indexArr] = twoDimensionalArr;
        var middleCol = 0;
        renderArr.push(indexArr);
        if(middleRow < row && i === actualRow){
            for(var j = 0;j < renderCol;j++){
                let actualCol = middleCol * 2 + 1;
                if(middleCol < col && j === actualCol){
                    renderArr[renderArr.length-1].push("[R]");
                    middleCol++;
                } else {
                    renderArr[renderArr.length-1].push("[W]");
                }
            }
            middleRow++;
        } else {
            for(var c = 0;c < renderCol;c++){
                renderArr[renderArr.length-1].push("[W]");
            }
        }
    }
    twoDimensionalArr = new Array();
    twoDimensionalArr = middleArr[1].split(";");
    for(var x = 0;x < twoDimensionalArr.length;x++){
        var relateArr = twoDimensionalArr[x].split(" ");
        var linkHead = relateArr[0].split(",");
        var linkEnd = relateArr[1].split(",");
        var rowGap = (parseInt(linkEnd[0]) * 2 + 1) - (parseInt(linkHead[0]) * 2 + 1);
        var colGap = (parseInt(linkEnd[1]) * 2 + 1) - (parseInt(linkHead[1]) * 2 + 1);
        if(rowGap === 2 && colGap === 0){
            renderArr[parseInt(linkHead[0] * 2 + 1) + 1][parseInt(linkHead[1] * 2 + 1)] = "[R]";
        } else if(rowGap === -2 && colGap === 0){
            renderArr[parseInt(linkHead[0] * 2 + 1) - 1][parseInt(linkHead[1] * 2 + 1)] = "[R]";
        } else if(colGap === 2 && rowGap === 0){
            renderArr[parseInt(linkHead[0] * 2 + 1)][parseInt(linkHead[1] * 2 + 1) + 1] = "[R]";
        } else if(colGap === -2 && rowGap === 0){
            renderArr[parseInt(linkHead[0] * 2 + 1)][parseInt(linkHead[1] * 2 + 1) - 1] = "[R]";
        }
    }
    var str = renderArr.join(",").replace(/,/g, " ");
    var sss = "";
    for(var s = 0;s < str.length;){
        sss += str.substring(s, s + renderCol * 3 + 7) + "\n";
        s += renderCol * 3 + 7;
    }
    return sss;
}
    

var rowNotEqualCol = function rowNotEqualCol(inData){

}

var unableConnect = function unableConnect(inData){

}

var invalidNumber = function invalidNumber(inData){
    var str = "Invalid number format";
    return str;
}

var outOfRange = function outOfRange(inData){
    var str = "Number out of range";
    return str;
}

var incorect = function incorect(inData){
    var str = "Incorrect command format";
    return str;
}

var connectivityError = function connectivityError(inData){
    var str = "Maze format error";
    return str;
}

module.exports = {
    rowEqualCol,
    rowNotEqualCol,
    unableConnect,
    invalidNumber,
    outOfRange,
    incorect,
    connectivityError
}