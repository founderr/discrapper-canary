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
  u = n("163268"),
  r = n("668058"),
  o = n("112554"),
  d = n("160877"),
  c = n("689938");

function f(e) {
  let {
    channelId: t,
    messageId: n,
    mediaItemUrl: f,
    embedId: E,
    transitionState: M,
    onClose: m
  } = e, g = (0, s.useIsEligibleForExplicitMediaRedaction)(), S = (0, o.useExplicitMediaAttachmentsForMessage)(t, n, f), p = (0, o.useExplicitMediaEmbedsForMessage)(t, n, E), {
    reportFalsePositive: v,
    isReportFalsePositiveLoading: I
  } = (0, r.useExplicitMediaActions)({
    onSuccess: () => (0, d.handleSuccess)(m),
    onError: () => {
      (0, i.showToast)((0, i.createToast)(c.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
    },
    report: () => {
      (0, l.reportFalsePositive)(t, n, S.map(e => e.id), p.map(e => e.id))
    }
  });
  return !(g && (S.length > 0 || p.length > 0)) && m(), (0, a.jsx)(d.ExplicitMediaFalsePositiveModal, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: I,
    analyticsContext: u.TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: v,
    attachmentPreview: 1 === S.length && 0 === p.length ? S[0] : void 0,
    embedPreview: 1 === p.length && 0 === S.length ? p[0] : void 0,
    transitionState: M,
    onClose: m
  })
}