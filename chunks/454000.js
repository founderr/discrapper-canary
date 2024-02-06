"use strict";
t.r(n), t.d(n, {
  default: function() {
    return a
  }
});
var l = t("37983");
t("884691");
var i = t("77078"),
  u = t("272030"),
  o = t("861370"),
  c = t("818059"),
  s = t("782340");

function a(e) {
  let {
    channel: n,
    channelId: t,
    originalLink: a,
    messageId: r,
    onSelect: d
  } = e, f = (0, c.default)(n, a, r), C = (0, o.default)({
    id: t,
    label: s.default.Messages.COPY_ID_CHANNEL
  });
  return (0, l.jsxs)(i.Menu, {
    navId: "channel-mention-context",
    onClose: u.closeContextMenu,
    onSelect: d,
    "aria-label": s.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(i.MenuGroup, {
      children: f
    }, "channel-mention-actions"), (0, l.jsx)(i.MenuGroup, {
      children: C
    }, "developer-actions")]
  })
}