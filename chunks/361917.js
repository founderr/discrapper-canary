t.d(n, {
    Z: function () {
        return F;
    }
}), t(47120), t(653041), t(724458);
var i = t(735250), l = t(470079), a = t(392711), r = t.n(a), s = t(892814), o = t(79411), c = t(442837), u = t(481060), d = t(911969), m = t(595519), E = t(115130), _ = t(566620), p = t(127255), A = t(880308), N = t(427996), h = t(367907), C = t(399654), f = t(844439), I = t(254711), v = t(213459), x = t(10718), T = t(895924), P = t(148958), g = t(424602), M = t(541099), L = t(827498), R = t(87005), S = t(695676), O = t(98880), j = t(804307), b = t(561160), y = t(41558), Z = t(105862), H = t(28147), U = t(981631), D = t(689079), k = t(689938), B = t(678313);
let w = [], V = Array(8).fill(0).map((e, n) => n), W = [
        {
            cards: [
                ,
                ,
                ,
                ,
            ].fill(0).map((e, n) => n),
            look: O.U4.LARGE_BANNER
        },
        {
            cards: Array(8).fill(0).map((e, n) => n),
            look: O.U4.NO_BANNER
        },
        {
            cards: [
                ,
                ,
                ,
                ,
            ].fill(0).map((e, n) => n),
            look: O.U4.NO_BANNER
        }
    ];
function F(e) {
    let {
            channel: n,
            entrypoint: t,
            searchQuery: a,
            setSearchQuery: r,
            setScroller: s
        } = e, o = (0, m.NX)(n.id, !0), d = (0, c.e7)([E.Z], () => E.Z.getIsEnabled(), []), p = t === L._b.TEXT, A = t === L._b.TEXT, N = t === L._b.TEXT, h = t === L._b.VOICE, C = t === L._b.TEXT, [f, I] = J(p), [v, x] = J(A), [T, P] = J(N), [g, M] = J(N), R = f && v && T && g, S = (N || A) && !R, O = h && d;
    l.useEffect(() => {
        o && (0, _.w1)({
            guildId: n.getGuildId(),
            force: !0
        });
    }, [
        o,
        n
    ]);
    let j = a.length > 0;
    return (0, i.jsxs)('div', {
        className: B.container,
        children: [
            O ? (0, i.jsx)(Y, {}) : null,
            (0, i.jsx)(G, {
                searchQuery: a,
                setSearchQuery: r,
                placeholder: C ? k.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : k.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
            }),
            (0, i.jsx)(u.Scroller, {
                ref: s,
                className: B.scrollableContent,
                fade: !0,
                children: j ? (0, i.jsx)('div', {
                    children: (0, i.jsx)(H.Z, {
                        channel: n,
                        query: a,
                        entrypoint: t,
                        enableGlobalSearch: t === L._b.TEXT,
                        enableActivitiesSearch: o
                    })
                }) : (0, i.jsxs)('div', {
                    children: [
                        p && (0, i.jsx)(z, {
                            channel: n,
                            entrypoint: t,
                            onEmptyState: I
                        }),
                        A && (0, i.jsx)(Q, {
                            channel: n,
                            onEmptyState: x
                        }),
                        N && (0, i.jsx)(q, {
                            channel: n,
                            onEmptyState: P
                        }),
                        h && (0, i.jsx)(X, {
                            channel: n,
                            onEmptyState: M
                        }),
                        R && (0, i.jsx)(b.A, {
                            type: L.LG.HOME_EMPTY,
                            textContent: t === L._b.TEXT ? k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
                        }),
                        S && (0, i.jsx)(Z.Z, {})
                    ]
                })
            })
        ]
    });
}
function Y() {
    return (0, i.jsxs)('div', {
        className: B.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(u.Text, {
                className: B.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: k.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
            }),
            (0, i.jsx)(N.W, { hideSearch: !0 })
        ]
    });
}
function G(e) {
    let {
            searchQuery: n,
            setSearchQuery: t,
            placeholder: a
        } = e, [s, o] = l.useState(!0), [c, d] = l.useState(!1), m = l.useMemo(() => r().debounce(e => {
            (0, h.yw)(U.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                query: e,
                source: M.Z.entrypoint(),
                location: T.Vh.APP_LAUNCHER_HOME
            });
        }, 400, {
            leading: !1,
            trailing: !0
        }), []), E = l.useCallback(() => t(''), [t]), _ = l.useCallback(() => {
            d(!0), (0, h.yw)(U.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                source: M.Z.entrypoint(),
                location: T.Vh.APP_LAUNCHER_HOME
            });
        }, []), p = l.useCallback(() => {
            if (s) {
                o(!1);
                return;
            }
            _();
        }, [
            s,
            _
        ]), A = l.useCallback(e => {
            !c && _(), t(e), m(e);
        }, [
            c,
            t,
            _,
            m
        ]);
    return (0, i.jsx)('div', {
        className: B.searchBarContainer,
        children: (0, i.jsx)(u.SearchBar, {
            placeholder: a,
            query: n,
            onChange: A,
            onClear: E,
            size: u.SearchBar.Sizes.MEDIUM,
            autoFocus: !0,
            onFocus: p
        })
    });
}
function z(e) {
    let {
            channel: n,
            entrypoint: t,
            onEmptyState: a
        } = e, {
            frecentApps: r,
            loading: s
        } = (0, R.f)(n, !0), o = l.useMemo(() => {
            let e = [];
            for (let n of r)
                null != n.application && e.push({
                    application: n.application,
                    isPartner: !1
                });
            return e;
        }, [r]), c = k.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
            items: u,
            handleViewMore: d
        } = K(c, t === L._b.VOICE ? O.U4.LARGE_BANNER : O.U4.NO_BANNER, o, 8, L.L3.RECENT_APPS);
    l.useEffect(() => {
        if (!0 !== s.current)
            0 !== u.length && (0, h.yw)(U.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: u.length,
                section_name: L.L3.RECENT_APPS,
                location: L.G0.HOME,
                source: t
            });
    }, [
        u.length,
        t,
        s
    ]);
    let m = s.current, E = !m && 0 === u.length;
    return (l.useEffect(() => {
        a(E);
    }, [
        E,
        a
    ]), m || E) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(y.Z, {
                title: c,
                buttonType: y.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: d
            }),
            (0, i.jsx)('div', {
                className: B.sectionContentContainer,
                children: (0, i.jsx)('div', {
                    className: B.frecentList,
                    children: u.map(e => {
                        let {
                            application: n,
                            isPartner: t
                        } = e;
                        return (0, i.jsx)(O.kA, {
                            application: n,
                            look: O.U4.ICON,
                            isPartner: t,
                            location: L.G0.HOME
                        }, n.id);
                    })
                })
            })
        ]
    });
}
function X(e) {
    let {
        channel: n,
        onEmptyState: t
    } = e;
    (0, A.g)();
    let a = (0, p.Z)({
            guildId: n.getGuildId(),
            channel: n
        }), r = O.U4.LARGE_BANNER, {clickOnHomeActivityOpensAppDetail: s} = g.m1.getCurrentConfig({ location: 'ActivitiesShelfSection' }, { autoTrackExposure: !1 }), o = 0 === a.length;
    return (l.useEffect(() => {
        t(o);
    }, [
        t,
        o
    ]), o) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(y.Z, { title: k.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
            (0, i.jsx)('div', {
                className: B.sectionContentContainer,
                children: a.map(e => {
                    let {application: t} = e;
                    return (0, i.jsx)(O.qR, {
                        channel: n,
                        application: t,
                        look: r,
                        location: T.Vh.APP_LAUNCHER_HOME,
                        sectionName: L.L3.ACTIVITIES,
                        isOneClickCTA: !s
                    }, t.id);
                })
            })
        ]
    });
}
function Q(e) {
    var n;
    let {
            channel: t,
            onEmptyState: a
        } = e, s = (0, v.LD)(t.guild_id, !0), {
            commandsByActiveSection: o,
            loading: c
        } = x.wi(t, { commandType: d.yU.CHAT }, {
            placeholderCount: 0,
            limit: D.tn,
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
            }).filter(e => !(e.id in I.Tm) && u.has(e.id));
        }, [
            null === (n = s.result) || void 0 === n ? void 0 : n.sections,
            u
        ]), E = (0, P.h)(m), _ = L.L3.APPS_IN_THIS_SERVER, p = l.useMemo(() => r().compact(E.map(e => {
            let {application: n} = e;
            return n;
        })).map(e => ({ application: e })), [E]), {
            items: A,
            handleViewMore: N
        } = K(k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, O.U4.NO_BANNER, p, 8, _), h = s.fetchState.fetching || c.current, C = !h && 0 === A.length;
    return (l.useEffect(() => {
        a(C);
    }, [
        C,
        a
    ]), C) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(y.Z, {
                title: k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
                buttonType: y.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: N
            }),
            (0, i.jsx)('div', {
                className: B.sectionContentContainer,
                children: h ? V.map(e => (0, i.jsx)(j.Z, { look: O.U4.NO_BANNER }, e)) : A.map((e, n) => {
                    let {
                        application: t,
                        isPartner: l
                    } = e;
                    return null != t ? (0, i.jsx)(O.kA, {
                        application: t,
                        isPartner: l,
                        look: O.U4.NO_BANNER,
                        sectionName: _,
                        resultsPosition: n,
                        location: T.Vh.APP_LAUNCHER_HOME
                    }, t.id) : null;
                })
            })
        ]
    });
}
function q(e) {
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
                (0, C.$)({
                    channelId: n,
                    location: t
                });
            }, [
                n,
                t
            ]);
            let [i, a] = (0, c.Wu)([f.Z], () => [
                f.Z.getFetchState({
                    channelId: n,
                    location: t
                }),
                f.Z.getRecommendations({
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
            (0, A.g)();
            let i = (0, p.Z)({
                guildId: n.getGuildId(),
                channel: n
            });
            return l.useMemo(() => {
                if (!t.some(e => e.appends_remaining_activities))
                    return w;
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
        }), u = a === f.M.FETCHING, d = !u && 0 === r.length;
    return (l.useEffect(() => {
        t(d);
    }, [
        d,
        t
    ]), d) ? null : (0, i.jsx)(i.Fragment, {
        children: u ? W.map((e, n) => {
            let {
                cards: t,
                look: l
            } = e;
            return (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(y.Z.Loading, {}),
                    (0, i.jsx)('div', {
                        className: B.sectionContentContainer,
                        children: t.map(e => (0, i.jsx)(j.Z, { look: l }, e))
                    })
                ]
            }, n);
        }) : r.map(e => (0, i.jsx)($, {
            recommendationsSection: e,
            remainingActivities: o
        }, e.key))
    });
}
function $(e) {
    let {
            recommendationsSection: n,
            remainingActivities: t
        } = e, a = n.section_title, r = n.type === o.i.BANNER_CARDS ? O.U4.LARGE_BANNER : O.U4.NO_BANNER, s = l.useMemo(() => {
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
        } = K(a, r, s, 8, c);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(y.Z, {
                title: n.section_title,
                buttonType: y.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: d
            }),
            (0, i.jsx)('div', {
                className: B.sectionContentContainer,
                children: u.map((e, n) => {
                    let {
                        application: t,
                        isPartner: l
                    } = e;
                    return (0, i.jsx)(O.kA, {
                        application: t,
                        look: r,
                        isPartner: l,
                        sectionName: c,
                        resultsPosition: n,
                        location: T.Vh.APP_LAUNCHER_HOME
                    }, t.id);
                })
            })
        ]
    });
}
function J(e) {
    let [n, t] = l.useState(!e);
    return [
        n,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t(e);
        }, [])
    ];
}
function K(e, n, t, i, a) {
    let {pushHistory: r} = (0, S.hH)();
    return l.useMemo(() => t.length <= i ? {
        items: t,
        handleViewMore: void 0
    } : {
        items: t.slice(0, i),
        handleViewMore: () => {
            (0, h.yw)(U.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: a,
                source: M.Z.entrypoint()
            }), r({
                type: S.gc.LIST,
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
