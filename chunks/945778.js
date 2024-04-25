"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var a = r("735250");
r("470079");
var n = r("238246"),
  i = r("153731"),
  s = r("689938");

function l(e) {
  let {
    windowKey: t
  } = e;
  return (0, a.jsx)(n.default, {
    withTitleBar: !0,
    windowKey: t,
    title: s.default.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE,
    children: (0, a.jsx)(i.default, {})
  })
}