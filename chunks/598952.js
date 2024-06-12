"use strict";
a.r(e), a.d(e, {
  default: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  i = a("210712"),
  l = a("900802");

function r(t) {
  var e;
  let {
    attachment: a
  } = t, r = null !== (e = a.size) && void 0 !== e ? e : 0;
  return (0, n.jsxs)("div", {
    className: l.container,
    children: [(0, n.jsx)(i.default, {
      width: 16,
      height: 16,
      className: l.fileIcon
    }), (0, n.jsx)(s.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: l.fileName,
      children: a.filename
    }), (0, n.jsx)(s.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, n.jsx)("div", {
      className: l.dot
    }), (0, n.jsx)(s.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, n.jsxs)(s.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [Math.round(r / 1024 / 1024 * 100) / 100, "MB"]
    })]
  })
}