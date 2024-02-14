"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("37983");
s("884691");
var o = s("77078"),
  a = s("632758"),
  r = s("33320"),
  i = s("324252"),
  l = s("782340"),
  u = s("932379"),
  d = s("82480");

function c(e) {
  let {
    onNavigate: t,
    onClose: s
  } = e, c = (0, i.getInappropriateConversationsSafetyTips)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: d,
      alt: l.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_ALT,
      className: u.heroImage
    }), (0, n.jsxs)(o.ModalContent, {
      className: u.body,
      children: [(0, n.jsx)("div", {
        className: u.textContainer,
        children: (0, n.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: l.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_HEADER
        })
      }), (0, n.jsx)(a.default, {
        tips: c,
        headerText: l.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION
      })]
    }), (0, n.jsxs)(o.ModalFooter, {
      className: u.footer,
      children: [(0, n.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: s,
        children: l.default.Messages.CLOSE
      }), (0, n.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: () => t(r.InappropriateConversationModalSlideKeys.INTRO),
        children: l.default.Messages.BACK
      })]
    })]
  })
}