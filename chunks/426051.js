n.d(t, {
  Z: function() {
    return g
  }
});
var i = n(735250),
  s = n(470079),
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

function g(e) {
  let {
    active: t,
    user: n,
    channel: g
  } = e, p = (0, d.V)(), N = s.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(I.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, a.ToastType.FAILURE)), r.Z.increment({
      name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), T = s.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ)
  }, []), C = s.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ), p && (0, o.Kh)(g.id)
  }, [g.id, p]), {
    acceptMessageRequest: S,
    isAcceptLoading: A,
    isUserProfileLoading: f,
    isOptimisticAccepted: Z
  } = (0, E.m)({
    user: n,
    onAcceptSuccess: C,
    onRejectSuccess: T,
    onError: N
  }), v = A || f, L = v || Z;
  return (0, i.jsxs)("div", {
    className: m.container,
    children: [(0, i.jsx)(h.Z, {
      otherUser: n,
      channel: g,
      active: t
    }), (0, i.jsxs)("div", {
      className: m.actions,
      children: [(0, i.jsx)(a.Button, {
        className: m.button,
        color: a.ButtonColors.PRIMARY,
        size: a.Button.Sizes.SMALL,
        onClick: e => {
          S(g.id), e.stopPropagation()
        },
        disabled: L,
        submitting: v,
        children: I.Z.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }), (0, i.jsx)(_.Z, {
        className: m.button,
        channel: g,
        buttonSize: a.Button.Sizes.SMALL
      })]
    })]
  })
}