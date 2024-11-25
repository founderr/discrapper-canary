var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(674588),
    o = n(303383),
    c = n(924489),
    d = n(125909),
    u = n(824606),
    h = n(768581),
    m = n(388032),
    p = n(69812);
function g(e) {
    var t, n, l;
    let { application: s, onSelectApplication: o } = e,
        d = (0, u.Z)({ application: s }),
        m = null === (t = s.categories) || void 0 === t ? void 0 : t[0],
        g = r.useMemo(
            () =>
                h.ZP.getApplicationIconURL({
                    id: s.id,
                    icon: s.icon,
                    size: 48
                }),
            [s]
        ),
        f = r.useCallback(() => {
            o(s.id);
        }, [o, s.id]);
    return (0, i.jsxs)(a.Clickable, {
        onClick: f,
        className: p.appContainer,
        children: [
            (0, i.jsxs)('div', {
                className: p.appHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: g,
                        alt: '',
                        className: p.avatar,
                        height: 48,
                        width: 48
                    }),
                    (0, i.jsxs)('div', {
                        className: p.titleContainer,
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: 'hidden'
                                },
                                children: (0, i.jsx)(a.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: p.appName,
                                    children: s.name
                                })
                            }),
                            null != m
                                ? (0, i.jsx)(a.Text, {
                                      className: p.appCategory,
                                      variant: 'text-xs/medium',
                                      color: 'text-muted',
                                      children: m.name
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)(a.Text, {
                className: p.appDescription,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                lineClamp: 2,
                children: null !== (l = null === (n = s.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== l ? l : s.description
            }),
            (0, i.jsx)(c.Z, {
                application: s,
                textVariant: 'text-xs/medium',
                mutualGuilds: d,
                mutualGuildShownMax: 3,
                guildIconSize: c.x.SMALL,
                compact: !0
            })
        ]
    });
}
t.Z = function (e) {
    let { application: t, onSelectApplication: n } = e,
        c = (0, l.e7)([o.Z], () => o.Z.getFetchState({ applicationId: t.id })),
        u = (0, l.e7)([o.Z], () => o.Z.getSimilarApplications({ applicationId: t.id }));
    r.useEffect(() => {
        s.T4({ applicationId: t.id });
    }, [t.id]);
    let h = r.useMemo(() => (null == u ? void 0 : u.applications.slice(0, 3)), [u]);
    return c !== o.M.FETCHING && (null == h || 0 === h.length)
        ? null
        : (0, i.jsxs)('div', {
              className: p.sectionContainer,
              children: [
                  (0, i.jsx)('div', { className: p.divider }),
                  (0, i.jsx)(a.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      className: p.sectionHeader,
                      children: m.intl.string(m.t.E8wCnp)
                  }),
                  (0, i.jsx)(d.Z, {
                      loading: c === o.M.FETCHING,
                      children: (0, i.jsx)('div', {
                          className: p.contentContainer,
                          children:
                              null == h
                                  ? void 0
                                  : h.map((e) =>
                                        (0, i.jsx)(
                                            g,
                                            {
                                                application: e,
                                                onSelectApplication: n
                                            },
                                            e.id
                                        )
                                    )
                      })
                  })
              ]
          });
};
