n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(468706),
  o = n(774863),
  c = n(689938);

function u(e) {
  let {
    messageId: t,
    channelId: n
  } = e, u = (0, l.e7)([o.Z], () => o.Z.canSubmitFpReport(t)), d = i.useCallback(() => {
    (0, r.e)(n, t)
  }, [n, t]);
  return (0, s.jsx)(a.Button, {
    size: a.Button.Sizes.MEDIUM,
    color: a.Button.Colors.PRIMARY,
    onClick: d,
    disabled: !u,
    children: c.Z.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  })
}