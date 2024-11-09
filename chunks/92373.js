var r = t(200651),
    a = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(481060),
    l = t(442837),
    c = t(210753),
    d = t(77498),
    u = t(388032),
    m = t(123060);
n.Z = function (e) {
    let { applicationId: n, imageContainerClassName: t, onClick: i, selected: f, locked: h = !1, otherGamesCount: x = 0 } = e,
        p = (0, s.useToken)(s.tokens.colors.WHITE),
        { isFetching: g, coverImageUrl: C } = (0, c.$)(n, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }),
        b = (0, l.e7)([d.Z], () => {
            var e, t;
            return null !== (t = null === (e = d.Z.getDetectableGame(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : '';
        }),
        v = a.useCallback(() => {
            null == i || i(n);
        }, [n, i]),
        _ = a.useMemo(
            () =>
                g
                    ? null
                    : null == C
                      ? (0, r.jsx)('div', {
                            className: m.gameUnknownImage,
                            children: (0, r.jsx)(s.UnknownGameIcon, { size: 'lg' })
                        })
                      : (0, r.jsx)('img', {
                            className: m.gameImage,
                            alt: b,
                            src: C
                        }),
            [C, g, b]
        );
    return (0, r.jsxs)('div', {
        className: m.selectedGame,
        children: [
            (0, r.jsxs)(s.Clickable, {
                onClick: v,
                className: o()(t, g ? m.gameImageLoading : void 0, m.gameImageBackground),
                children: [
                    f &&
                        (0, r.jsx)('div', {
                            className: m.checkBackground,
                            children: (0, r.jsx)(s.CircleCheckIcon, {
                                size: 'md',
                                color: 'currentColor',
                                secondaryColor: p.hex(),
                                className: o()(m.selectedGameCheck, { [m.selectedGameCheckLocked]: h })
                            })
                        }),
                    _,
                    x > 0 &&
                        (0, r.jsx)('div', {
                            className: m.remainingGame,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: u.intl.format(u.t.F6iMs7, { count: x })
                            })
                        })
                ]
            }),
            (0, r.jsxs)(s.Text, {
                className: m.gameName,
                variant: 'text-xs/normal',
                color: 'header-primary',
                children: [b, h && (0, r.jsx)(s.LockIcon, { size: 'xxs' })]
            })
        ]
    });
};
