t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(346479),
    l = t(665906),
    u = t(981631),
    s = t(689938);
function o(e) {
    var n, t;
    if (!(0, l.Xb)(e) || e.type !== u.d4z.PRIVATE_THREAD) return null;
    let o = null === (t = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.invitable) || void 0 === t || t;
    return (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'toggle-thread-invitable',
        label: s.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
        checked: o,
        action: () => r.Z.setInvitable(e, !o)
    });
}
