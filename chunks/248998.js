t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(913527),
    o = t.n(r),
    l = t(481060),
    c = t(55935),
    d = t(955204),
    _ = t(674680),
    u = t(674686);
function E(e) {
    let { achievementId: s, dateUnlocked: t } = e,
        a = (0, d.oX)(s);
    if (null == a) return null;
    let r = null != t,
        { name: E, description: T, hideDescriptionUntilUnlock: S, onAction: I } = a,
        N = S && !r,
        m = r ? 'header-primary' : 'text-muted',
        A = r ? 'header-secondary' : 'text-muted',
        C = o()(t),
        g = null != I && r,
        h = g ? l.Clickable : 'div';
    return (0, n.jsxs)(h, {
        className: i()(u.container, g && u.actionable),
        onClick: () => {
            g && I();
        },
        children: [
            (0, n.jsx)('div', {
                className: u.iconContainer,
                children: (0, n.jsx)(_.Z, {
                    achievementId: s,
                    size: _.Z.Sizes.SIZE_40,
                    unlocked: r
                })
            }),
            (0, n.jsxs)('div', {
                className: u.nameContainer,
                children: [
                    null != t &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xxs/semibold',
                            color: 'text-muted',
                            className: u.unlocked,
                            children: (0, c.Y4)(C)
                        }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: m,
                        children: E()
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: A,
                        children: N ? '?????' : T()
                    })
                ]
            })
        ]
    });
}
