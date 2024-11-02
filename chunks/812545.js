t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(47120);
var s = t(192379),
    l = t(442837),
    i = t(528963),
    o = t(237904);
let a = 1 * t(70956).Z.Millis.HOUR;
function r(e) {
    let [n, t] = s.useState(!1),
        r = (0, l.e7)([o.Z], () => o.Z.getFollowerStatsForChannel(e), [e]);
    return (
        s.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !n ? (t(!0), i.Z.fetchChannelFollowerStats(e)) : null != r && n && t(!1);
        }, [e, r, n]),
        [r, n]
    );
}
