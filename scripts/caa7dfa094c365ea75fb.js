(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71352"], {
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("70102");
            var i = n("759843"),
                r = n("627929"),
                l = n("913144"),
                u = n("81732"),
                o = n("282109"),
                s = n("34676"),
                a = n("840707"),
                d = n("519705"),
                c = n("49111"),
                f = n("397336"),
                S = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: S,
                            permissionOverwrites: E = [],
                            bitrate: h,
                            userLimit: g,
                            parentId: p,
                            skuId: _,
                            branchId: C
                        } = e;
                        l.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let m = {
                            type: n,
                            name: S,
                            permission_overwrites: E
                        };
                        if (null != h && h !== c.BITRATE_DEFAULT && (m.bitrate = h), null != g && g > 0 && (m.user_limit = g), null != p && (m.parent_id = p), n === c.ChannelTypes.GUILD_STORE) {
                            if (null == _) throw Error("Unexpected missing SKU");
                            m.sku_id = _, m.branch_id = C
                        }
                        return a.default.post({
                            url: c.Endpoints.GUILD_CHANNELS(t),
                            body: m,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, r.exact)({
                                        is_private: E.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (o.default.isOptInEnabled(t) && d.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }, s.NotificationLabels.OptedIn), u.default.checkGuildTemplateDirty(t), e), e => {
                            throw l.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, l) => a.default.post({
                        url: c.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: l
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, r.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
        },
        704426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallRightIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
                        className: o
                    })
                })
            }
        },
        167338: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatAlertIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12.03 21.5c-.05.28-.27.5-.54.5H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.32-3.77c-.01.12-.17.14-.22.04a3.06 3.06 0 0 0-5.3 0l-3.95 6.9c-.19.32-.3.65-.37.98Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        833222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DenyIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: o
                    })]
                })
            }
        },
        49097: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SparklesIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M18.14 2.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.21 1.21 0 0 0 2.28 0l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19l-.51-1.38ZM10.6 9.11a1.7 1.7 0 0 0-3.2 0l-.84 2.27a2 2 0 0 1-1.18 1.18l-2.27.85a1.7 1.7 0 0 0 0 3.18l2.27.85a2 2 0 0 1 1.18 1.18l.85 2.27a1.7 1.7 0 0 0 3.18 0l.85-2.27a2 2 0 0 1 1.18-1.18l2.27-.85a1.7 1.7 0 0 0 0-3.18l-2.27-.85a2 2 0 0 1-1.18-1.18l-.85-2.27Z",
                        className: o
                    })
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
                        className: o
                    })
                })
            }
        },
        488197: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImprovedMarkdownUserExperiment: function() {
                    return r
                },
                ImprovedMarkdownGuildExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-03_improved_message_markdown",
                    label: "Improved Message Markdown ",
                    defaultConfig: {
                        showListsAndHeaders: !1,
                        showMaskedLinks: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show improved message markdown",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !0
                        }
                    }, {
                        id: 2,
                        label: "Show improved message markdown WITHOUT masked links",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !1
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-03_improved_message_markdown_guild",
                    label: "Improved Message Markdown Guild Experiment",
                    defaultConfig: {
                        showListsAndHeaders: !1,
                        showMaskedLinks: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show improved message markdown",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !0
                        }
                    }, {
                        id: 2,
                        label: "Show improved message markdown WITHOUT masked links",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !1
                        }
                    }]
                })
        },
        193865: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowImprovedMarkdownUserExperimentConfig: function() {
                    return l
                },
                useShowImprovedMarkdownGuildExperimentConfig: function() {
                    return u
                }
            });
            var i = n("299039"),
                r = n("488197");

            function l(e) {
                return o(e, r.ImprovedMarkdownUserExperiment.useExperiment({
                    location: "590063_2"
                }))
            }

            function u(e, t) {
                return o(t, r.ImprovedMarkdownGuildExperiment.useExperiment({
                    guildId: e,
                    location: "590063_4"
                }))
            }

            function o(e, t) {
                return e < i.default.extractTimestamp("1088216706570268682") ? r.ImprovedMarkdownUserExperiment.definition.defaultConfig : t
            }
        },
        183137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAssetCDNUrl: function() {
                    return i
                }
            });

            function i(e) {
                return "".concat("https://cdn.discordapp.com/assets", "/").concat(e)
            }
        },
        763913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchPriceTiers: function() {
                    return l
                }
            });
            var i = n("913144"),
                r = n("56949");
            async function l(e, t) {
                i.default.dispatch({
                    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
                    guildId: e,
                    priceTierType: t
                });
                try {
                    let n = await r.getPriceTiers(e, t);
                    i.default.dispatch({
                        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
                        guildId: e,
                        priceTierType: t,
                        priceTiers: n
                    })
                } catch (n) {
                    i.default.dispatch({
                        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
                        guildId: e,
                        priceTierType: t
                    })
                }
            }
        },
        874146: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildProductSortOptions: function() {
                    return l
                },
                ServerShopTabOrder: function() {
                    return u
                },
                getGuildProductSortOptionLabel: function() {
                    return s
                },
                DISPLAYED_SORT_OPTIONS: function() {
                    return a
                }
            });
            var i, r, l, u, o = n("782340");

            function s(e) {
                return ({
                    4: o.default.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
                    2: o.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
                    3: o.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
                    1: o.default.Messages.GUILD_STORE_SORT_OPTION_NAME
                })[e]
            }(i = l || (l = {}))[i.NAME = 1] = "NAME", i[i.PRICE_ASC = 2] = "PRICE_ASC", i[i.PRICE_DESC = 3] = "PRICE_DESC", i[i.NEWEST_ARRIVALS = 4] = "NEWEST_ARRIVALS", (r = u || (u = {}))[r.SUBS_FIRST = 1] = "SUBS_FIRST", r[r.PRODUCTS_FIRST = 2] = "PRODUCTS_FIRST";
            let a = [4, 2, 3, 1]
        },
        741515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePriceTiers: function() {
                    return s
                },
                useMonetizationSettings: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("837008"),
                u = n("763913"),
                o = n("670535");

            function s(e, t) {
                let n = (0, r.useStateFromStores)([o.default], () => o.default.getPriceTiersForGuildAndType(e, t)),
                    l = (0, r.useStateFromStores)([o.default], () => o.default.getPriceTiersFetchStateForGuildAndType(e, t));
                return i.useEffect(() => {
                    l === o.FetchState.NOT_FETCHED && (0, u.fetchPriceTiers)(e, t)
                }, [e, l, t]), {
                    loading: l === o.FetchState.FETCHING,
                    priceTiers: n
                }
            }

            function a(e) {
                let {
                    fetchSubscriptionsSettings: t,
                    loading: n,
                    error: r
                } = (0, l.useFetchSubscriptionsSettings)();
                i.useEffect(() => {
                    t(e)
                }, [t, e]);
                let u = (0, l.useSubscriptionsSettings)(e);
                return {
                    loaded: null != u && !n,
                    subscriptionsSettings: u,
                    loading: n,
                    error: r
                }
            }
        },
        56949: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPriceTiers: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("448993"),
                l = n("49111");
            let u = async (e, t) => {
                try {
                    let n = await i.default.get({
                        url: l.Endpoints.PRICE_TIERS,
                        query: {
                            price_tier_type: t,
                            guild_id: e
                        }
                    });
                    return n.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }
        },
        670535: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return d
                }
            }), n("222007");
            var i, r, l = n("446674"),
                u = n("913144");
            let o = new Map,
                s = new Map;
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            class a extends l.default.Store {
                getPriceTiersFetchStateForGuildAndType(e, t) {
                    var n, i;
                    return null !== (i = null === (n = s.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0
                }
                getPriceTiersForGuildAndType(e, t) {
                    var n;
                    return null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(t)
                }
            }
            a.displayName = "CreatorMonetizationStore";
            var d = new a(u.default, {
                CONNECTION_OPEN: function() {
                    o.clear(), s.clear()
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
                    let {
                        guildId: t,
                        priceTierType: n
                    } = e;
                    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 1)
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        priceTierType: n,
                        priceTiers: i
                    } = e;
                    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 2), !o.has(t) && o.set(t, new Map), o.get(t).set(n, i)
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        priceTierType: n
                    } = e;
                    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 2)
                }
            })
        },
        624180: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return r
                }
            });
            var i = n("866190");

            function r() {
                return (0, i.useIsWindowFocused)()
            }
        },
        801765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useListingThumbnailUrl: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("845579"),
                l = n("271560"),
                u = n("624180");

            function o(e, t) {
                let {
                    shouldAnimate: n = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = r.GifAutoPlay.useSetting(), s = (0, u.useIsWindowFocused)(), a = n && s && o;
                return i.useMemo(() => {
                    if ((null == e ? void 0 : e.image_asset) != null) return (0, l.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
                }, [t, e, a])
            }
        },
        500307: function(e, t, n) {
            "use strict";
            var i, r, l, u;
            n.r(t), n.d(t, {
                GuildShopPreviewClickActions: function() {
                    return i
                },
                GuildShopCopyLinkLocations: function() {
                    return r
                },
                GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK: function() {
                    return o
                },
                GUILD_SHOP_CHANNEL_ROW_CLICK: function() {
                    return s
                },
                SERVER_SHOP_URL: function() {
                    return a
                },
                GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE: function() {
                    return d
                }
            }), (l = i || (i = {})).GET_STARTED_CLICK = "get_started_click", l.DISMISS_FULL_PREVIEW = "dismiss_full_preview", l.DISMISS_TAB_PREVIEW = "dismiss_tab_preview", l.DISMISS_CHANNEL_ROW = "dismiss_channel_row", (u = r || (r = {})).CHANNEL_ROW_CONTEXT_MENU = "channel_row_context_menu", u.SHOP_HEADER_BUTTON = "shop_header_button";
            let o = "hasClickedGuildShopProductPreviewTab",
                s = "hasClickedGuildShopChannelRow",
                a = "https://discord.com/servershop",
                d = "1 GB"
        },
        955735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                s = n("511606");

            function a(e) {
                let {
                    alt: t,
                    ...n
                } = e, [l, u] = r.useState(!0);
                return (0, i.jsxs)(i.Fragment, {
                    children: [l && (0, i.jsx)(o.Spinner, {
                        type: o.Spinner.Type.LOW_MOTION,
                        className: s.loader
                    }), (0, i.jsx)("img", {
                        ...n,
                        alt: t,
                        onLoad: () => u(!1)
                    })]
                })
            }

            function d(e) {
                let {
                    src: t,
                    backgroundSrc: n,
                    alt: r,
                    aspectRatio: l,
                    className: o,
                    imageChildClassName: d,
                    ...c
                } = e;
                return (0, i.jsxs)("div", {
                    className: u(s.container, o),
                    children: [(0, i.jsx)("img", {
                        src: n,
                        alt: r,
                        className: s.backgroundImage
                    }), (0, i.jsx)("div", {
                        className: s.backgroundImageFilter
                    }), (0, i.jsx)("div", {
                        style: {
                            aspectRatio: l
                        },
                        className: s.imageContainer,
                        children: (0, i.jsx)(a, {
                            src: t,
                            alt: r,
                            className: u(s.image, d),
                            ...c
                        })
                    })]
                })
            }
        },
        398654: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildIncidentsState: function() {
                    return h
                },
                shouldShowRaidNotificationNagbar: function() {
                    return g
                }
            }), n("222007");
            var i = n("316693"),
                r = n("65597"),
                l = n("374363"),
                u = n("305961"),
                o = n("957255"),
                s = n("162771"),
                a = n("697218"),
                d = n("991170"),
                c = n("610174"),
                f = n("311161"),
                S = n("54346"),
                E = n("421127");
            n("49111");

            function h(e) {
                let {
                    showAlertMode: t
                } = (0, c.useGuildAlertModeEnabled)(null != e ? e : "0"), n = (0, r.default)([u.default, o.default], () => {
                    let t = u.default.getGuild(e);
                    if (null == t) return !1;
                    let n = o.default.getGuildPermissions(t);
                    return null != n && i.default.hasAny(n, E.IncidentAlertModeratorPermissions)
                }), l = (0, r.default)([S.default], () => null != e ? S.default.getGuildIncident(e) : null), s = null != l && (0, f.isUnderLockdown)(l);
                return {
                    shouldShowIncidentActions: n && t,
                    incidentData: l,
                    isUnderLockdown: s
                }
            }

            function g() {
                var e;
                let t = s.default.getGuildId(),
                    n = function(e) {
                        let t = a.default.getCurrentUser(),
                            n = S.default.getIncidentsByGuild(),
                            r = Object.keys(n).map(e => u.default.getGuild(e));
                        for (let l of r) {
                            if (null == l) continue;
                            let r = n[l.id];
                            if (null == r || !(0, f.hasDetectedActivity)(r) && !(0, f.isUnderLockdown)(r) || (0, f.isUnderLockdown)(r) && l.id !== e) continue;
                            let u = i.default.hasAny(d.default.computePermissions({
                                user: t,
                                context: l,
                                checkElevated: !1
                            }), E.IncidentAlertModeratorPermissions);
                            if (u) return l.id
                        }
                        return null
                    }(t),
                    {
                        showAlertMode: r
                    } = (0, c.getGuildAlertModeEnabled)(null != n ? n : "0"),
                    o = null !== (e = l.default.getGuildsProto()) && void 0 !== e ? e : {},
                    h = null != n ? o[n] : null,
                    g = null != h && h.disableRaidAlertNag;
                return {
                    show: null != n && r && !g,
                    guildId: n
                }
            }
        },
        619259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("808653");
            var i = n("249654"),
                r = n("446674"),
                l = n("913144"),
                u = n("979911"),
                o = n("692038"),
                s = n("42203"),
                a = n("377253"),
                d = n("600798"),
                c = n("201131"),
                f = n("49111");
            let S = {},
                E = 0,
                h = {},
                g = {},
                p = (e, t) => {
                    let n = (0, u.getFailedMessageId)(e),
                        i = {
                            id: n,
                            isBlockedEdit: (0, u.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, d.getAutomodErrorMessage)(e, t)
                        };
                    S[n] = i, E++
                },
                _ = e => S[e],
                C = e => {
                    let t = S[e];
                    null != t && delete S[e], E++
                };

            function m(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return p(t, n), !0
            }

            function I(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, l = null === (t = s.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == l) return !1;
                let u = g[l],
                    o = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let l = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return l ? null == e || -1 === i.default.compare(e, t.id) ? t.id : void 0 : e
                    }, u);
                return null != o && g[l] !== o && (g[l] = o, !0)
            }
            class T extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (S = e.automodFailedMessages, h = e.mentionRaidDetectionByGuild)
                }
                getState() {
                    return {
                        automodFailedMessages: S,
                        mentionRaidDetectionByGuild: h,
                        lastIncidentAlertMessage: g
                    }
                }
                getMessage(e) {
                    var t;
                    return null == e ? null : null !== (t = _(e)) && void 0 !== t ? t : null
                }
                getMessagesVersion() {
                    return E
                }
                getMentionRaidDetected(e) {
                    var t;
                    return null !== (t = h[e]) && void 0 !== t ? t : null
                }
                getLastIncidentAlertMessage(e) {
                    var t;
                    return null !== (t = g[e]) && void 0 !== t ? t : null
                }
            }
            T.displayName = "GuildAutomodMessageStore", T.persistKey = "GuildAutomodMessages";
            var v = new T(l.default, {
                CONNECTION_OPEN: function(e) {
                    return S = {}, E++, !0
                },
                LOAD_MESSAGES_SUCCESS: I,
                LOCAL_MESSAGES_LOADED: I,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let i = (0, o.createMessageRecord)(n);
                    return !!(0, c.isAutomodMessageRecord)(i) && !!(0, c.isAutomodNotification)(i) && (g[t] = i.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: m,
                MESSAGE_EDIT_FAILED_AUTOMOD: m,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return C(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    C(n)
                },
                AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
                    let {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: i
                    } = e;
                    return h[t] = {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: i
                    }, !0
                },
                AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return delete h[t], !0
                }
            })
        },
        863921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("931138"),
                o = n("206453"),
                s = n("49111"),
                a = n("323755");
            let d = {
                    [s.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
                    [s.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
                    [s.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
                    [s.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree
                },
                c = {
                    [s.BoostedGuildTiers.NONE]: a.iconTierNone,
                    [s.BoostedGuildTiers.TIER_1]: a.iconTierOne,
                    [s.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
                    [s.BoostedGuildTiers.TIER_3]: a.iconTierThree
                };

            function f(e) {
                let {
                    premiumTier: t,
                    iconBackgroundClassName: n,
                    iconClassName: r,
                    size: s
                } = e;
                return (0, i.jsx)(u.default, {
                    className: l(n, d[t]),
                    size: s,
                    children: (0, i.jsx)(o.default, {
                        tier: t,
                        className: l(r, a.boostedGuildIconGem, c[t])
                    })
                })
            }
        },
        645266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeMemberSafetyStore: function() {
                    return d
                },
                refreshMemberSafetyTimestamp: function() {
                    return c
                },
                updateMemberSafetyTablePagination: function() {
                    return f
                },
                updateSearchState: function() {
                    return S
                },
                getMemberSupplemental: function() {
                    return E
                },
                goToMemberSafetyDashboard: function() {
                    return h
                }
            });
            var i = n("592407"),
                r = n("393414"),
                l = n("305961"),
                u = n("466818"),
                o = n("447038"),
                s = n("49111"),
                a = n("724210");
            async function d(e) {
                return await (0, o.initializeMemberSafetyStoreV2)(e)
            }

            function c(e) {
                return (0, o.refreshMemberSafetyTimestampV2)(e)
            }

            function f(e, t) {
                return (0, o.updateMemberSafetyTablePaginationV2)(e, t)
            }

            function S(e, t) {
                return (0, o.updateSearchStateV2)(e, t)
            }

            function E(e, t) {
                return (0, o.getMemberSupplementalV2)(e, t)
            }

            function h(e) {
                let t = (0, u.canAccessMemberSafetyPage)(e),
                    n = l.default.getGuild(e);
                return !!t && null != n && (n.hasFeature(s.GuildFeatures.COMMUNITY) || n.hasFeature(s.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, r.transitionTo)(s.Routes.CHANNEL(e, a.StaticChannelRoute.MEMBER_SAFETY)), !0) : (i.default.open(n.id, s.GuildSettingsSections.MEMBERS), !0))
            }
        },
        447038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeMemberSafetyStoreV2: function() {
                    return l
                },
                refreshMemberSafetyTimestampV2: function() {
                    return u
                },
                updateMemberSafetyTablePaginationV2: function() {
                    return o
                },
                updateSearchStateV2: function() {
                    return s
                },
                getMemberSupplementalV2: function() {
                    return a
                }
            });
            var i = n("913144"),
                r = n("835257");
            async function l(e) {
                await i.default.dispatch({
                    type: "INITIALIZE_MEMBER_SAFETY_STORE",
                    guildId: e
                })
            }

            function u(e) {
                i.default.dispatch({
                    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
                    guildId: e
                })
            }

            function o(e, t) {
                let {
                    continuationToken: n,
                    ...r
                } = t;
                i.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
                    guildId: e,
                    pagination: r
                })
            }
            async function s(e, t) {
                await i.default.dispatch({
                    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
                    guildId: e,
                    searchState: t
                })
            }
            async function a(e, t) {
                let n = await (0, r.fetchMemberSupplemental)(e, t);
                return 0 === n.length ? [] : (await i.default.dispatch({
                    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
                    guildId: e,
                    memberSupplementals: n
                }), n)
            }
        },
        757515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ROLE_FIELD_NAME: function() {
                    return u
                },
                describeUploadProgressError: function() {
                    return o
                },
                describeProductChangeValidation: function() {
                    return s
                },
                computeProductChanges: function() {
                    return a
                },
                getGuildProductListingUrl: function() {
                    return d
                }
            });
            var i = n("448993");
            n("957255");
            var r = n("49111"),
                l = n("782340");
            let u = "_role";

            function o(e) {
                if (!(e >= 0)) switch (-e) {
                    case r.AbortCodes.ENTITY_TOO_LARGE:
                        return l.default.Messages.UPLOAD_ERROR_TOO_LARGE;
                    case r.AbortCodes.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                        return l.default.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
                    case 1:
                        return l.default.Messages.ERROR_GENERIC_TITLE;
                    default:
                        return l.default.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
                            code: -e
                        })
                }
            }

            function s(e) {
                let {
                    newRoleParams: t
                } = e;
                if (null != t && "" === t.name.trim()) {
                    var n, r;
                    return n = u, r = l.default.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME, new i.APIError({
                        status: 400,
                        body: {
                            message: "Invalid form body",
                            errors: {
                                [n]: {
                                    _errors: [{
                                        code: "",
                                        message: r
                                    }]
                                }
                            }
                        }
                    })
                }
            }

            function a(e) {
                var t;
                let {
                    guildProductListing: n,
                    name: i,
                    priceTier: r,
                    description: l,
                    image: u,
                    imageName: o,
                    isImageChanged: s,
                    newRoleParams: a,
                    hasUnsavedAttachmentChanges: d
                } = e, c = {};
                (null == n ? void 0 : n.name) !== i && "" !== i.trim() && (c.name = i), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : "") !== l && (c.description = l), (null == n ? void 0 : n.price_tier) !== r && null != r && (c.priceTier = r), null != a && "" !== a.name.trim() ? c.createNewRole = !0 : null === a && (c.unlinkRole = !0), u.startsWith("data:") && (s || null == n && (Object.keys(c).length > 0 || d)) && (c.image = u, c.imageName = o);
                let f = Object.keys(c).length > 0 || d;
                return {
                    changes: c,
                    hasUnsavedChanges: f,
                    canSaveForDraft: f,
                    canSaveForPublished: f,
                    canPublishOrUnpublish: !(null == n || f)
                }
            }

            function d(e, t) {
                return "".concat(location.protocol, "//").concat(location.host).concat(r.Routes.GUILD_PRODUCT(e, t))
            }
        },
        727411: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openModal: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("307785");

            function u(e, t) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await n.el("48175").then(n.bind(n, "48175"));
                    return n => (0, i.jsx)(r, {
                        guildId: e,
                        productId: t,
                        ...n
                    })
                }, {
                    modalKey: l.GUILD_PRODUCT_EDIT_MODAL_KEY
                })
            }
        },
        739726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildProductListingPopout: function() {
                    return m
                },
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("77078"),
                o = n("272030"),
                s = n("801765"),
                a = n("191814"),
                d = n("195812"),
                c = n("83900"),
                f = n("663745"),
                S = n("153160"),
                E = n("928576"),
                h = n("516770"),
                g = n("843455"),
                p = n("782340"),
                _ = n("49738");

            function C(e) {
                let {
                    showEditProduct: t,
                    showUnpublishProduct: n,
                    showCopyLink: r,
                    showTestDownload: l,
                    showDeleteProduct: o,
                    showReportProduct: s,
                    onEditProduct: a,
                    onUnpublishProduct: f,
                    onDeleteProduct: S,
                    onCopyLink: E,
                    onTestDownload: h,
                    onReportProduct: g,
                    closePopout: C,
                    onSelect: m
                } = e;
                return (0, i.jsx)("div", {
                    className: _.menuContainer,
                    children: (0, i.jsxs)(u.Menu, {
                        navId: "guild-product-context",
                        onClose: C,
                        "aria-label": p.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
                        onSelect: m,
                        children: [(0, i.jsxs)(u.MenuGroup, {
                            children: [t && (0, i.jsx)(u.MenuItem, {
                                id: "guild-product-edit",
                                label: p.default.Messages.GUILD_PRODUCT_EDIT,
                                action: a
                            }), r && (0, i.jsx)(u.MenuItem, {
                                id: "guild-product-copy-link",
                                label: p.default.Messages.GUILD_PRODUCT_COPY_LINK,
                                icon: c.default,
                                action: E
                            }), l && (0, i.jsx)(u.MenuItem, {
                                id: "guild-product-test-download",
                                label: p.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                                icon: d.default,
                                action: h
                            })]
                        }), (0, i.jsxs)(u.MenuGroup, {
                            children: [n && (0, i.jsx)(u.MenuItem, {
                                id: "guild-product-unpublish",
                                label: p.default.Messages.GUILD_PRODUCT_UNPUBLISH,
                                action: f
                            }), o && (0, i.jsx)(u.MenuItem, {
                                id: "guild-product-delete",
                                label: p.default.Messages.GUILD_PRODUCT_DELETE,
                                color: "danger",
                                action: S
                            })]
                        }), (0, i.jsx)(u.MenuGroup, {
                            children: s && (0, i.jsx)(u.MenuItem, {
                                id: "guild-product-report",
                                label: p.default.Messages.GUILD_PRODUCT_REPORT,
                                color: "danger",
                                action: g
                            })
                        })]
                    })
                })
            }

            function m(e) {
                let {
                    product: t,
                    guildId: n,
                    showEditProduct: r,
                    showUnpublishProduct: l,
                    showTestDownload: o,
                    showCopyLink: s,
                    showDeleteProduct: a,
                    showReportProduct: d,
                    onEditProduct: c,
                    onUnpublishProduct: S,
                    onDeleteProduct: E,
                    onCopyProductLink: h,
                    onTestDownload: g,
                    onReportProduct: m
                } = e;
                return (0, i.jsx)("div", {
                    onClick: e => {
                        e.stopPropagation()
                    },
                    children: (0, i.jsx)(u.Popout, {
                        position: "right",
                        align: "top",
                        spacing: -8,
                        animation: u.Popout.Animation.FADE,
                        renderPopout: e => (0, i.jsx)(C, {
                            ...e,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: r,
                            showUnpublishProduct: l,
                            showCopyLink: s,
                            showTestDownload: o,
                            showReportProduct: d,
                            showDeleteProduct: a,
                            onEditProduct: c,
                            onUnpublishProduct: S,
                            onDeleteProduct: E,
                            onCopyLink: h,
                            onTestDownload: g,
                            onReportProduct: m
                        }),
                        children: (e, n) => {
                            let {
                                isShown: r
                            } = n;
                            return (0, i.jsx)(u.Clickable, {
                                ...e,
                                "aria-label": p.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
                                    productName: t.name
                                }),
                                "aria-haspopup": "listbox",
                                "aria-expanded": r,
                                className: _.productActionMenuButton,
                                children: (0, i.jsx)(f.default, {
                                    className: _.productActionMenuIcon,
                                    "aria-hidden": !0
                                })
                            })
                        }
                    })
                })
            }

            function I(e) {
                let {
                    product: t,
                    guildId: n,
                    onEditProduct: r,
                    onUnpublishProduct: d,
                    onDeleteProduct: c,
                    onCopyProductLink: f,
                    onTestDownload: I,
                    disabled: T = !1
                } = e, v = (0, s.useListingThumbnailUrl)(t, 600), N = null !== t.price_tier ? (0, S.formatPrice)(t.price_tier, g.CurrencyCodes.USD) : void 0, R = (0, E.useProductType)(t);
                return (0, i.jsxs)(u.ClickableContainer, {
                    tag: "article",
                    className: l(_.productCardClickable, _.productCard, {
                        [_.disabled]: T
                    }),
                    onClick: T ? void 0 : r,
                    onContextMenu: function(e) {
                        (0, o.openContextMenuLazy)(e, () => Promise.resolve(e => (0, i.jsx)(C, {
                            ...e,
                            closePopout: o.closeContextMenu,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: d,
                            onDeleteProduct: c,
                            onCopyLink: f,
                            onTestDownload: I,
                            onReportProduct: () => {}
                        })))
                    },
                    "aria-label": p.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
                        productName: t.name
                    }),
                    children: [(0, i.jsx)("img", {
                        alt: "",
                        src: v,
                        className: _.productThumbnail
                    }), (0, i.jsxs)("div", {
                        className: _.productInfo,
                        children: [(0, i.jsxs)("div", {
                            className: _.productInfoContent,
                            children: [(0, i.jsx)(u.Heading, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: _.productName,
                                children: t.name
                            }), (0, i.jsx)(a.default, {
                                size: 8
                            }), (0, i.jsxs)("div", {
                                className: _.productDetails,
                                children: [(0, i.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    children: N
                                }), null != R ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: _.dotSeparator
                                    }), (0, i.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: R
                                    })]
                                }) : null]
                            }), (0, i.jsx)(a.default, {
                                size: 16
                            }), t.published ? (0, i.jsx)(h.PublishedBadge, {}) : (0, i.jsx)(h.DraftBadge, {})]
                        }), !T && (0, i.jsx)(m, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: d,
                            onDeleteProduct: c,
                            onCopyProductLink: f,
                            onTestDownload: I,
                            onReportProduct: () => {}
                        })]
                    })]
                })
            }
        },
        516770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PublishedBadge: function() {
                    return S
                },
                DraftBadge: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("449918"),
                u = n("20606"),
                o = n("832132"),
                s = n("952479"),
                a = n("49111"),
                d = n("782340"),
                c = n("495323");

            function f(e) {
                let {
                    label: t,
                    backgroundColor: n = u.default.BUTTON_SECONDARY_BACKGROUND,
                    icon: l,
                    iconColor: o
                } = e;
                return (0, i.jsxs)("div", {
                    className: c.badge,
                    style: {
                        backgroundColor: n
                    },
                    children: [(0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: c.badgeText,
                        children: t
                    }), (0, i.jsx)(l, {
                        className: c.badgeIcon,
                        color: null != o ? o : "currentColor",
                        "aria-hidden": !0
                    })]
                })
            }

            function S() {
                return (0, i.jsx)(f, {
                    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
                    backgroundColor: "#207B8D",
                    icon: s.default
                })
            }

            function E() {
                return (0, i.jsx)(f, {
                    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
                    icon: o.default,
                    iconColor: (0, l.getColor)(a.Color.PRIMARY_330)
                })
            }
        },
        257869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGroupListingsFetchContext: function() {
                    return d
                },
                GroupListingsFetchContextProvider: function() {
                    return c
                }
            }), n("70102");
            var i = n("37983"),
                r = n("884691"),
                l = n("65597"),
                u = n("619443"),
                o = n("371358"),
                s = n("648825");
            let a = r.createContext(void 0);

            function d(e) {
                let t = r.useContext(a);
                if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
                let {
                    listingsLoaded: n,
                    fetchGroupListingsForGuild: i
                } = t;
                return i(), n
            }

            function c(e) {
                let {
                    guildId: t,
                    children: n,
                    refetchOnMount: d,
                    includeSoftDeleted: c,
                    countryCode: f,
                    dontFetchWhileTrue: S
                } = e, E = (0, l.default)([u.default], () => u.default.isConnected()), h = (0, l.default)([s.default], () => null != t ? s.default.getSubscriptionGroupListingsForGuildFetchState(t) : s.FetchState.FETCHED), g = r.useRef(d), p = r.useCallback(() => {
                    if (null == t || !E || !0 === S) return;
                    let e = s.default.getSubscriptionGroupListingsForGuildFetchState(t);
                    (g.current || e === s.FetchState.NOT_FETCHED) && (g.current = !1, o.fetchAllSubscriptionListingsDataForGuild(t, {
                        includeSoftDeleted: c,
                        countryCode: f
                    }))
                }, [E, t, c, f, S]), _ = r.useMemo(() => h === s.FetchState.FETCHED && !0 !== g.current, [h, g]);
                return (0, i.jsx)(a.Provider, {
                    value: {
                        listingsLoaded: _,
                        fetchGroupListingsForGuild: p
                    },
                    children: n
                })
            }
        },
        531034: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getJoinButtonLabels: function() {
                    return l
                },
                getRenewButtonLabels: function() {
                    return u
                },
                STICKERS: function() {
                    return o
                }
            });
            var i = n("161585"),
                r = n("782340");
            let l = () => [r.default.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1, r.default.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2],
                u = () => [r.default.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1, r.default.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2],
                o = [{
                    id: "781323471249604648",
                    format_type: i.StickerFormat.APNG,
                    description: "Cheerful Choco jumps out of gift box",
                    name: "Surprise"
                }, {
                    id: "781324642736144424",
                    format_type: i.StickerFormat.APNG,
                    description: "Cheerful Choco preens against window",
                    name: "Affection"
                }, {
                    id: "781323769960202280",
                    format_type: i.StickerFormat.APNG,
                    description: "Cheerful Choco sparkles",
                    name: "OMG"
                }, {
                    id: "781324722394103808",
                    format_type: i.StickerFormat.APNG,
                    description: "Cheerful Choco cheers",
                    name: "Cheer"
                }, {
                    id: "813951723822645278",
                    format_type: i.StickerFormat.APNG,
                    description: "Cheerful Choco gives thumbs up",
                    name: "Nice"
                }]
        },
        843257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
                    return a
                },
                getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
                    return d
                },
                getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
                    return S
                },
                isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
                    return E
                },
                trackRoleSubscriptionPurchaseMessageTierClick: function() {
                    return h
                },
                getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
                    return g
                }
            }), n("249654");
            var i = n("716241"),
                r = n("250666"),
                l = n("305961"),
                u = n("697218");
            n("531034");
            var o = n("49111"),
                s = n("782340");

            function a(e) {
                let {
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: l
                } = e, {
                    content: u,
                    formatParams: o
                } = f({
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: l
                });
                return u.format(o)
            }

            function d(e) {
                let {
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: l
                } = e, {
                    content: u,
                    formatParams: o
                } = f({
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: l
                });
                return u.astFormat(o)
            }

            function c(e, t) {
                var n, i;
                let r = l.default.getGuild(e),
                    u = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0,
                    o = null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i;
                return {
                    guild: r,
                    totalMonthsSubscribed: u,
                    showWithDuration: u > 0,
                    isRenewal: o
                }
            }

            function f(e) {
                let t, {
                        username: n,
                        usernameOnClickHandler: i,
                        roleSubscriptionOnClickHandler: r,
                        guildId: l,
                        roleSubscriptionData: u
                    } = e,
                    {
                        guild: o,
                        totalMonthsSubscribed: a,
                        showWithDuration: d,
                        isRenewal: f
                    } = c(l, u);
                t = d ? f ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : f ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN;
                let S = {
                    username: n,
                    usernameHook: i,
                    guildName: null == o ? void 0 : o.name,
                    handleGuildNameClick: r,
                    tierName: null == u ? void 0 : u.tier_name,
                    months: a
                };
                return {
                    content: t,
                    formatParams: S
                }
            }

            function S(e) {
                let t, {
                        username: n,
                        usernameOnClickHandler: i = o.NOOP,
                        roleSubscriptionOnClickHandler: r = o.NOOP,
                        guildId: l,
                        roleSubscriptionData: u
                    } = e,
                    {
                        guild: a,
                        totalMonthsSubscribed: d,
                        showWithDuration: f,
                        isRenewal: S
                    } = c(l, u),
                    E = {
                        guildName: null == a ? void 0 : a.name,
                        tierName: null == u ? void 0 : u.tier_name,
                        username: n,
                        usernameOnClick: i,
                        roleSubscriptionOnClick: r
                    };
                return t = f ? S ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
                    ...E,
                    months: d
                }) : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
                    ...E,
                    months: d
                }) : S ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(E) : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(E)
            }

            function E(e) {
                return (0, r.isCreatorMonetizationEnabledGuild)(e)
            }

            function h(e, t, n, r) {
                var l;
                i.default.trackWithMetadata(o.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
                    guild_id: e,
                    user_id: null === (l = u.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
                    channel_id: t,
                    message_id: n,
                    role_subscription_listing_id: r
                })
            }

            function g(e, t) {
                var n;
                return {
                    guild_id: e.guild_id,
                    sender: null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                    target_user: t.author.id,
                    channel_id: e.id,
                    message_id: t.id
                }
            }
        },
        837008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscriptionListingsForGroup: function() {
                    return S
                },
                useSubscriptionListing: function() {
                    return E
                },
                useGroupListingsForGuild: function() {
                    return h
                },
                useSubscriptionListingsForGuild: function() {
                    return g
                },
                useFetchListingsForSubscriptions: function() {
                    return p
                },
                useDeleteSubscriptionListing: function() {
                    return _
                },
                useArchiveSubscriptionListing: function() {
                    return C
                },
                usePublishSubscriptionListing: function() {
                    return m
                },
                useSubscriptionsSettings: function() {
                    return I
                },
                useUpdateSubscriptionsSettings: function() {
                    return T
                },
                useFetchSubscriptionsSettings: function() {
                    return v
                },
                useSubscriptionTrial: function() {
                    return N
                }
            }), n("222007"), n("424973");
            var i = n("884691"),
                r = n("446674"),
                l = n("162426"),
                u = n("619443");
            n("449008");
            var o = n("257869"),
                s = n("371358"),
                a = n("648825"),
                d = n("136185");
            let c = [],
                f = function(e) {
                    let {
                        refetchOnMount: t = !1,
                        includeSoftDeleted: n = !0,
                        countryCode: l,
                        dontFetchWhileTrue: o
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, r.useStateFromStores)([u.default], () => u.default.isConnected()), c = (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionGroupListingsForGuildFetchState(e) : a.FetchState.FETCHED), f = i.useRef(t);
                    return i.useEffect(() => {
                        if (null == e || !d || !0 === o) return;
                        let i = a.default.getSubscriptionGroupListingsForGuildFetchState(e);
                        (t || i === a.FetchState.NOT_FETCHED) && (f.current = !1, s.fetchAllSubscriptionListingsDataForGuild(e, {
                            includeSoftDeleted: n,
                            countryCode: l
                        }))
                    }, [d, e, n, t, l, o]), {
                        listingsLoaded: c === a.FetchState.FETCHED && !0 !== f.current
                    }
                },
                S = function(e) {
                    let {
                        includeSoftDeleted: t = !1,
                        includeUnpublished: n = !0
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, r.useStateFromStoresArray)([a.default], () => {
                        if (null == e) return [];
                        let i = a.default.getSubscriptionGroupListing(e);
                        if (null == i) return [];
                        let r = [];
                        for (let e of i.subscription_listings_ids) {
                            let i = a.default.getSubscriptionListing(e);
                            if (null != i && (!i.soft_deleted || !!t))(i.published || n) && r.push(i)
                        }
                        return r
                    }, [e, t, n])
                },
                E = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionListing(e) : null),
                h = e => {
                    let t = (0, o.useGroupListingsFetchContext)("useGroupListingsForGuild");
                    return (0, r.useStateFromStores)([a.default], () => null != e && t ? a.default.getSubscriptionGroupListingsForGuild(e) : c)
                },
                g = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1,
                        sortDeletedListingsLast: !1
                    };
                    return f(e), (0, r.useStateFromStoresArray)([a.default], () => {
                        let n = null != e ? a.default.getSubscriptionGroupListingsForGuild(e) : c,
                            i = [];
                        for (let e of n)
                            for (let n of e.subscription_listings_ids) {
                                let e = a.default.getSubscriptionListing(n);
                                null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e)
                            }
                        return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter(e => !e.soft_deleted), ...i.filter(e => e.soft_deleted)] : i
                    })
                },
                p = e => {
                    let [t, n] = i.useState(!1), l = i.useMemo(() => e.map(d.getRoleSubscriptionPlanId), [e]), u = (0, r.useStateFromStoresArray)([a.default], () => l.filter(e => !a.default.getDidFetchListingForSubscriptionPlanId(e)), [l]);
                    return i.useEffect(() => {
                        !t && u.length > 0 && (n(!0), Promise.all(u.map(e => s.fetchSubscriptionListingForPlan(e))).catch(() => {}).then(() => {
                            n(!1)
                        }))
                    }, [t, u]), {
                        loading: t
                    }
                },
                _ = () => {
                    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = async (e, n, i) => {
                        try {
                            return t(!0), r(null), await s.deleteSubscriptionListing(e, n, i), !0
                        } catch (e) {
                            r(e)
                        } finally {
                            t(!1)
                        }
                    };
                    return {
                        error: n,
                        submitting: e,
                        deleteSubscriptionListing: l
                    }
                },
                C = () => {
                    let [e, t] = (0, l.default)(s.archiveSubscriptionListing), {
                        loading: n,
                        error: i
                    } = t;
                    return {
                        error: i,
                        submitting: n,
                        archiveSubscriptionListing: e
                    }
                },
                m = () => {
                    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = async e => {
                        let {
                            guildId: n,
                            groupListingId: i,
                            listingId: l
                        } = e;
                        try {
                            return t(!0), r(null), await s.updateSubscriptionListing({
                                guildId: n,
                                groupListingId: i,
                                listingId: l,
                                data: {
                                    published: !0
                                }
                            }), !0
                        } catch (e) {
                            r(e)
                        } finally {
                            t(!1)
                        }
                    };
                    return {
                        error: n,
                        submitting: e,
                        publishSubscriptionListing: l,
                        clearError: () => r(null)
                    }
                },
                I = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionSettings(e) : void 0),
                T = () => {
                    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = i.useCallback(async (e, n) => {
                        t(!0), r(null);
                        try {
                            await s.updateSubscriptionsSettings(e, n)
                        } catch (e) {
                            r(e)
                        } finally {
                            t(!1)
                        }
                    }, []);
                    return {
                        loading: e,
                        updateSubscriptionsSettings: l,
                        error: n
                    }
                },
                v = () => {
                    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = i.useCallback(async e => {
                        t(!0), r(null);
                        try {
                            await s.fetchSubscriptionsSettings(e)
                        } catch (e) {
                            r(e)
                        } finally {
                            t(!1)
                        }
                    }, []);
                    return {
                        loading: e,
                        fetchSubscriptionsSettings: l,
                        error: n
                    }
                },
                N = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionTrial(e) : null)
        },
        971150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AllChannelAccessOptions: function() {
                    return r
                },
                useEditStateStore: function() {
                    return u
                }
            });
            var i, r, l = n("308503");
            (i = r || (r = {}))[i.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", i[i.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS";
            let u = (0, l.default)(e => ({
                listings: {},
                setListing: (t, n) => e(e => ({
                    listings: {
                        ...e.listings,
                        [t]: n(e.listings[t])
                    }
                })),
                editStateIdsForGroup: {},
                setEditStateIdsForGroup: (t, n) => e(e => ({
                    editStateIdsForGroup: {
                        ...e.editStateIdsForGroup,
                        [t]: n(e.editStateIdsForGroup[t])
                    }
                }))
            }))
        },
        65722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildRoleSubscriptionSettingsVisibility: function() {
                    return r
                },
                canSeeGuildRoleSubscriptionSettings: function() {
                    return S
                },
                useGuildRoleSubscriptionSettingsVisibility: function() {
                    return E
                },
                useCanManageGuildRoleSubscriptions: function() {
                    return h
                },
                canManageGuildRoleSubscriptions: function() {
                    return g
                }
            });
            var i, r, l = n("446674"),
                u = n("7331"),
                o = n("465869"),
                s = n("957255"),
                a = n("697218"),
                d = n("808388"),
                c = n("49111");
            (i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

            function f(e) {
                if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
                if (function(e) {
                        let {
                            guild: t,
                            isOwner: n,
                            canManageGuildRoleSubscriptions: i,
                            isGuildEligibleForRoleSubscriptions: r,
                            isExpeditedMonetizationOnboardingGuild: l,
                            isUserInCreatorMonetizationEligibleCountry: u,
                            shouldRestrictUpdatingRoleSubscriptionSettings: o
                        } = e;
                        return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!i && (!o || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!r || !!l) && n && u)
                    }(e)) return 3;
                let {
                    guild: t,
                    isOwner: n,
                    isUserInCreatorMonetizationEligibleCountry: i,
                    isMonetizationWaitlistEnabledForGuild: r,
                    isGuildEligibleForRoleSubscriptions: l,
                    isExpeditedMonetizationOnboardingGuild: u
                } = e;
                return n && !i && r ? 1 : n && r && (l || u) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? 2 : 0
            }

            function S(e) {
                return 0 !== f(e)
            }

            function E(e) {
                let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
                    n = (0, u.useIsExpeditedOnboardingGuild)(e),
                    i = (0, u.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
                    r = h(e),
                    s = (0, l.useStateFromStores)([a.default], () => {
                        let t = a.default.getCurrentUser();
                        return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
                    }),
                    c = (0, u.useIsUserInCreatorMonetizationEligibleCountry)(),
                    {
                        shouldRestrictUpdatingCreatorMonetizationSettings: S
                    } = (0, o.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
                return null == e ? 0 : f({
                    guild: e,
                    isOwner: s,
                    canManageGuildRoleSubscriptions: r,
                    isGuildEligibleForRoleSubscriptions: t,
                    isMonetizationWaitlistEnabledForGuild: i,
                    isExpeditedMonetizationOnboardingGuild: n,
                    isUserInCreatorMonetizationEligibleCountry: c,
                    shouldRestrictUpdatingRoleSubscriptionSettings: S
                })
            }

            function h(e) {
                let t = (0, l.useStateFromStores)([s.default], () => g(e), [e]);
                return t
            }

            function g(e) {
                return null != e && s.default.can(c.Permissions.ADMINISTRATOR, e)
            }
        },
        136185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleSubscriptionPlanId: function() {
                    return l
                },
                getRoleSubscriptionMutationPlanId: function() {
                    return u
                }
            });
            var i = n("627445"),
                r = n.n(i);

            function l(e) {
                let t = e.items;
                return r(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
            }

            function u(e) {
                var t;
                let n = null == e ? void 0 : null === (t = e.renewalMutations) || void 0 === t ? void 0 : t.items;
                if (null != n) return r(n.length <= 1, "more than 1 renewal mutation for role subscription"), null == n ? void 0 : n[0].planId
            }
        },
        736880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("233069"),
                u = n("42203");
            let o = {},
                s = {};
            class a extends i.default.Store {
                getTemplates(e) {
                    return o[e]
                }
                getTemplateWithCategory(e, t) {
                    var n;
                    return null === (n = o[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
                }
                getChannel(e) {
                    return s[e]
                }
            }
            a.displayName = "GuildRoleSubscriptionTierTemplatesStore";
            var d = new a(r.default, {
                GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
                    let {
                        selectedTemplate: t,
                        guildId: n
                    } = e, i = Object.values(u.default.getMutableGuildChannelsForGuild(n));
                    t.listings.forEach(e => {
                        e.channels.forEach(e => {
                            let t = i.find(t => t.name === e.name);
                            if (void 0 !== t) e.id = t.id;
                            else if (!(e.id in s)) {
                                let t = (0, l.createChannelRecord)(e);
                                s[e.id] = t
                            }
                        })
                    })
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
                    let {
                        templates: t,
                        guildId: n
                    } = e;
                    o[n] = t
                }
            })
        },
        432153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelWithTemplateFallback: function() {
                    return p
                },
                useSuggestedUnusedPrices: function() {
                    return _
                },
                announceCreateTemplateChannels: function() {
                    return m
                },
                announceDeleteTemplateChannels: function() {
                    return I
                },
                createChannelsFromTemplateTierBenefits: function() {
                    return T
                },
                getTemplateTierCreationAnalyticsContext: function() {
                    return v
                },
                isEligibleForNewBadge: function() {
                    return N
                }
            }), n("424973"), n("222007"), n("462568");
            var i = n("642852"),
                r = n.n(i),
                l = n("65597"),
                u = n("913144"),
                o = n("437140"),
                s = n("42203"),
                a = n("808388"),
                d = n("648825"),
                c = n("971150"),
                f = n("65722"),
                S = n("736880"),
                E = n("49111"),
                h = n("724210");
            r.shim();
            let g = {};

            function p(e) {
                let t = (0, l.default)([s.default], () => s.default.getChannel(e)),
                    n = (0, l.default)([S.default], () => S.default.getChannel(e));
                return null != t ? t : n
            }

            function _(e, t, n) {
                let i = (0, l.default)([d.default], () => d.default.getSubscriptionListingsForGuild(e)),
                    r = (0, c.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    u = (0, c.useEditStateStore)(e => e.listings);
                if (void 0 === n || void 0 === t) return null;
                let o = i.filter(e => !e.soft_deleted && !e.archived),
                    s = o.map(e => e.subscription_plans[0].price),
                    a = [];
                void 0 !== r && r.forEach(e => {
                    let t = u[e],
                        n = null == t ? void 0 : t.priceTier;
                    null != n && a.push(n)
                });
                let f = new Set(a.concat(s));
                if (!f.has(n)) return null;
                let S = t.indexOf(n);
                if (-1 === S) return null;
                let E = [];
                for (let e = S + 1; e < t.length && (!f.has(t[e]) && E.push(t[e]), 3 !== E.length); e++);
                return E
            }

            function C(e) {
                let t = c.useEditStateStore.getState().editStateIdsForGroup[e],
                    n = c.useEditStateStore.getState().listings,
                    i = new Set;
                null != t && t.forEach(e => {
                    var t;
                    let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
                    null == r || r.forEach(e => {
                        null != S.default.getChannel(e.ref_id) && i.add(e.ref_id)
                    })
                });
                let r = [];
                for (let t of i) {
                    let n = S.default.getChannel(t);
                    if (null != n) {
                        let t = n.set("guild_id", e);
                        r.push(t)
                    }
                }
                return r
            }

            function m(e) {
                let t = C(e);
                g[e] = t, t.forEach(e => {
                    let t = e.set("flags", h.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    u.default.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: t
                    })
                })
            }

            function I(e) {
                var t;
                let n = null !== (t = g[e]) && void 0 !== t ? t : C(e);
                n.forEach(e => {
                    u.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: e
                    })
                })
            }
            async function T(e, t) {
                let n = [],
                    i = [];
                if (t.forEach(t => {
                        let r = S.default.getChannel(t.ref_id);
                        null != r && (n.push(o.default.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r))
                    }), 0 === n.length) return;
                let r = await Promise.allSettled(n);
                r.forEach((n, r) => {
                    let l = i[r].id;
                    if ("fulfilled" === n.status) {
                        let t = n.value.body,
                            i = c.useEditStateStore.getState().editStateIdsForGroup[e],
                            r = c.useEditStateStore.getState().listings;
                        null != i && i.forEach(e => {
                            var n;
                            let i = null === (n = r[e]) || void 0 === n ? void 0 : n.channelBenefits;
                            null == i || i.forEach(e => {
                                e.ref_id === l && (e.ref_id = t.id)
                            })
                        })
                    } else if (null != t) {
                        let e = t.findIndex(e => e.ref_id === l); - 1 !== e && (null == t || t.splice(e, 1))
                    }
                })
            }

            function v(e, t) {
                var n, i;
                let r = c.useEditStateStore.getState().listings[e],
                    l = null == r ? void 0 : r.usedTemplate;
                if (null == l) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let u = S.default.getTemplateWithCategory(t, l);
                if (null == u) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let o = u.listings[0];
                if ((null == r ? void 0 : r.name) !== o.name || (null == r ? void 0 : r.description) !== o.description || (null == r ? void 0 : r.priceTier) !== o.price_tier || (null == r ? void 0 : r.image) !== o.image || (null == r ? void 0 : r.roleColor) !== o.role_color || (null == r ? void 0 : null === (n = r.channelBenefits) || void 0 === n ? void 0 : n.length) !== o.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== o.additional_perks.length) return {
                    templateCategory: u.category,
                    hasChangeFromTemplate: !0
                };
                for (let e = 0; e < o.channels.length; e++) {
                    let t = r.channelBenefits[e],
                        n = o.channels[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: u.category,
                        hasChangeFromTemplate: !0
                    }
                }
                for (let e = 0; e < o.additional_perks.length; e++) {
                    let t = r.intangibleBenefits[e],
                        n = o.additional_perks[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: u.category,
                        hasChangeFromTemplate: !0
                    }
                }
                return {
                    templateCategory: u.category,
                    hasChangeFromTemplate: !1
                }
            }

            function N(e) {
                return (0, f.canManageGuildRoleSubscriptions)(e) && e.hasFeature(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id)
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("895026"),
                u = n("36402");
            let o = {};

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, r.useStateFromStores)([u.default], () => u.default.getRoleMemberCount(e));
                return i.useEffect(() => {
                    if (null == e) return;
                    let n = o[e],
                        i = null != n && t > 0 && Date.now() - n < t;
                    !i && (o[e] = Date.now(), l.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        974755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("446674"),
                o = n("77078"),
                s = n("51565"),
                a = n("95039"),
                d = n("863921"),
                c = n("26989"),
                f = n("697218"),
                S = n("580357"),
                E = n("40469"),
                h = n("427459"),
                g = n("49111"),
                p = n("782340"),
                _ = n("129818");

            function C(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                } = e, l = (0, u.useStateFromStores)([f.default, c.default], () => {
                    let e = f.default.getCurrentUser();
                    return c.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: s,
                    premiumSubscriberCount: S
                } = t;
                if (0 === S && s === g.BoostedGuildTiers.NONE) return null;
                let E = e => {
                        e.stopPropagation(), e.preventDefault(), l && !r && (0, a.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: g.AnalyticsSections.GUILD_HEADER,
                                object: g.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    C = s === g.BoostedGuildTiers.NONE ? p.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : h.getTierName(s),
                    m = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: _.tierTooltipTitle,
                            children: C
                        }), (0, i.jsx)("div", {
                            children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: S
                            })
                        })]
                    });
                return (0, i.jsx)("div", {
                    className: _.guildIconContainer,
                    children: (0, i.jsx)(o.Tooltip, {
                        text: m,
                        position: "bottom",
                        "aria-label": null != C ? C : "",
                        children: e => (0, i.jsx)(o.Clickable, {
                            ...e,
                            className: _.premiumGuildIcon,
                            onClick: E,
                            children: (0, i.jsx)(d.default, {
                                premiumTier: s,
                                iconBackgroundClassName: n ? _.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: n && s !== g.BoostedGuildTiers.TIER_3 ? _.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function m(e) {
                let {
                    guild: t,
                    disableColor: n,
                    disableBoostClick: r
                } = e, u = (0, s.default)(t);
                return u ? (0, i.jsx)("div", {
                    className: _.guildIconV2Container,
                    children: (0, i.jsx)(E.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: l(_.guildBadge, {
                            [_.disableColor]: n
                        }),
                        disableBoostClick: r
                    })
                }) : (0, i.jsx)("div", {
                    className: _.guildIconContainer,
                    children: (0, i.jsx)(S.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: l(_.guildBadge, {
                            [_.disableColor]: n
                        })
                    })
                })
            }

            function I(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                } = e, l = (0, s.default)(t);
                if (l) return (0, i.jsx)(m, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                });
                let u = t.hasFeature(g.GuildFeatures.VERIFIED) || t.hasFeature(g.GuildFeatures.PARTNERED);
                return u ? (0, i.jsx)(m, {
                    guild: t,
                    disableColor: !n
                }) : (0, i.jsx)(C, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                })
            }
        },
        593916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007"), n("808653"), n("424973");
            var i = n("37983"),
                r = n("884691"),
                l = n("448105"),
                u = n.n(l),
                o = n("917351"),
                s = n.n(o),
                a = n("316693"),
                d = n("446674"),
                c = n("77078"),
                f = n("26989"),
                S = n("305961"),
                E = n("697218"),
                h = n("991170"),
                g = n("479756"),
                p = n("38654"),
                _ = n("507950"),
                C = n("49111"),
                m = n("782340"),
                I = n("729320");

            function T(e) {
                var t;
                return (0, i.jsx)("span", {
                    style: {
                        color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
                    },
                    children: e.name
                })
            }

            function v(e) {
                let {
                    guildId: t
                } = e, n = (0, d.useStateFromStores)([E.default], () => E.default.getCurrentUser()), l = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), {
                    impersonateType: o,
                    viewingRoles: v
                } = (0, d.useStateFromStoresObject)([p.default], () => ({
                    impersonateType: p.default.getImpersonateType(t),
                    viewingRoles: p.default.getViewingRoles(t)
                })), N = o === _.ImpersonateType.ROLE_SUBSCRIPTION, R = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [M, A] = (0, c.useMultiSelect)(null == v ? [] : Object.keys(v)), O = r.useRef(l);
                r.useEffect(() => {
                    let e = {},
                        t = O.current;
                    if (null != t && null != o) {
                        for (let n of M) {
                            let i = t.getRole(n);
                            null != i && (e[n] = i)
                        }(0, g.updateImpersonating)(t.id, {
                            type: o,
                            roles: e
                        })
                    }
                }, [M, o]);
                let L = null != l && null != n && null != R ? s(l.roles).filter(e => -1 !== R.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
                    b = r.useMemo(() => null != l && null != n ? Object.values(l.roles).filter(e => e.id !== l.id).filter(e => {
                        var t;
                        return !N || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
                    }).filter(e => (null == L ? void 0 : L.id) === e.id || h.default.isRoleHigher(l, n.id, L, e)) : [], [l, n, N, L]);
                if (null == n || null == l || null == R) return null;
                let x = {};
                R.roles.forEach(e => {
                    let t = l.roles[e];
                    null != t && (x[t.id] = t)
                });
                let P = a.default.has(h.default.computePermissionsForRoles({
                    forceRoles: x,
                    context: l
                }), a.default.combine(C.Permissions.MANAGE_GUILD, C.Permissions.MANAGE_ROLES));
                return P || l.isOwner(n.id) ? (0, i.jsx)("div", {
                    className: I.container,
                    children: (0, i.jsx)(c.Combobox, {
                        placeholder: m.default.Messages.SEARCH_ROLES,
                        value: M,
                        onChange: A,
                        autoFocus: !0,
                        children: e => {
                            let t = b.reduce((t, n) => (u(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, i.jsxs)(c.ComboboxItem, {
                                    value: n.id,
                                    children: [(0, i.jsx)(c.ComboboxItem.Label, {
                                        children: T(n)
                                    }), (0, i.jsx)(c.ComboboxItem.Checkbox, {})]
                                }, n.id)), t), []),
                                n = l.getRole(l.id);
                            return null != n && t.push((0, i.jsxs)(c.ComboboxItem, {
                                value: n.id,
                                disabled: !0,
                                children: [(0, i.jsx)(c.ComboboxItem.Label, {
                                    children: T(n)
                                }), (0, i.jsx)(c.ComboboxItem.Checkbox, {
                                    checked: !0
                                })]
                            }, n.id)), t
                        }
                    })
                }) : (0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    children: m.default.Messages.VIEW_AS_ROLES_NO_ACCESS
                })
            }
        },
        977169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                },
                ViewingRolesSettingsNotice: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("446674"),
                o = n("669491"),
                s = n("77078"),
                a = n("921031"),
                d = n("471706"),
                c = n("937692"),
                f = n("432153"),
                S = n("592407"),
                E = n("393414"),
                h = n("18494"),
                g = n("162771"),
                p = n("246053"),
                _ = n("461380"),
                C = n("423487"),
                m = n("489622"),
                I = n("773336"),
                T = n("479756"),
                v = n("38654"),
                N = n("593916"),
                R = n("49111"),
                M = n("724210"),
                A = n("782340"),
                O = n("494449");

            function L(e) {
                let {
                    className: t,
                    onClick: n,
                    children: r
                } = e;
                return (0, i.jsx)(s.Button, {
                    className: l(O.button, t),
                    innerClassName: O.buttonInner,
                    look: s.Button.Looks.OUTLINED,
                    color: s.Button.Colors.WHITE,
                    size: s.Button.Sizes.NONE,
                    onClick: n,
                    children: r
                })
            }

            function b(e) {
                let {
                    onClick: t
                } = e;
                return (0, i.jsx)(L, {
                    onClick: t,
                    children: A.default.Messages.DISABLE
                })
            }

            function x() {
                let e = (0, u.useStateFromStores)([g.default], () => g.default.getGuildId()),
                    t = (0, u.useStateFromStores)([h.default], () => h.default.getChannelId(e)),
                    {
                        viewingRoles: n,
                        backNavigationSection: r,
                        isFullServerPreview: l
                    } = (0, u.useStateFromStoresObject)([v.default], () => ({
                        viewingRoles: null != e ? v.default.getViewingRoles(e) : null,
                        backNavigationSection: v.default.getBackNavigationSection(e),
                        isFullServerPreview: null != e && v.default.isFullServerPreview(e)
                    }));
                if (null == n || null == e) return null;
                let I = function(e) {
                        switch (e) {
                            case R.GuildSettingsSections.INTEGRATIONS:
                                return A.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
                            case R.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
                                return A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
                            case R.GuildSettingsSections.ONBOARDING:
                                return A.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
                            default:
                                return A.default.Messages.VIEWING_AS_ROLES_BACK
                        }
                    }(r),
                    x = r === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : A.default.Messages.VIEWING_AS_ROLES_SELECT,
                    P = t === M.StaticChannelRoute.GUILD_ONBOARDING,
                    w = t => {
                        let {
                            backToSettings: n
                        } = t;
                        null != e && (v.default.isFullServerPreview(e) && (0, E.transitionTo)(R.Routes.CHANNEL(e)), d.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, c.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && S.default.open(e, r), r === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
                    };
                return (0, i.jsxs)(m.default, {
                    color: m.NoticeColors.BRAND,
                    className: O.notice,
                    children: [(0, i.jsxs)(L, {
                        onClick: () => w({
                            backToSettings: !0
                        }),
                        className: O.backButton,
                        children: [(0, i.jsx)(p.default, {
                            width: 16,
                            height: 16,
                            direction: p.default.Directions.LEFT,
                            className: O.backArrow
                        }), I]
                    }), P && l ? (0, i.jsx)("div", {
                        className: O.noticeContents,
                        children: (0, i.jsx)("div", {
                            className: O.noticeText,
                            children: A.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
                        })
                    }) : (0, i.jsxs)("div", {
                        className: O.noticeContents,
                        children: [(0, i.jsx)("div", {
                            className: O.noticeText,
                            children: l ? A.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
                                numRoles: Object.keys(n).length
                            }) : A.default.Messages.VIEWING_AS_ROLES.format({
                                numRoles: Object.keys(n).length
                            })
                        }), (0, i.jsx)(s.Popout, {
                            position: "bottom",
                            renderPopout: () => (0, i.jsx)(N.default, {
                                guildId: e
                            }),
                            children: e => {
                                let {
                                    onClick: t
                                } = e;
                                return (0, i.jsxs)(L, {
                                    onClick: t,
                                    children: [x, (0, i.jsx)(_.default, {
                                        width: 16,
                                        height: 16,
                                        direction: _.default.Directions.DOWN,
                                        className: O.selectCaret
                                    })]
                                })
                            }
                        }), l ? (0, i.jsx)(s.TooltipContainer, {
                            className: O.previewWarning,
                            text: A.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                            children: (0, i.jsx)(C.default, {
                                width: 16,
                                height: 16,
                                color: o.default.unsafe_rawColors.YELLOW_300.css
                            })
                        }) : null]
                    }), l || r === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(b, {
                        onClick: () => w({
                            backToSettings: !1
                        })
                    })]
                })
            }

            function P(e) {
                let {
                    guildId: t
                } = e, n = (0, u.useStateFromStores)([v.default], () => v.default.isViewingRoles(t));
                return n ? (0, i.jsx)("div", {
                    className: l(O.settingsWrapper, {
                        [O.windows]: (0, I.isWindows)(),
                        [O.osx]: (0, I.isMac)()
                    }),
                    children: (0, i.jsx)(x, {})
                }) : null
            }
        },
        596368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("497880");

            function l(e, t) {
                let {
                    message: n,
                    asPartialPreview: l
                } = e;
                return (0, i.jsx)(r.default, {
                    message: n,
                    asPartialPreview: l,
                    content: t
                })
            }
        },
        227439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("93332"),
                u = n("913491");
            let o = r.memo(l.default);

            function s(e) {
                let {
                    message: t,
                    channel: n,
                    author: r,
                    compact: l,
                    animateAvatar: s,
                    guildId: a,
                    isGroupStart: d = !0,
                    roleIcon: c,
                    hideTimestamp: f
                } = e;
                return !(0, u.default)(t) && (d || l) ? (0, i.jsx)(o, {
                    message: t,
                    channel: n,
                    author: r,
                    guildId: a,
                    compact: l,
                    animate: s,
                    roleIcon: c,
                    hideTimestamp: f
                }) : void 0
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("160299");

            function l() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, i.useStateFromStoresObject)([r.default], () => ({
                    localizedPricingPromo: r.default.localizedPricingPromo,
                    hasError: r.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return l
                }
            });
            var i = n("759843"),
                r = n("428958");

            function l(e, t) {
                (0, r.default)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        533403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("424973"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                s = n("766274"),
                a = n("368121"),
                d = n("519657"),
                c = n("486425");
            class f extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        renderMoreUsers: i
                    } = this.props, r = [], l = e.length === t ? e.length : t - 1, u = 0;
                    for (; u < l && u < e.length;) {
                        let t = u === e.length - 1;
                        r.push(n(e[u] || null, t ? null : d.avatarMasked, "user-".concat(u), t)), u++
                    }
                    if (u < e.length) {
                        let t = Math.min(e.length - u, 99);
                        r.push(i("+".concat(t), d.moreUsers, "more-users", t))
                    }
                    return r
                }
                renderIcon() {
                    return this.props.icon ? (0, i.jsx)("div", {
                        className: d.iconContainer,
                        children: (0, i.jsx)(a.default, {
                            width: 16,
                            height: 16,
                            foreground: d.foreground,
                            className: d.icon
                        })
                    }) : null
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: u(e, d.container),
                        ref: e => this._ref = e,
                        children: [this.renderIcon(), this.renderUsers()]
                    })
                }
                constructor(...e) {
                    super(...e), this.defaultRenderUser = (e, t, n, r) => {
                        let {
                            onClick: l,
                            size: a,
                            guildId: f
                        } = this.props, S = e instanceof s.default ? e : null != e ? e.user : null;
                        return null == S ? (0, i.jsx)("div", {
                            className: u(d.emptyUser, t)
                        }, n) : (0, i.jsx)(o.Avatar, {
                            tabIndex: 0,
                            src: S.getAvatarURL(f, (0, o.getAvatarSize)(a)),
                            size: a,
                            "aria-label": S.username,
                            className: u(t, c.cursorPointer, d.avatarSize),
                            onClick: e => null != l ? l(e, S, this._ref) : null
                        }, S.id)
                    }
                }
            }
            f.defaultProps = {
                max: 10,
                renderMoreUsers: function(e, t, n) {
                    return (0, i.jsx)("div", {
                        className: t,
                        children: e
                    }, n)
                },
                size: o.AvatarSizes.SIZE_24
            };
            var S = f
        },
        538137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("704426"),
                u = n("246053"),
                o = (0, r.replaceIcon)(function(e) {
                    return (0, i.jsx)(u.default, {
                        ...e,
                        direction: u.default.Directions.RIGHT
                    })
                }, l.ArrowSmallRightIcon)
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("772279"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: l,
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(s),
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, l.CompassIcon, void 0, {
                    size: 24
                })
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: r,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 24
                })
        },
        952479: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("49097"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, u.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsxs)("g", {
                            clipPath: "url(#clip0_3523_134157)",
                            children: [(0, i.jsx)("path", {
                                d: "M22.2856 1.81423L23.7697 2.6283C23.8391 2.66388 23.8973 2.71794 23.9379 2.78452C23.9785 2.8511 24 2.92762 24 3.00565C24 3.08369 23.9785 3.16021 23.9379 3.22679C23.8973 3.29337 23.8391 3.34743 23.7697 3.38301L22.2856 4.18577C22.2402 4.21036 22.2029 4.24769 22.1784 4.29318L21.3657 5.77999C21.3292 5.8466 21.2755 5.90217 21.2103 5.94087C21.145 5.97958 21.0705 6 20.9947 6C20.9188 6 20.8444 5.97958 20.7791 5.94087C20.7138 5.90217 20.6601 5.8466 20.6236 5.77999L19.811 4.29318C19.7869 4.24903 19.7507 4.21273 19.7066 4.1886L18.2196 3.37453C18.1531 3.33797 18.0977 3.28418 18.059 3.21879C18.0204 3.1534 18 3.07881 18 3.00283C18 2.92684 18.0204 2.85225 18.059 2.78686C18.0977 2.72147 18.1531 2.66768 18.2196 2.63112L19.7038 1.81706C19.7486 1.79172 19.7857 1.75458 19.811 1.70964L20.6265 0.220011C20.663 0.153397 20.7166 0.0978302 20.7819 0.0591255C20.8472 0.0204207 20.9216 0 20.9975 0C21.0734 0 21.1478 0.0204207 21.2131 0.0591255C21.2784 0.0978302 21.3321 0.153397 21.3685 0.220011L22.1812 1.70682C22.2057 1.75138 22.2418 1.78849 22.2856 1.81423Z",
                                fill: r
                            }), (0, i.jsx)("path", {
                                d: "M14.9888 9.50624L18.7402 11.5593C18.8189 11.6025 18.8845 11.666 18.9302 11.7433C18.9759 11.8205 19 11.9086 19 11.9983C19 12.0881 18.9759 12.1762 18.9302 12.2534C18.8845 12.3306 18.8189 12.3941 18.7402 12.4373L14.9855 14.4904C14.7769 14.6044 14.6055 14.7759 14.4915 14.9845L12.4389 18.7402C12.3957 18.8188 12.3322 18.8845 12.255 18.9302C12.1778 18.9759 12.0897 19 12 19C11.9103 19 11.8222 18.9759 11.745 18.9302C11.6678 18.8845 11.6043 18.8188 11.5611 18.7402L9.50851 14.9845C9.39437 14.776 9.22297 14.6046 9.01454 14.4904L5.25978 12.4373C5.18112 12.3941 5.11551 12.3306 5.06981 12.2534C5.02411 12.1762 5 12.0881 5 11.9983C5 11.9086 5.02411 11.8205 5.06981 11.7433C5.11551 11.666 5.18112 11.6025 5.25978 11.5593L9.01454 9.49289C9.22319 9.37903 9.39467 9.20751 9.50851 8.99881L11.5644 5.25984C11.6076 5.18117 11.6711 5.11554 11.7483 5.06983C11.8255 5.02412 11.9136 5 12.0033 5C12.0931 5 12.1811 5.02412 12.2583 5.06983C12.3356 5.11554 12.3991 5.18117 12.4422 5.25984L14.4948 8.99881C14.6066 9.21244 14.7783 9.3888 14.9888 9.50624Z",
                                fill: r
                            })]
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: "clip0_3523_134157",
                                children: (0, i.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: r
                                })
                            })
                        })]
                    })
                }, l.SparklesIcon, void 0, {
                    size: 16
                })
        },
        266926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("225389"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        backgroundColor: l,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [null != l ? (0, i.jsx)("circle", {
                            r: 8,
                            cx: 12,
                            cy: 12,
                            fill: l
                        }) : null, (0, i.jsx)("path", {
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 6.751C12.69 6.751 13.25 7.311 13.25 8.001C13.25 8.692 12.69 9.251 12 9.251C11.31 9.251 10.75 8.691 10.75 8C10.75 7.31 11.31 6.751 12 6.751ZM15 17H9V15H11V12H10V10H12C12.553 10 13 10.448 13 11V15H15V17Z",
                            fill: r
                        })]
                    })
                }, l.CircleInformationIcon, void 0, {
                    size: 24
                })
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("533806"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: r
                        })
                    })
                }, l.UserIcon, void 0, {
                    size: 24
                })
        },
        561359: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("877585"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z",
                            fill: r,
                            className: l
                        })
                    })
                }, l.ShieldIcon, void 0, {
                    size: 24
                })
        },
        759885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                u = n("255397"),
                o = n("987317"),
                s = n("679653"),
                a = n("393414"),
                d = n("233069"),
                c = n("42203"),
                f = n("305961"),
                S = n("27618"),
                E = n("697218"),
                h = n("666897"),
                g = n("404008"),
                p = n("794818"),
                _ = n("49111");

            function C(e) {
                let {
                    channel: t,
                    onClick: n,
                    beforeTransition: C,
                    className: m,
                    openChatWithoutConnecting: I
                } = e, T = (0, r.useStateFromStores)([E.default, S.default], () => null == t ? "" : (0, s.computeChannelName)(t, E.default, S.default), [t]);
                return (0, i.jsx)(l.Tooltip, {
                    text: T,
                    position: "top",
                    children: e => {
                        let {
                            onMouseEnter: r,
                            onMouseLeave: s
                        } = e;
                        return (0, i.jsx)(h.default, {
                            role: "link",
                            className: m,
                            onClick: e => {
                                e.stopPropagation(), null != n ? n() : (null != C && C(), (0, l.closeAllModals)(), ! function(e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if (null == e || null == t) return;
                                    let i = f.default.getGuild(e);
                                    if ((null == i ? void 0 : i.joinedAt) == null) {
                                        p.startLurking(e, {}, {
                                            channelId: t
                                        });
                                        return
                                    }
                                    let r = c.default.getChannel(t);
                                    if (null != r && (0, d.isGuildVocalChannelType)(r.type)) {
                                        if (n) {
                                            u.default.updateChatOpen(r.id, !0), (0, a.transitionTo)(_.Routes.CHANNEL(e, t));
                                            return
                                        }
                                        o.default.selectVoiceChannel(r.id);
                                        return
                                    }(0, a.transitionTo)(_.Routes.CHANNEL(e, t))
                                }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, I))
                            },
                            onMouseEnter: r,
                            onMouseLeave: s,
                            iconType: (0, g.getMentionIconType)(t),
                            children: T
                        })
                    }
                })
            }
        },
        441823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserContextMenu: function() {
                    return l
                },
                openModerateUserContextMenu: function() {
                    return u
                },
                openModerateRoleContextMenu: function() {
                    return o
                },
                openModerationRaidContextMenu: function() {
                    return s
                }
            }), n("70102");
            var i = n("37983");
            n("884691");
            var r = n("272030");

            function l(e, t, l) {
                l.isGroupDM() ? (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("166452").then(n.bind(n, "166452"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: l
                    })
                }) : l.isDM() ? (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("130074").then(n.bind(n, "130074"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: l,
                        showMute: !1,
                        targetIsUser: !0
                    })
                }) : null != l.guild_id ? (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("834247").then(n.bind(n, "834247"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: l,
                        guildId: l.guild_id
                    })
                }) : (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("406784").then(n.bind(n, "406784"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        user: t
                    })
                })
            }

            function u(e, t) {
                let {
                    user: l,
                    channel: u,
                    moderationAlertId: o,
                    guildId: s,
                    analyticsLocations: a,
                    onCloseContextMenu: d
                } = t;
                if ((null == u ? void 0 : u.isGroupDM()) || (null == u ? void 0 : u.isDM())) throw Error("Cannot moderate user in DM or group DM");
                let c = null != s ? s : null == u ? void 0 : u.getGuildId();
                null != c && (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("467940").then(n.bind(n, "467940"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        user: l,
                        channelId: null == u ? void 0 : u.id,
                        guildId: c,
                        moderationAlertId: o,
                        analyticsLocations: a,
                        onCloseContextMenu: d
                    })
                })
            }

            function o(e, t) {
                let {
                    user: l,
                    guildId: u,
                    analyticsLocations: o,
                    onCloseContextMenu: s
                } = t;
                (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("522651").then(n.bind(n, "522651"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        user: l,
                        guildId: u,
                        analyticsLocations: o,
                        onCloseContextMenu: s
                    })
                })
            }

            function s(e, t, l) {
                null != l && (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("701587").then(n.bind(n, "701587"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: l
                    })
                })
            }
        },
        498574: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return i
                }
            }), n("222007"), (r = i || (i = {}))[r.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", r[r.IS_VIEWED = 2] = "IS_VIEWED", r[r.IS_ENHANCED = 4] = "IS_ENHANCED"
        }
    }
]);