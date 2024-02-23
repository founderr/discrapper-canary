"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("289867"),
  i = n("217513"),
  r = n("893980"),
  o = n("58351"),
  u = n("982108"),
  d = n("849483"),
  c = n("664336"),
  f = n("49111"),
  h = n("782340");

function m(e) {
  let {
    channel: t,
    showCall: n
  } = e, m = (0, a.useStateFromStores)([u.default], () => u.default.getSection(t.id, null == t ? void 0 : t.isDM())), p = (0, i.default)(t.getRecipientId()), E = (0, o.default)(), S = m === f.ChannelSections.PROFILE && !E;
  return (0, l.jsx)(c.Icon, {
    disabled: E || n,
    tooltip: E || n ? h.default.Messages.SHOW_USER_PROFILE_UNAVAILABLE : S ? h.default.Messages.HIDE_USER_PROFILE : h.default.Messages.SHOW_USER_PROFILE,
    icon: d.default,
    onClick: () => {
      (0, r.trackProfilePanelToggled)(p, !S), s.default.toggleProfilePanelSection()
    },
    selected: S && !E && !n
  })
}