n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n(735250);
n(470079);
var i = n(399606),
  l = n(481060),
  a = n(923500),
  r = n(522664),
  o = n(163268),
  c = n(774863),
  u = n(668058),
  d = n(160877),
  E = n(689938);

function _(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: _,
    onClose: I
  } = e, T = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), m = T.attachments.map(e => e.id), N = T.attachments.map(e => e.filename), {
    reportFalsePositive: h,
    isReportFalsePositiveLoading: C
  } = (0, u.$)({
    onSuccess: () => {
      (0, d.s)(I), a.Z.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, l.showToast)((0, l.createToast)(E.Z.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
    },
    report: () => {
      (0, r.Eq)(t, n, m, N)
    }
  });
  return !(T.attachments.length > 0) && I(), (0, s.jsx)(d.$, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: C,
    analyticsContext: o.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: h,
    transitionState: _,
    onClose: I
  })
}