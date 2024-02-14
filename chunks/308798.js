"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("18054"),
  r = n("819689"),
  s = n("430475"),
  o = n("610730"),
  d = n("271938"),
  c = n("957255"),
  f = n("49111"),
  E = n("782340");

function _(e) {
  let t = e.isForumPost(),
    _ = (0, i.useStateFromStores)([d.default], () => e.isOwner(d.default.getId()), [e]),
    {
      canManageChannel: S,
      canAccessChannel: N
    } = (0, i.useStateFromStoresObject)([c.default], () => ({
      canAccessChannel: c.default.can(e.accessPermissions, e),
      canManageChannel: c.default.can(e.isThread() ? f.Permissions.MANAGE_THREADS : f.Permissions.MANAGE_CHANNELS, e)
    }), [e]),
    C = (0, i.useStateFromStores)([o.default], () => {
      var t;
      return null !== (t = o.default.getCount(e.id)) && void 0 !== t ? t : 0
    }, [e.id]),
    {
      firstMessage: T
    } = (0, i.useStateFromStores)([s.default], () => s.default.getMessage(e.id), [e.id]),
    v = t && (S || _ && C < 1),
    h = t && _ && !S && C > 0 && null != T;
  return N && (S || v || h) ? (0, a.jsx)(l.MenuItem, {
    id: "delete-channel",
    label: (() => {
      if (e.type === f.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
      if (e.isForumPost()) return v ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
      if (e.isThread()) return E.default.Messages.DELETE_THREAD;
      return E.default.Messages.DELETE_CHANNEL
    })(),
    color: "danger",
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("575351").then(n.bind(n, "575351"));
      return n => (0, a.jsx)(t, {
        ...n,
        onConfirm: () => {
          n.onClose(), h ? r.default.deleteMessage(e.id, e.id) : u.default.deleteChannel(e.id)
        },
        channel: e
      })
    })
  }) : null
}