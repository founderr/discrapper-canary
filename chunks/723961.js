"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("77078"),
  r = n("132755"),
  a = n("78404"),
  u = n("520497"),
  o = n("812809"),
  d = n("129722"),
  c = n("859971"),
  f = n("477633"),
  h = n("782340"),
  m = n("803336"),
  g = l.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: g
    } = e, [E, S] = l.useState(!1), v = l.useRef(null), {
      file: p,
      audio: _,
      loadAudioFromFile: N
    } = (0, d.useAudioTrimmerStore)(), C = l.useMemo(() => (0, u.default)(t.soundId), [t]);
    return l.useEffect(() => {
      null == v.current && (v.current = (0, c.loadAudioFileFromUrl)(C, t.name).then(N))
    }, [C, N, t.name]), (0, i.jsxs)("div", {
      className: m.previewContainer,
      children: [(0, i.jsx)(s.Clickable, {
        onClick: g ? void 0 : function() {
          null != _ && (_.paused ? (_.volume = (0, o.default)(n), _.currentTime = 0, _.play(), S(!0), _.addEventListener("ended", () => S(!1), {
            once: !0
          })) : (_.pause(), S(!1)))
        },
        className: m.playButton,
        "aria-label": E ? h.default.Messages.STOP : h.default.Messages.PLAY,
        children: E ? (0, i.jsx)(a.default, {
          className: m.playIcon
        }) : (0, i.jsx)(r.default, {
          className: m.playIcon
        })
      }), (0, i.jsx)("div", {
        className: m.waveformContainer,
        children: (0, i.jsx)(f.default, {
          className: m.waveform,
          file: p,
          audio: _
        })
      })]
    })
  })