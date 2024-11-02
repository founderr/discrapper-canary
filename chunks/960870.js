n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(192379),
    i = n(442837),
    a = n(906732),
    s = n(353647),
    o = n(785717),
    l = n(221292);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, analyticsLocations: f } = e,
        { context: _, trackUserProfileAction: h } = (0, o.KZ)(),
        { analyticsLocations: p } = (0, a.ZP)(),
        m = null != f ? f : p,
        g = (0, i.e7)([s.Z], () => s.Z.getUserOutbox(t.id));
    return (0, r.useCallback)(
        (e) => {
            let { action: t } = e;
            h({
                action: t,
                analyticsLocations: m
            }),
                (0, l.z7)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: g,
                    analyticsLocations: m,
                    ..._
                });
        },
        [h, _, n, u, d, c, g, m]
    );
}
