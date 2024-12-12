n(47120);
var i = n(200651),
    r = n(192379),
    l = n(622535),
    a = n(481060),
    o = n(783097),
    s = n(924489),
    c = n(824606),
    d = n(66637),
    u = n(768581),
    h = n(956965),
    m = n(388032),
    p = n(833643);
let g = 28;
t.Z = function (e) {
    var t, n, f, _, E;
    let { application: I, onSelectApplication: C, showCategory: v = !1 } = e,
        S = (0, c.Z)({ application: I }),
        N = null === (t = I.categories) || void 0 === t ? void 0 : t[0],
        [T, b] = r.useState(!1),
        A = r.useCallback((e) => {
            e && b(!0);
        }, []),
        x = (0, o.lf)(I),
        Z = r.useCallback(() => {
            C(I.id);
        }, [C, I.id]),
        L = r.useMemo(
            () =>
                T
                    ? u.ZP.getApplicationIconURL({
                          id: I.id,
                          icon: I.icon,
                          size: 48
                      })
                    : void 0,
            [T, I]
        ),
        P = (null !== (_ = null === (n = I.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== _ ? _ : 0) > 0 || S.length > 0,
        y = (0, i.jsx)(s.Z, {
            application: I,
            textVariant: 'text-xs/medium',
            mutualGuilds: S,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0
        }),
        O = v && null != N;
    return (0, i.jsx)(l.$, {
        onChange: A,
        active: !T,
        children: (0, i.jsx)('div', {
            className: p.container,
            children: (0, i.jsxs)(d.Z, {
                className: p.card,
                onClick: Z,
                onContextMenu: () => {},
                children: [
                    (0, i.jsxs)('div', {
                        className: p.header,
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    width: '100%',
                                    display: 'block',
                                    aspectRatio: 16 / 9
                                },
                                children: T
                                    ? (0, i.jsx)(h.Z, {
                                          application: I,
                                          bannerType: 'card',
                                          iconURL: L
                                      })
                                    : null
                            }),
                            (0, i.jsx)('div', {
                                className: p.avatarContainer,
                                style: { height: g },
                                children: T
                                    ? (0, i.jsx)('img', {
                                          src: L,
                                          alt: '',
                                          className: p.avatar,
                                          height: 48,
                                          width: 48,
                                          style: {
                                              borderWidth: 4,
                                              marginLeft: 12
                                          }
                                      })
                                    : null
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.appDetails,
                        children: [
                            (0, i.jsx)('div', {
                                className: p.titleContainer,
                                children: (0, i.jsx)('div', {
                                    className: p.title,
                                    children: (0, i.jsx)(a.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        className: p.appName,
                                        children: I.name
                                    })
                                })
                            }),
                            O || x
                                ? (0, i.jsxs)('div', {
                                      className: p.infoContainer,
                                      children: [
                                          O
                                              ? (0, i.jsx)(a.Text, {
                                                    className: p.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: N.name
                                                })
                                              : null,
                                          O && x
                                              ? (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: '\u2022'
                                                })
                                              : null,
                                          x
                                              ? (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: m.intl.string(m.t['/eVltr'])
                                                })
                                              : null
                                      ]
                                  })
                                : null,
                            (0, i.jsx)(a.Text, {
                                className: p.description,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                lineClamp: O || x ? 2 : 3,
                                children: null !== (E = null === (f = I.directory_entry) || void 0 === f ? void 0 : f.short_description) && void 0 !== E ? E : I.description
                            }),
                            P
                                ? (0, i.jsx)('div', {
                                      className: p.memberDetails,
                                      children: y
                                  })
                                : null
                        ]
                    })
                ]
            })
        })
    });
};
