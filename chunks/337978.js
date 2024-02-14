"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var i = n("77078"),
  a = n("834897"),
  r = n("85336"),
  l = n("425480"),
  u = n("867487"),
  o = n("551290");

function d(e) {
  let {
    step: t,
    onClose: n
  } = e, d = (0, a.default)(l.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
  return t === r.Step.BENEFITS || t === r.Step.CONFIRM ? null : (0, s.jsxs)("div", {
    className: u.headerContainer,
    children: [!d && (0, s.jsx)("div", {
      className: u.headerImageContainer,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      children: (0, s.jsx)("img", {
        src: o,
        alt: "",
        className: u.headerImage
      })
    }), (0, s.jsx)(i.ModalCloseButton, {
      withCircleBackground: !0,
      className: u.closeButton,
      onClick: n
    })]
  })
}