n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(692547),
    s = n(481060),
    a = n(45966),
    o = n(637853),
    c = n(889369),
    d = n(974513),
    u = n(290511),
    m = n(388032),
    h = n(435359);
function g(e) {
    let { guildId: t, scrollToQuestions: n } = e,
        g = (0, r.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        x = (0, r.e7)([c.Z], () => c.Z.editedDefaultChannelIds),
        [p, f] = (0, o.VF)(t, x),
        [C, I] = (0, d.OA)(t, [...x]),
        _ = g ? I.length : f.length,
        N = g ? C.length : p.length,
        v = _ < u.md,
        T = N >= u.X,
        j = I.length - f.length,
        S = (0, i.jsx)(s.CircleCheckIcon, {
            size: 'sm',
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
            className: h.icon
        }),
        b = (0, i.jsx)(s.CircleXIcon, {
            size: 'sm',
            className: h.icon,
            color: l.Z.colors.WHITE.css,
            secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
        }),
        E = [(Math.min(u.X, N) / u.md) * 100, (Math.min(u.md, _) / u.md) * 100],
        R = !v && T ? [l.Z.colors.TEXT_POSITIVE.css, l.Z.colors.TEXT_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)('div', {
                className: h.header,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-brand',
                        children: m.intl.format(m.t.kvroKC, { count: N })
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        children: m.intl.format(m.t['0MjxJy'], { count: _ })
                    })
                ]
            }),
            (0, i.jsx)(s.StackedProgress, {
                foregroundColors: R,
                percents: E,
                size: s.StackedProgress.Sizes.XSMALL
            }),
            (0, i.jsxs)('div', {
                className: h.requiredItem,
                children: [
                    v ? b : S,
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.intl.format(m.t.k0COZW, { count: u.md })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.requiredItem,
                children: [
                    T ? S : b,
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: m.intl.format(m.t.PwXgS0, { count: u.X })
                    })
                ]
            }),
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.requiredItem,
                            children: [
                                (0, i.jsx)(s.CircleInformationIcon, {
                                    size: 'sm',
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: h.icon
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.intl.string(m.t.AyvkOD)
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: h.requiredItem,
                            children: [
                                (0, i.jsx)(s.CircleInformationIcon, {
                                    size: 'sm',
                                    color: l.Z.colors.WHITE.css,
                                    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
                                    className: h.icon
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: m.intl.format(m.t['8Geut7'], {
                                        count: j,
                                        prejoinHook: (e) =>
                                            (0, i.jsx)(s.Anchor, {
                                                onClick: n,
                                                children: (0, i.jsx)(s.Text, {
                                                    tag: 'span',
                                                    variant: 'text-xs/normal',
                                                    color: 'text-link',
                                                    children: e
                                                })
                                            })
                                    })
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
