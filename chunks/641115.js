"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("512722"),
  u = l.n(r),
  o = l("848246"),
  d = l("442837"),
  c = l("481060"),
  f = l("410575"),
  m = l("2052"),
  S = l("924557"),
  E = l("351742"),
  _ = l("386542"),
  g = l("193878"),
  C = l("594174"),
  N = l("746124"),
  h = l("285952"),
  A = l("466111"),
  x = l("74538"),
  I = l("451467"),
  p = l("200445"),
  T = l("122186"),
  R = l("37113"),
  v = l("981631"),
  L = l("474936"),
  M = l("689938"),
  j = l("223318"),
  O = l("138684"),
  D = l("794711");

function P(e) {
  let {
    analyticsLocation: t,
    onClose: n
  } = e;
  (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e("28479").then(l.bind(l, "78865"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: n,
      analyticsSource: t
    })
  })
}

function b() {
  return (0, a.jsxs)("div", {
    className: O.toolTipTextContainer,
    children: [(0, a.jsx)(A.default, {
      className: i()(O.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: O.upsellText,
      variant: "text-sm/medium",
      children: M.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function G(e) {
  let t, l, {
      type: n,
      selected: s,
      needsPremium: r,
      needsDemo: u,
      analyticsLocation: o,
      useGradient: d = !1,
      onClick: f,
      onClose: m,
      setIsHovering: S
    } = e,
    {
      value: E,
      label: _
    } = n;
  return u ? (t = (0, a.jsx)("div", {
    onMouseEnter: () => S(!0),
    onMouseLeave: () => S(!1),
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/bold",
      className: i()({
        [O.selectorText]: !s,
        [O.enhancedSelectorNitroText]: !s,
        [O.selectorTextSelected]: s
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: O.tooltip,
    spacing: 12,
    "aria-label": M.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(b, {}),
    children: (0, a.jsx)(h.default, {
      align: h.default.Align.CENTER,
      onMouseEnter: () => S(!0),
      onMouseLeave: () => S(!1),
      children: (0, a.jsx)(c.Text, {
        variant: "text-xs/bold",
        className: i()(O.selectorNitroText, {
          [O.enhancedSelectorNitroText]: d
        }),
        children: _
      })
    })
  }), l = () => P({
    analyticsLocation: o,
    onClose: m
  })) : (t = (0, a.jsx)(c.Text, {
    variant: "text-xs/normal",
    className: s ? O.selectorTextSelected : O.selectorText,
    children: _
  }), l = () => f(E)), {
    content: t,
    className: i()({
      [O.selectorButton]: !s,
      [O.selectorButtonPerkDemo]: u,
      [O.selectorButtonPremiumRequired]: r,
      [O.selectorButtonSelected]: s && !u,
      [O.selectorButtonSelectedPerkDemo]: s && u
    }),
    onClick: l
  }
}

function U(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: s,
    selectedFPS: i,
    onResolutionChange: r,
    onFPSChange: A,
    onPresetChange: b,
    targetGuildPremiumTier: U,
    captureDeviceSelected: k
  } = e, F = (0, d.useStateFromStores)([C.default], () => {
    let e = C.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), y = x.default.canStreamQuality(x.StreamQuality.MID, F), {
    location: V
  } = (0, m.useAnalyticsContext)(), w = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  });
  E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: (0, x.isPremium)(F, L.PremiumTypes.TIER_1)
  });
  let {
    available: B,
    hqStreamingState: H
  } = (0, _.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), W = !y && !w && !B, {
    enabled: K,
    variant: z
  } = g.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: W
  }), Y = K && g.GradientVariants.includes(z), [Q, q] = n.useState(!1), Z = n.useCallback(() => {
    r(R.ApplicationStreamResolutions.RESOLUTION_1080), A(R.ApplicationStreamFPS.FPS_60)
  }, [r, A]), J = k ? R.GoLiveDeviceResolutionButtons : R.ApplicationStreamResolutionButtons, X = {
    ...V,
    section: v.AnalyticsSections.STREAM_SETTINGS
  }, $ = (0, a.jsx)(N.default, {
    buttons: J.map(e => G({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, I.default)(l, e.value, i, F, U),
      needsDemo: B && e.value !== R.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: X,
      useGradient: Y,
      onClick: () => r(e.value),
      onClose: t,
      setIsHovering: q
    }))
  }), ee = (0, a.jsx)(N.default, {
    buttons: R.ApplicationStreamFPSButtons.map(e => G({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, I.default)(l, s, e.value, F, U),
      needsDemo: B && e.value === R.ApplicationStreamFPS.FPS_60,
      analyticsLocation: X,
      useGradient: Y,
      onClick: () => A(e.value),
      onClose: t,
      setIsHovering: q
    }))
  }), et = [{
    value: R.ApplicationStreamPresets.PRESET_VIDEO,
    label: M.default.Messages.STREAM_PRESET_VIDEO
  }, ...k ? [] : [{
    value: R.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: M.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: R.ApplicationStreamPresets.PRESET_CUSTOM,
    label: M.default.Messages.STREAM_PRESET_CUSTOM
  }], el = l === R.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h.default, {
      children: (0, a.jsx)(c.FormItem, {
        title: M.default.Messages.STREAM_RESOLUTION,
        titleClassName: j.formItemTitleSlim,
        className: O.documentModeGroup,
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: M.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: i
          })
        })
      })
    }), W ? (0, a.jsx)(T.default, {
      message: M.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: P
    }) : null]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(h.default, {
      children: [(0, a.jsx)(c.FormItem, {
        title: M.default.Messages.STREAM_RESOLUTION,
        className: O.settingsGroup,
        titleClassName: j.formItemTitleSlim,
        children: $
      }), (0, a.jsx)(c.FormItem, {
        title: M.default.Messages.SCREENSHARE_FRAME_RATE,
        className: O.settingsGroup,
        titleClassName: j.formItemTitleSlim,
        children: ee
      })]
    }), W ? (0, a.jsx)(T.default, {
      onClose: t,
      openStreamUpsellModal: P,
      glow: Q && Y
    }) : null, B ? (0, a.jsx)(p.default, {
      glow: Q,
      playIntroTransition: !H.hqStreamingUnlockAnimationPlayed,
      onUnlocked: Z
    }) : null]
  });
  return (0, a.jsx)(f.default, {
    ...X,
    children: (0, a.jsx)(c.FormItem, {
      title: M.default.Messages.STREAM_QUALITY,
      titleClassName: j.formItemTitle,
      className: j.modalContent,
      children: (0, a.jsxs)("div", {
        className: O.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: l,
          className: D.marginTop8,
          options: et,
          onChange: e => b(e)
        }), el]
      })
    })
  })
}