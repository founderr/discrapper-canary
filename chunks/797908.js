var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(783097),
    l = n(924489),
    o = n(491576),
    c = n(686546),
    d = n(66637),
    u = n(768581),
    _ = n(956965),
    h = n(689938),
    E = n(923592);
t.Z = function (e) {
    var t, n, m, I, g;
    let { application: p, showCategory: T = !1 } = e,
        f = (0, o.Z)({ application: p }),
        S = null === (t = p.categories) || void 0 === t ? void 0 : t[0],
        C = (0, r.lf)(p),
        N = (0, r.vJ)(p),
        A = a.useMemo(
            () =>
                u.ZP.getApplicationIconURL({
                    id: p.id,
                    icon: p.icon,
                    size: 48
                }),
            [p]
        ),
        v = (null !== (I = null === (n = p.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== I ? I : 0) > 0 || f.length > 0,
        Z = (0, i.jsx)(l.Z, {
            application: p,
            textVariant: 'text-xs/normal',
            mutualGuilds: f,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        });
    return (0, i.jsx)('div', {
        className: E.container,
        children: (0, i.jsxs)(d.Z, {
            className: E.card,
            onClick: () => {},
            onContextMenu: () => {},
            children: [
                (0, i.jsxs)('div', {
                    className: E.header,
                    children: [
                        (0, i.jsx)(_.Z, { iconURL: A }),
                        (0, i.jsx)('div', {
                            className: E.icon,
                            children: (0, i.jsx)(c.ZP, {
                                mask: c.ZP.Masks.SQUIRCLE,
                                width: 56,
                                height: 56,
                                children: (0, i.jsx)('div', {
                                    className: E.iconMask,
                                    children: (0, i.jsx)(c.ZP, {
                                        mask: c.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('img', {
                                            src: A,
                                            alt: '',
                                            className: E.avatar
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: E.appDetails,
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.titleContainer,
                            children: [
                                (0, i.jsx)('div', {
                                    className: E.title,
                                    children: (0, i.jsx)(s.Heading, {
                                        variant: 'heading-md/semibold',
                                        className: E.appName,
                                        children: p.name
                                    })
                                }),
                                C || N
                                    ? (0, i.jsx)('div', {
                                          className: E.tagContainer,
                                          children: (0, i.jsx)(s.Text, {
                                              variant: 'text-sm/bold',
                                              children: C ? h.Z.Messages.APP_LAUNCHER_PROMOTED : h.Z.Messages.APP_DIRECTORY_PARTNER
                                          })
                                      })
                                    : null
                            ]
                        }),
                        T
                            ? (0, i.jsx)(s.Text, {
                                  className: E.appCategory,
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  children: null != S ? S.name : ' '
                              })
                            : null,
                        (0, i.jsx)(s.Text, {
                            className: E.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: T ? 2 : 3,
                            children: null !== (g = null === (m = p.directory_entry) || void 0 === m ? void 0 : m.short_description) && void 0 !== g ? g : p.description
                        }),
                        v
                            ? (0, i.jsx)('div', {
                                  className: E.memberDetails,
                                  children: Z
                              })
                            : null
                    ]
                })
            ]
        })
    });
};
