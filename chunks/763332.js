"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  o = s("733154"),
  r = s("505088"),
  i = s("202804"),
  _ = s("77078"),
  l = s("446674"),
  u = s("736964"),
  E = s("545158"),
  c = s("377114"),
  d = s("652126"),
  T = s("27618"),
  N = s("217736"),
  A = s("615992"),
  R = s("33320"),
  I = s("324252"),
  S = s("49111"),
  C = s("782340"),
  O = s("932379"),
  f = s("921208");

function p(e) {
  let {
    onNavigate: t,
    onClose: s,
    senderId: p,
    channelId: P,
    hasReported: m,
    onReport: g,
    trackAnalyticsEvent: L
  } = e, h = (0, l.useStateFromStores)([T.default], () => T.default.isBlocked(p)), [M, v] = a.useState(h), y = (0, d.useShouldShowHelplineLink)(), [x, B] = a.useState(!1), F = (0, A.useLastChannelMessage)(P), U = () => {
    v(!0), u.default.addRelationship({
      userId: p,
      context: {
        location: "InappropriateConversationModal-web"
      },
      type: S.RelationshipTypes.BLOCKED
    }), L(N.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK)
  }, b = () => {
    v(!1), u.default.unblockUser(p, {
      location: "InappropriateConversationModal-web"
    }), L(N.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK)
  }, D = async () => {
    null != F && (B(!0), await (0, c.submitReportForInappropriateConversationSafetyAlert)(F, () => {
      (0, _.showToast)((0, _.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, _.ToastType.SUCCESS)), g()
    }, () => {
      (0, _.showToast)((0, _.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, _.ToastType.FAILURE))
    }), B(!1), L(N.CtaEventTypes.USER_TAKEOVER_MODAL_REPORT))
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: f,
      alt: C.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
      className: O.heroImage
    }), (0, n.jsxs)(_.ModalContent, {
      className: O.body,
      children: [(0, n.jsxs)("div", {
        className: O.textContainer,
        children: [(0, n.jsx)(_.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER
        }), (0, n.jsx)(_.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: O.description,
          children: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: O.buttonContainer,
        children: [(0, n.jsxs)(_.Button, {
          color: _.Button.Colors.BRAND_NEW,
          size: _.Button.Sizes.LARGE,
          className: O.button,
          innerClassName: O.buttonInner,
          onClick: () => {
            M ? b() : U()
          },
          children: [(0, n.jsx)(r.CircleXIcon, {
            height: 20,
            width: 20,
            color: _.tokens.colors.INTERACTIVE_ACTIVE,
            className: O.buttonIcon
          }), M ? C.default.Messages.UNBLOCK : C.default.Messages.BLOCK]
        }), (0, n.jsxs)(_.Button, {
          color: _.Button.Colors.PRIMARY,
          size: _.Button.Sizes.LARGE,
          className: O.button,
          innerClassName: O.buttonInner,
          onClick: D,
          submitting: x,
          disabled: m,
          children: [(0, n.jsx)(i.FlagIcon, {
            height: 20,
            width: 20,
            color: _.tokens.colors.INTERACTIVE_ACTIVE,
            className: O.buttonIcon
          }), m ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
        }), (0, n.jsxs)(_.Button, {
          color: _.Button.Colors.PRIMARY,
          size: _.Button.Sizes.LARGE,
          className: O.button,
          innerClassName: O.buttonInner,
          onClick: () => {
            y ? ((0, E.default)(I.CRISIS_TEXT_LINE_URL), L(N.CtaEventTypes.USER_TAKEOVER_MODAL_CTL)) : ((0, E.default)(I.NOFILTR_URL), L(N.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR))
          },
          children: [(0, n.jsx)(o.ChatIcon, {
            height: 20,
            width: 20,
            color: _.tokens.colors.INTERACTIVE_ACTIVE,
            className: O.buttonIcon
          }), y ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_NOFILTR]
        })]
      })]
    }), (0, n.jsxs)(_.ModalFooter, {
      className: O.footer,
      children: [(0, n.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: _.Button.Colors.TRANSPARENT,
        size: _.Button.Sizes.MEDIUM,
        onClick: s,
        children: C.default.Messages.CLOSE
      }), (0, n.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: _.Button.Colors.TRANSPARENT,
        size: _.Button.Sizes.MEDIUM,
        onClick: () => t(R.InappropriateConversationModalSlideKeys.INTRO),
        children: C.default.Messages.BACK
      })]
    })]
  })
}