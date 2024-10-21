n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(979696),
    r = n(963876),
    o = n(689938);
function c(e) {
    let t = (0, s.e7)([l.Z], () => l.Z.getToastsEnabled(e));
    return (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'show-call-chat-toasts',
        label: o.Z.Messages.SHOW_NEW_MESSAGE_PREVIEWS,
        checked: t,
        action: () => r.Z.setCallChatToastsEnabled(e, !t)
    });
}
