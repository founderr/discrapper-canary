var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(783097),
    l = n(924489),
    o = n(491576),
    c = n(686546),
    d = n(66637),
    u = n(768581),
    _ = n(420372),
    E = n(689938),
    h = n(923592);
t.Z = function (e) {
    var t, n, m, I, p;
    let { application: g, showCategory: T = !1 } = e,
        f = (0, o.Z)({ application: g }),
        S = null === (t = g.categories) || void 0 === t ? void 0 : t[0],
        C = (0, r.lf)(g),
        N = a.useMemo(
            () =>
                u.ZP.getApplicationIconURL({
                    id: g.id,
                    icon: g.icon,
                    size: 48
                }),
            [g]
        ),
        A = (null !== (I = null === (n = g.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== I ? I : 0) > 0 || f.length > 0,
        v = (0, i.jsx)(l.Z, {
            application: g,
            textVariant: 'text-xs/medium',
            mutualGuilds: f,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        }),
        Z = T && null != S;
    return (0, i.jsx)('div', {
        className: h.container,
        children: (0, i.jsxs)(d.Z, {
            className: h.card,
            onClick: () => {},
            onContextMenu: () => {},
            children: [
                (0, i.jsxs)('div', {
                    className: h.header,
                    children: [
                        (0, i.jsx)(_.Z, {
                            application: g,
                            iconURL: N
                        }),
                        (0, i.jsx)('div', {
                            className: h.icon,
                            children: (0, i.jsx)(c.ZP, {
                                mask: c.ZP.Masks.SQUIRCLE,
                                width: 56,
                                height: 56,
                                children: (0, i.jsx)('div', {
                                    className: h.iconMask,
                                    children: (0, i.jsx)(c.ZP, {
                                        mask: c.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('img', {
                                            src: N,
                                            alt: '',
                                            className: h.avatar
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: h.appDetails,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.titleContainer,
                            children: (0, i.jsx)('div', {
                                className: h.title,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: h.appName,
                                    children: g.name
                                })
                            })
                        }),
                        Z || C
                            ? (0, i.jsxs)('div', {
                                  className: h.infoContainer,
                                  children: [
                                      Z
                                          ? (0, i.jsx)(s.Text, {
                                                className: h.appCategory,
                                                variant: 'text-xs/medium',
                                                color: 'text-normal',
                                                children: S.name
                                            })
                                          : null,
                                      Z && C
                                          ? (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-secondary',
                                                children: '\u2022'
                                            })
                                          : null,
                                      C
                                          ? (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-secondary',
                                                children: E.Z.Messages.APP_LAUNCHER_PROMOTED
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        (0, i.jsx)(s.Text, {
                            className: h.description,
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            lineClamp: Z || C ? 2 : 3,
                            children: null !== (p = null === (m = g.directory_entry) || void 0 === m ? void 0 : m.short_description) && void 0 !== p ? p : g.description
                        }),
                        A
                            ? (0, i.jsx)('div', {
                                  className: h.memberDetails,
                                  children: v
                              })
                            : null
                    ]
                })
            ]
        })
    });
};
