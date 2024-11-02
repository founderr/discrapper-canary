e.d(t, {
    Z: function () {
        return d;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    a = e(346479),
    l = e(665906),
    o = e(981631),
    u = e(388032);
function d(n) {
    var t, e;
    if (!(0, l.Xb)(n) || n.type !== o.d4z.PRIVATE_THREAD) return null;
    let d = null === (e = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === e || e;
    return (0, i.jsx)(r.MenuCheckboxItem, {
        id: 'toggle-thread-invitable',
        label: u.intl.string(u.t.s2rpNT),
        checked: d,
        action: () => a.Z.setInvitable(n, !d)
    });
}
