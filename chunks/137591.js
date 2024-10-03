n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(346479),
    l = n(665906),
    r = n(981631),
    o = n(689938);
function c(e) {
    var t, n;
    if (!(0, l.Xb)(e) || e.type !== r.d4z.PRIVATE_THREAD) return null;
    let c = null === (n = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === n || n;
    return (0, i.jsx)(s.MenuCheckboxItem, {
        id: 'toggle-thread-invitable',
        label: o.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
        checked: c,
        action: () => a.Z.setInvitable(e, !c)
    });
}
