/**
* ADTools - Some custom blocks
*/
namespace ADTools {
    /**
     * Joins an array of numbers into a string
     */
    
    //% help=numArrayToString
    //% weight=86
    //% blockId=numArrayToString block="join num array %values to string with %del"
    export function numArrayToString(values: number[], del: Delimiters): string {
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
    
    //% help=stringToNumArray
    //% blockId=stringToNumArray block="split %str by %del into num array"
    export function stringToNumArray(str: string, del: Delimiters): number[] {
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