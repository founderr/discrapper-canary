"use strict";
n.r(t);
var u = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("481060"),
  o = n("239091"),
  r = n("883385"),
  s = n("108843"),
  c = n("2052"),
  d = n("100527"),
  f = n("906732"),
  _ = n("299206"),
  E = n("976192"),
  A = n("910693"),
  M = n("271383"),
  T = n("979651"),
  S = n("933409"),
  m = n("389052"),
  C = n("88966"),
  O = n("712301"),
  p = n("567711"),
  y = n("358386"),
  I = n("725119"),
  L = n("931617"),
  U = n("981631"),
  v = n("689938");
t.default = (0, s.default)((0, r.default)(function(e) {
  var t;
  let {
    user: n,
    guildId: r,
    channelId: s,
    context: U,
    onSelect: g,
    moderationAlertId: D,
    analyticsLocation: b,
    analyticsLocations: N,
    onCloseContextMenu: h,
    showTransferOwnershipItem: R
  } = e, {
    analyticsLocations: x
  } = (0, f.default)(d.default.CONTEXT_MENU), j = (0, c.useAnalyticsContext)(), P = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : x[0], F = (0, A.useTrackModerationAction)(r, {
    location: P,
    targetUserId: n.id
  }), k = (0, a.useStateFromStores)([T.default], () => {
    var e;
    return null !== (e = T.default.getUserVoiceChannelId(r, n.id)) && void 0 !== e ? e : void 0
  }, [r, n.id]), G = l.useCallback(() => {
    F(A.ModerationActionType.COPY_ID)
  }, [F]), w = (0, a.useStateFromStores)([M.default], () => M.default.isMember(r, n.id), [r, n.id]), B = (0, I.default)(n.id, r), Y = (0, C.default)(n.id, U), H = (0, E.default)({
    guildId: r,
    userId: n.id,
    analyticsLocation: null != b ? b : j.location,
    analyticsLocations: [P],
    context: U
  }), V = (0, m.default)({
    user: n,
    location: P
  }), W = (0, S.default)(n, r, null != s ? s : k, P), z = (0, p.default)(s, D), K = (0, y.default)(n, r), X = (0, L.default)(n.id, r, !1, P), q = (0, _.default)({
    id: n.id,
    label: v.default.Messages.COPY_ID_USER,
    onSuccess: G
  }), Q = (0, O.default)(n, r), J = !!(null == n ? void 0 : n.isNonUserBot());
  return (0, u.jsxs)(i.Menu, {
    navId: "user-context",
    onClose: () => {
      (0, o.closeContextMenu)(), null == h || h()
    },
    "aria-label": v.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: g,
    children: [!J && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsxs)(i.MenuGroup, {
        children: [B, Y]
      }), (0, u.jsxs)(i.MenuGroup, {
        children: [H, V]
      }), w && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsx)(i.MenuGroup, {
          children: W
        }), (0, u.jsxs)(i.MenuGroup, {
          children: [X, Q]
        })]
      }), null != D ? z : null, R && null != K ? (0, u.jsx)(i.MenuGroup, {
        children: K
      }) : null]
    }), (0, u.jsx)(i.MenuGroup, {
      children: q
    })]
  })
}, {
  object: U.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GUILD_MODERATION_USER_MENU])