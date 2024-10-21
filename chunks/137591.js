t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    r = t(346479),
    o = t(665906),
    s = t(981631),
    u = t(689938);
function l(e) {
    var n, t;
    if (!(0, o.Xb)(e) || e.type !== s.d4z.PRIVATE_THREAD) return null;
    let l = null === (t = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.invitable) || void 0 === t || t;
    return (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'toggle-thread-invitable',
        label: u.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
        checked: l,
        action: () => r.Z.setInvitable(e, !l)
    });
}
