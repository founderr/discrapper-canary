"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("239091"),
  l = n("883385"),
  s = n("108843"),
  o = n("947440"),
  u = n("100527"),
  d = n("299206"),
  c = n("916069"),
  h = n("895563"),
  f = n("212205"),
  p = n("478035"),
  m = n("62420"),
  v = n("423589"),
  g = n("398048"),
  x = n("109764"),
  E = n("3689"),
  _ = n("323597"),
  C = n("852245"),
  S = n("367722"),
  y = n("461535"),
  b = n("776568"),
  O = n("218035"),
  T = n("775666"),
  I = n("593589"),
  M = n("442754"),
  P = n("981631"),
  A = n("689938");

function L(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, y.default)(t), s = (0, x.default)(t), u = (0, h.useAddToFavoritesItem)(t), c = (0, h.useRemoveFromFavoritesItem)(t), g = (0, f.default)(t), E = (0, p.default)(t), _ = (0, m.default)(t), S = (0, b.default)(t), I = (0, O.default)(t), M = (0, C.default)(t), P = (0, d.default)({
    id: t.id,
    label: A.default.Messages.COPY_ID_CHANNEL
  }), L = (0, o.default)(t), N = (0, T.default)(t), w = (0, v.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(r.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": A.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(r.MenuGroup, {
      children: l
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [E, _, g, u]
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [S, w ? N : I]
    }), (0, i.jsx)(r.MenuGroup, {
      children: M
    }), (0, i.jsx)(r.MenuGroup, {
      children: L
    }), (0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: s
    }), (0, i.jsx)(r.MenuGroup, {
      children: P
    })]
  })
}

function N(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, s = (0, y.default)(t), o = (0, x.default)(t), u = (0, h.useAddToFavoritesItem)(t), c = (0, h.useRemoveFromFavoritesItem)(t), f = (0, M.default)(t), p = (0, b.default)(t), m = (0, C.default)(t), P = (0, S.default)(t, n), L = (0, g.default)(t, n), N = (0, E.default)(t, n), w = (0, _.default)(t), U = (0, d.default)({
    id: t.id,
    label: A.default.Messages.COPY_ID_CHANNEL
  }), G = (0, I.default)(t, "list_text_channel_context_menu"), j = (0, O.default)(t), R = (0, T.default)(t), D = (0, v.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(r.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": A.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, i.jsxs)(r.MenuGroup, {
      children: [s, u]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(r.MenuGroup, {
      children: [P, f, o, G]
    }, "channel-actions"), (0, i.jsxs)(r.MenuGroup, {
      children: [p, D ? R : j]
    }, "notifications"), (0, i.jsxs)(r.MenuGroup, {
      children: [m, L, N, w]
    }, "admin-actions"), (0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: U
    }, "developer-actions")]
  })
}
t.default = (0, s.default)((0, l.default)(function(e) {
  return (0, c.default)() ? (0, i.jsx)(L, {
    ...e
  }) : (0, i.jsx)(N, {
    ...e
  })
}, {
  object: P.AnalyticsObjects.CONTEXT_MENU
}), [u.default.CONTEXT_MENU, u.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])