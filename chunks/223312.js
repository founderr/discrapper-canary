n.d(t, {
    j: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(826581),
    l = n(246364);
function o(e) {
    let { guildId: t, applicationStatus: n, sortOrder: o } = e,
        c = (0, r.e7)([a.Z], () => a.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: i.useMemo(() => (o === l.Nw.TIMESTAMP_DESC ? [...c].reverse() : c), [o, c])
    };
}
