"use strict";
t.r(n);
var a = t("735250");
t("470079");
var u = t("481060"),
  s = t("239091"),
  l = t("108843"),
  r = t("100527"),
  i = t("299206"),
  o = t("323597"),
  c = t("852245"),
  d = t("367722"),
  f = t("689938");
n.default = (0, l.default)(function(e) {
  let {
    channel: n,
    guild: t,
    onSelect: l
  } = e, r = (0, c.default)(n), E = (0, d.default)(n, t), I = (0, o.default)(n), _ = (0, i.default)({
    id: n.id,
    label: f.default.Messages.COPY_ID_CHANNEL
  });
  return (0, a.jsxs)(u.Menu, {
    navId: "channel-context",
    onClose: s.closeContextMenu,
    "aria-label": f.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: r
    }), (0, a.jsx)(u.MenuGroup, {
      children: E
    }), (0, a.jsx)(u.MenuGroup, {
      children: I
    }), (0, a.jsx)(u.MenuGroup, {
      children: _
    })]
  })
}, [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_STORE_CHANNEL_MENU])