n.d(t, {
    Z: function () {
        return u;
    }
});
var a = n(470079),
    l = n(392711),
    i = n(442837),
    r = n(994752),
    s = n(235070);
let o = [];
function u(e) {
    let { guildId: t, leaderboardId: n, intervalOffset: u = 0 } = e,
        { sortByStatisticId: c, sortDesc: d } = (0, s.A)(n),
        h = (0, i.e7)([r.Z], () => r.Z.get(t, n, u));
    return a.useMemo(() => {
        if (null == h) return o;
        let e = d ? -1 / 0 : 1 / 0;
        return (0, l.orderBy)(
            h.users,
            (t) => {
                var n, a;
                return null !== (a = null === (n = t.statistics[c]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : e;
            },
            d ? 'desc' : 'asc'
        );
    }, [h, c, d]);
}
