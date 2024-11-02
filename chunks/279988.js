t(47120);
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    s = t(692547),
    o = t(481060),
    l = t(259580),
    c = t(196345),
    d = t(137158),
    u = t(388032),
    m = t(631403);
n.Z = function (e) {
    let { channelId: n, formField: t, index: a, isDragEnabled: f, isDropHovered: h, onDrop: x, onEdit: p, onRemove: g, canRemove: C, title: b, actionsLocation: v } = e,
        _ = t.values,
        y = _.slice(0, 1),
        T = _.length - y.length;
    return (0, r.jsxs)(d.Z, {
        field: t,
        index: a,
        isDragEnabled: f,
        isDropHovered: h,
        onDrop: x,
        onEdit: p,
        onRemove: g,
        title: b,
        canRemove: C,
        actionsLocation: v,
        children: [
            (0, r.jsx)(c.EK, {
                className: i()(m.fieldBackground, { [m.withFooter]: 0 !== T }),
                terms: y,
                channelId: n
            }),
            0 !== T &&
                (0, r.jsxs)(o.Clickable, {
                    className: i()(m.fieldFooterContainer, m.clickable),
                    onClick: p,
                    children: [
                        (0, r.jsx)(o.FormText, {
                            className: m.clickable,
                            children: u.intl.format(u.t.jnhD0d, { count: T })
                        }),
                        (0, r.jsx)(l.Z, {
                            className: m.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: s.Z.unsafe_rawColors.WHITE_500.css
                        })
                    ]
                }),
            (0, r.jsx)(c.G0, {
                disabled: !0,
                checked: !1
            })
        ]
    });
};
