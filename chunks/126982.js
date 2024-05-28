"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("131388"),
  i = s("409813"),
  r = s("750143"),
  d = s("646900"),
  u = s("60314");

function o(e) {
  let {
    step: t,
    onClose: s
  } = e, o = (0, n.default)(r.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
  return t === i.Step.BENEFITS || t === i.Step.CONFIRM ? null : (0, a.jsxs)("div", {
    className: d.headerContainer,
    children: [!o && (0, a.jsx)("div", {
      className: d.headerImageContainer,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      children: (0, a.jsx)("img", {
        src: u,
        alt: "",
        className: d.headerImage
      })
    }), (0, a.jsx)(l.ModalCloseButton, {
      withCircleBackground: !0,
      className: d.closeButton,
      onClick: s
    })]
  })
}