"use strict";
n.d(t, {
  L: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(906280),
  l = n.n(a),
  u = n(186325),
  _ = n(390507),
  c = n(679400),
  d = n(580747),
  E = n(333505);
let I = r.forwardRef(function(e, t) {
  let {
    color: s,
    src: a,
    size: I = "md",
    width: T,
    height: h,
    className: S,
    initialAnimation: f,
    markers: N
  } = e, [A, m] = r.useState(null), O = r.useRef(null), R = r.useRef(null), p = r.useRef(null), g = "custom" === I ? {
    width: T,
    height: h
  } : (0, _.m)(I), C = !(0, d.Z)("lottie_hover_multiple_loop"), v = r.useContext(u.S).reducedMotion.enabled, {
    enabled: L
  } = c.Z.useExperiment({
    location: "LottieIcon web entry point"
  }), D = v || !L;
  return r.useImperativeHandle(t, () => ({
    play: e => {
      if (null != p.current) {
        if (R.current = e, D) {
          let t = N[e];
          p.current.resetSegments(!0), p.current.setSegment(t.start + t.duration, t.start + t.duration), p.current.stop()
        } else p.current.setLoop(!C && e.includes("hover")), p.current.resetSegments(!0), p.current.playSegments([N[e].start, N[e].start + N[e].duration], !0)
      }
    },
    stop: () => {
      if (null == p.current || D) return
    },
    stopIfPlaying: e => {
      null != p.current && !D && R.current === e && (p.current.resetSegments(!0), p.current.setSegment(N[e].start, N[e].start), p.current.stop())
    }
  }), [D, C, N]), r.useEffect(() => {
    null == A && a().then(e => m(e.default))
  }, [A, a]), r.useEffect(() => (n.e("23755").then(n.t.bind(n, 500923, 23)).then(e => {
    var t;
    let n, {
        default: i
      } = e,
      r = null !== (t = R.current) && void 0 !== t ? t : f;
    if (null != r && null != N[r]) {
      let e = N[r];
      n = [e.start, e.start + e.duration]
    }
    null != O.current && (p.current = i.loadAnimation({
      container: O.current,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      animationData: l()(A),
      initialSegment: n
    }))
  }), () => {
    var e;
    null === (e = p.current) || void 0 === e || e.destroy()
  }), [A, f, N]), (0, i.jsx)("div", {
    style: {
      "--__lottieIconColor": null != s && "string" == typeof s ? s : null == s ? void 0 : s.css,
      display: "flex",
      ...g
    },
    className: o()(E.lottieIcon, S),
    ref: O
  })
})