n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(434650),
    o = n(303383),
    s = n(924489),
    c = n(125909),
    d = n(824606),
    u = n(768581),
    h = n(881294),
    m = n(981631),
    p = n(388032),
    g = n(69812);
function f(e) {
    let { applicationId: t, similarApplications: n, onSelectApplication: l, similarLoadId: o } = e,
        s = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
                [i, l] = r.useState(),
                o = (0, a.O)((e) => {
                    e && l(t);
                });
            return (
                r.useEffect(() => {
                    i === t &&
                        (0, h.z)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: n
                        });
                }, [i, t, n]),
                o
            );
        })({
            applicationId: t,
            similarAppIds: r.useMemo(() => n.map((e) => e.id), [n])
        });
    return (0, i.jsx)('div', {
        className: g.contentContainer,
        ref: s,
        children: n.map((e, n) =>
            (0, i.jsx)(
                _,
                {
                    applicationId: t,
                    similarApplication: e,
                    onSelectApplication: l,
                    similarLoadId: o,
                    position: n
                },
                e.id
            )
        )
    });
}
function _(e) {
    var t, n, a;
    let { applicationId: o, similarApplication: c, onSelectApplication: p, position: f, similarLoadId: _ } = e,
        E = (0, d.Z)({ application: c }),
        I = null === (t = c.categories) || void 0 === t ? void 0 : t[0],
        C = r.useMemo(
            () =>
                u.ZP.getApplicationIconURL({
                    id: c.id,
                    icon: c.icon,
                    size: 48
                }),
            [c]
        ),
        v = r.useCallback(() => {
            (0, h.z)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: 'product',
                application_id: o,
                suggested_application_id: c.id,
                position: f,
                load_id: _,
                shown_mutual_guilds_count: E.length
            }),
                p(c.id);
        }, [p, c.id, o, E.length, _, f]);
    return (0, i.jsxs)(l.Clickable, {
        onClick: v,
        className: g.appContainer,
        children: [
            (0, i.jsxs)('div', {
                className: g.appHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: C,
                        alt: '',
                        className: g.avatar,
                        height: 48,
                        width: 48
                    }),
                    (0, i.jsxs)('div', {
                        className: g.titleContainer,
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
                                    className: g.appName,
                                    children: c.name
                                })
                            }),
                            null != I
                                ? (0, i.jsx)(l.Text, {
                                      className: g.appCategory,
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
                className: g.appDescription,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                lineClamp: 2,
                children: null !== (a = null === (n = c.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== a ? a : c.description
            }),
            (0, i.jsx)(s.Z, {
                application: c,
                textVariant: 'text-xs/medium',
                mutualGuilds: E,
                mutualGuildShownMax: 3,
                guildIconSize: s.x.SMALL,
                compact: !0
            })
        ]
    });
}
t.Z = function (e) {
    let { applicationId: t, fetchState: n, similarApplications: r, onSelectApplication: a, similarLoadId: s } = e;
    return n !== o.M.FETCHING && (null == r || 0 === r.length)
        ? null
        : (0, i.jsxs)('div', {
              className: g.sectionContainer,
              children: [
                  (0, i.jsx)('div', { className: g.divider }),
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      className: g.sectionHeader,
                      children: p.intl.string(p.t.E8wCnp)
                  }),
                  (0, i.jsx)(c.Z, {
                      loading: n === o.M.FETCHING,
                      children:
                          null != r
                              ? (0, i.jsx)(f, {
                                    applicationId: t,
                                    similarApplications: r,
                                    onSelectApplication: a,
                                    similarLoadId: s
                                })
                              : null
                  })
              ]
          });
};
