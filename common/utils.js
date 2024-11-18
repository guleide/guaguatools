export function numberToChineseCurrency(num) {
    if (typeof num !== 'number' || isNaN(num)) return '输入不是一个有效数字';

    const units = ["", "拾", "佰", "仟"];
    const sections = ["", "万", "亿", "兆"];
    const smallUnits = ["角", "分"];
    const cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    const cnIntLast = "元";
    const cnInteger = "整";

    const integerPart = Math.floor(num);
    const decimalPart = Math.round((num - integerPart) * 100);

    let chineseInteger = '';
    let chineseDecimal = '';

    if (decimalPart > 0) {
        const jiao = Math.floor(decimalPart / 10);
        const fen = decimalPart % 10;
        if (jiao > 0) chineseDecimal += cnNums[jiao] + smallUnits[0];
        if (fen > 0) chineseDecimal += cnNums[fen] + smallUnits[1];
    } else {
        chineseDecimal = cnInteger;
    }

    let sectionIndex = 0;
    let zeroCount = 0;
    let integerCopy = integerPart;

    while (integerCopy > 0) {
        let sectionChinese = '';
        let sectionNum = integerCopy % 10000;
        let unitIndex = 0;

        while (sectionNum > 0) {
            const num = sectionNum % 10;
            if (num === 0) {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    sectionChinese = cnNums[0] + sectionChinese;
                }
                zeroCount = 0;
                sectionChinese = cnNums[num] + units[unitIndex] + sectionChinese;
            }
            unitIndex++;
            sectionNum = Math.floor(sectionNum / 10);
        }

        if (sectionChinese !== '') {
            sectionChinese += sections[sectionIndex];
        }
        chineseInteger = sectionChinese + chineseInteger;

        zeroCount = sectionChinese === '' ? zeroCount + 1 : 0;
        integerCopy = Math.floor(integerCopy / 10000);
        sectionIndex++;
    }

    chineseInteger = chineseInteger + cnIntLast;

    return chineseInteger + chineseDecimal;
}
