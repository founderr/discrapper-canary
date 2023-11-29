(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94548"], {
        966760: function(e, t, s) {
            s("70102");
            e.exports = function(e, t, s) {
                if ("function" != typeof e) throw TypeError("Expected a function");
                return setTimeout(function() {
                    e.apply(void 0, s)
                }, t)
            }
        },
        474820: function(e, t, s) {
            var a = s("966760"),
                n = s("616601")(function(e, t) {
                    return a(e, 1, t)
                });
            e.exports = n
        },
        714358: function(e, t, s) {
            "use strict";
            e.exports = s.p + "e7c5287d6706ac82b14b.svg"
        },
        112545: function(e, t, s) {
            "use strict";
            e.exports = s.p + "91a0948fc3f2fcdae60b.png"
        },
        600310: function(e, t, s) {
            "use strict";
            e.exports = s.p + "20e943e83204fab6ff33.png"
        },
        129185: function(e, t, s) {
            "use strict";
            e.exports = s.p + "124659e036ed41dd2134.png"
        },
        338283: function(e, t, s) {
            "use strict";
            e.exports = s.p + "fa7ba1d8e3edcce69332.png"
        },
        62e4: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ArrowsUpDownIcon: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(o),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        d: "M16.2929 21.7071C16.6834 22.0976 17.3166 22.0976 17.7071 21.7071L21.7071 17.7071C22.0976 17.3166 22.0976 16.6834 21.7071 16.2929C21.3166 15.9024 20.6834 15.9024 20.2929 16.2929L18 18.5858L18 3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3L16 18.5858L13.7071 16.2929C13.3166 15.9024 12.6834 15.9024 12.2929 16.2929C11.9024 16.6834 11.9024 17.3166 12.2929 17.7071L16.2929 21.7071Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, a.jsx)("path", {
                        d: "M6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289L11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711C11.3166 8.09763 10.6834 8.09763 10.2929 7.70711L8 5.41421L8 21C8 21.5523 7.55228 22 7 22C6.44771 22 6 21.5523 6 21L6 5.41421L3.70711 7.70711C3.31658 8.09763 2.68342 8.09763 2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289L6.29289 2.29289Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })]
                })
            }
        },
        119161: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                makeEmptyTitleError: function() {
                    return u
                },
                makeEmptyMessageError: function() {
                    return d
                },
                makeAutomodViolationError: function() {
                    return c
                },
                renderError: function() {
                    return m
                }
            });
            var a, n, l = s("600798"),
                r = s("782340");

            function i(e, t) {
                return {
                    type: e,
                    message: null != t ? t : null
                }
            }

            function o(e) {
                return i(0, e)
            }

            function u() {
                return i(0, r.default.Messages.FORUM_POST_EMPTY_TITLE_ERROR)
            }

            function d() {
                return i(0, r.default.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR)
            }

            function c(e, t) {
                return i(1, (0, l.getAutomodErrorMessageFromErrorResponse)(e, null == t ? void 0 : t.id))
            }

            function m(e, t) {
                var s;
                return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null !== (s = e.message) && void 0 !== s ? s : null
            }(a = n || (n = {}))[a.EmptyContent = 0] = "EmptyContent", a[a.AutomodViolation = 1] = "AutomodViolation", a[a.EmptyTags = 2] = "EmptyTags"
        },
        713955: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getAllRolesRows: function() {
                    return i
                },
                getAllExistingRolesWithPermission: function() {
                    return o
                }
            });
            var a = s("316693"),
                n = s("454273"),
                l = s("991170");
            let r = (e, t, s) => {
                    if (null == e.id) return !1;
                    let n = l.default.computePermissionsForRoles({
                        forceRoles: {
                            [e.id]: e
                        },
                        context: s
                    });
                    return a.default.has(n, t)
                },
                i = e => null == e.roles ? [] : Object.values(e.roles).sort(n.sortRoles).map(e => (0, n.getRoleRowData)(e)),
                o = (e, t, s) => Object.values(e.roles).filter(e => (0, n.isAdmin)(e) || r(e, s, t))
        },
        706065: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007");
            var a = s("95410"),
                n = s("689988");
            let l = "formGuidelinesStorageKey";
            class r extends n.default {
                _initialize() {
                    let e = a.default.get(l);
                    null != e && (this.seenForumGuidelines = new Set(e))
                }
                _terminate() {
                    a.default.set(l, this.seenForumGuidelines)
                }
                markAsSeen(e) {
                    this.seenForumGuidelines.add(e), a.default.set(l, this.seenForumGuidelines)
                }
                hasSeen(e) {
                    return this.seenForumGuidelines.has(e)
                }
                constructor(...e) {
                    super(...e), this.seenForumGuidelines = new Set
                }
            }
            var i = new r
        },
        146290: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("884691"),
                n = s("471671"),
                l = s("816454"),
                r = s("250850"),
                i = {
                    useForumChannelSeenManager: function(e) {
                        let {
                            guildId: t,
                            channelId: s
                        } = e, i = a.useRef(null), o = (0, l.getMainWindowId)(), u = !n.default.isFocused(o);
                        return a.useLayoutEffect(() => (null == i.current && (i.current = new r.default({
                            guildId: t,
                            channelId: s,
                            isPaused: u,
                            windowId: o
                        }), i.current.initialize()), () => {
                            var e;
                            null === (e = i.current) || void 0 === e || e.terminate(), i.current = null
                        }), [s, t, u, o]), i.current
                    }
                }
        },
        763245: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsForumPostPreviewEnabled: function() {
                    return l
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_forum_post_preview",
                label: "Enable preview of Forum post content before creation",
                defaultConfig: {
                    isEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        isEnabled: !0
                    }
                }]
            });

            function l() {
                let {
                    isEnabled: e
                } = n.useExperiment({
                    location: "forum_post_1"
                }, {
                    autoTrackExposure: !0
                });
                return e
            }
        },
        43836: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsRecentMessageDeleted: function() {
                    return l
                }
            });
            var a = s("446674"),
                n = s("324261");

            function l(e) {
                var t;
                let {
                    loaded: s,
                    message: l
                } = (0, a.useStateFromStores)([n.default], () => n.default.getMessageState(e.id));
                return s && (null !== (t = e.messageCount) && void 0 !== t ? t : 0) > 0 && null == l
            }
        },
        532308: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("448105"),
                l = s.n(n),
                r = s("446674"),
                i = s("77078"),
                o = s("430568"),
                u = s("385976"),
                d = s("547896"),
                c = s("680986"),
                m = s("782340"),
                h = s("224300");
            let f = e => {
                let {
                    tag: t
                } = e, {
                    id: s,
                    name: n,
                    emojiId: l,
                    emojiName: c
                } = t, m = (0, r.useStateFromStores)([u.default], () => null != l ? u.default.getUsableCustomEmojiById(l) : null), f = null != l || null != c;
                return (0, a.jsx)(i.ComboboxItem, {
                    value: s,
                    children: (0, a.jsx)(i.ComboboxItem.Label, {
                        children: (0, a.jsxs)("div", {
                            className: h.row,
                            children: [f ? (0, a.jsx)(o.default, {
                                className: h.emoji,
                                emojiId: l,
                                emojiName: c,
                                animated: !!(null == m ? void 0 : m.animated)
                            }) : (0, a.jsx)(d.default, {
                                className: h.emoji
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                color: "header-secondary",
                                children: n
                            })]
                        })
                    })
                }, s)
            };

            function g(e) {
                let {
                    parentChannel: t,
                    appliedTags: s,
                    maxTagsApplied: n,
                    onSelectTag: r,
                    onClose: o
                } = e, u = (0, c.useVisibleForumTags)(t), d = (e, t) => t.filter(t => l(e.toLowerCase(), t.name.toLowerCase()));
                return (0, a.jsx)(i.ComboboxPopout, {
                    showScrollbar: !0,
                    value: s,
                    onChange: e => {
                        (!n || s.has(e)) && (r(e), o())
                    },
                    placeholder: m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    "aria-label": m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    children: e => d(e, u).map(e => (0, a.jsx)(f, {
                        tag: e
                    }, e.id))
                })
            }
        },
        479273: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return ex
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("474820"),
                o = s.n(i),
                u = s("16470"),
                d = s("974667"),
                c = s("942367"),
                m = s("482402"),
                h = s("446674"),
                f = s("151426"),
                g = s("77078"),
                x = s("264732"),
                C = s("731898"),
                _ = s("206230"),
                S = s("679653"),
                T = s("509802"),
                p = s("406043"),
                E = s("87635"),
                N = s("396856"),
                M = s("549077"),
                A = s("144491"),
                v = s("689275"),
                I = s("707443"),
                j = s("300322"),
                R = s("967241"),
                O = s("982108"),
                F = s("42203"),
                L = s("474643"),
                b = s("88093"),
                P = s("585722"),
                y = s("471671"),
                D = s("837899"),
                U = s("425190"),
                w = s("891152"),
                k = s("423487"),
                H = s("378765"),
                B = s("526812"),
                G = s("404607"),
                V = s("670902"),
                z = s("339792"),
                W = s("680986"),
                K = s("146290"),
                Y = s("250850"),
                X = s("867965"),
                Z = s("688169"),
                q = s("131600"),
                Q = s("912066"),
                J = s("657927"),
                $ = s("152637"),
                ee = s("578198"),
                et = s("530474"),
                es = s("592633"),
                ea = s("968462"),
                en = s("823968"),
                el = s("90625"),
                er = s("363622"),
                ei = s("193695"),
                eo = s("552683"),
                eu = s("589455"),
                ed = s("485055"),
                ec = s("219840"),
                em = s("49111"),
                eh = s("648564"),
                ef = s("782340"),
                eg = s("761953");

            function ex(e) {
                let {
                    channel: t,
                    guild: s,
                    sidebarState: n
                } = e;
                return (0, a.jsx)(ee.ForumPostComposerStoreProvider, {
                    createStore: () => (0, ee.createForumPostComposerStore)(t),
                    children: (0, a.jsx)(eM, {
                        channel: t,
                        guild: s,
                        sidebarState: n
                    })
                }, t.id)
            }
            let eC = new er.GridLayout({
                minWidth: 320,
                maxWidth: 450,
                gap: 16
            });

            function e_(e) {
                return "forum-grid-header-section-".concat(e)
            }
            let eS = (e, t, s) => 0 === e ? 0 : (0, er.getGridPostHeight)(s);

            function eT(e) {
                let {
                    itemRole: t,
                    coords: s,
                    section: n
                } = e;
                return (0, a.jsx)("div", {
                    className: r(eg.card, eg.archivedDividerRow, eg.columnsSpan),
                    style: s,
                    "data-item-role": t,
                    children: (0, a.jsx)("div", {
                        className: eg.emptyMainCard,
                        children: (0, a.jsx)(g.Heading, {
                            variant: "eyebrow",
                            className: eg.archivedDivider,
                            id: e_(n),
                            children: ef.default.Messages.FORUM_SECTION_ARCHIVED
                        })
                    })
                }, "section-divider")
            }

            function ep(e) {
                let {
                    section: t,
                    coords: s,
                    key: n,
                    isShowingSearchResult: l,
                    hasActiveThreads: r
                } = e;
                return () => 2 === t && !l && r ? (0, a.jsx)(eT, {
                    section: t,
                    coords: null == s ? void 0 : {
                        ...s,
                        position: "absolute"
                    },
                    itemRole: "section"
                }, n) : null
            }

            function eE(e, t) {
                return "card-".concat(e, "-").concat(t)
            }

            function eN(e) {
                if ("string" == typeof e) {
                    let t = e.match(/card-{\d+}-({\d+})$/);
                    return null == t ? null : t[1]
                }
                return null
            }

            function eM(e) {
                let {
                    channel: t,
                    sidebarState: s
                } = e, {
                    editorHeight: l,
                    editorAdditionRowHeight: i,
                    listViewCardHeights: o,
                    formOpen: c
                } = (0, ee.useForumPostComposerStore)(e => {
                    let {
                        editorHeight: t,
                        editorAdditionRowHeight: s,
                        listViewCardHeights: a,
                        formOpen: n,
                        cardHeightVersion: l
                    } = e;
                    return {
                        editorHeight: t,
                        editorAdditionRowHeight: s,
                        listViewCardHeights: a,
                        formOpen: n,
                        cardHeightVersion: l
                    }
                }, u.default), {
                    activeThreadIds: f,
                    archivedThreadIds: C,
                    searchResults: S,
                    canLoadMore: T,
                    loadMore: p,
                    activeThreadsLoading: E,
                    archivedThreadsLoading: j,
                    loading: b,
                    isSearchLoading: P,
                    layoutType: y
                } = function(e) {
                    let {
                        sortOrder: t,
                        tagFilter: s,
                        layoutType: a
                    } = (0, z.useForumChannelStore)(e.id), n = (0, W.useForumActiveThreadIds)({
                        channel: e,
                        sortOrder: t,
                        tagFilter: s,
                        shouldAutomaticallyAck: !0
                    }), l = (0, h.useStateFromStores)([v.default], () => !v.default.hasLoaded(e.guild_id)), {
                        threadIds: r,
                        canLoadMore: i,
                        loadMore: o,
                        loading: u
                    } = (0, I.useArchivedThreads)(e, t, s), {
                        searchResults: d,
                        isSearchLoading: c
                    } = (0, W.useForumSearchState)({
                        channelId: e.id
                    });
                    return (0, W.useLoadForumUnreadCounts)(e, t, s), {
                        activeThreadIds: n,
                        archivedThreadIds: r,
                        searchResults: d,
                        canLoadMore: i,
                        loadMore: o,
                        loading: l || u || c,
                        archivedThreadsLoading: u,
                        activeThreadsLoading: l,
                        isSearchLoading: c,
                        layoutType: a
                    }
                }(t), D = f.length > 0, U = D || C.length > 0, w = (0, N.default)(t), {
                    tagFilter: k
                } = (0, z.useForumChannelStore)(t.id);
                (0, W.useAutomaticForumSearch)(t, k, c);
                let H = (0, W.useCanSearchForumPosts)(t),
                    V = (0, W.useCanViewArchivedPosts)(t),
                    Q = n.useRef(null),
                    {
                        observePostVisibilityAnalytics: J
                    } = function(e) {
                        let {
                            guildId: t,
                            channelId: s,
                            scrollerRef: a
                        } = e;
                        K.default.useForumChannelSeenManager({
                            guildId: t,
                            channelId: s
                        });
                        let l = n.useRef(null),
                            r = n.useCallback((e, t) => {
                                for (let s of t) {
                                    let t = s.target.dataset.itemId;
                                    if (null == t) return;
                                    let a = Date.now();
                                    s.intersectionRatio >= .5 ? (0, Y.markForumPostItemAsSeen)(e, t, a) : (0, Y.markForumPostItemAsUnseen)(e, t, a)
                                }
                            }, []);
                        n.useEffect(() => {
                            var e;
                            let t = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerNode();
                            if (null != t) return l.current = new IntersectionObserver(e => r(s, e), {
                                root: t,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: .5
                            }), () => {
                                var e;
                                null === (e = l.current) || void 0 === e || e.disconnect(), l.current = null
                            }
                        }, [s, r, a]);
                        let i = n.useCallback((e, t) => {
                            var a;
                            if (null == e) {
                                (0, Y.markForumPostItemAsUnseen)(s, t, Date.now());
                                return
                            }
                            null === (a = l.current) || void 0 === a || a.observe(e)
                        }, [s]);
                        return {
                            observePostVisibilityAnalytics: i
                        }
                    }({
                        scrollerRef: Q,
                        channelId: t.id,
                        guildId: t.guild_id
                    }),
                    et = y === m.ForumLayout.GRID,
                    en = null != S,
                    el = n.useRef(null),
                    {
                        containerRef: eo,
                        containerWidth: ex
                    } = (0, eu.default)();
                n.useEffect(() => () => {
                    null != t.id && G.default.clearForumSearch(t.id)
                }, [t.id]);
                let {
                    columns: eT
                } = n.useMemo(() => et ? eC.getRenderOptions(ex) : er.ForumListLayoutRenderOptions, [et, ex]), eM = n.useMemo(() => b ? Math.round((window.innerHeight - 200) / 118) : 0, [b]), ej = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
                    return E ? t : 0
                }, [ex, eT, E]), eO = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
                    return j ? t : 0
                }, [ex, eT, j]), eF = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
                    return P && en ? t : 0
                }, [ex, eT, P, en]), eL = n.useMemo(() => {
                    if (et) {
                        if (!H && en) return [1, 0];
                        if (!V) return [1, f.length + ej, 0];
                        else if (en) return [1, S.length + eF, 0];
                        else return [1, f.length + ej, C.length + eO]
                    }
                    if (!H && en) return [1, 1];
                    if (!V) return [1, f.length, 1];
                    else if (en) return [1, S.length, 0, eM];
                    else return [1, f.length, C.length, eM]
                }, [et, en, f.length, C.length, H, V, eM, S, ej, eO, eF]), eb = n.useMemo(() => {
                    if (!H && en) return [
                        [],
                        []
                    ];
                    if (!V) return [
                        [], f, []
                    ];
                    if (en) return [
                        [], S, [],
                        []
                    ];
                    else return [
                        [], f, C, []
                    ]
                }, [en, H, V, S, f, C]), eP = n.useCallback((e, s) => {
                    (0, X.trackForumPostClicked)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: e.id,
                        location: {
                            page: em.AnalyticsPages.GUILD_CHANNEL,
                            section: em.AnalyticsSections.FORUM_CHANNEL_POST
                        }
                    }), s ? (0, A.transitionToThread)(e, eh.OpenThreadAnalyticsLocations.BROWSER) : (el.current = e.id, (0, R.openThreadSidebarForViewing)(e))
                }, [t.guild_id, t.id, el]), [ey, eD] = n.useState(l + i - 24), eU = n.useCallback((e, s, n) => 0 === e ? (0, a.jsx)(eR, {
                    channel: t,
                    isEmpty: !D,
                    isSearchLoading: P,
                    numResults: null == S ? void 0 : S.length,
                    coords: s,
                    onHeightChange: eD,
                    children: !b && (0, a.jsx)(q.default, {
                        channel: t,
                        hasAnyThread: U
                    }, t.id)
                }, "forum-channel-header") : 2 !== e || V ? 1 === e && en && !H ? (0, a.jsx)(ev, {
                    channel: t,
                    coords: s
                }, "archive-or-search-result") : n() : (0, a.jsx)(eA, {
                    channel: t,
                    coords: s
                }, "archived-missing-reading-history-perm"), [en, V, S, H, t, D, P, b, U]), ew = (0, h.useStateFromStores)([B.default], () => B.default.hasHidden(t.id));
                n.useEffect(() => {
                    var e, t;
                    let s = et ? eW : Q,
                        a = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
                    null != a && !ew && a.scrollTop > l && (null === (t = s.current) || void 0 === t || t.scrollTo({
                        to: 0
                    }))
                }, [ew]);
                let ek = (0, Z.useForumActivityExperiment)(t.guild_id),
                    {
                        updateListScrollerRef: eH,
                        renderListSection: eB,
                        renderListItem: eG,
                        getListSectionHeight: eV,
                        getListItemHeight: ez
                    } = function(e) {
                        let {
                            listRef: t,
                            isIncreasedActivityView: s,
                            hasActiveThreads: l,
                            threadIdsBySection: i,
                            listViewCardHeights: o,
                            editorHeight: u,
                            editorAdditionRowHeight: d,
                            renderSectionOrItem: c,
                            goToThread: m,
                            observePostVisibilityAnalytics: h,
                            isShowingSearchResult: f
                        } = e, x = n.useCallback(e => s => {
                            var a;
                            t.current = s, e.current = null !== (a = null == s ? void 0 : s.getScrollerNode()) && void 0 !== a ? a : null
                        }, [t]), C = n.useCallback(e => ep({
                            section: e.section,
                            isShowingSearchResult: f,
                            hasActiveThreads: l
                        })(), [l, f]), _ = n.useCallback(e => c(e.section, void 0, () => {
                            if (3 === e.section) return __OVERLAY__ ? null : s ? (0, a.jsx)("div", {
                                className: eg.placeholder,
                                children: (0, a.jsx)(ea.default, {})
                            }) : (0, a.jsx)("div", {
                                "data-item-role": "item",
                                className: r(eg.loadingCard, eg["loadingCard-".concat(e.row % 3)], {
                                    [eg.loadingCardWithIncreasedActivity]: s
                                })
                            }, "loading-".concat(e.row));
                            let t = i[e.section][e.row];
                            return (0, a.jsx)("li", {
                                className: eg.card,
                                "data-item-role": "item",
                                children: (0, a.jsx)(g.HeadingLevel, {
                                    children: s ? (0, a.jsx)(ei.default, {
                                        className: eg.increasedActivityMainCard,
                                        threadId: t,
                                        goToThread: m,
                                        observePostVisibilityAnalytics: h
                                    }) : (0, a.jsx)($.default, {
                                        className: eg.mainCard,
                                        threadId: t,
                                        goToThread: m,
                                        observePostVisibilityAnalytics: h
                                    })
                                })
                            }, "".concat(e.section, "-").concat(t))
                        }), [s, c, i, m, h]), S = n.useCallback((e, t) => {
                            if (0 === e) return u + d;
                            let a = i[e][t],
                                n = o[a],
                                l = (s ? ei.DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT : 96) + 8;
                            return null == n ? l : n + 8
                        }, [i, o, u, d, s]), T = n.useCallback(e => 2 === e && l ? 40 : 0, [l]);
                        return {
                            updateListScrollerRef: x,
                            renderListSection: C,
                            renderListItem: _,
                            getListSectionHeight: T,
                            getListItemHeight: S
                        }
                    }({
                        listRef: Q,
                        hasActiveThreads: D,
                        threadIdsBySection: eb,
                        listViewCardHeights: o,
                        editorHeight: l,
                        editorAdditionRowHeight: i,
                        renderSectionOrItem: eU,
                        goToThread: eP,
                        observePostVisibilityAnalytics: J,
                        isShowingSearchResult: en,
                        isIncreasedActivityView: ek
                    }),
                    eW = n.useRef(null),
                    {
                        updateMasonryListScrollerRef: eK,
                        getItemKey: eY,
                        renderGridSection: eX,
                        renderGridItem: eZ,
                        getGridSectionHeight: eq,
                        getSectionProps: eQ,
                        handleGridFocus: eJ
                    } = function(e) {
                        let {
                            masonryListScrollerRef: t,
                            threadIdsBySection: s,
                            goToThread: l,
                            renderSectionOrItem: i,
                            hasActiveThreads: o,
                            isShowingSearchResult: u,
                            canSearchForumPosts: d,
                            canViewArchivedPosts: c,
                            observePostVisibilityAnalytics: m,
                            focusedThreadId: h,
                            headerHeight: f
                        } = e, g = n.useRef(null), x = n.useCallback(e => {
                            t.current = e, g.current = null == e ? void 0 : e.getScrollerNode()
                        }, [t]), C = n.useCallback((e, s) => {
                            let {
                                current: a
                            } = t;
                            if (null == a) return;
                            let n = document.querySelector(e);
                            if (null == n) return;
                            let l = a.getCoordsMap()[s],
                                r = null != l ? l.height + 20 : 200;
                            a.scrollIntoViewNode({
                                node: n,
                                padding: r,
                                callback() {
                                    requestAnimationFrame(() => {
                                        var t;
                                        null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                                            preventScroll: !0
                                        })
                                    })
                                }
                            }), h.current = eN(s)
                        }, [t, h]), _ = n.useCallback(e => {
                            let t = eN(e);
                            if (null == t) return;
                            let s = F.default.getChannel(t);
                            null != s && l(s, !0)
                        }, [l]), S = n.useCallback(function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                a = s[e];
                            if (0 === a.length) return "section-".concat(e, "-").concat(t);
                            {
                                let a = s[e][t];
                                return null == a ? eE(e, t) : eE(e, a)
                            }
                        }, [s]), T = n.useCallback((e, t, s) => i(e, t, ep({
                            section: e,
                            coords: t,
                            key: s,
                            isShowingSearchResult: u,
                            hasActiveThreads: o
                        })), [i, o, u]), p = n.useCallback(e => 0 === e ? {} : {
                            role: "grid",
                            "aria-labelledby": "#".concat(e_(e))
                        }, []), E = n.useCallback((e, t, n, i, o) => {
                            if (0 === e) return null;
                            let u = s[e][t];
                            return null != u ? (0, a.jsx)(es.default, {
                                id: "".concat(i),
                                threadId: u,
                                className: r(eg.card, eg.mainCard),
                                goToThread: l,
                                observePostVisibilityAnalytics: m,
                                coords: n,
                                gridCoords: o.coordinates[i],
                                gridSectionBoundaries: o.boundaries
                            }, i) : __OVERLAY__ ? null : (0, a.jsx)("div", {
                                style: {
                                    ...n
                                },
                                "data-item-role": "item",
                                className: r(eg.loadingCard, eg["loadingCard-".concat(t % 3)])
                            }, i)
                        }, [s, l, m]), N = n.useCallback(e => 0 === e ? f - 8 - 24 : 2 === e ? o || !c ? 40 : 0 : 1 === e && u && !d ? 40 : 0, [f, u, d, o, c]);
                        return {
                            updateMasonryListScrollerRef: x,
                            masonryListContainerRef: g,
                            focusedThreadId: h,
                            handleGridFocus: C,
                            handleGridSelect: _,
                            getItemKey: S,
                            renderGridSection: T,
                            renderGridItem: E,
                            getSectionProps: p,
                            getGridSectionHeight: N
                        }
                    }({
                        masonryListScrollerRef: eW,
                        threadIdsBySection: eb,
                        goToThread: eP,
                        renderSectionOrItem: eU,
                        hasActiveThreads: D,
                        isShowingSearchResult: en,
                        canSearchForumPosts: H,
                        canViewArchivedPosts: V,
                        observePostVisibilityAnalytics: J,
                        focusedThreadId: el,
                        headerHeight: ey
                    });
                ! function(e) {
                    let {
                        masonryListScrollerRef: t,
                        containerWidth: s,
                        isGridLayout: a,
                        threadIdsBySection: l,
                        focusedThreadId: r,
                        parentId: i
                    } = e;
                    n.useEffect(() => {
                        if (a) {
                            let e = setTimeout(() => {
                                if (null == t.current || null == r.current) return;
                                let e = r.current;
                                if ("string" != typeof e) return;
                                let s = O.default.getSidebarState(i);
                                if (null == s) {
                                    r.current = null;
                                    return
                                }
                                let a = l.findIndex(t => t.find(t => t === e)),
                                    n = t.current.getCoordsMap(),
                                    o = "__section__".concat(a),
                                    u = n[o],
                                    d = n[eE(a, e)];
                                null != u && null != d && t.current.scrollIntoViewRect({
                                    start: u.top + d.top - 100,
                                    end: u.top + d.top + d.height + 50
                                })
                            }, 500);
                            return () => clearTimeout(e)
                        }
                    }, [i, s, a, l, r, t])
                }({
                    masonryListScrollerRef: eW,
                    containerWidth: ex,
                    isGridLayout: et,
                    threadIdsBySection: eb,
                    parentId: t.id,
                    focusedThreadId: el
                });
                let e$ = n.useCallback(() => {
                        var e, s;
                        if (en) return;
                        let a = et ? null === (e = eW.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (s = Q.current) || void 0 === s ? void 0 : s.getScrollerState();
                        if (null == a) return;
                        (0, X.trackForumScrolled)({
                            guildId: t.guild_id,
                            channelId: t.id
                        });
                        let n = a.scrollTop + a.offsetHeight,
                            l = a.scrollHeight - n,
                            r = et ? Math.max(200, (0, er.getGridPostHeight)(ex)) : 200;
                        l < r && p()
                    }, [en, et, t.guild_id, t.id, ex, p]),
                    e0 = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
                    e1 = (0, ed.default)({
                        id: "forum-grid-view",
                        isEnabled: et && e0,
                        setFocus: eJ
                    }),
                    e6 = (0, ec.default)({
                        listRef: Q,
                        padding: 96,
                        isEnabled: !et && e0,
                        channel: t
                    }),
                    {
                        ref: e2,
                        ...e4
                    } = e1.containerProps,
                    e8 = O.default.getSidebarState(t.id),
                    e3 = null != e8 && (0, O.isViewChannelSidebar)(e8);
                return (0, a.jsx)("div", {
                    className: eg.container,
                    ref: eo,
                    children: (0, a.jsx)(g.FocusJumpSection, {
                        children: e => (0, a.jsxs)(a.Fragment, {
                            children: [c && (0, a.jsx)(x.default, {
                                channel: t,
                                draftType: L.DraftType.FirstThreadMessage,
                                className: eg.uploadArea,
                                style: {
                                    right: e3 && (null == s ? void 0 : s.isThreadSidebarFloating) ? s.threadSidebarWidth : 0
                                }
                            }), (0, a.jsx)(eI, {
                                channel: t
                            }), (0, a.jsx)(g.HiddenVisually, {
                                children: (0, a.jsx)(g.H, {
                                    children: ef.default.Messages.THREADS
                                })
                            }), w ? (0, a.jsx)("div", {
                                className: eg.optInNotice,
                                children: (0, a.jsx)(M.default, {
                                    channel: t
                                })
                            }) : null, et ? (0, a.jsx)(ed.GridNavigatorProvider, {
                                navigator: e1,
                                children: (0, a.jsx)(g.MasonryList, {
                                    ref: e => {
                                        var t;
                                        e2.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eK(e)
                                    },
                                    itemGutter: 16,
                                    padding: 24,
                                    className: eg.grid,
                                    columns: eT,
                                    sections: eL,
                                    getItemKey: eY,
                                    getSectionHeight: eq,
                                    getItemHeight: eS,
                                    renderSection: eX,
                                    renderItem: eZ,
                                    getSectionProps: eQ,
                                    onScroll: T ? e$ : void 0,
                                    chunkSize: 350,
                                    ...e4,
                                    ...e
                                }, y)
                            }) : (0, a.jsx)(d.ListNavigatorProvider, {
                                navigator: e6,
                                children: (0, a.jsx)(d.ListNavigatorContainer, {
                                    children: t => {
                                        let {
                                            ref: s,
                                            ...n
                                        } = t;
                                        return (0, a.jsx)(g.ListAuto, {
                                            ref: eH(s),
                                            className: eg.list,
                                            sections: eL,
                                            sectionHeight: eV,
                                            rowHeight: ez,
                                            renderRow: eG,
                                            renderSection: eB,
                                            chunkSize: 150,
                                            onScroll: T ? e$ : void 0,
                                            paddingBottom: 24,
                                            ...n,
                                            ...e,
                                            innerRole: "list"
                                        }, y)
                                    }
                                })
                            })]
                        })
                    })
                })
            }

            function eA(e) {
                let {
                    channel: t,
                    coords: s
                } = e, n = (0, S.default)(t);
                return (0, a.jsx)("div", {
                    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
                    style: s,
                    children: (0, a.jsx)(g.Text, {
                        color: "text-muted",
                        variant: "text-md/normal",
                        children: ef.default.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
                            channelName: n
                        })
                    })
                })
            }

            function ev(e) {
                let {
                    channel: t,
                    coords: s
                } = e, n = (0, S.default)(t);
                return (0, a.jsx)("div", {
                    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
                    style: s,
                    children: (0, a.jsx)(g.Text, {
                        color: "text-muted",
                        variant: "text-md/normal",
                        children: ef.default.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
                            channelName: n
                        })
                    })
                })
            }

            function eI(e) {
                let {
                    channel: t
                } = e, s = n.useCallback(() => {
                    G.default.resort(t.id)
                }, [t]), l = (0, h.useStateFromStores)([V.default], () => V.default.getNewThreadCount());
                return 0 === l ? null : (0, a.jsx)(g.Clickable, {
                    className: eg.newPostsButton,
                    onClick: s,
                    children: (0, a.jsx)(g.Text, {
                        color: "text-brand",
                        variant: "text-md/medium",
                        children: ef.default.Messages.NEW_FORUM_POST_COUNT.format({
                            count: l
                        })
                    })
                })
            }

            function ej() {
                return Promise.resolve()
            }

            function eR(e) {
                var t, s, l;
                let {
                    channel: i,
                    isEmpty: x,
                    isSearchLoading: S,
                    numResults: N,
                    children: M,
                    coords: A,
                    onHeightChange: v
                } = e, {
                    name: I,
                    formOpen: R,
                    titleFocused: O,
                    hasClickedForm: F,
                    textAreaState: w,
                    onboardingExpanded: B,
                    setEditorAdditionRowHeight: V
                } = (0, ee.useForumPostComposerStore)(e => {
                    let {
                        name: t,
                        formOpen: s,
                        titleFocused: a,
                        hasClickedForm: n,
                        textAreaState: l,
                        onboardingExpanded: r,
                        setEditorAdditionRowHeight: i
                    } = e;
                    return {
                        name: t,
                        formOpen: s,
                        titleFocused: a,
                        hasClickedForm: n,
                        textAreaState: l,
                        onboardingExpanded: r,
                        setEditorAdditionRowHeight: i
                    }
                }, u.default), {
                    tagFilter: K,
                    layoutType: Y
                } = (0, z.useForumChannelStore)(i.id), Z = (0, ee.useForumPostComposerStoreApi)(), q = (0, z.useForumChannelStoreApi)(), $ = (0, h.useStateFromStores)([b.default], () => b.default.canChatInGuild(i.guild_id)), es = (0, W.useCanManageChannel)(i), ea = (0, j.useCanStartThread)(i), [en, er] = n.useState(ea), [, ei] = (0, p.useCurrentUserCommunicationDisabled)(null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0), eu = $ && (ea || en && ei), ed = i.isMediaChannel();
                n.useEffect(() => {
                    ea && er(!0)
                }, [ea]);
                let {
                    ref: ec,
                    height: eh
                } = (0, C.default)();
                n.useEffect(() => {
                    null != eh && v(eh)
                }, [v, eh]);
                let ex = n.useCallback(() => {
                    o(() => {
                        null != ec.current && Z.getState().setEditorHeight(ec.current.offsetHeight)
                    })
                }, [ec, Z]);
                n.useLayoutEffect(ex, [ex, x, eu, B]), (0, H.useComponentAction)({
                    event: em.ComponentActions.REMEASURE_TARGET,
                    handler: ex
                });
                let eC = (0, h.useStateFromStores)([P.default], () => P.default.getUploads(i.id, L.DraftType.FirstThreadMessage)),
                    e_ = (0, W.useChannelTemplate)(i),
                    eS = n.useRef(null),
                    eT = n.useRef(null),
                    [ep, eE] = n.useState(0),
                    {
                        width: eN
                    } = (0, h.useStateFromStores)([y.default], () => y.default.windowSize()),
                    eM = null === (s = eS.current) || void 0 === s ? void 0 : null === (t = s.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
                    eA = n.useRef(null);
                n.useLayoutEffect(() => {
                    var e;
                    let t = eT.current,
                        s = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
                    if (null != eS.current && null != s && null != s.children) {
                        let {
                            left: e,
                            top: t
                        } = eS.current.getBoundingClientRect(), a = 0;
                        for (let n of s.children) {
                            let {
                                right: s,
                                top: l,
                                height: r
                            } = n.getBoundingClientRect();
                            if (l - t > r) break;
                            s - e > a && (a = s - e)
                        }
                        eE(a)
                    }
                }, [i.availableTags, eN, eM, K]);
                let ev = I.length > 0 && !R && (S || null != N),
                    eI = !__OVERLAY__ && !F && !R && O && (0 === w.textValue.trim().length || w.textValue.trim() === e_) && 0 === eC.length;
                n.useLayoutEffect(() => {
                    let e = ev || eI;
                    if (!e) return V(0);
                    null != eA.current && V(e ? eA.current.clientHeight : 0)
                }, [V, ev, eI, eA]);
                let eR = e => {
                        (0, X.trackForumTagFilterClicked)({
                            guildId: i.guild_id,
                            channelId: i.id,
                            tagId: e,
                            filterTagIds: Array.from(K),
                            added: !K.has(e),
                            location: {
                                page: em.AnalyticsPages.GUILD_CHANNEL,
                                section: em.AnalyticsSections.FORUM_CHANNEL_HEADER,
                                object: em.AnalyticsObjects.CHANNEL_TAG
                            }
                        }), q.getState().toggleTagFilter(i.id, e)
                    },
                    eF = (0, d.default)({
                        id: "".concat(i.id, "-tags-navigator"),
                        isEnabled: !0,
                        wrap: !0,
                        scrollToStart: ej,
                        scrollToEnd: ej,
                        orientation: c.Orientations.HORIZONTAL
                    }),
                    {
                        role: eL,
                        onFocus: eb,
                        ...eP
                    } = (0, d.useListItem)("forum-channel-header"),
                    ey = n.useRef(null),
                    eD = function() {
                        let e = n.useRef(!1),
                            t = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
                            s = n.useCallback(t => {
                                e.current = t.shiftKey
                            }, [e]);
                        return n.useLayoutEffect(() => (t ? window.addEventListener("keydown", s) : window.removeEventListener("keydown", s), () => window.removeEventListener("keydown", s)), [t, s]), e
                    }(),
                    eU = n.useCallback(e => {
                        if (eb(e), e.target === ec.current && !eD.current) {
                            var t;
                            null === (t = ey.current) || void 0 === t || t.focus()
                        }
                    }, [eb, ec, eD]);
                return (0, a.jsx)("div", {
                    className: r(eg.card, eg.headerRow, eg.columnsSpan),
                    ref: ec,
                    onFocus: eU,
                    ...eP,
                    style: {
                        ...A,
                        position: "static",
                        height: "auto"
                    },
                    children: (0, a.jsxs)(H.ComponentDispatchGroupProvider, {
                        children: [null != i.guild_id ? (0, a.jsx)(E.default, {
                            className: r(eg.newMemberBanner, {
                                [eg.gridViewBanner]: Y === m.ForumLayout.GRID
                            }),
                            guildId: i.guild_id,
                            channel: i
                        }) : null, (0, a.jsx)("div", {
                            className: r(eg.mainCard, eg.header, {
                                [eg.headerWithMatchingPosts]: ev || eI
                            }),
                            children: (0, a.jsx)(et.default, {
                                parentChannel: i,
                                onChange: ex,
                                isSearchLoading: S,
                                canCreatePost: eu,
                                inputRef: ey
                            })
                        }), (ev || eI) && (0, a.jsxs)("div", {
                            className: eg.matchingPostsRow,
                            ref: eA,
                            children: [ev && (0, a.jsxs)("div", {
                                className: eg.matchingPosts,
                                children: [(0, a.jsx)(g.Heading, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: S ? ef.default.Messages.FORUM_SEARCHING : 0 === N ? ef.default.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : ef.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
                                        numPosts: N,
                                        query: I
                                    })
                                }), !S && (0, a.jsx)(g.Clickable, {
                                    onClick: () => {
                                        (0, X.trackForumSearchCleared)({
                                            guildId: i.guild_id,
                                            channelId: i.id
                                        }), G.default.clearForumSearch(i.id), Z.getState().setName("")
                                    },
                                    children: (0, a.jsx)(g.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-brand",
                                        className: eg.clear,
                                        children: ef.default.Messages.CLEAR
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: eg.tagsSpacer
                            }), eI ? eu ? (0, a.jsxs)("div", {
                                className: eg.startPostHelp,
                                children: [(0, a.jsx)(g.KeyCombo, {
                                    shortcut: "SHIFT",
                                    className: eg.keyboardShortcut
                                }), (0, a.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: "+"
                                }), (0, a.jsx)(g.KeyCombo, {
                                    shortcut: "ENTER",
                                    className: eg.keyboardShortcut
                                }), (0, a.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: ef.default.Messages.FORUM_ENTER_TO_START_POST
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: eg.startPostHelp,
                                children: [(0, a.jsx)(k.default, {
                                    height: 14,
                                    width: 14,
                                    className: eg.warnIcon
                                }), (0, a.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: ef.default.Messages.FORUM_NO_POST_PERMISSION_HELP
                                })]
                            }) : null]
                        }), (0, a.jsx)(Q.default, {
                            channel: i,
                            onChange: ex
                        }), (0, a.jsxs)("div", {
                            className: eg.tagsContainer,
                            ref: eS,
                            children: [(0, a.jsx)(eO, {
                                channel: i
                            }), i.availableTags.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: eg.divider
                                }), (0, a.jsx)("div", {
                                    className: eg.tagList,
                                    ref: eT,
                                    children: (0, a.jsx)(d.ListNavigatorProvider, {
                                        navigator: eF,
                                        children: (0, a.jsx)(d.ListNavigatorContainer, {
                                            children: e => {
                                                let {
                                                    ref: t,
                                                    ...s
                                                } = e;
                                                return (0, a.jsx)("div", {
                                                    className: eg.tagListInner,
                                                    ref: t,
                                                    ...s,
                                                    children: i.availableTags.map(e => (0, a.jsx)(el.default, {
                                                        className: eg.tag,
                                                        tag: e,
                                                        onClick: () => eR(e.id),
                                                        selected: K.has(e.id)
                                                    }, e.id))
                                                })
                                            }
                                        })
                                    })
                                }), (0, a.jsx)(g.Popout, {
                                    renderPopout: e => {
                                        let {
                                            closePopout: t,
                                            setPopoutRef: s
                                        } = e;
                                        return (0, a.jsx)(eo.default, {
                                            channel: i,
                                            closePopout: t,
                                            setPopoutRef: s
                                        })
                                    },
                                    position: "bottom",
                                    align: "right",
                                    children: (e, t) => {
                                        let {
                                            isShown: s
                                        } = t;
                                        return (0, a.jsxs)(g.Button, {
                                            ...e,
                                            size: g.Button.Sizes.MIN,
                                            color: g.Button.Colors.CUSTOM,
                                            className: r(eg.tagsButton, {
                                                [eg.tagsButtonWithCount]: K.size > 0
                                            }),
                                            style: {
                                                left: ep
                                            },
                                            innerClassName: eg.tagsButtonInner,
                                            "aria-label": K.size > 0 ? ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : ef.default.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                                            children: [K.size > 0 ? (0, a.jsx)("div", {
                                                className: eg.countContainer,
                                                children: (0, a.jsx)(g.Text, {
                                                    className: eg.countText,
                                                    color: "none",
                                                    variant: "text-xs/medium",
                                                    children: K.size
                                                })
                                            }) : ef.default.Messages.FORUM_TAG_ALL, s ? (0, a.jsx)(U.default, {
                                                width: 20
                                            }) : (0, a.jsx)(D.default, {
                                                width: 20
                                            })]
                                        })
                                    }
                                }), (0, a.jsxs)(g.Button, {
                                    size: g.Button.Sizes.MIN,
                                    color: g.Button.Colors.CUSTOM,
                                    className: r(eg.tagsButton, eg.tagsButtonPlaceholder),
                                    innerClassName: eg.tagsButtonInner,
                                    "aria-label": ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                                    children: [K.size > 0 ? (0, a.jsx)("div", {
                                        className: eg.countContainer,
                                        children: (0, a.jsx)(g.Text, {
                                            className: eg.countText,
                                            color: "none",
                                            variant: "text-xs/medium",
                                            children: K.size
                                        })
                                    }) : null, (0, a.jsx)(U.default, {
                                        width: 24
                                    })]
                                })]
                            }) : null]
                        }), M, es && !ed && (0, a.jsx)(T.default, {
                            contentTypes: [f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD],
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: s
                                } = e;
                                return t === f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD ? (0, a.jsx)(J.default, {
                                    onDismiss: s
                                }) : null
                            }
                        })]
                    })
                }, "create-form")
            }

            function eO(e) {
                let {
                    channel: t
                } = e, s = t.isMediaChannel();
                return (0, a.jsx)(g.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: s
                        } = e;
                        return (0, a.jsx)(en.default, {
                            channel: t,
                            closePopout: s
                        })
                    },
                    position: "bottom",
                    align: "left",
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return (0, a.jsxs)(g.Button, {
                            ...e,
                            size: g.Button.Sizes.MIN,
                            color: g.Button.Colors.CUSTOM,
                            className: eg.sortDropdown,
                            innerClassName: eg.sortDropdownInner,
                            "aria-label": s ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
                            children: [(0, a.jsx)(w.default, {}), (0, a.jsx)(g.Text, {
                                className: eg.sortDropdownText,
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: s ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW
                            }), n ? (0, a.jsx)(U.default, {
                                width: 20
                            }) : (0, a.jsx)(D.default, {
                                width: 20
                            })]
                        })
                    }
                })
            }
        },
        131600: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eg
                }
            }), s("424973"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("866227"),
                o = s.n(i),
                u = s("301165"),
                d = s("171210"),
                c = s("316693"),
                m = s("249654"),
                h = s("446674"),
                f = s("77078"),
                g = s("18054"),
                x = s("581583"),
                C = s("206230"),
                _ = s("656038"),
                S = s("454273"),
                T = s("781555"),
                p = s("305961"),
                E = s("36694"),
                N = s("945330"),
                M = s("717018"),
                A = s("673078"),
                v = s("68238"),
                I = s("904276"),
                j = s("772280"),
                R = s("423487"),
                O = s("956089"),
                F = s("659500"),
                L = s("526812"),
                b = s("404607"),
                P = s("713955"),
                y = s("339792"),
                D = s("680986"),
                U = s("867965"),
                w = s("258039"),
                k = s("729608"),
                H = s("578198"),
                B = s("953371"),
                G = s("49111"),
                V = s("782340"),
                z = s("358040");
            let W = {
                    width: 28,
                    height: 28
                },
                K = {
                    width: 20,
                    height: 20,
                    borderRadius: 10
                },
                Y = e => {
                    (0, U.trackForumOnboardingClicked)({
                        onboardingCTA: e
                    })
                };
            class X {
                addStep(e) {
                    ++this.currentIndex, this.steps.push({
                        index: this.currentIndex,
                        ...e
                    }), e.isDone && this.completedSteps++
                }
                getSteps() {
                    return this.steps
                }
                isAllDone() {
                    return this.steps.every(e => e.isDone)
                }
                constructor() {
                    this.currentIndex = 0, this.steps = [], this.completedSteps = 0
                }
            }
            let Z = (e, t, n) => {
                    let l = (0, _.default)(t) ? c.default.combine(G.Permissions.VIEW_CHANNEL, G.Permissions.SEND_MESSAGES) : G.Permissions.SEND_MESSAGES,
                        r = null != e ? (0, P.getAllExistingRolesWithPermission)(e, t, l).filter(s => t.permissionOverwrites.hasOwnProperty(s.id) || (0, S.isEveryoneRoleId)(e.id, s.id)) : [],
                        i = r.length > 0,
                        o = r.some(t => (0, S.isEveryoneRoleId)(e.id, t.id));
                    return {
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
                        isDone: i && o,
                        shouldWarn: i && !o,
                        children: i ? (0, a.jsx)(eu, {
                            guild: e,
                            roles: r
                        }) : null,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.PERMISSIONS), (0, f.openModalLazy)(async () => {
                                let {
                                    default: i
                                } = await s.el("840489").then(s.bind(s, "840489"));
                                return n(!0), s => (0, a.jsx)(i, {
                                    ...s,
                                    channel: t,
                                    guild: e,
                                    permission: l,
                                    currentSelectedRoles: r
                                })
                            }, {
                                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                onCloseRequest: G.NOOP_NULL,
                                onCloseCallback: () => n(!1)
                            })
                        }
                    }
                },
                q = e => {
                    let t = null != e.topic && e.topic.length > 0;
                    return {
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.GUIDELINES), g.default.open(e.id, void 0, G.ChannelSettingsSubsections.TOPIC)
                        },
                        isDone: t
                    }
                },
                Q = e => {
                    let t = null != e.availableTags && e.availableTags.length > 0;
                    return {
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.TAGS), g.default.open(e.id), (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await s.el("987034").then(s.bind(s, "987034"));
                                return s => (0, a.jsx)(t, {
                                    ...s,
                                    channelId: e.id,
                                    guildId: e.guild_id
                                })
                            })
                        },
                        isDone: t
                    }
                },
                J = e => {
                    let t = null != e.defaultReactionEmoji;
                    return {
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.DEFAULT_REACTION), (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await s.el("456552").then(s.bind(s, "456552"));
                                return s => (0, a.jsx)(t, {
                                    ...s,
                                    channel: e
                                })
                            })
                        },
                        isDone: t
                    }
                },
                $ = (e, t, n) => ({
                    name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
                    description: t ? V.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
                        onClick: e => {
                            null != n && (e.preventDefault(), e.stopPropagation(), (0, U.trackForumUpsellModalViewed)(), (0, f.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("135430").then(s.bind(s, "135430"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guildId: n
                                })
                            }))
                        }
                    }),
                    clickHandler: () => {
                        Y(B.ForumOnboardingCTAs.CREATE_POST), F.ComponentDispatch.dispatch(G.ComponentActions.FOCUS_COMPOSER_TITLE)
                    },
                    isDone: e
                }),
                ee = (e, t, s, a) => n.useMemo(() => {
                    let n = new X,
                        l = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return null != e && null != t && !l && n.addStep(Z(e, t, a)), !l && n.addStep(q(t)), n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(s, l, null == e ? void 0 : e.id)), n
                }, [t, e, s, a]),
                et = (e, t) => n.useCallback(() => (t(!1), b.default.hideAdminOnboarding(e, !0)), [e, t]),
                es = e => {
                    let t = m.default.extractTimestamp(e),
                        s = o().isBefore(o(t).add(o.duration(15, "days")));
                    return s
                },
                ea = (e, t, s) => {
                    n.useEffect(() => {
                        !e && s(!t)
                    }, [e, s, t])
                },
                en = (e, t, s, a) => {
                    let l = n.useRef(0);
                    n.useEffect(() => (s || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
                        a()
                    }, 6e4), () => clearTimeout(l.current)), [e, t, a, s])
                },
                el = (e, t, s) => {
                    n.useEffect(() => {
                        e && t && s()
                    }, [])
                },
                er = e => {
                    let {
                        isAllDone: t,
                        isVisible: s,
                        canManageChannel: a,
                        guild: l,
                        channel: r
                    } = e, i = n.useCallback(() => {
                        F.ComponentDispatch.dispatch(G.ComponentActions.REMEASURE_TARGET)
                    }, []);
                    n.useEffect(() => {
                        i()
                    }, [i, t, s, a, null == l ? void 0 : l.roles, r.id, r.permissionOverwrites])
                },
                ei = () => {
                    let [e, t] = n.useState(!0), s = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion), a = (0, u.useTransition)(e, {
                        keys: e => e ? "shown" : "hidden",
                        config: ed,
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        },
                        unique: !0,
                        immediate: s
                    });
                    return {
                        transitions: a,
                        setVisible: t
                    }
                },
                eo = e => {
                    let t = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion);
                    return (0, u.useTransition)(e, {
                        from: {
                            maxHeight: 0
                        },
                        enter: {
                            maxHeight: 500
                        },
                        leave: {
                            maxHeight: 0
                        },
                        config: {
                            duration: 200
                        },
                        immediate: t
                    })
                },
                eu = e => {
                    let {
                        guild: t,
                        roles: s
                    } = e;
                    return (0, a.jsx)("div", {
                        className: z.rolesList,
                        "aria-label": V.default.Messages.ROLES_LIST.format({
                            numRoles: s.length
                        }),
                        children: s.map(e => (0, a.jsx)(x.MemberRole, {
                            role: e,
                            canRemove: !1,
                            onRemove: G.NOOP_NULL,
                            guildId: t.id,
                            className: z.rolePill
                        }, e.id))
                    })
                },
                ed = {
                    mass: 1,
                    tension: 250,
                    friction: 18,
                    clamp: !0
                },
                ec = e => {
                    let {
                        guild: t,
                        channel: s,
                        hasAnyThread: a,
                        handleHide: l
                    } = e, [r, i] = n.useState(!1), o = (0, w.isOnboardingDismissed)(s.id), u = (0, h.useStateFromStores)([L.default], () => L.default.hasHidden(s.id)), d = ee(t, s, a, i), c = d.isAllDone(), m = o || u || !es(s.id);
                    return en(c, m, r, l), {
                        onboardingSteps: d,
                        isHidden: u,
                        isDismissed: o,
                        isAllDone: c
                    }
                },
                em = () => n.useCallback(e => {
                    var t;
                    null === (t = e.clickHandler) || void 0 === t || t.call(e)
                }, []),
                eh = e => {
                    let {
                        handleHide: t
                    } = e;
                    return (0, a.jsx)(f.Clickable, {
                        onClick: t,
                        className: z.closeButton,
                        "aria-label": V.default.Messages.DISMISS,
                        children: (0, a.jsx)(N.default, {
                            className: z.closeIcon
                        })
                    })
                },
                ef = e => {
                    let {
                        expanded: t,
                        onClick: s
                    } = e;
                    return (0, a.jsx)(f.Clickable, {
                        onClick: s,
                        className: z.closeButton,
                        "aria-label": t ? V.default.Messages.COLLAPSE : V.default.Messages.EXPAND,
                        children: t ? (0, a.jsx)(M.default, {
                            className: z.closeIcon
                        }) : (0, a.jsx)(A.default, {
                            className: z.closeIcon
                        })
                    })
                };
            var eg = e => {
                let {
                    hasAnyThread: t,
                    channel: s
                } = e, {
                    onboardingExpanded: l
                } = (0, H.useForumPostComposerStore)(e => {
                    let {
                        onboardingExpanded: t
                    } = e;
                    return {
                        onboardingExpanded: t
                    }
                }), {
                    tagFilter: i
                } = (0, y.useForumChannelStore)(s.id), o = (0, h.useStateFromStores)([p.default], () => p.default.getGuild(s.getGuildId())), c = (0, D.useCanManageChannel)(s), {
                    transitions: m,
                    setVisible: g
                } = ei(), x = eo(l), C = em(), _ = et(s.id, g), {
                    onboardingSteps: S,
                    isDismissed: N,
                    isHidden: M,
                    isAllDone: A
                } = ec({
                    guild: o,
                    channel: s,
                    hasAnyThread: t,
                    handleHide: _
                }), F = !M && !N, L = (0, H.useForumPostComposerStoreApi)(), b = s.isMediaChannel(), P = e => L.getState().setOnboardingExpanded(e);
                return (el(A, F, _), er({
                    isAllDone: A,
                    isVisible: F,
                    canManageChannel: c,
                    guild: o,
                    channel: s
                }), ea(N, M, g), n.useEffect(() => {
                    (!t || !F) && P(!0)
                }, []), null == o) ? null : F && c ? b ? t ? null : (0, a.jsx)(T.default, {
                    channel: s
                }) : (0, a.jsx)(a.Fragment, {
                    children: m((e, t) => t ? (0, a.jsx)(u.animated.div, {
                        style: e,
                        className: z.container,
                        children: (0, a.jsxs)("div", {
                            className: z.wrapper,
                            children: [(0, a.jsx)("div", {
                                className: z.headerRow,
                                children: (0, a.jsxs)(f.HeadingLevel, {
                                    component: (0, a.jsx)(f.Heading, {
                                        variant: "heading-md/semibold",
                                        children: V.default.Messages.GET_STARTED
                                    }),
                                    children: [(0, a.jsx)(f.Heading, {
                                        variant: "heading-md/medium",
                                        className: z.header,
                                        children: V.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                                            numCompleted: S.completedSteps.toString(),
                                            numSteps: S.steps.length.toString()
                                        })
                                    }), (0, a.jsxs)(f.Text, {
                                        variant: "text-xs/normal",
                                        className: z.visibilityInfo,
                                        children: [(0, a.jsx)(v.default, {
                                            width: 12,
                                            height: 12,
                                            className: z.icon
                                        }), V.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                                    }), (0, a.jsx)(ef, {
                                        expanded: l,
                                        onClick: () => P(!l)
                                    }), (0, a.jsx)(eh, {
                                        handleHide: _
                                    })]
                                })
                            }), x((e, t) => t ? (0, a.jsx)(u.animated.div, {
                                style: e,
                                className: z.listContainer,
                                children: (0, a.jsx)("ol", {
                                    className: z.checklist,
                                    children: S.getSteps().map(e => (0, a.jsxs)(f.Clickable, {
                                        tag: "li",
                                        "aria-label": e.name,
                                        onClick: () => C(e),
                                        className: r(z.stepContainer, {
                                            [z.completed]: e.isDone
                                        }),
                                        children: [e.shouldWarn ? (0, a.jsx)(R.default, {
                                            color: d.default.STATUS_DANGER,
                                            className: z.stepStatus
                                        }) : e.isDone ? (0, a.jsx)(O.IconBadge, {
                                            color: d.default.STATUS_POSITIVE_BACKGROUND,
                                            icon: E.default,
                                            style: K,
                                            className: z.stepStatus
                                        }) : (0, a.jsx)(O.IconBadge, {
                                            disableColor: !0,
                                            icon: I.default,
                                            style: W,
                                            className: r(z.stepStatus, z.completed)
                                        }), (0, a.jsxs)("div", {
                                            className: z.step,
                                            children: [(0, a.jsx)(f.Text, {
                                                variant: "text-md/medium",
                                                color: e.isDone ? "header-secondary" : "header-primary",
                                                className: z.stepName,
                                                children: e.name
                                            }), (0, a.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                color: "header-secondary",
                                                className: z.stepDescription,
                                                children: e.description
                                            }), e.children]
                                        }), (0, a.jsx)(j.default, {
                                            width: 12,
                                            className: z.stepStatus
                                        })]
                                    }, "onboard-step-".concat(e.index)))
                                })
                            }) : null)]
                        })
                    }) : null)
                }) : t ? null : (0, a.jsx)(k.default, {
                    channelName: s.name,
                    guildId: s.guild_id,
                    tagFilter: i,
                    channel: s
                })
            }
        },
        729608: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                r = s("300322"),
                i = s("660074"),
                o = s("543289"),
                u = s("772280"),
                d = s("659500"),
                c = s("680986"),
                m = s("867965"),
                h = s("49111"),
                f = s("782340"),
                g = s("731808");

            function x(e) {
                let {
                    channelName: t,
                    guildId: x,
                    tagFilter: C,
                    channel: _
                } = e, S = (0, c.useCanManageChannel)(_), T = (0, r.useCanStartThread)(_), p = _.isMediaChannel(), E = n.useCallback(() => {
                    (0, m.trackForumUpsellModalViewed)(), (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("135430").then(s.bind(s, "135430"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            guildId: x
                        })
                    })
                }, [x]), N = C.size > 0, M = T || S, A = !N && S && !p, v = n.useCallback(() => A ? E() : T ? void d.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_COMPOSER_TITLE) : (0, h.NOOP_NULL)(), [E, A, T]);
                return (0, a.jsxs)("div", {
                    className: g.container,
                    children: [(0, a.jsxs)("div", {
                        className: g.iconContainer,
                        children: [(0, a.jsx)("div", {
                            className: g.icon,
                            children: (0, a.jsx)(i.default, {
                                width: 30,
                                height: 30
                            })
                        }), (0, a.jsx)(o.default, {
                            className: g.stars
                        })]
                    }), (0, a.jsx)(l.Heading, {
                        className: g.header,
                        variant: "heading-md/semibold",
                        children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
                            numTags: C.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_TITLE
                    }), (0, a.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
                            numTags: C.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
                            channelName: t
                        })
                    }), M && (0, a.jsxs)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        color: l.Button.Colors.GREEN,
                        onClick: v,
                        className: g.cta,
                        innerClassName: g.button,
                        children: [A ? f.default.Messages.FORUM_EMPTY_STATE_CTA : f.default.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, a.jsx)(u.default, {
                            width: 12
                        })]
                    })]
                })
            }
        },
        912066: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("301165"),
                o = s("446674"),
                u = s("77078"),
                d = s("18054"),
                c = s("206230"),
                m = s("367376"),
                h = s("213523"),
                f = s("945330"),
                g = s("673078"),
                x = s("987772"),
                C = s("680986"),
                _ = s("578198"),
                S = s("49111"),
                T = s("782340"),
                p = s("743344"),
                E = s("632215"),
                N = n.memo(function(e) {
                    let {
                        channel: t,
                        onChange: l
                    } = e, N = (0, _.useForumPostComposerStoreApi)(), {
                        guidelinesOpen: M
                    } = (0, _.useForumPostComposerStore)(e => {
                        let {
                            guidelinesOpen: t
                        } = e;
                        return {
                            guidelinesOpen: t
                        }
                    }), A = (0, C.useCanManageChannel)(t), [v, I] = n.useState(!1), j = n.useCallback(e => {
                        if (null == e) return;
                        let t = e.clientHeight >= 220;
                        t !== v && I(t)
                    }, [v]);
                    n.useLayoutEffect(() => {
                        setTimeout(l, 350)
                    }, [M, l]);
                    let R = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                        [O, F] = n.useState(!M),
                        L = (0, i.useSpring)({
                            opacity: M ? 1 : 0,
                            maxHeight: M ? 500 : 0,
                            config: {
                                duration: 300
                            },
                            immediate: R,
                            onRest: () => F(!M)
                        }),
                        b = null != t.topic && t.topic.length > 0;
                    return b ? (0, a.jsx)(i.animated.div, {
                        style: L,
                        className: O ? p.hiddenVisually : void 0,
                        children: (0, a.jsxs)("div", {
                            className: p.container,
                            children: [(0, a.jsxs)("div", {
                                className: p.headerContainer,
                                children: [(0, a.jsxs)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: p.guidelinesHeader,
                                    children: [(0, a.jsx)(h.default, {
                                        width: 20,
                                        height: 20
                                    }), T.default.Messages.FORUM_POST_GUIDELINES_TITLE, A && (0, a.jsx)(u.Clickable, {
                                        onClick: () => {
                                            d.default.open(t.id, void 0, S.ChannelSettingsSubsections.TOPIC)
                                        },
                                        tag: "span",
                                        className: p.clickable,
                                        children: (0, a.jsx)(x.default, {
                                            width: 16,
                                            height: 16
                                        })
                                    })]
                                }), (0, a.jsx)(u.Clickable, {
                                    "aria-label": T.default.Messages.CLOSE,
                                    className: p.clickable,
                                    onClick: () => {
                                        N.getState().setGuidelinesOpen(!1)
                                    },
                                    children: (0, a.jsx)(f.default, {
                                        width: 16,
                                        height: 16
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: p.descriptionContainer,
                                children: [(0, a.jsx)(u.Text, {
                                    selectable: !0,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    style: {
                                        maxHeight: 220
                                    },
                                    className: r(p.guidelines, E.markup),
                                    children: (0, a.jsx)("div", {
                                        ref: j,
                                        children: m.default.parseForumPostGuidelines(t.topic, !0, {
                                            channelId: t.id,
                                            allowHeading: !0,
                                            allowList: !0
                                        })
                                    })
                                }), v && (0, a.jsxs)("div", {
                                    className: p.showMore,
                                    children: [(0, a.jsx)("div", {
                                        className: p.gradient
                                    }), (0, a.jsx)("div", {
                                        className: p.linkContainer,
                                        children: (0, a.jsx)(u.Clickable, {
                                            className: p.showMoreLink,
                                            onClick: () => {
                                                (0, u.openModalLazy)(async () => {
                                                    let {
                                                        default: e
                                                    } = await s.el("553415").then(s.bind(s, "553415"));
                                                    return s => (0, a.jsx)(e, {
                                                        ...s,
                                                        channel: t
                                                    })
                                                })
                                            },
                                            children: (0, a.jsxs)(u.Text, {
                                                variant: "text-sm/semibold",
                                                color: "text-brand",
                                                className: p.showMoreText,
                                                children: [T.default.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, a.jsx)(g.default, {
                                                    className: p.showMoreIcon
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    }) : null
                })
        },
        657927: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                r = s("77078"),
                i = s("945330"),
                o = s("153769"),
                u = s("266926"),
                d = s("867965"),
                c = s("152637"),
                m = s("953371"),
                h = s("994428"),
                f = s("782340"),
                g = s("761953"),
                x = s("241558"),
                C = s("260177"),
                _ = s("714358");

            function S(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, a.jsxs)(r.Clickable, {
                    onClick: () => {
                        open(m.COMMUNITY_PORTAL_FORUM_PAGE), (0, d.trackForumHelperCardClicked)({
                            readGuideCta: !0
                        })
                    },
                    className: l(C.container, x.container, g.mainCard),
                    children: [(0, a.jsxs)("div", {
                        className: x.inline,
                        children: [(0, a.jsxs)("div", {
                            className: x.author,
                            children: [(0, a.jsx)(o.default, {
                                className: x.discordIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                children: f.default.Messages.DISCORD_NAME
                            }), (0, a.jsxs)("div", {
                                className: x.notice,
                                children: [(0, a.jsx)(u.default, {
                                    className: x.infoIcon
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: f.default.Messages.FORUM_HELPER_CARD_NOTICE
                                })]
                            })]
                        }), (0, a.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), t(h.ContentDismissActionType.DISMISS), (0, d.trackForumHelperCardClicked)({
                                    readGuideCta: !1
                                })
                            },
                            children: (0, a.jsx)(i.default, {
                                className: x.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, a.jsx)("hr", {
                        className: x.separator
                    }), (0, a.jsxs)("div", {
                        className: x.inline,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(r.Heading, {
                                className: l(C.channelName, x.title),
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: f.default.Messages.FORUM_HELPER_CARD_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.default.Messages.FORUM_HELPER_CARD_BODY
                            })]
                        }), (0, a.jsx)("img", {
                            src: _,
                            alt: f.default.Messages.FORUM_HELPER_CARD_ALT_TEXT,
                            width: c.MAX_THUMBNAIL_WIDTH,
                            height: c.MAX_THUMBNAIL_WIDTH
                        })]
                    })]
                })
            }
        },
        1999: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ComposerUploadButton: function() {
                    return j
                },
                default: function() {
                    return O
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("627445"),
                r = s.n(l),
                i = s("301165"),
                o = s("446674"),
                u = s("77078"),
                d = s("371642"),
                c = s("206230"),
                m = s("850391"),
                h = s("271972"),
                f = s("761354"),
                g = s("42203"),
                x = s("474643"),
                C = s("585722"),
                _ = s("840817"),
                S = s("659500"),
                T = s("412861"),
                p = s("867965"),
                E = s("49111"),
                N = s("572228");
            let M = {
                    scale: .95,
                    opacity: 0
                },
                A = {
                    scale: 1,
                    opacity: 1
                },
                v = {
                    scale: 1,
                    opacity: 1
                },
                I = {
                    tension: 2400,
                    friction: 52
                };

            function j(e) {
                let {
                    channelId: t,
                    onClick: s,
                    onClose: l,
                    onMouseEnter: i
                } = e, c = n.useRef(null), m = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(t), [t]);
                return r(null != m, "Forum Channel is null"), (0, a.jsxs)(u.Clickable, {
                    className: N.uploadInput,
                    onMouseEnter: i,
                    onClick: () => {
                        (0, p.trackForumChannelMediaUploaderClicked)({
                            isMobile: !1
                        }), null == s || s()
                    },
                    onKeyPress: e => {
                        if ("Enter" === e.key) {
                            var t;
                            null === (t = c.current) || void 0 === t || t.activateUploadDialogue(), (0, p.trackForumChannelMediaUploaderClicked)({
                                isMobile: !1
                            })
                        }
                    },
                    children: [(0, a.jsx)(d.default, {
                        className: N.fileInput,
                        ref: c,
                        onChange: e => {
                            null == l || l(), (0, T.promptToUpload)(e.currentTarget.files, m, x.DraftType.FirstThreadMessage, {
                                requireConfirm: !0
                            }), S.ComponentDispatch.dispatch(E.ComponentActions.TEXTAREA_FOCUS), e.currentTarget.value = null
                        },
                        multiple: m.rateLimitPerUser <= 0,
                        tabIndex: -1,
                        "aria-hidden": !0
                    }), (0, a.jsx)(_.default, {
                        width: 28,
                        height: 28,
                        className: N.uploadIcon
                    })]
                })
            }

            function R(e) {
                let {
                    channelId: t,
                    closePopout: s
                } = e, [l, r] = n.useState(!1), {
                    reducedMotion: d
                } = n.useContext(u.AccessibilityPreferencesContext), g = (0, i.useSpring)({
                    from: d.enabled ? A : M,
                    to: v,
                    config: I
                }), x = (0, o.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled), _ = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type));
                return (0, a.jsx)(i.animated.div, {
                    className: N.popoutContainer,
                    onMouseLeave: () => {
                        !l && s()
                    },
                    style: g,
                    children: (0, a.jsxs)(u.ScrollerThin, {
                        orientation: "horizontal",
                        className: N.popout,
                        paddingFix: !1,
                        fade: !0,
                        children: [(0, a.jsx)(j, {
                            channelId: t,
                            onClick: () => {
                                r(!0)
                            },
                            onClose: () => {
                                r(!1), s()
                            }
                        }), (0, a.jsx)("div", {
                            className: N.uploads,
                            children: _.map(e => (0, a.jsx)(f.default, {
                                channelId: t,
                                draftType: m.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: x,
                                hideFileName: !0,
                                size: h.AttachmentListItemSizes.SMALL
                            }, e.id))
                        })]
                    })
                })
            }

            function O(e) {
                let {
                    channelId: t
                } = e, [s, l] = n.useState(!1), r = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type)), i = r.length, u = i > 0;
                n.useEffect(() => {
                    s && !u && l(!1)
                }, [s, u]);
                let d = () => {
                    u && l(!0)
                };
                return (0, a.jsxs)("div", {
                    className: N.container,
                    children: [u ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(f.UploadIcon, {
                            upload: r[0],
                            size: h.AttachmentListItemSizes.SMALL,
                            onMouseEnter: d
                        }), !s && (0, a.jsx)("div", {
                            className: N.badge,
                            children: i
                        })]
                    }) : (0, a.jsx)(j, {
                        onMouseEnter: d,
                        channelId: t
                    }), s && (0, a.jsx)(R, {
                        channelId: t,
                        closePopout: () => {
                            l(!1)
                        }
                    })]
                })
            }
        },
        530474: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return ef
                }
            }), s("222007"), s("843762");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("627445"),
                o = s.n(i),
                u = s("16470"),
                d = s("974667"),
                c = s("942367"),
                m = s("446674"),
                h = s("77078"),
                f = s("295426"),
                g = s("81594"),
                x = s("193865"),
                C = s("850391"),
                _ = s("740483"),
                S = s("681060"),
                T = s("830618"),
                p = s("939563"),
                E = s("236003"),
                N = s("549558"),
                M = s("884351"),
                A = s("39331"),
                v = s("82080"),
                I = s("328511"),
                j = s("467094"),
                R = s("24337"),
                O = s("967241"),
                F = s("517141"),
                L = s("719926"),
                b = s("474643"),
                P = s("957255"),
                y = s("401848"),
                D = s("585722"),
                U = s("697218"),
                w = s("837899"),
                k = s("213523"),
                H = s("381546"),
                B = s("462579"),
                G = s("867544"),
                V = s("660074"),
                z = s("987772"),
                W = s("229915"),
                K = s("547896"),
                Y = s("378765"),
                X = s("718422"),
                Z = s("412861"),
                q = s("119161"),
                Q = s("404607"),
                J = s("706065"),
                $ = s("680986"),
                ee = s("763245"),
                et = s("867965"),
                es = s("532308"),
                ea = s("1999"),
                en = s("578198"),
                el = s("90625"),
                er = s("337113"),
                ei = s("589455"),
                eo = s("953371"),
                eu = s("49111"),
                ed = s("724210"),
                ec = s("782340"),
                em = s("842875");
            let eh = C.ChatInputTypes.CREATE_FORUM_POST;

            function ef(e) {
                let {
                    parentChannel: t,
                    isSearchLoading: s,
                    onChange: l,
                    canCreatePost: i,
                    inputRef: o
                } = e, {
                    textAreaState: d,
                    formOpen: c,
                    previewing: f
                } = (0, en.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t,
                        formOpen: s,
                        previewing: a
                    } = e;
                    return {
                        textAreaState: t,
                        formOpen: s,
                        previewing: a
                    }
                }, u.default), [g, x] = n.useState(null), C = n.useContext(Y.ComponentDispatchGroupContext), _ = n.useCallback(() => {
                    C.bumpDispatchPriority()
                }, [C]), S = (0, m.useStateFromStores)([P.default], () => P.default.can(eu.Permissions.ATTACH_FILES, t)), T = (0, m.useStateFromStoresArray)([D.default], () => D.default.getUploads(t.id, b.DraftType.FirstThreadMessage)), p = c && S && i, A = (null == t ? void 0 : t.isMediaChannel()) === !0, v = function(e, t) {
                    let s = (0, en.useForumPostComposerStoreApi)(),
                        a = (0, $.useChannelTemplate)(e),
                        l = n.useCallback(() => {
                            let {
                                formOpen: n,
                                setFormOpenFromUserAction: l,
                                name: r,
                                textAreaState: i,
                                hasClickedForm: o
                            } = s.getState();
                            !n && (setTimeout(() => {
                                if (t.current instanceof h.TextAreaAutosize) {
                                    var e, s, a, n;
                                    null === (s = t.current) || void 0 === s || null === (e = s._textArea) || void 0 === e || e.setSelectionRange(r.length, r.length), null === (n = t.current) || void 0 === n || null === (a = n._textArea) || void 0 === a || a.focus()
                                }
                            }, 0), (o && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== a || D.default.getUploads(e.id, b.DraftType.FirstThreadMessage).length > 0) && l())
                        }, [s, e.id, a, t]);
                    return l
                }(t, o), R = function(e) {
                    let {
                        formOpen: t
                    } = (0, en.useForumPostComposerStore)(e => {
                        let {
                            formOpen: t
                        } = e;
                        return {
                            formOpen: t
                        }
                    }, u.default), s = (0, en.useForumPostComposerStoreApi)(), a = (0, F.useCreateForumPost)({
                        parentChannel: e
                    });
                    n.useEffect(() => {
                        let {
                            setNameError: e,
                            setMessageError: t
                        } = s.getState();
                        e(null), t(null)
                    }, [t, s]);
                    let l = n.useCallback((t, a, n) => {
                        let {
                            name: l,
                            textAreaState: r
                        } = s.getState();
                        null == t && (t = r.textValue), t = t.trim();
                        let {
                            content: i
                        } = M.default.parse(e, t);
                        if (t = i, null == a || 0 === a.length) {
                            var o;
                            a = null === (o = I.default.getStickerPreview(e.id, eh.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
                        }
                        if ((null == n || 0 === n.length) && (n = D.default.getUploads(e.id, b.DraftType.FirstThreadMessage)), null != n && n.length > 0 && e.isMediaChannel()) {
                            let e = n.findIndex(e => !0 === e.isThumbnail);
                            if (e > -1) {
                                let t = n[e];
                                n.splice(e, 1), n.unshift(t)
                            }
                        }
                        let u = 0 === l.length,
                            d = (null == t || 0 === t.length) && (null == a || 0 === a.length) && 0 === n.length;
                        return {
                            content: t,
                            stickers: a,
                            uploads: n,
                            hasNameError: u,
                            hasMessageError: d
                        }
                    }, [e, s]);
                    return n.useCallback(async (t, n, r) => {
                        let {
                            setNameError: i,
                            setMessageError: o,
                            setSubmitting: u,
                            resetFormState: d,
                            formOpen: c,
                            setFormOpen: m,
                            setPreviewing: h,
                            setFormOpenFromUserAction: f,
                            setGuidelinesOpen: g
                        } = s.getState(), x = J.default.hasSeen(e.id);
                        if (!c) return (0, et.trackForumCreateNewPostClick)({
                            guildId: e.guild_id,
                            channelId: e.id
                        }), !x && s.getState().setGuidelinesOpen(!0), f(), {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                        let {
                            content: C,
                            stickers: _,
                            uploads: S,
                            hasNameError: T,
                            hasMessageError: p
                        } = l(t, n, r);
                        if (i(T ? (0, q.makeEmptyTitleError)() : null), o(p ? (0, q.makeEmptyMessageError)() : null), T || p) return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                        try {
                            u(!0);
                            let {
                                valid: t
                            } = await (0, X.applyChatRestrictions)({
                                content: C,
                                stickers: _,
                                uploads: S,
                                type: eh,
                                channel: e
                            });
                            if (!t) return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                            let s = await a(C, _, S);
                            return (0, O.openThreadSidebarForViewing)(s), Q.default.resort(e.id), (0, j.clearStickerPreview)(e.id, eh.drafts.type), d(), m(!1), h(!1), J.default.markAsSeen(e.id), g(!1), {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        } catch (t) {
                            var E, N;
                            return (null === (E = t.body) || void 0 === E ? void 0 : E.code) === eu.AbortCodes.AUTOMOD_TITLE_BLOCKED ? i((0, q.makeAutomodViolationError)(t.body, e)) : (null === (N = t.body) || void 0 === N ? void 0 : N.code) === eu.AbortCodes.AUTOMOD_MESSAGE_BLOCKED && o((0, q.makeAutomodViolationError)(t.body, e)), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        } finally {
                            u(!1)
                        }
                    }, [a, l, e, s])
                }(t);
                return n.useLayoutEffect(l, [c, d, T, l]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        "aria-label": i ? ec.default.Messages.NEW_FORUM_POST : ec.default.Messages.SEARCH,
                        className: r(em.container, {
                            [em.collapsed]: !c
                        }),
                        onClick: !c && i ? v : void 0,
                        children: (0, a.jsxs)("form", {
                            onMouseDown: _,
                            onFocus: _,
                            onSubmit: e => {
                                e.preventDefault(), i && R()
                            },
                            children: [(0, a.jsxs)("div", {
                                className: em.formContainer,
                                children: [(0, a.jsx)(eg, {
                                    parentChannel: t,
                                    isSearchLoading: s,
                                    inputRef: o
                                }), (0, a.jsxs)("div", {
                                    className: f ? em.previewForm : em.form,
                                    children: [(0, a.jsx)(ex, {
                                        editorRef: g,
                                        parentChannel: t,
                                        isSearchLoading: s,
                                        inputRef: o,
                                        canCreatePost: i
                                    }), c && (0, a.jsx)(eS, {
                                        editorRef: g,
                                        setEditorRef: x,
                                        parentChannel: t,
                                        submit: R,
                                        disabled: !i
                                    }), f && (0, a.jsx)(eT, {})]
                                }), p && (A ? (0, a.jsx)(N.MediaPostThumbnail, {
                                    parentChannel: t
                                }) : (0, a.jsx)(ea.default, {
                                    channelId: t.id
                                }))]
                            }), (0, a.jsxs)("div", {
                                className: em.form,
                                children: [p && A && (0, a.jsx)(E.default, {
                                    parentChannel: t
                                }), c && (0, a.jsx)(eE, {
                                    className: em.horizontalPadding,
                                    parentChannel: t,
                                    canCreatePost: i
                                })]
                            })]
                        })
                    })
                })
            }
            let eg = n.memo(function(e) {
                    let {
                        parentChannel: t,
                        isSearchLoading: s,
                        inputRef: l
                    } = e, {
                        formOpen: r,
                        name: i,
                        textAreaState: o,
                        hasClickedForm: d,
                        submitting: c
                    } = (0, en.useForumPostComposerStore)(e => {
                        let {
                            formOpen: t,
                            nameError: s,
                            name: a,
                            previewing: n,
                            textAreaState: l,
                            hasClickedForm: r,
                            submitting: i
                        } = e;
                        return {
                            formOpen: t,
                            nameError: s,
                            name: a,
                            textAreaState: l,
                            previewing: n,
                            hasClickedForm: r,
                            submitting: i
                        }
                    }, u.default), m = (0, en.useForumPostComposerStoreApi)(), x = (0, $.useChannelTemplate)(t), C = n.useCallback(() => {
                        var e;
                        m.getState().resetFormState(), f.default.clearDraft(t.id, b.DraftType.ThreadSettings), f.default.clearDraft(t.id, b.DraftType.FirstThreadMessage), g.default.clearAll(t.id, b.DraftType.FirstThreadMessage), m.getState().setFormOpen(!1), m.getState().setBodyFocused(!1), m.getState().setTitleFocused(!1), m.getState().setHasClickedForm(!1), m.getState().setPreviewing(!1), null === (e = l.current) || void 0 === e || e.blur(), (0, et.trackForumNewPostCleared)({
                            guildId: t.guild_id,
                            channelId: t.id
                        })
                    }, [m, t.id, t.guild_id, l]), _ = n.useMemo(() => s && !r ? (0, a.jsx)(ev, {}) : s || r || 0 !== o.textValue.trim().length && o.textValue.trim() !== x ? !r && (i.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== x || D.default.getUploads(t.id, b.DraftType.FirstThreadMessage).length > 0) && d ? (0, a.jsx)(z.default, {
                        className: em.pencilIcon,
                        width: 24,
                        height: 24
                    }) : c ? (0, a.jsx)(H.default, {
                        className: em.closeIconDisabled,
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(h.Tooltip, {
                        text: ec.default.Messages.FORUM_CLEAR_ALL,
                        children: e => (0, a.jsx)(h.Clickable, {
                            ...e,
                            onClick: C,
                            children: (0, a.jsx)(H.default, {
                                className: em.closeIcon,
                                width: 24,
                                height: 24
                            })
                        })
                    }) : (0, a.jsx)(W.default, {
                        className: em.searchIcon,
                        width: 24,
                        height: 24
                    }), [s, r, d, i, o.textValue, C, t.id, x, c]);
                    return (0, a.jsx)("div", {
                        className: em.prefixElement,
                        children: _
                    })
                }),
                ex = n.memo(function(e) {
                    let {
                        parentChannel: t,
                        inputRef: s,
                        canCreatePost: l,
                        editorRef: r
                    } = e, {
                        formOpen: i,
                        nameError: d,
                        name: c,
                        textAreaState: f,
                        previewing: g
                    } = (0, en.useForumPostComposerStore)(e => {
                        let {
                            formOpen: t,
                            nameError: s,
                            name: a,
                            previewing: n,
                            textAreaState: l,
                            hasClickedForm: r,
                            submitting: i
                        } = e;
                        return {
                            formOpen: t,
                            nameError: s,
                            name: a,
                            textAreaState: l,
                            previewing: n,
                            hasClickedForm: r,
                            submitting: i
                        }
                    }, u.default), x = (0, en.useForumPostComposerStoreApi)(), C = null != t.topic && 0 !== t.topic.length, _ = J.default.hasSeen(t.id), S = (0, $.useChannelTemplate)(t), T = (0, m.useStateFromStores)([U.default], () => U.default.getCurrentUser());
                    o(null != T, "current user cannot be null");
                    (0, Y.useComponentAction)({
                        event: eu.ComponentActions.FOCUS_COMPOSER_TITLE,
                        handler: () => {
                            var e;
                            let t = s.current instanceof h.TextAreaAutosize ? null === (e = s.current) || void 0 === e ? void 0 : e._textArea : s.current;
                            null == t || t.focus(), x.getState().setTitleFocused(!0), x.getState().setFormOpen(!0), x.getState().setHasClickedForm(!0)
                        }
                    });
                    let p = n.useCallback(e => {
                            let s = e.clipboardData.files[0];
                            null != s && s.type.startsWith("image/") && (e.preventDefault(), (0, Z.promptToUpload)([s], t, b.DraftType.FirstThreadMessage), x.getState().setFormOpenFromUserAction())
                        }, [t, x]),
                        E = (0, q.renderError)(d, {
                            content: c
                        });
                    return (0, a.jsxs)("div", {
                        className: em.titleContainer,
                        onPaste: p,
                        children: [i && g ? (0, a.jsx)(h.Heading, {
                            variant: "heading-md/semibold",
                            className: em.title,
                            children: c
                        }) : (0, a.jsx)(h.TextArea, {
                            value: c,
                            placeholder: l ? i || f.textValue.length > 0 && f.textValue.trim() !== S ? ec.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : ec.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : ec.default.Messages.SEARCH,
                            flex: !0,
                            autosize: i,
                            rows: 1,
                            showCharacterCount: !1,
                            showRemainingCharacterCount: !1,
                            maxLength: eu.MAX_CHANNEL_NAME_LENGTH,
                            onChange: e => {
                                let s = (0, R.default)(e, !1);
                                x.getState().setName(s);
                                let a = 0 === s.trim().length,
                                    n = 0 === f.textValue.trim().length,
                                    l = f.textValue.trim() === S;
                                a && (n || l) && x.getState().setHasClickedForm(!1), !i && Q.default.updateForumSearchQuery(t.id, s)
                            },
                            onFocus: () => {
                                x.getState().setTitleFocused(!0), x.getState().setBodyFocused(!1)
                            },
                            onBlur: () => {
                                x.getState().setTitleFocused(!1);
                                let e = (0, R.default)(c, !0);
                                e !== c && (x.getState().setName(e), !i && Q.default.updateForumSearchQuery(t.id, e))
                            },
                            onKeyDown: e => {
                                var a, n;
                                "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), i && c.length > 0 ? null == r || r.focus() : l && e.shiftKey && ((0, et.trackForumCreateNewPostKeybindUsed)({
                                    guildId: t.guild_id,
                                    channelId: t.id
                                }), C && !_ && x.getState().setGuidelinesOpen(!0), x.getState().setFormOpenFromUserAction(), c.trim().length > 0 && (x.getState().setBodyFocused(!0), null == r || r.focus())));
                                let o = s.current instanceof h.TextAreaAutosize ? null === (a = s.current) || void 0 === a ? void 0 : a._textArea : s.current;
                                if ("Home" === e.key || "End" === e.key) {
                                    if (null == o) return;
                                    if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) o.setSelectionRange(0, 0);
                                    else {
                                        let e = c.length;
                                        o.setSelectionRange(e, e)
                                    }
                                }
                                "Escape" === e.key && !x.getState().submitting && (null === (n = s.current) || void 0 === n || n.blur(), x.getState().setFormOpen(!1), x.getState().setTitleFocused(!1), x.getState().setBodyFocused(!1), x.getState().setPreviewing(!1))
                            },
                            error: E,
                            className: em.title,
                            inputRef: s
                        }), i ? null : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(eC, {
                                parentChannel: t
                            }), (0, a.jsx)(eN, {
                                parentChannel: t,
                                canCreatePost: l
                            })]
                        })]
                    })
                });

            function eC(e) {
                let {
                    parentChannel: t
                } = e, {
                    guidelinesOpen: s
                } = (0, en.useForumPostComposerStore)(e => {
                    let {
                        guidelinesOpen: t
                    } = e;
                    return {
                        guidelinesOpen: t
                    }
                }), n = (0, en.useForumPostComposerStoreApi)(), l = null != t.topic && 0 !== t.topic.length, i = () => {
                    n.getState().setGuidelinesOpen(!s)
                };
                return l ? (0, a.jsx)(h.Tooltip, {
                    text: ec.default.Messages.FORUM_POST_GUIDELINES_TITLE,
                    children: e => (0, a.jsx)(h.Clickable, {
                        ...e,
                        onClick: i,
                        className: r(em.forumPostFormButton, {
                            [em.forumPostFormButtonActive]: s
                        }),
                        children: (0, a.jsx)(k.default, {
                            ...e,
                            width: 24,
                            height: 24
                        })
                    })
                }) : null
            }
            let e_ = n.memo(function(e) {
                    let {
                        parentChannel: t,
                        textValue: s
                    } = e, n = new L.default({
                        channelId: t.id,
                        content: s
                    }), l = (0, x.useShowImprovedMarkdownUserExperimentConfig)(new Date().valueOf()), r = (0, x.useShowImprovedMarkdownGuildExperimentConfig)(t.guild_id, new Date().valueOf()), {
                        content: i
                    } = (0, A.default)(n, {
                        hideSimpleEmbedContent: !0,
                        isInteracting: !1,
                        formatInline: !1,
                        allowList: !0,
                        allowHeading: !0,
                        allowLinks: l.showMaskedLinks || r.showMaskedLinks,
                        previewLinkTarget: l.showMaskedLinks || r.showMaskedLinks
                    }), o = (0, v.default)({
                        message: n,
                        channel: t
                    }, i, !1);
                    return (0, a.jsx)("div", {
                        className: em.channelTextAreaInner,
                        children: o
                    })
                }),
                eS = n.memo(function(e) {
                    let {
                        parentChannel: t,
                        submit: s,
                        disabled: l = !1,
                        editorRef: i,
                        setEditorRef: d
                    } = e, c = (0, m.useStateFromStores)([U.default], () => U.default.getCurrentUser());
                    o(null != c, "current user cannot be null");
                    let {
                        messageError: f,
                        previewing: g,
                        textAreaState: x,
                        bodyFocused: C,
                        formOpen: _
                    } = (0, en.useForumPostComposerStore)(e => {
                        let {
                            messageError: t,
                            textAreaState: s,
                            previewing: a,
                            bodyFocused: n,
                            formOpen: l
                        } = e;
                        return {
                            messageError: t,
                            textAreaState: s,
                            previewing: a,
                            bodyFocused: n,
                            formOpen: l
                        }
                    }, u.default), T = (0, en.useForumPostComposerStoreApi)();
                    n.useEffect(() => () => (0, et.maybeTrackForumNewPostDraftCreated)({
                        guildId: t.guild_id,
                        channelId: t.id
                    }), [t.guild_id, t.id]);
                    let E = n.useCallback(() => {
                            T.getState().setBodyFocused(!0)
                        }, [T]),
                        N = n.useCallback(() => {
                            T.getState().setBodyFocused(!1)
                        }, [T]),
                        M = n.useCallback((e, t, s) => {
                            let {
                                setTextAreaState: a
                            } = T.getState();
                            a({
                                textValue: t,
                                richValue: s
                            })
                        }, [T]),
                        A = n.useCallback(e => {
                            let {
                                value: t,
                                uploads: a,
                                stickers: n
                            } = e;
                            return s(t, n, a)
                        }, [s]);
                    (0, Y.useComponentAction)({
                        event: eu.ComponentActions.TEXTAREA_FOCUS,
                        handler: E
                    }), (0, Y.useComponentAction)({
                        event: eu.ComponentActions.TEXTAREA_BLUR,
                        handler: N
                    });
                    let v = (0, q.renderError)(f, {
                        content: x.textValue
                    });
                    return (0, a.jsx)("div", {
                        className: em.bodyContainer,
                        children: (0, a.jsxs)("div", {
                            className: em.contentContainer,
                            children: [g ? (0, a.jsx)(e_, {
                                parentChannel: t,
                                textValue: x.textValue
                            }) : (0, a.jsx)("div", {
                                onClick: E,
                                children: (0, a.jsx)(S.default, {
                                    type: eh,
                                    setEditorRef: d,
                                    channel: t,
                                    placeholder: ec.default.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
                                    textValue: x.textValue,
                                    richValue: x.richValue,
                                    focused: C,
                                    className: em.channelTextArea,
                                    innerClassName: r(em.channelTextAreaInner, {
                                        [em.channelTextAreaInnerError]: null != v
                                    }),
                                    onChange: M,
                                    onSubmit: A,
                                    promptToUpload: Z.promptToUpload,
                                    disabled: l,
                                    onKeyDown: e => {
                                        if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                                            if (null == i) return;
                                            e.preventDefault(), e.stopPropagation();
                                            let t = i.getSlateEditor();
                                            if (null == t) return;
                                            "Home" === e.key ? p.SlateTransforms.resetSelectionToStart(t) : p.SlateTransforms.resetSelectionToEnd(t)
                                        }
                                        _ && "Escape" === e.key && !T.getState().submitting && (null == i || i.blur(), T.getState().setFormOpen(!1), T.getState().setTitleFocused(!1), T.getState().setBodyFocused(!1), T.getState().setPreviewing(!1))
                                    },
                                    autoCompletePosition: "bottom"
                                })
                            }), (0, a.jsx)(h.InputError, {
                                error: v
                            })]
                        })
                    })
                });

            function eT() {
                return (0, a.jsx)("div", {
                    className: em.previewModeIndicator,
                    children: (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "interactive-normal",
                        children: ec.default.Messages.PREVIEW_MODE
                    })
                })
            }

            function ep() {
                let e = (0, ee.useIsForumPostPreviewEnabled)(),
                    {
                        previewing: t
                    } = (0, en.useForumPostComposerStore)(e => {
                        let {
                            previewing: t
                        } = e;
                        return {
                            previewing: t
                        }
                    }),
                    s = (0, en.useForumPostComposerStoreApi)(),
                    l = n.useCallback(() => {
                        s.getState().setPreviewing(!t), (0, et.trackForumPreviewPostClicked)()
                    }, [t, s]);
                return e ? (0, a.jsx)(h.Tooltip, {
                    text: t ? ec.default.Messages.EXIT_PREVIEW : ec.default.Messages.PREVIEW,
                    children: e => (0, a.jsx)(h.Clickable, {
                        ...e,
                        onClick: l,
                        className: r(em.forumPostFormButton, {
                            [em.forumPostFormButtonActive]: t
                        }),
                        children: t ? (0, a.jsx)(G.default, {
                            ...e,
                            width: 24,
                            height: 24
                        }) : (0, a.jsx)(B.default, {
                            ...e,
                            width: 24,
                            height: 24
                        })
                    })
                }) : null
            }
            let eE = n.memo(function(e) {
                let {
                    parentChannel: t,
                    canCreatePost: s,
                    className: l
                } = e, {
                    textAreaState: r,
                    appliedTags: i,
                    name: o
                } = (0, en.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t,
                        appliedTags: s,
                        name: a
                    } = e;
                    return {
                        textAreaState: t,
                        appliedTags: s,
                        name: a
                    }
                }), {
                    rateLimitPerUser: u
                } = t, d = u > 0, c = (0, m.useStateFromStores)([y.default], () => y.default.getSlowmodeCooldownGuess(t.id, y.SlowmodeType.CreateThread)), f = (0, m.useStateFromStores)([P.default], () => P.default.can(eu.Permissions.MANAGE_THREADS, t) || P.default.can(eu.Permissions.MANAGE_CHANNELS, t)), g = t.hasFlag(ed.ChannelFlags.REQUIRE_TAG) && 0 === i.size && o.length > 0 && r.textValue.length > 0, x = (0, en.useForumPostComposerStoreApi)(), C = n.useCallback(() => {
                    x.getState().setBodyFocused(!1)
                }, [x]), S = n.useMemo(() => "" !== o.trim() && "" !== r.textValue.trim(), [o, r.textValue]);
                return n.useEffect(() => {
                    !S && x.getState().setPreviewing(!1)
                }, [S, x]), (0, a.jsxs)("div", {
                    className: l,
                    children: [(0, a.jsx)(eA, {
                        parentChannel: t
                    }), (0, a.jsx)("div", {
                        className: em.tagsDivider
                    }), (0, a.jsxs)("div", {
                        className: em.controlsContainer,
                        children: [(0, a.jsxs)("div", {
                            className: em.controls,
                            children: [(0, a.jsxs)("div", {
                                className: em.wrappedControls,
                                children: [g && (0, a.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    children: ec.default.Messages.FORUM_POST_TAG_REQUIRED_ERROR
                                }), (0, a.jsx)(T.default, {
                                    type: eh,
                                    textValue: r.textValue,
                                    className: em.characterCount
                                }), d && (0, a.jsx)(er.default, {
                                    rateLimitPerUser: u,
                                    slowmodeCooldownGuess: c,
                                    isBypassSlowmode: f,
                                    leadingIcon: !0
                                })]
                            }), (0, a.jsx)(eC, {
                                parentChannel: t
                            }), S && (0, a.jsx)(ep, {}), (0, a.jsx)(eN, {
                                parentChannel: t,
                                disableIfInvalid: !0,
                                canCreatePost: s,
                                disabled: d && !f && c > 0
                            })]
                        }), (0, a.jsx)(_.default, {
                            type: eh,
                            className: em.expressionPicker,
                            onClick: C
                        }, "expression")]
                    })]
                })
            });

            function eN(e) {
                let {
                    parentChannel: t,
                    canCreatePost: s,
                    disabled: n,
                    disableIfInvalid: l = !1
                } = e, {
                    submitting: r,
                    textAreaState: i,
                    name: o,
                    appliedTags: u,
                    formOpen: d
                } = (0, en.useForumPostComposerStore)(e => {
                    let {
                        submitting: t,
                        textAreaState: s,
                        name: a,
                        appliedTags: n,
                        formOpen: l
                    } = e;
                    return {
                        submitting: t,
                        textAreaState: s,
                        name: a,
                        appliedTags: n,
                        formOpen: l
                    }
                }), c = t.hasFlag(ed.ChannelFlags.REQUIRE_TAG) && 0 === u.size && o.length > 0 && i.textValue.length > 0, f = (0, m.useStateFromStoresArray)([D.default], () => D.default.getUploads(t.id, b.DraftType.FirstThreadMessage)), g = i.textValue.trim().length > 0 || f.length > 0, x = !c && g && o.trim().length > 0;
                if (__OVERLAY__) return null;
                let C = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.jsxs)(h.Button, {
                        ...e,
                        size: h.Button.Sizes.SMALL,
                        className: em.submitButton,
                        innerClassName: em.submitButtonInner,
                        type: "submit",
                        submitting: r,
                        disabled: l && !x || n || !s,
                        children: [(0, a.jsx)(V.default, {
                            className: em.submitIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            color: "none",
                            children: d ? ec.default.Messages.SUBMIT_POST : ec.default.Messages.NEW_FORUM_POST_NEW
                        })]
                    })
                };
                return s ? C() : (0, a.jsx)(h.Tooltip, {
                    text: ec.default.Messages.FORUM_NO_POST_PERMISSION_HELP,
                    children: e => C(e)
                })
            }

            function eM() {
                return Promise.resolve()
            }

            function eA(e) {
                let {
                    parentChannel: t
                } = e, {
                    appliedTags: s,
                    toggleAppliedTag: l,
                    setPopoutOpen: i
                } = (0, en.useForumPostComposerStore)(e => {
                    let {
                        appliedTags: t,
                        toggleAppliedTag: s,
                        setPopoutOpen: a
                    } = e;
                    return {
                        appliedTags: t,
                        toggleAppliedTag: s,
                        setPopoutOpen: a
                    }
                }, u.default), o = s.size >= eo.MAX_FORUM_POST_TAGS, m = (0, d.default)({
                    id: "".concat(t.id, "-post-form-tags-navigator"),
                    isEnabled: !0,
                    wrap: !0,
                    scrollToStart: eM,
                    scrollToEnd: eM,
                    orientation: c.Orientations.HORIZONTAL
                }), {
                    containerRef: f,
                    containerWidth: g
                } = (0, ei.default)(), x = n.useRef(null), [C, _] = n.useState(!0), S = (0, $.useVisibleForumTags)(t), [T, p] = n.useState(0);
                return (n.useLayoutEffect(() => {
                    var e;
                    let t = x.current,
                        s = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
                        a = null == t || null == s || s.clientHeight > t.clientHeight;
                    if (a !== C && _(a), a && null != f.current && null != s && null != s.children) {
                        let {
                            left: e,
                            top: t
                        } = f.current.getBoundingClientRect(), a = 0;
                        for (let n of s.children) {
                            let {
                                right: s,
                                top: l,
                                height: r
                            } = n.getBoundingClientRect();
                            if (l - t > r) break;
                            s - e > a && (a = s - e)
                        }
                        p(a)
                    }
                }, [S, C, f, g]), 0 === S.length) ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: em.tagsContainer,
                        ref: f,
                        children: [(0, a.jsx)(K.default, {
                            className: em.tagsIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)("div", {
                            className: em.tagList,
                            ref: x,
                            children: (0, a.jsx)(d.ListNavigatorProvider, {
                                navigator: m,
                                children: (0, a.jsx)(d.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            ...n
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: em.tagListInner,
                                            ref: t,
                                            ...n,
                                            children: S.map(e => (0, a.jsx)(el.default, {
                                                ariaLabel: ec.default.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                                                    tagName: e.name
                                                }),
                                                tag: e,
                                                onClick: o && !s.has(e.id) ? void 0 : () => l(e.id),
                                                disabled: !s.has(e.id) && s.size >= eo.MAX_FORUM_POST_TAGS,
                                                selected: s.has(e.id),
                                                size: el.default.Sizes.SMALL
                                            }, e.id))
                                        })
                                    }
                                })
                            })
                        }), C && (0, a.jsx)(h.Popout, {
                            onRequestOpen: () => i(!0),
                            onRequestClose: () => i(!1),
                            renderPopout: e => {
                                let {
                                    closePopout: n
                                } = e;
                                return (0, a.jsx)(es.default, {
                                    parentChannel: t,
                                    appliedTags: s,
                                    maxTagsApplied: o,
                                    onSelectTag: l,
                                    onClose: n
                                })
                            },
                            position: "bottom",
                            align: "center",
                            children: e => (0, a.jsxs)(h.Button, {
                                ...e,
                                size: h.Button.Sizes.TINY,
                                className: em.tagsButton,
                                innerClassName: em.tagsButtonInner,
                                style: {
                                    left: T
                                },
                                look: h.Button.Looks.LINK,
                                "aria-label": ec.default.Messages.ADD_TAG_FORUM_POST,
                                children: [ec.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, a.jsx)(w.default, {
                                    width: 16
                                })]
                            })
                        }), (0, a.jsxs)(h.Button, {
                            size: h.Button.Sizes.TINY,
                            className: r(em.tagsButton, em.tagsButtonPlaceholder),
                            innerClassName: em.tagsButtonInner,
                            look: h.Button.Looks.LINK,
                            "aria-label": ec.default.Messages.ADD_TAG_FORUM_POST,
                            children: [ec.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, a.jsx)(w.default, {
                                width: 16
                            })]
                        })]
                    })
                })
            }

            function ev(e) {
                let {
                    style: t,
                    className: s
                } = e;
                return (0, a.jsx)("div", {
                    className: s,
                    style: t,
                    children: (0, a.jsx)("div", {
                        className: em.loader
                    })
                })
            }
        },
        592633: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return V
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("335710"),
                o = s("446674"),
                u = s("669491"),
                d = s("77078"),
                c = s("125667"),
                m = s("955735"),
                h = s("963119"),
                f = s("651693"),
                g = s("605160"),
                x = s("70845"),
                C = s("933629"),
                _ = s("845579"),
                S = s("982108"),
                T = s("42203"),
                p = s("957255"),
                E = s("594098"),
                N = s("887718"),
                M = s("95689"),
                A = s("132755"),
                v = s("497880"),
                I = s("956089"),
                j = s("680986"),
                R = s("612278"),
                O = s("791234"),
                F = s("512630"),
                L = s("152637"),
                b = s("363622"),
                P = s("855455"),
                y = s("136460"),
                D = s("601016"),
                U = s("485055"),
                w = s("390083"),
                k = s("953371"),
                H = s("49111"),
                B = s("782340"),
                G = s("507134"),
                V = n.memo(function(e) {
                    let {
                        id: t,
                        threadId: s,
                        goToThread: n,
                        overrideMedia: l,
                        className: r,
                        coords: i,
                        gridCoords: u,
                        gridSectionBoundaries: d,
                        observePostVisibilityAnalytics: c
                    } = e, m = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(s));
                    return null == m ? null : (0, a.jsx)(z, {
                        id: t,
                        channel: m,
                        goToThread: n,
                        overrideMedia: l,
                        className: r,
                        coords: i,
                        gridCoords: u,
                        observePostVisibilityAnalytics: c,
                        gridSectionBoundaries: d
                    })
                });

            function z(e) {
                let {
                    id: t,
                    channel: s,
                    goToThread: l,
                    overrideMedia: c,
                    className: m,
                    coords: h,
                    gridCoords: f,
                    gridSectionBoundaries: g,
                    observePostVisibilityAnalytics: C
                } = e, E = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(s.parent_id)), N = s.id, M = n.useRef(null), A = (0, o.useStateFromStores)([S.default], () => S.default.getCurrentSidebarChannelId(s.parent_id) === s.id), {
                    firstMessage: v,
                    loaded: F
                } = (0, R.useFirstForumPostMessage)(s), {
                    firstMedia: P
                } = (0, j.useForumPostFirstMessageMarkup)({
                    firstMessage: v,
                    formatInline: !1,
                    noStyleAndInteraction: !1
                }), {
                    messageCountText: V
                } = (0, j.useMessageCount)(s), {
                    isNew: z,
                    hasUnreads: K
                } = (0, j.useForumPostReadStates)(s), Y = n.useRef(null), {
                    handleLeftClick: Z,
                    handleRightClick: Q
                } = (0, w.default)({
                    facepileRef: Y,
                    goToThread: l,
                    channel: s
                });
                n.useEffect(() => {
                    null == C || C(M.current, N)
                }, [C, N]);
                let J = (0, o.useStateFromStores)([p.default], () => p.default.can(H.Permissions.MANAGE_MESSAGES, s)),
                    $ = _.GifAutoPlay.useSetting(),
                    ee = _.RenderSpoilers.useSetting(),
                    et = (0, x.default)(ee, J),
                    es = (0, O.useForumPostMediaThumbnail)(v, E, !1),
                    [ea, en] = (0, b.getFrameDimensions)(h.width - 2 * b.IMAGE_PADDING),
                    el = (0, j.useLastActiveTimestamp)(s, i.ThreadSortOrder.CREATION_DATE, k.ForumTimestampFormats.POSTED_DURATION_AGO),
                    er = (0, L.useHighlightedChannelName)(s),
                    ei = (null == v ? void 0 : v.blocked) || null == (null != c ? c : P),
                    {
                        onFocus: eo,
                        ...eu
                    } = (0, U.useForumGridItem)({
                        id: t,
                        row: f.row,
                        column: f.column,
                        section: f.section,
                        boundaries: g
                    }),
                    ed = s.isMediaPost();
                return (0, a.jsxs)("li", {
                    ref: M,
                    onClick: Z,
                    onFocus: eo,
                    onContextMenu: Q,
                    className: r(G.container, m, {
                        [G.isOpen]: A
                    }),
                    style: {
                        ...h
                    },
                    children: [(0, a.jsx)(d.Clickable, {
                        onClick: Z,
                        focusProps: {
                            ringTarget: M
                        },
                        onContextMenu: Q,
                        "aria-label": B.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: s.name,
                            count: V
                        }),
                        className: G.focusTarget,
                        ...eu
                    }), (0, a.jsxs)("div", {
                        className: G.header,
                        children: [(0, a.jsxs)("div", {
                            className: G.authorRow,
                            children: [(0, a.jsxs)("div", {
                                className: G.rowGroup,
                                children: [(0, a.jsx)(y.default, {
                                    channel: s,
                                    message: v
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: G.postCreationTimestamp,
                                    children: el
                                })]
                            }), z ? (0, a.jsx)(I.TextBadge, {
                                className: r(G.newBadge),
                                color: u.default.unsafe_rawColors.BRAND_260.css,
                                text: B.default.Messages.NEW
                            }) : null]
                        }), (0, a.jsx)(d.HeadingLevel, {
                            children: (0, a.jsx)(d.Heading, {
                                variant: "heading-md/extrabold",
                                className: G.title,
                                color: K ? "header-primary" : "text-muted",
                                style: {
                                    width: "".concat(h.width - 2 * b.GRID_POST_CONTROLS_MARGIN, "px")
                                },
                                children: er
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: G.postBody,
                        children: (0, a.jsx)(d.FocusBlock, {
                            children: ei ? (0, a.jsx)(q, {
                                channel: s,
                                firstMessage: v,
                                isFirstMessageLoaded: F,
                                containerWidth: h.width,
                                hasUnreads: K
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(X, {
                                    mediaAttachments: es,
                                    globalSpoilerRenderSetting: et,
                                    containerWidth: ea,
                                    containerHeight: ed ? ea * (9 / 16) : en,
                                    canAutoPlay: $,
                                    shouldMaintainAspectRatio: ed
                                }), (0, a.jsx)("div", {
                                    className: G.tagsRow,
                                    children: (0, a.jsx)(D.default, {
                                        channel: s,
                                        tagsClassName: G.tagPill
                                    })
                                })]
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: G.footer,
                        children: (0, a.jsx)(d.FocusBlock, {
                            children: (0, a.jsx)(W, {
                                channel: s,
                                firstMessage: v,
                                facepileRef: Y
                            })
                        })
                    })]
                })
            }

            function W(e) {
                let {
                    channel: t,
                    facepileRef: s,
                    firstMessage: n
                } = e, l = (0, j.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
                return (0, a.jsxs)("div", {
                    className: G.forumPostControls,
                    children: [(0, a.jsxs)("div", {
                        className: G.controlsGroup,
                        children: [(0, a.jsx)("div", {
                            className: G.messageCountContainer,
                            children: (0, a.jsx)(L.MessageCount, {
                                channel: t,
                                iconSize: 16,
                                showReadState: !0
                            })
                        }), l.length > 0 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: G.bullet,
                                children: "•"
                            }), (0, a.jsxs)("div", {
                                className: G.typing,
                                children: [(0, a.jsx)(L.Facepile, {
                                    channel: t,
                                    userIds: l,
                                    facepileRef: s
                                }), (0, a.jsx)("div", {
                                    className: G.dots,
                                    children: (0, a.jsx)(d.Dots, {
                                        themed: !0,
                                        dotRadius: 2
                                    })
                                }), (0, a.jsx)(c.default, {
                                    channel: t,
                                    className: G.typingUsers,
                                    renderDots: !1
                                })]
                            })]
                        }) : null]
                    }), (0, a.jsxs)("div", {
                        className: G.controlsGroup,
                        children: [r || null == n ? null : (0, a.jsx)(L.DefaultReaction, {
                            firstMessage: n,
                            channel: t
                        }), null == n ? null : (0, a.jsx)(L.MostUsedReaction, {
                            firstMessage: n,
                            channel: t
                        })]
                    })]
                })
            }
            let K = e => e.preventDefault(),
                Y = n.memo(function(e) {
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, C.renderImageComponent)(e)
                    })
                }),
                X = n.memo(function(e) {
                    let {
                        mediaAttachments: t,
                        globalSpoilerRenderSetting: s,
                        containerWidth: l,
                        containerHeight: i,
                        canAutoPlay: o,
                        shouldMaintainAspectRatio: u = !1
                    } = e, {
                        containsVideo: d,
                        containsGif: c
                    } = n.useMemo(() => (0, O.messageContainsGifOrVideo)(t), [t]), x = n.useMemo(() => t.slice(P.MOSAIC_MIN_INDEX, P.MOSAIC_MAX_INDEX), [t]), C = (0, P.useImageContainerStyles)({
                        numAttachments: x.length,
                        containerWidth: l,
                        containerHeight: i
                    }), _ = (0, P.useImageDimensionStyles)({
                        imageContainerStyles: C,
                        containerWidth: l,
                        containerHeight: i
                    }), S = (0, h.useShouldRedactExplicitContentForForum)(), T = n.useMemo(() => x.map((e, t) => {
                        var n;
                        let [l, i] = (0, g.getForumPostShouldObscure)(e, !s, S), h = (0, g.getObscuredAlt)(i), x = {
                            ..._[t],
                            src: e.src,
                            width: e.width,
                            height: e.height,
                            alt: null != e.alt && l ? h : e.alt,
                            onClick: K,
                            shouldRenderAccessory: !c && !d
                        }, T = (0, f.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, p = o && !l ? e.src : T;
                        return (0, a.jsxs)("div", {
                            className: G.bodyMediaFrame,
                            style: C[t],
                            children: [u ? (0, a.jsx)(m.default, {
                                ...x,
                                src: p,
                                backgroundSrc: T,
                                aspectRatio: x.maxWidth / x.maxHeight,
                                alt: null !== (n = x.alt) && void 0 !== n ? n : "",
                                className: r(G.mediaPostContainer, {
                                    [G.obscured]: l
                                }),
                                imageChildClassName: G.mediaPostThumbnail
                            }) : e.src.startsWith("data:") ? (0, a.jsx)(E.default, {
                                ...x,
                                className: G.mediaContainer,
                                imageClassName: r(G.thumbnailOverride, {
                                    [G.obscured]: l
                                })
                            }) : (0, a.jsx)(Y, {
                                ...x,
                                autoPlay: o && !l,
                                containerClassName: G.mosaicMediaContainer,
                                imageClassName: r(G.imageCover, {
                                    [G.obscured]: l
                                }),
                                responsive: !0
                            }), l && (0, a.jsx)("div", {
                                className: G.obscuredTagContainer,
                                children: (0, a.jsx)(F.default, {
                                    obscureReason: i,
                                    iconClassname: G.obscuredTag
                                })
                            })]
                        }, e.src)
                    }), [o, c, d, s, C, _, x, u, S]);
                    return (0, a.jsxs)("div", {
                        className: G.bodyMedia,
                        style: {
                            width: l,
                            height: i
                        },
                        children: [(0, a.jsx)(a.Fragment, {
                            children: T
                        }), (c || d) && (0, a.jsxs)("div", {
                            className: G.mediaIconsRow,
                            children: [d && (0, a.jsx)(A.default, {
                                width: "22px",
                                height: "22px",
                                className: G.mediaIcon
                            }), c && (0, a.jsx)(N.default, {
                                className: G.mediaIcon
                            })]
                        }), t.length > P.MOSAIC_MAX_IMAGE_COUNT && (0, a.jsx)(Z, {
                            text: (t.length - (0, P.MOSAIC_MAX_IMAGE_COUNT)).toString(),
                            icon: M.default,
                            pillClassName: G.moreImagesPill,
                            iconClassName: G.moreImagesPillIcon,
                            textClassName: G.moreImagesPillText
                        })]
                    })
                });

            function Z(e) {
                let {
                    text: t,
                    icon: s,
                    pillClassName: n,
                    iconClassName: l,
                    textClassName: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: n,
                    children: [(0, a.jsx)(s, {
                        className: l
                    }), (0, a.jsxs)(d.Text, {
                        variant: "text-xs/medium",
                        className: r,
                        children: ["+", t]
                    })]
                })
            }

            function q(e) {
                let {
                    channel: t,
                    firstMessage: s,
                    isFirstMessageLoaded: l,
                    containerWidth: i,
                    hasUnreads: o
                } = e, [u, c] = (0, b.getFrameDimensions)(i - 2 * b.IMAGE_PADDING), {
                    content: m
                } = (0, j.useForumPostFirstMessageMarkup)({
                    firstMessage: s,
                    formatInline: !1,
                    noStyleAndInteraction: !0
                }), {
                    shouldRenderTagsRow: h
                } = (0, D.useTagsRowHooks)({
                    channel: t,
                    isNew: !1
                }), f = n.useMemo(() => ({
                    width: u,
                    height: c
                }), [u, c]), g = o ? G.textContentUnread : G.textContentRead;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: G.contentPreview,
                        style: f,
                        children: [(0, a.jsxs)("div", {
                            className: G.content,
                            children: [l && null == s && (0, a.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: o ? "header-secondary" : "text-muted",
                                children: B.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                            }), l && null != s && (0, a.jsx)(v.default, {
                                message: s,
                                content: m,
                                className: g
                            })]
                        }), (0, a.jsx)("div", {
                            className: r(G.textContentFooter, {
                                [G.noTags]: !h
                            }),
                            children: h ? (0, a.jsx)(D.default, {
                                channel: t,
                                tagsClassName: G.tagPill,
                                className: G.row
                            }) : null
                        })]
                    })
                })
            }
        },
        968462: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ForumPostMediaPreviewPlaceholder: function() {
                    return l
                },
                ForumPostContentPlaceholder: function() {
                    return r
                },
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("687791");

            function l() {
                return (0, a.jsx)("div", {
                    className: n.bodyMedia
                })
            }

            function r() {
                return (0, a.jsxs)("div", {
                    className: n.content,
                    children: [(0, a.jsxs)("div", {
                        className: n.titleAndMessage,
                        children: [(0, a.jsxs)("div", {
                            className: n.header,
                            children: [(0, a.jsxs)("div", {
                                className: n.tags,
                                children: [(0, a.jsx)("div", {
                                    className: n.tag
                                }), (0, a.jsx)("div", {
                                    className: n.tag
                                }), (0, a.jsx)("div", {
                                    className: n.tag
                                })]
                            }), (0, a.jsx)("div", {
                                className: n.seperator
                            })]
                        }), (0, a.jsx)("div", {
                            className: n.time
                        }), (0, a.jsx)("div", {
                            className: n.title
                        }), (0, a.jsx)("div", {
                            className: n.firstMessage
                        })]
                    }), (0, a.jsxs)("div", {
                        className: n.engagement,
                        children: [(0, a.jsx)("div", {
                            className: n.reactions
                        }), (0, a.jsx)("div", {
                            className: n.replies
                        })]
                    })]
                })
            }

            function i() {
                return (0, a.jsx)("div", {
                    className: n.card,
                    children: (0, a.jsxs)("div", {
                        className: n.body,
                        children: [(0, a.jsx)(r, {}), (0, a.jsx)(l, {})]
                    })
                })
            }
        },
        823968: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("482402"),
                l = s("335710"),
                r = s("77078"),
                i = s("339792"),
                o = s("867965"),
                u = s("782340"),
                d = s("517178");

            function c(e) {
                let {
                    channel: t,
                    closePopout: s
                } = e, {
                    sortOrder: c,
                    layoutType: m
                } = (0, i.useForumChannelStore)(t.id), h = (0, i.useForumChannelStoreApi)(), f = t.isMediaChannel(), g = e => {
                    (0, o.trackForumSortOrderUpdated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        sortOrder: e
                    }), h.getState().setSortOrder(t.id, e), s()
                }, x = e => {
                    (0, o.trackForumLayoutUpdated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        forumLayout: e
                    }), h.getState().setLayoutType(t.id, e), s()
                };
                return (0, a.jsx)("div", {
                    className: d.container,
                    children: (0, a.jsxs)(r.Menu, {
                        navId: "sort-and-view",
                        "aria-label": f ? u.default.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : u.default.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
                        hideScroller: !0,
                        onClose: s,
                        onSelect: s,
                        children: [(0, a.jsxs)(r.MenuGroup, {
                            label: u.default.Messages.FORUM_CHANNEL_SORT_BY,
                            children: [(0, a.jsx)(r.MenuRadioItem, {
                                id: "sort-by-recent-activity",
                                group: "sort-by",
                                label: u.default.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
                                action: () => g(l.ThreadSortOrder.LATEST_ACTIVITY),
                                checked: c === l.ThreadSortOrder.LATEST_ACTIVITY
                            }), (0, a.jsx)(r.MenuRadioItem, {
                                id: "sort-by-date-posted",
                                group: "sort-by",
                                label: u.default.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
                                action: () => g(l.ThreadSortOrder.CREATION_DATE),
                                checked: c === l.ThreadSortOrder.CREATION_DATE
                            })]
                        }), !t.isMediaChannel() && (0, a.jsxs)(r.MenuGroup, {
                            label: u.default.Messages.FORUM_CHANNEL_VIEW_AS,
                            children: [(0, a.jsx)(r.MenuRadioItem, {
                                id: "view-as-list",
                                group: "view-as",
                                label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
                                action: () => x(n.ForumLayout.LIST),
                                checked: m === n.ForumLayout.LIST
                            }), (0, a.jsx)(r.MenuRadioItem, {
                                id: "view-as-grid",
                                group: "view-as",
                                label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
                                action: () => x(n.ForumLayout.GRID),
                                checked: m === n.ForumLayout.GRID
                            })]
                        }), (0, a.jsx)(r.MenuGroup, {
                            children: (0, a.jsx)(r.MenuItem, {
                                id: "reset-all",
                                className: d.clearText,
                                label: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: u.default.Messages.FORUM_CHANNEL_RESET_ALL
                                }),
                                action: () => {
                                    g(t.getDefaultSortOrder()), x(t.getDefaultLayout())
                                }
                            })
                        })]
                    })
                })
            }
        },
        363622: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GRID_POST_CONTROLS_MARGIN: function() {
                    return r
                },
                GridLayout: function() {
                    return i
                },
                ForumListLayoutRenderOptions: function() {
                    return o
                },
                getFrameDimensions: function() {
                    return u
                },
                IMAGE_PADDING: function() {
                    return d
                },
                getGridPostHeight: function() {
                    return c
                }
            });
            var a = s("627445"),
                n = s.n(a);
            let l = 2 / 3,
                r = 12;
            class i {
                getWidth(e) {
                    return this.getRenderOptions(e).columnWidth
                }
                getRenderOptions(e) {
                    if (e <= this.minWidth) return {
                        columns: 1,
                        columnWidth: this.minWidth
                    };
                    let t = e / this.maxWidth,
                        s = e / this.minWidth,
                        a = Math.max(Math.floor(t + (s - t) / 2), 1),
                        n = this.gap * (a - 1);
                    return {
                        columns: a,
                        columnWidth: (e - n) / a
                    }
                }
                constructor({
                    minWidth: e,
                    maxWidth: t,
                    gap: s
                }) {
                    n(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = s
                }
            }
            let o = {
                    columns: 1,
                    columnWidth: 450
                },
                u = e => {
                    let t = e - 2;
                    return [t, Math.ceil(t * l)]
                },
                d = 12,
                c = e => 60 + u(e - 2 * d)[1] + 24 + 3 * r
        },
        193695: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT: function() {
                    return ej
                },
                default: function() {
                    return eF
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("627445"),
                o = s.n(i),
                u = s("866227"),
                d = s.n(u),
                c = s("974667"),
                m = s("335710"),
                h = s("249654"),
                f = s("446674"),
                g = s("669491"),
                x = s("77078"),
                C = s("125667"),
                _ = s("225664"),
                S = s("731898"),
                T = s("419135"),
                p = s("206230"),
                E = s("692171"),
                N = s("651693"),
                M = s("605160"),
                A = s("875978"),
                v = s("70845"),
                I = s("913491"),
                j = s("95045"),
                R = s("574073"),
                O = s("359132"),
                F = s("836943"),
                L = s("933629"),
                b = s("592707"),
                P = s("350134"),
                y = s("232259"),
                D = s("144491"),
                U = s("208021"),
                w = s("582713"),
                k = s("300322"),
                H = s("845579"),
                B = s("982108"),
                G = s("42203"),
                V = s("957255"),
                z = s("660478"),
                W = s("27618"),
                K = s("471671"),
                Y = s("738107"),
                X = s("952368"),
                Z = s("491605"),
                q = s("505684"),
                Q = s("109264"),
                J = s("566998"),
                $ = s("93427"),
                ee = s("956089"),
                et = s("888400"),
                es = s("700097"),
                ea = s("670902"),
                en = s("339792"),
                el = s("680986"),
                er = s("612278"),
                ei = s("791234"),
                eo = s("994810"),
                eu = s("867965"),
                ed = s("43836"),
                ec = s("512630"),
                em = s("152637"),
                eh = s("578198"),
                ef = s("968462"),
                eg = s("136460"),
                ex = s("601016"),
                eC = s("810758"),
                e_ = s("390083"),
                eS = s("49111"),
                eT = s("724210"),
                ep = s("648564"),
                eE = s("719347"),
                eN = s("782340"),
                eM = s("552175"),
                eA = s("590787"),
                ev = s("632215");
            let eI = 26,
                ej = 162 + eI,
                eR = async () => {
                    let {
                        default: e
                    } = await s.el("170206").then(s.t.bind(s, "170206", 19));
                    return e
                };

            function eO(e) {
                let {
                    shouldAnimate: t = !1
                } = e, s = (0, f.useStateFromStores)([p.default], () => p.default.useReducedMotion);
                return (0, a.jsxs)("div", {
                    className: eM.startTheConversation,
                    children: [(0, a.jsx)(Z.default, {
                        importData: eR,
                        shouldAnimate: t && !s,
                        className: eM.wavingHand
                    }), (0, a.jsx)(x.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eN.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
                    })]
                })
            }
            var eF = n.memo(function(e) {
                let {
                    className: t,
                    threadId: s,
                    goToThread: l,
                    observePostVisibilityAnalytics: i
                } = e, u = n.useRef(null), {
                    channel: d,
                    isOpen: m,
                    messageCount: h,
                    unreadCount: g,
                    firstMessage: C,
                    firstMessageLoaded: _,
                    firstMedia: T,
                    firstMediaIsEmbed: p
                } = function(e) {
                    let {
                        threadId: t
                    } = e, s = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(t));
                    o(null != s, "the thread should not be null here, a store must have missed an update");
                    let a = (0, f.useStateFromStores)([B.default], () => B.default.getCurrentSidebarChannelId(s.parent_id) === s.id),
                        {
                            loaded: n,
                            firstMessage: l
                        } = (0, er.useFirstForumPostMessage)(s),
                        {
                            content: r,
                            firstMedia: i,
                            firstMediaIsEmbed: u
                        } = (0, el.useForumPostFirstMessageMarkup)({
                            firstMessage: l
                        }),
                        {
                            messageCount: d,
                            unreadCount: c
                        } = (0, el.useMessageCount)(s);
                    return {
                        channel: s,
                        isOpen: a,
                        messageCount: d,
                        unreadCount: c,
                        firstMessage: l,
                        firstMessageLoaded: n,
                        firstMedia: i,
                        firstMediaIsEmbed: u,
                        content: r
                    }
                }({
                    threadId: s
                }), E = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(d.parent_id)), {
                    ref: N,
                    height: M
                } = (0, S.default)(), A = (0, eh.useForumPostComposerStore)(e => e.setCardHeight), [v, I] = n.useState(162);
                n.useEffect(() => {
                    null != M && (A(s, M + eI), I(M))
                }, [N, M, A, s, I, _]), n.useEffect(() => {
                    null == i || i(u.current, s)
                }, [i, s, _]);
                let j = n.useRef(null),
                    {
                        handleLeftClick: R,
                        handleRightClick: O
                    } = (0, e_.default)({
                        facepileRef: j,
                        goToThread: l,
                        channel: d
                    }),
                    {
                        role: F,
                        onFocus: L,
                        ...b
                    } = (0, c.useListItem)(s),
                    {
                        handleFocus: P,
                        handleBlur: y
                    } = (0, eC.default)(L);
                return (0, a.jsxs)("div", {
                    ref: u,
                    "data-item-id": s,
                    onClick: R,
                    onContextMenu: O,
                    className: r(eM.container, t, {
                        [eM.isOpen]: m
                    }),
                    children: [(0, a.jsx)(x.Clickable, {
                        onClick: R,
                        focusProps: {
                            ringTarget: u
                        },
                        onContextMenu: O,
                        "aria-label": eN.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: d.name,
                            count: h
                        }),
                        className: eM.focusTarget,
                        onFocus: P,
                        onBlur: y,
                        ...b
                    }), (0, a.jsxs)("div", {
                        className: eM.body,
                        children: [(0, a.jsx)("div", {
                            ref: N,
                            className: eM.contentContainer,
                            children: _ ? (0, a.jsx)(eL, {
                                parentChannel: E,
                                channel: d,
                                firstMessage: C,
                                messageCount: h,
                                unreadCount: g,
                                facepileRef: j,
                                onClick: R
                            }) : (0, a.jsx)(ef.ForumPostContentPlaceholder, {})
                        }), _ ? (null == C ? void 0 : C.blocked) || null == T ? null : (0, a.jsx)(eG, {
                            channel: d,
                            firstMedia: T,
                            firstMessage: C,
                            isEmbed: p,
                            contentHeight: v
                        }) : (0, a.jsx)(ef.ForumPostMediaPreviewPlaceholder, {})]
                    })]
                })
            });

            function eL(e) {
                let {
                    parentChannel: t,
                    channel: s,
                    firstMessage: n,
                    messageCount: l,
                    unreadCount: r,
                    facepileRef: i,
                    onClick: o
                } = e, {
                    isNew: u
                } = (0, el.useForumPostReadStates)(s), {
                    forumPostContainsTags: d
                } = (0, ex.useTagsRowHooks)({
                    channel: s,
                    isNew: u
                });
                return (0, a.jsxs)("div", {
                    className: eM.content,
                    children: [(0, a.jsxs)("div", {
                        className: eM.titleAndMessage,
                        children: [d && (0, a.jsx)(ex.IncreasedActivityTagsRow, {
                            channel: s,
                            className: eM.tagsRow,
                            tagsClassName: eM.tags
                        }), d && (0, a.jsx)("hr", {
                            className: eM.separator
                        }), (0, a.jsx)(eB, {
                            channel: s,
                            firstMessage: n,
                            isNew: u,
                            containsTags: d
                        }), (0, a.jsx)(x.HeadingLevel, {
                            children: (0, a.jsx)(eD, {
                                channel: s,
                                onClick: o
                            })
                        }), null != n && (0, a.jsx)(eb, {
                            firstMessage: n
                        })]
                    }), (0, a.jsxs)("div", {
                        className: eM.engagement,
                        children: [null != n && (0, a.jsx)(ew, {
                            channel: s,
                            firstMessage: n
                        }), (0, a.jsx)(eP, {
                            parentChannel: t,
                            channel: s,
                            messageCount: l,
                            unreadCount: r,
                            facepileRef: i
                        })]
                    })]
                })
            }

            function eb(e) {
                let {
                    firstMessage: t
                } = e, s = (0, f.useStateFromStores)([W.default], () => null != t && W.default.isBlocked(t.author.id)), {
                    content: l
                } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, j.default)(t, {
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0
                }) : {
                    content: null
                }, [t]);
                return (0, a.jsx)(x.FocusBlock, {
                    "aria-hidden": !0,
                    className: eM.firstMessageContent,
                    children: s ? eN.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE : null == l ? eN.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : l
                })
            }

            function eP(e) {
                let {
                    parentChannel: t,
                    channel: s,
                    messageCount: n,
                    unreadCount: l,
                    facepileRef: i
                } = e, o = (0, el.useTypingUserIds)(s), {
                    mostRecentMessage: u
                } = (0, er.useMostRecentForumMessage)(t, s), d = (0, f.useStateFromStores)([V.default], () => V.default.can(eS.Permissions.SEND_MESSAGES_IN_THREADS, s)), {
                    hasUnreads: c
                } = (0, el.useForumPostReadStates)(s), m = (0, f.useStateFromStores)([ea.default], () => ea.default.getFirstNoReplyThreadId()), h = (0, k.useIsNonModInLockedThread)(s), g = (0, R.useNullableMessageAuthor)(u);
                if (n > 0) {
                    var C, _;
                    return (0, a.jsxs)(x.Clickable, {
                        onClick: e => {
                            null != u && null != s.parent_id && (e.stopPropagation(), (0, eu.trackForumPostClicked)({
                                guildId: s.guild_id,
                                channelId: s.parent_id,
                                postId: s.id,
                                location: {
                                    page: eS.AnalyticsPages.GUILD_CHANNEL,
                                    section: eS.AnalyticsSections.FORUM_CHANNEL_POST
                                }
                            }), e.shiftKey ? (0, D.transitionToThreadMessage)(s, u.id, ep.OpenThreadAnalyticsLocations.BROWSER) : U.default.openThreadAsSidebar({
                                guildId: s.guild_id,
                                channelId: s.id,
                                baseChannelId: s.parent_id,
                                flash: !0,
                                details: {
                                    type: w.SidebarOpenDetailsType.THREAD,
                                    initialMessageId: u.id
                                }
                            }))
                        },
                        children: [(0, a.jsxs)(x.HiddenVisually, {
                            children: ["Latest message:", null != g ? null !== (C = g.nick) && void 0 !== C ? C : eN.default.Messages.UNKNOWN_USER : null, " ", null == (_ = null == u ? void 0 : u.content) ? "" : _.length > 120 ? "".concat(_.substring(0, 120), "...") : _]
                        }), (0, a.jsxs)(x.FocusBlock, {
                            className: eM.replies,
                            children: [(0, a.jsx)(ek, {
                                messageCount: n,
                                unreadCount: l,
                                iconSize: 16
                            }), o.length > 0 ? (0, a.jsx)(ey, {
                                channel: s,
                                typingUserIds: o,
                                facepileRef: i
                            }) : (0, a.jsx)(eU, {
                                channel: s,
                                mostRecentMessage: u,
                                hasUnreads: c
                            })]
                        })]
                    })
                }
                return h ? (0, a.jsx)("div", {
                    className: eM.replies,
                    children: (0, a.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: r(eM.mostRecentMessageContent, eM.nonUserMessage, eM.lockedMessage),
                        children: eN.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
                    })
                }) : d && 0 === n ? (0, a.jsx)(x.FocusBlock, {
                    "aria-hidden": !0,
                    className: eM.replies,
                    children: o.length > 0 ? (0, a.jsx)(ey, {
                        channel: s,
                        typingUserIds: o,
                        facepileRef: i
                    }) : (0, a.jsx)(eO, {
                        shouldAnimate: m === s.id
                    })
                }) : null
            }

            function ey(e) {
                let {
                    channel: t,
                    typingUserIds: s,
                    facepileRef: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: eM.typing,
                    children: [(0, a.jsx)(em.Facepile, {
                        channel: t,
                        userIds: s,
                        facepileRef: n
                    }), (0, a.jsx)("div", {
                        className: eM.dots,
                        children: (0, a.jsx)(x.Dots, {
                            themed: !0,
                            dotRadius: 2
                        })
                    }), (0, a.jsx)(C.default, {
                        channel: t,
                        className: eM.typingUsers,
                        renderDots: !1
                    })]
                })
            }

            function eD(e) {
                let {
                    channel: t,
                    onClick: s
                } = e, {
                    hasUnreads: l
                } = (0, el.useForumPostReadStates)(t), r = function(e) {
                    let t = (0, f.useStateFromStores)([eo.default], () => eo.default.getHasSearchResults(e.parent_id)),
                        s = (0, f.useStateFromStores)([eo.default], () => eo.default.getSearchQuery(e.parent_id)),
                        a = n.useMemo(() => (0, T.createASTHighlighter)(t && null != s ? s : ""), [t, s]),
                        l = n.useMemo(() => (0, j.default)({
                            content: e.name,
                            embeds: []
                        }, {
                            postProcessor: a
                        }).content, [e.name, a]);
                    return l
                }(t);
                return (0, a.jsx)(x.Heading, {
                    variant: "heading-lg/semibold",
                    color: l ? "header-primary" : "text-muted",
                    className: eM.title,
                    children: (0, a.jsx)(x.Clickable, {
                        onClick: s,
                        children: r
                    })
                })
            }
            let eU = n.memo(function(e) {
                var t;
                let {
                    channel: s,
                    mostRecentMessage: l,
                    hasUnreads: i
                } = e, o = (0, R.useNullableMessageAuthor)(l), u = (0, f.useStateFromStores)([W.default], () => null != l && W.default.isBlocked(l.author.id)), d = (0, f.useStateFromStores)([V.default], () => V.default.can(eS.Permissions.MANAGE_MESSAGES, s)), c = H.RenderSpoilers.useSetting(), m = (0, ed.useIsRecentMessageDeleted)(s), {
                    content: h
                } = n.useMemo(() => (null == l ? void 0 : l.content) != null && "" !== l.content ? (0, j.default)(l, {
                    formatInline: !0,
                    noStyleAndInteraction: !0
                }) : {
                    content: null
                }, [l]), g = null != l && (0, I.default)(l), C = null;
                if (u) C = (0, a.jsx)(x.Text, {
                    className: eM.nonUserMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: eN.default.Messages.FORUM_POST_BLOCKED_MOST_RECENT_MESSAGE
                });
                else {
                    let {
                        contentPlaceholder: e,
                        renderedContent: t
                    } = null == l ? {
                        contentPlaceholder: null,
                        renderedContent: null
                    } : g ? {
                        contentPlaceholder: null,
                        renderedContent: es.default.stringify(l, s)
                    } : (0, $.renderSingleLineMessage)(l, h, u, r(eM.mostRecentMessageContent, ev.inlineFormat, ev.smallFontSize), {
                        iconClass: eM.messageContentIcon,
                        iconSize: eE.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    C = null != t ? (0, a.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: eM.mostRecentMessageContent,
                        children: t
                    }) : null != e ? (0, a.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: eM.mostRecentMessageContent,
                        children: e
                    }) : m ? (0, a.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: r(eM.mostRecentMessageContent, eM.nonUserMessage),
                        children: eN.default.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
                    }) : null
                }
                let _ = null != o ? null !== (t = o.nick) && void 0 !== t ? t : eN.default.Messages.UNKNOWN_USER : null,
                    S = (0, y.useUsernameHook)(null == l ? void 0 : l.author, s.id, s.guild_id, !0)(null != o ? o : void 0)((0, a.jsxs)(a.Fragment, {
                        children: [null != _ ? _ : "", null != l ? ":" : ""]
                    }), s.id);
                return (0, a.jsx)(q.ObscuredDisplayContext.Provider, {
                    value: (0, v.default)(c, d),
                    children: (0, a.jsxs)("div", {
                        className: eM.mostRecentMessage,
                        children: [null == _ || g ? null : (0, a.jsx)("div", {
                            className: eM.mostRecentMessageAuthor,
                            children: (0, a.jsx)(x.Text, {
                                tag: "span",
                                variant: "text-sm/semibold",
                                children: S
                            })
                        }), (0, a.jsx)(x.FocusBlock, {
                            children: C
                        })]
                    })
                })
            });

            function ew(e) {
                let {
                    channel: t,
                    firstMessage: s
                } = e, l = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(t.parent_id)), i = (0, el.useDefaultReactionEmoji)(l), {
                    disableReactionUpdates: o,
                    disableReactionCreates: u,
                    isLurking: d,
                    isPendingMember: c
                } = (0, O.default)(t), m = (0, b.findReactionIndex)(s.reactions, i) >= 0, h = !m && !u, {
                    enabled: g,
                    hasTwoButtonEntryPoint: x
                } = (0, _.useBurstReactionsExperiment)(t.guild_id), C = (0, f.useStateFromStores)([E.default], () => E.default.remainingBurstCurrency), {
                    ref: T,
                    width: p
                } = (0, S.default)(), [N, M] = n.useState(10), [v, I] = n.useState(!0);
                return n.useEffect(() => {
                    if (null != p) M(Math.floor((p - 78) / 66)), I(!1)
                }, [p, s.reactions, i]), (0, a.jsxs)("div", {
                    className: r(eM.reactionRow, {
                        [eM.loading]: v
                    }),
                    ref: T,
                    children: [h && null != i ? (0, a.jsx)(P.Reaction, {
                        className: eM.defaultReaction,
                        message: s,
                        readOnly: !1,
                        useChatFontScaling: !0,
                        isLurking: d,
                        isPendingMember: c,
                        emoji: i,
                        type: A.ReactionTypes.NORMAL,
                        hideCount: !0,
                        count: 0,
                        me: !1,
                        burst_count: 0,
                        me_burst: !1
                    }) : null, (0, a.jsx)(b.default, {
                        message: s,
                        channel: t,
                        disableReactionCreates: u,
                        disableReactionUpdates: o,
                        useChatFontScaling: !0,
                        className: eM.messageReactions,
                        reactionClassName: eM.reaction,
                        hoistReaction: i,
                        forceHideReactionCreates: !0,
                        maxReactions: N
                    }), (0, a.jsxs)("div", {
                        className: eM.addReactionContainer,
                        children: [!u && (0, a.jsx)(F.ButtonAddReaction, {
                            type: A.ReactionTypes.NORMAL,
                            message: s,
                            channel: t,
                            useChatFontScaling: !0,
                            className: eM.addReactButton,
                            isForumToolbar: !1
                        }), !u && g && x && (0, a.jsx)(F.ButtonAddReaction, {
                            type: A.ReactionTypes.BURST,
                            remainingBurstCurrency: C,
                            message: s,
                            channel: t,
                            useChatFontScaling: !0,
                            isForumToolbar: !1,
                            className: eM.addReactButton
                        })]
                    })]
                })
            }

            function ek(e) {
                let {
                    messageCount: t,
                    unreadCount: s,
                    iconSize: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: eM.messageCountBox,
                    children: [(0, a.jsx)("span", {
                        className: eM.messageCountIcon,
                        children: (0, a.jsx)(Q.default, {
                            width: n,
                            height: n
                        })
                    }), "number" == typeof t ? (0, a.jsx)(Y.default, {
                        value: t,
                        className: eM.messageCountText
                    }) : (0, a.jsx)("div", {
                        className: eM.messageCountText,
                        children: t
                    }), null == s ? null : (0, a.jsx)(x.Text, {
                        className: eM.unreadMessagesCount,
                        variant: "text-sm/semibold",
                        color: "text-brand",
                        children: eN.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format({
                            count: s
                        })
                    })]
                })
            }

            function eH(e) {
                var t;
                let {
                    channel: s
                } = e, {
                    sortOrder: n
                } = (0, en.useForumChannelStore)(s.parent_id), l = (0, el.useLastActiveTimestamp)(s, n), r = (0, f.useStateFromStores)([z.default], () => z.default.lastMessageId(s.id)), i = null != r ? h.default.extractTimestamp(r) : null, o = null === (t = s.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, u = null == l ? null : n === m.ThreadSortOrder.CREATION_DATE ? eN.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: l
                }) : l, c = n === m.ThreadSortOrder.CREATION_DATE && null != o ? eN.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: (0, et.dateFormat)(d(o), "LLLL")
                }) : null != i ? (0, et.dateFormat)(d(i), "LLLL") : null;
                return null == c || null == u ? null : (0, a.jsx)(x.Tooltip, {
                    text: c,
                    tooltipClassName: eM.timestampTooltip,
                    "aria-label": eN.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
                    children: e => (0, a.jsx)(x.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        ...e,
                        children: u
                    })
                })
            }

            function eB(e) {
                let {
                    channel: t,
                    firstMessage: s,
                    isNew: n,
                    containsTags: l
                } = e, r = t.hasFlag(eT.ChannelFlags.PINNED), i = (0, f.useStateFromStores)([W.default], () => null != s && W.default.isBlocked(s.author.id));
                return (0, a.jsxs)("div", {
                    className: eM.header,
                    children: [!l && r && (0, a.jsx)("div", {
                        className: eM.pinIcon,
                        children: (0, a.jsx)(x.Tooltip, {
                            text: eN.default.Messages.PINNED_POST,
                            children: e => (0, a.jsx)(J.default, {
                                ...e,
                                width: ex.PIN_ICON_SIZE,
                                height: ex.PIN_ICON_SIZE,
                                color: "white"
                            })
                        })
                    }), !i && (0, a.jsx)(eg.default, {
                        channel: t,
                        message: s
                    }), (0, a.jsx)(eH, {
                        channel: t
                    }), n && (0, a.jsx)(ee.TextBadge, {
                        className: eM.newBadge,
                        color: g.default.unsafe_rawColors.BRAND_260.css,
                        text: eN.default.Messages.NEW
                    })]
                })
            }

            function eG(e) {
                let {
                    channel: t,
                    firstMedia: s,
                    firstMessage: n,
                    isEmbed: l,
                    contentHeight: i
                } = e, o = (0, f.useStateFromStores)([K.default], () => K.default.isFocused()), u = (0, N.isAnimatedImageUrl)(s.src), d = H.GifAutoPlay.useSetting(), {
                    src: c,
                    width: m,
                    height: h,
                    alt: g
                } = s, [C, _] = (0, M.useShouldObscure)({
                    media: s,
                    channel: t
                }), S = (0, M.getObscuredAlt)(_);
                return (0, a.jsx)(x.FocusBlock, {
                    enabled: !0,
                    children: (0, a.jsxs)("div", {
                        className: r(eM.bodyMedia, {
                            [eA.embedFull]: l
                        }),
                        style: {
                            height: i,
                            borderColor: (0, ei.getEmbedColor)(n, C)
                        },
                        onClick: e => e.stopPropagation(),
                        children: [c.startsWith("data:") ? (0, a.jsx)(X.default, {
                            src: c,
                            width: m,
                            height: h,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && C ? S : g,
                            imageClassName: r({
                                [eM.obscured]: C
                            })
                        }) : (0, L.renderImageComponent)({
                            src: c,
                            width: m,
                            height: h,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && C ? S : g,
                            autoPlay: d,
                            animated: u && !C && o,
                            imageContainerClassName: r({
                                [eM.obscured]: C
                            })
                        }), C && (0, a.jsx)(ec.default, {
                            iconClassname: eM.obscuredTag,
                            obscureReason: _
                        })]
                    })
                })
            }
        },
        855455: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MOSAIC_MIN_INDEX: function() {
                    return r
                },
                MOSAIC_MAX_INDEX: function() {
                    return i
                },
                MOSAIC_MAX_IMAGE_COUNT: function() {
                    return o
                },
                useImageContainerStyles: function() {
                    return m
                },
                useImageDimensionStyles: function() {
                    return f
                }
            });
            var a = s("884691"),
                n = s("693566"),
                l = s.n(n);
            let r = 0,
                i = 4,
                o = 4,
                u = "absolute",
                d = (e, t, s, a) => {
                    if (0 === s) return [];
                    if (1 === s) return [{
                        width: e,
                        height: t,
                        top: 0,
                        left: 0,
                        position: u
                    }];
                    if (2 === s) {
                        let s = Math.ceil((e - a) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: s,
                            height: t
                        }, {
                            top: 0,
                            left: s + a,
                            position: u,
                            width: s,
                            height: t
                        }]
                    }
                    if (3 === s) {
                        let s = Math.ceil((e - a) / 2),
                            n = Math.ceil((t - a) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: s,
                            height: t
                        }, {
                            top: 0,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: n + a,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }]
                    } else {
                        let s = Math.ceil((e - a) / 2),
                            n = Math.ceil((t - a) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: n + a,
                            left: 0,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: 0,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: n + a,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }]
                    }
                },
                c = new l({
                    max: 100
                });

            function m(e) {
                let {
                    numAttachments: t,
                    containerWidth: s,
                    containerHeight: n
                } = e;
                return a.useMemo(() => (function(e) {
                    var t, s, a;
                    let {
                        numAttachments: n,
                        containerWidth: l,
                        containerHeight: r
                    } = e;
                    let i = (t = n, s = l, a = r, "".concat(t, "-").concat(s, "-").concat(a)),
                        o = c.get(i);
                    if (null != o) return o;
                    {
                        let e = d(l, r, n, 4);
                        return c.set(i, e), e
                    }
                })({
                    numAttachments: t,
                    containerWidth: s,
                    containerHeight: n
                }), [t, s, n])
            }

            function h(e) {
                return e.map((t, s) => ({
                    minWidth: 2 * e[s].width,
                    minHeight: 2 * e[s].height,
                    maxWidth: 2 * e[s].width,
                    maxHeight: 2 * e[s].height
                }))
            }

            function f(e) {
                let {
                    imageContainerStyles: t,
                    containerWidth: s,
                    containerHeight: n
                } = e, l = a.useRef(h(t)), r = a.useRef(s), i = a.useRef(n), o = s > r.current + 100, u = n > i.current + 100;
                return (o || u) && (l.current = h(t)), l.current
            }
        },
        337113: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                r = s("866227"),
                i = s.n(r),
                o = s("77078"),
                u = s("32238"),
                d = s("49111"),
                c = s("782340"),
                m = s("17366"),
                h = e => {
                    let {
                        rateLimitPerUser: t,
                        slowmodeCooldownGuess: s,
                        isBypassSlowmode: n,
                        leadingIcon: r = !1
                    } = e, h = "", f = "";
                    if (t >= d.Durations.HOUR) {
                        let e = Math.floor(t / d.Durations.HOUR),
                            s = Math.floor((t - e * d.Durations.HOUR) / d.Durations.MINUTE),
                            a = t - e * d.Durations.HOUR - s * d.Durations.MINUTE;
                        f = c.default.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
                            hours: e,
                            minutes: s,
                            seconds: a
                        })
                    } else if (t >= 60) {
                        let e = Math.floor(t / 60);
                        f = c.default.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
                            minutes: e,
                            seconds: t - 60 * e
                        })
                    } else f = c.default.Messages.FORUM_SLOWMODE_DESC.format({
                        seconds: t
                    });
                    if (!n && s > 0) {
                        let e = i.duration(s);
                        if (s > 1e3 * d.Durations.HOUR) {
                            let t = "".concat(e.minutes()).padStart(2, "0"),
                                s = "".concat(e.seconds()).padStart(2, "0");
                            h = "".concat(e.hours(), ":").concat(t, ":").concat(s)
                        } else {
                            let t = "".concat(e.seconds()).padStart(2, "0");
                            h = "".concat(e.minutes(), ":").concat(t)
                        }
                    } else h = n ? c.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : c.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
                    let g = (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: h
                        }),
                        x = (0, a.jsx)(u.default, {
                            className: l(m.slowModeIcon, {
                                [m.leadingIcon]: r
                            })
                        });
                    return (0, a.jsx)(o.Tooltip, {
                        text: f,
                        children: e => (0, a.jsx)("div", {
                            className: m.cooldownWrapper,
                            ...e,
                            children: r ? (0, a.jsxs)(a.Fragment, {
                                children: [x, g]
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [g, x]
                            })
                        })
                    })
                }
        },
        552683: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("974667"),
                r = s("77078"),
                i = s("446674"),
                o = s("206230"),
                u = s("339792"),
                d = s("680986"),
                c = s("867965"),
                m = s("90625"),
                h = s("49111"),
                f = s("782340"),
                g = s("224300");

            function x() {
                return Promise.resolve()
            }

            function C(e) {
                let {
                    channel: t,
                    closePopout: s,
                    setPopoutRef: C
                } = e, _ = (0, d.useVisibleForumTags)(t), {
                    tagFilter: S
                } = (0, u.useForumChannelStore)(t.id), T = (0, u.useForumChannelStoreApi)(), p = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), E = n.useCallback(e => {
                    (0, c.trackForumTagFilterClicked)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        tagId: e,
                        filterTagIds: Array.from(S),
                        added: !S.has(e),
                        location: {
                            page: h.AnalyticsPages.GUILD_CHANNEL,
                            section: h.AnalyticsSections.FORUM_CHANNEL_HEADER,
                            object: h.AnalyticsObjects.CHANNEL_TAG
                        }
                    }), T.getState().toggleTagFilter(t.id, e)
                }, [t, S, T]), N = n.useCallback(() => {
                    T.getState().setTagFilter(t.id, new Set), !p && s()
                }, [T, t.id, p, s]), M = (0, l.default)({
                    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
                    isEnabled: !0,
                    wrap: !0,
                    scrollToStart: x,
                    scrollToEnd: x
                }), A = n.useRef(null);
                return n.useEffect(() => {
                    requestAnimationFrame(() => {
                        if (null != A.current) {
                            let e = A.current.querySelector(".".concat(g.tag));
                            null != e && e.focus()
                        }
                    })
                }, []), (0, a.jsxs)(r.Dialog, {
                    ref: C,
                    "aria-label": f.default.Messages.FORUM_TAG_FILTER_HEADER,
                    className: g.container,
                    children: [(0, a.jsx)("div", {
                        className: g.header,
                        children: (0, a.jsxs)("div", {
                            className: g.headerLeft,
                            children: [(0, a.jsx)(r.Heading, {
                                color: "interactive-normal",
                                variant: "text-xs/bold",
                                className: g.headerText,
                                children: f.default.Messages.FORUM_TAG_POST_SELECT
                            }), (0, a.jsx)("div", {
                                className: g.countContainer,
                                children: (0, a.jsx)(r.Text, {
                                    className: g.countText,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    children: S.size
                                })
                            })]
                        })
                    }), (0, a.jsx)(l.ListNavigatorProvider, {
                        navigator: M,
                        children: (0, a.jsx)(l.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...s
                                } = e;
                                return (0, a.jsx)("div", {
                                    ref: e => {
                                        t.current = e, A.current = e
                                    },
                                    ...s,
                                    className: g.tagContainer,
                                    children: _.map(e => (0, a.jsx)(m.default, {
                                        className: g.tag,
                                        tag: e,
                                        selected: S.has(e.id),
                                        onClick: () => E(e.id)
                                    }, e.id))
                                })
                            }
                        })
                    }), (0, a.jsx)("div", {
                        className: g.separator
                    }), (0, a.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.MIN,
                        color: r.Button.Colors.CUSTOM,
                        className: g.clear,
                        "aria-label": f.default.Messages.FORUM_CLEAR_ALL,
                        onClick: N,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: f.default.Messages.FORUM_CLEAR_ALL
                        })
                    })]
                })
            }
        },
        589455: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            }), s("222007");
            var a = s("884691"),
                n = s("405665"),
                l = s("77078");
            let r = "undefined" == typeof ResizeObserver ? n.ResizeObserver : ResizeObserver,
                i = new Map,
                o = new r(e => {
                    e.forEach(e => {
                        var t;
                        let {
                            target: s
                        } = e;
                        null === (t = i.get(s)) || void 0 === t || t(e)
                    })
                });
            var u = () => {
                let e = a.useRef(null),
                    [t, s] = a.useState(400),
                    n = a.useCallback(() => {
                        null !== e.current && s(e.current.clientWidth)
                    }, [s, e]);
                return (0, l.useResizeObserverSubscription)({
                    ref: e,
                    key: "forum-container",
                    onUpdate: n,
                    resizeObserver: o,
                    listenerMap: i
                }), {
                    containerRef: e,
                    containerWidth: t
                }
            }
        },
        485055: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                },
                useForumGridItem: function() {
                    return C
                },
                GridNavigatorProvider: function() {
                    return _
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("909283"),
                r = s("942367"),
                i = s("74139");
            let o = "data-grid-item-id",
                u = "data-grid-section",
                d = "data-grid-prev-section-boundary",
                c = new Set([r.Keys.UP, r.Keys.DOWN, r.Keys.LEFT, r.Keys.RIGHT]);

            function m(e) {
                let {
                    section: t,
                    column: s,
                    row: a
                } = e, n = "[".concat(u, '="').concat(t, '"]'), l = "[".concat("aria-colindex", '="').concat(s, '"]'), r = "[".concat("aria-rowindex", '="').concat(a, '"]');
                return "".concat(n).concat(l).concat(r)
            }

            function h(e) {
                let {
                    id: t,
                    isEnabled: s,
                    setFocus: a
                } = e, u = n.useRef(null), h = n.useRef(!1), f = n.useRef(null), g = n.useRef(s);
                n.useLayoutEffect(() => {
                    g.current = s
                }, [s]);
                let x = n.useCallback(e => {
                        var t;
                        return (null !== (t = f.current) && void 0 !== t ? t : document).querySelector(e)
                    }, []),
                    C = n.useCallback((e, t) => {
                        g.current && a(e, t)
                    }, [a]),
                    _ = n.useCallback(e => {
                        if (g.current) {
                            var t;
                            null === (t = document.querySelector(e)) || void 0 === t || t.focus()
                        }
                    }, []),
                    S = n.useCallback(e => {
                        u.current = e;
                        let s = (0, i.createSelector)(e, o),
                            a = (0, i.getItemId)(e);
                        C(s, a), (0, l.notifyFocusSubscribers)(t, a, !0)
                    }, [t, C]),
                    [T, p] = n.useState(!1),
                    E = n.useRef(T);
                n.useLayoutEffect(() => {
                    E.current = T
                }, [T]), n.useLayoutEffect(() => {
                    let e = f.current;
                    if (null != e) return e.addEventListener("focusin", s), e.addEventListener("focusout", a), e.addEventListener("focus", n), e.addEventListener("scroll", l, {
                        passive: !0
                    }), () => {
                        e.removeEventListener("focusin", s), e.removeEventListener("focusout", a), e.removeEventListener("focus", n), e.removeEventListener("scroll", l)
                    };

                    function s() {
                        p(!0)
                    }

                    function a(e) {
                        !e.currentTarget.contains(e.relatedTarget) && (p(!1), requestAnimationFrame(() => {
                            let e = u.current;
                            if (null !== e) {
                                let s = (0, i.createSelector)(e, o);
                                null == x(s) && _((0, i.createSelector)(t, "data-grid-id"))
                            }
                        }))
                    }

                    function n() {
                        let e = f.current,
                            t = E.current;
                        if (t || null == e) return
                    }

                    function l() {
                        h.current = !0
                    }
                }, [t, C, _, S, x]);
                let N = n.useCallback(e => {
                        var t, s;
                        if (!g.current) return;
                        let a = u.current,
                            n = f.current;
                        if (null == a) return;
                        let l = (0, i.createSelector)(a, o),
                            h = null == n ? void 0 : n.querySelector(l);
                        if (null == h) return;
                        let C = parseInt(null !== (t = h.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
                            _ = parseInt(h.getAttribute("aria-rowindex")),
                            T = parseInt(h.getAttribute("aria-colindex"));
                        switch (c.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
                            case r.Keys.RIGHT: {
                                let e = x(m({
                                    section: C,
                                    row: _,
                                    column: T + 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.LEFT: {
                                let e = x(m({
                                    section: C,
                                    row: _,
                                    column: T - 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.DOWN: {
                                let e = x(m({
                                    section: C,
                                    row: _ + 1,
                                    column: T
                                }));
                                if (null == e && (e = x(m({
                                        section: C + 1,
                                        row: 0,
                                        column: T
                                    }))), null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.UP: {
                                let e;
                                if (0 === _) {
                                    let t = parseInt(h.getAttribute(d));
                                    null == (e = x(m({
                                        section: C - 1,
                                        row: t,
                                        column: T
                                    }))) && (e = x(m({
                                        section: C - 1,
                                        row: t - 1,
                                        column: T
                                    })))
                                } else e = x(m({
                                    section: C,
                                    row: _ - 1,
                                    column: T
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.SPACE:
                            case r.Keys.ENTER: {
                                if (e.repeat) return;
                                let t = u.current;
                                if (null != t) {
                                    let a = (0, i.createSelector)(t, o),
                                        n = x(a),
                                        l = null !== (s = null == n ? void 0 : n.ownerDocument) && void 0 !== s ? s : document,
                                        r = n === l.activeElement;
                                    null != n && r && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
                                }
                            }
                        }
                    }, [x, S]),
                    M = n.useCallback(e => {
                        let s = null != e ? (0, i.createListItemId)(t, e) : null;
                        u.current = s
                    }, [t]);
                return n.useMemo(() => ({
                    id: t,
                    containerProps: {
                        onKeyDown: N,
                        ref: f
                    },
                    setFocus: M
                }), [t, N, M])
            }
            let f = {
                    id: "NO_LIST",
                    onKeyDown() {},
                    ref: n.createRef()
                },
                g = n.createContext({
                    id: "NO_LIST",
                    setFocus() {}
                }),
                x = n.createContext(f);

            function C(e) {
                let {
                    id: t,
                    section: s,
                    row: a,
                    column: r,
                    boundaries: c
                } = e, [m, h] = n.useState(0 === a && 0 === r ? 0 : -1), f = n.useContext(g), {
                    id: x,
                    setFocus: C
                } = f, _ = n.useCallback(() => C(t), [t, C]);
                return n.useLayoutEffect(() => (0, l.addFocusSubscriber)(x, e => {
                    h(e === t ? 0 : -1)
                }), [t, x]), {
                    [o]: (0, i.createListItemId)(x, t),
                    [u]: s,
                    [d]: c[s],
                    role: "gridcell",
                    "aria-rowindex": a,
                    "aria-colindex": r,
                    tabIndex: m,
                    onFocus: _
                }
            }

            function _(e) {
                let {
                    children: t,
                    navigator: s
                } = e, {
                    id: l,
                    setFocus: r,
                    containerProps: {
                        onKeyDown: i,
                        ref: o
                    }
                } = s, u = n.useMemo(() => ({
                    id: l,
                    setFocus: r
                }), [l, r]), d = n.useMemo(() => ({
                    onKeyDown: i,
                    ref: o,
                    id: l
                }), [i, o, l]);
                return (0, a.jsx)(x.Provider, {
                    value: d,
                    children: (0, a.jsx)(g.Provider, {
                        value: u,
                        children: t
                    })
                })
            }
        },
        219840: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("884691"),
                n = s("974667");

            function l(e) {
                let {
                    listRef: t,
                    padding: s,
                    channel: l,
                    isEnabled: r
                } = e, i = a.useCallback(e => {
                    let a = t.current,
                        n = document.querySelector(e);
                    null != n && (null == a || a.scrollIntoViewNode({
                        node: n,
                        padding: s,
                        callback: () => {
                            var t;
                            null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                                preventScroll: !0
                            })
                        }
                    }))
                }, [s]), o = a.useCallback(() => new Promise(e => {
                    let s = t.current;
                    null == s || s.scrollToTop({
                        callback: () => requestAnimationFrame(e)
                    })
                }), []), u = a.useCallback(() => new Promise(e => {
                    let s = t.current;
                    null == s || s.scrollToBottom({
                        callback: () => requestAnimationFrame(e)
                    })
                }), []);
                return (0, n.default)({
                    id: "forum-channel-list-".concat(l.id),
                    isEnabled: r,
                    scrollToStart: o,
                    scrollToEnd: u,
                    setFocus: i
                })
            }
        },
        891475: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useExtractEmbedPreview: function() {
                    return o
                }
            }), s("222007"), s("424973");
            var a = s("884691"),
                n = s("917351"),
                l = s("253981"),
                r = s("639440"),
                i = s("856220");

            function o(e, t, s) {
                let o = a.useRef(new Map),
                    [, u] = a.useState(null),
                    [d, c] = a.useState(null),
                    m = a.useMemo(() => n.debounce((e, s) => {
                        if (null == s || e || 0 === t) return;
                        let a = s.match(l.default.URL_REGEX);
                        if (null == a || 0 === a.length) {
                            o.current = new Map, c(null);
                            return
                        }
                        let r = n.uniq(a).slice(0, i.MAX_THUMBNAIL_COUNT);
                        c(r)
                    }, 1e3), [t, o]);
                a.useEffect(() => {
                    m(e, s)
                }, [m, s, e]), a.useEffect(() => {
                    (async function e(e, t) {
                        if (null == t) return;
                        let s = e.current,
                            a = new Set(s.keys()),
                            n = t.filter(e => !(null == a ? void 0 : a.has(e)));
                        if (0 !== n.length) try {
                            let t = await r.unfurlEmbedUrl(n);
                            e.current = function(e, t, s) {
                                return null == s || s.forEach(s => {
                                    let a = function(e, t) {
                                        return e.find(e => (null == t ? void 0 : t.url) != null && e.startsWith(t.url))
                                    }(t, s);
                                    if (null == a) return;
                                    let n = e.get(a);
                                    null == n ? e.set(a, [s]) : n.push(s)
                                }), e
                            }(new Map(s), n, null == t ? void 0 : t.embeds), u({})
                        } catch (e) {}
                    })(o, d)
                }, [d]);
                let h = o.current,
                    f = a.useMemo(() => {
                        let e = [];
                        return null == d || d.forEach(t => {
                            let s = h.get(t);
                            null != s && e.push(...s)
                        }), e.length > 0 ? e : null
                    }, [d, h]);
                return {
                    embeds: e ? null : f
                }
            }
        },
        781555: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("301165"),
                o = s("446674"),
                u = s("819855"),
                d = s("77078"),
                c = s("841098"),
                m = s("206230"),
                h = s("526812"),
                f = s("404607"),
                g = s("258039"),
                x = s("291444"),
                C = s("592407"),
                _ = s("305961"),
                S = s("181114"),
                T = s("191814"),
                p = s("109264"),
                E = s("945330"),
                N = s("68238"),
                M = s("758710"),
                A = s("58608"),
                v = s("701909"),
                I = s("753582"),
                j = s("49111"),
                R = s("782340"),
                O = s("528639"),
                F = s("112545"),
                L = s("600310"),
                b = s("129185"),
                P = s("338283");

            function y(e) {
                let {
                    handleHide: t
                } = e;
                return (0, a.jsx)(d.Clickable, {
                    onClick: t,
                    className: O.closeButton,
                    "aria-label": R.default.Messages.DISMISS,
                    children: (0, a.jsx)(E.default, {
                        className: O.closeIcon
                    })
                })
            }

            function D(e) {
                let {
                    username: t,
                    title: s,
                    videoSrc: n,
                    messageCount: l,
                    reaction: i,
                    reactionCount: o,
                    classname: u
                } = e;
                return (0, a.jsxs)("div", {
                    className: r(O.videoPreview, u),
                    children: [(0, a.jsx)("div", {
                        className: O.authorRow,
                        children: (0, a.jsxs)("div", {
                            className: O.rowGroup,
                            children: [(0, a.jsx)(d.Text, {
                                tag: "span",
                                className: O.author,
                                variant: "text-sm/semibold",
                                children: t
                            }), (0, a.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: O.postCreationTimestamp,
                                children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
                            })]
                        })
                    }), (0, a.jsx)(d.Heading, {
                        variant: "heading-md/extrabold",
                        className: O.title,
                        color: "header-primary",
                        "aria-hidden": !0,
                        children: s
                    }), (0, a.jsx)(T.default, {
                        size: 10
                    }), (0, a.jsx)(A.default, {
                        className: O.video,
                        src: n,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0
                    }), (0, a.jsx)(T.default, {
                        size: 10
                    }), (0, a.jsx)("div", {
                        className: O.footer,
                        children: (0, a.jsxs)("div", {
                            className: O.forumPostControls,
                            children: [(0, a.jsxs)("div", {
                                className: O.messageCountBox,
                                children: [(0, a.jsx)("span", {
                                    className: O.messageCountIcon,
                                    children: (0, a.jsx)(p.default, {
                                        width: 16,
                                        height: 16
                                    })
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: l
                                })]
                            }), (0, a.jsxs)("div", {
                                className: O.reactionBox,
                                children: [(0, a.jsx)("span", {
                                    role: "img",
                                    "aria-label": "",
                                    children: i
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: o
                                })]
                            })]
                        })
                    })]
                })
            }
            var U = e => {
                var t, s;
                let {
                    channel: l
                } = e, p = (0, c.default)(), E = (0, u.isThemeDark)(p), A = (0, o.useStateFromStores)([_.default], () => _.default.getGuild(l.guild_id)), U = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), w = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), k = (0, x.useSubscriptionListingsForChannel)({
                    guildId: l.guild_id,
                    channelId: l.id
                }), {
                    transitions: H,
                    setVisible: B
                } = (0, I.useShowAnimation)(U), G = n.useCallback(() => {
                    B(!1), f.default.hideAdminOnboarding(l.id, !0)
                }, [l, B]);
                n.useEffect(() => {
                    let e = (0, g.isOnboardingDismissed)(l.id);
                    !e && B(!w)
                }, [l, B, w]);
                let V = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
                    z = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
                    W = () => {
                        C.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
                    },
                    K = null !== (t = null == A ? void 0 : A.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t,
                    Y = K ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
                    X = null !== (s = (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== s && s,
                    Z = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
                    q = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
                return (0, a.jsx)(a.Fragment, {
                    children: H((e, t) => t ? (0, a.jsxs)(i.animated.div, {
                        style: e,
                        className: O.container,
                        children: [(0, a.jsxs)("div", {
                            className: r(O.wrapper, O.headerRow),
                            children: [(0, a.jsxs)(d.Text, {
                                variant: "text-xs/normal",
                                className: O.visibilityInfo,
                                children: [(0, a.jsx)(N.default, {
                                    width: 12,
                                    height: 12,
                                    className: O.icon
                                }), R.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                            }), (0, a.jsx)(y, {
                                handleHide: G
                            })]
                        }), (0, a.jsxs)("div", {
                            className: O.contentContainer,
                            children: [(0, a.jsxs)("div", {
                                className: r(O.contentRow, X && O.contentRowOne),
                                children: [(0, a.jsx)("div", {
                                    className: r(O.contentMediaContainer),
                                    children: (0, a.jsxs)("div", {
                                        className: O.contentVideoContainer,
                                        children: [(0, a.jsx)(D, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                                            messageCount: "34",
                                            reaction: "⚡️",
                                            reactionCount: "724",
                                            classname: O.backgroundVideo
                                        }), (0, a.jsx)(D, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                                            messageCount: "34",
                                            reactionCount: "84",
                                            reaction: "\uD83D\uDC9E",
                                            classname: r(O.backgroundVideo, O.secondaryVideo)
                                        }), (0, a.jsx)(D, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                                            messageCount: "7,103",
                                            reaction: "⚡️",
                                            reactionCount: "724",
                                            classname: O.highlightVideo
                                        })]
                                    })
                                }), (0, a.jsxs)("article", {
                                    className: O.contentTextContainer,
                                    children: [(0, a.jsx)(d.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: Z
                                    }), (0, a.jsx)(T.default, {
                                        size: 8
                                    }), (0, a.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: q
                                    }), (0, a.jsx)(T.default, {
                                        size: 16
                                    }), (0, a.jsxs)(d.Clickable, {
                                        onClick: () => open(v.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
                                        className: O.helpCenterLink,
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-link",
                                            className: O.helpCenterLinkText,
                                            children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
                                        }), (0, a.jsx)(M.default, {
                                            width: 16,
                                            height: 16,
                                            className: O.helpCenterLinkIcon
                                        })]
                                    }), (0, a.jsx)(T.default, {
                                        size: 16
                                    }), (0, a.jsx)("div", {
                                        className: O.mediaChannelTagsContainer,
                                        children: V.map(e => (0, a.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-normal",
                                            className: O.mediaChannelTag,
                                            children: e
                                        }, e))
                                    })]
                                })]
                            }), X && (0, a.jsxs)("div", {
                                className: r(O.contentRow, O.contentRowTwo),
                                children: [(0, a.jsx)("div", {
                                    className: r(O.contentMediaContainer),
                                    children: (0, a.jsxs)("div", {
                                        className: O.contentImageContainer,
                                        children: [(0, a.jsx)("img", {
                                            src: E ? b : P,
                                            alt: "",
                                            className: r(O.previewEmbedImage, O.secondaryImage)
                                        }), (0, a.jsx)("img", {
                                            src: E ? F : L,
                                            alt: "",
                                            className: O.previewEmbedImage
                                        })]
                                    })
                                }), (0, a.jsxs)("article", {
                                    className: O.contentTextContainer,
                                    children: [(0, a.jsxs)(d.Text, {
                                        variant: "text-xxs/bold",
                                        className: O.serverSubPill,
                                        children: [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, a.jsx)("span", {
                                            role: "img",
                                            "aria-label": "",
                                            children: "\uD83D\uDD25"
                                        })]
                                    }), (0, a.jsx)(T.default, {
                                        size: 10
                                    }), (0, a.jsx)(d.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
                                    }), (0, a.jsx)(T.default, {
                                        size: 8
                                    }), (0, a.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
                                    }), (0, a.jsx)(T.default, {
                                        size: 16
                                    }), (0, a.jsx)("div", {
                                        className: O.mediaChannelTagsContainer,
                                        children: z.map(e => (0, a.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-normal",
                                            className: O.mediaChannelTag,
                                            children: e
                                        }, e))
                                    }), (0, a.jsx)(T.default, {
                                        size: 16
                                    }), 0 === k.length && (0, a.jsx)(S.default, {
                                        size: d.Button.Sizes.MEDIUM,
                                        pauseAnimation: U,
                                        onClick: W,
                                        className: O.addChannelButton,
                                        color: d.Button.Colors.CUSTOM,
                                        children: Y
                                    })]
                                })]
                            })]
                        })]
                    }) : null)
                })
            }
        },
        236003: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("65597"),
                l = s("77078"),
                r = s("850391"),
                i = s("271972"),
                o = s("761354"),
                u = s("1999"),
                d = s("585722"),
                c = s("782340"),
                m = s("909067");

            function h(e) {
                let {
                    parentChannel: t
                } = e, s = (0, n.useStateFromStoresArray)([d.default], () => {
                    let e = d.default.getUploads(t.id, r.ChatInputTypes.CREATE_FORUM_POST.drafts.type);
                    return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
                });
                return (0, a.jsxs)("div", {
                    className: m.container,
                    children: [(0, a.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "text-muted",
                        children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)(l.ScrollerThin, {
                            className: m.uploadsContainer,
                            orientation: "horizontal",
                            paddingFix: !1,
                            fade: !0,
                            children: (0, a.jsxs)("div", {
                                className: m.uploads,
                                children: [s.map(e => (0, a.jsx)(o.default, {
                                    channelId: t.id,
                                    draftType: r.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                                    upload: e,
                                    keyboardModeEnabled: !0,
                                    hideFileName: !0,
                                    size: i.AttachmentListItemSizes.SMALL
                                }, e.id)), (0, a.jsx)(u.ComposerUploadButton, {
                                    channelId: t.id
                                })]
                            })
                        })
                    })]
                })
            }
        },
        549558: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MediaPostThumbnail: function() {
                    return L
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                i = s("627445"),
                o = s.n(i),
                u = s("65597"),
                d = s("77078"),
                c = s("81594"),
                m = s("206230"),
                h = s("850391"),
                f = s("9560"),
                g = s("271972"),
                x = s("578198"),
                C = s("855455"),
                _ = s("476765"),
                S = s("857171"),
                T = s("832132"),
                p = s("808404"),
                E = s("987772"),
                N = s("228220"),
                M = s("58608"),
                A = s("412861"),
                v = s("489898"),
                I = s("782340"),
                j = s("73386");
            let R = [{
                    name: "Media Post Thumbnail",
                    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
                }],
                O = (0, _.uid)();

            function F(e) {
                let {
                    mediaAttachments: t,
                    containerWidth: s,
                    containerHeight: n
                } = e, l = (0, C.useImageContainerStyles)({
                    numAttachments: t.length,
                    containerWidth: s,
                    containerHeight: n
                });
                return (0, a.jsx)(a.Fragment, {
                    children: t.map((e, t) => {
                        var s;
                        return (0, a.jsx)("div", {
                            style: l[t],
                            children: !0 === e.isVideo ? (0, a.jsx)(M.default, {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0
                            }) : (0, a.jsx)("img", {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0,
                                alt: null !== (s = null == e ? void 0 : e.alt) && void 0 !== s ? s : ""
                            })
                        }, e.src)
                    })
                })
            }
            let L = e => {
                var t;
                let {
                    parentChannel: l
                } = e, {
                    textAreaState: i
                } = (0, x.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t
                    } = e;
                    return {
                        textAreaState: t
                    }
                }), C = (0, u.default)([m.default], () => m.default.keyboardModeEnabled), _ = (0, v.default)(l, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), M = n.useMemo(() => _.find(e => e.isThumbnail), [_]), L = null != _ && _.length > 0, b = n.useMemo(() => {
                    let e = (null == _ ? void 0 : _.length) > 1 ? 1.15 : 1;
                    return {
                        width: 153 * e,
                        height: 86 * e
                    }
                }, [_]), P = n.useCallback(e => {
                    null != M && c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type), (0, A.promptToUpload)(e.currentTarget.files, l, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }), e.currentTarget.value = null
                }, [l, M]), y = e => {
                    e.stopPropagation(), (null == M ? void 0 : M.upload) != null && (0, d.openModalLazy)(async () => {
                        let e = M.upload;
                        o(null != e, "upload should not be null");
                        let {
                            default: t
                        } = await s.el("467339").then(s.bind(s, "467339"));
                        return s => (0, a.jsx)(t, {
                            ...s,
                            upload: e,
                            channelId: l.id,
                            draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                            onSubmit: t => {
                                let {
                                    name: s,
                                    description: a,
                                    spoiler: n
                                } = t;
                                c.default.update(l.id, e.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                                    filename: s,
                                    description: a,
                                    spoiler: n
                                })
                            },
                            disableSpoiler: !0
                        })
                    })
                }, D = (0, a.jsx)(S.default, {
                    color: d.ButtonColors.CUSTOM,
                    className: r(j.uploadFileInputContainer),
                    innerClassName: j.uploadThumbnailContainer,
                    onChange: P,
                    multiple: !1,
                    "aria-hidden": !0,
                    filters: R,
                    "aria-describedby": O,
                    "aria-label": L ? I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                    children: L ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(F, {
                            mediaAttachments: _,
                            containerWidth: b.width,
                            containerHeight: b.height
                        }), (0, a.jsxs)("div", {
                            className: r(j.changeThumbnailLabelContainer, {
                                [j.changeThumbnailLabelOverflow]: (null == _ ? void 0 : _.length) > 2
                            }),
                            children: [(0, a.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
                            }), null == M && (0, a.jsx)(T.default, {
                                className: j.editIcon,
                                width: 16,
                                height: 16
                            })]
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(p.default, {
                            className: j.uploadIcon
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
                        })]
                    })
                });
                return (0, a.jsx)("div", {
                    className: j.thumbnailContainer,
                    style: b,
                    children: null != M ? (0, a.jsx)(g.default, {
                        actions: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                                onClick: y,
                                children: (0, a.jsx)(E.default, {})
                            }), (0, a.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                onClick: () => c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                                dangerous: !0,
                                children: (0, a.jsx)(N.default, {})
                            })]
                        }),
                        draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                        id: M.id,
                        channelId: l.id,
                        handleEditModal: y,
                        keyboardModeEnabled: C,
                        size: g.AttachmentListItemSizes.SMALL,
                        className: j.attachmentListItem,
                        children: D
                    }) : (0, a.jsx)(a.Fragment, {
                        children: D
                    })
                })
            }
        },
        489898: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            }), s("881410"), s("222007"), s("424973"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660");
            var a = s("884691"),
                n = s("65597"),
                l = s("850391"),
                r = s("585722"),
                i = s("856220"),
                o = s("891475");

            function u(e, t) {
                var s, u;
                let {
                    mediaAttachments: d,
                    hasThumbnail: c
                } = function(e) {
                    let [t, s] = a.useState(null), o = (0, n.useStateFromStoresArray)([r.default], () => {
                        let t = r.default.getUploads(e.id, l.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                            s = t.find(e => e.isThumbnail);
                        return null != s ? [s] : t.filter(e => e.isVideo || e.isImage)
                    }), u = a.useMemo(() => o.some(e => e.isThumbnail), [o]);
                    return a.useEffect(() => {
                        let e = [],
                            t = o.slice(0, i.MAX_THUMBNAIL_COUNT).flatMap(t => {
                                var s;
                                let a = null == t ? void 0 : null === (s = t.item) || void 0 === s ? void 0 : s.file;
                                if (null == a) return [];
                                let n = URL.createObjectURL(a);
                                return e.push(n), {
                                    id: t.id,
                                    src: n,
                                    spoiler: t.spoiler,
                                    alt: t.description,
                                    isThumbnail: t.isThumbnail,
                                    upload: !0 === t.isThumbnail ? t : void 0,
                                    isVideo: t.isVideo
                                }
                            });
                        return s(t), () => {
                            s(null), e.forEach(e => URL.revokeObjectURL(e))
                        }
                    }, [o]), {
                        mediaAttachments: t,
                        hasThumbnail: u
                    }
                }(e), m = Math.max(i.MAX_THUMBNAIL_COUNT - (null !== (s = null == d ? void 0 : d.length) && void 0 !== s ? s : 0), 0), {
                    embeds: h
                } = (0, o.useExtractEmbedPreview)(c, m, t), f = a.useMemo(() => null == h ? void 0 : h.flatMap(e => {
                    let t = (0, i.getEmbedPreviewImageUrl)(e);
                    return null == t ? [] : {
                        id: t,
                        src: t,
                        spoiler: !1,
                        alt: e.title
                    }
                }), [h]), g = [...null != d ? d : []];
                return !c && m > 0 && g.push(...null !== (u = null == f ? void 0 : f.slice(0, m)) && void 0 !== u ? u : []), g
            }
        },
        753582: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useShowAnimation: function() {
                    return l
                }
            }), s("222007");
            var a = s("884691"),
                n = s("301165");

            function l(e) {
                let [t, s] = a.useState(!0), l = (0, n.useTransition)(t, {
                    keys: e => e ? "shown" : "hidden",
                    config: r,
                    from: {
                        opacity: 0
                    },
                    enter: {
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    },
                    unique: !0,
                    immediate: e
                });
                return {
                    transitions: l,
                    setVisible: s
                }
            }
            let r = {
                mass: 1,
                tension: 250,
                friction: 18,
                clamp: !0
            }
        },
        857171: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                r = s("77078"),
                i = s("371642");

            function o(e) {
                let {
                    children: t,
                    className: s,
                    innerClassName: n,
                    onChange: o,
                    "aria-label": u,
                    "aria-describedby": d,
                    filters: c,
                    multiple: m = !1,
                    disabled: h = !1,
                    submitting: f = !1,
                    ...g
                } = e;
                return (0, a.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, a.jsxs)("div", {
                        className: l(s, (0, r.getButtonStyle)({
                            ...g,
                            submitting: f,
                            disabled: h
                        })),
                        "aria-disabled": h,
                        children: [(0, a.jsx)("span", {
                            "aria-hidden": !0,
                            className: n,
                            children: t
                        }), (0, a.jsx)(i.default, {
                            tabIndex: 0,
                            onChange: o,
                            filters: c,
                            multiple: m,
                            "aria-label": u,
                            "aria-describedby": d,
                            disabled: h
                        })]
                    })
                })
            }
        },
        673078: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("159190"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M1.93944 14.6655H6.18191C6.51646 14.6655 6.78797 14.394 6.78797 14.0594C6.78797 13.7249 6.51646 13.4534 6.18191 13.4534H3.40249L7.21646 9.63937C7.45313 9.40271 7.45313 9.01906 7.21646 8.7824C7.09828 8.66391 6.94313 8.60482 6.78797 8.60482C6.63282 8.60482 6.47767 8.66391 6.35948 8.7824L2.54551 12.5964V9.81695C2.54551 9.4824 2.27399 9.21089 1.93944 9.21089C1.60489 9.21089 1.33337 9.4824 1.33337 9.81695V14.0594C1.33337 14.394 1.60489 14.6655 1.93944 14.6655Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M8.78362 7.21512C9.02029 7.45179 9.40393 7.45179 9.6406 7.21512L13.4546 3.40114V6.18056C13.4546 6.51511 13.7261 6.78663 14.0606 6.78663C14.3952 6.78663 14.6667 6.51511 14.6667 6.18056V1.9381C14.6667 1.60355 14.3952 1.33203 14.0606 1.33203L9.81818 1.33203C9.48363 1.33203 9.21211 1.60355 9.21211 1.9381C9.21211 2.27265 9.48363 2.54416 9.81818 2.54416H12.5976L8.78362 6.35814C8.54695 6.59481 8.54695 6.97845 8.78362 7.21512Z"
                        })]
                    })
                }, l.MaximizeIcon, void 0, {
                    size: 16
                })
        },
        887718: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("666031"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 29,
                        height: s = 22,
                        color: n = "currentColor",
                        backgroundColor: l,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 29 22",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("rect", {
                                width: t,
                                height: s,
                                fill: l,
                                fillOpacity: ".8",
                                rx: "3"
                            }), (0, a.jsx)("path", {
                                d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                                fill: n
                            }), (0, a.jsx)("path", {
                                d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                                fill: n
                            }), (0, a.jsx)("path", {
                                d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                                fill: n
                            })]
                        })
                    })
                }, l.GifIcon, void 0, {
                    size: 29
                })
        },
        808404: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("851298"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 39,
                        height: s = 27,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 39 27",
                        fill: n,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M26.4909 2.76514H5.78906C3.20886 2.76514 1.11719 4.79342 1.11719 7.29544V20.8863C1.11719 23.3884 3.20886 25.4167 5.78906 25.4167H31.9922C34.5724 25.4167 36.6641 23.3884 36.6641 20.8863V12.63C35.9239 12.8436 35.1398 12.9583 34.3281 12.9583C29.8128 12.9583 26.1523 9.40882 26.1523 5.03029C26.1523 4.24318 26.2706 3.48286 26.4909 2.76514ZM13 7.29544C14.2885 7.29544 15.3359 8.30932 15.3359 9.56059C15.3359 10.8128 14.2885 11.8257 13 11.8257C11.7087 11.8257 10.6641 10.8128 10.6641 9.56059C10.6641 8.30932 11.7087 7.29544 13 7.29544ZM10.6641 20.8863L14.168 16.356L16.5039 18.6212L21.1758 12.9583L24.6797 20.8863H17.6719H10.6641Z",
                            fill: n
                        }), (0, a.jsx)("path", {
                            d: "M35.4961 0.5V3.89773H39V6.16288H35.4961V9.56061H33.1602V6.16288H29.6562V3.89773H33.1602V0.5H35.4961Z",
                            fill: n
                        })]
                    })
                }, l.ImagePlusIcon, void 0, {
                    size: 39
                })
        },
        891152: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("620000"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M12.1803 4.66659L12.1803 14.6666H10.4701L10.4701 4.66659L8.53289 6.63325L7.33329 5.40825L11.3292 1.33325L15.3333 5.40825L14.1337 6.65825L12.1803 4.66659Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M3.81962 11.3333L3.81962 1.33325L5.52983 1.33325L5.52985 11.3333L7.46703 9.36658L8.66663 10.5916L4.67068 14.6666L0.666626 10.5916L1.86622 9.34158L3.81962 11.3333Z"
                        })]
                    })
                }, l.ArrowsUpDownIcon, void 0, {
                    size: 16
                })
        }
    }
]);