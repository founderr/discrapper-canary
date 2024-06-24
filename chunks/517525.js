n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(920906),
  o = n(468194),
  c = n(442837),
  u = n(692547),
  d = n(477690),
  h = n(481060),
  m = n(2052),
  p = n(906732),
  E = n(484459),
  g = n(594174),
  f = n(368666),
  C = n(626135),
  _ = n(74538),
  I = n(557457),
  x = n(475674),
  T = n(981631),
  N = n(474936),
  Z = n(689938),
  S = n(244438);
let v = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
  A = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  M = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  R = {
    opacity: 0
  },
  j = {
    opacity: 1
  },
  L = {
    borderRadius: "".concat(v, "px ").concat(v, "px ").concat(v, "px ").concat(v, "px")
  },
  O = {
    borderRadius: "0px ".concat(v, "px ").concat(v, "px 0px")
  },
  P = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: !0
  },
  y = e => {
    let t, s, {
        participant: r,
        isUpsellEnabled: o,
        shape: d,
        size: E,
        didTrackUpsellViewed: v,
        setDidTrackUpsellViewed: A,
        className: M,
        premiumIndicator: R
      } = e,
      j = (0, I.Wc)(r),
      {
        analyticsLocations: L
      } = (0, p.ZP)(),
      O = null != (0, x.Z)(r);
    try {
      t = (0, I.nG)(j)
    } catch (e) {
      t = !1
    }
    try {
      s = (0, I.tR)(j)
    } catch (e) {
      s = !1
    }
    let P = t || s,
      {
        location: y
      } = (0, m.O)(),
      b = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
      D = o && !_.ZP.isPremium(b, N.p9.TIER_1) && !_.ZP.canStreamQuality(_.ZP.StreamQuality.MID, b),
      U = i.useCallback(() => {
        D && P && (0, h.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("28479")]).then(n.bind(n, 78865));
          return t => (0, l.jsx)(e, {
            ...t,
            analyticsSource: y
          })
        })
      }, [D, P, y]);
    if (i.useEffect(() => {
        !v && P && (C.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
          type: N.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: s,
          location_stack: L
        }), A(!0))
      }, [t, s, P, v, A, L]), null == j) return null;
    let k = (0, l.jsx)(h.Tooltip, {
      text: O ? Z.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_REDUCED : P ? Z.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_PREMIUM : Z.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_NORMAL,
      position: "bottom",
      color: h.Tooltip.Colors.GREY,
      children: e => (0, l.jsxs)(h.Clickable, {
        ...e,
        onClick: U,
        className: a()(S.qualityIndicator, E, f.eE[d], O ? S.qualityIndicatorLowQuality : S.qualityIndicatorFullQuality, {
          [S.clickable]: D && P
        }),
        children: [P ? (0, l.jsx)(h.NitroWheelIcon, {
          size: "md",
          color: "currentColor",
          className: S.premiumStreamIcon
        }) : null, (0, l.jsx)("span", {
          className: S.qualityResolution,
          children: (0, I.ml)(j.maxResolution)
        }), (0, l.jsx)("span", {
          children: (0, I.bp)(j.maxFrameRate)
        })]
      })
    });
    return (0, l.jsx)(h.TextBadge, {
      text: k,
      className: a()(M, S.qualityIndicatorBadge, {
        [S.qualityIndicatorBadgePremium]: R
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: d
    })
  };
t.Z = e => {
  let {
    participant: t,
    showQuality: n,
    isUpsellEnabled: s = !0,
    size: o,
    className: c,
    premiumIndicator: u
  } = e, [d, m] = i.useState(!1), p = (0, I.Wc)(t), {
    reducedMotion: g
  } = i.useContext(h.AccessibilityPreferencesContext), C = n && null != p;
  i.useEffect(() => {
    (0, E.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
      dispatchWait: !0
    })
  }, [t]);
  let _ = (0, r.useTransition)(C, {
      enter: {
        from: g.enabled ? R : A,
        to: g.enabled ? j : M
      },
      leave: g.enabled ? R : A,
      config: P
    }),
    x = (0, r.useSpring)({
      to: C ? O : L,
      config: P
    });
  return (e => {
    let {
      className: n,
      popoutProps: i
    } = e;
    return (0, l.jsxs)("div", {
      className: a()(S.streamQualityIndicator, n),
      ...i,
      children: [_((e, n) => n ? (0, l.jsx)(r.animated.div, {
        style: e,
        children: (0, l.jsx)(y, {
          className: S.liveQualityIndicator,
          participant: t,
          size: o,
          shape: h.BadgeShapes.ROUND_LEFT,
          isUpsellEnabled: s,
          didTrackUpsellViewed: d,
          setDidTrackUpsellViewed: m,
          premiumIndicator: u
        })
      }) : null), (0, l.jsx)(r.animated.div, {
        style: x,
        className: S.liveIndicator,
        children: (0, l.jsx)(f.ZP, {
          look: f.jZ.RED,
          size: o,
          shape: C ? h.BadgeShapes.ROUND_RIGHT : h.BadgeShapes.ROUND
        })
      })]
    })
  })({
    className: c
  })
}