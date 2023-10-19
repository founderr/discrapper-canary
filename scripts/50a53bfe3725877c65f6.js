"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89853], {
        389853: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => ue
            });
            var r = t(785893),
                i = t(667294),
                o = t(496486),
                a = t.n(o),
                c = t(842227),
                u = t(202351),
                l = t(70418),
                s = t(496916),
                d = t(937119),
                f = t(172028),
                p = t(5544),
                g = t(984216),
                b = t(567403),
                h = t(179913),
                v = t(443812),
                y = t(890251),
                E = t(189865),
                O = t(652591),
                m = t(72580),
                Z = t(634080),
                j = t(678545),
                P = t(201441),
                w = t(350403),
                N = t(944522),
                _ = t(808194),
                x = t(766496),
                I = t(61209),
                C = t(682776),
                k = t(563367),
                T = t(473903),
                S = t(382840),
                M = t(269300),
                D = t(919810),
                L = t(442812);
            var U = t(158499),
                G = t(32421),
                A = t(205316),
                H = t(842783),
                R = t(85941),
                V = t(2590);

            function B(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function z(e, n) {
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
                    a = e.onActionTaken,
                    c = e.className,
                    l = e.isNew,
                    s = t.id,
                    d = t.guild_id,
                    f = t.channel_id,
                    p = t.creator_id,
                    g = t.name,
                    h = t.description,
                    v = t.entity_type,
                    y = t.image,
                    E = t.recurrence_rule,
                    O = (0, u.e7)([M.ZP], (function() {
                        return M.ZP.hasRsvp(s, d)
                    }), [s, d]),
                    m = (0, u.e7)([N.Z], (function() {
                        return N.Z.isLurking(d)
                    }), [d]),
                    Z = (0, u.e7)([x.Z], (function() {
                        return x.Z.getStageInstanceByChannel(f)
                    }), [f]),
                    j = (0, u.e7)([I.Z], (function() {
                        return I.Z.getChannel(f)
                    }), [f]),
                    P = (0, u.e7)([T.default], (function() {
                        return T.default.getUser(p)
                    }), [p]),
                    q = function(e) {
                        var n = e.id,
                            t = e.data,
                            r = t.guild,
                            i = t.instance,
                            o = t.speakers,
                            a = t.participantCount,
                            c = e.context,
                            l = (0, u.e7)([b.Z, I.Z], (function() {
                                var e;
                                return b.Z.getGuild(null === (e = I.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId())
                            }), [n]),
                            s = (0,
                                u.e7)([x.Z], (function() {
                                return x.Z.getStageInstanceByChannel(n)
                            }), [n]),
                            d = (0, L.w8)(n, _.pV.SPEAKER),
                            f = (0, L.Rk)(n),
                            p = null != l ? l : r,
                            g = null != s ? s : i,
                            h = null != s ? d : o,
                            v = (null != s ? f : a) - h.length;
                        return {
                            channelId: n,
                            guild: p,
                            stage: g,
                            speakers: h,
                            audienceCount: v,
                            context: c
                        }
                    }({
                        id: f,
                        data: {
                            guild: null,
                            instance: Z,
                            speakers: [],
                            participantCount: 0
                        },
                        context: {
                            guildId: d,
                            instance: Z
                        }
                    }).speakers,
                    F = (0, u.e7)([k.Z], (function() {
                        return k.Z.getChannelId()
                    })),
                    J = (0, M.xt)(t),
                    K = F === f && null != F && J,
                    W = q.filter((function(e) {
                        return e.type === _.Ui.VOICE
                    })),
                    Y = W.length,
                    Q = (0, u.e7)([C.Z], (function() {
                        return C.Z.can(V.Plq.CONNECT, j)
                    }), [j]),
                    X = (0, D.ZP)(t),
                    $ = (0, U.Z)(d, s),
                    ee = $.isMember,
                    ne = $.guild,
                    te = (0, R.Z)({
                        guild: ne,
                        channel: j,
                        guildScheduledEvent: t,
                        isActive: J,
                        rsvped: O,
                        onActionTaken: a
                    }),
                    re = (0, w.Z)(i),
                    ie = m ? void 0 : function(e) {
                        return (0, S.bO)({
                            eventId: s,
                            parentGuildId: i,
                            recurrenceId: e
                        })
                    };
                return (0, r.jsx)(H.Z, z(function(e) {
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
                    channel: j,
                    creator: P,
                    name: g,
                    entityType: v,
                    description: null != h ? h : void 0,
                    location: null !== (n = (0, G.cS)(t)) && void 0 !== n ? n : void 0,
                    imageSource: null != y ? (0, A.Z)(t) : void 0,
                    imageLocation: H.Q.THUMBNAIL,
                    isActive: J,
                    isUserLurking: m,
                    isJoined: K,
                    isMember: ee,
                    isHub: re,
                    speakers: W,
                    canConnect: Q,
                    speakerCount: Y,
                    rsvped: O,
                    canInvite: X
                }, te), {
                    className: c,
                    onClick: ie,
                    truncate: o,
                    isNew: l,
                    guildEventId: s,
                    recurrenceRule: E
                }))
            }
            var F = t(703790),
                J = t(832642),
                K = t(473708),
                W = t(596113),
                Y = t.n(W);

            function Q(e) {
                var n = e.guildId,
                    t = e.onClose,
                    i = f.Z.useExperiment({
                        guildId: n,
                        location: "6597ca_1"
                    }, {
                        autoTrackExposure: !1
                    }).showHubEventsList,
                    o = (0, u.e7)([b.Z, C.Z], (function() {
                        var e = b.Z.getGuild(n);
                        return C.Z.can(V.Plq.MANAGE_ROLES, e)
                    }), [n]),
                    a = (0, u.e7)([b.Z], (function() {
                        var e = b.Z.getGuild(n);
                        return i && (null == e ? void 0 : e.hasFeature(V.oNc.HUB))
                    }), [n, i]);
                return (0, r.jsxs)("div", {
                    className: Y().container,
                    children: [(0, r.jsx)(J.Z, {
                        children: (0, r.jsx)("div", {
                            className: Y().circle,
                            children: (0, r.jsx)(y.Z, {
                                height: 40,
                                width: 40,
                                className: Y().icon
                            })
                        })
                    }), (0, r.jsx)(l.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: Y().title,
                        children: a ? K.Z.Messages.HUB_EVENTS_HEADER_TITLE : K.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: Y().subtitle,
                        children: a ? K.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION : K.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), o && (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: Y().roleTip,
                        children: K.Z.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: function() {
                                F.Z.open(n, V.pNK.ROLES);
                                t()
                            }
                        })
                    })]
                })
            }
            var X = t(360703),
                $ = t(3155),
                ee = t(290679),
                ne = t(555175),
                te = t.n(ne);

            function re(e, n, t, r, i, o, a) {
                try {
                    var c = e[o](a),
                        u = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function ie(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            re(o, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            re(o, r, i, a, c, "throw", e)
                        }
                        a(void 0)
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

            function ae(e, n) {
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
            var ce = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = n.call(e, a)
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
                        }([o, c])
                    }
                }
            };

            function ue(e) {
                var n = e.transitionState,
                    o = e.onClose,
                    w = e.guildId,
                    N = (0, v.Dt)(),
                    _ = (0,
                        u.e7)([b.Z], (function() {
                        return b.Z.getGuild(w)
                    })),
                    x = (0, j.Z)(null == _ ? void 0 : _.id),
                    I = (0, P.ZP)(w),
                    C = i.useRef(h.ZP.ackMessageId(w, ee.W.GUILD_EVENT)),
                    k = (0, X.Z)();
                i.useEffect((function() {
                    Z.Z.getGuildEventUserCounts(w);
                    Z.Z.getGuildEventsForCurrentUser(w)
                }), [w]);
                i.useEffect((function() {
                    var e = b.Z.getGuild(w);
                    if (null == e ? void 0 : e.hasFeature(V.oNc.HUB)) {
                        if (f.Z.getCurrentConfig({
                                guildId: w,
                                location: "d3755f_1"
                            }).showHubEventsList) {
                            var n = p.ZP.getDefaultChannel(w);
                            null != n && d.c(n.id)
                        }
                    }
                }), [w]);
                i.useEffect((function() {
                    O.default.track(V.rMx.OPEN_MODAL, {
                        type: $.zw,
                        guild_id: w,
                        guild_events_count: I.length
                    })
                }), []);
                i.useEffect((function() {
                    a()(I).map((function(e) {
                        return e.creator_id
                    })).filter(m.lm).uniq().forEach((function(e) {
                        g.Z.requestMember(w, e)
                    }))
                }), [w, I]);
                i.useEffect((function() {
                    null != w && (0, s.Ju)(w, ee.W.GUILD_EVENT)
                }), [w]);
                return (0, r.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-labelledby": N,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: te().header,
                        children: [(0, r.jsx)(y.Z, {
                            className: te().icon
                        }), (0, r.jsx)(l.Heading, {
                            id: N,
                            variant: "heading-md/semibold",
                            children: I.length > 0 ? K.Z.Messages.GUILD_EVENTS_PLURAL.format({
                                number: I.length
                            }) : K.Z.Messages.GUILD_EVENTS
                        }), x && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: te().divider,
                                children: "|"
                            }), (0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.MIN,
                                onClick: function() {
                                    (0, l.openModalLazy)(ie((function() {
                                        var e, n;
                                        return ce(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(86502), t.e(10523), t.e(14688), t.e(89663), t.e(21375)]).then(t.bind(t, 689663))];
                                                case 1:
                                                    e = i.sent(), n = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(n, ae(function(e) {
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
                                    })), k)
                                },
                                innerClassName: te().button,
                                children: K.Z.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, r.jsx)(l.Clickable, {
                            onClick: o,
                            className: te().iconButton,
                            "aria-label": K.Z.Messages.CLOSE,
                            children: (0, r.jsx)(E.Z, {
                                className: te().icon
                            })
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        className: te().content,
                        children: I.length > 0 ? I.map((function(e) {
                            return (0, r.jsx)(q, {
                                guildEvent: e,
                                guildId: w,
                                onActionTaken: o,
                                isNew: null != C.current && c.default.compare(e.id, C.current) > 0
                            }, e.id)
                        })) : (0, r.jsx)(Q, {
                            guildId: w,
                            onClose: o
                        })
                    })]
                })
            }
        }
    }
]);