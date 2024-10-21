n.d(s, {
    j: function () {
        return i;
    }
}),
    n(47120);
var t = n(192379),
    a = n(442837),
    l = n(826581),
    r = n(246364);
function i(e) {
    let { guildId: s, applicationStatus: n, sortOrder: i } = e,
        o = (0, a.e7)([l.Z], () => l.Z.getRequests(s, n), [n, s]);
    return {
        guildJoinRequests: t.useMemo(() => (i === r.Nw.TIMESTAMP_DESC ? [...o].reverse() : o), [i, o])
    };
}
