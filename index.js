// // 1.3 Triangle

function triangles(number) {
    let triangle = "";
    
    for ( triangle = ""; triangle.length <= 10; triangle += "*" ){
        console.log(triangle);
    }
};

console.log(triangles(10));

// //1.1 Square


function squares( width, height ) {
    let square = "";

    for( let i = 0; i < height; i++ ){
        for( let j = 0; j < width; j++ ){
            square += "* ";
            if ( j == width - 1){
                square += '\n';
            }
        }
    }return square
};

console.log(squares(5, 5));



//1.3.2


function secondSquares(en, uzunlug) {
    let secondSquare = "";
    
    for ( let i = 0; i < uzunlug; i++ ){
        for ( let j = 0; j < en; j++ ){
            if ( i == 0 || i == uzunlug - 1 )
                secondSquare += "*";
            else {
                if ( j == 0 || j == en - 1)
                    secondSquare += "*";
                else
                    secondSquare += " ";
                    
            }if ( j == en - 1){
                secondSquare+= "\n";
            }
        }
    }return secondSquare
}

console.log(secondSquares(5, 5))