"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  r = n.n(a),
  o = n("77078"),
  s = n("371642"),
  c = n("775980");

function u(t) {
  let {
    filename: e,
    className: n,
    filters: a,
    buttonText: u,
    placeholder: d,
    onFileSelect: f
  } = t, p = i.useRef(null);
  return (0, l.jsxs)("div", {
    className: r(n, c.fileUpload),
    children: [(0, l.jsx)("input", {
      className: c.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: d,
      type: "text",
      value: e
    }), (0, l.jsxs)(o.Button, {
      size: o.Button.Sizes.MIN,
      className: c.fileUploadButton,
      children: [u, (0, l.jsx)(s.default, {
        ref: p,
        tabIndex: -1,
        onChange: t => {
          var e;
          let n = null === (e = t.currentTarget.files) || void 0 === e ? void 0 : e[0];
          f(n)
        },
        multiple: !1,
        filters: a
      })]
    })]
  })
}