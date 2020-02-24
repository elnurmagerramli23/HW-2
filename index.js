//1 Square

function getSquares(size) {
    let square = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            square += "* ";
            if (j === size - 1) {
                square += '\n';
            }
        }
    }

    return square;
};

console.log( getSquares(10) );


//2

function getEmptySquare(size) {
    let square = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                square += " *";
            } else {
                square += "  ";
            }
        } 
        square += "\n";
    }
    
    return square;
};

console.log( getEmptySquare(10) );


// 3 Triangle
function getTriangle(size) {
    let triangle = "";
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i + j < size)
                triangle += "*";
        }
        triangle += "\n";
    }
    
    return triangle;
};

console.log( getTriangle(10) );
//4

function getEmptyTriangle(size) {
    let triangle = "";
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || (i === size - 1 - j) || j === 0) {
                triangle += "*";
            } else {
                triangle += " ";
            }
        }
        
        triangle += "\n";
    }

    return triangle;
};

console.log( getEmptyTriangle(10) );
//5

function getHourglass(size) {
    let hourglass = "";

    for ( let i = 0; i < size; i++ ) {
        for ( let j = 0; j < size; j++ ) {
            if ( (i === size - 1 - j) || i === j || (i < j && i + j < size ) || ( j < i && i + j >= size) ) {
                hourglass += "*";
            } else { 
                hourglass += " ";
        } 

        }
        hourglass += "\n";
    }
    
    return hourglass;
};

console.log( getHourglass(10));


//6


function getEmptyHourglass(size) {
    let hourglass = "";

    for ( let i = 0; i < size; i++ ) {
        for ( let j = 0; j < size; j++ ) {
            if (i === 0 || (i === size - 1 - j) || i === size - 1 || i === j) {
                
            hourglass += "*"
            } else { 
                hourglass += " ";
            } 
        }
        hourglass += "\n";
    }
    
    return hourglass;
};

console.log( getEmptyHourglass(10));