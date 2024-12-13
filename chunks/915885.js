n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(566840),
    c = n(693546),
    d = n(826581),
    u = n(63568),
    h = n(246364),
    p = n(98493),
    m = n(434479),
    f = n(496675),
    g = n(527379),
    C = n(981631),
    v = n(388032);
function _(e) {
    let { guild: t, selected: n } = e,
        _ = (0, u.jS)(t.id, 'Guild Sidebar'),
        x = (0, r.e7)([f.Z], () => f.Z.can(C.Plq.KICK_MEMBERS, t)),
        I = (0, r.e7)([d.Z], () => d.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        b = _ && x && null != I ? I : 0;
    l.useEffect(() => {
        x &&
            _ &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: h.wB.SUBMITTED,
                limit: p.p
            });
    }, [x, t.id, _]);
    let E = l.useCallback(() => {
            (0, g._X)(t.id);
        }, [t.id]),
        S = (0, s.XL)(t.id, o.z.MEMBERS_LAUNCH_UPSELL);
    return (0, i.jsx)('div', {
        ref: S,
        children: (0, i.jsx)(m.m, {
            id: 'members-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(a.GroupIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: v.intl.string(v.t.oclz3d),
            selected: n,
            onClick: E,
            trailing: b > 0 ? (0, i.jsx)(a.NumberBadge, { count: b }) : null
        })
    });
}
