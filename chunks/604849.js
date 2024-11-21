e.d(t, {
    c: function () {
        return a;
    }
});
var r = e(442837),
    i = e(581883),
    u = e(594174),
    l = e(981312);
let a = () => {
    let n = u.default.getCurrentUser(),
        t = (0, r.e7)([i.Z], () => {
            var n, t, e;
            return null === (e = null === (t = i.Z.settings.privacy) || void 0 === t ? void 0 : null === (n = t.inappropriateConversationWarnings) || void 0 === n ? void 0 : n.value) || void 0 === e || e;
        });
    return ((0, l.U)() || (null == n ? void 0 : n.isStaff()) === !0) && t;
};
