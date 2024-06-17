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
    chunks: t,
    columns: n,
    className: l
  } = e, i = s.useMemo(() => ({
    "--secure-frames-columns": n
  }), [n]);
  return (0, r.jsx)("div", {
    style: i,
    className: a()(o.code, l),
    children: t.map((e, t) => (0, r.jsx)("div", {
      className: a()(o.chunk, {
        [o.divider]: t > n - 1
      }),
      children: (0, r.jsx)(u.Text, {
        className: o.codeText,
        variant: "code",
        color: "text-normal",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}