"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  o = s("733154"),
  r = s("505088"),
  i = s("202804"),
  l = s("77078"),
  u = s("446674"),
  _ = s("736964"),
  c = s("545158"),
  d = s("377114"),
  E = s("949067"),
  T = s("652126"),
  N = s("27618"),
  I = s("33320"),
  R = s("324252"),
  S = s("49111"),
  A = s("782340"),
  f = s("932379"),
  C = s("921208");

function O(e) {
  let {
    onNavigate: t,
    onClose: s,
    senderId: O,
    channelId: p,
    hasReported: P,
    onReport: h
  } = e, g = (0, u.useStateFromStores)([N.default], () => N.default.isBlocked(O)), [m, M] = a.useState(g), L = (0, T.useShouldShowHelplineLink)(), [x, y] = a.useState(!1), v = (0, E.useLongestChannelMessageBeforeReply)(p, O), B = () => {
    M(!0), _.default.addRelationship({
      userId: O,
      context: {
        location: "InappropriateConversationModal-web"
      },
      type: S.RelationshipTypes.BLOCKED
    })
  }, F = () => {
    M(!1), _.default.unblockUser(O, {
      location: "InappropriateConversationModal-web"
    })
  }, b = async () => {
    null != v && (y(!0), await (0, d.submitReportForInappropriateConversationSafetyAlert)(v, () => {
      (0, l.showToast)((0, l.createToast)(A.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, l.ToastType.SUCCESS)), h()
    }, () => {
      (0, l.showToast)((0, l.createToast)(A.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, l.ToastType.FAILURE))
    }), y(!1))
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: C,
      alt: A.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
      className: f.heroImage
    }), (0, n.jsxs)(l.ModalContent, {
      className: f.body,
      children: [(0, n.jsxs)("div", {
        className: f.textContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: A.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: f.description,
          children: A.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: f.buttonContainer,
        children: [(0, n.jsxs)(l.Button, {
          color: l.Button.Colors.BRAND_NEW,
          size: l.Button.Sizes.LARGE,
          className: f.button,
          innerClassName: f.buttonInner,
          onClick: () => {
            m ? F() : B()
          },
          children: [(0, n.jsx)(r.CircleXIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: f.buttonIcon
          }), m ? A.default.Messages.UNBLOCK : A.default.Messages.BLOCK]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: f.button,
          innerClassName: f.buttonInner,
          onClick: b,
          submitting: x,
          disabled: P,
          children: [(0, n.jsx)(i.FlagIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: f.buttonIcon
          }), P ? A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: f.button,
          innerClassName: f.buttonInner,
          onClick: () => {
            L ? (0, c.default)(R.CRISIS_TEXT_LINE_URL) : (0, c.default)(R.NOFILTR_URL)
          },
          children: [(0, n.jsx)(o.ChatIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: f.buttonIcon
          }), L ? A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : A.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_NOFILTR]
        })]
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      className: f.footer,
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
        onClick: () => t(I.InappropriateConversationModalSlideKeys.INTRO),
        children: A.default.Messages.BACK
      })]
    })]
  })
}