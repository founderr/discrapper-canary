(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [40332, 89853], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        238823: (e, n, t) => {
            "use strict";
            t.d(n, {
                S: () => a
            });
            var r = t(785893),
                i = (t(667294), t(795308)),
                o = t(633878);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
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

            function c(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            var a = function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    v = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        937119: (e, n, t) => {
            "use strict";
            t.d(n, {
                c: () => p
            });
            var r = t(23279),
                i = t.n(r),
                o = t(281110),
                l = t(744564),
                u = t(612831),
                c = t(2590);

            function a(e, n, t, r, i, o, l) {
                try {
                    var u = e[o](l),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }
            var s, f, d = function(e, n) {
                    var t, r, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0,
                                        i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, u])
                        }
                    }
                },
                p = i()((f = (s = function(e) {
                    var n;
                    return d(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                l.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_START"
                                });
                                return [4, o.ZP.get({
                                    url: c.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
                                    query: {
                                        type: u.C2.GUILD_SCHEDULED_EVENT
                                    }
                                })];
                            case 1:
                                n = t.sent();
                                l.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                                    channelId: e,
                                    entries: n.body
                                });
                                return [3, 3];
                            case 2:
                                t.sent();
                                l.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_FAILURE"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(t, r) {
                        var i = s.apply(e, n);

                        function o(e) {
                            a(i, t, r, o, l, "next", e)
                        }

                        function l(e) {
                            a(i, t, r, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }), function(e) {
                    return f.apply(this, arguments)
                }), 200)
        },
        79522: (e, n, t) => {
            "use strict";
            t.d(n, {
                AN: () => u,
                LK: () => c,
                TT: () => l
            });
            var r = t(940060),
                i = t(227202),
                o = t(2590),
                l = o.Plq.VIEW_CHANNEL,
                u = r.Z.combine(l, o.Plq.CONNECT),
                c = r.Z.combine(l, i.yP)
        },
        678545: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(667294),
                i = t(202351),
                o = t(787193),
                l = t(5544),
                u = t(567403),
                c = t(682776),
                a = t(2590);
            const s = function(e, n) {
                var t = (0, i.e7)([u.Z], (function() {
                        return u.Z.getGuild(e)
                    }), [e]),
                    s = (0, o.XJ)(t).canCreateGuildEvent,
                    f = (0, i.e7)([l.ZP], (function() {
                        return l.ZP.getChannels(e)[l.Zb]
                    }), [e]),
                    d = r.useMemo((function() {
                        return null != n ? f.filter((function(e) {
                            return e.channel.type === n
                        })) : f
                    }), [f, n]);
                return (0, i.e7)([c.Z], (function() {
                    if (c.Z.can(a.Plq.ADMINISTRATOR, t)) return !0;
                    if (s) return !0;
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, l = d[Symbol.iterator](); !(e = (i = l.next()).done); e = !0) {
                            var u = i.value.channel;
                            if ((0, o.Gw)(u).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            e || null == l.return || l.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return !1
                }), [d, t, s])
            }
        },
        197307: (e, n, t) => {
            "use strict";
            t.d(n, {
                l: () => r
            });
            var r = (0, t(38736).Z)((function(e) {
                return {
                    canCloseModal: !0,
                    onUpdateCanCloseModal: function(n) {
                        e({
                            canCloseModal: n
                        })
                    }
                }
            }))
        },
        389853: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => ce
            });
            var r = t(785893),
                i = t(667294),
                o = t(496486),
                l = t.n(o),
                u = t(842227),
                c = t(202351),
                a = t(70418),
                s = t(496916),
                f = t(937119),
                d = t(172028),
                p = t(5544),
                b = t(984216),
                v = t(567403),
                g = t(179913),
                y = t(443812),
                O = t(890251),
                h = t(189865),
                E = t(652591),
                m = t(72580),
                j = t(634080),
                C = t(678545),
                P = t(201441),
                w = t(350403),
                Z = t(944522),
                N = t(808194),
                S = t(766496),
                I = t(61209),
                T = t(682776),
                _ = t(563367),
                x = t(473903),
                M = t(382840),
                A = t(269300),
                D = t(919810),
                k = t(442812);
            var R = t(158499),
                L = t(32421),
                G = t(205316),
                V = t(485618),
                U = t(85941),
                H = t(2590);

            function B(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function F(e, n) {
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

            function q(e) {
                var n, t = e.guildEvent,
                    i = e.guildId,
                    o = e.truncate,
                    l = e.onActionTaken,
                    u = e.className,
                    a = e.isNew,
                    s = t.id,
                    f = t.guild_id,
                    d = t.channel_id,
                    p = t.creator_id,
                    b = t.name,
                    g = t.description,
                    y = t.entity_type,
                    O = t.image,
                    h = t.recurrence_rule,
                    E = (0, c.e7)([A.ZP], (function() {
                        return A.ZP.hasRsvp(s, f)
                    }), [s, f]),
                    m = (0, c.e7)([Z.Z], (function() {
                        return Z.Z.isLurking(f)
                    }), [f]),
                    j = (0, c.e7)([S.Z], (function() {
                        return S.Z.getStageInstanceByChannel(d)
                    }), [d]),
                    C = (0,
                        c.e7)([I.Z], (function() {
                        return I.Z.getChannel(d)
                    }), [d]),
                    P = (0, c.e7)([x.default], (function() {
                        return x.default.getUser(p)
                    }), [p]),
                    q = function(e) {
                        var n = e.id,
                            t = e.data,
                            r = t.guild,
                            i = t.instance,
                            o = t.speakers,
                            l = t.participantCount,
                            u = e.context,
                            a = (0, c.e7)([v.Z, I.Z], (function() {
                                var e;
                                return v.Z.getGuild(null === (e = I.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId())
                            }), [n]),
                            s = (0, c.e7)([S.Z], (function() {
                                return S.Z.getStageInstanceByChannel(n)
                            }), [n]),
                            f = (0, k.w8)(n, N.pV.SPEAKER),
                            d = (0, k.Rk)(n),
                            p = null != a ? a : r,
                            b = null != s ? s : i,
                            g = null != s ? f : o,
                            y = (null != s ? d : l) - g.length;
                        return {
                            channelId: n,
                            guild: p,
                            stage: b,
                            speakers: g,
                            audienceCount: y,
                            context: u
                        }
                    }({
                        id: d,
                        data: {
                            guild: null,
                            instance: j,
                            speakers: [],
                            participantCount: 0
                        },
                        context: {
                            guildId: f,
                            instance: j
                        }
                    }).speakers,
                    z = (0, c.e7)([_.Z], (function() {
                        return _.Z.getChannelId()
                    })),
                    X = (0, A.xt)(t),
                    Y = z === d && null != z && X,
                    K = q.filter((function(e) {
                        return e.type === N.Ui.VOICE
                    })),
                    J = K.length,
                    W = (0, c.e7)([T.Z], (function() {
                        return T.Z.can(H.Plq.CONNECT, C)
                    }), [C]),
                    Q = (0, D.ZP)(t),
                    $ = (0,
                        R.Z)(f, s),
                    ee = $.isMember,
                    ne = $.guild,
                    te = (0, U.Z)({
                        guild: ne,
                        channel: C,
                        guildScheduledEvent: t,
                        isActive: X,
                        rsvped: E,
                        onActionTaken: l
                    }),
                    re = (0, w.Z)(i),
                    ie = m ? void 0 : function(e) {
                        return (0, M.bO)({
                            eventId: s,
                            parentGuildId: i,
                            recurrenceId: e
                        })
                    };
                return (0, r.jsx)(V.Z, F(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            B(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    guild: ne,
                    channel: C,
                    creator: P,
                    name: b,
                    entityType: y,
                    description: null != g ? g : void 0,
                    location: null !== (n = (0, L.cS)(t)) && void 0 !== n ? n : void 0,
                    imageSource: null != O ? (0, G.Z)(t) : void 0,
                    imageLocation: V.Q.THUMBNAIL,
                    isActive: X,
                    isUserLurking: m,
                    isJoined: Y,
                    isMember: ee,
                    isHub: re,
                    speakers: K,
                    canConnect: W,
                    speakerCount: J,
                    rsvped: E,
                    canInvite: Q
                }, te), {
                    className: u,
                    onClick: ie,
                    truncate: o,
                    isNew: a,
                    guildEventId: s,
                    recurrenceRule: h
                }))
            }
            var z = t(703790),
                X = t(832642),
                Y = t(473708),
                K = t(596113),
                J = t.n(K);

            function W(e) {
                var n = e.guildId,
                    t = e.onClose,
                    i = d.Z.useExperiment({
                        guildId: n,
                        location: "6597ca_1"
                    }, {
                        autoTrackExposure: !1
                    }).showHubEventsList,
                    o = (0, c.e7)([v.Z, T.Z], (function() {
                        var e = v.Z.getGuild(n);
                        return T.Z.can(H.Plq.MANAGE_ROLES, e)
                    }), [n]),
                    l = (0, c.e7)([v.Z], (function() {
                        var e = v.Z.getGuild(n);
                        return i && (null == e ? void 0 : e.hasFeature(H.oNc.HUB))
                    }), [n, i]);
                return (0, r.jsxs)("div", {
                    className: J().container,
                    children: [(0, r.jsx)(X.Z, {
                        children: (0, r.jsx)("div", {
                            className: J().circle,
                            children: (0, r.jsx)(O.Z, {
                                height: 40,
                                width: 40,
                                className: J().icon
                            })
                        })
                    }), (0, r.jsx)(a.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: J().title,
                        children: l ? Y.Z.Messages.HUB_EVENTS_HEADER_TITLE : Y.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, r.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: J().subtitle,
                        children: l ? Y.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION : Y.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), o && (0, r.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: J().roleTip,
                        children: Y.Z.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: function() {
                                z.Z.open(n, H.pNK.ROLES);
                                t()
                            }
                        })
                    })]
                })
            }
            var Q = t(360703),
                $ = t(3155),
                ee = t(290679),
                ne = t(555175),
                te = t.n(ne);

            function re(e, n, t, r, i, o, l) {
                try {
                    var u = e[o](l),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function ie(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function l(e) {
                            re(o, r, i, l, u, "next", e)
                        }

                        function u(e) {
                            re(o, r, i, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function oe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function le(e, n) {
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
            var ue = function(e, n) {
                var t, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = n.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function ce(e) {
                var n = e.transitionState,
                    o = e.onClose,
                    w = e.guildId,
                    Z = (0, y.Dt)(),
                    N = (0, c.e7)([v.Z], (function() {
                        return v.Z.getGuild(w)
                    })),
                    S = (0, C.Z)(null == N ? void 0 : N.id),
                    I = (0, P.ZP)(w),
                    T = i.useRef(g.ZP.ackMessageId(w, ee.W.GUILD_EVENT)),
                    _ = (0, Q.Z)();
                i.useEffect((function() {
                    j.Z.getGuildEventUserCounts(w);
                    j.Z.getGuildEventsForCurrentUser(w)
                }), [w]);
                i.useEffect((function() {
                    var e = v.Z.getGuild(w);
                    if (null == e ? void 0 : e.hasFeature(H.oNc.HUB)) {
                        if (d.Z.getCurrentConfig({
                                guildId: w,
                                location: "d3755f_1"
                            }).showHubEventsList) {
                            var n = p.ZP.getDefaultChannel(w);
                            null != n && f.c(n.id)
                        }
                    }
                }), [w]);
                i.useEffect((function() {
                    E.default.track(H.rMx.OPEN_MODAL, {
                        type: $.zw,
                        guild_id: w,
                        guild_events_count: I.length
                    })
                }), []);
                i.useEffect((function() {
                    l()(I).map((function(e) {
                        return e.creator_id
                    })).filter(m.lm).uniq().forEach((function(e) {
                        b.Z.requestMember(w, e)
                    }))
                }), [w, I]);
                i.useEffect((function() {
                    null != w && (0, s.Ju)(w, ee.W.GUILD_EVENT)
                }), [w]);
                return (0, r.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-labelledby": Z,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        className: te().header,
                        children: [(0, r.jsx)(O.Z, {
                            className: te().icon
                        }), (0, r.jsx)(a.Heading, {
                            id: Z,
                            variant: "heading-md/semibold",
                            children: I.length > 0 ? Y.Z.Messages.GUILD_EVENTS_PLURAL.format({
                                number: I.length
                            }) : Y.Z.Messages.GUILD_EVENTS
                        }), S && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: te().divider,
                                children: "|"
                            }), (0, r.jsx)(a.Button, {
                                size: a.Button.Sizes.MIN,
                                onClick: function() {
                                    (0, a.openModalLazy)(ie((function() {
                                        var e, n;
                                        return ue(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(86502), t.e(10523), t.e(38501), t.e(21375)]).then(t.bind(t, 738501))];
                                                case 1:
                                                    e = i.sent(), n = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(n, le(function(e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                                }))));
                                                                r.forEach((function(n) {
                                                                    oe(e, n, t[n])
                                                                }))
                                                            }
                                                            return e
                                                        }({}, e), {
                                                            guildId: w
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })), _)
                                },
                                innerClassName: te().button,
                                children: Y.Z.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, r.jsx)(a.Clickable, {
                            onClick: o,
                            className: te().iconButton,
                            "aria-label": Y.Z.Messages.CLOSE,
                            children: (0, r.jsx)(h.Z, {
                                className: te().icon
                            })
                        })]
                    }), (0, r.jsx)(a.ModalContent, {
                        className: te().content,
                        children: I.length > 0 ? I.map((function(e) {
                            return (0, r.jsx)(q, {
                                guildEvent: e,
                                guildId: w,
                                onActionTaken: o,
                                isNew: null != T.current && u.default.compare(e.id, T.current) > 0
                            }, e.id)
                        })) : (0, r.jsx)(W, {
                            guildId: w,
                            onClose: o
                        })
                    })]
                })
            }
        },
        360703: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(70418),
                i = t(26468),
                o = t(197307),
                l = t(2590),
                u = "guild-event-modal";
            const c = function() {
                var e = (0, i.bp)() === l.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: u,
                    contextKey: e,
                    onCloseRequest: function() {
                        o.l.getState().canCloseModal && (0, r.closeModal)(u, e)
                    }
                }
            }
        },
        172028: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = (0, t(260561).B)({
                kind: "guild",
                id: "2021-11_hub_events",
                label: "Hub Events",
                defaultConfig: {
                    showHubEventsList: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Hub Events List",
                    config: {
                        showHubEventsList: !0
                    }
                }]
            })
        },
        350403: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(202351),
                i = t(567403),
                o = t(2590);

            function l(e) {
                return (0, r.e7)([i.Z], (function() {
                    if (null == e) return !1;
                    var n, t = i.Z.getGuild(e);
                    return null !== (n = null == t ? void 0 : t.hasFeature(o.oNc.HUB)) && void 0 !== n && n
                }), [e])
            }
        },
        15970: (e, n, t) => {
            "use strict";
            t.d(n, {
                b: () => i
            });
            var r = t(2590);

            function i(e, n, t, i) {
                var o = null != t ? t : n;
                return null != o && e.can(r.Plq.CREATE_INSTANT_INVITE, o) || null != n && null != n.vanityURLCode || null != (null == i ? void 0 : i.invite_code)
            }
        },
        787193: (e, n, t) => {
            "use strict";
            t.d(n, {
                Gw: () => O,
                XJ: () => y,
                Yl: () => h
            });
            var r = t(667294),
                i = t(940060),
                o = t(202351),
                l = t(897436),
                u = t(848285),
                c = (t(5544),
                    t(682776)),
                a = t(473903),
                s = (t(563135), t(79522)),
                f = t(520453);

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: function() {
                        return !1
                    },
                    canManageGuildEvent: function() {
                        return !1
                    }
                },
                v = function(e, n, t, r) {
                    if (null == e) return !1;
                    if (t) return !0;
                    if ("creator_id" in e) return r && null != n && e.creator_id === n.id;
                    if ("userId" in e) return r && null != n && e.userId === n.id;
                    if ("user" in e) {
                        var i;
                        return r && null != n && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === n.id
                    }
                    return !1
                },
                g = function(e) {
                    if (null == e) return [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS];
                    var n = s.TT;
                    e.isGuildStageVoice() ? n = s.LK : e.isGuildVoice() && (n = s.AN);
                    return [i.Z.combine(n, f.Pl.CREATE_EVENTS), i.Z.combine(n, f.Pl.MANAGE_EVENTS)]
                },
                y = function(e) {
                    var n = p(e instanceof u.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : g(e), 2),
                        t = n[0],
                        i = n[1],
                        l = p((0, o.Wu)([c.Z], (function() {
                            return [c.Z.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e), c.Z.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e), c.Z.can(t, e), c.Z.can(i, e)]
                        })), 4),
                        s = l[0],
                        d = l[1],
                        y = l[2],
                        O = l[3],
                        h = (0, o.e7)([a.default], (function() {
                            return a.default.getCurrentUser()
                        })),
                        E = r.useCallback((function(e) {
                            return v(e, h, d, s)
                        }), [s, d, h]),
                        m = r.useCallback((function(e) {
                            return v(e, h, O, y)
                        }), [O, y, h]);
                    return null == e ? b : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: y,
                        canManageAllExpressions: d,
                        canManageAllEvents: O,
                        canManageGuildExpression: E,
                        canManageGuildEvent: m
                    }
                },
                O = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        r = p(e instanceof u.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : g(e), 2),
                        i = r[0],
                        o = r[1],
                        l = n.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        s = n.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        d = n.can(i, e),
                        y = n.can(o, e),
                        O = t.getCurrentUser();
                    return null == e ? b : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: s,
                        canManageAllEvents: y,
                        canManageGuildExpression: function(e) {
                            return v(e, O, s, l)
                        },
                        canManageGuildEvent: function(e) {
                            return v(e, O, y, d)
                        }
                    }
                },
                h = function(e) {
                    var n = (0, o.e7)([c.Z], (function() {
                            return c.Z.can(f.Pl.MANAGE_GUILD, e)
                        })),
                        t = (0, l.JY)({
                            guildId: null == e ? void 0 : e.id
                        }).showSettingsToggle;
                    return n && t
                }
        },
        367299: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(318715)),
                o = t(785085);

            function l(e) {
                var n = e.children,
                    t = e.confettiLocation;
                return (0, i.ZP)([o.Z], (function() {
                    return o.Z.isEnabled({
                        confettiLocation: t
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: n
                }) : null
            }
        },
        919031: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(667294),
                i = t(318715),
                o = t(255875),
                l = t(785085);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c() {
                var e = r.useContext(o.E).createMultipleConfettiAt,
                    n = (0, i.ZP)([l.Z], (function() {
                        return l.Z.getState()
                    })),
                    t = r.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    c = r.useMemo((function() {
                        return {
                            fire: function(r, i, o) {
                                var l, c, a = null != (null == o ? void 0 : o.settings) ? function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                u(e, n, t[n])
                                            }))
                                        }
                                        return e
                                    }({}, n, o.settings) : n,
                                    s = t(a);
                                e(r, i, s, (null !== (l = null == o ? void 0 : o.count) && void 0 !== l ? l : a.confettiCount) * (null !== (c = null == o ? void 0 : o.countMultiplier) && void 0 !== c ? c : 1), {
                                    sprite: null == o ? void 0 : o.sprite
                                })
                            }
                        }
                    }), [e, t, n]);
                return c
            }
        },
        832642: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                o = t.n(i),
                l = t(473708),
                u = t(300443),
                c = t.n(u),
                a = t(483683),
                s = t.n(a),
                f = t(63685),
                d = t.n(f);

            function p(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: o()(c().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: o()(c().sparkleIcon, c().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s(),
                        className: o()(c().sparkleIcon, c().sparkleTop)
                    })]
                })
            }
        },
        457997: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                o = t(66541),
                l = t(633878);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
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

            function a(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 20 : n,
                    i = e.height,
                    o = void 0 === i ? 20 : i,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            u(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(p)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }), o.T)
        },
        961241: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                o = t(238823),
                l = t(633878);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
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

            function a(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", c(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            u(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(p)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: d,
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: d,
                        fill: f
                    })]
                }))
            }), o.S)
        }
    }
]);