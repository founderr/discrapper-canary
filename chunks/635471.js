"use strict";
r.r(t), r.d(t, {
  default: function() {
    return I
  }
}), r("222007");
var n = r("37983"),
  u = r("884691"),
  o = r("414456"),
  l = r.n(o),
  i = r("446674"),
  s = r("206230"),
  a = r("471671"),
  c = r("76047"),
  f = r("859498"),
  d = r("687682"),
  E = r("525808"),
  T = r("465523"),
  m = r("417675"),
  p = r("188645"),
  R = r("484304");
let A = e => {
    let {
      bannerAdjustment: t = 0,
      maxLoops: r,
      resetOnHover: o = !1,
      isHovering: i = !1,
      useOpacityOnHover: s = !0,
      autoPlay: a = !0,
      restartMethod: T,
      urlQueryString: p,
      profileEffectConfig: A,
      noBorderRadius: v = !1,
      introDelay: I = c.ENTRY_DELAY
    } = e, h = u.useRef(null), [_, S] = u.useState([]);
    (0, m.default)(A);
    let [N, F] = u.useState(0), [C, g] = u.useState(0), {
      accessibilityLabel: O
    } = A, [y, P] = u.useState(-I), {
      stop: L,
      reset: D,
      ticking: x
    } = (0, d.default)(e => {
      P(t => t + e)
    });
    u.useEffect(() => {
      P(-I), S((0, E.sortEffectLayers)(A.effects))
    }, [A]), u.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      _.forEach(r => {
        let n = r.start + r.duration;
        n > e && (e = n), r.loop && r.start < t && (t = r.start)
      }), F(t), g(e)
    }, [g, _]);
    let [M, B] = u.useState(!1);
    return u.useEffect(() => {
      !0 !== a && !i && (L(), P(0)), !i && M && x.current && (L(), P(0)), o && i && !x.current && (D(), A.animationType === f.AnimationTypes.PERSISTENT ? P(T === f.RestartMethod.FromStart ? 0 : N) : P(0))
    }, [i, M, N, o, L, D, x, A.animationType, a, T]), (0, n.jsx)("div", {
      ref: h,
      className: l(R.profileEffects, {
        [R.hovered]: i && s
      }),
      children: (0, n.jsx)("div", {
        className: v ? R.innerNoRadius : R.inner,
        children: _.map((e, u) => {
          var o, l, i, s, d, E, T, m;
          if (!x.current) {
            if (A.animationType === f.AnimationTypes.PERSISTENT && null != A.staticFrameSrc && 0 === u && !0 === a) {
              let {
                staticFrameSrc: r
              } = A;
              return (0, n.jsx)("img", {
                className: R.effect,
                style: {
                  top: null !== (d = null === (i = e.position) || void 0 === i ? void 0 : i.y) && void 0 !== d ? d : 0 - t,
                  left: null !== (E = null === (s = e.position) || void 0 === s ? void 0 : s.x) && void 0 !== E ? E : 0
                },
                src: r,
                alt: O
              }, e.src + u)
            }
            return (0, n.jsx)("img", {
              src: c.RESET,
              alt: O
            }, e.src + u)
          }
          if (y < e.start || !e.loop && y > e.duration + e.start) return (0, n.jsx)("img", {
            src: c.RESET,
            alt: O
          }, e.src + u);
          if (A.animationType === f.AnimationTypes.PERSISTENT && !M && null != r && y >= C && B(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
            let t = e.duration + e.loopDelay,
              o = Math.floor((y - e.start) / t);
            if (y - e.start - o * t > e.duration) return A.animationType === f.AnimationTypes.INTERMITTENT && !M && null != r && o >= r && B(!0), (0, n.jsx)("img", {
              src: c.RESET,
              alt: O
            }, e.src + u)
          }
          return (0, n.jsx)("img", {
            src: null != p ? "".concat(e.src, "?query=").concat(p) : e.src,
            className: R.effect,
            style: {
              top: (null !== (T = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== T ? T : 0) - t,
              left: null !== (m = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== m ? m : 0
            },
            alt: O
          }, e.src + u)
        })
      })
    })
  },
  v = e => {
    let {
      config: t,
      useThumbnail: r,
      bannerAdjustment: u = 0,
      noBorderRadius: o,
      isHovering: i = !1,
      useOpacityOnHover: s = !0
    } = e, {
      reducedMotionSrc: a,
      thumbnailPreviewSrc: c,
      accessibilityLabel: f
    } = t;
    return (0, n.jsx)("div", {
      className: l(R.profileEffects, {
        [R.hovered]: i && s
      }),
      children: (0, n.jsx)("div", {
        className: o ? R.innerNoRadius : R.inner,
        children: (0, n.jsx)("img", {
          src: r && !i ? c : a,
          className: R.effect,
          style: {
            top: 0 - u
          },
          alt: f
        })
      })
    })
  };
var I = e => {
  let t = (0, i.useStateFromStores)([a.default], () => a.default.isFocused()),
    r = (0, i.useStateFromStores)([s.default], () => s.default.useReducedMotion),
    [o, l] = u.useState(!1),
    {
      preset: c
    } = (0, p.default)(e.profileEffectId, () => l(!1));
  return null != c && (t || e.shopPreview || c.config.animationType !== f.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && c.config.animationType === f.AnimationTypes.PERSISTENT || r || !1 === e.autoPlay && !1 === e.isHovering ? (0, n.jsx)(v, {
    useThumbnail: e.useThumbnail,
    config: c.config,
    bannerAdjustment: e.bannerAdjustment,
    noBorderRadius: e.noBorderRadius,
    isHovering: e.isHovering,
    useOpacityOnHover: e.useOpacityOnHover
  }) : o ? (0, n.jsx)(A, {
    profileEffectConfig: c.config,
    ...e
  }) : (0, n.jsx)(T.default, {
    profileEffectConfig: c.config,
    onReady: () => {
      l(!0)
    }
  }) : null
}