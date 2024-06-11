"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var l = s("512722"),
  n = s.n(l),
  i = s("442837"),
  r = s("481060"),
  o = s("395586"),
  d = s("825055"),
  u = s("909656"),
  c = s("430824"),
  E = s("689938");

function _(e) {
  let {
    guildId: t
  } = e, s = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t));
  return n()(null != s, "Guild not found"), (0, a.jsxs)(o.CreatorMonetizationSettingsDisabledContextProvider, {
    guildId: t,
    children: [(0, a.jsx)(d.default, {
      children: E.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SYNC_DISCLAIMER
    }), (0, a.jsx)(r.Spacer, {
      size: 32
    }), (0, a.jsx)(u.default, {
      guild: s,
      isGuildProducts: !0
    })]
  })
}