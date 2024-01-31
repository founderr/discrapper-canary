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
  _ = l("480862"),
  g = l("686298"),
  p = l("49111"),
  I = l("782340"),
  x = l("770420"),
  v = l("986916"),
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
    className: v.toolTipTextContainer,
    children: [(0, n.jsx)(E.default, {
      className: s(v.premiumIcon, v.premiumIconColor)
    }), (0, n.jsx)(o.Text, {
      className: v.upsellText,
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
    tooltipClassName: v.tooltip,
    spacing: 12,
    "aria-label": I.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, n.jsx)(T, {}),
    children: (0, n.jsx)(C.default, {
      align: C.default.Align.CENTER,
      children: (0, n.jsx)(o.Text, {
        variant: "text-xs/bold",
        className: v.selectorNitroText,
        children: m
      })
    })
  }), l = () => R({
    analyticsLocation: u,
    onClose: c
  })) : (t = (0, n.jsx)(o.Text, {
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
    captureDeviceSelected: O
  } = e, j = (0, u.useStateFromStores)([m.default], () => {
    let e = m.default.getCurrentUser();
    return i(null != e, "StreamSettings: user cannot be undefined"), e
  }), D = h.default.canStreamQuality(h.StreamQuality.MID, j), {
    location: P
  } = (0, c.useAnalyticsContext)(), b = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), G = !D && !b, y = O ? g.GoLiveDeviceResolutionButtons : g.ApplicationStreamResolutionButtons, U = {
    ...P,
    section: p.AnalyticsSections.STREAM_SETTINGS
  }, V = (0, n.jsx)(S.default, {
    buttons: y.map(e => L({
      type: e,
      selected: e.value === a,
      needsPremium: !(0, N.default)(l, e.value, s, j, M),
      analyticsLocation: U,
      onClick: () => r(e.value),
      onClose: t
    }))
  }), H = (0, n.jsx)(S.default, {
    buttons: g.ApplicationStreamFPSButtons.map(e => L({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, N.default)(l, a, e.value, j, M),
      analyticsLocation: U,
      onClick: () => E(e.value),
      onClose: t
    }))
  }), w = [{
    value: g.ApplicationStreamPresets.PRESET_VIDEO,
    label: I.default.Messages.STREAM_PRESET_VIDEO
  }, ...O ? [] : [{
    value: g.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: I.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: g.ApplicationStreamPresets.PRESET_CUSTOM,
    label: I.default.Messages.STREAM_PRESET_CUSTOM
  }], F = l === g.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C.default, {
      children: (0, n.jsx)(o.FormItem, {
        title: I.default.Messages.STREAM_RESOLUTION,
        titleClassName: x.formItemTitleSlim,
        className: v.documentModeGroup,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: I.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: s
          })
        })
      })
    }), G ? (0, n.jsx)(_.default, {
      message: I.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: R
    }) : null]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(C.default, {
      children: [(0, n.jsx)(o.FormItem, {
        title: I.default.Messages.STREAM_RESOLUTION,
        className: v.settingsGroup,
        titleClassName: x.formItemTitleSlim,
        children: V
      }), (0, n.jsx)(o.FormItem, {
        title: I.default.Messages.SCREENSHARE_FRAME_RATE,
        className: v.settingsGroup,
        titleClassName: x.formItemTitleSlim,
        children: H
      })]
    }), G ? (0, n.jsx)(_.default, {
      onClose: t,
      openStreamUpsellModal: R
    }) : null]
  });
  return (0, n.jsx)(d.default, {
    ...U,
    children: (0, n.jsx)(o.FormItem, {
      title: I.default.Messages.STREAM_QUALITY,
      titleClassName: x.formItemTitle,
      className: x.modalContent,
      children: (0, n.jsxs)("div", {
        className: v.qualitySettingsContainer,
        children: [(0, n.jsx)(o.SingleSelect, {
          value: l,
          className: A.marginTop8,
          options: w,
          onChange: e => T(e)
        }), F]
      })
    })
  })
}