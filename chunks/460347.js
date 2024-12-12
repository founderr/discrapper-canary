r.d(n, {
    Z: function () {
        return f;
    },
    m: function () {
        return d;
    }
});
var i = r(789020);
var a = r(442837),
    s = r(160404),
    o = r(271383),
    l = r(70956),
    u = r(630388),
    c = r(372897);
function d(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (r) return !0;
    let i = null != e ? new Date(e) : void 0;
    return null != i && new Date().getTime() - i.getTime() < l.Z.Millis.WEEK && !(0, u.yE)(null != n ? n : 0, c.q.COMPLETED_HOME_ACTIONS);
}
function f(e) {
    return (0, a.e7)([o.ZP, s.Z], () => {
        var n, r;
        if (s.Z.isFullServerPreview(e)) return !0;
        let i = o.ZP.getSelfMember(e);
        return d(null !== (n = null == i ? void 0 : i.joinedAt) && void 0 !== n ? n : void 0, null !== (r = null == i ? void 0 : i.flags) && void 0 !== r ? r : void 0);
    });
}
