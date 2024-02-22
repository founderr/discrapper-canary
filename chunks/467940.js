"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
});
var u = n("37983"),
  l = n("884691"),
  r = n("446674"),
  i = n("77078"),
  o = n("272030"),
  a = n("838446"),
  s = n("158534"),
  d = n("997289"),
  c = n("812204"),
  f = n("685665"),
  E = n("861370"),
  _ = n("230947"),
  S = n("130037"),
  m = n("26989"),
  M = n("800762"),
  C = n("300925"),
  p = n("489836"),
  A = n("421602"),
  g = n("459870"),
  h = n("325882"),
  v = n("625187"),
  T = n("806179"),
  y = n("97508"),
  O = n("49111"),
  I = n("782340"),
  U = (0, s.default)((0, a.default)(function(e) {
    var t;
    let {
      user: n,
      guildId: a,
      channelId: s,
      context: O,
      onSelect: U,
      moderationAlertId: L,
      analyticsLocation: R,
      analyticsLocations: D,
      onCloseContextMenu: N,
      showTransferOwnershipItem: b
    } = e, {
      analyticsLocations: x
    } = (0, f.default)(c.default.CONTEXT_MENU), P = (0, d.useAnalyticsContext)(), F = null !== (t = null == D ? void 0 : D[0]) && void 0 !== t ? t : x[0], j = (0, S.useTrackModerationAction)(a, {
      location: F,
      targetUserId: n.id
    }), k = (0, r.useStateFromStores)([M.default], () => {
      var e;
      return null !== (e = M.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
    }, [a, n.id]), B = l.useCallback(() => {
      j(S.ModerationActionType.COPY_ID)
    }, [j]), w = (0, r.useStateFromStores)([m.default], () => m.default.isMember(a, n.id), [a, n.id]), G = (0, T.default)(n.id, a), H = (0, A.default)(n.id, O), V = (0, _.default)({
      guildId: a,
      userId: n.id,
      analyticsLocation: null != R ? R : P.location,
      analyticsLocations: [F],
      context: O
    }), K = (0, p.default)(n, F), Y = (0, C.default)(n, a, null != s ? s : k, F), W = (0, h.default)(s, L), Z = (0, v.default)(n, a), z = (0, y.default)(n.id, a, !1, F), q = (0, E.default)({
      id: n.id,
      label: I.default.Messages.COPY_ID_USER,
      onSuccess: B
    }), X = (0, g.default)(n, a), Q = !!(null == n ? void 0 : n.isNonUserBot());
    return (0, u.jsxs)(i.Menu, {
      navId: "user-context",
      onClose: () => {
        (0, o.closeContextMenu)(), null == N || N()
      },
      "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: U,
      children: [!Q && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsxs)(i.MenuGroup, {
          children: [G, H]
        }), (0, u.jsxs)(i.MenuGroup, {
          children: [V, K]
        }), w && (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)(i.MenuGroup, {
            children: Y
          }), (0, u.jsxs)(i.MenuGroup, {
            children: [z, X]
          })]
        }), null != L ? W : null, b && null != Z ? (0, u.jsx)(i.MenuGroup, {
          children: Z
        }) : null]
      }), (0, u.jsx)(i.MenuGroup, {
        children: q
      })]
    })
  }, {
    object: O.AnalyticsObjects.CONTEXT_MENU
  }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])