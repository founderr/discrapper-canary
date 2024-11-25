n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(97028),
    l = n(481060),
    u = n(686546),
    c = n(353093),
    d = n(388032),
    f = n(894979);
function _(e) {
    let { games: t, gameActivity: n } = e;
    return (0, r.jsx)('div', {
        className: f.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let i = null == n ? void 0 : n[e.id],
                a = (null == i ? void 0 : i.level) === o.m.HIGH,
                s = (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: f.tooltipGameName,
                    children: [
                        e.name,
                        a &&
                            (0, r.jsx)(l.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: d.intl.string(d.t.gTQrTU)
                            })
                    ]
                });
            return (0, r.jsxs)(
                'div',
                {
                    className: f.tooltipGame,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.tooltipGameImageContainer,
                            children: (0, r.jsx)('img', {
                                src: t,
                                alt: e.name,
                                className: f.tooltipGameImage
                            })
                        }),
                        s
                    ]
                },
                e.id
            );
        })
    });
}
function p(e) {
    var t;
    let { game: n, gameActivity: i, highlighted: a = !1 } = e,
        c = n.getIconURL(24);
    if (null == c) return null;
    let _ = (null == i ? void 0 : null === (t = i[n.id]) || void 0 === t ? void 0 : t.level) === o.m.HIGH,
        p = (0, r.jsxs)(l.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: f.tooltipText,
            children: [
                n.name,
                _ &&
                    (0, r.jsx)(l.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: d.intl.string(d.t.gTQrTU)
                    })
            ]
        });
    return (0, r.jsx)(l.Tooltip, {
        text: p,
        position: 'bottom',
        'aria-label': n.name,
        children: (e) =>
            (0, r.jsxs)('div', {
                ...e,
                className: s()(f.gameImageContainer, a && f.highlighted),
                children: [
                    (0, r.jsx)('img', {
                        src: c,
                        alt: n.name,
                        className: f.gameImage
                    }),
                    _ &&
                        (0, r.jsx)(u.ZP, {
                            mask: u.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: 14,
                            height: 14,
                            className: f.gameActivityLevel,
                            children: (0, r.jsx)('div', {
                                className: f.gameActivityLevelInner,
                                children: (0, r.jsx)(l.FireIcon, {
                                    color: l.tokens.unsafe_rawColors.ORANGE_330.css,
                                    width: 10,
                                    height: 10,
                                    size: 'custom'
                                })
                            })
                        })
                ]
            })
    });
}
let h = (e) => (t, n) => {
    var r, i, a, s;
    let o = null !== (a = null == e ? void 0 : null === (r = e[t.id]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : 0,
        l = null !== (s = null == e ? void 0 : null === (i = e[n.id]) || void 0 === i ? void 0 : i.score) && void 0 !== s ? s : 0;
    return o !== l ? l - o : 0;
};
t.Z = i.memo(function (e) {
    let { games: t, prioritizedGameIds: n = new Set(), gameActivity: a = {}, onInteraction: s } = e,
        o = i.useMemo(() => {
            let e = t.filter((e) => null != e && null != e.icon),
                r = e.filter((e) => !n.has(e.id)).sort(h(a));
            return [...e.filter((e) => n.has(e.id)).sort(h(a)), ...r];
        }, [a, t, n]),
        u = o.slice(0, 3),
        d = i.useMemo(() => {
            var e;
            let t = o[3];
            if (null == t) return null;
            let n = t.getIconURL(24);
            if (null == n) return null;
            if (o.length <= 4)
                return (0, r.jsx)(p, {
                    game: t,
                    gameActivity: a
                });
            let i = o.slice(3);
            return (0, r.jsx)(l.Tooltip, {
                'aria-label': null !== (e = (0, c.f6)(i.map((e) => e.name))) && void 0 !== e ? e : '',
                onTooltipShow: () => (null == s ? void 0 : s()),
                text: (0, r.jsx)(_, {
                    games: i,
                    gameActivity: a
                }),
                position: 'bottom',
                children: (e) =>
                    (0, r.jsxs)('div', {
                        ...e,
                        className: f.gameImageContainer,
                        children: [
                            (0, r.jsx)('img', {
                                src: n,
                                alt: t.name,
                                className: f.gameImage
                            }),
                            (0, r.jsx)('div', {
                                className: f.extraGameCount,
                                children: (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    children: '+'.concat(i.length)
                                })
                            })
                        ]
                    })
            });
        }, [a, o, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u.map((e) =>
                (0, r.jsx)(
                    p,
                    {
                        game: e,
                        gameActivity: a,
                        highlighted: n.has(e.id)
                    },
                    e.id
                )
            ),
            d
        ]
    });
});
