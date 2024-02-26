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
  c = s("736964"),
  d = s("545158"),
  N = s("377114"),
  I = s("949067"),
  E = s("652126"),
  T = s("27618"),
  A = s("33320"),
  R = s("324252"),
  f = s("49111"),
  C = s("782340"),
  _ = s("932379"),
  S = s("921208");

function O(e) {
  let {
    onNavigate: t,
    onClose: s,
    senderId: O,
    channelId: h,
    hasReported: P,
    onReport: p
  } = e, g = (0, u.useStateFromStores)([T.default], () => T.default.isBlocked(O)), [m, x] = a.useState(g), M = (0, E.useShouldShowHelplineLink)(), [v, j] = a.useState(!1), L = (0, I.useLongestChannelMessageBeforeReply)(h, O), B = () => {
    x(!0), c.default.addRelationship({
      userId: O,
      context: {
        location: "InappropriateConversationModal-web"
      },
      type: f.RelationshipTypes.BLOCKED
    })
  }, y = () => {
    x(!1), c.default.unblockUser(O, {
      location: "InappropriateConversationModal-web"
    })
  }, b = async () => {
    null != L && (j(!0), await (0, N.submitReportForInappropriateConversationSafetyAlert)(L, () => {
      (0, l.showToast)((0, l.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, l.ToastType.SUCCESS)), p()
    }, () => {
      (0, l.showToast)((0, l.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, l.ToastType.FAILURE))
    }), j(!1))
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: S,
      alt: C.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
      className: _.heroImage
    }), (0, n.jsxs)(l.ModalContent, {
      className: _.body,
      children: [(0, n.jsxs)("div", {
        className: _.textContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: _.description,
          children: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: _.buttonContainer,
        children: [(0, n.jsxs)(l.Button, {
          color: l.Button.Colors.BRAND_NEW,
          size: l.Button.Sizes.LARGE,
          className: _.button,
          innerClassName: _.buttonInner,
          onClick: () => {
            m ? y() : B()
          },
          children: [(0, n.jsx)(r.CircleXIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: _.buttonIcon
          }), m ? C.default.Messages.UNBLOCK : C.default.Messages.BLOCK]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: _.button,
          innerClassName: _.buttonInner,
          onClick: b,
          submitting: v,
          disabled: P,
          children: [(0, n.jsx)(i.FlagIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: _.buttonIcon
          }), P ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: _.button,
          innerClassName: _.buttonInner,
          onClick: () => {
            M ? (0, d.default)(R.CRISIS_TEXT_LINE_URL) : (0, d.default)(R.NOFILTR_URL)
          },
          children: [(0, n.jsx)(o.ChatIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: _.buttonIcon
          }), M ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_NOFILTR]
        })]
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      className: _.footer,
      children: [(0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.TRANSPARENT,
        size: l.Button.Sizes.MEDIUM,
        onClick: s,
        children: C.default.Messages.CLOSE
      }), (0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.TRANSPARENT,
        size: l.Button.Sizes.MEDIUM,
        onClick: () => t(A.InappropriateConversationModalSlideKeys.INTRO),
        children: C.default.Messages.BACK
      })]
    })]
  })
}