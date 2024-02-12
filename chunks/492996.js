"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var l = n("65597"),
  a = n("77078"),
  i = n("29212"),
  r = n("695681"),
  o = n("447435"),
  u = n("290723"),
  d = n("817892"),
  c = n("908480"),
  E = n("786214"),
  f = n("782340");

function _(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: _,
    onClose: T
  } = e, I = (0, u.useIsEligibleForExplicitMediaSenderFalsePositive)("fp_action_sheet"), m = (0, l.default)([d.default], () => d.default.getFpMessageInfo(n)), N = m.attachments.map(e => e.id), p = m.attachments.map(e => e.filename), {
    reportFalsePositive: S,
    isReportFalsePositiveLoading: A
  } = (0, c.useExplicitMediaActions)({
    onSuccess: () => {
      (0, E.handleSuccess)(T), i.default.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(f.default.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
    },
    report: () => {
      (0, r.reportFailedSendFalsePositive)(t, n, N, p)
    }
  }), C = I && m.attachments.length > 0;
  return !C && T(), (0, s.jsx)(E.ExplicitMediaFalsePositiveModal, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: A,
    analyticsContext: o.TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: S,
    transitionState: _,
    onClose: T
  })
}