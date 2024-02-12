"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("272030"),
  r = n("838446"),
  u = n("158534"),
  s = n("846883"),
  o = n("812204"),
  d = n("861370"),
  c = n("20209"),
  f = n("972701"),
  p = n("390008"),
  h = n("41205"),
  m = n("936947"),
  E = n("47495"),
  v = n("715243"),
  _ = n("458574"),
  g = n("963150"),
  x = n("308798"),
  S = n("47006"),
  C = n("878526"),
  y = n("44141"),
  I = n("531674"),
  T = n("619436"),
  b = n("625399"),
  A = n("731390"),
  N = n("339876"),
  M = n("49111"),
  L = n("782340");

function O(e) {
  let {
    channel: t,
    onSelect: n
  } = e, r = (0, y.default)(t), u = (0, _.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), v = (0, p.default)(t), g = (0, h.default)(t), x = (0, m.default)(t), C = (0, I.default)(t), A = (0, T.default)(t), N = (0, S.default)(t), M = (0, d.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), O = (0, s.default)(t), P = (0, b.default)(t), G = (0, E.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(a.MenuGroup, {
      children: r
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [g, x, v, o]
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [C, G ? P : A]
    }), (0, i.jsx)(a.MenuGroup, {
      children: N
    }), (0, i.jsx)(a.MenuGroup, {
      children: O
    }), (0, i.jsx)(a.MenuGroup, {
      children: c
    }), (0, i.jsx)(a.MenuGroup, {
      children: u
    }), (0, i.jsx)(a.MenuGroup, {
      children: M
    })]
  })
}

function P(e) {
  let {
    channel: t,
    guild: n,
    onSelect: r
  } = e, u = (0, y.default)(t), s = (0, _.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, N.default)(t), h = (0, I.default)(t), m = (0, S.default)(t), M = (0, C.default)(t, n), O = (0, v.default)(t, n), P = (0, g.default)(t, n), G = (0, x.default)(t), U = (0, d.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), R = (0, A.default)(t, "list_text_channel_context_menu"), w = (0, T.default)(t), j = (0, b.default)(t), D = (0, E.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [(0, i.jsxs)(a.MenuGroup, {
      children: [u, o]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(a.MenuGroup, {
      children: [M, p, s, R]
    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
      children: [h, D ? j : w]
    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
      children: [m, O, P, G]
    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
      children: c
    }), (0, i.jsx)(a.MenuGroup, {
      children: U
    }, "developer-actions")]
  })
}
var G = (0, u.default)((0, r.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, i.jsx)(O, {
    ...e
  }) : (0, i.jsx)(P, {
    ...e
  })
}, {
  object: M.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])