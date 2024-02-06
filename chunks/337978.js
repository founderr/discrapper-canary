"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  l = n("834897"),
  i = n("85336"),
  a = n("425480"),
  o = n("504898"),
  u = n("551290");

function d(e) {
  let {
    step: t,
    onClose: n
  } = e, d = (0, l.default)(a.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
  return t === i.Step.BENEFITS || t === i.Step.CONFIRM ? null : (0, s.jsxs)("div", {
    className: o.headerContainer,
    children: [!d && (0, s.jsx)("div", {
      className: o.headerImageContainer,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      children: (0, s.jsx)("img", {
        src: u,
        alt: "",
        className: o.headerImage
      })
    }), (0, s.jsx)(r.ModalCloseButton, {
      withCircleBackground: !0,
      className: o.closeButton,
      onClick: n
    })]
  })
}