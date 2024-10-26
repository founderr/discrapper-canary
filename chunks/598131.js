n(47120);
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(430824),
    o = n(970606),
    c = n(979264),
    d = n(550271),
    u = n(116175),
    _ = n(308083),
    E = n(689938),
    h = n(969676),
    m = n(602075);
t.Z = (e) => {
    var t, n;
    let { guildId: I, badge: p, primaryColor: g, secondaryColor: T, tag: S, inSettings: C } = e,
        f = a.useMemo(() => {
            let e = (0, u.yf)();
            return {
                primary: null != g ? g : e.primary,
                secondary: null != T ? T : e.secondary
            };
        }, [g, T]),
        [N, A] = a.useState(!1),
        v = a.useCallback(
            (e) => {
                e &&
                    (0, o.Gx)({
                        guildId: I,
                        signupPage: o._9.CUSTOMIZE_DISCOVERY,
                        actionType: o.eI.CHOOSE_GUILD_DISCOVERY,
                        enabledDiscovery: e,
                        inSettings: C
                    }),
                    A(e);
            },
            [I, C]
        ),
        Z = (0, s.e7)([l.Z], () => l.Z.getGuild(I), [I]);
    return (0, i.jsxs)('div', {
        className: m.slideContent,
        children: [
            (0, i.jsx)(r.Heading, {
                variant: 'heading-xxl/medium',
                className: m.title,
                children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_TITLE
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: m.subtitle,
                children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_SUBTITLE
            }),
            (0, i.jsx)('div', {
                className: h.container,
                children: (0, i.jsxs)('div', {
                    className: h.mainContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.itemContainer,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_REQUIRED_HEADER
                                }),
                                (0, i.jsxs)('div', {
                                    className: h.itemSelectionContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            children: (0, i.jsx)('div', {
                                                className: h.iconContainer,
                                                children: (0, i.jsx)('div', {
                                                    children: (0, i.jsx)(c.aG, {
                                                        guildId: I,
                                                        clanTag: S,
                                                        className: h.tag,
                                                        clanBadge: (0, i.jsx)(d.A, {
                                                            badge: p,
                                                            width: _.NC.SIZE_12,
                                                            height: _.NC.SIZE_12,
                                                            primaryTintColor: f.primary,
                                                            secondaryTintColor: f.secondary
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: h.itemDescription,
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_TAG_DISCOVERY_HEADER
                                                }),
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_TAG_DISCOVERY_DESCRIPTION.format({ guildName: null !== (t = null == Z ? void 0 : Z.name) && void 0 !== t ? t : '' })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: h.itemContainer,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_OPTIONAL_HEADER
                                }),
                                (0, i.jsxs)('div', {
                                    className: h.itemSelectionContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            children: (0, i.jsx)('div', {
                                                className: h.iconContainer,
                                                children: (0, i.jsx)(r.CompassIcon, {
                                                    width: 24,
                                                    height: 24,
                                                    size: 'custom'
                                                })
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: h.itemDescription,
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_GUILD_DISCOVERY_HEADER
                                                }),
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: E.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_GUILD_DISCOVERY_DESCRIPTION.format({ guildName: null !== (n = null == Z ? void 0 : Z.name) && void 0 !== n ? n : '' })
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(r.FormSwitch, {
                                            className: h.toggle,
                                            hideBorder: !0,
                                            onChange: v,
                                            value: N
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
