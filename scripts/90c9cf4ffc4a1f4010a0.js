"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [49978], {
        461557: (e, n, t) => {
            t.d(n, {
                sE: () => s,
                L_: () => d,
                nj: () => C
            });
            var r = t(281110),
                o = t(744564),
                i = t(302685),
                a = t(2590);

            function l(e, n, t, r, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function a(e) {
                            l(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            l(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = function(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function s(e, n) {
                r.ZP.get({
                    url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n)
                }).then((function(e) {
                    var t = [];
                    e.body.length > 0 && (t = e.body.map((function(e) {
                        return e.map((function(e) {
                            return {
                                connectionType: e.connection_type,
                                connectionMetadataField: e.connection_metadata_field,
                                applicationId: e.application_id,
                                operator: e.operator,
                                value: e.value
                            }
                        }))
                    })));
                    o.Z.dispatch({
                        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                        roleId: n,
                        roleConnectionConfigurations: t
                    })
                })).catch((function() {}))
            }

            function d(e, n, t) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c((function(e, n, t) {
                    var l, c, s;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                l = t.map((function(e) {
                                    return e.map((function(e) {
                                        return {
                                            connection_type: e.connectionType,
                                            connection_metadata_field: e.connectionMetadataField,
                                            application_id: e.applicationId,
                                            operator: e.operator,
                                            value: e.value
                                        }
                                    }))
                                }));
                                return [4, r.ZP.put({
                                    url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
                                    body: 0 === l.length ? [] : l,
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    var n = [];
                                    e.body.length > 0 && (n = e.body.map((function(e) {
                                        return e.map((function(e) {
                                            return {
                                                connectionType: e.connection_type,
                                                connectionMetadataField: e.connection_metadata_field,
                                                applicationId: e.application_id,
                                                operator: e.operator,
                                                value: e.value
                                            }
                                        }))
                                    })));
                                    return n
                                }))];
                            case 1:
                                c = u.sent();
                                return [4, (0, i.H)(e, n, !1)];
                            case 2:
                                null != (s = u.sent()) && o.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                                    guildId: e,
                                    roleId: n,
                                    count: s
                                });
                                o.Z.dispatch({
                                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                                    roleId: n,
                                    roleConnectionConfigurations: c
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function C() {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = c((function() {
                    return u(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: a.ANM.APPLICATION_USER_ROLE_CONNECTIONS
                                })];
                            case 1:
                                return [2, e.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        749978: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => ue
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                a = t.n(i),
                l = t(441143),
                c = t.n(l),
                u = t(496486),
                s = t.n(u),
                d = t(202351),
                f = t(795308),
                C = t(575945),
                N = t(304548),
                p = t(579344),
                h = t(327499),
                O = t(396179),
                E = t(385028),
                _ = t(74535),
                T = t(265688),
                v = t(396043),
                y = t(318277),
                m = t(344832),
                S = t(967783),
                b = t(384411),
                x = t(722406),
                g = t(664625),
                A = t(61209),
                I = t(629223),
                M = t(21372),
                j = t(682776),
                R = t(609853),
                L = t(718831),
                w = t(621329),
                D = t(6171),
                P = t(386991),
                U = t(652591),
                Z = t(461557),
                G = t(53645),
                k = t(491984),
                B = t(259718),
                H = t(497842),
                F = t(338935),
                V = t(678005),
                K = t(2590),
                Y = t(473708),
                Q = t(989169),
                z = t.n(Q);

            function q(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function W(e, n, t, r, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function X(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function a(e) {
                            W(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            W(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function $(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function J(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        $(e, n, t[n])
                    }))
                }
                return e
            }

            function ee(e, n) {
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

            function ne(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return q(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return q(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var te, re = function(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function oe(e) {
                var n = e.platformType,
                    t = e.className,
                    o = (0, _.ZP)(),
                    i = T.Z.get(n);
                return (0, r.jsx)("img", {
                    src: (0, C.ap)(o) ? i.icon.lightSVG : i.icon.darkSVG,
                    alt: "",
                    className: a()(z().platformIcon, t)
                })
            }

            function ie(e) {
                var n = e.channel,
                    t = e.className,
                    o = (0, m.KS)(n);
                return (0, r.jsxs)("div", {
                    className: a()(z().channelName, t),
                    children: [null != o ? (0, r.jsx)(o, {
                        className: z().channelNameIcon
                    }) : null, (0, r.jsx)(N.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-normal",
                        className: z().channelNameText,
                        children: n.name
                    })]
                })
            }

            function ae(e) {
                var n, t = e.connectionType,
                    o = e.connectionMetadataField,
                    i = e.operator,
                    a = e.value,
                    l = e.result,
                    c = e.description,
                    u = null;
                if (null != c) switch (i) {
                    case V.iO.LESS_THAN:
                        u = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(a) - 1)
                        });
                        break;
                    case V.iO.GREATER_THAN:
                        u = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(a) + 1)
                        });
                        break;
                    default:
                        u = c
                } else {
                    var s;
                    switch (i) {
                        case V.iO.EQUAL:
                            s = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE;
                            t === K.ABu.PAYPAL && o === V.PC.PAYPAL_VERIFIED && (s = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
                            break;
                        case V.iO.NOT_EQUAL:
                            s = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
                            break;
                        case V.iO.LESS_THAN:
                            s = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
                            break;
                        case V.iO.GREATER_THAN:
                            s = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
                            break;
                        case void 0:
                        case null:
                            return null
                    }
                    if (null == (u = (0, G.n_)({
                            connectionType: t,
                            connectionMetadataField: o,
                            operator: i,
                            operatorText: s,
                            value: a
                        }))) return null
                }
                n = l ? "header-secondary" : "text-danger";
                return (0, r.jsx)(N.Text, {
                    variant: "text-xs/normal",
                    color: n,
                    className: z().connectionsCheck,
                    children: u
                })
            }

            function le(e) {
                var n = e.eligibilityStatesGroups,
                    t = e.onPlatformConnect,
                    i = e.onPlatformConnected,
                    l = ne(o.useState({}), 2),
                    u = l[0],
                    d = l[1],
                    C = ne(o.useState(0), 2),
                    p = C[0],
                    h = C[1],
                    O = ne(o.useState(null), 2),
                    _ = O[0],
                    v = O[1],
                    y = ne(o.useState(null), 2),
                    m = y[0],
                    S = y[1],
                    b = o.useMemo((function() {
                        return s().flatten(n)
                    }), [n]),
                    g = o.useMemo((function() {
                        return s().groupBy(b, (function(e) {
                            return "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")
                        }))
                    }), [b]);
                o.useEffect((function() {
                    return h(Date.now())
                }), [b]);
                o.useEffect((function() {
                    if (null != _) {
                        var e = g["".concat(_).concat(null != m ? ":".concat(m.id) : "")];
                        if (null != e) {
                            e.every((function(e) {
                                return e.result
                            })) && i(_, m)
                        }
                    }
                }), [g, _, m, i]);
                var A = (0, N.useToken)(f.Z.unsafe_rawColors.GREEN_330).hex();
                return (0, r.jsx)(r.Fragment, {
                    children: Object.keys(g).sort((function(e, n) {
                        var t = g[e].every((function(e) {
                                return e.result
                            })),
                            r = g[n].every((function(e) {
                                return e.result
                            }));
                        return !0 === t && !1 === r ? 1 : !1 === t && !0 === r ? -1 : 0
                    })).map((function(e) {
                        var n, o, i, l = g[e],
                            s = l.find((function(e) {
                                return null == e.operator
                            })),
                            f = l.filter((function(e) {
                                return null != e.operator
                            })),
                            C = (null == s || s.result) && f.every((function(e) {
                                return e.result
                            })),
                            h = l.find((function(e) {
                                return null != e.application
                            })),
                            O = T.Z.get(e),
                            _ = null == h ? void 0 : h.application,
                            y = null != (null == _ ? void 0 : _.bot) ? new x.Z(_.bot) : null;
                        G.SJ.includes(null !== (n = null == _ ? void 0 : _.id) && void 0 !== n ? n : "") ? o = (0, r.jsx)(k.Z, {
                            className: z().botTag,
                            color: A,
                            size: 16
                        }) : null != y && (o = (0, r.jsx)(R.Z, {
                            className: z().botTag,
                            verified: y.isVerifiedBot()
                        }));
                        var m, b, I, M, j = u[null !== (i = null == O ? void 0 : O.type) && void 0 !== i ? i : V.Kt],
                            P = !C && null != j && j <= p;
                        m = C ? (0, r.jsx)(w.Z, {
                            className: z().connectionsChecksGroupCheckmark
                        }) : P ? (0, r.jsx)(N.Button, {
                            size: N.Button.Sizes.TINY,
                            look: N.Button.Looks.LINK,
                            color: N.Button.Colors.LINK,
                            className: z().connectionsChecksGroupRetryButton,
                            children: Y.Z.Messages.RETRY
                        }) : (0, r.jsx)(L.Z, {
                            direction: L.Z.Directions.RIGHT,
                            className: z().connectionsChecksGroupCaret
                        });
                        (null == O ? void 0 : O.type) === K.ABu.STEAM && (b = Y.Z.Messages.CONNECTIONS_STEAM_TOOLTIP);
                        return (0, r.jsxs)(N.Clickable, {
                            className: a()(z().connectionsChecksGroup, C ? z().connectionsChecksGroupPassed : null),
                            onClick: C ? void 0 : function() {
                                return function(e, n) {
                                    (0, H.Z)(e, "Verified Roles Connect Accounts Modal", null == n ? void 0 : n.role_connections_verification_url);
                                    d(ee(J({}, u), $({}, e, Date.now())));
                                    v(e);
                                    S(null != n ? n : null);
                                    t()
                                }(null !== (I = null == O ? void 0 : O.type) && void 0 !== I ? I : V.Kt, _)
                            },
                            children: [!C && P ? (0, r.jsx)("div", {
                                className: z().connectionsChecksGroupRequirementsNotMet,
                                children: (0, r.jsx)(N.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
                                })
                            }) : null, null != O ? (0, r.jsx)(oe, {
                                platformType: O.type
                            }) : null, null != y ? (0, r.jsx)(E.Z, {
                                user: y
                            }) : null, (0, r.jsxs)("div", {
                                className: z().connectionsChecksGroupTextContainer,
                                children: [(0,
                                    r.jsxs)("div", {
                                    className: z().connectionsChecksGroupTextNameContainer,
                                    children: [(0, r.jsx)(N.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: null !== (M = null == O ? void 0 : O.name) && void 0 !== M ? M : null == _ ? void 0 : _.name
                                    }), o, null != b ? (0, r.jsx)(N.Tooltip, {
                                        text: b,
                                        children: function(e) {
                                            return (0, r.jsx)(D.Z, ee(J({}, e), {
                                                className: z().connectionsChecksGroupTextNameInfoIcon
                                            }))
                                        }
                                    }) : null]
                                }), f.map((function(e) {
                                    var n = e.connection_type,
                                        t = e.connection_metadata_field,
                                        o = e.operator,
                                        i = e.value,
                                        a = e.result,
                                        l = e.description;
                                    c()(null != t, "connectionMetadataField is null");
                                    c()(null != o, "operator is null");
                                    c()(null != i, "value is null");
                                    return (0, r.jsx)(ae, {
                                        connectionType: n,
                                        connectionMetadataField: t,
                                        operator: o,
                                        value: i,
                                        result: a,
                                        description: l
                                    }, t)
                                }))]
                            }), m]
                        }, e)
                    }))
                })
            }

            function ce(e) {
                var n = e.account,
                    t = e.setShowPreviewInvisibleIcon,
                    i = e.setShowPreviewMetadata,
                    a = ne(o.useState(n.friendSync), 2),
                    l = a[0],
                    c = a[1],
                    u = ne(o.useState(n.showActivity), 2),
                    s = u[0],
                    d = u[1],
                    f = ne(o.useState(1 === n.metadataVisibility), 2),
                    C = f[0],
                    h = f[1],
                    O = ne(o.useState(1 === n.visibility), 2),
                    E = O[0],
                    _ = O[1];
                o.useEffect((function() {
                    t(!E);
                    i(C)
                }), []);
                var v, y, m, S = T.Z.get(n.type);
                K.BFP.has(n.type) && (v = (0, r.jsx)(N.FormSwitch, {
                    className: z().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: l,
                    onChange: function(e) {
                        c(e);
                        p.Z.setFriendSync(n.type, n.id, e)
                    },
                    children: (0, r.jsx)(N.Text, {
                        variant: "text-sm/semibold",
                        children: Y.Z.Messages.SYNC_FRIENDS
                    })
                }));
                K.vbS.has(n.type) && (y = (0, r.jsx)(N.FormSwitch, {
                    className: z().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: s,
                    onChange: function(e) {
                        d(e);
                        p.Z.setShowActivity(n.type, n.id, e)
                    },
                    children: (0, r.jsx)(N.Text, {
                        variant: "text-sm/semibold",
                        children: Y.Z.Messages.DISPLAY_ACTIVITY.format({
                            platform: S.name
                        })
                    })
                }));
                !0 === S.hasMetadata && (m = (0, r.jsx)(N.FormSwitch, {
                    className: z().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: C,
                    disabled: !E,
                    onChange: function(e) {
                        i(e);
                        h(e);
                        p.Z.setMetadataVisibility(n.type, n.id, e ? 1 : 0)
                    },
                    children: (0, r.jsx)(N.Text, {
                        variant: "text-sm/semibold",
                        children: Y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
                    })
                }));
                return (0, r.jsxs)("div", {
                    className: z().accountConnectedPrivacyOptionsContainer,
                    children: [(0, r.jsx)(N.FormSwitch, {
                        className: z().accountConnectedPrivacyOptionsSwitchItem,
                        hideBorder: !0,
                        value: E,
                        onChange: function(e) {
                            t(!e);
                            _(e);
                            p.Z.setVisibility(n.type, n.id, e ? 1 : 0)
                        },
                        children: (0, r.jsx)(N.Text, {
                            variant: "text-sm/semibold",
                            children: Y.Z.Messages.DISPLAY_ON_PROFILE
                        })
                    }), m, y, v]
                })
            }! function(e) {
                e[e.CHECKS_REQUIRED = 0] = "CHECKS_REQUIRED";
                e[e.ACCOUNT_CONNECTED = 1] = "ACCOUNT_CONNECTED";
                e[e.ROLE_GRANTED = 2] = "ROLE_GRANTED"
            }(te || (te = {}));

            function ue(e) {
                var n = e.transitionState,
                    t = e.onClose,
                    i = e.guildId,
                    a = e.role,
                    l = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        null == t || t();
                        e && (0, N.closeModal)(F.s$, N.DEFAULT_MODAL_CONTEXT)
                    },
                    u = function() {
                        l(!0);
                        O.Z.open(K.oAB.AUTHORIZED_APPS)
                    },
                    s = function() {
                        l(!0);
                        O.Z.open(K.oAB.CONNECTIONS)
                    },
                    f = function() {
                        U.default.track(K.rMx.PASSPORT_CHALLENGE_STARTED, J({
                            role_id: a.id
                        }, (0, v.hH)(i)))
                    },
                    C = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        pe(e);
                        Ee(n);
                        m(te.ACCOUNT_CONNECTED);
                        null != n && (0, Z.nj)().then((function(e) {
                            ve(e)
                        })).catch((function() {}))
                    },
                    p = ne(o.useState(te.CHECKS_REQUIRED), 2),
                    E = p[0],
                    m = p[1],
                    x = ne(o.useState(null), 2),
                    R = x[0],
                    L = x[1],
                    w = ne(o.useState(!1), 2),
                    D = w[0],
                    G = w[1],
                    k = ne(o.useState(!0), 2),
                    H = k[0],
                    V = k[1],
                    Q = ne(o.useState(!1), 2),
                    q = Q[0],
                    W = Q[1],
                    $ = ne(o.useState(!0), 2),
                    ee = $[0],
                    oe = $[1],
                    ae = ne(o.useState(!1), 2),
                    ue = ae[0],
                    se = ae[1],
                    de = (0, d.e7)([I.Z], (function() {
                        return I.Z.getAccounts()
                    })),
                    fe = (0, d.e7)([g.default], (function() {
                        return g.default.getId()
                    })),
                    Ce = ne(o.useState(null), 2),
                    Ne = Ce[0],
                    pe = Ce[1],
                    he = ne(o.useState(null), 2),
                    Oe = he[0],
                    Ee = he[1],
                    _e = ne(o.useState(null), 2),
                    Te = _e[0],
                    ve = _e[1],
                    ye = (0, _.ZP)(),
                    me = (0, d.e7)([b.default], (function() {
                        return b.default.locale
                    })),
                    Se = (0, d.e7)([M.ZP], (function() {
                        return M.ZP.getMember(i, fe)
                    })),
                    be = (0, d.e7)([A.Z], (function() {
                        return A.Z.getMutableGuildChannelsForGuild(i)
                    })),
                    xe = Object.values(be).filter((function(e) {
                        return j.Z.can(K.Plq.VIEW_CHANNEL, e) && j.Z.can(K.Plq.SEND_MESSAGES, e) && (0, y.Z)(e).includes(a)
                    }));
                o.useEffect((function() {
                    h.Z.fetchGuildRoleConnectionsEligibility(i, a.id).then((function(e) {
                        L(e);
                        G(function(e) {
                            return e.some((function(e) {
                                return e.every((function(e) {
                                    return e.result
                                }))
                            }))
                        }(e));
                        V(!1)
                    }))
                }), [i, a.id, de]);
                o.useEffect((function() {
                    U.default.track(K.rMx.PASSPORT_CHALLENGE_VIEWED, J({
                        role_id: a.id
                    }, (0, v.hH)(i)))
                }), [i, a.id]);
                o.useEffect((function() {
                    if (q && null != Se && Se.roles.includes(a.id)) {
                        W(!1);
                        xe.length > 0 ? m(te.ROLE_GRANTED) : null == t || t();
                        U.default.track(K.rMx.PASSPORT_CHALLENGE_FINISHED, J({
                            role_id: a.id
                        }, (0, v.hH)(i)))
                    }
                }), [q, xe.length, Se, i, a.id, t]);

                function ge() {
                    return (ge = X((function() {
                        return re(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    W(!0);
                                    return [4, h.Z.assignGuildRoleConnection(i, a.id)];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return (0, r.jsxs)(N.ModalRoot, {
                    size: N.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-label": Y.Z.Messages.CONNECT_ACCOUNT_TITLE,
                    className: z().modalRoot,
                    children: [function() {
                        switch (E) {
                            case te.CHECKS_REQUIRED:
                                return (0, r.jsxs)(N.ModalHeader, {
                                    className: z().header,
                                    separator: !1,
                                    children: [(0, r.jsx)("div", {
                                        className: z().headerText,
                                        children: (0, r.jsx)(N.Heading, {
                                            variant: "heading-xl/extrabold",
                                            children: Y.Z.Messages.CONNECT_ACCOUNT_TITLE
                                        })
                                    }), (0, r.jsx)(N.ModalCloseButton, {
                                        onClick: function() {
                                            return l()
                                        }
                                    })]
                                });
                            case te.ACCOUNT_CONNECTED:
                                var e, n;
                                c()(null != Ne, "lastPlatformConnected is null");
                                var t = null !== (n = null == Oe ? void 0 : Oe.name) && void 0 !== n ? n : null === (e = T.Z.get(Ne)) || void 0 === e ? void 0 : e.name;
                                return (0, r.jsxs)(N.ModalHeader, {
                                    className: z().header,
                                    separator: !1,
                                    children: [(0, r.jsx)(N.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: z().headerText,
                                        children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                                            platformName: t
                                        })
                                    }), (0,
                                        r.jsx)(N.ModalCloseButton, {
                                        onClick: function() {
                                            return l()
                                        }
                                    })]
                                });
                            case te.ROLE_GRANTED:
                                return (0, r.jsxs)(N.ModalHeader, {
                                    className: z().header,
                                    separator: !1,
                                    children: [(0, r.jsx)(N.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: z().headerText,
                                        children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
                                    }), (0, r.jsx)(N.ModalCloseButton, {
                                        onClick: function() {
                                            return l(!0)
                                        }
                                    })]
                                });
                            default:
                                return null
                        }
                    }(), (0, r.jsx)(N.Sequencer, {
                        step: E,
                        steps: [te.CHECKS_REQUIRED, te.ACCOUNT_CONNECTED, te.ROLE_GRANTED],
                        children: function() {
                            switch (E) {
                                case te.CHECKS_REQUIRED:
                                    var e = null != R && R.length > 1;
                                    return (0, r.jsx)(N.ModalContent, {
                                        children: H || null == R ? (0, r.jsx)(N.Spinner, {
                                            className: z().connectionsChecksGroups
                                        }) : (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(N.Text, {
                                                variant: "text-md/medium",
                                                color: "header-secondary",
                                                children: e ? Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                                            }), (0, r.jsx)(N.ScrollerThin, {
                                                className: z().connectionsChecksGroups,
                                                children: (0, r.jsx)(le, {
                                                    eligibilityStatesGroups: R,
                                                    onPlatformConnect: f,
                                                    onPlatformConnected: C
                                                })
                                            }), (0, r.jsx)(N.Text, {
                                                variant: "text-xs/normal",
                                                className: z().footerText,
                                                color: "header-secondary",
                                                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                    privacyPolicyUrl: K.EYA.PRIVACY,
                                                    onAuthorizedApplicationsClick: function() {
                                                        return u()
                                                    },
                                                    onConnectionsClick: function() {
                                                        return s()
                                                    }
                                                })
                                            })]
                                        })
                                    });
                                case te.ACCOUNT_CONNECTED:
                                    c()(null != Ne, "lastPlatformConnected is null");
                                    var n = de.find((function(e) {
                                            var n = e.type;
                                            return Ne === n
                                        })),
                                        t = null == Te ? void 0 : Te.find((function(e) {
                                            return e.application.id === (null == Oe ? void 0 : Oe.id)
                                        }));
                                    return (0, r.jsxs)(N.ModalContent, {
                                        children: [(0, r.jsx)(N.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                privacyPolicyUrl: K.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: function() {
                                                    return u()
                                                },
                                                onConnectionsClick: function() {
                                                    return s()
                                                }
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: z().accountConnectedContainer,
                                            children: null == n && null == t ? (0, r.jsx)(N.Spinner, {
                                                className: z().accountConnectedLoading
                                            }) : (0, r.jsxs)(r.Fragment, {
                                                children: [null != n ? (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsxs)("div", {
                                                        className: z().accountConnectedContainerChild,
                                                        children: [(0, r.jsx)(N.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, r.jsx)(S.E3, {
                                                            connectedAccount: n,
                                                            userId: fe,
                                                            theme: ye,
                                                            locale: me,
                                                            className: z().accountConnectedPreviewConnectedUserAccount,
                                                            showMetadata: ee,
                                                            showInvisibleIcon: ue
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: z().accountConnectedContainerChild,
                                                        children: [(0, r.jsx)(N.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                                                        }), (0, r.jsx)(ce, {
                                                            account: n,
                                                            setShowPreviewInvisibleIcon: se,
                                                            setShowPreviewMetadata: oe
                                                        })]
                                                    })]
                                                }) : null, null != t ? (0, r.jsxs)("div", {
                                                    className: z().accountConnectedContainerChild,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: z().accountConnectedHeader,
                                                        children: [(0, r.jsx)(N.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, r.jsx)(N.Tooltip, {
                                                            text: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                                                            children: function(e) {
                                                                return (0, r.jsx)(P.Z, J({}, e))
                                                            }
                                                        })]
                                                    }), (0, r.jsx)(S.tH, {
                                                        applicationRoleConnection: t,
                                                        className: z().accountConnectedPreviewConnectedUserAccount,
                                                        locale: me
                                                    })]
                                                }) : null]
                                            })
                                        })]
                                    });
                                case te.ROLE_GRANTED:
                                    return (0, r.jsxs)(N.ModalContent, {
                                        children: [(0, r.jsxs)("div", {
                                            className: z().roleGranted,
                                            children: [(0, r.jsx)(B.Z, {
                                                guildId: i,
                                                className: z().verifiedIcon,
                                                role: a,
                                                size: 24
                                            }), (0, r.jsx)(N.Text, {
                                                variant: "text-lg/semibold",
                                                color: "header-primary",
                                                className: z().roleGrantedName,
                                                children: a.name
                                            })]
                                        }), (0, r.jsx)(N.ScrollerThin, {
                                            className: z().channelsGranted,
                                            children: xe.map((function(e) {
                                                return (0, r.jsx)(ie, {
                                                    channel: e
                                                }, e.id)
                                            }))
                                        })]
                                    });
                                default:
                                    return null
                            }
                        }()
                    }), function() {
                        var e, n = null !== (e = null == R ? void 0 : R.flat().some((function(e) {
                            return null == e.application_id
                        }))) && void 0 !== e && e;
                        switch (E) {
                            case te.CHECKS_REQUIRED:
                                return (0, r.jsxs)(N.ModalFooter, {
                                    children: [(0, r.jsx)(N.Button, {
                                        color: N.ButtonColors.BRAND,
                                        onClick: function() {
                                            return function() {
                                                return ge.apply(this, arguments)
                                            }()
                                        },
                                        disabled: H || !D || q,
                                        children: Y.Z.Messages.FINISH
                                    }), n ? (0, r.jsx)("div", {
                                        className: z().manageConnectionsFooterButton,
                                        children: (0, r.jsx)(N.Button, {
                                            look: N.ButtonLooks.LINK,
                                            color: N.ButtonColors.LINK,
                                            onClick: s,
                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                });
                            case te.ACCOUNT_CONNECTED:
                                return (0, r.jsx)(N.ModalFooter, {
                                    children: (0, r.jsx)(N.Button, {
                                        color: N.ButtonColors.BRAND,
                                        onClick: function() {
                                            return m(te.CHECKS_REQUIRED)
                                        },
                                        children: Y.Z.Messages.DONE
                                    })
                                });
                            default:
                                return (0, r.jsxs)(N.ModalFooter, {
                                    children: [(0, r.jsx)(N.Button, {
                                        color: N.ButtonColors.BRAND,
                                        onClick: function() {
                                            return l(!0)
                                        },
                                        children: Y.Z.Messages.CLOSE
                                    }), n ? (0, r.jsx)("div", {
                                        className: z().manageConnectionsFooterButton,
                                        children: (0, r.jsx)(N.Button, {
                                            look: N.ButtonLooks.LINK,
                                            color: N.ButtonColors.LINK,
                                            onClick: s,
                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                })
                        }
                    }()]
                })
            }
        },
        302685: (e, n, t) => {
            t.d(n, {
                E: () => p,
                H: () => _
            });
            var r = t(5387),
                o = t.n(r),
                i = t(281110),
                a = t(744564),
                l = t(327499),
                c = t(664731),
                u = t(2590);

            function s(e, n, t, r, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function d(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function a(e) {
                            s(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            s(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var f = function(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function C(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = d((function(e) {
                    var n, t;
                    return f(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                                    guildId: e
                                });
                                return [4, i.ZP.get({
                                    url: u.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
                                })];
                            case 1:
                                n = r.sent();
                                t = n.body;
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                                    guildId: e,
                                    roleMemberCount: t
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                                    guildId: e
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = d((function(e) {
                    return f(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return c.Z.shouldFetch(e) ? [4, C(e)] : [3, 2];
                            case 1:
                                n.sent();
                                n.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var O = new(o())({
                maxAge: 1e4
            });

            function E(e, n) {
                return i.ZP.get({
                    url: u.ANM.GUILD_ROLE_MEMBER_IDS(e, n)
                }).then((function(n) {
                    l.Z.requestMembersById(e, n.body, !1);
                    return n.body.length
                }))
            }

            function _(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = "".concat(e, "-").concat(n);
                if (!t || null == O.get(r)) {
                    O.set(r, !0);
                    return E(e, n)
                }
                return Promise.resolve(null)
            }
        },
        664731: (e, n, t) => {
            t.d(n, {
                Z: () => N
            });
            var r = t(202351),
                o = t(744564);

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, n) {
                return !n || "object" !== u(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function c(e, n) {
                c = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return c(e, n)
            }
            var u = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var n = function() {
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
                    var t, r = a(e);
                    if (n) {
                        var o = a(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return l(this, t)
                }
            }
            var d = {},
                f = {};
            var C = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && c(e, n)
                }(t, e);
                var n = s(t);

                function t() {
                    i(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getRoleMemberCount = function(e) {
                    return null != e ? d[e] : null
                };
                r.shouldFetch = function(e) {
                    if (null == e) return !1;
                    var n = f[e];
                    return null == n || Date.now() - n > 12e4
                };
                return t
            }(r.ZP.Store);
            C.displayName = "GuildRoleMemberCountStore";
            const N = new C(o.Z, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.roleMemberCount;
                    d[n] = t;
                    f[n] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = e.count,
                        o = d[n];
                    if (null == o) return !1;
                    o[t] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = e.added,
                        o = d[n];
                    if (null == o) return !1;
                    if (null == o[t]) return !1;
                    var i = Object.keys(r).length;
                    o[t] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = d[n];
                    if (null == r) return !1;
                    if (null == r[t]) return !1;
                    r[t] = r[t] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = d[n];
                    if (null == r) return !1;
                    if (null == r[t]) return !1;
                    r[t] = Math.max(r[t] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    var n = e.guildId,
                        t = e.role;
                    null == d[n] && (d[n] = {});
                    d[n][t.id] = 0
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    delete d[n.id];
                    delete f[n.id]
                }
            })
        },
        6171: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(775428),
                a = t(633878);

            function l(e, n, t) {
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

            function u(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    s = e.color,
                    d = void 0 === s ? "currentColor" : s,
                    f = e.foreground,
                    C = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, a.Z)(C)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        }), (0, r.jsx)("path", {
                            fill: d,
                            className: f,
                            d: "M9,7 L11,7 L11,5 L9,5 L9,7 Z M10,18 C5.59,18 2,14.41 2,10 C2,5.59 5.59,2 10,2 C14.41,2 18,5.59 18,10 C18,14.41 14.41,18 10,18 L10,18 Z M10,4.4408921e-16 C4.4771525,-1.77635684e-15 4.4408921e-16,4.4771525 0,10 C-1.33226763e-15,12.6521649 1.0535684,15.195704 2.92893219,17.0710678 C4.80429597,18.9464316 7.3478351,20 10,20 C12.6521649,20 15.195704,18.9464316 17.0710678,17.0710678 C18.9464316,15.195704 20,12.6521649 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,2.22044605e-16 10,0 L10,4.4408921e-16 Z M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z",
                            transform: "translate(2 2)"
                        })]
                    })
                }))
            }), i.d)
        }
    }
]);