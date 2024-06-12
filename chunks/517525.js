"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("920906"),
  o = n("468194"),
  u = n("442837"),
  d = n("692547"),
  c = n("477690"),
  f = n("481060"),
  h = n("2052"),
  m = n("906732"),
  p = n("484459"),
  E = n("594174"),
  g = n("466111"),
  C = n("368666"),
  S = n("626135"),
  _ = n("74538"),
  T = n("557457"),
  I = n("475674"),
  A = n("981631"),
  v = n("474936"),
  x = n("689938"),
  N = n("909143");
let M = (0, o.cssValueToNumber)(c.default.LIVE_INDICATOR_BORDER_RADIUS),
  y = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  R = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  L = {
    opacity: 0
  },
  O = {
    opacity: 1
  },
  j = {
    borderRadius: "".concat(M, "px ").concat(M, "px ").concat(M, "px ").concat(M, "px")
  },
  P = {
    borderRadius: "0px ".concat(M, "px ").concat(M, "px 0px")
  },
  D = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: !0
  },
  b = e => {
    let t, s, {
        participant: r,
        isUpsellEnabled: o,
        shape: c,
        size: p,
        didTrackUpsellViewed: M,
        setDidTrackUpsellViewed: y,
        className: R,
        premiumIndicator: L
      } = e,
      O = (0, T.getMaxQuality)(r),
      {
        analyticsLocations: j
      } = (0, m.default)(),
      P = null != (0, I.default)(r);
    try {
      t = (0, T.isPremiumFPS)(O)
    } catch (e) {
      t = !1
    }
    try {
      s = (0, T.isPremiumResolution)(O)
    } catch (e) {
      s = !1
    }
    let D = t || s,
      {
        location: b
      } = (0, h.useAnalyticsContext)(),
      U = (0, u.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
      F = o && !_.default.isPremium(U, v.PremiumTypes.TIER_1) && !_.default.canStreamQuality(_.default.StreamQuality.MID, U),
      w = l.useCallback(() => {
        F && D && (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("28479")]).then(n.bind(n, "78865"));
          return t => (0, a.jsx)(e, {
            ...t,
            analyticsSource: b
          })
        })
      }, [F, D, b]);
    if (l.useEffect(() => {
        !M && D && (S.default.track(A.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
          type: v.PremiumUpsellTypes.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: s,
          location_stack: j
        }), y(!0))
      }, [t, s, D, M, y, j]), null == O) return null;
    let k = (0, a.jsx)(f.Tooltip, {
      text: P ? x.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_REDUCED : D ? x.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_PREMIUM : x.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_NORMAL,
      position: "bottom",
      color: f.Tooltip.Colors.GREY,
      children: e => (0, a.jsxs)(f.Clickable, {
        ...e,
        onClick: w,
        className: i()(N.qualityIndicator, p, C.LiveIndicatorShapes[c], P ? N.qualityIndicatorLowQuality : N.qualityIndicatorFullQuality, {
          [N.clickable]: F && D
        }),
        children: [D ? (0, a.jsx)(g.default, {
          className: N.premiumStreamIcon
        }) : null, (0, a.jsx)("span", {
          className: N.qualityResolution,
          children: (0, T.getResolutionText)(O.maxResolution)
        }), (0, a.jsx)("span", {
          children: (0, T.getFPSText)(O.maxFrameRate)
        })]
      })
    });
    return (0, a.jsx)(f.TextBadge, {
      text: k,
      className: i()(R, N.qualityIndicatorBadge, {
        [N.qualityIndicatorBadgePremium]: L
      }),
      color: d.default.unsafe_rawColors.PRIMARY_500.css,
      shape: c
    })
  };
t.default = e => {
  let {
    participant: t,
    showQuality: n,
    isUpsellEnabled: s = !0,
    size: o,
    className: u,
    premiumIndicator: d
  } = e, [c, h] = l.useState(!1), m = (0, T.getMaxQuality)(t), {
    reducedMotion: E
  } = l.useContext(f.AccessibilityPreferencesContext), g = n && null != m;
  l.useEffect(() => {
    (0, p.default)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
      dispatchWait: !0
    })
  }, [t]);
  let S = (0, r.useTransition)(g, {
      enter: {
        from: E.enabled ? L : y,
        to: E.enabled ? O : R
      },
      leave: E.enabled ? L : y,
      config: D
    }),
    _ = (0, r.useSpring)({
      to: g ? P : j,
      config: D
    });
  return (e => {
    let {
      className: n,
      popoutProps: l
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(N.streamQualityIndicator, n),
      ...l,
      children: [S((e, n) => n ? (0, a.jsx)(r.animated.div, {
        style: e,
        children: (0, a.jsx)(b, {
          className: N.liveQualityIndicator,
          participant: t,
          size: o,
          shape: f.BadgeShapes.ROUND_LEFT,
          isUpsellEnabled: s,
          didTrackUpsellViewed: c,
          setDidTrackUpsellViewed: h,
          premiumIndicator: d
        })
      }) : null), (0, a.jsx)(r.animated.div, {
        style: _,
        className: N.liveIndicator,
        children: (0, a.jsx)(C.default, {
          look: C.LiveIndicatorLooks.RED,
          size: o,
          shape: g ? f.BadgeShapes.ROUND_RIGHT : f.BadgeShapes.ROUND
        })
      })]
    })
  })({
    className: u
  })
}