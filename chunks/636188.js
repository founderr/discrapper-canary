"use strict";
a.r(t), a.d(t, {
  default: function() {
    return z
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  o = a.n(l),
  i = a("442837"),
  c = a("481060"),
  r = a("239091"),
  d = a("2052"),
  u = a("100527"),
  _ = a("906732"),
  O = a("142497"),
  E = a("810788"),
  p = a("648575"),
  A = a("54264"),
  g = a("466111"),
  f = a("783014"),
  m = a("897353"),
  M = a("810090"),
  I = a("626135"),
  v = a("768581"),
  h = a("709054"),
  x = a("647177"),
  C = a("63985"),
  N = a("678916"),
  R = a("981631"),
  T = a("190378"),
  k = a("486324"),
  D = a("474936"),
  B = a("689938"),
  U = a("169880");

function j(e) {
  let {
    icon: t,
    onClick: a,
    text: n,
    children: l,
    className: i,
    selected: r = !1,
    disabled: d = !1,
    onMouseLeave: u,
    onBlur: _
  } = e;
  return (0, s.jsxs)(c.Clickable, {
    className: o()(i, U.backgroundOption, {
      [U.backgroundOptionSelected]: r,
      [U.backgroundOptionDisabled]: d
    }),
    onMouseLeave: u,
    onBlur: _,
    onClick: d ? void 0 : a,
    children: [r ? (0, s.jsx)("div", {
      className: U.backgroundOptionRing
    }) : null, (0, s.jsxs)("div", {
      className: U.backgroundOptionInner,
      children: [l, (0, s.jsxs)("div", {
        className: U.backgroundOptionContent,
        children: [(0, s.jsx)(t, {
          className: o()(U.backgroundIconOptionIcon),
          width: 18,
          height: 18
        }), (0, s.jsx)(c.Text, {
          className: U.backgroundOptionText,
          color: "none",
          variant: "text-sm/normal",
          children: n
        })]
      })]
    })]
  })
}

function V(e) {
  let {
    option: t,
    source: a,
    isAnimated: l
  } = e, [o, i] = n.useState(!1);
  if (n.useEffect(() => {
      new Image().src = a
    }, [a]), !l || null == t) return (0, s.jsx)("div", {
    className: U.backgroundImageOption,
    style: {
      backgroundImage: "url(".concat(a, ")")
    }
  });
  let c = (0, v.getVideoFilterAssetURL)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: 720,
    canAnimate: !1
  });
  return (0, s.jsx)("img", {
    onMouseMove: () => i(!0),
    onMouseLeave: () => i(!1),
    className: U.backgroundImageOption,
    src: o ? a : c,
    alt: t.id
  })
}

function P(e) {
  let {
    option: t,
    source: n,
    selected: l = !1,
    onSelectOption: p,
    isAnimatedImage: A,
    isVideo: g,
    hotspotLocation: f,
    ...v
  } = e, h = (0, d.useAnalyticsContext)(), {
    analyticsLocations: C
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_IMAGE_OPTION), N = (0, i.useStateFromStores)([E.default], () => null != f && E.default.hasHotspot(f)), T = g ? (0, s.jsx)(M.default, {
    className: U.backgroundImageOption,
    src: n,
    loop: !0,
    playOnHover: !0,
    muted: !0
  }) : (0, s.jsx)(V, {
    isAnimated: A,
    option: (0, x.isCustomBackgroundOption)(t) ? t : void 0,
    source: n
  });

  function k() {
    null != f && N && (O.hideHotspot(f), I.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: D.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: h.location,
      location_stack: C
    }))
  }
  return (0, s.jsxs)(c.Clickable, {
    ...v,
    className: o()(U.backgroundOption, {
      [U.backgroundOptionSelected]: l
    }),
    onClick: () => p(t),
    onContextMenu: e => (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await a.e("99414").then(a.bind(a, "187658"));
      return a => (0, s.jsx)(e, {
        ...a,
        backgroundOption: t,
        optionIsInUse: l
      })
    }),
    children: [l ? (0, s.jsx)("div", {
      className: U.backgroundOptionRing
    }) : null, (0, s.jsx)("div", {
      onFocus: k,
      onMouseEnter: k,
      className: U.backgroundOptionInner,
      children: T
    }), g || A ? (0, s.jsx)("div", {
      className: U.playIcon,
      children: (0, s.jsx)(m.default, {
        width: 12,
        height: 12
      })
    }) : null, N && (0, s.jsx)(c.TextBadge, {
      text: B.default.Messages.NEW,
      className: U.newTextBadge
    })]
  })
}

function S() {
  return (0, s.jsxs)("div", {
    className: U.customBackgroundTooltip,
    children: [(0, s.jsx)(g.default, {
      className: U.customBackgroundTooltipIcon
    }), (0, s.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP
    })]
  })
}

function L(e) {
  let {
    onClick: t,
    tooltipText: a,
    disabled: n = !1
  } = e, l = (0, i.useStateFromStores)([E.default], () => E.default.hasHotspot(T.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function o() {
    O.hideHotspot(T.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let r = l ? B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : a;
  return (0, s.jsxs)(c.TooltipContainer, {
    text: r,
    className: U.newBackgroundTooltipContainer,
    children: [(0, s.jsxs)(j, {
      className: U.__invalid_backgroundOptionBlurred,
      disabled: n,
      icon: A.default,
      onClick: t,
      onMouseLeave: o,
      onBlur: o,
      text: (0, s.jsxs)("div", {
        className: U.backgroundCustomInlineUpsell,
        children: [(0, s.jsx)(g.default, {
          className: U.backgroundCustomInlineUpsellIcon
        }), (0, s.jsx)("div", {
          className: U.overflowEllipsis,
          children: B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM
        })]
      }),
      children: [(0, s.jsx)("div", {
        className: U.backgroundCustomInlineUpsellBackground
      }), (0, s.jsx)("div", {
        className: U.backgroundCustomInlineUpsellBackgroundDarkener
      })]
    }), l && (0, s.jsx)(c.TextBadge, {
      text: B.default.Messages.NEW,
      className: U.newTextBadge
    })]
  })
}

function b(e) {
  let {
    onClick: t
  } = e, a = (0, d.useAnalyticsContext)(), {
    analyticsLocations: l
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return n.useEffect(() => {
    I.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: D.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,
      location: a.location,
      location_stack: l
    })
  }, []), (0, s.jsx)(L, {
    onClick: t,
    tooltipText: B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
  })
}

function y(e) {
  let {
    onAddBackgroundImage: t,
    disabled: n
  } = e, l = (0, c.useModalContext)(), o = n ? B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({
    maxCustomBackgrounds: 25
  }) : B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM, i = [{
    name: B.default.Messages.IMAGES,
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }];
  return (0, s.jsx)(L, {
    disabled: n,
    onClick: function() {
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("20653")]).then(a.bind(a, "28130"));
        return a => (0, s.jsx)(e, {
          maxFileSizeBytes: N.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,
          onComplete: t,
          uploadType: k.UploadTypes.VIDEO_BACKGROUND,
          filters: i,
          modalTitle: B.default.Messages.UPLOAD_BACKGROUND,
          imageSpecifications: B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
          uploadOptionTitle: B.default.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
          showUpsellHeader: !0,
          ...a
        })
      }, {
        contextKey: l
      })
    },
    tooltipText: o
  })
}

function z(e) {
  let {
    canUseCustomBackgrounds: t,
    customBackgroundOptions: a,
    selectedOption: l,
    onSelectOption: o,
    onUpsellClick: i,
    onAddBackgroundImage: r,
    smallerOptions: d
  } = e, O = n.useMemo(() => a.sort((e, t) => null == e.last_used || null == t.last_used ? h.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [a]), E = O.length >= 25, {
    analyticsLocations: A
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_OPTIONS), g = Object.values((0, C.default)()).sort((e, t) => N.DEFAULT_VIDEO_BACKGROUND_SORT[e.id] - N.DEFAULT_VIDEO_BACKGROUND_SORT[t.id]);
  return (0, s.jsx)(_.AnalyticsLocationProvider, {
    value: A,
    children: (0, s.jsxs)("div", {
      className: d ? U.backgroundOptionsSmall : U.backgroundOptionsLarge,
      children: [(0, s.jsx)(j, {
        selected: null == l,
        icon: f.default,
        onClick: () => o(null),
        text: B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
      }), (0, s.jsx)(j, {
        className: U.__invalid_backgroundOptionBlurred,
        selected: l === N.BLUR_BACKGROUND_OPTION,
        icon: p.default,
        onClick: () => o(N.BLUR_BACKGROUND_OPTION),
        text: B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
        children: (0, s.jsx)("div", {
          className: U.backgroundOptionBlurBackground
        })
      }), t ? (0, s.jsx)(y, {
        onAddBackgroundImage: r,
        disabled: E
      }) : (0, s.jsx)(b, {
        onClick: i
      }), O.map(e => (0, s.jsx)(c.Tooltip, {
        text: (0, s.jsx)(S, {}),
        "aria-label": B.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
        children: t => {
          let a = (0, v.getVideoFilterAssetURL)({
            userId: e.user_id,
            assetId: e.id,
            assetHash: e.asset,
            size: 720
          });
          return null == a ? null : (0, n.createElement)(P, {
            ...t,
            key: e.id,
            option: e,
            source: a,
            selected: (0, x.isCustomBackgroundOption)(l) && l.id === e.id,
            onSelectOption: o,
            isVideo: (0, v.isVideoAssetHash)(e.asset),
            isAnimatedImage: (0, v.isAnimatedIconHash)(e.asset)
          })
        }
      }, e.id)), g.map(e => {
        let t = !0 === e.isVideo;
        return (0, s.jsx)(c.Tooltip, {
          text: e.name,
          "aria-label": e.name,
          children: a => (0, n.createElement)(P, {
            ...a,
            key: e.id,
            option: e.id,
            source: e.source,
            selected: l === e.id,
            onSelectOption: o,
            isVideo: t,
            isAnimatedImage: !1,
            hotspotLocation: e.hotspotLocation
          })
        }, e.id)
      })]
    })
  })
}