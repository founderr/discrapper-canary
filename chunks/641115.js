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
  I = l("466111"),
  x = l("74538"),
  p = l("451467"),
  T = l("200445"),
  R = l("122186"),
  v = l("37113"),
  L = l("981631"),
  M = l("474936"),
  O = l("689938"),
  j = l("223318"),
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
    children: [(0, a.jsx)(I.default, {
      className: i()(D.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: D.upsellText,
      variant: "text-sm/medium",
      children: O.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
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
    "aria-label": O.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
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
    selectedGuildId: t,
    selectedChannelId: l,
    onClose: s,
    selectedPreset: i,
    selectedResolution: r,
    selectedFPS: I,
    onResolutionChange: G,
    onFPSChange: k,
    onPresetChange: F,
    targetGuildPremiumTier: y,
    captureDeviceSelected: V
  } = e, w = (0, d.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), B = x.default.canStreamQuality(x.StreamQuality.MID, w), {
    location: H
  } = (0, m.useAnalyticsContext)(), W = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), K = (0, x.isPremium)(w, M.PremiumTypes.TIER_1), {
    inPerksDemosExperiment: z
  } = E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: K
  });
  _.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !z || K
  });
  let {
    available: Y,
    hqStreamingState: Q
  } = (0, g.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), q = !B && !W && !Y, {
    enabled: Z,
    variant: J
  } = C.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: q
  }), X = Z && C.GradientVariants.includes(J), [$, ee] = n.useState(!1), et = n.useCallback(() => {
    G(v.ApplicationStreamResolutions.RESOLUTION_1080), k(v.ApplicationStreamFPS.FPS_60)
  }, [G, k]), el = V ? v.GoLiveDeviceResolutionButtons : v.ApplicationStreamResolutionButtons, ea = {
    ...H,
    section: L.AnalyticsSections.STREAM_SETTINGS
  }, en = (0, a.jsx)(h.default, {
    buttons: el.map(e => U({
      type: e,
      selected: e.value === r,
      needsPremium: !(0, p.default)(i, e.value, I, w, y),
      needsDemo: Y && e.value !== v.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: ea,
      useGradient: X,
      onClick: () => G(e.value),
      onClose: s,
      setIsHovering: ee
    }))
  }), es = (0, a.jsx)(h.default, {
    buttons: v.ApplicationStreamFPSButtons.map(e => U({
      type: e,
      selected: e.value === I,
      needsPremium: !(0, p.default)(i, r, e.value, w, y),
      needsDemo: Y && e.value === v.ApplicationStreamFPS.FPS_60,
      analyticsLocation: ea,
      useGradient: X,
      onClick: () => k(e.value),
      onClose: s,
      setIsHovering: ee
    }))
  }), ei = [{
    value: v.ApplicationStreamPresets.PRESET_VIDEO,
    label: O.default.Messages.STREAM_PRESET_VIDEO
  }, ...V ? [] : [{
    value: v.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: O.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: v.ApplicationStreamPresets.PRESET_CUSTOM,
    label: O.default.Messages.STREAM_PRESET_CUSTOM
  }], er = i === v.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A.default, {
      children: (0, a.jsx)(c.FormItem, {
        title: O.default.Messages.STREAM_RESOLUTION,
        titleClassName: j.formItemTitleSlim,
        className: D.documentModeGroup,
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: O.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: I
          })
        })
      })
    }), q ? (0, a.jsx)(R.default, {
      message: O.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: s,
      openStreamUpsellModal: b
    }) : null]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(A.default, {
      children: [(0, a.jsx)(c.FormItem, {
        title: O.default.Messages.STREAM_RESOLUTION,
        className: D.settingsGroup,
        titleClassName: j.formItemTitleSlim,
        children: en
      }), (0, a.jsx)(c.FormItem, {
        title: O.default.Messages.SCREENSHARE_FRAME_RATE,
        className: D.settingsGroup,
        titleClassName: j.formItemTitleSlim,
        children: es
      })]
    }), q ? (0, a.jsx)(R.default, {
      onClose: s,
      openStreamUpsellModal: b,
      glow: $ && X
    }) : null, Y ? (0, a.jsx)(T.default, {
      selectedGuildId: t,
      selectedChannelId: l,
      glow: $,
      playIntroTransition: !Q.hqStreamingUnlockAnimationPlayed,
      onUnlocked: et
    }) : null]
  });
  return (0, a.jsx)(f.default, {
    ...ea,
    children: (0, a.jsx)(c.FormItem, {
      title: O.default.Messages.STREAM_QUALITY,
      titleClassName: j.formItemTitle,
      className: j.modalContent,
      children: (0, a.jsxs)("div", {
        className: D.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: i,
          className: P.marginTop8,
          options: ei,
          onChange: e => F(e)
        }), er]
      })
    })
  })
}