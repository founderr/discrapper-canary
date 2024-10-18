t.d(n, {
    Z: function () {
        return G;
    }
}),
    t(47120),
    t(653041),
    t(724458);
var i = t(735250),
    a = t(470079),
    l = t(392711),
    o = t.n(l),
    r = t(892814),
    s = t(79411),
    c = t(442837),
    d = t(481060),
    u = t(911969),
    m = t(115130),
    p = t(566620),
    _ = t(127255),
    C = t(880308),
    h = t(427996),
    f = t(367907),
    A = t(399654),
    E = t(844439),
    N = t(254711),
    v = t(213459),
    x = t(10718),
    I = t(895924),
    P = t(148958),
    g = t(835473),
    L = t(541099),
    T = t(827498),
    b = t(87005),
    S = t(106066),
    R = t(783097),
    M = t(695676),
    y = t(98880),
    j = t(804307),
    O = t(888617),
    Z = t(561160),
    H = t(41558),
    U = t(105862),
    D = t(28147),
    B = t(981631),
    k = t(689079),
    w = t(689938),
    V = t(597976);
let W = [],
    F = [, , , ,].fill(0).map((e, n) => n),
    Y = [
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: y.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: y.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: y.U4.ROW
        }
    ];
function G(e) {
    let { channel: n, entrypoint: t, searchQuery: l, setSearchQuery: o, setScroller: r, isScrollCloseToBottom: s } = e,
        u = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []),
        _ = t === T._b.TEXT && !n.isPrivate(),
        C = (0, R.Yn)(t),
        h = !(0, R.Yn)(t),
        f = t === T._b.TEXT,
        [A, E] = ee(!0),
        [N, v] = ee(_),
        [x, I] = ee(C),
        [P, g] = ee(h),
        L = A && N && x && P,
        b = (C || _) && !L,
        S = h && u;
    a.useEffect(() => {
        (0, p.w1)({
            guildId: n.guild_id,
            force: !0
        });
    }, [n.guild_id]),
        a.useEffect(() => {
            t === T._b.VOICE && p.ux();
        }, [t]);
    let M = l.length > 0;
    return (0, i.jsxs)('div', {
        className: V.container,
        children: [
            S ? (0, i.jsx)(z, {}) : null,
            (0, i.jsx)(q, {
                searchQuery: l,
                setSearchQuery: o,
                placeholder: f ? w.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : w.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
            }),
            (0, i.jsx)(d.Scroller, {
                ref: r,
                className: V.scrollableContent,
                fade: !0,
                children: M
                    ? (0, i.jsx)(D.Z, {
                          channel: n,
                          query: l,
                          entrypoint: t,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(J, {
                                  channel: n,
                                  entrypoint: t,
                                  onEmptyState: E
                              }),
                              _ &&
                                  (0, i.jsx)(X, {
                                      channel: n,
                                      onEmptyState: v
                                  }),
                              C &&
                                  (0, i.jsx)(K, {
                                      channel: n,
                                      entrypoint: t,
                                      onEmptyState: I
                                  }),
                              h &&
                                  (0, i.jsx)(Q, {
                                      channel: n,
                                      onEmptyState: g
                                  }),
                              L &&
                                  (0, i.jsx)(Z.A, {
                                      type: T.LG.HOME_EMPTY,
                                      textContent: t === T._b.TEXT ? w.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : w.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
                                  }),
                              b && (0, i.jsx)(U.Z, {})
                          ]
                      })
            })
        ]
    });
}
function z() {
    return (0, i.jsxs)('div', {
        className: V.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(d.Text, {
                className: V.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: w.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
            }),
            (0, i.jsx)(h.W, { hideSearch: !0 })
        ]
    });
}
function q(e) {
    let { searchQuery: n, setSearchQuery: t, placeholder: l } = e,
        r = a.useRef(null),
        [s, c] = a.useState(!1),
        u = a.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, f.yw)(B.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: L.Z.entrypoint(),
                            location: I.Vh.APP_LAUNCHER_HOME
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        ),
        m = a.useCallback(() => t(''), [t]),
        p = a.useCallback(() => {
            c(!0),
                (0, f.yw)(B.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: L.Z.entrypoint(),
                    location: I.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        _ = a.useCallback(() => {
            c(!1);
        }, []),
        C = a.useCallback(
            (e) => {
                !s && p(), t(e), u(e);
            },
            [s, t, p, u]
        );
    return (
        a.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let n = () => {
                !s && p();
            };
            return (
                e.addEventListener('click', n),
                () => {
                    e.removeEventListener('click', n);
                }
            );
        }, [s, p]),
        (0, i.jsx)('div', {
            className: V.searchBarContainer,
            children: (0, i.jsx)(d.SearchBar, {
                ref: (e) => {
                    var n;
                    r.current = null !== (n = null == e ? void 0 : e.containerRef.current) && void 0 !== n ? n : null;
                },
                placeholder: l,
                query: n,
                onChange: C,
                onClear: m,
                size: d.SearchBar.Sizes.MEDIUM,
                onFocus: _,
                autoFocus: !0
            })
        })
    );
}
function J(e) {
    let { channel: n, entrypoint: t, onEmptyState: l } = e,
        o = t === T._b.VOICE,
        { frecentApps: r, loading: s } = (0, b.f)({
            channel: n,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        c = a.useMemo(() => {
            let e = [];
            for (let n of r) null != n.application && e.push({ application: n.application });
            return e;
        }, [r]),
        d = w.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER,
        u = d;
    o && (u = w.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_ACTIVITIES);
    let { items: m, handleViewMore: p } = en({
        title: u,
        look: t === T._b.VOICE ? y.U4.LARGE_BANNER : y.U4.ROW,
        items: c,
        limit: 8,
        sectionName: T.L3.RECENT_APPS
    });
    a.useEffect(() => {
        if (!0 !== s.current)
            0 !== m.length &&
                (0, f.yw)(B.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: m.length,
                    section_name: T.L3.RECENT_APPS,
                    location: T.G0.HOME,
                    source: t
                });
    }, [m.length, t, s]);
    let _ = s.current,
        C = !_ && 0 === m.length;
    return (a.useEffect(() => {
        l(C);
    }, [C, l]),
    !(function (e) {
        let { apps: n, onlyActivityApps: t } = e,
            i = a.useMemo(
                () =>
                    t
                        ? n.map((e) => {
                              let { application: n } = e;
                              return n.id;
                          })
                        : [],
                [n, t]
            );
        (0, g.Z)(i);
    })({
        apps: m,
        onlyActivityApps: o
    }),
    _ || C)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(H.Z, {
                      title: d,
                      buttonType: H.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: p
                  }),
                  (0, i.jsx)('div', {
                      className: V.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: V.frecentList,
                          children: m.map((e, t) => {
                              let { application: a } = e;
                              return o
                                  ? (0, i.jsx)(
                                        y.qR,
                                        {
                                            channel: n,
                                            application: a,
                                            look: y.U4.ICON,
                                            location: T.G0.HOME,
                                            sectionName: T.L3.RECENT_APPS,
                                            resultsPosition: t,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        a.id
                                    )
                                  : (0, i.jsx)(
                                        y.kA,
                                        {
                                            application: a,
                                            look: y.U4.ICON,
                                            location: T.G0.HOME,
                                            sectionName: T.L3.RECENT_APPS,
                                            resultsPosition: t
                                        },
                                        a.id
                                    );
                          })
                      })
                  })
              ]
          });
}
function Q(e) {
    let { channel: n, onEmptyState: t } = e;
    (0, C.g)();
    let l = (0, _.Z)({ guildId: n.getGuildId() }),
        o = y.U4.LARGE_BANNER,
        { trackSectionImpressionRef: r } = (0, O.Z)({
            sectionName: T.L3.ACTIVITIES,
            numItems: l.length,
            numVisibleItems: l.length
        }),
        s = (0, S.s)('ActivitiesShelfSection'),
        c = 0 === l.length;
    return (a.useEffect(() => {
        t(c);
    }, [t, c]),
    c)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (r.current = e),
                      children: (0, i.jsx)(H.Z, { title: w.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE })
                  }),
                  (0, i.jsx)('div', {
                      className: V.sectionTwoColumnContentContainer,
                      children: l.map((e, t) => {
                          let { application: a } = e;
                          return (0, i.jsx)(
                              y.qR,
                              {
                                  channel: n,
                                  application: a,
                                  look: o,
                                  location: I.Vh.APP_LAUNCHER_HOME,
                                  sectionName: T.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !s,
                                  fetchesApplication: !1
                              },
                              a.id
                          );
                      })
                  })
              ]
          });
}
function X(e) {
    var n;
    let { channel: t, onEmptyState: l } = e,
        r = (0, v.LD)(t.guild_id, !0),
        { commandsByActiveSection: s, loading: c } = x.wi({
            channel: t,
            filters: {
                commandTypes: [u.yU.CHAT, u.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: k.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        d = a.useMemo(
            () =>
                s.reduce((e, n) => {
                    let { section: t, data: i } = n;
                    return i.length > 0 && e.add(t.id), e;
                }, new Set()),
            [s]
        ),
        m = a.useMemo(() => {
            var e, n;
            return Object.values(null !== (n = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {})
                .map((e) => {
                    let { descriptor: n } = e;
                    return n;
                })
                .filter((e) => !(e.id in N.Tm) && d.has(e.id));
        }, [null === (n = r.result) || void 0 === n ? void 0 : n.sections, d]),
        p = (0, P.h)(m),
        _ = T.L3.APPS_IN_THIS_SERVER,
        C = a.useMemo(
            () =>
                o()
                    .compact(
                        p.map((e) => {
                            let { application: n } = e;
                            return n;
                        })
                    )
                    .map((e) => ({ application: e })),
            [p]
        ),
        { items: h, handleViewMore: f } = en({
            title: w.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
            look: y.U4.ROW,
            items: C,
            limit: 4,
            sectionName: _
        }),
        { trackSectionImpressionRef: A } = (0, O.Z)({
            sectionName: _,
            numItems: C.length,
            numVisibleItems: h.length
        }),
        E = r.fetchState.fetching || c.current,
        g = !E && 0 === h.length;
    return (a.useEffect(() => {
        l(g);
    }, [g, l]),
    g)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (A.current = e),
                      children: (0, i.jsx)(H.Z, {
                          title: w.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
                          buttonType: H.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: f
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: V.sectionRowsContentContainer,
                      children: E
                          ? F.map((e) => (0, i.jsx)(j.Z, { look: y.U4.ROW }, e))
                          : h.map((e, n) => {
                                let { application: t } = e;
                                return null != t
                                    ? (0, i.jsx)(
                                          y.kA,
                                          {
                                              application: t,
                                              look: y.U4.ROW,
                                              sectionName: _,
                                              resultsPosition: n,
                                              location: I.Vh.APP_LAUNCHER_HOME
                                          },
                                          t.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function K(e) {
    let { channel: n, entrypoint: t, onEmptyState: l } = e,
        {
            fetchState: o,
            recommendationsSections: s,
            isInstallOnDemand: d
        } = (function (e) {
            let { channel: n, location: t } = e,
                i = n.id;
            a.useEffect(() => {
                (0, A.a)({
                    channelId: i,
                    location: t,
                    withCommands: !1
                });
            }, [i, t]);
            let { sectionDescriptors: l } = x.wi({
                    channel: n,
                    filters: { commandTypes: [u.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: k.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = a.useCallback((e) => !(null != l.find((n) => n.id === e.id)), [l]),
                { fetchState: s, recommendationsSections: d } = (0, c.cj)([E.ZP], () => ({
                    fetchState: E.ZP.getFetchState({
                        channelId: i,
                        location: t,
                        withCommands: !1
                    }),
                    recommendationsSections: E.ZP.getRecommendations({
                        channelId: i,
                        location: t,
                        withCommands: !1
                    })
                })),
                m = t === r.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: s,
                recommendationsSections: a.useMemo(() => (m ? (0, R.pF)(d) : d), [d, m]),
                isInstallOnDemand: o
            };
        })({
            channel: n,
            location: t === T._b.TEXT ? r.I.APP_LAUNCHER_TEXT : r.I.APP_LAUNCHER_VOICE
        }),
        m = (function (e) {
            let { channel: n, recommendationsSections: t } = e;
            (0, C.g)();
            let i = (0, _.Z)({ guildId: n.getGuildId() });
            return a.useMemo(() => {
                if (!t.some((e) => e.appends_remaining_activities)) return W;
                let e = new Set();
                return (
                    t.forEach((n) => {
                        n.items.forEach((n) => {
                            null != n.application && e.add(n.application.id);
                        });
                    }),
                    i.filter((n) => !e.has(n.application.id))
                );
            }, [t, i]);
        })({
            channel: n,
            recommendationsSections: s
        }),
        p = o === E.M.FETCHING,
        h = !p && 0 === s.length;
    return (a.useEffect(() => {
        l(h);
    }, [h, l]),
    h)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: p
                  ? Y.map((e, n) => {
                        let { cards: t, look: a } = e;
                        return (0, i.jsxs)(
                            'div',
                            {
                                children: [
                                    (0, i.jsx)(H.Z.Loading, {}),
                                    (0, i.jsx)('div', {
                                        className: a === y.U4.ROW ? V.sectionRowsContentContainer : V.sectionTwoColumnContentContainer,
                                        children: t.map((e) => (0, i.jsx)(j.Z, { look: a }, e))
                                    })
                                ]
                            },
                            n
                        );
                    })
                  : s.map((e, n) =>
                        (0, i.jsx)(
                            $,
                            {
                                recommendationsSection: e,
                                remainingActivities: m,
                                isInstallOnDemand: d,
                                position: n
                            },
                            e.key
                        )
                    )
          });
}
function $(e) {
    let n,
        t,
        { recommendationsSection: l, remainingActivities: o, isInstallOnDemand: r, position: c } = e,
        d = l.section_title;
    switch (l.type) {
        case s.i.BANNER_CARDS:
            n = y.U4.LARGE_BANNER;
            break;
        case s.i.SMALL_BANNER_CARDS:
            n = y.U4.MEDIUM_BANNER;
            break;
        default:
            n = y.U4.ROW;
    }
    let u = a.useMemo(() => {
            let e = l.items.map((e) => {
                let { application: n } = e;
                return {
                    application: n,
                    installOnDemand: r(n)
                };
            });
            return (
                l.appends_remaining_activities &&
                    e.push(
                        ...o.map((e) => {
                            let { application: n } = e;
                            return {
                                application: n,
                                installOnDemand: !0
                            };
                        })
                    ),
                e
            );
        }, [l.items, l.appends_remaining_activities, r, o]),
        m = l.key;
    switch (l.type) {
        case s.i.BANNER_CARDS:
        case s.i.SMALL_BANNER_CARDS:
            t = 6;
            break;
        case s.i.EXPANDABLE_LIST:
        default:
            t = 4;
    }
    let { items: p, handleViewMore: _ } = en({
            title: d,
            look: n,
            items: u,
            limit: t,
            sectionName: m,
            sectionOverallPosition: c
        }),
        { trackSectionImpressionRef: C } = (0, O.Z)({
            sectionName: m,
            numItems: u.length,
            numVisibleItems: p.length
        }),
        h = l.type !== s.i.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (C.current = e),
                children: (0, i.jsx)(H.Z, {
                    title: l.section_title,
                    buttonType: H.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: _
                })
            }),
            (0, i.jsx)('div', {
                className: n === y.U4.ROW ? V.sectionRowsContentContainer : V.sectionTwoColumnContentContainer,
                children: p.map((e, t) => {
                    let { application: a, installOnDemand: l } = e;
                    return (0, i.jsx)(
                        y.kA,
                        {
                            application: a,
                            look: n,
                            sectionName: m,
                            resultsPosition: t,
                            location: I.Vh.APP_LAUNCHER_HOME,
                            installOnDemand: l,
                            enableVideoBanner: h,
                            sectionOverallPosition: c
                        },
                        a.id
                    );
                })
            })
        ]
    });
}
function ee(e) {
    let [n, t] = a.useState(!e);
    return [
        n,
        a.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t(e);
        }, [])
    ];
}
function en(e) {
    let { title: n, look: t, items: i, limit: l, sectionName: o, sectionOverallPosition: r } = e,
        { pushHistory: s } = (0, M.hH)();
    return a.useMemo(
        () =>
            i.length <= l
                ? {
                      items: i,
                      handleViewMore: void 0
                  }
                : {
                      items: i.slice(0, l),
                      handleViewMore: () => {
                          (0, f.yw)(B.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: L.Z.entrypoint(),
                              num: i.length
                          }),
                              s({
                                  type: M.gc.LIST,
                                  title: n,
                                  look: t,
                                  items: i,
                                  sectionName: o,
                                  sectionOverallPosition: r
                              });
                      }
                  },
        [i, l, o, s, n, t, r]
    );
}
