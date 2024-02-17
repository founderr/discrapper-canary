"use strict";
t.r(n), t.d(n, {
  default: function() {
    return s
  }
});
var l = t("37983");
t("884691");
var u = t("77078"),
  i = t("272030"),
  o = t("861370"),
  c = t("818059"),
  a = t("782340");

function s(e) {
  let {
    channel: n,
    channelId: t,
    originalLink: s,
    messageId: r,
    onSelect: d
  } = e, f = (0, c.default)(n, s, r), C = (0, o.default)({
    id: t,
    label: a.default.Messages.COPY_ID_CHANNEL
  });
  return (0, l.jsxs)(u.Menu, {
    navId: "channel-mention-context",
    onClose: i.closeContextMenu,
    onSelect: d,
    "aria-label": a.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(u.MenuGroup, {
      children: f
    }, "channel-mention-actions"), (0, l.jsx)(u.MenuGroup, {
      children: C
    }, "developer-actions")]
  })
}