i(47120);
var s = i(200651),
    a = i(192379),
    n = i(120356),
    r = i.n(n),
    l = i(481060),
    o = i(219369),
    c = i(981631),
    d = i(388032),
    m = i(201221);
t.Z = (e) => {
    let { headerId: t, guild: i, onAgreedChange: n } = e,
        [u, x] = a.useState(!1),
        [g, h] = a.useState(!1),
        [p, v] = a.useState(!1);
    a.useEffect(() => {
        u && g && p ? n(!0) : n(!1);
    }, [u, g, p, n]);
    let f = d.intl.format(d.t.S2lVJS, {
        onCommunityGuidelinesClick: () =>
            (0, o.lW)({
                articleId: c.BhN.PUBLIC_GUILD_GUILDLINES,
                guildId: i.id,
                modalStep: o.tK.AGREE_TO_RULES
            }),
        onDiscoveryGuidelinesClick: () =>
            (0, o.lW)({
                articleId: c.BhN.SERVER_DISCOVERY_GUIDELINES,
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
                        children: d.intl.string(d.t.Q8OFNz)
                    }),
                    (0, s.jsx)(l.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: m.headerCaption,
                        children: d.intl.string(d.t['20piMT'])
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: m.form,
                children: [
                    (0, s.jsx)(l.FormTitle, {
                        required: !0,
                        children: d.intl.string(d.t.HsM7a2)
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
                                    children: d.intl.string(d.t.jIi9go)
                                }),
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: d.intl.string(d.t['4uUAXl'])
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
                                    children: d.intl.string(d.t.iwnCh4)
                                }),
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: d.intl.string(d.t.UKFzER)
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
                                    children: d.intl.string(d.t.u0Go2t)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
