"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
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
  let g = n.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, s.useSubscribeGuildMembers)(g), (0, u.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let I = (0, u.useStateFromStores)([f.default], () => f.default.getChannel(_)),
    C = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
    R = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
    A = (0, r.default)(I, "Context Menu"),
    N = (0, o.useIsThreadModerator)(I);
  if ((null == R ? void 0 : R.id) === e.id) return [A];
  if (null == C || null == I || null == R) return [];
  let T = N || I.ownerId === R.id && I.type === M.ChannelTypes.PRIVATE_THREAD;
  return [T ? (0, a.jsx)(d.MenuItem, {
    id: "remove",
    label: I.isForumPost() ? S.default.Messages.REMOVE_USER_FROM_FORUM_POST.format({
      user: e.username
    }) : S.default.Messages.REMOVE_USER_FROM_THREAD.format({
      user: e.username
    }),
    color: "danger",
    action: () => i.default.removeMember(I, e.id, "Context Menu")
  }) : null, E.default.canManageUser(M.Permissions.KICK_MEMBERS, e, C) ? (0, a.jsx)(d.MenuItem, {
    id: "kick",
    label: T ? S.default.Messages.KICK_USER_FROM_SERVER.format({
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
        guildId: C.id,
        user: e
      })
    })
  }) : null, E.default.canManageUser(M.Permissions.BAN_MEMBERS, e, C) ? (0, a.jsx)(d.MenuItem, {
    id: "ban",
    label: T ? S.default.Messages.BAN_USER_FROM_SERVER.format({
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
        guildId: C.id,
        user: e
      })
    })
  }) : null]
}