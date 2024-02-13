"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var n = s("37983");
s("884691");
var o = s("77078"),
  a = s("446674"),
  r = s("697218"),
  i = s("158998"),
  l = s("33320"),
  u = s("782340"),
  d = s("725803"),
  c = s("546597");

function N(e) {
  let {
    senderId: t,
    onNavigate: s,
    onClose: N
  } = e, I = (0, a.useStateFromStores)([r.default], () => {
    let e = r.default.getUser(t);
    return i.default.getName(e)
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: c,
      alt: u.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
      className: d.heroImage
    }), (0, n.jsxs)(o.ModalContent, {
      className: d.body,
      children: [(0, n.jsxs)("div", {
        className: d.textContainer,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: d.description,
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({
            username: I
          })
        })]
      }), (0, n.jsxs)("div", {
        className: d.buttonContainer,
        children: [(0, n.jsx)(o.Button, {
          color: o.Button.Colors.BRAND_NEW,
          size: o.Button.Sizes.LARGE,
          className: d.button,
          onClick: () => s(l.InappropriateConversationModalSlideKeys.TAKE_ACTION),
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
        }), (0, n.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.LARGE,
          className: d.button,
          onClick: () => s(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS),
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
        })]
      })]
    }), (0, n.jsx)(o.ModalFooter, {
      className: d.footer,
      children: (0, n.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: N,
        children: u.default.Messages.CLOSE
      })
    })]
  })
}