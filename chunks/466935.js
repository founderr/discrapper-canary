n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(970606),
    s = n(693546),
    c = n(826581),
    u = n(246364),
    d = n(98493),
    h = n(703656),
    p = n(496675),
    f = n(669405),
    m = n(434479),
    g = n(981631),
    C = n(176505),
    _ = n(388032);
function x(e) {
    let { guild: t, selected: n } = e,
        x = (0, r.e7)([p.Z], () => p.Z.can(g.Plq.KICK_MEMBERS, t)),
        v = (0, r.e7)([c.Z], () => c.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        I = x && null != v ? v : 0;
    return (
        l.useEffect(() => {
            x &&
                s.Z.fetchGuildJoinRequests({
                    guildId: t.id,
                    status: u.wB.SUBMITTED,
                    limit: d.p
                });
        }, [x, t.id]),
        (0, i.jsx)(m.m, {
            id: 'application-review-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(f.Z, {
                    className: e,
                    width: 24,
                    height: 24
                }),
            text: _.intl.string(_.t.tcvVXF),
            selected: n,
            onClick: () => {
                (0, o.Q2)({
                    guildId: t.id,
                    source: g.jXE.CHANNEL_LIST,
                    tab: C.oC.MEMBER_APPLICATIONS
                }),
                    (0, h.uL)(g.Z5c.CHANNEL(t.id, C.oC.MEMBER_APPLICATIONS));
            },
            trailing: I > 0 ? (0, i.jsx)(a.NumberBadge, { count: I }) : null
        })
    );
}
