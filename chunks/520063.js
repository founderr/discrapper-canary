t.d(n, {
    Z: function () {
        return v;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(616780),
    o = t(438536),
    d = t(346479),
    s = t(665906),
    c = t(592125),
    Z = t(430824),
    f = t(496675),
    g = t(594174),
    m = t(981631),
    M = t(388032);
function v(e, n, v) {
    let x = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, u.$)(x), (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
    let h = (0, r.e7)([c.Z], () => c.Z.getChannel(v)),
        P = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
        p = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        C = (0, o.Z)(h, 'Context Menu'),
        I = (0, s.Xb)(h);
    if ((null == p ? void 0 : p.id) === e.id) return [C];
    if (null == P || null == h || null == p) return [];
    let b = I || (h.ownerId === p.id && h.type === m.d4z.PRIVATE_THREAD);
    return [
        b
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'remove',
                  label: h.isForumPost() ? M.intl.formatToPlainString(M.t.v2KNNz, { user: e.username }) : M.intl.formatToPlainString(M.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => d.Z.removeMember(h, e.id, 'Context Menu')
              })
            : null,
        f.Z.canManageUser(m.Plq.KICK_MEMBERS, e, P)
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'kick',
                  label: b ? M.intl.formatToPlainString(M.t['1Ie87u'], { user: e.username }) : M.intl.formatToPlainString(M.t['9l/iTU'], { user: e.username }),
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
        f.Z.canManageUser(m.Plq.BAN_MEMBERS, e, P)
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'ban',
                  label: b ? M.intl.formatToPlainString(M.t.i62APT, { user: e.username }) : M.intl.formatToPlainString(M.t.WnpUBg, { user: e.username }),
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
