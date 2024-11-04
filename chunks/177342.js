n.d(t, {
    Q: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(286379),
    s = n(797614),
    a = n(596739),
    o = n(473092);
function c(e) {
    let { channelId: t, warningId: n, senderId: c, warningType: u, header: d, description: h, onDismiss: m, buttons: p } = e;
    l.useEffect(() => {
        s.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, []);
    let f = l.useCallback(() => {
        null == m || m(),
            (0, o.qc)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: u,
                cta: o.NM.USER_BANNER_DISMISS
            });
    }, [m, t, n, c, u]);
    return (0, i.jsx)(a.W, {
        buttons: p,
        description: h,
        header: d,
        onDismiss: f
    });
}
