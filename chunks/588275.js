n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(239091),
    r = n(246364),
    s = n(937111),
    o = n(914010),
    c = n(451478),
    u = n(325257),
    d = n(674552),
    h = n(981631);
function p(e, t) {
    (0, a.jW)(e, async () => {
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
        a = (0, l.e7)([s.Z], () => s.Z.getRequest(n)),
        f = (0, l.e7)([s.Z], () => s.Z.getJoinRequestGuild(n), [n]),
        _ = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        m = (0, l.e7)([o.Z], () => o.Z.getGuildId());
    return null == f
        ? null
        : (0, i.jsx)(u.Z, {
              guildNode: t,
              guild: f,
              animatable: _,
              draggable: !1,
              selected: n === m,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge: (null == a ? void 0 : a.applicationStatus) === r.wB.REJECTED ? (0, d.jt)({ guildJoinRequestStatus: a.applicationStatus }) : void 0,
              route: h.Z5c.GUILD_MEMBER_VERIFICATION(n)
          });
}
