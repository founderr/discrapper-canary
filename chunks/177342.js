n.d(t, {
    Q: function () {
        return c;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(286379),
    l = n(797614),
    r = n(596739),
    o = n(473092);
function c(e) {
    let { channelId: t, warningId: n, senderId: c, warningType: u, header: d, description: h, onDismiss: p, buttons: m } = e;
    s.useEffect(() => {
        l.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, []);
    let _ = s.useCallback(() => {
        null == p || p(),
            (0, o.qc)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: u,
                cta: o.NM.USER_BANNER_DISMISS
            });
    }, [p, t, n, c, u]);
    return (0, i.jsx)(r.W, {
        buttons: m,
        description: h,
        header: d,
        onDismiss: _
    });
}
