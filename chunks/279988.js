t(47120);
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(692547),
    s = t(481060),
    o = t(259580),
    c = t(196345),
    d = t(137158),
    u = t(388032),
    m = t(55529);
n.Z = function (e) {
    let { channelId: n, formField: t, index: l, isDragEnabled: x, isDropHovered: f, onDrop: h, onEdit: g, onRemove: v, canRemove: j, title: C, actionsLocation: p } = e,
        N = t.values,
        I = N.slice(0, 1),
        T = N.length - I.length;
    return (0, i.jsxs)(d.Z, {
        field: t,
        index: l,
        isDragEnabled: x,
        isDropHovered: f,
        onDrop: h,
        onEdit: g,
        onRemove: v,
        title: C,
        canRemove: j,
        actionsLocation: p,
        children: [
            (0, i.jsx)(c.EK, {
                className: a()(m.fieldBackground, { [m.withFooter]: 0 !== T }),
                terms: I,
                channelId: n
            }),
            0 !== T &&
                (0, i.jsxs)(s.Clickable, {
                    className: a()(m.fieldFooterContainer, m.clickable),
                    onClick: g,
                    children: [
                        (0, i.jsx)(s.FormText, {
                            className: m.clickable,
                            children: u.intl.format(u.t.jnhD0d, { count: T })
                        }),
                        (0, i.jsx)(o.Z, {
                            className: m.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: r.Z.unsafe_rawColors.WHITE_500.css
                        })
                    ]
                }),
            (0, i.jsx)(c.G0, {
                disabled: !0,
                checked: !1
            })
        ]
    });
};
