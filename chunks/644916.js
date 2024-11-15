n.d(t, {
    t: function () {
        return o;
    }
});
var r = n(115434),
    i = n(704215),
    a = n(874703),
    s = n(580130);
function o(e) {
    switch (e) {
        case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null !== (n = null === (t = a.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : 0;
        case i.z.GIFTING_PROMOTION_ICON:
        case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.z.GIFTING_PROMOTION_REMINDER:
            return 1;
        case i.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL:
            let o = s.Z.getFractionalPremium(!1);
            if ((null == o ? void 0 : o.length) > 0) return Number(o[0].id);
            return 0;
        default:
            return 0;
    }
}
