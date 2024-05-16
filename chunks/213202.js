"use strict";
u.r(t);
var n = u("735250");
u("470079");
var a = u("442837"),
  l = u("481060"),
  d = u("239091"),
  s = u("883385"),
  i = u("108843"),
  o = u("947440"),
  r = u("100527"),
  f = u("299206"),
  c = u("916069"),
  E = u("895563"),
  M = u("212205"),
  _ = u("478035"),
  C = u("62420"),
  N = u("420529"),
  S = u("554747"),
  h = u("924952"),
  T = u("423589"),
  m = u("427679"),
  v = u("398048"),
  A = u("109764"),
  x = u("3689"),
  g = u("323597"),
  I = u("852245"),
  p = u("493802"),
  L = u("367722"),
  G = u("461535"),
  j = u("776568"),
  O = u("218035"),
  V = u("775666"),
  D = u("442754"),
  F = u("333805"),
  U = u("567521"),
  b = u("917327"),
  P = u("381924"),
  R = u("601274"),
  H = u("981631"),
  y = u("689938");

function k(e) {
  let {
    channel: t,
    guild: u,
    onSelect: s
  } = e, i = t.isGuildStageVoice(), r = (0, a.useStateFromStores)([m.default], () => i ? m.default.getStageInstanceByChannel(t.id) : void 0, [i, t.id]), c = (0, A.default)(t), N = (0, S.useActiveEvent)(t.id), v = (0, h.default)(null == N ? void 0 : N.id, u, t), x = (0, U.default)(t, r), g = (0, E.useAddToFavoritesItem)(t), L = (0, E.useRemoveFromFavoritesItem)(t), G = (0, M.default)(t), j = (0, _.default)(t), D = (0, C.default)(t), b = (0, p.default)(t), P = (0, O.default)(t), H = (0, I.default)(t), k = (0, R.default)(t, u), w = (0, f.default)({
    id: t.id,
    label: y.default.Messages.COPY_ID_CHANNEL
  }), B = (0, F.default)(t), X = (0, o.default)(t), Y = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), J = (0, V.default)(t);
  return (0, n.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: d.closeContextMenu,
    "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, n.jsx)(l.MenuGroup, {
      children: null != N ? v : x
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [j, D, G, g]
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [b, Y ? J : P, H]
    }), (0, n.jsx)(l.MenuGroup, {
      children: X
    }), (0, n.jsx)(l.MenuGroup, {
      children: L
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [k, c]
    }), (0, n.jsx)(l.MenuGroup, {
      children: B
    }), (0, n.jsx)(l.MenuGroup, {
      children: w
    })]
  })
}

function w(e) {
  let {
    channel: t,
    guild: u,
    onSelect: s
  } = e, i = t.isGuildStageVoice(), r = (0, a.useStateFromStores)([m.default], () => i ? m.default.getStageInstanceByChannel(t.id) : void 0, [i, t.id]), c = (0, G.default)(t), M = (0, A.default)(t), _ = (0, S.useActiveEvent)(t.id), C = (0, h.default)(null == _ ? void 0 : _.id, u, t), H = (0, U.default)(t, r), k = (0, E.useAddToFavoritesItem)(t), w = (0, E.useRemoveFromFavoritesItem)(t), B = (0, p.default)(t), X = (0, O.default)(t), Y = (0, I.default)(t), J = (0, L.default)(t, u, r), K = (0, R.default)(t, u), z = (0, b.default)(t, u), q = (0, P.default)(t, u.id), Q = (0, v.default)(t, u), W = (0, x.default)(t, u), Z = (0, g.default)(t), $ = (0, f.default)({
    id: t.id,
    label: y.default.Messages.COPY_ID_CHANNEL
  }), ee = (0, F.default)(t), et = (0, o.default)(t), eu = (0, D.default)(t), en = (0, N.default)(t), ea = (0, j.default)(t), el = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), ed = (0, V.default)(t);
  return (0, n.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: d.closeContextMenu,
    "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, n.jsx)(l.MenuGroup, {
      children: null != _ ? C : H
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [c, k]
    }, "mark-as-read-or-favorite"), (0, n.jsxs)(l.MenuGroup, {
      children: [J, et, eu, M]
    }, "channel-actions"), (0, n.jsxs)(l.MenuGroup, {
      children: [q, K, z, B, en, ee]
    }, "voice-actions"), (0, n.jsxs)(l.MenuGroup, {
      children: [ea, el ? ed : X]
    }, "notifications"), (0, n.jsx)(l.MenuGroup, {
      children: w
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [Y, Q, W, Z]
    }, "admin-actions"), (0, n.jsx)(l.MenuGroup, {
      children: $
    }, "developer-actions")]
  })
}
t.default = (0, i.default)((0, s.default)(function(e) {
  return (0, c.default)() ? (0, n.jsx)(k, {
    ...e
  }) : (0, n.jsx)(w, {
    ...e
  })
}, {
  object: H.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])