n.d(t, {
    P: function () {
        return S;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(97028),
    u = n(481060),
    c = n(353093),
    d = n(686546),
    _ = n(852786),
    E = n(689938),
    f = n(845024);
let h = 4,
    p = 10,
    m = 2;
function I(e) {
    let { games: t, gameActivity: n } = e;
    return (0, i.jsx)('div', {
        className: f.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let r = null == n ? void 0 : n[e.id],
                a = (null == r ? void 0 : r.level) === l.m.HIGH,
                o = (0, i.jsxs)(u.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: f.tooltipGameName,
                    children: [
                        e.name,
                        a &&
                            (0, i.jsx)(u.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: E.Z.Messages.CLAN_GAMEPLAY_ACTIVITY_HIGH
                            })
                    ]
                });
            return (0, i.jsxs)(
                'div',
                {
                    className: f.tooltipGame,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.tooltipGameImageContainer,
                            children: (0, i.jsx)('img', {
                                src: t,
                                alt: e.name,
                                className: f.tooltipGameImage
                            })
                        }),
                        o
                    ]
                },
                e.id
            );
        })
    });
}
function T(e) {
    var t;
    let { game: n, gameActivity: r, highlighted: a = !1 } = e,
        o = n.getIconURL(24);
    if (null == o) return null;
    let c = (null == r ? void 0 : null === (t = r[n.id]) || void 0 === t ? void 0 : t.level) === l.m.HIGH,
        _ = (0, i.jsxs)(u.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: f.tooltipText,
            children: [
                n.name,
                c &&
                    (0, i.jsx)(u.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: E.Z.Messages.CLAN_GAMEPLAY_ACTIVITY_HIGH
                    })
            ]
        });
    return (0, i.jsx)(u.Tooltip, {
        text: _,
        position: 'bottom',
        'aria-label': n.name,
        children: (e) =>
            (0, i.jsxs)('div', {
                ...e,
                className: s()(f.gameImageContainer, a && f.highlighted),
                children: [
                    (0, i.jsx)('img', {
                        src: o,
                        alt: n.name,
                        className: f.gameImage
                    }),
                    c &&
                        (0, i.jsx)(d.ZP, {
                            mask: d.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: p + 2 * m,
                            height: p + 2 * m,
                            className: f.gameActivityLevel,
                            children: (0, i.jsx)('div', {
                                className: f.gameActivityLevelInner,
                                children: (0, i.jsx)(u.FireIcon, {
                                    color: u.tokens.unsafe_rawColors.ORANGE_330.css,
                                    width: p,
                                    height: p,
                                    size: 'custom'
                                })
                            })
                        })
                ]
            })
    });
}
let g = (e) => (t, n) => {
    var r, i, a, o;
    let s = null !== (a = null == e ? void 0 : null === (r = e[t.id]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : 0,
        l = null !== (o = null == e ? void 0 : null === (i = e[n.id]) || void 0 === i ? void 0 : i.score) && void 0 !== o ? o : 0;
    return s !== l ? l - s : 0;
};
function S(e) {
    let { delayMs: t = 0 } = e;
    return (0, i.jsx)('div', {
        className: f.gameImageContainer,
        children: (0, i.jsx)(_.Z, {
            className: f.gameImage,
            width: 24,
            height: 24,
            delayMs: t
        })
    });
}
t.Z = a.memo(function (e) {
    let { games: t, prioritizedGameIds: n = new Set(), gameActivity: r = {}, onInteraction: o } = e,
        s = a.useMemo(() => {
            let e = t.filter((e) => null != e && null != e.icon),
                i = e.filter((e) => !n.has(e.id)).sort(g(r));
            return [...e.filter((e) => n.has(e.id)).sort(g(r)), ...i];
        }, [r, t, n]),
        l = s.slice(0, h - 1),
        d = a.useMemo(() => {
            var e;
            let t = s[h - 1];
            if (null == t) return null;
            let n = t.getIconURL(24);
            if (null == n) return null;
            if (s.length <= h)
                return (0, i.jsx)(T, {
                    game: t,
                    gameActivity: r
                });
            let a = s.slice(h - 1);
            return (0, i.jsx)(u.Tooltip, {
                'aria-label': null !== (e = (0, c.f6)(a.map((e) => e.name))) && void 0 !== e ? e : '',
                onTooltipShow: () => (null == o ? void 0 : o()),
                text: (0, i.jsx)(I, {
                    games: a,
                    gameActivity: r
                }),
                position: 'bottom',
                children: (e) =>
                    (0, i.jsxs)('div', {
                        ...e,
                        className: f.gameImageContainer,
                        children: [
                            (0, i.jsx)('img', {
                                src: n,
                                alt: t.name,
                                className: f.gameImage
                            }),
                            (0, i.jsx)('div', {
                                className: f.extraGameCount,
                                children: (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    children: '+'.concat(a.length)
                                })
                            })
                        ]
                    })
            });
        }, [r, s, o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l.map((e) =>
                (0, i.jsx)(
                    T,
                    {
                        game: e,
                        gameActivity: r,
                        highlighted: n.has(e.id)
                    },
                    e.id
                )
            ),
            d
        ]
    });
});
