t.r(e);
var u = t(735250),
  l = t(470079),
  i = t(442837),
  r = t(481060),
  a = t(239091),
  o = t(883385),
  c = t(108843),
  s = t(2052),
  d = t(100527),
  _ = t(906732),
  E = t(299206),
  M = t(976192),
  f = t(910693),
  T = t(271383),
  Z = t(979651),
  A = t(933409),
  O = t(389052),
  C = t(88966),
  I = t(712301),
  L = t(567711),
  S = t(358386),
  U = t(725119),
  g = t(931617),
  D = t(981631),
  N = t(689938);
e.default = (0, c.Z)((0, o.Z)(function(n) {
  var e;
  let {
    user: t,
    guildId: o,
    channelId: c,
    context: D,
    onSelect: p,
    moderationAlertId: v,
    analyticsLocation: h,
    analyticsLocations: x,
    onCloseContextMenu: P,
    showTransferOwnershipItem: j
  } = n, {
    analyticsLocations: m
  } = (0, _.ZP)(d.Z.CONTEXT_MENU), R = (0, s.O)(), y = null !== (e = null == x ? void 0 : x[0]) && void 0 !== e ? e : m[0], b = (0, f.sE)(o, {
    location: y,
    targetUserId: t.id
  }), G = (0, i.e7)([Z.Z], () => {
    var n;
    return null !== (n = Z.Z.getUserVoiceChannelId(o, t.id)) && void 0 !== n ? n : void 0
  }, [o, t.id]), k = l.useCallback(() => {
    b(f.jQ.COPY_ID)
  }, [b]), B = (0, i.e7)([T.ZP], () => T.ZP.isMember(o, t.id), [o, t.id]), F = (0, U.Z)(t.id, o), Y = (0, C.Z)(t.id, D), w = (0, M.Z)({
    guildId: o,
    userId: t.id,
    analyticsLocation: null != h ? h : R.location,
    analyticsLocations: [y],
    context: D
  }), H = (0, O.Z)({
    user: t,
    location: y
  }), q = (0, A.Z)(t, o, null != c ? c : G, y), z = (0, L.Z)(c, v), V = (0, S.Z)(t, o), W = (0, g.Z)(t.id, o, !1, y), K = (0, E.Z)({
    id: t.id,
    label: N.Z.Messages.COPY_ID_USER,
    onSuccess: k
  }), X = (0, I.Z)(t, o), Q = !!(null == t ? void 0 : t.isNonUserBot());
  return (0, u.jsxs)(r.Menu, {
    navId: "user-context",
    onClose: () => {
      (0, a.Zy)(), null == P || P()
    },
    "aria-label": N.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: p,
    children: [!Q && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsxs)(r.MenuGroup, {
        children: [F, Y]
      }), (0, u.jsxs)(r.MenuGroup, {
        children: [w, H]
      }), B && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsx)(r.MenuGroup, {
          children: q
        }), (0, u.jsxs)(r.MenuGroup, {
          children: [W, X]
        })]
      }), null != v ? z : null, j && null != V ? (0, u.jsx)(r.MenuGroup, {
        children: V
      }) : null]
    }), (0, u.jsx)(r.MenuGroup, {
      children: K
    })]
  })
}, {
  object: D.qAy.CONTEXT_MENU
}), [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_USER_MENU])