"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var a = t("735250");
t("470079");
var u = t("481060"),
  o = t("239091"),
  l = t("299206"),
  s = t("461757"),
  i = t("689938");

function c(e) {
  let {
    channel: n,
    channelId: t,
    originalLink: c,
    messageId: r,
    onSelect: d
  } = e, f = (0, s.default)(n, c, r), p = (0, l.default)({
    id: t,
    label: i.default.Messages.COPY_ID_CHANNEL
  });
  return (0, a.jsxs)(u.Menu, {
    navId: "channel-mention-context",
    onClose: o.closeContextMenu,
    onSelect: d,
    "aria-label": i.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: f
    }, "channel-mention-actions"), (0, a.jsx)(u.MenuGroup, {
      children: p
    }, "developer-actions")]
  })
}