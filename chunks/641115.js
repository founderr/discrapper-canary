"use strict";
l.r(t), l.d(t, {
  default: function() {
    return k
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
  E = l("736871"),
  _ = l("351742"),
  g = l("386542"),
  C = l("193878"),
  N = l("594174"),
  h = l("746124"),
  A = l("285952"),
  x = l("466111"),
  I = l("74538"),
  p = l("451467"),
  T = l("200445"),
  R = l("122186"),
  v = l("37113"),
  L = l("981631"),
  M = l("474936"),
  j = l("689938"),
  O = l("223318"),
  D = l("138684"),
  P = l("794711");

function b(e) {
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

function G() {
  return (0, a.jsxs)("div", {
    className: D.toolTipTextContainer,
    children: [(0, a.jsx)(x.default, {
      className: i()(D.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: D.upsellText,
      variant: "text-sm/medium",
      children: j.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function U(e) {
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
        [D.selectorText]: !s,
        [D.enhancedSelectorNitroText]: !s,
        [D.selectorTextSelected]: s
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: D.tooltip,
    spacing: 12,
    "aria-label": j.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(G, {}),
    children: (0, a.jsx)(A.default, {
      align: A.default.Align.CENTER,
      onMouseEnter: () => S(!0),
      onMouseLeave: () => S(!1),
      children: (0, a.jsx)(c.Text, {
        variant: "text-xs/bold",
        className: i()(D.selectorNitroText, {
          [D.enhancedSelectorNitroText]: d
        }),
        children: _
      })
    })
  }), l = () => b({
    analyticsLocation: o,
    onClose: m
  })) : (t = (0, a.jsx)(c.Text, {
    variant: "text-xs/normal",
    className: s ? D.selectorTextSelected : D.selectorText,
    children: _
  }), l = () => f(E)), {
    content: t,
    className: i()({
      [D.selectorButton]: !s,
      [D.selectorButtonPerkDemo]: u,
      [D.selectorButtonPremiumRequired]: r,
      [D.selectorButtonSelected]: s && !u,
      [D.selectorButtonSelectedPerkDemo]: s && u
    }),
    onClick: l
  }
}

function k(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: s,
    selectedFPS: i,
    onResolutionChange: r,
    onFPSChange: x,
    onPresetChange: G,
    targetGuildPremiumTier: k,
    captureDeviceSelected: F
  } = e, y = (0, d.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), V = I.default.canStreamQuality(I.StreamQuality.MID, y), {
    location: w
  } = (0, m.useAnalyticsContext)(), B = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), H = (0, I.isPremium)(y, M.PremiumTypes.TIER_1), {
    inPerksDemosExperiment: W
  } = E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: H
  });
  _.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !W || H
  });
  let {
    available: K,
    hqStreamingState: z
  } = (0, g.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), Y = !V && !B && !K, {
    enabled: Q,
    variant: q
  } = C.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: Y
  }), Z = Q && C.GradientVariants.includes(q), [J, X] = n.useState(!1), $ = n.useCallback(() => {
    r(v.ApplicationStreamResolutions.RESOLUTION_1080), x(v.ApplicationStreamFPS.FPS_60)
  }, [r, x]), ee = F ? v.GoLiveDeviceResolutionButtons : v.ApplicationStreamResolutionButtons, et = {
    ...w,
    section: L.AnalyticsSections.STREAM_SETTINGS
  }, el = (0, a.jsx)(h.default, {
    buttons: ee.map(e => U({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, p.default)(l, e.value, i, y, k),
      needsDemo: K && e.value !== v.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: et,
      useGradient: Z,
      onClick: () => r(e.value),
      onClose: t,
      setIsHovering: X
    }))
  }), ea = (0, a.jsx)(h.default, {
    buttons: v.ApplicationStreamFPSButtons.map(e => U({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, p.default)(l, s, e.value, y, k),
      needsDemo: K && e.value === v.ApplicationStreamFPS.FPS_60,
      analyticsLocation: et,
      useGradient: Z,
      onClick: () => x(e.value),
      onClose: t,
      setIsHovering: X
    }))
  }), en = [{
    value: v.ApplicationStreamPresets.PRESET_VIDEO,
    label: j.default.Messages.STREAM_PRESET_VIDEO
  }, ...F ? [] : [{
    value: v.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: j.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: v.ApplicationStreamPresets.PRESET_CUSTOM,
    label: j.default.Messages.STREAM_PRESET_CUSTOM
  }], es = l === v.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A.default, {
      children: (0, a.jsx)(c.FormItem, {
        title: j.default.Messages.STREAM_RESOLUTION,
        titleClassName: O.formItemTitleSlim,
        className: D.documentModeGroup,
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: j.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: i
          })
        })
      })
    }), Y ? (0, a.jsx)(R.default, {
      message: j.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: b
    }) : null]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(A.default, {
      children: [(0, a.jsx)(c.FormItem, {
        title: j.default.Messages.STREAM_RESOLUTION,
        className: D.settingsGroup,
        titleClassName: O.formItemTitleSlim,
        children: el
      }), (0, a.jsx)(c.FormItem, {
        title: j.default.Messages.SCREENSHARE_FRAME_RATE,
        className: D.settingsGroup,
        titleClassName: O.formItemTitleSlim,
        children: ea
      })]
    }), Y ? (0, a.jsx)(R.default, {
      onClose: t,
      openStreamUpsellModal: b,
      glow: J && Z
    }) : null, K ? (0, a.jsx)(T.default, {
      glow: J,
      playIntroTransition: !z.hqStreamingUnlockAnimationPlayed,
      onUnlocked: $
    }) : null]
  });
  return (0, a.jsx)(f.default, {
    ...et,
    children: (0, a.jsx)(c.FormItem, {
      title: j.default.Messages.STREAM_QUALITY,
      titleClassName: O.formItemTitle,
      className: O.modalContent,
      children: (0, a.jsxs)("div", {
        className: D.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: l,
          className: P.marginTop8,
          options: en,
          onChange: e => G(e)
        }), es]
      })
    })
  })
}