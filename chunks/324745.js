r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(906732),
    a = r(202527),
    s = r(168308),
    o = r(547972),
    l = r(332325);
function u(e) {
    let { onClose: n } = e,
        { shouldMergeGameSettings: r } = a.b.getCurrentConfig({ location: 'useOpenGameSettings' }),
        { analyticsLocations: u } = (0, i.ZP)();
    if (!!(0, s.Jw)())
        return () => {
            (0, o.Z)(r ? l.Z.MY_GAMES : l.Z.ACTIVITY_PRIVACY, {
                analyticsLocations: u,
                onClose: n
            });
        };
}
