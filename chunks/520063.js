"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var a = l("735250"),
  u = l("470079"),
  n = l("442837"),
  s = l("481060"),
  d = l("58540"),
  r = l("438536"),
  i = l("346479"),
  o = l("665906"),
  f = l("592125"),
  c = l("430824"),
  E = l("496675"),
  M = l("594174"),
  S = l("981631"),
  m = l("689938");

function _(e, t, _) {
  let g = u.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, d.useSubscribeGuildMembers)(g), (0, n.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let R = (0, n.useStateFromStores)([f.default], () => f.default.getChannel(_)),
    A = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
    C = (0, n.useStateFromStores)([M.default], () => M.default.getCurrentUser()),
    N = (0, r.default)(R, "Context Menu"),
    I = (0, o.useIsThreadModerator)(R);
  if ((null == C ? void 0 : C.id) === e.id) return [N];
  if (null == A || null == R || null == C) return [];
  let O = I || R.ownerId === C.id && R.type === S.ChannelTypes.PRIVATE_THREAD;
  return [O ? (0, a.jsx)(s.MenuItem, {
    id: "remove",
    label: R.isForumPost() ? m.default.Messages.REMOVE_USER_FROM_FORUM_POST.format({
      user: e.username
    }) : m.default.Messages.REMOVE_USER_FROM_THREAD.format({
      user: e.username
    }),
    color: "danger",
    action: () => i.default.removeMember(R, e.id, "Context Menu")
  }) : null, E.default.canManageUser(S.Permissions.KICK_MEMBERS, e, A) ? (0, a.jsx)(s.MenuItem, {
    id: "kick",
    label: O ? m.default.Messages.KICK_USER_FROM_SERVER.format({
      user: e.username
    }) : m.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([l.e("99387"), l.e("5454")]).then(l.bind(l, "854360"));
      return l => (0, a.jsx)(t, {
        ...l,
        guildId: A.id,
        user: e
      })
    })
  }) : null, E.default.canManageUser(S.Permissions.BAN_MEMBERS, e, A) ? (0, a.jsx)(s.MenuItem, {
    id: "ban",
    label: O ? m.default.Messages.BAN_USER_FROM_SERVER.format({
      user: e.username
    }) : m.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
      return l => (0, a.jsx)(t, {
        ...l,
        guildId: A.id,
        user: e
      })
    })
  }) : null]
}