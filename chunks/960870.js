r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(906732),
    o = r(353647),
    l = r(785717),
    u = r(221292);
function c(e) {
    let { user: n, display: r, activity: c, entry: d, stream: f, analyticsLocations: _ } = e,
        { context: h, trackUserProfileAction: p } = (0, l.KZ)(),
        { analyticsLocations: m } = (0, s.ZP)(),
        g = null != _ ? _ : m,
        E = (0, a.e7)([o.Z], () => o.Z.getUserOutbox(n.id));
    return (0, i.useCallback)(
        (e) => {
            let { action: n } = e;
            p({
                action: n,
                analyticsLocations: g
            }),
                (0, u.z7)({
                    action: n,
                    display: r,
                    activity: c,
                    entry: d,
                    stream: f,
                    outbox: E,
                    analyticsLocations: g,
                    ...h
                });
        },
        [p, h, r, c, f, d, E, g]
    );
}
