"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("272030"),
  s = n("838446"),
  d = n("158534"),
  r = n("846883"),
  o = n("812204"),
  c = n("861370"),
  f = n("20209"),
  _ = n("972701"),
  E = n("390008"),
  N = n("41205"),
  S = n("936947"),
  T = n("379304"),
  g = n("534222"),
  M = n("601131"),
  A = n("47495"),
  C = n("834052"),
  I = n("715243"),
  O = n("458574"),
  v = n("963150"),
  p = n("308798"),
  h = n("47006"),
  L = n("809259"),
  m = n("878526"),
  U = n("44141"),
  R = n("531674"),
  y = n("619436"),
  x = n("625399"),
  b = n("339876"),
  G = n("702741"),
  V = n("782000"),
  F = n("45593"),
  D = n("604887"),
  P = n("958936"),
  j = n("49111"),
  H = n("782340");

function w(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, d = t.isGuildStageVoice(), o = (0, i.useStateFromStores)([C.default], () => d ? C.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, O.default)(t), T = (0, g.useActiveEvent)(t.id), I = (0, M.default)(null == T ? void 0 : T.id, n, t), v = (0, V.default)(t, o), p = (0, _.useAddToFavoritesItem)(t), m = (0, _.useRemoveFromFavoritesItem)(t), U = (0, E.default)(t), R = (0, N.default)(t), b = (0, S.default)(t), F = (0, L.default)(t), D = (0, y.default)(t), j = (0, h.default)(t), w = (0, P.default)(t, n), Y = (0, c.default)({
    id: t.id,
    label: H.default.Messages.COPY_ID_CHANNEL
  }), B = (0, G.default)(t), k = (0, r.default)(t), X = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), W = (0, x.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": H.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != T ? I : v
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [R, b, U, p]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [F, X ? W : D, j]
    }), (0, a.jsx)(l.MenuGroup, {
      children: k
    }), (0, a.jsx)(l.MenuGroup, {
      children: m
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [w, f]
    }), (0, a.jsx)(l.MenuGroup, {
      children: B
    }), (0, a.jsx)(l.MenuGroup, {
      children: Y
    })]
  })
}

function Y(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, d = t.isGuildStageVoice(), o = (0, i.useStateFromStores)([C.default], () => d ? C.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, U.default)(t), E = (0, O.default)(t), N = (0, g.useActiveEvent)(t.id), S = (0, M.default)(null == N ? void 0 : N.id, n, t), j = (0, V.default)(t, o), w = (0, _.useAddToFavoritesItem)(t), Y = (0, _.useRemoveFromFavoritesItem)(t), B = (0, L.default)(t), k = (0, y.default)(t), X = (0, h.default)(t), W = (0, m.default)(t, n, o), q = (0, P.default)(t, n), K = (0, F.default)(t, n), Z = (0, D.default)(t, n.id), z = (0, I.default)(t, n), J = (0, v.default)(t, n), Q = (0, p.default)(t), $ = (0, c.default)({
    id: t.id,
    label: H.default.Messages.COPY_ID_CHANNEL
  }), ee = (0, G.default)(t), et = (0, r.default)(t), en = (0, b.default)(t), ea = (0, T.default)(t), ei = (0, R.default)(t), el = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, x.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": H.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != N ? S : j
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [f, w]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [W, et, en, E]
    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [Z, q, K, B, ea, ee]
    }, "voice-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [ei, el ? eu : k]
    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
      children: Y
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [X, z, J, Q]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: $
    }, "developer-actions")]
  })
}
var B = (0, d.default)((0, s.default)(function(e) {
  let t = (0, f.default)();
  return t ? (0, a.jsx)(w, {
    ...e
  }) : (0, a.jsx)(Y, {
    ...e
  })
}, {
  object: j.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])