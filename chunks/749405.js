"use strict";
a.r(t), a.d(t, {
  PendingMessageRequestRowItem: function() {
    return h
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("359110"),
  r = a("6025"),
  o = a("433355"),
  u = a("26373"),
  d = a("486622"),
  c = a("376191"),
  f = a("689938"),
  E = a("557651");

function h(e) {
  let {
    active: t,
    user: a,
    channel: h
  } = e, _ = (0, u.useListHasSingleMessageRequest)(), C = s.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(f.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, l.ToastType.FAILURE))
  }, []), m = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), S = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID), _ && (0, i.transitionToChannel)(h.id)
  }, [h.id, _]), {
    acceptMessageRequest: p,
    rejectMessageRequest: I,
    isAcceptLoading: T,
    isRejectLoading: g,
    isUserProfileLoading: A,
    isOptimisticAccepted: N,
    isOptimisticRejected: v
  } = (0, d.useMessageRequestActions)({
    user: a,
    onAcceptSuccess: S,
    onRejectSuccess: m,
    onError: C
  }), R = T || g || A || N || v;
  return (0, n.jsxs)("div", {
    className: E.container,
    children: [(0, n.jsx)(c.default, {
      channel: h,
      otherUser: a,
      active: t
    }), (0, n.jsxs)("div", {
      className: E.actions,
      children: [(0, n.jsx)(l.Button, {
        className: E.button,
        color: l.ButtonColors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), I(h.id)
        },
        disabled: R,
        submitting: g || v,
        children: f.default.Messages.MESSAGE_REQUEST_IGNORE
      }), (0, n.jsx)(l.Button, {
        className: E.button,
        color: l.ButtonColors.BRAND,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), p(h.id)
        },
        disabled: R,
        submitting: T || A || N,
        children: f.default.Messages.MESSAGE_REQUEST_ACCEPT
      })]
    })]
  })
}