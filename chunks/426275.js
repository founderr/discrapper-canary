"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("692547"),
  i = n("138270"),
  r = n("481060"),
  o = n("375954"),
  u = n("876338"),
  d = n("912332"),
  c = n("689938");

function f(e) {
  let {
    className: t,
    channelId: n,
    messageId: f,
    targetKind: E,
    embedIndex: _
  } = e, m = a.useCallback(() => {
    let e = o.default.getMessage(n, f);
    if (null == e) return;
    let t = (0, u.getInlineForwardOptions)(e, {
      targetKind: E,
      embedIndex: _
    });
    (0, d.openForwardModal)({
      channelId: n,
      messageId: f,
      source: "message-actions",
      forwardOptions: t
    })
  }, [n, _, f, E]);
  return (0, s.jsx)(r.CircleIconButton, {
    className: t,
    tooltip: c.default.Messages.MESSAGE_ACTION_FORWARD,
    color: r.CircleIconButtonColors.SECONDARY,
    icon: (0, s.jsx)(i.ArrowAngleRightUpIcon, {
      width: 16,
      height: 16,
      color: l.default.colors.INTERACTIVE_NORMAL
    }),
    onClick: m
  })
}