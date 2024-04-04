"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var l = a("735250"),
  n = a("470079"),
  u = a("442837"),
  s = a("481060"),
  d = a("58540"),
  r = a("438536"),
  i = a("346479"),
  o = a("665906"),
  f = a("592125"),
  c = a("430824"),
  m = a("496675"),
  M = a("594174"),
  E = a("981631"),
  S = a("689938");

function _(e, t, _) {
  let g = n.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, d.useSubscribeGuildMembers)(g), (0, u.useStateFromStores)([m.default], () => m.default.getGuildVersion(t), [t]);
  let I = (0, u.useStateFromStores)([f.default], () => f.default.getChannel(_)),
    C = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
    R = (0, u.useStateFromStores)([M.default], () => M.default.getCurrentUser()),
    N = (0, r.default)(I, "Context Menu"),
    A = (0, o.useIsThreadModerator)(I);
  if ((null == R ? void 0 : R.id) === e.id) return [N];
  if (null == C || null == I || null == R) return [];
  let T = A || I.ownerId === R.id && I.type === E.ChannelTypes.PRIVATE_THREAD;
  return [T ? (0, l.jsx)(s.MenuItem, {
    id: "remove",
    label: I.isForumPost() ? S.default.Messages.REMOVE_USER_FROM_FORUM_POST.format({
      user: e.username
    }) : S.default.Messages.REMOVE_USER_FROM_THREAD.format({
      user: e.username
    }),
    color: "danger",
    action: () => i.default.removeMember(I, e.id, "Context Menu")
  }) : null, m.default.canManageUser(E.Permissions.KICK_MEMBERS, e, C) ? (0, l.jsx)(s.MenuItem, {
    id: "kick",
    label: T ? S.default.Messages.KICK_USER_FROM_SERVER.format({
      user: e.username
    }) : S.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("5454")]).then(a.bind(a, "854360"));
      return a => (0, l.jsx)(t, {
        ...a,
        guildId: C.id,
        user: e
      })
    })
  }) : null, m.default.canManageUser(E.Permissions.BAN_MEMBERS, e, C) ? (0, l.jsx)(s.MenuItem, {
    id: "ban",
    label: T ? S.default.Messages.BAN_USER_FROM_SERVER.format({
      user: e.username
    }) : S.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("43350")]).then(a.bind(a, "98746"));
      return a => (0, l.jsx)(t, {
        ...a,
        guildId: C.id,
        user: e
      })
    })
  }) : null]
}