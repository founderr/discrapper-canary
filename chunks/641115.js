"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("120356"),
  i = l.n(n),
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
  C = l("193878"),
  g = l("594174"),
  N = l("746124"),
  h = l("285952"),
  x = l("466111"),
  I = l("74538"),
  A = l("451467"),
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
    onClose: s
  } = e;
  (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e("28479").then(l.bind(l, "78865"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: s,
      analyticsSource: t
    })
  })
}

function G() {
  return (0, a.jsxs)("div", {
    className: O.toolTipTextContainer,
    children: [(0, a.jsx)(x.default, {
      className: i()(O.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: O.upsellText,
      variant: "text-sm/medium",
      children: M.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function b(e) {
  let t, l, {
      type: s,
      selected: n,
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
    } = s;
  return u ? (t = (0, a.jsx)("div", {
    onMouseEnter: () => S(!0),
    onMouseLeave: () => S(!1),
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/bold",
      className: i()({
        [O.selectorText]: !n,
        [O.enhancedSelectorNitroText]: !n,
        [O.selectorTextSelected]: n
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: O.tooltip,
    spacing: 12,
    "aria-label": M.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(G, {}),
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
    className: n ? O.selectorTextSelected : O.selectorText,
    children: _
  }), l = () => f(E)), {
    content: t,
    className: i()({
      [O.selectorButton]: !n,
      [O.selectorButtonPerkDemo]: u,
      [O.selectorButtonPremiumRequired]: r,
      [O.selectorButtonSelected]: n && !u,
      [O.selectorButtonSelectedPerkDemo]: n && u
    }),
    onClick: l
  }
}

function U(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: n,
    selectedFPS: i,
    onResolutionChange: r,
    onFPSChange: x,
    onPresetChange: G,
    targetGuildPremiumTier: U,
    captureDeviceSelected: F
  } = e, k = (0, d.useStateFromStores)([g.default], () => {
    let e = g.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), y = I.default.canStreamQuality(I.StreamQuality.MID, k), {
    location: w
  } = (0, m.useAnalyticsContext)(), B = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  });
  E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: (0, I.isPremium)(k, L.PremiumTypes.TIER_1)
  });
  let {
    available: V
  } = (0, _.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), H = !y && !B && !V, {
    enabled: W,
    variant: z
  } = C.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: H
  }), K = W && C.GradientVariants.includes(z), [Y, Q] = s.useState(!1), Z = F ? R.GoLiveDeviceResolutionButtons : R.ApplicationStreamResolutionButtons, J = {
    ...w,
    section: v.AnalyticsSections.STREAM_SETTINGS
  }, q = (0, a.jsx)(N.default, {
    buttons: Z.map(e => b({
      type: e,
      selected: e.value === n,
      needsPremium: !(0, A.default)(l, e.value, i, k, U),
      needsDemo: V && e.value !== R.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: J,
      useGradient: K,
      onClick: () => r(e.value),
      onClose: t,
      setIsHovering: Q
    }))
  }), X = (0, a.jsx)(N.default, {
    buttons: R.ApplicationStreamFPSButtons.map(e => b({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, A.default)(l, n, e.value, k, U),
      needsDemo: V && e.value === R.ApplicationStreamFPS.FPS_60,
      analyticsLocation: J,
      useGradient: K,
      onClick: () => x(e.value),
      onClose: t,
      setIsHovering: Q
    }))
  }), $ = [{
    value: R.ApplicationStreamPresets.PRESET_VIDEO,
    label: M.default.Messages.STREAM_PRESET_VIDEO
  }, ...F ? [] : [{
    value: R.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: M.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: R.ApplicationStreamPresets.PRESET_CUSTOM,
    label: M.default.Messages.STREAM_PRESET_CUSTOM
  }], ee = l === R.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
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
    }), H ? (0, a.jsx)(T.default, {
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
        children: q
      }), (0, a.jsx)(c.FormItem, {
        title: M.default.Messages.SCREENSHARE_FRAME_RATE,
        className: O.settingsGroup,
        titleClassName: j.formItemTitleSlim,
        children: X
      })]
    }), H ? (0, a.jsx)(T.default, {
      onClose: t,
      openStreamUpsellModal: P,
      glow: Y && K
    }) : null, V ? (0, a.jsx)(p.default, {
      glow: Y
    }) : null]
  });
  return (0, a.jsx)(f.default, {
    ...J,
    children: (0, a.jsx)(c.FormItem, {
      title: M.default.Messages.STREAM_QUALITY,
      titleClassName: j.formItemTitle,
      className: j.modalContent,
      children: (0, a.jsxs)("div", {
        className: O.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: l,
          className: D.marginTop8,
          options: $,
          onChange: e => G(e)
        }), ee]
      })
    })
  })
}