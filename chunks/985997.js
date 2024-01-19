"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("222007");
var n = l("37983");
l("884691");
var s = l("414456"),
  a = l.n(s),
  r = l("627445"),
  i = l.n(r),
  u = l("446674"),
  o = l("77078"),
  d = l("901582"),
  c = l("997289"),
  f = l("56947"),
  m = l("506317"),
  S = l("697218"),
  h = l("140848"),
  C = l("145131"),
  E = l("216422"),
  p = l("719923"),
  N = l("773356"),
  g = l("480862"),
  _ = l("686298"),
  x = l("49111"),
  I = l("646718"),
  v = l("782340"),
  A = l("770420"),
  R = l("986916"),
  T = l("926622");

function L(e) {
  let {
    analyticsLocation: t,
    onClose: s
  } = e;
  (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await l.el("754534").then(l.bind(l, "754534"));
    return l => (0, n.jsx)(e, {
      ...l,
      onCloseParent: s,
      analyticsSource: t
    })
  })
}

function j() {
  return (0, n.jsxs)("div", {
    className: R.toolTipTextContainer,
    children: [(0, n.jsx)(E.default, {
      className: a(R.premiumIcon, R.premiumIconColor)
    }), (0, n.jsx)(o.Text, {
      className: R.upsellText,
      variant: "text-sm/medium",
      children: v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function M(e) {
  let t, l, {
      type: s,
      selected: r,
      needsPremium: i,
      analyticsLocation: u,
      onClick: d,
      onClose: c
    } = e,
    {
      value: f,
      label: m
    } = s;
  return i ? (t = (0, n.jsx)(o.TooltipContainer, {
    tooltipClassName: R.tooltip,
    spacing: 12,
    "aria-label": v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, n.jsx)(j, {}),
    children: (0, n.jsx)(C.default, {
      align: C.default.Align.CENTER,
      children: (0, n.jsx)(o.Text, {
        variant: "text-xs/bold",
        className: R.selectorNitroText,
        children: m
      })
    })
  }), l = () => L({
    analyticsLocation: u,
    onClose: c
  })) : (t = (0, n.jsx)(o.Text, {
    variant: "text-xs/normal",
    className: r ? R.selectorTextSelected : R.selectorText,
    children: m
  }), l = () => d(f)), {
    content: t,
    className: a(r ? R.selectorButtonSelected : R.selectorButton, {
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
    selectedFPS: a,
    onResolutionChange: r,
    onFPSChange: E,
    onPresetChange: j,
    targetGuildPremiumTier: O,
    captureDeviceSelected: D
  } = e, b = (0, u.useStateFromStores)([S.default], () => {
    let e = S.default.getCurrentUser();
    return i(null != e, "StreamSettings: user cannot be undefined"), e
  }), P = p.default.isPremiumExactly(b, I.PremiumTypes.TIER_0), y = p.default.isPremium(b), {
    location: k
  } = (0, c.useAnalyticsContext)(), {
    enabled: G
  } = m.NitroBasicHDStreamingUpsellExperiment.useExperiment({
    location: "a87c74_1"
  }, {
    autoTrackExposure: P,
    disable: !P
  }), H = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), U = (G || !y) && !H, F = D ? _.GoLiveDeviceResolutionButtons : _.ApplicationStreamResolutionButtons, B = {
    ...k,
    section: x.AnalyticsSections.STREAM_SETTINGS
  }, V = (0, n.jsx)(h.default, {
    buttons: F.map(e => M({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, N.default)(l, e.value, a, b, O),
      analyticsLocation: B,
      onClick: () => r(e.value),
      onClose: t
    }))
  }), w = (0, n.jsx)(h.default, {
    buttons: _.ApplicationStreamFPSButtons.map(e => M({
      type: e,
      selected: e.value === a,
      needsPremium: !(0, N.default)(l, s, e.value, b, O),
      analyticsLocation: B,
      onClick: () => E(e.value),
      onClose: t
    }))
  }), W = [{
    value: _.ApplicationStreamPresets.PRESET_VIDEO,
    label: v.default.Messages.STREAM_PRESET_VIDEO
  }, ...D ? [] : [{
    value: _.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: v.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: _.ApplicationStreamPresets.PRESET_CUSTOM,
    label: v.default.Messages.STREAM_PRESET_CUSTOM
  }], z = l === _.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C.default, {
      children: (0, n.jsx)(o.FormItem, {
        title: v.default.Messages.STREAM_RESOLUTION,
        titleClassName: A.formItemTitleSlim,
        className: R.documentModeGroup,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: v.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: a
          })
        })
      })
    }), U ? (0, n.jsx)(g.default, {
      message: v.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: L
    }) : null]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(C.default, {
      children: [(0, n.jsx)(o.FormItem, {
        title: v.default.Messages.STREAM_RESOLUTION,
        className: R.settingsGroup,
        titleClassName: A.formItemTitleSlim,
        children: V
      }), (0, n.jsx)(o.FormItem, {
        title: v.default.Messages.SCREENSHARE_FRAME_RATE,
        className: R.settingsGroup,
        titleClassName: A.formItemTitleSlim,
        children: w
      })]
    }), U ? (0, n.jsx)(g.default, {
      onClose: t,
      openStreamUpsellModal: L
    }) : null]
  });
  return (0, n.jsx)(d.default, {
    ...B,
    children: (0, n.jsx)(o.FormItem, {
      title: v.default.Messages.STREAM_QUALITY,
      titleClassName: A.formItemTitle,
      className: A.modalContent,
      children: (0, n.jsxs)("div", {
        className: R.qualitySettingsContainer,
        children: [(0, n.jsx)(o.SingleSelect, {
          value: l,
          className: T.marginTop8,
          options: W,
          onChange: e => j(e)
        }), z]
      })
    })
  })
}