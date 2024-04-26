"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var s = a("735250");
a("470079");
var n = a("481060"),
  i = a("682864"),
  l = a("210712"),
  r = a("626481");

function u(e) {
  var t;
  let {
    attachment: a
  } = e, u = null !== (t = a.size) && void 0 !== t ? t : 0;
  return (0, s.jsxs)("div", {
    className: r.container,
    children: [(0, s.jsx)(l.default, {
      width: 16,
      height: 16,
      className: r.fileIcon
    }), (0, s.jsx)(i.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(n.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: r.fileName,
      children: a.filename
    }), (0, s.jsx)(i.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)("div", {
      className: r.dot
    }), (0, s.jsx)(i.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsxs)(n.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [Math.round(u / 1024 / 1024 * 100) / 100, "MB"]
    })]
  })
}