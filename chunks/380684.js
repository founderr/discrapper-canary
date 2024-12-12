r.d(n, {
    XS: function () {
        return c;
    },
    h6: function () {
        return d;
    }
});
var i = r(502087),
    a = r(684259),
    s = r(111361),
    o = r(981631),
    l = r(474936);
let u = !1;
function c() {
    return u;
}
function d(e) {
    if (null == e) return o.mBz;
    let n = i.Z.getPremiumTypeOverride();
    return e.isStaff() && n === l.F_ ? o.PRK : null != e.premiumType && (0, s.I5)(e) ? l.a1[e.premiumType].fileSize : c() ? o.WKe : o.mBz;
}
a.Z.subscribe({ location: 'PremiumFeatureUtils' }, (e) => {
    u = e.enabled;
});
