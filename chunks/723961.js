"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("77078"),
  s = n("132755"),
  r = n("78404"),
  u = n("520497"),
  o = n("812809"),
  d = n("129722"),
  c = n("859971"),
  f = n("477633"),
  h = n("782340"),
  m = n("610078"),
  g = l.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: g
    } = e, [E, S] = l.useState(!1), v = l.useRef(null), {
      file: _,
      audio: N,
      loadAudioFromFile: p
    } = (0, d.useAudioTrimmerStore)(), A = l.useMemo(() => (0, u.default)(t.soundId), [t]);
    return l.useEffect(() => {
      null == v.current && (v.current = (0, c.loadAudioFileFromUrl)(A, t.name).then(p))
    }, [A, p, t.name]), (0, a.jsxs)("div", {
      className: m.previewContainer,
      children: [(0, a.jsx)(i.Clickable, {
        onClick: g ? void 0 : function() {
          null != N && (N.paused ? (N.volume = (0, o.default)(n), N.currentTime = 0, N.play(), S(!0), N.addEventListener("ended", () => S(!1), {
            once: !0
          })) : (N.pause(), S(!1)))
        },
        className: m.playButton,
        "aria-label": E ? h.default.Messages.STOP : h.default.Messages.PLAY,
        children: E ? (0, a.jsx)(r.default, {
          className: m.playIcon
        }) : (0, a.jsx)(s.default, {
          className: m.playIcon
        })
      }), (0, a.jsx)("div", {
        className: m.waveformContainer,
        children: (0, a.jsx)(f.default, {
          className: m.waveform,
          file: _,
          audio: N
        })
      })]
    })
  })