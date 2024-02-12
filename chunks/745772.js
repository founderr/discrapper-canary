"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("155084"),
  o = n("144491"),
  u = n("208021"),
  d = n("982108"),
  c = n("803524"),
  f = n("7643"),
  E = n("98708"),
  _ = n("28424"),
  h = n("782340"),
  C = n("578484");

function I(e) {
  let {
    active: t,
    user: n,
    channel: I
  } = e, T = (0, c.useListHasSingleSpamMessageRequest)(), S = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(h.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE)), r.default.increment({
      name: l.MetricEvents.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), p = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), m = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID), T && (0, o.transitionToChannel)(I.id)
  }, [I.id, T]), {
    acceptMessageRequest: g,
    isAcceptLoading: A,
    isUserProfileLoading: N,
    isOptimisticAccepted: R
  } = (0, f.useMessageRequestActions)({
    user: n,
    onAcceptSuccess: m,
    onRejectSuccess: p,
    onError: S
  }), O = A || N, L = O || R;
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsx)(E.default, {
      otherUser: n,
      channel: I,
      active: t
    }), (0, a.jsxs)("div", {
      className: C.actions,
      children: [(0, a.jsx)(i.Button, {
        className: C.button,
        color: i.ButtonColors.PRIMARY,
        size: i.Button.Sizes.SMALL,
        onClick: e => {
          g(I.id), e.stopPropagation()
        },
        disabled: L,
        submitting: O,
        children: h.default.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }), (0, a.jsx)(_.default, {
        className: C.button,
        channel: I,
        buttonSize: i.Button.Sizes.SMALL
      })]
    })]
  })
}