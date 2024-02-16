"use strict";
n.r(t), n.d(t, {
  CenterControlTrayActivityButton: function() {
    return L
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  o = n("997289"),
  u = n("244201"),
  d = n("886860"),
  c = n("614175"),
  f = n("903178"),
  h = n("296998"),
  m = n("926128"),
  p = n("191225"),
  E = n("426631"),
  S = n("380691"),
  g = n("943349"),
  C = n("702173"),
  _ = n("801852"),
  I = n("10524"),
  T = n("478272"),
  v = n("685665"),
  x = n("384997"),
  N = n("788220"),
  A = n("863590"),
  M = n("49111"),
  R = n("994428"),
  j = n("983127");

function L(e) {
  let {
    channel: t
  } = e, {
    enableCenterControlTrayMiniShelf: n
  } = d.ActivitiesAutoSuggestExperiment.useExperiment({
    location: "7152d0_1"
  }, {
    autoTrackExposure: !0
  }), L = (0, s.useStateFromStores)([p.default], () => p.default.isLaunchingActivity()), y = (0, g.useEmbeddedActivityLaunchability)(t.id), O = (0, g.getEmbeddedActivityLaunchabilityLabel)(y), P = y !== g.EmbeddedActivityLaunchability.CAN_LAUNCH || L, {
    isHovered: b,
    setIsHovered: D,
    onMouseEnter: U,
    onMouseLeave: w
  } = (0, N.default)(200, 300), F = (0, S.useShowActivityIndicator)(), {
    enabled: k
  } = c.ActivitiesGameNightExperiment.useExperiment({
    location: "7152d0_2"
  }, {
    autoTrackExposure: !1
  }), B = F && !k, V = (0, E.default)({
    channelId: t.id
  }), H = !P && n, G = a.useCallback(e => {
    "focus" !== e.type && U()
  }, [U]), W = (0, o.useAnalyticsContext)(), Y = (0, u.useAppContext)(), z = Y === M.AppContext.POPOUT, {
    analyticsLocations: K
  } = (0, v.default)(), Z = a.useCallback(() => {
    (0, T.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: W.location,
      openInPopout: z,
      analyticsLocations: K
    })
  }, [W.location, K, t, z]), X = [];
  n && !P && X.push(i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES);
  let Q = (0, C.default)(t.id);
  Q && !P && X.push(i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE);
  let q = (0, f.useIsWatchTogetherPromoEnabled)(),
    J = (0, h.useIsWatchTogetherPromoWeek1SparklesEnabled)(),
    $ = (0, m.useIsWatchTogetherPromoWeek2SparklesEnabled)();
  return q && J && !P && X.push(i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES), q && $ && !P && X.push(i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES), (0, l.jsx)(x.default, {
    contentTypes: X,
    children: e => {
      let {
        visibleContent: n,
        markAsDismissed: a
      } = e;
      return (0, l.jsx)(r.Popout, {
        fixed: !0,
        shouldShow: b,
        animationPosition: "bottom",
        position: "bottom",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          D(!1)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: s
          } = e;
          return H ? (0, l.jsx)(_.ActivitiesMiniShelf, {
            ref: s,
            channel: t,
            closePopout: n,
            onMouseEnter: U,
            onMouseLeave: w,
            isHovered: b,
            onClick: () => a(R.ContentDismissActionType.UNKNOWN)
          }) : (0, l.jsx)(l.Fragment, {})
        },
        children: () => (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(A.default, {
            disabled: P,
            "aria-label": O,
            label: H ? void 0 : O,
            isActivityActive: V || b,
            className: j.controlButton,
            onClick: () => {
              Z(), (n === i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES || n === i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && a(R.ContentDismissActionType.UNKNOWN)
            },
            onMouseEnter: G,
            onMouseLeave: w
          }), B ? (0, l.jsx)(I.FreeActivityIndicatorDot, {
            top: 4,
            right: 10,
            size: 12,
            maskColor: I.MaskColor.BLACK
          }) : null]
        })
      })
    }
  })
}