"use strict";
n.r(t), n.d(t, {
  SecureFramesCode: function() {
    return i
  }
});
var s = n("735250"),
  r = n("470079"),
  l = n("120356"),
  a = n.n(l),
  o = n("481060"),
  u = n("16140");

function i(e) {
  let {
    code: t,
    className: n
  } = e, l = r.useMemo(() => t.split(" "), [t]);
  return (0, s.jsx)("div", {
    className: a()(u.code, n),
    children: l.map((e, t) => (0, s.jsx)("div", {
      className: u.codeChunk,
      children: (0, s.jsx)(o.Text, {
        className: u.codeText,
        variant: "code",
        color: "text-normal",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}