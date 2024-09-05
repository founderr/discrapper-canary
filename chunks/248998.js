t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(913527),
    o = t.n(r),
    l = t(481060),
    c = t(55935),
    d = t(955204),
    u = t(674680),
    _ = t(384924);
function E(e) {
    let { achievementId: s, dateUnlocked: t } = e,
        a = (0, d.oX)(s);
    if (null == a) return null;
    let r = null != t,
        { name: E, description: T, hideDescriptionUntilUnlock: S, onAction: I } = a,
        N = S && !r,
        m = r ? 'header-primary' : 'text-muted',
        C = r ? 'header-secondary' : 'text-muted',
        g = o()(t),
        A = null != I && r,
        h = A ? l.Clickable : 'div';
    return (0, n.jsxs)(h, {
        className: i()(_.container, A && _.actionable),
        onClick: () => {
            A && I();
        },
        children: [
            (0, n.jsx)('div', {
                className: _.iconContainer,
                children: (0, n.jsx)(u.Z, {
                    achievementId: s,
                    size: u.Z.Sizes.SIZE_40,
                    unlocked: r
                })
            }),
            (0, n.jsxs)('div', {
                className: _.nameContainer,
                children: [
                    null != t &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xxs/semibold',
                            color: 'text-muted',
                            className: _.unlocked,
                            children: (0, c.Y4)(g)
                        }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: m,
                        children: E()
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: C,
                        children: N ? '?????' : T()
                    })
                ]
            })
        ]
    });
}
