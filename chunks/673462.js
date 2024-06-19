a(47120), a(653041);
var n = a(735250),
  l = a(470079),
  r = a(392711),
  i = a(98650),
  s = a(810090),
  o = a(162989);

function u(e) {
  let {
    setRef: t,
    audioTrackLabel: a,
    src: r,
    muted: i
  } = e, s = l.useCallback(e => {
    t(e, a)
  }, [t, a]), u = l.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = a === e.label
    })
  }, [a]);
  return (0, n.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(a),
    className: o.hidden,
    ref: s,
    src: r,
    muted: i,
    preload: "auto",
    onLoadedMetadata: u
  })
}
t.Z = l.forwardRef(function(e, t) {
  let {
    src: a,
    audioSrc: d,
    applicationAudioEnabled: c,
    voiceAudioEnabled: m,
    isLoading: v,
    onDoneLoading: f,
    startTime: p = 0,
    endTime: h
  } = e, x = l.useRef({}), [g, j] = l.useState([]), C = l.useRef(!1), b = l.useCallback(() => {
    let e = x.current.main;
    if (null == e) return;
    let t = (0, r.round)(e.currentTime, 3),
      a = (0, r.round)(p, 3);
    if (t >= (null != h ? (0, r.round)(h, 3) : (0, r.round)(e.duration, 3)) || t < a) {
      for (let e of Object.values(x.current)) null != e && (e.currentTime = p);
      return !0
    }
  }, [p, h]);
  (0, i.Z)(() => {
    C.current && b() && E()
  });
  let E = l.useCallback(() => {
      for (let e of (C.current = !0, b(), Object.values(x.current))) null != e && e.play()
    }, [b]),
    N = l.useCallback(() => {
      for (let e of Object.values(x.current)) null != e && e.pause()
    }, []),
    T = l.useCallback(e => {
      var t;
      for (let a of ((null === (t = x.current.main) || void 0 === t ? void 0 : t.paused) && (C.current = !1), Object.values(x.current))) null != a && (a.currentTime = e)
    }, []),
    I = l.useCallback(() => {
      var e;
      (null === (e = x.current.main) || void 0 === e ? void 0 : e.paused) ? E(): N()
    }, [E, N]),
    S = l.useCallback(e => {
      x.current.main = e
    }, []),
    L = l.useCallback(e => {
      let t = [];
      for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(":application") ? a.enabled = !0 : a.label.includes(":voice") ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
      j(t)
    }, []),
    w = l.useCallback((e, t) => {
      x.current[t] = e
    }, []);
  return (l.useImperativeHandle(t, () => ({
    play: E,
    seek: T,
    pause: N,
    videoElement: x.current.main
  })), null == a) ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Z, {
      onClick: I,
      className: v ? o.hidden : o.displayVideo,
      ref: S,
      src: a,
      muted: !0,
      onLoadedData: f,
      preload: "auto"
    }), (0, n.jsx)("audio", {
      id: "ClipsPlayerAudioTrack:application",
      src: d,
      muted: !c,
      preload: "auto",
      className: o.hidden,
      ref: e => w(e, "application"),
      onLoadedMetadata: L
    }), g.map(e => (0, n.jsx)(u, {
      audioTrackLabel: e,
      setRef: w,
      src: d,
      muted: !m
    }, e))]
  })
})