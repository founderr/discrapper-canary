"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("176743"),
  o = s("612165"),
  i = s("124826"),
  u = s("481060"),
  l = s("442837"),
  E = s("194359"),
  T = s("782568"),
  c = s("726521"),
  d = s("485664"),
  N = s("699516"),
  I = s("473092"),
  A = s("941362"),
  _ = s("850165"),
  R = s("134612"),
  C = s("981631"),
  O = s("689938"),
  S = s("128771"),
  f = s("149355");

function P(e) {
  let {
    senderId: t,
    channelId: s,
    hasReported: P,
    onReport: p,
    trackAnalyticsEvent: g
  } = e, h = (0, l.useStateFromStores)([N.default], () => N.default.isBlocked(t)), [M, L] = a.useState(h), m = (0, d.useShouldShowHelplineLink)(), [v, x] = a.useState(!1), B = (0, A.useLastChannelMessage)(s), D = () => {
    L(!0), E.default.addRelationship({
      userId: t,
      context: {
        location: R.MODAL_LOCATION_CONTEXT_WEB
      },
      type: C.RelationshipTypes.BLOCKED
    }), g(I.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK)
  }, j = () => {
    L(!1), E.default.unblockUser(t, {
      location: R.MODAL_LOCATION_CONTEXT_WEB
    }), g(I.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK)
  }, y = async () => {
    null != B && (x(!0), await (0, c.submitReportForInappropriateConversationSafetyAlert)(B, () => {
      (0, u.showToast)((0, u.createToast)(O.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, u.ToastType.SUCCESS)), p()
    }, () => {
      (0, u.showToast)((0, u.createToast)(O.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, u.ToastType.FAILURE))
    }), x(!1), g(I.CtaEventTypes.USER_TAKEOVER_MODAL_REPORT))
  };
  return (0, n.jsx)(_.default, {
    heroImageSrc: f,
    heroImageAlt: O.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
    header: O.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
    description: O.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
    children: (0, n.jsxs)("div", {
      className: S.buttonContainer,
      children: [(0, n.jsxs)(u.Button, {
        color: u.Button.Colors.BRAND_NEW,
        size: u.Button.Sizes.LARGE,
        className: S.button,
        innerClassName: S.buttonInner,
        onClick: () => {
          M ? j() : D()
        },
        children: [(0, n.jsx)(o.CircleXIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: S.buttonIcon
        }), M ? O.default.Messages.UNBLOCK : O.default.Messages.BLOCK]
      }), (0, n.jsxs)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.LARGE,
        className: S.button,
        innerClassName: S.buttonInner,
        onClick: y,
        submitting: v,
        disabled: P,
        children: [(0, n.jsx)(i.FlagIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: S.buttonIcon
        }), P ? O.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : O.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
      }), (0, n.jsxs)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.LARGE,
        className: S.button,
        innerClassName: S.buttonInner,
        onClick: () => {
          m ? ((0, T.default)(R.CRISIS_TEXT_LINE_URL), g(I.CtaEventTypes.USER_TAKEOVER_MODAL_CTL)) : ((0, T.default)(R.NOFILTR_URL), g(I.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR))
        },
        children: [(0, n.jsx)(r.ChatIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: S.buttonIcon
        }), m ? O.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE]
      })]
    })
  })
}