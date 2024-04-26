"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("122611"),
  i = a("235939");

function r(e) {
  let {
    guild: t,
    setHasSubheader: a
  } = e, r = s.useRef(null);
  return s.useLayoutEffect(() => {
    let e = r.current;
    null != e && a(e.childNodes.length > 0)
  }), (0, n.jsx)("div", {
    className: i.container,
    ref: r,
    children: (0, n.jsx)(l.default, {
      guild: t
    })
  })
}