n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(789020);
var r = n(630388),
    i = n(620662),
    a = n(981631);
function s(e, t, n, s) {
    let o = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, i.Z)(t, a.xjy.JOIN) || null == o) return !1;
    let l = s.getApplication(o);
    return !(null == l || (0, r.yE)(l.flags, a.udG.EMBEDDED)) && n.shouldShowEducation(o);
}
