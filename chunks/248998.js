n.d(t, {
    Z: function () {
        return h;
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
function h(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        s = (0, d.oX)(t);
    if (null == s) return null;
    let l = null != n,
        { name: h, description: g, hideDescriptionUntilUnlock: p, onAction: x } = s,
        S = p && !l,
        T = l ? 'header-primary' : 'text-muted',
        E = l ? 'header-secondary' : 'text-muted',
        C = a()(n),
        _ = null != x && l,
        f = _ ? o.Clickable : 'div';
    return (0, i.jsxs)(f, {
        className: r()(m.container, _ && m.actionable),
        onClick: () => {
            _ && x();
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
                            children: (0, c.Y4)(C)
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: T,
                        children: h()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: E,
                        children: S ? '?????' : g()
                    })
                ]
            })
        ]
    });
}
