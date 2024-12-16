n.d(t, {
    j: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(826581),
    o = n(246364);
function l(e) {
    let { guildId: t, applicationStatus: n, sortOrder: l } = e,
        c = (0, r.e7)([a.Z], () => a.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: i.useMemo(() => (l === o.Nw.TIMESTAMP_DESC ? [...c].reverse() : c), [l, c])
    };
}
