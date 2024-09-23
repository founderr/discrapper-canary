n.d(t, {
    Z: function () {
        return o;
    }
});
var l = n(470079),
    a = n(392711),
    i = n(442837),
    r = n(994752);
let s = [];
function o(e) {
    let { guildId: t, leaderboardId: n, sortByStatisticId: o, intervalOffset: u = 0, sortDesc: c = !0 } = e,
        d = (0, i.e7)([r.Z], () => r.Z.get(t, n, u));
    return l.useMemo(() => {
        if (null == d) return s;
        let e = c ? -1 / 0 : 1 / 0;
        return (0, a.orderBy)(
            d.users,
            (t) => {
                var n, l;
                return null !== (l = null === (n = t.statistics[o]) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : e;
            },
            c ? 'desc' : 'asc'
        );
    }, [d, o, c]);
}
