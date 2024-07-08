t.d(n, {
    Z: function () {
        return V;
    }
}), t(47120), t(653041), t(724458);
var i = t(735250), l = t(470079), a = t(392711), r = t.n(a), s = t(892814), o = t(79411), c = t(442837), u = t(481060), d = t(911969), m = t(595519), p = t(566620), _ = t(127255), E = t(880308), A = t(367907), N = t(399654), h = t(844439), C = t(254711), f = t(213459), I = t(10718), x = t(895924), v = t(148958), P = t(424602), g = t(541099), T = t(827498), M = t(87005), L = t(695676), R = t(98880), S = t(804307), O = t(561160), j = t(41558), b = t(105862), y = t(28147), Z = t(981631), H = t(689079), U = t(689938), D = t(678313);
let k = [], B = Array(8).fill(0).map((e, n) => n), w = [
        {
            cards: [
                ,
                ,
                ,
                ,
            ].fill(0).map((e, n) => n),
            look: R.U4.LARGE_BANNER
        },
        {
            cards: Array(8).fill(0).map((e, n) => n),
            look: R.U4.NO_BANNER
        },
        {
            cards: [
                ,
                ,
                ,
                ,
            ].fill(0).map((e, n) => n),
            look: R.U4.NO_BANNER
        }
    ];
function V(e) {
    let {
            channel: n,
            entrypoint: t,
            searchQuery: a,
            setSearchQuery: r,
            setScroller: s
        } = e, o = (0, m.NX)(n.id, !0), c = t === T._b.TEXT, d = t === T._b.TEXT, _ = t === T._b.TEXT, E = t === T._b.VOICE, A = t === T._b.TEXT, [N, h] = Q(c), [C, f] = Q(d), [I, x] = Q(_), [v, P] = Q(_), g = N && C && I && v, M = (_ || d) && !g;
    l.useEffect(() => {
        o && (0, p.w1)({
            guildId: n.getGuildId(),
            force: !0
        });
    }, [
        o,
        n
    ]);
    let L = a.length > 0;
    return (0, i.jsxs)('div', {
        className: D.container,
        children: [
            (0, i.jsx)(W, {
                searchQuery: a,
                setSearchQuery: r,
                placeholder: A ? U.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : U.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
            }),
            (0, i.jsx)(u.Scroller, {
                ref: s,
                className: D.scrollableContent,
                fade: !0,
                children: L ? (0, i.jsx)('div', {
                    children: (0, i.jsx)(y.Z, {
                        channel: n,
                        query: a,
                        entrypoint: t,
                        enableGlobalSearch: t === T._b.TEXT,
                        enableActivitiesSearch: o
                    })
                }) : (0, i.jsxs)('div', {
                    children: [
                        c && (0, i.jsx)(F, {
                            channel: n,
                            entrypoint: t,
                            onEmptyState: h
                        }),
                        d && (0, i.jsx)(G, {
                            channel: n,
                            onEmptyState: f
                        }),
                        _ && (0, i.jsx)(z, {
                            channel: n,
                            onEmptyState: x
                        }),
                        E && (0, i.jsx)(Y, {
                            channel: n,
                            onEmptyState: P
                        }),
                        g && (0, i.jsx)(O.A, {
                            type: T.LG.HOME_EMPTY,
                            textContent: t === T._b.TEXT ? U.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : U.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
                        }),
                        M && (0, i.jsx)(b.Z, {})
                    ]
                })
            })
        ]
    });
}
function W(e) {
    let {
            searchQuery: n,
            setSearchQuery: t,
            placeholder: a
        } = e, [s, o] = l.useState(!0), [c, d] = l.useState(!1), m = l.useMemo(() => r().debounce(e => {
            (0, A.yw)(Z.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                query: e,
                source: g.Z.entrypoint(),
                location: x.Vh.APP_LAUNCHER_HOME
            });
        }, 400, {
            leading: !1,
            trailing: !0
        }), []), p = l.useCallback(() => t(''), [t]), _ = l.useCallback(() => {
            d(!0), (0, A.yw)(Z.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                source: g.Z.entrypoint(),
                location: x.Vh.APP_LAUNCHER_HOME
            });
        }, []), E = l.useCallback(() => {
            if (s) {
                o(!1);
                return;
            }
            _();
        }, [
            s,
            _
        ]), N = l.useCallback(e => {
            !c && _(), t(e), m(e);
        }, [
            c,
            t,
            _,
            m
        ]);
    return (0, i.jsx)('div', {
        className: D.searchBarContainer,
        children: (0, i.jsx)(u.SearchBar, {
            placeholder: a,
            query: n,
            onChange: N,
            onClear: p,
            size: u.SearchBar.Sizes.MEDIUM,
            autoFocus: !0,
            onFocus: E
        })
    });
}
function F(e) {
    let {
            channel: n,
            entrypoint: t,
            onEmptyState: a
        } = e, {
            frecentApps: r,
            loading: s
        } = (0, M.f)(n, !0), o = l.useMemo(() => {
            let e = [];
            for (let n of r)
                null != n.application && e.push({
                    application: n.application,
                    isPartner: !1
                });
            return e;
        }, [r]), c = U.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
            items: u,
            handleViewMore: d
        } = q(c, t === T._b.VOICE ? R.U4.LARGE_BANNER : R.U4.NO_BANNER, o, 8, T.L3.RECENT_APPS);
    l.useEffect(() => {
        if (!0 !== s.current)
            0 !== u.length && (0, A.yw)(Z.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: u.length,
                section_name: T.L3.RECENT_APPS,
                location: T.G0.HOME,
                source: t
            });
    }, [
        u.length,
        t,
        s
    ]);
    let m = s.current, p = !m && 0 === u.length;
    return (l.useEffect(() => {
        a(p);
    }, [
        p,
        a
    ]), m || p) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, {
                title: c,
                onClickViewMore: d
            }),
            (0, i.jsx)('div', {
                className: D.sectionContentContainer,
                children: (0, i.jsx)('div', {
                    className: D.frecentList,
                    children: u.map(e => {
                        let {
                            application: n,
                            isPartner: t
                        } = e;
                        return (0, i.jsx)(R.kA, {
                            application: n,
                            look: R.U4.ICON,
                            isPartner: t,
                            location: T.G0.HOME
                        }, n.id);
                    })
                })
            })
        ]
    });
}
function Y(e) {
    let {
        channel: n,
        onEmptyState: t
    } = e;
    (0, E.g)();
    let a = (0, _.Z)({
            guildId: n.getGuildId(),
            channel: n
        }), r = R.U4.LARGE_BANNER, {clickOnHomeActivityOpensAppDetail: s} = P.m1.getCurrentConfig({ location: 'ActivitiesShelfSection' }, { autoTrackExposure: !1 }), o = 0 === a.length;
    return (l.useEffect(() => {
        t(o);
    }, [
        t,
        o
    ]), o) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, { title: U.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
            (0, i.jsx)('div', {
                className: D.sectionContentContainer,
                children: a.map(e => {
                    let {application: t} = e;
                    return (0, i.jsx)(R.qR, {
                        channel: n,
                        application: t,
                        look: r,
                        location: x.Vh.APP_LAUNCHER_HOME,
                        sectionName: T.L3.ACTIVITIES,
                        isOneClickCTA: !s
                    }, t.id);
                })
            })
        ]
    });
}
function G(e) {
    var n;
    let {
            channel: t,
            onEmptyState: a
        } = e, s = (0, f.LD)(t.guild_id, !0), {
            commandsByActiveSection: o,
            loading: c
        } = I.wi(t, { commandType: d.yU.CHAT }, {
            placeholderCount: 0,
            limit: H.tn,
            includeFrecency: !0
        }), u = l.useMemo(() => o.reduce((e, n) => {
            let {
                section: t,
                data: i
            } = n;
            return i.length > 0 && e.add(t.id), e;
        }, new Set()), [o]), m = l.useMemo(() => {
            var e, n;
            return Object.values(null !== (n = null === (e = s.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}).map(e => {
                let {descriptor: n} = e;
                return n;
            }).filter(e => !(e.id in C.Tm) && u.has(e.id));
        }, [
            null === (n = s.result) || void 0 === n ? void 0 : n.sections,
            u
        ]), p = (0, v.h)(m), _ = T.L3.APPS_IN_THIS_SERVER, E = l.useMemo(() => r().compact(p.map(e => {
            let {application: n} = e;
            return n;
        })).map(e => ({ application: e })), [p]), {
            items: A,
            handleViewMore: N
        } = q(U.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, R.U4.NO_BANNER, E, 8, _), h = s.fetchState.fetching || c.current, P = !h && 0 === A.length;
    return (l.useEffect(() => {
        a(P);
    }, [
        P,
        a
    ]), P) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, {
                title: U.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
                onClickViewMore: N
            }),
            (0, i.jsx)('div', {
                className: D.sectionContentContainer,
                children: h ? B.map(e => (0, i.jsx)(S.Z, { look: R.U4.NO_BANNER }, e)) : A.map((e, n) => {
                    let {
                        application: t,
                        isPartner: l
                    } = e;
                    return null != t ? (0, i.jsx)(R.kA, {
                        application: t,
                        isPartner: l,
                        look: R.U4.NO_BANNER,
                        sectionName: _,
                        resultsPosition: n,
                        location: x.Vh.APP_LAUNCHER_HOME
                    }, t.id) : null;
                })
            })
        ]
    });
}
function z(e) {
    let {
            channel: n,
            onEmptyState: t
        } = e, {
            fetchState: a,
            recommendationsSections: r
        } = function (e) {
            let {
                channelId: n,
                location: t
            } = e;
            l.useEffect(() => {
                (0, N.$)({
                    channelId: n,
                    location: t
                });
            }, [
                n,
                t
            ]);
            let [i, a] = (0, c.Wu)([h.Z], () => [
                h.Z.getFetchState({
                    channelId: n,
                    location: t
                }),
                h.Z.getRecommendations({
                    channelId: n,
                    location: t
                })
            ]);
            return {
                fetchState: i,
                recommendationsSections: a
            };
        }({
            channelId: n.id,
            location: s.I.APP_LAUNCHER_TEXT
        }), o = function (e) {
            let {
                channel: n,
                recommendationsSections: t
            } = e;
            (0, E.g)();
            let i = (0, _.Z)({
                guildId: n.getGuildId(),
                channel: n
            });
            return l.useMemo(() => {
                if (!t.some(e => e.appends_remaining_activities))
                    return k;
                let e = new Set();
                return t.forEach(n => {
                    n.items.forEach(n => {
                        null != n.application && e.add(n.application.id);
                    });
                }), i.filter(n => !e.has(n.application.id));
            }, [
                t,
                i
            ]);
        }({
            channel: n,
            recommendationsSections: r
        }), u = a === h.M.FETCHING, d = !u && 0 === r.length;
    return (l.useEffect(() => {
        t(d);
    }, [
        d,
        t
    ]), d) ? null : (0, i.jsx)(i.Fragment, {
        children: u ? w.map((e, n) => {
            let {
                cards: t,
                look: l
            } = e;
            return (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(j.Z.Loading, {}),
                    (0, i.jsx)('div', {
                        className: D.sectionContentContainer,
                        children: t.map(e => (0, i.jsx)(S.Z, { look: l }, e))
                    })
                ]
            }, n);
        }) : r.map(e => (0, i.jsx)(X, {
            recommendationsSection: e,
            remainingActivities: o
        }, e.key))
    });
}
function X(e) {
    let {
            recommendationsSection: n,
            remainingActivities: t
        } = e, a = n.section_title, r = n.type === o.i.BANNER_CARDS ? R.U4.LARGE_BANNER : R.U4.NO_BANNER, s = l.useMemo(() => {
            let e = n.items.map(e => {
                let {
                    application: n,
                    is_partner: t
                } = e;
                return {
                    application: n,
                    isPartner: t
                };
            });
            return n.appends_remaining_activities && e.push(...t.map(e => {
                let {application: n} = e;
                return { application: n };
            })), e;
        }, [
            n.items,
            n.appends_remaining_activities,
            t
        ]), c = n.key, {
            items: u,
            handleViewMore: d
        } = q(a, r, s, 8, c);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, {
                title: n.section_title,
                onClickViewMore: d
            }),
            (0, i.jsx)('div', {
                className: D.sectionContentContainer,
                children: u.map((e, n) => {
                    let {
                        application: t,
                        isPartner: l
                    } = e;
                    return (0, i.jsx)(R.kA, {
                        application: t,
                        look: r,
                        isPartner: l,
                        sectionName: c,
                        resultsPosition: n,
                        location: x.Vh.APP_LAUNCHER_HOME
                    }, t.id);
                })
            })
        ]
    });
}
function Q(e) {
    let [n, t] = l.useState(!e);
    return [
        n,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t(e);
        }, [])
    ];
}
function q(e, n, t, i, a) {
    let {pushHistory: r} = (0, L.hH)();
    return l.useMemo(() => t.length <= i ? {
        items: t,
        handleViewMore: void 0
    } : {
        items: t.slice(0, i),
        handleViewMore: () => {
            (0, A.yw)(Z.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: a,
                source: g.Z.entrypoint()
            }), r({
                type: L.gc.LIST,
                title: e,
                look: n,
                items: t,
                sectionName: a
            });
        }
    }, [
        t,
        i,
        a,
        r,
        e,
        n
    ]);
}
