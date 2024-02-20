"use strict";
n.r(t), n.d(t, {
  FormTitleTags: function() {
    return r
  },
  FormTitle: function() {
    return c
  }
});
var i, r, s = n("37983");
n("884691");
var a = n("414456"),
  o = n.n(a),
  l = n("860226"),
  u = n("22490");

function c(e) {
  let t, {
    tag: n = "h5",
    children: i,
    className: r,
    faded: a,
    disabled: c,
    required: d = !1,
    error: p,
    errorId: h,
    ...f
  } = e;
  switch (n) {
    case "legend":
    case "label":
      t = n;
      break;
    default:
      t = l.H
  }
  return (0, s.jsxs)(t, {
    className: o(u[n], "h5" !== n ? u.defaultColor : null, r, {
      [u["defaultMargin".concat(n)]]: null == r,
      [u.faded]: a,
      [u.disabled]: c,
      [u.error]: null != p
    }),
    ...f,
    children: [i, d && null == p ? (0, s.jsx)("span", {
      className: u.required,
      children: "*"
    }) : null, null != p ? (0, s.jsxs)("span", {
      id: h,
      className: u.errorMessage,
      children: [null != i ? (0, s.jsx)("span", {
        className: u.errorSeparator,
        children: "-"
      }) : null, p]
    }) : null]
  })
}(i = r || (r = {})).H1 = "h1", i.H2 = "h2", i.H3 = "h3", i.H4 = "h4", i.H5 = "h5", i.LABEL = "label", i.LEGEND = "legend"