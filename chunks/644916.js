n.d(t, {
    t: function () {
        return l;
    }
});
var r = n(115434),
    i = n(704215),
    a = n(874703),
    s = n(906690),
    o = n(580130);
function l(e) {
    switch (e) {
        case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null !== (n = null === (t = a.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : 0;
        case i.z.GIFTING_PROMOTION_ICON:
        case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.z.GIFTING_PROMOTION_REMINDER:
            return s.JY;
        case i.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL:
            let l = o.Z.getFractionalPremium(!1);
            if ((null == l ? void 0 : l.length) > 0) return Number(l[0].id);
            return 0;
        default:
            return 0;
    }
}
