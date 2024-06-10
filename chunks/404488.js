"use strict";
t.r(l), t.d(l, {
  MIN_GUILD_HOME_PAGE_WIDTH: function() {
    return o
  },
  default: function() {
    return c
  }
});
var a = t("735250");
t("470079");
var n = t("442837"),
  s = t("325708"),
  i = t("213557"),
  d = t("433355"),
  r = t("981631"),
  u = t("176505");
let o = 656;

function c(e) {
  let {
    pageWidth: l,
    onSidebarResize: t
  } = e, c = (0, n.useStateFromStores)([d.default], () => d.default.getSidebarState(u.StaticChannelRoute.GUILD_HOME));
  if (null == c || null == c.channelId) return null;
  let f = l - r.CHANNEL_SIDEBAR_WIDTH - o;
  return (0, a.jsx)(s.default, {
    sidebarType: s.ChatSidebarType.HomeSidebar,
    maxWidth: f,
    onWidthChange: t,
    children: (0, a.jsx)(i.default, {
      channelId: c.channelId,
      baseChannelId: u.StaticChannelRoute.GUILD_HOME,
      channelViewSource: "Home View",
      isResourceChannelView: !0
    })
  })
}