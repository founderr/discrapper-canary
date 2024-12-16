n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(481060),
    c = n(442837),
    d = n(314897),
    u = n(353093),
    m = n(214715),
    h = n(18100),
    g = n(308083),
    x = n(388032),
    p = n(331816),
    f = n(240938);
t.Z = (e) => {
    let { guildId: t, handleUpdate: n, progress: l, error: C } = e,
        { interests: _ } = l,
        [I, v] = r.useState(''),
        [N, T] = r.useState(0),
        b = (0, c.e7)([d.default], () => d.default.getId()),
        j = r.useMemo(() => (0, a.chunk)((0, u.XV)(g.i6, b), 9), [b]),
        S = [...j[N], ...j[(N + 1) % j.length]],
        E = r.useMemo(() => Array.from(_), [_]),
        R = r.useMemo(() => E.filter((e) => !g.WZ.has(e) && !g.gh.has(e)), [E]),
        y = (e) => {
            let t = new Set(_);
            t.delete(e), n({ interests: t });
        },
        A = r.useCallback(
            (e) => {
                if (_.size === g.c4) return;
                let t = null != e ? e : I.trim();
                if (0 === t.length) return;
                let i = new Set(_);
                i.add(t), n({ interests: i }), v('');
            },
            [n, I, _]
        ),
        Z = r.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Enter':
                    case 'Tab':
                        e.preventDefault(), e.stopPropagation(), A();
                }
            },
            [A]
        ),
        L = r.useCallback(() => {
            T((e) => (e + 1) % j.length);
        }, [T, j]);
    return (0, i.jsxs)('div', {
        className: f.slideContent,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xxl/medium',
                className: f.title,
                children: x.intl.string(x.t.V69HzM)
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: f.subtitle,
                children: x.intl.format(x.t['BAK+ND'], {})
            }),
            null != C &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: f.errorText,
                    children: C
                }),
            (0, i.jsxs)('div', {
                className: f.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.mainPanelContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: f.inputContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/semibold',
                                        color: 'text-muted',
                                        className: f.contentLabel,
                                        children: x.intl.string(x.t.qMh4Oj)
                                    }),
                                    (0, i.jsx)(o.TextInput, {
                                        autoFocus: !0,
                                        inputClassName: f.input,
                                        value: I,
                                        onKeyDown: Z,
                                        onChange: v,
                                        placeholder: x.intl.string(x.t.axCpsL),
                                        maxLength: g.Sq,
                                        disabled: _.size === g.c4
                                    }),
                                    I.length > 0 &&
                                        (0, i.jsx)(o.Clickable, {
                                            onClick: () => A(I.trim()),
                                            className: s()(f.plusIcon, f.clickable),
                                            children: (0, i.jsx)(o.PlusSmallIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: f.icon
                                            })
                                        }),
                                    I.length > 0 &&
                                        (0, i.jsx)(o.Text, {
                                            color: 'text-muted',
                                            variant: 'text-xs/normal',
                                            className: f.enterToSearchText,
                                            children: x.intl.string(x.t.ZGkhJS)
                                        })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                className: f.interestsCategoryTitle,
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: x.intl.string(x.t.P793o6)
                            }),
                            (0, i.jsx)(o.HorizontalOverflowList, {
                                items: S,
                                renderItem: (e) =>
                                    (0, i.jsx)(
                                        m.Z,
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
                                className: f.interestsCategory,
                                itemGapPx: 8,
                                renderOverflow: () => null
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsxs)(o.Button, {
                                    color: o.ButtonColors.PRIMARY,
                                    onClick: L,
                                    className: p.rerollButton,
                                    innerClassName: p.innerRerollButton,
                                    children: [
                                        (0, i.jsx)(o.MagicWandIcon, {
                                            size: 'sm',
                                            color: 'currentColor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'none',
                                            children: x.intl.string(x.t.ldYCQ0)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: f.fixedWidthSidebar,
                        children:
                            E.length > 0 &&
                            (0, i.jsx)(h.Z, {
                                guildId: t,
                                progress: l,
                                traitsToHighlight: R,
                                maskDescription: !0,
                                onTraitClick: y
                            })
                    })
                ]
            })
        ]
    });
};
