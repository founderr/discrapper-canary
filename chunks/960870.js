n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(470079),
    i = n(442837),
    a = n(906732),
    o = n(353647),
    s = n(785717),
    l = n(221292);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, analyticsLocations: _ } = e,
        { context: E, trackUserProfileAction: f } = (0, s.KZ)(),
        { analyticsLocations: h } = (0, a.ZP)(),
        p = null != _ ? _ : h,
        m = (0, i.e7)([o.Z], () => o.Z.getUserOutbox(t.id));
    return (0, r.useCallback)(
        (e) => {
            let { action: t } = e;
            f({
                action: t,
                analyticsLocations: p
            }),
                (0, l.z7)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: m,
                    analyticsLocations: p,
                    ...E
                });
        },
        [f, E, n, u, d, c, m, p]
    );
}
