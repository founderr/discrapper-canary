"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("432710"),
  i = n("446674"),
  r = n("77078"),
  o = n("477566"),
  u = n("155084"),
  d = n("29212"),
  c = n("447435"),
  E = n("817892"),
  f = n("782340");

function _(e) {
  let {
    messageId: t,
    channelId: _
  } = e, T = (0, i.useStateFromStores)([E.default], () => E.default.canSubmitFpReport(t));
  l.useEffect(() => {
    u.default.increment({
      name: a.MetricEvents.EXPLICIT_MEDIA_SENDER_FP_BUTTON_VIEW
    }), (0, c.trackMediaRedactionAction)({
      action: c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_VIEWED,
      messageId: t,
      channelId: _
    })
  }, [t, _]);
  let I = l.useCallback(() => {
    if ((0, c.trackMediaRedactionAction)({
        action: c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
        messageId: t,
        channelId: _
      }), !T) {
      o.default.show({
        title: f.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
        body: f.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
        confirmText: f.default.Messages.OKAY
      }), d.default.disableFalsePositiveButton(_, t);
      return
    }(0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n("492996");
      return n => (0, s.jsx)(e, {
        channelId: _,
        messageId: t,
        ...n
      })
    })
  }, [_, t, T]);
  return (0, s.jsx)(r.Button, {
    size: r.Button.Sizes.MEDIUM,
    color: r.Button.Colors.PRIMARY,
    onClick: I,
    disabled: !T,
    children: f.default.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  })
}