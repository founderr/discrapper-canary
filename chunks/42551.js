n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var l = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    r = n(658722),
    s = n.n(r),
    c = n(954955),
    C = n.n(c),
    d = n(498607),
    u = n.n(d),
    m = n(399606),
    h = n(481060),
    x = n(563115),
    b = n(910693),
    f = n(893966),
    g = n(527379),
    p = n(285173),
    H = n(388032),
    j = n(522492),
    v = n(352533);
let N = new Set();
function L(e) {
    let { guildId: t, onClose: n } = e,
        a = (0, b.BG)(t),
        r = (0, m.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], u()),
        [c, d] = o.useState(r.selectedRoleIds),
        L = (0, x.h)(t, N, !0),
        I = (e, n) => {
            let { record: o } = e;
            return (0, l.jsx)(
                h.ComboboxItem,
                {
                    value: o.id,
                    children: (0, l.jsxs)('div', {
                        className: i()(j.roleNameContainer),
                        children: [
                            (0, l.jsxs)('div', {
                                className: i()(j.roleLabel),
                                children: [
                                    (0, l.jsx)('div', { className: i()(j.labelBackground, n && j.selected) }),
                                    (0, l.jsx)(h.ComboboxItem.Label, {
                                        children: (0, l.jsx)(
                                            p.Z,
                                            {
                                                className: i()(v.roleTooltipItem),
                                                role: o,
                                                guildId: t
                                            },
                                            o.id
                                        )
                                    })
                                ]
                            }),
                            (0, l.jsx)('div', {
                                className: j.checkboxContainer,
                                children: (0, l.jsx)(h.ComboboxItem.Checkbox, { checked: n })
                            })
                        ]
                    })
                },
                o.id
            );
        },
        _ = (e, t) =>
            L.reduce((n, l) => {
                let { record: o } = l,
                    a = e.has(o.id);
                return s()(t.toLowerCase(), o.name.toLowerCase()) ? n.push(I(l, a)) : a && n.push(I(l, a)), n;
            }, []),
        M = o.useCallback(
            (e) => {
                (0, g.Dr)(t, { selectedRoleIds: e }), a(e);
            },
            [t, a]
        ),
        Z = o.useCallback(C()(M, 300), [M]),
        R = o.useCallback(
            (e) => {
                let t;
                d((t = c.has(e) ? new Set([...c].filter((t) => t !== e)) : new Set([...c, e]))), Z(t);
            },
            [c, Z]
        );
    return (0, l.jsx)(h.ComboboxPopout, {
        className: i()(j.rolePopout),
        placeholder: H.intl.string(H.t.ZveC7e),
        value: c,
        onChange: R,
        onClose: () => {
            n();
        },
        multiSelect: !0,
        showScrollbar: !0,
        autoFocus: !0,
        children: (e) => _(c, e)
    });
}
