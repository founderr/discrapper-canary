"use strict";
n.r(t);
var s = n("392711"),
  l = n("897325");
t.default = (0, s.memoize)(function(e) {
  let {
    theme: t,
    layoutType: n
  } = e;
  return (0, l.buildPlatformPollResources)(t, n)
}, e => {
  let {
    theme: t,
    layoutType: n
  } = e;
  return "".concat(t, ":").concat(n)
})