"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var n = s("37983"),
  o = s("884691"),
  a = s("733154"),
  r = s("505088"),
  i = s("202804"),
  l = s("77078"),
  u = s("446674"),
  d = s("736964"),
  c = s("545158"),
  N = s("652126"),
  I = s("27618"),
  E = s("33320"),
  T = s("49111"),
  A = s("782340"),
  C = s("932379"),
  R = s("921208");

function f(e) {
  let {
    onNavigate: t,
    onClose: s,
    senderId: f,
    hasReported: _,
    onReport: S
  } = e, P = (0, u.useStateFromStores)([I.default], () => I.default.isBlocked(f)), [O, h] = o.useState(P), p = (0, N.useShouldShowHelplineLink)(), g = () => {
    h(!0), d.default.addRelationship({
      userId: f,
      context: {
        location: "InappropriateConversationModal-web"
      },
      type: T.RelationshipTypes.BLOCKED
    })
  }, x = () => {
    h(!1), d.default.unblockUser(f, {
      location: "InappropriateConversationModal-web"
    })
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: R,
      alt: A.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
      className: C.heroImage
    }), (0, n.jsxs)(l.ModalContent, {
      className: C.body,
      children: [(0, n.jsxs)("div", {
        className: C.textContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: A.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: C.description,
          children: A.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: C.buttonContainer,
        children: [(0, n.jsxs)(l.Button, {
          color: l.Button.Colors.BRAND_NEW,
          size: l.Button.Sizes.LARGE,
          className: C.button,
          innerClassName: C.buttonInner,
          onClick: () => {
            O ? x() : g()
          },
          children: [(0, n.jsx)(r.CircleXIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: C.buttonIcon
          }), O ? A.default.Messages.UNBLOCK : A.default.Messages.BLOCK]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: C.button,
          innerClassName: C.buttonInner,
          onClick: () => {
            S()
          },
          disabled: _,
          children: [(0, n.jsx)(i.FlagIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: C.buttonIcon
          }), _ ? A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: C.button,
          innerClassName: C.buttonInner,
          onClick: () => {
            p ? (0, c.default)("https://www.crisistextline.org/") : (0, c.default)("https://nofiltr.org")
          },
          children: [(0, n.jsx)(a.ChatIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: C.buttonIcon
          }), p ? A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_NOFILTR]
        })]
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      className: C.footer,
      children: [(0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.TRANSPARENT,
        size: l.Button.Sizes.MEDIUM,
        onClick: s,
        children: A.default.Messages.CLOSE
      }), (0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.TRANSPARENT,
        size: l.Button.Sizes.MEDIUM,
        onClick: () => t(E.InappropriateConversationModalSlideKeys.INTRO),
        children: A.default.Messages.BACK
      })]
    })]
  })
}