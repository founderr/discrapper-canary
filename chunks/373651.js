"use strict";
n.r(t);
var i = n("735250");
n("470079");
var l = n("481060"),
  a = n("239091"),
  r = n("883385"),
  u = n("108843"),
  o = n("947440"),
  s = n("100527"),
  d = n("299206"),
  c = n("916069"),
  f = n("895563"),
  p = n("212205"),
  h = n("478035"),
  m = n("62420"),
  g = n("423589"),
  v = n("398048"),
  E = n("109764"),
  _ = n("3689"),
  x = n("323597"),
  C = n("852245"),
  S = n("367722"),
  y = n("461535"),
  A = n("776568"),
  O = n("218035"),
  T = n("775666"),
  P = n("593589"),
  L = n("442754"),
  N = n("981631"),
  I = n("689938");

function M(e) {
  let {
    channel: t,
    onSelect: n
  } = e, r = (0, y.default)(t), u = (0, E.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), v = (0, p.default)(t), _ = (0, h.default)(t), x = (0, m.default)(t), S = (0, A.default)(t), P = (0, O.default)(t), L = (0, C.default)(t), N = (0, d.default)({
    id: t.id,
    label: I.default.Messages.COPY_ID_CHANNEL
  }), M = (0, o.default)(t), b = (0, T.default)(t), w = (0, g.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": I.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: r
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [_, x, v, s]
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [S, w ? b : P]
    }), (0, i.jsx)(l.MenuGroup, {
      children: L
    }), (0, i.jsx)(l.MenuGroup, {
      children: M
    }), (0, i.jsx)(l.MenuGroup, {
      children: c
    }), (0, i.jsx)(l.MenuGroup, {
      children: u
    }), (0, i.jsx)(l.MenuGroup, {
      children: N
    })]
  })
}

function b(e) {
  let {
    channel: t,
    guild: n,
    onSelect: r
  } = e, u = (0, y.default)(t), o = (0, E.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, L.default)(t), h = (0, A.default)(t), m = (0, C.default)(t), N = (0, S.default)(t, n), M = (0, v.default)(t, n), b = (0, _.default)(t, n), w = (0, x.default)(t), G = (0, d.default)({
    id: t.id,
    label: I.default.Messages.COPY_ID_CHANNEL
  }), R = (0, P.default)(t, "list_text_channel_context_menu"), U = (0, O.default)(t), V = (0, T.default)(t), j = (0, g.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": I.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [(0, i.jsxs)(l.MenuGroup, {
      children: [u, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(l.MenuGroup, {
      children: [N, p, o, R]
    }, "channel-actions"), (0, i.jsxs)(l.MenuGroup, {
      children: [h, j ? V : U]
    }, "notifications"), (0, i.jsxs)(l.MenuGroup, {
      children: [m, M, b, w]
    }, "admin-actions"), (0, i.jsx)(l.MenuGroup, {
      children: c
    }), (0, i.jsx)(l.MenuGroup, {
      children: G
    }, "developer-actions")]
  })
}
t.default = (0, u.default)((0, r.default)(function(e) {
  return (0, c.default)() ? (0, i.jsx)(M, {
    ...e
  }) : (0, i.jsx)(b, {
    ...e
  })
}, {
  object: N.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])