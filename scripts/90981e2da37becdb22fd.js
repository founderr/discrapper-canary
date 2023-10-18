"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38999], {
        738999: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => z
            });
            var n = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                u = t(202351),
                a = t(575945),
                s = t(70418),
                c = t(971402),
                f = t(327499),
                d = t(74535),
                p = t(265688),
                h = t(396043),
                v = t(722406),
                b = t(664625),
                y = t(21372),
                m = t(567403),
                g = t(443812),
                j = t(985651),
                O = t(96606),
                x = t(652591),
                w = t(348592),
                P = t(566500),
                S = t(259718),
                _ = t(2590),
                I = t(473708),
                N = t(76545),
                E = t.n(N),
                Z = t(427215),
                R = t.n(Z);

            function U(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function C(e, r, t, n, o, i, l) {
                try {
                    var u = e[i](l),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? r(a) : Promise.resolve(a).then(n, o)
            }

            function A(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(r, t);

                        function l(e) {
                            C(i, n, o, l, u, "next", e)
                        }

                        function u(e) {
                            C(i, n, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function k(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function M(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        k(e, r, t[r])
                    }))
                }
                return e
            }

            function D(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function T(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(l = (n = t.next()).done); l = !0) {
                                i.push(n.value);
                                if (r && i.length === r) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return U(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return U(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = function(e, r) {
                var t, n, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = r.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            const z = function(e) {
                var r = e.guildId,
                    i = e.transitionState,
                    N = e.onClose,
                    Z = (0, u.e7)([m.Z], (function() {
                        return m.Z.getGuild(r)
                    }), [r]),
                    U = (0, u.e7)([b.default], (function() {
                        return b.default.getId()
                    })),
                    C = (0,
                        u.e7)([y.ZP], (function() {
                        return y.ZP.getMember(r, U)
                    })),
                    k = T(o.useState([]), 2),
                    z = k[0],
                    F = k[1],
                    H = (0, d.ZP)(),
                    G = (0, g.Dt)();
                o.useEffect((function() {
                    0 !== z.length && x.default.track(_.rMx.PASSPORT_ENTRY_VIEWED, M({
                        role_ids: z.map((function(e) {
                            return e.role_id
                        }))
                    }, (0, h.hH)(r)))
                }), [r, z]);
                o.useEffect((function() {
                    f.Z.getGuildRoleConnectionsConfigurations(r).then((function(e) {
                        return F(e)
                    }))
                }), [r]);
                if (null == Z || null == C) return null;
                var V = Object.values(Z.roles).filter((function(e) {
                    var r;
                    return null === (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections)
                }));
                return (0, n.jsxs)(s.ModalRoot, {
                    transitionState: i,
                    "aria-labelledby": G,
                    className: E().modal,
                    children: [(0, n.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, n.jsx)(P.Z, {
                            className: E().headerIcon,
                            size: 24
                        }), (0, n.jsx)(s.Heading, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: I.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
                        }), (0, n.jsx)(s.ModalCloseButton, {
                            className: E().modalCloseButton,
                            onClick: N
                        })]
                    }), (0, n.jsxs)(s.ModalContent, {
                        className: E().container,
                        children: [(0, n.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: I.Z.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
                                helpdeskArticleUrl: w.Z.getArticleURL(_.BhN.CONNECTION_DETAILS)
                            })
                        }), (0, n.jsx)("div", {
                            className: E().verifiedRoles,
                            children: V.map((function(e) {
                                var i = C.roles.includes(e.id),
                                    u = function(e) {
                                        var t = z.find((function(r) {
                                            return r.role_id === e
                                        }));
                                        if (null == t) return [];
                                        var o = {},
                                            i = !0,
                                            u = !1,
                                            s = void 0;
                                        try {
                                            for (var c, f = t.rules.flat()[Symbol.iterator](); !(i = (c = f.next()).done); i = !0) {
                                                var d = c.value,
                                                    h = void 0;
                                                if (null != d.application_id) {
                                                    var b, y = null === (b = t.applications) || void 0 === b ? void 0 : b[d.application_id];
                                                    h = null != (null == y ? void 0 : y.bot) ? (0, n.jsx)("img", {
                                                        src: new v.Z(y.bot).getAvatarURL(r, 24),
                                                        alt: "",
                                                        className: l()(E().botAvatar, R().avatar)
                                                    }) : null
                                                } else {
                                                    var m = p.Z.get(d.connection_type);
                                                    h = (0, n.jsx)("img", {
                                                        src: (0, a.ap)(H) ? m.icon.lightSVG : m.icon.darkSVG,
                                                        alt: "",
                                                        className: R().avatar
                                                    })
                                                }
                                                null != h && (o["".concat(d.connection_type, ":").concat(d.application_id)] = h)
                                            }
                                        } catch (e) {
                                            u = !0;
                                            s = e
                                        } finally {
                                            try {
                                                i || null == f.return || f.return()
                                            } finally {
                                                if (u) throw s
                                            }
                                        }
                                        return Object.values(o)
                                    }(e.id);
                                return (0, n.jsxs)(s.Clickable, {
                                    className: l()(E().verifiedRole, i ? E().verifiedRoleHasRole : null),
                                    onClick: i ? void 0 : function() {
                                        return function(e, r) {
                                            (0, s.openModalLazy)(A((function() {
                                                var o, i;
                                                return L(this, (function(l) {
                                                    switch (l.label) {
                                                        case 0:
                                                            return [4, Promise.all([t.e(40532), t.e(49978)]).then(t.bind(t, 749978))];
                                                        case 1:
                                                            o = l.sent(), i = o.default;
                                                            return [2, function(t) {
                                                                return (0, n.jsx)(i, M({
                                                                    role: e,
                                                                    guildId: r
                                                                }, t))
                                                            }]
                                                    }
                                                }))
                                            })))
                                        }(e, r)
                                    },
                                    onContextMenu: i ? function(r) {
                                        return function(e, r, o) {
                                            (0, c.jW)(o, A((function() {
                                                var o, i;
                                                return L(this, (function(l) {
                                                    switch (l.label) {
                                                        case 0:
                                                            return [4, t.e(17854).then(t.bind(t, 617854))];
                                                        case 1:
                                                            o = l.sent(), i = o.default;
                                                            return [2, function(t) {
                                                                return (0, n.jsx)(i, D(M({}, t), {
                                                                    roleId: r,
                                                                    onLeaveRole: function() {
                                                                        return f.Z.unassignGuildRoleConnection(e, r)
                                                                    }
                                                                }))
                                                            }]
                                                    }
                                                }))
                                            })))
                                        }(Z.id, e.id, r)
                                    } : void 0,
                                    children: [i ? (0, n.jsx)("div", {
                                        className: E().roleCheckmark,
                                        children: (0, n.jsx)(j.Z, {})
                                    }) : null, (0,
                                        n.jsx)(S.Z, {
                                        guildId: r,
                                        role: e,
                                        size: 24
                                    }), (0, n.jsxs)("div", {
                                        className: E().verifiedRoleNameDescriptionContainer,
                                        children: [(0, n.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            color: "header-primary",
                                            className: E().verifiedRoleName,
                                            children: e.name
                                        }), void 0 !== e.description ? (0, n.jsx)(s.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-secondary",
                                            className: E().verifiedRoleDescription,
                                            children: e.description
                                        }) : null]
                                    }), (0, n.jsx)(O.Z, {
                                        showUserPopout: !1,
                                        guildId: r,
                                        users: u.map((function() {
                                            return null
                                        })),
                                        renderUser: function(e, r, t) {
                                            return (0, n.jsx)(o.Fragment, {
                                                children: u[t]
                                            }, t)
                                        },
                                        max: 3
                                    })]
                                }, e.id)
                            }))
                        })]
                    })]
                })
            }
        },
        259718: (e, r, t) => {
            t.d(r, {
                Z: () => c
            });
            var n = t(785893),
                o = (t(667294), t(547308)),
                i = t(837162),
                l = t(380652),
                u = t(566500),
                a = t(2590);

            function s(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function c(e) {
                var r, t = e.guildId,
                    c = e.role,
                    f = e.size,
                    d = e.className,
                    p = (0, i.p9)({
                        guildId: t,
                        roleId: c.id,
                        size: f
                    });
                return null != p ? (0, n.jsx)(l.Z, function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            s(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    className: d
                }, p)) : (0, n.jsx)(u.Z, {
                    color: null !== (r = c.colorString) && void 0 !== r ? r : (0, o.Rf)(a.p6O),
                    className: d,
                    size: f
                })
            }
        },
        96606: (e, r, t) => {
            t.d(r, {
                Z: () => U,
                u: () => N
            });
            var n = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                u = t(441143),
                a = t.n(u),
                s = t(70418),
                c = t(736626),
                f = t(203963),
                d = t(722406),
                p = t(473903),
                h = t(755914),
                v = t(442535),
                b = t(211482),
                y = t(427215),
                m = t.n(y);

            function g(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function x(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        j(e, r, t[r])
                    }))
                }
                return e
            }

            function w(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function P(e, r) {
                return !r || "object" !== _(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function S(e, r) {
                S = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return S(e, r)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var r = function() {
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
                    var t, n = O(e);
                    if (r) {
                        var o = O(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return P(this, t)
                }
            }
            var N = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function E(e, r) {
                var t = e instanceof d.Z ? e : null != e ? e.user : null;
                return null != t ? t.id : "user-".concat(r)
            }

            function Z() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.SIZE_24;
                switch (e) {
                    case N.SIZE_16:
                        return m().size16;
                    case N.SIZE_24:
                        return m().size24;
                    case N.SIZE_32:
                        return m().size32;
                    case N.SIZE_56:
                        return m().size56;
                    default:
                        return m().size24
                }
            }
            var R = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && S(e, r)
                }(t, e);
                var r = I(t);

                function t() {
                    g(this, t);
                    var e;
                    (e = r.apply(this, arguments)).state = {
                        popoutUserId: null
                    };
                    e._ref = o.createRef();
                    e.defaultRenderUser = function(r, t, o) {
                        var i = e.props,
                            l = i.showUserPopout,
                            u = i.guildId,
                            a = i.size;
                        if (null == r) {
                            if (e.props.showDefaultAvatarsForNullUsers) {
                                var c = (null != o ? o : 0) % v.Z.DEFAULT_AVATARS.length,
                                    f = v.Z.DEFAULT_AVATARS[c];
                                return (0, n.jsx)("img", {
                                    src: f,
                                    alt: "",
                                    className: m().avatar
                                })
                            }
                            return (0, n.jsx)("div", {
                                className: m().emptyUser
                            })
                        }
                        var d = (0, n.jsx)("img", {
                            src: r.getAvatarURL(u, a),
                            alt: r.username,
                            className: m().avatar
                        }, r.id);
                        return l ? (0, n.jsx)(s.Clickable, {
                            className: m().clickableAvatar,
                            onClick: function() {
                                null != e._ref.current && null != r && e.setState({
                                    popoutUserId: r.id
                                })
                            },
                            tabIndex: -1,
                            children: d
                        }, r.id) : d
                    };
                    return e
                }
                var i = t.prototype;
                i.renderUsers = function() {
                    for (var e = this.props, r = e.users, t = e.max, o = e.renderUser, i = void 0 === o ? this.defaultRenderUser : o, l = e.size, u = e.extraDetail, a = [], s = r.length === t ? r.length : t - 1, c = this.renderMoreUsers(s), f = 0; f < s && f < r.length;) {
                        var d, p = null == c && null == u && f === r.length - 1,
                            h = i(r[f], p, f);
                        a.push(p ? (0, n.jsx)("div", {
                            className: m().avatarContainer,
                            children: h
                        }, E(null !== (d = r[f]) && void 0 !== d ? d : null, f)) : (0, n.jsx)(b.ZP, {
                            className: m().avatarContainerMasked,
                            height: l,
                            width: l,
                            mask: b.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: h
                        }, E(r[f], f)));
                        f++
                    }
                    null != u ? a.push(u) : null != c && a.push(c);
                    return a
                };
                i.renderMoreUsers = function(e) {
                    var r = this.props,
                        t = r.max,
                        i = r.count,
                        l = r.hideMoreUsers,
                        u = r.renderMoreUsers,
                        a = r.users,
                        s = Math.min(e, a.length);
                    if (!l)
                        if (null != i) {
                            if (i >= t) return (0, n.jsx)(o.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (i > a.length) {
                                var c = i - a.length;
                                return (0, n.jsx)(o.Fragment, {
                                    children: u("+".concat(c), c)
                                }, "more-users")
                            }
                        } else if (s < a.length) {
                        var f = Math.min(a.length - s, 99);
                        return (0,
                            n.jsx)(o.Fragment, {
                            children: u("+".concat(f), f)
                        }, "more-users")
                    }
                };
                i.renderIcon = function() {
                    return this.props.renderIcon ? (0, n.jsx)(h.Z, {
                        foreground: m().foreground,
                        className: m().icon
                    }) : null
                };
                i.render = function() {
                    var e = this,
                        r = this.props,
                        t = r.className,
                        o = r.size,
                        i = r.users,
                        u = r.guildId,
                        d = r.showUserPopout,
                        h = r.useFallbackUserForPopout,
                        v = this.state.popoutUserId,
                        b = i.find((function(e) {
                            return null != e && e.id === v
                        })),
                        y = h && null == p.default.getUser(v);
                    return (0, n.jsx)(s.Popout, {
                        position: "right",
                        preload: null == b ? void 0 : function() {
                            return (0, c.Z)(b.id, b.getAvatarURL(u, 80), {
                                guildId: u
                            })
                        },
                        shouldShow: !0 === d && null != v,
                        fixed: !0,
                        renderPopout: function(r) {
                            a()(null != v, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null");
                            return (0, n.jsx)(f.Z, w(x(w(x({}, e.props), {
                                user: y && null != b ? b : void 0
                            }), r), {
                                userId: v,
                                guildId: e.props.guildId
                            }))
                        },
                        onRequestClose: function() {
                            return e.setState({
                                popoutUserId: null
                            })
                        },
                        children: function(r) {
                            return (0, n.jsxs)("div", w(x({
                                className: l()(t, m().container, Z(o)),
                                ref: e._ref
                            }, r), {
                                children: [e.renderIcon(), e.renderUsers()]
                            }))
                        }
                    })
                };
                return t
            }(o.PureComponent);
            R.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, n.jsx)("div", {
                        className: m().moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: N.SIZE_24
            };
            const U = R
        }
    }
]);