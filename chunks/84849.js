"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("477566"),
  o = n("29212"),
  u = n("817892"),
  d = n("782340");

function c(e) {
  let {
    messageId: t,
    channelId: n
  } = e, c = (0, a.useStateFromStores)([u.default], () => u.default.canSubmitFpReport(t)), f = l.useCallback(() => {
    if (!c) {
      r.default.show({
        title: d.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
        body: d.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
        confirmText: d.default.Messages.OKAY
      }), o.default.disableFalsePositiveButton(n, t);
      return
    }
  }, [n, t, c]);
  return (0, s.jsx)(i.Button, {
    size: i.Button.Sizes.MEDIUM,
    color: i.Button.Colors.PRIMARY,
    onClick: f,
    disabled: !c,
    children: d.default.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  })
}