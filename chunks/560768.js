r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(789020);
var a = r(630388),
    s = r(620662),
    o = r(981631);
function l(e, n, r, i) {
    let l = null == n ? void 0 : n.application_id;
    if (null == e || null == n || !(0, s.Z)(n, o.xjy.JOIN) || null == l) return !1;
    let u = i.getApplication(l);
    return !(null == u || (0, a.yE)(u.flags, o.udG.EMBEDDED)) && r.shouldShowEducation(l);
}
