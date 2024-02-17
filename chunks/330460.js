"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n = s("37983");
s("884691");
var a = s("77078"),
  o = s("632758"),
  r = s("33320"),
  i = s("324252"),
  l = s("782340"),
  u = s("932379"),
  c = s("82480");

function d(e) {
  let {
    onNavigate: t,
    onClose: s
  } = e, d = (0, i.getInappropriateConversationsSafetyTips)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: c,
      alt: l.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_ALT,
      className: u.heroImage
    }), (0, n.jsxs)(a.ModalContent, {
      className: u.body,
      children: [(0, n.jsx)("div", {
        className: u.textContainer,
        children: (0, n.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: l.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_HEADER
        })
      }), (0, n.jsx)(o.default, {
        tips: d,
        headerText: l.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION
      })]
    }), (0, n.jsxs)(a.ModalFooter, {
      className: u.footer,
      children: [(0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.TRANSPARENT,
        size: a.Button.Sizes.MEDIUM,
        onClick: s,
        children: l.default.Messages.CLOSE
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.TRANSPARENT,
        size: a.Button.Sizes.MEDIUM,
        onClick: () => t(r.InappropriateConversationModalSlideKeys.INTRO),
        children: l.default.Messages.BACK
      })]
    })]
  })
}