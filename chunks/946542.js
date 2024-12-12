var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(303383),
    o = n(924489),
    s = n(125909),
    c = n(824606),
    d = n(768581),
    u = n(881294),
    h = n(981631),
    m = n(388032),
    p = n(69812);
function g(e) {
    var t, n, a;
    let { applicationId: s, similarApplication: m, onSelectApplication: g, position: f, similarLoadId: _ } = e,
        E = (0, c.Z)({ application: m }),
        I = null === (t = m.categories) || void 0 === t ? void 0 : t[0],
        C = r.useMemo(
            () =>
                d.ZP.getApplicationIconURL({
                    id: m.id,
                    icon: m.icon,
                    size: 48
                }),
            [m]
        ),
        v = r.useCallback(() => {
            (0, u.z)(h.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: 'product',
                application_id: s,
                suggested_application_id: m.id,
                position: f,
                load_id: _,
                shown_mutual_guilds_count: E.length
            }),
                g(m.id);
        }, [g, m.id, s, E.length, _, f]);
    return (0, i.jsxs)(l.Clickable, {
        onClick: v,
        className: p.appContainer,
        children: [
            (0, i.jsxs)('div', {
                className: p.appHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: C,
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
                                children: (0, i.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: p.appName,
                                    children: m.name
                                })
                            }),
                            null != I
                                ? (0, i.jsx)(l.Text, {
                                      className: p.appCategory,
                                      variant: 'text-xs/medium',
                                      color: 'text-muted',
                                      children: I.name
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)(l.Text, {
                className: p.appDescription,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                lineClamp: 2,
                children: null !== (a = null === (n = m.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== a ? a : m.description
            }),
            (0, i.jsx)(o.Z, {
                application: m,
                textVariant: 'text-xs/medium',
                mutualGuilds: E,
                mutualGuildShownMax: 3,
                guildIconSize: o.x.SMALL,
                compact: !0
            })
        ]
    });
}
t.Z = function (e) {
    let { applicationId: t, fetchState: n, similarApplications: r, onSelectApplication: o, similarLoadId: c } = e;
    return n !== a.M.FETCHING && (null == r || 0 === r.length)
        ? null
        : (0, i.jsxs)('div', {
              className: p.sectionContainer,
              children: [
                  (0, i.jsx)('div', { className: p.divider }),
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      className: p.sectionHeader,
                      children: m.intl.string(m.t.E8wCnp)
                  }),
                  (0, i.jsx)(s.Z, {
                      loading: n === a.M.FETCHING,
                      children: (0, i.jsx)('div', {
                          className: p.contentContainer,
                          children:
                              null == r
                                  ? void 0
                                  : r.map((e, n) =>
                                        (0, i.jsx)(
                                            g,
                                            {
                                                applicationId: t,
                                                similarApplication: e,
                                                onSelectApplication: o,
                                                position: n,
                                                similarLoadId: c
                                            },
                                            e.id
                                        )
                                    )
                      })
                  })
              ]
          });
};
