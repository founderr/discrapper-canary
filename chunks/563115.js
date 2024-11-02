n.d(t, {
    Z: function () {
        return s;
    },
    h: function () {
        return r;
    }
});
var l = n(200651);
n(192379);
var o = n(442837),
    a = n(430824),
    i = n(512508);
function r(e, t, n, l) {
    return (0, o.Wu)(
        [a.Z],
        () =>
            Object.values(a.Z.getRoles(e))
                .filter((e) => !t.has(e.id))
                .filter((t) => !n || t.id !== e)
                .filter(null != l ? l : () => !0)
                .map((e) => (0, i.WG)(e).row),
        [n, e, l, t]
    );
}
function s(e) {
    let { guildId: t, selectedRoleIds: n, onChange: o, placeholder: a, disableEveryoneRole: s, helperText: c, className: C, selectableRoleFilter: d } = e,
        u = r(t, n, s, d);
    return (0, l.jsx)(i.ZP, {
        roleRows: u,
        guildId: t,
        selectedRoleIds: n,
        onChange: (e, t) => o(t),
        placeholder: a,
        helperText: c,
        className: C
    });
}
