n.d(t, {
    t: function () {
        return s;
    }
});
var r = n(115434),
    i = n(704215),
    a = n(874703);
function s(e) {
    switch (e) {
        case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null !== (n = null === (t = a.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : 0;
        case i.z.GIFTING_PROMOTION_ICON:
        case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.z.GIFTING_PROMOTION_REMINDER:
            return 1;
        default:
            return 0;
    }
}
