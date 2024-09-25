n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(481060),
    d = n(583901),
    _ = n(997945),
    E = n(630117),
    f = n(441319),
    h = n(981631),
    p = n(689938),
    m = n(453251);
let I = () => [p.Z.Messages.APP_ICON_PIRATE, p.Z.Messages.APP_ICON_PIRATE_1, p.Z.Messages.APP_ICON_PIRATE_2, p.Z.Messages.APP_ICON_PIRATE_3, p.Z.Messages.APP_ICON_PIRATE_4],
    T = () => {
        var e;
        return null !== (e = u().sample(I())) && void 0 !== e ? e : p.Z.Messages.APP_ICON_PIRATE;
    };
function g(e) {
    let { id: t, className: n, onSelect: r, isSelected: o = !1, tabIndex: l, children: u, locked: E = !1 } = e,
        [p, I] = a.useState(f.QA[t].name),
        g = t === _.Ru.PIRATE,
        S = (0, c.useRadioItem)({
            label: p,
            isSelected: o
        });
    return (0, i.jsx)(c.Tooltip, {
        text: p,
        onTooltipShow: () => g && I(T()),
        children: (e) =>
            (0, i.jsxs)('div', {
                className: m.appIconSelectionContainer,
                children: [
                    (0, i.jsx)(c.Clickable, {
                        ...e,
                        ...S,
                        tabIndex: null != l ? l : S.tabIndex,
                        className: s()(m.appIconSelection, { [m.selected]: o }, n),
                        onClick: o ? h.dG4 : () => (null == r ? void 0 : r(t)),
                        children: u
                    }),
                    o && (0, i.jsx)(d.oK, {}),
                    E &&
                        (0, i.jsx)('div', {
                            className: m.lockedBadgeContainer,
                            children: (0, i.jsx)(c.LockIcon, {
                                className: m.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function S(e) {
    let { icon: t, isSelected: n, disabled: r, tabIndex: a, onSelect: o, locked: s } = e;
    return (0, i.jsx)(g, {
        onSelect: r ? void 0 : o,
        isSelected: n,
        id: t.id,
        className: r ? m.disabled : void 0,
        tabIndex: a,
        locked: s,
        children: (0, i.jsx)(E.Z, {
            id: t.id,
            width: f.M9
        })
    });
}
