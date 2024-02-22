"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  i = n("414456"),
  r = n.n(i),
  u = n("77078"),
  o = n("371642"),
  s = n("559046");

function c(e) {
  let {
    filename: t,
    className: n,
    filters: i,
    buttonText: c,
    placeholder: d,
    onFileSelect: f
  } = e, h = a.useRef(null);
  return (0, l.jsxs)("div", {
    className: r(n, s.fileUpload),
    children: [(0, l.jsx)("input", {
      className: s.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: d,
      type: "text",
      value: t
    }), (0, l.jsxs)(u.Button, {
      size: u.Button.Sizes.MIN,
      className: s.fileUploadButton,
      children: [c, (0, l.jsx)(o.default, {
        ref: h,
        tabIndex: -1,
        onChange: e => {
          var t;
          let n = null === (t = e.currentTarget.files) || void 0 === t ? void 0 : t[0];
          f(n)
        },
        multiple: !1,
        filters: i
      })]
    })]
  })
}