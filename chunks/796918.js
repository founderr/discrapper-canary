t(47120);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    o = t(392711),
    l = t(481060),
    c = t(442837),
    d = t(355932),
    u = t(314897),
    m = t(353093),
    f = t(214715),
    h = t(18100),
    x = t(308083),
    p = t(388032),
    g = t(793375),
    C = t(306882);
n.Z = (e) => {
    let { guildId: n, handleUpdate: t, progress: i, error: b } = e,
        { interests: v } = i,
        [_, y] = a.useState(''),
        [T, j] = a.useState(0),
        I = (0, c.e7)([u.default], () => u.default.getId()),
        N = a.useMemo(() => (0, o.chunk)((0, m.XV)(x.i6, I), 9), [I]),
        S = [...N[T], ...N[(T + 1) % N.length]],
        E = a.useMemo(() => Array.from(v), [v]),
        k = a.useMemo(() => E.filter((e) => !x.WZ.has(e) && !x.gh.has(e)), [E]),
        A = (e) => {
            let n = new Set(v);
            n.delete(e), t({ interests: n });
        },
        w = a.useCallback(
            (e) => {
                if (v.size === x.c4) return;
                let n = null != e ? e : _.trim();
                if (0 === n.length) return;
                let r = new Set(v);
                r.add(n), t({ interests: r }), y('');
            },
            [t, _, v]
        ),
        M = a.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Enter':
                    case 'Tab':
                        e.preventDefault(), e.stopPropagation(), w();
                }
            },
            [w]
        ),
        R = a.useCallback(() => {
            j((e) => (e + 1) % N.length);
        }, [j, N]);
    return (0, r.jsxs)('div', {
        className: C.slideContent,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: 'heading-xxl/medium',
                className: C.title,
                children: p.intl.string(p.t.V69HzM)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: C.subtitle,
                children: p.intl.format(p.t['BAK+ND'], {})
            }),
            null != b &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: C.errorText,
                    children: b
                }),
            (0, r.jsxs)('div', {
                className: C.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: C.mainPanelContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: C.inputContainer,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/semibold',
                                        color: 'text-muted',
                                        className: C.contentLabel,
                                        children: p.intl.string(p.t.qMh4Oj)
                                    }),
                                    (0, r.jsx)(l.TextInput, {
                                        autoFocus: !0,
                                        inputClassName: C.input,
                                        value: _,
                                        onKeyDown: M,
                                        onChange: y,
                                        placeholder: p.intl.string(p.t.axCpsL),
                                        maxLength: x.Sq,
                                        disabled: v.size === x.c4
                                    }),
                                    _.length > 0 &&
                                        (0, r.jsx)(l.Clickable, {
                                            onClick: () => w(_.trim()),
                                            className: s()(C.plusIcon, C.clickable),
                                            children: (0, r.jsx)(l.PlusSmallIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: C.icon
                                            })
                                        }),
                                    _.length > 0 &&
                                        (0, r.jsx)(l.Text, {
                                            color: 'text-muted',
                                            variant: 'text-xs/normal',
                                            className: C.enterToSearchText,
                                            children: p.intl.string(p.t.ZGkhJS)
                                        })
                                ]
                            }),
                            (0, r.jsx)(l.Text, {
                                className: C.interestsCategoryTitle,
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: p.intl.string(p.t.P793o6)
                            }),
                            (0, r.jsx)(d.ZP, {
                                items: S,
                                renderItem: (e) =>
                                    (0, r.jsx)(
                                        f.Z,
                                        {
                                            variant: 'text-xs/semibold',
                                            color: 'interactive-normal',
                                            text: e,
                                            selected: v.has(e),
                                            onClick: v.has(e) ? A : w
                                        },
                                        e
                                    ),
                                maxLines: 2,
                                className: C.interestsCategory,
                                itemGapPx: 8,
                                renderOverflow: () => null
                            }),
                            (0, r.jsx)('div', {
                                children: (0, r.jsxs)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    onClick: R,
                                    className: g.rerollButton,
                                    innerClassName: g.innerRerollButton,
                                    children: [
                                        (0, r.jsx)(l.MagicWandIcon, {
                                            size: 'sm',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'none',
                                            children: p.intl.string(p.t.ldYCQ0)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: C.fixedWidthSidebar,
                        children:
                            E.length > 0 &&
                            (0, r.jsx)(h.Z, {
                                guildId: n,
                                progress: i,
                                traitsToHighlight: k,
                                maskDescription: !0,
                                onTraitClick: A
                            })
                    })
                ]
            })
        ]
    });
};
