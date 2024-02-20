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
  let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
    r = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
  if (__OVERLAY__ || !r) return null;
  let c = () => {
    (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("581354").then(n.bind(n, "581354"));
      return n => (0, a.jsx)(t, {
        ...n,
        channelType: o,
        guildId: e.guild_id,
        categoryId: e.parent_id
      })
    })
  };
  switch (o) {
    case d.ChannelTypes.GUILD_TEXT:
      return (0, a.jsx)(l.MenuItem, {
        id: "create-text-channel",
        label: s.default.Messages.CREATE_TEXT_CHANNEL,
        action: c
      });
    case d.ChannelTypes.GUILD_VOICE:
      return (0, a.jsx)(l.MenuItem, {
        id: "create-voice-channel",
        label: s.default.Messages.CREATE_VOICE_CHANNEL,
        action: c
      });
    default:
      return null
  }
}