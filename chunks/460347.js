n.d(t, {
    Z: function () {
        return d;
    },
    m: function () {
        return c;
    }
});
var r = n(789020);
var i = n(442837),
    a = n(160404),
    o = n(271383),
    s = n(70956),
    l = n(630388),
    u = n(372897);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return !0;
    let r = null != e ? new Date(e) : void 0;
    return null != r && new Date().getTime() - r.getTime() < s.Z.Millis.WEEK && !(0, l.yE)(null != t ? t : 0, u.q.COMPLETED_HOME_ACTIONS);
}
function d(e) {
    return (0, i.e7)([o.ZP, a.Z], () => {
        var t, n;
        if (a.Z.isFullServerPreview(e)) return !0;
        let r = o.ZP.getSelfMember(e);
        return c(null !== (t = null == r ? void 0 : r.joinedAt) && void 0 !== t ? t : void 0, null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : void 0);
    });
}
