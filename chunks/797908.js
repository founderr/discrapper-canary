var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(783097),
    l = n(924489),
    o = n(824606),
    c = n(66637),
    d = n(768581),
    u = n(956965),
    _ = n(689938),
    E = n(923592);
let h = 28;
t.Z = function (e) {
    var t, n, m, I, p;
    let { application: g, onSelectApplication: T, showCategory: f = !1 } = e,
        C = (0, o.Z)({ application: g }),
        S = null === (t = g.categories) || void 0 === t ? void 0 : t[0],
        N = (0, r.lf)(g),
        A = a.useCallback(() => {
            T(g.id);
        }, [T, g.id]),
        v = a.useMemo(
            () =>
                d.ZP.getApplicationIconURL({
                    id: g.id,
                    icon: g.icon,
                    size: 48
                }),
            [g]
        ),
        Z = (null !== (I = null === (n = g.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== I ? I : 0) > 0 || C.length > 0,
        L = (0, i.jsx)(l.Z, {
            application: g,
            textVariant: 'text-xs/medium',
            mutualGuilds: C,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        }),
        R = f && null != S;
    return (0, i.jsx)('div', {
        className: E.container,
        children: (0, i.jsxs)(c.Z, {
            className: E.card,
            onClick: A,
            onContextMenu: () => {},
            children: [
                (0, i.jsxs)('div', {
                    className: E.header,
                    children: [
                        (0, i.jsx)(u.Z, {
                            application: g,
                            bannerType: 'card',
                            iconURL: v
                        }),
                        (0, i.jsx)('div', {
                            className: E.avatarContainer,
                            style: { height: h },
                            children: (0, i.jsx)('img', {
                                src: v,
                                alt: '',
                                className: E.avatar,
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
                    className: E.appDetails,
                    children: [
                        (0, i.jsx)('div', {
                            className: E.titleContainer,
                            children: (0, i.jsx)('div', {
                                className: E.title,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: E.appName,
                                    children: g.name
                                })
                            })
                        }),
                        R || N
                            ? (0, i.jsxs)('div', {
                                  className: E.infoContainer,
                                  children: [
                                      R
                                          ? (0, i.jsx)(s.Text, {
                                                className: E.appCategory,
                                                variant: 'text-xs/medium',
                                                color: 'text-normal',
                                                children: S.name
                                            })
                                          : null,
                                      R && N
                                          ? (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-secondary',
                                                children: '\u2022'
                                            })
                                          : null,
                                      N
                                          ? (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-secondary',
                                                children: _.Z.Messages.APP_LAUNCHER_PROMOTED
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        (0, i.jsx)(s.Text, {
                            className: E.description,
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            lineClamp: R || N ? 2 : 3,
                            children: null !== (p = null === (m = g.directory_entry) || void 0 === m ? void 0 : m.short_description) && void 0 !== p ? p : g.description
                        }),
                        Z
                            ? (0, i.jsx)('div', {
                                  className: E.memberDetails,
                                  children: L
                              })
                            : null
                    ]
                })
            ]
        })
    });
};
