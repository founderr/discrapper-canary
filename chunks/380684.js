n.d(t, {
    XS: function () {
        return u;
    },
    h6: function () {
        return c;
    }
});
var r = n(502087),
    i = n(684259),
    a = n(111361),
    o = n(981631),
    s = n(474936);
let l = !1;
function u() {
    return l;
}
function c(e) {
    if (null == e) return o.mBz;
    let t = r.Z.getPremiumTypeOverride();
    return e.isStaff() && t === s.F_ ? o.PRK : null != e.premiumType && (0, a.I5)(e) ? s.a1[e.premiumType].fileSize : u() ? o.WKe : o.mBz;
}
i.Z.subscribe({ location: 'PremiumFeatureUtils' }, (e) => {
    l = e.enabled;
});
