"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var r = n("37983");
n("884691");
var a = n("77078"),
  i = n("272030"),
  l = n("838446"),
  o = n("158534"),
  s = n("846883"),
  u = n("812204"),
  d = n("861370"),
  c = n("20209"),
  p = n("972701"),
  f = n("390008"),
  h = n("41205"),
  E = n("936947"),
  _ = n("47495"),
  g = n("715243"),
  I = n("458574"),
  v = n("963150"),
  N = n("308798"),
  m = n("47006"),
  S = n("878526"),
  y = n("44141"),
  b = n("531674"),
  x = n("619436"),
  C = n("625399"),
  A = n("731390"),
  O = n("339876"),
  R = n("49111"),
  M = n("782340");

function T(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, y.default)(t), o = (0, I.default)(t), u = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), g = (0, f.default)(t), v = (0, h.default)(t), N = (0, E.default)(t), S = (0, b.default)(t), A = (0, x.default)(t), O = (0, m.default)(t), R = (0, d.default)({
    id: t.id,
    label: M.default.Messages.COPY_ID_CHANNEL
  }), T = (0, s.default)(t), P = (0, C.default)(t), D = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, r.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: i.closeContextMenu,
    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, r.jsx)(a.MenuGroup, {
      children: l
    }), (0, r.jsxs)(a.MenuGroup, {
      children: [v, N, g, u]
    }), (0, r.jsxs)(a.MenuGroup, {
      children: [S, D ? P : A]
    }), (0, r.jsx)(a.MenuGroup, {
      children: O
    }), (0, r.jsx)(a.MenuGroup, {
      children: T
    }), (0, r.jsx)(a.MenuGroup, {
      children: c
    }), (0, r.jsx)(a.MenuGroup, {
      children: o
    }), (0, r.jsx)(a.MenuGroup, {
      children: R
    })]
  })
}

function P(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, o = (0, y.default)(t), s = (0, I.default)(t), u = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), f = (0, O.default)(t), h = (0, b.default)(t), E = (0, m.default)(t), R = (0, S.default)(t, n), T = (0, g.default)(t, n), P = (0, v.default)(t, n), D = (0, N.default)(t), L = (0, d.default)({
    id: t.id,
    label: M.default.Messages.COPY_ID_CHANNEL
  }), H = (0, A.default)(t, "list_text_channel_context_menu"), F = (0, x.default)(t), j = (0, C.default)(t), G = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, r.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: i.closeContextMenu,
    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, r.jsxs)(a.MenuGroup, {
      children: [o, u]
    }, "mark-as-read-or-favorite"), (0, r.jsxs)(a.MenuGroup, {
      children: [R, f, s, H]
    }, "channel-actions"), (0, r.jsxs)(a.MenuGroup, {
      children: [h, G ? j : F]
    }, "notifications"), (0, r.jsxs)(a.MenuGroup, {
      children: [E, T, P, D]
    }, "admin-actions"), (0, r.jsx)(a.MenuGroup, {
      children: c
    }), (0, r.jsx)(a.MenuGroup, {
      children: L
    }, "developer-actions")]
  })
}
var D = (0, o.default)((0, l.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, r.jsx)(T, {
    ...e
  }) : (0, r.jsx)(P, {
    ...e
  })
}, {
  object: R.AnalyticsObjects.CONTEXT_MENU
}), [u.default.CONTEXT_MENU, u.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])