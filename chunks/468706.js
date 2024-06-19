n.d(t, {
  e: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(240872),
  a = n(923500),
  r = n(163268),
  o = n(774863),
  c = n(689938);

function u(e, t) {
  if ((0, r.aP)({
      action: r.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
      messageId: t,
      channelId: e
    }), !o.Z.canSubmitFpReport(t)) {
    l.Z.show({
      title: c.Z.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
      body: c.Z.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
      confirmText: c.Z.Messages.OKAY
    }), a.Z.disableFalsePositiveButton(e, t);
    return
  }(0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n(773276);
    return n => (0, s.jsx)(i, {
      channelId: e,
      messageId: t,
      ...n
    })
  })
}