"use strict";
n.r(e), n.d(e, {
  default: function() {
    return g
  }
});
var u = n("37983"),
  r = n("884691"),
  i = n("446674"),
  l = n("77078"),
  o = n("272030"),
  a = n("838446"),
  s = n("158534"),
  d = n("997289"),
  c = n("812204"),
  E = n("685665"),
  _ = n("861370"),
  f = n("230947"),
  T = n("130037"),
  S = n("26989"),
  I = n("800762"),
  N = n("300925"),
  A = n("489836"),
  U = n("421602"),
  p = n("459870"),
  C = n("325882"),
  D = n("625187"),
  R = n("806179"),
  h = n("97508"),
  O = n("49111"),
  P = n("782340"),
  g = (0, s.default)((0, a.default)(function(t) {
    var e;
    let {
      user: n,
      guildId: a,
      channelId: s,
      context: O,
      onSelect: g,
      moderationAlertId: M,
      analyticsLocation: G,
      analyticsLocations: m,
      onCloseContextMenu: y,
      showTransferOwnershipItem: v
    } = t, {
      analyticsLocations: L
    } = (0, E.default)(c.default.CONTEXT_MENU), b = (0, d.useAnalyticsContext)(), F = null !== (e = null == m ? void 0 : m[0]) && void 0 !== e ? e : L[0], B = (0, T.useTrackModerationAction)(a, {
      location: F,
      targetUserId: n.id
    }), x = (0, i.useStateFromStores)([I.default], () => {
      var t;
      return null !== (t = I.default.getUserVoiceChannelId(a, n.id)) && void 0 !== t ? t : void 0
    }, [a, n.id]), Y = r.useCallback(() => {
      B(T.ModerationActionType.COPY_ID)
    }, [B]), k = (0, i.useStateFromStores)([S.default], () => S.default.isMember(a, n.id), [a, n.id]), V = (0, R.default)(n.id, a), w = (0, U.default)(n.id, O), H = (0, f.default)({
      guildId: a,
      userId: n.id,
      analyticsLocation: null != G ? G : b.location,
      analyticsLocations: [F],
      context: O
    }), j = (0, A.default)(n, F), K = (0, N.default)(n, a, null != s ? s : x, F), W = (0, C.default)(s, M), Z = (0, D.default)(n, a), q = (0, h.default)(n.id, a, !1, F), z = (0, _.default)({
      id: n.id,
      label: P.default.Messages.COPY_ID_USER,
      onSuccess: Y
    }), X = (0, p.default)(n, a), Q = !!(null == n ? void 0 : n.isNonUserBot());
    return (0, u.jsxs)(l.Menu, {
      navId: "user-context",
      onClose: () => {
        (0, o.closeContextMenu)(), null == y || y()
      },
      "aria-label": P.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: g,
      children: [!Q && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsxs)(l.MenuGroup, {
          children: [V, w]
        }), (0, u.jsxs)(l.MenuGroup, {
          children: [H, j]
        }), k && (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)(l.MenuGroup, {
            children: K
          }), (0, u.jsxs)(l.MenuGroup, {
            children: [q, X]
          })]
        }), null != M ? W : null, v && null != Z ? (0, u.jsx)(l.MenuGroup, {
          children: Z
        }) : null]
      }), (0, u.jsx)(l.MenuGroup, {
        children: z
      })]
    })
  }, {
    object: O.AnalyticsObjects.CONTEXT_MENU
  }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])