'use strict';

var rowEqualCol = function rowEqualCol(inData){
    // console.log(inData);
    let row = inData[0];         //行
    let col = inData[2];         //列
    var renderRow = 0;
    var renderCol = 0;
    var renderArr = new Array();
    var twoDimensionalArr = new Array();
    var middleArr = new Array();
    middleArr = inData.split("\n");
    renderRow = middleArr[0].split(" ")[0] * 2 + 1;
    renderCol = middleArr[0].split(" ")[1] * 2 + 1;
    console.log(renderRow);
    console.log(renderCol);
    
    for(var i = 0, j = 0;i < renderRow, j < row;i++){
        let actualRow = j * 2 + 1;
        renderArr.push(twoDimensionalArr);
        if(i === actualRow){
            j++;
        }
    }
    // console.log(renderArr);
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