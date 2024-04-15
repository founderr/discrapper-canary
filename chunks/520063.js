"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var a = l("735250"),
  u = l("470079"),
  n = l("442837"),
  d = l("481060"),
  s = l("58540"),
  r = l("438536"),
  i = l("346479"),
  o = l("665906"),
  f = l("592125"),
  c = l("430824"),
  E = l("496675"),
  m = l("594174"),
  M = l("981631"),
  S = l("689938");

function _(e, t, _) {
  let g = u.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, s.useSubscribeGuildMembers)(g), (0, n.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let I = (0, n.useStateFromStores)([f.default], () => f.default.getChannel(_)),
    R = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
    C = (0, n.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
    A = (0, r.default)(I, "Context Menu"),
    T = (0, o.useIsThreadModerator)(I);
  if ((null == C ? void 0 : C.id) === e.id) return [A];
  if (null == R || null == I || null == C) return [];
  let N = T || I.ownerId === C.id && I.type === M.ChannelTypes.PRIVATE_THREAD;
  return [N ? (0, a.jsx)(d.MenuItem, {
    id: "remove",
    label: I.isForumPost() ? S.default.Messages.REMOVE_USER_FROM_FORUM_POST.format({
      user: e.username
    }) : S.default.Messages.REMOVE_USER_FROM_THREAD.format({
      user: e.username
    }),
    color: "danger",
    action: () => i.default.removeMember(I, e.id, "Context Menu")
  }) : null, E.default.canManageUser(M.Permissions.KICK_MEMBERS, e, R) ? (0, a.jsx)(d.MenuItem, {
    id: "kick",
    label: N ? S.default.Messages.KICK_USER_FROM_SERVER.format({
      user: e.username
    }) : S.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([l.e("99387"), l.e("5454")]).then(l.bind(l, "854360"));
      return l => (0, a.jsx)(t, {
        ...l,
        guildId: R.id,
        user: e
      })
    })
  }) : null, E.default.canManageUser(M.Permissions.BAN_MEMBERS, e, R) ? (0, a.jsx)(d.MenuItem, {
    id: "ban",
    label: N ? S.default.Messages.BAN_USER_FROM_SERVER.format({
      user: e.username
    }) : S.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
      return l => (0, a.jsx)(t, {
        ...l,
        guildId: R.id,
        user: e
      })
    })
  }) : null]
}