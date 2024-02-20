"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("677935"),
  a = n.n(s),
  o = n("793722"),
  l = n("441822");

function u(e) {
  let {
    streamId: t,
    paused: n,
    onReady: s,
    onResize: u,
    className: c,
    ...d
  } = e, p = r.useRef(null), h = r.useRef({
    width: 0,
    height: 0
  });
  r.useLayoutEffect(() => {
    let e = p.current;
    if (null != e) return (0, o.registerActiveSink)(t), e.srcObject = (0, l.getVideoStream)(t), () => {
      (0, o.unregisterActiveSink)(t), e.srcObject = null, e.load()
    }
  }, [t]), r.useEffect(() => {
    var e, i;
    return n ? (null === (e = p.current) || void 0 === e || e.pause(), (0, o.unregisterActiveSink)(t)) : null === (i = p.current) || void 0 === i || i.play().catch(() => {}), () => {
      n && (0, o.registerActiveSink)(t)
    }
  }, [n]);
  let f = r.useCallback(() => {
    var e, t, n, i;
    let {
      width: r,
      height: s
    } = h.current, a = null !== (n = null === (e = p.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, o = null !== (i = null === (t = p.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
    if (r !== a || s !== o) {
      let e = {
        width: a,
        height: o
      };
      null == u || u(e), h.current = e
    }
  }, [u]);
  r.useLayoutEffect(() => {
    let e = p.current;
    if (null != e) return e.addEventListener("resize", f), () => e.removeEventListener("resize", f)
  }, [f]);
  let E = r.useCallback(() => {
      null == s || s()
    }, [s]),
    _ = r.useCallback(e => {
      !n && e.currentTarget.play()
    }, [n]);
  return (0, i.jsx)("video", {
    className: a("media-engine-video", c),
    ref: p,
    autoPlay: !0,
    onPause: _,
    onCanPlayThrough: E,
    muted: !0,
    ...d
  })
}
u.defaultProps = {
  paused: !1
}