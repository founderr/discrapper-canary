"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var l = n("399606"),
  a = n("481060"),
  i = n("923500"),
  r = n("522664"),
  o = n("163268"),
  u = n("774863"),
  d = n("668058"),
  c = n("160877"),
  E = n("689938");

function f(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: f,
    onClose: _
  } = e, T = (0, l.useStateFromStores)([u.default], () => u.default.getFpMessageInfo(n)), I = T.attachments.map(e => e.id), m = T.attachments.map(e => e.filename), {
    reportFalsePositive: N,
    isReportFalsePositiveLoading: p
  } = (0, d.useExplicitMediaActions)({
    onSuccess: () => {
      (0, c.handleSuccess)(_), i.default.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(E.default.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
    },
    report: () => {
      (0, r.reportFailedSendFalsePositive)(t, n, I, m)
    }
  });
  return !(T.attachments.length > 0) && _(), (0, s.jsx)(c.ExplicitMediaFalsePositiveModal, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: p,
    analyticsContext: o.TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: N,
    transitionState: f,
    onClose: _
  })
}