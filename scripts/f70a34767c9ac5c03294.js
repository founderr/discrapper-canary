(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92683"], {
        45299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                a = n("301165"),
                u = n("669491"),
                i = n("77078"),
                s = n("659500"),
                o = n("49111"),
                d = n("782340"),
                c = n("317404"),
                f = function(e) {
                    var t;
                    let {
                        message: n,
                        errorMessage: f,
                        submitting: h,
                        onReset: S,
                        onSave: E,
                        onSaveText: C,
                        onResetText: g,
                        onSaveButtonColor: m,
                        disabled: _,
                        saveButtonTooltip: p
                    } = e, I = r.useRef(null), [{
                        spring: M
                    }, N] = (0, a.useSpring)(() => ({
                        spring: 0
                    }));
                    r.useEffect(() => {
                        function e() {
                            N({
                                spring: 1,
                                config: a.config.gentle
                            }), N({
                                spring: 0,
                                config: a.config.gentle,
                                delay: 1e3
                            })
                        }
                        return s.ComponentDispatch.subscribe(o.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            s.ComponentDispatch.unsubscribe(o.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [N]);
                    let b = M.to({
                            range: [0, 1],
                            output: [(0, i.useToken)(u.default.colors.TEXT_NORMAL).hex(), (0, i.useToken)(u.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        v = M.to({
                            range: [0, 1],
                            output: [(0, i.useToken)(u.default.colors.BACKGROUND_FLOATING).hex(), (0, i.useToken)(u.default.colors.STATUS_DANGER).hex()]
                        }),
                        R = (0, i.useToken)(u.default.colors.TEXT_DANGER).hex();
                    return (0, l.jsx)(a.animated.div, {
                        className: c.container,
                        style: {
                            backgroundColor: v
                        },
                        children: (0, l.jsx)("div", {
                            className: c.flexContainer,
                            ref: I,
                            children: (0, l.jsxs)(i.FocusRingScope, {
                                containerRef: I,
                                children: [(0, l.jsx)("div", {
                                    className: c.shrinkingContainer,
                                    children: (0, l.jsx)(a.animated.div, {
                                        className: c.message,
                                        style: {
                                            color: null != f ? R : b
                                        },
                                        children: null !== (t = null != f ? f : n) && void 0 !== t ? t : d.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: c.actions,
                                    children: [null != S && (0, l.jsx)(i.Button, {
                                        className: c.resetButton,
                                        size: i.Button.Sizes.SMALL,
                                        color: i.Button.Colors.PRIMARY,
                                        look: i.Button.Looks.LINK,
                                        onClick: S,
                                        children: (0, l.jsx)(a.animated.span, {
                                            style: {
                                                color: b
                                            },
                                            children: null != g ? g : d.default.Messages.RESET
                                        })
                                    }), null != E ? (0, l.jsx)(i.Tooltip, {
                                        text: p,
                                        children: e => (0, l.jsx)(i.Button, {
                                            size: i.Button.Sizes.SMALL,
                                            color: null != m ? m : i.Button.Colors.GREEN,
                                            submitting: h,
                                            disabled: _,
                                            onClick: E,
                                            ...e,
                                            children: null != C ? C : d.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        99637: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WebhookIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "m7.7 16.95 3.68-6.76a1 1 0 0 0-.5-1.4A3 3 0 1 1 15 6a1 1 0 1 0 2 0 5 5 0 1 0-7.85 4.1L5.95 16a2 2 0 1 0 1.78 3h8.54a2 2 0 1 0 0-2H7.73l-.02-.05Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M13.8 6.86A2 2 0 1 0 12.16 8l4.53 6.58a1 1 0 0 0 .82.43h.5a3 3 0 1 1-1.98 5.25 1 1 0 0 0-.66-.25h-.01a1 1 0 0 0-.66 1.75A4.98 4.98 0 0 0 23 18a5 5 0 0 0-4.97-5L13.8 6.86ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z",
                        className: i
                    })]
                })
            }
        },
        994906: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openGuildMemberModViewSidebar: function() {
                    return u
                }
            });
            var l = n("208021"),
                r = n("582713"),
                a = n("459824");

            function u(e, t, n) {
                (0, a.canAccessGuildMemberModViewWithExperiment)(e) && l.default.openGuildSidebar({
                    guildId: e,
                    baseChannelId: n,
                    sidebarType: r.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
                    details: {
                        type: r.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e
                    }
                })
            }
        },
        127421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchAllGuildMembers: function() {
                    return d
                }
            }), n("70102");
            var l = n("811022"),
                r = n("872717"),
                a = n("913144"),
                u = n("448993"),
                i = n("828434"),
                s = n("49111");
            let o = new l.default("MemberSafetyElasticSearch");
            async function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (l > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: f
                } = n;
                try {
                    var h;
                    let u = await r.default.post({
                        url: s.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: f
                    });
                    if (o.info("JANK searchAllGuildMembers", {
                            response: u
                        }), u.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == u.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await a.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * u.body.retry_after)), d(e, t, n, l + 1)
                    }
                    return {
                        type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (h = u.body).guild_id,
                            members: h.members,
                            page_result_count: h.page_result_count,
                            total_result_count: h.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new u.APIError(t);
                    return o.info("JANK searchAllGuildMembers error", {
                        error: e
                    }), {
                        type: i.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        828434: function(e, t, n) {
            "use strict";
            var l, r;
            n.r(t), n.d(t, {
                INDEXING_RESPONSE_CODE: function() {
                    return a
                },
                GuildMemberSearchResponseType: function() {
                    return l
                }
            });
            let a = 202;
            (r = l || (l = {}))[r.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", r[r.ERROR = 2] = "ERROR"
        },
        225982: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchGuildMembers: function() {
                    return s
                }
            });
            var l = n("811022"),
                r = n("913144"),
                a = n("127421"),
                u = n("828434");
            let i = new l.default("MemberSafetyGuildMemberSearchActionCreators");
            async function s(e, t, n) {
                let l = await (0, a.searchAllGuildMembers)(e, t, n);
                if (l.type === u.GuildMemberSearchResponseType.ERROR) throw l.body;
                let {
                    body: s
                } = l;
                i.info("JANK searchGuildMembers success", {
                    body: s
                }), r.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: s.members,
                    page_result_count: s.page_result_count,
                    total_result_count: s.total_result_count
                })
            }
        },
        219115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsMakingRequestV2: function() {
                    return y
                },
                useIsStillIndexingV2: function() {
                    return G
                },
                handleInitializeV2: function() {
                    return L
                },
                handleGuildDeleteV2: function() {
                    return j
                },
                handleSearchStateUpdateV2: function() {
                    return U
                },
                handlePaginationUpdateV2: function() {
                    return D
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return w
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return B
                }
            }), n("222007"), n("70102");
            var l, r, a, u, i = n("714617"),
                s = n.n(i),
                o = n("917351"),
                d = n("308503"),
                c = n("811022"),
                f = n("249654"),
                h = n("449008"),
                S = n("691386"),
                E = n("770115"),
                C = n("490931"),
                g = n("225982"),
                m = n("178406");
            let _ = new c.default("MemberSafetySearchManagerV2");

            function p(e) {
                return "guild_".concat(e)
            }

            function I(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(a = l || (l = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.STILL_INDEXING = 4] = "STILL_INDEXING";
            let M = (0, d.default)(e => ({}));

            function N(e, t) {
                let n = M.getState()[e];
                return null == n && (n = I(1)), n = {
                    ...n,
                    ...t
                }, M.setState(t => ({
                    ...t,
                    [e]: n
                })), n
            }

            function b(e) {
                return M.getState()[e]
            }

            function v(e) {
                let t = b(e);
                return null == t && N(e, t = I(1)), t
            }

            function R(e) {
                let t = b(e);
                null != t && N(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function T(e) {
                var t;
                let n = p(e);
                t = n, M.setState(e => {
                    let n = {
                        ...e
                    };
                    return delete n[t], n
                })
            }

            function x(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }(u = r || (r = {}))[u.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", u[u.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", u[u.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", u[u.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function A(e) {
                var t, n, l, r;
                let a = m.default.getSearchStateByGuildId(e),
                    u = m.default.getPaginationStateByGuildId(e),
                    i = p(e),
                    d = v(i),
                    [c, I] = function(e, t, n) {
                        var l, r, a, u, i, s;
                        let o = function(e, t) {
                                var n;
                                let {
                                    currentPageChunkNumber: l,
                                    previousPageChunkNumber: r,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = (0, S.getSearchChunkLimit)(e),
                                        n = e.pageSize * (e.currentPage - 1),
                                        l = e.pageSize * e.currentPage,
                                        r = e.pageSize * (e.currentPage + 1);
                                    return {
                                        previousPageChunkNumber: x(n, t),
                                        currentPageChunkNumber: x(l, t),
                                        nextPageChunkNumber: x(r, t)
                                    }
                                }(t), {
                                    previousPagination: u
                                } = v(p(e)), i = t.currentPage, s = null !== (n = null == u ? void 0 : u.currentPage) && void 0 !== n ? n : 0, o = m.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == o:
                                    case l === a && 0 === l:
                                        return 0;
                                    case l === a && l === r:
                                        return 1;
                                    case s < i && l < a:
                                        return 2;
                                    case s > i && l >= r:
                                        if (0 < l) return 3;
                                        return 0;
                                    default:
                                        return 1
                                }
                            }(e, n),
                            d = m.default.getElasticSearchPaginationByGuildId(e),
                            c = (0, S.getSearchChunkLimit)(n);
                        switch (o) {
                            case 0: {
                                let t = m.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: c,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: f.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case 1:
                                return [null !== (l = t.cursor) && void 0 !== l ? l : null, {
                                    limit: c,
                                    after: null !== (r = t.cursor) && void 0 !== r ? r : void 0
                                }];
                            case 2:
                                return [null !== (a = null == d ? void 0 : d.after) && void 0 !== a ? a : null, {
                                    limit: c,
                                    after: null !== (u = null == d ? void 0 : d.after) && void 0 !== u ? u : void 0
                                }];
                            case 3:
                                return [null !== (i = null == d ? void 0 : d.before) && void 0 !== i ? i : null, {
                                    limit: c,
                                    before: null !== (s = null == d ? void 0 : d.before) && void 0 !== s ? s : void 0
                                }];
                            default:
                                (0, h.assertNever)(o)
                        }
                    }(e, d, u);
                let M = (t = function(e) {
                    var t;
                    let n = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: l
                        } = e;
                    if (null != (t = l) && t.length > 1) {
                        let [e, t] = (0, E.splitQuery)(l);
                        e.length > 0 && (n.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (n.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: a
                    } = e, u = {};
                    r && (u.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - C.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), a && (u.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), Object.keys(u).length > 0 && (n.or_query.safety_signals = u);
                    let {
                        selectedRoleIds: i
                    } = e;
                    return i.size > 0 && (n.and_query.role_ids = {
                        and_query: Array.from(i)
                    }), n
                }(a), null == (n = I) ? t : {
                    ...t,
                    ...n
                });
                if (function(e, t) {
                        let n = v(e);
                        return s(n.query, t)
                    }(i, M) && (0, o.isEqual)(c, d.cursor)) return;
                let T = function(e, t, n, l) {
                    let r = b(e);
                    if ((null == r ? void 0 : r.requestState) === 2) {
                        var a;
                        null === (a = r.abortController) || void 0 === a || a.abort()
                    }
                    return N(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: n,
                        previousPagination: l
                    })
                }(i, M, c, u);
                try {
                    ;
                    if (_.info("Making member search request", {
                            query: T.query,
                            guildId: e
                        }), null == T.query) throw Error("Query is null");
                    await (0, g.searchGuildMembers)(e, T.query, {
                        signal: null !== (r = null === (l = T.abortController) || void 0 === l ? void 0 : l.signal) && void 0 !== r ? r : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = b(e);
                        null != t && N(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(i);
                    return
                }
                R(i)
            }

            function y(e) {
                return M(t => {
                    var n;
                    let l = p(e);
                    return (null === (n = t[l]) || void 0 === n ? void 0 : n.requestState) === 2
                })
            }

            function G(e) {
                return M(t => {
                    var n;
                    let l = p(e);
                    return (null === (n = t[l]) || void 0 === n ? void 0 : n.requestState) === 4
                })
            }

            function L(e) {
                let {
                    guildId: t
                } = e;
                T(t), A(t)
            }

            function j(e) {
                let {
                    guild: t
                } = e;
                T(t.id)
            }

            function U(e) {
                let {
                    guildId: t
                } = e;
                A(t)
            }

            function D(e) {
                let {
                    guildId: t
                } = e;
                A(t)
            }

            function w(e) {
                let {
                    guildId: t
                } = e, n = p(t);
                R(n)
            }

            function B(e) {
                let {
                    guildId: t
                } = e, n = p(t);
                N(n, {
                    requestState: 4,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }
        },
        714247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("446674"),
                u = n("812204"),
                i = n("685665"),
                s = n("744568"),
                o = n("208021"),
                d = n("982108"),
                c = n("305961"),
                f = n("49111"),
                h = n("973033");

            function S(e) {
                let {
                    guildId: t
                } = e, n = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: S
                } = (0, i.default)(u.default.MEMBER_SAFETY_PAGE), E = (0, a.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(t), [t]), C = r.useCallback(() => {
                    o.default.closeGuildSidebar(t)
                }, [t]);
                return null != n && null != E && null != E ? (0, l.jsx)(S, {
                    children: (0, l.jsx)("div", {
                        className: h.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, l.jsx)(s.default, {
                            userId: E.details.userId,
                            guildId: E.details.guildId,
                            onClose: C
                        })
                    })
                }) : null
            }
        },
        112265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                u = n.n(a),
                i = n("446674"),
                s = n("77078"),
                o = n("812204"),
                d = n("685665"),
                c = n("69927"),
                f = n("994906"),
                h = n("459824"),
                S = n("41594"),
                E = n("539938"),
                C = n("393414"),
                g = n("401642"),
                m = n("982108"),
                _ = n("42203"),
                p = n("923959"),
                I = n("305961"),
                M = n("18494"),
                N = n("98292"),
                b = n("155207"),
                v = n("466818"),
                R = n("914985"),
                T = n("714247"),
                x = n("565556"),
                A = n("891222"),
                y = n("49111"),
                G = n("724210"),
                L = n("782340"),
                j = n("973033"),
                U = n("305794");

            function D(e) {
                let {
                    guild: t,
                    previousChannel: n
                } = e, a = L.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, u = L.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: a
                }), (0, l.jsxs)(E.default, {
                    className: j.header,
                    innerClassname: j.innerHeader,
                    channelId: G.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != n ? (0, l.jsx)(s.Button, {
                        className: j.returnButton,
                        size: s.Button.Sizes.SMALL,
                        look: s.Button.Looks.OUTLINED,
                        color: s.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != n && (0, C.transitionToGuild)(t.id, n.id)
                        },
                        children: (0, l.jsx)(s.Text, {
                            className: j.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: L.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == n ? null : (0, l.jsxs)(r.Fragment, {
                                    children: [(0, l.jsx)(S.ChannelItemIcon, {
                                        className: j.returnIcon,
                                        guild: t,
                                        channel: n
                                    }), (0, l.jsx)(N.default, {
                                        children: (0, l.jsx)(s.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: n.name
                                        })
                                    })]
                                }, n.id)
                            })
                        })
                    }) : (0, l.jsx)("div", {}),
                    children: [(0, l.jsx)(E.default.Icon, {
                        icon: b.default,
                        "aria-hidden": !0
                    }), (0, l.jsx)(E.default.Title, {
                        children: u
                    })]
                })
            }

            function w(e) {
                let {
                    guildId: t
                } = e, n = (0, i.useStateFromStores)([I.default], () => I.default.getGuild(t)), {
                    AnalyticsLocationProvider: a
                } = (0, d.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, v.useCanAccessMemberSafetyPage)(t), S = (0, h.useCanAccessGuildMemberModView)(t), E = (0, i.useStateFromStores)([M.default], () => M.default.getLastSelectedChannelId(t)), N = (0, i.useStateFromStores)([_.default], () => _.default.getChannel(E)), b = r.useRef(null);
                r.useEffect(() => {
                    if (!c && null != n) {
                        var e;
                        let t = null === (e = p.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
                        (0, C.transitionToGuild)(n.id, t)
                    }
                }, [n, c]);
                let L = (0, i.useStateFromStores)([m.default], () => null != m.default.getGuildSidebarState(t), [t]),
                    w = r.useCallback(e => {
                        S ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, G.StaticChannelRoute.MEMBER_SAFETY) : (0, g.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: y.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [S]);
                return null != n && c ? (0, l.jsxs)(a, {
                    children: [(0, l.jsxs)("div", {
                        className: u(U.chat, j.page, {
                            [U.threadSidebarOpen]: L
                        }),
                        children: [(0, l.jsx)(D, {
                            guild: n,
                            previousChannel: N
                        }), (0, l.jsx)(s.AdvancedScroller, {
                            className: u(j.scroller),
                            ref: b,
                            children: (0, l.jsxs)("div", {
                                className: u(U.content, j.container),
                                children: [(0, l.jsx)(R.default, {
                                    guild: n
                                }), (0, l.jsx)(A.default, {
                                    guild: n,
                                    onMemberSelect: w
                                })]
                            })
                        }), (0, l.jsx)(x.default, {
                            guildId: n.id
                        })]
                    }), S && (0, l.jsx)(T.default, {
                        guildId: n.id
                    })]
                }) : null
            }
        },
        891222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                u = n.n(a),
                i = n("301165"),
                s = n("65597"),
                o = n("219115"),
                d = n("178406"),
                c = n("553275"),
                f = n("691307"),
                h = n("314143"),
                S = n("721302"),
                E = n("888940");

            function C(e) {
                let {
                    guild: t
                } = e, n = (0, o.useIsMakingRequestV2)(t.id), r = (0, i.useSpring)({
                    height: n ? 3 : 0,
                    config: i.config.stiff
                });
                return (0, l.jsx)("div", {
                    className: E.loaderContainer,
                    children: (0, l.jsx)(i.animated.div, {
                        className: E.loaderBar,
                        style: r
                    })
                })
            }

            function g(e) {
                let {
                    guild: t,
                    className: n,
                    onPageChange: a,
                    onMemberSelect: i
                } = e, g = (0, s.default)([d.default], () => d.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), m = (0, o.useIsMakingRequestV2)(t.id), _ = (0, o.useIsStillIndexingV2)(t.id), p = r.useCallback(e => {
                    null != e && (null == i || i(e))
                }, [i]), I = (0, c.getSearchState)(_, m, g);
                return (0, l.jsxs)("div", {
                    className: u(E.mainTableContainer, n),
                    children: [(0, l.jsx)(S.default, {
                        guild: t
                    }), (0, l.jsx)(C, {
                        guild: t
                    }), (0, l.jsx)(f.default, {
                        guild: t,
                        onSelectRow: p,
                        searchState: I
                    }), I !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(h.default, {
                        guildId: t.id,
                        onPageChange: a
                    })]
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                u = n.n(a),
                i = n("458960"),
                s = n("77078"),
                o = n("866893");
            let d = {
                friction: 7,
                tension: 60
            };
            class c extends r.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : i.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return i.default.spring(this.animation, {
                        ...d,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return i.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, l.jsx)(i.default.div, {
                        className: u(e, o.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new i.default.Value(0)
                }
            }
            c.contextType = s.AccessibilityPreferencesContext;
            var f = c
        },
        741919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("99637"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: a,
                        foreground: u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        className: a,
                        children: [(0, l.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M11 10.9C11 10.9 11 10.9 11 10.9V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6C7 7.79499 7.94587 9.36906 9.36637 10.251L6.29491 16.0216C6.19867 16.0074 6.1002 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20C6.82012 20 7.52495 19.5064 7.83358 18.8H16.1664C16.475 19.5064 17.1799 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.1799 16 16.475 16.4936 16.1664 17.2H7.83359C7.82844 17.1882 7.82318 17.1765 7.81781 17.1648L11 10.9Z"
                        }), (0, l.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.43529 13.8609 6.8381 13.6248 7.16643L18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23C15.9497 23 14.1876 21.7659 13.416 20H15.7639C16.3132 20.6138 17.1115 21 18 21C19.6568 21 21 19.6569 21 18C21 16.3431 19.6568 15 18 15H17L12 8Z"
                        }), (0, l.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M10.584 20C9.8124 21.7659 8.05032 23 6 23C3.23858 23 1 20.7614 1 18C1 15.2386 3.23858 13 6 13V15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C6.8885 21 7.68679 20.6138 8.23611 20H10.584Z"
                        })]
                    })
                }, a.WebhookIcon, void 0, {
                    size: 24
                })
        }
    }
]);