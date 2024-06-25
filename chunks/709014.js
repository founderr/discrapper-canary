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
    className: f,
    initialAnimation: S,
    markers: A
  } = e, [N, m] = r.useState(null), O = r.useRef(null), p = r.useRef(null), R = r.useRef(null), g = "custom" === I ? {
    width: T,
    height: h
  } : (0, _.m)(I), C = !(0, d.Z)("lottie_hover_multiple_loop"), v = r.useContext(u.S).reducedMotion.enabled, {
    enabled: L
  } = c.Z.useExperiment({
    location: "LottieIcon web entry point"
  }), D = v || !L;
  return r.useImperativeHandle(t, () => ({
    play: e => {
      if (null != R.current) {
        if (p.current = e, D) {
          let t = A[e];
          R.current.resetSegments(!0), R.current.setSegment(t.start + t.duration, t.start + t.duration), R.current.stop()
        } else R.current.setLoop(!C && e.includes("hover")), R.current.resetSegments(!0), R.current.playSegments([A[e].start, A[e].start + A[e].duration], !0)
      }
    },
    stop: () => {
      if (null == R.current || D) return
    },
    stopIfPlaying: e => {
      null != R.current && !D && p.current === e && (R.current.resetSegments(!0), R.current.setSegment(A[e].start, A[e].start), R.current.stop())
    }
  }), [D, C, A]), r.useEffect(() => {
    null == N && a().then(e => m(e.default))
  }, [N, a]), r.useEffect(() => (n.e("23755").then(n.t.bind(n, 500923, 23)).then(e => {
    var t;
    let n, {
        default: i
      } = e,
      r = null !== (t = p.current) && void 0 !== t ? t : S;
    if (null != r && null != A[r]) {
      let e = A[r];
      n = [e.start, e.start + e.duration]
    }
    null != O.current && (R.current = i.loadAnimation({
      container: O.current,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      animationData: l()(N),
      initialSegment: n
    }))
  }), () => {
    var e;
    null === (e = R.current) || void 0 === e || e.destroy()
  }), [N, S, A]), (0, i.jsx)("div", {
    style: {
      "--__lottieIconColor": null != s && "string" == typeof s ? s : null == s ? void 0 : s.css,
      display: "flex",
      ...g
    },
    className: o()(E.lottieIcon, f),
    ref: O
  })
})