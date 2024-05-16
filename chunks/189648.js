"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var a = r("735250");
r("470079");
var n = r("392711"),
  i = r.n(n),
  s = r("481060"),
  l = r("481250"),
  o = r("513547"),
  d = r("689938");

function u(e) {
  let {
    camera: t
  } = e;
  if (null == t) return (0, a.jsx)(s.Spinner, {
    type: s.Spinner.Type.SPINNING_CIRCLE
  });
  let r = i().map(t, (e, t) => {
    if (!(o.hidden[t] || void 0 === e)) return (0, a.jsx)(o.Item, {
      label: t,
      value: e
    }, t)
  });
  return (0, a.jsx)(s.FormSection, {
    tag: s.FormTitleTags.H2,
    title: d.default.Messages.RTC_DEBUG_CAMERA,
    children: (0, l.renderTwoColumns)(r)
  })
}