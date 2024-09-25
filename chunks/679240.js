n.d(t, {
    x: function () {
        return l;
    }
});
var r = n(789020);
var i = n(271383),
    a = n(630388),
    o = n(549817),
    s = n(372897);
function l(e) {
    return new Promise((t) => {
        i.ZP.addConditionalChangeListener(() => {
            var n;
            let r = i.ZP.getSelfMember(e);
            return !(0, a.yE)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, s.q.COMPLETED_ONBOARDING) || (o.Z.finishOnboarding(e), t(), !1);
        });
    });
}
