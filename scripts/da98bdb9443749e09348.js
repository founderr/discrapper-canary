"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75625], {
        469023: (e, t, n) => {
            n.d(t, {
                Z: () => D
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
                y = n(172295),
                v = n(725060),
                m = n(777203),
                g = n(544031),
                _ = n(747890),
                w = n(730393),
                E = n(816132),
                O = n(183790),
                S = n(755914),
                I = n(407558),
                C = n(565571),
                P = n(890592),
                Z = n(296916),
                j = n(2590);

            function D(e, t) {
                switch (e.type) {
                    case j.d4z.DM:
                        return i.Z;
                    case j.d4z.GROUP_DM:
                        return (0, r.V1)(e.id) ? s.Z : E.Z;
                    case j.d4z.GUILD_ANNOUNCEMENT:
                        return e.isNSFW() ? _.Z : (0, Z.Z)(e) ? g.Z : m.Z;
                    case j.d4z.GUILD_TEXT:
                        return e.id === (null == t ? void 0 : t.rulesChannelId) ? a.Z : e.isNSFW() ? c.Z : (0, Z.Z)(e) ? u.Z : l.Z;
                    case j.d4z.GUILD_FORUM:
                        var n = e.isMediaChannel();
                        return e.isNSFW() ? n ? v.Z : f.Z : (0, Z.Z)(e) ? n ? y.Z : p.Z : n ? b.Z : d.Z;
                    case j.d4z.GUILD_MEDIA:
                        return e.isNSFW() ? v.Z : (0, Z.Z)(e) ? y.Z : b.Z;
                    case j.d4z.GUILD_STAGE_VOICE:
                        return C.Z;
                    case j.d4z.GUILD_VOICE:
                        return (0, Z.Z)(e) ? I.Z : S.Z;
                    case j.d4z.ANNOUNCEMENT_THREAD:
                    case j.d4z.PUBLIC_THREAD:
                        return e.isNSFW() ? w.Z : e.isForumPost() ? h.Z : P.Z;
                    case j.d4z.PRIVATE_THREAD:
                        return e.isNSFW() ? w.Z : O.Z;
                    case j.d4z.GUILD_DIRECTORY:
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
                eL: () => ce,
                zq: () => se,
                sS: () => fe,
                rO: () => ve,
                jv: () => de,
                C1: () => oe,
                A9: () => be,
                Tm: () => le,
                em: () => K,
                eU: () => ee,
                T1: () => $
            });
            var r = n(744564),
                i = n(306472),
                o = n(448758),
                a = n(306263),
                l = n(839677),
                u = n(341765),
                c = n(177570),
                s = n(664625),
                d = n(964517),
                p = n(671723),
                f = n(69660),
                h = n(652591),
                b = n(120415),
                y = n(716118),
                v = n(335072),
                m = n(311999),
                g = n(563367),
                _ = n(407561),
                w = n(102921),
                E = n(453790);

            function O() {
                var e, t, n, r, i, o = c.Z.getStreamerActiveStreamMetadata(),
                    a = null == o ? void 0 : o.pid,
                    l = null != o ? null != a ? p.ZP.getGameForPID(a) : null : p.ZP.getVisibleGame(),
                    u = null !== (t = null !== (e = null == o ? void 0 : o.sourceName) && void 0 !== e ? e : null == l ? void 0 : l.name) && void 0 !== t ? t : "Unknown",
                    s = null !== (r = null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : null == l ? void 0 : l.id) && void 0 !== r ? r : void 0,
                    d = Object.keys(_.Z.getVoiceStatesForChannel(null !== (i = g.Z.getChannelId()) && void 0 !== i ? i : ""));
                return {
                    id: w.Z.fromTimestamp(Date.now()),
                    version: E.Bg,
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

            function I(e) {
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

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        C(e, t, n[t])
                    }))
                }
                return e
            }

            function Z(e, t) {
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
            var j = function(e, t) {
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
                        },
                        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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
                },
                D = [function(e) {
                    var t = Z(P({}, e), {
                        version: 1,
                        applicationName: e.gameName,
                        applicationId: void 0
                    });
                    delete t.gameName;
                    return t
                }, function(e) {
                    return Z(P({}, e), {
                        version: 2,
                        name: e.name.startsWith("Clip - ") ? void 0 : e.name
                    })
                }],
                N = null;

            function A(e) {
                return null != N ? N : N = e.object({
                    id: e.string().required(),
                    version: e.number().positive().integer().min(0).max(E.Bg).optional(),
                    name: e.string(),
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
                L = I((function(e) {
                    var t, r, i;
                    return j(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, n.e(54533).then(n.t.bind(n, 197683, 23))];
                            case 1:
                                t = o.sent().default;
                                r = A(t);
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
            var x = n(441143),
                R = n.n(x),
                k = n(332041);

            function M(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function U(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            M(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            M(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var F = function(e, t) {
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

            function B(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = U((function(e) {
                    var t, n, r, i, o, a, l, u, c, s, d, p;
                    return F(this, (function(f) {
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
                                R()(null != t.boxes, "mp4boxInputFile.boxes should not be null after parsing");
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
            var V = n(544541),
                H = n(2590);

            function z(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function W(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            z(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            z(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function q(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        q(e, t, n[t])
                    }))
                }
                return e
            }

            function X(e, t) {
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
            var J = function(e, t) {
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
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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

            function K(e) {
                return Q.apply(this, arguments)
            }

            function Q() {
                return (Q = W((function(e) {
                    var t, n, i, o;
                    return J(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = e.clipsEnabled, n = e.guildId, i = e.trackAnalytics, o = void 0 !== i && i;
                                return [4, r.Z.dispatch({
                                    type: "CLIPS_SETTINGS_UPDATE",
                                    settings: {
                                        clipsEnabled: t
                                    }
                                })];
                            case 1:
                                a.sent();
                                o && h.default.track(H.rMx.CLIPS_ENABLED_TOGGLED, {
                                    new_setting_value: t,
                                    guild_id: n
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function $(e) {
                r.Z.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function ee(e) {
                r.Z.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function te() {
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

            function ne(e, t) {
                var n, r, i, a, l, c, s, p, f, h = new Map;
                for (var b in t.framesEncodedByEncoder) {
                    var y, m = t.framesEncodedByEncoder[b],
                        g = (0, o.lG)(b),
                        _ = null !== (y = h.get(g)) && void 0 !== y ? y : 0;
                    h.set(g, _ + m)
                }
                return X(Y({}, e), {
                    frames_encoded_nvidia_cuda: null !== (n = h.get(o.Su.NVIDIA_CUDA)) && void 0 !== n ? n : 0,
                    frames_encoded_nvidia_direct3d: null !== (r = h.get(o.Su.NVIDIA_DIRECT_3D)) && void 0 !== r ? r : 0,
                    frames_encoded_openh264: null !== (i = h.get(o.Su.OPENH264)) && void 0 !== i ? i : 0,
                    frames_encoded_videotoolbox: null !== (a = h.get(o.Su.VIDEOTOOLBOX)) && void 0 !== a ? a : 0,
                    frames_encoded_amd_direct3d: null !== (l = h.get(o.Su.AMD_DIRECT_3D)) && void 0 !== l ? l : 0,
                    frames_encoded_intel: null !== (c = h.get(o.Su.INTEL)) && void 0 !== c ? c : 0,
                    frames_encoded_intel_direct3d: null !== (s = h.get(o.Su.INTEL_DIRECT_3D)) && void 0 !== s ? s : 0,
                    frames_encoded_uncategorized: null !== (p = h.get(o.Su.UNCATEGORIZED)) && void 0 !== p ? p : 0,
                    frames_encoded_unknown: null !== (f = h.get(o.Su.UNKNOWN)) && void 0 !== f ? f : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_hardware_encode_setting: d.Z.getHardwareClipEncode(),
                    clip_duration_setting: v.Z.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: u.Z.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                })
            }

            function re() {
                return ie.apply(this, arguments)
            }

            function ie() {
                return (ie = W((function() {
                    var e, t, n, r, o, a, l, u, c, s, p, f, b, y, g, _, w;
                    return J(this, (function(S) {
                        switch (S.label) {
                            case 0:
                                e = v.Z.getSettings();
                                t = e.storageLocation;
                                n = O();
                                r = "".concat((0, m.Z)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4");
                                o = i.Z.fileManager.join(t, r);
                                a = d.Z.getMediaEngine();
                                l = te();
                                S.label = 1;
                            case 1:
                                S.trys.push([1, 5, , 6]);
                                return [4, a.saveClip(o, JSON.stringify(n))];
                            case 2:
                                u = S.sent(), c = u.duration, s = u.thumbnail, p = u.clipStats;
                                (f = ne(l, p)).clip_save_time_ms = p.clipSaveTimeMs;
                                f.clip_size_bytes = p.clipSizeBytes;
                                h.default.track(H.rMx.CLIP_SAVED, f);
                                return [4, null != i.Z.clips.getClipProtocolURLFromPath ? (0, V.R)(i.Z.clips.getClipProtocolURLFromPath(o), 0) : (0, V.q)(s)];
                            case 3:
                                b = S.sent();
                                n.thumbnail = b;
                                n.length = c;
                                E.jF.info("Clip save succeeded with ".concat(c, "ms and thumbnail ").concat(null !== (y = null == b ? void 0 : b.length) && void 0 !== y ? y : 0, " bytes thumbnail."));
                                return [4, a.updateClipMetadata(o, JSON.stringify(n))];
                            case 4:
                                S.sent();
                                return [2, X(Y({}, n), {
                                    filepath: o
                                })];
                            case 5:
                                if (!("errorMessage" in (g = S.sent()))) {
                                    h.default.track(H.rMx.CLIP_SAVE_FAILURE, l);
                                    throw g
                                }(w = ne(l, _ = g)).error_at = _.errorAt;
                                w.error_message = _.errorMessage;
                                h.default.track(H.rMx.CLIP_SAVE_FAILURE, w);
                                throw _.errorMessage;
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function oe() {
                return ae.apply(this, arguments)
            }

            function ae() {
                return (ae = W((function() {
                    var e, t, n, i, o, a;
                    return J(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = l.Z.getCurrentConfig({
                                    location: "8ac9d1_1"
                                }, {
                                    autoTrackExposure: !1
                                }).enableDecoupledGameClipping;
                                if (v.Z.getIsSavingClip() || !v.Z.getSettings().clipsEnabled || null == c.Z.getCurrentUserActiveStream() && (!t || t && null == (null === (e = p.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle))) return [2];
                                r.Z.dispatch({
                                    type: "CLIPS_SAVE_CLIP_START"
                                });
                                n = (0, y.GN)("clip_save", .5);
                                i = performance.now();
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, re()];
                            case 2:
                                o = u.sent();
                                r.Z.dispatch({
                                    type: "CLIPS_SAVE_CLIP",
                                    clip: o
                                });
                                return [3, 4];
                            case 3:
                                a = u.sent();
                                E.jF.error("Clip Failed to Save", a);
                                null == n || n.stop();
                                (0, y.GN)("clip_error", .5);
                                r.Z.dispatch({
                                    type: "CLIPS_SAVE_CLIP_ERROR"
                                });
                                return [3, 4];
                            case 4:
                                E.jF.info("".concat(v.Z.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - i), "ms"));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function le(e, t) {
                return ue.apply(this, arguments)
            }

            function ue() {
                return (ue = W((function(e, t) {
                    var n, i;
                    return J(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                n = v.Z.getClips().find((function(t) {
                                    return t.id === e
                                }));
                                if (null == n) return [2];
                                i = Y({}, n, t);
                                return [4, d.Z.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i))];
                            case 1:
                                o.sent();
                                h.default.track(H.rMx.CLIP_EDITED);
                                r.Z.dispatch({
                                    type: "CLIPS_UPDATE_METADATA",
                                    clip: i
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ce() {
                r.Z.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function se() {
                r.Z.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }

            function de(e) {
                return pe.apply(this, arguments)
            }

            function pe() {
                return (pe = W((function(e) {
                    var t, n, o, a, l, u, c, s, d, p, f;
                    return J(this, (function(h) {
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
                                return (a = (s = c.next()).done) ? [3, 6] : [4, T(X(Y({}, (d = s.value).metadata), {
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

            function fe(e) {
                return he.apply(this, arguments)
            }

            function he() {
                return (he = W((function(e) {
                    var t;
                    return J(this, (function(n) {
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

            function be(e) {
                return ye.apply(this, arguments)
            }

            function ye() {
                return (ye = W((function(e) {
                    return J(this, (function(t) {
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
                return me.apply(this, arguments)
            }

            function me() {
                return (me = W((function(e, t) {
                    return J(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, d.Z.getMediaEngine().exportClip(e.filepath, t)];
                            case 1:
                                return [2, B(n.sent())]
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
                Z: () => g
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                l = n(304548),
                u = n(677681),
                c = n(515169),
                s = n(258441),
                d = n(406493),
                p = n(458947),
                f = n(473708),
                h = n(495188),
                b = n.n(h);

            function y(e, t) {
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

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const g = i.forwardRef((function(e, t) {
                var n, o, h = e.body,
                    y = e.header,
                    g = e.artClassName,
                    _ = e.headerClassName,
                    w = e.contentClassName,
                    E = e.tryItText,
                    O = e.onTryFeature,
                    S = e.onClose,
                    I = e.className,
                    C = e.inlineArt,
                    P = void 0 !== C && C,
                    Z = e.isPremiumFeature,
                    j = void 0 !== Z && Z,
                    D = e.shouldUseHorizontalButtons,
                    N = void 0 !== D && D,
                    A = e.showGIFTag,
                    T = void 0 !== A && A,
                    L = e.dismissibleContent,
                    x = e.position,
                    R = void 0 === x ? "top" : x,
                    k = e.art,
                    M = void 0 === k ? void 0 : k,
                    U = e.isPremiumEarlyAccess,
                    F = void 0 !== U && U,
                    B = e.maxWidth,
                    G = void 0 === B ? 280 : B,
                    V = function(e) {
                        (0, c.EW)(L, {
                            dismissAction: e
                        })
                    },
                    H = N ? l.Button.Sizes.LARGE : l.Button.Sizes.MAX,
                    z = m(i.useState(!1), 2),
                    W = z[0],
                    q = z[1],
                    Y = (0, u.Z)(),
                    X = Y.ref,
                    J = Y.width;
                i.useEffect((function() {
                    var e, t, n = (null !== (t = null === (e = X.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
                    !W && n > G && q(!0)
                }), [W, J, X, G]);
                i.useEffect((function() {
                    (0, c.kk)(L)
                }), [L]);
                return (0, r.jsx)("div", {
                    className: I,
                    ref: t,
                    children: (0, r.jsxs)("div", {
                        className: a()(b().content, w, (n = {}, v(n, b().contentNoArt, null == g || P), v(n, b().contentPremium, j || F), n)),
                        children: [(0, r.jsxs)("div", {
                            className: a()(g, P ? b().artInline : b().artAbsolute),
                            children: [T && (0, r.jsx)(s.Z, {
                                className: b().gifTag
                            }), M]
                        }), (0, r.jsxs)("div", {
                            className: b().body,
                            children: [(0, r.jsxs)(l.Heading, {
                                className: a()(j ? b().headerWithPremiumIcon : b().header, _),
                                variant: "heading-md/bold",
                                color: "always-white",
                                children: [j && !F ? (0, r.jsx)(d.Z, {
                                    className: b().premiumIcon
                                }) : null, F ? (0, r.jsxs)(l.Text, {
                                    color: "always-white",
                                    variant: "eyebrow",
                                    className: b().earlyAccessBadgeContainer,
                                    children: [(0, r.jsx)(d.Z, {
                                        className: b().earlyAccessIcon
                                    }), (0, r.jsx)("span", {
                                        className: b().earlyAccessText,
                                        children: f.Z.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                    })]
                                }) : null, y]
                            }), null == h ? null : "string" == typeof h ? (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "always-white",
                                children: h
                            }) : h]
                        }), (0, r.jsx)("div", {
                            ref: X,
                            className: W || !N ? b().buttonContainerVertical : b().buttonContainerHorizontal,
                            children: null != O ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.Button, {
                                    className: b().button,
                                    size: H,
                                    onClick: function(e) {
                                        null == S || S(e);
                                        O(e);
                                        V(p.L.PRIMARY)
                                    },
                                    color: j || F ? l.Button.Colors.BRAND : l.Button.Colors.WHITE,
                                    look: j || F ? l.Button.Looks.INVERTED : l.Button.Looks.FILLED,
                                    children: null != E ? E : f.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                }), (0, r.jsx)(l.Button, {
                                    className: b().button,
                                    size: H,
                                    onClick: function(e) {
                                        null == S || S(e);
                                        V(p.L.DISMISS)
                                    },
                                    color: j || F ? l.Button.Colors.WHITE : l.Button.Colors.BRAND,
                                    look: j || F ? l.Button.Looks.LINK : l.Button.Looks.FILLED,
                                    children: f.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                })]
                            }) : (0, r.jsx)(l.Button, {
                                className: b().button,
                                size: l.Button.Sizes.MAX,
                                onClick: function(e) {
                                    null == S || S(e);
                                    V(p.L.PRIMARY)
                                },
                                color: l.Button.Colors.WHITE,
                                children: f.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                            })
                        }), (0, r.jsx)("div", {
                            className: a()(b().pointer, (o = {}, v(o, b().bottomPointer, "top" === R), v(o, b().leftPointer, "right" === R), o))
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
                i = (n(667294), n(168075)),
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