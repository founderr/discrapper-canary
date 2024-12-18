t.d(n, {
    Z: function () {
        return x;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(616780),
    o = t(438536),
    d = t(946273),
    s = t(346479),
    c = t(665906),
    Z = t(592125),
    f = t(430824),
    g = t(496675),
    m = t(594174),
    M = t(981631),
    v = t(388032);
function x(e, n, x) {
    let h = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, u.$)(h), (0, r.e7)([g.Z], () => g.Z.getGuildVersion(n), [n]);
    let p = (0, r.e7)([Z.Z], () => Z.Z.getChannel(x)),
        P = (0, r.e7)([f.Z], () => f.Z.getGuild(n), [n]),
        C = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        I = (0, o.Z)(p, 'Context Menu'),
        b = (0, c.Xb)(p);
    if ((null == C ? void 0 : C.id) === e.id) return [I];
    if (null == P || null == p || null == C) return [];
    let E = b || (p.ownerId === C.id && p.type === M.d4z.PRIVATE_THREAD);
    return [
        E
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'remove',
                  label: p.isForumPost() ? v.intl.formatToPlainString(v.t.v2KNNz, { user: e.username }) : v.intl.formatToPlainString(v.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => s.Z.removeMember(p, e.id, 'Context Menu')
              })
            : null,
        (0, d.BK)(e, P)
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'kick',
                  label: E ? v.intl.formatToPlainString(v.t['1Ie87u'], { user: e.username }) : v.intl.formatToPlainString(v.t['9l/iTU'], { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: n } = await t.e('5454').then(t.bind(t, 854360));
                          return (t) =>
                              (0, l.jsx)(n, {
                                  ...t,
                                  guildId: P.id,
                                  user: e
                              });
                      })
              })
            : null,
        (0, d.mm)(e, P)
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'ban',
                  label: E ? v.intl.formatToPlainString(v.t.i62APT, { user: e.username }) : v.intl.formatToPlainString(v.t.WnpUBg, { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: n } = await t.e('43350').then(t.bind(t, 98746));
                          return (t) =>
                              (0, l.jsx)(n, {
                                  ...t,
                                  guildId: P.id,
                                  user: e
                              });
                      })
              })
            : null
    ];
}
