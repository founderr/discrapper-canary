n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(904245),
  a = n(739566),
  r = n(702346),
  o = n(689938);

function c(e) {
  let {
    message: t,
    usernameHook: c,
    onClickPins: u,
    compact: d
  } = e, E = (0, a.ZP)(t), _ = E.nick, I = c(E), T = () => {
    if (null == t.messageReference) return;
    let {
      channel_id: e,
      message_id: n
    } = t.messageReference;
    l.Z.jumpToMessage({
      channelId: e,
      messageId: n,
      flash: !0
    })
  }, m = (0, i.useRedesignIconContext)().enabled ? {
    iconNode: (0, s.jsx)(i.PinIcon, {
      size: "sm",
      color: "currentColor"
    })
  } : {
    icon: n(879066)
  };
  return (0, s.jsx)(r.Z, {
    ...m,
    timestamp: t.timestamp,
    compact: d,
    children: null != t.messageReference ? null == u ? o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_WITH_MESSAGE_HOOK.format({
      usernameHook: I,
      username: _,
      messageOnClick: T
    }) : o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_WITH_MESSAGE.format({
      usernameHook: I,
      username: _,
      pinsActionOnClick: u,
      messageOnClick: T
    }) : null == u ? o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_HOOK.format({
      usernameHook: I,
      username: _
    }) : o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE.format({
      usernameHook: I,
      username: _,
      pinsActionOnClick: u
    })
  })
}