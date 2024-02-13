"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
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
  E = l("697218"),
  C = l("140848"),
  h = l("145131"),
  g = l("216422"),
  _ = l("719923"),
  N = l("773356"),
  p = l("480862"),
  I = l("686298"),
  x = l("49111"),
  A = l("782340"),
  R = l("770420"),
  v = l("986916"),
  T = l("926622");

function L(e) {
  let {
    analyticsLocation: t,
    onClose: n
  } = e;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await l.el("754534").then(l.bind(l, "754534"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: n,
      analyticsSource: t
    })
  })
}

function M() {
  return (0, a.jsxs)("div", {
    className: v.toolTipTextContainer,
    children: [(0, a.jsx)(g.default, {
      className: r(v.premiumIcon)
    }), (0, a.jsx)(d.Text, {
      className: v.upsellText,
      variant: "text-sm/medium",
      children: A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function O(e) {
  let t, l, {
      type: n,
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
      label: E
    } = n;
  return i ? (t = (0, a.jsx)(d.TooltipContainer, {
    tooltipClassName: v.tooltip,
    spacing: 12,
    "aria-label": A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(M, {}),
    children: (0, a.jsx)(h.default, {
      align: h.default.Align.CENTER,
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      children: (0, a.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: r(v.selectorNitroText, {
          [v.enhancedSelectorNitroText]: o
        }),
        children: E
      })
    })
  }), l = () => L({
    analyticsLocation: u,
    onClose: f
  })) : (t = (0, a.jsx)(d.Text, {
    variant: "text-xs/normal",
    className: s ? v.selectorTextSelected : v.selectorText,
    children: E
  }), l = () => c(S)), {
    content: t,
    className: r(s ? v.selectorButtonSelected : v.selectorButton, {
      [v.selectorButtonPremiumRequired]: i
    }),
    onClick: l
  }
}

function j(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: s,
    selectedFPS: r,
    onResolutionChange: i,
    onFPSChange: g,
    onPresetChange: M,
    targetGuildPremiumTier: j,
    captureDeviceSelected: D
  } = e, P = (0, o.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return u(null != e, "StreamSettings: user cannot be undefined"), e
  }), b = _.default.canStreamQuality(_.StreamQuality.MID, P), {
    location: G
  } = (0, f.useAnalyticsContext)(), U = (0, m.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), k = !b && !U, {
    enabled: V,
    variant: w
  } = S.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: k
  }), y = V && S.GradientVariants.includes(w), [F, B] = n.useState(!1), H = D ? I.GoLiveDeviceResolutionButtons : I.ApplicationStreamResolutionButtons, W = {
    ...G,
    section: x.AnalyticsSections.STREAM_SETTINGS
  }, z = (0, a.jsx)(C.default, {
    buttons: H.map(e => O({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, N.default)(l, e.value, r, P, j),
      analyticsLocation: W,
      useGradient: y,
      onClick: () => i(e.value),
      onClose: t,
      setIsHovering: B
    }))
  }), K = (0, a.jsx)(C.default, {
    buttons: I.ApplicationStreamFPSButtons.map(e => O({
      type: e,
      selected: e.value === r,
      needsPremium: !(0, N.default)(l, s, e.value, P, j),
      analyticsLocation: W,
      useGradient: y,
      onClick: () => g(e.value),
      onClose: t,
      setIsHovering: B
    }))
  }), Y = [{
    value: I.ApplicationStreamPresets.PRESET_VIDEO,
    label: A.default.Messages.STREAM_PRESET_VIDEO
  }, ...D ? [] : [{
    value: I.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: A.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: I.ApplicationStreamPresets.PRESET_CUSTOM,
    label: A.default.Messages.STREAM_PRESET_CUSTOM
  }], Z = l === I.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h.default, {
      children: (0, a.jsx)(d.FormItem, {
        title: A.default.Messages.STREAM_RESOLUTION,
        titleClassName: R.formItemTitleSlim,
        className: v.documentModeGroup,
        children: (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: A.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: r
          })
        })
      })
    }), k ? (0, a.jsx)(p.default, {
      message: A.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: L
    }) : null]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(h.default, {
      children: [(0, a.jsx)(d.FormItem, {
        title: A.default.Messages.STREAM_RESOLUTION,
        className: v.settingsGroup,
        titleClassName: R.formItemTitleSlim,
        children: z
      }), (0, a.jsx)(d.FormItem, {
        title: A.default.Messages.SCREENSHARE_FRAME_RATE,
        className: v.settingsGroup,
        titleClassName: R.formItemTitleSlim,
        children: K
      })]
    }), k ? (0, a.jsx)(p.default, {
      onClose: t,
      openStreamUpsellModal: L,
      glow: F && y
    }) : null]
  });
  return (0, a.jsx)(c.default, {
    ...W,
    children: (0, a.jsx)(d.FormItem, {
      title: A.default.Messages.STREAM_QUALITY,
      titleClassName: R.formItemTitle,
      className: R.modalContent,
      children: (0, a.jsxs)("div", {
        className: v.qualitySettingsContainer,
        children: [(0, a.jsx)(d.SingleSelect, {
          value: l,
          className: T.marginTop8,
          options: Y,
          onChange: e => M(e)
        }), Z]
      })
    })
  })
}