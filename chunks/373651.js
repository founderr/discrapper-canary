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
  v = n("423589"),
  g = n("398048"),
  E = n("109764"),
  x = n("3689"),
  _ = n("323597"),
  C = n("852245"),
  y = n("367722"),
  S = n("461535"),
  A = n("776568"),
  O = n("218035"),
  L = n("775666"),
  T = n("593589"),
  I = n("442754"),
  M = n("981631"),
  P = n("689938");

function N(e) {
  let {
    channel: t,
    onSelect: n
  } = e, r = (0, S.default)(t), u = (0, E.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), g = (0, p.default)(t), x = (0, h.default)(t), _ = (0, m.default)(t), y = (0, A.default)(t), T = (0, O.default)(t), I = (0, C.default)(t), M = (0, d.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), N = (0, o.default)(t), b = (0, L.default)(t), G = (0, v.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: r
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [x, _, g, s]
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [y, G ? b : T]
    }), (0, i.jsx)(l.MenuGroup, {
      children: I
    }), (0, i.jsx)(l.MenuGroup, {
      children: N
    }), (0, i.jsx)(l.MenuGroup, {
      children: c
    }), (0, i.jsx)(l.MenuGroup, {
      children: u
    }), (0, i.jsx)(l.MenuGroup, {
      children: M
    })]
  })
}

function b(e) {
  let {
    channel: t,
    guild: n,
    onSelect: r
  } = e, u = (0, S.default)(t), o = (0, E.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, I.default)(t), h = (0, A.default)(t), m = (0, C.default)(t), M = (0, y.default)(t, n), N = (0, g.default)(t, n), b = (0, x.default)(t, n), G = (0, _.default)(t), w = (0, d.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), U = (0, T.default)(t, "list_text_channel_context_menu"), j = (0, O.default)(t), R = (0, L.default)(t), D = (0, v.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [(0, i.jsxs)(l.MenuGroup, {
      children: [u, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(l.MenuGroup, {
      children: [M, p, o, U]
    }, "channel-actions"), (0, i.jsxs)(l.MenuGroup, {
      children: [h, D ? R : j]
    }, "notifications"), (0, i.jsxs)(l.MenuGroup, {
      children: [m, N, b, G]
    }, "admin-actions"), (0, i.jsx)(l.MenuGroup, {
      children: c
    }), (0, i.jsx)(l.MenuGroup, {
      children: w
    }, "developer-actions")]
  })
}
t.default = (0, u.default)((0, r.default)(function(e) {
  return (0, c.default)() ? (0, i.jsx)(N, {
    ...e
  }) : (0, i.jsx)(b, {
    ...e
  })
}, {
  object: M.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])