"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("222007"), a("424973");
var l = a("37983"),
  n = a("884691"),
  i = a("917351"),
  r = a("31695"),
  s = a("58608"),
  u = a("204839");

function o(e) {
  let {
    setRef: t,
    audioTrackLabel: a,
    src: i,
    muted: r
  } = e, s = n.useCallback(e => {
    t(e, a)
  }, [t, a]), o = n.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = a === e.label
    })
  }, [a]);
  return (0, l.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(a),
    className: u.hidden,
    ref: s,
    src: i,
    muted: r,
    preload: "auto",
    onLoadedMetadata: o
  })
}
var d = n.forwardRef(function(e, t) {
  let {
    src: a,
    audioSrc: d,
    applicationAudioEnabled: c,
    voiceAudioEnabled: f,
    isLoading: m,
    onDoneLoading: v,
    startTime: p = 0,
    endTime: h
  } = e, x = n.useRef({}), [C, g] = n.useState([]), E = n.useRef(!1), N = n.useCallback(() => {
    let e = x.current.main;
    if (null == e) return;
    let t = (0, i.round)(e.currentTime, 3),
      a = (0, i.round)(p, 3),
      l = null != h ? (0, i.round)(h, 3) : (0, i.round)(e.duration, 3);
    if (t >= l || t < a) {
      for (let e of Object.values(x.current)) null != e && (e.currentTime = p);
      return !0
    }
  }, [p, h]);
  (0, r.default)(() => {
    if (E.current) {
      let e = N();
      e && L()
    }
  });
  let L = n.useCallback(() => {
      for (let e of (E.current = !0, N(), Object.values(x.current))) null != e && e.play()
    }, [N]),
    I = n.useCallback(() => {
      for (let e of Object.values(x.current)) null != e && e.pause()
    }, []),
    j = n.useCallback(e => {
      var t;
      for (let a of ((null === (t = x.current.main) || void 0 === t ? void 0 : t.paused) && (E.current = !1), Object.values(x.current))) null != a && (a.currentTime = e)
    }, []),
    M = n.useCallback(() => {
      var e;
      (null === (e = x.current.main) || void 0 === e ? void 0 : e.paused) ? L(): I()
    }, [L, I]),
    T = n.useCallback(e => {
      x.current.main = e
    }, []),
    S = n.useCallback(e => {
      let t = [];
      for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(":application") ? a.enabled = !0 : a.label.includes(":voice") ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
      g(t)
    }, []),
    _ = n.useCallback((e, t) => {
      x.current[t] = e
    }, []);
  return (n.useImperativeHandle(t, () => ({
    play: L,
    seek: j,
    pause: I,
    videoElement: x.current.main
  })), null == a) ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.default, {
      onClick: M,
      className: m ? u.hidden : u.displayVideo,
      ref: T,
      src: a,
      muted: !0,
      onLoadedData: v,
      preload: "auto"
    }), (0, l.jsx)("audio", {
      id: "ClipsPlayerAudioTrack:application",
      src: d,
      muted: !c,
      preload: "auto",
      className: u.hidden,
      ref: e => _(e, "application"),
      onLoadedMetadata: S
    }), C.map(e => (0, l.jsx)(o, {
      audioTrackLabel: e,
      setRef: _,
      src: d,
      muted: !f
    }, e))]
  })
})