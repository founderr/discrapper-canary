"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
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
  C = n("47495"),
  _ = n("715243"),
  v = n("458574"),
  m = n("963150"),
  I = n("308798"),
  g = n("47006"),
  N = n("878526"),
  x = n("44141"),
  y = n("531674"),
  T = n("619436"),
  S = n("625399"),
  L = n("731390"),
  O = n("339876"),
  M = n("49111"),
  b = n("782340");

function A(e) {
  let {
    channel: t,
    onSelect: n
  } = e, i = (0, x.default)(t), u = (0, v.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), _ = (0, p.default)(t), m = (0, h.default)(t), I = (0, E.default)(t), N = (0, y.default)(t), L = (0, T.default)(t), O = (0, g.default)(t), M = (0, d.default)({
    id: t.id,
    label: b.default.Messages.COPY_ID_CHANNEL
  }), A = (0, s.default)(t), R = (0, S.default)(t), H = (0, C.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: r.closeContextMenu,
    "aria-label": b.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: i
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [m, I, _, o]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [N, H ? R : L]
    }), (0, a.jsx)(l.MenuGroup, {
      children: O
    }), (0, a.jsx)(l.MenuGroup, {
      children: A
    }), (0, a.jsx)(l.MenuGroup, {
      children: c
    }), (0, a.jsx)(l.MenuGroup, {
      children: u
    }), (0, a.jsx)(l.MenuGroup, {
      children: M
    })]
  })
}

function R(e) {
  let {
    channel: t,
    guild: n,
    onSelect: i
  } = e, u = (0, x.default)(t), s = (0, v.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, O.default)(t), h = (0, y.default)(t), E = (0, g.default)(t), M = (0, N.default)(t, n), A = (0, _.default)(t, n), R = (0, m.default)(t, n), H = (0, I.default)(t), P = (0, d.default)({
    id: t.id,
    label: b.default.Messages.COPY_ID_CHANNEL
  }), D = (0, L.default)(t, "list_text_channel_context_menu"), V = (0, T.default)(t), U = (0, S.default)(t), w = (0, C.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: r.closeContextMenu,
    "aria-label": b.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: [(0, a.jsxs)(l.MenuGroup, {
      children: [u, o]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [M, p, s, D]
    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [h, w ? U : V]
    }, "notifications"), (0, a.jsxs)(l.MenuGroup, {
      children: [E, A, R, H]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: c
    }), (0, a.jsx)(l.MenuGroup, {
      children: P
    }, "developer-actions")]
  })
}
var H = (0, u.default)((0, i.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, a.jsx)(A, {
    ...e
  }) : (0, a.jsx)(R, {
    ...e
  })
}, {
  object: M.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])