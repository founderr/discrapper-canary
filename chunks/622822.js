n.d(t, {
    Y: function () {
        return c;
    },
    b: function () {
        return s;
    }
});
var i = n(594174),
    r = n(709054),
    l = n(981631);
let a = new Date('06/16/2020'),
    o = [l.V_K.AGE_RESTRICTED, l.V_K.EXPLICIT];
function s() {
    let e = i.default.getCurrentUser();
    return null != e && r.default.extractTimestamp(e.id) > a.getTime() && !e.isClaimed() && null == e.nsfwAllowed;
}
function c(e) {
    return o.includes(e.nsfwLevel);
}
