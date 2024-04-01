"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("776568"),
  r = n("218035"),
  o = n("775666"),
  u = n("858822"),
  d = n("423589"),
  c = n("131704"),
  f = n("430824");

function h(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: h,
    navId: E,
    label: m,
    location: p,
    includeGuildMute: S
  } = e, g = (0, r.useChannelNotificationRadioItems)(t), _ = (0, o.useChannelNotificationSettingsItemInner)(t), N = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(t.guild_id)), I = (0, u.default)(N), T = (0, d.useShouldUseNewNotificationSystem)("ChannelNotificationSettingsPopoutMenu") && c.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(t.type);
  return (0, a.jsxs)(s.Menu, {
    navId: E,
    onClose: n,
    "aria-label": m,
    onSelect: h,
    children: [(0, a.jsx)(s.MenuGroup, {
      children: (0, i.default)(t, p)
    }), S ? (0, a.jsx)(s.MenuGroup, {
      children: I
    }) : null, T ? _ : (0, a.jsx)(s.MenuGroup, {
      children: g
    })]
  })
}