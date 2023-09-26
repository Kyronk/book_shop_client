export const cutLongText = (text, num) => {
    if(text.length <= num ) return text;
    const shortText = text.slice(0, num);
    return `${shortText}\u2026`;
}