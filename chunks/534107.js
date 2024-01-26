"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("101997"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("669491"),
  o = n("77078"),
  u = n("731898"),
  d = n("554743"),
  c = n("284679"),
  f = n("293246"),
  m = n("247883"),
  h = n("525864"),
  p = n("899090");
let g = h.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
  E = 6,
  v = 2,
  C = [0, 0, 0, 0, 0];

function I(e) {
  let {
    showAll: t,
    currentTime: n,
    duration: l,
    numSegments: a
  } = e;
  return t ? a : Math.max(0, Math.round(n / l * a))
}

function x(e) {
  var t, n, l, a, s;
  let {
    context: i,
    devicePixelRatio: r,
    canvasHeight: o,
    segmentValue: u,
    segmentIndex: d,
    constrainMin: c
  } = e, f = c ? (24 - v) * u + v : 24 * u;
  if (0 !== f) t = i, n = 6 * d * r, l = (o / 2 - f / 2) * r, a = f * r, s = 1 * r, t.moveTo(n, l + s), t.lineTo(n, l + a - s), t.arc(n + s, l + a - s, s, Math.PI, 0, !0), t.lineTo(n + 2 * s, l + s), t.arc(n + s, l + s, s, 0, Math.PI, !0), t.closePath()
}

function _(e, t, n) {
  let [l, s] = a.useState(e), [i, r] = a.useState(e);
  return a.useLayoutEffect(() => {
    s(i), r(e)
  }, [e, t, n]), [l, i]
}

function S(e, t, n, l) {
  if (null == l) return [t, !1];
  let a = Math.min((n - l) / 200, 1);
  if (1 === a) return [t, !1];
  let s = (0, c.interpolateColor)(e, t, a);
  return [s, !0]
}

function N(e) {
  let {
    className: t,
    waveform: n,
    currentTime: s,
    duration: c,
    played: v,
    playing: N,
    onDrag: M,
    onDragStart: T,
    onDragEnd: A
  } = e, {
    ref: j,
    width: y
  } = (0, u.default)(), R = a.useMemo(() => {
    var e;
    let t;
    return Math.floor(((t = (e = c) <= g ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - g) / (45 - g) * 254 + 40) + 4) / E) * E - 4
  }, [c]), L = a.useRef(), O = function(e, t) {
    let n = a.useMemo(() => (function(e) {
        let t;
        if (null == e) return;
        try {
          t = window.atob(e)
        } catch (e) {
          return
        }
        let n = [];
        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / h.WAVEFORM_WAVE_MAX_VALUE;
        return n
      })(e), [e]),
      l = a.useMemo(() => (function(e) {
        if (null != e) return Math.floor((e + 4) / 6)
      })(t), [t]),
      s = a.useMemo(() => {
        var e;
        return null !== (e = function(e, t) {
          if (null != e && null != t) {
            if (e.length < t) {
              let n = t - e.length;
              return e.concat(Array(n).fill(0))
            }
            return (0, f.default)(e, t)
          }
        }(null != n ? n : [], l)) && void 0 !== e ? e : C
      }, [n, l]);
    return s
  }(n, y), b = a.useRef(v), D = a.useRef(N), P = a.useRef(null), w = window.devicePixelRatio, {
    lastBackgroundFillColor: U,
    backgroundFillColor: k,
    lastActiveFillColor: V,
    activeFillColor: F,
    lastInactiveFillColor: B,
    inactiveFillColor: H
  } = function(e, t) {
    let n = (0, o.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
      l = (0, o.useToken)(r.default.colors.INTERACTIVE_NORMAL).hex(),
      a = (0, o.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
      s = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_430).hex(),
      i = (0, o.useToken)(r.default.unsafe_rawColors.WHITE_500).hex(),
      u = t ? s : n,
      [d, c] = _(u, t, e),
      f = t ? i : e ? a : l,
      [m, h] = _(f, t, e),
      p = e ? u : l,
      [g, E] = _(p, t, e);
    return {
      lastBackgroundFillColor: d,
      backgroundFillColor: c,
      lastActiveFillColor: m,
      activeFillColor: h,
      lastInactiveFillColor: g,
      inactiveFillColor: E
    }
  }(v, N);
  a.useEffect(() => {
    let e = I({
      showAll: !v,
      currentTime: s,
      duration: c,
      numSegments: O.length
    });
    L.current = O.map((t, n) => new m.default(n < e ? t : 0))
  }, [O]), a.useEffect(() => {
    let e = L.current;
    if (null == e) return;
    let t = I({
      showAll: !v,
      currentTime: s,
      duration: c,
      numSegments: O.length
    });
    for (let n = 0; n < e.length; n++) {
      let l = e[n];
      if (n < t) {
        l.animateTo(O[n]);
        continue
      }
      l.reset()
    }
  }, [O, s, c, v]), a.useEffect(() => {
    let e = null;
    return e = requestAnimationFrame(function t(n) {
      let l = j.current,
        a = null == l ? void 0 : l.getContext("2d"),
        s = L.current;
      if (null == l || null == a || null == s) return;
      let i = !1;
      (b.current !== v || D.current !== N) && (b.current = v, D.current = N, P.current = n), null != P.current && n > P.current + 200 && (P.current = null);
      let r = l.height / w;
      a.clearRect(0, 0, l.width, l.height), a.beginPath();
      let [o, u] = S(U, k, n, P.current);
      i = i || u, a.fillStyle = o;
      for (let e = 0; e < O.length; e++) x({
        context: a,
        devicePixelRatio: w,
        canvasHeight: r,
        segmentValue: O[e],
        segmentIndex: e,
        constrainMin: !0
      });
      a.fill();
      let [d, c] = S(B, H, n, P.current);
      i = i || c;
      let [f, m] = S(V, F, n, P.current);
      i = i || m;
      for (let e = 0; e < s.length; e++) {
        let t = s[e],
          n = Math.max(t.getCurrentValue(), O[e] - .1);
        a.beginPath(), a.fillStyle = t.isReset ? d : f, x({
          context: a,
          devicePixelRatio: w,
          canvasHeight: r,
          segmentValue: n,
          segmentIndex: e,
          constrainMin: !t.isReset
        }), i = i || t.isAnimating(), a.fill()
      }
      i && (e = requestAnimationFrame(t))
    }), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [j, w, O, y, s, c, v, N, U, k, V, F, B, H]);
  let [, G] = (0, d.default)({
    ref: j,
    onDrag: M,
    onDragStart: T,
    onDragEnd: A
  });
  return (0, l.jsx)("canvas", {
    onMouseDown: G,
    className: i(p.canvas, t),
    style: {
      width: R
    },
    ref: j,
    height: 32 * window.devicePixelRatio,
    width: (null != y ? y : 0) * window.devicePixelRatio
  })
}