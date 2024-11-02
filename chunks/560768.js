n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(789020);
var i = n(630388),
    o = n(620662),
    a = n(981631);
function s(e, t, n, s) {
    let l = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, o.Z)(t, a.xjy.JOIN) || null == l) return !1;
    let r = s.getApplication(l);
    return !(null == r || (0, i.yE)(r.flags, a.udG.EMBEDDED)) && n.shouldShowEducation(l);
}
