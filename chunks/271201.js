"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
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
  _ = s("932379"),
  c = s("546597");

function d(e) {
  let {
    senderId: t,
    onNavigate: s,
    onClose: d
  } = e, E = (0, o.useStateFromStores)([r.default], () => {
    let e = r.default.getUser(t);
    return i.default.getName(e)
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: c,
      alt: u.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
      className: _.heroImage
    }), (0, n.jsxs)(a.ModalContent, {
      className: _.body,
      children: [(0, n.jsxs)("div", {
        className: _.textContainer,
        children: [(0, n.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER
        }), (0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: _.description,
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({
            username: E
          })
        })]
      }), (0, n.jsxs)("div", {
        className: _.buttonContainer,
        children: [(0, n.jsx)(a.Button, {
          color: a.Button.Colors.BRAND_NEW,
          size: a.Button.Sizes.LARGE,
          className: _.button,
          onClick: () => s(l.InappropriateConversationModalSlideKeys.TAKE_ACTION),
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
        }), (0, n.jsx)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          size: a.Button.Sizes.LARGE,
          className: _.button,
          onClick: () => s(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS),
          children: u.default.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
        })]
      })]
    }), (0, n.jsx)(a.ModalFooter, {
      className: _.footer,
      children: (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.TRANSPARENT,
        size: a.Button.Sizes.MEDIUM,
        onClick: d,
        children: u.default.Messages.CLOSE
      })
    })]
  })
}