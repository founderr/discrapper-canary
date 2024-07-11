t.d(n, {
    Z: function () {
        return L;
    }
}), t(47120);
var i = t(735250), l = t(470079), r = t(392711), a = t.n(r), s = t(209173), o = t(110924), c = t(555573), u = t(895924), d = t(809547), m = t(585483), p = t(499254), _ = t(541099), E = t(827498), h = t(392370), A = t(98880), f = t(520315), N = t(532309), C = t(561160), v = t(41558), I = t(106771), x = t(79984), P = t(314734), T = t(981631), g = t(689938), R = t(933693);
let S = Array(6).fill(0).map((e, n) => n), M = [
        ,
        ,
        ,
    ].fill(0).map((e, n) => n);
function L(e) {
    return e.enableGlobalSearch ? (0, i.jsx)(j, { ...e }) : (0, i.jsx)(O, { ...e });
}
function j(e) {
    let {
            channel: n,
            query: t,
            entrypoint: r,
            enableActivitiesSearch: o
        } = e, c = r === E._b.VOICE || o, u = r === E._b.TEXT, m = r === E._b.TEXT, {
            loading: p,
            isEmptyState: _,
            commandResults: A,
            hasCommandResults: f,
            applicationResults: N
        } = (0, h.pe)({
            channel: n,
            query: t,
            searchesActivities: c,
            searchesCommands: u,
            searchesBots: m
        }), {
            fetchState: v,
            applicationResults: I
        } = (0, h.Q2)({
            query: t,
            channel: n,
            fetches: r !== E._b.VOICE
        }), x = null == v || v === d.M.FETCHING, P = l.useMemo(() => {
            let e = N.map(e => ({
                application: e,
                installOnDemand: !1
            }));
            if (r === E._b.VOICE)
                return e;
            let n = new Set(N.map(e => {
                let {id: n} = e;
                return n;
            }));
            return [
                ...e,
                ...a().compact(I.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
                    application: e.data,
                    installOnDemand: !0
                }))
            ];
        }, [
            r,
            I,
            N
        ]), T = P.length > 0, R = _ && !T && !x;
    return p ? (0, i.jsx)(U, {}) : R ? (0, i.jsx)(C.A, {
        type: E.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: r === E._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            f && (0, i.jsx)(y, {
                channel: n,
                commandResults: A,
                query: t
            }),
            (T || x) && (0, i.jsx)(Z, {
                applicationResults: P,
                includePlaceholder: x,
                query: t,
                searchesBots: m
            })
        ]
    });
}
function O(e) {
    let {
            channel: n,
            query: t,
            entrypoint: r,
            enableActivitiesSearch: a
        } = e, s = r === E._b.VOICE || a, o = r === E._b.TEXT, c = r === E._b.TEXT, {
            loading: u,
            isEmptyState: d,
            commandResults: m,
            hasCommandResults: p,
            applicationResults: _,
            hasApplicationResults: A
        } = (0, h.pe)({
            channel: n,
            query: t,
            commandLimit: 10,
            searchesCommands: o,
            searchesBots: c,
            searchesActivities: s
        }), f = l.useMemo(() => _.map(e => ({
            application: e,
            installOnDemand: !1
        })), [_]);
    return u ? (0, i.jsx)(U, {}) : d ? (0, i.jsx)(C.A, {
        type: E.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: r === E._b.TEXT ? g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : g.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            p && (0, i.jsx)(y, {
                channel: n,
                commandResults: m,
                query: t
            }),
            A && (0, i.jsx)(Z, {
                applicationResults: f,
                query: t,
                searchesBots: c
            })
        ]
    });
}
function y(e) {
    var n;
    let {
            channel: t,
            commandResults: r,
            query: a
        } = e, s = r.length > 4, d = l.useMemo(() => s ? r.slice(0, 4) : r, [
            r,
            s
        ]), [h, A] = l.useState(!1), N = l.useCallback(() => A(e => !e), []), C = (null !== (n = (0, o.Z)(a)) && void 0 !== n ? n : a)[0] !== a[0], x = h && !C;
    l.useLayoutEffect(() => A(!1), [C]);
    let {
            ref: S,
            isTransitioning: M,
            onTransitionEnd: L
        } = (0, f.Z)({
            key: a,
            isExpanded: x,
            durationMs: 200,
            maxAnimationHeight: P.lv
        }), j = x || M, O = x ? v.Z.buttonTypes.VIEW_LESS : v.Z.buttonTypes.VIEW_MORE, y = j ? r : d;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.Z, {
                title: g.Z.Messages.COMMANDS,
                buttonType: O,
                onClickViewButton: s ? N : void 0
            }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                ref: S,
                onTransitionEnd: L,
                children: y.map((e, n) => {
                    let {
                        command: l,
                        application: r,
                        section: s
                    } = e;
                    return (0, i.jsx)(I.Z, {
                        command: l,
                        application: r,
                        query: a,
                        searchResultsPosition: n,
                        onClick: () => {
                            let e = _.Z.entrypoint();
                            p.y(E.ti.DISMISSED), c.Po({
                                channelId: t.id,
                                command: l,
                                section: s,
                                location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                triggerSection: void 0,
                                queryLength: a.length,
                                sectionName: E.L3.SEARCH,
                                query: a,
                                searchResultsPosition: n,
                                source: e
                            }), m.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.id });
                        }
                    }, l.id);
                })
            })
        ]
    });
}
function b(e) {
    let {trackSearchResultsItemImpressionRef: n} = (0, N.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: R.searchOpenAppDetailAppCard,
        ref: e => n.current = e,
        children: (0, i.jsx)(A.kA, {
            ...e,
            tracksImpression: !1
        })
    });
}
function Z(e) {
    let {
        applicationResults: n,
        includePlaceholder: t,
        query: l,
        searchesBots: r
    } = e;
    return r ? (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.Z, { title: g.Z.Messages.APPS }),
            (0, i.jsxs)('div', {
                className: R.sectionContentContainer,
                children: [
                    n.map((e, n) => {
                        let {
                            application: t,
                            installOnDemand: r
                        } = e;
                        return (0, i.jsx)(H, {
                            application: t,
                            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                            sectionName: E.L3.SEARCH,
                            resultsPosition: n,
                            installOnDemand: r,
                            query: l
                        }, t.id);
                    }),
                    t && M.map(e => (0, i.jsx)(x.Z, {}, e))
                ]
            })
        ]
    }) : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.Z, { title: g.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
            (0, i.jsxs)('div', {
                className: R.sectionActivitiesContentContainer,
                children: [
                    n.map((e, n) => {
                        let {
                            application: t,
                            installOnDemand: r
                        } = e;
                        return (0, i.jsx)(b, {
                            application: t,
                            look: A.U4.LARGE_BANNER,
                            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                            sectionName: E.L3.SEARCH,
                            resultsPosition: n,
                            installOnDemand: r,
                            query: l
                        }, t.id);
                    }),
                    t && M.map(e => (0, i.jsx)(x.Z, {}, e))
                ]
            })
        ]
    });
}
function H(e) {
    let n = (0, A.cG)(e);
    return (0, i.jsx)(I.Z, {
        application: e.application,
        onClick: n,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function U() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.Z, { title: g.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                children: S.map(e => (0, i.jsx)(x.Z, {}, e))
            }),
            (0, i.jsx)(v.Z, { title: g.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: R.sectionContentContainer,
                children: M.map(e => (0, i.jsx)(x.Z, {}, e))
            })
        ]
    });
}
