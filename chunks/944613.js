n(47120);
var r = n(200651);
n(192379);
var i = n(658722),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(866442),
    u = n(442837),
    c = n(481060),
    d = n(430824),
    f = n(981631),
    _ = n(388032),
    p = n(438771);
t.Z = function (e) {
    let { className: t, guild: n, roleStyle: i, roleFilter: s, onSelect: h, onClose: m } = e,
        g = (0, u.e7)([d.Z], () => d.Z.getRoles(n.id)),
        E = (e) =>
            o()(g)
                .filter(s)
                .filter((t) => a()(e.toLowerCase(), t.name.toLowerCase()))
                .value();
    return (0, r.jsx)(c.ComboboxPopout, {
        className: t,
        value: new Set(),
        onChange: h,
        placeholder: _.intl.string(_.t.XPGZXF),
        'aria-label': _.intl.string(_.t.ljnBlp),
        onClose: m,
        children: (e) =>
            E(e).map((e) => {
                var t, n;
                return (0, r.jsxs)(
                    c.ComboboxItem,
                    {
                        value: e.id,
                        children: [
                            'dot' === i
                                ? (0, r.jsx)(c.RoleDot, {
                                      className: p.popoutRoleDot,
                                      color: null !== (t = e.colorString) && void 0 !== t ? t : (0, l.Rf)(f.p6O),
                                      background: !1,
                                      tooltip: !1
                                  })
                                : (0, r.jsx)(c.RoleCircle, {
                                      className: p.popoutRoleCircle,
                                      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, l.Rf)(f.p6O)
                                  }),
                            (0, r.jsx)(c.ComboboxItem.Label, { children: e.name })
                        ]
                    },
                    e.id
                );
            })
    });
};
