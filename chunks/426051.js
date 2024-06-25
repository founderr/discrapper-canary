n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250),
  i = n(470079),
  l = n(286379),
  a = n(481060),
  r = n(797614),
  o = n(359110),
  c = n(6025),
  u = n(433355),
  d = n(26373),
  E = n(486622),
  h = n(376191),
  _ = n(86203),
  I = n(689938),
  m = n(228255);

function T(e) {
  let {
    active: t,
    user: n,
    channel: T
  } = e, g = (0, d.V)(), p = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(I.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, a.ToastType.FAILURE)), r.Z.increment({
      name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), N = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ)
  }, []), S = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ), g && (0, o.Kh)(T.id)
  }, [T.id, g]), {
    acceptMessageRequest: C,
    isAcceptLoading: A,
    isUserProfileLoading: f,
    isOptimisticAccepted: Z
  } = (0, E.m)({
    user: n,
    onAcceptSuccess: S,
    onRejectSuccess: N,
    onError: p
  }), L = A || f, O = L || Z;
  return (0, s.jsxs)("div", {
    className: m.container,
    children: [(0, s.jsx)(h.Z, {
      otherUser: n,
      channel: T,
      active: t
    }), (0, s.jsxs)("div", {
      className: m.actions,
      children: [(0, s.jsx)(a.Button, {
        className: m.button,
        color: a.ButtonColors.PRIMARY,
        size: a.Button.Sizes.SMALL,
        onClick: e => {
          C(T.id), e.stopPropagation()
        },
        disabled: O,
        submitting: L,
        children: I.Z.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }), (0, s.jsx)(_.Z, {
        className: m.button,
        channel: T,
        buttonSize: a.Button.Sizes.SMALL
      })]
    })]
  })
}