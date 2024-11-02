n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(239091),
    a = n(246364),
    o = n(937111),
    s = n(914010),
    c = n(451478),
    u = n(325257),
    d = n(674552),
    h = n(981631);
function p(e, t) {
    (0, r.jW)(e, async () => {
        let { default: e } = await n.e('6368').then(n.bind(n, 987999));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
function f(e) {
    let { guildNode: t } = e,
        n = t.id,
        r = (0, l.e7)([o.Z], () => o.Z.getRequest(n)),
        f = (0, l.e7)([o.Z], () => o.Z.getJoinRequestGuild(n), [n]),
        m = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        g = (0, l.e7)([s.Z], () => s.Z.getGuildId());
    return null == f
        ? null
        : (0, i.jsx)(u.Z, {
              guildNode: t,
              guild: f,
              animatable: m,
              draggable: !1,
              selected: n === g,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge: (null == r ? void 0 : r.applicationStatus) === a.wB.REJECTED ? (0, d.jt)({ guildJoinRequestStatus: r.applicationStatus }) : void 0,
              route: h.Z5c.GUILD_MEMBER_VERIFICATION(n)
          });
}
