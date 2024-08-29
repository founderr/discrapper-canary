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
    d = t(555573),
    u = t(895924),
    m = t(809547),
    p = t(583027),
    _ = t(585483),
    C = t(499254),
    f = t(541099),
    h = t(827498),
    A = t(392370),
    E = t(98880),
    x = t(520315),
    v = t(532309),
    N = t(561160),
    I = t(41558),
    g = t(106771),
    S = t(79984),
    P = t(314734),
    b = t(981631),
    L = t(689938),
    R = t(429032);
let T = Array(6)
        .fill(0)
        .map((e, n) => n),
    M = [, , ,].fill(0).map((e, n) => n);
function j(e) {
    return (0, i.jsx)(y, { ...e });
}
function y(e) {
    let { channel: n, query: t, entrypoint: l, isScrollCloseToBottom: s } = e,
        c = l === h._b.TEXT,
        d = l === h._b.TEXT,
        {
            loading: u,
            isEmptyState: p,
            commandResults: _,
            hasCommandResults: C,
            applicationResults: f
        } = (0, A.pe)({
            channel: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d
        }),
        {
            fetchState: E,
            applicationResults: x,
            fetchNextPage: v
        } = (0, A.Q2)({
            query: t,
            channel: n,
            fetches: !0,
            pageLimit: 5,
            entrypoint: l
        });
    a.useEffect(() => {
        s && E === m.M.FETCHED && v();
    }, [v, E, s]);
    let I = null == E || E === m.M.FETCHING,
        g = a.useMemo(() => {
            let e = f.map((e) => ({
                    application: e,
                    installOnDemand: !0
                })),
                n = new Set(
                    f.map((e) => {
                        let { id: n } = e;
                        return n;
                    })
                );
            return [
                ...e,
                ...o().compact(
                    x.map((e) =>
                        e.type === r.s.CONNECTION || n.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [x, f]),
        S = g.length > 0,
        P = p && !S && !I;
    return u
        ? (0, i.jsx)(k, {})
        : P
          ? (0, i.jsx)(N.A, {
                type: h.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: l === h._b.TEXT ? L.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : L.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
            })
          : (0, i.jsxs)('div', {
                children: [
                    C &&
                        (0, i.jsx)(Z, {
                            channel: n,
                            commandResults: _,
                            query: t
                        }),
                    (S || I) &&
                        (0, i.jsx)(H, {
                            applicationResults: g,
                            includePlaceholder: I,
                            query: t,
                            searchesBots: d
                        })
                ]
            });
}
function Z(e) {
    var n, t;
    let { channel: l, commandResults: o, query: r } = e,
        m = o.length > 4,
        A = a.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [E, v] = a.useState(!1),
        N = null !== (n = (0, s.Z)(E)) && void 0 !== n ? n : E,
        S = a.useCallback(() => v((e) => !e), []),
        T = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
        M = E && !T;
    a.useLayoutEffect(() => v(!1), [T]);
    let {
        ref: j,
        isTransitioning: y,
        onTransitionEnd: Z
    } = (0, x.Z)({
        key: r,
        isExpanded: M,
        durationMs: 200,
        maxAnimationHeight: P.K7
    });
    a.useEffect(() => {
        !N &&
            E &&
            (0, c.yw)(b.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: h.L3.SEARCH,
                source: f.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, N, E]);
    let O = M || y,
        H = M ? I.Z.buttonTypes.VIEW_LESS : I.Z.buttonTypes.VIEW_MORE,
        U = O ? o : A;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(I.Z, {
                title: L.Z.Messages.COMMANDS,
                buttonType: H,
                onClickViewButton: m ? S : void 0
            }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                ref: j,
                onTransitionEnd: Z,
                children: U.map((e, n) => {
                    let { command: t, application: a, section: o } = e;
                    return (0, i.jsx)(
                        g.Z,
                        {
                            command: t,
                            application: a,
                            query: r,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = f.Z.entrypoint();
                                C.y(h.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: t,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: h.L3.SEARCH
                                    }),
                                    d.Po({
                                        channelId: l.id,
                                        command: t,
                                        section: o,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        triggerSection: void 0,
                                        queryLength: r.length,
                                        sectionName: h.L3.SEARCH,
                                        query: r,
                                        searchResultsPosition: n,
                                        source: e
                                    }),
                                    _.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                            }
                        },
                        t.id
                    );
                })
            })
        ]
    });
}
function O(e) {
    let { trackSearchResultsItemImpressionRef: n } = (0, v.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: R.searchOpenAppDetailAppCard,
        ref: (e) => (n.current = e),
        children: (0, i.jsx)(E.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0
        })
    });
}
function H(e) {
    let { applicationResults: n, includePlaceholder: t, query: a, searchesBots: l } = e;
    return l
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(I.Z, { title: L.Z.Messages.APPS }),
                  (0, i.jsxs)('div', {
                      className: R.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: l } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      application: t,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: h.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: l,
                                      query: a
                                  },
                                  t.id
                              );
                          }),
                          t && M.map((e) => (0, i.jsx)(S.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(I.Z, { title: L.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
                  (0, i.jsxs)('div', {
                      className: R.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: l } = e;
                              return (0, i.jsx)(
                                  O,
                                  {
                                      application: t,
                                      look: E.U4.LARGE_BANNER,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: h.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: l,
                                      query: a
                                  },
                                  t.id
                              );
                          }),
                          t && M.map((e) => (0, i.jsx)(S.Z, {}, e))
                      ]
                  })
              ]
          });
}
function U(e) {
    let n = (0, E.cG)(e);
    return (0, i.jsx)(g.Z, {
        application: e.application,
        onClick: n,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function k() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(I.Z, { title: L.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                children: T.map((e) => (0, i.jsx)(S.Z, {}, e))
            }),
            (0, i.jsx)(I.Z, { title: L.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                children: M.map((e) => (0, i.jsx)(S.Z, {}, e))
            })
        ]
    });
}
