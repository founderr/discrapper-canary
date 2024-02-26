"use strict";
n.r(t), n.d(t, {
  CenterControlTrayActivityButton: function() {
    return N
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  u = n("997289"),
  o = n("244201"),
  d = n("191225"),
  c = n("426631"),
  f = n("380691"),
  h = n("943349"),
  m = n("702173"),
  p = n("801852"),
  E = n("10524"),
  S = n("478272"),
  g = n("685665"),
  C = n("384997"),
  _ = n("788220"),
  I = n("863590"),
  T = n("49111"),
  v = n("994428"),
  x = n("983127");

function N(e) {
  let {
    channel: t
  } = e, n = (0, s.useStateFromStores)([d.default], () => d.default.isLaunchingActivity()), N = (0, h.useEmbeddedActivityLaunchability)(t.id), A = (0, h.getEmbeddedActivityLaunchabilityLabel)(N), M = N !== h.EmbeddedActivityLaunchability.CAN_LAUNCH || n, {
    isHovered: R,
    setIsHovered: j,
    onMouseEnter: L,
    onMouseLeave: y
  } = (0, _.default)(200, 300), O = (0, f.useShowActivityIndicator)(), P = (0, c.default)({
    channelId: t.id
  }), b = !M, D = a.useCallback(e => {
    "focus" !== e.type && L()
  }, [L]), U = (0, u.useAnalyticsContext)(), w = (0, o.useAppContext)(), F = w === T.AppContext.POPOUT, {
    analyticsLocations: k
  } = (0, g.default)(), B = a.useCallback(() => {
    (0, S.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: U.location,
      openInPopout: F,
      analyticsLocations: k
    })
  }, [U.location, k, t, F]), V = [];
  !M && V.push(i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES);
  let G = (0, m.default)(t.id);
  return G && !M && V.push(i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE), (0, l.jsx)(C.default, {
    contentTypes: V,
    children: e => {
      let {
        visibleContent: n,
        markAsDismissed: a
      } = e;
      return (0, l.jsx)(r.Popout, {
        fixed: !0,
        shouldShow: R,
        animationPosition: "bottom",
        position: "bottom",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          j(!1)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: s
          } = e;
          return b ? (0, l.jsx)(p.ActivitiesMiniShelf, {
            ref: s,
            channel: t,
            closePopout: n,
            onMouseEnter: L,
            onMouseLeave: y,
            isHovered: R,
            onClick: () => a(v.ContentDismissActionType.UNKNOWN)
          }) : (0, l.jsx)(l.Fragment, {})
        },
        children: () => (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(I.default, {
            disabled: M,
            "aria-label": A,
            label: b ? void 0 : A,
            isActivityActive: P || R,
            className: x.controlButton,
            onClick: () => {
              B(), (n === i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES || n === i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && a(v.ContentDismissActionType.UNKNOWN)
            },
            onMouseEnter: D,
            onMouseLeave: y
          }), O ? (0, l.jsx)(E.FreeActivityIndicatorDot, {
            top: 4,
            right: 10,
            size: 12,
            maskColor: E.MaskColor.BLACK
          }) : null]
        })
      })
    }
  })
}