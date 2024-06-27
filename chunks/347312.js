"use strict";
n.d(t, {
  Z: function() {
    return p
  }
}), n(642549), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(692547),
  l = n(481060),
  u = n(393238),
  _ = n(206678),
  c = n(302221),
  d = n(328187),
  E = n(607889),
  I = n(94432),
  T = n(182737);
let h = I.e3 / 1e3,
  f = 6,
  S = 2,
  A = [0, 0, 0, 0, 0];

function N(e) {
  let {
    showAll: t,
    currentTime: n,
    duration: i,
    numSegments: r
  } = e;
  return t ? r : Math.max(0, Math.round(n / i * r))
}

function m(e) {
  var t, n, i, r, s;
  let {
    context: o,
    devicePixelRatio: a,
    canvasHeight: l,
    segmentValue: u,
    segmentIndex: _,
    constrainMin: c
  } = e, d = c ? (24 - S) * u + S : 24 * u;
  if (0 !== d) t = o, n = 6 * _ * a, i = (l / 2 - d / 2) * a, r = d * a, s = 1 * a, t.moveTo(n, i + s), t.lineTo(n, i + r - s), t.arc(n + s, i + r - s, s, Math.PI, 0, !0), t.lineTo(n + 2 * s, i + s), t.arc(n + s, i + s, s, 0, Math.PI, !0), t.closePath()
}

function O(e, t, n) {
  let [i, s] = r.useState(e), [o, a] = r.useState(e);
  return r.useLayoutEffect(() => {
    s(o), a(e)
  }, [e, t, n]), [i, o]
}

function R(e, t, n, i) {
  if (null == i) return [t, !1];
  let r = Math.min((n - i) / 200, 1);
  return 1 === r ? [t, !1] : [(0, c.BM)(e, t, r), !0]
}

function p(e) {
  let {
    className: t,
    waveform: n,
    currentTime: s,
    duration: c,
    played: S,
    playing: p,
    onDrag: g,
    onDragStart: C,
    onDragEnd: v
  } = e, {
    ref: L,
    width: D
  } = (0, u.Z)(), M = r.useMemo(() => {
    var e;
    let t;
    return Math.floor(((t = (e = c) <= h ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - h) / (45 - h) * 254 + 40) + 4) / f) * f - 4
  }, [c]), P = r.useRef(), y = function(e, t) {
    let n = r.useMemo(() => (function(e) {
        let t;
        if (null == e) return;
        try {
          t = window.atob(e)
        } catch (e) {
          return
        }
        let n = [];
        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / I.Xi;
        return n
      })(e), [e]),
      i = r.useMemo(() => (function(e) {
        if (null != e) return Math.floor((e + 4) / 6)
      })(t), [t]);
    return r.useMemo(() => {
      var e;
      return null !== (e = function(e, t) {
        if (null != e && null != t) {
          if (e.length < t) {
            let n = t - e.length;
            return e.concat(Array(n).fill(0))
          }
          return (0, d.Z)(e, t)
        }
      }(null != n ? n : [], i)) && void 0 !== e ? e : A
    }, [n, i])
  }(n, D), U = r.useRef(S), b = r.useRef(p), G = r.useRef(null), w = window.devicePixelRatio, {
    lastBackgroundFillColor: B,
    backgroundFillColor: x,
    lastActiveFillColor: k,
    activeFillColor: V,
    lastInactiveFillColor: Z,
    inactiveFillColor: H
  } = function(e, t) {
    let n = (0, l.useToken)(a.Z.colors.INTERACTIVE_MUTED).hex(),
      i = (0, l.useToken)(a.Z.colors.INTERACTIVE_NORMAL).hex(),
      r = (0, l.useToken)(a.Z.colors.INTERACTIVE_ACTIVE).hex(),
      s = (0, l.useToken)(a.Z.unsafe_rawColors.BRAND_430).hex(),
      o = (0, l.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
      u = t ? s : n,
      [_, c] = O(u, t, e),
      [d, E] = O(t ? o : e ? r : i, t, e),
      [I, T] = O(e ? u : i, t, e);
    return {
      lastBackgroundFillColor: _,
      backgroundFillColor: c,
      lastActiveFillColor: d,
      activeFillColor: E,
      lastInactiveFillColor: I,
      inactiveFillColor: T
    }
  }(S, p);
  r.useEffect(() => {
    let e = N({
      showAll: !S,
      currentTime: s,
      duration: c,
      numSegments: y.length
    });
    P.current = y.map((t, n) => new E.Z(n < e ? t : 0))
  }, [y]), r.useEffect(() => {
    let e = P.current;
    if (null == e) return;
    let t = N({
      showAll: !S,
      currentTime: s,
      duration: c,
      numSegments: y.length
    });
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      if (n < t) {
        i.animateTo(y[n]);
        continue
      }
      i.reset()
    }
  }, [y, s, c, S]), r.useEffect(() => {
    let e = null;
    return e = requestAnimationFrame(function t(n) {
      let i = L.current,
        r = null == i ? void 0 : i.getContext("2d"),
        s = P.current;
      if (null == i || null == r || null == s) return;
      let o = !1;
      (U.current !== S || b.current !== p) && (U.current = S, b.current = p, G.current = n), null != G.current && n > G.current + 200 && (G.current = null);
      let a = i.height / w;
      r.clearRect(0, 0, i.width, i.height), r.beginPath();
      let [l, u] = R(B, x, n, G.current);
      o = o || u, r.fillStyle = l;
      for (let e = 0; e < y.length; e++) m({
        context: r,
        devicePixelRatio: w,
        canvasHeight: a,
        segmentValue: y[e],
        segmentIndex: e,
        constrainMin: !0
      });
      r.fill();
      let [_, c] = R(Z, H, n, G.current);
      o = o || c;
      let [d, E] = R(k, V, n, G.current);
      o = o || E;
      for (let e = 0; e < s.length; e++) {
        let t = s[e],
          n = Math.max(t.getCurrentValue(), y[e] - .1);
        r.beginPath(), r.fillStyle = t.isReset ? _ : d, m({
          context: r,
          devicePixelRatio: w,
          canvasHeight: a,
          segmentValue: n,
          segmentIndex: e,
          constrainMin: !t.isReset
        }), o = o || t.isAnimating(), r.fill()
      }
      o && (e = requestAnimationFrame(t))
    }), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [L, w, y, D, s, c, S, p, B, x, k, V, Z, H]);
  let [, F] = (0, _.Z)({
    ref: L,
    onDrag: g,
    onDragStart: C,
    onDragEnd: v
  });
  return (0, i.jsx)("canvas", {
    onMouseDown: F,
    className: o()(T.canvas, t),
    style: {
      width: M
    },
    ref: L,
    height: 32 * window.devicePixelRatio,
    width: (null != D ? D : 0) * window.devicePixelRatio
  })
}