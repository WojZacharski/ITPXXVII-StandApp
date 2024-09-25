export const standTypeResolver = (type, t) => {
    switch (type) {
        case '4':
            return '4m²';
        case '6':
            return '6m²';
        case '8':
            return '8m²';
        case 'S':
            return t("SPONSOR");
        case 'MS':
            return t("MAIN_SPONSOR");
        default:
            return "Unknown Type"
    }
};