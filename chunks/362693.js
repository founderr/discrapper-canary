a.d(t, {
  Z: function() {
    return c
  }
});
var n = a(735250),
  l = a(470079),
  r = a(481060),
  i = a(673462),
  s = a(826078),
  o = a(917042),
  u = a(20437),
  d = a(162989);

function c(e) {
  let {
    isLoading: t,
    onDoneLoading: a,
    videoURL: c,
    audioURL: m,
    transitionState: v
  } = e, {
    videoPlayerRef: f,
    cropData: p,
    applicationAudioEnabled: h,
    voiceAudioEnabled: x
  } = (0, u.S)(), g = l.useCallback(() => {
    var e;
    null === (e = f.current) || void 0 === e || e.seek(p.start), a()
  }, [a, p.start]);
  return l.useEffect(() => {
    function e(e) {
      var t, a;
      if ((null === (t = document.activeElement) || void 0 === t ? void 0 : t.tagName) === "INPUT") return;
      let n = f.current;
      if (null == n) return;
      let l = null === (a = f.current) || void 0 === a ? void 0 : a.videoElement;
      if (null == l) return;
      let r = (0, o.Z)(l.duration, e.shiftKey),
        i = !1;
      switch (e.key) {
        case " ":
          i = !0, l.paused ? n.play() : n.pause();
          break;
        case "ArrowLeft":
          i = !0, n.seek(Math.max(l.currentTime - r, p.start));
          break;
        case "ArrowRight":
          i = !0, n.seek(Math.min(l.currentTime + r, p.end))
      }
      i && (e.stopPropagation(), e.preventDefault())
    }
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
  }, [p.start, p.end, f]), (0, n.jsxs)("div", {
    className: d.editorPane,
    children: [(0, n.jsx)("div", {
      className: d.videoSizer,
      children: (0, n.jsx)(i.Z, {
        applicationAudioEnabled: h,
        voiceAudioEnabled: x,
        ref: f,
        audioSrc: m,
        src: c,
        isLoading: t,
        onDoneLoading: g,
        startTime: p.start,
        endTime: p.end
      })
    }), !t && v && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(v) ? (0, n.jsx)(s.Z, {
      sourceURL: c
    }) : null]
  })
}