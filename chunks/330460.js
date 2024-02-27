"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var n = s("37983");
s("884691");
var a = s("77078"),
  o = s("632758"),
  r = s("33320"),
  i = s("324252"),
  _ = s("782340"),
  l = s("932379"),
  u = s("82480");

function E(e) {
  let {
    onNavigate: t,
    onClose: s
  } = e, E = (0, i.getInappropriateConversationsSafetyTips)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: u,
      alt: _.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_ALT,
      className: l.heroImage
    }), (0, n.jsxs)(a.ModalContent, {
      className: l.body,
      children: [(0, n.jsx)("div", {
        className: l.textContainer,
        children: (0, n.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: _.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_HEADER
        })
      }), (0, n.jsx)("div", {
        className: l.safetyTips,
        children: (0, n.jsx)(o.default, {
          tips: E,
          headerText: _.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION
        })
      })]
    }), (0, n.jsxs)(a.ModalFooter, {
      className: l.footer,
      children: [(0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.TRANSPARENT,
        size: a.Button.Sizes.MEDIUM,
        onClick: s,
        children: _.default.Messages.CLOSE
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.TRANSPARENT,
        size: a.Button.Sizes.MEDIUM,
        onClick: () => t(r.InappropriateConversationModalSlideKeys.INTRO),
        children: _.default.Messages.BACK
      })]
    })]
  })
}