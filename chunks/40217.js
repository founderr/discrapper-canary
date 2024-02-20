"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("677935"),
  a = n.n(s),
  o = n("773179"),
  l = n.n(o),
  u = n("784063"),
  c = n("104240"),
  d = n("340346"),
  p = n("625454");

function h(e) {
  let {
    streamId: t,
    paused: n,
    onReady: s,
    onResize: o,
    className: h,
    ...f
  } = e, E = r.useRef(null), {
    current: _
  } = r.useRef(l.uniqueId("media-engine-video-"));
  return r.useEffect(() => {
    let e = E.current;
    if (!n && null != e) {
      let n = !1,
        i = (t, i) => {
          !n && (null == s || s(), n = !0), (e.width !== t || e.height !== i) && (e.width = t, e.height = i, null == o || o({
            width: t,
            height: i
          }))
        },
        r = (0, u.getVoiceEngine)();
      if (null != r.addVideoOutputSink) return r.addVideoOutputSink(_, t, i), () => {
        r.removeVideoOutputSink(_, t)
      };
      {
        let n = function(e) {
          var t, n, i, r;
          let s = null === (r = window) || void 0 === r ? void 0 : null === (i = r.DiscordNative) || void 0 === i ? void 0 : null === (n = i.app) || void 0 === n ? void 0 : null === (t = n.getReleaseChannel) || void 0 === t ? void 0 : t.call(n);
          return "canary" === s || "development" === s ? (0, d.initRenderingContextWebGL)(e) : (0, c.initRenderingContext2D)(e)
        }(e);
        if (null == n) return;
        return p.default.addSink(t, E, e => {
          i(e.width, e.height), n.render(e)
        }), () => {
          p.default.removeSink(t, E)
        }
      }
    }
  }, [t, n, o, s, _]), (0, i.jsx)("canvas", {
    id: _,
    className: a("media-engine-video", h),
    ref: E,
    ...f
  })
}
h.defaultProps = {
  paused: !1
}