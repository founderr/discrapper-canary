"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("131388"),
  r = n("409813"),
  i = n("750143"),
  o = n("646900"),
  d = n("60314");

function u(e) {
  let {
    step: t,
    onClose: n
  } = e, u = (0, s.default)(i.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
  return t === r.Step.BENEFITS || t === r.Step.CONFIRM ? null : (0, a.jsxs)("div", {
    className: o.headerContainer,
    children: [!u && (0, a.jsx)("div", {
      className: o.headerImageContainer,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      children: (0, a.jsx)("img", {
        src: d,
        alt: "",
        className: o.headerImage
      })
    }), (0, a.jsx)(l.ModalCloseButton, {
      withCircleBackground: !0,
      className: o.closeButton,
      onClick: n
    })]
  })
}