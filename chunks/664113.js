"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  r = n("884691"),
  i = n("77078"),
  l = n("460029"),
  s = n("129722"),
  u = n("723961"),
  o = n("782340"),
  d = n("341479"),
  c = r.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: r = !1,
      onChange: c
    } = e, {
      file: f
    } = (0, s.useAudioTrimmerStore)();
    return (0, a.jsx)(i.FormSection, {
      className: d.section,
      title: o.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
      children: (0, a.jsxs)("div", {
        className: d.fakeInput,
        children: [null != t && (0, a.jsx)(u.default, {
          sound: t,
          volume: n,
          disabled: r
        }), null == t && null != f && (0, a.jsx)(l.default, {
          className: d.audioTrimmer,
          volume: n,
          disabled: r,
          onChange: c
        })]
      })
    })
  })