t.d(n, {
    Z: function () {
        return j;
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
    u = t(555573),
    d = t(895924),
    m = t(809547),
    p = t(583027),
    _ = t(585483),
    C = t(499254),
    f = t(424602),
    h = t(541099),
    E = t(827498),
    A = t(392370),
    N = t(98880),
    x = t(520315),
    v = t(532309),
    I = t(561160),
    g = t(41558),
    P = t(106771),
    L = t(79984),
    b = t(314734),
    S = t(981631),
    R = t(689938),
    T = t(429032);
let M = Array(6)
        .fill(0)
        .map((e, n) => n),
    y = [, , ,].fill(0).map((e, n) => n);
function j(e) {
    return e.enableGlobalSearch ? (0, i.jsx)(O, { ...e }) : (0, i.jsx)(Z, { ...e });
}
function O(e) {
    let { channel: n, query: t, entrypoint: l, isScrollCloseToBottom: s } = e,
        { enabled: c } = f.nS.useExperiment({ location: 'App Launcher Search View' }, { autoTrackExposure: !1 }),
        u = l === E._b.TEXT,
        d = l === E._b.TEXT,
        {
            loading: p,
            isEmptyState: _,
            commandResults: C,
            hasCommandResults: h,
            applicationResults: N
        } = (0, A.pe)({
            channel: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: u,
            searchesBots: d
        }),
        {
            fetchState: x,
            applicationResults: v,
            fetchNextPage: g
        } = (0, A.Q2)({
            query: t,
            channel: n,
            fetches: l !== E._b.VOICE || c,
            pageLimit: 5,
            entrypoint: l
        });
    a.useEffect(() => {
        s && x === m.M.FETCHED && g();
    }, [g, x, s]);
    let P = null == x || x === m.M.FETCHING,
        L = a.useMemo(() => {
            let e = N.map((e) => ({
                application: e,
                installOnDemand: !0
            }));
            if (l === E._b.VOICE) return e;
            let n = new Set(
                N.map((e) => {
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
        }, [l, v, N]),
        b = L.length > 0,
        S = _ && !b && !P;
    return p
        ? (0, i.jsx)(k, {})
        : S
          ? (0, i.jsx)(I.A, {
                type: E.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: l === E._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
            })
          : (0, i.jsxs)('div', {
                children: [
                    h &&
                        (0, i.jsx)(H, {
                            channel: n,
                            commandResults: C,
                            query: t
                        }),
                    (b || P) &&
                        (0, i.jsx)(D, {
                            applicationResults: L,
                            includePlaceholder: P,
                            query: t,
                            searchesBots: d
                        })
                ]
            });
}
function Z(e) {
    let { channel: n, query: t, entrypoint: l } = e,
        o = l === E._b.TEXT,
        r = l === E._b.TEXT,
        {
            loading: s,
            isEmptyState: c,
            commandResults: u,
            hasCommandResults: d,
            applicationResults: m,
            hasApplicationResults: p
        } = (0, A.pe)({
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
        ? (0, i.jsx)(k, {})
        : c
          ? (0, i.jsx)(I.A, {
                type: E.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: l === E._b.TEXT ? R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : R.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
            })
          : (0, i.jsxs)('div', {
                children: [
                    d &&
                        (0, i.jsx)(H, {
                            channel: n,
                            commandResults: u,
                            query: t
                        }),
                    p &&
                        (0, i.jsx)(D, {
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
        f = a.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [A, N] = a.useState(!1),
        v = null !== (n = (0, s.Z)(A)) && void 0 !== n ? n : A,
        I = a.useCallback(() => N((e) => !e), []),
        L = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
        M = A && !L;
    a.useLayoutEffect(() => N(!1), [L]);
    let {
        ref: y,
        isTransitioning: j,
        onTransitionEnd: O
    } = (0, x.Z)({
        key: r,
        isExpanded: M,
        durationMs: 200,
        maxAnimationHeight: b.K7
    });
    a.useEffect(() => {
        !v &&
            A &&
            (0, c.yw)(S.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: E.L3.SEARCH,
                source: h.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, v, A]);
    let Z = M || j,
        H = M ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
        U = Z ? o : f;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, {
                title: R.Z.Messages.COMMANDS,
                buttonType: H,
                onClickViewButton: m ? I : void 0
            }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                ref: y,
                onTransitionEnd: O,
                children: U.map((e, n) => {
                    let { command: t, application: a, section: o } = e;
                    return (0, i.jsx)(
                        P.Z,
                        {
                            command: t,
                            application: a,
                            query: r,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = h.Z.entrypoint();
                                C.y(E.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: t,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: E.L3.SEARCH
                                    }),
                                    u.Po({
                                        channelId: l.id,
                                        command: t,
                                        section: o,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        triggerSection: void 0,
                                        queryLength: r.length,
                                        sectionName: E.L3.SEARCH,
                                        query: r,
                                        searchResultsPosition: n,
                                        source: e
                                    }),
                                    _.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
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
        children: (0, i.jsx)(N.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0
        })
    });
}
function D(e) {
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
                                  B,
                                  {
                                      application: t,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: E.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: l,
                                      query: a
                                  },
                                  t.id
                              );
                          }),
                          t && y.map((e) => (0, i.jsx)(L.Z, {}, e))
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
                                      look: N.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: E.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: l,
                                      query: a
                                  },
                                  t.id
                              );
                          }),
                          t && y.map((e) => (0, i.jsx)(L.Z, {}, e))
                      ]
                  })
              ]
          });
}
function B(e) {
    let n = (0, N.cG)(e);
    return (0, i.jsx)(P.Z, {
        application: e.application,
        onClick: n,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function k() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, { title: R.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: M.map((e) => (0, i.jsx)(L.Z, {}, e))
            }),
            (0, i.jsx)(g.Z, { title: R.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: y.map((e) => (0, i.jsx)(L.Z, {}, e))
            })
        ]
    });
}
