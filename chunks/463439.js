t.d(n, {
  Z: function() {
    return C
  }
}), t(47120);
var s = t(735250),
  o = t(470079),
  r = t(481060),
  a = t(442837),
  i = t(194359),
  c = t(782568),
  E = t(726521),
  N = t(485664),
  l = t(699516),
  u = t(473092),
  I = t(941362),
  T = t(850165),
  A = t(134612),
  _ = t(981631),
  R = t(689938),
  d = t(897583),
  O = t(149355);

function C(e) {
  let {
    senderId: n,
    channelId: t,
    hasReported: C,
    onReport: S,
    trackAnalyticsEvent: P
  } = e, h = (0, a.e7)([l.Z], () => l.Z.isBlocked(n)), [M, f] = o.useState(h), g = (0, N.o)(), [m, p] = o.useState(!1), x = (0, I.q)(t), L = () => {
    f(!0), i.Z.addRelationship({
      userId: n,
      context: {
        location: A.DL
      },
      type: _.OGo.BLOCKED
    }), P(u.NM.USER_TAKEOVER_MODAL_BLOCK)
  }, Z = () => {
    f(!1), i.Z.unblockUser(n, {
      location: A.DL
    }), P(u.NM.USER_TAKEOVER_MODAL_UNBLOCK)
  }, v = async () => {
    if (null != x) p(!0), await (0, E.J7)(x, () => {
      (0, r.showToast)((0, r.createToast)(R.Z.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, r.ToastType.SUCCESS)), S()
    }, () => {
      (0, r.showToast)((0, r.createToast)(R.Z.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, r.ToastType.FAILURE))
    }), p(!1), P(u.NM.USER_TAKEOVER_MODAL_REPORT)
  };
  return (0, s.jsx)(T.Z, {
    heroImageSrc: O,
    heroImageAlt: R.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
    header: R.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
    description: R.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
    children: (0, s.jsxs)("div", {
      className: d.buttonContainer,
      children: [(0, s.jsxs)(r.Button, {
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.LARGE,
        className: d.button,
        innerClassName: d.buttonInner,
        onClick: () => {
          M ? Z() : L()
        },
        children: [(0, s.jsx)(r.CircleXIcon, {
          size: "custom",
          height: 20,
          width: 20,
          color: r.tokens.colors.WHITE,
          className: d.buttonIcon
        }), M ? R.Z.Messages.UNBLOCK : R.Z.Messages.BLOCK]
      }), (0, s.jsxs)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        size: r.Button.Sizes.LARGE,
        className: d.button,
        innerClassName: d.buttonInner,
        onClick: v,
        submitting: m,
        disabled: C,
        children: [(0, s.jsx)(r.FlagIcon, {
          size: "custom",
          height: 20,
          width: 20,
          color: r.tokens.colors.WHITE,
          className: d.buttonIcon
        }), C ? R.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : R.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
      }), (0, s.jsxs)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        size: r.Button.Sizes.LARGE,
        className: d.button,
        innerClassName: d.buttonInner,
        onClick: () => {
          g ? ((0, c.Z)(A.EI), P(u.NM.USER_TAKEOVER_MODAL_CTL)) : ((0, c.Z)(A.n4), P(u.NM.USER_TAKEOVER_MODAL_NO_FILTR))
        },
        children: [(0, s.jsx)(r.ChatIcon, {
          size: "custom",
          height: 20,
          width: 20,
          color: r.tokens.colors.WHITE,
          className: d.buttonIcon
        }), g ? R.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE]
      })]
    })
  })
}