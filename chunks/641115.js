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
  N = l("193878"),
  g = l("594174"),
  C = l("746124"),
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
  O = l("223318"),
  j = l("138684"),
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
    className: j.toolTipTextContainer,
    children: [(0, a.jsx)(A.default, {
      className: i()(j.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: j.upsellText,
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
        [j.selectorText]: !s,
        [j.enhancedSelectorNitroText]: !s,
        [j.selectorTextSelected]: s
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: j.tooltip,
    spacing: 12,
    "aria-label": M.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(b, {}),
    children: (0, a.jsx)(h.default, {
      align: h.default.Align.CENTER,
      onMouseEnter: () => S(!0),
      onMouseLeave: () => S(!1),
      children: (0, a.jsx)(c.Text, {
        variant: "text-xs/bold",
        className: i()(j.selectorNitroText, {
          [j.enhancedSelectorNitroText]: d
        }),
        children: _
      })
    })
  }), l = () => P({
    analyticsLocation: o,
    onClose: m
  })) : (t = (0, a.jsx)(c.Text, {
    variant: "text-xs/normal",
    className: s ? j.selectorTextSelected : j.selectorText,
    children: _
  }), l = () => f(E)), {
    content: t,
    className: i()({
      [j.selectorButton]: !s,
      [j.selectorButtonPerkDemo]: u,
      [j.selectorButtonPremiumRequired]: r,
      [j.selectorButtonSelected]: s && !u,
      [j.selectorButtonSelectedPerkDemo]: s && u
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
  } = e, F = (0, d.useStateFromStores)([g.default], () => {
    let e = g.default.getCurrentUser();
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
    available: B
  } = (0, _.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), H = !y && !w && !B, {
    enabled: W,
    variant: K
  } = N.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: H
  }), z = W && N.GradientVariants.includes(K), [Y, Q] = n.useState(!1), Z = k ? R.GoLiveDeviceResolutionButtons : R.ApplicationStreamResolutionButtons, J = {
    ...V,
    section: v.AnalyticsSections.STREAM_SETTINGS
  }, q = (0, a.jsx)(C.default, {
    buttons: Z.map(e => G({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, I.default)(l, e.value, i, F, U),
      needsDemo: B && e.value !== R.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: J,
      useGradient: z,
      onClick: () => r(e.value),
      onClose: t,
      setIsHovering: Q
    }))
  }), X = (0, a.jsx)(C.default, {
    buttons: R.ApplicationStreamFPSButtons.map(e => G({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, I.default)(l, s, e.value, F, U),
      needsDemo: B && e.value === R.ApplicationStreamFPS.FPS_60,
      analyticsLocation: J,
      useGradient: z,
      onClick: () => A(e.value),
      onClose: t,
      setIsHovering: Q
    }))
  }), $ = [{
    value: R.ApplicationStreamPresets.PRESET_VIDEO,
    label: M.default.Messages.STREAM_PRESET_VIDEO
  }, ...k ? [] : [{
    value: R.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: M.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: R.ApplicationStreamPresets.PRESET_CUSTOM,
    label: M.default.Messages.STREAM_PRESET_CUSTOM
  }], ee = l === R.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h.default, {
      children: (0, a.jsx)(c.FormItem, {
        title: M.default.Messages.STREAM_RESOLUTION,
        titleClassName: O.formItemTitleSlim,
        className: j.documentModeGroup,
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
        className: j.settingsGroup,
        titleClassName: O.formItemTitleSlim,
        children: q
      }), (0, a.jsx)(c.FormItem, {
        title: M.default.Messages.SCREENSHARE_FRAME_RATE,
        className: j.settingsGroup,
        titleClassName: O.formItemTitleSlim,
        children: X
      })]
    }), H ? (0, a.jsx)(T.default, {
      onClose: t,
      openStreamUpsellModal: P,
      glow: Y && z
    }) : null, B ? (0, a.jsx)(p.default, {
      glow: Y
    }) : null]
  });
  return (0, a.jsx)(f.default, {
    ...J,
    children: (0, a.jsx)(c.FormItem, {
      title: M.default.Messages.STREAM_QUALITY,
      titleClassName: O.formItemTitle,
      className: O.modalContent,
      children: (0, a.jsxs)("div", {
        className: j.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: l,
          className: D.marginTop8,
          options: $,
          onChange: e => b(e)
        }), ee]
      })
    })
  })
}