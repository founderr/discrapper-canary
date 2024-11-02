n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(979696),
    s = n(963876),
    o = n(388032);
function c(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getToastsEnabled(e));
    return (0, i.jsx)(r.MenuCheckboxItem, {
        id: 'show-call-chat-toasts',
        label: o.intl.string(o.t['5NL5vb']),
        checked: t,
        action: () => s.Z.setCallChatToastsEnabled(e, !t)
    });
}
