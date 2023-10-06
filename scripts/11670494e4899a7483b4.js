"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [59852, 96043], {
        735885: (t, e, n) => {
            n.d(e, {
                jN: () => i,
                xf: () => u,
                Ou: () => o
            });
            var r = n(744564);

            function i(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        494889: (t, e, n) => {
            n.d(e, {
                Z: () => v
            });
            var r = n(873955),
                i = n.n(r),
                u = n(744564),
                o = n(921554),
                l = n(502079);
            const a = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.queue = []
                }
                var e = t.prototype;
                e.enqueue = function(t) {
                    this.queue.push(t)
                };
                e.flush = function() {
                    for (; this.queue.length > 0;) {
                        var t;
                        null === (t = this.queue.shift()) || void 0 === t || t()
                    }
                };
                return t
            }());
            var c = n(316878),
                s = n(2590);

            function f(t, e, n) {
                var r, i, u, o, l, a, f, d, p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (i = null !== (r = e.key) && void 0 !== r ? r : p) && void 0 !== i ? i : "modal",
                    modal: t,
                    animation: null !== (u = e.animation) && void 0 !== u ? u : c.Z.useReducedMotion ? s.fMv.FADE : s.fMv.SLIDE_UP,
                    shouldPersistUnderModals: null !== (o = e.shouldPersistUnderModals) && void 0 !== o && o,
                    props: n,
                    backdropStyle: null !== (l = e.backdropStyle) && void 0 !== l ? l : null,
                    backdropInstant: null !== (a = e.backdropInstant) && void 0 !== a && a,
                    disableAnimation: null !== (f = e.disableAnimation) && void 0 !== f && f,
                    closable: "boolean" != typeof e.closable || e.closable,
                    label: null !== (d = e.label) && void 0 !== d ? d : "",
                    callbacks: {}
                }
            }

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        d(t, e, n[e])
                    }))
                }
                return t
            }
            const v = {
                push: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.IlC.APP;
                    (0, l.Ll)(p({
                        key: n,
                        modal: f(t, {}, e, n)
                    }, r));
                    u.Z.dispatch({
                        type: "MODAL_PUSH",
                        modal: t,
                        props: e,
                        key: n,
                        appContext: o
                    });
                    return n
                },
                pushLazy: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        u = this,
                        l = (0, o.D)();
                    return null != l && l.isReady() ? (t instanceof Promise ? t.then((function(t) {
                        return t.default
                    })) : t()).then((function(t) {
                        return u.push(t, e, n, r)
                    })) : new Promise((function(i) {
                        return a.enqueue((function() {
                            return i(u.pushLazy(t, e, n, r))
                        }))
                    }))
                },
                updateAnimation: function(t, e) {
                    u.Z.dispatch({
                        type: "MODAL_UPDATE",
                        key: t,
                        props: {},
                        partial: !0,
                        animation: e
                    })
                },
                pop: function() {
                    (0, l.GZ)();
                    u.Z.dispatch({
                        type: "MODAL_POP"
                    })
                },
                popWithKey: function(t, e) {
                    (0, l.GZ)(t, e);
                    u.Z.dispatch({
                        type: "MODAL_POP",
                        key: t,
                        onExited: e
                    })
                },
                popAll: function() {
                    (0, l.lE)();
                    u.Z.dispatch({
                        type: "MODAL_POP_ALL"
                    });
                    u.Z.dispatch({
                        type: "CHANNEL_SETTINGS_CLOSE"
                    });
                    u.Z.dispatch({
                        type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                    });
                    u.Z.dispatch({
                        type: "GUILD_SETTINGS_CLOSE"
                    });
                    u.Z.dispatch({
                        type: "HIDE_ACTION_SHEET"
                    });
                    u.Z.dispatch({
                        type: "DISPLAYED_INVITE_CLEAR"
                    });
                    u.Z.dispatch({
                        type: "DRAWER_CLOSE",
                        animated: !0
                    });
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    });
                    u.Z.dispatch({
                        type: "QUICKSWITCHER_HIDE"
                    });
                    u.Z.dispatch({
                        type: "MENTION_MODAL_CLOSE"
                    });
                    u.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    u.Z.dispatch({
                        type: "SEARCH_MODAL_CLOSE"
                    });
                    u.Z.dispatch({
                        type: "CONNECTIONS_GRID_MODAL_HIDE"
                    })
                }
            }
        },
        973889: (t, e, n) => {
            n.d(e, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                u = n(473708);

            function o(t) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return o(t)
            }

            function l(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function a(t, e) {
                a = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return a(t, e)
            }
            var c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = o(t);
                    if (e) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && a(t, e)
                }(n, t);
                var e = s(n);

                function n(t, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return e.call(this, t, r, u.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        320142: (t, e, n) => {
            n.d(e, {
                Z: () => l
            });
            var r = n(120415);

            function i(t, e, n, r, i, u, o) {
                try {
                    var l = t[u](o),
                        a = l.value
                } catch (t) {
                    n(t);
                    return
                }
                l.done ? e(a) : Promise.resolve(a).then(r, i)
            }

            function u(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, u) {
                        var o = t.apply(e, n);

                        function l(t) {
                            i(o, r, u, l, a, "next", t)
                        }

                        function a(t) {
                            i(o, r, u, l, a, "throw", t)
                        }
                        l(void 0)
                    }))
                }
            }
            var o = function(t, e) {
                var n, r, i, u, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function l(u) {
                    return function(l) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            o.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(u);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                u = e.call(t, o)
                            } catch (t) {
                                u = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, l])
                    }
                }
            };

            function l(t, e) {
                return a.apply(this, arguments)
            }

            function a() {
                return (a = u((function(t, e) {
                    var i, u, l, a;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                i = o.sent(),
                                    u = i.default;
                                if (null != (l = u(t, {
                                        skipExtensionCheck: e,
                                        analyticsLocations: []
                                    }))) l(null);
                                else if (r.FB) window.open(t);
                                else {
                                    (a = document.createElement("a")).href = t;
                                    a.target = "_blank";
                                    a.rel = "noreferrer noopener";
                                    a.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        83797: (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            var r = n(2590);

            function i(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            n.d(e, {
                v_: () => L,
                JS: () => w,
                hH: () => C,
                AB: () => D,
                ZP: () => k,
                oG: () => j,
                kO: () => M,
                yw: () => R
            });
            var r = n(496486),
                i = n.n(r),
                u = n(940060),
                o = n(382060),
                l = n(664625),
                a = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(964517),
                v = n(682776),
                y = n(491260),
                h = n(563367),
                _ = n(715107),
                E = n(464187),
                b = n(407561),
                m = n(652591),
                O = n(563135),
                g = n(671723);
            var I = n(2590),
                S = n(897196);

            function P(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function A(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        P(t, e, n[e])
                    }))
                }
                return t
            }

            function T(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function C(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = l.default.getId(),
                    i = f.ZP.getMember(t, r),
                    u = c.ZP.getChannels(t),
                    o = u[c.sH].length,
                    a = u[c.Zb].length,
                    p = b.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: o + a,
                    guild_num_text_channels: o,
                    guild_num_voice_channels: a,
                    guild_num_roles: T(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = v.Z.getGuildPermissions(e)) && void 0 !== n ? n : O.ZP.NONE),
                    guild_is_vip: e.hasFeature(I.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: T(p)
                }
            }

            function N(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function w(t) {
                if (null == t) return null;
                var e = a.Z.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && u.Z.has(e.deny, I.Plq.VIEW_CHANNEL)
                    };
                    n = o.Ec.has(t.type) && null != t.parent_id ? i(a.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = v.Z.getChannelPermissions(t)) && void 0 !== e ? e : O.ZP.NONE),
                    channel_hidden: n
                }
            }

            function D(t) {
                if (null == t) return null;
                var e = a.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = h.Z.getMediaSessionId();
                return A({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, M(e.getGuildId(), e.id, r), {
                    game_name: null != (n = g.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function Z(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function R(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!m.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== I.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? E.Z.getGuildId() : null,
                        u = "channel_id" in e ? e.channel_id : r ? _.Z.getChannelId(i) : null,
                        o = a.Z.getChannel(u),
                        l = Z(o, i),
                        c = A({}, e, C(l), null != i && null != u && (0, S.AB)(u) ? N(0, u) : L(o));
                    m.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function M(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(b.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== l.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function j(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(b.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != y.Z.findActivity(t.userId, (function(t) {
                        return t.type === I.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const k = {
                trackWithMetadata: R,
                getVoiceStateMetadata: M
            }
        },
        985774: (t, e, n) => {
            n.d(e, {
                U: () => u,
                q: () => o
            });
            var r = n(281110),
                i = n(2590);

            function u(t, e, n, u) {
                return r.ZP.post({
                    url: i.ANM.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: t,
                        message_id: e,
                        attachment_ids: n,
                        embed_ids: u
                    }
                })
            }

            function o(t, e) {
                return r.ZP.put({
                    url: i.ANM.EXPLICIT_MEDIA_SCAN_MESSAGES(t),
                    body: {
                        message_ids: e
                    }
                })
            }
        },
        279008: (t, e, n) => {
            n.d(e, {
                Kh: () => i,
                yh: () => u
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_explicit_media_redaction",
                label: "Explicit Media Redaction",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable explicit media redaction",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function i() {
                return r.getCurrentConfig({
                    location: "686da2_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function u() {
                return r.useExperiment({
                    location: "686da2_2"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        174333: (t, e, n) => {
            n.d(e, {
                yZ: () => y,
                l4: () => h,
                HH: () => E,
                zj: () => m,
                qx: () => O,
                lJ: () => b,
                KP: () => g,
                Tw: () => I,
                oh: () => S
            });
            var r = n(418705),
                i = n(988135),
                u = n(968449),
                o = n(61209),
                l = n(840922),
                a = n(473903),
                c = n(661123),
                s = n(279008),
                f = n(2590),
                d = n(757225);
            n(473708);

            function p(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var v = function() {
                    var t = a.default.getCurrentUser();
                    return !1 === (null == t ? void 0 : t.nsfwAllowed) ? r.Q4.BLUR : r.Q4.SHOW
                },
                y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!t) return v();
                    var n = u.UP.getSetting();
                    return e ? n === d.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : v() : n === d.TI.NON_FRIENDS || n === d.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : v()
                },
                h = function() {
                    var t = u.Sh.getSetting();
                    return {
                        explicitContentGuilds: t.explicitContentGuilds === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y() : t.explicitContentGuilds,
                        explicitContentNonFriendDm: t.explicitContentNonFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y(!0) : t.explicitContentNonFriendDm,
                        explicitContentFriendDm: t.explicitContentFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y(!0, !0) : t.explicitContentFriendDm
                    }
                };

            function _(t) {
                return t === r.Q4.BLUR
            }

            function E(t) {
                if (!(0, s.Kh)()) return !1;
                if (null == a.default.getCurrentUser()) return !1;
                var e = h(),
                    n = e.explicitContentGuilds,
                    r = e.explicitContentFriendDm,
                    i = e.explicitContentNonFriendDm,
                    u = o.Z.getChannel(t.channel_id);
                return null != u && (u.isDM() || u.isGroupDM() ? l.Z.getFriendIDs().includes(t.author.id) ? _(r) : _(i) : _(n))
            }
            var b, m = function(t) {
                var e = h();
                u.Sh.updateSetting(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            p(t, e, n[e])
                        }))
                    }
                    return t
                }({}, e, t))
            };

            function O() {
                return !!(0, s.Kh)() && (null != a.default.getCurrentUser() && _(h().explicitContentGuilds))
            }! function(t) {
                t[t.Attachment = 0] = "Attachment";
                t[t.Embed = 1] = "Embed"
            }(b || (b = {}));

            function g(t, e) {
                if (!e) return !1;
                if (i.ZP.get("obscure_blur_effect_enabled")) return !0;
                switch (t.type) {
                    case b.Embed:
                        var n;
                        return (0, c.yE)(null !== (n = t.media.flags) && void 0 !== n ? n : 0, f.xPJ.CONTAINS_EXPLICIT_MEDIA);
                    case b.Attachment:
                        var r;
                        return (0, c.yE)(null !== (r = t.media.flags) && void 0 !== r ? r : 0, f.J0y.CONTAINS_EXPLICIT_MEDIA);
                    default:
                        return !1
                }
            }

            function I(t) {
                var e = E(t);
                return {
                    obscuredAttachments: t.attachments.filter((function(t) {
                        return g({
                            type: b.Attachment,
                            media: t
                        }, e)
                    })),
                    obscuredEmbeds: t.embeds.filter((function(t) {
                        return g({
                            type: b.Embed,
                            media: t
                        }, e)
                    }))
                }
            }

            function S(t) {
                return !i.ZP.get("explicit_media_redaction_ignore_pending_scan") && null == t
            }
        },
        502079: (t, e, n) => {
            n.d(e, {
                k4: () => i,
                fA: () => u,
                vp: () => o,
                Bj: () => l,
                H: () => a,
                Ll: () => c,
                GZ: () => s,
                lE: () => f,
                EV: () => d
            });

            function r(t) {
                throw t
            }

            function i(t) {
                t = null !== t ? t : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function u(t, e) {
                return !1
            }

            function o(t) {
                return !1
            }

            function l() {
                return !1
            }

            function a() {
                return !1
            }

            function c(t) {
                t = null !== t ? t : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function s(t, e) {
                return !1
            }

            function f() {
                return !1
            }

            function d(t) {
                return !1
            }
        },
        491260: (t, e, n) => {
            n.d(e, {
                Z: () => G
            });
            var r = n(110251),
                i = n.n(r),
                u = n(496486),
                o = n.n(u),
                l = n(202351),
                a = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function h(t) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return h(t)
            }

            function _(t, e) {
                return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function E(t, e) {
                E = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return E(t, e)
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, u = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(o = (r = n.next()).done); o = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            i = t
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return u
                    }
                }(t, e) || g(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || g(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function g(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function I(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(t);
                    if (e) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var S = Object.freeze([]),
                P = {},
                A = {},
                T = {},
                C = {},
                N = {};

            function w(t, e) {
                var n = P[t];
                return null != n ? n[e] : null
            }
            var L = function(t) {
                switch (t.type) {
                    case d.IIU.CUSTOM_STATUS:
                        return 4;
                    case d.IIU.COMPETING:
                        return 3;
                    case d.IIU.STREAMING:
                        return 2;
                    case d.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var D = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function Z(t, e) {
                return function(t, e) {
                    return L(e) - L(t)
                }(t, e) || function(t, e) {
                    return D(e) - D(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function R(t) {
                delete A[t];
                delete T[t];
                delete C[t];
                if (null != P[t]) {
                    var e = b(o().sortBy(P[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[t] = n.status;
                        T[t] = n.activities;
                        null != n.clientStatus && (C[t] = n.clientStatus)
                    } else o().every(P[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete P[t]
                }
            }

            function M(t) {
                var e = P[t];
                if (null != e) {
                    var n = o().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[t] = n.status;
                        T[t] = n.activities;
                        null != n.clientStatus && (C[t] = n.clientStatus)
                    }
                }
            }

            function j(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    u = t.clientStatus,
                    o = t.activities;
                if (n === s.default.getId()) return !1;
                var l = P[n];
                if (null == l) {
                    if (r === d.Skl.OFFLINE) return !1;
                    l = P[n] = {}
                }
                if (r === d.Skl.OFFLINE) l[e] = {
                    status: r,
                    clientStatus: u,
                    activities: S,
                    timestamp: Date.now()
                };
                else {
                    var a = o.length > 1 ? m(o).sort(Z) : o,
                        c = l[e];
                    o = null != c && i()(c.activities, a) ? c.activities : a;
                    l[e] = {
                        status: r,
                        clientStatus: u,
                        activities: o,
                        timestamp: Date.now()
                    }
                }
                delete N[n];
                R(n);
                return !0
            }

            function k(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    u = t.activities,
                    o = t.timestamp;
                if (n !== s.default.getId()) {
                    var l = P[n];
                    if (null == l) {
                        if (r === d.Skl.OFFLINE) return;
                        l = P[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) l[e] = {
                        status: r,
                        clientStatus: i,
                        activities: S,
                        timestamp: Date.now()
                    };
                    else {
                        var a = u.length > 1 ? m(u).sort(Z) : u;
                        l[e] = {
                            status: r,
                            clientStatus: i,
                            activities: a,
                            timestamp: o
                        }
                    }
                }
            }

            function x(t, e) {
                if (e === s.default.getId()) return !1;
                var n = P[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete P[e];
                R(e)
            }

            function U(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, u = Object.keys(P)[Symbol.iterator](); !(e = (i = u.next()).done); e = !0) {
                        x(t, i.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == u.return || u.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var F = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && E(t, e)
                }(n, t);
                var e = I(n);

                function n() {
                    v(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    A[s.default.getId()] = t;
                    T[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = A[t]) && void 0 !== i ? i : n
                    }
                    var u, o = w(t, e);
                    return null !== (u = null == o ? void 0 : o.status) && void 0 !== u ? u : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = T[t]) && void 0 !== n ? n : S
                    }
                    var r = w(t, e);
                    return null == r || null == r.activities ? S : r.activities
                };
                r.getPrimaryActivity = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e);
                    return n[0]
                };
                r.getAllApplicationActivities = function(t) {
                    var e = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var u, o = Object.keys(T)[Symbol.iterator](); !(n = (u = o.next()).done); n = !0) {
                            var l = u.value,
                                a = T[l],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = a[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var v = d.value;
                                    v.application_id === t && e.push({
                                        userId: l,
                                        activity: v
                                    })
                                }
                            } catch (t) {
                                s = !0;
                                f = t
                            } finally {
                                try {
                                    c || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                };
                r.getApplicationActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, (function(t) {
                        return t.application_id === e
                    }), n)
                };
                r.findActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, n).find(e)
                };
                r.getActivityMetadata = function(t) {
                    return N[t]
                };
                r.getUserIds = function() {
                    return Object.keys(T)
                };
                r.isMobileOnline = function(t) {
                    var e = C[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: P,
                        statuses: A,
                        activities: T,
                        activityMetadata: N,
                        clientStatuses: C
                    }
                };
                return n
            }(l.ZP.Store);
            F.displayName = "PresenceStore";
            const G = new F(a.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    P = {};
                    N = {};
                    A = y({}, r, A[r]);
                    T = y({}, r, T[r]);
                    C = y({}, r, {});
                    var i = new Set,
                        u = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                o = e.clientStatus,
                                l = e.activities;
                            k({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: o,
                                activities: l,
                                timestamp: u
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            o = t.activities;
                        if (null != e) {
                            k({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: o,
                                timestamp: u
                            });
                            i.add(e.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(M)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    P = e.presencesForGuilds;
                    A = e.statuses;
                    T = e.activities;
                    N = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        j({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: u
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    U(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return x(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        return j({
                            guildId: null != e ? e : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: u
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    U(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && j({
                            guildId: d.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    N[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && j({
                            guildId: e,
                            userId: t.user_id,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.addedMembers;
                    null == n || n.forEach((function(t) {
                        null != t.presence && j({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    var e = s.default.getId();
                    if (A[e] === t.status && T[e] === t.activities) return !1;
                    A[e] = t.status;
                    T[e] = t.activities;
                    delete N[e]
                }
            })
        },
        443812: (t, e, n) => {
            n.d(e, {
                hQ: () => o,
                Dt: () => l,
                FG: () => a
            });
            var r = n(873955),
                i = n.n(r),
                u = n(989824),
                o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(t)
                },
                l = function() {
                    return (0, u.Z)((function() {
                        return o()
                    }))
                },
                a = function(t) {
                    return (0, t.children)(l())
                }
        },
        939198: (t, e, n) => {
            n.d(e, {
                mT: () => i,
                Jj: () => u,
                OF: () => o,
                hV: () => r,
                WW: () => l
            });
            var r, i = 550,
                u = 350,
                o = 40;
            ! function(t) {
                t.STATIC = "STATIC";
                t.RESPONSIVE = "RESPONSIVE";
                t.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var l = 20
        },
        786170: (t, e, n) => {
            n.d(e, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                u = n(809784),
                o = n(202351),
                l = n(316878),
                a = n(939198);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        c(t, e, n[e])
                    }))
                }
                return t
            }

            function f(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function d(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        u = Object.keys(t);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            var p = function(t) {
                var e = function() {
                        var t;
                        v && (null == b || null === (t = b.current) || void 0 === t || t.play())
                    },
                    n = function() {
                        var t;
                        v && (null == b || null === (t = b.current) || void 0 === t || t.pause())
                    },
                    c = function() {
                        return {
                            maxWidth: _.width,
                            maxHeight: _.height,
                            width: "100%",
                            height: "100%"
                        }
                    },
                    f = t.externalRef,
                    p = t.autoPlay,
                    v = t.playOnHover,
                    y = t.responsive,
                    h = t.mediaLayoutType,
                    _ = d(t, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
                    E = !(0, o.e7)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    })) && !v && p,
                    b = i.useRef(null);
                i.useLayoutEffect((function() {
                    return function() {
                        var t = b.current;
                        null != t && function(t) {
                            t.removeAttribute("src");
                            Array.from(t.children).forEach((function(t) {
                                if ((0, u.k)(t, HTMLSourceElement)) {
                                    t.removeAttribute("src");
                                    t.removeAttribute("type")
                                }(0, u.k)(t, HTMLImageElement) && t.removeAttribute("src")
                            }));
                            try {
                                t.load()
                            } catch (t) {}
                        }(t)
                    }
                }), []);
                i.useLayoutEffect((function() {
                    if ("function" == typeof f) {
                        f(null);
                        f(b.current)
                    } else null != f && (f.current = b.current);
                    return function() {
                        "function" == typeof f ? f(null) : null != f && (f.current = null)
                    }
                }), [f, b]);
                return (0, r.jsx)("video", s({
                    ref: b,
                    autoPlay: E,
                    onMouseEnter: e,
                    onMouseLeave: n,
                    onFocus: e,
                    onBlur: n,
                    style: h === a.hV.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : y ? c() : {}
                }, _))
            };
            const v = i.forwardRef((function(t, e) {
                return (0, r.jsx)(p, f(s({}, t), {
                    externalRef: e
                }))
            }))
        }
    }
]);