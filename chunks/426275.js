n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250),
  i = n(470079),
  l = n(692547),
  a = n(481060),
  r = n(375954),
  o = n(876338),
  c = n(912332),
  u = n(689938);

function d(e) {
  let {
    className: t,
    channelId: n,
    messageId: d,
    targetKind: E,
    embedIndex: _
  } = e, I = i.useCallback(() => {
    let e = r.Z.getMessage(n, d);
    if (null == e) return;
    let t = (0, o.j)(e, {
      targetKind: E,
      embedIndex: _
    });
    (0, c.l8)({
      channelId: n,
      messageId: d,
      source: "message-actions",
      forwardOptions: t
    })
  }, [n, _, d, E]);
  return (0, s.jsx)(a.CircleIconButton, {
    className: t,
    tooltip: u.Z.Messages.MESSAGE_ACTION_FORWARD,
    color: a.CircleIconButtonColors.SECONDARY,
    icon: (0, s.jsx)(a.ChatArrowRightIcon, {
      size: "xs",
      color: l.Z.colors.INTERACTIVE_NORMAL
    }),
    onClick: I
  })
}