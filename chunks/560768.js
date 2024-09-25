n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(789020);
var i = n(630388),
    a = n(620662),
    o = n(981631);
function s(e, t, n, r) {
    let s = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, a.Z)(t, o.xjy.JOIN) || null == s) return !1;
    let l = r.getApplication(s);
    return !(null == l || (0, i.yE)(l.flags, o.udG.EMBEDDED)) && n.shouldShowEducation(s);
}
