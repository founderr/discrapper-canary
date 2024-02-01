"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("222007");
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  r = l("627445"),
  i = l.n(r),
  u = l("446674"),
  o = l("77078"),
  d = l("901582"),
  c = l("997289"),
  f = l("56947"),
  m = l("697218"),
  S = l("140848"),
  E = l("145131"),
  C = l("216422"),
  h = l("719923"),
  g = l("773356"),
  _ = l("480862"),
  p = l("686298"),
  N = l("49111"),
  I = l("782340"),
  x = l("770420"),
  v = l("986916"),
  A = l("926622");

function R(e) {
  let {
    analyticsLocation: t,
    onClose: n
  } = e;
  (0, o.openModalLazy)(async () => {
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

function T() {
  return (0, a.jsxs)("div", {
    className: v.toolTipTextContainer,
    children: [(0, a.jsx)(C.default, {
      className: s(v.premiumIcon, v.premiumIconColor)
    }), (0, a.jsx)(o.Text, {
      className: v.upsellText,
      variant: "text-sm/medium",
      children: I.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function L(e) {
  let t, l, {
      type: n,
      selected: r,
      needsPremium: i,
      analyticsLocation: u,
      onClick: d,
      onClose: c
    } = e,
    {
      value: f,
      label: m
    } = n;
  return i ? (t = (0, a.jsx)(o.TooltipContainer, {
    tooltipClassName: v.tooltip,
    spacing: 12,
    "aria-label": I.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(T, {}),
    children: (0, a.jsx)(E.default, {
      align: E.default.Align.CENTER,
      children: (0, a.jsx)(o.Text, {
        variant: "text-xs/bold",
        className: v.selectorNitroText,
        children: m
      })
    })
  }), l = () => R({
    analyticsLocation: u,
    onClose: c
  })) : (t = (0, a.jsx)(o.Text, {
    variant: "text-xs/normal",
    className: r ? v.selectorTextSelected : v.selectorText,
    children: m
  }), l = () => d(f)), {
    content: t,
    className: s(r ? v.selectorButtonSelected : v.selectorButton, {
      [v.selectorButtonPremiumRequired]: i
    }),
    onClick: l
  }
}

function O(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: n,
    selectedFPS: s,
    onResolutionChange: r,
    onFPSChange: C,
    onPresetChange: T,
    targetGuildPremiumTier: O,
    captureDeviceSelected: j
  } = e, M = (0, u.useStateFromStores)([m.default], () => {
    let e = m.default.getCurrentUser();
    return i(null != e, "StreamSettings: user cannot be undefined"), e
  }), D = h.default.canStreamQuality(h.StreamQuality.MID, M), {
    location: P
  } = (0, c.useAnalyticsContext)(), b = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), G = !D && !b, U = j ? p.GoLiveDeviceResolutionButtons : p.ApplicationStreamResolutionButtons, y = {
    ...P,
    section: N.AnalyticsSections.STREAM_SETTINGS
  }, k = (0, a.jsx)(S.default, {
    buttons: U.map(e => L({
      type: e,
      selected: e.value === n,
      needsPremium: !(0, g.default)(l, e.value, s, M, O),
      analyticsLocation: y,
      onClick: () => r(e.value),
      onClose: t
    }))
  }), w = (0, a.jsx)(S.default, {
    buttons: p.ApplicationStreamFPSButtons.map(e => L({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, g.default)(l, n, e.value, M, O),
      analyticsLocation: y,
      onClick: () => C(e.value),
      onClose: t
    }))
  }), F = [{
    value: p.ApplicationStreamPresets.PRESET_VIDEO,
    label: I.default.Messages.STREAM_PRESET_VIDEO
  }, ...j ? [] : [{
    value: p.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: I.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: p.ApplicationStreamPresets.PRESET_CUSTOM,
    label: I.default.Messages.STREAM_PRESET_CUSTOM
  }], V = l === p.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.default, {
      children: (0, a.jsx)(o.FormItem, {
        title: I.default.Messages.STREAM_RESOLUTION,
        titleClassName: x.formItemTitleSlim,
        className: v.documentModeGroup,
        children: (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: I.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: s
          })
        })
      })
    }), G ? (0, a.jsx)(_.default, {
      message: I.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: R
    }) : null]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.default, {
      children: [(0, a.jsx)(o.FormItem, {
        title: I.default.Messages.STREAM_RESOLUTION,
        className: v.settingsGroup,
        titleClassName: x.formItemTitleSlim,
        children: k
      }), (0, a.jsx)(o.FormItem, {
        title: I.default.Messages.SCREENSHARE_FRAME_RATE,
        className: v.settingsGroup,
        titleClassName: x.formItemTitleSlim,
        children: w
      })]
    }), G ? (0, a.jsx)(_.default, {
      onClose: t,
      openStreamUpsellModal: R
    }) : null]
  });
  return (0, a.jsx)(d.default, {
    ...y,
    children: (0, a.jsx)(o.FormItem, {
      title: I.default.Messages.STREAM_QUALITY,
      titleClassName: x.formItemTitle,
      className: x.modalContent,
      children: (0, a.jsxs)("div", {
        className: v.qualitySettingsContainer,
        children: [(0, a.jsx)(o.SingleSelect, {
          value: l,
          className: A.marginTop8,
          options: F,
          onChange: e => T(e)
        }), V]
      })
    })
  })
}