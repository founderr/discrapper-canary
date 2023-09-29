(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53019], {
        553543: (e, t, n) => {
            e.exports = n.p + "7bfb80ea955b30b085c2fca711ec57b8.jpg"
        },
        5878: (e, t, n) => {
            e.exports = n.p + "de4e5add4c062317fbed7dd79e2cbd7a.jpg"
        },
        284318: (e, t, n) => {
            e.exports = n.p + "3cb20066c0b60e65491668fce92bef1e.jpg"
        },
        31504: (e, t, n) => {
            e.exports = n.p + "d34ae8e5b9c067aff5bfe12ab1d43335.jpg"
        },
        268937: (e, t, n) => {
            e.exports = n.p + "8356783e1606975f2652547b1601d8d3.jpg"
        },
        74144: (e, t, n) => {
            e.exports = n.p + "e0fedbb317c503fa19d008295f040d42.jpg"
        },
        483356: (e, t, n) => {
            e.exports = n.p + "0e117bb70256c1ab3d28e94e42733c20.jpg"
        },
        842302: (e, t, n) => {
            e.exports = n.p + "55fe390c62ba8bbd1ae3ff8a2e8f25f6.jpg"
        },
        363215: (e, t, n) => {
            e.exports = n.p + "24ffec2adcbb0cae4b5baa0a7f01ca38.jpg"
        },
        457232: (e, t, n) => {
            e.exports = n.p + "ed0f0bf10a277269e622d6b30a6050e1.jpg"
        },
        747797: (e, t, n) => {
            e.exports = n.p + "1b7b2643248dc99fa43d4c8b3bb414ed.jpg"
        },
        26149: (e, t, n) => {
            e.exports = n.p + "a7d46a718e2a03250c363cf868ce6ff9.jpg"
        },
        88136: (e, t, n) => {
            e.exports = n.p + "0932faae93973a30cabfdc1fe5dbf86d.jpg"
        },
        767257: (e, t, n) => {
            e.exports = n.p + "ac746cae044cde3eb4b1f053d04b054a.jpg"
        },
        899716: (e, t, n) => {
            e.exports = n.p + "127944dab992a5a660a48649088d062b.jpg"
        },
        145277: (e, t, n) => {
            e.exports = n.p + "cfdcb8b8ca2a510c4fa60c4d1e2de471.jpg"
        },
        611173: (e, t, n) => {
            e.exports = n.p + "6e15b6df7588807ed22ef4ca30bdecb5.jpg"
        },
        661825: (e, t, n) => {
            e.exports = n.p + "3a3ff4a5e2ee5b6e6f81bc643fbbdebf.jpg"
        },
        381111: (e, t, n) => {
            e.exports = n.p + "c3f9079f8d68a77de58020ce41e6aa23.jpg"
        },
        145769: (e, t, n) => {
            e.exports = n.p + "c58c83b8377e966285b7267c1fe36ec0.jpg"
        },
        308101: (e, t, n) => {
            e.exports = n.p + "fc8bbcafac179a95b481069001d5d970.jpg"
        },
        698877: (e, t, n) => {
            e.exports = n.p + "a5900cc65930fed9ae65a3b2b686bee5.jpg"
        },
        600537: (e, t, n) => {
            e.exports = n.p + "5b829fe221131d2be5e35594de147bc1.jpg"
        },
        408243: (e, t, n) => {
            e.exports = n.p + "a7b8b2b19ac8bb01616b8f4c2981b092.jpg"
        },
        608995: (e, t, n) => {
            e.exports = n.p + "a8b4472557ddffdcf4abe67d8771fbb9.jpg"
        },
        682656: (e, t, n) => {
            e.exports = n.p + "6a9124be3e89f60505f38bf7ecb0af1f.jpg"
        },
        206139: (e, t, n) => {
            e.exports = n.p + "2628ceacbc47cced221dea29a1d5071a.jpg"
        },
        8114: (e, t, n) => {
            e.exports = n.p + "8d2805fb7d021b2708ad6fd51d7fb8b4.jpg"
        },
        473874: (e, t, n) => {
            e.exports = n.p + "56e536f05282041349def42b9779d1cc.jpg"
        },
        310721: (e, t, n) => {
            e.exports = n.p + "49dd606dc878d7d545f5acdcf866865e.jpg"
        },
        663772: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => i
            });
            var r = n(667294),
                a = n(660999);

            function i(e, t) {
                var n, i = (0, a.Z)({
                    guildId: e,
                    disableFilter: !0
                });
                return r.useMemo((function() {
                    return null !== (n = i.find((function(e) {
                        return e.application.id === t
                    }))) && void 0 !== n ? n : null
                }), [i, t])
            }
        },
        398441: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => c
            });
            var r = n(667294),
                a = n(202351),
                i = n(560213),
                l = n(873247),
                o = n(120819);

            function s(e, t) {
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
                        var r, a, i = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c() {
                var e = (0, o.z)(),
                    t = u((0, a.Wu)([i.Z], (function() {
                        return [i.Z.getIsEnabled(), i.Z.getFetchState()]
                    }), []), 2),
                    n = t[0],
                    s = t[1];
                r.useEffect((function() {
                    e && n && null == s && (0, l.$h)()
                }), [e, n, s]);
                return null
            }
        },
        77147: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => u,
                W: () => c
            });
            var r = n(667294),
                a = n(202351),
                i = n(61209),
                l = n(715107),
                o = n(464187),
                s = n(107218);

            function u() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        allowGdmActivityChannelSuggestion: !1
                    }).allowGdmActivityChannelSuggestion,
                    t = l.Z.getVoiceChannelId(),
                    n = i.Z.getChannel(t);
                if (null != n && null != n.guild_id) return n.guild_id;
                if (null == n || !e) {
                    var r;
                    return null !== (r = o.Z.getLastSelectedGuildId()) && void 0 !== r ? r : s.Z.getFlattenedGuildIds()[0]
                }
            }

            function c() {
                var e = (0, a.e7)([s.Z], (function() {
                    return s.Z.getFlattenedGuildIds()
                }));
                return r.useMemo((function() {
                    return e.map((function(e) {
                        return {
                            label: e,
                            value: e
                        }
                    }))
                }), [e])
            }
        },
        798981: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => d,
                F: () => y
            });
            var r = n(202351),
                a = n(61209),
                i = n(877475),
                l = n(567403),
                o = n(682776),
                s = n(715107),
                u = n(602397),
                c = n(72580),
                g = n(59732),
                p = n(2590);

            function f(e, t, n, r) {
                var a = (0, g.e4)({
                    channelId: e.id,
                    ChannelStore: t,
                    GuildStore: n,
                    PermissionStore: r
                });
                return e.type === p.d4z.GUILD_VOICE && a === g.jy.CAN_LAUNCH
            }

            function d(e) {
                var t, n, r = e.guildId,
                    g = e.allowGdmActivityChannelSuggestion,
                    p = void 0 !== g && g;
                if (null == r && !p) return null;
                var d = s.Z.getVoiceChannelId(),
                    b = a.Z.getChannel(d);
                if (null != b && (null != b.guild_id || p)) return b.id;
                var y, m = [],
                    v = !0,
                    h = !1,
                    j = void 0;
                try {
                    for (var x, S = Object.values(i.Z.getCategories(r))[Symbol.iterator](); !(v = (x = S.next()).done); v = !0) {
                        var O = x.value,
                            M = !0,
                            Z = !1,
                            w = void 0;
                        try {
                            for (var I, P = O[Symbol.iterator](); !(M = (I = P.next()).done); M = !0) {
                                var C = I.value;
                                f(C.channel, a.Z, l.Z, o.Z) && m.push({
                                    channel: C.channel,
                                    users: u.ZP.getVoiceStatesForChannel(C.channel).filter(c.lm)
                                })
                            }
                        } catch (e) {
                            Z = !0;
                            w = e
                        } finally {
                            try {
                                M || null == P.return || P.return()
                            } finally {
                                if (Z) throw w
                            }
                        }
                    }
                } catch (e) {
                    h = !0;
                    j = e
                } finally {
                    try {
                        v || null == S.return || S.return()
                    } finally {
                        if (h) throw j
                    }
                }
                return null !== (y = null === (t = m.sort((function(e, t) {
                    return e.users.length > t.users.length ? -1 : 1
                }))[0]) || void 0 === t || null === (n = t.channel) || void 0 === n ? void 0 : n.id) && void 0 !== y ? y : null
            }

            function b(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
                return !0
            }

            function y(e) {
                return (0, r.e7)([i.Z, u.ZP, a.Z, l.Z, o.Z], (function() {
                    if (null == e) return [];
                    var t = [];
                    Object.values(i.Z.getCategories(e)).forEach((function(e) {
                        e.forEach((function(e) {
                            var n = e.channel;
                            f(n, a.Z, l.Z, o.Z) && t.push(n)
                        }))
                    }));
                    return t.map((function(e) {
                        return {
                            value: {
                                channel: e,
                                users: u.ZP.getVoiceStatesForChannel(e).filter(c.lm)
                            },
                            label: e.name
                        }
                    })).sort((function(e, t) {
                        return e.value.users.length > t.value.users.length ? -1 : 1
                    }))
                }), [e], b)
            }
        },
        638273: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => pe
            });
            var r, a = n(88067),
                i = n(553543),
                l = n.n(i),
                o = n(5878),
                s = n.n(o),
                u = n(284318),
                c = n.n(u),
                g = n(31504),
                p = n.n(g),
                f = n(268937),
                d = n.n(f),
                b = n(74144),
                y = n.n(b),
                m = n(483356),
                v = n.n(m),
                h = n(842302),
                j = n.n(h),
                x = n(363215),
                S = n.n(x),
                O = n(457232),
                M = n.n(O),
                Z = n(747797),
                w = n.n(Z),
                I = n(26149),
                P = n.n(I),
                C = n(88136),
                U = n.n(C),
                A = n(767257),
                N = n.n(A),
                L = n(899716),
                E = n.n(L),
                k = n(145277),
                _ = n.n(k),
                D = n(611173),
                G = n.n(D),
                F = n(661825),
                R = n.n(F),
                T = n(381111),
                V = n.n(T),
                z = n(145769),
                H = n.n(z),
                $ = n(308101),
                B = n.n($),
                W = n(698877),
                q = n.n(W),
                J = n(600537),
                K = n.n(J),
                Q = n(408243),
                X = n.n(Q),
                Y = n(608995),
                ee = n.n(Y),
                te = n(682656),
                ne = n.n(te),
                re = n(206139),
                ae = n.n(re),
                ie = n(8114),
                le = n.n(ie),
                oe = n(473874),
                se = n.n(oe),
                ue = n(310721),
                ce = n.n(ue);

            function ge(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var pe = (ge(r = {}, a.MO, {
                playersSuggestionMin: 1,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 1,
                gameplayImageUrls: [U(), N()]
            }), ge(r, a.js, {
                playersSuggestionMin: 4,
                playersSuggestionMax: 12,
                timeSuggestionMinutes: 10,
                gameplayImageUrls: [w(), P()]
            }), ge(r, a.mI, {
                playersSuggestionMin: 1,
                playersSuggestionMax: 16,
                timeSuggestionMinutes: 5,
                gameplayImageUrls: []
            }), ge(r, a.GR, {
                playersSuggestionMin: 1,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 10,
                gameplayImageUrls: [ae(), le()]
            }), ge(r, a.PD, {
                playersSuggestionMin: 1,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 5,
                gameplayImageUrls: [G(), R()]
            }), ge(r, a.jT, {
                playersSuggestionMin: 1,
                playersSuggestionMax: 16,
                timeSuggestionMinutes: 2,
                gameplayImageUrls: [se(), ce()]
            }), ge(r, a.am, {
                playersSuggestionMin: 3,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 10,
                gameplayImageUrls: [E(), _()]
            }), ge(r, a.Ec, {
                playersSuggestionMin: 2,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 15,
                gameplayImageUrls: [c(), p()]
            }), ge(r, a.l4, {
                playersSuggestionMin: 2,
                playersSuggestionMax: 16,
                timeSuggestionMinutes: 10,
                gameplayImageUrls: [d(), y()]
            }), ge(r, a.fE, {
                playersSuggestionMin: 2,
                playersSuggestionMax: 16,
                timeSuggestionMinutes: 15,
                gameplayImageUrls: [S(), M()]
            }), ge(r, a.IF, {
                playersSuggestionMin: 2,
                playersSuggestionMax: 5,
                timeSuggestionMinutes: 5,
                gameplayImageUrls: [l(), s()]
            }), ge(r, a.Zc, {
                playersSuggestionMin: 1,
                playersSuggestionMax: 7,
                timeSuggestionMinutes: 15,
                gameplayImageUrls: [B(), q()]
            }), ge(r, a.SL, {
                playersSuggestionMin: 2,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 15,
                gameplayImageUrls: [V(), H()]
            }), ge(r, a.N4, {
                playersSuggestionMin: 2,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 15,
                gameplayImageUrls: [ee(), ne()]
            }), ge(r, a.qG, {
                playersSuggestionMin: 2,
                playersSuggestionMax: 4,
                timeSuggestionMinutes: 5,
                gameplayImageUrls: [v(), j()]
            }), ge(r, a.f9, {
                playersSuggestionMin: 1,
                playersSuggestionMax: 8,
                timeSuggestionMinutes: 10,
                gameplayImageUrls: [K(), X()]
            }), r)
        },
        968257: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => f
            });
            var r = n(785893),
                a = (n(667294), n(296916)),
                i = n(125680),
                l = n(294162),
                o = n(755914),
                s = n(407558),
                u = n(72580),
                c = n(933954),
                g = n(846841),
                p = n.n(g);

            function f(e) {
                var t = e.channel,
                    n = e.users,
                    g = (0, c.ZP)(t);
                return (0, r.jsxs)("div", {
                    className: p().channelInfo,
                    children: [(0, a.Z)(t) ? (0, r.jsx)(s.Z, {
                        className: p().speakerIcon
                    }) : (0, r.jsx)(o.Z, {
                        className: p().speakerIcon
                    }), (0, r.jsx)("div", {
                        className: p().channelName,
                        children: t.name
                    }), g.length > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: p().divider
                        }), (0, r.jsx)(i.Z, {
                            embeddedApps: g,
                            className: p().channelItemActivities
                        }), (0, r.jsx)("div", {
                            className: p().channelActivitiesText,
                            children: g.map((function(e) {
                                var t;
                                return null === (t = e.application) || void 0 === t ? void 0 : t.name
                            })).filter(u.lm).join(", ")
                        })]
                    }) : null, (0, r.jsx)("div", {
                        className: p().voiceUserContainer,
                        children: (0, r.jsx)(l.Z, {
                            users: n,
                            max: 4
                        })
                    })]
                })
            }
        },
        779099: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => g
            });
            var r = n(785893),
                a = (n(667294), n(712861)),
                i = n(318715),
                l = n(304548),
                o = n(567403),
                s = n(775173),
                u = n(79345),
                c = n.n(u);

            function g(e) {
                var t = e.guildId,
                    n = (0, i.ZP)([o.Z], (function() {
                        return o.Z.getGuild(t)
                    }));
                if (null == n) return null;
                var u = null;
                if (null != n.icon) {
                    var g = s.ZP.getGuildIconURL({
                        id: n.id,
                        icon: n.icon,
                        size: 40
                    });
                    u = (0, r.jsx)(l.Avatar, {
                        src: g,
                        "aria-label": n.name,
                        size: l.AvatarSizes.SIZE_24
                    })
                } else {
                    var p = (0, a.Zg)(n.name).slice(0, 2);
                    u = (0, r.jsx)(l.Text, {
                        variant: "text-xs/semibold",
                        className: c().acronym,
                        "aria-hidden": !0,
                        children: p
                    })
                }
                return (0, r.jsxs)("div", {
                    className: c().container,
                    children: [u, (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: c().text,
                        children: n.name
                    })]
                })
            }
        },
        810939: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                a = (n(667294), n(450520)),
                i = n(795308),
                l = n(633878);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (a[n] = e[n])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
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

            function g(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (a[n] = e[n])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }
            const f = (0, a.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    a = e.height,
                    i = void 0 === a ? 16 : a,
                    o = e.color,
                    s = void 0 === o ? "currentColor" : o,
                    u = e.foreground,
                    f = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", g(function(e) {
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
                }({}, (0, l.Z)(f)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: [(0, r.jsx)("g", {
                        clipPath: "url(#clip0_562_101189)",
                        children: (0, r.jsx)("path", {
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7.05732 1.33333L14.1953 8.47133L15.138 7.52867L7.80466 0.195333C7.67932 0.07 7.51066 -3.40665e-10 7.33332 -3.31836e-10L2.66666 0L2.66666 1.33333L7.05732 1.33333ZM6.47132 2.862L13.8047 10.1953C14.0653 10.456 14.0653 10.8773 13.8047 11.138L9.13799 15.8047C9.00799 15.9347 8.83732 16 8.66666 16C8.49599 16 8.32532 15.9347 8.19532 15.8047L0.86199 8.47133C0.736656 8.346 0.666656 8.17733 0.666656 8L0.666656 3.33333C0.666656 2.96467 0.964657 2.66667 1.33332 2.66667L5.99999 2.66667C6.17732 2.66667 6.34599 2.73733 6.47132 2.862ZM2.66666 6C2.66666 6.736 3.26266 7.33333 3.99999 7.33333C4.73599 7.33333 5.33332 6.736 5.33332 6C5.33332 5.26267 4.73599 4.66667 3.99999 4.66667C3.26266 4.66667 2.66666 5.26267 2.66666 6Z",
                            fill: s
                        })
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0_562_101189",
                            children: (0, r.jsx)("rect", {
                                width: "16",
                                height: "16",
                                fill: s
                            })
                        })
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    c = void 0 === a ? 24 : a,
                    g = e.color,
                    p = void 0 === g ? i.Z.colors.INTERACTIVE_NORMAL : g,
                    f = e.colorClass,
                    d = void 0 === f ? "" : f,
                    b = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M9.121 1.879A3 3 0 0 1 11.243 1H17a2 2 0 0 1 1.938 1.505c.069.268-.162.495-.438.495h-4.257a4 4 0 0 0-2.829 1.172l-7.25 7.25a3.981 3.981 0 0 0-1.03 1.77c-.12.444-.743.7-1.068.374l-.195-.195a3 3 0 0 1 0-4.242l7.25-7.25Zm4 4A3 3 0 0 1 15.243 5H21a2 2 0 0 1 2 2v5.757a3 3 0 0 1-.879 2.122l-7.25 7.25a3 3 0 0 1-4.242 0L5.87 17.37a3 3 0 0 1 0-4.242l7.25-7.25ZM20 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        }
    }
]);