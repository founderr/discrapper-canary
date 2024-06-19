a.d(s, {
  Z: function() {
    return x
  }
});
var t = a(735250),
  n = a(470079),
  o = a(120356),
  i = a.n(o),
  l = a(399606),
  r = a(481060),
  c = a(446183),
  d = a(677281),
  E = a(378298),
  N = a(359119),
  R = a(473092),
  _ = a(689938),
  T = a(885075),
  A = a(354603);

function u() {
  return (0, t.jsxs)("div", {
    className: i()(A.toast, T.toast),
    children: [(0, t.jsx)(r.ShieldIcon, {
      color: r.tokens.colors.TEXT_BRAND
    }), (0, t.jsx)(r.Text, {
      className: A.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: _.Z.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
    })]
  })
}

function x(e) {
  let {
    channelId: s,
    warningId: a,
    senderId: o
  } = e, A = (0, l.e7)([N.ZP], () => N.ZP.getChannelSafetyWarning(s, a)), x = n.useMemo(() => (null == A ? void 0 : A.feedback_type) === N.ny.UPVOTE, [A]), M = n.useMemo(() => (null == A ? void 0 : A.feedback_type) === N.ny.DOWNVOTE, [A]), m = n.useCallback((e, n) => {
    (null == A ? void 0 : A.feedback_type) !== e && ((0, E.Ms)(s, a, e), (0, r.showToast)((0, r.createToast)(_.Z.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, r.ToastType.CUSTOM, {
      component: (0, t.jsx)(u, {})
    })), (0, R.qc)({
      channelId: s,
      warningId: a,
      senderId: o,
      warningType: N.pj.STRANGER_DANGER,
      cta: n
    }))
  }, [A, s, a, o]);
  return (0, t.jsxs)("div", {
    className: T.feedback,
    children: [(0, t.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: _.Z.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
    }), (0, t.jsxs)("div", {
      className: T.buttonsContainer,
      children: [(0, t.jsx)(r.Clickable, {
        className: i()([T.buttonsBackground, x ? T.buttonsBackgroundActive : T.buttonsBackgroundInactive, {
          [T.disabled]: x
        }]),
        onClick: () => m(N.ny.UPVOTE, R.NM.FEEDBACK_UPVOTE),
        "aria-label": _.Z.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
        children: (0, t.jsx)(d.Z, {
          className: T.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      }), (0, t.jsx)(r.Clickable, {
        className: i()([T.buttonsBackground, M ? T.buttonsBackgroundActive : T.buttonsBackgroundInactive, {
          [T.disabled]: M
        }]),
        onClick: () => m(N.ny.DOWNVOTE, R.NM.FEEDBACK_DOWNVOTE),
        "aria-label": _.Z.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
        children: (0, t.jsx)(c.Z, {
          className: T.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      })]
    })]
  })
}