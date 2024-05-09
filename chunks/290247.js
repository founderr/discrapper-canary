"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var i = l("735250");
l("470079");
var a = l("120356"),
  n = l.n(a),
  s = l("481060"),
  r = l("66585");

function o(e) {
  let {
    supportedLanguages: t
  } = e;
  return (0, i.jsx)("ul", {
    className: r.outerContainer,
    children: t.map(e => (0, i.jsx)("li", {
      className: n()(r.innerContainer, r.languageItem),
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, e))
  })
}