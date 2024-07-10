t.d(n, {
    Z: function () {
        return R;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(392711), r = t.n(a), s = t(209173), o = t(555573), c = t(895924), u = t(809547), d = t(585483), m = t(499254), p = t(541099), _ = t(827498), E = t(392370), A = t(98880), N = t(532309), h = t(561160), f = t(41558), C = t(106771), I = t(79984), v = t(981631), P = t(689938), x = t(933693);
let T = Array(6).fill(0).map((e, n) => n), g = [
        ,
        ,
        ,
    ].fill(0).map((e, n) => n);
function R(e) {
    return e.enableGlobalSearch ? (0, i.jsx)(M, { ...e }) : (0, i.jsx)(S, { ...e });
}
function M(e) {
    let {
            channel: n,
            query: t,
            entrypoint: a,
            enableActivitiesSearch: o
        } = e, c = a === _._b.VOICE || o, d = a === _._b.TEXT, m = a === _._b.TEXT, {
            loading: p,
            isEmptyState: A,
            commandResults: N,
            hasCommandResults: f,
            applicationResults: C,
            hasApplicationResults: I
        } = (0, E.pe)({
            channel: n,
            query: t,
            searchesActivities: c,
            searchesCommands: d,
            searchesBots: m
        }), {
            fetchState: v,
            applicationResults: x
        } = (0, E.Q2)({
            query: t,
            channel: n,
            fetches: a !== _._b.VOICE
        }), T = null == v || v === u.M.FETCHING, g = l.useMemo(() => {
            let e = C.map(e => ({
                application: e,
                installOnDemand: !1
            }));
            if (a === _._b.VOICE)
                return e;
            let n = new Set(C.map(e => {
                let {id: n} = e;
                return n;
            }));
            return [
                ...e,
                ...r().compact(x.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
                    application: e.data,
                    installOnDemand: !0
                }))
            ];
        }, [
            a,
            x,
            C
        ]);
    return p ? (0, i.jsx)(b, {}) : A ? (0, i.jsx)(h.A, {
        type: _.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: a === _._b.TEXT ? P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            f && (0, i.jsx)(L, {
                channel: n,
                commandResults: N,
                query: t
            }),
            I && (0, i.jsx)(j, {
                applicationResults: g,
                includePlaceholder: T,
                query: t,
                searchesBots: m
            })
        ]
    });
}
function S(e) {
    let {
            channel: n,
            query: t,
            entrypoint: a,
            enableActivitiesSearch: r
        } = e, s = a === _._b.VOICE || r, o = a === _._b.TEXT, c = a === _._b.TEXT, {
            loading: u,
            isEmptyState: d,
            commandResults: m,
            hasCommandResults: p,
            applicationResults: A,
            hasApplicationResults: N
        } = (0, E.pe)({
            channel: n,
            query: t,
            commandLimit: 10,
            searchesCommands: o,
            searchesBots: c,
            searchesActivities: s
        }), f = l.useMemo(() => A.map(e => ({
            application: e,
            installOnDemand: !1
        })), [A]);
    return u ? (0, i.jsx)(b, {}) : d ? (0, i.jsx)(h.A, {
        type: _.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: a === _._b.TEXT ? P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : P.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            p && (0, i.jsx)(L, {
                channel: n,
                commandResults: m,
                query: t
            }),
            N && (0, i.jsx)(j, {
                applicationResults: f,
                query: t,
                searchesBots: c
            })
        ]
    });
}
function L(e) {
    let {
            channel: n,
            commandResults: t,
            query: a
        } = e, r = t.length > 4, s = l.useMemo(() => r ? t.slice(0, 4) : t, [
            t,
            r
        ]), [u, E] = l.useState(!1), A = l.useCallback(() => E(e => !e), []), N = u ? t : s;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, {
                title: P.Z.Messages.COMMANDS,
                buttonType: u ? f.Z.buttonTypes.VIEW_LESS : f.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: r ? A : void 0
            }),
            (0, i.jsx)('div', {
                className: x.sectionContentContainer,
                children: N.map((e, t) => {
                    let {
                        command: l,
                        application: r,
                        section: s
                    } = e;
                    return (0, i.jsx)(C.Z, {
                        command: l,
                        application: r,
                        query: a,
                        searchResultsPosition: t,
                        onClick: () => {
                            let e = p.Z.entrypoint();
                            m.y(_.ti.DISMISSED), o.Po({
                                channelId: n.id,
                                command: l,
                                section: s,
                                location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
                                triggerSection: void 0,
                                queryLength: a.length,
                                sectionName: _.L3.SEARCH,
                                query: a,
                                searchResultsPosition: t,
                                source: e
                            }), d.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: n.id });
                        }
                    }, l.id);
                })
            })
        ]
    });
}
function O(e) {
    let {trackSearchResultsItemImpressionRef: n} = (0, N.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: x.searchOpenAppDetailAppCard,
        ref: e => n.current = e,
        children: (0, i.jsx)(A.kA, {
            ...e,
            tracksImpression: !1
        })
    });
}
function j(e) {
    let {
        applicationResults: n,
        includePlaceholder: t,
        query: l,
        searchesBots: a
    } = e;
    return a ? (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, { title: P.Z.Messages.APPS }),
            (0, i.jsxs)('div', {
                className: x.sectionContentContainer,
                children: [
                    n.map((e, n) => {
                        let {
                            application: t,
                            installOnDemand: a
                        } = e;
                        return (0, i.jsx)(y, {
                            application: t,
                            location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
                            sectionName: _.L3.SEARCH,
                            resultsPosition: n,
                            installOnDemand: a,
                            query: l
                        }, t.id);
                    }),
                    t && g.map(e => (0, i.jsx)(I.Z, {}, e))
                ]
            })
        ]
    }) : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, { title: P.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
            (0, i.jsxs)('div', {
                className: x.sectionActivitiesContentContainer,
                children: [
                    n.map((e, n) => {
                        let {
                            application: t,
                            installOnDemand: a
                        } = e;
                        return (0, i.jsx)(O, {
                            application: t,
                            look: A.U4.LARGE_BANNER,
                            location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
                            sectionName: _.L3.SEARCH,
                            resultsPosition: n,
                            installOnDemand: a,
                            query: l
                        }, t.id);
                    }),
                    t && g.map(e => (0, i.jsx)(I.Z, {}, e))
                ]
            })
        ]
    });
}
function y(e) {
    let n = (0, A.cG)(e);
    return (0, i.jsx)(C.Z, {
        application: e.application,
        onClick: n,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function b() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, { title: P.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: x.sectionContentContainer,
                children: T.map(e => (0, i.jsx)(I.Z, {}, e))
            }),
            (0, i.jsx)(f.Z, { title: P.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: x.sectionContentContainer,
                children: g.map(e => (0, i.jsx)(I.Z, {}, e))
            })
        ]
    });
}
