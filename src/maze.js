'use strict';

var rowEqualCol = function rowEqualCol(inputData){
    console.log(inputData);
    let row = inputData[0];         //行
    let col = inputData[1];         //列
    var renderRow = 0;
    var renderCol = 0;
    var renderArr = new Array();
    var twoDimensionalArr = new Array();
    if(typeof col === Number && typeof row === Number){
        renderRow = row * 2 + 1;
        renderCol = col * 2 + 1;
    }
    for(var i = 0, j = 0;i < renderRow, j < row;i++){
        let actualRow = j * 2 + 1;
        renderArr.push(twoDimensionalArr);
        if(i === actualRow){
            j++;
        }
    }
    console.log(renderArr);
}

var rowNotEqualCol = function rowNotEqualCol(inputData){

}

var unableConnect = function unableConnect(inputData){

}

var invalidNumber = function invalidNumber(inputData){
    var str = "Invalid number format";
    return str;
}

var outOfRange = function outOfRange(inputData){
    var str = "Number out of range";
    return str;
}

var incorect = function incorect(inputData){
    var str = "Incorrect command format";
    return str;
}

var connectivityError = function connectivityError(inputData){
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