"use strict";
n.r(t), n.d(t, {
  CenterControlTrayActivityButton: function() {
    return A
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  u = n("997289"),
  o = n("244201"),
  d = n("886860"),
  c = n("191225"),
  f = n("426631"),
  h = n("380691"),
  m = n("943349"),
  p = n("702173"),
  E = n("801852"),
  S = n("10524"),
  g = n("478272"),
  C = n("685665"),
  _ = n("384997"),
  I = n("788220"),
  T = n("863590"),
  v = n("49111"),
  x = n("994428"),
  N = n("983127");

function A(e) {
  let {
    channel: t
  } = e, {
    enableCenterControlTrayMiniShelf: n
  } = d.ActivitiesAutoSuggestExperiment.useExperiment({
    location: "7152d0_1"
  }, {
    autoTrackExposure: !0
  }), A = (0, s.useStateFromStores)([c.default], () => c.default.isLaunchingActivity()), M = (0, m.useEmbeddedActivityLaunchability)(t.id), R = (0, m.getEmbeddedActivityLaunchabilityLabel)(M), j = M !== m.EmbeddedActivityLaunchability.CAN_LAUNCH || A, {
    isHovered: L,
    setIsHovered: y,
    onMouseEnter: O,
    onMouseLeave: P
  } = (0, I.default)(200, 300), b = (0, h.useShowActivityIndicator)(), D = (0, f.default)({
    channelId: t.id
  }), U = !j && n, w = a.useCallback(e => {
    "focus" !== e.type && O()
  }, [O]), F = (0, u.useAnalyticsContext)(), k = (0, o.useAppContext)(), B = k === v.AppContext.POPOUT, {
    analyticsLocations: V
  } = (0, C.default)(), G = a.useCallback(() => {
    (0, g.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: F.location,
      openInPopout: B,
      analyticsLocations: V
    })
  }, [F.location, V, t, B]), H = [];
  n && !j && H.push(i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES);
  let W = (0, p.default)(t.id);
  return W && !j && H.push(i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE), (0, l.jsx)(_.default, {
    contentTypes: H,
    children: e => {
      let {
        visibleContent: n,
        markAsDismissed: a
      } = e;
      return (0, l.jsx)(r.Popout, {
        fixed: !0,
        shouldShow: L,
        animationPosition: "bottom",
        position: "bottom",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          y(!1)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: s
          } = e;
          return U ? (0, l.jsx)(E.ActivitiesMiniShelf, {
            ref: s,
            channel: t,
            closePopout: n,
            onMouseEnter: O,
            onMouseLeave: P,
            isHovered: L,
            onClick: () => a(x.ContentDismissActionType.UNKNOWN)
          }) : (0, l.jsx)(l.Fragment, {})
        },
        children: () => (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(T.default, {
            disabled: j,
            "aria-label": R,
            label: U ? void 0 : R,
            isActivityActive: D || L,
            className: N.controlButton,
            onClick: () => {
              G(), (n === i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES || n === i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && a(x.ContentDismissActionType.UNKNOWN)
            },
            onMouseEnter: w,
            onMouseLeave: P
          }), b ? (0, l.jsx)(S.FreeActivityIndicatorDot, {
            top: 4,
            right: 10,
            size: 12,
            maskColor: S.MaskColor.BLACK
          }) : null]
        })
      })
    }
  })
}