t.r(n), t.d(n, {
  default: function() {
    return E
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(522664),
  r = t(651530),
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
    transitionState: M,
    onClose: g
  } = e, m = (0, r.yh)(), I = (0, s.K)(n, t, E), Z = (0, s.b)(n, t, f), {
    reportFalsePositive: _,
    isReportFalsePositiveLoading: v
  } = (0, u.$)({
    onSuccess: () => (0, c.s)(g),
    onError: () => {
      (0, a.showToast)((0, a.createToast)(d.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
    },
    report: () => {
      (0, l.Uj)(n, t, I.map(e => e.id), Z.map(e => e.id))
    }
  });
  return !(m && (I.length > 0 || Z.length > 0)) && g(), (0, i.jsx)(c.$, {
    messageId: t,
    channelId: n,
    isReportFalsePositiveLoading: v,
    analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: _,
    attachmentPreview: 1 === I.length && 0 === Z.length ? I[0] : void 0,
    embedPreview: 1 === Z.length && 0 === I.length ? Z[0] : void 0,
    transitionState: M,
    onClose: g
  })
}