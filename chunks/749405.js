"use strict";
n.r(t), n.d(t, {
  PendingMessageRequestRowItem: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("359110"),
  r = n("6025"),
  o = n("433355"),
  u = n("26373"),
  d = n("486622"),
  c = n("376191"),
  f = n("689938"),
  E = n("103898");

function _(e) {
  let {
    active: t,
    user: n,
    channel: _
  } = e, h = (0, u.useListHasSingleMessageRequest)(), C = s.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(f.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, l.ToastType.FAILURE))
  }, []), S = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), m = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID), h && (0, i.transitionToChannel)(_.id)
  }, [_.id, h]), {
    acceptMessageRequest: I,
    rejectMessageRequest: p,
    isAcceptLoading: T,
    isRejectLoading: g,
    isUserProfileLoading: A,
    isOptimisticAccepted: N,
    isOptimisticRejected: R
  } = (0, d.useMessageRequestActions)({
    user: n,
    onAcceptSuccess: m,
    onRejectSuccess: S,
    onError: C
  }), O = T || g || A || N || R;
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(c.default, {
      channel: _,
      otherUser: n,
      active: t
    }), (0, a.jsxs)("div", {
      className: E.actions,
      children: [(0, a.jsx)(l.Button, {
        className: E.button,
        color: l.ButtonColors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), p(_.id)
        },
        disabled: O,
        submitting: g || R,
        children: f.default.Messages.MESSAGE_REQUEST_IGNORE
      }), (0, a.jsx)(l.Button, {
        className: E.button,
        color: l.ButtonColors.BRAND,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), I(_.id)
        },
        disabled: O,
        submitting: T || A || N,
        children: f.default.Messages.MESSAGE_REQUEST_ACCEPT
      })]
    })]
  })
}