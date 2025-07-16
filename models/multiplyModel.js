class Multiply{
    constructor(a,b,c){
        this.num1 = a;
        this.num2 = b;
        this.multiplyAnswer = c;
    }//create obj
    static getIntMultiply(x, y){
        var n1 = parseInt(x);//text to int
        var n2 = parseInt(y);//text to int
        var result = n1*n2;
        return new Multiply(n1, n2, result);
    }

    //divide and conquer
    static getLargeIntMultiply(x, y){
        var result = this.largeMultiply(x,y);
        return new Multiply(x, y, result);
    }
    static largeMultiply(n1, n2){
        if (n1.length == 1 || n2.length ==1){
            return "" + (parseInt(n1) * parseInt(n2)); //""+ ทำให้intเป็นstring
        } 
        var maxLength = Math.max(n1.length, n2.length);
        var totalLength = 2;
        for ( ; totalLength < maxLength; totalLength *=2);
        for (let i = n1.length; i < totalLength; i++) {
            n1 = "0" + n1;
        }
        for (let i = n2.length; i < totalLength; i++) {
            n2 = "0" + n2;
        }
        var a1 = n1.substring(0, (n1.length)/2);
        var a0 = n1.substring((n1.length)/2, n1.length);
        var b1 = n2.substring(0, (n2.length)/2);
        var b0 = n2.substring((n2.length)/2, n2.length);

        var c0 = this.largeMultiply(a0, b0);
        var c2 = this.largeMultiply(a1, b1);
        var c11 = this.largeMultiply((parseInt(a1) + parseInt(a0)).toString(), (parseInt(b1) + parseInt(b0)).toString());
        var c1 = parseInt(c11) - (parseInt(c2) + parseInt(c0));
        var c = (parseInt(c2 + "0".repeat(n1.length)) + parseInt(c1 + "0".repeat((n1.length)/2)) + parseInt(c0)).toString();
        return c;
    }

    //Russian Multiplication
    static getRussuanMultiply(x, y){
        var result = this.russianMultiplication(x, y);
        return new Multiply(x, y, result);
    }
    static russianMultiplication(n, m){
        var sum = 0;
        var n = parseInt(n);
        var m = parseInt(m);
        while (n > 1){
            if (n%2 == 1){
                sum += m;
            }
            n = this.shiftRight(n); // n/2
            m = this.shiftLeft(m); // m*2
        }
        return (m + sum) + ": Russian Multiplication"
    }
    static shiftRight(x){ //divded by 2
        var binaryX = (x+"").toString(2); //แปลงเป็นเลขฐาน2 (1101)
        binaryX = binaryX >> 1; //ผลักไปขวา 1bit (bitหายไป1bit) = การหาร (110)
        var decimalX = binaryX.toString(10); //แปลงเป็นเลขฐาน10
        return parseInt(decimalX);
    }
    static shiftLeft(x){ // multipied by 2
        var binaryX = (x+"").toString(2); //แปลงเป็นเลขฐาน2 (1101)
        binaryX = binaryX << 1; //เพิ่ม 1bit  = คูณ (11010)
        var decimalX = binaryX.toString(10); //แปลงเป็นเลขฐาน10 
        return parseInt(decimalX);
    }
}

module.exports = Multiply;//controller can use this model