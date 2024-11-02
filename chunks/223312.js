n.d(t, {
    j: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(826581),
    a = n(246364);
function s(e) {
    let { guildId: t, applicationStatus: n, sortOrder: s } = e,
        o = (0, l.e7)([r.Z], () => r.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: i.useMemo(() => (s === a.Nw.TIMESTAMP_DESC ? [...o].reverse() : o), [s, o])
    };
}
