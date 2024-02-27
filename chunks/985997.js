"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  r = l.n(s),
  i = l("627445"),
  u = l.n(i),
  o = l("446674"),
  d = l("77078"),
  c = l("901582"),
  f = l("997289"),
  m = l("56947"),
  S = l("688771"),
  C = l("697218"),
  E = l("140848"),
  h = l("145131"),
  N = l("216422"),
  g = l("719923"),
  _ = l("773356"),
  I = l("480862"),
  p = l("686298"),
  x = l("49111"),
  v = l("782340"),
  A = l("961523"),
  R = l("547834"),
  T = l("890957");

function L(e) {
  let {
    analyticsLocation: t,
    onClose: a
  } = e;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await l.el("754534").then(l.bind(l, "754534"));
    return l => (0, n.jsx)(e, {
      ...l,
      onCloseParent: a,
      analyticsSource: t
    })
  })
}

function M() {
  return (0, n.jsxs)("div", {
    className: R.toolTipTextContainer,
    children: [(0, n.jsx)(N.default, {
      className: r(R.premiumIcon)
    }), (0, n.jsx)(d.Text, {
      className: R.upsellText,
      variant: "text-sm/medium",
      children: v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function j(e) {
  let t, l, {
      type: a,
      selected: s,
      needsPremium: i,
      analyticsLocation: u,
      useGradient: o = !1,
      onClick: c,
      onClose: f,
      setIsHovering: m
    } = e,
    {
      value: S,
      label: C
    } = a;
  return i ? (t = (0, n.jsx)(d.TooltipContainer, {
    tooltipClassName: R.tooltip,
    spacing: 12,
    "aria-label": v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, n.jsx)(M, {}),
    children: (0, n.jsx)(h.default, {
      align: h.default.Align.CENTER,
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      children: (0, n.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: r(R.selectorNitroText, {
          [R.enhancedSelectorNitroText]: o
        }),
        children: C
      })
    })
  }), l = () => L({
    analyticsLocation: u,
    onClose: f
  })) : (t = (0, n.jsx)(d.Text, {
    variant: "text-xs/normal",
    className: s ? R.selectorTextSelected : R.selectorText,
    children: C
  }), l = () => c(S)), {
    content: t,
    className: r(s ? R.selectorButtonSelected : R.selectorButton, {
      [R.selectorButtonPremiumRequired]: i
    }),
    onClick: l
  }
}

function O(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: s,
    selectedFPS: r,
    onResolutionChange: i,
    onFPSChange: N,
    onPresetChange: M,
    targetGuildPremiumTier: O,
    captureDeviceSelected: D
  } = e, P = (0, o.useStateFromStores)([C.default], () => {
    let e = C.default.getCurrentUser();
    return u(null != e, "StreamSettings: user cannot be undefined"), e
  }), G = g.default.canStreamQuality(g.StreamQuality.MID, P), {
    location: U
  } = (0, f.useAnalyticsContext)(), b = (0, m.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), V = !G && !b, {
    enabled: w,
    variant: H
  } = S.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: V
  }), y = w && S.GradientVariants.includes(H), [k, F] = a.useState(!1), B = D ? p.GoLiveDeviceResolutionButtons : p.ApplicationStreamResolutionButtons, W = {
    ...U,
    section: x.AnalyticsSections.STREAM_SETTINGS
  }, z = (0, n.jsx)(E.default, {
    buttons: B.map(e => j({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, _.default)(l, e.value, r, P, O),
      analyticsLocation: W,
      useGradient: y,
      onClick: () => i(e.value),
      onClose: t,
      setIsHovering: F
    }))
  }), Z = (0, n.jsx)(E.default, {
    buttons: p.ApplicationStreamFPSButtons.map(e => j({
      type: e,
      selected: e.value === r,
      needsPremium: !(0, _.default)(l, s, e.value, P, O),
      analyticsLocation: W,
      useGradient: y,
      onClick: () => N(e.value),
      onClose: t,
      setIsHovering: F
    }))
  }), Y = [{
    value: p.ApplicationStreamPresets.PRESET_VIDEO,
    label: v.default.Messages.STREAM_PRESET_VIDEO
  }, ...D ? [] : [{
    value: p.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: v.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: p.ApplicationStreamPresets.PRESET_CUSTOM,
    label: v.default.Messages.STREAM_PRESET_CUSTOM
  }], K = l === p.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(h.default, {
      children: (0, n.jsx)(d.FormItem, {
        title: v.default.Messages.STREAM_RESOLUTION,
        titleClassName: A.formItemTitleSlim,
        className: R.documentModeGroup,
        children: (0, n.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: v.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: r
          })
        })
      })
    }), V ? (0, n.jsx)(I.default, {
      message: v.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: L
    }) : null]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(h.default, {
      children: [(0, n.jsx)(d.FormItem, {
        title: v.default.Messages.STREAM_RESOLUTION,
        className: R.settingsGroup,
        titleClassName: A.formItemTitleSlim,
        children: z
      }), (0, n.jsx)(d.FormItem, {
        title: v.default.Messages.SCREENSHARE_FRAME_RATE,
        className: R.settingsGroup,
        titleClassName: A.formItemTitleSlim,
        children: Z
      })]
    }), V ? (0, n.jsx)(I.default, {
      onClose: t,
      openStreamUpsellModal: L,
      glow: k && y
    }) : null]
  });
  return (0, n.jsx)(c.default, {
    ...W,
    children: (0, n.jsx)(d.FormItem, {
      title: v.default.Messages.STREAM_QUALITY,
      titleClassName: A.formItemTitle,
      className: A.modalContent,
      children: (0, n.jsxs)("div", {
        className: R.qualitySettingsContainer,
        children: [(0, n.jsx)(d.SingleSelect, {
          value: l,
          className: T.marginTop8,
          options: Y,
          onChange: e => M(e)
        }), K]
      })
    })
  })
}