"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("239091"),
  l = n("883385"),
  u = n("108843"),
  o = n("947440"),
  s = n("100527"),
  d = n("299206"),
  c = n("457490"),
  f = n("895563"),
  h = n("212205"),
  p = n("478035"),
  g = n("62420"),
  m = n("423589"),
  x = n("398048"),
  v = n("109764"),
  C = n("3689"),
  E = n("323597"),
  b = n("852245"),
  M = n("367722"),
  w = n("461535"),
  S = n("776568"),
  y = n("218035"),
  I = n("775666"),
  _ = n("593589"),
  N = n("442754"),
  O = n("981631"),
  L = n("689938");

function U(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, w.default)(t), u = (0, v.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), x = (0, h.default)(t), C = (0, p.default)(t), E = (0, g.default)(t), M = (0, S.default)(t), _ = (0, y.default)(t), N = (0, b.default)(t), O = (0, d.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), U = (0, o.default)(t), A = (0, I.default)(t), T = (0, m.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(r.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(r.MenuGroup, {
      children: l
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [C, E, x, s]
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [M, T ? A : _]
    }), (0, i.jsx)(r.MenuGroup, {
      children: N
    }), (0, i.jsx)(r.MenuGroup, {
      children: U
    }), (0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: u
    }), (0, i.jsx)(r.MenuGroup, {
      children: O
    })]
  })
}

function A(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, u = (0, w.default)(t), o = (0, v.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), h = (0, N.default)(t), p = (0, S.default)(t), g = (0, b.default)(t), O = (0, M.default)(t, n), U = (0, x.default)(t, n), A = (0, C.default)(t, n), T = (0, E.default)(t), j = (0, d.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), P = (0, _.default)(t, "list_text_channel_context_menu"), B = (0, y.default)(t), G = (0, I.default)(t), D = (0, m.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(r.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, i.jsxs)(r.MenuGroup, {
      children: [u, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(r.MenuGroup, {
      children: [O, h, o, P]
    }, "channel-actions"), (0, i.jsxs)(r.MenuGroup, {
      children: [p, D ? G : B]
    }, "notifications"), (0, i.jsxs)(r.MenuGroup, {
      children: [g, U, A, T]
    }, "admin-actions"), (0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: j
    }, "developer-actions")]
  })
}
t.default = (0, u.default)((0, l.default)(function(e) {
  return (0, c.default)() ? (0, i.jsx)(U, {
    ...e
  }) : (0, i.jsx)(A, {
    ...e
  })
}, {
  object: O.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])