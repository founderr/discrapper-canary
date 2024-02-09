"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("77078"),
  l = n("132755"),
  s = n("78404"),
  u = n("520497"),
  o = n("812809"),
  d = n("129722"),
  c = n("859971"),
  f = n("477633"),
  h = n("782340"),
  m = n("803336"),
  g = r.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: g
    } = e, [p, v] = r.useState(!1), S = r.useRef(null), {
      file: C,
      audio: E,
      loadAudioFromFile: _
    } = (0, d.useAudioTrimmerStore)(), N = r.useMemo(() => (0, u.default)(t.soundId), [t]);
    return r.useEffect(() => {
      null == S.current && (S.current = (0, c.loadAudioFileFromUrl)(N, t.name).then(_))
    }, [N, _, t.name]), (0, a.jsxs)("div", {
      className: m.previewContainer,
      children: [(0, a.jsx)(i.Clickable, {
        onClick: g ? void 0 : function() {
          null != E && (E.paused ? (E.volume = (0, o.default)(n), E.currentTime = 0, E.play(), v(!0), E.addEventListener("ended", () => v(!1), {
            once: !0
          })) : (E.pause(), v(!1)))
        },
        className: m.playButton,
        "aria-label": p ? h.default.Messages.STOP : h.default.Messages.PLAY,
        children: p ? (0, a.jsx)(s.default, {
          className: m.playIcon
        }) : (0, a.jsx)(l.default, {
          className: m.playIcon
        })
      }), (0, a.jsx)("div", {
        className: m.waveformContainer,
        children: (0, a.jsx)(f.default, {
          className: m.waveform,
          file: C,
          audio: E
        })
      })]
    })
  })