"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  r = n("884691"),
  u = n("414456"),
  a = n.n(u),
  l = n("77078"),
  o = n("371642"),
  s = n("559046");

function c(t) {
  let {
    filename: e,
    className: n,
    filters: u,
    buttonText: c,
    placeholder: d,
    onFileSelect: f
  } = t, E = r.useRef(null);
  return (0, i.jsxs)("div", {
    className: a(n, s.fileUpload),
    children: [(0, i.jsx)("input", {
      className: s.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: d,
      type: "text",
      value: e
    }), (0, i.jsxs)(l.Button, {
      size: l.Button.Sizes.MIN,
      className: s.fileUploadButton,
      children: [c, (0, i.jsx)(o.default, {
        ref: E,
        tabIndex: -1,
        onChange: t => {
          var e;
          let n = null === (e = t.currentTarget.files) || void 0 === e ? void 0 : e[0];
          f(n)
        },
        multiple: !1,
        filters: u
      })]
    })]
  })
}