r.d(t, {
  Z: function() {
    return d
  }
});
var n = r(735250);
r(470079);
var a = r(392711),
  i = r.n(a),
  s = r(481060),
  o = r(481250),
  l = r(513547),
  c = r(689938);

function d(e) {
  let {
    camera: t
  } = e;
  if (null == t) return (0, n.jsx)(s.Spinner, {
    type: s.Spinner.Type.SPINNING_CIRCLE
  });
  let r = i().map(t, (e, t) => {
    if (!(l.al[t] || void 0 === e)) return (0, n.jsx)(l.ck, {
      label: t,
      value: e
    }, t)
  });
  return (0, n.jsx)(s.FormSection, {
    tag: s.FormTitleTags.H2,
    title: c.Z.Messages.RTC_DEBUG_CAMERA,
    children: (0, o.a)(r)
  })
}