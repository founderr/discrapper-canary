"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  r = s("733154"),
  o = s("505088"),
  i = s("202804"),
  _ = s("77078"),
  l = s("446674"),
  u = s("736964"),
  E = s("545158"),
  c = s("377114"),
  d = s("652126"),
  T = s("27618"),
  R = s("217736"),
  N = s("615992"),
  A = s("33320"),
  S = s("324252"),
  I = s("49111"),
  O = s("782340"),
  f = s("932379"),
  C = s("921208");

function p(e) {
  let {
    onNavigate: t,
    onClose: s,
    senderId: p,
    channelId: m,
    hasReported: P,
    onReport: g,
    trackAnalyticsEvent: L
  } = e, h = (0, l.useStateFromStores)([T.default], () => T.default.isBlocked(p)), [M, v] = a.useState(h), y = (0, d.useShouldShowHelplineLink)(), [x, B] = a.useState(!1), F = (0, N.useLastChannelMessage)(m), U = () => {
    v(!0), u.default.addRelationship({
      userId: p,
      context: {
        location: "InappropriateConversationModal-web"
      },
      type: I.RelationshipTypes.BLOCKED
    }), L(R.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK)
  }, D = () => {
    v(!1), u.default.unblockUser(p, {
      location: "InappropriateConversationModal-web"
    }), L(R.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK)
  }, b = async () => {
    null != F && (B(!0), await (0, c.submitReportForInappropriateConversationSafetyAlert)(F, () => {
      (0, _.showToast)((0, _.createToast)(O.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, _.ToastType.SUCCESS)), g()
    }, () => {
      (0, _.showToast)((0, _.createToast)(O.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, _.ToastType.FAILURE))
    }), B(!1), L(R.CtaEventTypes.USER_TAKEOVER_MODAL_REPORT))
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: C,
      alt: O.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
      className: f.heroImage
    }), (0, n.jsxs)(_.ModalContent, {
      className: f.body,
      children: [(0, n.jsxs)("div", {
        className: f.textContainer,
        children: [(0, n.jsx)(_.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: O.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER
        }), (0, n.jsx)(_.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: f.description,
          children: O.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: f.buttonContainer,
        children: [(0, n.jsxs)(_.Button, {
          color: _.Button.Colors.BRAND_NEW,
          size: _.Button.Sizes.LARGE,
          className: f.button,
          innerClassName: f.buttonInner,
          onClick: () => {
            M ? D() : U()
          },
          children: [(0, n.jsx)(o.CircleXIcon, {
            height: 20,
            width: 20,
            color: _.tokens.colors.WHITE,
            className: f.buttonIcon
          }), M ? O.default.Messages.UNBLOCK : O.default.Messages.BLOCK]
        }), (0, n.jsxs)(_.Button, {
          color: _.Button.Colors.PRIMARY,
          size: _.Button.Sizes.LARGE,
          className: f.button,
          innerClassName: f.buttonInner,
          onClick: b,
          submitting: x,
          disabled: P,
          children: [(0, n.jsx)(i.FlagIcon, {
            height: 20,
            width: 20,
            color: _.tokens.colors.WHITE,
            className: f.buttonIcon
          }), P ? O.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : O.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
        }), (0, n.jsxs)(_.Button, {
          color: _.Button.Colors.PRIMARY,
          size: _.Button.Sizes.LARGE,
          className: f.button,
          innerClassName: f.buttonInner,
          onClick: () => {
            y ? ((0, E.default)(S.CRISIS_TEXT_LINE_URL), L(R.CtaEventTypes.USER_TAKEOVER_MODAL_CTL)) : ((0, E.default)(S.NOFILTR_URL), L(R.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR))
          },
          children: [(0, n.jsx)(r.ChatIcon, {
            height: 20,
            width: 20,
            color: _.tokens.colors.WHITE,
            className: f.buttonIcon
          }), y ? O.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE]
        })]
      })]
    }), (0, n.jsxs)(_.ModalFooter, {
      className: f.footer,
      children: [(0, n.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: _.Button.Colors.TRANSPARENT,
        size: _.Button.Sizes.MEDIUM,
        onClick: s,
        children: O.default.Messages.CLOSE
      }), (0, n.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: _.Button.Colors.TRANSPARENT,
        size: _.Button.Sizes.MEDIUM,
        onClick: () => t(A.InappropriateConversationModalSlideKeys.INTRO),
        children: O.default.Messages.BACK
      })]
    })]
  })
}