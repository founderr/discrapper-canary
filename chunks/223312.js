n.d(t, {
    j: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    s = n(442837),
    r = n(826581),
    l = n(246364);
function a(e) {
    let { guildId: t, applicationStatus: n, sortOrder: a } = e,
        o = (0, s.e7)([r.Z], () => r.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: i.useMemo(() => (a === l.Nw.TIMESTAMP_DESC ? [...o].reverse() : o), [a, o])
    };
}
