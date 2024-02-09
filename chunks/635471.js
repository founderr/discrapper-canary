"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("206230"),
  u = n("471671"),
  d = n("76047"),
  c = n("859498"),
  f = n("687682"),
  p = n("525808"),
  m = n("465523"),
  h = n("417675"),
  E = n("188645"),
  S = n("260742");
let g = e => {
    let {
      bannerAdjustment: t = 0,
      maxLoops: n,
      resetOnHover: a = !1,
      isHovering: r = !1,
      useOpacityOnHover: o = !0,
      autoPlay: u = !0,
      restartMethod: m,
      urlQueryString: E,
      profileEffectConfig: g,
      noBorderRadius: C = !1,
      introDelay: T = d.ENTRY_DELAY
    } = e, v = i.useRef(null), [I, _] = i.useState([]);
    (0, h.default)(g);
    let [y, A] = i.useState(0), [N, x] = i.useState(0), {
      accessibilityLabel: O
    } = g, [R, M] = i.useState(-T), {
      stop: L,
      reset: P,
      ticking: b
    } = (0, f.default)(e => {
      M(t => t + e)
    });
    i.useEffect(() => {
      M(-T), _((0, p.sortEffectLayers)(g.effects))
    }, [g]), i.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      I.forEach(n => {
        let l = n.start + n.duration;
        l > e && (e = l), n.loop && n.start < t && (t = n.start)
      }), A(t), x(e)
    }, [x, I]);
    let [j, U] = i.useState(!1);
    return i.useEffect(() => {
      !0 !== u && !r && (L(), M(0)), !r && j && b.current && (L(), M(0)), a && r && !b.current && (P(), g.animationType === c.AnimationTypes.PERSISTENT ? M(m === c.RestartMethod.FromStart ? 0 : y) : M(0))
    }, [r, j, y, a, L, P, b, g.animationType, u, m]), (0, l.jsx)("div", {
      ref: v,
      className: s(S.profileEffects, {
        [S.hovered]: r && o
      }),
      children: (0, l.jsx)("div", {
        className: C ? S.innerNoRadius : S.inner,
        children: I.map((e, i) => {
          var a, s, r, o, f, p, m, h;
          if (!b.current) {
            if (g.animationType === c.AnimationTypes.PERSISTENT && null != g.staticFrameSrc && 0 === i && !0 === u) {
              let {
                staticFrameSrc: n
              } = g;
              return (0, l.jsx)("img", {
                className: S.effect,
                style: {
                  top: null !== (f = null === (r = e.position) || void 0 === r ? void 0 : r.y) && void 0 !== f ? f : 0 - t,
                  left: null !== (p = null === (o = e.position) || void 0 === o ? void 0 : o.x) && void 0 !== p ? p : 0
                },
                src: n,
                alt: O
              }, e.src + i)
            }
            return (0, l.jsx)("img", {
              src: d.RESET,
              alt: O
            }, e.src + i)
          }
          if (R < e.start || !e.loop && R > e.duration + e.start) return (0, l.jsx)("img", {
            src: d.RESET,
            alt: O
          }, e.src + i);
          if (g.animationType === c.AnimationTypes.PERSISTENT && !j && null != n && R >= N && U(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
            let t = e.duration + e.loopDelay,
              a = Math.floor((R - e.start) / t);
            if (R - e.start - a * t > e.duration) return g.animationType === c.AnimationTypes.INTERMITTENT && !j && null != n && a >= n && U(!0), (0, l.jsx)("img", {
              src: d.RESET,
              alt: O
            }, e.src + i)
          }
          return (0, l.jsx)("img", {
            src: null != E ? "".concat(e.src, "?query=").concat(E) : e.src,
            className: S.effect,
            style: {
              top: (null !== (m = null === (a = e.position) || void 0 === a ? void 0 : a.y) && void 0 !== m ? m : 0) - t,
              left: null !== (h = null === (s = e.position) || void 0 === s ? void 0 : s.x) && void 0 !== h ? h : 0
            },
            alt: O
          }, e.src + i)
        })
      })
    })
  },
  C = e => {
    let {
      config: t,
      useThumbnail: n,
      bannerAdjustment: i = 0,
      noBorderRadius: a,
      isHovering: r = !1,
      useOpacityOnHover: o = !0
    } = e, {
      reducedMotionSrc: u,
      thumbnailPreviewSrc: d,
      accessibilityLabel: c
    } = t;
    return (0, l.jsx)("div", {
      className: s(S.profileEffects, {
        [S.hovered]: r && o
      }),
      children: (0, l.jsx)("div", {
        className: a ? S.innerNoRadius : S.inner,
        children: (0, l.jsx)("img", {
          src: n && !r ? d : u,
          className: S.effect,
          style: {
            top: 0 - i
          },
          alt: c
        })
      })
    })
  };
var T = e => {
  let t = (0, r.useStateFromStores)([u.default], () => u.default.isFocused()),
    n = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion),
    [a, s] = i.useState(!1),
    {
      preset: d
    } = (0, E.default)(e.profileEffectId, () => s(!1));
  return null != d && (t || e.shopPreview || d.config.animationType !== c.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && d.config.animationType === c.AnimationTypes.PERSISTENT || n || !1 === e.autoPlay && !1 === e.isHovering ? (0, l.jsx)(C, {
    useThumbnail: e.useThumbnail,
    config: d.config,
    bannerAdjustment: e.bannerAdjustment,
    noBorderRadius: e.noBorderRadius,
    isHovering: e.isHovering,
    useOpacityOnHover: e.useOpacityOnHover
  }) : a ? (0, l.jsx)(g, {
    profileEffectConfig: d.config,
    ...e
  }) : (0, l.jsx)(m.default, {
    profileEffectConfig: d.config,
    onReady: () => {
      s(!0)
    }
  }) : null
}