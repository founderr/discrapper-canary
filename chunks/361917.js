t.d(n, {
    Z: function () {
        return Y;
    }
}), t(47120), t(653041), t(724458);
var i = t(735250), l = t(470079), a = t(392711), r = t.n(a), s = t(892814), o = t(79411), c = t(442837), u = t(481060), d = t(911969), m = t(595519), p = t(115130), _ = t(566620), E = t(127255), h = t(880308), A = t(427996), N = t(367907), f = t(399654), C = t(844439), v = t(254711), I = t(213459), x = t(10718), P = t(895924), T = t(148958), g = t(424602), R = t(541099), S = t(827498), M = t(87005), L = t(695676), j = t(98880), O = t(804307), y = t(888617), b = t(561160), Z = t(41558), H = t(105862), U = t(28147), D = t(981631), k = t(689079), B = t(689938), w = t(678313);
let V = [], W = Array(8).fill(0).map((e, n) => n), F = [
        {
            cards: [
                ,
                ,
                ,
                ,
            ].fill(0).map((e, n) => n),
            look: j.U4.LARGE_BANNER
        },
        {
            cards: Array(8).fill(0).map((e, n) => n),
            look: j.U4.NO_BANNER
        },
        {
            cards: [
                ,
                ,
                ,
                ,
            ].fill(0).map((e, n) => n),
            look: j.U4.NO_BANNER
        }
    ];
function Y(e) {
    let {
            channel: n,
            entrypoint: t,
            searchQuery: a,
            setSearchQuery: r,
            setScroller: s
        } = e, o = (0, m.NX)(n.id, !0), d = (0, c.e7)([p.Z], () => p.Z.getIsEnabled(), []), E = t === S._b.TEXT, h = t === S._b.TEXT, A = t === S._b.TEXT, N = t === S._b.VOICE, f = t === S._b.TEXT, [C, v] = K(E), [I, x] = K(h), [P, T] = K(A), [g, R] = K(N), M = C && I && P && g, L = (A || h) && !M, j = N && d;
    l.useEffect(() => {
        o && (0, _.w1)({
            guildId: n.getGuildId(),
            force: !0
        });
    }, [
        o,
        n
    ]);
    let O = a.length > 0;
    return (0, i.jsxs)('div', {
        className: w.container,
        children: [
            j ? (0, i.jsx)(G, {}) : null,
            (0, i.jsx)(z, {
                searchQuery: a,
                setSearchQuery: r,
                placeholder: f ? B.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : B.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
            }),
            (0, i.jsx)(u.Scroller, {
                ref: s,
                className: w.scrollableContent,
                fade: !0,
                children: O ? (0, i.jsx)('div', {
                    children: (0, i.jsx)(U.Z, {
                        channel: n,
                        query: a,
                        entrypoint: t,
                        enableGlobalSearch: t === S._b.TEXT,
                        enableActivitiesSearch: o
                    })
                }) : (0, i.jsxs)('div', {
                    children: [
                        E && (0, i.jsx)(X, {
                            channel: n,
                            entrypoint: t,
                            onEmptyState: v
                        }),
                        h && (0, i.jsx)(Q, {
                            channel: n,
                            onEmptyState: x
                        }),
                        A && (0, i.jsx)(J, {
                            channel: n,
                            onEmptyState: T
                        }),
                        N && (0, i.jsx)(q, {
                            channel: n,
                            onEmptyState: R
                        }),
                        M && (0, i.jsx)(b.A, {
                            type: S.LG.HOME_EMPTY,
                            textContent: t === S._b.TEXT ? B.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : B.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
                        }),
                        L && (0, i.jsx)(H.Z, {})
                    ]
                })
            })
        ]
    });
}
function G() {
    return (0, i.jsxs)('div', {
        className: w.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(u.Text, {
                className: w.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: B.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
            }),
            (0, i.jsx)(A.W, { hideSearch: !0 })
        ]
    });
}
function z(e) {
    let {
            searchQuery: n,
            setSearchQuery: t,
            placeholder: a
        } = e, [s, o] = l.useState(!0), [c, d] = l.useState(!1), m = l.useMemo(() => r().debounce(e => {
            (0, N.yw)(D.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                query: e,
                source: R.Z.entrypoint(),
                location: P.Vh.APP_LAUNCHER_HOME
            });
        }, 400, {
            leading: !1,
            trailing: !0
        }), []), p = l.useCallback(() => t(''), [t]), _ = l.useCallback(() => {
            d(!0), (0, N.yw)(D.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                source: R.Z.entrypoint(),
                location: P.Vh.APP_LAUNCHER_HOME
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
        ]), h = l.useCallback(e => {
            !c && _(), t(e), m(e);
        }, [
            c,
            t,
            _,
            m
        ]);
    return (0, i.jsx)('div', {
        className: w.searchBarContainer,
        children: (0, i.jsx)(u.SearchBar, {
            placeholder: a,
            query: n,
            onChange: h,
            onClear: p,
            size: u.SearchBar.Sizes.MEDIUM,
            autoFocus: !0,
            onFocus: E
        })
    });
}
function X(e) {
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
        }, [r]), c = B.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
            items: u,
            handleViewMore: d
        } = ee(c, t === S._b.VOICE ? j.U4.LARGE_BANNER : j.U4.NO_BANNER, o, 8, S.L3.RECENT_APPS);
    l.useEffect(() => {
        if (!0 !== s.current)
            0 !== u.length && (0, N.yw)(D.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: u.length,
                section_name: S.L3.RECENT_APPS,
                location: S.G0.HOME,
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
            (0, i.jsx)(Z.Z, {
                title: c,
                buttonType: Z.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: d
            }),
            (0, i.jsx)('div', {
                className: w.sectionContentContainer,
                children: (0, i.jsx)('div', {
                    className: w.frecentList,
                    children: u.map((e, n) => {
                        let {
                            application: t,
                            isPartner: l
                        } = e;
                        return (0, i.jsx)(j.kA, {
                            application: t,
                            look: j.U4.ICON,
                            isPartner: l,
                            location: S.G0.HOME,
                            sectionName: S.L3.RECENT_APPS,
                            resultsPosition: n
                        }, t.id);
                    })
                })
            })
        ]
    });
}
function q(e) {
    let {
        channel: n,
        onEmptyState: t
    } = e;
    (0, h.g)();
    let a = (0, E.Z)({
            guildId: n.getGuildId(),
            channel: n
        }), r = j.U4.LARGE_BANNER, {trackSectionImpressionRef: s} = (0, y.Z)({
            sectionName: S.L3.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length
        }), {clickOnHomeActivityOpensAppDetail: o} = g.m1.getCurrentConfig({ location: 'ActivitiesShelfSection' }, { autoTrackExposure: !1 }), c = 0 === a.length;
    return (l.useEffect(() => {
        t(c);
    }, [
        t,
        c
    ]), c) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: e => s.current = e,
                children: (0, i.jsx)(Z.Z, { title: B.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE })
            }),
            (0, i.jsx)('div', {
                className: w.sectionContentContainer,
                children: a.map((e, t) => {
                    let {application: l} = e;
                    return (0, i.jsx)(j.qR, {
                        channel: n,
                        application: l,
                        look: r,
                        location: P.Vh.APP_LAUNCHER_HOME,
                        sectionName: S.L3.ACTIVITIES,
                        resultsPosition: t,
                        isOneClickCTA: !o
                    }, l.id);
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
        } = e, s = (0, I.LD)(t.guild_id, !0), {
            commandsByActiveSection: o,
            loading: c
        } = x.wi(t, { commandType: d.yU.CHAT }, {
            placeholderCount: 0,
            limit: k.tn,
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
            }).filter(e => !(e.id in v.Tm) && u.has(e.id));
        }, [
            null === (n = s.result) || void 0 === n ? void 0 : n.sections,
            u
        ]), p = (0, T.h)(m), _ = S.L3.APPS_IN_THIS_SERVER, E = l.useMemo(() => r().compact(p.map(e => {
            let {application: n} = e;
            return n;
        })).map(e => ({ application: e })), [p]), {
            items: h,
            handleViewMore: A
        } = ee(B.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, j.U4.NO_BANNER, E, 8, _), {trackSectionImpressionRef: N} = (0, y.Z)({
            sectionName: _,
            numItems: E.length,
            numVisibleItems: h.length
        }), f = s.fetchState.fetching || c.current, C = !f && 0 === h.length;
    return (l.useEffect(() => {
        a(C);
    }, [
        C,
        a
    ]), C) ? null : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: e => N.current = e,
                children: (0, i.jsx)(Z.Z, {
                    title: B.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
                    buttonType: Z.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: A
                })
            }),
            (0, i.jsx)('div', {
                className: w.sectionContentContainer,
                children: f ? W.map(e => (0, i.jsx)(O.Z, { look: j.U4.NO_BANNER }, e)) : h.map((e, n) => {
                    let {
                        application: t,
                        isPartner: l
                    } = e;
                    return null != t ? (0, i.jsx)(j.kA, {
                        application: t,
                        isPartner: l,
                        look: j.U4.NO_BANNER,
                        sectionName: _,
                        resultsPosition: n,
                        location: P.Vh.APP_LAUNCHER_HOME
                    }, t.id) : null;
                })
            })
        ]
    });
}
function J(e) {
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
                (0, f.$)({
                    channelId: n,
                    location: t
                });
            }, [
                n,
                t
            ]);
            let [i, a] = (0, c.Wu)([C.ZP], () => [
                C.ZP.getFetchState({
                    channelId: n,
                    location: t
                }),
                C.ZP.getRecommendations({
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
            (0, h.g)();
            let i = (0, E.Z)({
                guildId: n.getGuildId(),
                channel: n
            });
            return l.useMemo(() => {
                if (!t.some(e => e.appends_remaining_activities))
                    return V;
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
        }), u = a === C.M.FETCHING, d = !u && 0 === r.length;
    return (l.useEffect(() => {
        t(d);
    }, [
        d,
        t
    ]), d) ? null : (0, i.jsx)(i.Fragment, {
        children: u ? F.map((e, n) => {
            let {
                cards: t,
                look: l
            } = e;
            return (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(Z.Z.Loading, {}),
                    (0, i.jsx)('div', {
                        className: w.sectionContentContainer,
                        children: t.map(e => (0, i.jsx)(O.Z, { look: l }, e))
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
        } = e, a = n.section_title, r = n.type === o.i.BANNER_CARDS ? j.U4.LARGE_BANNER : j.U4.NO_BANNER, s = l.useMemo(() => {
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
        } = ee(a, r, s, 8, c), {trackSectionImpressionRef: m} = (0, y.Z)({
            sectionName: c,
            numItems: s.length,
            numVisibleItems: u.length
        });
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: e => m.current = e,
                children: (0, i.jsx)(Z.Z, {
                    title: n.section_title,
                    buttonType: Z.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: d
                })
            }),
            (0, i.jsx)('div', {
                className: w.sectionContentContainer,
                children: u.map((e, n) => {
                    let {
                        application: t,
                        isPartner: l
                    } = e;
                    return (0, i.jsx)(j.kA, {
                        application: t,
                        look: r,
                        isPartner: l,
                        sectionName: c,
                        resultsPosition: n,
                        location: P.Vh.APP_LAUNCHER_HOME
                    }, t.id);
                })
            })
        ]
    });
}
function K(e) {
    let [n, t] = l.useState(!e);
    return [
        n,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t(e);
        }, [])
    ];
}
function ee(e, n, t, i, a) {
    let {pushHistory: r} = (0, L.hH)();
    return l.useMemo(() => t.length <= i ? {
        items: t,
        handleViewMore: void 0
    } : {
        items: t.slice(0, i),
        handleViewMore: () => {
            (0, N.yw)(D.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: a,
                source: R.Z.entrypoint()
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
