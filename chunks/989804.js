n.r(t);
var o = n(200651),
    i = n(192379),
    c = n(442837),
    a = n(37234),
    r = n(230711),
    l = n(410575),
    s = n(503089),
    u = n(110924),
    d = n(100527),
    _ = n(367907),
    g = n(906732),
    b = n(254901),
    f = n(45493),
    m = n(332473),
    S = n(113434),
    C = n(663389),
    k = n(210887),
    p = n(996733),
    B = n(394644),
    h = n(295545),
    Z = n(839469),
    T = n(981631),
    x = n(388032);
let E = i.forwardRef(function () {
    f.Z.trackExposure({ location: 'cd25e4_1' }), b.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), b.Z.trackExposure({ location: 'user_setting_manual' });
    let e = (0, c.e7)([k.Z], () => k.Z.theme),
        t = (0, c.e7)([k.Z], () => (k.Z.darkSidebar ? T.BRd.DARK : void 0)),
        {
            section: n,
            subsection: E,
            analyticsLocation: R,
            analyticsLocations: U
        } = (0, c.cj)([C.Z], () => {
            let e = C.Z.getSection(),
                t = C.Z.getSubsection(),
                { analyticsLocation: n, analyticsLocations: o } = C.Z.getProps();
            return {
                section: e,
                subsection: t,
                analyticsLocation: n,
                analyticsLocations: o
            };
        }),
        I = (0, u.Z)(n),
        W = (0, u.Z)(E),
        P = (0, p.Z7)(),
        { analyticsLocations: v } = (0, g.ZP)(d.Z.USER_SETTINGS);
    i.useEffect(() => {
        if (!!(null != n && (n !== I || E !== W)))
            !(function (e) {
                let { destinationPane: t, originPane: n = null, source: o = null, subsection: i = null, locationStack: c = null, searchQuery: a = null } = e;
                _.ZP.trackWithMetadata(T.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: 'user',
                    origin_pane: n,
                    destination_pane: t,
                    location_stack: c,
                    source: o,
                    subsection: i,
                    search_query: a
                });
            })({
                destinationPane: n,
                originPane: null != I ? I : null,
                source: R,
                subsection: E,
                locationStack: U,
                searchQuery: '' !== P ? P : null
            });
    }, [n, I, E, W, R, U, P]);
    let G = (0, h.eA)({ location: 'user_settings' }),
        { hasSearchResults: M, searchResults: H } = (0, Z.E)(),
        w = i.useMemo(() => G && M, [G, M]),
        D = (0, B.VO)(),
        A = (0, B.q8)(H),
        O = i.useMemo(() => (w ? A : D), [w, A, D]),
        y = (0, m.b)(),
        L = (0, S.iO)(),
        N = i.useCallback((e) => {
            r.Z.setSection(e);
        }, []);
    return (0, o.jsx)(g.Gt, {
        value: v,
        children: (0, o.jsx)(l.Z, {
            root: !0,
            page: T.ZY5.USER_SETTINGS,
            children: (0, o.jsx)(s.ZP, {
                theme: e,
                title: x.intl.string(x.t.cduTBA),
                sidebarTheme: t,
                section: n,
                onSetSection: N,
                onClose: a.xf,
                sections: O,
                isEligibleForPomelo: y,
                questsForBadge: L,
                isUserSettingsSearchEnabled: G
            })
        })
    });
});
t.default = i.forwardRef(function () {
    let e = (0, c.e7)([C.Z], () => C.Z.getProps().analyticsLocations),
        { analyticsLocations: t } = (0, g.ZP)(e);
    return (0, o.jsx)(g.Gt, {
        value: t,
        children: (0, o.jsx)(E, {})
    });
});
