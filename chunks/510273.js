n.d(t, {
    Z: function () {
        return u;
    }
});
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(481060),
    o = n(955204),
    c = n(818765),
    _ = n(674680),
    d = n(303117);
let E = (e) => {
    let { color: t } = e;
    return (0, s.jsxs)('svg', {
        width: '48',
        height: '28',
        viewBox: '0 0 55 34',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, s.jsx)('rect', {
                x: '10.1968',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 10.1968 7)',
                className: d.__invalid_toastBG
            }),
            (0, s.jsx)('rect', {
                x: '27.3936',
                y: '0.59021',
                width: '23.4851',
                height: '23.4851',
                transform: 'rotate(45 27.3936 0.59021)',
                className: d.__invalid_toastBG
            }),
            (0, s.jsx)('rect', {
                x: '44.5903',
                y: '7',
                width: '14.4203',
                height: '14.4203',
                transform: 'rotate(45 44.5903 7)',
                className: d.__invalid_toastBG
            }),
            (0, s.jsx)('rect', {
                x: '10.1968',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 10.1968 13)',
                fill: t
            }),
            (0, s.jsx)('path', {
                d: 'M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z',
                fill: t
            }),
            (0, s.jsx)('rect', {
                x: '44.5903',
                y: '13',
                width: '6',
                height: '6',
                transform: 'rotate(45 44.5903 13)',
                fill: t
            })
        ]
    });
};
function u(e) {
    let { achievement: t, unlocked: n } = e,
        { name: r, description: u, rarity: T, hideDescriptionUntilUnlock: I, onAction: R } = t,
        { color: g } = (0, o.F7)(T);
    a.useEffect(() => {
        let e = setTimeout(() => {
            c.Z.playAchievementUnlockSound();
        }, 50);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let N = null != R && n,
        m = N ? l.Clickable : 'div';
    return (0, s.jsxs)(m, {
        className: i()(d.container, N && d.actionable),
        onClick: () => {
            N && R();
        },
        children: [
            (0, s.jsx)('div', {
                className: d.iconContainer,
                children: (0, s.jsx)(_.Z, {
                    achievementId: t.id,
                    size: _.Z.Sizes.SIZE_40,
                    unlocked: n
                })
            }),
            (0, s.jsxs)('div', {
                className: d.__invalid_nameContainer,
                children: [
                    (0, s.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: r()
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: I && !n ? '?????' : u()
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: d.flair,
                children: (0, s.jsx)(E, { color: g })
            })
        ]
    });
}
