n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(970606),
    s = n(693546),
    c = n(826581),
    d = n(246364),
    u = n(98493),
    h = n(703656),
    p = n(496675),
    m = n(785195),
    f = n(434479),
    g = n(981631),
    C = n(176505),
    v = n(388032);
function _(e) {
    let { guild: t, selected: n } = e,
        _ = (0, r.e7)([p.Z], () => p.Z.can(g.Plq.KICK_MEMBERS, t)),
        x = (0, r.e7)([c.Z], () => c.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        I = _ && null != x ? x : 0;
    return (
        l.useEffect(() => {
            _ &&
                s.Z.fetchGuildJoinRequests({
                    guildId: t.id,
                    status: d.wB.SUBMITTED,
                    limit: u.p
                });
        }, [_, t.id]),
        (0, i.jsx)(f.m, {
            id: 'application-review-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(m.Z, {
                    className: e,
                    width: 24,
                    height: 24
                }),
            text: v.intl.string(v.t.tcvVXF),
            selected: n,
            onClick: () => {
                (0, a.Q2)({
                    guildId: t.id,
                    source: g.jXE.CHANNEL_LIST,
                    tab: C.oC.MEMBER_APPLICATIONS
                }),
                    (0, h.uL)(g.Z5c.CHANNEL(t.id, C.oC.MEMBER_APPLICATIONS));
            },
            trailing: I > 0 ? (0, i.jsx)(o.NumberBadge, { count: I }) : null
        })
    );
}
