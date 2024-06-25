t.r(n), t.d(n, {
  default: function() {
    return E
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(522664),
  l = t(651530),
  o = t(163268),
  u = t(668058),
  s = t(112554),
  c = t(160877),
  d = t(689938);

function E(e) {
  let {
    channelId: n,
    messageId: t,
    mediaItemUrl: E,
    embedId: f,
    transitionState: I,
    onClose: M
  } = e, g = (0, l.yh)(), m = (0, s.K)(n, t, E), Z = (0, s.b)(n, t, f), {
    reportFalsePositive: _,
    isReportFalsePositiveLoading: v
  } = (0, u.$)({
    onSuccess: () => (0, c.s)(M),
    onError: () => {
      (0, a.showToast)((0, a.createToast)(d.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
    },
    report: () => {
      (0, r.Uj)(n, t, m.map(e => e.id), Z.map(e => e.id))
    }
  });
  return !(g && (m.length > 0 || Z.length > 0)) && M(), (0, i.jsx)(c.$, {
    messageId: t,
    channelId: n,
    isReportFalsePositiveLoading: v,
    analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: _,
    attachmentPreview: 1 === m.length && 0 === Z.length ? m[0] : void 0,
    embedPreview: 1 === Z.length && 0 === m.length ? Z[0] : void 0,
    transitionState: I,
    onClose: M
  })
}