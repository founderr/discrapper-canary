var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(443603),
    u = n(388032),
    c = n(822003);
t.Z = i.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, r.jsx)('div', {
        className: c.separator,
        children: (0, r.jsx)('div', {
            className: c.buttonContainer,
            children: (0, r.jsx)(l.Z, {
                className: c.button,
                innerClassName: c.innerButton,
                childClassName: s()(c.buttonChild, {
                    [c.disabled]: n,
                    [c.activeButtonChild]: !n
                }),
                onClick: t,
                disabled: n,
                isActive: !1,
                'aria-label': u.intl.string(u.t.oeb1vr),
                children: (0, r.jsx)(o.SendMessageIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: c.sendIcon
                })
            })
        })
    });
});
