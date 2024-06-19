s.d(n, {
  Z: function() {
    return C
  }
}), s(47120);
var a = s(735250),
  t = s(470079),
  o = s(442837),
  l = s(481060),
  i = s(2052),
  c = s(594174),
  r = s(74538),
  d = s(716161),
  u = s(634041),
  _ = s(647177),
  E = s(672339),
  O = s(898531),
  g = s(636188),
  m = s(678916),
  I = s(981631),
  p = s(869783),
  x = s(689938),
  A = s(18188);

function C(e) {
  let {
    onLearnMore: n,
    selectedBackgroundOption: C,
    onSelectBackgroundOption: N,
    currentDeviceId: M,
    smallerBackgroundOptions: R
  } = e, k = (0, o.e7)([c.default], () => c.default.getCurrentUser()), [D, j] = t.useState(null), T = (0, O.Z)(), h = r.ZP.canUseCustomBackgrounds(k), f = (0, o.cj)([u.Z], () => h ? u.Z.videoFilterAssets : {}), U = t.useMemo(() => Object.values(f).filter(e => e.type === m.xV.BACKGROUND), [f]), B = (0, i.O)();
  t.useEffect(() => {
    T ? (0, E.FU)(C, M, {
      track: !1
    }).catch(() => N(null)) : null != C && N(null)
  }, [M]);
  let v = e => {
    N(e), (0, E.FU)(e, M, {
      location: B.location
    }).then(() => j(null)).catch(() => {
      j(x.Z.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, E.FU)(null, M, {
        location: B.location
      })
    })
  };
  return T ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Heading, {
      className: A.spacingTop24,
      variant: "eyebrow",
      color: "header-secondary",
      children: x.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
    }), null != D ? (0, a.jsx)(l.FormErrorBlock, {
      className: A.videoBackgroundError,
      children: D
    }) : null, (0, a.jsx)(g.Z, {
      canUseCustomBackgrounds: h,
      customBackgroundOptions: U,
      selectedOption: C,
      onSelectOption: v,
      onUpsellClick: () => {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("87200")]).then(s.bind(s, 592163));
          return s => (0, a.jsx)(e, {
            ...s,
            onLearnMore: n,
            analyticsSource: {
              ...B.location,
              object: I.qAy.BUTTON_CTA
            }
          })
        })
      },
      onAddBackgroundImage: function(e, n) {
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async a => {
          try {
            let a = await (0, d.Ff)(e, m.xV.BACKGROUND);
            v(a), (0, _.g5)(a, n.type === p.m.MP4, s), j(null)
          } catch (e) {
            j(e.message)
          }
          a()
        })
      },
      smallerOptions: R
    })]
  }) : null
}