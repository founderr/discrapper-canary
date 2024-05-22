"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  o = s("53281"),
  d = s("383638");

function u(e) {
  let {
    filename: t,
    className: s,
    filters: l,
    buttonText: u,
    placeholder: c,
    onFileSelect: S
  } = e, E = n.useRef(null);
  return (0, a.jsxs)("div", {
    className: i()(s, d.fileUpload),
    children: [(0, a.jsx)("input", {
      className: d.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: c,
      type: "text",
      value: t
    }), (0, a.jsxs)(r.Button, {
      size: r.Button.Sizes.MIN,
      className: d.fileUploadButton,
      children: [u, (0, a.jsx)(o.default, {
        ref: E,
        tabIndex: -1,
        onChange: e => {
          var t;
          S(null === (t = e.currentTarget.files) || void 0 === t ? void 0 : t[0])
        },
        multiple: !1,
        filters: l
      })]
    })]
  })
}