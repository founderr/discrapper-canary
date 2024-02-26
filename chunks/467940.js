"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var l = n("37983"),
  i = n("884691"),
  u = n("446674"),
  r = n("77078"),
  o = n("272030"),
  a = n("838446"),
  s = n("158534"),
  d = n("997289"),
  c = n("812204"),
  f = n("685665"),
  E = n("861370"),
  _ = n("230947"),
  m = n("130037"),
  h = n("26989"),
  S = n("800762"),
  C = n("300925"),
  M = n("489836"),
  v = n("421602"),
  g = n("459870"),
  p = n("325882"),
  A = n("625187"),
  T = n("806179"),
  I = n("97508"),
  N = n("49111"),
  y = n("782340"),
  L = (0, s.default)((0, a.default)(function(e) {
    var t;
    let {
      user: n,
      guildId: a,
      channelId: s,
      context: N,
      onSelect: L,
      moderationAlertId: O,
      analyticsLocation: U,
      analyticsLocations: R,
      onCloseContextMenu: b,
      showTransferOwnershipItem: D
    } = e, {
      analyticsLocations: G
    } = (0, f.default)(c.default.CONTEXT_MENU), F = (0, d.useAnalyticsContext)(), P = null !== (t = null == R ? void 0 : R[0]) && void 0 !== t ? t : G[0], x = (0, m.useTrackModerationAction)(a, {
      location: P,
      targetUserId: n.id
    }), w = (0, u.useStateFromStores)([S.default], () => {
      var e;
      return null !== (e = S.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
    }, [a, n.id]), H = i.useCallback(() => {
      x(m.ModerationActionType.COPY_ID)
    }, [x]), j = (0, u.useStateFromStores)([h.default], () => h.default.isMember(a, n.id), [a, n.id]), k = (0, T.default)(n.id, a), B = (0, v.default)(n.id, N), V = (0, _.default)({
      guildId: a,
      userId: n.id,
      analyticsLocation: null != U ? U : F.location,
      analyticsLocations: [P],
      context: N
    }), W = (0, M.default)(n, P), Y = (0, C.default)(n, a, null != s ? s : w, P), K = (0, p.default)(s, O), X = (0, A.default)(n, a), Z = (0, I.default)(n.id, a, !1, P), z = (0, E.default)({
      id: n.id,
      label: y.default.Messages.COPY_ID_USER,
      onSuccess: H
    }), q = (0, g.default)(n, a), J = !!(null == n ? void 0 : n.isNonUserBot());
    return (0, l.jsxs)(r.Menu, {
      navId: "user-context",
      onClose: () => {
        (0, o.closeContextMenu)(), null == b || b()
      },
      "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: L,
      children: [!J && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(r.MenuGroup, {
          children: [k, B]
        }), (0, l.jsxs)(r.MenuGroup, {
          children: [V, W]
        }), j && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.MenuGroup, {
            children: Y
          }), (0, l.jsxs)(r.MenuGroup, {
            children: [Z, q]
          })]
        }), null != O ? K : null, D && null != X ? (0, l.jsx)(r.MenuGroup, {
          children: X
        }) : null]
      }), (0, l.jsx)(r.MenuGroup, {
        children: z
      })]
    })
  }, {
    object: N.AnalyticsObjects.CONTEXT_MENU
  }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])