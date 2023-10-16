"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74544], {
        383495: (e, n, t) => {
            t.d(n, {
                Q: () => _,
                Z: () => L
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                o = t.n(a),
                l = t(202351),
                s = t(304548),
                c = t(296916),
                u = t(344832),
                f = t(787193),
                d = t(682776),
                h = t(124251),
                p = t(746103),
                v = t(599467),
                y = t(619584),
                b = t(951687),
                m = t(699296),
                g = t(220109),
                C = t(26601),
                x = t(173764),
                E = t(3155),
                N = t(2590),
                w = t(473708),
                k = t(919569),
                S = t.n(k);

            function T(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function j(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        T(e, n, t[n])
                    }))
                }
                return e
            }

            function A(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var _;
            ! function(e) {
                e[e.BANNER = 0] = "BANNER";
                e[e.THUMBNAIL = 1] = "THUMBNAIL"
            }(_ || (_ = {}));

            function I(e) {
                var n = e.channel,
                    t = e.onClick,
                    a = (0, f.XJ)(n).canManageAllEvents,
                    h = (0, l.e7)([d.Z], (function() {
                        return !n.isGuildVocal() || d.Z.can(N.Plq.CONNECT, n)
                    }), [n]),
                    p = i.useMemo((function() {
                        return (0, c.Z)(n)
                    }), [n]),
                    v = (0, u.KS)(n);
                return (0, r.jsx)(s.Tooltip, {
                    text: w.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !h && null != t,
                    children: function(e) {
                        var i;
                        return (0, r.jsxs)(s.Clickable, A(j({}, e), {
                            className: o()(S().inline, S().channelContainer, (i = {}, T(i, S().channelContainerEnabled, h && null != t),
                                T(i, S().channelContainerDisabled, !h && null != t), i)),
                            onClick: t,
                            children: [(0, r.jsx)(s.Tooltip, {
                                text: w.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: a && p && h && null != t,
                                children: function(e) {
                                    return null != v ? (0, r.jsx)(v, A(j({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: S().icon
                                    })) : null
                                }
                            }), (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: S().channelLocation,
                                children: n.name
                            })]
                        }))
                    }
                })
            }

            function O(e) {
                var n = e.guild,
                    t = e.channel,
                    i = e.onJoinClick,
                    a = e.handleLocationClick,
                    l = e.location,
                    c = e.isExternal;
                return e.isHub ? null == n ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: S().inline,
                    children: [(0, r.jsx)(h.Z, {
                        className: S().guildIcon,
                        size: h.Z.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                }) : null != t ? (0, r.jsx)(I, {
                    channel: t,
                    onClick: i
                }) : (0, r.jsxs)(s.Clickable, {
                    className: S().inline,
                    onClick: a,
                    children: [(0, r.jsx)(p.Z, {
                        height: 20,
                        width: 20,
                        className: o()(S().channelContainer, S().icon)
                    }), (0, r.jsx)(s.Text, {
                        className: c ? S().externalLocation : S().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, v.m)(l, !0)
                    })]
                })
            }

            function L(e) {
                var n, t = e.className,
                    i = e.guild,
                    a = e.channel,
                    l = e.creator,
                    c = e.userCount,
                    u = e.name,
                    f = e.entityType,
                    d = e.description,
                    h = e.startTime,
                    p = e.imageLocation,
                    v = void 0 === p ? _.BANNER : p,
                    N = e.imageSource,
                    w = e.isActive,
                    k = e.isUserLurking,
                    j = e.status,
                    A = e.isJoined,
                    I = void 0 !== A && A,
                    L = e.isMember,
                    P = void 0 !== L && L,
                    Z = e.isHub,
                    M = void 0 !== Z && Z,
                    G = e.speakers,
                    R = e.speakerCount,
                    U = e.rsvped,
                    B = e.canInvite,
                    V = e.location,
                    D = e.truncate,
                    X = e.onContextMenu,
                    W = e.onJoinClick,
                    H = e.onJoinGuildClick,
                    J = e.onGoToGuildClick,
                    Y = e.onRsvpClick,
                    K = e.onStartClick,
                    z = e.onInviteClick,
                    q = e.onEndClick,
                    F = e.onClick,
                    $ = e.isNew,
                    Q = (0, y.Q)(a, f),
                    ee = f === E.WX.EXTERNAL,
                    ne = ee ? function(e) {
                        return e.stopPropagation()
                    } : void 0;
                return (0, r.jsxs)(s.ClickableContainer, {
                    "aria-label": u,
                    onClick: F,
                    onContextMenu: X,
                    className: o()(S().card, (n = {}, T(n, S().joined, I), T(n, S().lurking, k), n), t),
                    children: [v === _.BANNER && (0, r.jsx)(m.Z, {
                        source: N
                    }), (0, r.jsx)(g.ZP, {
                        userCount: c,
                        creator: l,
                        name: u,
                        description: d,
                        startTime: h,
                        imageSource: v === _.THUMBNAIL ? N : null,
                        status: j,
                        truncate: D,
                        guildId: null == i ? void 0 : i.id,
                        eventType: f,
                        isHub: M,
                        isNew: $
                    }), w && null != i && null != G && R > 0 && (0, r.jsx)(x.Z, {
                        guild: i,
                        speakers: G,
                        speakerCount: R,
                        className: S().spacing
                    }), (0, r.jsx)("hr", {
                        className: S().divider
                    }), (0, r.jsxs)("div", {
                        className: o()(S().inline, S().footer),
                        children: [(0, r.jsx)(O, {
                            guild: i,
                            channel: a,
                            onJoinClick: W,
                            handleLocationClick: ne,
                            location: V,
                            isExternal: ee,
                            isHub: M
                        }), M ? (0, r.jsx)(C.Z, {
                            isActive: w,
                            isUserLurking: k,
                            isMember: P,
                            rsvped: U,
                            onRsvpClick: Y,
                            onJoinGuildClick: H,
                            onGoToGuildClick: J,
                            guildName: null == i ? void 0 : i.name,
                            canInvite: B,
                            isChannelPublic: Q,
                            onInviteClick: z
                        }) : (0, r.jsx)(b.ZP, {
                            entityType: f,
                            isJoined: I,
                            isActive: w,
                            isUserLurking: k,
                            rsvped: U,
                            canInvite: B,
                            isChannelPublic: Q,
                            onContextMenu: X,
                            onJoinClick: W,
                            onRsvpClick: Y,
                            onStartClick: K,
                            onInviteClick: z,
                            onEndClick: q
                        })]
                    })]
                })
            }
        },
        173764: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                a = t.n(i),
                o = t(304548),
                l = t(961241),
                s = t(473708),
                c = t(811948),
                u = t.n(c);

            function f(e) {
                var n = e.guild,
                    t = e.speakers,
                    i = e.speakerCount,
                    c = e.className,
                    f = t.slice(0, 5),
                    d = f.map((function(e) {
                        var t, i;
                        return (0, r.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, r.jsx)(o.Avatar, {
                                src: null == e || null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                                size: o.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, r.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, r.jsx)(o.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (i = e.user) || void 0 === i ? void 0 : i.id)
                    })),
                    h = i - f.length;
                return (0, r.jsxs)("div", {
                    className: a()(u().grid, c),
                    children: [d, h > 0 && (0, r.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, r.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, r.jsx)(l.Z, {
                                height: 12
                            })
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: s.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: h
                            })
                        })]
                    })]
                })
            }
        },
        874544: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => le
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                o = t.n(a),
                l = t(202351),
                s = t(304548),
                c = t(944522),
                u = t(787193),
                f = t(299239),
                d = t(61209),
                h = t(567403),
                p = t(443812),
                v = t(755284),
                y = t(347365),
                b = t(441143),
                m = t.n(b),
                g = t(116404),
                C = t(771575),
                x = t(915840),
                E = t(563367),
                N = t(3155);

            function w(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function k(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            w(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            w(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var S = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function T(e, n) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = k((function(e, n) {
                    var t, r, i, a;
                    return S(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                switch (e.entity_type) {
                                    case N.WX.STAGE_INSTANCE:
                                        return [3, 1];
                                    case N.WX.VOICE:
                                        return [3, 6]
                                }
                                return [3, 7];
                            case 1:
                                t = E.Z.getChannelId();
                                r = d.Z.getChannel(e.channel_id);
                                m()(null != r, "could not find channel");
                                return t === r.id ? [3, 4] : [4, x.TM(r, !0)];
                            case 2:
                                n.sent();
                                return [4, x.R5(r, null, !1)];
                            case 3:
                                n.sent();
                                n.label = 4;
                            case 4:
                                return [4, (0, C.RK)(r, !1, !0)];
                            case 5:
                                n.sent();
                                return [3, 8];
                            case 6:
                                i = E.Z.getChannelId();
                                a = d.Z.getChannel(e.channel_id);
                                m()(null != a, "could not find channel");
                                i !== a.id && g.default.selectVoiceChannel(a.id);
                                return [3, 8];
                            case 7:
                                return [3, 8];
                            case 8:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(e, n) {
                switch (e.entity_type) {
                    case N.WX.STAGE_INSTANCE:
                    case N.WX.VOICE:
                    case N.WX.EXTERNAL:
                        null == n || n()
                }
                return Promise.resolve()
            }
            var _ = t(985462),
                I = t(341971),
                O = t(382060),
                L = t(242735),
                P = t(2590);

            function Z(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function M(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function G(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            M(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            M(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function R(e) {
                return function(e) {
                    if (Array.isArray(e)) return Z(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Z(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function B() {
                B = G((function(e, n) {
                    var t, r, i, a, o = arguments;
                    return U(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                t = o.length > 2 && void 0 !== o[2] ? o[2] : [];
                                (r = i = []).push.apply(r, R(t));
                                return [4, _.Z.createChannel({
                                    guildId: e.id,
                                    type: P.d4z.GUILD_STAGE_VOICE,
                                    name: n.substring(0, 100),
                                    permissionOverwrites: i
                                })];
                            case 1:
                                if (null == (a = l.sent()) || 201 !== a.status) throw new Error("Can't create channel for event");
                                return [2, (0, O.q_)(a.body)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function V(e, n) {
                var t = e.guild_id,
                    r = e.channel_id,
                    i = h.Z.getGuild(t);
                if (null == i) return Promise.resolve(null);
                var a = d.Z.getChannel(r);
                return null == a ? function(e, n) {
                    return B.apply(this, arguments)
                }(i, e.name, n) : Promise.resolve(a)
            }

            function D(e, n) {
                return X.apply(this, arguments)
            }

            function X() {
                return (X = G((function(e, n) {
                    var t;
                    return U(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e.entity_type === N.WX.STAGE_INSTANCE ? [3, 1] : [3, 3];
                            case 1:
                                return [4, V(e, n)];
                            case 2:
                                t = r.sent();
                                m()(null != t, "could not find or create channel");
                                return [3, 4];
                            case 3:
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(e) {
                return H.apply(this, arguments)
            }

            function H() {
                H = G((function(e) {
                    var n, t, r, i, a, o, l = arguments;
                    return U(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                n = l.length > 1 && void 0 !== l[1] && l[1];
                                t = e.channel_id, r = e.entity_type, i = e.name, a = e.id, o = e.guild_id;
                                switch (r) {
                                    case N.WX.STAGE_INSTANCE:
                                        return [3, 1];
                                    case N.WX.VOICE:
                                        return [3, 3];
                                    case N.WX.EXTERNAL:
                                        return [3, 5]
                                }
                                return [3, 7];
                            case 1:
                                m()(null != t, "channel_id is required");
                                return [4, (0, I.me)(t, i, N.j8.GUILD_ONLY, n, a)];
                            case 2:
                            case 4:
                            case 6:
                                s.sent();
                                return [3, 8];
                            case 3:
                                m()(null != t, "channel_id is required");
                                return [4, L.Z.startEvent(a, o)];
                            case 5:
                                return [4, L.Z.startEvent(a, o)];
                            case 7:
                                return [3, 8];
                            case 8:
                                return [2]
                        }
                    }))
                }));
                return H.apply(this, arguments)
            }

            function J(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Y(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function K(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            Y(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            Y(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function z(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return J(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var q = function(e, n) {
                    var t, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = n.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                F = {
                    onSuccess: function() {},
                    permissionOverwrites: []
                };
            var $ = t(205316),
                Q = t(383495),
                ee = t(473708),
                ne = t(351391),
                te = t.n(ne);

            function re(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ie(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function ae(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return re(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return re(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var oe = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function le(e) {
                var n = e.transitionState,
                    t = e.event,
                    a = e.onSuccess,
                    b = e.onClose,
                    m = (0, p.Dt)(),
                    g = t.guild_id,
                    C = t.privacy_level,
                    x = (0, l.e7)([d.Z], (function() {
                        return d.Z.getChannel(t.channel_id)
                    }), [t]),
                    E = (0, l.e7)([h.Z], (function() {
                        return h.Z.getGuild(g)
                    }), [g]),
                    w = (0, (0, u.XJ)(null != x ? x : E).canManageGuildEvent)(t),
                    k = (0, l.e7)([c.Z], (function() {
                        return c.Z.isLurking(g)
                    }), [g]),
                    S = t.entity_type === N.WX.STAGE_INSTANCE,
                    j = ae(i.useState(S), 2),
                    _ = j[0],
                    I = j[1],
                    O = ae(function() {
                        var e = z(i.useState(!1), 2),
                            n = e[0],
                            t = e[1],
                            r = z(i.useState(null), 2),
                            a = r[0],
                            o = r[1];

                        function l() {
                            l = K((function(e, n) {
                                var r, i, a, l, s, c, u, f = arguments;
                                return q(this, (function(d) {
                                    switch (d.label) {
                                        case 0:
                                            r = f.length > 2 && void 0 !== f[2] ? f[2] : F, i = r.onSuccess, a = void 0 === i ? F.onSuccess : i, l = r.permissionOverwrites, s = void 0 === l ? F.permissionOverwrites : l;
                                            t(!0);
                                            d.label = 1;
                                        case 1:
                                            d.trys.push([1, 6, , 7]);
                                            return [4, D(e, s)];
                                        case 2:
                                            d.sent();
                                            return [4, W(e, n)];
                                        case 3:
                                            d.sent();
                                            return [4, T(e, a)];
                                        case 4:
                                            d.sent();
                                            return [4, A(e, a)];
                                        case 5:
                                            d.sent();
                                            t(!1);
                                            return [3, 7];
                                        case 6:
                                            c = d.sent();
                                            u = new y.Hx(c);
                                            o(u);
                                            t(!1);
                                            return [3, 7];
                                        case 7:
                                            t(!1);
                                            return [2]
                                    }
                                }))
                            }));
                            return l.apply(this, arguments)
                        }
                        return [function(e, n) {
                            return l.apply(this, arguments)
                        }, {
                            loading: n,
                            error: a
                        }]
                    }(), 2),
                    L = O[0],
                    P = O[1],
                    Z = P.loading,
                    M = P.error;
                if (!w) return null;
                var G, R, U, B = C === N.j8.PUBLIC ? ee.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : ee.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
                    V = function() {
                        null == a || a();
                        b();
                        (0, f.Ku)(!1)
                    },
                    X = (R = (G = function() {
                        return oe(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, L(t, _, {
                                        onSuccess: V
                                    })];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(t, r) {
                            var i = G.apply(e, n);

                            function a(e) {
                                ie(i, t, r, a, o, "next", e)
                            }

                            function o(e) {
                                ie(i, t, r, a, o, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function() {
                        return R.apply(this, arguments)
                    });
                return (0, r.jsx)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": m,
                    children: (0, r.jsxs)(s.ModalContent, {
                        className: te().content,
                        children: [(0, r.jsx)("div", {
                            className: te().previewCard,
                            children: (0, r.jsx)(Q.Z, {
                                guild: E,
                                channel: x,
                                userCount: 1,
                                name: t.name,
                                description: null !== (U = t.description) && void 0 !== U ? U : void 0,
                                startTime: t.scheduled_start_time,
                                imageSource: (0, $.Z)(t),
                                isActive: !1,
                                isUserLurking: k,
                                status: t.status,
                                speakers: [],
                                speakerCount: 0,
                                rsvped: !0
                            })
                        }), (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            className: te().privacyLevel,
                            variant: "text-sm/normal",
                            children: ee.Z.Messages.START_EVENT_CONFIRMATION.format({
                                privacyLevel: B,
                                privacyLevelHook: function(e, n) {
                                    return C !== N.j8.PUBLIC ? null : (0, r.jsxs)("div", {
                                        className: te().privacyLevel,
                                        children: [(0, r.jsx)(v.Z, {
                                            width: 16,
                                            height: 16,
                                            className: te().publicIcon
                                        }), (0, r.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            children: e
                                        })]
                                    }, n)
                                }
                            })
                        }), (0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            className: te().header,
                            children: t.name
                        }), S && (0, r.jsx)(s.Checkbox, {
                            className: te().verticalSpacing,
                            type: s.Checkbox.Types.INVERTED,
                            value: _,
                            onChange: function(e) {
                                var n = e.currentTarget;
                                return I(n.checked)
                            },
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: ee.Z.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
                            })
                        }), (0, r.jsxs)("div", {
                            className: o()(te().inline, te().buttons, te().verticalSpacing),
                            children: [(0, r.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                onClick: function() {
                                    b()
                                },
                                className: o()(te().button, te().spacing),
                                children: ee.Z.Messages.STAGE_BLOCKED_USERS_CANCEL
                            }), (0, r.jsx)(s.Button, {
                                color: s.Button.Colors.GREEN,
                                onClick: X,
                                submitting: Z,
                                className: te().button,
                                children: ee.Z.Messages.START_EVENT
                            })]
                        }), null != M && null != M.getAnyErrorMessage() ? (0, r.jsx)(s.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            className: te().errorMessage,
                            children: M.getAnyErrorMessage()
                        }) : null]
                    })
                })
            }
        }
    }
]);