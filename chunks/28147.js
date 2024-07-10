t.d(n, {
    Z: function () {
        return R;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(392711), r = t.n(a), s = t(209173), o = t(555573), c = t(895924), u = t(809547), d = t(585483), m = t(499254), p = t(541099), _ = t(827498), E = t(392370), h = t(98880), A = t(532309), N = t(561160), f = t(41558), C = t(106771), v = t(79984), I = t(981631), x = t(689938), P = t(933693);
let T = Array(6).fill(0).map((e, n) => n), g = [
        ,
        ,
        ,
    ].fill(0).map((e, n) => n);
function R(e) {
    return e.enableGlobalSearch ? (0, i.jsx)(S, { ...e }) : (0, i.jsx)(M, { ...e });
}
function S(e) {
    let {
            channel: n,
            query: t,
            entrypoint: a,
            enableActivitiesSearch: o
        } = e, c = a === _._b.VOICE || o, d = a === _._b.TEXT, m = a === _._b.TEXT, {
            loading: p,
            isEmptyState: h,
            commandResults: A,
            hasCommandResults: f,
            applicationResults: C,
            hasApplicationResults: v
        } = (0, E.pe)({
            channel: n,
            query: t,
            searchesActivities: c,
            searchesCommands: d,
            searchesBots: m
        }), {
            fetchState: I,
            applicationResults: P
        } = (0, E.Q2)({
            query: t,
            channel: n,
            fetches: a !== _._b.VOICE
        }), T = null == I || I === u.M.FETCHING, g = l.useMemo(() => {
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
                ...r().compact(P.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
                    application: e.data,
                    installOnDemand: !0
                }))
            ];
        }, [
            a,
            P,
            C
        ]);
    return p ? (0, i.jsx)(b, {}) : h ? (0, i.jsx)(N.A, {
        type: _.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: a === _._b.TEXT ? x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            f && (0, i.jsx)(L, {
                channel: n,
                commandResults: A,
                query: t
            }),
            v && (0, i.jsx)(O, {
                applicationResults: g,
                includePlaceholder: T,
                query: t,
                searchesBots: m
            })
        ]
    });
}
function M(e) {
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
            applicationResults: h,
            hasApplicationResults: A
        } = (0, E.pe)({
            channel: n,
            query: t,
            commandLimit: 10,
            searchesCommands: o,
            searchesBots: c,
            searchesActivities: s
        }), f = l.useMemo(() => h.map(e => ({
            application: e,
            installOnDemand: !1
        })), [h]);
    return u ? (0, i.jsx)(b, {}) : d ? (0, i.jsx)(N.A, {
        type: _.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: a === _._b.TEXT ? x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            p && (0, i.jsx)(L, {
                channel: n,
                commandResults: m,
                query: t
            }),
            A && (0, i.jsx)(O, {
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
        ]), [u, E] = l.useState(!1), h = l.useCallback(() => E(e => !e), []), A = u ? t : s;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, {
                title: x.Z.Messages.COMMANDS,
                buttonType: u ? f.Z.buttonTypes.VIEW_LESS : f.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: r ? h : void 0
            }),
            (0, i.jsx)('div', {
                className: P.sectionContentContainer,
                children: A.map((e, t) => {
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
                            }), d.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: n.id });
                        }
                    }, l.id);
                })
            })
        ]
    });
}
function j(e) {
    let {trackSearchResultsItemImpressionRef: n} = (0, A.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: P.searchOpenAppDetailAppCard,
        ref: e => n.current = e,
        children: (0, i.jsx)(h.kA, {
            ...e,
            tracksImpression: !1
        })
    });
}
function O(e) {
    let {
        applicationResults: n,
        includePlaceholder: t,
        query: l,
        searchesBots: a
    } = e;
    return a ? (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, { title: x.Z.Messages.APPS }),
            (0, i.jsxs)('div', {
                className: P.sectionContentContainer,
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
                    t && g.map(e => (0, i.jsx)(v.Z, {}, e))
                ]
            })
        ]
    }) : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, { title: x.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
            (0, i.jsxs)('div', {
                className: P.sectionActivitiesContentContainer,
                children: [
                    n.map((e, n) => {
                        let {
                            application: t,
                            installOnDemand: a
                        } = e;
                        return (0, i.jsx)(j, {
                            application: t,
                            look: h.U4.LARGE_BANNER,
                            location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
                            sectionName: _.L3.SEARCH,
                            resultsPosition: n,
                            installOnDemand: a,
                            query: l
                        }, t.id);
                    }),
                    t && g.map(e => (0, i.jsx)(v.Z, {}, e))
                ]
            })
        ]
    });
}
function y(e) {
    let n = (0, h.cG)(e);
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
            (0, i.jsx)(f.Z, { title: x.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: P.sectionContentContainer,
                children: T.map(e => (0, i.jsx)(v.Z, {}, e))
            }),
            (0, i.jsx)(f.Z, { title: x.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: P.sectionContentContainer,
                children: g.map(e => (0, i.jsx)(v.Z, {}, e))
            })
        ]
    });
}
