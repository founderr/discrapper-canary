t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(392711),
    o = t.n(l),
    r = t(209173),
    s = t(110924),
    c = t(367907),
    d = t(555573),
    u = t(895924),
    m = t(809547),
    p = t(583027),
    _ = t(585483),
    C = t(499254),
    h = t(424602),
    f = t(541099),
    A = t(827498),
    E = t(392370),
    x = t(98880),
    N = t(520315),
    v = t(532309),
    I = t(561160),
    g = t(41558),
    b = t(106771),
    S = t(79984),
    P = t(314734),
    L = t(981631),
    R = t(689938),
    T = t(429032);
let M = Array(6)
        .fill(0)
        .map((e, n) => n),
    j = [, , ,].fill(0).map((e, n) => n);
function y(e) {
    return e.enableGlobalSearch ? (0, i.jsx)(Z, { ...e }) : (0, i.jsx)(O, { ...e });
}
function Z(e) {
    let { channel: n, query: t, entrypoint: l, isScrollCloseToBottom: s } = e,
        { enabled: c } = h.nS.useExperiment({ location: 'App Launcher Search View' }, { autoTrackExposure: !1 }),
        d = l === A._b.TEXT,
        u = l === A._b.TEXT,
        {
            loading: p,
            isEmptyState: _,
            commandResults: C,
            hasCommandResults: f,
            applicationResults: x
        } = (0, E.pe)({
            channel: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: d,
            searchesBots: u
        }),
        {
            fetchState: N,
            applicationResults: v,
            fetchNextPage: g
        } = (0, E.Q2)({
            query: t,
            channel: n,
            fetches: l !== A._b.VOICE || c,
            pageLimit: 5,
            entrypoint: l
        });
    a.useEffect(() => {
        s && N === m.M.FETCHED && g();
    }, [g, N, s]);
    let b = null == N || N === m.M.FETCHING,
        S = a.useMemo(() => {
            let e = x.map((e) => ({
                application: e,
                installOnDemand: !0
            }));
            if (l === A._b.VOICE) return e;
            let n = new Set(
                x.map((e) => {
                    let { id: n } = e;
                    return n;
                })
            );
            return [
                ...e,
                ...o().compact(
                    v.map((e) =>
                        e.type === r.s.CONNECTION || n.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [l, v, x]),
        P = S.length > 0,
        L = _ && !P && !b;
    return p
        ? (0, i.jsx)(B, {})
        : L
          ? (0, i.jsx)(I.A, {
                type: A.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: l === A._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
            })
          : (0, i.jsxs)('div', {
                children: [
                    f &&
                        (0, i.jsx)(H, {
                            channel: n,
                            commandResults: C,
                            query: t
                        }),
                    (P || b) &&
                        (0, i.jsx)(k, {
                            applicationResults: S,
                            includePlaceholder: b,
                            query: t,
                            searchesBots: u
                        })
                ]
            });
}
function O(e) {
    let { channel: n, query: t, entrypoint: l } = e,
        o = l === A._b.TEXT,
        r = l === A._b.TEXT,
        {
            loading: s,
            isEmptyState: c,
            commandResults: d,
            hasCommandResults: u,
            applicationResults: m,
            hasApplicationResults: p
        } = (0, E.pe)({
            channel: n,
            query: t,
            commandLimit: 10,
            searchesCommands: o,
            searchesBots: r,
            searchesActivities: !0
        }),
        _ = a.useMemo(
            () =>
                m.map((e) => ({
                    application: e,
                    installOnDemand: !1
                })),
            [m]
        );
    return s
        ? (0, i.jsx)(B, {})
        : c
          ? (0, i.jsx)(I.A, {
                type: A.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: l === A._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
            })
          : (0, i.jsxs)('div', {
                children: [
                    u &&
                        (0, i.jsx)(H, {
                            channel: n,
                            commandResults: d,
                            query: t
                        }),
                    p &&
                        (0, i.jsx)(k, {
                            applicationResults: _,
                            query: t,
                            searchesBots: r
                        })
                ]
            });
}
function H(e) {
    var n, t;
    let { channel: l, commandResults: o, query: r } = e,
        m = o.length > 4,
        h = a.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [E, x] = a.useState(!1),
        v = null !== (n = (0, s.Z)(E)) && void 0 !== n ? n : E,
        I = a.useCallback(() => x((e) => !e), []),
        S = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
        M = E && !S;
    a.useLayoutEffect(() => x(!1), [S]);
    let {
        ref: j,
        isTransitioning: y,
        onTransitionEnd: Z
    } = (0, N.Z)({
        key: r,
        isExpanded: M,
        durationMs: 200,
        maxAnimationHeight: P.K7
    });
    a.useEffect(() => {
        !v &&
            E &&
            (0, c.yw)(L.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: A.L3.SEARCH,
                source: f.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, v, E]);
    let O = M || y,
        H = M ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
        U = O ? o : h;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, {
                title: R.Z.Messages.COMMANDS,
                buttonType: H,
                onClickViewButton: m ? I : void 0
            }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                ref: j,
                onTransitionEnd: Z,
                children: U.map((e, n) => {
                    let { command: t, application: a, section: o } = e;
                    return (0, i.jsx)(
                        b.Z,
                        {
                            command: t,
                            application: a,
                            query: r,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = f.Z.entrypoint();
                                C.y(A.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: t,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: A.L3.SEARCH
                                    }),
                                    d.Po({
                                        channelId: l.id,
                                        command: t,
                                        section: o,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        triggerSection: void 0,
                                        queryLength: r.length,
                                        sectionName: A.L3.SEARCH,
                                        query: r,
                                        searchResultsPosition: n,
                                        source: e
                                    }),
                                    _.S.dispatch(L.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                            }
                        },
                        t.id
                    );
                })
            })
        ]
    });
}
function U(e) {
    let { trackSearchResultsItemImpressionRef: n } = (0, v.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: T.searchOpenAppDetailAppCard,
        ref: (e) => (n.current = e),
        children: (0, i.jsx)(x.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0
        })
    });
}
function k(e) {
    let { applicationResults: n, includePlaceholder: t, query: a, searchesBots: l } = e;
    return l
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: R.Z.Messages.APPS }),
                  (0, i.jsxs)('div', {
                      className: T.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: l } = e;
                              return (0, i.jsx)(
                                  D,
                                  {
                                      application: t,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: A.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: l,
                                      query: a
                                  },
                                  t.id
                              );
                          }),
                          t && j.map((e) => (0, i.jsx)(S.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: R.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
                  (0, i.jsxs)('div', {
                      className: T.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: l } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      application: t,
                                      look: x.U4.LARGE_BANNER,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: A.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: l,
                                      query: a
                                  },
                                  t.id
                              );
                          }),
                          t && j.map((e) => (0, i.jsx)(S.Z, {}, e))
                      ]
                  })
              ]
          });
}
function D(e) {
    let n = (0, x.cG)(e);
    return (0, i.jsx)(b.Z, {
        application: e.application,
        onClick: n,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function B() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, { title: R.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: M.map((e) => (0, i.jsx)(S.Z, {}, e))
            }),
            (0, i.jsx)(g.Z, { title: R.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: j.map((e) => (0, i.jsx)(S.Z, {}, e))
            })
        ]
    });
}
