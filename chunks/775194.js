"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("653041"), r("47120");
var a = r("735250");
r("470079");
var n = r("392711"),
  i = r.n(n),
  s = r("481060"),
  l = r("481250"),
  o = r("513547"),
  d = r("689938"),
  u = r("299552"),
  c = r("794711");
let m = {
  userId: 1,
  dataType: 2,
  savedKB: 3,
  numFrames: 4,
  startTimestampMs: 5,
  endTimestampMs: 6,
  width: 7,
  height: 8,
  audioChannels: 9,
  sampleRate: 10
};

function f(e) {
  let {
    clips: t
  } = e;
  if (null == t) return (0, a.jsx)(s.Spinner, {
    type: s.Spinner.Type.SPINNING_CIRCLE
  });
  let r = i().map(t, (e, t) => {
    if (void 0 !== e && "buffers" !== t) return (0, a.jsx)(o.Item, {
      label: t,
      value: e
    }, t)
  });
  return r.push((0, a.jsx)(o.Item, {
    label: "Frames Per Second",
    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
  }, "framerate")), (0, a.jsxs)(s.FormSection, {
    tag: s.FormTitleTags.H2,
    title: d.default.Messages.RTC_DEBUG_CLIPS,
    children: [(0, l.renderTwoColumns)(r), function(e) {
      if (null != e.buffers) return e.buffers.map(e => {
        let t = [];
        for (let r of Object.keys(e).sort((e, t) => {
            let r = m[e],
              a = m[t];
            if (r !== a) return void 0 === r ? 1 : void 0 === a ? -1 : r - a;
            return e > t ? 1 : -1
          })) {
          let n = e[r];
          null !== n && "key" !== r && t.push((0, a.jsx)(o.Item, {
            label: r,
            value: n
          }, r))
        }
        return (0, a.jsx)(s.FormSection, {
          className: c.marginBottom40,
          title: "Buffer: ".concat(e.key),
          titleClassName: u.title,
          children: (0, l.renderTwoColumns)(t)
        }, "Buffer: ".concat(e.key))
      })
    }(t)]
  })
}