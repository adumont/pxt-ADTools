/**
* Some custom blocks
*/
namespace Custom {
    /**
     * Print an array of numeric values as CSV to the serial port
     */
    //% help=serial/write-numbers
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

}