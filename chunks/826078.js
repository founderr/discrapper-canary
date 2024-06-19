a(47120);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  i = a.n(r),
  s = a(392711),
  o = a(399606),
  u = a(84735),
  d = a(481060),
  c = a(393238),
  m = a(98650),
  v = a(451478),
  f = a(810090),
  p = a(917042),
  h = a(20437),
  x = a(356659),
  g = a(689938),
  j = a(625115);

function C(e) {
  ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
    a = Math.floor(e % 60),
    n = Math.floor(e % 1 * 100);
  return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, n = n < 10 ? "0" + n : n, "".concat(t, ":").concat(a, ".").concat(n)
}

function b(e) {
  let t = Math.floor(e / 60),
    a = g.Z.Messages.DURATION_MINUTES.format({
      minutes: t
    }),
    n = g.Z.Messages.DURATION_SECONDS.format({
      seconds: e % 60
    });
  return "".concat(a, " ").concat(n)
}
t.Z = function(e) {
  var t, a, r, E, N, T;
  let {
    sourceURL: I
  } = e, {
    videoPlayerRef: S,
    cropData: L,
    setCropData: w
  } = (0, h.S)(), [y, k] = l.useState((T = !(null === (a = S.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), T)), M = l.useRef(null), [R, _] = l.useState(null), [Z, D] = l.useState(), P = l.useRef(null), A = l.useRef(null), [O, F] = l.useState(0), [B, U] = l.useState(!1), [z, H] = l.useState(null);
  (0, m.Z)(() => {
    var e;
    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement;
    null != t && O !== t.currentTime && F(t.currentTime)
  });
  let W = l.useMemo(() => L.end - L.start, [L]);
  l.useEffect(() => {
    var e;
    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement,
      a = P.current,
      n = A.current;
    if (null == t || null == a || null == n) return;
    let l = (0, s.debounce)(k, x.HW),
      r = () => {
        _(null), U(!1), l.cancel(), l(!0)
      },
      i = () => {
        l.cancel(), l(!1)
      };
    return t.addEventListener("play", r), t.addEventListener("pause", i), () => {
      t.removeEventListener("play", r), t.removeEventListener("pause", i)
    }
  }, [S]);
  let {
    ref: G,
    width: V = 0,
    height: K = 0
  } = (0, c.Z)(), Y = (0, o.e7)([v.Z], () => v.Z.windowSize());
  l.useMemo(() => {
    let e = G.current;
    null != e && H(e.getBoundingClientRect())
  }, [Y.width, Y.height, V]);
  let Q = l.useRef(null),
    X = l.useRef({}),
    q = l.useCallback(e => {
      var t;
      let a = (0, s.clamp)(e, 0, L.end - x.Hp);
      w({
        ...L,
        start: a
      }), null === (t = S.current) || void 0 === t || t.seek(a)
    }, [L, w, S]),
    $ = l.useCallback(e => {
      var t, a;
      let n = null === (t = S.current) || void 0 === t ? void 0 : t.videoElement;
      if (null == n) return;
      let l = (0, s.clamp)(e, L.start + x.Hp, n.duration);
      w({
        ...L,
        end: l
      }), null === (a = S.current) || void 0 === a || a.seek(l)
    }, [L, w, S]),
    J = l.useCallback((e, t) => {
      var a, n;
      if (null == Z) return;
      if (null == z) return null;
      let l = ((0, s.clamp)(e, z.left, z.right) - z.left) / z.width * Z,
        r = (0, s.clamp)(l, 0, Z),
        i = R;
      if (null == i && t && (i = r <= L.start ? "start" : r >= L.end ? "end" : "playhead", null === (a = S.current) || void 0 === a || a.pause(), _(i), U(y)), "start" === i) q(r);
      else if ("end" === i) $(r);
      else if ("playhead" === i) {
        let e = (0, s.clamp)(r, L.start, L.end);
        null === (n = S.current) || void 0 === n || n.seek(e)
      }
    }, [Z, z, R, L.start, L.end, S, y, q, $]),
    ee = l.useCallback(e => {
      var t;
      let a = null === (t = S.current) || void 0 === t ? void 0 : t.videoElement;
      if (null == a) return;
      let n = (0, p.Z)(a.duration, e.shiftKey),
        l = !1;
      switch (e.key) {
        case "ArrowLeft":
          l = !0, q(L.start - n);
          break;
        case "ArrowRight":
          l = !0, q(L.start + n)
      }
      l && (e.stopPropagation(), e.preventDefault())
    }, [S, q, L.start]),
    et = l.useCallback(e => {
      var t;
      let a = null === (t = S.current) || void 0 === t ? void 0 : t.videoElement;
      if (null == a) return;
      let n = (0, p.Z)(a.duration, e.shiftKey),
        l = !1;
      switch (e.key) {
        case "ArrowLeft":
          l = !0, $(L.end - n);
          break;
        case "ArrowRight":
          l = !0, $(L.end + n)
      }
      l && (e.stopPropagation(), e.preventDefault())
    }, [S, $, L.end]),
    ea = l.useCallback(e => {
      J(e.clientX, !0)
    }, [J]),
    en = l.useCallback(e => {
      J(e.clientX, !1)
    }, [J]),
    el = l.useCallback(() => {
      if (B) {
        var e;
        null === (e = S.current) || void 0 === e || e.play()
      }
      U(!1), _(null)
    }, [S, B]);
  l.useEffect(() => (document.addEventListener("mousemove", en), document.addEventListener("mouseup", el), () => {
    document.removeEventListener("mousemove", en), document.removeEventListener("mouseup", el)
  }), [en, el]), l.useEffect(() => {
    (async function e() {
      var e;
      let t = G.current,
        a = M.current;
      if (null == t || null == a || null == Z) return;
      t.height = K, t.width = V;
      let n = t.getContext("2d");
      if (null == n) return;
      n.fillStyle = "#000", n.fillRect(0, 0, V, K);
      let l = Math.ceil(K * (a.videoWidth / a.videoHeight)),
        r = Math.ceil(V / l),
        i = Q.current;
      if (null == i) return;
      i.width = l, i.height = K;
      let s = null == i ? void 0 : i.getContext("2d", {
        willReadFrequently: !0
      });
      if (null == s) return;
      let o = X.current;
      if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
        for (let e = 0; e < r; e++) n.putImageData(o[r][e], l * e, 0);
        return
      }
      for (let e = 0; e < r; e++) await new Promise(t => {
        a.onseeked = () => {
          n.drawImage(a, l * e, 0, l, K), s.drawImage(a, 0, 0, l, K);
          let i = s.getImageData(0, 0, l, K);
          null == o[r] && (o[r] = []), o[r][e] = i, t()
        }, a.currentTime = l / V * Z * e
      })
    })()
  }, [V, K, G, Z, Q]);
  let er = O - L.start,
    ei = null === (r = S.current) || void 0 === r ? void 0 : r.videoElement;
  return (0, n.jsx)("div", {
    className: j.centeringWrapper,
    children: (0, n.jsxs)("div", {
      className: j.timelineContainer,
      children: [(0, n.jsx)("div", {
        className: j.playPauseButtonWrapper,
        children: (0, n.jsx)(d.Clickable, {
          tabIndex: 0,
          onClick: () => {
            var e, t;
            return y ? null === (e = S.current) || void 0 === e ? void 0 : e.pause() : null === (t = S.current) || void 0 === t ? void 0 : t.play()
          },
          className: j.playPauseButton,
          children: y ? (0, n.jsx)(d.PauseIcon, {
            size: "md",
            color: "currentColor",
            className: j.playPauseIcon
          }) : (0, n.jsx)(d.PlayIcon, {
            size: "md",
            color: "currentColor",
            className: j.playPauseIcon
          })
        })
      }), (0, n.jsxs)("div", {
        className: i()(j.timeline, {
          [j.timelineDragging]: null != R
        }),
        onMouseDown: ea,
        children: [(0, n.jsx)("canvas", {
          className: j.hiddenCanvas,
          ref: Q
        }), (0, n.jsx)("canvas", {
          className: j.timelineBackground,
          ref: G
        }), (0, n.jsx)(u.t, {
          children: (0, n.jsx)("div", {
            tabIndex: 0,
            ref: P,
            className: j.playhead,
            style: {
              left: null != ei ? "".concat(ei.currentTime / ei.duration * 100, "%") : 0
            }
          })
        }), (0, n.jsx)(f.Z, {
          preload: "auto",
          onLoadedMetadata: function() {
            let e = M.current;
            if (null != e) {
              if (D(e.duration), 0 === L.start && (0 === L.end || L.end === e.duration)) {
                var t;
                null === (t = S.current) || void 0 === t || t.seek(e.duration / 2), F(e.duration / 2)
              }
              0 === L.end && w(t => ({
                ...t,
                end: e.duration
              }))
            }
          },
          className: j.timelineVideo,
          ref: M,
          src: I,
          muted: !0
        }), (0, n.jsxs)("div", {
          className: j.dragBox,
          style: {
            left: null != Z ? "".concat(L.start / Z * 100, "%") : "0",
            right: null != Z ? "".concat((Z - L.end) / Z * 100, "%") : "0"
          },
          children: [(0, n.jsx)("div", {
            className: j.timePillContainer,
            children: (0, n.jsx)("div", {
              ref: A,
              className: j.timePillBackground,
              children: (0, n.jsxs)(d.Text, {
                variant: "text-sm/normal",
                className: j.timePillText,
                color: "always-white",
                children: [C(er), (0, n.jsx)("span", {
                  className: j.slashCharacter,
                  children: " / "
                }), C(W)]
              })
            })
          }), (0, n.jsx)(u.t, {
            children: (0, n.jsx)("button", {
              className: i()(j.dragHandleLeft, {
                [j.dragging]: "start" === R
              }),
              onMouseDown: ea,
              onKeyDown: ee,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": 0,
              "aria-valuenow": L.start,
              "aria-valuetext": b(L.start),
              "aria-valuemax": L.end - x.Hp,
              "aria-label": g.Z.Messages.CLIPS_CROP_START,
              children: (0, n.jsx)("div", {
                className: j.cropLeftArrow
              })
            })
          }), (0, n.jsx)(u.t, {
            children: (0, n.jsx)("button", {
              className: i()(j.dragHandleRight, {
                [j.dragging]: "end" === R
              }),
              onMouseDown: ea,
              onKeyDown: et,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": L.start + x.Hp,
              "aria-valuenow": L.end,
              "aria-valuetext": b(L.end),
              "aria-valuemax": null === (N = S.current) || void 0 === N ? void 0 : null === (E = N.videoElement) || void 0 === E ? void 0 : E.duration,
              "aria-label": g.Z.Messages.CLIPS_CROP_END,
              children: (0, n.jsx)("div", {
                className: j.cropRightArrow
              })
            })
          })]
        })]
      })]
    })
  })
}