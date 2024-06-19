n.d(t, {
  C: function() {
    return _
  }
});
var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(359110),
  r = n(6025),
  o = n(433355),
  c = n(26373),
  u = n(486622),
  d = n(376191),
  E = n(689938),
  h = n(177133);

function _(e) {
  let {
    active: t,
    user: n,
    channel: _
  } = e, I = (0, c.K)(), m = s.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(E.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, l.ToastType.FAILURE))
  }, []), g = s.useCallback(() => {
    r.Z.closeChannelSidebar(o.uZ)
  }, []), p = s.useCallback(() => {
    r.Z.closeChannelSidebar(o.uZ), I && (0, a.Kh)(_.id)
  }, [_.id, I]), {
    acceptMessageRequest: T,
    rejectMessageRequest: N,
    isAcceptLoading: S,
    isRejectLoading: C,
    isUserProfileLoading: A,
    isOptimisticAccepted: f,
    isOptimisticRejected: Z
  } = (0, u.m)({
    user: n,
    onAcceptSuccess: p,
    onRejectSuccess: g,
    onError: m
  }), v = S || C || A || f || Z;
  return (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsx)(d.Z, {
      channel: _,
      otherUser: n,
      active: t
    }), (0, i.jsxs)("div", {
      className: h.actions,
      children: [(0, i.jsx)(l.Button, {
        className: h.button,
        color: l.ButtonColors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), N(_.id)
        },
        disabled: v,
        submitting: C || Z,
        children: E.Z.Messages.MESSAGE_REQUEST_IGNORE
      }), (0, i.jsx)(l.Button, {
        className: h.button,
        color: l.ButtonColors.BRAND,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), T(_.id)
        },
        disabled: v,
        submitting: S || A || f,
        children: E.Z.Messages.MESSAGE_REQUEST_ACCEPT
      })]
    })]
  })
}