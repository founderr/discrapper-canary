"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("477566"),
  o = n("29212"),
  u = n("447435"),
  d = n("817892"),
  c = n("782340");

function E(e) {
  let {
    messageId: t,
    channelId: E
  } = e, f = (0, a.useStateFromStores)([d.default], () => d.default.canSubmitFpReport(t)), _ = l.useCallback(() => {
    if ((0, u.trackMediaRedactionAction)({
        action: u.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
        messageId: t,
        channelId: E
      }), !f) {
      r.default.show({
        title: c.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
        body: c.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
        confirmText: c.default.Messages.OKAY
      }), o.default.disableFalsePositiveButton(E, t);
      return
    }(0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n("492996");
      return n => (0, s.jsx)(e, {
        channelId: E,
        messageId: t,
        ...n
      })
    })
  }, [E, t, f]);
  return (0, s.jsx)(i.Button, {
    size: i.Button.Sizes.MEDIUM,
    color: i.Button.Colors.PRIMARY,
    onClick: _,
    disabled: !f,
    children: c.default.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  })
}