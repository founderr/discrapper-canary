"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("286379"),
  i = a("481060"),
  r = a("797614"),
  o = a("359110"),
  u = a("6025"),
  d = a("433355"),
  c = a("26373"),
  f = a("486622"),
  E = a("376191"),
  h = a("86203"),
  _ = a("689938"),
  C = a("65207");

function m(e) {
  let {
    active: t,
    user: a,
    channel: m
  } = e, S = (0, c.useListHasSingleSpamMessageRequest)(), I = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(_.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE)), r.default.increment({
      name: l.MetricEvents.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), p = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), T = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID), S && (0, o.transitionToChannel)(m.id)
  }, [m.id, S]), {
    acceptMessageRequest: g,
    isAcceptLoading: A,
    isUserProfileLoading: N,
    isOptimisticAccepted: v
  } = (0, f.useMessageRequestActions)({
    user: a,
    onAcceptSuccess: T,
    onRejectSuccess: p,
    onError: I
  }), R = A || N, O = R || v;
  return (0, n.jsxs)("div", {
    className: C.container,
    children: [(0, n.jsx)(E.default, {
      otherUser: a,
      channel: m,
      active: t
    }), (0, n.jsxs)("div", {
      className: C.actions,
      children: [(0, n.jsx)(i.Button, {
        className: C.button,
        color: i.ButtonColors.PRIMARY,
        size: i.Button.Sizes.SMALL,
        onClick: e => {
          g(m.id), e.stopPropagation()
        },
        disabled: O,
        submitting: R,
        children: _.default.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }), (0, n.jsx)(h.default, {
        className: C.button,
        channel: m,
        buttonSize: i.Button.Sizes.SMALL
      })]
    })]
  })
}