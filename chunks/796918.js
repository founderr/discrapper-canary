n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(481060),
    c = n(442837),
    d = n(355932),
    u = n(314897),
    m = n(353093),
    h = n(214715),
    g = n(18100),
    x = n(308083),
    p = n(388032),
    f = n(258738),
    C = n(602075);
t.Z = (e) => {
    let { guildId: t, handleUpdate: n, progress: l, error: v } = e,
        { interests: _ } = l,
        [I, N] = r.useState(''),
        [T, j] = r.useState(0),
        b = (0, c.e7)([u.default], () => u.default.getId()),
        S = r.useMemo(() => (0, a.chunk)((0, m.XV)(x.i6, b), 9), [b]),
        E = [...S[T], ...S[(T + 1) % S.length]],
        R = r.useMemo(() => Array.from(_), [_]),
        Z = r.useMemo(() => R.filter((e) => !x.WZ.has(e) && !x.gh.has(e)), [R]),
        y = (e) => {
            let t = new Set(_);
            t.delete(e), n({ interests: t });
        },
        A = r.useCallback(
            (e) => {
                if (_.size === x.c4) return;
                let t = null != e ? e : I.trim();
                if (0 === t.length) return;
                let i = new Set(_);
                i.add(t), n({ interests: i }), N('');
            },
            [n, I, _]
        ),
        L = r.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Enter':
                    case 'Tab':
                        e.preventDefault(), e.stopPropagation(), A();
                }
            },
            [A]
        ),
        D = r.useCallback(() => {
            j((e) => (e + 1) % S.length);
        }, [j, S]);
    return (0, i.jsxs)('div', {
        className: C.slideContent,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xxl/medium',
                className: C.title,
                children: p.intl.string(p.t.V69HzM)
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: C.subtitle,
                children: p.intl.format(p.t['BAK+ND'], {})
            }),
            null != v &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: C.errorText,
                    children: v
                }),
            (0, i.jsxs)('div', {
                className: C.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: C.mainPanelContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: C.inputContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/semibold',
                                        color: 'text-muted',
                                        className: C.contentLabel,
                                        children: p.intl.string(p.t.qMh4Oj)
                                    }),
                                    (0, i.jsx)(o.TextInput, {
                                        autoFocus: !0,
                                        inputClassName: C.input,
                                        value: I,
                                        onKeyDown: L,
                                        onChange: N,
                                        placeholder: p.intl.string(p.t.axCpsL),
                                        maxLength: x.Sq,
                                        disabled: _.size === x.c4
                                    }),
                                    I.length > 0 &&
                                        (0, i.jsx)(o.Clickable, {
                                            onClick: () => A(I.trim()),
                                            className: s()(C.plusIcon, C.clickable),
                                            children: (0, i.jsx)(o.PlusSmallIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: C.icon
                                            })
                                        }),
                                    I.length > 0 &&
                                        (0, i.jsx)(o.Text, {
                                            color: 'text-muted',
                                            variant: 'text-xs/normal',
                                            className: C.enterToSearchText,
                                            children: p.intl.string(p.t.ZGkhJS)
                                        })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                className: C.interestsCategoryTitle,
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: p.intl.string(p.t.P793o6)
                            }),
                            (0, i.jsx)(d.ZP, {
                                items: E,
                                renderItem: (e) =>
                                    (0, i.jsx)(
                                        h.Z,
                                        {
                                            variant: 'text-xs/semibold',
                                            color: 'interactive-normal',
                                            text: e,
                                            selected: _.has(e),
                                            onClick: _.has(e) ? y : A
                                        },
                                        e
                                    ),
                                maxLines: 2,
                                className: C.interestsCategory,
                                itemGapPx: 8,
                                renderOverflow: () => null
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsxs)(o.Button, {
                                    color: o.ButtonColors.PRIMARY,
                                    onClick: D,
                                    className: f.rerollButton,
                                    innerClassName: f.innerRerollButton,
                                    children: [
                                        (0, i.jsx)(o.MagicWandIcon, {
                                            size: 'sm',
                                            color: 'currentColor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'none',
                                            children: p.intl.string(p.t.ldYCQ0)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: C.fixedWidthSidebar,
                        children:
                            R.length > 0 &&
                            (0, i.jsx)(g.Z, {
                                guildId: t,
                                progress: l,
                                traitsToHighlight: Z,
                                maskDescription: !0,
                                onTraitClick: y
                            })
                    })
                ]
            })
        ]
    });
};
