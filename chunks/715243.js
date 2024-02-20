"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("957255"),
  d = n("49111"),
  s = n("782340");

function o(e, t) {
  let o = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
  return __OVERLAY__ || !o ? null : (0, a.jsx)(l.MenuItem, {
    id: "clone-channel",
    label: s.default.Messages.CLONE_CHANNEL,
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: i
      } = await n.el("581354").then(n.bind(n, "581354"));
      return n => (0, a.jsx)(i, {
        ...n,
        channelType: e.type,
        guildId: t.id,
        categoryId: e.parent_id,
        cloneChannelId: e.id
      })
    })
  })
}