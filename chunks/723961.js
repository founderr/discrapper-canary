"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("77078"),
  s = n("132755"),
  r = n("78404"),
  u = n("520497"),
  o = n("812809"),
  d = n("129722"),
  c = n("859971"),
  f = n("477633"),
  h = n("782340"),
  m = n("803336"),
  g = i.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: g
    } = e, [S, p] = i.useState(!1), v = i.useRef(null), {
      file: C,
      audio: E,
      loadAudioFromFile: _
    } = (0, d.useAudioTrimmerStore)(), N = i.useMemo(() => (0, u.default)(t.soundId), [t]);
    return i.useEffect(() => {
      null == v.current && (v.current = (0, c.loadAudioFileFromUrl)(N, t.name).then(_))
    }, [N, _, t.name]), (0, l.jsxs)("div", {
      className: m.previewContainer,
      children: [(0, l.jsx)(a.Clickable, {
        onClick: g ? void 0 : function() {
          null != E && (E.paused ? (E.volume = (0, o.default)(n), E.currentTime = 0, E.play(), p(!0), E.addEventListener("ended", () => p(!1), {
            once: !0
          })) : (E.pause(), p(!1)))
        },
        className: m.playButton,
        "aria-label": S ? h.default.Messages.STOP : h.default.Messages.PLAY,
        children: S ? (0, l.jsx)(r.default, {
          className: m.playIcon
        }) : (0, l.jsx)(s.default, {
          className: m.playIcon
        })
      }), (0, l.jsx)("div", {
        className: m.waveformContainer,
        children: (0, l.jsx)(f.default, {
          className: m.waveform,
          file: C,
          audio: E
        })
      })]
    })
  })