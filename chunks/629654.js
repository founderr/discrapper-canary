t.d(s, {
    Z: function () {
        return S;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(481060),
    o = t(607070),
    l = t(597688),
    c = t(667105),
    d = t(350327),
    _ = t(626135),
    u = t(211712),
    E = t(981631),
    T = t(690412);
function S(e) {
    let { selectedIndex: s, setSelectedIndex: t } = e,
        S = a.useMemo(() => u.J2[s], [s]),
        I = a.useCallback(() => {
            let e = (s + 1) % u.J2.length;
            _.default.track(E.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: u.J2[e].presetName }), t(e);
        }, [s, t]),
        N = (0, i.e7)([l.Z], () => l.Z.lastSuccessfulFetch);
    a.useEffect(() => {
        var e;
        (0, d.x3)({
            bannerImage: S.bannerImageUrl,
            themeColors: S.themeColors,
            avatarDecoration: null != S.avatarDecorationSkuId ? (null === (e = l.Z.getProduct(S.avatarDecorationSkuId)) || void 0 === e ? void 0 : e.items[0]) : void 0
        });
    }, [S, N]);
    let m = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        A = (0, c.g2)({ useReducedMotion: m });
    return (0, n.jsxs)('div', {
        className: T.container,
        children: [
            (0, n.jsx)(r.Clickable, {
                onClick: () => {
                    I(), A.startAnimation(!1);
                },
                className: T.button,
                'aria-label': 'Shuffle Preset',
                children: A.render()
            }),
            (0, n.jsxs)(r.Clickable, {
                onClick: () => {
                    I(), A.startAnimation(!1);
                },
                'aria-label': ''.concat((0, u._h)(S.presetName), ' - Click to Shuffle Preset'),
                className: T.select,
                children: [
                    (0, n.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: S.presetBackgroundUrl,
                        className: T.presetImage
                    }),
                    (0, n.jsx)(r.Text, {
                        className: T.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: (0, u._h)(S.presetName)
                    })
                ]
            })
        ]
    });
}
