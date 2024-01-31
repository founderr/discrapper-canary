"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var s = a("37983");
a("884691");
var i = a("77078"),
  n = a("695681"),
  d = a("457971"),
  l = a("447435"),
  o = a("908480"),
  r = a("39393"),
  c = a("786214"),
  u = a("782340");

function E(e) {
  let {
    channelId: t,
    messageId: a,
    attachmentId: E,
    embedId: _,
    transitionState: M,
    onClose: R
  } = e, T = (0, d.useIsEligibleForExplicitMediaRedaction)(), f = (0, r.useExplicitMediaAttachmentsForMessage)(t, a, E), C = (0, r.useExplicitMediaEmbedsForMessage)(t, a, _), {
    reportFalsePositive: I,
    isReportFalsePositiveLoading: A
  } = (0, o.useExplicitMediaActions)({
    onSuccess: () => (0, c.handleSuccess)(R),
    onError: () => {
      (0, i.showToast)((0, i.createToast)(u.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
    },
    report: () => {
      (0, n.reportFalsePositive)(t, a, f.map(e => e.id), C.map(e => e.id))
    }
  }), N = T && (f.length > 0 || C.length > 0);
  return !N && R(), (0, s.jsx)(c.ExplicitMediaFalsePositiveModal, {
    messageId: a,
    channelId: t,
    isReportFalsePositiveLoading: A,
    analyticsContext: l.TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: I,
    attachmentPreview: 1 === f.length && 0 === C.length ? f[0] : void 0,
    embedPreview: 1 === C.length && 0 === f.length ? C[0] : void 0,
    transitionState: M,
    onClose: R
  })
}