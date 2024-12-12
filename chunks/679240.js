r.d(n, {
    x: function () {
        return u;
    }
});
var i = r(789020);
var a = r(271383),
    s = r(630388),
    o = r(549817),
    l = r(372897);
function u(e) {
    return new Promise((n) => {
        a.ZP.addConditionalChangeListener(() => {
            var r;
            let i = a.ZP.getSelfMember(e);
            return !(0, s.yE)(null !== (r = null == i ? void 0 : i.flags) && void 0 !== r ? r : 0, l.q.COMPLETED_ONBOARDING) || (o.Z.finishOnboarding(e), n(), !1);
        });
    });
}
