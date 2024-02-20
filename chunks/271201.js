"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var n = s("37983");
s("884691");
var a = s("77078"),
  o = s("446674"),
  r = s("697218"),
  i = s("158998"),
  l = s("33320"),
  u = s("782340"),
  c = s("932379"),
  d = s("546597");

function N(e) {
  let {
    senderId: t,
    onNavigate: s,
    onClose: N
  } = e, I = (0, o.useStateFromStores)([r.default], () => {
    let e = r.default.getUser(t);
    return i.default.getName(e)
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: d,
      alt: u.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
      className: c.heroImage
    }), (0, n.jsxs)(a.ModalContent, {
      className: c.body,
      children: [(0, n.jsxs)("div", {
        className: c.textContainer,
        children: [(0, n.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER
        }), (0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: c.description,
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({
            username: I
          })
        })]
      }), (0, n.jsxs)("div", {
        className: c.buttonContainer,
        children: [(0, n.jsx)(a.Button, {
          color: a.Button.Colors.BRAND_NEW,
          size: a.Button.Sizes.LARGE,
          className: c.button,
          onClick: () => s(l.InappropriateConversationModalSlideKeys.TAKE_ACTION),
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
        }), (0, n.jsx)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          size: a.Button.Sizes.LARGE,
          className: c.button,
          onClick: () => s(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS),
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
        })]
      })]
    }), (0, n.jsx)(a.ModalFooter, {
      className: c.footer,
      children: (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.TRANSPARENT,
        size: a.Button.Sizes.MEDIUM,
        onClick: N,
        children: u.default.Messages.CLOSE
      })
    })]
  })
}