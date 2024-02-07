"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n = s("37983");
s("884691");
var r = s("77078"),
  l = s("834897"),
  i = s("85336"),
  a = s("425480"),
  o = s("504898"),
  u = s("551290");

function d(e) {
  let {
    step: t,
    onClose: s
  } = e, d = (0, l.default)(a.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
  return t === i.Step.BENEFITS || t === i.Step.CONFIRM ? null : (0, n.jsxs)("div", {
    className: o.headerContainer,
    children: [!d && (0, n.jsx)("div", {
      className: o.headerImageContainer,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      children: (0, n.jsx)("img", {
        src: u,
        alt: "",
        className: o.headerImage
      })
    }), (0, n.jsx)(r.ModalCloseButton, {
      withCircleBackground: !0,
      className: o.closeButton,
      onClick: s
    })]
  })
}