(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49091"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return u
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var i = n("913144"),
                r = n("696605");

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function s(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: u,
                    rowHeight: l
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let a = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return a.push([e, t]), t + 1
                }
                let c = s(.5 * u),
                    E = s(i, -c),
                    f = s(i + u, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= f;) E = d(E);
                o(t, n, a)
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: o = "",
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, u.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H6.99999C6.44771 13 5.99999 12.5523 5.99999 12C5.99999 11.4477 6.44771 11 6.99999 11H11V7C11 6.44771 11.4477 6 12 6Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, u.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M13.9571 5.45711L18.5429 10.0429C18.9334 10.4334 19.5666 10.4334 19.9571 10.0429L21.3358 8.66422C22.1168 7.88317 22.1168 6.61684 21.3358 5.83579L18.1642 2.66422C17.3831 1.88317 16.1168 1.88317 15.3358 2.66422L13.9571 4.0429C13.5666 4.43342 13.5666 5.06659 13.9571 5.45711Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M2.11104 20.1559L2.8382 15.9383C2.94347 15.3278 3.23518 14.7648 3.67326 14.3267L11.5429 6.45711C11.9334 6.06658 12.5666 6.06659 12.9571 6.45711L17.5429 11.0429C17.9334 11.4334 17.9334 12.0666 17.5429 12.4571L9.67326 20.3267C9.23518 20.7648 8.6722 21.0565 8.06166 21.1618L3.84409 21.889C2.82284 22.065 1.93496 21.1771 2.11104 20.1559Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, u.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, u.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9024 4.68342 12.9024 5.31658 13.2929 5.70711L14.5858 7H13C9.68629 7 7 9.68629 7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 10.7909 10.7909 9 13 9H14.5858L13.2929 10.2929C12.9024 10.6834 12.9024 11.3166 13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071L17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, u.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.558 1.09366C10.1049 1.153 9.85283 1.62553 9.92194 2.07732C10.1003 3.24346 9.73459 4.27926 8.93869 4.60893C8.14294 4.93854 7.15214 4.46496 6.45371 3.51461C6.1831 3.1464 5.67085 2.99054 5.30837 3.26877C4.54272 3.85645 3.85659 4.54257 3.2689 5.3082C2.99066 5.67069 3.14651 6.18296 3.51474 6.45356C4.46513 7.152 4.93874 8.14283 4.60912 8.93859C4.27944 9.73453 3.24356 10.1002 2.07736 9.92181C1.62557 9.85269 1.15302 10.1047 1.09368 10.5579C1.03188 11.0298 1 11.5112 1 12C1 12.4888 1.03188 12.9702 1.09369 13.4421C1.15303 13.8953 1.62558 14.1473 2.07736 14.0782C3.24356 13.8998 4.27944 14.2655 4.60913 15.0614C4.93874 15.8572 4.46514 16.848 3.51475 17.5465C3.14653 17.8171 2.99067 18.3293 3.26891 18.6918C3.85661 19.4575 4.54276 20.1436 5.30842 20.7313C5.67091 21.0095 6.18315 20.8536 6.45376 20.4854C7.15219 19.5351 8.143 19.0615 8.93875 19.3911C9.73465 19.7208 10.1004 20.7566 9.922 21.9227C9.85289 22.3745 10.1049 22.847 10.5581 22.9063C11.03 22.9681 11.5113 23 12 23C12.4889 23 12.9703 22.9681 13.4423 22.9063C13.8955 22.8469 14.1475 22.3744 14.0784 21.9226C13.9 20.7565 14.2657 19.7207 15.0616 19.391C15.8574 19.0614 16.8481 19.5349 17.5465 20.4852C17.8172 20.8534 18.3294 21.0093 18.6919 20.731C19.4574 20.1434 20.1435 19.4573 20.7311 18.6918C21.0094 18.3293 20.8535 17.817 20.4853 17.5464C19.5349 16.848 19.0613 15.8572 19.3909 15.0614C19.7206 14.2655 20.7565 13.8998 21.9226 14.0782C22.3744 14.1473 22.847 13.8953 22.9063 13.4421C22.9681 12.9702 23 12.4888 23 12C23 11.5112 22.9681 11.0299 22.9063 10.5579C22.847 10.1048 22.3744 9.85271 21.9227 9.92183C20.7565 10.1002 19.7206 9.73451 19.391 8.9386C19.0614 8.14284 19.5349 7.15204 20.4853 6.4536C20.8535 6.183 21.0094 5.67074 20.7311 5.30825C20.1435 4.54271 19.4575 3.85666 18.692 3.26903C18.3295 2.99079 17.8172 3.14662 17.5466 3.51482C16.8482 4.46508 15.8574 4.9386 15.0617 4.60901C14.2658 4.27933 13.9001 3.24352 14.0785 2.07737C14.1476 1.6256 13.8956 1.15308 13.4424 1.09372C12.9704 1.0319 12.4889 1 12 1C11.5112 1 11.0299 1.03188 10.558 1.09366ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    })
                })
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                u = n.n(r);
            n("233736");
            var l = n("666020");

            function o(e) {
                i.useEffect(() => (u.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    u.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                u = n("516555"),
                l = n("65597"),
                o = n("206230"),
                s = n("49111");
            let a = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                d = r.createContext(a);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: s,
                    baseConfig: c,
                    addClickListener: E,
                    removeClickListener: f
                } = e, I = (0, u.useConfettiCannon)(n, s), _ = (0, l.default)([o.default], () => o.default.useReducedMotion), C = r.useMemo(() => _ ? a : {
                    confettiCanvas: n,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => I.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: E,
                    removeClickListener: f
                }, [E, c, I, n, _, f]);
                return (0, i.jsx)(d.Provider, {
                    value: C,
                    children: t
                })
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var i = n("917351"),
                r = n.n(i),
                u = n("446674"),
                l = n("913144"),
                o = n("398604"),
                s = n("813006"),
                a = n("730647");
            let d = !1,
                c = {},
                E = {},
                f = {},
                I = e => (f[e.guild_scheduled_event.id] = new s.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: a.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class _ extends u.default.Store {
                isFetching() {
                    return d
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
            }
            _.displayName = "EventDirectoryStore";
            var C = new _(l.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    d = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    d = !1;
                    let i = r.sortBy([...n], [function(e) {
                            return (0, o.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        u = r.map(i, I);
                    c[t] = u
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    d = !1
                }
            })
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return a
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return f
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return C
                },
                setPendingThemeColors: function() {
                    return T
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return v
                },
                clearErrors: function() {
                    return G
                },
                setDisableSubmit: function() {
                    return L
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                u = n("54239"),
                l = n("49111");
            async function o(e, t) {
                let {
                    nick: n,
                    avatar: u
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: u
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function s(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function v() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function G() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function L(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, u, l, o, s, a, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var E = n("446674"),
                f = n("913144"),
                I = n("49111");
            let _ = I.FormStates.CLOSED,
                C = {},
                T = !1;

            function S() {
                _ = I.FormStates.CLOSED, C = {}, a = null, d = void 0, c = []
            }

            function N() {
                v(), G(), C = {}, _ = I.FormStates.OPEN
            }

            function v() {
                i = void 0, o = void 0
            }

            function G() {
                r = void 0, u = void 0, l = void 0, s = void 0
            }
            class L extends E.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return C
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== l || void 0 !== o || void 0 !== s
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return u
                }
                getPendingNickname() {
                    return o
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: u,
                        pendingPronouns: l,
                        pendingNickname: o,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return a
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return T
                }
            }
            L.displayName = "GuildIdentitySettingsStore";
            var D = new L(f.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    a = e.guild, _ = I.FormStates.OPEN, C = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: S,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), S()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    a = e.guild, C = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = I.FormStates.SUBMITTING, C = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== I.FormStates.SUBMITTING) return !1;
                    _ = I.FormStates.OPEN, C = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = I.FormStates.OPEN, C = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: v,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    C = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    T = t
                }
            })
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return o
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return s
                }
            });
            var i = n("316693"),
                r = n("923510"),
                u = n("49111");
            let l = u.Permissions.VIEW_CHANNEL,
                o = i.default.combine(l, u.Permissions.CONNECT),
                s = i.default.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("962199"),
                u = n("305961");

            function l(e, t) {
                return (0, i.useStateFromStoresObject)([u.default, r.default], () => {
                    let n = u.default.getGuild(e),
                        i = null != n;
                    return null == n && null != t && (n = r.default.getCachedGuildByEventId(t)), {
                        isMember: i,
                        guild: n
                    }
                }, [e, t])
            }
        },
        669195: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SHARE_EVENT_DETAILS_LINK: function() {
                    return i
                }
            });
            let i = e => {
                let {
                    guildId: t,
                    guildEventId: n
                } = e;
                return "https://discord.com/events/".concat(t, "/").concat(n)
            }
        },
        369404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                u = n("77078"),
                l = n("272030"),
                o = n("851387"),
                s = n("233322"),
                a = n("157186"),
                d = n("817963"),
                c = n("393414"),
                E = n("716214"),
                f = n("923959"),
                I = n("305961"),
                _ = n("957255"),
                C = n("599110"),
                T = n("306160"),
                S = n("322224"),
                N = n("152475"),
                v = n("397680"),
                G = n("613767"),
                L = n("822516"),
                D = n("669195"),
                g = n("936965"),
                h = n("745049"),
                p = n("49111"),
                M = n("782340");

            function R(e) {
                let {
                    guild: t,
                    channel: R,
                    guildScheduledEvent: P,
                    isActive: A,
                    recurrenceId: m,
                    onActionTaken: U
                } = e, {
                    scheduled_start_time: V,
                    id: y,
                    entity_type: O,
                    guild_id: x
                } = P, {
                    canManageGuildEvent: H
                } = (0, d.useManageResourcePermissions)(null != R ? R : t), w = H(P), b = (0, N.default)(P), B = (0, G.useIsChannelPublic)(null == R ? void 0 : R.id, P.id), {
                    withinStartWindow: Y
                } = (0, L.getEventTimeData)(V), F = (0, r.useStateFromStores)([_.default], () => (null == R ? !void 0 : !R.isGuildVocal()) || _.default.can(p.Permissions.CONNECT, R), [R]), j = (0, a.useShowMemberVerificationGate)(x), k = (0, v.default)(m, y);

                function Z(e) {
                    e.stopPropagation(), (0, g.default)(y, m, x)
                }
                async function z(e) {
                    e.stopPropagation(), await o.default.joinGuild(x), I.default.addConditionalChangeListener(() => {
                        let t = I.default.getGuild(x);
                        return null == t || (!A && Z(e), X(e), !1)
                    })
                }

                function X(e) {
                    e.stopPropagation();
                    let t = f.default.getDefaultChannel(x);
                    (0, u.closeAllModals)(), (0, c.transitionToGuild)(x, null == t ? void 0 : t.id)
                }
                return {
                    onDeleteClick: w ? function(e) {
                        e.stopPropagation(), w && !A && (0, u.openModal)(e => (0, i.jsx)(u.ConfirmModal, {
                            ...e,
                            header: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: M.default.Messages.DELETE,
                            cancelText: M.default.Messages.CANCEL,
                            onConfirm: () => S.default.deleteGuildEvent(y, x),
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            })
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation(), null != t && (0, l.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("110374").then(n.bind(n, "110374"));
                            return n => (0, i.jsx)(e, {
                                guildEventId: y,
                                recurrenceId: m,
                                channel: R,
                                guild: t,
                                ...n
                            })
                        })
                    },
                    onJoinClick: F || j ? function(e) {
                        if (e.stopPropagation(), j) {
                            null == U || U(), (0, s.openMemberVerificationModal)(x);
                            return
                        }(null == R ? void 0 : R.isGuildStageVoice()) ? ((0, E.connectAndOpen)(R), null == U || U()) : (null == R ? void 0 : R.isGuildVoice()) && (S.default.joinVoiceEvent(R.guild_id, R.id), null == U || U())
                    } : void 0,
                    onRsvpClick: Z,
                    onStartClick: w && Y && !(null == k ? void 0 : k.is_canceled) ? function(e) {
                        e.stopPropagation(), (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                event: P,
                                onSuccess: U
                            })
                        })
                    } : void 0,
                    onInviteClick: function(e) {
                        if (e.stopPropagation(), null != t) {
                            if (!b || !B) {
                                let e = (0, D.SHARE_EVENT_DETAILS_LINK)({
                                    guildId: x,
                                    guildEventId: y
                                });
                                (0, T.copy)(e), C.default.track(p.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: x,
                                    guild_scheduled_event_id: y
                                });
                                return
                            }(0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t,
                                    channel: R,
                                    guildScheduledEvent: P,
                                    source: p.InstantInviteSources.GUILD_EVENTS
                                })
                            })
                        }
                    },
                    onEndClick: w && O === h.GuildScheduledEventEntityTypes.EXTERNAL && A ? function(e) {
                        if (e.stopPropagation(), !w) return;
                        let t = () => {
                            S.default.endEvent(y, x), (0, u.closeAllModals)()
                        };
                        (0, u.openModal)(e => (0, i.jsx)(u.ConfirmModal, {
                            ...e,
                            header: M.default.Messages.END_EVENT,
                            confirmText: M.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: M.default.Messages.CANCEL,
                            onConfirm: t,
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: M.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    } : void 0,
                    onJoinGuildClick: z,
                    onGoToGuildClick: X
                }
            }
        },
        922770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("305961"),
                u = n("49111");

            function l(e) {
                return (0, i.useStateFromStores)([r.default], () => {
                    var t;
                    if (null == e) return !1;
                    let n = r.default.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(u.GuildFeatures.HUB)) && void 0 !== t && t
                }, [e])
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return _
                },
                getManageResourcePermissions: function() {
                    return C
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return T
                }
            }), n("222007");
            var i = n("884691"),
                r = n("316693"),
                u = n("446674"),
                l = n("252931"),
                o = n("813006");
            n("923959");
            var s = n("957255"),
                a = n("697218");
            n("991170");
            var d = n("270161"),
                c = n("843455");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                f = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var r;
                        return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
                    }
                    return !1
                },
                I = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, c.Permissions.CREATE_EVENTS), r.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                _ = e => {
                    let [t, n] = e instanceof o.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : I(e), [r, l, d, _] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), s.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), s.default.can(t, e), s.default.can(n, e)]), C = (0, u.useStateFromStores)([a.default], () => a.default.getCurrentUser()), T = i.useCallback(e => f(e, C, l, r), [r, l, C]), S = i.useCallback(e => f(e, C, _, d), [_, d, C]);
                    return null == e ? E : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: l,
                        canManageAllEvents: _,
                        canManageGuildExpression: T,
                        canManageGuildEvent: S
                    }
                },
                C = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        [i, r] = e instanceof o.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : I(e),
                        u = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        l = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(i, e),
                        _ = t.can(r, e),
                        C = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: u,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: l,
                        canManageAllEvents: _,
                        canManageGuildExpression: e => f(e, C, l, u),
                        canManageGuildEvent: e => f(e, C, _, d)
                    }
                },
                T = e => {
                    let t = (0, u.useStateFromStores)([s.default], () => s.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, l.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("79112"),
                u = n("685665"),
                l = n("929423");
            n("424562");
            var o = n("49111"),
                s = n("397336");

            function a(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: a,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, u.default)(), f = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != d ? d : E), r.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: a,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, a, d, c, E]);
                return f
            }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("197801"),
                l = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        ...o
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, u.SettingsIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("504318"),
                l = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: u,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: u,
                            fill: r
                        })
                    })
                }, u.PencilIcon, void 0, {
                    size: 16
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("424823"),
                l = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, u.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("31745"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: u,
                        foreground: l
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: u,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, u.CirclePlusIcon, void 0, {
                    size: 16
                })
        }
    }
]);