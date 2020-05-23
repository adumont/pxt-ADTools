/**
* ADTools - Some useful custom blocks
*/
namespace ADTools {
    /**
     * Joins an array of numbers into a string
     */
    
    //% help=packNums
    //% weight=86
    //% blockId=packNums block="pack num array %values into a string with %del"
    export function packNums(values: number[], del: Delimiters): string {
        let s="";
        if (!values) return s;
        for (let i = 0; i < values.length; ++i) {
            if (i > 0) s+=serial.delimiters(del);
            s+=values[i];
        }
        return s;
    }

    /**
     * Splits a string into an array of numbers
     */
    
    //% help=unpackNums
    //% blockId=unpackNums block="unpack %str by %del into num array"
    export function unpackNums(str: string, del: Delimiters): number[] {
        let values=str.split(serial.delimiters(del));
        let out:number[]=[];
        if (!values) return out;

        for (let i = 0; i < values.length; ++i) {
            out.push(parseFloat(values[i]));
        }
        return out;
    }

    /**
     * Log a string to the console
     */
    
    //% help=logStr
    //% advanced=true
    //% blockId=logStr block="log string %str to console"
    export function logStr(str: string): void {
        console.log(str);
    }

    /**
     * Log a number to the console
     */
    
    //% help=logNumber
    //% advanced=true
    //% blockId=logNumber block="log number %str to console"
    export function logNumber(n: number): void {
        console.log(n);
    }
}