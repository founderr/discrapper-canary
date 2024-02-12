"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  u = n("272030"),
  s = n("838446"),
  d = n("158534"),
  r = n("846883"),
  o = n("812204"),
  c = n("861370"),
  f = n("20209"),
  _ = n("972701"),
  E = n("390008"),
  S = n("41205"),
  N = n("936947"),
  T = n("379304"),
  g = n("534222"),
  h = n("601131"),
  C = n("47495"),
  M = n("834052"),
  A = n("715243"),
  I = n("458574"),
  v = n("963150"),
  p = n("308798"),
  m = n("47006"),
  L = n("809259"),
  O = n("878526"),
  U = n("44141"),
  R = n("531674"),
  y = n("619436"),
  G = n("625399"),
  b = n("339876"),
  x = n("702741"),
  V = n("782000"),
  D = n("45593"),
  F = n("604887"),
  H = n("958936"),
  j = n("49111"),
  P = n("782340");

function w(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, d = t.isGuildStageVoice(), o = (0, l.useStateFromStores)([M.default], () => d ? M.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, I.default)(t), T = (0, g.useActiveEvent)(t.id), A = (0, h.default)(null == T ? void 0 : T.id, n, t), v = (0, V.default)(t, o), p = (0, _.useAddToFavoritesItem)(t), O = (0, _.useRemoveFromFavoritesItem)(t), U = (0, E.default)(t), R = (0, S.default)(t), b = (0, N.default)(t), D = (0, L.default)(t), F = (0, y.default)(t), j = (0, m.default)(t), w = (0, H.default)(t, n), B = (0, c.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), k = (0, x.default)(t), Y = (0, r.default)(t), W = (0, C.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), q = (0, G.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: null != T ? A : v
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [R, b, U, p]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [D, W ? q : F, j]
    }), (0, a.jsx)(i.MenuGroup, {
      children: Y
    }), (0, a.jsx)(i.MenuGroup, {
      children: O
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [w, f]
    }), (0, a.jsx)(i.MenuGroup, {
      children: k
    }), (0, a.jsx)(i.MenuGroup, {
      children: B
    })]
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, d = t.isGuildStageVoice(), o = (0, l.useStateFromStores)([M.default], () => d ? M.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, U.default)(t), E = (0, I.default)(t), S = (0, g.useActiveEvent)(t.id), N = (0, h.default)(null == S ? void 0 : S.id, n, t), j = (0, V.default)(t, o), w = (0, _.useAddToFavoritesItem)(t), B = (0, _.useRemoveFromFavoritesItem)(t), k = (0, L.default)(t), Y = (0, y.default)(t), W = (0, m.default)(t), q = (0, O.default)(t, n, o), K = (0, H.default)(t, n), Z = (0, D.default)(t, n), X = (0, F.default)(t, n.id), J = (0, A.default)(t, n), Q = (0, v.default)(t, n), z = (0, p.default)(t), $ = (0, c.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), ee = (0, x.default)(t), et = (0, r.default)(t), en = (0, b.default)(t), ea = (0, T.default)(t), el = (0, R.default)(t), ei = (0, C.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, G.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: null != S ? N : j
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [f, w]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(i.MenuGroup, {
      children: [q, et, en, E]
    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
      children: [X, K, Z, k, ea, ee]
    }, "voice-actions"), (0, a.jsxs)(i.MenuGroup, {
      children: [el, ei ? eu : Y]
    }, "notifications"), (0, a.jsx)(i.MenuGroup, {
      children: B
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [W, J, Q, z]
    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
      children: $
    }, "developer-actions")]
  })
}
var k = (0, d.default)((0, s.default)(function(e) {
  let t = (0, f.default)();
  return t ? (0, a.jsx)(w, {
    ...e
  }) : (0, a.jsx)(B, {
    ...e
  })
}, {
  object: j.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])