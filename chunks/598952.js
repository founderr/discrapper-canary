"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var s = a("735250");
a("470079");
var n = a("481060"),
  i = a("210712"),
  l = a("900802");

function r(e) {
  var t;
  let {
    attachment: a
  } = e, r = null !== (t = a.size) && void 0 !== t ? t : 0;
  return (0, s.jsxs)("div", {
    className: l.container,
    children: [(0, s.jsx)(i.default, {
      width: 16,
      height: 16,
      className: l.fileIcon
    }), (0, s.jsx)(n.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(n.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: l.fileName,
      children: a.filename
    }), (0, s.jsx)(n.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)("div", {
      className: l.dot
    }), (0, s.jsx)(n.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, s.jsxs)(n.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [Math.round(r / 1024 / 1024 * 100) / 100, "MB"]
    })]
  })
}