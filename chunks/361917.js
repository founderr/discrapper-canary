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
    x = t(213459),
    v = t(10718),
    I = t(895924),
    g = t(148958),
    P = t(835473),
    L = t(541099),
    S = t(827498),
    T = t(87005),
    b = t(106066),
    R = t(783097),
    M = t(695676),
    j = t(98880),
    y = t(804307),
    O = t(888617),
    Z = t(561160),
    H = t(41558),
    U = t(105862),
    B = t(28147),
    D = t(981631),
    k = t(689079),
    w = t(689938),
    V = t(597976);
let W = [],
    F = [, , , ,].fill(0).map((e, n) => n),
    Y = [
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: j.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: j.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: j.U4.ROW
        }
    ];
function G(e) {
    let { channel: n, entrypoint: t, searchQuery: l, setSearchQuery: o, setScroller: r, isScrollCloseToBottom: s } = e,
        u = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []),
        _ = t === S._b.TEXT && !n.isPrivate(),
        C = (0, R.Yn)(t),
        h = !(0, R.Yn)(t),
        f = t === S._b.TEXT,
        [A, E] = ee(!0),
        [N, x] = ee(_),
        [v, I] = ee(C),
        [g, P] = ee(h),
        L = A && N && v && g,
        T = (C || _) && !L,
        b = h && u;
    a.useEffect(() => {
        (0, p.w1)({
            guildId: n.guild_id,
            force: !0
        });
    }, [n.guild_id]),
        a.useEffect(() => {
            t === S._b.VOICE && p.ux();
        }, [t]);
    let M = l.length > 0;
    return (0, i.jsxs)('div', {
        className: V.container,
        children: [
            b ? (0, i.jsx)(z, {}) : null,
            (0, i.jsx)(J, {
                searchQuery: l,
                setSearchQuery: o,
                placeholder: f ? w.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : w.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
            }),
            (0, i.jsx)(d.Scroller, {
                ref: r,
                className: V.scrollableContent,
                fade: !0,
                children: M
                    ? (0, i.jsx)(B.Z, {
                          channel: n,
                          query: l,
                          entrypoint: t,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(X, {
                                  channel: n,
                                  entrypoint: t,
                                  onEmptyState: E
                              }),
                              _ &&
                                  (0, i.jsx)(Q, {
                                      channel: n,
                                      onEmptyState: x
                                  }),
                              C &&
                                  (0, i.jsx)(K, {
                                      channel: n,
                                      entrypoint: t,
                                      onEmptyState: I
                                  }),
                              h &&
                                  (0, i.jsx)(q, {
                                      channel: n,
                                      onEmptyState: P
                                  }),
                              L &&
                                  (0, i.jsx)(Z.A, {
                                      type: S.LG.HOME_EMPTY,
                                      textContent: t === S._b.TEXT ? w.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : w.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
                                  }),
                              T && (0, i.jsx)(U.Z, {})
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
function J(e) {
    let { searchQuery: n, setSearchQuery: t, placeholder: l } = e,
        r = a.useRef(null),
        [s, c] = a.useState(!1),
        u = a.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, f.yw)(D.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
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
                (0, f.yw)(D.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
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
function X(e) {
    let { channel: n, entrypoint: t, onEmptyState: l } = e,
        o = t === S._b.VOICE,
        { frecentApps: r, loading: s } = (0, T.f)(n, o),
        c = a.useMemo(() => {
            let e = [];
            for (let n of r) null != n.application && e.push({ application: n.application });
            return e;
        }, [r]),
        d = w.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER,
        u = d;
    o && (u = w.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_ACTIVITIES);
    let { items: m, handleViewMore: p } = en(u, t === S._b.VOICE ? j.U4.LARGE_BANNER : j.U4.ROW, c, 8, S.L3.RECENT_APPS);
    a.useEffect(() => {
        if (!0 !== s.current)
            0 !== m.length &&
                (0, f.yw)(D.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: m.length,
                    section_name: S.L3.RECENT_APPS,
                    location: S.G0.HOME,
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
        (0, P.Z)(i);
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
                                        j.qR,
                                        {
                                            channel: n,
                                            application: a,
                                            look: j.U4.ICON,
                                            location: S.G0.HOME,
                                            sectionName: S.L3.RECENT_APPS,
                                            resultsPosition: t,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        a.id
                                    )
                                  : (0, i.jsx)(
                                        j.kA,
                                        {
                                            application: a,
                                            look: j.U4.ICON,
                                            location: S.G0.HOME,
                                            sectionName: S.L3.RECENT_APPS,
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
function q(e) {
    let { channel: n, onEmptyState: t } = e;
    (0, C.g)();
    let l = (0, _.Z)({ guildId: n.getGuildId() }),
        o = j.U4.LARGE_BANNER,
        { trackSectionImpressionRef: r } = (0, O.Z)({
            sectionName: S.L3.ACTIVITIES,
            numItems: l.length,
            numVisibleItems: l.length
        }),
        s = (0, b.s)('ActivitiesShelfSection'),
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
                              j.qR,
                              {
                                  channel: n,
                                  application: a,
                                  look: o,
                                  location: I.Vh.APP_LAUNCHER_HOME,
                                  sectionName: S.L3.ACTIVITIES,
                                  resultsPosition: t,
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
function Q(e) {
    var n;
    let { channel: t, onEmptyState: l } = e,
        r = (0, x.LD)(t.guild_id, !0),
        { commandsByActiveSection: s, loading: c } = v.wi(
            t,
            {
                commandTypes: [u.yU.CHAT, u.yU.PRIMARY_ENTRY_POINT]
            },
            {
                placeholderCount: 0,
                limit: k.tn,
                includeFrecency: !0
            }
        ),
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
        p = (0, g.h)(m),
        _ = S.L3.APPS_IN_THIS_SERVER,
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
        { items: h, handleViewMore: f } = en(w.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, j.U4.ROW, C, 4, _),
        { trackSectionImpressionRef: A } = (0, O.Z)({
            sectionName: _,
            numItems: C.length,
            numVisibleItems: h.length
        }),
        E = r.fetchState.fetching || c.current,
        P = !E && 0 === h.length;
    return (a.useEffect(() => {
        l(P);
    }, [P, l]),
    P)
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
                          ? F.map((e) => (0, i.jsx)(y.Z, { look: j.U4.ROW }, e))
                          : h.map((e, n) => {
                                let { application: t } = e;
                                return null != t
                                    ? (0, i.jsx)(
                                          j.kA,
                                          {
                                              application: t,
                                              look: j.U4.ROW,
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
            let { sectionDescriptors: l } = v.wi(
                    n,
                    { commandTypes: [u.yU.CHAT] },
                    {
                        placeholderCount: 0,
                        limit: k.tn,
                        includeFrecency: !0
                    }
                ),
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
            location: t === S._b.TEXT ? r.I.APP_LAUNCHER_TEXT : r.I.APP_LAUNCHER_VOICE
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
                                        className: a === j.U4.ROW ? V.sectionRowsContentContainer : V.sectionTwoColumnContentContainer,
                                        children: t.map((e) => (0, i.jsx)(y.Z, { look: a }, e))
                                    })
                                ]
                            },
                            n
                        );
                    })
                  : s.map((e) =>
                        (0, i.jsx)(
                            $,
                            {
                                recommendationsSection: e,
                                remainingActivities: m,
                                isInstallOnDemand: d
                            },
                            e.key
                        )
                    )
          });
}
function $(e) {
    let n,
        t,
        { recommendationsSection: l, remainingActivities: o, isInstallOnDemand: r } = e,
        c = l.section_title;
    switch (l.type) {
        case s.i.BANNER_CARDS:
            n = j.U4.LARGE_BANNER;
            break;
        case s.i.SMALL_BANNER_CARDS:
            n = j.U4.MEDIUM_BANNER;
            break;
        default:
            n = j.U4.ROW;
    }
    let d = a.useMemo(() => {
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
        u = l.key;
    switch (l.type) {
        case s.i.BANNER_CARDS:
        case s.i.SMALL_BANNER_CARDS:
            t = 6;
            break;
        case s.i.EXPANDABLE_LIST:
        default:
            t = 4;
    }
    let { items: m, handleViewMore: p } = en(c, n, d, t, u),
        { trackSectionImpressionRef: _ } = (0, O.Z)({
            sectionName: u,
            numItems: d.length,
            numVisibleItems: m.length
        }),
        C = l.type !== s.i.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (_.current = e),
                children: (0, i.jsx)(H.Z, {
                    title: l.section_title,
                    buttonType: H.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: p
                })
            }),
            (0, i.jsx)('div', {
                className: n === j.U4.ROW ? V.sectionRowsContentContainer : V.sectionTwoColumnContentContainer,
                children: m.map((e, t) => {
                    let { application: a, installOnDemand: l } = e;
                    return (0, i.jsx)(
                        j.kA,
                        {
                            application: a,
                            look: n,
                            sectionName: u,
                            resultsPosition: t,
                            location: I.Vh.APP_LAUNCHER_HOME,
                            installOnDemand: l,
                            enableVideoBanner: C
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
function en(e, n, t, i, l) {
    let { pushHistory: o } = (0, M.hH)();
    return a.useMemo(
        () =>
            t.length <= i
                ? {
                      items: t,
                      handleViewMore: void 0
                  }
                : {
                      items: t.slice(0, i),
                      handleViewMore: () => {
                          (0, f.yw)(D.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: l,
                              source: L.Z.entrypoint(),
                              num: t.length
                          }),
                              o({
                                  type: M.gc.LIST,
                                  title: e,
                                  look: n,
                                  items: t,
                                  sectionName: l
                              });
                      }
                  },
        [t, i, l, o, e, n]
    );
}
