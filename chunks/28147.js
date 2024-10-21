t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
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
    h = t(541099),
    f = t(827498),
    A = t(392370),
    E = t(98880),
    N = t(804307),
    v = t(520315),
    x = t(532309),
    I = t(561160),
    P = t(41558),
    g = t(106771),
    L = t(79984),
    T = t(314734),
    b = t(981631),
    S = t(689938),
    R = t(454093);
let M = Array(6)
        .fill(0)
        .map((e, n) => n),
    y = [, , ,].fill(0).map((e, n) => n),
    j = [, , , ,].fill(0).map((e, n) => n);
function O(e) {
    return (0, i.jsx)(Z, { ...e });
}
function Z(e) {
    let { channel: n, query: t, entrypoint: l, isScrollCloseToBottom: s } = e,
        c = l === f._b.TEXT,
        d = l === f._b.TEXT,
        {
            loading: u,
            isEmptyState: p,
            commandResults: _,
            hasCommandResults: C,
            applicationResults: h
        } = (0, A.pe)({
            channel: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d
        }),
        {
            fetchState: E,
            applicationResults: N,
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
    let x = null == E || E === m.M.FETCHING,
        P = a.useMemo(() => {
            let e = h.map((e) => ({
                    application: e,
                    installOnDemand: !0
                })),
                n = new Set(
                    h.map((e) => {
                        let { id: n } = e;
                        return n;
                    })
                );
            return [
                ...e,
                ...o().compact(
                    N.map((e) =>
                        e.type === r.s.CONNECTION || n.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [N, h]),
        g = P.length > 0,
        L = p && !g && !x;
    return u
        ? (0, i.jsx)(k, {})
        : L
          ? (0, i.jsx)(I.A, {
                type: f.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: l === f._b.TEXT ? S.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : S.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
            })
          : (0, i.jsxs)('div', {
                children: [
                    C &&
                        (0, i.jsx)(H, {
                            channel: n,
                            commandResults: _,
                            query: t
                        }),
                    (g || x) &&
                        (0, i.jsx)(D, {
                            applicationResults: P,
                            includePlaceholder: x,
                            query: t,
                            searchesBots: d
                        })
                ]
            });
}
function H(e) {
    var n, t;
    let { channel: l, commandResults: o, query: r } = e,
        m = o.length > 4,
        A = a.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [E, N] = a.useState(!1),
        x = null !== (n = (0, s.Z)(E)) && void 0 !== n ? n : E,
        I = a.useCallback(() => N((e) => !e), []),
        L = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
        M = E && !L;
    a.useLayoutEffect(() => N(!1), [L]);
    let {
        ref: y,
        isTransitioning: j,
        onTransitionEnd: O
    } = (0, v.Z)({
        key: r,
        isExpanded: M,
        durationMs: 200,
        maxAnimationHeight: T.K7
    });
    a.useEffect(() => {
        !x &&
            E &&
            (0, c.yw)(b.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: f.L3.SEARCH,
                source: h.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, x, E]);
    let Z = M || j,
        H = M ? P.Z.buttonTypes.VIEW_LESS : P.Z.buttonTypes.VIEW_MORE,
        U = Z ? o : A;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(P.Z, {
                title: S.Z.Messages.COMMANDS,
                buttonType: H,
                onClickViewButton: m ? I : void 0
            }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                ref: y,
                onTransitionEnd: O,
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
                                let e = h.Z.entrypoint();
                                C.yT(f.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: t,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: f.L3.SEARCH
                                    }),
                                    d.Po({
                                        channelId: l.id,
                                        command: t,
                                        section: o,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        triggerSection: void 0,
                                        queryLength: r.length,
                                        sectionName: f.L3.SEARCH,
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
function U(e) {
    let { trackSearchResultsItemImpressionRef: n } = (0, x.Z)({
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
function D(e) {
    let { applicationResults: n, includePlaceholder: t, query: a, searchesBots: l } = e;
    return l
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(P.Z, { title: S.Z.Messages.APPS }),
                  (0, i.jsxs)('div', {
                      className: R.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: l } = e;
                              return (0, i.jsx)(
                                  B,
                                  {
                                      application: t,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.L3.SEARCH,
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
                  (0, i.jsx)(P.Z, { title: S.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
                  (0, i.jsxs)('div', {
                      className: R.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: l } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      application: t,
                                      look: E.U4.LARGE_BANNER,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: l,
                                      query: a
                                  },
                                  t.id
                              );
                          }),
                          t && j.map((e) => (0, i.jsx)(N.Z, { look: E.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function B(e) {
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
            (0, i.jsx)(P.Z, { title: S.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                children: M.map((e) => (0, i.jsx)(L.Z, {}, e))
            }),
            (0, i.jsx)(P.Z, { title: S.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                children: y.map((e) => (0, i.jsx)(L.Z, {}, e))
            })
        ]
    });
}
