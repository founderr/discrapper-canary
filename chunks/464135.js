"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  i = a("414456"),
  r = a.n(i),
  s = a("917351"),
  u = a("65597"),
  o = a("718776"),
  d = a("77078"),
  c = a("731898"),
  f = a("31695"),
  m = a("471671"),
  v = a("830837"),
  p = a("132755"),
  h = a("58608"),
  x = a("28388"),
  C = a("80028"),
  g = a("782340"),
  E = a("504835"),
  N = function(e) {
    var t, a, i, N, j, M;
    let {
      sourceURL: T,
      cropData: S,
      videoPlayerRef: _,
      setCropData: b
    } = e, [w, R] = n.useState((M = !(null === (a = _.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), M)), A = n.useRef(null), [y, D] = n.useState(null), [k, P] = n.useState(), O = n.useRef(null), F = n.useRef(null), [B, U] = n.useState(0), [H, z] = n.useState(!1), [Z, V] = n.useState(null);
    (0, f.default)(() => {
      var e;
      let t = null === (e = _.current) || void 0 === e ? void 0 : e.videoElement;
      null != t && B !== t.currentTime && U(t.currentTime)
    });
    let G = n.useMemo(() => S.end - S.start, [S]);
    n.useEffect(() => {
      var e;
      let t = null === (e = _.current) || void 0 === e ? void 0 : e.videoElement,
        a = O.current,
        l = F.current;
      if (null == t || null == a || null == l) return;
      let n = (0, s.debounce)(R, C.CLIP_PLAYING_DEBOUNCE_MS),
        i = () => {
          D(null), z(!1), n.cancel(), n(!0)
        },
        r = () => {
          n.cancel(), n(!1)
        };
      return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
        t.removeEventListener("play", i), t.removeEventListener("pause", r)
      }
    }, [_]);
    let {
      ref: K,
      width: Y = 0,
      height: W = 0
    } = (0, c.default)(), X = (0, u.default)([m.default], () => m.default.windowSize());
    n.useMemo(() => {
      let e = K.current;
      null != e && V(e.getBoundingClientRect())
    }, [X.width, X.height, Y]);
    let q = n.useRef(null),
      J = n.useRef({}),
      Q = n.useCallback(e => {
        var t;
        let a = (0, s.clamp)(e, 0, S.end - C.MIN_CLIP_DURATION_SECONDS);
        b({
          ...S,
          start: a
        }), null === (t = _.current) || void 0 === t || t.seek(a)
      }, [S, b, _]),
      $ = n.useCallback(e => {
        var t, a;
        let l = null === (t = _.current) || void 0 === t ? void 0 : t.videoElement;
        if (null == l) return;
        let n = (0, s.clamp)(e, S.start + C.MIN_CLIP_DURATION_SECONDS, l.duration);
        b({
          ...S,
          end: n
        }), null === (a = _.current) || void 0 === a || a.seek(n)
      }, [S, b, _]),
      ee = n.useCallback((e, t) => {
        var a, l;
        if (null == k) return;
        if (null == Z) return null;
        let n = (0, s.clamp)(e, Z.left, Z.right),
          i = (n - Z.left) / Z.width * k,
          r = (0, s.clamp)(i, 0, k),
          u = y;
        if (null == u && t && (u = r <= S.start ? "start" : r >= S.end ? "end" : "playhead", null === (a = _.current) || void 0 === a || a.pause(), D(u), z(w)), "start" === u) Q(r);
        else if ("end" === u) $(r);
        else if ("playhead" === u) {
          let e = (0, s.clamp)(r, S.start, S.end);
          null === (l = _.current) || void 0 === l || l.seek(e)
        }
      }, [k, Z, y, S.start, S.end, _, w, Q, $]),
      et = n.useCallback(e => {
        var t;
        let a = null === (t = _.current) || void 0 === t ? void 0 : t.videoElement;
        if (null == a) return;
        let l = (0, x.default)(a.duration, e.shiftKey),
          n = !1;
        switch (e.key) {
          case "ArrowLeft":
            n = !0, Q(S.start - l);
            break;
          case "ArrowRight":
            n = !0, Q(S.start + l)
        }
        n && (e.stopPropagation(), e.preventDefault())
      }, [_, Q, S.start]),
      ea = n.useCallback(e => {
        var t;
        let a = null === (t = _.current) || void 0 === t ? void 0 : t.videoElement;
        if (null == a) return;
        let l = (0, x.default)(a.duration, e.shiftKey),
          n = !1;
        switch (e.key) {
          case "ArrowLeft":
            n = !0, $(S.end - l);
            break;
          case "ArrowRight":
            n = !0, $(S.end + l)
        }
        n && (e.stopPropagation(), e.preventDefault())
      }, [_, $, S.end]),
      el = n.useCallback(e => {
        ee(e.clientX, !0)
      }, [ee]),
      en = n.useCallback(e => {
        ee(e.clientX, !1)
      }, [ee]),
      ei = n.useCallback(() => {
        if (H) {
          var e;
          null === (e = _.current) || void 0 === e || e.play()
        }
        z(!1), D(null)
      }, [_, H]);
    n.useEffect(() => (document.addEventListener("mousemove", en), document.addEventListener("mouseup", ei), () => {
      document.removeEventListener("mousemove", en), document.removeEventListener("mouseup", ei)
    }), [en, ei]), n.useEffect(() => {
      (async function e() {
        var e;
        let t = K.current,
          a = A.current;
        if (null == t || null == a || null == k) return;
        t.height = W, t.width = Y;
        let l = t.getContext("2d");
        if (null == l) return;
        l.fillStyle = "#000", l.fillRect(0, 0, Y, W);
        let n = a.videoWidth / a.videoHeight,
          i = Math.ceil(W * n),
          r = Math.ceil(Y / i),
          s = q.current;
        if (null == s) return;
        s.width = i, s.height = W;
        let u = null == s ? void 0 : s.getContext("2d", {
          willReadFrequently: !0
        });
        if (null == u) return;
        let o = J.current;
        if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
          for (let e = 0; e < r; e++) l.putImageData(o[r][e], i * e, 0);
          return
        }
        for (let e = 0; e < r; e++) await new Promise(t => {
          a.onseeked = () => {
            l.drawImage(a, i * e, 0, i, W), u.drawImage(a, 0, 0, i, W);
            let n = u.getImageData(0, 0, i, W);
            null == o[r] && (o[r] = []), o[r][e] = n, t()
          }, a.currentTime = i / Y * k * e
        })
      })()
    }, [Y, W, K, k, q]);
    let er = B - S.start,
      es = null === (i = _.current) || void 0 === i ? void 0 : i.videoElement;
    return (0, l.jsx)("div", {
      className: E.centeringWrapper,
      children: (0, l.jsxs)("div", {
        className: E.timelineContainer,
        children: [(0, l.jsx)("div", {
          className: E.playPauseButtonWrapper,
          children: (0, l.jsx)(d.Clickable, {
            tabIndex: 0,
            onClick: () => {
              var e, t;
              return w ? null === (e = _.current) || void 0 === e ? void 0 : e.pause() : null === (t = _.current) || void 0 === t ? void 0 : t.play()
            },
            className: E.playPauseButton,
            children: w ? (0, l.jsx)(v.default, {
              width: 24,
              height: 24,
              className: E.playPauseIcon
            }) : (0, l.jsx)(p.default, {
              width: 24,
              height: 24,
              className: E.playPauseIcon
            })
          })
        }), (0, l.jsxs)("div", {
          className: r(E.timeline, {
            [E.timelineDragging]: null != y
          }),
          onMouseDown: el,
          children: [(0, l.jsx)("canvas", {
            className: E.hiddenCanvas,
            ref: q
          }), (0, l.jsx)("canvas", {
            className: E.timelineBackground,
            ref: K
          }), (0, l.jsx)(o.FocusRing, {
            children: (0, l.jsx)("div", {
              tabIndex: 0,
              ref: O,
              className: E.playhead,
              style: {
                left: null != es ? "".concat(es.currentTime / es.duration * 100, "%") : 0
              }
            })
          }), (0, l.jsx)(h.default, {
            preload: "auto",
            onLoadedMetadata: function() {
              let e = A.current;
              if (null != e) {
                if (P(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration)) {
                  var t;
                  null === (t = _.current) || void 0 === t || t.seek(e.duration / 2), U(e.duration / 2)
                }
                0 === S.end && b(t => ({
                  ...t,
                  end: e.duration
                }))
              }
            },
            className: E.timelineVideo,
            ref: A,
            src: T,
            muted: !0
          }), (0, l.jsxs)("div", {
            className: E.dragBox,
            style: {
              left: null != k ? "".concat(S.start / k * 100, "%") : "0",
              right: null != k ? "".concat((k - S.end) / k * 100, "%") : "0"
            },
            children: [(0, l.jsx)("div", {
              className: E.timePillContainer,
              children: (0, l.jsx)("div", {
                ref: F,
                className: E.timePillBackground,
                children: (0, l.jsxs)(d.Text, {
                  variant: "text-sm/normal",
                  className: E.timePillText,
                  color: "always-white",
                  children: [L(er), (0, l.jsx)("span", {
                    className: E.slashCharacter,
                    children: " / "
                  }), L(G)]
                })
              })
            }), (0, l.jsx)(o.FocusRing, {
              children: (0, l.jsx)("button", {
                className: r(E.dragHandleLeft, {
                  [E.dragging]: "start" === y
                }),
                onMouseDown: el,
                onKeyDown: et,
                role: "slider",
                tabIndex: 0,
                "aria-valuemin": 0,
                "aria-valuenow": S.start,
                "aria-valuetext": I(S.start),
                "aria-valuemax": S.end - C.MIN_CLIP_DURATION_SECONDS,
                "aria-label": g.default.Messages.CLIPS_CROP_START,
                children: (0, l.jsx)("div", {
                  className: E.cropLeftArrow
                })
              })
            }), (0, l.jsx)(o.FocusRing, {
              children: (0, l.jsx)("button", {
                className: r(E.dragHandleRight, {
                  [E.dragging]: "end" === y
                }),
                onMouseDown: el,
                onKeyDown: ea,
                role: "slider",
                tabIndex: 0,
                "aria-valuemin": S.start + C.MIN_CLIP_DURATION_SECONDS,
                "aria-valuenow": S.end,
                "aria-valuetext": I(S.end),
                "aria-valuemax": null === (j = _.current) || void 0 === j ? void 0 : null === (N = j.videoElement) || void 0 === N ? void 0 : N.duration,
                "aria-label": g.default.Messages.CLIPS_CROP_END,
                children: (0, l.jsx)("div", {
                  className: E.cropRightArrow
                })
              })
            })]
          })]
        })]
      })
    })
  };

function L(e) {
  ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
    a = Math.floor(e % 60),
    l = Math.floor(e % 1 * 100);
  return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, l = l < 10 ? "0" + l : l, "".concat(t, ":").concat(a, ".").concat(l)
}

function I(e) {
  let t = g.default.Messages.DURATION_MINUTES.format({
      minutes: Math.floor(e / 60)
    }),
    a = g.default.Messages.DURATION_SECONDS.format({
      seconds: e % 60
    });
  return "".concat(t, " ").concat(a)
}