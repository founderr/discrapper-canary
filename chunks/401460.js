n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(481060),
    c = n(583901),
    d = n(997945),
    f = n(630117),
    _ = n(441319),
    p = n(981631),
    h = n(388032),
    m = n(715625);
let g = () => [h.intl.string(h.t.EgWTY2), h.intl.string(h.t.umBn5e), h.intl.string(h.t.dG1wDw), h.intl.string(h.t.SesI4e), h.intl.string(h.t.RnMLvr)],
    E = () => {
        var e;
        return null !== (e = l().sample(g())) && void 0 !== e ? e : h.intl.string(h.t.EgWTY2);
    };
function v(e) {
    let { id: t, className: n, onSelect: a, isSelected: o = !1, tabIndex: l, children: f, locked: h = !1 } = e,
        [g, v] = i.useState((0, _.aW)(t).name),
        b = t === d.Ru.PIRATE,
        I = (0, u.useRadioItem)({
            label: g,
            isSelected: o
        });
    return (0, r.jsx)(u.Tooltip, {
        text: g,
        onTooltipShow: () => b && v(E()),
        children: (e) =>
            (0, r.jsxs)('div', {
                className: m.appIconSelectionContainer,
                children: [
                    (0, r.jsx)(u.Clickable, {
                        ...e,
                        ...I,
                        tabIndex: null != l ? l : I.tabIndex,
                        className: s()(m.appIconSelection, { [m.selected]: o }, n),
                        onClick: o ? p.dG4 : () => (null == a ? void 0 : a(t)),
                        children: f
                    }),
                    o && (0, r.jsx)(c.oK, {}),
                    h &&
                        (0, r.jsx)('div', {
                            className: m.lockedBadgeContainer,
                            children: (0, r.jsx)(u.LockIcon, {
                                className: m.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function b(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: a, onSelect: s, locked: o } = e;
    return (0, r.jsx)(v, {
        onSelect: i ? void 0 : s,
        isSelected: n,
        id: t.id,
        className: i ? m.disabled : void 0,
        tabIndex: a,
        locked: o,
        children: (0, r.jsx)(f.Z, {
            id: t.id,
            width: _.M9
        })
    });
}
