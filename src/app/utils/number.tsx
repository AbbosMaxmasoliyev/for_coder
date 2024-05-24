export function formatNumber(number: number): string {
    // Raqamni stringga aylantirish
    let numStr = number.toString();

    // Regular expression yordamida raqamni teskari tartibda formatlash
    let formattedStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return formattedStr;
}