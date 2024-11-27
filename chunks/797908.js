var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(783097),
    s = n(924489),
    o = n(824606),
    c = n(66637),
    d = n(768581),
    u = n(956965),
    h = n(388032),
    m = n(833643);
let p = 28;
t.Z = function (e) {
    var t, n, g, f, _;
    let { application: I, onSelectApplication: E, showCategory: C = !1 } = e,
        v = (0, o.Z)({ application: I }),
        N = null === (t = I.categories) || void 0 === t ? void 0 : t[0],
        S = (0, a.lf)(I),
        T = r.useCallback(() => {
            E(I.id);
        }, [E, I.id]),
        x = r.useMemo(
            () =>
                d.ZP.getApplicationIconURL({
                    id: I.id,
                    icon: I.icon,
                    size: 48
                }),
            [I]
        ),
        b = (null !== (f = null === (n = I.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== f ? f : 0) > 0 || v.length > 0,
        A = (0, i.jsx)(s.Z, {
            application: I,
            textVariant: 'text-xs/medium',
            mutualGuilds: v,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0
        }),
        Z = C && null != N;
    return (0, i.jsx)('div', {
        className: m.container,
        children: (0, i.jsxs)(c.Z, {
            className: m.card,
            onClick: T,
            onContextMenu: () => {},
            children: [
                (0, i.jsxs)('div', {
                    className: m.header,
                    children: [
                        (0, i.jsx)(u.Z, {
                            application: I,
                            bannerType: 'card',
                            iconURL: x
                        }),
                        (0, i.jsx)('div', {
                            className: m.avatarContainer,
                            style: { height: p },
                            children: (0, i.jsx)('img', {
                                src: x,
                                alt: '',
                                className: m.avatar,
                                height: 48,
                                width: 48,
                                style: {
                                    borderWidth: 4,
                                    marginLeft: 12
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: m.appDetails,
                    children: [
                        (0, i.jsx)('div', {
                            className: m.titleContainer,
                            children: (0, i.jsx)('div', {
                                className: m.title,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: m.appName,
                                    children: I.name
                                })
                            })
                        }),
                        Z || S
                            ? (0, i.jsxs)('div', {
                                  className: m.infoContainer,
                                  children: [
                                      Z
                                          ? (0, i.jsx)(l.Text, {
                                                className: m.appCategory,
                                                variant: 'text-xs/medium',
                                                color: 'text-normal',
                                                children: N.name
                                            })
                                          : null,
                                      Z && S
                                          ? (0, i.jsx)(l.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-secondary',
                                                children: '\u2022'
                                            })
                                          : null,
                                      S
                                          ? (0, i.jsx)(l.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-secondary',
                                                children: h.intl.string(h.t['/eVltr'])
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        (0, i.jsx)(l.Text, {
                            className: m.description,
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            lineClamp: Z || S ? 2 : 3,
                            children: null !== (_ = null === (g = I.directory_entry) || void 0 === g ? void 0 : g.short_description) && void 0 !== _ ? _ : I.description
                        }),
                        b
                            ? (0, i.jsx)('div', {
                                  className: m.memberDetails,
                                  children: A
                              })
                            : null
                    ]
                })
            ]
        })
    });
};
