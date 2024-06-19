r.d(t, {
  Z: function() {
    return p
  }
}), r(653041), r(47120);
var n = r(735250);
r(470079);
var a = r(392711),
  i = r.n(a),
  s = r(481060),
  o = r(481250),
  l = r(513547),
  c = r(689938),
  d = r(16281),
  u = r(331651);
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

function p(e) {
  let {
    clips: t
  } = e;
  if (null == t) return (0, n.jsx)(s.Spinner, {
    type: s.Spinner.Type.SPINNING_CIRCLE
  });
  let r = i().map(t, (e, t) => {
    if (void 0 !== e && "buffers" !== t) return (0, n.jsx)(l.ck, {
      label: t,
      value: e
    }, t)
  });
  return r.push((0, n.jsx)(l.ck, {
    label: "Frames Per Second",
    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
  }, "framerate")), (0, n.jsxs)(s.FormSection, {
    tag: s.FormTitleTags.H2,
    title: c.Z.Messages.RTC_DEBUG_CLIPS,
    children: [(0, o.a)(r), function(e) {
      if (null != e.buffers) return e.buffers.map(e => {
        let t = [];
        for (let r of Object.keys(e).sort((e, t) => {
            let r = m[e],
              n = m[t];
            if (r !== n) return void 0 === r ? 1 : void 0 === n ? -1 : r - n;
            return e > t ? 1 : -1
          })) {
          let a = e[r];
          if (null !== a && "key" !== r) t.push((0, n.jsx)(l.ck, {
            label: r,
            value: a
          }, r))
        }
        return (0, n.jsx)(s.FormSection, {
          className: u.marginBottom40,
          title: "Buffer: ".concat(e.key),
          titleClassName: d.title,
          children: (0, o.a)(t)
        }, "Buffer: ".concat(e.key))
      })
    }(t)]
  })
}