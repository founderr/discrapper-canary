"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("239091"),
  s = n("108843"),
  i = n("100527"),
  r = n("299206"),
  d = n("423589"),
  o = n("398048"),
  c = n("315732"),
  f = n("3689"),
  _ = n("323597"),
  E = n("852245"),
  p = n("367722"),
  N = n("776568"),
  I = n("218035"),
  C = n("775666"),
  M = n("593589"),
  T = n("442754"),
  h = n("981631"),
  O = n("689938");
t.default = (0, s.default)(function(e) {
  let {
    channel: t,
    guild: n,
    includeTopic: s = !1,
    onSelect: i
  } = e, A = (0, T.default)(t), g = (0, N.default)(t), m = (0, I.default)(t), x = (0, c.default)(t), L = (0, E.default)(t), P = (0, p.default)(t, n), v = (0, o.default)(t, n), S = (0, f.default)(t, n, h.ChannelTypes.GUILD_TEXT), y = (0, f.default)(t, n, h.ChannelTypes.GUILD_VOICE), b = (0, _.default)(t), j = (0, r.default)({
    id: t.id,
    label: O.default.Messages.COPY_ID_CHANNEL
  }), G = (0, M.default)(t, "title_context_menu"), H = (0, d.useShouldUseNewNotificationSystem)("ChannelTitleContextMenu"), U = (0, C.default)(t);
  return (0, a.jsxs)(u.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: A
    }), (0, a.jsx)(u.MenuGroup, {
      children: g
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [s ? x : H ? U : m, L]
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [P, v, S, y]
    }), (0, a.jsx)(u.MenuGroup, {
      children: G
    }), (0, a.jsx)(u.MenuGroup, {
      children: b
    }), (0, a.jsx)(u.MenuGroup, {
      children: j
    })]
  })
}, [i.default.CONTEXT_MENU, i.default.CHANNEL_TITLE_MENU])