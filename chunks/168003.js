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
  r = n("838446"),
  s = n("158534"),
  o = n("846883"),
  d = n("812204"),
  c = n("861370"),
  f = n("20209"),
  E = n("972701"),
  _ = n("390008"),
  S = n("41205"),
  N = n("936947"),
  C = n("379304"),
  T = n("534222"),
  v = n("601131"),
  h = n("47495"),
  g = n("834052"),
  A = n("715243"),
  M = n("458574"),
  m = n("963150"),
  I = n("308798"),
  L = n("47006"),
  p = n("809259"),
  O = n("878526"),
  U = n("44141"),
  F = n("531674"),
  y = n("619436"),
  G = n("625399"),
  R = n("339876"),
  x = n("702741"),
  b = n("782000"),
  D = n("45593"),
  V = n("604887"),
  H = n("958936"),
  j = n("49111"),
  P = n("782340");

function w(e) {
  let {
    channel: t,
    guild: n,
    onSelect: r
  } = e, s = t.isGuildStageVoice(), d = (0, i.useStateFromStores)([g.default], () => s ? g.default.getStageInstanceByChannel(t.id) : void 0, [s, t.id]), f = (0, M.default)(t), C = (0, T.useActiveEvent)(t.id), A = (0, v.default)(null == C ? void 0 : C.id, n, t), m = (0, b.default)(t, d), I = (0, E.useAddToFavoritesItem)(t), O = (0, E.useRemoveFromFavoritesItem)(t), U = (0, _.default)(t), F = (0, S.default)(t), R = (0, N.default)(t), D = (0, p.default)(t), V = (0, y.default)(t), j = (0, L.default)(t), w = (0, H.default)(t, n), Y = (0, c.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), B = (0, x.default)(t), k = (0, o.default)(t), Q = (0, h.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), W = (0, G.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != C ? A : m
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [F, R, U, I]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [D, Q ? W : V, j]
    }), (0, a.jsx)(l.MenuGroup, {
      children: k
    }), (0, a.jsx)(l.MenuGroup, {
      children: O
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
    onSelect: r
  } = e, s = t.isGuildStageVoice(), d = (0, i.useStateFromStores)([g.default], () => s ? g.default.getStageInstanceByChannel(t.id) : void 0, [s, t.id]), f = (0, U.default)(t), _ = (0, M.default)(t), S = (0, T.useActiveEvent)(t.id), N = (0, v.default)(null == S ? void 0 : S.id, n, t), j = (0, b.default)(t, d), w = (0, E.useAddToFavoritesItem)(t), Y = (0, E.useRemoveFromFavoritesItem)(t), B = (0, p.default)(t), k = (0, y.default)(t), Q = (0, L.default)(t), W = (0, O.default)(t, n, d), Z = (0, H.default)(t, n), X = (0, D.default)(t, n), J = (0, V.default)(t, n.id), z = (0, A.default)(t, n), K = (0, m.default)(t, n), q = (0, I.default)(t), $ = (0, c.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), ee = (0, x.default)(t), et = (0, o.default)(t), en = (0, R.default)(t), ea = (0, C.default)(t), ei = (0, F.default)(t), el = (0, h.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, G.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != S ? N : j
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [f, w]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [W, et, en, _]
    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [J, Z, X, B, ea, ee]
    }, "voice-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [ei, el ? eu : k]
    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
      children: Y
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [Q, z, K, q]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: $
    }, "developer-actions")]
  })
}
var B = (0, s.default)((0, r.default)(function(e) {
  let t = (0, f.default)();
  return t ? (0, a.jsx)(w, {
    ...e
  }) : (0, a.jsx)(Y, {
    ...e
  })
}, {
  object: j.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])