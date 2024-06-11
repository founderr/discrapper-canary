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
  r = n("375954"),
  o = n("836946"),
  u = n("876338"),
  d = n("912332"),
  c = n("689938");

function f(e) {
  let {
    channelId: t,
    messageId: n,
    targetKind: f,
    embedIndex: E
  } = e, _ = a.useCallback(() => {
    let e = r.default.getMessage(t, n);
    if (null == e) return;
    let s = (0, u.getInlineForwardOptions)(e, {
      targetKind: f,
      embedIndex: E
    });
    (0, d.openForwardModal)({
      channelId: t,
      messageId: n,
      source: "message-actions",
      forwardOptions: s
    })
  }, [t, E, n, f]);
  return (0, s.jsx)(o.default, {
    tooltip: c.default.Messages.MESSAGE_ACTION_FORWARD,
    color: o.CircleIconButtonColors.SECONDARY,
    icon: (0, s.jsx)(i.ArrowAngleRightUpIcon, {
      width: 16,
      height: 16,
      color: l.default.colors.INTERACTIVE_NORMAL
    }),
    onClick: _
  })
}