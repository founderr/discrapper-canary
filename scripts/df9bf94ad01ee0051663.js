"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75625], {
        469023: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var r = n(29891),
                i = n(208541),
                o = n(665118),
                a = n(120491),
                l = n(436622),
                u = n(823975),
                c = n(132457),
                s = n(803257),
                d = n(513430),
                p = n(107134),
                f = n(879983),
                h = n(143901),
                b = n(296047),
                v = n(172295),
                y = n(596211),
                m = n(777203),
                g = n(544031),
                _ = n(747890),
                w = n(730393),
                O = n(816132),
                E = n(183790),
                S = n(755914),
                C = n(407558),
                I = n(565571),
                P = n(890592),
                Z = n(296916),
                D = n(2590);

            function j(e, t) {
                switch (e.type) {
                    case D.d4z.DM:
                        return i.Z;
                    case D.d4z.GROUP_DM:
                        return (0, r.V1)(e.id) ? s.Z : O.Z;
                    case D.d4z.GUILD_ANNOUNCEMENT:
                        return e.isNSFW() ? _.Z : (0, Z.Z)(e) ? g.Z : m.Z;
                    case D.d4z.GUILD_TEXT:
                        return e.id === (null == t ? void 0 : t.rulesChannelId) ? a.Z : e.isNSFW() ? c.Z : (0, Z.Z)(e) ? u.Z : l.Z;
                    case D.d4z.GUILD_FORUM:
                        var n = e.isMediaChannel();
                        return e.isNSFW() ? n ? y.Z : f.Z : (0, Z.Z)(e) ? n ? v.Z : p.Z : n ? b.Z : d.Z;
                    case D.d4z.GUILD_MEDIA:
                        return e.isNSFW() ? y.Z : (0, Z.Z)(e) ? v.Z : b.Z;
                    case D.d4z.GUILD_STAGE_VOICE:
                        return I.Z;
                    case D.d4z.GUILD_VOICE:
                        return (0, Z.Z)(e) ? C.Z : S.Z;
                    case D.d4z.ANNOUNCEMENT_THREAD:
                    case D.d4z.PUBLIC_THREAD:
                        return e.isNSFW() ? w.Z : e.isForumPost() ? h.Z : P.Z;
                    case D.d4z.PRIVATE_THREAD:
                        return e.isNSFW() ? w.Z : E.Z;
                    case D.d4z.GUILD_DIRECTORY:
                        return o.Z;
                    default:
                        return null
                }
            }
        },
        311999: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = /[<>:"/\\|?*\.]/g;
            const i = function(e) {
                return e.replaceAll(r, "").trim().replaceAll(" ", "_")
            }
        },
        860123: (e, t, n) => {
            n.d(t, {
                eL: () => ue,
                zq: () => ce,
                sS: () => pe,
                rO: () => ve,
                jv: () => se,
                C1: () => ie,
                A9: () => he,
                Tm: () => ae,
                em: () => J,
                eU: () => $,
                T1: () => Q
            });
            var r = n(744564),
                i = n(306472),
                o = n(448758),
                a = n(306263),
                l = n(839677),
                u = n(341765),
                c = n(177570),
                s = n(664625),
                d = n(973469),
                p = n(671723),
                f = n(69660),
                h = n(652591),
                b = n(120415),
                v = n(716118),
                y = n(335072),
                m = n(311999),
                g = n(563367),
                _ = n(407561),
                w = n(102921),
                O = n(453790);

            function E() {
                var e, t, n, r, i, o = c.Z.getStreamerActiveStreamMetadata(),
                    a = null == o ? void 0 : o.pid,
                    l = null != o ? null != a ? p.ZP.getGameForPID(a) : null : p.ZP.getVisibleGame(),
                    u = null !== (t = null !== (e = null == o ? void 0 : o.sourceName) && void 0 !== e ? e : null == l ? void 0 : l.name) && void 0 !== t ? t : "Unknown",
                    s = null !== (r = null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : null == l ? void 0 : l.id) && void 0 !== r ? r : void 0,
                    d = Object.keys(_.Z.getVoiceStatesForChannel(null !== (i = g.Z.getChannelId()) && void 0 !== i ? i : ""));
                return {
                    id: w.Z.fromTimestamp(Date.now()),
                    version: O.Bg,
                    name: "Clip - ".concat((new Date).toLocaleString()),
                    applicationName: null != u ? u : "Unknown",
                    applicationId: s,
                    users: d,
                    clipMethod: "manual",
                    length: 0,
                    thumbnail: ""
                }
            }

            function S(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            S(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            S(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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

            function P(e, t) {
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
            var Z = function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
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
                            }([o, l])
                        }
                    }
                },
                D = [function(e) {
                    var t = P(function(e) {
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
                    }({}, e), {
                        version: 1,
                        applicationName: e.gameName,
                        applicationId: void 0
                    });
                    delete t.gameName;
                    return t
                }],
                j = null;

            function N(e) {
                return null != j ? j : j = e.object({
                    id: e.string().required(),
                    version: e.number().positive().integer().min(0).max(O.Bg).optional(),
                    name: e.string().required(),
                    gameName: e.string().when("version", {
                        is: e.number().greater(0).required(),
                        then: e.forbidden(),
                        otherwise: e.required()
                    }),
                    applicationName: e.string().when("version", {
                        is: e.number().greater(0).required(),
                        then: e.required(),
                        otherwise: e.forbidden()
                    }),
                    applicationId: e.string(),
                    users: e.array().items(e.string()).required(),
                    filepath: e.string().required(),
                    length: e.number().required(),
                    thumbnail: e.string().required().allow(""),
                    editMetadata: e.object().keys({
                        start: e.number(),
                        end: e.number(),
                        applicationAudio: e.boolean(),
                        voiceAudio: e.boolean()
                    }),
                    clipMethod: e.string().allow("auto", "manual").required()
                }).required()
            }

            function T(e) {
                return L.apply(this, arguments)
            }

            function L() {
                L = C((function(e) {
                    var t, r, i;
                    return Z(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, n.e(54533).then(n.t.bind(n, 197683, 23))];
                            case 1:
                                t = o.sent().default;
                                r = N(t);
                                try {
                                    t.assert(e, r);
                                    null == (i = e).version && (i.version = 0);
                                    return [2, D.slice(i.version).reduce((function(e, t) {
                                        return t(e)
                                    }), i)]
                                } catch (e) {
                                    return [2, null]
                                }
                                return [2]
                        }
                    }))
                }));
                return L.apply(this, arguments)
            }
            var A = n(441143),
                x = n.n(A),
                k = n(332041);

            function R(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function M(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            R(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            R(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var U = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
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
                        }([o, l])
                    }
                }
            };

            function F(e) {
                return B.apply(this, arguments)
            }

            function B() {
                return (B = M((function(e) {
                    var t, n, r, i, o, a, l, u, c, s, d, p;
                    return U(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                t = k.createFile(!1);
                                n = new Promise((function(e) {
                                    t.onReady = e
                                }));
                                return [4, e.arrayBuffer()];
                            case 1:
                                (r = f.sent()).fileStart = 0;
                                t.appendBuffer(r);
                                t.flush();
                                return [4, n];
                            case 2:
                                f.sent();
                                x()(null != t.boxes, "mp4boxInputFile.boxes should not be null after parsing");
                                o = !0, a = !1, l = void 0;
                                try {
                                    for (u = t.boxes[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) "uuid" === (s = c.value).type && (i = s.start)
                                } catch (e) {
                                    a = !0;
                                    l = e
                                } finally {
                                    try {
                                        o || null == u.return || u.return()
                                    } finally {
                                        if (a) throw l
                                    }
                                }
                                d = e.slice(0, i, e.type);
                                p = e.slice(i + 4, i + 8 + 16, e.type);
                                return [2, new Blob([d, new Uint8Array([0, 0, 0, 24]), p], {
                                    type: e.type
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var G = n(544541),
                V = n(2590);

            function H(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function z(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            H(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            H(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function W(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        W(e, t, n[t])
                    }))
                }
                return e
            }

            function Y(e, t) {
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
            var X = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
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
                        }([o, l])
                    }
                }
            };

            function J(e) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = z((function(e) {
                    var t, n, i, o;
                    return X(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = e.clipsEnabled, n = e.guildId, i = e.trackAnalytics,
                                    o = void 0 !== i && i;
                                return [4, r.Z.dispatch({
                                    type: "CLIPS_SETTINGS_UPDATE",
                                    settings: {
                                        clipsEnabled: t
                                    }
                                })];
                            case 1:
                                a.sent();
                                o && h.default.track(V.rMx.CLIPS_ENABLED_TOGGLED, {
                                    new_setting_value: t,
                                    guild_id: n
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Q(e) {
                r.Z.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function $(e) {
                r.Z.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function ee() {
                var e, t = s.default.getId(),
                    n = c.Z.getActiveStreamForUser(t, null),
                    r = null != n ? f.Z.getRTCConnection((0, a.V9)(n)) : null,
                    i = null == r || null === (e = r.analyticsContext) || void 0 === e ? void 0 : e.streamApplication;
                return {
                    rtc_connection_id: null == r ? void 0 : r.getRTCConnectionId(),
                    media_session_id: null == r ? void 0 : r.getMediaSessionId(),
                    parent_media_session_id: null == r ? void 0 : r.parentMediaSessionId,
                    guild_id: null == n ? void 0 : n.guildId,
                    channel_id: null == n ? void 0 : n.channelId,
                    application_id: null == i ? void 0 : i.id,
                    application_name: null == i ? void 0 : i.name
                }
            }

            function te(e, t) {
                var n, r, i, a, l, c, s, p, f, b = new Map;
                for (var v in t.framesEncodedByEncoder) {
                    var m, g = t.framesEncodedByEncoder[v],
                        _ = (0, o.lG)(v),
                        w = null !== (m = b.get(_)) && void 0 !== m ? m : 0;
                    b.set(_, w + g)
                }
                h.default.track(V.rMx.CLIP_SAVED, Y(q({}, e), {
                    frames_encoded_nvidia_cuda: null !== (n = b.get(o.Su.NVIDIA_CUDA)) && void 0 !== n ? n : 0,
                    frames_encoded_nvidia_direct3d: null !== (r = b.get(o.Su.NVIDIA_DIRECT_3D)) && void 0 !== r ? r : 0,
                    frames_encoded_openh264: null !== (i = b.get(o.Su.OPENH264)) && void 0 !== i ? i : 0,
                    frames_encoded_videotoolbox: null !== (a = b.get(o.Su.VIDEOTOOLBOX)) && void 0 !== a ? a : 0,
                    frames_encoded_amd_direct3d: null !== (l = b.get(o.Su.AMD_DIRECT_3D)) && void 0 !== l ? l : 0,
                    frames_encoded_intel: null !== (c = b.get(o.Su.INTEL)) && void 0 !== c ? c : 0,
                    frames_encoded_intel_direct3d: null !== (s = b.get(o.Su.INTEL_DIRECT_3D)) && void 0 !== s ? s : 0,
                    frames_encoded_uncategorized: null !== (p = b.get(o.Su.UNCATEGORIZED)) && void 0 !== p ? p : 0,
                    frames_encoded_unknown: null !== (f = b.get(o.Su.UNKNOWN)) && void 0 !== f ? f : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_hardware_encode_setting: d.Z.getHardwareClipEncode(),
                    clip_duration_setting: y.Z.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: u.Z.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    clip_save_time_ms: t.clipSaveTimeMs,
                    clip_size_bytes: t.clipSizeBytes,
                    saved_at: t.savedAt
                }))
            }

            function ne() {
                return re.apply(this, arguments)
            }

            function re() {
                return (re = z((function() {
                    var e, t, n, r, o, a, l, u, c, s, p, f, b, v;
                    return X(this, (function(g) {
                        switch (g.label) {
                            case 0:
                                e = y.Z.getSettings();
                                t = e.storageLocation;
                                n = E();
                                r = "".concat((0, m.Z)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4");
                                o = i.Z.fileManager.join(t, r);
                                a = d.Z.getMediaEngine();
                                l = ee();
                                g.label = 1;
                            case 1:
                                g.trys.push([1, 5, , 6]);
                                return [4, a.saveClip(o, JSON.stringify(n))];
                            case 2:
                                u = g.sent(), c = u.duration, s = u.thumbnail, p = u.clipStats;
                                te(l, p);
                                return [4, null != i.Z.clips.getClipProtocolURLFromPath ? (0, G.R)(i.Z.clips.getClipProtocolURLFromPath(o), 0) : (0, G.q)(s)];
                            case 3:
                                f = g.sent();
                                n.thumbnail = f;
                                n.length = c;
                                O.jF.info("Clip save succeeded with ".concat(c, "ms and thumbnail ").concat(null !== (b = null == f ? void 0 : f.length) && void 0 !== b ? b : 0, " bytes thumbnail."));
                                return [4, a.updateClipMetadata(o, JSON.stringify(n))];
                            case 4:
                                g.sent();
                                return [2, Y(q({}, n), {
                                    filepath: o
                                })];
                            case 5:
                                v = g.sent();
                                h.default.track(V.rMx.CLIP_SAVE_FAILURE, l);
                                throw v;
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ie() {
                return oe.apply(this, arguments)
            }

            function oe() {
                return (oe = z((function() {
                    var e, t, n, i, o, a;
                    return X(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = l.Z.getCurrentConfig({
                                    location: "8ac9d1_1"
                                }, {
                                    autoTrackExposure: !1
                                }).enableDecoupledGameClipping;
                                if (y.Z.getIsSavingClip() || !y.Z.getSettings().clipsEnabled || !t && null == c.Z.getCurrentUserActiveStream() || t && null == (null === (e = p.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle)) return [2];
                                r.Z.dispatch({
                                    type: "CLIPS_SAVE_CLIP_START"
                                });
                                n = (0, v.GN)("clip_save", .5);
                                i = performance.now();
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, ne()];
                            case 2:
                                o = u.sent();
                                r.Z.dispatch({
                                    type: "CLIPS_SAVE_CLIP",
                                    clip: o
                                });
                                return [3, 4];
                            case 3:
                                a = u.sent();
                                O.jF.error("Clip Failed to Save", a);
                                null == n || n.stop();
                                (0, v.GN)("clip_error", .5);
                                r.Z.dispatch({
                                    type: "CLIPS_SAVE_CLIP_ERROR"
                                });
                                return [3, 4];
                            case 4:
                                O.jF.info("".concat(y.Z.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - i), "ms"));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ae(e, t) {
                return le.apply(this, arguments)
            }

            function le() {
                return (le = z((function(e, t) {
                    var n, i;
                    return X(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                n = y.Z.getClips().find((function(t) {
                                    return t.id === e
                                }));
                                if (null == n) return [2];
                                i = q({}, n, t);
                                return [4, d.Z.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i))];
                            case 1:
                                o.sent();
                                h.default.track(V.rMx.CLIP_EDITED);
                                r.Z.dispatch({
                                    type: "CLIPS_UPDATE_METADATA",
                                    clip: i
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ue() {
                r.Z.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function ce() {
                r.Z.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }

            function se(e) {
                return de.apply(this, arguments)
            }

            function de() {
                return (de = z((function(e) {
                    var t, n, o, a, l, u, c, s, d, p, f;
                    return X(this, (function(h) {
                        switch (h.label) {
                            case 0:
                                return (0, b.nI)() && null != (null === (t = i.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) ? [4, i.Z.clips.loadClipsDirectory(e)] : [2];
                            case 1:
                                n = h.sent();
                                o = [];
                                a = !0, l = !1, u = void 0;
                                h.label = 2;
                            case 2:
                                h.trys.push([2, 7, 8, 9]);
                                c = n[Symbol.iterator]();
                                h.label = 3;
                            case 3:
                                return (a = (s = c.next()).done) ? [3, 6] : [4, T(Y(q({}, (d = s.value).metadata), {
                                    filepath: d.filepath
                                }))];
                            case 4:
                                null != (p = h.sent()) && o.push(p);
                                h.label = 5;
                            case 5:
                                a = !0;
                                return [3, 3];
                            case 6:
                                return [3, 9];
                            case 7:
                                f = h.sent();
                                l = !0;
                                u = f;
                                return [3, 9];
                            case 8:
                                try {
                                    a || null == c.return || c.return()
                                } finally {
                                    if (l) throw u
                                }
                                return [7];
                            case 9:
                                r.Z.dispatch({
                                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                                    clips: o
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function pe(e) {
                return fe.apply(this, arguments)
            }

            function fe() {
                return (fe = z((function(e) {
                    var t;
                    return X(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return (0, b.nI)() && null != (null === (t = i.Z.clips) || void 0 === t ? void 0 : t.deleteClip) ? [4, i.Z.clips.deleteClip(e)] : [2];
                            case 1:
                                n.sent();
                                r.Z.dispatch({
                                    type: "CLIPS_DELETE_CLIP",
                                    filepath: e
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function he(e) {
                return be.apply(this, arguments)
            }

            function be() {
                return (be = z((function(e) {
                    return X(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, r.Z.dispatch({
                                    type: "MEDIA_ENGINE_SET_HARDWARE_CLIP_ENCODE",
                                    enabled: e
                                })];
                            case 1:
                                t.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ve(e, t) {
                return ye.apply(this, arguments)
            }

            function ye() {
                return (ye = z((function(e, t) {
                    return X(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, d.Z.getMediaEngine().exportClip(e.filepath, t)];
                            case 1:
                                return [2, F(n.sent())]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        544541: (e, t, n) => {
            n.d(t, {
                q: () => l,
                R: () => c
            });
            var r = n(453790);

            function i(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function l(e) {
                            i(a, r, o, l, u, "next", e)
                        }

                        function u(e) {
                            i(a, r, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var a = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1],
                                                done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
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
                        }([o, l])
                    }
                }
            };

            function l(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = o((function(e) {
                    var t, n;
                    return a(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (null == e) return [2, ""];
                                t = new Blob([e], {
                                    type: "image/jpeg"
                                });
                                return [4, new Promise((function(e) {
                                    var n = new FileReader;
                                    n.onloadend = function() {
                                        e(n.result)
                                    };
                                    n.readAsDataURL(t)
                                }))];
                            case 1:
                                if ("string" != typeof(n = r.sent())) throw new Error("Thumbnail creation failed");
                                return [2, n]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function c(e, t) {
                return new Promise((n = o((function(n) {
                    var i, o, l, u, c, s, d, p;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                (i = document.createElement("video")).muted = !0;
                                i.src = e;
                                i.currentTime = t;
                                return [4, i.play()];
                            case 1:
                                a.sent();
                                o = r.f_ / i.videoWidth;
                                l = r.wD / i.videoHeight;
                                u = Math.min(o, l);
                                c = i.videoWidth * u;
                                s = i.videoHeight * u;
                                (d = document.createElement("canvas")).width = c;
                                d.height = s;
                                if (null == (p = d.getContext("2d"))) return [2];
                                p.drawImage(i, 0, 0, i.videoWidth, i.videoHeight, 0, 0, c, s);
                                n(d.toDataURL("image/jpeg", .9));
                                return [2]
                        }
                    }))
                })), function(e) {
                    return n.apply(this, arguments)
                }));
                var n
            }
        },
        796308: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                l = n(304548),
                u = n(896490),
                c = n(258441),
                s = n(406493),
                d = n(458947),
                p = n(473708),
                f = n(495188),
                h = n.n(f);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            const v = i.forwardRef((function(e, t) {
                var n, o, f = e.body,
                    v = e.header,
                    y = e.artClassName,
                    m = e.headerClassName,
                    g = e.tryItText,
                    _ = e.onTryFeature,
                    w = e.onClose,
                    O = e.className,
                    E = e.inlineArt,
                    S = void 0 !== E && E,
                    C = e.isPremiumFeature,
                    I = void 0 !== C && C,
                    P = e.shouldUseHorizontalButtons,
                    Z = void 0 !== P && P,
                    D = e.showGIFTag,
                    j = void 0 !== D && D,
                    N = e.dismissibleContent,
                    T = e.position,
                    L = void 0 === T ? "top" : T,
                    A = e.art,
                    x = void 0 === A ? void 0 : A,
                    k = function(e) {
                        (0, u.EW)(N, {
                            dismissAction: e
                        })
                    },
                    R = Z ? l.Button.Sizes.LARGE : l.Button.Sizes.MAX;
                i.useEffect((function() {
                    (0, u.kk)(N)
                }), [N]);
                return (0, r.jsx)("div", {
                    className: O,
                    ref: t,
                    children: (0, r.jsxs)("div", {
                        className: a()(h().content, (n = {}, b(n, h().contentNoArt, null == y || S), b(n, h().contentPremium, I), n)),
                        children: [(0, r.jsxs)("div", {
                            className: a()(y, S ? h().artInline : h().artAbsolute),
                            children: [j && (0, r.jsx)(c.Z, {
                                className: h().gifTag
                            }), x]
                        }), (0, r.jsxs)("div", {
                            className: h().body,
                            children: [(0, r.jsxs)(l.Heading, {
                                className: a()(I ? h().headerWithPremiumIcon : h().header, m),
                                variant: "heading-md/bold",
                                color: "always-white",
                                children: [I ? (0, r.jsx)(s.Z, {
                                    className: h().premiumIcon
                                }) : null, v]
                            }), null == f ? null : "string" == typeof f ? (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "always-white",
                                children: f
                            }) : f]
                        }), (0, r.jsx)("div", {
                            className: Z ? h().buttonContainerHorizontal : h().buttonContainerVertical,
                            children: null != _ ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.Button, {
                                    className: h().button,
                                    size: R,
                                    onClick: function(e) {
                                        null == w || w(e);
                                        _(e);
                                        k(d.L.PRIMARY)
                                    },
                                    color: I ? l.Button.Colors.BRAND : l.Button.Colors.WHITE,
                                    look: I ? l.Button.Looks.INVERTED : l.Button.Looks.FILLED,
                                    children: null != g ? g : p.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                }), (0, r.jsx)(l.Button, {
                                    className: h().button,
                                    size: R,
                                    onClick: function(e) {
                                        null == w || w(e);
                                        k(d.L.DISMISS)
                                    },
                                    color: I ? l.Button.Colors.WHITE : l.Button.Colors.BRAND,
                                    look: I ? l.Button.Looks.LINK : l.Button.Looks.FILLED,
                                    children: p.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                })]
                            }) : (0, r.jsx)(l.Button, {
                                className: h().button,
                                size: l.Button.Sizes.MAX,
                                onClick: function(e) {
                                    null == w || w(e);
                                    k(d.L.PRIMARY)
                                },
                                color: l.Button.Colors.WHITE,
                                children: p.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                            })
                        }), (0, r.jsx)("div", {
                            className: a()(h().pointer, (o = {}, b(o, h().bottomPointer, "top" === L), b(o, h().leftPointer, "right" === L), o))
                        })]
                    })
                })
            }))
        },
        944514: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(226810);

            function i(e, t) {
                if (__OVERLAY__) {
                    var n = t.getGame(),
                        i = (0, r.QF)();
                    return null == n || null == i ? null : {
                        id: n.id,
                        pid: i,
                        pidPath: [],
                        nativeProcessObserverId: 0,
                        hidden: !1,
                        elevated: !1,
                        name: n.name,
                        lastFocused: 0,
                        exePath: "",
                        exeName: "",
                        cmdLine: "",
                        processName: "",
                        distributor: null,
                        windowHandle: null,
                        fullscreenType: 0
                    }
                }
                return e.getVisibleGame()
            }
        },
        425454: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                o = n(980559),
                a = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    s = e.color,
                    d = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    f = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(f)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"
                    })
                }))
            }), o.p)
        }
    }
]);