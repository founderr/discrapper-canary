n.d(t, {
    b: function () {
        return l;
    }
});
var i = n(594174),
    r = n(709054);
let a = new Date('06/16/2020');
function l() {
    let e = i.default.getCurrentUser();
    return null != e && r.default.extractTimestamp(e.id) > a.getTime() && !e.isClaimed() && null == e.nsfwAllowed;
}
