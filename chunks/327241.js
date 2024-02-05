"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  r = n("272030"),
  l = n("838446"),
  o = n("158534"),
  u = n("846883"),
  s = n("812204"),
  d = n("861370"),
  c = n("20209"),
  f = n("972701"),
  p = n("390008"),
  h = n("41205"),
  E = n("936947"),
  _ = n("47495"),
  m = n("715243"),
  g = n("458574"),
  v = n("963150"),
  I = n("308798"),
  y = n("47006"),
  C = n("878526"),
  S = n("44141"),
  N = n("531674"),
  x = n("619436"),
  O = n("625399"),
  T = n("731390"),
  A = n("339876"),
  b = n("49111"),
  P = n("782340");

function M(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, S.default)(t), o = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), m = (0, p.default)(t), v = (0, h.default)(t), I = (0, E.default)(t), C = (0, N.default)(t), T = (0, x.default)(t), A = (0, y.default)(t), b = (0, d.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), M = (0, u.default)(t), L = (0, O.default)(t), R = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: r.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(a.MenuGroup, {
      children: l
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [v, I, m, s]
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [C, R ? L : T]
    }), (0, i.jsx)(a.MenuGroup, {
      children: A
    }), (0, i.jsx)(a.MenuGroup, {
      children: M
    }), (0, i.jsx)(a.MenuGroup, {
      children: c
    }), (0, i.jsx)(a.MenuGroup, {
      children: o
    }), (0, i.jsx)(a.MenuGroup, {
      children: b
    })]
  })
}

function L(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, o = (0, S.default)(t), u = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, A.default)(t), h = (0, N.default)(t), E = (0, y.default)(t), b = (0, C.default)(t, n), M = (0, m.default)(t, n), L = (0, v.default)(t, n), R = (0, I.default)(t), D = (0, d.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), U = (0, T.default)(t, "list_text_channel_context_menu"), G = (0, x.default)(t), F = (0, O.default)(t), w = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: r.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, i.jsxs)(a.MenuGroup, {
      children: [o, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(a.MenuGroup, {
      children: [b, p, u, U]
    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
      children: [h, w ? F : G]
    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
      children: [E, M, L, R]
    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
      children: c
    }), (0, i.jsx)(a.MenuGroup, {
      children: D
    }, "developer-actions")]
  })
}
var R = (0, o.default)((0, l.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, i.jsx)(M, {
    ...e
  }) : (0, i.jsx)(L, {
    ...e
  })
}, {
  object: b.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])