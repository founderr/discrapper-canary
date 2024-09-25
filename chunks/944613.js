var r = n(47120);
var i = n(735250);
n(470079);
var a = n(658722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    u = n(866442),
    c = n(442837),
    d = n(481060),
    _ = n(430824),
    E = n(981631),
    f = n(689938),
    h = n(438771);
function p(e) {
    let { className: t, guild: n, roleStyle: r, roleFilter: a, onSelect: s, onClose: p } = e,
        m = (0, c.e7)([_.Z], () => _.Z.getRoles(n.id)),
        I = (e) =>
            l()(m)
                .filter(a)
                .filter((t) => o()(e.toLowerCase(), t.name.toLowerCase()))
                .value();
    return (0, i.jsx)(d.ComboboxPopout, {
        className: t,
        value: new Set(),
        onChange: s,
        placeholder: f.Z.Messages.ADD_ROLE_PLACEHOLDER,
        'aria-label': f.Z.Messages.ADD_ROLE_A11Y_LABEL,
        onClose: p,
        children: (e) =>
            I(e).map((e) => {
                var t, n;
                return (0, i.jsxs)(
                    d.ComboboxItem,
                    {
                        value: e.id,
                        children: [
                            'dot' === r
                                ? (0, i.jsx)(d.RoleDot, {
                                      className: h.popoutRoleDot,
                                      color: null !== (t = e.colorString) && void 0 !== t ? t : (0, u.Rf)(E.p6O),
                                      background: !1,
                                      tooltip: !1
                                  })
                                : (0, i.jsx)(d.RoleCircle, {
                                      className: h.popoutRoleCircle,
                                      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, u.Rf)(E.p6O)
                                  }),
                            (0, i.jsx)(d.ComboboxItem.Label, { children: e.name })
                        ]
                    },
                    e.id
                );
            })
    });
}
t.Z = p;
