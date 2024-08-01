n.r(t), n.d(t, {
  default: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(522664),
  r = n(651530),
  l = n(163268),
  o = n(668058),
  c = n(112554),
  u = n(160877),
  d = n(689938);

function _(e) {
  let {
channelId: t,
messageId: n,
mediaItemUrl: _,
embedId: E,
transitionState: I,
onClose: m
  } = e, T = (0, r.yh)(), h = (0, c.K)(t, n, _), N = (0, c.b)(t, n, E), {
reportFalsePositive: f,
isReportFalsePositiveLoading: C
  } = (0, o.$)({
onSuccess: () => (0, u.s)(m),
onError: () => {
  (0, s.showToast)((0, s.createToast)(d.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
},
report: () => {
  (0, a.Uj)(t, n, h.map(e => e.id), N.map(e => e.id));
}
  });
  return !(T && (h.length > 0 || N.length > 0)) && m(), (0, i.jsx)(u.$, {
messageId: n,
channelId: t,
isReportFalsePositiveLoading: C,
analyticsContext: l.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
onConfirmPress: f,
attachmentPreview: 1 === h.length && 0 === N.length ? h[0] : void 0,
embedPreview: 1 === N.length && 0 === h.length ? N[0] : void 0,
transitionState: I,
onClose: m
  });
}