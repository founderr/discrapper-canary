"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35401], {
        907975: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            const i = (0, t(260561).B)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        842783: (e, n, t) => {
            t.d(n, {
                Q: () => Y,
                Z: () => ee
            });
            var i = t(785893),
                r = t(667294),
                l = t(294184),
                a = t.n(l),
                o = t(202351),
                c = t(70418),
                s = t(153686),
                u = t(19585),
                d = t(296916),
                v = t(344832),
                p = t(787193),
                h = t(682776),
                f = t(124251),
                b = t(746103),
                g = t(907975),
                m = t(599467),
                j = t(619584),
                x = t(610030),
                C = t(951687),
                N = t(699296),
                k = t(220109),
                y = t(842227),
                E = t(971402),
                O = t(61209),
                P = t(567403),
                w = t(154451),
                T = t(269300),
                S = t(71775),
                I = t(616918),
                Z = t(3155),
                _ = t(2590),
                L = t(473708),
                A = t(503569),
                D = t.n(A);

            function M(e, n, t, i, r, l, a) {
                try {
                    var o = e[l](a),
                        c = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(c) : Promise.resolve(c).then(i, r)
            }

            function R(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(i, r) {
                        var l = e.apply(n, t);

                        function a(e) {
                            M(l, i, r, a, o, "next", e)
                        }

                        function o(e) {
                            M(l, i, r, a, o, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function G(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function U(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    i.forEach((function(n) {
                        G(e, n, t[n])
                    }))
                }
                return e
            }

            function H(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n && (i = i.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, i)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var J = function(e, n) {
                var t, i, r, l, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function o(l) {
                    return function(o) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r;
                                (i = 0, r) && (l = [2 & l[0], r.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        r = l;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        i = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                            a.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && a.label < r[1]) {
                                            a.label = r[1];
                                            r = l;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2];
                                            a.ops.push(l);
                                            break
                                        }
                                        r[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                l = n.call(e, a)
                            } catch (e) {
                                l = [6, e];
                                i = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, o])
                    }
                }
            };

            function V(e) {
                var n = e.originalScheduledStartTime,
                    r = e.guildEventId,
                    l = e.onClick,
                    s = y.default.fromTimestamp(Math.floor(n.getTime() / _.UF9.SECOND)),
                    u = (0, o.e7)([T.ZP], (function() {
                        return T.ZP.getGuildScheduledEvent(r)
                    })),
                    d = (0, S.Z)(s, null == u ? void 0 : u.id),
                    v = (0, o.e7)([P.Z], (function() {
                        return P.Z.getGuild(null == u ? void 0 : u.guild_id)
                    })),
                    p = (0, o.e7)([O.Z], (function() {
                        return O.Z.getChannel(null == u ? void 0 : u.channel_id)
                    }));
                if (null == u) return null;
                var h = (null != d ? d : {}).is_canceled,
                    f = void 0 !== h && h,
                    b = function(e) {
                        e.stopPropagation();
                        null != v && (0, E.jW)(e, R((function() {
                            var e, n;
                            return J(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(71718), t.e(49518), t.e(71575), t.e(91406), t.e(43244), t.e(54368), t.e(65278), t.e(1441), t.e(46919), t.e(58499)]).then(t.bind(t, 435242))];
                                    case 1:
                                        e = r.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, i.jsx)(n, U({
                                                guildEventId: u.id,
                                                recurrenceId: s,
                                                channel: p,
                                                guild: v
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    };
                return (0, i.jsxs)(c.ClickableContainer, {
                    className: a()(D().container, G({}, D().canceled, f)),
                    onClick: function(e) {
                        e.stopPropagation();
                        f || null == l || l(s)
                    },
                    onContextMenu: b,
                    "aria-label": "",
                    children: [(0, i.jsx)(I.z, {
                        startTime: n.toISOString(),
                        status: f ? Z.p1.CANCELED : Z.p1.SCHEDULED,
                        eventType: u.entity_type,
                        className: D().timeStatus
                    }), f && (0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: D().canceledStatus,
                        children: L.Z.Messages.EVENT_CANCELED
                    }), (0, i.jsx)(c.Tooltip, {
                        text: L.Z.Messages.MORE,
                        position: "top",
                        "aria-label": L.Z.Messages.EDIT,
                        children: function(e) {
                            return (0, i.jsx)(c.Clickable, H(U({}, e), {
                                onClick: b,
                                className: D().iconButton,
                                children: (0, i.jsx)(w.Z, {
                                    width: 20,
                                    height: 20,
                                    className: D().icon
                                })
                            }))
                        }
                    })]
                })
            }
            var B = t(26601),
                z = t(173764),
                W = t(919569),
                X = t.n(W);

            function F(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function K(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    i.forEach((function(n) {
                        F(e, n, t[n])
                    }))
                }
                return e
            }

            function Q(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n && (i = i.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, i)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var Y;
            ! function(e) {
                e[e.BANNER = 0] = "BANNER";
                e[e.THUMBNAIL = 1] = "THUMBNAIL"
            }(Y || (Y = {}));

            function q(e) {
                var n = e.channel,
                    t = e.onClick,
                    l = (0, p.XJ)(n).canManageAllEvents,
                    s = (0, o.e7)([h.Z], (function() {
                        return !n.isGuildVocal() || h.Z.can(_.Plq.CONNECT, n)
                    }), [n]),
                    u = r.useMemo((function() {
                        return (0, d.Z)(n)
                    }), [n]),
                    f = (0, v.KS)(n);
                return (0,
                    i.jsx)(c.Tooltip, {
                    text: L.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !s && null != t,
                    children: function(e) {
                        var r;
                        return (0, i.jsxs)(c.Clickable, Q(K({}, e), {
                            className: a()(X().inline, X().channelContainer, (r = {}, F(r, X().channelContainerEnabled, s && null != t), F(r, X().channelContainerDisabled, !s && null != t), r)),
                            onClick: t,
                            children: [(0, i.jsx)(c.Tooltip, {
                                text: L.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: l && u && s && null != t,
                                children: function(e) {
                                    return null != f ? (0, i.jsx)(f, Q(K({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: X().icon
                                    })) : null
                                }
                            }), (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: X().channelLocation,
                                children: n.name
                            })]
                        }))
                    }
                })
            }

            function $(e) {
                var n = e.guild,
                    t = e.channel,
                    r = e.onJoinClick,
                    l = e.handleLocationClick,
                    o = e.location,
                    s = e.isExternal;
                return e.isHub ? null == n ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                    className: X().inline,
                    children: [(0, i.jsx)(f.Z, {
                        className: X().guildIcon,
                        size: f.Z.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                }) : null != t ? (0, i.jsx)(q, {
                    channel: t,
                    onClick: r
                }) : (0, i.jsxs)(c.Clickable, {
                    className: X().inline,
                    onClick: l,
                    children: [(0, i.jsx)(b.Z, {
                        height: 20,
                        width: 20,
                        className: a()(X().channelContainer, X().icon)
                    }), (0, i.jsx)(c.Text, {
                        className: s ? X().externalLocation : X().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, m.m)(o, !0)
                    })]
                })
            }

            function ee(e) {
                var n, t = e.className,
                    r = e.guild,
                    l = e.channel,
                    o = e.creator,
                    d = e.name,
                    v = e.entityType,
                    p = e.description,
                    h = e.imageLocation,
                    f = void 0 === h ? Y.BANNER : h,
                    b = e.imageSource,
                    m = e.isActive,
                    y = e.isUserLurking,
                    E = e.isJoined,
                    O = void 0 !== E && E,
                    P = e.isMember,
                    w = void 0 !== P && P,
                    T = e.isHub,
                    S = void 0 !== T && T,
                    I = e.speakers,
                    _ = e.speakerCount,
                    A = e.rsvped,
                    D = e.canInvite,
                    M = e.location,
                    R = e.truncate,
                    G = e.onContextMenu,
                    U = e.onJoinClick,
                    H = e.onJoinGuildClick,
                    J = e.onGoToGuildClick,
                    W = e.onRsvpClick,
                    K = e.onStartClick,
                    Q = e.onInviteClick,
                    q = e.onEndClick,
                    ee = e.onClick,
                    ne = e.isNew,
                    te = e.guildEventId,
                    ie = e.eventPreview,
                    re = e.recurrenceRule,
                    le = (0, j.Q)(l, v),
                    ae = v === Z.WX.EXTERNAL,
                    oe = ae ? function(e) {
                        return e.stopPropagation()
                    } : void 0,
                    ce = (0, u.Z)(s.Z.GUILD_EVENT_CARD).analyticsLocations,
                    se = g.Z.useExperiment({
                        guildId: null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : "",
                        location: ce[0]
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    ue = [];
                if (null != re) {
                    var de = (0, x.Ho)(re);
                    ue = (0, x.PJ)(4, de)
                }
                var ve, pe = se && ue.length > 0;
                return (0, i.jsxs)(c.ClickableContainer, {
                    "aria-label": d,
                    onClick: function() {
                        return null == ee ? void 0 : ee()
                    },
                    onContextMenu: G,
                    className: a()(X().card, (ve = {}, F(ve, X().joined, O), F(ve, X().lurking, y), ve), t),
                    children: [(0, i.jsxs)("div", {
                        className: a()(X().padding, F({}, X().isRecurring, ue.length > 0)),
                        children: [f === Y.BANNER && (0, i.jsx)(N.Z, {
                            source: b
                        }), (0, i.jsx)(k.ZP, {
                            creator: o,
                            name: d,
                            description: p,
                            imageSource: f === Y.THUMBNAIL ? b : null,
                            truncate: R,
                            guildId: null == r ? void 0 : r.id,
                            isHub: S,
                            isNew: ne,
                            guildEventId: te,
                            eventPreview: ie
                        }), m && null != r && null != I && _ > 0 && (0, i.jsx)(z.Z, {
                            guild: r,
                            speakers: I,
                            speakerCount: _,
                            className: X().spacing
                        }), (0, i.jsx)("hr", {
                            className: X().divider
                        }), (0, i.jsxs)("div", {
                            className: a()(X().inline, X().footer),
                            children: [(0, i.jsx)($, {
                                guild: r,
                                channel: l,
                                onJoinClick: U,
                                handleLocationClick: oe,
                                location: M,
                                isExternal: ae,
                                isHub: S
                            }), S ? (0, i.jsx)(B.Z, {
                                isActive: m,
                                isUserLurking: y,
                                isMember: w,
                                rsvped: A,
                                onRsvpClick: W,
                                onJoinGuildClick: H,
                                onGoToGuildClick: J,
                                guildName: null == r ? void 0 : r.name,
                                canInvite: D,
                                isChannelPublic: le,
                                onInviteClick: Q
                            }) : (0, i.jsx)(C.ZP, {
                                entityType: v,
                                isJoined: O,
                                isActive: m,
                                isUserLurking: y,
                                rsvped: A,
                                canInvite: D,
                                isChannelPublic: le,
                                onContextMenu: G,
                                onJoinClick: U,
                                onRsvpClick: W,
                                onStartClick: K,
                                onInviteClick: Q,
                                onEndClick: q
                            })]
                        }), pe && (0, i.jsx)("hr", {
                            className: X().divider
                        })]
                    }), pe && (0, i.jsxs)("div", {
                        className: X().recurrences,
                        children: [(0, i.jsx)(c.Heading, {
                            variant: "heading-sm/medium",
                            className: X().heading,
                            children: L.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                        }), ue.map((function(e) {
                            return (0, i.jsx)(V, {
                                originalScheduledStartTime: e,
                                guildEventId: te,
                                onClick: ee
                            }, e.toString())
                        }))]
                    })]
                })
            }
        },
        173764: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var i = t(785893),
                r = (t(667294), t(294184)),
                l = t.n(r),
                a = t(70418),
                o = t(961241),
                c = t(473708),
                s = t(811948),
                u = t.n(s);

            function d(e) {
                var n = e.guild,
                    t = e.speakers,
                    r = e.speakerCount,
                    s = e.className,
                    d = t.slice(0, 5),
                    v = d.map((function(e) {
                        var t, r;
                        return (0, i.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, i.jsx)(a.Avatar, {
                                src: null == e || null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                                size: a.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, i.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, i.jsx)(a.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id)
                    })),
                    p = r - d.length;
                return (0, i.jsxs)("div", {
                    className: l()(u().grid, s),
                    children: [v, p > 0 && (0, i.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, i.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, i.jsx)(o.Z, {
                                height: 12
                            })
                        }), (0, i.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: p
                            })
                        })]
                    })]
                })
            }
        }
    }
]);