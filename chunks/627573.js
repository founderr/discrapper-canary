i(47120);
var s = i(200651),
    a = i(192379),
    n = i(120356),
    r = i.n(n),
    l = i(481060),
    o = i(259674),
    d = i(981631),
    c = i(388032),
    m = i(89388);
t.Z = (e) => {
    let { headerId: t, guild: i, onAgreedChange: n } = e,
        [u, x] = a.useState(!1),
        [g, h] = a.useState(!1),
        [p, v] = a.useState(!1);
    a.useEffect(() => {
        u && g && p ? n(!0) : n(!1);
    }, [u, g, p, n]);
    let f = c.intl.format(c.t.S2lVJS, {
        onCommunityGuidelinesClick: () =>
            (0, o.lW)({
                articleId: d.BhN.PUBLIC_GUILD_GUILDLINES,
                guildId: i.id,
                modalStep: o.tK.AGREE_TO_RULES
            }),
        onDiscoveryGuidelinesClick: () =>
            (0, o.lW)({
                articleId: d.BhN.SERVER_DISCOVERY_GUIDELINES,
                guildId: i.id,
                modalStep: o.tK.AGREE_TO_RULES
            })
    });
    return (0, s.jsxs)('div', {
        className: m.container,
        children: [
            (0, s.jsxs)('div', {
                className: m.content,
                children: [
                    (0, s.jsx)('div', { className: r()(m.stepImage, m.checkImage) }),
                    (0, s.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        className: m.header,
                        id: t,
                        children: c.intl.string(c.t.Q8OFNz)
                    }),
                    (0, s.jsx)(l.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: m.headerCaption,
                        children: c.intl.string(c.t['20piMT'])
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: m.form,
                children: [
                    (0, s.jsx)(l.FormTitle, {
                        required: !0,
                        children: c.intl.string(c.t.HsM7a2)
                    }),
                    (0, s.jsx)('div', {
                        className: m.checkboxWrapper,
                        children: (0, s.jsxs)(l.Checkbox, {
                            type: l.Checkbox.Types.ROW,
                            value: u,
                            align: l.Checkbox.Aligns.TOP,
                            onChange: () => x(!u),
                            children: [
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-md/semibold',
                                    className: m.checkboxTitle,
                                    children: c.intl.string(c.t.jIi9go)
                                }),
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: c.intl.string(c.t['4uUAXl'])
                                })
                            ]
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: m.checkboxWrapper,
                        children: (0, s.jsxs)(l.Checkbox, {
                            type: l.Checkbox.Types.ROW,
                            align: l.Checkbox.Aligns.TOP,
                            value: g,
                            onChange: () => h(!g),
                            children: [
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-md/semibold',
                                    className: m.checkboxTitle,
                                    children: c.intl.string(c.t.iwnCh4)
                                }),
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: c.intl.string(c.t.UKFzER)
                                })
                            ]
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: m.checkboxWrapper,
                        children: (0, s.jsxs)(l.Checkbox, {
                            type: l.Checkbox.Types.ROW,
                            align: l.Checkbox.Aligns.TOP,
                            value: p,
                            onChange: () => v(!p),
                            children: [
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-md/semibold',
                                    className: m.checkboxTitle,
                                    children: f
                                }),
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: c.intl.string(c.t.u0Go2t)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
