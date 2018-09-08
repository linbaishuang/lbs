'use strict';

const maze = require("../../src/maze"); 

describe('maze task', ()=>{
    it('Successful return when the rows and colunms are equal', ()=>{
        const inData = `3 3
        0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1`;
        
        const outputData = `[W] [W] [W] [W] [W] [W] [W]
        [W] [R] [W] [R] [R] [R] [W]
        [W] [R] [W] [R] [W] [R] [W]
        [W] [R] [R] [R] [R] [R] [W]
        [W] [W] [W] [R] [W] [R] [W]
        [W] [R] [R] [R] [W] [R] [W]
        [W] [W] [W] [W] [W] [W] [W]`;
        
        expect(maze.rowEqualCol(inData)).toEqual(outputData);
    });

    // it('Successful return when the rows and colnums are not equals', ()=>{
        const inputData = `5 4
        0,0 1,0;1,0 1,1;1,1 1,2;1,2 2,2;2,2 2,3;3,0 3,1;3,1 2,1;3,1 4,1`;

        const outputData = `[W] [W] [W] [W] [W] [W] [W] [W] [W]
        [W] [R] [W] [R] [W] [R] [W] [R] [W]
        [W] [R] [W] [W] [W] [W] [W] [W] [W]
        [W] [R] [R] [R] [R] [R] [W] [R] [W]
        [W] [W] [W] [W] [W] [R] [W] [W] [W]
        [W] [R] [W] [R] [W] [R] [R] [R] [W]
        [W] [W] [W] [R] [W] [W] [W] [W] [W]
        [W] [R] [R] [R] [W] [R] [W] [R] [W]
        [W] [W] [W] [R] [W] [W] [W] [W] [W]
        [W] [R] [W] [R] [W] [R] [W] [R] [W]
        [W] [W] [W] [W] [W] [W] [W] [W] [W]`

        expect(maze.rowNotEqualCol(inputData)).toEqual(outputData);
    // });

    // it('Unable to connect', ()=>{
    //     const inputData = `4 4
    //     `

    //     const outputData = `[W] [W] [W] [W] [W] [W] [W] [W] [W]
    //     [W] [R] [W] [R] [W] [R] [W] [R] [W]
    //     [W] [W] [W] [W] [W] [W] [W] [W] [W]
    //     [W] [R] [W] [R] [W] [R] [W] [R] [W]
    //     [W] [W] [W] [W] [W] [W] [W] [W] [W]
    //     [W] [R] [W] [R] [W] [R] [W] [R] [W]
    //     [W] [W] [W] [W] [W] [W] [W] [W] [W]
    //     [W] [R] [W] [R] [W] [R] [W] [R] [W]
    //     [W] [W] [W] [W] [W] [W] [W] [W] [W]`

    //     expect(maze.unableConnect(inputData)).toEqual(outputData);
    // });

    //  it('Invalid number format', ()=>{
        const inputData = `3 3
        0,a 0,2;0,0 1,0;0,1 1,1;0,2 1,2;c,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1`;

        const outputData = "Invalid number format";

        expect(maze.invalidNumber(inputData)).toEqual(outputData);
    // });

    // it('Number out of range(negative number)', ()=>{
        const inputData = `3 -1
        0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1`;

        const outputData = "Number out of range";

        expect(maze.outOfRange(inputData)).toEqual(outputData);
    // });

    // it('Number out of range(too big)', ()=>{
    //     const inputData = `3 3
    //     0,1 0,5;0,0 1,0;0,1 1,1;0,2 1,2;4,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1`;

    //     const outputData = "Number out of range";

    //     expect(maze.outOfRange(inputData)).toEqual(outputData);
    // });

    // it('Incorrect command format', ()=>{
    //     const inputData = `3 3
    //     0,1 0,;0,0 1,0;0,1 1,1;0,2 1,2;,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1`;

    //     const outputData = "Incorrect command format";

    //     expect(maze.incorect(inputData)).toEqual(outputData);
    // });

    // it('Maze format error', ()=>{
    //     const inputData = `3 3
    //     0,1 0,2;0,0 1,1;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1`;
        
    //     const outputData = "Maze format error";

    //     expect(maze.connectivityError(inputData)).toEqual(outputData);
    // })
})      