n.r(t);
var o = n(200651),
    a = n(192379),
    c = n(442837),
    i = n(37234),
    r = n(230711),
    l = n(410575),
    s = n(503089),
    u = n(110924),
    d = n(100527),
    _ = n(367907),
    S = n(906732),
    b = n(254901),
    g = n(45493),
    f = n(332473),
    m = n(113434),
    T = n(663389),
    E = n(210887),
    I = n(996733),
    C = n(394644),
    N = n(295545),
    R = n(839469),
    k = n(981631),
    Z = n(689938);
let p = a.forwardRef(function () {
    g.Z.trackExposure({ location: 'cd25e4_1' }), b.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), b.Z.trackExposure({ location: 'user_setting_manual' });
    let e = (0, c.e7)([E.Z], () => E.Z.theme),
        t = (0, c.e7)([E.Z], () => (E.Z.darkSidebar ? k.BRd.DARK : void 0)),
        {
            section: n,
            subsection: p,
            analyticsLocation: B,
            analyticsLocations: G
        } = (0, c.cj)([T.Z], () => {
            let e = T.Z.getSection(),
                t = T.Z.getSubsection(),
                { analyticsLocation: n, analyticsLocations: o } = T.Z.getProps();
            return {
                section: e,
                subsection: t,
                analyticsLocation: n,
                analyticsLocations: o
            };
        }),
        h = (0, u.Z)(n),
        A = (0, u.Z)(p),
        P = (0, I.Z7)(),
        { analyticsLocations: M } = (0, S.ZP)(d.Z.USER_SETTINGS);
    a.useEffect(() => {
        if (!!(null != n && (n !== h || p !== A)))
            !(function (e) {
                let { destinationPane: t, originPane: n = null, source: o = null, subsection: a = null, locationStack: c = null, searchQuery: i = null } = e;
                _.ZP.trackWithMetadata(k.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: 'user',
                    origin_pane: n,
                    destination_pane: t,
                    location_stack: c,
                    source: o,
                    subsection: a,
                    search_query: i
                });
            })({
                destinationPane: n,
                originPane: null != h ? h : null,
                source: B,
                subsection: p,
                locationStack: G,
                searchQuery: '' !== P ? P : null
            });
    }, [n, h, p, A, B, G, P]);
    let U = (0, N.eA)({ location: 'user_settings' }),
        { hasSearchResults: x, searchResults: O } = (0, R.E)(),
        D = a.useMemo(() => U && x, [U, x]),
        W = (0, C.VO)(),
        v = (0, C.q8)(O),
        H = a.useMemo(() => (D ? v : W), [D, v, W]),
        w = (0, f.b)(),
        y = (0, m.iO)(),
        L = a.useCallback((e) => {
            r.Z.setSection(e);
        }, []);
    return (0, o.jsx)(S.Gt, {
        value: M,
        children: (0, o.jsx)(l.Z, {
            root: !0,
            page: k.ZY5.USER_SETTINGS,
            children: (0, o.jsx)(s.ZP, {
                theme: e,
                title: Z.Z.Messages.USER_SETTINGS,
                sidebarTheme: t,
                section: n,
                onSetSection: L,
                onClose: i.xf,
                sections: H,
                isEligibleForPomelo: w,
                questsForBadge: y,
                isUserSettingsSearchEnabled: U
            })
        })
    });
});
t.default = a.forwardRef(function () {
    let e = (0, c.e7)([T.Z], () => T.Z.getProps().analyticsLocations),
        { analyticsLocations: t } = (0, S.ZP)(e);
    return (0, o.jsx)(S.Gt, {
        value: t,
        children: (0, o.jsx)(p, {})
    });
});
