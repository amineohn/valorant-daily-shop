export const getContentTierIcon = (uuid: string) => {
    switch (uuid) {
        case "12683d76-48d7-84a3-4e09-6985794f0445":
            return require("../../assets/content-tiers/select.png");
        case "0cebb8be-46d7-c12a-d306-e9907bfc5a25":
            return require("../../assets/content-tiers/deluxe.png");
        case "60bca009-4182-7998-dee7-b8a2558dc369":
            return require("../../assets/content-tiers/premium.png");
        case "e046854e-406c-37f4-6607-19a9ba8426fc":
            return require("../../assets/content-tiers/exclusive.png");
        case "411e4a55-4e59-7757-41f0-86a53f101bb5":
            return require("../../assets/content-tiers/ultra.png");
        default:
            break;
    }
};
