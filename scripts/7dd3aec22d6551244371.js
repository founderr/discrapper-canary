"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79913], {
        579344: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(571657),
                i = n(72190),
                o = n(281110),
                u = n(744564),
                a = n(53645),
                l = n(296602),
                s = n(652591),
                c = n(391438),
                f = n(2590);

            function d(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            d(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            d(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var g = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                v = new l.Z("ConnectedAccounts");

            function O(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return o.ZP.post({
                    url: f.ANM.CONNECTIONS_CALLBACK(e),
                    body: h(p({}, t), {
                        insecure: n,
                        friend_sync: f.BFP.has(e)
                    }),
                    oldFormErrors: !0
                })
            }
            const y = {
                fetch: function() {
                    return o.ZP.get({
                        url: f.ANM.CONNECTIONS,
                        oldFormErrors: !0
                    }).then((function(e) {
                        return u.Z.dispatch({
                            type: "USER_CONNECTIONS_UPDATE",
                            local: !0,
                            accounts: e.body
                        })
                    }), (function() {
                        return u.Z.dispatch({
                            type: "USER_CONNECTIONS_UPDATE",
                            local: !0,
                            accounts: []
                        })
                    }))
                },
                authorize: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.location,
                        u = n.twoWayLinkType,
                        a = n.userCode;
                    s.default.track(f.rMx.CONNECTED_ACCOUNT_INITIATED, {
                        platform_type: e,
                        location: r
                    });
                    t = u === i.g.DEVICE_CODE && null != a ? f.ANM.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, a) : null != u ? f.ANM.CONNECTIONS_AUTHORIZE_LINK(e, u) : f.ANM.CONNECTIONS_AUTHORIZE(e);
                    return o.ZP.get({
                        url: t,
                        oldFormErrors: !0
                    })
                },
                callback: O,
                connect: function(e, t, n, i, o) {
                    var u;
                    return c.Z.put({
                        url: f.ANM.CONNECTION(e, t),
                        body: {
                            name: n,
                            friend_sync: null !== (u = null == o ? void 0 : o.friend_sync) && void 0 !== u ? u : f.BFP.has(e)
                        },
                        context: {
                            location: i
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_CONNECTIONS_UPDATE,
                            properties: {
                                name: n,
                                friend_sync: f.BFP.has(e)
                            }
                        }
                    })
                },
                disconnect: function(e, t) {
                    return o.ZP.delete({
                        url: f.ANM.CONNECTION(e, t),
                        oldFormErrors: !0
                    })
                },
                refresh: function(e, t) {
                    return o.ZP.post({
                        url: f.ANM.CONNECTION_REFRESH(e, t),
                        oldFormErrors: !0
                    })
                },
                submitPinCode: function(e, t) {
                    return o.ZP.get({
                        url: f.ANM.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
                        oldFormErrors: !0
                    }).then((function(e) {
                        var n = e.body;
                        s.default.track(f.rMx.ACCOUNT_LINK_STEP, {
                            previous_step: "PIN code entry",
                            current_step: "PIN success",
                            session_id: n.state,
                            platform_type: t
                        });
                        return O(t, h(p({}, n), {
                            from_continuation: !0
                        }), !0)
                    }))
                },
                setVisibility: function(e, t, n) {
                    return this.update(e, t, {
                        visibility: 1 === n
                    })
                },
                setMetadataVisibility: function(e, t, n) {
                    return this.update(e, t, {
                        metadata_visibility: 1 === n
                    })
                },
                setFriendSync: function(e, t, n) {
                    return this.update(e, t, {
                        friend_sync: n
                    })
                },
                setShowActivity: function(e, t, n) {
                    return this.update(e, t, {
                        show_activity: n
                    })
                },
                update: function(e, t, n) {
                    return c.Z.patch({
                        url: f.ANM.CONNECTION(e, t),
                        body: n,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_CONNECTIONS_UPDATE,
                            properties: p({}, n)
                        }
                    })
                },
                joinServer: function(e, t) {
                    u.Z.dispatch({
                        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                        integrationId: e,
                        joining: !0
                    });
                    o.ZP.post({
                        url: f.ANM.INTEGRATION_JOIN(e),
                        oldFormErrors: !0
                    }, (function(n) {
                        u.Z.dispatch({
                            type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                            integrationId: e,
                            joining: !1
                        });
                        n.ok || null == t || t()
                    }))
                },
                refreshAccessToken: function(e, t) {
                    return E((function() {
                        var n, r, i, a;
                        return g(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    l.trys.push([0, 2, , 3]);
                                    return [4, o.ZP.get({
                                        url: f.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n = l.sent(), r = n.body, i = r.access_token;
                                    u.Z.dispatch({
                                        type: "USER_CONNECTION_UPDATE",
                                        platformType: e,
                                        id: t,
                                        accessToken: i
                                    });
                                    return [2, i];
                                case 2:
                                    (a = l.sent()).body.code === f.evJ.CONNECTION_REVOKED && u.Z.dispatch({
                                        type: "USER_CONNECTION_UPDATE",
                                        platformType: e,
                                        id: t,
                                        revoked: !0
                                    });
                                    throw a;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                linkDispatchAuthCallback: function(e, t) {
                    return o.ZP.post({
                        url: f.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
                        body: p({}, t),
                        oldFormErrors: !0
                    })
                },
                completeTwoWayLink: function(e, t, n, r, i) {
                    return E((function() {
                        var o, u, l, s;
                        return g(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (null == t) {
                                        v.error("Two-way link: missing authorize location");
                                        return [2]
                                    }
                                    o = (0, a.xp)(t), u = o.code,
                                        l = o.error, s = o.errorDescription;
                                    if (null != l) {
                                        v.error("Two-way link: missing authorize code", {
                                            error: l,
                                            errorDescription: s
                                        });
                                        return [2]
                                    }
                                    return [4, O(e, {
                                        code: n,
                                        state: r,
                                        two_way_link_code: u,
                                        token_redirect_uri: i
                                    })];
                                case 1:
                                    return [2, c.sent()]
                            }
                        }))
                    }))()
                }
            }
        },
        116404: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => j
            });
            var r = n(744564),
                i = n(520436),
                o = n(409125),
                u = n(15338),
                a = n(784426),
                l = n(166302),
                s = n(61209),
                c = n(747126),
                f = n(602351),
                d = n(715107),
                E = n(464187),
                _ = n(473903),
                p = n(176758),
                h = n(264817),
                g = n(716371),
                v = n(162723),
                O = n(713717),
                y = n(359721),
                I = n(396043),
                N = n(535312),
                T = n(492886),
                A = n(296872),
                C = n(563367);

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        m(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t, n, i) {
                var o, u, a = d.Z.getVoiceChannelId(),
                    l = s.Z.getChannel(a);
                if (null == t && null != a && null != l) {
                    var c = function(e, t) {
                        return S({
                            channel_id: e.id,
                            channel_type: e.type,
                            guild_id: e.getGuildId(),
                            rtc_connection_id: C.Z.getRTCConnectionId(),
                            duration: C.Z.getDuration(),
                            media_session_id: C.Z.getMediaSessionId()
                        }, (0, I.kO)(C.Z.getGuildId(), C.Z.getChannelId(), t))
                    }(l, i);
                    e();
                    if (T.Z.hasUsedBackgroundInCall) {
                        var E = S({}, c, (u = (0, N.P)(_.default.getCurrentUser()), {
                            video_device_name: null === (o = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) || void 0 === o ? void 0 : o.name,
                            video_hardware_scaling_enabled: f.Z.getHardwareH264(),
                            video_effect_type: (0, A.TA)(u),
                            video_effect_detail: (0, A.V$)(u)
                        }));
                        r.Z.dispatch({
                            type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                            analyticsData: E
                        })
                    } else r.Z.dispatch({
                        type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                        analyticsData: c
                    })
                } else e()
            }
            var M = n(567403),
                R = n(746477),
                D = n(407561);

            function P(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function U(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            P(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            P(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        L(e, t, n[t])
                    }))
                }
                return e
            }
            var w = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                k = function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        u = function() {
                            r.Z.dispatch({
                                type: "VOICE_CHANNEL_SELECT",
                                guildId: t,
                                channelId: e,
                                currentVoiceChannelId: d.Z.getVoiceChannelId(),
                                video: i,
                                stream: o
                            })
                        },
                        a = s.Z.getChannel(e),
                        l = D.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
                        c = null != a ? R.Z.getCheck(a.guild_id) : null,
                        f = null != t && (0, g.n)(t);
                    if (!f && (null == c || c.canChat || (0, v.jU)(a))) {
                        if (null != a && !l) {
                            var E = (0, p.rY)(a, D.Z, M.Z);
                            if (E && a.isGuildStageVoice() && (0, O.xJ)(a.id)) {
                                (0, h.ZD)(U((function() {
                                    var e, t;
                                    return w(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(17586), n.e(40056), n.e(19887), n.e(24251), n.e(94302), n.e(28629), n.e(91406), n.e(53686), n.e(63209)]).then(n.bind(n, 518197))];
                                            case 1:
                                                e = r.sent(), t = e.default;
                                                return [2, function(e) {
                                                    return t(Z({
                                                        channel: a
                                                    }, e))
                                                }]
                                        }
                                    }))
                                })));
                                return
                            }
                            if (E) {
                                (0, h.ZD)(U((function() {
                                    var e, t;
                                    return w(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(51395)]).then(n.bind(n, 851395))];
                                            case 1:
                                                e = r.sent(), t = e.default;
                                                return [2, function(e) {
                                                    return t(e)
                                                }]
                                        }
                                    }))
                                })));
                                return
                            }
                        }
                        i && (0, y.eH)();
                        b(u, e, 0, i)
                    }
                },
                G = n(2590);
            const j = {
                selectChannel: function(e) {
                    var t = e.guildId,
                        n = e.channelId,
                        i = e.messageId,
                        o = e.jumpType,
                        u = e.preserveDrawerState,
                        a = e.source;
                    r.Z.dispatch({
                        type: "CHANNEL_SELECT",
                        guildId: t === G.ME ? null : t,
                        channelId: n,
                        messageId: i,
                        jumpType: o,
                        preserveDrawerState: u,
                        source: a
                    })
                },
                selectPrivateChannel: function(e) {
                    (0, a.uL)(G.Z5c.CHANNEL(G.ME, e))
                },
                selectVoiceChannel: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = s.Z.getChannel(e),
                        o = null == i ? void 0 : i.getGuildId();
                    if (!(null == i ? void 0 : i.isGuildVocal()) || !(null == i ? void 0 : i.isNSFW()) || (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) && c.Z.didAgree(o)) {
                        if (f.Z.isSupported()) {
                            null != e && f.Z.getMediaEngine().interact();
                            k(e, o, n, r)
                        }
                    } else(0, a.uL)(G.Z5c.CHANNEL(o, e))
                },
                disconnect: function() {
                    var e = o.Z.getRemoteSessionId();
                    null != e && i._(e);
                    if ((0, l.ur)()) this.selectVoiceChannel(null);
                    else {
                        var t = s.Z.getChannel(d.Z.getChannelId()),
                            n = d.Z.getChannelId() === d.Z.getVoiceChannelId() && !0 === (null == t ? void 0 : t.isThread());
                        this.selectVoiceChannel(null);
                        u.xv(G.KJ3.CHANNEL_CALL_POPOUT);
                        if (n) {
                            var r = E.Z.getGuildId();
                            null != r && (0, a.uL)((0, p.LY)(r))
                        }
                    }
                }
            }
        },
        473664: (e, t, n) => {
            n.d(t, {
                Z: () => s,
                O: () => c
            });
            var r = n(202351),
                i = n(656907),
                o = n(715107),
                u = n(377128),
                a = n(407561);

            function l(e, t, n) {
                return e || t || n
            }

            function s(e) {
                var t = e.userId,
                    n = e.checkSoundSharing,
                    s = void 0 !== n && n,
                    c = e.checkSoundboardSounds,
                    f = void 0 === c || c,
                    d = e.checkIsMuted,
                    E = void 0 !== d && d,
                    _ = e.context,
                    p = (0, r.e7)([a.Z, o.Z], (function() {
                        var e = o.Z.getVoiceChannelId();
                        return null != e ? a.Z.getVoiceStateForChannel(e, t) : null
                    })),
                    h = E && ((null == p ? void 0 : p.mute) || (null == p ? void 0 : p.selfMute)),
                    g = (0, r.e7)([u.Z], (function() {
                        return u.Z.isSpeaking(t, _) && !h
                    })),
                    v = (0, r.e7)([u.Z], (function() {
                        return u.Z.isSoundSharing(t) && s
                    }));
                return l(g, (0, r.e7)([i.Z], (function() {
                    return i.Z.isUserPlayingSounds(t) && f
                })), v)
            }

            function c(e) {
                var t = e.userId,
                    n = e.checkSoundSharing,
                    r = void 0 !== n && n,
                    s = e.checkSoundboardSounds,
                    c = void 0 === s || s,
                    f = e.checkIsMuted,
                    d = void 0 !== f && f,
                    E = e.context,
                    _ = o.Z.getVoiceChannelId(),
                    p = null != _ ? a.Z.getVoiceStateForChannel(_, t) : null,
                    h = d && ((null == p ? void 0 : p.mute) || (null == p ? void 0 : p.selfMute)),
                    g = u.Z.isSpeaking(t, E) && !h,
                    v = u.Z.isSoundSharing(t) && r;
                return l(g, i.Z.isUserPlayingSounds(t) && c, v)
            }
        },
        955048: (e, t, n) => {
            n.d(t, {
                ZP: () => g
            });
            var r = n(817673),
                i = n(281110),
                o = n(296602),
                u = n(2590);

            function a(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function c(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && d(e, t)
            }

            function f(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var p = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        },
                        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                h = function() {
                    function e(t, n, r) {
                        l(this, e);
                        this.isCanceled = !1;
                        this.searchId = t;
                        this.searchType = n;
                        this.query = r
                    }
                    var t = e.prototype;
                    t.fetch = function(e, t, n) {
                        var r, i = this;
                        return (r = function() {
                            var r, u, a, l;
                            return p(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (i.isCanceled) return [2];
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 3, , 4]);
                                        return [4, i.makeRequest()];
                                    case 2:
                                        if (null == (r = s.sent())) return [2];
                                        if (i.isCanceled) return [2];
                                        if (200 === r.status) e(r);
                                        else if (202 === r.status) {
                                            i.query.attempts = (null !== (u = i.query.attempts) && void 0 !== u ? u : 0) + 1;
                                            a = 1e3 * r.body.retry_after;
                                            i.retryDelay = isNaN(a) || 0 === a ? 5e3 : a;
                                            i.retryLater(e, t, n);
                                            t(r)
                                        }
                                        return [3, 4];
                                    case 3:
                                        l = s.sent();
                                        new o.Z("SearchFetcher").error(l);
                                        n(l);
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, i) {
                                var o = r.apply(e, t);

                                function u(e) {
                                    a(o, n, i, u, l, "next", e)
                                }

                                function l(e) {
                                    a(o, n, i, u, l, "throw", e)
                                }
                                u(void 0)
                            }))
                        })()
                    };
                    t.cancel = function() {
                        this.isCanceled = !0;
                        null != this.indexingPollId && clearTimeout(this.indexingPollId)
                    };
                    t.retryLater = function(e, t, n) {
                        null != this.indexingPollId && clearTimeout(this.indexingPollId);
                        this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
                    };
                    return e
                }(),
                g = function(e) {
                    c(n, e);
                    var t = _(n);

                    function n() {
                        l(this, n);
                        return t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    o.getEndpoint = function() {
                        switch (this.searchType) {
                            case u.aib.DMS:
                                return u.ANM.SEARCH_DMS;
                            case u.aib.GUILD:
                                if (null == this.searchId || "" === this.searchId) return;
                                return u.ANM.SEARCH_GUILD(this.searchId);
                            case u.aib.CHANNEL:
                                if (null == this.searchId || "" === this.searchId) return;
                                return u.ANM.SEARCH_CHANNEL(this.searchId);
                            default:
                                throw new Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
                        }
                    };
                    o.makeRequest = function() {
                        var e = this.getEndpoint();
                        return null == e ? null : i.ZP.get({
                            url: e,
                            query: r.stringify(this.query),
                            oldFormErrors: !0
                        })
                    };
                    return n
                }(h)
        },
        258104: (e, t, n) => {
            n.d(t, {
                i6: () => D,
                ZP: () => X
            });
            var r = n(202351),
                i = n(744564),
                o = n(73904),
                u = n(664625),
                a = n(61209),
                l = n(682776),
                s = n(715107),
                c = n(473903),
                f = n(120415),
                d = n(84894),
                E = n(838733),
                _ = n(125471),
                p = n(2590),
                h = n(473708);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function T(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function A(e, t) {
                A = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return A(e, t)
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || b(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || b(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e, t) {
                if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                }
            }

            function M(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            new Set([]);
            var R = {
                    seenActivities: [],
                    shouldShowNewActivityIndicator: !1,
                    usersHavePlayedByApp: new Map
                },
                D = [],
                P = new Map,
                U = new Map,
                L = new Map,
                Z = !1,
                w = new Map,
                k = new Map,
                G = new Map,
                j = new Map,
                H = new Map,
                F = new Map,
                Y = new Map,
                V = new Set([]),
                B = void 0,
                x = _.Ez.ACTION_BAR;

            function K(e) {
                return null != e ? e : "0"
            }

            function W(e, t, n, r) {
                var i = (0, d.Z)(n.application_id);
                if (null != i) {
                    var o = a.Z.getBasicChannel(t),
                        s = null != o && l.Z.canBasicChannel(p.S7T.CONNECT, o) || (null == o ? void 0 : o.type) === p.d4z.DM || (null == o ? void 0 : o.type) === p.d4z.GROUP_DM;
                    ! function(e, t) {
                        var n;
                        R.usersHavePlayedByApp.set(e, new Set(m(null !== (n = R.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : []).concat(m(t.map((function(e) {
                            return e.user_id
                        }))))))
                    }(n.application_id, r);
                    if (s) {
                        var c, f = function(e, t, n, r, i) {
                                var o, u, a = new Map;
                                t.forEach((function(e) {
                                    a.set(e.user_id, e)
                                }));
                                return N(I({}, e), {
                                    name: null !== (o = e.name) && void 0 !== o ? o : h.Z.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                                    type: null !== (u = e.type) && void 0 !== u ? u : p.IIU.PLAYING,
                                    url: n,
                                    connections: a,
                                    guildId: r,
                                    channelId: i
                                })
                            }(n, r, i, e, t),
                            E = u.default.getId(),
                            _ = P.get(f.application_id);
                        r.some((function(e) {
                            return e.user_id === E
                        })) && null != _ && P.set(_.application_id, I({}, _, f));
                        var g, v = (null !== (c = L.get(t)) && void 0 !== c ? c : []).filter((function(e) {
                                return e.application_id !== n.application_id
                            })),
                            O = K(e),
                            y = (null !== (g = U.get(O)) && void 0 !== g ? g : []).filter((function(e) {
                                return !(e.application_id === n.application_id && e.channelId === t)
                            }));
                        if (0 !== r.length) {
                            v.push(f);
                            y.push(f)
                        }
                        L.set(t, v);
                        U.set(O, y)
                    }
                }
            }

            function z(e) {
                e.embedded_activities.forEach((function(t) {
                    var n = t.channel_id,
                        r = t.embedded_activity,
                        i = t.connections;
                    W(e.id, n, r, i)
                }))
            }

            function Q() {
                Z = !1
            }

            function q(e, t) {
                return "".concat(e, ":").concat(t)
            }
            var J = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && A(e, t)
                }(n, e);
                var t = M(n);

                function n() {
                    v(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t = new Map;
                    Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach((function(e) {
                        if (Array.isArray(e)) {
                            var n = C(e, 2),
                                r = n[0],
                                i = n[1];
                            "string" == typeof r && Array.isArray(i) && t.set(r, new Set(i))
                        }
                    })));
                    null != e && (R = N(I({}, e), {
                        usersHavePlayedByApp: t
                    }))
                };
                r.getState = function() {
                    return R
                };
                r.getSelfEmbeddedActivityForChannel = function(e) {
                    var t;
                    return null !== (t = Array.from(P.values()).find((function(t) {
                        var n = t.channelId;
                        return e === n
                    }))) && void 0 !== t ? t : null
                };
                r.getSelfEmbeddedActivities = function() {
                    return P
                };
                r.getEmbeddedActivitiesForGuild = function(e) {
                    var t;
                    return null !== (t = U.get(e)) && void 0 !== t ? t : D
                };
                r.getEmbeddedActivitiesForChannel = function(e) {
                    var t;
                    return null !== (t = L.get(e)) && void 0 !== t ? t : D
                };
                r.getEmbeddedActivitiesByChannel = function() {
                    return L
                };
                r.getEmbeddedActivityDurationMs = function(e, t) {
                    var n = Y.get(q(e, t));
                    return null == n ? null : Date.now() - n
                };
                r.isLaunchingActivity = function() {
                    return Z
                };
                r.getShelfActivities = function(e) {
                    var t, n = K(e);
                    return null !== (t = w.get(n)) && void 0 !== t ? t : []
                };
                r.getShelfFetchStatus = function(e) {
                    var t = K(e);
                    return k.get(t)
                };
                r.shouldFetchShelf = function(e) {
                    var t, n, r = K(e),
                        i = null !== (t = k.get(r)) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        o = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
                    return !(null == i ? void 0 : i.isFetching) && o
                };
                r.getOrientationLockStateForApp = function(e) {
                    var t;
                    return null !== (t = G.get(e)) && void 0 !== t ? t : null
                };
                r.getPipOrientationLockStateForApp = function(e) {
                    var t;
                    return null !== (t = j.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
                };
                r.getGridOrientationLockStateForApp = function(e) {
                    var t, n;
                    return null !== (n = null !== (t = H.get(e)) && void 0 !== t ? t : j.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
                };
                r.getLayoutModeForApp = function(e) {
                    return F.get(e)
                };
                r.getDismissedEmbeddedActivityMessageKeys = function() {
                    return Array.from(V)
                };
                r.getUsersHavePlayedByApp = function(e) {
                    var t;
                    return m(null !== (t = R.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : [])
                };
                r.getConnectedActivityChannelId = function() {
                    return B
                };
                r.getActivityPanelMode = function() {
                    return x
                };
                return n
            }(r.ZP.PersistedStore);
            J.displayName = "EmbeddedActivitiesStore";
            J.persistKey = "EmbeddedActivities";
            J.migrations = [function(e) {
                return N(I({}, e), {
                    seenFeaturedActivities: [],
                    shouldShowNewActivityIndicator: !1
                })
            }, function(e) {
                delete e.seenFeaturedActivities;
                return N(I({}, e), {
                    seenActivities: []
                })
            }, function(e) {
                return I({}, e)
            }, function(e) {
                delete e.currentFreeActivity;
                delete e.lastFreeActivityRotationTimestampMs;
                delete e.freePeriodActivities;
                delete e.shouldShowFreeActivityIndicator;
                return I({}, e)
            }];
            const X = new J(i.Z, {
                ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
                    var t = e.applicationId,
                        n = e.layoutMode;
                    F.set(t, n)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds;
                    L.clear();
                    U.clear();
                    t.forEach((function(e) {
                        return z(e)
                    }))
                },
                GUILD_CREATE: function(e) {
                    z(e.guild)
                },
                CALL_CREATE: function(e) {
                    e.channelId;
                    ! function(e, t) {
                        t.forEach((function(e) {
                            W(null, e.channel_id, e.embedded_activity, e.connections)
                        }))
                    }(0, e.embeddedActivities)
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    L.set(t.id, []);
                    var n = t.guild_id;
                    if (null != n) {
                        var r, i = K(n),
                            o = (null !== (r = U.get(i)) && void 0 !== r ? r : []).filter((function(e) {
                                return e.channelId !== t.id
                            }));
                        U.set(i, o)
                    }
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    var t = e.embeddedActivity;
                    Z = !0;
                    x = t.channelId === s.Z.getChannelId() ? _.Ez.PANEL : _.Ez.PIP
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Q,
                EMBEDDED_ACTIVITY_LAUNCH_FAIL: Q,
                EMBEDDED_ACTIVITY_OPEN: function(e) {
                    var t, n = e.channelId,
                        r = e.embeddedActivity,
                        i = r.application_id,
                        o = (0, d.Z)(i),
                        l = u.default.getSessionId();
                    if (null == o || null == l) return !1;
                    if ((null === (t = P.get(i)) || void 0 === t ? void 0 : t.channelId) === n) return !1;
                    var s, f = a.Z.getChannel(n),
                        E = null == f ? void 0 : f.getGuildId(),
                        _ = c.default.getCurrentUser();
                    if (null == E && (null === (s = null == f ? void 0 : f.isPrivate()) || void 0 === s || !s) || null == _) return !1;
                    B = n;
                    var g, v = new Map,
                        O = _.id;
                    v.set(O, {
                        user_id: O
                    });
                    P.set(i, {
                        guildId: E,
                        channelId: n,
                        application_id: i,
                        name: null !== (g = r.name) && void 0 !== g ? g : h.Z.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                        url: o,
                        type: p.IIU.PLAYING,
                        connections: v,
                        connectedSince: Date.now()
                    });
                    Y.set(q(n, i), Date.now())
                },
                EMBEDDED_ACTIVITY_CLOSE: function(e) {
                    var t = e.applicationId,
                        n = P.get(t);
                    P.delete(t);
                    (null == n ? void 0 : n.channelId) === B && (B = void 0)
                },
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    W(e.guildId, e.channelId, e.embeddedActivity, e.connections)
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    var t, n = e.activity;
                    if (null == n) return !1;
                    var r, i = P.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
                    if (null == i) return !1;
                    P.set(i.application_id, N(I({}, i), {
                        type: null !== (r = n.type) && void 0 !== r ? r : i.type,
                        secrets: n.secrets
                    }))
                },
                EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
                    var t = e.applicationId,
                        n = e.config,
                        r = P.get(t);
                    null != r && P.set(r.application_id, N(I({}, r), {
                        config: n
                    }))
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
                    var t = K(e.guildId),
                        n = k.get(t);
                    k.set(t, {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.activities,
                        r = K(t);
                    w.set(r, n);
                    var i = Date.now();
                    n.forEach((function(e) {
                        var t = e.application_id,
                            n = e.client_platform_config[(0, E.Z)((0, f.Ij)())];
                        n.label_type === o.ww.NEW && null != n.label_until && new Date(n.label_until).getTime() > i && !R.seenActivities.includes(t) && (R.shouldShowNewActivityIndicator = !0);
                        R.seenActivities.push(t)
                    }));
                    k.set(r, {
                        isFetching: !1,
                        lastFetchTimestampMs: i
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
                    var t = K(e.guildId),
                        n = k.get(t);
                    k.set(t, {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: function() {
                    R.shouldShowNewActivityIndicator = !1
                },
                EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
                    var t = e.applicationId,
                        n = e.lockState,
                        r = e.pictureInPictureLockState,
                        i = e.gridLockState;
                    null == n ? G.delete(t) : G.set(t, n);
                    null === r ? j.delete(t) : void 0 !== r && j.set(t, r);
                    null === i ? H.delete(t) : void 0 !== i && H.set(t, i)
                },
                EMBEDDED_ACTIVITY_DISMISS_MESSAGE: function(e) {
                    var t = e.embeddedActivityKey;
                    V.add(t)
                },
                EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
                    var t = e.activityPanelMode;
                    x = t
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    B !== t && x === _.Ez.PANEL && (x = _.Ez.PIP)
                }
            })
        },
        84894: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(325213),
                i = n(560213);

            function o(e) {
                var t = i.Z.getState();
                return t.isEnabled && t.useActivityUrlOverride && null != t.activityUrlOverride && "" !== t.activityUrlOverride ? t.activityUrlOverride : r.Z.inTestModeForEmbeddedApplication(e) ? r.Z.testModeOriginURL : function(e) {
                    var t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
                    return null == t ? null : "https://".concat(e, ".").concat(t)
                }(e)
            }
        },
        125471: (e, t, n) => {
            n.d(t, {
                Ez: () => r
            });
            var r;
            ! function(e) {
                e.ACTION_BAR = "action_bar";
                e.PANEL = "panel";
                e.PIP = "pip"
            }(r || (r = {}))
        },
        838733: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(73904);

            function i(e) {
                switch (e) {
                    case "android":
                        return r.C3.ANDROID;
                    case "ios":
                        return r.C3.IOS;
                    default:
                        return r.C3.WEB
                }
            }
        },
        20146: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                i = n(630631),
                o = n(744564),
                u = n(457696),
                a = n(652591),
                l = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function f(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var p, h = null,
                g = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && d(e, t)
                    }(r, e);
                    var t = _(r);

                    function r() {
                        s(this, r);
                        return t.apply(this, arguments)
                    }
                    var o = r.prototype;
                    o.initialize = function() {
                        p = null
                    };
                    o.getCurrentRevision = function() {
                        if (null == p) {
                            var e;
                            p = null !== (e = i.Z.get("BlockedDomainRevision")) && void 0 !== e ? e : null
                        }
                        return p
                    };
                    o.getBlockedDomainList = function() {
                        if (null == h) {
                            var e, t;
                            h = new Set(null !== (t = null === (e = i.Z.get("BlockedDomainStore")) || void 0 === e ? void 0 : e._state) && void 0 !== t ? t : [])
                        }
                        return h
                    };
                    o.isBlockedDomain = function(e) {
                        var t = n(181757);
                        this.getBlockedDomainList();
                        var r = (0, u.F)(e),
                            i = new t.hash.sha256,
                            o = t.codec.hex.fromBits(i.update(r).finalize()),
                            s = "";
                        h.has(o) && (s = r);
                        for (var c = r.indexOf("."); - 1 !== c && "" === s;) {
                            r = r.substring(c + 1);
                            i.reset();
                            o = t.codec.hex.fromBits(i.update(r).finalize());
                            h.has(o) && (s = r);
                            c = r.indexOf(".")
                        }
                        if ("" !== s) {
                            a.default.track(l.rMx.LINK_SECURITY_CHECK_BLOCKED, {
                                blocked_domain: s
                            });
                            return s
                        }
                        return null
                    };
                    return r
                }(r.ZP.Store);
            g.displayName = "BlockedDomainStore";
            g.persistKey = "BlockedDomainStore";
            const v = new g(o.Z, {
                BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
                    var t = e.list,
                        n = e.revision;
                    h = null;
                    p = null;
                    i.Z.set("BlockedDomainStore", {
                        _state: t
                    });
                    i.Z.set("BlockedDomainRevision", n)
                }
            })
        },
        453597: (e, t, n) => {
            n.d(t, {
                qz: () => R,
                sI: () => b,
                ZP: () => P
            });
            var r = n(496486),
                i = n(575626),
                o = n(473664),
                u = n(258104),
                a = n(306263),
                l = n(177570),
                s = n(664625),
                c = n(610773),
                f = n(61209),
                d = n(602351),
                E = n(377128),
                _ = n(473903),
                p = n(256727),
                h = n(407561),
                g = n(773148),
                v = n(358500),
                O = n(2590),
                y = n(36256);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || S(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                if (e) {
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(e, t) : void 0
                }
            }
            var b, M = "__EMBEDDED_ACTIVITIES__",
                R = function(e, t) {
                    return "".concat(e.toLowerCase().padEnd(32, "!")).concat(t.id)
                };

            function D(e) {
                switch (e.type) {
                    case v.fO.ACTIVITY:
                        return "\0".concat(e.sortKey);
                    case v.fO.HIDDEN_STREAM:
                    case v.fO.STREAM:
                        return "".concat(e.userVideo ? "" : "").concat(R(e.userNick, e.user), "");
                    case v.fO.USER:
                        var t, n, r = "";
                        (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? r = "": (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = "");
                        return "".concat(r).concat(R(e.userNick, e.user))
                }
            }! function(e) {
                e.VIDEO = "VIDEO";
                e.STREAM = "STREAM";
                e.FILTERED = "FILTERED";
                e.SPEAKING = "SPEAKING";
                e.ACTIVITY = "ACTIVITY"
            }(b || (b = {}));
            var P = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.participants = {};
                    this.lastSpoke = {};
                    this.participantByIndex = new i.Z((function(e) {
                        var t, n = [];
                        e.type === v.fO.USER && e.speaking && n.push(b.SPEAKING);
                        if (e.type === v.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)) {
                            n.push(b.VIDEO);
                            e.localVideoDisabled || n.push(b.FILTERED)
                        } else if ((0, v._5)(e)) {
                            n.push(b.STREAM);
                            e.type !== v.fO.HIDDEN_STREAM && null != e.streamId && n.push(b.FILTERED)
                        }
                        e.type === v.fO.ACTIVITY && n.push(b.ACTIVITY);
                        return n
                    }), D);
                    this.channelId = t
                }
                var t = e.prototype;
                t.size = function(e) {
                    return this.participantByIndex.size(e)
                };
                t.toArray = function(e) {
                    return this.participantByIndex.values(e, !0)
                };
                t.rebuild = function() {
                    var e = this,
                        t = f.Z.getChannel(this.channelId);
                    if (null == t || t.type === O.d4z.GUILD_TEXT) return !1;
                    this.call = c.Z.getCall(this.channelId);
                    if (t.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
                    var n = new Set(t.isGuildVocalOrThread() ? Object.keys(h.Z.getVoiceStatesForChannel(t.id)) : t.recipients);
                    n.add(s.default.getId());
                    l.Z.getAllActiveStreamsForChannel(this.channelId).forEach((function(e) {
                        var t = e.ownerId;
                        return n.add(t)
                    }));
                    this.participantByIndex.clear();
                    this.participants = {};
                    n.forEach((function(t) {
                        return e.updateParticipant(t)
                    }));
                    this.updateEmbeddedActivities();
                    return !0
                };
                t.getParticipant = function(e) {
                    var t;
                    return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null
                };
                t.updateEmbeddedActivities = function() {
                    return this.updateParticipant(M)
                };
                t.hasEmbeddedActivity = function() {
                    var e = this.participants.__EMBEDDED_ACTIVITIES__;
                    return null != e && e.length > 0
                };
                t.updateParticipant = function(e) {
                    var t = this,
                        n = this.participants[e],
                        r = e === M ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
                    if (null == n && 0 === r.length) return !1;
                    null == n || n.forEach((function(e) {
                        t.participantByIndex.delete(e.id)
                    }));
                    r.forEach((function(e) {
                        t.participantByIndex.set(e.id, e)
                    }));
                    this.participants[e] = r;
                    return !0
                };
                t.updateParticipantSpeaking = function(e) {
                    var t, n, r = this;
                    return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((function(t, n) {
                        if (n.type === v.fO.USER) {
                            var i = (0, o.O)({
                                userId: e,
                                checkIsMuted: !0
                            });
                            i && (r.lastSpoke[e] = Date.now());
                            r.participantByIndex.set(n.id, C(A({}, n), {
                                speaking: i,
                                lastSpoke: r.lastSpoke[e],
                                soundsharing: E.Z.isSoundSharing(e)
                            }));
                            return !0
                        }
                        return t
                    }), !1)) && void 0 !== n && n
                };
                t.updateParticipantQuality = function(e, t, n) {
                    var r, i, o = this;
                    return null !== (i = null === (r = this.participants[e]) || void 0 === r ? void 0 : r.reduce((function(e, r) {
                        if (r.type === v.fO.STREAM) {
                            o.participantByIndex.set(r.id, C(A({}, r), {
                                maxResolution: t,
                                maxFrameRate: n
                            }));
                            return !0
                        }
                        return e
                    }), !1)) && void 0 !== i && i
                };
                t._getEmbeddedActivities = function() {
                    var e = u.ZP.getEmbeddedActivitiesForChannel(this.channelId),
                        t = u.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
                    return null == t ? e : (0, r.uniqBy)(m(e).concat([t]), "application_id")
                };
                t._getParticipantsForEmbeddedActivities = function() {
                    var e = this;
                    return this._getEmbeddedActivities().map((function(t, n) {
                        var r, i, o, u;
                        return {
                            type: v.fO.ACTIVITY,
                            id: t.application_id,
                            activityType: t.type,
                            activityUrl: t.url,
                            participants: new Set(t.connections.keys()),
                            canJoin: null != (null == t || null === (r = t.secrets) || void 0 === r ? void 0 : r.join),
                            joinSecret: null == t || null === (i = t.secrets) || void 0 === i ? void 0 : i.join,
                            guildId: null !== (u = null === (o = f.Z.getChannel(e.channelId)) || void 0 === o ? void 0 : o.getGuildId()) && void 0 !== u ? u : null,
                            sortKey: n.toString()
                        }
                    }))
                };
                t._getParticipantsForUser = function(e) {
                    var t, n, r = [],
                        i = _.default.getUser(e);
                    if (null == i) return r;
                    var u, c, O, I, N = h.Z.getVoiceStateForChannel(this.channelId, e),
                        T = h.Z.getVoicePlatformForChannel(this.channelId, e),
                        m = f.Z.getChannel(this.channelId),
                        S = null !== (c = null === (t = this.call) || void 0 === t || null === (n = t.ringing) || void 0 === n ? void 0 : n.includes(e)) && void 0 !== c && c;
                    if (null != N || S) {
                        var b;
                        u = C(A({
                            type: v.fO.USER
                        }, p.Z.getUserStreamData(e, null == m ? void 0 : m.getGuildId())), {
                            user: i,
                            id: i.id,
                            voiceState: N,
                            voicePlatform: T,
                            speaking: (0, o.O)({
                                userId: e,
                                checkIsMuted: !0
                            }),
                            lastSpoke: null !== (b = this.lastSpoke[e]) && void 0 !== b ? b : 0,
                            soundsharing: E.Z.isSoundSharing(e),
                            ringing: S,
                            userNick: g.ZP.getName(null == m ? void 0 : m.getGuildId(), this.channelId, i),
                            localVideoDisabled: d.Z.isLocalVideoDisabled(i.id)
                        });
                        r.push(u)
                    }
                    var M = null !== (I = l.Z.getStreamForUser(e, null == m ? void 0 : m.getGuildId())) && void 0 !== I ? I : l.Z.getActiveStreamForUser(e, null == m ? void 0 : m.getGuildId());
                    if (null != M && M.channelId === this.channelId) {
                        var R, D = (0, a.V9)(M),
                            P = this.getParticipant(D),
                            U = M.ownerId === s.default.getId() && l.Z.isSelfStreamHidden(this.channelId),
                            L = (null == P ? void 0 : P.type) === v.fO.STREAM ? {
                                maxResolution: null != P.maxResolution ? A({}, P.maxResolution) : void 0,
                                maxFrameRate: P.maxFrameRate
                            } : null;
                        O = C(A({}, p.Z.getUserStreamData(e, null == m ? void 0 : m.getGuildId(), y.Yn.STREAM), L), {
                            type: U ? v.fO.HIDDEN_STREAM : v.fO.STREAM,
                            id: D,
                            userVideo: null !== (R = null == N ? void 0 : N.selfVideo) && void 0 !== R && R,
                            user: i,
                            userNick: g.ZP.getName(null == m ? void 0 : m.getGuildId(), this.channelId, i),
                            stream: M
                        });
                        r.push(O)
                    }
                    return r
                };
                ! function(e, t, n) {
                    t && N(e.prototype, t);
                    n && N(e, n)
                }(e, [{
                    key: "version",
                    get: function() {
                        return this.participantByIndex.version
                    }
                }]);
                return e
            }()
        },
        566706: (e, t, n) => {
            n.d(t, {
                Z: () => _e
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                l = n(744564),
                s = n(258104),
                c = n(296602),
                f = n(409125),
                d = n(306263),
                E = n(177570),
                _ = n(664625),
                p = n(610773),
                h = n(61209),
                g = n(715107),
                v = n(377128),
                O = n(473903),
                y = n(256727),
                I = n(407561),
                N = n(453597),
                T = n(358500),
                A = n(2590);

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function M(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function R(e, t) {
                return !t || "object" !== U(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function L(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return R(this, n)
                }
            }
            var Z = new c.Z("ChannelRTCStore"),
                w = Object.freeze([]),
                k = [],
                G = {},
                j = {},
                H = {},
                F = {},
                Y = {},
                V = {},
                B = {},
                x = {},
                K = {},
                W = {};

            function z(e) {
                var t = G[e];
                if (null == t) {
                    t = new N.ZP(e);
                    G[e] = t
                }
                return t
            }

            function Q(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
                return t.reduce((function(t, n) {
                    var r = z(n);
                    if (!e(r)) return t;
                    re(n);
                    ne(n);
                    return !0
                }), !1)
            }

            function q(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
                return Q((function(t) {
                    return t.updateParticipant(e)
                }), t)
            }

            function J(e) {
                var t, n = h.Z.getChannel(e),
                    r = (null == n ? void 0 : n.isDM()) ? T.dF.AUTO : T.dF.NONE;
                return null !== (t = j[e]) && void 0 !== t ? t : [r, T.dF.NONE]
            }

            function X(e) {
                return null != j[e] && P(j[e], 1)[0] !== T.dF.NONE
            }

            function $(e) {
                null == H[e] && (H[e] = {
                    gridDurationMs: 0,
                    focusDurationMs: 0,
                    toggleCount: 0,
                    lastUpdate: 0
                });
                var t = H[e],
                    n = performance.now(),
                    r = X(e);
                if (t.lastUpdate > 0) {
                    var i = n - t.lastUpdate;
                    t[r ? "focusDurationMs" : "gridDurationMs"] += i
                }
                t.lastUpdate = n
            }

            function ee(e, t) {
                $(e);
                var n = X(e);
                null == t ? delete j[e] : j[e] = t;
                n !== X(e) && H[e].toggleCount++
            }

            function te(e) {
                return e.size(N.sI.STREAM) > 0 || e.size(N.sI.VIDEO) > 0 || e.hasEmbeddedActivity()
            }

            function ne(e) {
                var t = _.default.getId(),
                    n = z(e);
                if (0 !== n.size() && g.Z.getVoiceChannelId() === e) {
                    var r = T.dF.NONE,
                        o = n.toArray(N.sI.STREAM).find((function(e) {
                            return e.type === T.fO.STREAM && E.Z.getActiveStreamForStreamKey(e.id)
                        }));
                    if (null != o) {
                        i()(o.type === T.fO.STREAM, "Impossible condition");
                        r = o.id
                    } else if (1 === n.size()) r = t;
                    else if (1 === n.size(N.sI.VIDEO)) {
                        r = P(n.toArray(N.sI.VIDEO), 1)[0].id
                    } else {
                        var u, a = n.toArray().find((function(e) {
                            return e.type === T.fO.USER && e.id !== t && !e.ringing
                        }));
                        r = null !== (u = null == a ? void 0 : a.id) && void 0 !== u ? u : t
                    }
                    var l = P(J(e), 1)[0];
                    if (l !== T.dF.AUTO && l !== T.dF.NONE) {
                        var s = n.getParticipant(l);
                        (null == s || s.type === T.fO.STREAM && null == E.Z.getActiveStreamForStreamKey(s.id)) && (l = T.dF.NONE)
                    }
                    ee(e, [l, r])
                } else ee(e, null)
            }

            function re(e) {
                var t = z(e);
                if (0 !== t.size()) {
                    var n = de(e) || te(t) ? A.WtW.VIDEO : A.WtW.VOICE;
                    if (n === A.WtW.VOICE) {
                        delete F[e];
                        delete Y[e]
                    } else F[e] = n
                }
            }

            function ie(e) {
                delete G[e];
                delete j[e];
                delete F[e];
                delete Y[e]
            }

            function oe() {
                return Q((function(e) {
                    return e.rebuild()
                }), function() {
                    var e = [],
                        t = g.Z.getChannelId();
                    null != t && e.push(t);
                    var n = g.Z.getVoiceChannelId();
                    null == n || e.includes(n) || e.push(n);
                    var r = f.Z.getRemoteSessionId(),
                        i = I.Z.getVoiceStateForSession(_.default.getId(), r);
                    null != (null == i ? void 0 : i.channelId) && e.push(null == i ? void 0 : i.channelId);
                    u().difference(k, e).forEach(ie);
                    var o = u().difference(e, k);
                    k = e;
                    return o
                }())
            }

            function ue() {
                return Q((function(e) {
                    return e.updateEmbeddedActivities()
                }))
            }

            function ae(e) {
                var t = e.userId;
                return Q((function(e) {
                    return e.updateParticipantSpeaking(t)
                }))
            }

            function le(e) {
                return q(e.user.id)
            }

            function se(e) {
                return Q((function(e) {
                    return e.rebuild()
                }), [e.channelId])
            }

            function ce(e) {
                var t = e.channel.id;
                delete x[t];
                delete K[t];
                return ie(t)
            }

            function fe(e) {
                var t = e.streamKey,
                    n = (0, d.my)(t),
                    r = n.channelId;
                return q(n.ownerId, [r])
            }

            function de(e) {
                var t;
                return Boolean(null === (t = h.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
            }
            var Ee = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && D(e, t)
                }(n, e);
                var t = L(n);

                function n() {
                    m(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(E.Z, _.default, p.Z, h.Z, s.ZP, g.Z, v.Z, O.default, y.Z, I.Z);
                    this.syncWith([s.ZP], ue);
                    this.syncWith([f.Z], oe)
                };
                r.getParticipantsVersion = function(e) {
                    return z(e).version
                };
                r.getParticipants = function(e) {
                    var t;
                    return null !== (t = z(e).toArray()) && void 0 !== t ? t : w
                };
                r.getSpeakingParticipants = function(e) {
                    var t;
                    return null !== (t = z(e).toArray(N.sI.SPEAKING)) && void 0 !== t ? t : w
                };
                r.getFilteredParticipants = function(e) {
                    return B[e] ? z(e).toArray(N.sI.FILTERED) : z(e).toArray()
                };
                r.getVideoParticipants = function(e) {
                    var t;
                    return null !== (t = z(e).toArray(N.sI.VIDEO)) && void 0 !== t ? t : w
                };
                r.getStreamParticipants = function(e) {
                    var t;
                    return null !== (t = z(e).toArray(N.sI.STREAM)) && void 0 !== t ? t : w
                };
                r.getActivityParticipants = function(e) {
                    var t;
                    return null !== (t = z(e).toArray(N.sI.ACTIVITY)) && void 0 !== t ? t : w
                };
                r.getParticipant = function(e, t) {
                    return z(e).getParticipant(t)
                };
                r.getUserParticipantCount = function(e) {
                    var t = z(e);
                    return t.size() - t.size(N.sI.STREAM) - t.size(N.sI.ACTIVITY)
                };
                r.getParticipantsOpen = function(e) {
                    var t;
                    return null === (t = V[e]) || void 0 === t || t
                };
                r.getVoiceParticipantsHidden = function(e) {
                    var t;
                    return null !== (t = B[e]) && void 0 !== t && t
                };
                r.getSelectedParticipantId = function(e) {
                    var t = P(J(e), 2),
                        n = t[0],
                        r = t[1];
                    return n === T.dF.NONE ? null : n !== T.dF.AUTO ? n : r === T.dF.NONE || r === T.dF.AUTO ? null : r
                };
                r.getSelectedParticipant = function(e) {
                    var t = this.getSelectedParticipantId(e);
                    return null == t ? null : z(e).getParticipant(t)
                };
                r.getSelectedParticipantStats = function(e) {
                    var t = H[e];
                    return null == t ? {} : {
                        view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                        view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                        view_mode_toggle_count: t.toggleCount
                    }
                };
                r.getMode = function(e) {
                    var t;
                    return null !== (t = F[e]) && void 0 !== t ? t : de(e) ? A.WtW.VIDEO : A.WtW.VOICE
                };
                r.getLayout = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.IlC.APP;
                    if (__OVERLAY__) return A.AEg.NORMAL;
                    var r, i = h.Z.getChannel(e),
                        o = de(e) || (null == i ? void 0 : i.isBroadcastChannel());
                    return null !== (r = null === (t = Y[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== r ? r : o ? A.AEg.NO_CHAT : A.AEg.NORMAL
                };
                r.getChatOpen = function(e) {
                    var t;
                    return null !== (t = x[e]) && void 0 !== t && t
                };
                r.isFullscreenInContext = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.IlC.APP;
                    return Object.values(Y).some((function(t) {
                        return t[e] === A.AEg.FULL_SCREEN
                    }))
                };
                r.getStageStreamSize = function(e) {
                    return K[e]
                };
                r.getStageVideoLimitBoostUpsellDismissed = function(e) {
                    return W[e]
                };
                return n
            }(a.ZP.Store);
            Ee.displayName = "ChannelRTCStore";
            const _e = new Ee(l.Z, {
                CONNECTION_OPEN: oe,
                CONNECTION_OPEN_SUPPLEMENTAL: oe,
                THREAD_LIST_SYNC: oe,
                OVERLAY_INITIALIZE: oe,
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId,
                        n = e.currentVoiceChannelId;
                    if (null != t) delete H[t];
                    else if (null != n) {
                        delete x[n];
                        delete K[n];
                        $(n)
                    }
                    return oe()
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = oe(),
                        i = h.Z.getChannel(t);
                    if (null != t && null != n && ((null == i ? void 0 : i.type) === A.d4z.GUILD_VOICE || (null == i ? void 0 : i.type) === A.d4z.GUILD_STAGE_VOICE) && !x[t]) {
                        x[t] = !0;
                        return !0
                    }
                    return r
                },
                CHANNEL_RTC_ACTIVE_CHANNELS: oe,
                VOICE_STATE_UPDATES: function(e) {
                    var t = e.voiceStates,
                        n = e.initial;
                    return t.reduce((function(e, t) {
                        var r = t.userId,
                            i = t.channelId;
                        return n && null != i && !k.includes(i) ? e : q(r) || e
                    }), !1)
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (t.type === A.d4z.GROUP_DM) {
                        var n = t.originChannelId;
                        if (null != n) {
                            var r, i;
                            Y[t.id] = S({}, A.IlC.APP, null !== (i = null === (r = Y[n]) || void 0 === r ? void 0 : r[A.IlC.APP]) && void 0 !== i ? i : A.AEg.NORMAL);
                            return !0
                        }
                        t.isBroadcastChannel() && (Y[t.id] = S({}, A.IlC.APP, A.AEg.NO_CHAT))
                    }
                    return !1
                },
                CHANNEL_DELETE: ce,
                THREAD_DELETE: ce,
                CALL_CREATE: se,
                CALL_UPDATE: se,
                CALL_DELETE: function(e) {
                    return ie(e.channelId)
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    var t = e.channelId,
                        n = e.id,
                        r = z(t);
                    null == n && r.toArray(N.sI.STREAM).forEach((function(e) {
                        (0, T._5)(e) && r.updateParticipant(e.user.id)
                    }));
                    var i = P(J(t), 2)[1];
                    ee(t, [null != n ? n : T.dF.NONE, i]);
                    if ((0, d.DB)(n)) {
                        try {
                            var o = (0, d.my)(n).ownerId;
                            o === _.default.getId() && q(o, [t])
                        } catch (e) {
                            Z.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                        }
                        te(r) || (V[t] = !1)
                    }
                },
                CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
                    var t = e.channelId,
                        n = e.layout,
                        r = e.appContext;
                    Y[t] = M(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                S(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, Y[t]), S({}, r, n))
                },
                CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
                    var t = e.channelId,
                        n = e.participantsOpen;
                    V[t] = n
                },
                CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
                    var t = e.channelId,
                        n = e.voiceParticipantsHidden;
                    B[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
                    var t = e.channelId,
                        n = e.large;
                    K[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
                    var t = e.channelId,
                        n = e.dismissed;
                    W[t] = n
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    var t = e.channelId,
                        n = e.selfStreamHidden,
                        r = _.default.getId();
                    if (n) {
                        var i = P(J(t), 1)[0];
                        (0, d.DB)(i) && i.includes(r) && ee(t, null)
                    }
                    q(r, [t])
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    var t = e.channelId,
                        n = e.chatOpen;
                    x[t] = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    var t = e.channelId;
                    return q(e.userId, [t])
                },
                RTC_CONNECTION_PLATFORM: function(e) {
                    var t = e.channelId;
                    return q(e.userId, [t])
                },
                AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
                    return q(e.userId)
                },
                MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
                    var t = e.channelId,
                        n = e.senderUserId,
                        r = e.maxResolution,
                        i = e.maxFrameRate;
                    return Q((function(e) {
                        return e.updateParticipantQuality(n, r, i)
                    }), [t])
                },
                STREAM_CLOSE: fe,
                STREAM_DELETE: fe,
                STREAM_WATCH: function(e) {
                    var t = e.streamKey,
                        n = (0, d.my)(t),
                        r = n.channelId;
                    return q(n.ownerId, [r])
                },
                SPEAKING: ae,
                GUILD_SOUNDBOARD_SOUND_PLAY_START: ae,
                GUILD_SOUNDBOARD_SOUND_PLAY_END: ae,
                USER_UPDATE: le,
                GUILD_MEMBER_UPDATE: le,
                GUILD_DELETE: function(e) {
                    var t = e.guild,
                        n = [];
                    u().forEach(k, (function(e) {
                        var r = h.Z.getChannel(e);
                        null != r && r.getGuildId() !== t.id || n.push(e)
                    }));
                    if (0 === n.length) return !1;
                    u().forEach(n, (function(e) {
                        return ie(e)
                    }))
                }
            })
        },
        318277: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(940060),
                i = n(567403),
                o = n(2590),
                u = [o.d4z.GUILD_TEXT, o.d4z.GUILD_VOICE, o.d4z.GUILD_ANNOUNCEMENT, o.d4z.GUILD_FORUM, o.d4z.PUBLIC_THREAD, o.d4z.PRIVATE_THREAD],
                a = r.Z.combine(o.Plq.VIEW_CHANNEL, o.Plq.SEND_MESSAGES);

            function l(e) {
                if (null == e || !u.includes(e.type)) return [];
                var t = i.Z.getGuild(e.guild_id);
                return null == t ? [] : Object.values(e.permissionOverwrites).filter((function(e) {
                    var n, i;
                    return 0 === e.type && null === (null === (n = t.roles[e.id]) || void 0 === n || null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) && !r.Z.hasAny(e.deny, a)
                })).map((function(e) {
                    return t.roles[e.id]
                })).filter((function(e) {
                    return null != e
                }))
            }
        },
        327566: (e, t, n) => {
            n.d(t, {
                rd: () => l,
                HK: () => s,
                Do: () => c
            });
            var r = n(842227),
                i = n(202351),
                o = n(439683);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                var n = a((0, i.e7)([o.Z], (function() {
                    return o.Z.getHighlightedMessageIds(e)
                }), [e]));
                n.sort(r.default.compare);
                return n.filter((function(e) {
                    return r.default.compare(e, t) > 0
                }))
            }

            function s(e, t) {
                var n = a(o.Z.getHighlightedMessageIds(e));
                n.sort(r.default.compare);
                return n.filter((function(e) {
                    return r.default.compare(e, t) > 0
                }))
            }

            function c(e, t) {
                var n = o.Z.getHighlightedMessageIds(e),
                    i = !0,
                    u = !1,
                    a = void 0;
                try {
                    for (var l, s = n[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                        var c = l.value;
                        if (r.default.compare(c, t) > 0) return !0
                    }
                } catch (e) {
                    u = !0;
                    a = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (u) throw a
                    }
                }
                return !1
            }
        },
        350532: (e, t, n) => {
            n.d(t, {
                OL: () => i,
                hB: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2022-07_channel_highlights",
                label: "Channel Highlights",
                defaultConfig: {
                    showChannelHighlights: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Channel Highlights",
                    config: {
                        showChannelHighlights: !0
                    }
                }]
            });

            function i() {
                return r.useExperiment({
                    location: "9a5018_1"
                }, {
                    autoTrackExposure: !1
                }).showChannelHighlights
            }

            function o() {
                return r.getCurrentConfig({
                    location: "9a5018_2"
                }, {
                    autoTrackExposure: !1
                }).showChannelHighlights
            }
        },
        439683: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(202351),
                i = n(744564),
                o = n(841800),
                u = n(5544),
                a = n(9430),
                l = n(473903),
                s = n(652591),
                c = n(2590);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function E(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var g = new Set,
                v = {},
                O = {},
                y = {},
                I = {},
                N = {};
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z, u.ZP)
                };
                r.getHighlightedMessageIds = function(e) {
                    var t;
                    return null !== (t = v[e]) && void 0 !== t ? t : g
                };
                r.getTempHighlightedMessageIds = function(e) {
                    var t;
                    return null !== (t = I[e]) && void 0 !== t ? t : g
                };
                r.getHighlightedMessageIdCount = function(e) {
                    var t, n;
                    return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0
                };
                r.getLastFetchedMillis = function(e) {
                    return y[e]
                };
                r.isLoading = function(e) {
                    return "loading" === O[e]
                };
                return n
            }(r.ZP.Store);
            T.displayName = "ChannelHighlightsStore";
            const A = new T(i.Z, {
                CHANNEL_HIGHLIGHTS_FETCH_START: function(e) {
                    var t = e.guildId;
                    O[t] = "loading"
                },
                CHANNEL_HIGHLIGHTS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.data;
                    y[t] = Date.now();
                    var r = l.default.getCurrentUser();
                    if (null == n || null == r) return !1;
                    N[t] = n.load_id;
                    n.channels.forEach((function(e) {
                        v[e.channel_id] = new Set(e.highlighted_message_ids.slice(0, 5))
                    }));
                    s.default.track(c.rMx.GUILD_CHANNEL_HIGHLIGHTS_LOADED, {
                        guild_id: t,
                        num_channels_highlighted: n.channels.length
                    });
                    delete O[t]
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    var t = e.guildId,
                        n = e.details;
                    (null == n ? void 0 : n.type) === o.Ff.HOME && null != t && (I[t] = new Set(n.highlightMessageIds))
                }
            })
        },
        53645: (e, t, n) => {
            n.d(t, {
                SJ: () => p,
                O1: () => r,
                xp: () => h,
                n_: () => g,
                kQ: () => v,
                Ur: () => O,
                FI: () => y
            });
            var r, i = n(441143),
                o = n.n(i),
                u = n(496486),
                a = n.n(u),
                l = n(608575),
                s = n(131868),
                c = (n(418705), n(318277)),
                f = (n(515169), n(567403)),
                d = (n(682776),
                    n(678005)),
                E = n(2590),
                _ = n(473708),
                p = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
            ! function(e) {
                e[e.AND = 0] = "AND";
                e[e.OR = 1] = "OR"
            }(r || (r = {}));

            function h(e) {
                var t = l.parse(e, !0).query,
                    n = t.code,
                    r = t.state,
                    i = t.error,
                    u = t.error_description;
                o()(!Array.isArray(n), "Received multiple query param values for code");
                o()(!Array.isArray(r), "Received multiple query param values for state");
                o()(!Array.isArray(i), "Received multiple query param values for error");
                o()(!Array.isArray(u), "Received multiple query param values for error_description");
                return {
                    code: n,
                    state: r,
                    error: i,
                    errorDescription: u
                }
            }

            function g(e) {
                var t = e.connectionType,
                    n = e.connectionMetadataField,
                    r = e.operator,
                    i = e.operatorText,
                    o = e.value,
                    u = null,
                    a = Math.round(Number(o));
                switch (r) {
                    case d.iO.EQUAL:
                        u = _.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE;
                        t === E.ABu.PAYPAL && n === d.PC.PAYPAL_VERIFIED && (u = _.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                        break;
                    case d.iO.NOT_EQUAL:
                        u = _.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                        break;
                    case d.iO.LESS_THAN:
                        u = _.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST;
                        a = Math.max(0, a - 1);
                        break;
                    case d.iO.GREATER_THAN:
                        u = _.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST;
                        a = Math.max(0, a + 1);
                        break;
                    case void 0:
                    case null:
                        return null
                }
                null != i && (u = i);
                if (u instanceof s._H && null != r) switch (t) {
                    case E.ABu.REDDIT:
                        switch (n) {
                            case d.PC.CREATED_AT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.REDDIT_TOTAL_KARMA:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                            karma: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.REDDIT_GOLD:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                                    }
                                });
                                break;
                            case d.PC.REDDIT_MOD:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case E.ABu.STEAM:
                        switch (n) {
                            case d.PC.CREATED_AT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.STEAM_GAME_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.STEAM_ITEM_COUNT_TF2:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.STEAM_ITEM_COUNT_DOTA2:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case E.ABu.TWITTER:
                        switch (n) {
                            case d.PC.CREATED_AT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.TWITTER_VERIFIED:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                                    }
                                });
                                break;
                            case d.PC.TWITTER_FOLLOWERS_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.TWITTER_STATUSES_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case E.ABu.PAYPAL:
                        switch (n) {
                            case d.PC.CREATED_AT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.PAYPAL_VERIFIED:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case E.ABu.EBAY:
                        switch (n) {
                            case d.PC.CREATED_AT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.EBAY_TOP_RATED_SELLER:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                                    }
                                });
                                break;
                            case d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                            value: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case E.ABu.TIKTOK:
                        switch (n) {
                            case d.PC.TIKTOK_VERIFIED:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                                    }
                                });
                                break;
                            case d.PC.TIKTOK_FOLLOWER_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.TIKTOK_FOLLOWING_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            case d.PC.TIKTOK_LIKES_COUNT:
                                u = u.format({
                                    platformQuantityHook: function() {
                                        return _.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                            count: a
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    default:
                        return null
                }
                return u
            }

            function v(e) {
                return Object.values(e.roles).some((function(e) {
                    var t;
                    return null === (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections)
                }))
            }

            function O(e) {
                var t = e.guildMember,
                    n = e.guild,
                    r = e.channel,
                    i = e.onlyChannelConnectionRoles,
                    u = void 0 !== i && i;
                if (null == t) return null;
                null == n && null != r && (n = f.Z.getGuild(r.getGuildId()));
                if (null == n) return null;
                var l, s = t.roles.map((function(e) {
                        var t;
                        return null == n || null === (t = n.roles) || void 0 === t ? void 0 : t[e]
                    })).filter((function(e) {
                        var t;
                        return null === (null == e || null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections)
                    })).sort((function(e, t) {
                        o()(null != e && null != t, "roleA or roleB is null");
                        return t.position - e.position
                    })),
                    d = a().intersection(s, (0, c.Z)(r));
                if (d.length > 0) {
                    var E;
                    return null !== (E = d[0]) && void 0 !== E ? E : null
                }
                return u ? null : null !== (l = s[0]) && void 0 !== l ? l : null
            }

            function y(e, t) {
                if (null == e || "" === e) return null;
                var n = new Date(e);
                return n instanceof Date && !isNaN(n.getTime()) ? n.toLocaleDateString(t, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                }) : null
            }
        },
        678005: (e, t, n) => {
            n.d(t, {
                iO: () => r,
                PC: () => i,
                Kt: () => u,
                xn: () => o
            });
            var r, i;
            ! function(e) {
                e[e.EQUAL = 1] = "EQUAL";
                e[e.NOT_EQUAL = 2] = "NOT_EQUAL";
                e[e.LESS_THAN = 3] = "LESS_THAN";
                e[e.GREATER_THAN = 4] = "GREATER_THAN"
            }(r || (r = {}));
            ! function(e) {
                e.CREATED_AT = "created_at";
                e.REDDIT_TOTAL_KARMA = "total_karma";
                e.REDDIT_GOLD = "gold";
                e.REDDIT_MOD = "mod";
                e.STEAM_GAME_COUNT = "game_count";
                e.STEAM_ITEM_COUNT_TF2 = "item_count_tf2";
                e.STEAM_ITEM_COUNT_DOTA2 = "item_count_dota2";
                e.TWITTER_VERIFIED = "verified";
                e.TWITTER_FOLLOWERS_COUNT = "followers_count";
                e.TWITTER_STATUSES_COUNT = "statuses_count";
                e.PAYPAL_VERIFIED = "verified";
                e.EBAY_POSITIVE_FEEDBACK_PERCENTAGE = "positive_feedback_percentage";
                e.EBAY_TOP_RATED_SELLER = "top_rated_seller";
                e.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT = "unique_negative_feedback_count";
                e.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT = "unique_positive_feedback_count";
                e.TIKTOK_VERIFIED = "verified";
                e.TIKTOK_FOLLOWER_COUNT = "follower_count";
                e.TIKTOK_FOLLOWING_COUNT = "following_count";
                e.TIKTOK_LIKES_COUNT = "likes_count"
            }(i || (i = {}));
            var o, u = "application";
            ! function(e) {
                e[e.INTEGER_LESS_THAN_EQUAL = 1] = "INTEGER_LESS_THAN_EQUAL";
                e[e.INTEGER_GREATER_THAN_EQUAL = 2] = "INTEGER_GREATER_THAN_EQUAL";
                e[e.INTEGER_EQUAL = 3] = "INTEGER_EQUAL";
                e[e.INTEGER_NOT_EQUAL = 4] = "INTEGER_NOT_EQUAL";
                e[e.DATETIME_LESS_THAN_EQUAL = 5] = "DATETIME_LESS_THAN_EQUAL";
                e[e.DATETIME_GREATER_THAN_EQUAL = 6] = "DATETIME_GREATER_THAN_EQUAL";
                e[e.BOOLEAN_EQUAL = 7] = "BOOLEAN_EQUAL";
                e[e.BOOLEAN_NOT_EQUAL = 8] = "BOOLEAN_NOT_EQUAL"
            }(o || (o = {}))
        },
        497842: (e, t, n) => {
            n.d(t, {
                Z: () => D,
                H: () => M
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(579344);

            function u(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            u(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            u(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var s = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function c(e) {
                (0, i.openModalLazy)(a((function() {
                    var t, i;
                    return s(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(33227), n.e(49092), n.e(70462)]).then(n.bind(n, 170462))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(i, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                l(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e
                                    }, t))
                                }]
                        }
                    }))
                })))
            }

            function f(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            f(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            f(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var _ = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0,
                                    i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function p(e, t) {
                (0, i.openModalLazy)(d((function() {
                    var i, o;
                    return _(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(33227), n.e(49092), n.e(75309)]).then(n.bind(n, 775309))];
                            case 1:
                                i = u.sent(), o = i.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(o, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                E(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e,
                                        platformType: t
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function h(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function g(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            h(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            h(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var O = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function y(e) {
                (0, i.openModalLazy)(g((function() {
                    var t, i;
                    return O(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(1653), n.e(84441), n.e(33227), n.e(49092), n.e(70245)]).then(n.bind(n, 670245))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(i, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                v(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e
                                    }, t))
                                }]
                        }
                    }))
                })))
            }
            var I = n(955121),
                N = n(120415),
                T = n(678005),
                A = n(2590);

            function C(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            C(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            C(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var b = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function M(e) {
                return R.apply(this, arguments)
            }

            function R() {
                R = m((function(e) {
                    var t, n, r, i, u, a, l, s, c, f, d, E = arguments;
                    return b(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                t = E.length > 1 && void 0 !== E[1] ? E[1] : {}, n = t.location, r = t.twoWayLinkType, i = E.length > 2 ? E[2] : void 0;
                                u = 700;
                                a = 640;
                                l = Math.round(screen.width / 2 - u / 2);
                                s = screen.height > a ? Math.round(screen.height / 2 - a / 2) : 0;
                                c = null;
                                (0, N.nI)() || (c = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(A.Z5c.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(s, ",left=").concat(l, ",width=").concat(u, ",height=").concat(a)));
                                return null != (f = i) || e === T.Kt ? [3, 2] : [4, o.Z.authorize(e, {
                                    location: n,
                                    twoWayLinkType: r
                                })];
                            case 1:
                                d = _.sent().body;
                                f = d.url;
                                _.label = 2;
                            case 2:
                                if (null == f) return [2];
                                null != c ? c.location.href = f : window.open(f);
                                return [2, f]
                        }
                    }))
                }));
                return R.apply(this, arguments)
            }

            function D(e, t, o) {
                e === A.ABu.LEAGUE_OF_LEGENDS && (e = A.ABu.RIOT_GAMES);
                e !== A.ABu.CRUNCHYROLL ? e !== A.ABu.XBOX ? e !== A.ABu.PLAYSTATION && e !== A.ABu.PLAYSTATION_STAGING ? e !== A.ABu.DOMAIN ? null == o ? M(e, {
                    location: t
                }) : (0, I.q)({
                    shouldConfirm: !0,
                    href: o,
                    onConfirm: function() {
                        M(e, {
                            location: t
                        }, o)
                    }
                }) : (0, i.openModalLazy)(m((function() {
                    var e, i;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(39814)]).then(n.bind(n, 839814))];
                            case 1:
                                e = o.sent(), i = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(i, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                S(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: [null != t ? t : "unknown"]
                                    }, e))
                                }]
                        }
                    }))
                }))) : p([null != t ? t : "unknown"], e) : y([null != t ? t : "unknown"]) : c([null != t ? t : "unknown"])
            }
        },
        520436: (e, t, n) => {
            n.d(t, {
                s6: () => A,
                ef: () => m,
                Vv: () => S,
                _: () => b,
                On: () => M,
                LO: () => U,
                bp: () => Z,
                sh: () => H
            });
            var r = n(284157),
                i = n(349139),
                o = n(281110),
                u = n(744564),
                a = n(105783),
                l = n(704560),
                s = n(563367),
                c = n(679450),
                f = n(652591),
                d = n(22176),
                E = n(412491),
                _ = n(409125),
                p = n(919694),
                h = n(2590),
                g = n(473708);

            function v(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function O(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            v(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            v(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }
            var N = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function T(e, t) {
                var n, r;
                f.default.track(h.rMx.REMOTE_COMMAND_SENT, {
                    command_type: e,
                    remote_platform: null === (n = c.Z.getSessionById(t)) || void 0 === n || null === (r = n.clientInfo) || void 0 === r ? void 0 : r.os
                })
            }

            function A() {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = O((function() {
                    var e, t, n;
                    return N(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                e = _.Z.getAwaitingRemoteSessionInfo();
                                t = null == e ? void 0 : e.nonce;
                                u.Z.dispatch({
                                    type: "REMOTE_SESSION_DISCONNECT"
                                });
                                n = [];
                                (null == e ? void 0 : e.type) !== h.ABu.PLAYSTATION && (null == e ? void 0 : e.type) !== h.ABu.PLAYSTATION_STAGING || null == (null == e ? void 0 : e.commandId) || null == (null == e ? void 0 : e.deviceId) || n.push(G(e.type, e.deviceId, e.commandId));
                                null != t && n.push(P(t));
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, Promise.all(n)];
                            case 2:
                                r.sent();
                                return [3, 4];
                            case 3:
                                r.sent();
                                a.Z.show({
                                    title: g.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                                    body: g.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e) {
                u.Z.dispatch({
                    type: "REMOTE_SESSION_CONNECT",
                    sessionId: e
                })
            }

            function S(e, t) {
                var n = t.selfMute,
                    r = t.selfDeaf;
                u.Z.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "VOICE_STATE_UPDATE",
                        self_mute: n,
                        self_deaf: r
                    }
                });
                T("VOICE_STATE_UPDATE", e)
            }

            function b(e) {
                u.Z.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "DISCONNECT"
                    }
                });
                T("DISCONNECT", e);
                A()
            }

            function M(e, t, n, r) {
                var i = (0, l.z)(n);
                if (null != i) {
                    u.Z.dispatch({
                        type: "REMOTE_COMMAND",
                        sessionId: e,
                        payload: I({
                            type: "AUDIO_SETTINGS_UPDATE",
                            context: i,
                            id: t
                        }, r)
                    });
                    T("AUDIO_SETTINGS_UPDATE", e)
                }
            }

            function R() {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = O((function() {
                    var e, t, n, r;
                    return N(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                u.trys.push([0, 2, , 3]);
                                t = null != s.Z.getRTCConnectionId() ? i.o.TRANSFER_EXISTING_CALL : i.o.CREATE_NEW_CALL;
                                return [4, o.ZP.post({
                                    url: h.ANM.CONNECT_REQUEST_CREATE,
                                    body: {
                                        analytics_properties: {
                                            handoff_type: t
                                        }
                                    }
                                })];
                            case 1:
                                n = u.sent();
                                e = n.body.nonce;
                                return [3, 3];
                            case 2:
                                r = u.sent();
                                d.Z.captureException(r);
                                return [3, 3];
                            case 3:
                                return [2, e]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e) {
                return o.ZP.delete({
                    url: h.ANM.CONNECT_REQUEST(e)
                })
            }

            function U(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = O((function(e) {
                    var t, n, r;
                    return N(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_FETCH_DEVICES_START",
                                    platform: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, o.ZP.get({
                                    url: h.ANM.CONSOLES_DEVICES(e)
                                })];
                            case 2:
                                t = i.sent();
                                return [3, 4];
                            case 3:
                                n = i.sent();
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                                    platform: e,
                                    error: n
                                });
                                throw n;
                            case 4:
                                r = t.body.devices;
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
                                    platform: e,
                                    devices: r
                                });
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(e, t) {
                u.Z.dispatch({
                    type: "GAME_CONSOLE_SELECT_DEVICE",
                    platform: e,
                    deviceId: t
                })
            }

            function w(e, t, n, r) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = O((function(e, t, n, i) {
                    var a, l, s;
                    return N(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
                                    platform: e
                                });
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, o.ZP.post({
                                    url: h.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
                                    body: {
                                        command: r.n.CONNECT_VOICE,
                                        channel_id: n.id,
                                        guild_id: n.guild_id,
                                        nonce: i
                                    }
                                })];
                            case 2:
                                a = c.sent();
                                return [3, 4];
                            case 3:
                                l = c.sent();
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                                    platform: e,
                                    error: l
                                });
                                throw l;
                            case 4:
                                s = a.body.id;
                                u.Z.dispatch({
                                    type: "WAIT_FOR_REMOTE_SESSION",
                                    sessionType: e,
                                    nonce: i,
                                    channelId: n.id,
                                    deviceId: t,
                                    commandId: s
                                });
                                return [2, s]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(e, t, n) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = O((function(e, t, n) {
                    var r;
                    return N(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                                    platform: e,
                                    deviceId: t,
                                    commandId: n
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, o.ZP.delete({
                                    url: h.ANM.CONSOLES_DEVICES_COMMAND(e, t, n)
                                })];
                            case 2:
                                i.sent();
                                return [3, 4];
                            case 3:
                                r = i.sent();
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                                    platform: e,
                                    deviceId: t,
                                    commandId: n,
                                    error: r
                                });
                                throw r;
                            case 4:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
                                    platform: e,
                                    deviceId: t,
                                    commandId: n
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function H(e, t, n) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = O((function(e, t, n) {
                    var r;
                    return N(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, E.Z.maybeShowPTTAlert(e)];
                            case 1:
                                i.sent();
                                return [4, A()];
                            case 2:
                                i.sent();
                                return [4, R()];
                            case 3:
                                r = i.sent();
                                return [4, w(e, t, n, r)];
                            case 4:
                                i.sent();
                                (0, p.Z)(n.id, e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        412491: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = n(913413).Z
        },
        550677: (e, t, n) => {
            n.d(t, {
                bJ: () => o,
                X3: () => u,
                zM: () => a,
                tA: () => l,
                uu: () => s,
                KL: () => c,
                Lc: () => f,
                YE: () => r,
                al: () => E,
                Ry: () => d,
                e8: () => _,
                Lw: () => p
            });
            var r, i = n(2590),
                o = "xbox://communitylinking/donut/audio",
                u = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                a = "https://login.live.com",
                l = [i.xVR.VOICE, i.xVR.DM_CHANNELS_READ, i.xVR.GUILDS, i.xVR.GUILDS_MEMBERS_READ, i.xVR.IDENTIFY, i.xVR.CONNECTIONS],
                s = "https://my.account.sony.com",
                c = l,
                f = function(e) {
                    var t = e.guildId,
                        n = e.channelName,
                        r = e.guildName,
                        i = e.channelId,
                        o = e.muted,
                        u = e.deafened,
                        a = e.nonce,
                        l = {
                            channelid: i,
                            guildid: t,
                            channelname: n,
                            guildname: r,
                            muted: String(o),
                            deafened: String(u)
                        };
                    null != a && (l.nonce = a);
                    return new URLSearchParams(l)
                };
            ! function(e) {
                e.PLAYSTATION = "playstation";
                e.XBOX = "xbox"
            }(r || (r = {}));
            var d, E = new Set([r.XBOX, r.PLAYSTATION]);
            new Set([i.M7m.XBOX, i.M7m.PS5]);
            ! function(e) {
                e[e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED";
                e[e.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE";
                e[e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS";
                e[e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED";
                e[e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE";
                e[e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR";
                e[e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED";
                e[e.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND"
            }(d || (d = {}));
            var _ = new Set([d.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                p = "console error alert"
        },
        919694: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(61209),
                i = n(563367),
                o = n(679450),
                u = n(652591),
                a = n(2590);

            function l(e, t, n) {
                var l, s;
                u.default.track(a.rMx.VOICE_CALL_TRANSFER, {
                    source_platform: null != n ? null === (l = o.Z.getSessionById(n)) || void 0 === l ? void 0 : l.clientInfo.os : "discord_client",
                    guild_id: null === (s = r.Z.getChannel(e)) || void 0 === s ? void 0 : s.guild_id,
                    channel_id: e,
                    rtc_connection_id: i.Z.getRTCConnectionId(),
                    target_platform: t
                })
            }
        },
        913413: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                i = n(667294),
                o = n(418705),
                u = n(264817),
                a = n(895303),
                l = n(497842),
                s = n(515169),
                c = n(602351),
                f = n(652591),
                d = n(202351),
                E = n(409125),
                _ = n(253847),
                p = n.n(_);

            function h(e) {
                var t = e.body,
                    n = e.dismissCallback,
                    o = e.errorCodeMessage,
                    u = (0, d.e7)([E.Z], (function() {
                        return E.Z.getRemoteSessionId()
                    }));
                i.useEffect((function() {
                    null != u && n()
                }), [u, n]);
                return null == o ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [t, (0, r.jsx)("div", {
                        className: p().errorCodeMessage,
                        children: o
                    })]
                })
            }
            var g = n(550677),
                v = n(2590),
                O = n(473708),
                y = n(972692),
                I = n.n(y);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var C = "game_console_alert_modal",
                m = "game_console_ptt_alert_modal";
            const S = {
                maybeShowPTTAlert: function(e) {
                    if (c.Z.getMode() !== v.pM4.PUSH_TO_TALK || (0, s.un)(o.z$.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
                    var t, n = (N(t = {}, v.ABu.XBOX, O.Z.Messages.PTT_NOT_SUPPORTED_XBOX), N(t, v.ABu.PLAYSTATION, O.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION), N(t, v.ABu.PLAYSTATION_STAGING, O.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION), t)[e];
                    return null == n ? Promise.resolve() : new Promise((function(e) {
                        var t = function() {
                                (0, s.EW)(o.z$.CONSOLE_PTT_DISABLE_ALERT);
                                e()
                            },
                            i = function(e) {
                                return (0, r.jsx)(a.default, A(T({}, e), {
                                    title: n,
                                    body: O.Z.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                                    onConfirm: t,
                                    titleClassName: I().title
                                }))
                            };
                        (0, u.nf)(m) ? (0, u.o)(m, i) : (0, u.h7)(i, {
                            modalKey: m
                        })
                    }))
                },
                showSelfDismissableAlert: function(e) {
                    var t = e.title,
                        n = e.body,
                        i = e.errorCodeMessage,
                        o = e.reconnectPlatformType,
                        s = function() {
                            if (null != o) {
                                (0, l.Z)(o);
                                f.default.track(v.rMx.ACCOUNT_LINK_STEP, {
                                    previous_step: g.Lw,
                                    current_step: "desktop oauth",
                                    platform_type: o
                                })
                            }
                        },
                        c = (0, r.jsx)(h, {
                            body: n,
                            errorCodeMessage: i,
                            dismissCallback: function() {
                                return (0, u.Mr)(C)
                            }
                        }),
                        d = function(e) {
                            return (0, r.jsx)(a.default, A(T({}, e), {
                                title: t,
                                body: c,
                                onConfirm: s
                            }))
                        };
                    (0, u.nf)(C) ? (0, u.o)(C, d) : (0, u.h7)(d, {
                        modalKey: C
                    })
                }
            }
        },
        924066: (e, t, n) => {
            n.d(t, {
                JL: () => p,
                P9: () => h,
                p9: () => g,
                wq: () => v,
                h_: () => O
            });
            var r, i = n(940060),
                o = n(202351),
                u = n(409125),
                a = n(5544),
                l = n(567403),
                s = n(682776),
                c = n(407561),
                f = n(176758),
                d = n(2590),
                E = n(473708),
                _ = function(e, t) {
                    return e.isPrivate() || t.can(i.Z.combine(d.Plq.CONNECT, d.Plq.VIEW_CHANNEL), e)
                };

            function p(e, t, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (e.isPrivate()) return !0;
                var i, o = t.getGuild(e.getGuildId()),
                    u = null !== (i = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
                return !(e.isGuildStageVoice() && u <= 0) && (!(r && !_(e, n)) && (!!n.can(d.Plq.STREAM, e) && (null != o && o.afkChannelId !== e.id)))
            }

            function h(e) {
                switch (e) {
                    case r.REMOTE_MODE:
                        return E.Z.Messages.CONSOLE_STREAM_UNAVAILABLE;
                    case r.CHANNEL_FULL:
                        return E.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
                    case r.NO_PERMISSION:
                        return E.Z.Messages.STREAM_NO_PERMISSION_CTA;
                    default:
                        return E.Z.Messages.WATCH_STREAM
                }
            }! function(e) {
                e[e.REMOTE_MODE = 0] = "REMOTE_MODE";
                e[e.CHANNEL_FULL = 1] = "CHANNEL_FULL";
                e[e.NO_PERMISSION = 2] = "NO_PERMISSION"
            }(r || (r = {}));

            function g(e, t, n, i, o) {
                var u;
                if (null == e) return [!1, r.NO_PERMISSION];
                var a = t.isInChannel(e.id),
                    l = (0, f.rY)(e, t, n),
                    s = _(e, i),
                    c = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId();
                c ? u = r.REMOTE_MODE : s || a ? l && !a && (u = r.CHANNEL_FULL) : u = r.NO_PERMISSION;
                return [!__OVERLAY__ && !c && (a || s && !l), u]
            }

            function v(e) {
                return (0, o.Wu)([c.Z, l.Z, s.Z, u.Z], (function() {
                    return g(e, c.Z, l.Z, s.Z, u.Z)
                }))
            }

            function O(e, t, n) {
                var r = [],
                    i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var l, s = e[a.Zb][Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                        var c = l.value.channel;
                        p(c, t, n) && r.push(c)
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (o) throw u
                    }
                }
                return r
            }
        },
        39649: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(36256);

            function i(e) {
                return e.supportsInApp(r.AN.VIDEO)
            }
        },
        716371: (e, t, n) => {
            n.d(t, {
                n: () => c,
                J: () => f
            });
            var r = n(202351),
                i = n(21372),
                o = n(567403),
                u = n(746477),
                a = n(473903);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                var t = s(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, u.Z, a.default, i.ZP], 4),
                    n = t[0],
                    r = t[1],
                    l = t[2],
                    c = t[3];
                if (null == e) return !1;
                var f = n.getGuild(e),
                    d = r.getCheck(e).notClaimed,
                    E = l.getCurrentUser(),
                    _ = !1;
                if (null != E) {
                    var p, h;
                    _ = null !== (h = null === (p = c.getMember(e, E.id)) || void 0 === p ? void 0 : p.isPending) && void 0 !== h && h
                }
                var g = _ || d;
                return g && !!(null == f ? void 0 : f.hasVerificationGate())
            }

            function f(e) {
                return (0,
                    r.e7)([o.Z, u.Z, a.default, i.ZP], (function() {
                    return null != e && c(e, [o.Z, u.Z, a.default, i.ZP])
                }), [e])
            }
        },
        998918: (e, t, n) => {
            n.d(t, {
                RX: () => i,
                kC: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2022-08_guild_unreads",
                label: "Guild Unreads",
                defaultConfig: {
                    allowUnreadHighlightsOption: !1
                },
                treatments: [{
                    id: 1,
                    label: 'Allow "Highlights" as an Unreads Option',
                    config: {
                        allowUnreadHighlightsOption: !0
                    }
                }]
            });

            function i() {
                return r.useExperiment({
                    location: "6728b0_1"
                }, {
                    autoTrackExposure: !1
                }).allowUnreadHighlightsOption
            }

            function o() {
                return r.getCurrentConfig({
                    location: "6728b0_2"
                }, {
                    autoTrackExposure: !1
                }).allowUnreadHighlightsOption
            }
        },
        839266: (e, t, n) => {
            n.d(t, {
                LS: () => E,
                nH: () => _,
                j$: () => p
            });
            var r = n(441143),
                i = n.n(r),
                o = n(202351),
                u = n(487685),
                a = n(382060),
                l = n(61209),
                s = n(9430),
                c = n(998918),
                f = n(736401),
                d = n(2590);

            function E(e) {
                var t = e.isExperimentEnabled,
                    n = e.hasUserEnabledGuildUnreads,
                    r = e.channelNotificationOverrides,
                    i = e.categoryNotificationOverrides,
                    o = e.unreadSetting,
                    u = e.hasJoinedThread,
                    a = null != r && r.message_notifications !== d.bL.NULL || null != i && i.message_notifications !== d.bL.NULL;
                return t && n ? u ? f.N.ALL_MESSAGES : a ? null == o || o === f.N.NULL ? f.N.ALL_MESSAGES : o : null != o ? o : f.N.NULL : f.N.ALL_MESSAGES
            }

            function _(e) {
                var t = null == e ? void 0 : e.guild_id,
                    n = null == e ? void 0 : e.parent_id,
                    r = (0, o.e7)([l.Z], (function() {
                        return l.Z.getChannel(n)
                    }), [n]),
                    a = (null == e ? void 0 : e.isThread()) ? n : null == e ? void 0 : e.id;
                i()(null != a, "parent_id cannot be null for threads");
                var d = (null == e ? void 0 : e.isThread()) ? null == r ? void 0 : r.parent_id : n,
                    _ = (0, c.RX)(),
                    p = (0, o.cj)([s.Z], (function() {
                        return {
                            channelNotificationOverrides: s.Z.getChannelOverrides(t)[a],
                            categoryNotificationOverrides: null != d ? s.Z.getChannelOverrides(t)[d] : null,
                            unreadSetting: null != t ? s.Z.getChannelUnreadSetting(t, a) : f.N.NULL,
                            hasUserEnabledGuildUnreads: null != t && s.Z.isGuildUnreadSettingEnabled(t)
                        }
                    }), [t, a, d]),
                    h = p.channelNotificationOverrides,
                    g = p.categoryNotificationOverrides,
                    v = p.unreadSetting;
                return E({
                    isExperimentEnabled: _,
                    hasUserEnabledGuildUnreads: p.hasUserEnabledGuildUnreads,
                    channelNotificationOverrides: h,
                    categoryNotificationOverrides: g,
                    unreadSetting: v,
                    hasJoinedThread: (0, o.e7)([u.Z], (function() {
                        return null != (null == e ? void 0 : e.id) && u.Z.hasJoined(e.id)
                    }))
                })
            }

            function p(e) {
                var t = e.guild_id,
                    n = l.Z.getBasicChannel(e.parent_id),
                    r = (0, a.Q5)(e.type) ? e.parent_id : e.id;
                i()(null != r, "parent_id cannot be null for threads");
                var o = (0, a.Q5)(e.type) ? null == n ? void 0 : n.parent_id : e.parent_id,
                    f = (0, c.kC)(),
                    d = s.Z.isGuildUnreadSettingEnabled(t),
                    _ = s.Z.getChannelUnreadSetting(t, r);
                return E({
                    isExperimentEnabled: f,
                    hasUserEnabledGuildUnreads: d,
                    channelNotificationOverrides: s.Z.getChannelOverrides(t)[r],
                    categoryNotificationOverrides: null != o ? s.Z.getChannelOverrides(t)[o] : null,
                    unreadSetting: _,
                    hasJoinedThread: u.Z.hasJoined(e.id)
                })
            }
        },
        335186: (e, t, n) => {
            n.d(t, {
                Zz: () => a,
                K4: () => l,
                q9: () => c
            });
            var r = n(441143),
                i = n.n(r),
                o = n(268335),
                u = n(473708);

            function a(e) {
                var t = o.Z.find((function(t) {
                    return t.alpha2 === e
                }));
                if (null != t) return {
                    name: t.name,
                    code: t.phoneCountryCode,
                    alpha2: t.alpha2
                }
            }

            function l() {
                var e = function(e) {
                    var t = o.Z.find((function(t) {
                        return t.name === e
                    }));
                    if (null != t) return {
                        name: t.name,
                        code: t.phoneCountryCode,
                        alpha2: t.alpha2
                    }
                }("United States");
                i()(e, "Default country code cannot be missing.");
                return e
            }
            var s = {
                AF: function() {
                    return u.Z.Messages.COUNTRY_NAME_AF
                },
                AX: function() {
                    return u.Z.Messages.COUNTRY_NAME_AX
                },
                AL: function() {
                    return u.Z.Messages.COUNTRY_NAME_AL
                },
                DZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_DZ
                },
                AS: function() {
                    return u.Z.Messages.COUNTRY_NAME_AS
                },
                AD: function() {
                    return u.Z.Messages.COUNTRY_NAME_AD
                },
                AO: function() {
                    return u.Z.Messages.COUNTRY_NAME_AO
                },
                AI: function() {
                    return u.Z.Messages.COUNTRY_NAME_AI
                },
                AQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_AQ
                },
                AG: function() {
                    return u.Z.Messages.COUNTRY_NAME_AG
                },
                AR: function() {
                    return u.Z.Messages.COUNTRY_NAME_AR
                },
                AM: function() {
                    return u.Z.Messages.COUNTRY_NAME_AM
                },
                AW: function() {
                    return u.Z.Messages.COUNTRY_NAME_AW
                },
                AC: function() {
                    return u.Z.Messages.COUNTRY_NAME_AC
                },
                AU: function() {
                    return u.Z.Messages.COUNTRY_NAME_AU
                },
                AT: function() {
                    return u.Z.Messages.COUNTRY_NAME_AT
                },
                AZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_AZ
                },
                BS: function() {
                    return u.Z.Messages.COUNTRY_NAME_BS
                },
                BH: function() {
                    return u.Z.Messages.COUNTRY_NAME_BH
                },
                BD: function() {
                    return u.Z.Messages.COUNTRY_NAME_BD
                },
                BB: function() {
                    return u.Z.Messages.COUNTRY_NAME_BB
                },
                BY: function() {
                    return u.Z.Messages.COUNTRY_NAME_BY
                },
                BE: function() {
                    return u.Z.Messages.COUNTRY_NAME_BE
                },
                BZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_BZ
                },
                BJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_BJ
                },
                BM: function() {
                    return u.Z.Messages.COUNTRY_NAME_BM
                },
                BT: function() {
                    return u.Z.Messages.COUNTRY_NAME_BT
                },
                BO: function() {
                    return u.Z.Messages.COUNTRY_NAME_BO
                },
                BQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_BQ
                },
                BA: function() {
                    return u.Z.Messages.COUNTRY_NAME_BA
                },
                BW: function() {
                    return u.Z.Messages.COUNTRY_NAME_BW
                },
                BV: function() {
                    return u.Z.Messages.COUNTRY_NAME_BV
                },
                BR: function() {
                    return u.Z.Messages.COUNTRY_NAME_BR
                },
                IO: function() {
                    return u.Z.Messages.COUNTRY_NAME_IO
                },
                BN: function() {
                    return u.Z.Messages.COUNTRY_NAME_BN
                },
                BG: function() {
                    return u.Z.Messages.COUNTRY_NAME_BG
                },
                BF: function() {
                    return u.Z.Messages.COUNTRY_NAME_BF
                },
                BI: function() {
                    return u.Z.Messages.COUNTRY_NAME_BI
                },
                KH: function() {
                    return u.Z.Messages.COUNTRY_NAME_KH
                },
                CM: function() {
                    return u.Z.Messages.COUNTRY_NAME_CM
                },
                CA: function() {
                    return u.Z.Messages.COUNTRY_NAME_CA
                },
                CV: function() {
                    return u.Z.Messages.COUNTRY_NAME_CV
                },
                KY: function() {
                    return u.Z.Messages.COUNTRY_NAME_KY
                },
                CF: function() {
                    return u.Z.Messages.COUNTRY_NAME_CF
                },
                TD: function() {
                    return u.Z.Messages.COUNTRY_NAME_TD
                },
                CL: function() {
                    return u.Z.Messages.COUNTRY_NAME_CL
                },
                CN: function() {
                    return u.Z.Messages.COUNTRY_NAME_CN
                },
                CX: function() {
                    return u.Z.Messages.COUNTRY_NAME_CX
                },
                CC: function() {
                    return u.Z.Messages.COUNTRY_NAME_CC
                },
                CO: function() {
                    return u.Z.Messages.COUNTRY_NAME_CO
                },
                KM: function() {
                    return u.Z.Messages.COUNTRY_NAME_KM
                },
                CG: function() {
                    return u.Z.Messages.COUNTRY_NAME_CG
                },
                CD: function() {
                    return u.Z.Messages.COUNTRY_NAME_CD
                },
                CK: function() {
                    return u.Z.Messages.COUNTRY_NAME_CK
                },
                CR: function() {
                    return u.Z.Messages.COUNTRY_NAME_CR
                },
                CI: function() {
                    return u.Z.Messages.COUNTRY_NAME_CI
                },
                HR: function() {
                    return u.Z.Messages.COUNTRY_NAME_HR
                },
                CU: function() {
                    return u.Z.Messages.COUNTRY_NAME_CU
                },
                CW: function() {
                    return u.Z.Messages.COUNTRY_NAME_CW
                },
                CY: function() {
                    return u.Z.Messages.COUNTRY_NAME_CY
                },
                CZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_CZ
                },
                DK: function() {
                    return u.Z.Messages.COUNTRY_NAME_DK
                },
                DG: function() {
                    return u.Z.Messages.COUNTRY_NAME_DG
                },
                DJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_DJ
                },
                DM: function() {
                    return u.Z.Messages.COUNTRY_NAME_DM
                },
                DO: function() {
                    return u.Z.Messages.COUNTRY_NAME_DO
                },
                TP: function() {
                    return u.Z.Messages.COUNTRY_NAME_TP
                },
                EC: function() {
                    return u.Z.Messages.COUNTRY_NAME_EC
                },
                EG: function() {
                    return u.Z.Messages.COUNTRY_NAME_EG
                },
                SV: function() {
                    return u.Z.Messages.COUNTRY_NAME_SV
                },
                GQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_GQ
                },
                ER: function() {
                    return u.Z.Messages.COUNTRY_NAME_ER
                },
                EE: function() {
                    return u.Z.Messages.COUNTRY_NAME_EE
                },
                ET: function() {
                    return u.Z.Messages.COUNTRY_NAME_ET
                },
                FK: function() {
                    return u.Z.Messages.COUNTRY_NAME_FK
                },
                FO: function() {
                    return u.Z.Messages.COUNTRY_NAME_FO
                },
                FJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_FJ
                },
                FI: function() {
                    return u.Z.Messages.COUNTRY_NAME_FI
                },
                FR: function() {
                    return u.Z.Messages.COUNTRY_NAME_FR
                },
                GF: function() {
                    return u.Z.Messages.COUNTRY_NAME_GF
                },
                PF: function() {
                    return u.Z.Messages.COUNTRY_NAME_PF
                },
                TF: function() {
                    return u.Z.Messages.COUNTRY_NAME_TF
                },
                GA: function() {
                    return u.Z.Messages.COUNTRY_NAME_GA
                },
                GM: function() {
                    return u.Z.Messages.COUNTRY_NAME_GM
                },
                GE: function() {
                    return u.Z.Messages.COUNTRY_NAME_GE
                },
                DE: function() {
                    return u.Z.Messages.COUNTRY_NAME_DE
                },
                GH: function() {
                    return u.Z.Messages.COUNTRY_NAME_GH
                },
                GI: function() {
                    return u.Z.Messages.COUNTRY_NAME_GI
                },
                GR: function() {
                    return u.Z.Messages.COUNTRY_NAME_GR
                },
                GL: function() {
                    return u.Z.Messages.COUNTRY_NAME_GL
                },
                GD: function() {
                    return u.Z.Messages.COUNTRY_NAME_GD
                },
                GP: function() {
                    return u.Z.Messages.COUNTRY_NAME_GP
                },
                GU: function() {
                    return u.Z.Messages.COUNTRY_NAME_GU
                },
                GT: function() {
                    return u.Z.Messages.COUNTRY_NAME_GT
                },
                GG: function() {
                    return u.Z.Messages.COUNTRY_NAME_GG
                },
                GN: function() {
                    return u.Z.Messages.COUNTRY_NAME_GN
                },
                GW: function() {
                    return u.Z.Messages.COUNTRY_NAME_GW
                },
                GY: function() {
                    return u.Z.Messages.COUNTRY_NAME_GY
                },
                HT: function() {
                    return u.Z.Messages.COUNTRY_NAME_HT
                },
                HM: function() {
                    return u.Z.Messages.COUNTRY_NAME_HM
                },
                VA: function() {
                    return u.Z.Messages.COUNTRY_NAME_VA
                },
                HN: function() {
                    return u.Z.Messages.COUNTRY_NAME_HN
                },
                HK: function() {
                    return u.Z.Messages.COUNTRY_NAME_HK
                },
                HU: function() {
                    return u.Z.Messages.COUNTRY_NAME_HU
                },
                IS: function() {
                    return u.Z.Messages.COUNTRY_NAME_IS
                },
                IN: function() {
                    return u.Z.Messages.COUNTRY_NAME_IN
                },
                ID: function() {
                    return u.Z.Messages.COUNTRY_NAME_ID
                },
                IR: function() {
                    return u.Z.Messages.COUNTRY_NAME_IR
                },
                IQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_IQ
                },
                IE: function() {
                    return u.Z.Messages.COUNTRY_NAME_IE
                },
                IM: function() {
                    return u.Z.Messages.COUNTRY_NAME_IM
                },
                IL: function() {
                    return u.Z.Messages.COUNTRY_NAME_IL
                },
                IT: function() {
                    return u.Z.Messages.COUNTRY_NAME_IT
                },
                JM: function() {
                    return u.Z.Messages.COUNTRY_NAME_JM
                },
                JP: function() {
                    return u.Z.Messages.COUNTRY_NAME_JP
                },
                JE: function() {
                    return u.Z.Messages.COUNTRY_NAME_JE
                },
                JO: function() {
                    return u.Z.Messages.COUNTRY_NAME_JO
                },
                KZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_KZ
                },
                KE: function() {
                    return u.Z.Messages.COUNTRY_NAME_KE
                },
                KI: function() {
                    return u.Z.Messages.COUNTRY_NAME_KI
                },
                XK: function() {
                    return u.Z.Messages.COUNTRY_NAME_XK
                },
                KP: function() {
                    return u.Z.Messages.COUNTRY_NAME_KP
                },
                KR: function() {
                    return u.Z.Messages.COUNTRY_NAME_KR
                },
                KW: function() {
                    return u.Z.Messages.COUNTRY_NAME_KW
                },
                KG: function() {
                    return u.Z.Messages.COUNTRY_NAME_KG
                },
                LA: function() {
                    return u.Z.Messages.COUNTRY_NAME_LA
                },
                LV: function() {
                    return u.Z.Messages.COUNTRY_NAME_LV
                },
                LB: function() {
                    return u.Z.Messages.COUNTRY_NAME_LB
                },
                LS: function() {
                    return u.Z.Messages.COUNTRY_NAME_LS
                },
                LR: function() {
                    return u.Z.Messages.COUNTRY_NAME_LR
                },
                LY: function() {
                    return u.Z.Messages.COUNTRY_NAME_LY
                },
                LI: function() {
                    return u.Z.Messages.COUNTRY_NAME_LI
                },
                LT: function() {
                    return u.Z.Messages.COUNTRY_NAME_LT
                },
                LU: function() {
                    return u.Z.Messages.COUNTRY_NAME_LU
                },
                MO: function() {
                    return u.Z.Messages.COUNTRY_NAME_MO
                },
                MK: function() {
                    return u.Z.Messages.COUNTRY_NAME_MK
                },
                MG: function() {
                    return u.Z.Messages.COUNTRY_NAME_MG
                },
                MW: function() {
                    return u.Z.Messages.COUNTRY_NAME_MW
                },
                MY: function() {
                    return u.Z.Messages.COUNTRY_NAME_MY
                },
                MV: function() {
                    return u.Z.Messages.COUNTRY_NAME_MV
                },
                ML: function() {
                    return u.Z.Messages.COUNTRY_NAME_ML
                },
                MT: function() {
                    return u.Z.Messages.COUNTRY_NAME_MT
                },
                MH: function() {
                    return u.Z.Messages.COUNTRY_NAME_MH
                },
                MQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_MQ
                },
                MR: function() {
                    return u.Z.Messages.COUNTRY_NAME_MR
                },
                MU: function() {
                    return u.Z.Messages.COUNTRY_NAME_MU
                },
                YT: function() {
                    return u.Z.Messages.COUNTRY_NAME_YT
                },
                MX: function() {
                    return u.Z.Messages.COUNTRY_NAME_MX
                },
                FM: function() {
                    return u.Z.Messages.COUNTRY_NAME_FM
                },
                MI: function() {
                    return u.Z.Messages.COUNTRY_NAME_MI
                },
                MD: function() {
                    return u.Z.Messages.COUNTRY_NAME_MD
                },
                MC: function() {
                    return u.Z.Messages.COUNTRY_NAME_MC
                },
                MN: function() {
                    return u.Z.Messages.COUNTRY_NAME_MN
                },
                ME: function() {
                    return u.Z.Messages.COUNTRY_NAME_ME
                },
                MS: function() {
                    return u.Z.Messages.COUNTRY_NAME_MS
                },
                MA: function() {
                    return u.Z.Messages.COUNTRY_NAME_MA
                },
                MZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_MZ
                },
                MM: function() {
                    return u.Z.Messages.COUNTRY_NAME_MM
                },
                NA: function() {
                    return u.Z.Messages.COUNTRY_NAME_NA
                },
                NR: function() {
                    return u.Z.Messages.COUNTRY_NAME_NR
                },
                NP: function() {
                    return u.Z.Messages.COUNTRY_NAME_NP
                },
                NL: function() {
                    return u.Z.Messages.COUNTRY_NAME_NL
                },
                AN: function() {
                    return u.Z.Messages.COUNTRY_NAME_AN
                },
                NC: function() {
                    return u.Z.Messages.COUNTRY_NAME_NC
                },
                NZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_NZ
                },
                NI: function() {
                    return u.Z.Messages.COUNTRY_NAME_NI
                },
                NE: function() {
                    return u.Z.Messages.COUNTRY_NAME_NE
                },
                NG: function() {
                    return u.Z.Messages.COUNTRY_NAME_NG
                },
                NU: function() {
                    return u.Z.Messages.COUNTRY_NAME_NU
                },
                NF: function() {
                    return u.Z.Messages.COUNTRY_NAME_NF
                },
                MP: function() {
                    return u.Z.Messages.COUNTRY_NAME_MP
                },
                NO: function() {
                    return u.Z.Messages.COUNTRY_NAME_NO
                },
                OM: function() {
                    return u.Z.Messages.COUNTRY_NAME_OM
                },
                PK: function() {
                    return u.Z.Messages.COUNTRY_NAME_PK
                },
                PW: function() {
                    return u.Z.Messages.COUNTRY_NAME_PW
                },
                PS: function() {
                    return u.Z.Messages.COUNTRY_NAME_PS
                },
                PA: function() {
                    return u.Z.Messages.COUNTRY_NAME_PA
                },
                PG: function() {
                    return u.Z.Messages.COUNTRY_NAME_PG
                },
                PY: function() {
                    return u.Z.Messages.COUNTRY_NAME_PY
                },
                PE: function() {
                    return u.Z.Messages.COUNTRY_NAME_PE
                },
                PH: function() {
                    return u.Z.Messages.COUNTRY_NAME_PH
                },
                PN: function() {
                    return u.Z.Messages.COUNTRY_NAME_PN
                },
                PL: function() {
                    return u.Z.Messages.COUNTRY_NAME_PL
                },
                PT: function() {
                    return u.Z.Messages.COUNTRY_NAME_PT
                },
                PR: function() {
                    return u.Z.Messages.COUNTRY_NAME_PR
                },
                QA: function() {
                    return u.Z.Messages.COUNTRY_NAME_QA
                },
                RE: function() {
                    return u.Z.Messages.COUNTRY_NAME_RE
                },
                RO: function() {
                    return u.Z.Messages.COUNTRY_NAME_RO
                },
                RU: function() {
                    return u.Z.Messages.COUNTRY_NAME_RU
                },
                RW: function() {
                    return u.Z.Messages.COUNTRY_NAME_RW
                },
                BL: function() {
                    return u.Z.Messages.COUNTRY_NAME_BL
                },
                SH: function() {
                    return u.Z.Messages.COUNTRY_NAME_SH
                },
                KN: function() {
                    return u.Z.Messages.COUNTRY_NAME_KN
                },
                LC: function() {
                    return u.Z.Messages.COUNTRY_NAME_LC
                },
                MF: function() {
                    return u.Z.Messages.COUNTRY_NAME_MF
                },
                PM: function() {
                    return u.Z.Messages.COUNTRY_NAME_PM
                },
                VC: function() {
                    return u.Z.Messages.COUNTRY_NAME_VC
                },
                WS: function() {
                    return u.Z.Messages.COUNTRY_NAME_WS
                },
                SM: function() {
                    return u.Z.Messages.COUNTRY_NAME_SM
                },
                ST: function() {
                    return u.Z.Messages.COUNTRY_NAME_ST
                },
                SA: function() {
                    return u.Z.Messages.COUNTRY_NAME_SA
                },
                SN: function() {
                    return u.Z.Messages.COUNTRY_NAME_SN
                },
                RS: function() {
                    return u.Z.Messages.COUNTRY_NAME_RS
                },
                SC: function() {
                    return u.Z.Messages.COUNTRY_NAME_SC
                },
                SL: function() {
                    return u.Z.Messages.COUNTRY_NAME_SL
                },
                SG: function() {
                    return u.Z.Messages.COUNTRY_NAME_SG
                },
                SX: function() {
                    return u.Z.Messages.COUNTRY_NAME_SX
                },
                SK: function() {
                    return u.Z.Messages.COUNTRY_NAME_SK
                },
                SI: function() {
                    return u.Z.Messages.COUNTRY_NAME_SI
                },
                SB: function() {
                    return u.Z.Messages.COUNTRY_NAME_SB
                },
                SO: function() {
                    return u.Z.Messages.COUNTRY_NAME_SO
                },
                ZA: function() {
                    return u.Z.Messages.COUNTRY_NAME_ZA
                },
                GS: function() {
                    return u.Z.Messages.COUNTRY_NAME_GS
                },
                SS: function() {
                    return u.Z.Messages.COUNTRY_NAME_SS
                },
                ES: function() {
                    return u.Z.Messages.COUNTRY_NAME_ES
                },
                LK: function() {
                    return u.Z.Messages.COUNTRY_NAME_LK
                },
                SD: function() {
                    return u.Z.Messages.COUNTRY_NAME_SD
                },
                SR: function() {
                    return u.Z.Messages.COUNTRY_NAME_SR
                },
                SJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_SJ
                },
                SZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_SZ
                },
                SE: function() {
                    return u.Z.Messages.COUNTRY_NAME_SE
                },
                CH: function() {
                    return u.Z.Messages.COUNTRY_NAME_CH
                },
                SY: function() {
                    return u.Z.Messages.COUNTRY_NAME_SY
                },
                TW: function() {
                    return u.Z.Messages.COUNTRY_NAME_TW
                },
                TJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_TJ
                },
                TZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_TZ
                },
                TH: function() {
                    return u.Z.Messages.COUNTRY_NAME_TH
                },
                TL: function() {
                    return u.Z.Messages.COUNTRY_NAME_TL
                },
                TG: function() {
                    return u.Z.Messages.COUNTRY_NAME_TG
                },
                TK: function() {
                    return u.Z.Messages.COUNTRY_NAME_TK
                },
                TO: function() {
                    return u.Z.Messages.COUNTRY_NAME_TO
                },
                TT: function() {
                    return u.Z.Messages.COUNTRY_NAME_TT
                },
                TN: function() {
                    return u.Z.Messages.COUNTRY_NAME_TN
                },
                TR: function() {
                    return u.Z.Messages.COUNTRY_NAME_TR
                },
                TM: function() {
                    return u.Z.Messages.COUNTRY_NAME_TM
                },
                TC: function() {
                    return u.Z.Messages.COUNTRY_NAME_TC
                },
                TV: function() {
                    return u.Z.Messages.COUNTRY_NAME_TV
                },
                UG: function() {
                    return u.Z.Messages.COUNTRY_NAME_UG
                },
                UA: function() {
                    return u.Z.Messages.COUNTRY_NAME_UA
                },
                AE: function() {
                    return u.Z.Messages.COUNTRY_NAME_AE
                },
                GB: function() {
                    return u.Z.Messages.COUNTRY_NAME_GB
                },
                US: function() {
                    return u.Z.Messages.COUNTRY_NAME_US
                },
                UM: function() {
                    return u.Z.Messages.COUNTRY_NAME_UM
                },
                UY: function() {
                    return u.Z.Messages.COUNTRY_NAME_UY
                },
                UZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_UZ
                },
                VU: function() {
                    return u.Z.Messages.COUNTRY_NAME_VU
                },
                VE: function() {
                    return u.Z.Messages.COUNTRY_NAME_VE
                },
                VN: function() {
                    return u.Z.Messages.COUNTRY_NAME_VN
                },
                VG: function() {
                    return u.Z.Messages.COUNTRY_NAME_VG
                },
                VI: function() {
                    return u.Z.Messages.COUNTRY_NAME_VI
                },
                WF: function() {
                    return u.Z.Messages.COUNTRY_NAME_WF
                },
                EH: function() {
                    return u.Z.Messages.COUNTRY_NAME_EH
                },
                YE: function() {
                    return u.Z.Messages.COUNTRY_NAME_YE
                },
                ZM: function() {
                    return u.Z.Messages.COUNTRY_NAME_ZM
                },
                ZW: function() {
                    return u.Z.Messages.COUNTRY_NAME_ZW
                }
            };

            function c(e) {
                return s[e]()
            }
        },
        92106: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r, i = n(652591),
                o = n(585622),
                u = n(322500),
                a = n(327930),
                l = n(2590);
            ! function(e) {
                e.MESSAGE = "Discord Message Link";
                e.CHANNEL = "Discord Channel Link";
                e.SERVER_INVITE = "Discord Server Invite";
                e.GIFT = "Discord Gift Link";
                e.UNKNOWN = "Unknown"
            }(r || (r = {}));
            var s = [function(e) {
                return u.Z.isInvite(e) ? r.SERVER_INVITE : null
            }, function(e) {
                var t = o.Z.safeParseWithQuery(e);
                if (null == t) return null;
                var n = (0, a.Qj)(t.path);
                return null == n ? null : c({
                    guildId: n.guildId,
                    channelId: n.channelId,
                    messageId: n.messageId
                })
            }];

            function c(e) {
                return null != e.guildId && null != e.channelId && null != e.messageId ? r.MESSAGE : null != e.guildId && null != e.channelId ? r.CHANNEL : r.UNKNOWN
            }

            function f(e, t) {
                return null == t && null == e ? r.UNKNOWN : null == t ? function(e) {
                    var t = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var o, u = s[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                            var a = (0, o.value)(e);
                            if (null != a) return a
                        }
                    } catch (e) {
                        n = !0;
                        i = e
                    } finally {
                        try {
                            t || null == u.return || u.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                    return r.UNKNOWN
                }(e) : c(t)
            }
            const d = {
                trackDiscordLinkClicked: function(e) {
                    i.default.track(l.rMx.LINK_CLICKED, {
                        is_discord_link: !0,
                        discord_link_type: c(e)
                    })
                },
                trackLinkClicked: function(e, t) {
                    if (null != e || null != t) {
                        var n = o.Z.isDiscordUrl(e, !0) || null != t;
                        i.default.track(l.rMx.LINK_CLICKED, {
                            is_discord_link: n,
                            discord_link_type: n ? f(e, t) : null
                        })
                    }
                },
                trackAnnouncementMessageLinkClicked: function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        r = e.guildId,
                        o = e.sourceChannelId,
                        u = e.sourceGuildId;
                    i.default.track(l.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                        message_id: t,
                        channel_id: n,
                        guild_id: r,
                        source_channel_id: o,
                        source_guild_id: u
                    })
                }
            }
        },
        544194: (e, t, n) => {
            n.d(t, {
                ZP: () => U,
                yw: () => P
            });
            var r, i = n(5387),
                o = n.n(i),
                u = (n(74971), n(120053)),
                a = n.n(u),
                l = n(861323),
                s = n(72580);
            ! function(e) {
                e.TEXT = "text";
                e.STRIKETHROUGH = "s";
                e.UNDERLINE = "u";
                e.STRONG = "strong";
                e.ITALICS = "em";
                e.IMAGE = "image";
                e.EMOJI = "emoji";
                e.CUSTOM_EMOJI = "customEmoji";
                e.LINK = "link";
                e.URL = "url";
                e.AUTOLINK = "autolink";
                e.HIGHLIGHT = "highlight";
                e.PARAGRAPH = "paragraph";
                e.LINE_BREAK = "br";
                e.NEWLINE = "newline";
                e.ESCAPE = "escape";
                e.SPOILER = "spoiler";
                e.BLOCK_QUOTE = "blockQuote";
                e.INLINE_CODE = "inlineCode";
                e.CODE_BLOCK = "codeBlock";
                e.MENTION = "mention";
                e.CHANNEL_MENTION = "channelMention";
                e.CHANNEL = "channel";
                e.GUILD = "guild";
                e.SOUNDBOARD = "soundboard";
                e.STATIC_ROUTE_LINK = "staticRouteLink";
                e.ROLE_MENTION = "roleMention";
                e.COMMAND_MENTION = "commandMention";
                e.TIMESTAMP = "timestamp";
                e.LIST = "list";
                e.HEADING = "heading"
            }(r || (r = {}));
            var c = RegExp("\\p{Cf}|\\p{Zl}|\\p{Zp}|[^\\P{Cc}\\n]|[^\\P{Zs} ]", "gu"),
                f = new RegExp("".concat(c.source, "|").concat(["͏", "឴", "឵", "ᅠ", "ㅤ", "ﾠ"].join("|")), "gu");
            var d = [{
                character: "h",
                matcher: E(["H", "һ", "հ", "Ꮒ", "ℎ", "𝐡", "𝒉", "𝒽", "𝓱", "𝔥", "𝕙", "𝖍", "𝗁", "𝗵", "𝘩", "𝙝", "𝚑", "ｈ"])
            }, {
                character: "t",
                matcher: E(["T", "𝐭", "𝑡", "𝒕", "𝓉", "𝓽", "𝔱", "𝕥", "𝖙", "𝗍", "𝘁", "𝘵", "𝙩", "𝚝"])
            }, {
                character: "p",
                matcher: E(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "𝐩", "𝑝", "𝒑", "𝓅", "𝓹", "𝔭", "𝕡", "𝖕", "𝗉", "𝗽", "𝘱", "𝙥", "𝚙", "𝛒", "𝛠", "𝜌", "𝜚", "𝝆", "𝝔", "𝞀", "𝞎", "𝞺", "𝟈", "ｐ"])
            }, {
                character: "s",
                matcher: E(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "𐑈", "𑣁", "𝐬", "𝑠", "𝒔", "𝓈", "𝓼", "𝔰", "𝕤", "𝖘", "𝗌", "𝘀", "𝘴", "𝙨", "𝚜", "ｓ"])
            }, {
                character: ":",
                matcher: E(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
            }, {
                character: "/",
                matcher: E(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "𝈺"])
            }];

            function E(e) {
                return new RegExp(e.join("|"), "gu")
            }
            var _ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

            function p(e) {
                var t = function(e) {
                    if ("null" === e.origin && e.pathname.startsWith("//")) return e.protocol;
                    var t = "";
                    "" !== e.username && (t += e.username);
                    "" !== e.password && (t += ":" + e.password);
                    "" !== t && (t += "@");
                    return "".concat(e.protocol, "//").concat(t).concat(e.host)
                }(e);
                t += h(e.pathname);
                t += h(e.search);
                return t += h(e.hash)
            }

            function h(e) {
                var t;
                try {
                    t = decodeURIComponent(e)
                } catch (t) {
                    return e
                }
                for (var n, r = "", i = e, o = t; i.length > 0;) {
                    var u = i.codePointAt(0),
                        a = o.codePointAt(0);
                    if (u !== a) {
                        var l = String.fromCodePoint(a),
                            s = encodeURIComponent(l),
                            c = s === l ? 3 : s.length;
                        r += ((n = a) >= 0 && n < 128 ? 1 !== _[n] : 8206 === n || 8207 === n || 8234 === n || 8235 === n || 8236 === n || 8237 === n || 8238 === n || 1564 === n || 8294 === n || 8295 === n || 8296 === n || 8297 === n || 128271 === n || 128272 === n || 128274 === n || 128275 === n || 133 === n || 160 === n || 5760 === n || 8192 === n || 8193 === n || 8194 === n || 8195 === n || 8196 === n || 8197 === n || 8198 === n || 8199 === n || 8200 === n || 8201 === n || 8202 === n || 8232 === n || 8233 === n || 8239 === n || 8287 === n || 12288 === n || 10240 === n || 173 === n || 847 === n || n >= 1536 && n <= 1541 || 1757 === n || 1807 === n || 2274 === n || 4447 === n || 4448 === n || 6068 === n || 6069 === n || 6155 === n || 6156 === n || 6157 === n || 6158 === n || 8203 === n || 8204 === n || 8205 === n || 8288 === n || 8289 === n || 8290 === n || 8291 === n || 8292 === n || 8293 === n || n >= 8298 && n <= 8303 || 12644 === n || n >= 65520 && n <= 65528 || n >= 65024 && n <= 65039 || 65279 === n || 65440 === n || 65529 === n || 65530 === n || 65531 === n || 69821 === n || 69837 === n || n >= 78896 && n <= 78904 || n >= 113824 && n <= 113827 || n >= 119155 && n <= 119162 || n >= 917504 && n <= 921599) ? s : l;
                        i = i.substring(c);
                        o = o.substring(l.length)
                    } else {
                        var f = String.fromCodePoint(u);
                        r += f;
                        i = i.substring(f.length);
                        o = o.substring(f.length)
                    }
                }
                return r
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || N(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e, t) {
                if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                }
            }
            var T = new(o())({
                max: 50
            });

            function A(e) {
                var t = e,
                    n = T.get(t);
                if (null != n) return n;
                var r = function(e) {
                        return e.replace(f, "")
                    }(e),
                    i = function(e) {
                        var t = e;
                        d.forEach((function(e) {
                            t = t.replace(e.matcher, e.character)
                        }));
                        return t
                    }(r),
                    o = {
                        whitespaceSanitized: r,
                        fullySanitized: i
                    };
                T.set(t, o);
                return o
            }
            var C, m = ["http:", "https:", "discord:"],
                S = [r.TEXT, r.UNDERLINE, r.STRONG, r.ITALICS, r.STRIKETHROUGH, r.INLINE_CODE, r.SPOILER, r.LINE_BREAK, r.TIMESTAMP],
                b = (C = S, function(e) {
                    if (Array.isArray(e)) return g(e)
                }(C) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(C) || N(C) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([r.EMOJI, r.CUSTOM_EMOJI]),
                M = [r.TEXT];

            function R(e, t) {
                Array.isArray(e) || (e = [e]);
                var n = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        var l = u.value;
                        if (!t.includes(l.type)) return null;
                        if (l.type === r.INLINE_CODE && null == R(l.validationChildContent, t)) return null;
                        if (Array.isArray(l.content) && null == R(l.content, t)) return null
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return e
            }

            function D(e) {
                var t = "",
                    n = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        var l = u.value;
                        switch (l.type) {
                            case r.TEXT:
                            case r.INLINE_CODE:
                                t += l.content;
                                break;
                            case r.CUSTOM_EMOJI:
                                t += l.name;
                                break;
                            case r.EMOJI:
                                t += l.surrogate;
                                break;
                            case r.LINE_BREAK:
                                t += "\n";
                                break;
                            case r.TIMESTAMP:
                                t += "<timestamp>";
                                break;
                            case r.STRONG:
                            case r.ITALICS:
                            case r.UNDERLINE:
                            case r.STRIKETHROUGH:
                            case r.SPOILER:
                                t += D(l.content);
                                break;
                            default:
                                (0, s.vE)(l.type)
                        }
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return t
            }

            function P(e) {
                try {
                    var t, n = new URL(e),
                        r = null !== (t = n.protocol) && void 0 !== t ? t : "";
                    if (!m.includes(r.toLowerCase())) throw new Error("Provided protocol is not allowed: " + r);
                    if (!("http:" !== r && "https:" !== r || null != n.hostname && 0 !== n.hostname.length)) throw new Error("no hostname");
                    0;
                    var i = p(n);
                    n.username = "";
                    n.password = "";
                    return {
                        target: i,
                        displayTarget: p(n)
                    }
                } catch (e) {
                    return null
                }
            }
            const U = y(O({}, a().defaultRules.link), {
                match: function(e, t, n) {
                    return t.allowLinks ? a().defaultRules.link.match(e, t, n) : null
                },
                parse: function(e, t, n) {
                    var i = I(e, 4),
                        o = i[0],
                        u = i[1],
                        s = i[2],
                        c = i[3],
                        f = function() {
                            return {
                                type: r.TEXT,
                                content: o
                            }
                        },
                        d = A(s),
                        E = A(u),
                        _ = A(null != c ? c : ""),
                        p = d.whitespaceSanitized,
                        h = E.fullySanitized,
                        g = _.fullySanitized,
                        v = h.trim();
                    if (0 === p.trim().length || 0 === v.length) return f();
                    var N = P(a().unescapeUrl(s)),
                        T = null == N,
                        C = (0, l.ZP)(u).length > 0 || (0, l.ZP)(c).length > 0;
                    if (T || C) return f();
                    var m = y(O({}, n), {
                            allowEscape: !1,
                            parseInlineCodeChildContent: !0
                        }),
                        U = t(h, m),
                        L = t(g, m),
                        Z = R(U, n.allowEmojiLinks ? b : S),
                        w = R(L, M);
                    if (null == Z || null == w) return f();
                    if (0 === D(Z).trim().length) return f();
                    var k = t(E.whitespaceSanitized, m),
                        G = _.whitespaceSanitized;
                    return {
                        content: k,
                        target: N.target,
                        title: G
                    }
                }
            })
        },
        996344: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(335186),
                i = n(61209),
                o = n(637493);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = new Set,
                d = new Set,
                E = !1,
                _ = null;

            function p(e) {
                return e.isMessageRequest && !e.isSpam
            }

            function h(e) {
                var t = !1;
                if (p(e) && !f.has(e.id)) {
                    f.add(e.id);
                    t = !0
                }
                if (!p(e) && f.has(e.id)) {
                    f.delete(e.id);
                    t = !0
                }
                if (!p(e) && d.has(e.id)) {
                    d.delete(e.id);
                    t = !0
                }
                return t
            }

            function g(e) {
                if (null != e) {
                    var t;
                    _ = null !== (t = (0, r.Zz)(e)) && void 0 !== t ? t : (0, r.K4)()
                }
            }

            function v(e) {
                "CONNECTION_OPEN" === e.type && g(e.countryCode);
                f.clear();
                d.clear();
                Object.values(i.Z.getMutablePrivateChannels()).forEach((function(e) {
                    h(e)
                }));
                E = !0
            }

            function O(e) {
                var t = e.channelId;
                d.add(t)
            }

            function y(e) {
                return h(e.channel)
            }

            function I(e) {
                var t = e.channels,
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                        h(o.value)
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw i
                    }
                }
            }

            function N(e) {
                var t = e.channel;
                if (f.has(t.id)) {
                    f.delete(t.id);
                    return !0
                }
                return !1
            }

            function T(e) {
                e.messageRequestChannelIds.forEach((function(e) {
                    return f.add(e)
                }))
            }

            function A(e) {
                g(e.countryCode)
            }
            var C = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = c(n);

                function n() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e;
                    (e = t.call(this)).loadCache = function() {
                        var t = e.readSnapshot(n.LATEST_SNAPSHOT_VERSION);
                        null != t && (f = new Set(t))
                    };
                    e.registerActionHandlers({
                        CONNECTION_OPEN: v,
                        CONNECTION_OPEN_SUPPLEMENTAL: v,
                        CACHE_LOADED_LAZY: e.loadCache,
                        OVERLAY_INITIALIZE: T,
                        CHANNEL_CREATE: y,
                        CHANNEL_UPDATES: I,
                        CHANNEL_DELETE: N,
                        SET_LOCATION_METADATA: A,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: O
                    });
                    e.waitFor(i.Z);
                    return e
                }
                var r = n.prototype;
                r.takeSnapshot = function() {
                    return {
                        version: n.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(f)
                    }
                };
                r.getMessageRequestChannelIds = function() {
                    return f
                };
                r.getMessageRequestsCount = function() {
                    return f.size
                };
                r.isMessageRequest = function(e) {
                    return f.has(e)
                };
                r.isAcceptedOptimistic = function(e) {
                    return d.has(e)
                };
                r.getUserCountryCode = function() {
                    return _
                };
                r.isReady = function() {
                    return E
                };
                return n
            }(o.Z);
            C.displayName = "MessageRequestStore";
            C.LATEST_SNAPSHOT_VERSION = 1;
            const m = new C
        },
        442658: (e, t, n) => {
            n.d(t, {
                k1: () => a,
                tU: () => c,
                h3: () => f,
                IO: () => d
            });
            var r = n(996344),
                i = n(48315);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z], 2),
                    n = t[0],
                    o = t[1],
                    a = l(e),
                    c = a.filter((function(e) {
                        var t = u(e, 2)[1];
                        return !n.isMessageRequest(t.id) && !o.isSpam(t.id)
                    }));
                return s(c)
            }

            function l(e) {
                return Object.keys(e).map((function(t) {
                    return [t, e[t]]
                }))
            }

            function s(e) {
                return Array.from(e).reduce((function(e, t) {
                    var n = u(t, 2),
                        r = n[0],
                        i = n[1];
                    return Object.assign(e, function(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n;
                        return e
                    }({}, r, i))
                }), {})
            }

            function c(e) {
                var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z], 2),
                    n = t[0],
                    o = t[1];
                return e.filter((function(e) {
                    return !n.isMessageRequest(e) && !o.isSpam(e)
                }))
            }

            function f(e) {
                var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z], 2),
                    n = t[0],
                    o = t[1];
                return n.isMessageRequest(e) || o.isSpam(e)
            }

            function d() {
                var e = u(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.Z, i.Z], 2),
                    t = e[0],
                    n = e[1],
                    o = n.getSpamChannelsCount(),
                    a = t.getMessageRequestsCount(),
                    l = a > 0 || o > 0;
                return l
            }
        },
        48315: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(61209),
                i = n(637493);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function u(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var c = new Set,
                f = new Set,
                d = !1;

            function E(e) {
                return e.isSpam
            }

            function _(e) {
                var t = !1;
                if (E(e) && !c.has(e.id)) {
                    c.add(e.id);
                    t = !0
                }
                if (!E(e) && c.has(e.id)) {
                    c.delete(e.id);
                    t = !0
                }
                if (!E(e) && f.has(e.id)) {
                    f.delete(e.id);
                    t = !0
                }
                return t
            }

            function p() {
                c.clear();
                f.clear();
                Object.values(r.Z.getMutablePrivateChannels()).forEach((function(e) {
                    _(e)
                }));
                d = !0
            }

            function h(e) {
                var t = e.channelId;
                f.add(t)
            }

            function g(e) {
                return _(e.channel)
            }

            function v(e) {
                var t = e.channels,
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                        _(o.value)
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw i
                    }
                }
            }

            function O(e) {
                var t = e.channel,
                    n = !1;
                if (c.has(t.id)) {
                    c.delete(t.id);
                    n = !0
                }
                return n
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e;
                    (e = t.call(this)).loadCache = function() {
                        var t = e.readSnapshot(n.LATEST_SNAPSHOT_VERSION);
                        null != t && (c = new Set(t))
                    };
                    e.registerActionHandlers({
                        CONNECTION_OPEN: p,
                        CONNECTION_OPEN_SUPPLEMENTAL: p,
                        CACHE_LOADED_LAZY: e.loadCache,
                        CHANNEL_CREATE: g,
                        CHANNEL_UPDATES: v,
                        CHANNEL_DELETE: O,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: h
                    });
                    e.waitFor(r.Z);
                    return e
                }
                var i = n.prototype;
                i.takeSnapshot = function() {
                    return {
                        version: n.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(c)
                    }
                };
                i.getSpamChannelIds = function() {
                    return c
                };
                i.getSpamChannelsCount = function() {
                    return c.size
                };
                i.isSpam = function(e) {
                    return c.has(e)
                };
                i.isAcceptedOptimistic = function(e) {
                    return f.has(e)
                };
                i.isReady = function() {
                    return d
                };
                return n
            }(i.Z);
            y.displayName = "SpamMessageRequestStore";
            y.LATEST_SNAPSHOT_VERSION = 1;
            const I = new y
        },
        725105: (e, t, n) => {
            n.d(t, {
                sv: () => o,
                Fl: () => u
            });
            var r = n(667294),
                i = (0, n(260561).B)({
                    kind: "user",
                    id: "2022-11_desktop_notification_center",
                    label: "Desktop notification center",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification center desktop enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = function() {
                    var e = i.useExperiment({
                        location: "b8976e_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                    r.useEffect((function() {
                        i.trackExposure({
                            location: "b8976e_2"
                        })
                    }), []);
                    return e
                },
                u = function() {
                    return i.getCurrentConfig({
                        location: "b8976e_3"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                }
        },
        858311: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var r = n(202351),
                i = n(744564),
                o = n(269300),
                u = (n(621696),
                    n(720637)),
                a = n(202958),
                l = n(4798),
                s = n(567403),
                c = n(840922),
                f = n(473903),
                d = n(102921),
                E = n(421281),
                _ = n(749565),
                p = n(369710),
                h = n(106673),
                g = n(2590),
                v = n(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function m(e, t) {
                return !t || "object" !== M(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = T(e);
                    if (t) {
                        var i = T(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var D = {
                loading: !1,
                initialized: !1,
                errored: !1,
                isDataStale: !1,
                notifCenterItems: [],
                staleNotifCenterItems: [],
                notifCenterIds: new Set,
                notifCenterLocalItems: [],
                paginationHasMore: !0,
                paginationCursor: void 0,
                notifCenterActive: !1,
                notifCenterTabFocused: !1
            };

            function P(e) {
                return null != e.id && null != e.body && null != e.type
            }

            function U() {
                D = {
                    loading: !1,
                    initialized: !1,
                    errored: !1,
                    isDataStale: !1,
                    notifCenterItems: [],
                    staleNotifCenterItems: [],
                    notifCenterIds: new Set,
                    notifCenterLocalItems: [],
                    paginationHasMore: !0,
                    paginationCursor: void 0,
                    notifCenterActive: !1,
                    notifCenterTabFocused: !1
                }
            }

            function L(e) {
                var t, n;
                if ((0, a.bY)() && e.type === p.DY.FRIEND_SUGGESTION_CREATED && c.Z.getRelationshipType(null !== (n = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "") === g.OGo.PENDING_OUTGOING) {
                    var r = _.ZP.getName(e.other_user);
                    e = C(A({}, e), {
                        body: v.Z.Messages.NOTIF_CENTER_V2_ADD_FRIEND_REQUEST_SENT.format({
                            user: r
                        })
                    })
                }
                0
                ;
                return C(A({}, e), {
                    kind: "notification-center-item",
                    message: null != e.message ? (0, u.e5)(e.message) : void 0
                })
            }

            function Z(e) {
                var t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? L(e.item) : e.item;
                if (!D.initialized || !P(t) || D.notifCenterIds.has(t.id)) return !1;
                D.notifCenterIds.add(t.id);
                D.notifCenterItems = [t].concat(b(D.notifCenterItems));
                D.notifCenterItems.sort((function(e, t) {
                    return d.Z.compare(t.id, e.id)
                }))
            }

            function w(e, t) {
                D.notifCenterItems = D.notifCenterItems.map((function(n) {
                    return e.includes(n.id) ? C(A({}, n), {
                        acked: t
                    }) : n
                })).filter(P)
            }

            function k(e, t, n) {
                var r;
                return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n
            }
            var G = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && S(e, t)
                }(n, e);
                var t = R(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(f.default);
                    if (null != e) {
                        var t = e.notifCenterItems.map((function(e) {
                            return C(A({}, e), {
                                message: null != e.message ? new l.Z(e.message) : void 0
                            })
                        }));
                        t.length > 0 && (D = C(A({}, D), {
                            initialized: !0,
                            isDataStale: !0,
                            notifCenterItems: [],
                            staleNotifCenterItems: t
                        }))
                    }
                };
                r.getState = function() {
                    var e = function(e) {
                        return C(A({}, e), {
                            message: null != e.message ? e.message.toJS() : void 0
                        })
                    };
                    return C(A({}, D), {
                        notifCenterItems: D.notifCenterItems.map(e),
                        staleNotifCenterItems: D.staleNotifCenterItems.map(e)
                    })
                };
                ! function(e, t, n) {
                    t && I(e.prototype, t);
                    n && I(e, n)
                }(n, [{
                    key: "loading",
                    get: function() {
                        return D.loading
                    }
                }, {
                    key: "initialized",
                    get: function() {
                        return D.initialized
                    }
                }, {
                    key: "items",
                    get: function() {
                        return D.isDataStale ? D.staleNotifCenterItems : D.notifCenterItems
                    }
                }, {
                    key: "hasMore",
                    get: function() {
                        return D.paginationHasMore
                    }
                }, {
                    key: "cursor",
                    get: function() {
                        return D.paginationCursor
                    }
                }, {
                    key: "errored",
                    get: function() {
                        return D.errored
                    }
                }, {
                    key: "active",
                    get: function() {
                        return D.notifCenterActive
                    }
                }, {
                    key: "localItems",
                    get: function() {
                        return D.notifCenterLocalItems
                    }
                }, {
                    key: "tabFocused",
                    get: function() {
                        return D.notifCenterTabFocused
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            G.displayName = "NotificationCenterItemsStore";
            G.persistKey = "NotificationCenterItemsStore_v2";
            const j = new G(i.Z, {
                CONNECTION_OPEN: function(e) {
                    (0, a.bY)() || U();
                    var t = [];
                    e.relationships.forEach((function(e) {
                        var n = e.type,
                            r = e.user,
                            i = e.since;
                        if (n !== g.OGo.PENDING_INCOMING) return null;
                        if (null == r || null == i) return null;
                        var o = f.default.getUser(r.id);
                        if (null == o) return null;
                        var u = (0, h.mH)(o, i);
                        d.Z.age(u.id) > 7776e6 || t.push(u)
                    }));
                    D.notifCenterLocalItems = t
                },
                LOGOUT: U,
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    w(e.ids, !0)
                },
                NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
                    w(e.ids, !1)
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var t;
                    if ((0, o.Z2)(e.guildScheduledEvent)) {
                        var n = e.guildScheduledEvent.name,
                            r = null === (t = s.Z.getGuild(e.guildScheduledEvent.guild_id)) || void 0 === t ? void 0 : t.name;
                        D.notifCenterItems = D.notifCenterItems.map((function(t) {
                            return function(t) {
                                return t.type === p.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.guildScheduledEvent.id
                            }(t) ? C(A({}, t), {
                                disable_action: !0,
                                body: (0, E.Ew)(r) || (0, E.Ew)(n) ? t.body : v.Z.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                                    event_name: n,
                                    guild_name: r
                                })
                            }) : t
                        }))
                    }
                },
                NOTIFICATION_CENTER_ITEM_CREATE: Z,
                NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
                    var t = e.id;
                    if (!D.notifCenterIds.has(t)) return !1;
                    D.notifCenterIds.delete(t);
                    D.notifCenterItems = D.notifCenterItems.filter((function(e) {
                        return e.id !== t
                    }))
                },
                NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: Z,
                LOAD_NOTIFICATION_CENTER_ITEMS: function() {
                    D.loading = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
                    D.loading = !1;
                    D.initialized = !0;
                    D.errored = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
                    var t = e.items,
                        n = e.hasMore,
                        r = e.cursor;
                    if (D.loading) {
                        D.loading = !1;
                        D.initialized = !0;
                        D.errored = !1;
                        D.isDataStale = !1;
                        if (null == r || !D.notifCenterIds.has(r)) {
                            D.paginationHasMore = t.length > 0 && n;
                            D.paginationCursor = t.length > 0 ? r : void 0
                        }
                        D.notifCenterItems = b(D.notifCenterItems).concat(b(t.map(L).filter((function(e) {
                            return !D.notifCenterIds.has(e.id)
                        }))));
                        D.notifCenterItems.sort((function(e, t) {
                            return d.Z.compare(t.id, e.id)
                        }));
                        t.forEach((function(e) {
                            return D.notifCenterIds.add(e.id)
                        }))
                    }
                },
                RESET_NOTIFICATION_CENTER: U,
                NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
                    var t = e.active;
                    D.notifCenterActive = t
                },
                NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
                    var t = e.focused;
                    D.notifCenterTabFocused = t
                },
                RELATIONSHIP_ADD: function(e) {
                    if (e.relationship.type === g.OGo.PENDING_INCOMING) {
                        var t = e.relationship,
                            n = t.user,
                            r = t.since;
                        if (null == r) return null;
                        var i = f.default.getUser(n.id);
                        if (null == i) return null;
                        D.notifCenterLocalItems = b(D.notifCenterLocalItems).concat([(0, h.mH)(i, r)])
                    }
                    e.relationship.type === g.OGo.FRIEND && (D.notifCenterLocalItems = D.notifCenterLocalItems.map((function(t) {
                        return k(t, p.O7.INCOMING_FRIEND_REQUESTS, e.relationship.user.id) ? C(A({}, t), {
                            acked: !0,
                            forceUnacked: !1,
                            local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                            type: p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                            body: v.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                                username: "**".concat(e.relationship.user.username, "**")
                            })
                        }) : t
                    })))
                },
                RELATIONSHIP_REMOVE: function(e) {
                    D.notifCenterLocalItems = D.notifCenterLocalItems.filter((function(t) {
                        return !k(t, p.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !k(t, p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)
                    }))
                },
                NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
                    var t = e.item_enum;
                    D.notifCenterItems = D.notifCenterItems.map((function(e) {
                        return e.item_enum === t ? C(A({}, e), {
                            completed: !0,
                            acked: !0
                        }) : e
                    })).filter(P)
                },
                NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
                    var t = e.item;
                    D.notifCenterItems = D.notifCenterItems.map((function(e) {
                        return e.id === t.id ? t : e
                    })).filter(P)
                },
                SET_RECENT_MENTIONS_FILTER: U
            })
        },
        369710: (e, t, n) => {
            n.d(t, {
                AM: () => i,
                ud: () => o,
                b1: () => u,
                DY: () => a,
                O7: () => l
            });
            var r, i, o, u, a, l;
            ! function(e) {
                e.LANDING = "notification_center_landing"
            }(r || (r = {}));
            ! function(e) {
                e[e.UPDATE_PROFILE = 0] = "UPDATE_PROFILE";
                e[e.FIND_FRIENDS = 1] = "FIND_FRIENDS";
                e[e.ADD_FRIEND = 2] = "ADD_FRIEND";
                e[e.FIRST_MESSAGE = 3] = "FIRST_MESSAGE"
            }(i || (i = {}));
            ! function(e) {
                e.MARK_ALL_READ = "mark_all_read";
                e.CLICKED = "clicked";
                e.FRIEND_REQUESTS_BUTTON_CLICK = "friend_requests_button_click";
                e.ACTION_BUTTON = "action_button"
            }(o || (o = {}));
            ! function(e) {
                e.ForYou = "ForYou";
                e.Mentions = "Mentions";
                e.MessageReminders = "MessageReminders"
            }(u || (u = {}));
            ! function(e) {
                e.GO_LIVE_PUSH = "go_live_push";
                e.FRIEND_REQUEST_ACCEPTED = "friend_request_accepted";
                e.FRIEND_REQUEST_PENDING = "friend_request_pending";
                e.FRIEND_SUGGESTION_CREATED = "friend_suggestion_created";
                e.FRIEND_REQUEST_REMINDER = "friend_request_reminder";
                e.DM_FRIEND_NUDGE = "dm_friend_nudge";
                e.RECENT_MENTION = "recent_mention";
                e.REPLY_MENTION = "reply_mention";
                e.GUILD_SCHEDULED_EVENT_STARTED = "scheduled_guild_event_started";
                e.SYSTEM_DEMO = "system_demo";
                e.MISSED_MESSAGES = "missed_messages";
                e.TOP_MESSAGES = "top_messages";
                e.LIFECYCLE_ITEM = "lifecycle_item";
                e.TRENDING_CONTENT = "trending_content"
            }(a || (a = {}));
            ! function(e) {
                e.INCOMING_FRIEND_REQUESTS = "INCOMING_FRIEND_REQUESTS";
                e.INCOMING_FRIEND_REQUESTS_ACCEPTED = "INCOMING_FRIEND_REQUESTS_ACCEPTED";
                e.FRIEND_REQUESTS_GROUPED = "FRIEND_REQUESTS_GROUPED"
            }(l || (l = {}))
        },
        106673: (e, t, n) => {
            n.d(t, {
                a3: () => h,
                $N: () => y,
                mH: () => v,
                RB: () => O,
                r: () => g
            });
            var r = n(842227),
                i = n(968449),
                o = n(725105),
                u = n(369710),
                a = n(730381),
                l = n.n(a),
                s = n(473708),
                c = 3600,
                f = 86400,
                d = 2592e3,
                E = 31104e3,
                _ = function() {
                    return {
                        minutes: s.Z.Messages.FOR_YOU_TIMESTAMP_MINUTES_AGO,
                        hours: s.Z.Messages.FOR_YOU_TIMESTAMP_HOURS_AGO,
                        days: s.Z.Messages.FOR_YOU_TIMESTAMP_DAYS_AGO,
                        months: s.Z.Messages.FOR_YOU_TIMESTAMP_MONTHS_AGO,
                        years: s.Z.Messages.FOR_YOU_TIMESTAMP_YEARS_AGO
                    }
                };

            function p(e, t) {
                var n = l()().diff(l()(e), "s"),
                    r = (null != t ? t : _)();
                l()(e).format("LL");
                return n < 60 ? r.minutes.format({
                    count: 1
                }) : n < c ? r.minutes.format({
                    count: Math.floor(n / 60)
                }) : n < f ? r.hours.format({
                    count: Math.floor(n / c)
                }) : n < d ? r.days.format({
                    count: Math.floor(n / f)
                }) : n < E ? r.months.format({
                    count: Math.floor(n / d)
                }) : r.years.format({
                    count: Math.floor(n / E)
                })
            }
            var h = function(e) {
                    return p(e)
                },
                g = function(e, t) {
                    return e.acked || t !== i.uL && r.default.compare(t, e.id) >= 0
                };

            function v(e, t) {
                var n = r.default.fromTimestamp(new Date(t).getTime());
                return {
                    acked: !1,
                    forceUnacked: !0,
                    other_user: e,
                    kind: "notification-center-item",
                    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(n),
                    deeplink: "https://discord.com/users/".concat(e.id),
                    type: u.O7.INCOMING_FRIEND_REQUESTS,
                    id: n,
                    body: s.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
                        username: "**".concat(e.username, "**")
                    })
                }
            }
            var O = function(e) {
                return e.type === u.DY.RECENT_MENTION || e.type === u.DY.REPLY_MENTION
            };

            function y() {
                0;
                return (0, o.Fl)()
            }
        },
        202958: (e, t, n) => {
            n.d(t, {
                ln: () => u,
                bY: () => a
            });
            var r = n(260561),
                i = n(621696),
                o = n(756221);

            function u() {
                return l.useExperiment({
                    location: "0721ad_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function a() {
                return !!(0, i.cn)() && (!!(0,
                    o.n5)("showNewNotificationCenter") || s.getCurrentConfig({
                    location: "0721ad_3"
                }, {
                    autoTrackExposure: !1
                }).enabled)
            }
            var l = (0, r.B)({
                    kind: "user",
                    id: "2022-11_notification_redesign",
                    label: "NotificationRedesign",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification Redesign Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, r.B)({
                    kind: "user",
                    id: "2023-04_notification_redesign_v2",
                    label: "NotificationRedesignV2",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification Redesign V2 Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        364269: (e, t, n) => {
            n.d(t, {
                DM: () => c,
                r1: () => f,
                sk: () => d,
                m7: () => E,
                te: () => _
            });
            var r = n(202351),
                i = n(350532),
                o = n(567403),
                u = n(682776),
                a = n(9430),
                l = n(473903),
                s = n(2590);

            function c(e) {
                var t = (0, r.e7)([a.Z], (function() {
                        return a.Z.isOptInEnabled(e)
                    })),
                    n = (0, r.e7)([o.Z], (function() {
                        return o.Z.getGuild(e)
                    })),
                    i = (0, r.e7)([l.default], (function() {
                        return l.default.getCurrentUser()
                    }));
                return null != e && null != n && null != i && ((n.hasFeature(s.oNc.COMMUNITY) || i.isStaff()) && t)
            }

            function f(e) {
                var t = o.Z.getGuild(e),
                    n = l.default.getCurrentUser();
                return null != e && null != t && null != n && ((t.hasFeature(s.oNc.COMMUNITY) || n.isStaff()) && a.Z.isOptInEnabled(e))
            }

            function d(e) {
                return (0, i.OL)()
            }

            function E(e) {
                return (0, i.hB)()
            }

            function _(e) {
                var t = (0, r.e7)([o.Z], (function() {
                        return o.Z.getGuild(e)
                    })),
                    n = (0, r.cj)([u.Z], (function() {
                        return {
                            canManageGuild: u.Z.can(s.Plq.MANAGE_GUILD, t),
                            canManageRoles: u.Z.can(s.Plq.MANAGE_ROLES, t)
                        }
                    })),
                    i = n.canManageGuild,
                    a = n.canManageRoles;
                if (null == t) return !1;
                var l = t.hasFeature(s.oNc.GUILD_ONBOARDING_EVER_ENABLED);
                return i && a && !l
            }
        },
        15338: (e, t, n) => {
            n.d(t, {
                bA: () => a,
                hP: () => l,
                xv: () => s,
                hY: () => c
            });
            var r = n(744564);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }
            var u = {
                menubar: !1,
                toolbar: !1,
                location: !1,
                directories: !1
            };

            function a(e, t, n) {
                return r.Z.dispatch({
                    type: "POPOUT_WINDOW_OPEN",
                    key: e,
                    features: o({}, u, n),
                    render: t
                })
            }

            function l(e) {
                return r.Z.dispatch({
                    type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
                    channel: e
                })
            }

            function s(e) {
                return r.Z.dispatch({
                    type: "POPOUT_WINDOW_CLOSE",
                    key: e
                })
            }

            function c(e, t) {
                return r.Z.dispatch({
                    type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
                    alwaysOnTop: t,
                    key: e
                })
            }
        },
        290679: (e, t, n) => {
            n.d(t, {
                W: () => r
            });
            var r;
            ! function(e) {
                e[e.CHANNEL = 0] = "CHANNEL";
                e[e.GUILD_EVENT = 1] = "GUILD_EVENT";
                e[e.NOTIFICATION_CENTER = 2] = "NOTIFICATION_CENTER";
                e[e.GUILD_HOME = 3] = "GUILD_HOME";
                e[e.GUILD_ONBOARDING_QUESTION = 4] = "GUILD_ONBOARDING_QUESTION"
            }(r || (r = {}))
        },
        841800: (e, t, n) => {
            n.d(t, {
                tI: () => r,
                jL: () => i,
                Ff: () => o
            });
            var r, i, o;
            ! function(e) {
                e[e.CREATE_THREAD = 0] = "CREATE_THREAD";
                e[e.VIEW_THREAD = 1] = "VIEW_THREAD";
                e[e.VIEW_CHANNEL = 2] = "VIEW_CHANNEL";
                e[e.VIEW_MESSAGE_REQUEST = 3] = "VIEW_MESSAGE_REQUEST"
            }(r || (r = {}));
            ! function(e) {
                e[e.GUILD_MEMBER_MOD_VIEW = 4] = "GUILD_MEMBER_MOD_VIEW"
            }(i || (i = {}));
            ! function(e) {
                e.THREAD = "thread";
                e.MESSAGE_REQUEST = "message-request";
                e.HOME = "home";
                e.GUILD_MEMBER_MOD_VIEW = "guild-member-mod-view"
            }(o || (o = {}))
        },
        460214: (e, t, n) => {
            n.d(t, {
                Ek: () => i,
                YW: () => o,
                X8: () => u,
                FW: () => a,
                D_: () => l,
                Hy: () => s,
                hY: () => c
            });
            var r, i = 32,
                o = 5,
                u = "DEFAULT";
            ! function(e) {
                e[e.SUCCESS = 0] = "SUCCESS";
                e[e.INTERRUPTED = 1] = "INTERRUPTED"
            }(r || (r = {}));
            new Set([r.SUCCESS, r.INTERRUPTED]);
            var a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                l = "ctrl+`",
                s = [],
                c = "0"
        },
        656907: (e, t, n) => {
            n.d(t, {
                Z: () => G
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(968449),
                l = n(473419),
                s = n(473903),
                c = n(652591),
                f = n(615457),
                d = n(460214),
                E = n(2590),
                _ = n(131559);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function v(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || A(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || A(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N, T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                }
            }

            function C(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }! function(e) {
                e[e.NOT_FETCHED = 0] = "NOT_FETCHED";
                e[e.FETCHING = 1] = "FETCHING";
                e[e.FETCHED = 2] = "FETCHED"
            }(N || (N = {}));
            var m = new Map,
                S = new Map,
                b = new Set,
                M = N.NOT_FETCHED,
                R = N.NOT_FETCHED,
                D = new Set,
                P = new Map,
                U = !1;

            function L(e) {
                var t = e.sound,
                    n = m.get(t.guildId),
                    r = null == n ? void 0 : n.findIndex((function(e) {
                        return e.soundId === t.soundId
                    }));
                if (null != n && null != r && -1 !== r) {
                    n[r] = t;
                    m.set(t.guildId, I(n))
                } else if (null != n) {
                    null == n || n.push(t);
                    m.set(t.guildId, I(n))
                }
            }
            var Z = i().debounce((function(e) {
                c.default.track(E.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, f.P)(e))
                });
                a.kU.updateSetting({
                    volume: e
                })
            }), 1e3);

            function w(e) {
                var t, n, r = null !== (n = null == e || null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {},
                    i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, l = Object.entries(r)[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                        var s = y(a.value, 2),
                            c = s[0];
                        s[1].soundboardMuted ? b.add(c) : b.delete(c)
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (o) throw u
                    }
                }
                var f = !0,
                    d = !1,
                    E = void 0;
                try {
                    for (var _, p = b.keys()[Symbol.iterator](); !(f = (_ = p.next()).done); f = !0) {
                        var h = _.value;
                        null == r[h] && b.delete(h)
                    }
                } catch (e) {
                    d = !0;
                    E = e
                } finally {
                    try {
                        f || null == p.return || p.return()
                    } finally {
                        if (d) throw E
                    }
                }
            }
            var k = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = C(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.Z);
                    w(l.Z.settings)
                };
                r.getOverlaySerializedState = function() {
                    return {
                        soundboardSounds: Object.fromEntries(m),
                        favoritedSoundIds: Array.from(D),
                        localSoundboardMutes: Array.from(b)
                    }
                };
                r.getSounds = function() {
                    return m
                };
                r.getSoundsForGuild = function(e) {
                    return m.get(e)
                };
                r.getDefaultSounds = function() {
                    return this.getSoundsForGuild(d.X8)
                };
                r.getSound = function(e, t) {
                    var n;
                    return (null !== (n = m.get(e)) && void 0 !== n ? n : []).find((function(e) {
                        return e.soundId === t
                    }))
                };
                r.getSoundById = function(e) {
                    return Array.from(m.values()).flat().find((function(t) {
                        return t.soundId === e
                    }))
                };
                r.isFetchingSounds = function() {
                    return R === N.FETCHING
                };
                r.isFetchingDefaultSounds = function() {
                    return M === N.FETCHING
                };
                r.shouldFetchDefaultSounds = function() {
                    return M === N.NOT_FETCHED
                };
                r.hasFetchedDefaultSounds = function() {
                    return M === N.FETCHED
                };
                r.isUserPlayingSounds = function(e) {
                    var t = P.get(e);
                    return null != t && t > 0
                };
                r.isPlayingSound = function(e) {
                    return null != S.get(e)
                };
                r.isFavoriteSound = function(e) {
                    return D.has(e)
                };
                r.getFavorites = function() {
                    return D
                };
                r.isLocalSoundboardMuted = function(e) {
                    return b.has(e)
                };
                r.hasHadOtherUserPlaySoundInSession = function() {
                    return U
                };
                r.hasFetchedAllSounds = function() {
                    return R === N.FETCHED && M === N.FETCHED
                };
                return n
            }(o.ZP.Store);
            k.displayName = "SoundboardStore";
            const G = new k(u.Z, {
                LOGOUT: function() {
                    m.clear();
                    S.clear();
                    P.clear();
                    U = !1;
                    R = N.NOT_FETCHED;
                    M = N.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    R = N.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: L,
                GUILD_SOUNDBOARD_SOUND_UPDATE: L,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    var t = e.soundId,
                        n = e.guildId;
                    m.delete(t);
                    var r = m.get(n),
                        i = null == r ? void 0 : r.findIndex((function(e) {
                            return e.soundId === t
                        }));
                    if (!(null == r || null == i || i < 0)) {
                        r.splice(i, 1);
                        m.set(n, I(r))
                    }
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r, i = e.soundId,
                        o = e.userId,
                        u = (null !== (n = S.get(i)) && void 0 !== n ? n : 0) + 1,
                        a = (null !== (r = P.get(o)) && void 0 !== r ? r : 0) + 1;
                    S.set(i, u);
                    P.set(o, a);
                    o !== (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (U = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n, r = e.soundId,
                        i = e.userId,
                        o = (null !== (t = S.get(r)) && void 0 !== t ? t : 0) - 1,
                        u = (null !== (n = P.get(i)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? S.delete(r) : S.set(r, o);
                    u <= 0 ? P.delete(i) : P.set(i, u)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    var t = e.volume;
                    Z(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    S.clear();
                    P.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t = e.settings,
                        n = t.type,
                        r = t.proto;
                    if (n === _.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, o;
                        D = new Set(null !== (o = null == r || null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== o ? o : [])
                    } else n === _.yP.PRELOADED_USER_SETTINGS && w(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    M = N.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    var t = e.soundboardSounds;
                    m.set(d.X8, t);
                    M = N.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    e.updates.forEach((function(e) {
                        var t = e.guildId,
                            n = e.sounds;
                        m.set(t, n)
                    }));
                    R = N.FETCHED
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    m.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    var t = e.userId;
                    b.has(t) ? b.delete(t) : b.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.soundboardStoreState;
                    m = new Map(Object.entries(t.soundboardSounds));
                    D = new Set(t.favoritedSoundIds);
                    b = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.soundboardSounds;
                    m.set(t, n)
                }
            })
        },
        966334: (e, t, n) => {
            n.d(t, {
                M5: () => l,
                lS: () => s,
                ai: () => c,
                Ps: () => f,
                Hw: () => r,
                kG: () => i,
                SD: () => d,
                C7: () => p
            });
            var r, i, o = n(265688),
                u = n(120415),
                a = n(2590),
                l = "spotify",
                s = "spotify:",
                c = o.Z.get(a.ABu.SPOTIFY).name;

            function f(e) {
                return null != e && e.startsWith(s)
            }! function(e) {
                e.TRACK = "track";
                e.ARTIST = "artist";
                e.ALBUM = "album";
                e.PLAYLIST = "playlist"
            }(r || (r = {}));
            ! function(e) {
                e.USER_ACTIVITY_PLAY = "user_activity_play";
                e.USER_ACTIVITY_SYNC = "user_activity_sync";
                e.EMBED_SYNC = "embed_sync"
            }(i || (i = {}));
            var d = ["open.spotify.com", "www.spotify.com"],
                E = "https://api.spotify.com/v1",
                _ = function(e) {
                    return "?utm_source=discord&utm_medium=".concat(e)
                },
                p = Object.freeze({
                    PROFILE: "".concat(E, "/me"),
                    NOTIFICATIONS_PLAYER: "".concat(E, "/me/notifications/player"),
                    PLAYER: "".concat(E, "/me/player"),
                    PLAYER_DEVICES: "".concat(E, "/me/player/devices"),
                    PLAYER_PLAY: "".concat(E, "/me/player/play"),
                    PLAYER_PAUSE: "".concat(E, "/me/player/pause"),
                    PLAYER_REPEAT: "".concat(E, "/me/player/repeat"),
                    WEB_OPEN: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                        return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(_(n))
                    },
                    EMBED: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                        return "https://open.spotify.com/embed".concat(e).concat(_(t))
                    },
                    PLAYER_OPEN: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                        return "".concat(l, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? _(r) : "")
                    },
                    PREMIUM_SITE: "https://www.spotify.com/premium/".concat(_("desktop")),
                    INSTALL_ATTRIBUTION: function(e) {
                        return "https://app.adjust.com/bdyga9?campaign=".concat(e)
                    },
                    APP_STORE: (0, u.Dt)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
                    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
                })
        },
        82274: (e, t, n) => {
            n.d(t, {
                Z: () => X
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                l = n(575626),
                s = n(744564),
                c = n(306263),
                f = n(177570),
                d = n(664625),
                E = n(61209),
                _ = n(567403),
                p = n(682776),
                h = n(840922),
                g = n(377128),
                v = n(473903),
                O = n(407561),
                y = n(602397),
                I = n(808194),
                N = n(933022),
                T = n(766496);

            function A(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return C(e)
            }

            function m(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = C(e);
                    if (t) {
                        var i = C(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var R = "NO_GUILD",
                D = new l.Z((function(e) {
                    return [L(e)]
                }), (function(e) {
                    return e.id
                })),
                P = new Set,
                U = {};

            function L(e) {
                var t;
                return null !== (t = e.getGuildId()) && void 0 !== t ? t : R
            }

            function Z(e) {
                return D.values(null != e ? e : void 0, !0).map((function(e) {
                    return e.id
                }))
            }

            function w(e) {
                if (!P.has(e)) {
                    P.add(e);
                    u()(E.Z.getMutableGuildChannelsForGuild(e)).values().forEach((function(e) {
                        j(e) && D.set(e.id, e)
                    }))
                }
            }

            function k(e) {
                var t = U[e];
                if (null != t) return t;
                var n = E.Z.getChannel(e);
                if (null == n || !n.isGuildStageVoice()) return null;
                w(n.guild_id);
                return j(n) ? G(e) : null
            }

            function G(e) {
                var t = U[e];
                if (null == t) {
                    t = new I.ZP(e);
                    U[e] = t;
                    t.rebuild()
                }
                return t
            }

            function j(e) {
                return null != e && e.isGuildStageVoice() && y.ZP.countVoiceStatesForChannel(e.id) > 0
            }

            function H(e, t) {
                var n = E.Z.getChannel(e);
                return null != n && n.isGuildStageVoice() ? 0 === t.size() ? V(n.id) : null == D.get(n.id) && D.set(n.id, n) : V(e)
            }

            function F(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z();
                return t.reduce((function(t, n) {
                    var r = G(n);
                    if (!e(r)) return t;
                    H(n, r);
                    return !0
                }), !1)
            }

            function Y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z();
                return F((function(t) {
                    return t.updateParticipant(e)
                }), t)
            }

            function V(e) {
                if (null == e) return !1;
                delete U[e];
                D.delete(e);
                return !0
            }

            function B() {
                P.clear();
                D.clear();
                U = {}
            }

            function x(e, t, n) {
                if (null != n && !e.has(n)) {
                    var r = E.Z.getChannel(n);
                    if (null == r ? void 0 : r.isGuildStageVoice()) {
                        t.add(n);
                        e.add(n)
                    }
                }
            }

            function K(e) {
                return Y(e.user.id)
            }

            function W(e) {
                return Y(e.relationship.id)
            }

            function z(e) {
                ! function(e) {
                    var t = D.values(e),
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            D.delete(a.id);
                            delete U[a.id]
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    P.delete(e)
                }(e.guild.id)
            }

            function Q(e) {
                var t = e.streamKey,
                    n = (0, c.my)(t),
                    r = n.channelId,
                    i = n.guildId,
                    o = n.ownerId;
                return !(null == i || !P.has(i)) && Y(o, [r])
            }
            var q = [],
                J = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = M(n);

                    function n() {
                        A(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(d.default, v.default, E.Z, g.Z, O.Z, p.Z, y.ZP, _.Z, N.ZP, h.Z, T.Z, f.Z)
                    };
                    r.getParticipantsVersion = function(e) {
                        var t, n;
                        return null == e ? -1 : null !== (n = null === (t = k(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                    };
                    r.getMutableParticipants = function(e, t) {
                        var n, r;
                        return null == e ? q : null !== (r = null === (n = k(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : q
                    };
                    r.getMutableRequestToSpeakParticipants = function(e) {
                        var t, n;
                        return null !== (n = null === (t = k(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : q
                    };
                    r.getRequestToSpeakParticipantsVersion = function(e) {
                        var t, n;
                        return null !== (n = null === (t = k(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                    };
                    r.getParticipantCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = k(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
                    };
                    r.getChannels = function(e) {
                        w(null != e ? e : R);
                        return D.values(null != e ? e : R)
                    };
                    r.getChannelsVersion = function() {
                        return D.version
                    };
                    r.getParticipant = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = k(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
                    };
                    return n
                }(a.ZP.Store);
            J.displayName = "StageChannelParticipantStore";
            const X = new J(s.Z, {
                CONNECTION_OPEN: B,
                OVERLAY_INITIALIZE: B,
                VOICE_STATE_UPDATES: function(e) {
                    var t = e.voiceStates,
                        n = new Set;
                    return t.reduce((function(e, t) {
                        if (null == t.guildId || !P.has(t.guildId)) return e;
                        var r = new Set;
                        x(n, r, t.oldChannelId);
                        x(n, r, t.channelId);
                        return 0 === r.size ? e : Y(t.userId, Array.from(r)) || e
                    }), !1)
                },
                CHANNEL_DELETE: function(e) {
                    return V(e.channel.id)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    var t = e.members,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            n = Y(u.value.user.id) || n
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                USER_UPDATE: K,
                GUILD_MEMBER_REMOVE: K,
                GUILD_MEMBER_UPDATE: K,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels.reduce((function(e, t) {
                        if (!t.isGuildStageVoice() || !P.has(t.guild_id)) return e;
                        var n = D.get(t.id);
                        if (null == n || i()(t.permissionOverwrites, n.permissionOverwrites)) return e;
                        e.push(t.id);
                        D.set(t.id, t);
                        return e
                    }), []);
                    F((function(e) {
                        return e.rebuild()
                    }), t);
                    return t.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    var t = e.guildId;
                    if (P.has(t)) return F((function(e) {
                        return e.rebuild()
                    }), Z(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    var t = e.channelId,
                        n = e.guildId,
                        r = e.userId;
                    return !(null == n || !P.has(n)) && Y(r, [t])
                },
                STREAM_CLOSE: Q,
                STREAM_DELETE: Q,
                RELATIONSHIP_ADD: W,
                RELATIONSHIP_REMOVE: W,
                GUILD_CREATE: z,
                GUILD_DELETE: z,
                PASSIVE_UPDATE_V1: function(e) {
                    var t = !1,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Z(e.guildId)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            t = G(o.value).rebuild() || t
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                }
            })
        },
        808194: (e, t, n) => {
            n.d(t, {
                pV: () => m,
                Ui: () => S,
                ZP: () => P
            });
            var r = n(575626),
                i = n(306263),
                o = n(177570),
                u = n(61209),
                a = n(984216),
                l = n(21372),
                s = n(840922),
                c = n(473903),
                f = n(407561),
                d = n(773148),
                E = n(933022),
                _ = n(766496),
                p = n(525261),
                h = (n(202351), n(567403)),
                g = n(563135);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e, t) {
                var n = O(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [h.Z, l.ZP], 2),
                    r = n[0],
                    i = n[1];
                if (null == e || null == t) return null;
                var o = r.getGuild(e);
                if (null == o) return null;
                var u = i.getMember(o.id, t);
                return null == u ? null : g.ZP.getHighestHoistedRole(o, u)
            };
            var I = n(2590);

            function N(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var m, S;
            ! function(e) {
                e.SPEAKER = "SPEAKER";
                e.AUDIENCE = "AUDIENCE";
                e.NO_ROLE = "NO_ROLE";
                e.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK";
                e.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY";
                e.BLOCKED = "BLOCKED";
                e.FRIEND = "FRIEND";
                e.SELECTED = "SELECTED";
                e.MEDIA = "MEDIA"
            }(m || (m = {}));
            ! function(e) {
                e.VOICE = "VOICE";
                e.STREAM = "STREAM"
            }(S || (S = {}));

            function b(e) {
                var t, n = e.speaker,
                    r = e.role,
                    i = e.user,
                    o = e.userNick,
                    u = e.connectedOn,
                    a = e.voiceState,
                    l = n ? "\0" : "",
                    s = e.type === S.STREAM ? "\0" : "",
                    c = a.selfMute ? "" : "\0",
                    f = a.selfVideo ? "\0" : "",
                    d = "".concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, "0");
                return "".concat(l).concat(s).concat(c).concat(f).concat(d).concat(u).concat(function(e, t) {
                    return "".concat(e.toLowerCase().padEnd(32, "!")).concat(t.id)
                }(o, i))
            }

            function M(e) {
                var t = e.user,
                    n = e.voiceState.requestToSpeakTimestamp;
                return null == n ? t.id : "".concat(Date.parse(n)).concat(t.id)
            }

            function R(e) {
                return e === p.xO.REQUESTED_TO_SPEAK || e === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function D(e) {
                var t = e.speaker,
                    n = e.role,
                    r = e.rtsState,
                    i = e.blocked,
                    o = e.isFriend,
                    u = [];
                R(r) && u.push(m.ALL_REQUESTED_TO_SPEAK);
                r === p.xO.REQUESTED_TO_SPEAK && u.push(m.REQUESTED_TO_SPEAK_ONLY);
                if (t) u.push(m.SPEAKER);
                else {
                    null != n ? u.push(n.id) : u.push(m.NO_ROLE);
                    u.push(m.AUDIENCE)
                }
                i && u.push(m.BLOCKED);
                o && u.push(m.FRIEND);
                return u
            }
            var P = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n;
                    this.participants = {};
                    this._participantsIndex = new r.Z(D, b);
                    this._requestToSpeakIndex = new r.Z((function() {
                        return []
                    }), M);
                    this.channelId = t;
                    this.guildId = null === (n = u.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId()
                }
                var t = e.prototype;
                t._getParticipantsForUser = function(e, t) {
                    var n = [],
                        r = f.Z.getVoiceStateForChannel(this.channelId, e);
                    if (null == r) return n;
                    var u = c.default.getUser(e);
                    if (null == u) {
                        null != this.guildId && _.Z.isPublic(this.channelId) && a.Z.requestMember(this.guildId, e);
                        return n
                    }
                    var h, g, v, O = null != t ? t[0] : null,
                        N = {
                            user: u,
                            userNick: d.ZP.getName(this.guildId, this.channelId, u),
                            voiceState: r,
                            role: y(this.guildId, e),
                            speaker: E.ZP.isSpeaker(e, this.channelId),
                            member: null != this.guildId ? l.ZP.getMember(this.guildId, e) : null,
                            blocked: s.Z.getRelationships()[u.id] === I.OGo.BLOCKED,
                            isFriend: s.Z.isFriend(u.id),
                            connectedOn: null !== (h = null == O ? void 0 : O.connectedOn) && void 0 !== h ? h : Date.now()
                        },
                        T = C(A({}, N), {
                            type: S.VOICE,
                            id: u.id,
                            rtsState: (0, p.gf)(r)
                        });
                    n.push(T);
                    var m = null !== (v = o.Z.getStreamForUser(e, this.guildId)) && void 0 !== v ? v : o.Z.getActiveStreamForUser(e, this.guildId);
                    if (null != m && m.channelId === this.channelId) {
                        var b = (0, i.V9)(m);
                        g = C(A({}, N), {
                            id: b,
                            type: S.STREAM,
                            rtsState: p.xO.NONE
                        });
                        n.push(g)
                    }
                    return n
                };
                t.updateParticipant = function(e) {
                    var t = this,
                        n = this.participants[e],
                        r = this._getParticipantsForUser(e, n);
                    if (null == n && 0 === r.length) return !1;
                    null == n || n.forEach((function(e) {
                        t._participantsIndex.delete(e.id);
                        t._requestToSpeakIndex.delete(e.id)
                    }));
                    r.forEach((function(n) {
                        t._participantsIndex.set(n.id, n);
                        n.id === e && R(n.rtsState) ? t._requestToSpeakIndex.set(e, n) : t._requestToSpeakIndex.delete(e)
                    }));
                    this.participants[e] = r;
                    return !0
                };
                t.rebuild = function() {
                    var e = this,
                        t = u.Z.getChannel(this.channelId);
                    if (null == t || !t.isGuildStageVoice()) return !1;
                    var n = new Set(Object.keys(f.Z.getVoiceStatesForChannel(t.id)));
                    this._participantsIndex.clear();
                    this._requestToSpeakIndex.clear();
                    this.participants = {};
                    n.forEach((function(t) {
                        return e.updateParticipant(t)
                    }));
                    return !0
                };
                t.size = function(e) {
                    return this._participantsIndex.size(e)
                };
                t.toArray = function(e) {
                    return this._participantsIndex.values(e, !0)
                };
                t.getParticipant = function(e) {
                    var t;
                    return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
                };
                t.getRequestToSpeakParticipants = function() {
                    return this._requestToSpeakIndex.values(void 0, !0)
                };
                ! function(e, t, n) {
                    t && N(e.prototype, t);
                    n && N(e, n)
                }(e, [{
                    key: "version",
                    get: function() {
                        return this._participantsIndex.version
                    }
                }, {
                    key: "requestToSpeakVersion",
                    get: function() {
                        return this._requestToSpeakIndex.version
                    }
                }]);
                return e
            }()
        },
        162723: (e, t, n) => {
            n.d(t, {
                _L: () => E,
                Os: () => _,
                nG: () => p,
                B: () => h,
                jU: () => g
            });
            var r = n(940060),
                i = n(202351),
                o = n(944522),
                u = (n(664625), n(61209)),
                a = n(567403),
                l = n(682776),
                s = n(563135),
                c = n(227202),
                f = n(766496),
                d = n(2590);

            function E(e, t, n) {
                var i, o, u = null == n ? void 0 : n.permissionOverwrites[e];
                return {
                    id: e,
                    type: t,
                    deny: null !== (i = null == u ? void 0 : u.deny) && void 0 !== i ? i : s.ZP.NONE,
                    allow: r.Z.remove(null !== (o = null == u ? void 0 : u.allow) && void 0 !== o ? o : s.ZP.NONE, c.yP)
                }
            }

            function _(e) {
                var t = e.allow,
                    n = e.deny;
                return r.Z.equals(t, s.ZP.NONE) && r.Z.equals(n, s.ZP.NONE)
            }

            function p(e) {
                return (0, i.e7)([l.Z, a.Z, u.Z], (function() {
                    var t = u.Z.getChannel(e),
                        n = a.Z.getGuild(null == t ? void 0 : t.getGuildId());
                    return !(!l.Z.can(d.Plq.ADMINISTRATOR, n) && !l.Z.can(d.Plq.MANAGE_ROLES, t, void 0, void 0, !0)) || !!l.Z.can(c.N, t)
                }), [e])
            }

            function h(e) {
                return (0, i.e7)([u.Z, l.Z], (function() {
                    return null != e && l.Z.can(d.Plq.MUTE_MEMBERS, u.Z.getChannel(e))
                }), [e])
            }

            function g(e) {
                return !(null == e || !e.isGuildStageVoice()) && (!!o.Z.isLurking(e.guild_id) && (!!f.Z.isPublic(e.id) && l.Z.can(c.gl, e)))
            }
        },
        933022: (e, t, n) => {
            n.d(t, {
                ZP: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(61209),
                l = n(5544),
                s = n(21372),
                c = n(567403),
                f = n(473903),
                d = n(407561),
                E = n(563135),
                _ = n(227202),
                p = n(525261);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function O(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var I, N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }! function(e) {
                e.SPEAKER = "speaker";
                e.MODERATOR = "moderator"
            }(I || (I = {}));
            var A, C = {},
                m = (g(A = {}, I.SPEAKER, !1), g(A, I.MODERATOR, !1), A);

            function S(e, t) {
                var n = d.Z.getVoiceStateForChannel(t, e);
                return (0, p.gf)(n) === p.xO.ON_STAGE
            }

            function b(e, t, n) {
                return E.ZP.can({
                    permission: _.yP,
                    user: e,
                    context: t,
                    overwrites: n.permissionOverwrites,
                    roles: t.roles
                })
            }

            function M(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = a.Z.getChannel(t),
                    o = null == i ? void 0 : i.getGuildId(),
                    u = c.Z.getGuild(o);
                return null != u && null != i && i.isGuildStageVoice() ? (g(n = {}, I.SPEAKER, S(e, t)), g(n, I.MODERATOR, r ? b(e, u, i) : null), n) : m
            }

            function R(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                null == C[t] && (C[t] = {});
                var r = M(e, t, n);
                C[t][e] = r;
                return r
            }

            function D(e, t) {
                var n;
                if (null == t) return !1;
                var r = a.Z.getChannel(t);
                if (null == r || !r.isGuildStageVoice()) return !1;
                null === (n = C[t]) || void 0 === n || delete n[e];
                return !0
            }

            function P(e) {
                var t = l.ZP.getChannels(e)[l.Zb].filter((function(e) {
                        return e.channel.isGuildStageVoice()
                    })),
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                        var a = o.value.channel;
                        delete C[a.id]
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return t.length > 0
            }

            function U(e) {
                var t = e.guildId,
                    n = e.user;
                return null != n && null != t && function(e, t) {
                    for (var n in C) {
                        var r = a.Z.getBasicChannel(n);
                        null != r && r.guild_id === t && delete C[n][e]
                    }
                    return !0
                }(n.id, t)
            }

            function L(e) {
                var t = e.guild;
                for (var n in C) {
                    var r = a.Z.getBasicChannel(n);
                    null != r && r.guild_id !== t.id || delete C[n]
                }
            }
            var Z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.ZP, a.Z, c.Z, f.default, d.Z)
                };
                r.isSpeaker = function(e, t) {
                    return this.getPermissionsForUser(e, t)[I.SPEAKER]
                };
                r.isModerator = function(e, t) {
                    var n;
                    return null !== (n = this.getPermissionsForUser(e, t, !0)[I.MODERATOR]) && void 0 !== n && n
                };
                r.isAudienceMember = function(e, t) {
                    var n = this.getPermissionsForUser(e, t);
                    return !n[I.SPEAKER] && !n[I.MODERATOR]
                };
                r.getPermissionsForUser = function(e, t) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return m;
                    var i = null === (n = C[t]) || void 0 === n ? void 0 : n[e];
                    return null != i ? r && null == i[I.MODERATOR] ? R(e, t, !0) : i : R(e, t, r)
                };
                return n
            }(o.ZP.Store);
            Z.displayName = "StageChannelRoleStore";
            const w = new Z(u.Z, {
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            delete C[a.id]
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                CONNECTION_OPEN: function() {
                    C = {}
                },
                GUILD_MEMBER_REMOVE: U,
                GUILD_MEMBER_UPDATE: U,
                GUILD_ROLE_UPDATE: function(e) {
                    P(e.guildId)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t, n = P(e.guildId),
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = (null !== (t = e.voiceStates) && void 0 !== t ? t : [])[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var l = u.value;
                            n = D(l.userId, l.channelId) || n
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                VOICE_STATE_UPDATES: function(e) {
                    var t = e.voiceStates;
                    return !i().isEmpty(C) && t.reduce((function(e, t) {
                        return D(t.userId, t.channelId) || e
                    }), !1)
                },
                GUILD_CREATE: L,
                GUILD_DELETE: L
            })
        },
        713717: (e, t, n) => {
            n.d(t, {
                PK: () => l,
                xJ: () => s,
                tu: () => c
            });
            var r = n(202351),
                i = n(567403),
                o = n(407561),
                u = n(82274),
                a = n(808194);

            function l(e) {
                return (0, r.e7)([u.Z, o.Z], (function() {
                    return null != u.Z.getMutableParticipants(e, a.pV.SPEAKER).find((function(e) {
                        return e.type === a.Ui.STREAM
                    })) || o.Z.hasVideo(e)
                }), [e])
            }

            function s(e) {
                return null != u.Z.getMutableParticipants(e, a.pV.SPEAKER).find((function(e) {
                    return e.type === a.Ui.STREAM
                })) || o.Z.hasVideo(e)
            }

            function c(e) {
                var t, n = i.Z.getGuild(e);
                return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
            }
        },
        419198: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(264817));

            function o(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(t, n);

                        function a(e) {
                            o(u, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            o(u, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var s = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
            const c = {
                show: function(e) {
                    (0, i.ZD)(u((function() {
                        var t, i;
                        return s(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(74709)]).then(n.bind(n, 674709))];
                                case 1:
                                    t = o.sent(), i = t.default;
                                    return [2, function(t) {
                                        return (0, r.jsx)(i, l(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    a(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, t), {
                                            href: e
                                        }))
                                    }]
                            }
                        }))
                    })))
                }
            }
        },
        177729: (e, t, n) => {
            n.d(t, {
                v: () => a
            });
            var r = n(608575);
            const i = JSON.parse('["7z","ade","adp","arj","apk","application","appx","appxbundle","asx","bas","bat","cab","cer","chm","cmd","cnt","cpl","crt","csh","deb","der","diagcab","dll","dmg","docm","dotm","ex","ex_","exe","fxp","gadget","grp","gz","hlp","hpj","hta","htc","inf","ins","ipa","iso","isp","its","jar","jnlp","jse","ksh","lib","lnk","mad","maf","mag","mam","maq","mar","mas","mat","mau","mav","maw","mcf","mda","mdb","mde","mdt","mdw","mdz","msc","msh","msh1","msh1xml","msh2","msh2xml","mshxml","msi","msix","msixbundle","msp","mst","msu","nsh","ops","osd","pcd","pif","pkg","pl","plg","potm","ppam","ppsm","pptm","prf","prg","printerexport","ps1","ps1xml","ps2","ps2xml","psc1","psc2","psd1","psdm1","pst","py","pyc","pyo","pyw","pyz","pyzw","rar","reg","rpm","scf","scr","sct","shb","shs","sldm","sys","theme","tmp","url","vb","vbe","vbp","vbs","vhd","vhdx","vsmacros","vsw","vxd","webpnp","ws","wsc","wsf","wsh","xbap","xlam","xll","xlsm","xltm","xnk","z","zip"]');
            var o = new Set(i),
                u = {
                    "github.com": new RegExp("\\/releases\\S*\\/download"),
                    "bitbucket.org": new RegExp("\\/downloads\\S*\\/[^\\/]*"),
                    "gitlab.com": new RegExp("\\/downloads\\S*\\/[^\\/]*")
                };

            function a(e) {
                var t, n = r.parse(e),
                    i = n.pathname,
                    a = n.hostname;
                if (null == a) return null;
                var l = u[a];
                if (null != l && null != i && !l.test(i)) return null;
                if (null == i) return null;
                var s = i;
                try {
                    s = decodeURIComponent(i)
                } catch (e) {}
                for (var c = s.split("/"), f = null, d = 0, E = c.length - 1; E >= 0; E--) {
                    var _ = c[E];
                    if ("" !== _ && "." !== _) {
                        if (".." !== _) {
                            if (d > E) break;
                            f = c[E - d];
                            break
                        }
                        d++
                    }
                }
                if (null == f) return null;
                var p = f.split(".");
                if (p.length < 2) return null;
                var h = null === (t = p.pop()) || void 0 === t ? void 0 : t.toLowerCase();
                return null != h && o.has(h) ? h : null
            }
        },
        536945: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(382060),
                l = n(61209);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function _(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var v = {},
                O = new Set;

            function y(e) {
                return {
                    id: e.id,
                    parentId: e.parent_id
                }
            }

            function I(e) {
                e in v && delete v[e]
            }

            function N(e) {
                if (null != e.threads && e.threads.length > 0) {
                    v[e.id] = {};
                    e.threads.filter((function(e) {
                        return a.AW.has(e.type)
                    })).forEach((function(t) {
                        return T(e.id, t)
                    }))
                }
                e.hasThreadsSubscription && O.add(e.id)
            }

            function T(e, t) {
                var n = v[e],
                    r = t.parent_id;
                r in n || (n[r] = {});
                v[e][r][t.id] = y(t)
            }

            function A(e) {
                var t, n = e.channel;
                if (!a.AW.has(n.type)) return !1;
                if (!0 === (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived)) return C(n);
                var r, i = null !== (r = v[n.guild_id]) && void 0 !== r ? r : {};
                v[n.guild_id] = E(d({}, i), c({}, n.parent_id, E(d({}, i[n.parent_id]), c({}, n.id, y(n)))))
            }

            function C(e) {
                var t = e.guild_id,
                    n = e.parent_id,
                    r = e.id;
                if (null == t || null == n) return !1;
                if (!(t in v)) return !1;
                if (!(n in v[t])) return !1;
                if (!(r in v[t][n])) return !1;
                v[t] = E(d({}, v[t]), c({}, n, d({}, v[t][n])));
                delete v[t][n][r];
                i().isEmpty(v[t][n]) && delete v[t][n]
            }
            var m = {},
                S = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && p(e, t)
                    }(n, e);
                    var t = g(n);

                    function n() {
                        s(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(l.Z)
                    };
                    r.isActive = function(e, t, n) {
                        return null != e && null != this.getThreadsForParent(e, t)[n]
                    };
                    r.getThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = v[e]) && void 0 !== t ? t : m
                    };
                    r.getThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : m
                    };
                    r.hasThreadsForChannel = function(e, t) {
                        return !i().isEmpty(this.getThreadsForParent(e, t))
                    };
                    r.forEachGuild = function(e) {
                        for (var t in v) e(t, v[t])
                    };
                    r.hasLoaded = function(e) {
                        return O.has(e)
                    };
                    return n
                }(o.ZP.Store);
            S.displayName = "ActiveThreadsStore";
            const b = new S(u.Z, {
                CONNECTION_OPEN: function(e) {
                    v = {};
                    O.clear();
                    e.guilds.forEach((function(e) {
                        N(e)
                    }))
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.channels;
                    v = {};
                    i()(t).filter((function(e) {
                        return a.Ec.has(e.type)
                    })).groupBy("guild_id").forEach((function(e, t) {
                        v[t] = {};
                        e.forEach((function(e) {
                            return T(t, e)
                        }))
                    }))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    I(t.id);
                    N(t)
                },
                GUILD_DELETE: function(e) {
                    I(e.guild.id)
                },
                THREAD_CREATE: A,
                THREAD_UPDATE: A,
                THREAD_LIST_SYNC: function(e) {
                    var t = e.guildId,
                        n = e.threads;
                    null == e.channelIds && O.add(t);
                    v[t] = d({}, v[t]);
                    for (var r in v[t]) v[t][r] = d({}, v[t][r]);
                    n.forEach((function(e) {
                        return T(t, e)
                    }))
                },
                THREAD_DELETE: function(e) {
                    return C(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.guild_id || !(t.guild_id in v)) return !1;
                    v[t.guild_id] = d({}, v[t.guild_id]);
                    delete v[t.guild_id][t.id]
                }
            })
        },
        492628: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });

            function r(e) {
                return {
                    id: e.id,
                    userId: e.user_id,
                    flags: e.flags,
                    muted: e.muted,
                    muteConfig: e.mute_config,
                    joinTimestamp: e.join_timestamp
                }
            }
        },
        166302: (e, t, n) => {
            n.d(t, {
                ur: () => r
            });

            function r(e) {
                return !1
            }
        },
        177570: (e, t, n) => {
            n.d(t, {
                Z: () => Y
            });
            var r = n(202351),
                i = n(744564),
                o = n(409125),
                u = n(306263),
                a = n(924066),
                l = n(39649),
                s = n(664625),
                c = n(61209),
                f = n(567403),
                d = n(602351),
                E = n(682776),
                _ = n(563367),
                p = n(671723),
                h = n(715107),
                g = n(407561),
                v = n(2590),
                O = n(443132);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function N(e) {
                N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return N(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function C(e, t) {
                return !t || "object" !== D(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var S, b, M, R, D = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = N(e);
                    if (t) {
                        var i = N(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return C(this, n)
                }
            }
            var U = null,
                L = {};
            Z();

            function Z() {
                S = new Map;
                b = {};
                M = {};
                R = {};
                L = {}
            }

            function w(e) {
                S.delete(e)
            }

            function k() {
                var e = [];
                for (var t in b) {
                    var n = b[t];
                    for (var r in n) e.push(b[t][r])
                }
                return e
            }

            function G(e) {
                var t = e.streamKey,
                    n = e.region,
                    r = e.viewerIds,
                    i = e.paused;
                S.set(t, A(T({}, (0, u.my)(t)), {
                    state: i ? v.jm8.PAUSED : v.jm8.ACTIVE
                }));
                M[t] = {
                    streamKey: t,
                    region: n,
                    viewerIds: r
                }
            }

            function j(e, t) {
                return e === O.lo.CALL || E.Z.canWithPartialContext(v.Plq.VIEW_CHANNEL, {
                    channelId: t
                })
            }

            function H(e) {
                var t = c.Z.getChannel(e.channelId);
                return !!j(e.streamType, e.channelId) || null != t && (0, a.p9)(t, g.Z, f.Z, E.Z, o.Z)[0]
            }
            var F = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = P(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.syncWith([E.Z], (function() {
                        return !0
                    }));
                    this.waitFor(p.ZP, E.Z)
                };
                r.isSelfStreamHidden = function(e) {
                    var t;
                    return null !== (t = L[e]) && void 0 !== t && t
                };
                r.getLastActiveStream = function() {
                    return (0, l.Z)(d.Z) && null !== (e = Array.from(S.values()).pop()) && void 0 !== e ? e : null;
                    var e
                };
                r.getAllActiveStreams = function() {
                    return (0, l.Z)(d.Z) ? Array.from(S.values()) : []
                };
                r.getAllActiveStreamsForChannel = function(e) {
                    return (0, l.Z)(d.Z) ? Array.from(S.values()).filter((function(t) {
                        return t.channelId === e
                    })) : []
                };
                r.getActiveStreamForStreamKey = function(e) {
                    return (0, l.Z)(d.Z) && null !== (t = S.get(e)) && void 0 !== t ? t : null;
                    var t
                };
                r.getActiveStreamForApplicationStream = function(e) {
                    if (!(0, l.Z)(d.Z) || null == e) return null;
                    var t, n = (0, u.V9)(e);
                    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
                };
                r.getCurrentUserActiveStream = function() {
                    var e = h.Z.getVoiceChannelId(),
                        t = c.Z.getChannel(e);
                    return null == t ? null : this.getActiveStreamForUser(s.default.getId(), t.getGuildId())
                };
                r.getActiveStreamForUser = function(e, t) {
                    var n, r = this.getStreamForUser(e, t);
                    return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((function(t) {
                        return t.ownerId === e
                    }))) && void 0 !== n ? n : null
                };
                r.getStreamerActiveStreamMetadata = function() {
                    var e = h.Z.getVoiceChannelId(),
                        t = c.Z.getChannel(e);
                    if (null == t) return null;
                    var n, r = this.getActiveStreamForUser(s.default.getId(), t.getGuildId());
                    return null == r ? null : null !== (n = R[(0, u.V9)(r)]) && void 0 !== n ? n : null
                };
                r.getAnyStreamForUser = function(e) {
                    if (!(0, l.Z)(d.Z)) return null;
                    var t, n = b[e];
                    return null == n ? null : null !== (t = Object.values(n).find((function(e) {
                        return H(e)
                    }))) && void 0 !== t ? t : null
                };
                r.getStreamForUser = function(e, t) {
                    var n;
                    if (!(0, l.Z)(d.Z)) return null;
                    var r = null === (n = b[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
                    return null == r ? null : H(r) ? r : null
                };
                r.getRTCStream = function(e) {
                    return (0, l.Z)(d.Z) && null !== (t = M[e]) && void 0 !== t ? t : null;
                    var t
                };
                r.getAllApplicationStreams = function() {
                    return (0, l.Z)(d.Z) ? k().filter((function(e) {
                        return null != e && j(e.streamType, e.channelId)
                    })) : []
                };
                r.getAllApplicationStreamsForChannel = function(e) {
                    return (0, l.Z)(d.Z) ? k().filter((function(t) {
                        return null != t && t.channelId === e && j(t.streamType, t.channelId)
                    })) : []
                };
                r.getViewerIds = function(e) {
                    if (!(0, l.Z)(d.Z)) return [];
                    var t = null,
                        n = null != (t = "string" == typeof e ? e : (0, u.V9)(e)) ? M[t] : null;
                    return null != n ? n.viewerIds : []
                };
                r.getState = function() {
                    return (0, l.Z)(d.Z) ? {
                        activeStreams: Array.from(S.entries()),
                        streamsByUserAndGuild: b,
                        rtcStreams: M,
                        streamerActiveStreamMetadatas: R
                    } : {
                        activeStreams: [],
                        streamsByUserAndGuild: {},
                        rtcStreams: {},
                        streamerActiveStreamMetadatas: {}
                    }
                };
                return n
            }(r.ZP.Store);
            F.displayName = "ApplicationStreamingStore";
            const Y = new F(i.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.applicationStreamState;
                    b = t.streamsByUserAndGuild;
                    S = new Map(t.activeStreams);
                    M = t.rtcStreams;
                    R = t.streamerActiveStreamMetadatas
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.userId,
                            r = t.guildId,
                            i = t.channelId,
                            o = t.sessionId;
                        if (t.selfStream && null != i) {
                            ! function(e) {
                                null == b[e.ownerId] && (b[e.ownerId] = {});
                                var t;
                                b[e.ownerId][null !== (t = e.guildId) && void 0 !== t ? t : "null"] = e
                            }({
                                streamType: null != r ? O.lo.GUILD : O.lo.CALL,
                                ownerId: n,
                                guildId: r,
                                channelId: i
                            });
                            return !0
                        }
                        var u = s.default.getSessionId();
                        return n === s.default.getId() && o !== u && null != _.Z.getChannelId() ? e : function(e, t) {
                            var n;
                            t = null != t ? t : "null";
                            if (null == (null === (n = b[e]) || void 0 === n ? void 0 : n[t])) return !1;
                            delete b[e][t];
                            return !0
                        }(n, r) || e
                    }), !1)
                },
                STREAM_WATCH: function(e) {
                    var t = e.streamKey,
                        n = (0, u.my)(t);
                    S.delete(t);
                    S.set(t, A(T({}, n), {
                        state: v.jm8.CONNECTING
                    }));
                    n.ownerId === s.default.getId() && (L[n.channelId] = !1)
                },
                STREAM_START: function(e) {
                    var t = e.streamType,
                        n = e.guildId,
                        r = e.channelId,
                        i = e.pid,
                        o = e.sourceName,
                        a = (0, u.V9)({
                            streamType: t,
                            guildId: n,
                            channelId: r,
                            ownerId: s.default.getId()
                        }),
                        l = null != i ? p.ZP.getGameForPID(i) : null;
                    R[a] = {
                        id: null == l ? void 0 : l.id,
                        pid: i,
                        sourceName: o
                    };
                    S.delete(a);
                    S.set(a, {
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: s.default.getId(),
                        state: v.jm8.CONNECTING
                    })
                },
                STREAM_STOP: function(e) {
                    var t = e.streamKey;
                    R[t] = null
                },
                STREAM_CREATE: G,
                STREAM_UPDATE: G,
                STREAM_TIMED_OUT: function(e) {
                    var t = e.streamKey,
                        n = S.get(t);
                    if (null == n) return !1;
                    S.set(t, A(T({}, n), {
                        state: v.jm8.FAILED
                    }))
                },
                STREAM_DELETE: function(e) {
                    var t = e.streamKey,
                        r = e.unavailable,
                        i = e.reason;
                    delete M[t];
                    var o = S.get(t);
                    if (null == o) return !1;
                    var a = v.jm8.ENDED;
                    if (r) a = v.jm8.RECONNECTING;
                    else if (i === v.si2.UNAUTHORIZED) a = v.jm8.FAILED;
                    else if (i === v.si2.SAFETY_GUILD_RATE_LIMITED) {
                        var l = (0, u.my)(t).guildId;
                        n.e(80853).then(n.bind(n, 980853)).then((function(e) {
                            (0, e.default)(l)
                        }));
                        a = v.jm8.ENDED
                    }
                    S.set(t, A(T({}, o), {
                        state: a
                    }));
                    a === v.jm8.ENDED && U !== t && w(t)
                },
                STREAM_CLOSE: function(e) {
                    w(e.streamKey)
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    var t = e.channelId,
                        n = e.selfStreamHidden;
                    (0, u.DB)(U) && (null == U ? void 0 : U.includes(s.default.getId())) && !1 === L[t] && !0 === n && (U = null);
                    L[t] = n
                },
                RTC_CONNECTION_STATE: function(e) {
                    var t = e.streamKey,
                        n = e.state;
                    if (null == t) return !1;
                    var r = S.get(t);
                    if (null == r || r.state === v.jm8.ENDED) return !1;
                    var i = r.state;
                    switch (n) {
                        case v.hes.DISCONNECTED:
                            i = v.jm8.RECONNECTING;
                            break;
                        case v.hes.RTC_CONNECTED:
                            i = v.jm8.ACTIVE
                    }
                    if (i === r.state) return !1;
                    S.set(t, A(T({}, r), {
                        state: i
                    }))
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    var t = e.id,
                        n = e.channelId;
                    U = t;
                    Array.from(S.values()).forEach((function(e) {
                        (0, u.V9)(e) !== U && e.state === v.jm8.ENDED && w((0, u.V9)(e))
                    }));
                    if (null != t) {
                        (0, u.DB)(t) && t.includes(s.default.getId()) && (L[n] = !1)
                    }
                },
                CONNECTION_OPEN: Z,
                CONNECTION_CLOSED: Z,
                LOGOUT: Z
            })
        },
        610773: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(281110),
                a = n(744564),
                l = n(61209),
                s = n(715107),
                c = n(464187),
                f = n(2590);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function g(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var I = {},
                N = {};

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z.getChannelId(),
                    n = l.Z.getChannel(t);
                if (null != n && null == n.getGuildId() && null != t && (null == I[t] || e)) {
                    var r;
                    I[t] = null !== (r = I[t]) && void 0 !== r ? r : {
                        channelId: t,
                        ringing: []
                    };
                    a.Z.dispatch({
                        type: "CALL_CONNECT",
                        channelId: t
                    });
                    return !0
                }
                return !1
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.Z, s.Z)
                };
                r.getCall = function(e) {
                    return I[e]
                };
                r.getCalls = function() {
                    return Object.values(I)
                };
                r.getMessageId = function(e) {
                    var t = this.getCall(e);
                    return null != t ? t.messageId : null
                };
                r.isCallActive = function(e, t) {
                    var n = I[e];
                    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
                };
                r.isCallUnavailable = function(e) {
                    var t = I[e];
                    return null != t && t.unavailable
                };
                r.getInternalState = function() {
                    return {
                        calls: I,
                        enqueuedRings: N
                    }
                };
                return n
            }(o.ZP.Store);
            A.displayName = "CallStore";
            const C = new A(a.Z, {
                CONNECTION_OPEN: function() {
                    return T(!0)
                },
                CONNECTION_CLOSED: function() {
                    I = {};
                    N = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.callStoreInternalState;
                    I = p({}, t.calls);
                    N = p({}, t.enqueuedRings)
                },
                CONNECTION_RESUMED: function() {
                    return T(!0)
                },
                CHANNEL_SELECT: function(e) {
                    return T(!1, e.channelId)
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    null != N[t.id] && delete N[t.id];
                    if (null == I[t.id]) return !1;
                    delete I[t.id]
                },
                CALL_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.region,
                        i = e.ringing;
                    I[t] = {
                        channelId: t,
                        messageId: n,
                        region: r,
                        ringing: i,
                        unavailable: !1,
                        regionUpdated: !1
                    };
                    if (null != N[t]) {
                        var o = N[t];
                        delete N[t];
                        1 !== o.indexOf("all") && (o = null);
                        u.ZP.post({
                            url: f.ANM.CALL_RING(t),
                            body: {
                                recipients: o
                            },
                            oldFormErrors: !0
                        })
                    }
                },
                CALL_UPDATE: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.region,
                        i = e.ringing,
                        o = I[t],
                        u = null != o && (o.regionUpdated || o.region !== r);
                    I[t] = h(p({}, I[t]), {
                        messageId: n,
                        region: r,
                        ringing: i,
                        regionUpdated: u
                    })
                },
                CALL_DELETE: function(e) {
                    var t = e.channelId,
                        n = e.unavailable,
                        r = I[t];
                    I[t] = !0 === n && null != r ? h(p({}, r), {
                        unavailable: n
                    }) : {
                        channelId: t,
                        ringing: [],
                        messageId: null,
                        region: null,
                        regionUpdated: !1,
                        unavailable: n
                    };
                    null != N[t] && delete N[t]
                },
                CALL_ENQUEUE_RING: function(e) {
                    var t, n = e.channelId,
                        r = e.recipients;
                    N[n] = i().union(null !== (t = N[n]) && void 0 !== t ? t : [], null != r ? r : ["all"])
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    null == e.channelId && (N = {})
                }
            })
        },
        804185: (e, t, n) => {
            n.d(t, {
                uZ: () => T,
                D5: () => D,
                ZP: () => w
            });
            var r = n(289283),
                i = n(202351),
                o = n(744564),
                u = n(841800),
                a = n(930948),
                l = n(61209),
                s = n(682776),
                c = n(923555),
                f = n(715107),
                d = n(464187),
                E = n(473903),
                _ = n(2590),
                p = n(897196),
                h = n(520453);

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function O(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var T = "message_requests",
                A = !1,
                C = !1,
                m = !0,
                S = !1,
                b = {},
                M = {};

            function R(e) {
                if (null == e) return null;
                if ((0, p.AB)(e)) {
                    var t = d.Z.getGuildId();
                    if (null == t) return null;
                    e = (0, p.Qk)(e, t)
                }
                return e
            }

            function D(e) {
                return [u.tI.VIEW_CHANNEL, u.tI.VIEW_THREAD, u.tI.VIEW_MESSAGE_REQUEST].includes(e.type)
            }

            function P(e) {
                var t = !1;
                if (S) {
                    S = !1;
                    t = !0
                }
                var n = R(f.Z.getChannelId());
                if (null != n && n in b) {
                    delete b[n];
                    t = !0
                }
                return t && e ? e : !e
            }

            function U() {
                var e = !1;
                for (var t in b) {
                    var n = b[t];
                    if (n.type === u.tI.VIEW_THREAD || n.type === u.tI.VIEW_CHANNEL) {
                        var r = l.Z.getChannel(n.channelId);
                        if (null == r || !s.Z.can(h.Pl.VIEW_CHANNEL, r)) {
                            delete b[t];
                            e = !0
                        }
                    }
                }
                return e
            }

            function L() {
                if (S === c.Z.isActive()) return !1;
                S = c.Z.isActive()
            }
            var Z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = N(n);

                function n() {
                    g(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        var t, n, r, i, o;
                        A = null !== (t = e.isMembersOpen) && void 0 !== t && t;
                        C = null !== (n = e.isSummariesOpen) && void 0 !== n && n;
                        m = null === (r = e.isProfileOpen) || void 0 === r || r;
                        b = null !== (i = e.sidebars) && void 0 !== i ? i : {};
                        M = null !== (o = e.guildSidebars) && void 0 !== o ? o : {}
                    }
                    this.syncWith([c.Z], L);
                    this.syncWith([s.Z], U)
                };
                r.getState = function() {
                    return {
                        isMembersOpen: A,
                        isSummariesOpen: C,
                        isProfileOpen: m,
                        sidebars: b,
                        guildSidebars: M
                    }
                };
                r.getSection = function(e, t) {
                    return S ? _.ULH.SEARCH : null != (e = R(e)) && null != b[e] ? _.ULH.SIDEBAR_CHAT : t && m ? _.ULH.PROFILE : C ? _.ULH.SUMMARIES : A ? _.ULH.MEMBERS : _.ULH.NONE
                };
                r.getSidebarState = function(e) {
                    return null == (e = R(e)) ? void 0 : b[e]
                };
                r.getGuildSidebarState = function(e) {
                    return null == e ? void 0 : M[e]
                };
                r.getCurrentSidebarChannelId = function(e) {
                    if (null == (e = R(e))) return null;
                    if (S) return null;
                    var t = b[e];
                    return null == t ? null : t.type === u.tI.VIEW_THREAD || t.type === u.tI.VIEW_CHANNEL ? t.channelId : null
                };
                r.getCurrentSidebarMessageId = function(e) {
                    var t;
                    if (null == (e = R(e))) return null;
                    if (S) return null;
                    var n = b[e];
                    return null == n ? null : n.type === u.tI.VIEW_THREAD || n.type === u.tI.VIEW_CHANNEL ? null === (t = n.details) || void 0 === t ? void 0 : t.initialMessageId : null
                };
                return n
            }(i.ZP.PersistedStore);
            Z.displayName = "ChannelSectionStore";
            Z.persistKey = "ChannelSectionStore2";
            const w = new Z(o.Z, {
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    C && (C = P(C));
                    A = P(A)
                },
                PROFILE_PANEL_TOGGLE_SECTION: function() {
                    m || a.S.dispatch(_.CkL.SEARCH_RESULTS_CLOSE);
                    m = P(m)
                },
                CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
                    A && (A = P(A));
                    C = P(C)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    var t = e.sidebarType,
                        n = e.baseChannelId,
                        r = e.channelId,
                        i = e.details;
                    S = !1;
                    var o = R(n);
                    if (null == o) return !1;
                    b[o] = {
                        type: t,
                        channelId: r,
                        details: i
                    };
                    return !0
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    var t = e.sidebarType,
                        n = e.guildId,
                        r = e.baseChannelId,
                        i = e.details;
                    S = !1;
                    var o = R(r);
                    if (null == o) return !1;
                    M[n] = {
                        type: t,
                        baseChannelId: o,
                        guildId: n,
                        details: i
                    };
                    return !0
                },
                SIDEBAR_CREATE_THREAD: function(e) {
                    var t = e.parentChannelId,
                        n = e.parentMessageId,
                        r = e.location;
                    S = !1;
                    var i = R(t);
                    null != i && (b[i] = {
                        type: u.tI.CREATE_THREAD,
                        parentChannelId: t,
                        parentMessageId: n,
                        location: r
                    })
                },
                SIDEBAR_CLOSE: function(e) {
                    var t = R(e.baseChannelId);
                    null != t && delete b[t]
                },
                SIDEBAR_CLOSE_GUILD: function(e) {
                    var t = e.guildId;
                    if (null != M[t]) {
                        delete M[t];
                        return !0
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (t.id in b) {
                        delete b[t.id];
                        return !0
                    }
                    var n = !1;
                    for (var r in b) {
                        var i = b[r];
                        if (null != i && i.type === u.tI.VIEW_CHANNEL && i.channelId === t.id) {
                            delete b[r];
                            n = !0
                        }
                    }
                    return n
                },
                CHANNEL_SELECT: function() {
                    if (r.tq && A) {
                        A = !1;
                        C = !1
                    }
                },
                THREAD_CREATE: function(e) {
                    var t, n = e.channel;
                    if (n.ownerId === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    var r = b[n.parent_id];
                    null != r && r.type === u.tI.CREATE_THREAD && r.parentMessageId === n.id && (b[n.parent_id] = {
                        type: u.tI.VIEW_THREAD,
                        channelId: n.id
                    })
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel,
                        n = b[t.parent_id];
                    if (null == n || n.type !== u.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
                    delete b[t.parent_id]
                }
            })
        },
        984216: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(513328);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var s = function() {
                    function e(t, n) {
                        l(this, e);
                        this._pendingRequests = new Set;
                        this._sentRequests = new Set;
                        this._unacknowledgedRequests = new Set;
                        this._guildId = t;
                        this._guildMemberExists = function(e) {
                            return n(t, e)
                        }
                    }
                    var t = e.prototype;
                    t.acknowledge = function(e) {
                        this._unacknowledgedRequests.delete(e);
                        this._pendingRequests.delete(e)
                    };
                    t.flushRequests = function(e) {
                        var t = this;
                        if (0 !== this._pendingRequests.size) {
                            var n = [];
                            this._pendingRequests.forEach((function(e) {
                                if (!t._guildMemberExists(e)) {
                                    t._unacknowledgedRequests.add(e);
                                    t._sentRequests.add(e);
                                    n.push(e)
                                }
                            }));
                            n.length > 0 && e(this._guildId, n);
                            this._pendingRequests.clear()
                        }
                    };
                    t.requestUnacknowledged = function() {
                        var e = this;
                        if (0 === this._unacknowledgedRequests.size) return !1;
                        this._unacknowledgedRequests.forEach((function(t) {
                            e._guildMemberExists(t) ? e._unacknowledgedRequests.delete(t) : e._pendingRequests.add(t)
                        }));
                        return 0 !== this._pendingRequests.size && void 0
                    };
                    t.request = function(e) {
                        if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
                        this._pendingRequests.add(e)
                    };
                    return e
                }(),
                c = function() {
                    function e(t, n) {
                        var r = this;
                        l(this, e);
                        this._guildStates = {};
                        this._flush = new a.sW(0, (function() {
                            return r.flushRequests()
                        }));
                        this._guildMemberExists = t;
                        this._onChange = n
                    }
                    var t = e.prototype;
                    t.reset = function() {
                        this._guildStates = {};
                        this._flush.cancel()
                    };
                    t.request = function(e, t) {
                        !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1)
                    };
                    t.acknowledge = function(e, t) {
                        this._getGuildState(e).acknowledge(t)
                    };
                    t.flushRequests = function() {
                        var e = this;
                        i().forEach(this._guildStates, (function(t) {
                            return t.flushRequests(e._onChange)
                        }))
                    };
                    t.requestUnacknowledged = function() {
                        i().reduce(this._guildStates, (function(e, t) {
                            return !1 !== t.requestUnacknowledged() || t
                        }), !1) && this._flush.delay()
                    };
                    t._getGuildState = function(e) {
                        var t = this._guildStates[e];
                        null == t && (t = this._guildStates[e] = new s(e, this._guildMemberExists));
                        return t
                    };
                    return e
                }(),
                f = n(659436),
                d = n(61209),
                E = n(21372);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var y = new c(E.ZP.isMember, (function(e, t) {
                u.Z.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            }));

            function I() {
                y.reset()
            }

            function N(e, t) {
                y.request(e, t);
                return !1
            }

            function T(e, t) {
                t.forEach((function(t) {
                    var n = t.author,
                        r = t.mentions;
                    null != n && N(e, n.id);
                    null == r || r.forEach((function(t) {
                        return N(e, t.id)
                    }))
                }));
                return !1
            }

            function A(e) {
                var t = e.channelId,
                    n = e.messages,
                    r = d.Z.getChannel(t);
                return null != r && null != r.guild_id && T(r.guild_id, n)
            }
            var C = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, E.ZP)
                };
                r.requestMember = function(e, t) {
                    N(e, t)
                };
                return n
            }(o.ZP.Store);
            C.displayName = "GuildMemberRequesterStore";
            const m = new C(u.Z, {
                CONNECTION_CLOSED: I,
                CONNECTION_OPEN: I,
                CONNECTION_RESUMED: function() {
                    y.requestUnacknowledged();
                    return !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    var t = e.guildId,
                        n = e.members,
                        r = e.notFound;
                    n.forEach((function(e) {
                        y.acknowledge(t, e.user.id)
                    }));
                    null != r && r.forEach((function(e) {
                        return y.acknowledge(t, e)
                    }));
                    return !1
                },
                SEARCH_FINISH: function(e) {
                    var t = e.guildId,
                        n = e.messages;
                    return null != t && T(t, i().flatten(n))
                },
                LOCAL_MESSAGES_LOADED: A,
                LOAD_MESSAGES_SUCCESS: A,
                LOAD_MESSAGES_AROUND_SUCCESS: A,
                LOAD_PINNED_MESSAGES_SUCCESS: A,
                LOAD_RECENT_MENTIONS_SUCCESS: A,
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.data;
                    return T(t, (0, f._)(n))
                }
            })
        },
        747126: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                i = n(630631),
                o = n(744564);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var d = "GuildNSFWAgreeStore",
                E = {};
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e;
                    E = null !== (e = i.Z.get(d)) && void 0 !== e ? e : E
                };
                r.didAgree = function(e) {
                    return null != e && (E[e] || !1)
                };
                return n
            }(r.ZP.Store);
            _.displayName = "GuildNSFWAgreeStore";
            const p = new _(o.Z, {
                GUILD_NSFW_AGREE: function(e) {
                    var t = e.guildId;
                    E[t] = !0;
                    i.Z.set(d, E)
                }
            })
        },
        746477: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                i = n(744564),
                o = n(661123),
                u = n(21372),
                a = n(567403),
                l = n(473903),
                s = n(2590),
                c = n(589677);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function _(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var O = {
                    notClaimed: !1,
                    notEmailVerified: !1,
                    notPhoneVerified: !1,
                    newAccount: !1,
                    newMember: !1,
                    canChat: !0
                },
                y = new Set,
                I = {};

            function N(e) {
                T(e);
                y.add(e);
                var t = a.Z.getGuild(e),
                    n = l.default.getCurrentUser();
                if (null != t && t.verificationLevel !== s.sFg.NONE && null != n && !t.isOwner(n) && !n.isPhoneVerified()) {
                    var r = u.ZP.getMember(t.id, n.id);
                    if (null != r) {
                        var f;
                        if ((0, o.yE)(null !== (f = r.flags) && void 0 !== f ? f : 0, c.q.BYPASSES_VERIFICATION)) return;
                        var d = new Set,
                            E = !0,
                            _ = !1,
                            p = void 0;
                        try {
                            for (var g, v = r.roles[Symbol.iterator](); !(E = (g = v.next()).done); E = !0) {
                                var O = g.value,
                                    N = t.getRole(O);
                                null == N || N.managed || d.add(O)
                            }
                        } catch (e) {
                            _ = !0;
                            p = e
                        } finally {
                            try {
                                E || null == v.return || v.return()
                            } finally {
                                if (_) throw p
                            }
                        }
                        var A = new Date("2022-12-02 00:00:00"),
                            C = null == r.joinedAt || new Date(r.joinedAt) < A;
                        if (!(t.hasFeature(s.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !C) && d.size > 0) return
                    }
                    var m = +n.createdAt + 6e4 * s.YeM.ACCOUNT_AGE - Date.now(),
                        S = +t.joinedAt + 6e4 * s.YeM.MEMBER_AGE - Date.now(),
                        b = t.verificationLevel >= s.sFg.LOW && !n.isClaimed(),
                        M = !1,
                        R = !1,
                        D = !1,
                        P = !1;
                    if (!n.isPhoneVerified() && !n.isStaff()) {
                        M = t.verificationLevel >= s.sFg.LOW && !n.verified;
                        R = t.verificationLevel >= s.sFg.VERY_HIGH;
                        D = t.verificationLevel >= s.sFg.MEDIUM && m > 0;
                        P = t.verificationLevel >= s.sFg.HIGH && S > 0
                    }
                    var U, L = [];
                    P && L.push(S);
                    D && L.push(m);
                    if (L.length > 0) {
                        var Z;
                        U = setTimeout((function() {
                            return i.Z.dispatch({
                                type: "GUILD_VERIFICATION_CHECK",
                                guildId: e
                            })
                        }), (Z = Math).max.apply(Z, h(L)))
                    }
                    I[e] = {
                        notClaimed: b,
                        notEmailVerified: M,
                        notPhoneVerified: R,
                        newAccount: D,
                        newMember: P,
                        canChat: !(b || M || R || D || P),
                        accountDeadline: new Date(Date.now() + m),
                        memberDeadline: new Date(Date.now() + S),
                        timeoutRef: U
                    }
                }
            }

            function T(e) {
                var t = I[e];
                null != t && clearTimeout(t.timeoutRef);
                delete I[e]
            }

            function A(e) {
                y.delete(e.guild.id);
                N(e.guild.id)
            }
            var C = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z, l.default)
                };
                r.getCheck = function(e) {
                    y.has(e) || N(e);
                    var t;
                    return null !== (t = I[e]) && void 0 !== t ? t : O
                };
                r.canChatInGuild = function(e) {
                    return this.getCheck(e).canChat
                };
                return n
            }(r.ZP.Store);
            C.displayName = "GuildVerificationStore";
            const m = new C(i.Z, {
                CONNECTION_OPEN: function() {
                    y.clear();
                    for (var e in I) T(e)
                },
                CONNECTION_CLOSED: function() {
                    Object.keys(I).forEach(T)
                },
                CURRENT_USER_UPDATE: function() {
                    y.clear()
                },
                GUILD_CREATE: A,
                GUILD_UPDATE: A,
                GUILD_DELETE: function(e) {
                    T(e.guild.id)
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t, n = e.guildId;
                    if (e.user.id !== (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    y.delete(n)
                },
                GUILD_VERIFICATION_CHECK: function(e) {
                    N(e.guildId)
                }
            })
        },
        595970: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                i = n(744564),
                o = n(116404),
                u = n(306472),
                a = n(968449),
                l = n(120415),
                s = n(664625),
                c = n(2590),
                f = n(36256);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function _(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var v = Date.now(),
                O = !1,
                y = !1,
                I = !1,
                N = !1,
                T = !1;

            function A() {
                return I || N || (0,
                    l.Dt)() && T
            }

            function C() {
                Date.now() - v > c.OSm || A() ? O || i.Z.dispatch({
                    type: "IDLE",
                    idle: !0,
                    idleSince: v
                }) : O && i.Z.dispatch({
                    type: "IDLE",
                    idle: !1
                });
                Date.now() - v > Math.min(1e3 * a.CM.getSetting(), c.OSm) || A() ? y || i.Z.dispatch({
                    type: "AFK",
                    afk: !0
                }) : y && i.Z.dispatch({
                    type: "AFK",
                    afk: !1
                })
            }
            if (!__OVERLAY__)
                if (l.FB && null != (null === u.Z || void 0 === u.Z ? void 0 : u.Z.remotePowerMonitor)) {
                    ! function e() {
                        var t, n = function(t) {
                            v = Math.max(Date.now() - t, v);
                            C();
                            setTimeout(e, 1e4)
                        };
                        if (null != (null === u.Z || void 0 === u.Z || null === (t = u.Z.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs)) {
                            var r = u.Z.remotePowerMonitor.getSystemIdleTimeMs();
                            r instanceof Promise ? r.then(n) : n(r)
                        }
                    }();
                    u.Z.remotePowerMonitor.on("resume", (function() {
                        I = !1;
                        m({})
                    }));
                    u.Z.remotePowerMonitor.on("suspend", (function() {
                        I = !0;
                        m({});
                        o.default.disconnect()
                    }));
                    u.Z.remotePowerMonitor.on("lock-screen", (function() {
                        N = !0;
                        m({})
                    }));
                    u.Z.remotePowerMonitor.on("unlock-screen", (function() {
                        N = !1;
                        m({})
                    }))
                } else setInterval(C, .25 * c.OSm);

            function m(e) {
                var t = e.timestamp,
                    n = "OVERLAY_SET_NOT_IDLE" === e.type && null != t;
                if (n && t <= v) return !1;
                v = n ? t : Date.now();
                __OVERLAY__ ? i.Z.dispatch({
                    type: "OVERLAY_SET_NOT_IDLE",
                    timestamp: v
                }) : C();
                return !1
            }
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isIdle = function() {
                    return O
                };
                r.isAFK = function() {
                    return y
                };
                r.getIdleSince = function() {
                    return O ? v : null
                };
                return n
            }(r.ZP.Store);
            S.displayName = "IdleStore";
            const b = new S(i.Z, {
                IDLE: function(e) {
                    O = e.idle
                },
                AFK: function(e) {
                    y = e.afk
                },
                SPEAKING: function(e) {
                    var t = e.userId;
                    e.speakingFlags !== f.Dg.NONE && t === s.default.getId() && m({});
                    return !1
                },
                APP_STATE_UPDATE: function(e) {
                    var t = e.state;
                    T = t === c.$7l.BACKGROUND;
                    v = Date.now();
                    C();
                    return !1
                },
                OVERLAY_SET_NOT_IDLE: m,
                CHANNEL_SELECT: m,
                VOICE_CHANNEL_SELECT: m,
                WINDOW_FOCUS: m,
                OVERLAY_INITIALIZE: m,
                OVERLAY_SET_INPUT_LOCKED: m,
                USER_SETTINGS_PROTO_UPDATE: m
            })
        },
        457696: (e, t, n) => {
            n.d(t, {
                F: () => r,
                E: () => i
            });

            function r(e) {
                var t = document.createElement("a");
                t.href = e;
                return t.hostname
            }

            function i(e) {
                var t = document.createElement("a");
                t.href = e;
                return t.protocol
            }
        },
        179913: (e, t, n) => {
            n.d(t, {
                ZP: () => ht,
                Ex: () => ke
            });
            var r = n(441143),
                i = n.n(r),
                o = n(730381),
                u = n.n(o),
                a = n(202351),
                l = n(281110),
                s = n(513328),
                c = n(165695),
                f = n(744564),
                d = n(396043),
                E = n(566706),
                _ = n(747820),
                p = n(327566),
                h = n(296602),
                g = n(269300),
                v = n(839266),
                O = n(621696),
                y = n(996344),
                I = n(442658),
                N = n(48315),
                T = n(435949),
                A = n(858311),
                C = n(106673),
                m = n(202958),
                S = n(364269);
            var b = n(536945),
                M = n(487685),
                R = n(113566),
                D = n(473419),
                P = n(382060),
                U = n(884755),
                L = n(53452),
                Z = n(661123),
                w = n(72580),
                k = n(387328),
                G = n(120415),
                j = n(102921),
                H = n(664625),
                F = n(804185),
                Y = n(61209),
                V = n(953727),
                B = n(821229),
                x = n(837067),
                K = n(567403),
                W = n(595970),
                z = n(352980),
                Q = n(682776),
                q = n(840922),
                J = n(715107),
                X = n(9430),
                $ = n(473903),
                ee = n(901654),
                te = n(2590),
                ne = n(897196),
                re = n(3155),
                ie = n(736401),
                oe = n(290679);

            function ue(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ae(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function le(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            ae(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            ae(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function se(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ce(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function fe(e) {
                fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return fe(e)
            }

            function de(e, t) {
                return !t || "object" !== he(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ee(e, t) {
                Ee = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ee(e, t)
            }

            function _e(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || ge(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function pe(e) {
                return function(e) {
                    if (Array.isArray(e)) return ue(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ge(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var he = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ge(e, t) {
                if (e) {
                    if ("string" == typeof e) return ue(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ue(e, t) : void 0
                }
            }

            function ve(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = fe(e);
                    if (t) {
                        var i = fe(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return de(this, n)
                }
            }
            var Oe, ye = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                Ie = new h.Z("ReadStateStore");
            __OVERLAY__ && (Oe = n(674482).Z);
            var Ne = te.S7T.VIEW_CHANNEL | te.S7T.READ_MESSAGE_HISTORY,
                Te = null,
                Ae = null,
                Ce = null,
                me = !1,
                Se = [],
                be = !1,
                Me = null,
                Re = {};
            new Set;

            function De() {
                return j.Z.fromTimestamp(Date.now() - 2592e6)
            }
            var Pe = 0,
                Ue = 0,
                Le = null;

            function Ze() {
                Pe = Date.now() - 6048e5;
                Ue = Date.now() - 2592e5;
                clearTimeout(Le);
                Le = setTimeout((function() {
                    f.Z.dispatch({
                        type: "DECAY_READ_STATES"
                    })
                }), 36e5)
            }

            function we(e) {
                if (null == e) return 0;
                var t = Date.parse(e);
                return isNaN(t) ? 0 : t
            }

            function ke(e, t) {
                var n = Y.Z.getChannel(e.channel_id);
                return null != n && (!q.Z.isBlocked(e.author.id) && (!!(0, T.ZP)({
                    message: e,
                    userId: t.id,
                    suppressEveryone: X.Z.isSuppressEveryoneEnabled(n.guild_id),
                    suppressRoles: X.Z.isSuppressRolesEnabled(n.guild_id)
                }) || !!Ge(n)))
            }

            function Ge(e) {
                return null != e && e.isPrivate() && !X.Z.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
            }

            function je() {
                return He.apply(this, arguments)
            }

            function He() {
                return (He = le((function() {
                    var e;
                    return ye(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (0 === Se.length) {
                                    be = !1;
                                    return [2]
                                }
                                be = !0;
                                e = Se.splice(0, 100);
                                return [4, Ye((function() {
                                    return l.ZP.post({
                                        url: te.ANM.BULK_ACK,
                                        body: {
                                            read_states: e
                                        },
                                        oldFormErrors: !0
                                    })
                                }))];
                            case 1:
                                t.sent();
                                return [4, (0, s.GR)(1e3)];
                            case 2:
                                t.sent();
                                je();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var Fe;

            function Ye(e) {
                return Ve.apply(this, arguments)
            }

            function Ve() {
                return (Ve = le((function(e) {
                    var t, n, r;
                    return ye(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = H.default.getId();
                                n = 0;
                                i.label = 1;
                            case 1:
                                if (!(n < 3)) return [3, 9];
                                i.label = 2;
                            case 2:
                                i.trys.push([2, 4, , 8]);
                                return [4, e()];
                            case 3:
                                return [2, i.sent()];
                            case 4:
                                r = i.sent();
                                Ie.error("", r);
                                return n + 1 < 3 ? [4, (0, s.GR)(2e3 * (n + 1))] : [3, 7];
                            case 5:
                                i.sent();
                                return [4, k.Z.awaitOnline()];
                            case 6:
                                i.sent();
                                if (t !== H.default.getId()) return [2, Promise.reject(new Error("User changed."))];
                                i.label = 7;
                            case 7:
                                return [3, 8];
                            case 8:
                                n++;
                                return [3, 1];
                            case 9:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Be(e) {
                if (e.type !== oe.W.CHANNEL) return !1;
                var t = Y.Z.getChannel(e.channelId),
                    n = null != t && t.isForumPost();
                if (W.Z.isIdle()) return !1;
                if (!e.canTrackUnreads()) return !1;
                if (!0 !== (null == t ? void 0 : t.isForumLikeChannel())) {
                    var r = Re[e.channelId],
                        i = null != r && ee.Z.isFocused(r),
                        o = null != Oe && Oe.isInstanceFocused() && Oe.isPinned(te.Odu.TEXT);
                    if (!i && !o) return !1
                }
                if (n && !e._persisted) return !0;
                if (!e.hasUnreadOrMentions()) return !1;
                if (!0 === (null == t ? void 0 : t.isForumLikeChannel())) return !1;
                if (!(n && !e._isJoinedThread) && !V.Z.isAtBottom(e.channelId)) return !1;
                var u = E.Z.getLayout(e.channelId),
                    a = E.Z.getChatOpen(e.channelId);
                if (!a && (u === te.AEg.NO_CHAT || u === te.AEg.FULL_SCREEN)) return !1;
                if (null == Re[e.channelId]) return !1;
                var l = z.Z.getMessages(e.channelId);
                if (null == l || !l.ready || l.loadingMore) return !1;
                0;
                return !0
            }! function(e) {
                e[e.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL";
                e[e.IS_THREAD = 2] = "IS_THREAD"
            }(Fe || (Fe = {}));
            var xe = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    se(this, e);
                    this.type = oe.W.CHANNEL;
                    this.outgoingAckTimer = null;
                    this.ackMessageIdAtChannelSelect = null;
                    this.channelId = t;
                    this.type = n;
                    this._guildId = null;
                    this._isThread = !1;
                    this._isActiveThread = !1;
                    this._isJoinedThread = !1;
                    this._isResourceChannel = !1;
                    this._persisted = !1;
                    this.loadedMessages = !1;
                    this._lastMessageId = null;
                    this._lastMessageTimestamp = 0;
                    this._ackMessageId = null;
                    this._ackMessageTimestamp = 0;
                    this.isManualAck = !1;
                    this.ackPinTimestamp = 0;
                    this.lastPinTimestamp = 0;
                    this._oldestUnreadMessageId = null;
                    this.oldestUnreadMessageIdStale = !1;
                    this.estimated = !1;
                    this._unreadCount = 0;
                    this._mentionCount = 0;
                    this.outgoingAck = null
                }
                var t = e.prototype;
                t.serialize = function(e) {
                    var t = this,
                        n = t.channelId,
                        r = t.type,
                        i = t._guildId,
                        o = t._isThread,
                        u = t._isActiveThread,
                        a = t._isJoinedThread,
                        l = t._persisted,
                        s = t.loadedMessages,
                        c = t._lastMessageId,
                        f = t._lastMessageTimestamp,
                        d = t._ackMessageId,
                        E = t._ackMessageTimestamp,
                        _ = t.ackPinTimestamp,
                        p = t.isManualAck,
                        h = t.lastPinTimestamp,
                        g = t._oldestUnreadMessageId,
                        v = t.oldestUnreadMessageIdStale,
                        O = t.estimated,
                        y = t._mentionCount,
                        I = t.flags,
                        N = t.lastViewed;
                    if (e) return {
                        channelId: n,
                        type: r,
                        _guildId: i,
                        _isThread: o,
                        _isActiveThread: u,
                        _isJoinedThread: a,
                        _persisted: l,
                        loadedMessages: s,
                        _lastMessageId: c,
                        _lastMessageTimestamp: f,
                        _ackMessageId: d,
                        _ackMessageTimestamp: E,
                        ackPinTimestamp: _,
                        isManualAck: p,
                        lastPinTimestamp: h,
                        _oldestUnreadMessageId: g,
                        oldestUnreadMessageIdStale: v,
                        estimated: O,
                        _mentionCount: y,
                        flags: I,
                        lastViewed: N
                    };
                    var T = {
                        channelId: n,
                        type: r,
                        _guildId: i,
                        _persisted: l,
                        _lastMessageId: c,
                        _lastMessageTimestamp: f,
                        _ackMessageId: d,
                        _ackMessageTimestamp: E,
                        ackPinTimestamp: _,
                        lastPinTimestamp: h,
                        _mentionCount: y,
                        flags: I
                    };
                    null != N && N > 0 && (T.lastViewed = N);
                    if (o) {
                        T._isThread = o;
                        T._isActiveThread = u;
                        T._isJoinedThread = a
                    }
                    return T
                };
                t.deserializeForOverlay = function(t) {
                    var n = t.channelId,
                        r = t.type,
                        i = t._guildId,
                        o = t._isThread,
                        u = t._isActiveJoinedThread,
                        a = t._isActiveThread,
                        l = t._isJoinedThread,
                        s = t._persisted,
                        c = t.loadedMessages,
                        f = t._lastMessageId,
                        d = t._lastMessageTimestamp,
                        E = t._ackMessageId,
                        _ = t._ackMessageTimestamp,
                        p = t.ackPinTimestamp,
                        h = t.isManualAck,
                        g = t.lastPinTimestamp,
                        v = t._oldestUnreadMessageId,
                        O = t.oldestUnreadMessageIdStale,
                        y = t.estimated,
                        I = t._unreadCount,
                        N = t._mentionCount,
                        T = t.flags,
                        A = t.lastViewed;
                    this.channelId = n;
                    this.type = null != r ? r : oe.W.CHANNEL;
                    this._guildId = i;
                    this._isThread = null != o && o;
                    if (null != u) {
                        this._isActiveThread = u;
                        this._isJoinedThread = u
                    } else {
                        this._isActiveThread = null != a && a;
                        this._isJoinedThread = null != l && l
                    }
                    this._persisted = !1 !== s;
                    this.loadedMessages = null != c && c;
                    this._lastMessageId = f;
                    this._lastMessageTimestamp = d;
                    this._ackMessageId = E;
                    this._ackMessageTimestamp = _;
                    this.ackPinTimestamp = p;
                    this.isManualAck = null != h && h;
                    this.lastPinTimestamp = g;
                    this._oldestUnreadMessageId = v;
                    this.oldestUnreadMessageIdStale = null != O && O;
                    this.estimated = null != y && y;
                    this._unreadCount = null != I ? I : 0;
                    this._mentionCount = N;
                    this.flags = T;
                    this.lastViewed = A;
                    e._mentionChannels.delete(this.channelId);
                    this._mentionCount > 0 && this.canHaveMentions() && e._mentionChannels.add(this.channelId)
                };
                t.incrementGuildUnreadsSentinel = function() {
                    null != this._guildId && e.getGuildSentinels(this._guildId).unreadsSentinel++
                };
                t.guessAckMessageId = function() {
                    var e = z.Z.getMessages(this.channelId);
                    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
                    if (!this.hasMentions()) return this.lastMessageId;
                    var t = null,
                        n = this.mentionCount,
                        r = $.default.getCurrentUser();
                    e.forEach((function(e) {
                        if (n > 0 && e.author.id !== (null == r ? void 0 : r.id)) --n;
                        else if (0 === n) {
                            t = e.id;
                            return !1
                        }
                    }), this, !0);
                    return t
                };
                t.isPrivate = function() {
                    if (this.type !== oe.W.CHANNEL) return !1;
                    var e = Y.Z.getChannel(this.channelId);
                    return null != e && e.isPrivate()
                };
                t.rebuildChannelState = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = this;
                    this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId();
                    this.isManualAck = null != e;
                    this.oldestUnreadMessageId = null;
                    this.estimated = !1;
                    this.unreadCount = 0;
                    n && (this.mentionCount = 0);
                    if (this.hasUnread()) {
                        var o, u = $.default.getCurrentUser(),
                            a = this.getAckTimestamp(),
                            l = !1,
                            s = !1,
                            c = null,
                            f = z.Z.getMessages(this.channelId);
                        f.forAll((function(e) {
                            if (l) {
                                var t;
                                i.oldestUnreadMessageId = null !== (t = i._oldestUnreadMessageId) && void 0 !== t ? t : e.id
                            } else l = e.id === i._ackMessageId;
                            if (j.Z.extractTimestamp(e.id) > a) {
                                i.unreadCount++;
                                n && ke(e, u) && i.mentionCount++;
                                c = null != c ? c : e.id
                            } else s = !0
                        }));
                        this.estimated = !f.hasPresent() || !(l || s) && f.length === this.unreadCount;
                        this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : c
                    }
                    null != r && (this.mentionCount = r)
                };
                t.handleGuildEventRemoval = function(e, t) {
                    if (!(j.Z.compare(this.ackMessageId, t) >= 0)) {
                        var n = g.ZP.getGuildScheduledEventsForGuild(e),
                            r = this.getAckTimestamp();
                        if (!isNaN(r)) {
                            var i, o = null !== (i = this._ackMessageId) && void 0 !== i ? i : j.Z.fromTimestamp(r),
                                u = null,
                                a = 0;
                            n.forEach((function(e) {
                                if ((0, g.Ld)(e)) {
                                    j.Z.compare(e.id, u) > 0 && (u = e.id);
                                    j.Z.compare(e.id, o) > 0 && a++
                                }
                            }));
                            this.lastMessageId = u;
                            this.mentionCount = a
                        }
                    }
                };
                t.canTrackUnreads = function() {
                    if (this.type !== oe.W.CHANNEL) return !0;
                    if (this._isThread && !this._isActiveThread) return !1;
                    if (this._isResourceChannel) return !1;
                    var e = Y.Z.getBasicChannel(this.channelId);
                    return null != e && ("basicPermissions" in e ? U.Z.has(e.basicPermissions, te.S7T.VIEW_CHANNEL) : !_.Z.isChannelGated(this.guildId, this.channelId) || Q.Z.can(te.Plq.VIEW_CHANNEL, e))
                };
                t.canBeUnread = function() {
                    if (this._isThread && !this._isJoinedThread) return !1;
                    if ((0, I.h3)(this.channelId, [y.Z, N.Z])) return !1;
                    if (!this._isThread && (0, S.r1)(this._guildId)) {
                        if (this._lastMessageTimestamp < Pe) return !1;
                        if (!X.Z.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions()) return !1
                    }
                    return this.canTrackUnreads()
                };
                t.canHaveMentions = function() {
                    return 0 !== this.mentionCount && (!(this._isThread && !this._isJoinedThread) && (!(0, I.h3)(this.channelId, [y.Z, N.Z]) && (!((0, S.r1)(this._guildId) && this._lastMessageTimestamp < Pe) && this.canTrackUnreads())))
                };
                t.getGuildChannelUnreadState = function(e, t, n, r, i, o) {
                    if (t) {
                        if (this._lastMessageTimestamp < Pe) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        };
                        if (!X.Z.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        }
                    }
                    if ("basicPermissions" in e) {
                        if (!U.Z.has(e.basicPermissions, te.S7T.VIEW_CHANNEL)) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        }
                    } else if (_.Z.isChannelGated(this.guildId, this.channelId) && !Q.Z.can(te.Plq.VIEW_CHANNEL, e)) return {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    };
                    if (i || o) return {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: !1
                    };
                    var u = (0, v.LS)({
                            isExperimentEnabled: n,
                            hasUserEnabledGuildUnreads: X.Z.isGuildUnreadSettingEnabled(e.guild_id),
                            channelNotificationOverrides: r[e.id],
                            categoryNotificationOverrides: null == e.parent_id ? null : r[e.parent_id],
                            unreadSetting: X.Z.getChannelUnreadSetting(e.guild_id, e.id),
                            hasJoinedThread: M.Z.hasJoined(e.id)
                        }),
                        a = !1;
                    a = u === ie.N.NULL || u === ie.N.MENTIONS_AND_HIGHLIGHTS ? this.mentionCount > 0 || (0, p.Do)(this.channelId, this._ackMessageId) : this.getAckTimestamp() < this._lastMessageTimestamp;
                    return {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: a
                    }
                };
                t.hasUnread = function() {
                    return this.getAckTimestamp() < this._lastMessageTimestamp
                };
                t.hasNotableUnread = function() {
                    var e = Y.Z.getBasicChannel(this.channelId),
                        t = null != e ? (0, v.j$)(e) : ie.N.ALL_MESSAGES;
                    return t === ie.N.NULL || t === ie.N.MENTIONS_AND_HIGHLIGHTS ? (0, p.HK)(this.channelId, this._ackMessageId).length > 0 || this.hasMentions() : this.getAckTimestamp() < this._lastMessageTimestamp
                };
                t.hasRecentlyVisitedAndRead = function() {
                    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > Ue && D.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
                };
                t.isForumPostUnread = function() {
                    return !!this._isActiveThread && this.hasUnread()
                };
                t.hasMentions = function() {
                    return this.getMentionCount() > 0
                };
                t.getMentionCount = function() {
                    return this.mentionCount
                };
                t.hasUnreadOrMentions = function() {
                    return this.hasMentions() || this.hasUnread()
                };
                t.ackPins = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = this;
                    if (this.type !== oe.W.CHANNEL) return !1;
                    if (!this.canTrackUnreads()) return !1;
                    if (null == e) {
                        if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                        this._persisted = !0;
                        Ye((function() {
                            return l.ZP.post({
                                url: te.ANM.PINS_ACK(t.channelId),
                                oldFormErrors: !0
                            })
                        }))
                    }
                    var n = we(e);
                    this.ackPinTimestamp = 0 !== n ? n : this.lastPinTimestamp;
                    return !0
                };
                t.ack = function(e) {
                    var t = e.messageId,
                        n = e.local,
                        r = void 0 !== n && n,
                        i = e.immediate,
                        o = void 0 !== i && i,
                        u = e.force,
                        a = void 0 !== u && u,
                        l = e.isExplicitUserAction,
                        s = void 0 !== l && l,
                        c = e.location,
                        f = void 0 === c ? {
                            section: te.jXE.CHANNEL
                        } : c,
                        d = e.trackAnalytics,
                        E = void 0 === d || d,
                        _ = this;
                    if (!this._shouldAck(a, r, s)) return !1;
                    if (!a && !this.canTrackUnreads()) return !1;
                    var p = this.hasMentions();
                    this.estimated = !1;
                    this.unreadCount = 0;
                    this.mentionCount = 0;
                    if (null == t && null == (t = this.lastMessageId)) return !1;
                    this.ackMessageId = t;
                    this.isManualAck = !1;
                    this._persisted = !0;
                    et(this.channelId);
                    if (r) this.oldestUnreadMessageId = null;
                    else {
                        null == this.outgoingAck && (this.outgoingAckTimer = setTimeout((function() {
                            _.type === oe.W.CHANNEL ? _._ack(f, E) : _._nonChannelAck();
                            _.outgoingAck = null;
                            _.outgoingAckTimer = null
                        }), p || o ? 0 : 3e3));
                        this.outgoingAck = t
                    }
                    return !0
                };
                t.clearOutgoingAck = function() {
                    this.outgoingAck = null;
                    if (null != this.outgoingAckTimer) {
                        clearTimeout(this.outgoingAckTimer);
                        this.outgoingAckTimer = null
                    }
                };
                t._shouldAck = function(e, t, n) {
                    var r;
                    return !!e || (!!n || (!!t || !this.isManualAck && !(this.type === oe.W.CHANNEL && !this.loadedMessages && !(null === (r = Y.Z.getChannel(this.channelId)) || void 0 === r ? void 0 : r.isForumLikeChannel()))))
                };
                t._ack = function(e, t) {
                    var n = this,
                        r = this.outgoingAck;
                    if (null != r) {
                        var i = H.default.getId(),
                            o = Ce;
                        this._persisted = !0;
                        var u = this.recalculateFlags(),
                            a = u === this.flags ? void 0 : u;
                        Ye((function() {
                            return l.ZP.post({
                                url: te.ANM.MESSAGE_ACK(n.channelId, r),
                                body: {
                                    token: Ce,
                                    last_viewed: n.lastViewed,
                                    flags: a
                                },
                                oldFormErrors: !0
                            })
                        })).then((function(r) {
                            if (null != r) {
                                Ce === o && i === H.default.getId() && (Ce = r.body.token);
                                if (t) {
                                    var u = Y.Z.getChannel(n.channelId);
                                    (0, d.yw)(te.rMx.ACK_MESSAGES, {
                                        channel_id: n.channelId,
                                        guild_id: null == u ? void 0 : u.getGuildId(),
                                        location: e
                                    })
                                }
                            }
                        }))
                    }
                };
                t.recalculateFlags = function() {
                    if (this.type === oe.W.CHANNEL) {
                        var e = Y.Z.getChannel(this.channelId);
                        if (null != e) return e.isThread() ? Fe.IS_THREAD : null != e.guild_id ? Fe.IS_GUILD_CHANNEL : 0
                    }
                };
                t._nonChannelAck = function() {
                    var e = this,
                        t = e.outgoingAck,
                        n = e.channelId,
                        r = e.type;
                    if (null != t) {
                        var i;
                        switch (r) {
                            case oe.W.GUILD_HOME:
                            case oe.W.GUILD_EVENT:
                            case oe.W.GUILD_ONBOARDING_QUESTION:
                                i = te.ANM.GUILD_FEATURE_ACK(n, t, r);
                                break;
                            case oe.W.NOTIFICATION_CENTER:
                                i = te.ANM.USER_NON_CHANNEL_ACK(t, r);
                                break;
                            default:
                                return
                        }
                        this._persisted = !0;
                        Ye((function() {
                            return l.ZP.post({
                                url: i,
                                body: {},
                                oldFormErrors: !0
                            })
                        }))
                    }
                };
                t.delete = function() {
                    var t, n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        r = Y.Z.getBasicChannel(this.channelId);
                    Ie.log("Deleting ReadState", this.channelId, this.type, {
                        remote: n,
                        persisted: this._persisted,
                        channelMissing: null == r,
                        isOld: Xe(this, De()),
                        validType: null != r && P.AW.has(r.type),
                        readableType: null != r && (0, P.Em)(r.type),
                        oldThreadCutoff: De(),
                        mentionCount: this.mentionCount,
                        channelId: this.channelId,
                        ackMessageId: this._ackMessageId,
                        lastMessageId: this._lastMessageId
                    });
                    n && this._persisted && l.ZP.delete({
                        url: te.ANM.CHANNEL_ACK(this.channelId),
                        body: {
                            version: 2,
                            read_state_type: this.type
                        },
                        oldFormErrors: !0
                    });
                    null === (t = e._readStates[this.type]) || void 0 === t || delete t[this.channelId];
                    e._mentionChannels.delete(this.channelId)
                };
                t.shouldDeleteReadState = function(e) {
                    if (0 !== x.Z.totalUnavailableGuilds) return !1;
                    if (null != this.type && this.type !== oe.W.CHANNEL) return ! function(e) {
                        switch (e.type) {
                            case oe.W.GUILD_HOME:
                            case oe.W.GUILD_EVENT:
                            case oe.W.GUILD_ONBOARDING_QUESTION:
                                return null != K.Z.getGuild(e.channelId);
                            case oe.W.NOTIFICATION_CENTER:
                                var t;
                                return (null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                            default:
                                return !0
                        }
                    }(this);
                    var t = Y.Z.getBasicChannel(this.channelId);
                    return null == t ? !!Xe(this, e) : !!P.AW.has(t.type) && (!(0, P.Em)(t.type) || !(0, P.hv)(t.type) && (!(!P.Ec.has(t.type) || ! function(e, t, n) {
                        var r = e.guildId;
                        return (null == r || !b.Z.isActive(r, t.parent_id, e.channelId)) && Xe(e, n)
                    }(this, t, e)) || this.mentionCount > 0 && !Q.Z.canBasicChannel(Ne, t)))
                };
                t.getAckTimestamp = function() {
                    if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
                    if (this._isThread) {
                        this._ackMessageTimestamp = qe(this.guildId, this.channelId);
                        this._ackMessageId = j.Z.fromTimestamp(this._ackMessageTimestamp);
                        return this._ackMessageTimestamp
                    }
                    var e, t;
                    if (this.type === oe.W.GUILD_EVENT || this.type === oe.W.GUILD_ONBOARDING_QUESTION) e = K.Z.getGuild(this.channelId);
                    else if ((0, ne.AB)(this.channelId)) e = K.Z.getGuild(this.guildId);
                    else {
                        var n = Y.Z.getChannel(this.channelId);
                        if (null != n) {
                            var r = n.getGuildId();
                            e = K.Z.getGuild(r)
                        }
                    }
                    t = null != e ? Je(e) : j.Z.extractTimestamp(this.channelId);
                    this._ackMessageTimestamp = t;
                    return t
                };
                t.syncThreadSettings = function() {
                    this._isThread = !0;
                    var e = Y.Z.getChannel(this.channelId);
                    if (null == e) {
                        Ie.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId));
                        return !1
                    }
                    var t = this.guildId,
                        n = null != t && b.Z.isActive(t, e.parent_id, this.channelId),
                        r = M.Z.hasJoined(this.channelId);
                    if (this._isActiveThread === n && this._isJoinedThread === r) return !1;
                    this._isActiveThread = n;
                    this._isJoinedThread = r;
                    return !0
                };
                t.recordLastViewedTime = function() {
                    var e = Math.ceil((Date.now() - j.c) / L.Z.Millis.DAY);
                    if (e !== this.lastViewed) {
                        this.lastViewed = e;
                        this.canTrackUnreads() && !this.hasUnread() && this.ack({
                            force: !0,
                            trackAnalytics: !1
                        })
                    }
                };
                e.forEach = function(t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(e._readStates)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a, l = o.value,
                                s = null !== (a = e._readStates[parseInt(l)]) && void 0 !== a ? a : {},
                                c = !0,
                                f = !1,
                                d = void 0;
                            try {
                                for (var E, _ = Object.keys(s)[Symbol.iterator](); !(c = (E = _.next()).done); c = !0) {
                                    if (!1 === t(s[E.value])) break
                                }
                            } catch (e) {
                                f = !0;
                                d = e
                            } finally {
                                try {
                                    c || null == _.return || _.return()
                                } finally {
                                    if (f) throw d
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                };
                e.get = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL,
                        i = null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t];
                    if (null == i) {
                        i = new e(t, r);
                        null == e._readStates[r] && (e._readStates[r] = {});
                        e._readStates[r][t] = i
                    }
                    return i
                };
                e.getGuildSentinels = function(e) {
                    null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
                        unreadsSentinel: 0
                    });
                    return this._guildReadStateSentinels[e]
                };
                e.resetGuildSentinels = function() {
                    this._guildReadStateSentinels = {}
                };
                e.getIfExists = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t]
                };
                e.getMentionChannelIds = function() {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e._mentionChannels[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                l = e.getIfExists(a);
                            null != l && l.canHaveMentions() ? t.push(a) : e._mentionChannels.delete(a)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                };
                e.getValue = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL,
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        u = null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t];
                    return null == u ? o : i(u)
                };
                e.clear = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    if (null != (null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t])) {
                        delete e._readStates[r][t];
                        e._mentionChannels.delete(t);
                        return !0
                    }
                    return !1
                };
                e.clearAll = function() {
                    e._readStates = {};
                    e._mentionChannels.clear()
                };
                ! function(e, t, n) {
                    t && ce(e.prototype, t);
                    n && ce(e, n)
                }(e, [{
                    key: "oldestUnreadMessageId",
                    get: function() {
                        return this._oldestUnreadMessageId
                    },
                    set: function(e) {
                        this._oldestUnreadMessageId = e;
                        this.oldestUnreadMessageIdStale = !1
                    }
                }, {
                    key: "lastMessageId",
                    get: function() {
                        return this._lastMessageId
                    },
                    set: function(e) {
                        this._lastMessageId = e;
                        this._lastMessageTimestamp = null != e ? j.Z.extractTimestamp(e) : 0
                    }
                }, {
                    key: "lastMessageTimestamp",
                    get: function() {
                        return this._lastMessageTimestamp
                    }
                }, {
                    key: "ackMessageId",
                    get: function() {
                        return this._ackMessageId
                    },
                    set: function(e) {
                        this._ackMessageId = e;
                        this._ackMessageTimestamp = null != e ? j.Z.extractTimestamp(e) : 0
                    }
                }, {
                    key: "unreadCount",
                    get: function() {
                        var e;
                        return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
                    },
                    set: function(e) {
                        void 0 !== this._unreadCount && 0 !== this._unreadCount && 0 !== e || this.incrementGuildUnreadsSentinel();
                        this._unreadCount = e
                    }
                }, {
                    key: "mentionCount",
                    get: function() {
                        return this._mentionCount
                    },
                    set: function(t) {
                        0 !== this._mentionCount && 0 !== t || this._mentionCount === t || this.incrementGuildUnreadsSentinel();
                        this._mentionCount = t;
                        e._mentionChannels.delete(this.channelId);
                        this._mentionCount > 0 && this.canHaveMentions() && e._mentionChannels.add(this.channelId)
                    }
                }, {
                    key: "guildId",
                    get: function() {
                        if (null != this._guildId) return this._guildId;
                        var e = Y.Z.getChannel(this.channelId);
                        return this._guildId = null != e ? e.getGuildId() : null
                    }
                }, {
                    key: "oldestUnreadTimestamp",
                    get: function() {
                        return null != this.oldestUnreadMessageId ? j.Z.extractTimestamp(this.oldestUnreadMessageId) : 0
                    }
                }]);
                return e
            }();
            xe._guildReadStateSentinels = {};
            xe._readStates = {};
            xe._mentionChannels = new Set;

            function Ke(e) {
                e.forEach((function(e) {
                    if ((0, P.Em)(e.type)) {
                        var t = xe.get(e.id);
                        t._guildId = e.guild_id;
                        t.lastMessageId = e.lastMessageId;
                        t.lastPinTimestamp = we(e.lastPinTimestamp);
                        t._isResourceChannel = e.hasFlag(ne.zZ.IS_GUILD_RESOURCE_CHANNEL);
                        P.Ec.has(e.type) && t.syncThreadSettings()
                    }
                }))
            }

            function We(e) {
                e.forEach((function(e) {
                    if ((0, P.Em)(e.type)) {
                        var t, n = xe.get(e.id);
                        n.lastMessageId = e.last_message_id;
                        n.lastPinTimestamp = we(e.last_pin_timestamp);
                        n._isResourceChannel = (0, Z.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, ne.zZ.IS_GUILD_RESOURCE_CHANNEL);
                        P.Ec.has(e.type) && n.syncThreadSettings()
                    }
                }))
            }

            function ze(e) {
                ! function(e) {
                    var t;
                    null === (t = e.threads) || void 0 === t || t.forEach((function(t) {
                        if (P.AW.has(t.type)) {
                            var n = xe.get(t.id);
                            n.lastMessageId = t.lastMessageId;
                            n.lastPinTimestamp = we(t.lastPinTimestamp);
                            n._isThread = !0;
                            n._isActiveThread = !0;
                            n._isJoinedThread = null != t.member;
                            null == n.ackMessageId && (n.ackMessageId = j.Z.fromTimestamp(qe(e.id, t.id)));
                            null == n.ackPinTimestamp && (n.ackPinTimestamp = qe(e.id, t.id))
                        }
                    }))
                }(e);
                ! function(e) {
                    var t;
                    if (0 === (null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) && null == xe.getIfExists(e.id, oe.W.GUILD_EVENT)) return;
                    var n = xe.get(e.id, oe.W.GUILD_EVENT);
                    n._guildId = e.id;
                    var r, i = 0,
                        o = null,
                        u = null !== (r = n._ackMessageId) && void 0 !== r ? r : j.Z.fromTimestamp(n.getAckTimestamp());
                    e.guild_scheduled_events.forEach((function(e) {
                        j.Z.compare(e.id, o) > 0 && (o = e.id);
                        j.Z.compare(e.id, u) > 0 && i++
                    }));
                    n.lastMessageId = o;
                    n.mentionCount = i
                }(e);
                ! function(e) {
                    var t = 24;
                    xe.get(e.id, oe.W.GUILD_HOME).lastMessageId = j.Z.fromTimestamp(u()(Date.now()).subtract(t, "h").valueOf())
                }(e);
                ! function(e) {
                    var t = e.properties.latest_onboarding_question_id;
                    if (null == t) return;
                    var n = xe.get(e.id, oe.W.GUILD_ONBOARDING_QUESTION);
                    n._guildId = e.id;
                    n.lastMessageId = t
                }(e)
            }

            function Qe(e) {
                ! function(e) {
                    var t = $.default.getCurrentUser();
                    if (!(0, C.$N)()) return !1;
                    if (null == t) return !1;
                    var n = xe.get(t.id, oe.W.NOTIFICATION_CENTER);
                    e.forEach((function(e) {
                        if (null != e.since && e.type === te.OGo.PENDING_INCOMING) {
                            var t = new Date(e.since).getTime();
                            if ((null != n.ackMessageId ? j.Z.extractTimestamp(n.ackMessageId) : 0) < t) {
                                n.mentionCount++;
                                n.lastMessageId = j.Z.fromTimestamp(t)
                            }
                        }
                    }))
                }(e)
            }

            function qe(e, t) {
                var n, r, i, o = Y.Z.getChannel(t),
                    u = K.Z.getGuild(null != e ? e : null == o ? void 0 : o.guild_id),
                    a = (null == o ? void 0 : o.isForumPost()) ? 0 : Je(u),
                    l = (null !== (i = null === (n = M.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 0) - 5e3,
                    s = null == o || null === (r = o.threadMetadata) || void 0 === r ? void 0 : r.archiveTimestamp,
                    c = null != s ? new Date(s).getTime() - 1 : 0,
                    f = Math.max(l, c);
                f <= 0 && (f = j.Z.extractTimestamp(t) - 1);
                return isNaN(a) ? f : Math.max(a, f)
            }

            function Je(e) {
                if (null != e && null != e.joinedAt) {
                    if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
                    if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
                    if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
                }
                return Date.now()
            }

            function Xe(e, t) {
                return e.mentionCount > 0 || !(j.Z.compare(e.channelId, t) > 0) && (!(null != e._ackMessageId && j.Z.compare(e._ackMessageId, t) > 0) && !(null != e._lastMessageId && j.Z.compare(e._lastMessageId, t) > 0))
            }

            function $e(e) {
                if (null != e) {
                    var t = xe.get(e);
                    if (Be(t)) return t.ack({})
                }
                return !1
            }

            function et(e) {
                if (null != e) {
                    var t = xe.get(e);
                    if (t.type === oe.W.CHANNEL) {
                        var n = Y.Z.getChannel(t.channelId);
                        if (null != n && n.isForumPost() && null != n.parent_id) {
                            var r = n.parent_id,
                                i = xe.get(r);
                            b.Z.hasLoaded(n.guild_id) && Object.keys(b.Z.getThreadsForParent(n.guild_id, r)).every((function(e) {
                                return pt.hasOpenedThread(e) || j.Z.compare(e, i.ackMessageId) < 0
                            })) && i.ack({})
                        }
                    }
                }
            }

            function tt() {
                null != Me && clearTimeout(Me)
            }

            function nt(e) {
                if (null != e.channelUpdates) {
                    var t;
                    Ke(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
                }
                if (null != e.channelTimestampUpdates) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e.channelTimestampUpdates[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                l = xe.get(a.id);
                            null != a.last_message_id && (l.lastMessageId = a.last_message_id);
                            null != a.last_pin_timestamp && (l.lastPinTimestamp = we(a.last_pin_timestamp))
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }
            }

            function rt(e) {
                var t = e.channelId;
                xe.get(t).rebuildChannelState()
            }

            function it(e) {
                We(e.threads)
            }

            function ot(e) {
                var t = $.default.getCurrentUser();
                return null != e.creator_id && null != t && e.creator_id === t.id
            }

            function ut(e) {
                var t = e.channel;
                return xe.clear(t.id)
            }

            function at() {
                var e = F.ZP.getCurrentSidebarChannelId(Te),
                    t = !1;
                if (Ae !== e) {
                    t = st(Ae);
                    Ae = e
                } else t = $e(e) || t;
                return t
            }

            function lt(e) {
                if (null != e) {
                    xe.get(e).isManualAck = !1
                }
            }

            function st(e) {
                if (null == e) return !1;
                var t = xe.get(e);
                if (!t.hasUnread()) {
                    t.oldestUnreadMessageId = null;
                    return !0
                }
                return !1
            }

            function ct(e, t) {
                if (null == e) return !1;
                var n = xe.get(e);
                t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0);
                return $e(e)
            }

            function ft(e) {
                var t = e.channelId,
                    n = e.messageId,
                    r = e.manual,
                    i = e.newMentionCount,
                    o = xe.get(t);
                if (r) {
                    o.rebuildChannelState(n, !0, i);
                    return !0
                }
                return n !== o._ackMessageId && o.ack({
                    messageId: n,
                    local: !0
                })
            }

            function dt(e) {
                return Et(e.id, e.ackType, e.ackedId, e.local)
            }

            function Et(e, t, n, r) {
                var i, o = xe.get(e, t);
                if (n === o.ackMessageId || o.lastMessageId === o.ackMessageId) return !1;
                if (null == o.lastMessageId && 0 === o.mentionCount) return !1;
                n = null !== (i = null != n ? n : o.lastMessageId) && void 0 !== i ? i : j.Z.fromTimestamp(o.getAckTimestamp());
                return o.ack({
                    messageId: n,
                    local: null == r || r
                })
            }
            var _t = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ee(e, t)
                }(n, e);
                var t = ve(n);

                function n() {
                    se(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(V.Z, $.default, K.Z, x.Z, Y.Z, J.Z, z.Z, Q.Z, E.Z, b.Z, M.Z, F.ZP, g.ZP, B.Z, _.Z, X.Z, ee.Z, A.Z, y.Z, D.Z, N.Z, W.Z);
                    this.syncWith([F.ZP], at)
                };
                r.getReadStatesByChannel = function() {
                    var e;
                    return null !== (e = xe._readStates[oe.W.CHANNEL]) && void 0 !== e ? e : {}
                };
                r.getForDebugging = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getIfExists(e, t)
                };
                r.getNotifCenterReadState = function(e) {
                    return xe._readStates[oe.W.NOTIFICATION_CENTER][e]
                };
                r.hasUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canBeUnread() && e.hasUnread()
                    }), !1)
                };
                r.hasNotableUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canBeUnread() && e.hasNotableUnread()
                    }), !1)
                };
                r.hasTrackedUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() && e.hasUnread()
                    }), !1)
                };
                r.isForumPostUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.isForumPostUnread()
                    }), !1)
                };
                r.hasRelevantUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return this.hasNotableUnread(e.id, t) && X.Z.isChannelRelevant(e)
                };
                r.getUnreadCount = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canBeUnread() ? e.unreadCount : 0
                    }), 0)
                };
                r.getMentionCount = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canHaveMentions() ? e.getMentionCount() : 0
                    }), 0)
                };
                r.getGuildChannelUnreadState = function(e, t, n, r, i, o) {
                    return xe.getValue(e.id, oe.W.CHANNEL, (function(u) {
                        return u.getGuildChannelUnreadState(e, t, n, r, i, o)
                    }), {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    })
                };
                r.hasRecentlyVisitedAndRead = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.hasRecentlyVisitedAndRead()
                    }), !1)
                };
                r.ackMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canBeUnread() ? e.ackMessageId : null
                    }), null)
                };
                r.getTrackedAckMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() ? e._ackMessageId : null
                    }), null)
                };
                r.lastMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.lastMessageId
                    }), null)
                };
                r.lastMessageTimestamp = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.lastMessageTimestamp
                    }), 0)
                };
                r.lastPinTimestamp = function(e) {
                    return xe.getValue(e, oe.W.CHANNEL, (function(e) {
                        return e.lastPinTimestamp
                    }), null)
                };
                r.getOldestUnreadMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() ? e.oldestUnreadMessageId : null
                    }), null)
                };
                r.getOldestUnreadTimestamp = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0
                    }), 0)
                };
                r.isEstimated = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e.estimated
                    }), !1)
                };
                r.hasOpenedThread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return xe.getValue(e, t, (function(e) {
                        return e._persisted
                    }), !1)
                };
                r.hasUnreadPins = function(e) {
                    return xe.getValue(e, oe.W.CHANNEL, (function(e) {
                        return e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp
                    }), !1)
                };
                r.isNewForumThread = function(e, t, n) {
                    var r = xe.get(t);
                    if (!0 === xe.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || j.Z.compare(e, r.ackMessageIdAtChannelSelect) <= 0) return !1;
                    var i = Je(n);
                    return j.Z.extractTimestamp(e) > i
                };
                r.getAllReadStates = function(e) {
                    var t = [];
                    xe.forEach((function(n) {
                        switch (n.type) {
                            case oe.W.GUILD_HOME:
                            case oe.W.GUILD_EVENT:
                            case oe.W.GUILD_ONBOARDING_QUESTION:
                                null != K.Z.getGuild(n.channelId) && t.push(n.serialize(e));
                                break;
                            case oe.W.NOTIFICATION_CENTER:
                                var r;
                                (null === (r = $.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) === n.channelId && t.push(n.serialize(e));
                                break;
                            default:
                                t.push(n.serialize(e))
                        }
                    }));
                    return t
                };
                r.getGuildUnreadsSentinel = function(e) {
                    return xe.getGuildSentinels(e).unreadsSentinel
                };
                r.getMentionChannelIds = function() {
                    return xe.getMentionChannelIds()
                };
                return n
            }(a.ZP.Store);
            _t.displayName = "ReadStateStore";
            var pt = new _t(f.Z, {
                CONNECTION_OPEN: function(e) {
                    var t, n = e.guilds,
                        r = e.relationships,
                        i = e.initialPrivateChannels,
                        o = e.readState;
                    Ze();
                    Ce = null;
                    me || o.partial || xe.clearAll();
                    me = !1;
                    o.entries.forEach((function(e) {
                        var t, n = null !== (t = e.read_state_type) && void 0 !== t ? t : oe.W.CHANNEL;
                        n !== oe.W.CHANNEL && (e = function(e) {
                            return {
                                id: e.id,
                                read_state_type: e.read_state_type,
                                mention_count: e.badge_count,
                                last_message_id: e.last_acked_id
                            }
                        }(e));
                        var r, i = xe.get(e.id, n);
                        i._persisted = !0;
                        i._mentionCount = null !== (r = e.mention_count) && void 0 !== r ? r : 0;
                        i.flags = e.flags;
                        i.lastViewed = e.last_viewed;
                        var o = Y.Z.getBasicChannel(e.id);
                        null == o || !(0,
                            P.Q5)(o.type) || null != e.last_message_id && 0 !== e.last_message_id ? i.ackMessageId = e.last_message_id : i.ackMessageId = j.Z.fromTimestamp(qe(o.guild_id, o.id));
                        i.ackPinTimestamp = we(e.last_pin_timestamp);
                        xe._mentionChannels.delete(i.channelId);
                        i._mentionCount > 0 && i.canHaveMentions() && xe._mentionChannels.add(i.channelId)
                    }));
                    xe.resetGuildSentinels();
                    var u = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null != u) {
                        xe.get(u, oe.W.NOTIFICATION_CENTER).lastMessageId = j.Z.fromTimestamp(Date.now())
                    }
                    Qe(r);
                    Ke(i);
                    var a = !0,
                        l = !1,
                        s = void 0;
                    try {
                        for (var c, f = n[Symbol.iterator](); !(a = (c = f.next()).done); a = !0) {
                            var d, E = c.value;
                            Ke(null !== (d = E.channels) && void 0 !== d ? d : []);
                            nt(E);
                            ze(E)
                        }
                    } catch (e) {
                        l = !0;
                        s = e
                    } finally {
                        try {
                            a || null == f.return || f.return()
                        } finally {
                            if (l) throw s
                        }
                    }
                    tt();
                    Me = setTimeout((function() {
                        return function(e) {
                            var t = De(),
                                n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, u = e[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                    var a, l = o.value,
                                        s = null !== (a = l.read_state_type) && void 0 !== a ? a : oe.W.CHANNEL,
                                        c = xe.get(l.id, s);
                                    c.shouldDeleteReadState(t) && c.delete()
                                }
                            } catch (e) {
                                r = !0;
                                i = e
                            } finally {
                                try {
                                    n || null == u.return || u.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }(o.entries)
                    }), 1e4)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    Ke(e.lazyPrivateChannels)
                },
                LOGOUT: tt,
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.readStates,
                        n = e.selectedChannelId;
                    Ze();
                    Ce = null;
                    Te = n;
                    Ae = F.ZP.getCurrentSidebarChannelId(Te);
                    xe.clearAll();
                    t.forEach((function(e) {
                        var t = xe.get(e.channelId);
                        t.deserializeForOverlay(e);
                        t.type === oe.W.CHANNEL && t.rebuildChannelState()
                    }))
                },
                CACHE_LOADED: function(e) {
                    var t = e.readStates;
                    me = !0;
                    Ze();
                    t.forEach((function(e) {
                        var t, n = null !== (t = e.type) && void 0 !== t ? t : oe.W.CHANNEL;
                        e.type = n;
                        null == xe._readStates[n] && (xe._readStates[n] = {});
                        xe._readStates[n][e.channelId] = (0, c.gh)(e, xe)
                    }))
                },
                GUILD_CREATE: function(e) {
                    var t, n = e.guild,
                        r = De();
                    xe.forEach((function(e) {
                        e.guildId === n.id && e.shouldDeleteReadState(r) && e.delete(!1)
                    }));
                    Ke(null !== (t = n.channels) && void 0 !== t ? t : []);
                    nt(n);
                    ze(n)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.isAfter,
                        r = e.messages,
                        i = xe.get(t);
                    i.loadedMessages = !0;
                    var o = z.Z.getMessages(t);
                    if (null != o)
                        if (r.length > 0 && 1 === j.Z.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) i.rebuildChannelState();
                        else if (o.hasPresent() || o.jumpTargetId === i.ackMessageId) i.rebuildChannelState();
                    else if (n && null != i.ackMessageId && o.has(i.ackMessageId, !0)) {
                        i.unreadCount += r.length;
                        null == i.oldestUnreadMessageId && i.rebuildChannelState()
                    }
                    We(r.map((function(e) {
                        return e.thread
                    })).filter(w.lm))
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message,
                        r = e.isPushNotification,
                        i = xe.get(t);
                    i.lastMessageId = n.id;
                    var o, u, a = $.default.getCurrentUser(),
                        l = Y.Z.getBasicChannel(t);
                    if (null != n.author && null != a && n.author.id === a.id) {
                        null != i.outgoingAck && i.clearOutgoingAck();
                        return ft({
                            channelId: t,
                            messageId: n.id,
                            manual: !1
                        })
                    }
                    var s = (0, O.PP)();
                    if (!0 === (null == s ? void 0 : s.isReady())) {
                        var c = s.getCurrentRoute();
                        E.Z.getChatOpen(i.channelId) ? o = i.channelId : "channel" === (null == c ? void 0 : c.name) && (o = c.params.channelId)
                    } else if (null == s) {
                        o = J.Z.getChannelId();
                        u = F.ZP.getCurrentSidebarChannelId(o)
                    }
                    var f = o === t || u === t;
                    if (f && Be(i) && !r) return i.ack({
                        messageId: n.id
                    });
                    if (null != Oe && Oe.isInstanceFocused() && f && Oe.isInstanceUILocked() && Oe.isPinned(te.Odu.TEXT)) return i.ack({
                        messageId: n.id
                    });
                    (null == i.oldestUnreadMessageId || i.oldestUnreadMessageIdStale) && (i.oldestUnreadMessageId = n.id);
                    i.unreadCount++;
                    if (!(null != n.author && q.Z.isBlocked(n.author.id) || n.type === te.uaV.RECIPIENT_REMOVE && (null == l ? void 0 : l.type) === te.d4z.GROUP_DM) && (null != a && (0, T.Hl)({
                            rawMessage: n,
                            userId: a.id,
                            suppressEveryone: X.Z.isSuppressEveryoneEnabled(i.guildId),
                            suppressRoles: X.Z.isSuppressRolesEnabled(i.guildId)
                        }) || Ge(Y.Z.getChannel(t)))) {
                        i.mentionCount++;
                        if ((0, m.bY)() && null != a) {
                            xe.get(a.id, oe.W.NOTIFICATION_CENTER).lastMessageId = n.id;
                            A.Z.tabFocused && Et(a.id, oe.W.NOTIFICATION_CENTER, void 0, !1)
                        }
                    }
                },
                MESSAGE_DELETE: rt,
                MESSAGE_DELETE_BULK: rt,
                MESSAGE_ACK: ft,
                CHANNEL_ACK: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = void 0 === n ? void 0 : n,
                        i = e.immediate,
                        o = void 0 !== i && i,
                        u = e.force,
                        a = void 0 !== u && u,
                        l = e.context,
                        s = e.location,
                        c = xe.get(t),
                        f = c.ack({
                            messageId: r,
                            local: l !== te.e3s,
                            immediate: o,
                            force: a,
                            isExplicitUserAction: !0,
                            location: s
                        });
                    if (null != r) {
                        c.rebuildChannelState();
                        return !0
                    }
                    return f
                },
                CHANNEL_LOCAL_ACK: function(e) {
                    var t = e.channelId;
                    return xe.get(t).ack({
                        messageId: void 0,
                        local: !0,
                        immediate: void 0,
                        force: void 0,
                        isExplicitUserAction: !0
                    })
                },
                CHANNEL_PINS_ACK: function(e) {
                    var t = e.channelId,
                        n = e.timestamp;
                    return xe.get(t).ackPins(n)
                },
                CHANNEL_PINS_UPDATE: function(e) {
                    var t = e.channelId,
                        n = e.lastPinTimestamp,
                        r = xe.get(t),
                        i = we(n);
                    if (r.lastPinTimestamp === i) return !1;
                    r.lastPinTimestamp = i;
                    return !0
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId,
                        n = F.ZP.getCurrentSidebarChannelId(t),
                        r = Y.Z.getChannel(t);
                    if (null != r) {
                        var i, o = xe.get(r.id);
                        o.ackMessageIdAtChannelSelect = null !== (i = o.ackMessageId) && void 0 !== i ? i : j.Z.fromTimestamp(o.getAckTimestamp());
                        o.recordLastViewedTime()
                    }
                    lt(Te);
                    lt(Ae);
                    var u = !1;
                    if (Te !== t) {
                        u = st(Te) || u;
                        u = st(Ae) || u
                    }(Te === t || null != (null == r ? void 0 : r.type) && te.TPd.GUILD_THREADS_ONLY.has(r.type)) && (u = $e(t) || u);
                    Te === t && (u = $e(n) || u);
                    Te = t;
                    Ae = n;
                    return u
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null != t) {
                        var n = xe.get(t);
                        if (!n.hasMentions()) {
                            n.oldestUnreadMessageId = null;
                            return n.ack({
                                isExplicitUserAction: !0
                            })
                        }
                    }
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, P.Em)(t.type)) return !1;
                    var n = xe.get(t.id);
                    n.lastMessageId = t.lastMessageId;
                    n.lastPinTimestamp = we(t.lastPinTimestamp)
                },
                THREAD_CREATE: function(e) {
                    var t = e.channel;
                    ! function(e) {
                        if (!P.AW.has(e.type)) return !1;
                        var t = xe.get(e.id);
                        t.lastMessageId = e.lastMessageId;
                        t.lastPinTimestamp = we(e.lastPinTimestamp);
                        t.syncThreadSettings();
                        e.ownerId === H.default.getId() && (t.loadedMessages = !0)
                    }(t);
                    ! function(e) {
                        var t = e.parent_id;
                        xe.get(t).lastMessageId = e.id;
                        var n = $.default.getCurrentUser();
                        if (e.ownerId === (null == n ? void 0 : n.id)) {
                            xe.get(e.id)._persisted = !0;
                            ft({
                                channelId: t,
                                messageId: e.id,
                                manual: !1
                            })
                        }
                    }(t)
                },
                THREAD_UPDATE: function(e) {
                    var t = e.channel;
                    return !!P.AW.has(t.type) && xe.get(t.id).syncThreadSettings()
                },
                THREAD_LIST_SYNC: function(e) {
                    e.threads.forEach((function(e) {
                        if (P.AW.has(e.type)) {
                            var t = xe.get(e.id);
                            t.lastMessageId = e.lastMessageId;
                            t.lastPinTimestamp = we(e.lastPinTimestamp);
                            t._isThread = !0;
                            t._isActiveThread = !0;
                            t._isJoinedThread = M.Z.hasJoined(e.id);
                            if (e.isForumPost()) {
                                var n = xe.get(e.parent_id);
                                j.Z.compare(n.lastMessageId, e.id) < 0 && (n.lastMessageId = e.id)
                            }
                        }
                    }))
                },
                LOAD_THREADS_SUCCESS: it,
                LOAD_ARCHIVED_THREADS_SUCCESS: it,
                SEARCH_FINISH: function(e) {
                    var t = e.messages,
                        n = e.threads,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            We(u.value.map((function(e) {
                                return e.thread
                            })).filter(w.lm))
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    We(n)
                },
                THREAD_MEMBER_UPDATE: function(e) {
                    var t = e.id;
                    return xe.get(t).syncThreadSettings()
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    return (0, R.s)(e) && xe.get(e.id).syncThreadSettings()
                },
                CHANNEL_DELETE: ut,
                THREAD_DELETE: ut,
                WINDOW_FOCUS: function(e) {
                    var t = !1,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.entries(Re)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = _e(o.value, 2),
                                l = a[0];
                            a[1] === e.windowId && (t = ct(l, e.focused) || t)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                },
                IDLE: function(e) {
                    var t, n = e.idle;
                    if (!(0, G.Dt)()) return !1;
                    if (n) return !1;
                    var r = (0, O.PP)();
                    if (!0 === (null == r ? void 0 : r.isReady())) {
                        var i = r.getCurrentRoute();
                        "channel" === (null == i ? void 0 : i.name) && (t = i.params.channelId)
                    } else null == r && (t = J.Z.getChannelId());
                    return $e(t)
                },
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    return $e(e.channelId)
                },
                CURRENT_USER_UPDATE: function() {
                    Ce = null
                },
                DRAWER_OPEN: function() {
                    if (null != Te) {
                        var e = xe.get(Te);
                        e.hasUnread() || (e.oldestUnreadMessageIdStale = !0)
                    }
                    return !1
                },
                DRAWER_CLOSE: function() {
                    return $e(Te)
                },
                BULK_ACK: function(e) {
                    var t = e.channels,
                        n = e.context;
                    ! function(e, t) {
                        var n;
                        e.forEach((function(e) {
                            var t = e.channelId,
                                n = e.messageId,
                                r = e.readStateType;
                            xe.get(t, r).ack({
                                messageId: n,
                                local: !0,
                                immediate: void 0,
                                force: void 0,
                                isExplicitUserAction: !0
                            })
                        }));
                        if (t === te.e3s) {
                            (n = Se).push.apply(n, pe(e.map((function(e) {
                                return {
                                    channel_id: e.channelId,
                                    message_id: e.messageId,
                                    read_state_type: e.readStateType
                                }
                            }))));
                            be || je()
                        }
                    }(t.filter((function(e) {
                        return null != e.messageId && pt.hasUnread(e.channelId, e.readStateType)
                    })), n)
                },
                ENABLE_AUTOMATIC_ACK: function(e) {
                    var t = e.channelId,
                        n = e.windowId;
                    0;
                    if (Re[t] === n) return !1;
                    i()(void 0 === Re[t], "handleEnableAutomaticAck: channel already visible in another window");
                    Re[t] = n;
                    return $e(t)
                },
                DISABLE_AUTOMATIC_ACK: function(e) {
                    var t = e.channelId;
                    0;
                    Re[t] = void 0;
                    return !1
                },
                GUILD_FEATURE_ACK: dt,
                GUILD_SCHEDULED_EVENT_CREATE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = t.guild_id,
                        r = xe.get(t.guild_id, oe.W.GUILD_EVENT);
                    r.lastMessageId = t.id;
                    ot(t) ? dt({
                        type: "GUILD_FEATURE_ACK",
                        id: n,
                        ackType: oe.W.GUILD_EVENT,
                        ackedId: t.id,
                        local: !1
                    }) : X.Z.isMuteScheduledEventsEnabled(n) || r.mentionCount++
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = t.guild_id;
                    if (ot(t)) return !1;
                    if (![re.p1.CANCELED, re.p1.COMPLETED].includes(t.status)) return !1;
                    xe.get(n, oe.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = t.guild_id;
                    if (ot(t)) return !1;
                    xe.get(t.guild_id, oe.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    return xe.clear(t.id, oe.W.GUILD_EVENT)
                },
                GUILD_UPDATE: function(e) {
                    var t = e.guild,
                        n = t.latest_onboarding_question_id;
                    if (null != n) {
                        var r = xe.get(t.id, oe.W.GUILD_ONBOARDING_QUESTION);
                        r._guildId = t.id;
                        r.lastMessageId = n
                    }
                },
                RESORT_THREADS: function(e) {
                    return $e(e.channelId)
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    e.channelId, e.chatOpen;
                    0
                },
                DECAY_READ_STATES: Ze,
                NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
                    var t, n = e.item;
                    if (!(0, C.$N)()) return !1;
                    var r = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == r) return !1;
                    var i = xe.get(r, oe.W.NOTIFICATION_CENTER);
                    i.lastMessageId = n.id;
                    var o = (0, m.bY)();
                    !o && A.Z.active || o && A.Z.tabFocused ? Et(r, oe.W.NOTIFICATION_CENTER, n.id, !1) : i.mentionCount++
                },
                RELATIONSHIP_ADD: function(e) {
                    var t = $.default.getCurrentUser();
                    if (!(0, C.$N)()) return !1;
                    if (null == t) return !1;
                    if (null == e.relationship.since) return !1;
                    if (e.relationship.type !== te.OGo.PENDING_INCOMING && e.relationship.type !== te.OGo.FRIEND) return !1;
                    var n = xe.get(t.id, oe.W.NOTIFICATION_CENTER),
                        r = e.relationship.type === te.OGo.FRIEND,
                        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                        o = null != n.ackMessageId ? j.Z.extractTimestamp(n.ackMessageId) : 0,
                        u = (0, m.bY)();
                    if (o < i) {
                        n.lastMessageId = j.Z.fromTimestamp(i);
                        !u && A.Z.active || u && A.Z.tabFocused ? Et(t.id, oe.W.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++
                    }
                },
                RELATIONSHIP_REMOVE: function(e) {
                    var t = $.default.getCurrentUser();
                    if (!(0, C.$N)()) return !1;
                    if (null == t) return !1;
                    if (null == e.relationship.since) return !1;
                    if (e.relationship.type !== te.OGo.PENDING_INCOMING) return !1;
                    var n = xe.get(t.id, oe.W.NOTIFICATION_CENTER),
                        r = new Date(e.relationship.since).getTime();
                    (null != n.ackMessageId ? j.Z.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1))
                },
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    var t, n = e.ids;
                    if (e.optimistic || !(0, C.$N)() || A.Z.active) return !1;
                    var r = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == r) return !1;
                    var i = xe.get(r, oe.W.NOTIFICATION_CENTER);
                    n.forEach((function(e) {
                        j.Z.compare(i.ackMessageId, e) < 0 && (i.mentionCount = Math.max(i.mentionCount - 1, 0))
                    }))
                },
                USER_NON_CHANNEL_ACK: function(e) {
                    var t, n = e.ackType,
                        r = e.ackedId,
                        i = e.local,
                        o = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    return null != o && Et(o, n, r, i)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t, n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = (null !== (t = e.channels) && void 0 !== t ? t : [])[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var l = u.value,
                                s = xe.get(l.id),
                                c = we(l.lastPinTimestamp);
                            if (s.lastMessageId !== l.lastMessageId || s.lastPinTimestamp !== c) {
                                n = !0;
                                s.lastMessageId = l.lastMessageId;
                                s.lastPinTimestamp = c
                            }
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
                    return st(e.channelId)
                }
            });
            const ht = pt
        },
        923555: (e, t, n) => {
            n.d(t, {
                Z: () => L
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(630631),
                a = n(744564),
                l = n(955048),
                s = n(492628),
                c = n(61209),
                f = n(567403),
                d = n(715107),
                E = n(2590);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var y = {},
                I = !1,
                N = void 0;

            function T(e) {
                null == y[e] && (y[e] = {
                    searchId: e,
                    searchType: A(e),
                    isIndexing: !1,
                    isHistoricalIndexing: !1,
                    isSearching: !1,
                    analyticsId: null,
                    editorState: null,
                    offset: 0,
                    query: null,
                    hasError: !1,
                    searchFetcher: null,
                    rawResults: null,
                    totalResults: 0,
                    documentsIndexed: 0,
                    resultsBlocked: 0,
                    showBlockedResults: !1,
                    showNoResultsAlt: !1
                });
                return y[e]
            }

            function A(e) {
                return e === E.aib.DMS ? E.aib.DMS : null != f.Z.getGuild(e) ? E.aib.GUILD : null != c.Z.getChannel(e) ? E.aib.CHANNEL : null
            }

            function C(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (null == e) return n;
                var r = y[e];
                return null == r ? n : t(r)
            }
            var m = "SearchStore",
                S = !1,
                b = {},
                M = null;

            function R(e) {
                var t = e.searchId,
                    n = e.query;
                if ("string" == typeof n && "" !== (n = n.trim())) {
                    var r, i = b[t] = null !== (r = b[t]) && void 0 !== r ? r : [],
                        o = i.indexOf(n);
                    if (-1 !== o) {
                        i.splice(o, 1);
                        i.unshift(n)
                    } else null != i[0] && "" !== i[0] && n.startsWith(i[0]) ? i[0] = n : o < 0 && i.unshift(n);
                    i.length > 5 && i.splice(5, i.length);
                    u.Z.set(m, {
                        history: b
                    })
                }
            }

            function D(e) {
                var t = e.searchId,
                    n = y[t];
                if (null == n) return !1;
                null != n.searchFetcher && n.searchFetcher.cancel();
                delete y[t]
            }

            function P(e) {
                if (e === M) return !1;
                null != e && null == y[e] && T(e);
                M = e
            }
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(f.Z, c.Z);
                    var e = u.Z.get(m);
                    null != (null == e ? void 0 : e.history) && (b = function(e) {
                        Object.keys(e).forEach((function(t) {
                            Array.isArray(e[t]) && (e[t] = e[t].filter((function(e) {
                                return "string" == typeof e && e.trim()
                            })));
                            Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
                        }));
                        return e
                    }(e.history));
                    S = !!u.Z.get("tokenized") || !1
                };
                r.isOpen = function() {
                    return I
                };
                r.getCurrentSearchModalType = function() {
                    return N
                };
                r.getCurrentSearchId = function() {
                    return M
                };
                r.isActive = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M;
                    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
                };
                r.isTokenized = function() {
                    return S
                };
                r.getSearchType = function(e) {
                    return C(null != e ? e : M, (function(e) {
                        return e.searchType
                    }))
                };
                r.getRawResults = function(e) {
                    return C(e, (function(e) {
                        return e.rawResults
                    }))
                };
                r.hasResults = function(e) {
                    return null != C(e, (function(e) {
                        return e.rawResults
                    }))
                };
                r.isIndexing = function(e) {
                    return C(e, (function(e) {
                        return e.isIndexing
                    })) || !1
                };
                r.isHistoricalIndexing = function(e) {
                    return C(e, (function(e) {
                        return e.isHistoricalIndexing
                    })) || !1
                };
                r.isSearching = function(e) {
                    return C(e, (function(e) {
                        return e.isSearching
                    })) || !1
                };
                r.getAnalyticsId = function(e) {
                    return C(e, (function(e) {
                        return e.analyticsId
                    }))
                };
                r.getResultsBlocked = function(e) {
                    return C(e, (function(e) {
                        return e.resultsBlocked
                    }))
                };
                r.getDocumentsIndexedCount = function(e) {
                    return C(e, (function(e) {
                        return e.documentsIndexed
                    }))
                };
                r.getSearchFetcher = function(e) {
                    return C(e, (function(e) {
                        return e.searchFetcher
                    }))
                };
                r.getTotalResults = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.totalResults
                    }))) && void 0 !== t ? t : 0
                };
                r.getEditorState = function(e) {
                    return C(e, (function(e) {
                        return e.editorState
                    }))
                };
                r.getHistory = function(e) {
                    return b[e]
                };
                r.getOffset = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.offset
                    }))) && void 0 !== t ? t : 0
                };
                r.getQuery = function(e) {
                    return C(e, (function(e) {
                        return e.query
                    }))
                };
                r.hasError = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.hasError
                    }))) && void 0 !== t && t
                };
                r.shouldShowBlockedResults = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.showBlockedResults
                    }), !1)) && void 0 !== t && t
                };
                r.shouldShowNoResultsAlt = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.showNoResultsAlt
                    }), !1)) && void 0 !== t && t
                };
                r.getResultsState = function(e) {
                    return {
                        isSearching: this.isSearching(e),
                        isIndexing: this.isIndexing(e),
                        isHistoricalIndexing: this.isHistoricalIndexing(e),
                        documentsIndexed: this.getDocumentsIndexedCount(e),
                        offset: this.getOffset(e),
                        totalResults: this.getTotalResults(e),
                        hasError: this.hasError(e),
                        showBlockedResults: this.shouldShowBlockedResults(e),
                        showNoResultsAlt: this.shouldShowNoResultsAlt(e)
                    }
                };
                return n
            }(o.ZP.Store);
            U.displayName = "SearchStore";
            const L = new U(a.Z, {
                SEARCH_START: function(e) {
                    var t, n = e.queryString,
                        r = e.searchId,
                        o = e.query,
                        u = T(r);
                    if (null != u.searchFetcher) {
                        u.searchFetcher.cancel();
                        u.searchFetcher = null
                    }
                    var f = r,
                        _ = u.searchType;
                    if (r === E.I_8) {
                        var p;
                        f = null !== (p = d.Z.getChannelId()) && void 0 !== p ? p : r;
                        _ = E.aib.CHANNEL
                    }
                    var h, g = new l.ZP(f, _, o);
                    u.searchFetcher = g;
                    u.isSearching = !0;
                    u.rawResults = null;
                    u.analyticsId = null;
                    u.query = i().omit(o, "type");
                    u.offset = null !== (h = o.offset) && void 0 !== h ? h : 0;
                    u.showBlockedResults = !1;
                    R({
                        type: "SEARCH_ADD_HISTORY",
                        searchId: r,
                        query: n
                    });
                    var v = r === E.I_8 ? null === (t = c.Z.getChannel(f)) || void 0 === t ? void 0 : t.guild_id : _ === E.aib.GUILD ? r : null;
                    g.fetch((function(e) {
                        var t, n;
                        a.Z.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: r,
                            guildId: v,
                            analyticsId: e.body.analytics_id,
                            totalResults: e.body.total_results,
                            messages: e.body.messages,
                            threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                            members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((function(e) {
                                return (0, s.Z)(e)
                            })),
                            hasError: !1,
                            doingHistoricalIndex: e.body.doing_deep_historical_index,
                            documentsIndexed: e.body.documents_indexed
                        })
                    }), (function() {
                        a.Z.dispatch({
                            type: "SEARCH_INDEXING",
                            searchId: r
                        })
                    }), (function() {
                        a.Z.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: r,
                            guildId: v,
                            messages: [],
                            threads: [],
                            members: [],
                            totalResults: 0,
                            analyticsId: null,
                            hasError: !0,
                            doingHistoricalIndex: !1,
                            documentsIndexed: 0
                        })
                    }))
                },
                SEARCH_INDEXING: function(e) {
                    var t = T(e.searchId);
                    t.isIndexing = !0;
                    t.isHistoricalIndexing = !0;
                    t.isSearching = !1
                },
                SEARCH_FINISH: function(e) {
                    var t = T(e.searchId);
                    t.isSearching = !1;
                    t.isIndexing = !1;
                    t.isHistoricalIndexing = e.doingHistoricalIndex || !1;
                    t.searchFetcher = null;
                    t.totalResults = e.totalResults;
                    t.hasError = e.hasError;
                    t.analyticsId = e.analyticsId;
                    t.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0;
                    t.showNoResultsAlt = Math.random() < .05;
                    t.rawResults = e.messages;
                    null == t.query && (t.hasError = !0)
                },
                SEARCH_EDITOR_STATE_CLEAR: D,
                SEARCH_ENSURE_SEARCH_STATE: function(e) {
                    var t = e.searchId;
                    null != t && T(t)
                },
                SEARCH_EDITOR_STATE_CHANGE: function(e) {
                    var t = e.searchId,
                        n = e.editorState;
                    T(t).editorState = n
                },
                SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
                    var t = e.searchId,
                        n = e.showBlocked;
                    T(t).showBlockedResults = n
                },
                SEARCH_SCREEN_OPEN: function(e) {
                    P(e.searchId)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.guildId,
                        n = e.channelId;
                    P(null != t ? t : n)
                },
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    return null != M && D({
                        searchId: M
                    })
                },
                SEARCH_CLEAR_HISTORY: function(e) {
                    var t = e.searchId;
                    if (null == t) {
                        u.Z.remove(m);
                        b = {}
                    } else {
                        delete b[t];
                        u.Z.set(m, {
                            history: b
                        })
                    }
                },
                SEARCH_REMOVE_HISTORY: function(e) {
                    var t = e.searchId,
                        n = e.query;
                    if (null != b[t]) {
                        b[t] = b[t].filter((function(e) {
                            return e !== n
                        }));
                        u.Z.set(m, {
                            history: b
                        })
                    }
                },
                SEARCH_ADD_HISTORY: R,
                LOGOUT: function() {
                    u.Z.remove(m);
                    b = {}
                },
                CONNECTION_OPEN: function() {
                    Object.keys(y).forEach((function(e) {
                        null != y[e] && (y[e].searchType = A(e))
                    }))
                },
                SEARCH_MODAL_OPEN: function(e) {
                    var t = e.searchId,
                        n = e.searchType;
                    null != t && (M = t);
                    I = !0;
                    N = n
                },
                SEARCH_MODAL_CLOSE: function() {
                    I = !1;
                    N = void 0
                }
            })
        },
        377128: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var r = n(202351),
                i = n(744564),
                o = n(563135),
                u = n(61209),
                a = n(602351),
                l = n(563367),
                s = n(715107),
                c = n(2590),
                f = n(36256);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function p(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var y = new Map,
                I = null,
                N = null,
                T = null;

            function A(e, t) {
                var n = y.get(e);
                if (null == n) return !1;
                var r = n.delete(t);
                0 === n.size && y.delete(e);
                return r
            }

            function C(e, t, n) {
                var r, i, o;
                return ((null !== (o = null === (i = null === (r = y.get(e)) || void 0 === r ? void 0 : r.get(t)) || void 0 === i ? void 0 : i.flags) && void 0 !== o ? o : f.Dg.NONE) & n) === n
            }

            function m(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = y.get(e);
                if (null == r) return !1;
                var i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, l = r[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                        var s = g(a.value, 2),
                            c = s[0],
                            f = s[1].flags;
                        if ((!n || c !== I) && (f & t) === t) return !0
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (o) throw u
                    }
                }
                return !1
            }

            function S(e, t, n) {
                var r, i = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT,
                            t = y.get(e);
                        if (null == t) {
                            t = new Map;
                            y.set(e, t)
                        }
                        return t
                    }(e),
                    o = i.get(t),
                    u = null !== (r = null == o ? void 0 : o.flags) && void 0 !== r ? r : 0;
                if (0 === u && 0 === n) return !1;
                if (0 === n) {
                    i.delete(t);
                    0 === i.size && y.delete(e)
                } else {
                    var a, l = null !== (a = null == o ? void 0 : o.since) && void 0 !== a ? a : null,
                        s = (u & f.Dg.VOICE) === f.Dg.VOICE,
                        c = (n & f.Dg.VOICE) === f.Dg.VOICE;
                    s !== c && (l = c ? Date.now() : null);
                    i.set(t, {
                        flags: n,
                        since: l
                    })
                }
                return !0
            }

            function b(e) {
                var t = e.user,
                    n = e.sessionId;
                I = t.id;
                N = n;
                T = null
            }
            var M = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.mustEmitChanges((function(e) {
                        return "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type
                    }));
                    this.waitFor(l.Z)
                };
                r.getSpeakingDuration = function(e, t) {
                    var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Yn.DEFAULT,
                        o = null === (r = null === (n = y.get(i)) || void 0 === n ? void 0 : n.get(e)) || void 0 === r ? void 0 : r.since;
                    return null != o ? t - o : 0
                };
                r.getSpeakers = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
                    return Array.from(null !== (t = null === (e = y.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter((function(e) {
                        return C(n, e, f.Dg.VOICE)
                    }))
                };
                r.isSpeaking = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
                    return C(t, e, f.Dg.VOICE)
                };
                r.isPrioritySpeaker = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
                    return C(t, e, f.Dg.PRIORITY)
                };
                r.isSoundSharing = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
                    return C(t, e, f.Dg.SOUNDSHARE)
                };
                r.isAnyoneElseSpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
                    return m(e, f.Dg.VOICE, !0)
                };
                r.isCurrentUserSpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
                    return null != I && this.isSpeaking(I, e)
                };
                r.isAnyonePrioritySpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
                    return m(e, f.Dg.VOICE | f.Dg.PRIORITY)
                };
                r.isCurrentUserPrioritySpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
                    return null != I && this.isPrioritySpeaker(I, e) && this.isSpeaking(I, e)
                };
                return n
            }(r.ZP.Store);
            M.displayName = "SpeakingStore";
            const R = new M(i.Z, {
                CONNECTION_OPEN: b,
                OVERLAY_INITIALIZE: b,
                SPEAKING: function(e) {
                    var t = e.context,
                        n = e.userId,
                        r = e.speakingFlags;
                    if ((r & f.Dg.PRIORITY) === f.Dg.PRIORITY) {
                        var i = u.Z.getChannel(s.Z.getVoiceChannelId());
                        if (null != i && o.ZP.can({
                                permission: c.Plq.PRIORITY_SPEAKER,
                                user: n,
                                context: i
                            })) a.Z.setCanHavePriority(n, !0);
                        else {
                            a.Z.setCanHavePriority(n, !1);
                            r &= ~f.Dg.PRIORITY
                        }
                    }
                    return S(t, n, r)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.userId,
                            r = t.channelId,
                            i = t.sessionId,
                            o = !1,
                            u = T;
                        n === I && i === N && (T = null != r ? r : null);
                        u !== T && (o = y.delete(f.Yn.DEFAULT) || o);
                        null == r ? o = n === I && i === N ? y.delete(f.Yn.DEFAULT) || o : A(f.Yn.DEFAULT, n) || o : n === I && i !== N ? o = y.delete(f.Yn.DEFAULT) || o : n !== I && r !== l.Z.getChannelId() && (o = A(f.Yn.DEFAULT, n) || o);
                        return o || e
                    }), !1)
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {}
            })
        },
        256727: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                i = n(744564),
                o = n(36256);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var _ = null,
                p = null,
                h = {};

            function g(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = h[e];
                if (null != r) {
                    var i = r[null != t ? t : "null"];
                    if (null != i) {
                        var u = !0,
                            a = !1,
                            l = void 0;
                        try {
                            for (var s, c = Object.values(o.Yn)[Symbol.iterator](); !(u = (s = c.next()).done); u = !0) {
                                var f = s.value;
                                n !== f && null != n || delete i[f]
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                u || null == c.return || c.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                        h[e][null != t ? t : "null"] = i
                    }
                }
            }

            function v(e, t, n, r) {
                e in h || (h[e] = {});
                var i, o = null !== (i = h[e][null != t ? t : "null"]) && void 0 !== i ? i : {};
                h[e][null != t ? t : "null"] = s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, o), a({}, r, {
                    streamId: n
                }))
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getStreamId = function(e, t) {
                    var n, r, i, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Yn.DEFAULT;
                    return null === (n = h[e]) || void 0 === n || null === (r = n[null != t ? t : "null"]) || void 0 === r || null === (i = r[u]) || void 0 === i ? void 0 : i.streamId
                };
                r.getUserStreamData = function(e, t) {
                    var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Yn.DEFAULT;
                    return null === (n = h[e]) || void 0 === n || null === (r = n[null != t ? t : "null"]) || void 0 === r ? void 0 : r[i]
                };
                return n
            }(r.ZP.Store);
            O.displayName = "VideoStreamStore";
            const y = new O(i.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.user,
                        n = e.sessionId;
                    _ = t.id;
                    p = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.user,
                        n = e.sessionId;
                    _ = t.id;
                    p = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    var t = e.userId,
                        n = e.guildId,
                        r = e.streamId,
                        i = e.context;
                    null != r ? v(t, n, r, i) : g(t, n, i)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n, r = t.userId,
                            i = t.sessionId,
                            o = t.channelId,
                            u = t.guildId;
                        if (null == o && r === _) {
                            if (i !== p) return e;
                            h = {}
                        } else {
                            if (null != o || null == (null === (n = h[r]) || void 0 === n ? void 0 : n[null != u ? u : "null"])) return e;
                            g(r, u)
                        }
                        return !0
                    }), !1)
                }
            })
        },
        955121: (e, t, n) => {
            n.d(t, {
                q: () => ae,
                r: () => ue
            });
            var r = n(120053),
                i = n.n(r),
                o = n(105783),
                u = n(744564);

            function a(e) {
                u.Z.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
                    url: e
                })
            }

            function l(e) {
                u.Z.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
                    url: e
                })
            }
            var s = n(320142),
                c = n(785893),
                f = (n(667294), n(304548));

            function d(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            d(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            d(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var h = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
            const g = function(e) {
                (0, f.openModalLazy)(E((function() {
                    var t, r;
                    return h(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(55201)]).then(n.bind(n, 455201))];
                            case 1:
                                t = i.sent(), r = t.default;
                                return [2, function(t) {
                                    return (0, c.jsx)(r, p(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                _(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        url: e
                                    }))
                                }]
                        }
                    }))
                })))
            };
            var v = n(20146);
            var O = n(92106),
                y = n(544194);

            function I(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            I(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            I(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var C = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
            const m = function(e) {
                var t = e.url,
                    r = e.trustUrl,
                    i = e.onConfirm,
                    o = e.isProtocol;
                (0, f.openModalLazy)(N((function() {
                    var e, u;
                    return C(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(62)]).then(n.bind(n, 900062))];
                            case 1:
                                e = a.sent(), u = e.default;
                                return [2, function(e) {
                                    return (0, c.jsx)(u, A(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                T(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        url: t,
                                        isProtocol: o,
                                        trustUrl: r,
                                        onConfirm: i
                                    }))
                                }]
                        }
                    }))
                })))
            };
            var S = n(419198),
                b = n(177729),
                M = n(61209),
                R = n(567403),
                D = n(202351),
                P = n(630631),
                U = n(585622),
                L = n(457696),
                Z = n(966334);

            function w(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function k(e) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return k(e)
            }

            function G(e, t) {
                return !t || "object" !== F(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function j(e, t) {
                j = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return j(e, t)
            }
            var H, F = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = k(e);
                    if (t) {
                        var i = k(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return G(this, n)
                }
            }
            var V = "MaskedLinkStore",
                B = new Set,
                x = new Set,
                K = null === (H = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === H ? void 0 : H.replace("//", "");

            function W(e) {
                var t = (0, L.F)(e);
                switch (t) {
                    case window.GLOBAL_ENV.CDN_HOST:
                    case window.GLOBAL_ENV.INVITE_HOST:
                    case window.GLOBAL_ENV.GIFT_CODE_HOST:
                    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
                    case K:
                    case location.hostname:
                        return !0;
                    default:
                        return Z.SD.includes(t) || U.Z.isDiscordHostname(t) || B.has(t)
                }
            }

            function z(e) {
                var t = (0, L.E)(e);
                return x.has(t)
            }
            var Q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && j(e, t)
                }(n, e);
                var t = Y(n);

                function n() {
                    w(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e, t = null !== (e = P.Z.get(V)) && void 0 !== e ? e : {};
                    if (Array.isArray(t)) {
                        B = new Set(null != t ? Array.from(t) : null);
                        x = new Set
                    } else {
                        var n = t.trustedDomains,
                            r = t.trustedProtocols;
                        B = new Set(null != n ? Array.from(n) : null);
                        x = new Set(null != r ? Array.from(r) : null)
                    }
                };
                r.isTrustedDomain = function(e) {
                    return W(e)
                };
                r.isTrustedProtocol = function(e) {
                    return z(e)
                };
                return n
            }(D.ZP.Store);
            Q.displayName = "MaskedLinkStore";
            const q = new Q(u.Z, {
                MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
                    var t = e.url;
                    if (W(t)) return !1;
                    B.add((0, L.F)(t));
                    P.Z.set(V, {
                        trustedDomains: B,
                        trustedProtocols: x
                    })
                },
                MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
                    var t = e.url;
                    if (z(t)) return !1;
                    x.add((0, L.E)(t));
                    P.Z.set(V, {
                        trustedDomains: B,
                        trustedProtocols: x
                    })
                }
            });
            var J = n(352980),
                X = n(840922),
                $ = n(715107),
                ee = n(652591),
                te = n(2590),
                ne = n(473708);

            function re(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function ie(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            re(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            re(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var oe = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function ue(e, t) {
                var n, r = M.Z.getChannel($.Z.getChannelId());
                return !(null != r && r.type === te.d4z.DM && !X.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : "")) && e === t
            }

            function ae(e, t) {
                return le.apply(this, arguments)
            }

            function le() {
                le = ie((function(e, t) {
                    var r, u, c, f, d, E, _, p, h, I, N, T, A, C, D, P, U, Z, w, k, G, j, H, F, Y, V, B, x, K, W, z, Q, X, re = arguments;
                    return oe(this, (function(ie) {
                        switch (ie.label) {
                            case 0:
                                r = re.length > 2 && void 0 !== re[2] ? re[2] : [];
                                u = e.trusted, c = e.onClick, f = e.onConfirm, d = e.shouldConfirm, E = e.messageId, _ = e.channelId;
                                if (null == (p = i().sanitizeUrl(e.href))) {
                                    null != t && t.preventDefault();
                                    o.Z.show({
                                        title: ne.Z.Messages.HOLD_UP,
                                        body: ne.Z.Messages.MALFORMED_LINK_BODY.format({
                                            url: e.href
                                        }),
                                        isDismissable: !0
                                    });
                                    return [2]
                                }
                                h = null;
                                I = !1;
                                N = E;
                                T = _;
                                A = null;
                                if (null != E && null != _) {
                                    P = J.Z.getMessage(_, E);
                                    U = M.Z.getBasicChannel(_);
                                    h = null !== (Z = null == U ? void 0 : U.guild_id) && void 0 !== Z ? Z : null;
                                    w = R.Z.getGuild(h);
                                    if ((k = null != (null == P || null === (C = P.messageReference) || void 0 === C ? void 0 : C.guild_id) && null != (null == P ? void 0 : P.webhookId) && (null == P ? void 0 : P.hasFlag(te.iLy.IS_CROSSPOST)) && null != h) && null != (null == P || null === (D = P.messageReference) || void 0 === D ? void 0 : D.guild_id)) {
                                        N = P.messageReference.message_id;
                                        T = P.messageReference.channel_id;
                                        A = P.messageReference.guild_id
                                    } else A = h;
                                    G = (null == U ? void 0 : U.type) === te.d4z.GUILD_ANNOUNCEMENT && !0 === (null == w ? void 0 : w.hasFeature(te.oNc.COMMUNITY));
                                    j = !0 === (null == P ? void 0 : P.hasFlag(te.iLy.EPHEMERAL));
                                    I = null != P && !j && (k || G)
                                }
                                H = M.Z.getChannel($.Z.getChannelId());
                                F = R.Z.getGuild(null == H ? void 0 : H.getGuildId());
                                null != H && null != F && F.hasFeature(te.oNc.DISCOVERABLE) && ee.default.track(te.rMx.URL_CLICKED, {
                                    url_domain: (0, L.F)(p),
                                    guild_id: F.id,
                                    channel_id: H.id
                                });
                                O.Z.trackLinkClicked(p);
                                return null == c ? [3, 1] : c(t) ? [2] : [3, 3];
                            case 1:
                                return [4, Promise.all([n.e(40532), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(45353), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(63394)]).then(n.bind(n, 624501))];
                            case 2:
                                Y = ie.sent(), V = Y.default;
                                if (null != (B = V(p, {
                                        skipExtensionCheck: void 0,
                                        analyticsLocations: r
                                    })) && B(t)) return [2];
                                ie.label = 3;
                            case 3:
                                x = function() {
                                    I && O.Z.trackAnnouncementMessageLinkClicked({
                                        messageId: N,
                                        channelId: _,
                                        guildId: h,
                                        sourceChannelId: T,
                                        sourceGuildId: A
                                    });
                                    null == f ? (0, s.Z)(p) : f()
                                };
                                if (null !== v.Z.isBlockedDomain(p)) {
                                    null == t || t.preventDefault();
                                    g(p);
                                    return [2]
                                }
                                if (null != (0, b.v)(p)) {
                                    null == t || t.preventDefault();
                                    S.Z.show(p);
                                    return [2]
                                }
                                0;
                                K = "function" == typeof u ? u() : u;
                                W = (0, L.E)(p);
                                if (!(z = !("http:" === W || "https:" === W)) && (K || q.isTrustedDomain(p)) || z && q.isTrustedProtocol(p)) {
                                    null == t || null != d && d ? x() : I && O.Z.trackAnnouncementMessageLinkClicked({
                                        messageId: N,
                                        channelId: _,
                                        guildId: h,
                                        sourceChannelId: T,
                                        sourceGuildId: A
                                    });
                                    return [2]
                                }
                                null != t && t.preventDefault();
                                if (z) m({
                                    url: p,
                                    trustUrl: l,
                                    onConfirm: x,
                                    isProtocol: !0
                                });
                                else {
                                    Q = (0, y.yw)(p);
                                    X = null != Q ? Q.displayTarget : p;
                                    m({
                                        url: X,
                                        trustUrl: a,
                                        onConfirm: x,
                                        isProtocol: !1
                                    })
                                }
                                return [2]
                        }
                    }))
                }));
                return le.apply(this, arguments)
            }
        },
        322500: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                o = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                u = /^(.*)#[0-9]{1,5}$/,
                a = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                l = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const s = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return i.test(e)
                },
                isPhoneNumber: function(e) {
                    return o.test(e)
                },
                isUserTagLike: function(e) {
                    var t = u.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = a.some((function(e) {
                                return n.includes(e)
                            })),
                            i = l.includes(n);
                        return !r && !i
                    }
                    return !1
                }
            }
        }
    }
]);