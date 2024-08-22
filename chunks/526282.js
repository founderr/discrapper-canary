var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(481060),
    c = n(100527),
    d = n(970606),
    u = n(207796),
    _ = n(689938),
    h = n(620080);
t.Z = a.memo(function (e) {
    let { className: t, background: n } = e;
    a.useEffect(() => {
        (0, d.tv)({ location: c.Z.CLAN_DISCOVERY });
    }, []);
    let s = a.useCallback(() => {
            (0, d.GS)({ location: c.Z.CLAN_DISCOVERY }), (0, u.fH)(u.v0.GET_STARTED);
        }, []),
        E = (0, u.GN)((e) => e.completedNux, l.Z);
    return (0, i.jsxs)('div', {
        className: r()(h.upsellContainer, t),
        children: [
            (0, i.jsx)('div', {
                className: h.upsellDetailsContainer,
                children: (0, i.jsxs)('div', {
                    className: h.upsellDetails,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: h.upsellTitle,
                            variant: 'display-lg',
                            color: 'header-primary',
                            children: _.Z.Messages.CLAN_DISCOVERY_UPSELL_TITLE.format({})
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: _.Z.Messages.CLAN_DISCOVERY_UPSELL_SUBTITLE
                        }),
                        (0, i.jsx)('div', {
                            className: h.upsellButtonContainer,
                            children: E
                                ? null
                                : (0, i.jsx)(o.Button, {
                                      onClick: s,
                                      className: h.upsellButton,
                                      children: (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: _.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                      })
                                  })
                        })
                    ]
                })
            }),
            n
        ]
    });
});
