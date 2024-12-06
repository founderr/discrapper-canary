n.r(t);
var o = n(200651),
    i = n(192379),
    c = n(442837),
    a = n(37234),
    l = n(230711),
    r = n(410575),
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
    B = n(996733),
    p = n(991346),
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
        w = (0, B.Z7)(),
        { analyticsLocations: P } = (0, g.ZP)(d.Z.USER_SETTINGS);
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
                searchQuery: '' !== w ? w : null
            });
    }, [n, I, E, W, R, U, w]);
    let v = (0, h.eA)({ location: 'user_settings' }),
        { hasSearchResults: G, searchResults: M } = (0, Z.E)(),
        H = i.useMemo(() => v && G, [v, G]),
        D = (0, p.VO)(),
        A = (0, p.q8)(M),
        O = i.useMemo(() => (H ? A : D), [H, A, D]),
        y = (0, m.b)(),
        L = (0, S.iO)(),
        N = i.useCallback((e) => {
            l.Z.setSection(e);
        }, []);
    return (0, o.jsx)(g.Gt, {
        value: P,
        children: (0, o.jsx)(r.Z, {
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
                isUserSettingsSearchEnabled: v
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
