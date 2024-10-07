t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(607070),
    l = t(597688),
    c = t(667105),
    d = t(350327),
    _ = t(211712),
    u = t(690412);
function E(e) {
    let { selectedIndex: s, setSelectedIndex: t } = e,
        E = a.useMemo(() => _.J2[s], [s]),
        T = a.useCallback(() => {
            t((s + 1) % _.J2.length);
        }, [s, t]),
        S = (0, i.e7)([l.Z], () => l.Z.lastSuccessfulFetch);
    a.useEffect(() => {
        var e;
        (0, d.x3)({
            bannerImage: E.bannerImageUrl,
            themeColors: E.themeColors,
            avatarDecoration: null != E.avatarDecorationSkuId ? (null === (e = l.Z.getProduct(E.avatarDecorationSkuId)) || void 0 === e ? void 0 : e.items[0]) : void 0
        });
    }, [E, S]);
    let I = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        N = (0, c.g2)({ useReducedMotion: I });
    return (0, n.jsxs)('div', {
        className: u.container,
        children: [
            (0, n.jsx)(r.Clickable, {
                onClick: () => {
                    T(), N.startAnimation(!1);
                },
                className: u.button,
                'aria-label': 'Shuffle',
                children: N.render()
            }),
            (0, n.jsxs)('div', {
                className: u.select,
                children: [
                    (0, n.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: E.presetBackgroundUrl,
                        className: u.presetImage
                    }),
                    (0, n.jsx)(r.Text, {
                        className: u.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: (0, _._h)(E.presetName)
                    })
                ]
            })
        ]
    });
}
