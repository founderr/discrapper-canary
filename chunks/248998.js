n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(913527),
    a = n.n(l),
    o = n(481060),
    c = n(55935),
    d = n(955204),
    u = n(674680),
    m = n(560285);
function g(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        s = (0, d.oX)(t);
    if (null == s) return null;
    let l = null != n,
        { name: g, description: h, hideDescriptionUntilUnlock: p, onAction: x } = s,
        T = p && !l,
        S = l ? 'header-primary' : 'text-muted',
        _ = l ? 'header-secondary' : 'text-muted',
        E = a()(n),
        C = null != x && l,
        f = C ? o.Clickable : 'div';
    return (0, i.jsxs)(f, {
        className: r()(m.container, C && m.actionable),
        onClick: () => {
            C && x();
        },
        children: [
            (0, i.jsx)('div', {
                className: m.iconContainer,
                children: (0, i.jsx)(u.Z, {
                    achievementId: t,
                    size: u.Z.Sizes.SIZE_40,
                    unlocked: l
                })
            }),
            (0, i.jsxs)('div', {
                className: m.nameContainer,
                children: [
                    null != n &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xxs/semibold',
                            color: 'text-muted',
                            className: m.unlocked,
                            children: (0, c.Y4)(E)
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: S,
                        children: g()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: _,
                        children: T ? '?????' : h()
                    })
                ]
            })
        ]
    });
}
