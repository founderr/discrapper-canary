t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(442837),
    l = t(481060),
    c = t(231467),
    d = t(430824),
    u = t(214715),
    m = t(308083),
    f = t(388032),
    h = t(200153);
function x(e) {
    let { trait: n, selected: t, onClick: i } = e,
        [s, l] = a.useState(!1),
        c = a.useCallback(() => l(!0), []),
        d = a.useCallback(() => l(!1), []);
    return (0, r.jsx)(
        u.Z,
        {
            variant: 'text-xs/semibold',
            color: s ? 'text-muted' : 'interactive-active',
            className: o()(h.trait, { [h.strikethrough]: s }),
            text: n,
            selected: t,
            onMouseEnter: t ? c : void 0,
            onMouseLeave: t ? d : void 0,
            onClick: t ? i : void 0
        },
        n
    );
}
function p(e) {
    var n;
    let { guildId: t, progress: i, traitsToHighlight: u, maskDescription: p, maskTraits: g, onTraitClick: C } = e,
        b = (0, s.e7)([d.Z], () => d.Z.getGuild(t)),
        { interests: v, description: _, playstyle: y, wildcardDescriptors: T, brandPrimaryColor: I } = i,
        j = (0, l.useToken)(l.tokens.colors.TEXT_BRAND),
        N = Array.from(v),
        S = a.useMemo(() => (null != u ? new Set(u) : new Set()), [u]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: o()(h.description, p ? h.descriptionBorderMask : void 0),
                children: [
                    (0, r.jsx)('div', { className: p ? h.descriptionMask : void 0 }),
                    (0, r.jsx)(l.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null == b ? void 0 : b.name
                    }),
                    (0, r.jsxs)('div', {
                        className: h.clanInfoRow,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xxs/normal',
                                className: h.clanInfoItem,
                                children: (0, r.jsx)('span', {
                                    role: 'img',
                                    'aria-label': f.intl.string(f.t.eMSBIC),
                                    children: '\uD83C\uDFAE'
                                })
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-secondary',
                                className: h.clanInfoItem,
                                children: null !== (n = (0, m.mv)(y)) && void 0 !== n ? n : f.intl.string(f.t.JijC4O)
                            }),
                            null != b &&
                                (0, r.jsx)(c.cS, {
                                    wildcardDescriptors: T,
                                    primaryColor: null != I ? I : j.hex()
                                })
                        ]
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: h.descriptionText,
                        children: (null == _ ? void 0 : _.length) > 0 ? _ : f.intl.string(f.t['/pfXKi'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(h.tagsContainer, g ? h.traitsBorderMask : void 0),
                children: [
                    (0, r.jsx)('div', { className: g ? h.traitsMask : void 0 }),
                    (0, r.jsxs)('div', {
                        className: h.tagsCount,
                        children: [
                            (0, r.jsx)(l.TagsIcon, {
                                size: 'xxs',
                                className: h.tags
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: f.intl.format(f.t['3vJqtr'], { n: N.length })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: h.traits,
                        children: N.map((e) =>
                            (0, r.jsx)(
                                x,
                                {
                                    trait: e,
                                    selected: S.has(e),
                                    onClick: C
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
