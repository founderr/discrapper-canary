(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55438"], {
        448105: function(e, t, i) {
            "use strict";
            e.exports = function(e, t) {
                var i = t.length,
                    n = e.length;
                if (n > i) return !1;
                if (n === i) return e === t;
                e: for (var a = 0, s = 0; a < n; a++) {
                    for (var l = e.charCodeAt(a); s < i;)
                        if (t.charCodeAt(s++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        777273: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var n = i("872717"),
                a = i("913144"),
                s = i("843823"),
                l = i("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (a.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), n.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    a.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    a.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        505088: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                CircleXIcon: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("669491"),
                s = i("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "black"
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: r
                    })]
                })
            }
        },
        159747: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return O
                }
            }), i("222007"), i("424973");
            var n = i("37983"),
                a = i("884691"),
                s = i("759843"),
                l = i("446674"),
                r = i("77078"),
                u = i("450911"),
                o = i("685073"),
                d = i("819689"),
                c = i("812204"),
                f = i("685665"),
                p = i("428958"),
                m = i("843962"),
                h = i("679653"),
                E = i("305961"),
                I = i("705955"),
                C = i("27618"),
                A = i("697218"),
                g = i("646240"),
                v = i("578706"),
                S = i("83900"),
                T = i("599110"),
                N = i("315102"),
                _ = i("306160"),
                y = i("354023"),
                R = i("159885"),
                x = i("158998"),
                L = i("969380"),
                U = i("49111"),
                D = i("91366"),
                w = i("782340"),
                F = i("764786");

            function O(e) {
                let {
                    activityItem: t,
                    analyticsLocations: i,
                    ...m
                } = e, h = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), {
                    analyticsLocations: E
                } = (0, f.default)(i);
                (0, p.default)({
                    type: s.ImpressionTypes.MODAL,
                    name: s.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
                    properties: {
                        application_id: t.application.id,
                        location_stack: E
                    }
                });
                let [C, v] = a.useState(""), [S, N] = a.useState([]), _ = (0, L.default)({
                    applicationId: t.application.id,
                    size: 256
                }), R = "".concat(window.location.origin).concat(U.Routes.ACTIVITY_DETAILS(t.application.id)), x = (0, l.useStateFromStoresArray)([I.default], () => I.default.getInviteSuggestionRows());
                a.useEffect(() => {
                    (0, o.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t.application.id,
                        inviteTargetType: D.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t.application.id]), a.useEffect(() => (0, o.searchInviteSuggestions)(C), [C]);
                let O = a.useCallback(async () => {
                    let e = 0,
                        i = 0,
                        n = 0,
                        a = I.default.getInviteSuggestionRows().filter(e => S.includes(e.item.id)).map(t => (function(t, a) {
                            switch (t.type) {
                                case y.RowTypes.DM:
                                case y.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case y.RowTypes.GROUP_DM:
                                    i++;
                                    break;
                                case y.RowTypes.CHANNEL:
                                    n++
                            }
                            return t.type === y.RowTypes.GROUP_DM || t.type === y.RowTypes.CHANNEL ? d.default.sendActivityBookmark(t.item.id, a, c.default.ACTIVITY_DETAIL_PAGE, null) : t.type === y.RowTypes.DM || t.type === y.RowTypes.FRIEND ? u.default.ensurePrivateChannel(t.item.id).then(e => d.default.sendActivityBookmark(e, R, c.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
                        })(t, R));
                    await a, T.default.track(U.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
                        user_id: null == h ? void 0 : h.id,
                        application_id: t.application.id,
                        n_users: e,
                        n_gdms: i,
                        n_channels: n
                    }), m.onClose()
                }, [t, S, m, R, h]);
                return (0, n.jsxs)(r.ModalRoot, {
                    ...m,
                    className: F.modalRoot,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        className: F.header,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: w.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
                                activityName: t.application.name
                            })
                        }), (0, n.jsx)(r.ModalCloseButton, {
                            onClick: m.onClose
                        })]
                    }), (0, n.jsxs)(r.ModalContent, {
                        className: F.modalContent,
                        children: [(0, n.jsx)(g.default, {
                            className: F.searchBar,
                            placeholder: w.default.Messages.SEARCH,
                            label: w.default.Messages.SEARCH,
                            searchTerm: C,
                            onChange: e => v(e),
                            onClear: () => v("")
                        }), x.map((e, t) => (0, n.jsxs)(a.Fragment, {
                            children: [0 === t ? null : (0, n.jsx)("div", {
                                className: F.rowDivider
                            }), (0, n.jsx)(j, {
                                row: e,
                                onClick: () => {
                                    let t = [...S];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), N(t)
                                },
                                checked: S.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, n.jsxs)(r.ModalFooter, {
                        className: F.footer,
                        children: [(0, n.jsx)("div", {
                            className: F.activityInfoOuterContainer,
                            children: (0, n.jsxs)("div", {
                                className: F.activityInfoInnerContainer,
                                children: [(0, n.jsx)("img", {
                                    src: _.url,
                                    className: F.activityInfoImage,
                                    alt: t.application.name
                                }), (0, n.jsxs)("div", {
                                    className: F.activityInfoText,
                                    children: [(0, n.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        className: F.ellipsis,
                                        children: t.application.name
                                    }), (0, n.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        className: F.ellipsis,
                                        children: t.application.description
                                    }), (0, n.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        className: F.ellipsis,
                                        children: (0, n.jsx)(r.Anchor, {
                                            href: R,
                                            children: R
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: F.footerDivider
                        }), (0, n.jsxs)("div", {
                            className: F.copySendBar,
                            children: [(0, n.jsx)(M, {
                                link: R,
                                applicationId: t.application.id
                            }), (0, n.jsx)(r.Button, {
                                onClick: O,
                                disabled: S.length <= 0,
                                children: w.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function j(e) {
                let {
                    row: t,
                    onClick: i,
                    checked: a
                } = e, s = null, l = null, u = null;
                switch (t.type) {
                    case y.RowTypes.DM:
                    case y.RowTypes.FRIEND:
                        s = (0, n.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), l = x.default.getName(t.item), u = x.default.getUserTag(t.item);
                        break;
                    case y.RowTypes.GROUP_DM: {
                        let e = (0, m.getChannelIconURL)(t.item),
                            i = (0, h.computeChannelName)(t.item, A.default, C.default);
                        s = (0, n.jsx)(r.Avatar, {
                            src: e,
                            "aria-label": i,
                            size: r.AvatarSizes.SIZE_40
                        }), l = (0, h.computeChannelName)(t.item, A.default, C.default);
                        break
                    }
                    case y.RowTypes.CHANNEL: {
                        let e = t.item,
                            i = E.default.getGuild(e.guild_id);
                        if (null == i) return null;
                        if (l = "#".concat((0, h.computeChannelName)(e, A.default, C.default)), u = i.name, null != i.icon) {
                            let t = N.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: i.icon,
                                size: 40
                            });
                            s = (0, n.jsx)(r.Avatar, {
                                src: t,
                                "aria-label": l,
                                size: r.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, R.getAcronym)(i.name);
                            s = (0, n.jsx)("div", {
                                className: F.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, n.jsxs)(r.Clickable, {
                    onClick: i,
                    className: F.rowContainer,
                    children: [(0, n.jsxs)("div", {
                        className: F.rowLeft,
                        children: [(0, n.jsx)("div", {
                            className: F.rowAvatar,
                            children: s
                        }), (0, n.jsxs)("div", {
                            className: F.rowNameContainer,
                            children: [(0, n.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                className: F.rowName,
                                children: l
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                className: F.rowSubName,
                                children: u
                            })]
                        })]
                    }), (0, n.jsx)(r.Checkbox, {
                        value: a,
                        type: r.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: F.rowRight
                    })]
                })
            }

            function M(e) {
                let {
                    applicationId: t,
                    link: i
                } = e, s = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), [u, o] = a.useState(!1);
                return a.useEffect(() => {
                    let e;
                    return u && (e = setTimeout(() => {
                        o(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [u]), (0, n.jsxs)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    onClick: function() {
                        T.default.track(U.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                            user_id: null == s ? void 0 : s.id,
                            application_id: t
                        }), (0, _.copy)(i), o(!0)
                    },
                    innerClassName: F.copyButton,
                    children: [u ? (0, n.jsx)(v.default, {}) : (0, n.jsx)(S.default, {}), u ? w.default.Messages.COPIED : w.default.Messages.COPY_LINK]
                })
            }
        },
        843962: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            }), i("222007");
            var n = i("697218"),
                a = i("315102"),
                s = i("449008"),
                l = i("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(n.default.getUser).filter(s.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, i);
                    case l.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        866353: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StickerSendability: function() {
                    return a
                },
                getStickerSendability: function() {
                    return o
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var n, a, s = i("991170"),
                l = i("719923"),
                r = i("24373"),
                u = i("49111");
            (n = a || (a = {}))[n.SENDABLE = 0] = "SENDABLE", n[n.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", n[n.NONSENDABLE = 2] = "NONSENDABLE", n[n.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let o = (e, t, i) => {
                    if (null == t) return 2;
                    let n = l.default.canUseCustomStickersEverywhere(t);
                    if ((0, r.isStandardSticker)(e)) return 0;
                    if ((0, r.isGuildSticker)(e) && null != i) return e.available ? null != i.guild_id && "" !== i.guild_id && i.guild_id === e.guild_id ? 0 : null == i.guild_id || s.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: i
                    }) ? n ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, i) => 0 === o(e, t, i)
        },
        865372: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return C
                }
            }), i("424973");
            var n = i("917351"),
                a = i.n(n),
                s = i("446674"),
                l = i("913144"),
                r = i("80507"),
                u = i("374363"),
                o = i("364685"),
                d = i("49111"),
                c = i("397336");
            let f = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let p = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => o.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                m = () => {
                    o.default.isLoaded && p.compute()
                },
                h = () => {
                    m()
                };

            function E() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                p.overwriteHistory(a.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class I extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (f = e), this.syncWith([o.default], h), this.syncWith([u.default], E)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return p
                }
            }
            I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
            var C = new I(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        p.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), m()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: i
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !i) return !1;
                    f.pendingUsages = []
                }
            })
        },
        843823: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            }), i("222007");
            var n = i("446674"),
                a = i("913144"),
                s = i("27618");
            let l = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...r
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class d extends n.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([s.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(a.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: i
                    } = e;
                    u.userAffinities = null !== (t = i.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    u = {
                        ...r
                    }
                }
            })
        },
        287850: function(e, t, i) {
            "use strict";
            let n, a, s;
            i.r(t), i.d(t, {
                default: function() {
                    return D
                }
            }), i("222007"), i("424973");
            var l, r, u = i("866227"),
                o = i.n(u),
                d = i("446674"),
                c = i("407846"),
                f = i("913144"),
                p = i("21121"),
                m = i("934306"),
                h = i("288518"),
                E = i("486503"),
                I = i("233069"),
                C = i("42203"),
                A = i("305961"),
                g = i("660478"),
                v = i("282109"),
                S = i("697218"),
                T = i("299039"),
                N = i("724210");
            (r = l || (l = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let _ = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: i
                } = e;
                return t ? [] : [i ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, i;
                    let n = null !== (i = null !== (t = g.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== i ? i : e.id,
                        a = e.isMessageRequestTimestamp;
                    if (null != a) {
                        let e = o(a).valueOf(),
                            t = T.default.fromTimestamp(e);
                        return T.default.compare(n, t) > 0 ? n : t
                    }
                    return n
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: v.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: h.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function R() {
                _.clear(), Object.values(C.default.getMutablePrivateChannels()).forEach(e => {
                    _.set(e.id, y(e))
                }), (0, p.isInMainTabsExperiment)() && (0, m.isSplitMessagesTab)() && v.default.getAddedToMessages().forEach(e => {
                    let t = C.default.getChannel(e);
                    null != t && (0, I.isGuildTextChannelType)(t.type) && _.set(t.id, y(t))
                })
            }

            function x() {
                let e = C.default.getMutablePrivateChannels();
                for (let t in e) _.set(t, y(e[t]))
            }
            let L = (n = [], a = [], s = [], () => {
                let e = _.values("FAVORITE"),
                    t = _.values("DEFAULT");
                return (n !== e || a !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), n = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), a = t), s
            });
            class U extends d.default.Store {
                initialize() {
                    this.waitFor(C.default, A.default, S.default, h.default, v.default), this.syncWith([v.default, h.default], R)
                }
                getPrivateChannelIds() {
                    return L()
                }
                getSortedChannels() {
                    return [_.values("FAVORITE"), _.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return _.values().forEach(t => {
                        let {
                            channelId: i,
                            lastMessageId: n
                        } = t;
                        e[i] = n
                    }), e
                }
            }
            U.displayName = "PrivateChannelSortStore";
            var D = new U(f.default, {
                CONNECTION_OPEN: R,
                CONNECTION_OPEN_SUPPLEMENTAL: R,
                OVERLAY_INITIALIZE: R,
                CACHE_LOADED: x,
                CACHE_LOADED_LAZY: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, I.isPrivate)(e.type) || _.has(e.id)) && _.set(e.id, y(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, I.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    _.set(t.id, y(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return _.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: i
                    } = e;
                    if (!_.has(t)) return !1;
                    let n = C.default.getChannel(t);
                    return null != n && _.set(t, y(n, i.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return _.delete(t)
                }
            })
        },
        646240: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return p
                }
            }), i("222007");
            var n = i("37983"),
                a = i("884691"),
                s = i("414456"),
                l = i.n(s),
                r = i("77078"),
                u = i("381546"),
                o = i("229915"),
                d = i("782340"),
                c = i("913893");
            class f extends a.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: i,
                        searchTerm: a,
                        inputClassName: s,
                        className: f,
                        onChange: p,
                        onFocus: m,
                        onBlur: h,
                        onKeyPress: E,
                        autoComplete: I,
                        forwardedRef: C,
                        closeIconClassName: A,
                        searchIconClassName: g,
                        cta: v
                    } = this.props, S = null != a && a.length > 0, T = null != C ? C : this._textInputRef;
                    return (0, n.jsx)(r.FocusRing, {
                        focusTarget: T,
                        ringTarget: this._containerRef,
                        children: (0, n.jsxs)("div", {
                            className: l(c.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, n.jsx)(r.TextInput, {
                                inputRef: T,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: c.searchBoxInputWrapper,
                                inputClassName: l(c.searchBoxInput, s),
                                onChange: p,
                                onFocus: m,
                                onBlur: h,
                                onKeyPress: E,
                                value: S ? a : "",
                                placeholder: i,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: I ? "on" : "off"
                            }), null != v ? (0, n.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: c.cta,
                                children: v
                            }) : null, S ? (0, n.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: c.clear,
                                "aria-label": d.default.Messages.SEARCH_CLEAR,
                                children: (0, n.jsx)(u.default, {
                                    className: l(c.clearIcon, A)
                                })
                            }) : (0, n.jsx)(o.default, {
                                className: l(c.searchIcon, g),
                                "aria-label": d.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = a.createRef(), this._containerRef = a.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: i
                        } = null != t ? t : this._textInputRef;
                        null != i && i.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var p = a.forwardRef((e, t) => (0, n.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        381546: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("469563"),
                s = i("505088"),
                l = i("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: a = "currentColor",
                        foreground: s,
                        backgroundColor: r,
                        ...u
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: i,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, n.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon, void 0, {
                    size: 24
                })
        },
        306160: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return r
                }
            }), i("70102");
            var n = i("281071"),
                a = i("773336"),
                s = i("50885");
            let l = (() => {
                if (a.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!l && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : n.copy(e))
            }
        },
        281071: function(e, t, i) {
            "use strict";

            function n(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let i = document.createRange(),
                    n = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), i.selectNodeContents(a), null == n || n.removeAllRanges(), null == n || n.addRange(i), a.focus(), a.setSelectionRange(0, e.length);
                let s = document.execCommand("copy");
                return t.removeChild(a), s
            }
            i.r(t), i.d(t, {
                copy: function() {
                    return n
                }
            }), i("70102")
        }
    }
]);