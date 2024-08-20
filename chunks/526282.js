var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(100527),
    l = n(970606),
    o = n(207796),
    c = n(689938),
    d = n(620080);
t.Z = a.memo(function () {
    a.useEffect(() => {
        (0, l.tv)({ location: r.Z.CLAN_DISCOVERY });
    }, []);
    let e = a.useCallback(() => {
        (0, l.GS)({ location: r.Z.CLAN_DISCOVERY }), (0, o.fH)(o.v0.GET_STARTED);
    }, []);
    return (0, i.jsx)('div', {
        className: d.upsellContainer,
        children: (0, i.jsxs)('div', {
            className: d.upsellDetails,
            children: [
                (0, i.jsx)(s.Heading, {
                    className: d.upsellTitle,
                    variant: 'heading-xxl/semibold',
                    color: 'header-primary',
                    children: c.Z.Messages.CLAN_DISCOVERY_UPSELL_TITLE
                }),
                (0, i.jsxs)(s.Text, {
                    className: d.upsellSubtitle,
                    variant: 'text-md/medium',
                    color: 'header-secondary',
                    children: [' ', c.Z.Messages.CLAN_DISCOVERY_UPSELL_SUBTITLE]
                }),
                (0, i.jsx)(s.Button, {
                    onClick: e,
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        className: d.customizeButton,
                        children: c.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                    })
                })
            ]
        })
    });
});
