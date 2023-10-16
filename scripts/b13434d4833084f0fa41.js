"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [16501, 96043], {
        735885: (t, e, n) => {
            n.d(e, {
                jN: () => i,
                xf: () => u,
                Ou: () => l
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

            function l() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        494889: (t, e, n) => {
            n.d(e, {
                Z: () => _
            });
            var r = n(873955),
                i = n.n(r),
                u = n(744564),
                l = n(921554),
                o = n(502079);
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
                var r, i, u, l, o, a, f, d, p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (i = null !== (r = e.key) && void 0 !== r ? r : p) && void 0 !== i ? i : "modal",
                    modal: t,
                    animation: null !== (u = e.animation) && void 0 !== u ? u : c.Z.useReducedMotion ? s.fMv.FADE : s.fMv.SLIDE_UP,
                    shouldPersistUnderModals: null !== (l = e.shouldPersistUnderModals) && void 0 !== l && l,
                    props: n,
                    backdropStyle: null !== (o = e.backdropStyle) && void 0 !== o ? o : null,
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
            const _ = {
                push: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.IlC.APP;
                    (0, o.Ll)(p({
                        key: n,
                        modal: f(t, {}, e, n)
                    }, r));
                    u.Z.dispatch({
                        type: "MODAL_PUSH",
                        modal: t,
                        props: e,
                        key: n,
                        appContext: l
                    });
                    return n
                },
                pushLazy: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        u = this,
                        o = (0, l.D)();
                    return null != o && o.isReady() ? (t instanceof Promise ? t.then((function(t) {
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
                    (0, o.GZ)();
                    u.Z.dispatch({
                        type: "MODAL_POP"
                    })
                },
                popWithKey: function(t, e) {
                    (0, o.GZ)(t, e);
                    u.Z.dispatch({
                        type: "MODAL_POP",
                        key: t,
                        onExited: e
                    })
                },
                popAll: function() {
                    (0, o.lE)();
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

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function o(t, e) {
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
                    var n, r = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return o(this, n)
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
                    return e.call(this, t, r, null != r ? u.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.yXt.STATUS,
                        details: "".concat(r)
                    }) : u.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        320142: (t, e, n) => {
            n.d(e, {
                Z: () => o
            });
            var r = n(120415);

            function i(t, e, n, r, i, u, l) {
                try {
                    var o = t[u](l),
                        a = o.value
                } catch (t) {
                    n(t);
                    return
                }
                o.done ? e(a) : Promise.resolve(a).then(r, i)
            }

            function u(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, u) {
                        var l = t.apply(e, n);

                        function o(t) {
                            i(l, r, u, o, a, "next", t)
                        }

                        function a(t) {
                            i(l, r, u, o, a, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var l = function(t, e) {
                var n, r, i, u, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function o(u) {
                    return function(o) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1,
                                    r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            l.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(u);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                u = e.call(t, l)
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
                        }([u, o])
                    }
                }
            };

            function o(t, e) {
                return a.apply(this, arguments)
            }

            function a() {
                return (a = u((function(t, e) {
                    var i, u, o, a;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                0
                                ;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(25066)]).then(n.bind(n, 624501))];
                            case 1:
                                i = l.sent(), u = i.default;
                                if (null != (o = u(t, {
                                        skipExtensionCheck: e,
                                        analyticsLocations: []
                                    }))) o(null);
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
                v_: () => M,
                JS: () => L,
                hH: () => T,
                AB: () => R,
                ZP: () => k,
                oG: () => x,
                kO: () => Z,
                yw: () => D
            });
            var r = n(496486),
                i = n.n(r),
                u = n(940060),
                l = n(382060),
                o = n(664625),
                a = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(973469),
                _ = n(682776),
                v = n(491260),
                y = n(563367),
                E = n(715107),
                h = n(464187),
                I = n(407561),
                m = n(652591),
                b = n(563135),
                O = n(671723);
            var g = n(2590),
                S = n(897196);

            function A(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        A(t, e, n[e])
                    }))
                }
                return t
            }

            function P(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function T(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = o.default.getId(),
                    i = f.ZP.getMember(t, r),
                    u = c.ZP.getChannels(t),
                    l = u[c.sH].length,
                    a = u[c.Zb].length,
                    p = I.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: l + a,
                    guild_num_text_channels: l,
                    guild_num_voice_channels: a,
                    guild_num_roles: P(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = _.Z.getGuildPermissions(e)) && void 0 !== n ? n : b.ZP.NONE),
                    guild_is_vip: e.hasFeature(g.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: P(p)
                }
            }

            function N(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function L(t) {
                if (null == t) return null;
                var e = a.Z.getChannel(t);
                return null == e ? null : M(e)
            }

            function M(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && u.Z.has(e.deny, g.Plq.VIEW_CHANNEL)
                    };
                    n = l.Ec.has(t.type) && null != t.parent_id ? i(a.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = _.Z.getChannelPermissions(t)) && void 0 !== e ? e : b.ZP.NONE),
                    channel_hidden: n
                }
            }

            function R(t) {
                if (null == t) return null;
                var e = a.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = y.Z.getMediaSessionId();
                return C({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, Z(e.getGuildId(), e.id, r), {
                    game_name: null != (n = O.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function w(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function D(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!m.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== g.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? h.Z.getGuildId() : null,
                        u = "channel_id" in e ? e.channel_id : r ? E.Z.getChannelId(i) : null,
                        l = a.Z.getChannel(u),
                        o = w(l, i),
                        c = C({}, e, T(o), null != i && null != u && (0, S.AB)(u) ? N(0, u) : M(l));
                    m.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function Z(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(I.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== o.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function x(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(I.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != v.Z.findActivity(t.userId, (function(t) {
                        return t.type === g.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const k = {
                trackWithMetadata: D,
                getVoiceStateMetadata: Z
            }
        },
        985774: (t, e, n) => {
            n.d(e, {
                U: () => u,
                q: () => l
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

            function l(t, e) {
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
                Kh: () => l,
                yh: () => o
            });
            var r = n(260561),
                i = (0, r.B)({
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
                }),
                u = (0, r.B)({
                    kind: "user",
                    id: "2023-08_explicit_media_redaction_teen",
                    label: "Explicit Media Redaction for Teens",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable explicit media redaction for teens",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function l() {
                var t = i.getCurrentConfig({
                        location: "686da2_1"
                    }, {
                        autoTrackExposure: !0
                    }).enabled,
                    e = u.getCurrentConfig({
                        location: "686da2_1"
                    }, {
                        autoTrackExposure: !0
                    }).enabled;
                return t || e
            }

            function o() {
                var t = i.useExperiment({
                        location: "686da2_2"
                    }, {
                        autoTrackExposure: !0
                    }).enabled,
                    e = u.useExperiment({
                        location: "686da2_2"
                    }, {
                        autoTrackExposure: !0
                    }).enabled;
                return t || e
            }
        },
        392354: (t, e, n) => {
            n.d(e, {
                lJ: () => m,
                Yy: () => b,
                l4: () => E,
                Tw: () => A,
                KP: () => S,
                oh: () => C,
                yZ: () => y,
                HH: () => I,
                qx: () => g,
                aP: () => P,
                zj: () => O
            });
            var r = n(418705),
                i = n(988135),
                u = n(473903),
                l = n(968449),
                o = n(61209),
                a = n(840922),
                c = n(652591),
                s = n(661123),
                f = n(279008),
                d = n(2590),
                p = n(757225);
            n(473708);

            function _(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var v = function() {
                    var t = u.default.getCurrentUser();
                    return !1 === (null == t ? void 0 : t.nsfwAllowed) ? r.Q4.BLUR : r.Q4.SHOW
                },
                y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!t) return v();
                    var n = l.UP.getSetting();
                    return e ? n === p.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : v() : n === p.TI.NON_FRIENDS || n === p.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : v()
                },
                E = function() {
                    var t = l.Sh.getSetting();
                    return {
                        explicitContentGuilds: t.explicitContentGuilds === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y() : t.explicitContentGuilds,
                        explicitContentNonFriendDm: t.explicitContentNonFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y(!0) : t.explicitContentNonFriendDm,
                        explicitContentFriendDm: t.explicitContentFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y(!0, !0) : t.explicitContentFriendDm
                    }
                };

            function h(t) {
                return t === r.Q4.BLUR || t === r.Q4.BLOCK
            }

            function I(t) {
                if (!(0, f.Kh)()) return !1;
                if (null == u.default.getCurrentUser()) return !1;
                var e = E(),
                    n = e.explicitContentGuilds,
                    r = e.explicitContentFriendDm,
                    i = e.explicitContentNonFriendDm,
                    l = o.Z.getChannel(t.channel_id);
                return null != l && (l.isDM() || l.isGroupDM() ? a.Z.getFriendIDs().includes(t.author.id) ? h(r) : h(i) : h(n))
            }
            var m, b, O = function(t) {
                var e = E();
                l.Sh.updateSetting(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            _(t, e, n[e])
                        }))
                    }
                    return t
                }({}, e, t))
            };

            function g() {
                return !!(0, f.Kh)() && (null != u.default.getCurrentUser() && h(E().explicitContentGuilds))
            }! function(t) {
                t[t.Attachment = 0] = "Attachment";
                t[t.Embed = 1] = "Embed"
            }(m || (m = {}));

            function S(t, e) {
                if (!e) return !1;
                if (i.ZP.get("obscure_blur_effect_enabled")) return !0;
                switch (t.type) {
                    case m.Embed:
                        var n;
                        return (0, s.yE)(null !== (n = t.media.flags) && void 0 !== n ? n : 0, d.xPJ.CONTAINS_EXPLICIT_MEDIA);
                    case m.Attachment:
                        var r;
                        return (0, s.yE)(null !== (r = t.media.flags) && void 0 !== r ? r : 0, d.J0y.CONTAINS_EXPLICIT_MEDIA);
                    default:
                        return !1
                }
            }

            function A(t) {
                var e = I(t);
                return {
                    obscuredAttachments: t.attachments.filter((function(t) {
                        return S({
                            type: m.Attachment,
                            media: t
                        }, e)
                    })),
                    obscuredEmbeds: t.embeds.filter((function(t) {
                        return S({
                            type: m.Embed,
                            media: t
                        }, e)
                    }))
                }
            }

            function C(t) {
                return !i.ZP.get("explicit_media_redaction_ignore_pending_scan") && null == t
            }! function(t) {
                t.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed";
                t.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings";
                t.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more";
                t.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss";
                t.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive";
                t.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed";
                t.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm";
                t.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel"
            }(b || (b = {}));

            function P(t) {
                var e = t.action,
                    n = t.channelId,
                    r = t.messageId;
                if (null != n && null != r) {
                    var i, l = o.Z.getChannel(n);
                    c.default.track(d.rMx.EXPLICIT_MEDIA_ACTION, {
                        action: e,
                        guild_id: null == l ? void 0 : l.guild_id,
                        channel_id: n,
                        message_id: r,
                        user_is_underage: !1 === (null === (i = u.default.getCurrentUser()) || void 0 === i ? void 0 : i.nsfwAllowed)
                    })
                }
            }
        },
        491260: (t, e, n) => {
            n.d(e, {
                Z: () => G
            });
            var r = n(110251),
                i = n.n(r),
                u = n(496486),
                l = n.n(u),
                o = n(202351),
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

            function _(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function y(t) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return y(t)
            }

            function E(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }

            function I(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, u = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(t); !(l = (r = n.next()).done); l = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (t) {
                            o = !0;
                            i = t
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return u
                    }
                }(t, e) || O(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || O(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function g(t) {
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
                    var n, r = y(t);
                    if (e) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var S = Object.freeze([]),
                A = {},
                C = {},
                P = {},
                T = {},
                N = {};

            function L(t, e) {
                var n = A[t];
                return null != n ? n[e] : null
            }
            var M = function(t) {
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
            var R = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function w(t, e) {
                return function(t, e) {
                    return M(e) - M(t)
                }(t, e) || function(t, e) {
                    return R(e) - R(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function D(t) {
                delete C[t];
                delete P[t];
                delete T[t];
                if (null != A[t]) {
                    var e = I(l().sortBy(A[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        C[t] = n.status;
                        P[t] = n.activities;
                        null != n.clientStatus && (T[t] = n.clientStatus)
                    } else l().every(A[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete A[t]
                }
            }

            function Z(t) {
                var e = A[t];
                if (null != e) {
                    var n = l().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        C[t] = n.status;
                        P[t] = n.activities;
                        null != n.clientStatus && (T[t] = n.clientStatus)
                    }
                }
            }

            function x(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    u = t.clientStatus,
                    l = t.activities;
                if (n === s.default.getId()) return !1;
                var o = A[n];
                if (null == o) {
                    if (r === d.Skl.OFFLINE) return !1;
                    o = A[n] = {}
                }
                if (r === d.Skl.OFFLINE) o[e] = {
                    status: r,
                    clientStatus: u,
                    activities: S,
                    timestamp: Date.now()
                };
                else {
                    var a = l.length > 1 ? m(l).sort(w) : l,
                        c = o[e];
                    l = null != c && i()(c.activities, a) ? c.activities : a;
                    o[e] = {
                        status: r,
                        clientStatus: u,
                        activities: l,
                        timestamp: Date.now()
                    }
                }
                delete N[n];
                D(n);
                return !0
            }

            function k(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    u = t.activities,
                    l = t.timestamp;
                if (n !== s.default.getId()) {
                    var o = A[n];
                    if (null == o) {
                        if (r === d.Skl.OFFLINE) return;
                        o = A[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) o[e] = {
                        status: r,
                        clientStatus: i,
                        activities: S,
                        timestamp: Date.now()
                    };
                    else {
                        var a = u.length > 1 ? m(u).sort(w) : u;
                        o[e] = {
                            status: r,
                            clientStatus: i,
                            activities: a,
                            timestamp: l
                        }
                    }
                }
            }

            function j(t, e) {
                if (e === s.default.getId()) return !1;
                var n = A[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete A[e];
                D(e)
            }

            function F(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, u = Object.keys(A)[Symbol.iterator](); !(e = (i = u.next()).done); e = !0) {
                        j(t, i.value)
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
            var U = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(t, e)
                }(n, t);
                var e = g(n);

                function n() {
                    _(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    C[s.default.getId()] = t;
                    P[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = C[t]) && void 0 !== i ? i : n
                    }
                    var u, l = L(t, e);
                    return null !== (u = null == l ? void 0 : l.status) && void 0 !== u ? u : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = P[t]) && void 0 !== n ? n : S
                    }
                    var r = L(t, e);
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
                        for (var u, l = Object.keys(P)[Symbol.iterator](); !(n = (u = l.next()).done); n = !0) {
                            var o = u.value,
                                a = P[o],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = a[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var _ = d.value;
                                    _.application_id === t && e.push({
                                        userId: o,
                                        activity: _
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
                            n || null == l.return || l.return()
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
                    return Object.keys(P)
                };
                r.isMobileOnline = function(t) {
                    var e = T[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: A,
                        statuses: C,
                        activities: P,
                        activityMetadata: N,
                        clientStatuses: T
                    }
                };
                return n
            }(o.ZP.Store);
            U.displayName = "PresenceStore";
            const G = new U(a.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    A = {};
                    N = {};
                    C = v({}, r, C[r]);
                    P = v({}, r, P[r]);
                    T = v({}, r, {});
                    var i = new Set,
                        u = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                l = e.clientStatus,
                                o = e.activities;
                            k({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: l,
                                activities: o,
                                timestamp: u
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            l = t.activities;
                        if (null != e) {
                            k({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: l,
                                timestamp: u
                            });
                            i.add(e.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(Z)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    A = e.presencesForGuilds;
                    C = e.statuses;
                    P = e.activities;
                    N = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        x({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: u
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    F(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return j(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        return x({
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
                    F(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && x({
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
                        null != t.presence && x({
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
                        null != t.presence && x({
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
                    if (C[e] === t.status && P[e] === t.activities) return !1;
                    C[e] = t.status;
                    P[e] = t.activities;
                    delete N[e]
                }
            })
        },
        443812: (t, e, n) => {
            n.d(e, {
                hQ: () => l,
                Dt: () => o,
                FG: () => a
            });
            var r = n(873955),
                i = n.n(r),
                u = n(989824),
                l = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(t)
                },
                o = function() {
                    return (0, u.Z)((function() {
                        return l()
                    }))
                },
                a = function(t) {
                    return (0, t.children)(o())
                }
        },
        939198: (t, e, n) => {
            n.d(e, {
                mT: () => i,
                Jj: () => u,
                OF: () => l,
                hV: () => r,
                WW: () => o
            });
            var r, i = 550,
                u = 350,
                l = 40;
            ! function(t) {
                t.STATIC = "STATIC";
                t.RESPONSIVE = "RESPONSIVE";
                t.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var o = 20
        },
        786170: (t, e, n) => {
            n.d(e, {
                Z: () => _
            });
            var r = n(785893),
                i = n(667294),
                u = n(809784),
                l = n(202351),
                o = n(316878),
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
                        _ && (null == I || null === (t = I.current) || void 0 === t || t.play())
                    },
                    n = function() {
                        var t;
                        _ && (null == I || null === (t = I.current) || void 0 === t || t.pause())
                    },
                    c = function() {
                        return {
                            maxWidth: E.width,
                            maxHeight: E.height,
                            width: "100%",
                            height: "100%"
                        }
                    },
                    f = t.externalRef,
                    p = t.autoPlay,
                    _ = t.playOnHover,
                    v = t.responsive,
                    y = t.mediaLayoutType,
                    E = d(t, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
                    h = !(0, l.e7)([o.Z], (function() {
                        return o.Z.useReducedMotion
                    })) && !_ && p,
                    I = i.useRef(null);
                i.useLayoutEffect((function() {
                    return function() {
                        var t = I.current;
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
                        f(I.current)
                    } else null != f && (f.current = I.current);
                    return function() {
                        "function" == typeof f ? f(null) : null != f && (f.current = null)
                    }
                }), [f, I]);
                return (0, r.jsx)("video", s({
                    ref: I,
                    autoPlay: h,
                    onMouseEnter: e,
                    onMouseLeave: n,
                    onFocus: e,
                    onBlur: n,
                    style: y === a.hV.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : v ? c() : {}
                }, E))
            };
            const _ = i.forwardRef((function(t, e) {
                return (0, r.jsx)(p, f(s({}, t), {
                    externalRef: e
                }))
            }))
        }
    }
]);