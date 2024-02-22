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
  T = s("652126"),
  E = s("27618"),
  R = s("33320"),
  A = s("324252"),
  C = s("49111"),
  f = s("782340"),
  _ = s("932379"),
  S = s("921208");

function O(e) {
  let {
    onNavigate: t,
    onClose: s,
    senderId: O,
    channelId: P,
    hasReported: h,
    onReport: p
  } = e, g = (0, u.useStateFromStores)([E.default], () => E.default.isBlocked(O)), [x, m] = a.useState(g), M = (0, T.useShouldShowHelplineLink)(), [j, v] = a.useState(!1), L = (0, I.useLongestChannelMessageBeforeReply)(P, O), B = () => {
    m(!0), c.default.addRelationship({
      userId: O,
      context: {
        location: "InappropriateConversationModal-web"
      },
      type: C.RelationshipTypes.BLOCKED
    })
  }, b = () => {
    m(!1), c.default.unblockUser(O, {
      location: "InappropriateConversationModal-web"
    })
  }, y = async () => {
    null != L && (v(!0), await (0, N.submitReportForInappropriateConversationSafetyAlert)(L, () => {
      (0, l.showToast)((0, l.createToast)(f.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, l.ToastType.SUCCESS)), p()
    }, () => {
      (0, l.showToast)((0, l.createToast)(f.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, l.ToastType.FAILURE))
    }), v(!1))
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: S,
      alt: f.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
      className: _.heroImage
    }), (0, n.jsxs)(l.ModalContent, {
      className: _.body,
      children: [(0, n.jsxs)("div", {
        className: _.textContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: f.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: _.description,
          children: f.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: _.buttonContainer,
        children: [(0, n.jsxs)(l.Button, {
          color: l.Button.Colors.BRAND_NEW,
          size: l.Button.Sizes.LARGE,
          className: _.button,
          innerClassName: _.buttonInner,
          onClick: () => {
            x ? b() : B()
          },
          children: [(0, n.jsx)(r.CircleXIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: _.buttonIcon
          }), x ? f.default.Messages.UNBLOCK : f.default.Messages.BLOCK]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: _.button,
          innerClassName: _.buttonInner,
          onClick: y,
          submitting: j,
          disabled: h,
          children: [(0, n.jsx)(i.FlagIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: _.buttonIcon
          }), h ? f.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : f.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.LARGE,
          className: _.button,
          innerClassName: _.buttonInner,
          onClick: () => {
            M ? (0, d.default)(A.CRISIS_TEXT_LINE_URL) : (0, d.default)(A.NOFILTR_URL)
          },
          children: [(0, n.jsx)(o.ChatIcon, {
            height: 20,
            width: 20,
            color: l.tokens.colors.INTERACTIVE_ACTIVE,
            className: _.buttonIcon
          }), M ? f.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : f.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_NOFILTR]
        })]
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      className: _.footer,
      children: [(0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.TRANSPARENT,
        size: l.Button.Sizes.MEDIUM,
        onClick: s,
        children: f.default.Messages.CLOSE
      }), (0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.TRANSPARENT,
        size: l.Button.Sizes.MEDIUM,
        onClick: () => t(R.InappropriateConversationModalSlideKeys.INTRO),
        children: f.default.Messages.BACK
      })]
    })]
  })
}