l.d(n, {
    Z: function () {
        return g;
    }
});
var t = l(200651),
    i = l(192379),
    a = l(442837),
    r = l(481060),
    s = l(58540),
    u = l(438536),
    d = l(346479),
    o = l(665906),
    c = l(592125),
    Z = l(430824),
    E = l(496675),
    M = l(594174),
    f = l(981631),
    _ = l(689938);
function g(e, n, g) {
    let I = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, s.$)(I), (0, a.e7)([E.Z], () => E.Z.getGuildVersion(n), [n]);
    let m = (0, a.e7)([c.Z], () => c.Z.getChannel(g)),
        R = (0, a.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
        N = (0, a.e7)([M.default], () => M.default.getCurrentUser()),
        C = (0, u.Z)(m, 'Context Menu'),
        O = (0, o.Xb)(m);
    if ((null == N ? void 0 : N.id) === e.id) return [C];
    if (null == R || null == m || null == N) return [];
    let A = O || (m.ownerId === N.id && m.type === f.d4z.PRIVATE_THREAD);
    return [
        A
            ? (0, t.jsx)(r.MenuItem, {
                  id: 'remove',
                  label: m.isForumPost() ? _.Z.Messages.REMOVE_USER_FROM_FORUM_POST.format({ user: e.username }) : _.Z.Messages.REMOVE_USER_FROM_THREAD.format({ user: e.username }),
                  color: 'danger',
                  action: () => d.Z.removeMember(m, e.id, 'Context Menu')
              })
            : null,
        E.Z.canManageUser(f.Plq.KICK_MEMBERS, e, R)
            ? (0, t.jsx)(r.MenuItem, {
                  id: 'kick',
                  label: A ? _.Z.Messages.KICK_USER_FROM_SERVER.format({ user: e.username }) : _.Z.Messages.KICK_USER.format({ user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: n } = await l.e('5454').then(l.bind(l, 854360));
                          return (l) =>
                              (0, t.jsx)(n, {
                                  ...l,
                                  guildId: R.id,
                                  user: e
                              });
                      })
              })
            : null,
        E.Z.canManageUser(f.Plq.BAN_MEMBERS, e, R)
            ? (0, t.jsx)(r.MenuItem, {
                  id: 'ban',
                  label: A ? _.Z.Messages.BAN_USER_FROM_SERVER.format({ user: e.username }) : _.Z.Messages.BAN_USER.format({ user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: n } = await l.e('43350').then(l.bind(l, 98746));
                          return (l) =>
                              (0, t.jsx)(n, {
                                  ...l,
                                  guildId: R.id,
                                  user: e
                              });
                      })
              })
            : null
    ];
}
