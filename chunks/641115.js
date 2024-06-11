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
  E = l("736871"),
  _ = l("351742"),
  h = l("386542"),
  C = l("594174"),
  g = l("285952"),
  N = l("466111"),
  I = l("74538"),
  p = l("451467"),
  x = l("200445"),
  A = l("122186"),
  T = l("37113"),
  R = l("981631"),
  v = l("474936"),
  L = l("689938"),
  M = l("555066"),
  O = l("182972"),
  j = l("611273");

function D(e) {
  let {
    analyticsLocation: t,
    onClose: n
  } = e;
  (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("28479")]).then(l.bind(l, "78865"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: n,
      analyticsSource: t
    })
  })
}

function P() {
  return (0, a.jsxs)("div", {
    className: O.toolTipTextContainer,
    children: [(0, a.jsx)(N.default, {
      className: i()(O.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: O.upsellText,
      variant: "text-sm/medium",
      children: L.default.Messages.UNLOCK_WITH_NITRO
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
    className: O.textContainer,
    onMouseEnter: () => S(!0),
    onMouseLeave: () => S(!1),
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/bold",
      className: i()(O.selectorText, {
        [O.enhancedSelectorNitroText]: !s
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: O.tooltip,
    spacing: 6,
    "aria-label": L.default.Messages.UNLOCK_WITH_NITRO,
    text: (0, a.jsx)(P, {}),
    children: (0, a.jsx)("div", {
      className: O.textContainer,
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
  }), l = () => D({
    analyticsLocation: o,
    onClose: m
  })) : (t = (0, a.jsx)("div", {
    className: O.textContainer,
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: O.selectorText,
      children: _
    })
  }), l = () => f(E)), {
    content: t,
    className: i()(O.selectorButton, {
      [O.selectorButtonSelected]: s,
      [O.perksDemo]: u,
      [O.premiumUpsell]: r
    }),
    onClick: l
  }
}

function U(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: l,
    onClose: s,
    selectedPreset: i,
    selectedResolution: r,
    selectedFPS: N,
    onResolutionChange: P,
    onFPSChange: U,
    onPresetChange: b,
    targetGuildPremiumTier: y,
    captureDeviceSelected: F
  } = e, k = (0, d.useStateFromStores)([C.default], () => {
    let e = C.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), w = I.default.canStreamQuality(I.StreamQuality.MID, k), {
    location: H
  } = (0, m.useAnalyticsContext)(), V = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), B = (0, I.isPremium)(k, v.PremiumTypes.TIER_1), {
    inPerksDemosExperiment: W
  } = E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: B
  });
  _.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !W || B
  });
  let {
    available: K,
    hqStreamingState: z
  } = (0, h.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), Y = !w && !V && !K, [Q, q] = n.useState(!1), [Z, J] = n.useState(!1);
  n.useEffect(() => {
    let e = 0;
    return K && z.hqStreamingUnlockAnimationPlayed && (e = setTimeout(() => {
      J(!0)
    }, 750)), () => {
      clearTimeout(e)
    }
  }, [K, z.hqStreamingUnlockAnimationPlayed]);
  let X = n.useCallback(() => {
      P(T.ApplicationStreamResolutions.RESOLUTION_1080), U(T.ApplicationStreamFPS.FPS_60)
    }, [P, U]),
    $ = F ? T.GoLiveDeviceResolutionButtons : T.ApplicationStreamResolutionButtons,
    ee = {
      ...H,
      section: R.AnalyticsSections.STREAM_SETTINGS
    },
    et = (0, a.jsx)(c.ButtonGroup, {
      buttons: $.map(e => G({
        type: e,
        selected: e.value === r,
        needsPremium: !(0, p.default)(i, e.value, N, k, y),
        needsDemo: K && e.value !== T.ApplicationStreamResolutions.RESOLUTION_720,
        analyticsLocation: ee,
        useGradient: !0,
        onClick: () => P(e.value),
        onClose: s,
        setIsHovering: q
      }))
    }),
    el = (0, a.jsx)(c.ButtonGroup, {
      buttons: T.ApplicationStreamFPSButtons.map(e => G({
        type: e,
        selected: e.value === N,
        needsPremium: !(0, p.default)(i, r, e.value, k, y),
        needsDemo: K && e.value === T.ApplicationStreamFPS.FPS_60,
        analyticsLocation: ee,
        useGradient: !0,
        onClick: () => U(e.value),
        onClose: s,
        setIsHovering: q
      }))
    }),
    ea = [{
      value: T.ApplicationStreamPresets.PRESET_VIDEO,
      label: L.default.Messages.STREAM_PRESET_VIDEO
    }, ...F ? [] : [{
      value: T.ApplicationStreamPresets.PRESET_DOCUMENTS,
      label: L.default.Messages.STREAM_PRESET_DOCUMENTS
    }], {
      value: T.ApplicationStreamPresets.PRESET_CUSTOM,
      label: L.default.Messages.STREAM_PRESET_CUSTOM
    }],
    en = i === T.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(g.default, {
        children: (0, a.jsx)(c.FormItem, {
          title: L.default.Messages.STREAM_RESOLUTION,
          titleClassName: M.formItemTitleSlim,
          className: O.documentModeGroup,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            children: L.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
              fps: N
            })
          })
        })
      }), Y ? (0, a.jsx)(A.default, {
        message: L.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
        onClose: s,
        openStreamUpsellModal: D
      }) : null]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(g.default, {
        style: {
          "--custom-transition-duration": K && !Z ? "".concat(750, "ms") : 0
        },
        children: [(0, a.jsx)(c.FormItem, {
          title: L.default.Messages.STREAM_RESOLUTION,
          className: O.settingsGroup,
          titleClassName: M.formItemTitleSlim,
          children: et
        }), (0, a.jsx)(c.FormItem, {
          title: L.default.Messages.SCREENSHARE_FRAME_RATE,
          className: O.settingsGroup,
          titleClassName: M.formItemTitleSlim,
          children: el
        })]
      }), Y ? (0, a.jsx)(A.default, {
        onClose: s,
        openStreamUpsellModal: D,
        glow: Q
      }) : null, K ? (0, a.jsx)(x.default, {
        selectedGuildId: t,
        selectedChannelId: l,
        glow: Q,
        playIntroTransition: !z.hqStreamingUnlockAnimationPlayed,
        onUnlocked: X
      }) : null]
    });
  return (0, a.jsx)(f.default, {
    ...ee,
    children: (0, a.jsx)(c.FormItem, {
      title: L.default.Messages.STREAM_QUALITY,
      titleClassName: M.formItemTitle,
      className: M.modalContent,
      children: (0, a.jsxs)("div", {
        className: O.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: i,
          className: j.marginTop8,
          options: ea,
          onChange: e => b(e)
        }), en]
      })
    })
  })
}