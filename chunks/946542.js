var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(303383),
    o = n(924489),
    s = n(125909),
    c = n(824606),
    d = n(768581),
    u = n(388032),
    h = n(69812);
function m(e) {
    var t, n, a;
    let { application: s, onSelectApplication: u } = e,
        m = (0, c.Z)({ application: s }),
        p = null === (t = s.categories) || void 0 === t ? void 0 : t[0],
        g = r.useMemo(
            () =>
                d.ZP.getApplicationIconURL({
                    id: s.id,
                    icon: s.icon,
                    size: 48
                }),
            [s]
        ),
        f = r.useCallback(() => {
            u(s.id);
        }, [u, s.id]);
    return (0, i.jsxs)(l.Clickable, {
        onClick: f,
        className: h.appContainer,
        children: [
            (0, i.jsxs)('div', {
                className: h.appHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: g,
                        alt: '',
                        className: h.avatar,
                        height: 48,
                        width: 48
                    }),
                    (0, i.jsxs)('div', {
                        className: h.titleContainer,
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: 'hidden'
                                },
                                children: (0, i.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: h.appName,
                                    children: s.name
                                })
                            }),
                            null != p
                                ? (0, i.jsx)(l.Text, {
                                      className: h.appCategory,
                                      variant: 'text-xs/medium',
                                      color: 'text-muted',
                                      children: p.name
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)(l.Text, {
                className: h.appDescription,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                lineClamp: 2,
                children: null !== (a = null === (n = s.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== a ? a : s.description
            }),
            (0, i.jsx)(o.Z, {
                application: s,
                textVariant: 'text-xs/medium',
                mutualGuilds: m,
                mutualGuildShownMax: 3,
                guildIconSize: o.x.SMALL,
                compact: !0
            })
        ]
    });
}
t.Z = function (e) {
    let { fetchState: t, similarApplications: n, onSelectApplication: r } = e;
    return t !== a.M.FETCHING && (null == n || 0 === n.length)
        ? null
        : (0, i.jsxs)('div', {
              className: h.sectionContainer,
              children: [
                  (0, i.jsx)('div', { className: h.divider }),
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      className: h.sectionHeader,
                      children: u.intl.string(u.t.E8wCnp)
                  }),
                  (0, i.jsx)(s.Z, {
                      loading: t === a.M.FETCHING,
                      children: (0, i.jsx)('div', {
                          className: h.contentContainer,
                          children:
                              null == n
                                  ? void 0
                                  : n.map((e) =>
                                        (0, i.jsx)(
                                            m,
                                            {
                                                application: e,
                                                onSelectApplication: r
                                            },
                                            e.id
                                        )
                                    )
                      })
                  })
              ]
          });
};
