"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("222007");
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  r = l("627445"),
  i = l.n(r),
  u = l("446674"),
  o = l("77078"),
  d = l("901582"),
  c = l("997289"),
  f = l("56947"),
  m = l("697218"),
  S = l("140848"),
  C = l("145131"),
  E = l("216422"),
  h = l("719923"),
  N = l("773356"),
  g = l("480862"),
  _ = l("686298"),
  p = l("49111"),
  I = l("782340"),
  v = l("770420"),
  x = l("986916"),
  A = l("926622");

function R(e) {
  let {
    analyticsLocation: t,
    onClose: a
  } = e;
  (0, o.openModalLazy)(async () => {
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

function T() {
  return (0, n.jsxs)("div", {
    className: x.toolTipTextContainer,
    children: [(0, n.jsx)(E.default, {
      className: s(x.premiumIcon, x.premiumIconColor)
    }), (0, n.jsx)(o.Text, {
      className: x.upsellText,
      variant: "text-sm/medium",
      children: I.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function L(e) {
  let t, l, {
      type: a,
      selected: r,
      needsPremium: i,
      analyticsLocation: u,
      onClick: d,
      onClose: c
    } = e,
    {
      value: f,
      label: m
    } = a;
  return i ? (t = (0, n.jsx)(o.TooltipContainer, {
    tooltipClassName: x.tooltip,
    spacing: 12,
    "aria-label": I.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, n.jsx)(T, {}),
    children: (0, n.jsx)(C.default, {
      align: C.default.Align.CENTER,
      children: (0, n.jsx)(o.Text, {
        variant: "text-xs/bold",
        className: x.selectorNitroText,
        children: m
      })
    })
  }), l = () => R({
    analyticsLocation: u,
    onClose: c
  })) : (t = (0, n.jsx)(o.Text, {
    variant: "text-xs/normal",
    className: r ? x.selectorTextSelected : x.selectorText,
    children: m
  }), l = () => d(f)), {
    content: t,
    className: s(r ? x.selectorButtonSelected : x.selectorButton, {
      [x.selectorButtonPremiumRequired]: i
    }),
    onClick: l
  }
}

function M(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: a,
    selectedFPS: s,
    onResolutionChange: r,
    onFPSChange: E,
    onPresetChange: T,
    targetGuildPremiumTier: M,
    captureDeviceSelected: j
  } = e, O = (0, u.useStateFromStores)([m.default], () => {
    let e = m.default.getCurrentUser();
    return i(null != e, "StreamSettings: user cannot be undefined"), e
  }), D = h.default.canStreamQuality(h.StreamQuality.MID, O), {
    location: P
  } = (0, c.useAnalyticsContext)(), b = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), G = !D && !b, y = j ? _.GoLiveDeviceResolutionButtons : _.ApplicationStreamResolutionButtons, U = {
    ...P,
    section: p.AnalyticsSections.STREAM_SETTINGS
  }, w = (0, n.jsx)(S.default, {
    buttons: y.map(e => L({
      type: e,
      selected: e.value === a,
      needsPremium: !(0, N.default)(l, e.value, s, O, M),
      analyticsLocation: U,
      onClick: () => r(e.value),
      onClose: t
    }))
  }), V = (0, n.jsx)(S.default, {
    buttons: _.ApplicationStreamFPSButtons.map(e => L({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, N.default)(l, a, e.value, O, M),
      analyticsLocation: U,
      onClick: () => E(e.value),
      onClose: t
    }))
  }), H = [{
    value: _.ApplicationStreamPresets.PRESET_VIDEO,
    label: I.default.Messages.STREAM_PRESET_VIDEO
  }, ...j ? [] : [{
    value: _.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: I.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: _.ApplicationStreamPresets.PRESET_CUSTOM,
    label: I.default.Messages.STREAM_PRESET_CUSTOM
  }], F = l === _.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C.default, {
      children: (0, n.jsx)(o.FormItem, {
        title: I.default.Messages.STREAM_RESOLUTION,
        titleClassName: v.formItemTitleSlim,
        className: x.documentModeGroup,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: I.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: s
          })
        })
      })
    }), G ? (0, n.jsx)(g.default, {
      message: I.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: R
    }) : null]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(C.default, {
      children: [(0, n.jsx)(o.FormItem, {
        title: I.default.Messages.STREAM_RESOLUTION,
        className: x.settingsGroup,
        titleClassName: v.formItemTitleSlim,
        children: w
      }), (0, n.jsx)(o.FormItem, {
        title: I.default.Messages.SCREENSHARE_FRAME_RATE,
        className: x.settingsGroup,
        titleClassName: v.formItemTitleSlim,
        children: V
      })]
    }), G ? (0, n.jsx)(g.default, {
      onClose: t,
      openStreamUpsellModal: R
    }) : null]
  });
  return (0, n.jsx)(d.default, {
    ...U,
    children: (0, n.jsx)(o.FormItem, {
      title: I.default.Messages.STREAM_QUALITY,
      titleClassName: v.formItemTitle,
      className: v.modalContent,
      children: (0, n.jsxs)("div", {
        className: x.qualitySettingsContainer,
        children: [(0, n.jsx)(o.SingleSelect, {
          value: l,
          className: A.marginTop8,
          options: H,
          onChange: e => T(e)
        }), F]
      })
    })
  })
}