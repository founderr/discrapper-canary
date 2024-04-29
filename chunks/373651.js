"use strict";
t.r(n);
var u = t("735250");
t("470079");
var l = t("481060"),
  a = t("239091"),
  o = t("883385"),
  d = t("108843"),
  i = t("947440"),
  s = t("100527"),
  r = t("299206"),
  c = t("457490"),
  f = t("895563"),
  p = t("212205"),
  h = t("478035"),
  x = t("62420"),
  M = t("423589"),
  C = t("398048"),
  N = t("109764"),
  j = t("3689"),
  _ = t("323597"),
  E = t("852245"),
  m = t("367722"),
  v = t("461535"),
  b = t("776568"),
  I = t("218035"),
  A = t("775666"),
  G = t("593589"),
  T = t("442754"),
  O = t("981631"),
  L = t("689938");

function w(e) {
  let {
    channel: n,
    onSelect: t
  } = e, o = (0, v.default)(n), d = (0, N.default)(n), s = (0, f.useAddToFavoritesItem)(n), c = (0, f.useRemoveFromFavoritesItem)(n), C = (0, p.default)(n), j = (0, h.default)(n), _ = (0, x.default)(n), m = (0, b.default)(n), G = (0, I.default)(n), T = (0, E.default)(n), O = (0, r.default)({
    id: n.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), w = (0, i.default)(n), P = (0, A.default)(n), S = (0, M.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, u.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: [(0, u.jsx)(l.MenuGroup, {
      children: o
    }), (0, u.jsxs)(l.MenuGroup, {
      children: [j, _, C, s]
    }), (0, u.jsxs)(l.MenuGroup, {
      children: [m, S ? P : G]
    }), (0, u.jsx)(l.MenuGroup, {
      children: T
    }), (0, u.jsx)(l.MenuGroup, {
      children: w
    }), (0, u.jsx)(l.MenuGroup, {
      children: c
    }), (0, u.jsx)(l.MenuGroup, {
      children: d
    }), (0, u.jsx)(l.MenuGroup, {
      children: O
    })]
  })
}

function P(e) {
  let {
    channel: n,
    guild: t,
    onSelect: o
  } = e, d = (0, v.default)(n), i = (0, N.default)(n), s = (0, f.useAddToFavoritesItem)(n), c = (0, f.useRemoveFromFavoritesItem)(n), p = (0, T.default)(n), h = (0, b.default)(n), x = (0, E.default)(n), O = (0, m.default)(n, t), w = (0, C.default)(n, t), P = (0, j.default)(n, t), S = (0, _.default)(n), g = (0, r.default)({
    id: n.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), k = (0, G.default)(n, "list_text_channel_context_menu"), H = (0, I.default)(n), U = (0, A.default)(n), F = (0, M.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, u.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [(0, u.jsxs)(l.MenuGroup, {
      children: [d, s]
    }, "mark-as-read-or-favorite"), (0, u.jsxs)(l.MenuGroup, {
      children: [O, p, i, k]
    }, "channel-actions"), (0, u.jsxs)(l.MenuGroup, {
      children: [h, F ? U : H]
    }, "notifications"), (0, u.jsxs)(l.MenuGroup, {
      children: [x, w, P, S]
    }, "admin-actions"), (0, u.jsx)(l.MenuGroup, {
      children: c
    }), (0, u.jsx)(l.MenuGroup, {
      children: g
    }, "developer-actions")]
  })
}
n.default = (0, d.default)((0, o.default)(function(e) {
  return (0, c.default)() ? (0, u.jsx)(w, {
    ...e
  }) : (0, u.jsx)(P, {
    ...e
  })
}, {
  object: O.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])