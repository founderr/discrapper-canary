t.d(n, {
    p: function () {
        return x;
    }
}),
    t(47120),
    t(773603);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(481060),
    l = t(368343),
    c = t(364083),
    d = t(92373),
    u = t(308083),
    m = t(388032),
    f = t(494750),
    h = t(602075);
function x(e) {
    let { gameApplicationIds: n, preventGameRemoval: t, onUpdateGames: i, minGames: l = 1, error: x } = e,
        { options: p, matchSorterOptions: g } = (0, c.P)(),
        C = a.useMemo(() => Array.from(n), [n]),
        b = a.useCallback(
            (e) => {
                if (!(e.length < l)) i(new Set(e));
            },
            [l, i]
        ),
        v = a.useCallback(
            (e) => {
                if (t) return;
                let r = new Set(n);
                n.has(e) ? r.delete(e) : r.add(e), i(r);
            },
            [t, n, i]
        ),
        _ = a.useCallback(() => null, []);
    return (0, r.jsx)('div', {
        className: f.inputContainer,
        children: (0, r.jsxs)(s.FormItem, {
            error: x,
            children: [
                (0, r.jsx)(s.SearchableSelect, {
                    multi: !0,
                    hidePills: !0,
                    autoFocus: !0,
                    wrapperClassName: o()(h.input, f.input),
                    options: p,
                    value: C,
                    placeholder: m.intl.string(m.t.acyezc),
                    onChange: b,
                    isDisabled: n.size === u.cm,
                    matchSorterOptions: g,
                    clearQueryOnSelect: !0,
                    customPillContainerClassName: f.pills,
                    renderCustomPill: _
                }),
                C.length > 0 &&
                    (0, r.jsxs)('div', {
                        className: f.gamesContainer,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: m.intl.string(m.t.PgOVsL)
                            }),
                            (0, r.jsx)('div', {
                                className: f.gamesList,
                                children: C.map((e) =>
                                    (0, r.jsx)(
                                        s.Tooltip,
                                        {
                                            text: m.intl.string(m.t.C1K2XV),
                                            shouldShow: t,
                                            tooltipContentClassName: f.tooltip,
                                            children: (a) =>
                                                (0, r.jsx)('div', {
                                                    ...a,
                                                    children: (0, r.jsx)(
                                                        d.Z,
                                                        {
                                                            applicationId: e,
                                                            imageContainerClassName: n.size > l ? f.clickableGame : void 0,
                                                            selected: !0,
                                                            locked: t,
                                                            onClick: v
                                                        },
                                                        e
                                                    )
                                                })
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    });
}
function p(e) {
    let { guildId: n, selectedGameApplicationIds: t, onUpdateGames: i } = e,
        { topGames: o, tryFetchTopGames: c } = (0, l.B)(),
        u = o.get(n),
        [h, x] = a.useState(!1);
    a.useEffect(() => {
        x(!0),
            c(n).finally(() => {
                x(!1);
            });
    }, [n, c]);
    let p = a.useMemo(() => (null == u ? [] : Object.keys(u).sort((e, n) => u[n].score - u[e].score)), [u]),
        g = a.useCallback(
            (e) => {
                let n = new Set(t);
                t.has(e) ? n.delete(e) : n.add(e), i(n);
            },
            [i, t]
        );
    return h && null == u
        ? (0, r.jsx)(s.Spinner, { className: f.loadingSpinner })
        : null == p || 0 === p.length
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('hr', { className: f.separator }),
                    (0, r.jsxs)('div', {
                        className: f.gamesContainer,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: m.intl.string(m.t['0wEQQ0'])
                            }),
                            (0, r.jsx)('div', {
                                className: f.gamesList,
                                children: p.map((e) =>
                                    (0, r.jsx)(
                                        d.Z,
                                        {
                                            applicationId: e,
                                            imageContainerClassName: f.clickableGame,
                                            selected: t.has(e),
                                            onClick: g
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    })
                ]
            });
}
n.Z = (e) => {
    let { title: n, description: t, onUpdateGames: a, gameApplicationIds: i, minGames: l = 1, error: c, guildId: d, includeSuggestedGames: u } = e,
        m = i.size <= l;
    return (0, r.jsxs)('div', {
        className: o()(h.slideContent, f.container),
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-xxl/medium',
                className: h.title,
                children: n
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: h.subtitle,
                children: t
            }),
            (0, r.jsx)(x, {
                minGames: l,
                gameApplicationIds: i,
                preventGameRemoval: m,
                onUpdateGames: a,
                error: c
            }),
            u &&
                null != d &&
                (0, r.jsx)(p, {
                    guildId: d,
                    selectedGameApplicationIds: i,
                    onUpdateGames: a
                })
        ]
    });
};
