"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  r = n("272030"),
  i = n("838446"),
  u = n("158534"),
  s = n("846883"),
  o = n("812204"),
  d = n("861370"),
  c = n("20209"),
  f = n("972701"),
  p = n("390008"),
  h = n("41205"),
  E = n("936947"),
  _ = n("47495"),
  C = n("715243"),
  v = n("458574"),
  m = n("963150"),
  g = n("308798"),
  I = n("47006"),
  N = n("878526"),
  y = n("44141"),
  T = n("531674"),
  S = n("619436"),
  x = n("625399"),
  A = n("179468"),
  L = n("339876"),
  O = n("49111"),
  M = n("782340");

function b(e) {
  let {
    channel: t,
    onSelect: n
  } = e, i = (0, y.default)(t), u = (0, v.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), C = (0, p.default)(t), m = (0, h.default)(t), g = (0, E.default)(t), N = (0, T.default)(t), A = (0, S.default)(t), L = (0, I.default)(t), O = (0, d.default)({
    id: t.id,
    label: M.default.Messages.COPY_ID_CHANNEL
  }), b = (0, s.default)(t), P = (0, x.default)(t), R = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: r.closeContextMenu,
    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: i
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [m, g, C, o]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [N, R ? P : A]
    }), (0, a.jsx)(l.MenuGroup, {
      children: L
    }), (0, a.jsx)(l.MenuGroup, {
      children: b
    }), (0, a.jsx)(l.MenuGroup, {
      children: c
    }), (0, a.jsx)(l.MenuGroup, {
      children: u
    }), (0, a.jsx)(l.MenuGroup, {
      children: O
    })]
  })
}

function P(e) {
  let {
    channel: t,
    guild: n,
    onSelect: i
  } = e, u = (0, y.default)(t), s = (0, v.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, L.default)(t), h = (0, T.default)(t), E = (0, I.default)(t), O = (0, N.default)(t, n), b = (0, C.default)(t, n), P = (0, m.default)(t, n), R = (0, g.default)(t), H = (0, d.default)({
    id: t.id,
    label: M.default.Messages.COPY_ID_CHANNEL
  }), D = (0, A.default)(t, "list_text_channel_context_menu"), U = (0, S.default)(t), V = (0, x.default)(t), G = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: r.closeContextMenu,
    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: [(0, a.jsxs)(l.MenuGroup, {
      children: [u, o]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [O, p, s, D]
    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [h, G ? V : U]
    }, "notifications"), (0, a.jsxs)(l.MenuGroup, {
      children: [E, b, P, R]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: c
    }), (0, a.jsx)(l.MenuGroup, {
      children: H
    }, "developer-actions")]
  })
}
var R = (0, u.default)((0, i.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, a.jsx)(b, {
    ...e
  }) : (0, a.jsx)(P, {
    ...e
  })
}, {
  object: O.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])