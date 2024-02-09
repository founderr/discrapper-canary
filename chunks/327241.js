"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
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
  x = n("715243"),
  g = n("458574"),
  v = n("963150"),
  C = n("308798"),
  S = n("47006"),
  b = n("878526"),
  I = n("44141"),
  y = n("531674"),
  _ = n("619436"),
  A = n("625399"),
  M = n("731390"),
  N = n("339876"),
  T = n("49111"),
  L = n("782340");

function O(e) {
  let {
    channel: t,
    onSelect: n
  } = e, r = (0, I.default)(t), u = (0, g.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), x = (0, p.default)(t), v = (0, h.default)(t), C = (0, m.default)(t), b = (0, y.default)(t), M = (0, _.default)(t), N = (0, S.default)(t), T = (0, d.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), O = (0, s.default)(t), j = (0, A.default)(t), w = (0, E.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(a.MenuGroup, {
      children: r
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [v, C, x, o]
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [b, w ? j : M]
    }), (0, i.jsx)(a.MenuGroup, {
      children: N
    }), (0, i.jsx)(a.MenuGroup, {
      children: O
    }), (0, i.jsx)(a.MenuGroup, {
      children: c
    }), (0, i.jsx)(a.MenuGroup, {
      children: u
    }), (0, i.jsx)(a.MenuGroup, {
      children: T
    })]
  })
}

function j(e) {
  let {
    channel: t,
    guild: n,
    onSelect: r
  } = e, u = (0, I.default)(t), s = (0, g.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, N.default)(t), h = (0, y.default)(t), m = (0, S.default)(t), T = (0, b.default)(t, n), O = (0, x.default)(t, n), j = (0, v.default)(t, n), w = (0, C.default)(t), U = (0, d.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), G = (0, M.default)(t, "list_text_channel_context_menu"), R = (0, _.default)(t), D = (0, A.default)(t), P = (0, E.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [(0, i.jsxs)(a.MenuGroup, {
      children: [u, o]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(a.MenuGroup, {
      children: [T, p, s, G]
    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
      children: [h, P ? D : R]
    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
      children: [m, O, j, w]
    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
      children: c
    }), (0, i.jsx)(a.MenuGroup, {
      children: U
    }, "developer-actions")]
  })
}
var w = (0, u.default)((0, r.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, i.jsx)(O, {
    ...e
  }) : (0, i.jsx)(j, {
    ...e
  })
}, {
  object: T.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])