"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("18054"),
  s = n("819689"),
  r = n("430475"),
  o = n("610730"),
  d = n("271938"),
  c = n("957255"),
  f = n("299039"),
  E = n("49111"),
  _ = n("782340");

function S(e) {
  let t = e.isForumPost(),
    S = (0, i.useStateFromStores)([d.default], () => e.isOwner(d.default.getId()), [e]),
    {
      canManageChannel: N,
      canAccessChannel: C
    } = (0, i.useStateFromStoresObject)([c.default], () => ({
      canAccessChannel: c.default.can(e.accessPermissions, e),
      canManageChannel: c.default.can(e.isThread() ? E.Permissions.MANAGE_THREADS : E.Permissions.MANAGE_CHANNELS, e)
    }), [e]),
    T = (0, i.useStateFromStores)([o.default], () => {
      var t;
      return null !== (t = o.default.getCount(e.id)) && void 0 !== t ? t : 0
    }, [e.id]),
    {
      firstMessage: v
    } = (0, i.useStateFromStores)([r.default], () => r.default.getMessage(e.id), [e.id]),
    h = t && (N || S && T < 1),
    g = t && S && !N && T > 0 && null != v;
  return C && (N || h || g) ? (0, a.jsx)(l.MenuItem, {
    id: "delete-channel",
    label: (() => {
      if (e.type === E.ChannelTypes.GUILD_CATEGORY) return _.default.Messages.DELETE_CATEGORY;
      if (e.isForumPost()) return h ? _.default.Messages.DELETE_FORUM_POST : _.default.Messages.DELETE_MESSAGE;
      if (e.isThread()) return _.default.Messages.DELETE_THREAD;
      return _.default.Messages.DELETE_CHANNEL
    })(),
    color: "danger",
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("575351").then(n.bind(n, "575351"));
      return n => (0, a.jsx)(t, {
        ...n,
        onConfirm: () => {
          n.onClose(), g ? s.default.deleteMessage(e.id, f.default.castChannelIdAsMessageId(e.id)) : u.default.deleteChannel(e.id)
        },
        channel: e
      })
    })
  }) : null
}