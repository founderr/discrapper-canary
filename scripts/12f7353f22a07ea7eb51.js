(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78305], {
        483683: (e, n, r) => {
            e.exports = r.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, r) => {
            e.exports = r.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        79522: (e, n, r) => {
            "use strict";
            r.d(n, {
                AN: () => a,
                LK: () => u,
                TT: () => o
            });
            var t = r(940060),
                i = r(227202),
                l = r(2590),
                o = l.Plq.VIEW_CHANNEL,
                a = t.Z.combine(o, l.Plq.CONNECT),
                u = t.Z.combine(o, i.yP)
        },
        757337: (e, n, r) => {
            "use strict";
            r.r(n);
            r.d(n, {
                default: () => Te
            });
            var t = r(785893),
                i = r(667294),
                l = r(202351),
                o = r(70418),
                a = r(350403),
                u = r(944522),
                c = r(61209),
                s = r(443812),
                d = r(652591),
                f = r(474236),
                v = r(634080),
                h = r(269300),
                b = r(919810),
                p = r(158499),
                g = r(619584),
                m = r(205316),
                y = r(951687),
                E = r(699296),
                j = r(26601),
                x = r(294184),
                N = r.n(x),
                I = r(189865),
                S = r(3155),
                C = r(473708),
                O = r(422978),
                T = r.n(O);

            function _(e) {
                var n = e.onClose,
                    r = e.selectedTab,
                    l = e.onTabSelected,
                    a = e.rsvpCount,
                    u = e.hasBanner,
                    c = e.isHub,
                    s = void 0 !== c && c,
                    d = i.useRef(null);
                i.useEffect((function() {
                    var e, n, r;
                    return null === (e = d.current) || void 0 === e || null === (n = e.ref) || void 0 === n || null === (r = n.blur) || void 0 === r ? void 0 : r.call(n)
                }), []);
                var f = C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: a
                    }),
                    v = [(0, t.jsx)(o.TabBar.Item, {
                        className: T().tabBarItem,
                        id: S.fL.EVENT_INFO,
                        children: C.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                s || v.push((0, t.jsx)(o.TabBar.Item, {
                    className: T().tabBarItem,
                    id: S.fL.RSVP_LIST,
                    children: f
                }, "is-hub"));
                return (0, t.jsxs)("div", {
                    className: T().container,
                    children: [(0, t.jsx)(o.Clickable, {
                        ref: d,
                        onClick: n,
                        className: T().closeButton,
                        "aria-label": C.Z.Messages.CLOSE,
                        children: (0, t.jsx)(I.Z, {
                            className: N()(T().closeIcon, u && T().closeIconBanner)
                        })
                    }), (0, t.jsx)(o.TabBar, {
                        className: T().tabBar,
                        "aria-label": C.Z.Messages.OPTIONS,
                        selectedItem: r,
                        type: "top",
                        onItemSelect: l,
                        children: v
                    })]
                })
            }
            var Z = r(224813),
                w = r(924417),
                P = r(21372),
                A = r(567403),
                M = r(206986),
                k = r(124251),
                L = r(816132),
                R = r(749565),
                G = r(434149),
                U = r(314597),
                D = r(616918),
                V = r(621634),
                B = r(2590),
                H = r(68921),
                F = r.n(H);

            function z(e) {
                var n, r = e.creator,
                    i = e.guildId,
                    a = (0, l.e7)([P.ZP], (function() {
                        return P.ZP.getMember(i, r.id)
                    }), [r, i]);
                return (0, t.jsxs)("div", {
                    className: F().row,
                    children: [(0, t.jsx)(o.Avatar, {
                        size: o.AvatarSizes.SIZE_20,
                        src: r.getAvatarURL(i, 20),
                        "aria-label": null !== (n = null == a ? void 0 : a.nick) && void 0 !== n ? n : R.ZP.getName(r),
                        className: F().icon
                    }), (0, t.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: C.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, n;
                                return (0, t.jsx)(o.Clickable, {
                                    onClick: function() {
                                        return (0, w.m)({
                                            userId: r.id,
                                            guildId: i,
                                            analyticsLocation: {
                                                section: B.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                            }
                                        })
                                    },
                                    className: F().creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, t.jsx)(o.NameWithRole, {
                                        name: null !== (e = null == a ? void 0 : a.nick) && void 0 !== e ? e : R.ZP.getName(r),
                                        color: null !== (n = null == a ? void 0 : a.colorString) && void 0 !== n ? n : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function X(e) {
                var n = e.guild,
                    r = e.onClick,
                    l = e.onClose,
                    a = i.useCallback((function(e) {
                        null == r || r(e);
                        null != r && (null == l || l(e))
                    }), [r, l]),
                    u = (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(k.Z, {
                            guild: n,
                            size: k.Z.Sizes.MINI,
                            active: !0,
                            className: N()(F().guildIcon, F().icon)
                        }), (0, t.jsx)(M.Z, {
                            guild: n,
                            tooltipPosition: "top",
                            tooltipColor: o.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: F().guildBadge
                        }), (0, t.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: F().linkText,
                            children: n.name
                        })]
                    });
                return (0, t.jsx)("div", {
                    className: F().row,
                    children: null != r ? (0, t.jsx)(o.Clickable, {
                        onClick: a,
                        className: F().clickable,
                        role: "link",
                        children: u
                    }) : u
                })
            }

            function W(e) {
                var n = e.userCount,
                    r = e.onClick;
                return (0, t.jsxs)("div", {
                    className: F().row,
                    children: [(0, t.jsx)(L.Z, {
                        width: 20,
                        height: 20,
                        className: F().icon
                    }), (0, t.jsx)(o.Clickable, {
                        onClick: r,
                        className: F().interestedCount,
                        children: (0, t.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: n
                            })
                        })
                    })]
                })
            }

            function Y(e) {
                var n = e.guildEvent,
                    r = e.guild,
                    a = e.channel,
                    u = e.headerId,
                    c = e.onClose,
                    s = e.onClickInterestedCount,
                    d = e.isHub,
                    f = void 0 !== d && d,
                    h = e.containerRef,
                    b = n.user_count,
                    p = n.description,
                    g = (0, l.e7)([A.Z], (function() {
                        return null != A.Z.getGuild(r.id)
                    }), [r.id]),
                    m = i.useCallback((function(e) {
                        e.stopPropagation();
                        null != n && (0, Z.B)(n)
                    }), [n]),
                    y = (0, G.Z)(n);
                i.useEffect((function() {
                    v.Z.getGuildEventUserCounts(r.id);
                    v.Z.getGuildEventsForCurrentUser(r.id)
                }), [r.id]);
                return (0, t.jsxs)("div", {
                    ref: h,
                    children: [(0, t.jsxs)("div", {
                        className: F().header,
                        children: [(0, t.jsx)(D.z, {
                            startTime: n.scheduled_start_time,
                            endTime: n.scheduled_end_time,
                            status: n.status,
                            eventType: n.entity_type
                        }), (0, t.jsx)(o.Heading, {
                            id: u,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: F().title,
                            children: n.name
                        })]
                    }), (0, t.jsxs)("div", {
                        className: F().body,
                        children: [(0, t.jsx)(X, {
                            guild: r,
                            onClick: g ? m : void 0,
                            onClose: c
                        }), (0, t.jsx)(V.Z, {
                            guildScheduledEvent: n,
                            channel: a,
                            onClose: c
                        }), null != b && (0, t.jsx)(W, {
                            userCount: b,
                            onClick: s
                        }), !f && null != y && (0, t.jsx)(z, {
                            creator: y,
                            guildId: r.id
                        }, y.id), null != p && (0, t.jsx)("div", {
                            className: F().description,
                            children: (0, t.jsx)(U.Z, {
                                description: p,
                                truncate: !1,
                                guildId: r.id
                            })
                        })]
                    })]
                })
            }
            var q = r(971402),
                K = r(334835),
                $ = r(832642),
                J = r(736626),
                Q = r(203963),
                ee = r(664625),
                ne = r(491260),
                re = r(436154),
                te = r(500972),
                ie = r.n(te);

            function le(e, n, r, t, i, l, o) {
                try {
                    var a = e[l](o),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(t, i)
            }

            function oe(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var l = e.apply(n, r);

                        function o(e) {
                            le(l, t, i, o, a, "next", e)
                        }

                        function a(e) {
                            le(l, t, i, o, a, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function ae(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function ue(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        ae(e, n, r[n])
                    }))
                }
                return e
            }

            function ce(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }
            var se = function(e, n) {
                var r, t, i, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(l) {
                    return function(a) {
                        return function(l) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & l[0] ? t.return : l[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, l[1])).done) return i;
                                (t = 0,
                                    i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, a])
                    }
                }
            };

            function de(e) {
                var n = e.children;
                return (0, t.jsxs)("div", {
                    className: ie().emptyContainer,
                    children: [(0, t.jsx)($.Z, {
                        children: (0, t.jsx)("div", {
                            className: ie().circle,
                            children: (0, t.jsx)(L.Z, {
                                height: 40,
                                width: 40,
                                className: ie().icon
                            })
                        })
                    }), n]
                })
            }

            function fe() {
                return (0, t.jsx)(de, {
                    children: (0, t.jsx)(o.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: ie().title,
                        children: C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function ve() {
                return (0, t.jsx)(de, {
                    children: (0, t.jsx)(o.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: ie().errorTitle,
                        children: C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function he(e) {
                var n = e.count;
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        className: ie().listRow,
                        children: [(0, t.jsx)("div", {
                            className: N()(ie().listRowCircle, ie().listAvatar),
                            children: (0, t.jsx)(L.Z, {
                                height: 14,
                                width: 14,
                                className: ie().icon
                            })
                        }), (0, t.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: n
                            })
                        })]
                    })
                })
            }

            function be(e) {
                var n, r = e.rsvpUser,
                    i = e.onContextMenu,
                    a = r.user,
                    u = null === (n = r.guild_member) || void 0 === n ? void 0 : n.guildId,
                    c = (0, l.e7)([re.Z, ne.Z, ee.default], (function() {
                        return a.id === ee.default.getId() ? re.Z.getStatus() : ne.Z.getStatus(a.id, u)
                    }), [a.id, u]);
                return (0, t.jsx)(o.Popout, {
                    preload: function() {
                        return (0,
                            J.Z)(a.id, a.getAvatarURL(u, 80), {
                            guildId: u
                        })
                    },
                    renderPopout: function(e) {
                        return (0, t.jsx)(Q.Z, ce(ue({}, e), {
                            userId: a.id,
                            guildId: u
                        }))
                    },
                    position: "left",
                    spacing: 16,
                    children: function(e, n) {
                        var l, u, s = n.isShown;
                        return (0, t.jsxs)(o.Clickable, ce(ue({
                            className: N()(ie().listRow, ie().interactiveRow, ae({}, ie().selected, s)),
                            onContextMenu: function(e) {
                                return i(e, a)
                            }
                        }, e), {
                            children: [(0, t.jsx)(o.Avatar, {
                                src: a.getAvatarURL(null === (l = r.guild_member) || void 0 === l ? void 0 : l.guildId, 24),
                                "aria-label": a.username,
                                size: o.AvatarSizes.SIZE_24,
                                className: ie().listAvatar,
                                status: c
                            }), (0, t.jsx)(K.Z, {
                                user: a,
                                className: ie().listName,
                                discriminatorClass: ie().listDiscriminator,
                                nick: null === (u = r.guild_member) || void 0 === u ? void 0 : u.nick
                            })]
                        }))
                    }
                })
            }

            function pe(e) {
                var n = e.rsvpUsers,
                    r = e.usersNotShownCount,
                    i = void 0 === r ? 0 : r,
                    l = e.onContextMenu;
                return (0, t.jsxs)(o.ScrollerThin, {
                    className: ie().listScroller,
                    children: [n.map((function(e) {
                        return (0, t.jsx)(be, {
                            rsvpUser: e,
                            onContextMenu: l
                        }, e.user.id)
                    })), i > 0 && (0, t.jsx)(he, {
                        count: i
                    })]
                })
            }

            function ge(e) {
                var n = e.children,
                    r = e.style;
                return (0, t.jsx)("div", {
                    className: ie().container,
                    style: null != r ? r : {},
                    children: n
                })
            }

            function me(e) {
                var n = e.children,
                    r = e.height;
                return (0, t.jsx)(ge, {
                    style: {
                        height: r
                    },
                    children: n
                })
            }

            function ye(e) {
                var n, i = e.guildEvent,
                    l = e.rsvpUsers,
                    a = e.loading,
                    u = e.error,
                    c = e.containerHeight;
                if (a && 0 === l.length) return (0, t.jsx)(me, {
                    height: c,
                    children: (0, t.jsx)(o.Spinner, {
                        type: o.Spinner.Type.SPINNING_CIRCLE,
                        className: ie().spinner
                    })
                });
                if (null != u && 0 === l.length) return (0, t.jsx)(me, {
                    height: c,
                    children: (0, t.jsx)(ve, {})
                });
                var s = null !== (n = null == i ? void 0 : i.user_count) && void 0 !== n ? n : 0,
                    d = 0;
                l.length >= S.rC && s > S.rC && (d = Math.max(s - l.length, 0));
                return 0 === l.length ? (0, t.jsx)(me, {
                    height: c,
                    children: (0, t.jsx)(fe, {})
                }) : (0, t.jsx)(ge, {
                    children: (0, t.jsx)(pe, {
                        rsvpUsers: l,
                        onContextMenu: function(e, n) {
                            (0, q.jW)(e, oe((function() {
                                var e, i;
                                return se(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([r.e(40532), r.e(49518), r.e(83329), r.e(71575), r.e(19045), r.e(10848)]).then(r.bind(r, 810848))];
                                        case 1:
                                            e = l.sent(),
                                                i = e.default;
                                            return [2, function(e) {
                                                return (0, t.jsx)(i, ce(ue({}, e), {
                                                    user: n
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        },
                        usersNotShownCount: d
                    })
                })
            }
            var Ee = r(85941),
                je = r(754082),
                xe = r.n(je);

            function Ne(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Ie(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Se(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        Ie(e, n, r[n])
                    }))
                }
                return e
            }

            function Ce(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                l.push(t.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ne(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ne(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Oe(e) {
                var n = e.guildEvent,
                    r = e.guild,
                    i = e.channel,
                    o = e.onActionTaken,
                    a = e.isHub,
                    c = e.isMember,
                    s = e.recurrenceId,
                    d = (0, h.xt)(n),
                    f = (0, l.e7)([h.ZP], (function() {
                        return h.ZP.hasRsvp(n.id, r.id)
                    }), [r.id, n]),
                    v = (0, b.ZP)(n),
                    p = (0, l.e7)([u.Z], (function() {
                        return u.Z.isLurking(r.id)
                    }), [r.id]),
                    m = (0, g.T)(null == i ? void 0 : i.id, n.id),
                    E = (0, Ee.Z)({
                        guild: r,
                        channel: i,
                        guildScheduledEvent: n,
                        isActive: d,
                        rsvped: f,
                        recurrenceId: s,
                        onActionTaken: o
                    }),
                    x = n.entity_type;
                return a ? (0, t.jsx)(j.Z, Se({
                    isActive: d,
                    isUserLurking: p,
                    rsvped: f,
                    isMember: c,
                    isDetailsView: !0,
                    guildName: null == r ? void 0 : r.name,
                    isChannelPublic: m,
                    canInvite: v
                }, E)) : (0, t.jsx)(y.ZP, Se({
                    isActive: d,
                    isUserLurking: p,
                    rsvped: f,
                    isChannelPublic: m,
                    canInvite: v,
                    entityType: x
                }, E))
            }
            const Te = function(e) {
                var n = e.guildScheduledEventId,
                    r = e.parentGuildId,
                    u = e.transitionState,
                    b = e.recurrenceId,
                    g = e.onClose,
                    y = (0, l.e7)([h.ZP], (function() {
                        return h.ZP.getGuildScheduledEvent(n)
                    }), [n]),
                    j = null == y ? void 0 : y.id,
                    x = null == y ? void 0 : y.guild_id,
                    N = (0, p.Z)(x, j),
                    I = N.guild,
                    C = N.isMember,
                    O = (0, a.Z)(r),
                    T = null == y ? void 0 : y.channel_id,
                    Z = (0, l.e7)([c.Z], (function() {
                        return c.Z.getChannel(T)
                    }), [T]),
                    w = (0, s.Dt)(),
                    P = Ce(i.useState(S.fL.EVENT_INFO), 2),
                    A = P[0],
                    M = P[1],
                    k = (0, l.Wu)([h.ZP], (function() {
                        return Object.values(h.ZP.getUsersForGuildEvent(j))
                    }), [j]),
                    L = Ce((0, f.Z)((function() {
                        return v.Z.getGuildEventUsers(null == y ? void 0 : y.id, x)
                    })), 2),
                    R = L[0],
                    G = L[1],
                    U = G.loading,
                    D = G.error;
                i.useEffect((function() {
                    null == y ? g() : d.default.track(B.rMx.OPEN_MODAL, {
                        type: S.zw,
                        guild_id: y.guild_id
                    })
                }), [y, g]);
                var V = i.useRef(null),
                    H = Ce(i.useState(0), 2),
                    F = H[0],
                    z = H[1];
                i.useLayoutEffect((function() {
                    var e, n;
                    z(null !== (n = null == V || null === (e = V.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0)
                }), [V]);
                if (null == y || null == I || !C && !O) return null;
                var X, W = function(e) {
                        if (e !== A) {
                            e === S.fL.RSVP_LIST && R();
                            M(e)
                        }
                    },
                    q = null !== (X = null == y ? void 0 : y.user_count) && void 0 !== X ? X : 0,
                    K = {
                        height: F
                    };
                return (0, t.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.MEDIUM,
                    transitionState: u,
                    "aria-labelledby": w,
                    className: xe().root,
                    children: [null != (null == y ? void 0 : y.image) && (0, t.jsx)(E.Z, {
                        source: (0, m.Z)(y),
                        className: xe().banner
                    }), (0, t.jsx)(_, {
                        onClose: g,
                        selectedTab: A,
                        onTabSelected: W,
                        rsvpCount: q,
                        hasBanner: null != (null == y ? void 0 : y.image),
                        isHub: O
                    }), (0, t.jsx)("div", {
                        className: xe().container,
                        children: (0, t.jsx)(o.ModalContent, {
                            className: xe().contentContainer,
                            style: K,
                            children: (0, t.jsxs)(o.Slides, {
                                activeSlide: A,
                                width: 600,
                                centered: !1,
                                children: [(0, t.jsx)(o.Slide, {
                                    id: S.fL.EVENT_INFO,
                                    children: (0, t.jsx)(Y, {
                                        guildEvent: y,
                                        guild: I,
                                        channel: Z,
                                        headerId: w,
                                        onClose: g,
                                        onClickInterestedCount: function() {
                                            return W(S.fL.RSVP_LIST)
                                        },
                                        isHub: O,
                                        containerRef: V
                                    })
                                }), (0, t.jsx)(o.Slide, {
                                    id: S.fL.RSVP_LIST,
                                    children: (0, t.jsx)(ye, {
                                        guildEvent: y,
                                        rsvpUsers: k,
                                        loading: U,
                                        containerHeight: F,
                                        error: D
                                    })
                                })]
                            })
                        })
                    }), (0, t.jsx)(o.ModalFooter, {
                        className: xe().footer,
                        children: (0, t.jsx)(Oe, {
                            guildEvent: y,
                            isHub: O,
                            isMember: C,
                            guild: I,
                            channel: Z,
                            onActionTaken: g,
                            recurrenceId: b
                        })
                    })]
                })
            }
        },
        621634: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => f
            });
            var t = r(785893),
                i = r(667294),
                l = r(70418),
                o = r(599467),
                a = r(605013),
                u = r(81472),
                c = r(3155),
                s = r(68921),
                d = r.n(s);

            function f(e) {
                var n = e.guildScheduledEvent,
                    r = e.channel,
                    s = e.onClose,
                    f = n.entity_type === c.WX.EXTERNAL,
                    v = i.useCallback((function(e) {
                        return (0, a.Qt)(n, s)(e)
                    }), [n, s]),
                    h = (0, u.u)(n, r);
                if (null == h) return null;
                var b = h.IconComponent,
                    p = h.locationName,
                    g = (0, t.jsxs)(t.Fragment, {
                        children: [null != b && (0, t.jsx)(b, {
                            width: 20,
                            height: 20,
                            className: d().channelIcon
                        }), (0, t.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d().locationText,
                            children: (0, o.m)(p, !0)
                        })]
                    });
                return (0, t.jsx)("div", {
                    className: d().row,
                    children: null != v ? (0, t.jsx)(l.Clickable, {
                        className: f ? d().externalLocation : d().channelLocation,
                        onClick: v,
                        children: g
                    }) : g
                })
            }
        },
        350403: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => o
            });
            var t = r(202351),
                i = r(567403),
                l = r(2590);

            function o(e) {
                return (0, t.e7)([i.Z], (function() {
                    if (null == e) return !1;
                    var n, r = i.Z.getGuild(e);
                    return null !== (n = null == r ? void 0 : r.hasFeature(l.oNc.HUB)) && void 0 !== n && n
                }), [e])
            }
        },
        15970: (e, n, r) => {
            "use strict";
            r.d(n, {
                b: () => i
            });
            var t = r(2590);

            function i(e, n, r, i) {
                var l = null != r ? r : n;
                return null != l && e.can(t.Plq.CREATE_INSTANT_INVITE, l) || null != n && null != n.vanityURLCode || null != (null == i ? void 0 : i.invite_code)
            }
        },
        787193: (e, n, r) => {
            "use strict";
            r.d(n, {
                Gw: () => m,
                XJ: () => g,
                Yl: () => y
            });
            var t = r(667294),
                i = r(940060),
                l = r(202351),
                o = r(897436),
                a = r(848285),
                u = (r(5544), r(682776)),
                c = r(473903),
                s = (r(563135), r(79522)),
                d = r(520453);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function v(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                l.push(t.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = {
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
                b = function(e, n, r, t) {
                    if (null == e) return !1;
                    if (r) return !0;
                    if ("creator_id" in e) return t && null != n && e.creator_id === n.id;
                    if ("userId" in e) return t && null != n && e.userId === n.id;
                    if ("user" in e) {
                        var i;
                        return t && null != n && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === n.id
                    }
                    return !1
                },
                p = function(e) {
                    if (null == e) return [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS];
                    var n = s.TT;
                    e.isGuildStageVoice() ? n = s.LK : e.isGuildVoice() && (n = s.AN);
                    return [i.Z.combine(n, d.Pl.CREATE_EVENTS), i.Z.combine(n, d.Pl.MANAGE_EVENTS)]
                },
                g = function(e) {
                    var n = v(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : p(e), 2),
                        r = n[0],
                        i = n[1],
                        o = v((0, l.Wu)([u.Z], (function() {
                            return [u.Z.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e), u.Z.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e), u.Z.can(r, e), u.Z.can(i, e)]
                        })), 4),
                        s = o[0],
                        f = o[1],
                        g = o[2],
                        m = o[3],
                        y = (0, l.e7)([c.default], (function() {
                            return c.default.getCurrentUser()
                        })),
                        E = t.useCallback((function(e) {
                            return b(e, y, f, s)
                        }), [s, f, y]),
                        j = t.useCallback((function(e) {
                            return b(e, y, m, g)
                        }), [m, g, y]);
                    return null == e ? h : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: g,
                        canManageAllExpressions: f,
                        canManageAllEvents: m,
                        canManageGuildExpression: E,
                        canManageGuildEvent: j
                    }
                },
                m = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default,
                        t = v(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : p(e), 2),
                        i = t[0],
                        l = t[1],
                        o = n.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        s = n.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        f = n.can(i, e),
                        g = n.can(l, e),
                        m = r.getCurrentUser();
                    return null == e ? h : {
                        canCreateExpressions: o,
                        canCreateGuildEvent: f,
                        canManageAllExpressions: s,
                        canManageAllEvents: g,
                        canManageGuildExpression: function(e) {
                            return b(e, m, s, o)
                        },
                        canManageGuildEvent: function(e) {
                            return b(e, m, g, f)
                        }
                    }
                },
                y = function(e) {
                    var n = (0, l.e7)([u.Z], (function() {
                            return u.Z.can(d.Pl.MANAGE_GUILD, e)
                        })),
                        r = (0, o.JY)({
                            guildId: null == e ? void 0 : e.id
                        }).showSettingsToggle;
                    return n && r
                }
        },
        367299: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => o
            });
            var t = r(785893),
                i = (r(667294), r(318715)),
                l = r(785085);

            function o(e) {
                var n = e.children,
                    r = e.confettiLocation;
                return (0, i.ZP)([l.Z], (function() {
                    return l.Z.isEnabled({
                        confettiLocation: r
                    })
                })) ? (0, t.jsx)(t.Fragment, {
                    children: n
                }) : null
            }
        },
        919031: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => u
            });
            var t = r(667294),
                i = r(318715),
                l = r(255875),
                o = r(785085);

            function a(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function u() {
                var e = t.useContext(l.E).createMultipleConfettiAt,
                    n = (0, i.ZP)([o.Z], (function() {
                        return o.Z.getState()
                    })),
                    r = t.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    u = t.useMemo((function() {
                        return {
                            fire: function(t, i, l) {
                                var o, u, c = null != (null == l ? void 0 : l.settings) ? function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var r = null != arguments[n] ? arguments[n] : {},
                                                t = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            t.forEach((function(n) {
                                                a(e, n, r[n])
                                            }))
                                        }
                                        return e
                                    }({}, n, l.settings) : n,
                                    s = r(c);
                                e(t, i, s, (null !== (o = null == l ? void 0 : l.count) && void 0 !== o ? o : c.confettiCount) * (null !== (u = null == l ? void 0 : l.countMultiplier) && void 0 !== u ? u : 1), {
                                    sprite: null == l ? void 0 : l.sprite
                                })
                            }
                        }
                    }), [e, r, n]);
                return u
            }
        },
        832642: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => v
            });
            var t = r(785893),
                i = (r(667294), r(294184)),
                l = r.n(i),
                o = r(473708),
                a = r(300443),
                u = r.n(a),
                c = r(483683),
                s = r.n(c),
                d = r(63685),
                f = r.n(d);

            function v(e) {
                var n = e.className,
                    r = e.children;
                return (0, t.jsxs)("div", {
                    className: l()(u().container, n),
                    children: [(0, t.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: f(),
                        className: l()(u().sparkleIcon, u().sparkleBottom)
                    }), r, (0, t.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s(),
                        className: l()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        457997: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => s
            });
            var t = r(785893),
                i = (r(667294), r(168075)),
                l = r(66541),
                o = r(633878);

            function a(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function u(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function c(e, n) {
                if (null == e) return {};
                var r, t, i = function(e, n) {
                    if (null == e) return {};
                    var r, t, i = {},
                        l = Object.keys(e);
                    for (t = 0; t < l.length; t++) {
                        r = l[t];
                        n.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < l.length; t++) {
                        r = l[t];
                        n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var n = e.width,
                    r = void 0 === n ? 20 : n,
                    i = e.height,
                    l = void 0 === i ? 20 : i,
                    s = e.color,
                    d = void 0 === s ? "currentColor" : s,
                    f = e.foreground,
                    v = c(e, ["width", "height", "color", "foreground"]);
                return (0, t.jsx)("svg", u(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            a(e, n, r[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(v)), {
                    width: r,
                    height: l,
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, t.jsx)("path", {
                            className: f,
                            fill: d,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }), l.T)
        },
        474236: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => c
            });
            var t = r(667294),
                i = r(347365);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function o(e, n, r, t, i, l, o) {
                try {
                    var a = e[l](o),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(t, i)
            }

            function a(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                l.push(t.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = function(e, n) {
                var r, t, i, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(l) {
                    return function(a) {
                        return function(l) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & l[0] ? t.return : l[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, l[1])).done) return i;
                                (t = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, a])
                    }
                }
            };

            function c(e, n) {
                var r, l, c = a(t.useState(!1), 2),
                    s = c[0],
                    d = c[1],
                    f = a(t.useState(null), 2),
                    v = f[0],
                    h = f[1],
                    b = (l = (r = function() {
                        var r, t, l;
                        return u(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    d(!0);
                                    h(null);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    r = o.sent();
                                    d(!1);
                                    h(null);
                                    return [2, r];
                                case 3:
                                    t = o.sent();
                                    l = new i.Hx(t);
                                    null == n || n(l);
                                    h(l);
                                    d(!1);
                                    return [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(t, i) {
                            var l = r.apply(e, n);

                            function a(e) {
                                o(l, t, i, a, u, "next", e)
                            }

                            function u(e) {
                                o(l, t, i, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function() {
                        return l.apply(this, arguments)
                    });
                return [b, {
                    loading: s,
                    error: v
                }]
            }
        }
    }
]);