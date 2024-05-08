"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("286379"),
  l = n("481060"),
  r = n("797614"),
  o = n("359110"),
  u = n("6025"),
  d = n("433355"),
  c = n("26373"),
  f = n("486622"),
  E = n("376191"),
  h = n("86203"),
  _ = n("689938"),
  C = n("564297");

function m(e) {
  let {
    active: t,
    user: n,
    channel: m
  } = e, S = (0, c.useListHasSingleSpamMessageRequest)(), p = s.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(_.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, l.ToastType.FAILURE)), r.default.increment({
      name: i.MetricEvents.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), I = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), g = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID), S && (0, o.transitionToChannel)(m.id)
  }, [m.id, S]), {
    acceptMessageRequest: T,
    isAcceptLoading: A,
    isUserProfileLoading: N,
    isOptimisticAccepted: v
  } = (0, f.useMessageRequestActions)({
    user: n,
    onAcceptSuccess: g,
    onRejectSuccess: I,
    onError: p
  }), R = A || N, O = R || v;
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsx)(E.default, {
      otherUser: n,
      channel: m,
      active: t
    }), (0, a.jsxs)("div", {
      className: C.actions,
      children: [(0, a.jsx)(l.Button, {
        className: C.button,
        color: l.ButtonColors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          T(m.id), e.stopPropagation()
        },
        disabled: O,
        submitting: R,
        children: _.default.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }), (0, a.jsx)(h.default, {
        className: C.button,
        channel: m,
        buttonSize: l.Button.Sizes.SMALL
      })]
    })]
  })
}