n.d(e, {
    Z: function () {
        return s;
    }
});
var l = n(192379),
    r = n(442837),
    i = n(897285),
    a = n(924301);
function s(t, e, n) {
    let s = (0, r.e7)([a.ZP], () => a.ZP.getUserCount(e, n));
    return (
        (0, l.useEffect)(() => {
            null != t && null != e && i.Z.getGuildEventUserCounts(t, e, null != n ? [n] : []);
        }, [e, t, n]),
        s
    );
}
