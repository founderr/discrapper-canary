"use strict";
n.r(t), n.d(t, {
  SecureFramesCode: function() {
    return i
  }
});
var r = n("735250"),
  s = n("470079"),
  l = n("120356"),
  a = n.n(l),
  u = n("481060"),
  o = n("16140");

function i(e) {
  let {
    code: t,
    className: n
  } = e, l = s.useMemo(() => t.split(" "), [t]);
  return (0, r.jsx)("div", {
    className: a()(o.code, n),
    children: l.map((e, t) => (0, r.jsx)("div", {
      className: o.codeChunk,
      children: (0, r.jsx)(u.Text, {
        className: o.codeText,
        variant: "code",
        color: "text-normal",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}