"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var l = n("541737"),
  a = n("481060"),
  i = n("904245"),
  r = n("739566"),
  o = n("702346"),
  u = n("689938");

function d(e) {
  let {
    message: t,
    usernameHook: d,
    onClickPins: c,
    compact: f
  } = e, E = (0, r.default)(t), _ = E.nick, m = d(E), T = () => {
    if (null == t.messageReference) return;
    let {
      channel_id: e,
      message_id: n
    } = t.messageReference;
    i.default.jumpToMessage({
      channelId: e,
      messageId: n,
      flash: !0
    })
  }, I = (0, a.useRedesignIconContext)().enabled ? {
    iconNode: (0, s.jsx)(l.PinIcon, {
      width: 18,
      height: 18,
      color: "currentColor"
    })
  } : {
    icon: n("879066")
  };
  return (0, s.jsx)(o.default, {
    ...I,
    timestamp: t.timestamp,
    compact: f,
    children: null != t.messageReference ? null == c ? u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_WITH_MESSAGE_HOOK.format({
      usernameHook: m,
      username: _,
      messageOnClick: T
    }) : u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_WITH_MESSAGE.format({
      usernameHook: m,
      username: _,
      pinsActionOnClick: c,
      messageOnClick: T
    }) : null == c ? u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_HOOK.format({
      usernameHook: m,
      username: _
    }) : u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE.format({
      usernameHook: m,
      username: _,
      pinsActionOnClick: c
    })
  })
}