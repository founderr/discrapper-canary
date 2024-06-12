"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("522664"),
  s = n("651530"),
  r = n("163268"),
  u = n("668058"),
  o = n("112554"),
  d = n("160877"),
  c = n("689938");

function f(e) {
  let {
    channelId: t,
    messageId: n,
    mediaItemUrl: f,
    embedId: M,
    transitionState: E,
    onClose: m
  } = e, g = (0, s.useIsEligibleForExplicitMediaRedaction)(), v = (0, o.useExplicitMediaAttachmentsForMessage)(t, n, f), I = (0, o.useExplicitMediaEmbedsForMessage)(t, n, M), {
    reportFalsePositive: h,
    isReportFalsePositiveLoading: p
  } = (0, u.useExplicitMediaActions)({
    onSuccess: () => (0, d.handleSuccess)(m),
    onError: () => {
      (0, i.showToast)((0, i.createToast)(c.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
    },
    report: () => {
      (0, l.reportFalsePositive)(t, n, v.map(e => e.id), I.map(e => e.id))
    }
  });
  return !(g && (v.length > 0 || I.length > 0)) && m(), (0, a.jsx)(d.ExplicitMediaFalsePositiveModal, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: p,
    analyticsContext: r.TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: h,
    attachmentPreview: 1 === v.length && 0 === I.length ? v[0] : void 0,
    embedPreview: 1 === I.length && 0 === v.length ? I[0] : void 0,
    transitionState: E,
    onClose: m
  })
}