"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("442837"),
  o = a("481060"),
  i = a("2052"),
  c = a("594174"),
  r = a("74538"),
  d = a("716161"),
  u = a("634041"),
  _ = a("647177"),
  O = a("672339"),
  E = a("898531"),
  p = a("636188"),
  A = a("678916"),
  g = a("981631"),
  f = a("869783"),
  m = a("689938"),
  M = a("429280");

function I(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: I,
    onSelectBackgroundOption: v,
    currentDeviceId: h,
    smallerBackgroundOptions: x
  } = e, C = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()), [N, R] = n.useState(null), T = (0, E.default)(), k = r.default.canUseCustomBackgrounds(C), D = (0, l.useStateFromStoresObject)([u.default], () => k ? u.default.videoFilterAssets : {}), B = n.useMemo(() => Object.values(D).filter(e => e.type === A.VideoFilterType.BACKGROUND), [D]), U = (0, i.useAnalyticsContext)();
  n.useEffect(() => {
    T ? (0, O.applyBackgroundOptionPreview)(I, h, {
      track: !1
    }).catch(() => v(null)) : null != I && v(null)
  }, [h]);
  let j = e => {
    v(e), (0, O.applyBackgroundOptionPreview)(e, h, {
      location: U.location
    }).then(() => R(null)).catch(() => {
      R(m.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, O.applyBackgroundOptionPreview)(null, h, {
        location: U.location
      })
    })
  };
  return T ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.Heading, {
      className: M.spacingTop24,
      variant: "eyebrow",
      color: "header-secondary",
      children: m.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
    }), null != N ? (0, s.jsx)(o.FormErrorBlock, {
      className: M.videoBackgroundError,
      children: N
    }) : null, (0, s.jsx)(p.default, {
      canUseCustomBackgrounds: k,
      customBackgroundOptions: B,
      selectedOption: I,
      onSelectOption: j,
      onUpsellClick: () => {
        (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("87200")]).then(a.bind(a, "592163"));
          return a => (0, s.jsx)(e, {
            ...a,
            onLearnMore: t,
            analyticsSource: {
              ...U.location,
              object: g.AnalyticsObjects.BUTTON_CTA
            }
          })
        })
      },
      onAddBackgroundImage: function(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async s => {
          try {
            let s = await (0, d.uploadVideoFilterAsset)(e, A.VideoFilterType.BACKGROUND);
            j(s), (0, _.trackBackgroundOptionAdded)(s, t.type === f.FileTypes.MP4, a), R(null)
          } catch (e) {
            R(e.message)
          }
          s()
        })
      },
      smallerOptions: x
    })]
  }) : null
}