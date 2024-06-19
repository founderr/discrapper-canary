n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(979696),
  r = n(963876),
  o = n(689938);

function c(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getToastsEnabled(e));
  return (0, l.jsx)(s.MenuCheckboxItem, {
    id: "show-call-chat-toasts",
    label: o.Z.Messages.SHOW_NEW_MESSAGE_PREVIEWS,
    checked: t,
    action: () => r.Z.setCallChatToastsEnabled(e, !t)
  })
}