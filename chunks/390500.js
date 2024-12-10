var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(970606),
    o = n(565138),
    s = n(388032),
    c = n(832311),
    d = n(586522);
t.Z = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        u = null == n ? void 0 : n.id;
    return (
        r.useEffect(() => {
            null != u && (0, a.Pq)(u);
        }, [u]),
        (0, i.jsxs)('div', {
            className: c.confirmation,
            children: [
                (0, i.jsxs)('div', {
                    className: c.confirmationContent,
                    children: [
                        null !== n
                            ? (0, i.jsx)(o.Z, {
                                  size: o.Z.Sizes.LARGER,
                                  guild: n,
                                  className: c.guildIcon
                              })
                            : (0, i.jsx)('img', {
                                  alt: s.intl.string(s.t.SXZrBw),
                                  src: d
                              }),
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-xl/semibold',
                            className: c.header,
                            children: (null == n ? void 0 : n.name) != null ? s.intl.formatToPlainString(s.t['0Qlu//'], { guildName: n.name }) : s.intl.string(s.t['5iLvS0'])
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: s.intl.string(s.t.FdsK4u)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: c.confirmationButtonColumn,
                    children: (0, i.jsx)(l.Button, {
                        onClick: t,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        size: l.Button.Sizes.SMALL,
                        children: s.intl.string(s.t.mqtdmZ)
                    })
                })
            ]
        })
    );
};
