"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var r = n("442837"),
  i = n("481060"),
  l = n("787014"),
  u = n("904245"),
  o = n("787263"),
  s = n("660189"),
  d = n("144140"),
  f = n("314897"),
  c = n("496675"),
  E = n("709054"),
  S = n("981631"),
  T = n("689938");

function _(e) {
  let t = e.isForumPost(),
    n = (0, r.useStateFromStores)([f.default], () => e.isOwner(f.default.getId()), [e]),
    {
      canManageChannel: _,
      canAccessChannel: C
    } = (0, r.useStateFromStoresObject)([c.default], () => ({
      canAccessChannel: c.default.can(e.accessPermissions, e),
      canManageChannel: c.default.can(e.isThread() ? S.Permissions.MANAGE_THREADS : S.Permissions.MANAGE_CHANNELS, e)
    }), [e]),
    N = (0, r.useStateFromStores)([d.default], () => {
      var t;
      return null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0
    }, [e.id]),
    {
      firstMessage: h
    } = (0, r.useStateFromStores)([s.default], () => s.default.getMessage(e.id), [e.id]),
    v = t && (_ || n && N < 1),
    m = t && n && !_ && N > 0 && null != h;
  return C && (_ || v || m) ? (0, a.jsx)(i.MenuItem, {
    id: "delete-channel",
    label: (() => {
      if (e.type === S.ChannelTypes.GUILD_CATEGORY) return T.default.Messages.DELETE_CATEGORY;
      if (e.isForumPost()) return v ? T.default.Messages.DELETE_FORUM_POST : T.default.Messages.DELETE_MESSAGE;
      if (e.isThread()) return T.default.Messages.DELETE_THREAD;
      return T.default.Messages.DELETE_CHANNEL
    })(),
    color: "danger",
    action: () => {
      (0, o.openDeleteChannelModal)(e, function() {
        m ? u.default.deleteMessage(e.id, E.default.castChannelIdAsMessageId(e.id)) : l.default.deleteChannel(e.id)
      })
    }
  }) : null
}