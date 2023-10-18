"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [49978], {
        461557: (e, n, t) => {
            t.d(n, {
                L_: () => d,
                nj: () => N,
                sE: () => u
            });
            var r = t(281110),
                o = t(744564),
                a = t(302685),
                i = t(2590);

            function l(e, n, t, r, o, a, i) {
                try {
                    var l = e[a](i),
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
                        var a = e.apply(n, t);

                        function i(e) {
                            l(a, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            l(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var s = function(e, n) {
                var t, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                            for (; i;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = n.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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

            function u(e, n) {
                r.ZP.get({
                    url: i.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n)
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
                return C.apply(this, arguments)
            }

            function C() {
                return (C = c((function(e, n, t) {
                    var l, c, u;
                    return s(this, (function(s) {
                        switch (s.label) {
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
                                    url: i.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
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
                                c = s.sent();
                                return [4, (0, a.H)(e, n, !1)];
                            case 2:
                                null != (u = s.sent()) && o.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                                    guildId: e,
                                    roleId: n,
                                    count: u
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

            function N() {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c((function() {
                    return s(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: i.ANM.APPLICATION_USER_ROLE_CONNECTIONS
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
                default: () => se
            });
            var r = t(785893),
                o = t(667294),
                a = t(294184),
                i = t.n(a),
                l = t(441143),
                c = t.n(l),
                s = t(496486),
                u = t.n(s),
                d = t(202351),
                C = t(795308),
                N = t(575945),
                f = t(70418),
                O = t(579344),
                h = t(327499),
                p = t(396179),
                E = t(385028),
                _ = t(74535),
                T = t(265688),
                m = t(396043),
                v = t(318277),
                S = t(344832),
                y = t(967783),
                x = t(384411),
                b = t(722406),
                A = t(664625),
                g = t(61209),
                j = t(629223),
                I = t(21372),
                M = t(682776),
                L = t(609853),
                w = t(718831),
                P = t(621329),
                R = t(6171),
                D = t(386991),
                Z = t(652591),
                U = t(461557),
                k = t(53645),
                G = t(491984),
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

            function W(e, n, t, r, o, a, i) {
                try {
                    var l = e[a](i),
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
                        var a = e.apply(n, t);

                        function i(e) {
                            W(a, r, o, i, l, "next", e)
                        }

                        function l(e) {
                            W(a, r, o, i, l, "throw", e)
                        }
                        i(void 0)
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
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
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
                var t, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                            for (; i;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = n.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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

            function oe(e) {
                var n = e.platformType,
                    t = e.className,
                    o = (0, _.ZP)(),
                    a = T.Z.get(n);
                return (0, r.jsx)("img", {
                    src: (0, N.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
                    alt: "",
                    className: i()(z().platformIcon, t)
                })
            }

            function ae(e) {
                var n = e.channel,
                    t = e.className,
                    o = (0, S.KS)(n);
                return (0, r.jsxs)("div", {
                    className: i()(z().channelName, t),
                    children: [null != o ? (0, r.jsx)(o, {
                        className: z().channelNameIcon
                    }) : null, (0, r.jsx)(f.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-normal",
                        className: z().channelNameText,
                        children: n.name
                    })]
                })
            }

            function ie(e) {
                var n, t = e.connectionType,
                    o = e.connectionMetadataField,
                    a = e.operator,
                    i = e.value,
                    l = e.result,
                    c = e.description,
                    s = null;
                if (null != c) switch (a) {
                    case V.iO.LESS_THAN:
                        s = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(i) - 1)
                        });
                        break;
                    case V.iO.GREATER_THAN:
                        s = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(i) + 1)
                        });
                        break;
                    default:
                        s = c
                } else {
                    var u;
                    switch (a) {
                        case V.iO.EQUAL:
                            u = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE;
                            t === K.ABu.PAYPAL && o === V.PC.PAYPAL_VERIFIED && (u = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
                            break;
                        case V.iO.NOT_EQUAL:
                            u = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
                            break;
                        case V.iO.LESS_THAN:
                            u = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
                            break;
                        case V.iO.GREATER_THAN:
                            u = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
                            break;
                        case void 0:
                        case null:
                            return null
                    }
                    if (null == (s = (0, k.n_)({
                            connectionType: t,
                            connectionMetadataField: o,
                            operator: a,
                            operatorText: u,
                            value: i
                        }))) return null
                }
                n = l ? "header-secondary" : "text-danger";
                return (0, r.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: n,
                    className: z().connectionsCheck,
                    children: s
                })
            }

            function le(e) {
                var n = e.eligibilityStatesGroups,
                    t = e.onPlatformConnect,
                    a = e.onPlatformConnected,
                    l = ne(o.useState({}), 2),
                    s = l[0],
                    d = l[1],
                    N = ne(o.useState(0), 2),
                    O = N[0],
                    h = N[1],
                    p = ne(o.useState(null), 2),
                    _ = p[0],
                    m = p[1],
                    v = ne(o.useState(null), 2),
                    S = v[0],
                    y = v[1],
                    x = o.useMemo((function() {
                        return u().flatten(n)
                    }), [n]),
                    A = o.useMemo((function() {
                        return u().groupBy(x, (function(e) {
                            return "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")
                        }))
                    }), [x]);
                o.useEffect((function() {
                    return h(Date.now())
                }), [x]);
                o.useEffect((function() {
                    if (null != _) {
                        var e = A["".concat(_).concat(null != S ? ":".concat(S.id) : "")];
                        if (null != e) {
                            e.every((function(e) {
                                return e.result
                            })) && a(_, S)
                        }
                    }
                }), [A, _, S, a]);
                var g = (0, f.useToken)(C.Z.unsafe_rawColors.GREEN_330).hex();
                return (0, r.jsx)(r.Fragment, {
                    children: Object.keys(A).sort((function(e, n) {
                        var t = A[e].every((function(e) {
                                return e.result
                            })),
                            r = A[n].every((function(e) {
                                return e.result
                            }));
                        return !0 === t && !1 === r ? 1 : !1 === t && !0 === r ? -1 : 0
                    })).map((function(e) {
                        var n, o, a, l = A[e],
                            u = l.find((function(e) {
                                return null == e.operator
                            })),
                            C = l.filter((function(e) {
                                return null != e.operator
                            })),
                            N = (null == u || u.result) && C.every((function(e) {
                                return e.result
                            })),
                            h = l.find((function(e) {
                                return null != e.application
                            })),
                            p = T.Z.get(e),
                            _ = null == h ? void 0 : h.application,
                            v = null != (null == _ ? void 0 : _.bot) ? new b.Z(_.bot) : null;
                        k.SJ.includes(null !== (n = null == _ ? void 0 : _.id) && void 0 !== n ? n : "") ? o = (0, r.jsx)(G.Z, {
                            className: z().botTag,
                            color: g,
                            size: 16
                        }) : null != v && (o = (0, r.jsx)(L.Z, {
                            className: z().botTag,
                            verified: v.isVerifiedBot()
                        }));
                        var S, x, j, I, M = s[null !== (a = null == p ? void 0 : p.type) && void 0 !== a ? a : V.Kt],
                            D = !N && null != M && M <= O;
                        S = N ? (0, r.jsx)(P.Z, {
                            className: z().connectionsChecksGroupCheckmark
                        }) : D ? (0, r.jsx)(f.Button, {
                            size: f.Button.Sizes.TINY,
                            look: f.Button.Looks.LINK,
                            color: f.Button.Colors.LINK,
                            className: z().connectionsChecksGroupRetryButton,
                            children: Y.Z.Messages.RETRY
                        }) : (0, r.jsx)(w.Z, {
                            direction: w.Z.Directions.RIGHT,
                            className: z().connectionsChecksGroupCaret
                        });
                        (null == p ? void 0 : p.type) === K.ABu.STEAM && (x = Y.Z.Messages.CONNECTIONS_STEAM_TOOLTIP);
                        return (0, r.jsxs)(f.Clickable, {
                            className: i()(z().connectionsChecksGroup, N ? z().connectionsChecksGroupPassed : null),
                            onClick: N ? void 0 : function() {
                                return function(e, n) {
                                    (0, H.Z)(e, "Verified Roles Connect Accounts Modal", null == n ? void 0 : n.role_connections_verification_url);
                                    d(ee(J({}, s), $({}, e, Date.now())));
                                    m(e);
                                    y(null != n ? n : null);
                                    t()
                                }(null !== (j = null == p ? void 0 : p.type) && void 0 !== j ? j : V.Kt, _)
                            },
                            children: [!N && D ? (0, r.jsx)("div", {
                                className: z().connectionsChecksGroupRequirementsNotMet,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
                                })
                            }) : null, null != p ? (0, r.jsx)(oe, {
                                platformType: p.type
                            }) : null, null != v ? (0, r.jsx)(E.Z, {
                                user: v
                            }) : null, (0, r.jsxs)("div", {
                                className: z().connectionsChecksGroupTextContainer,
                                children: [(0,
                                    r.jsxs)("div", {
                                    className: z().connectionsChecksGroupTextNameContainer,
                                    children: [(0, r.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: null !== (I = null == p ? void 0 : p.name) && void 0 !== I ? I : null == _ ? void 0 : _.name
                                    }), o, null != x ? (0, r.jsx)(f.Tooltip, {
                                        text: x,
                                        children: function(e) {
                                            return (0, r.jsx)(R.Z, ee(J({}, e), {
                                                className: z().connectionsChecksGroupTextNameInfoIcon
                                            }))
                                        }
                                    }) : null]
                                }), C.map((function(e) {
                                    var n = e.connection_type,
                                        t = e.connection_metadata_field,
                                        o = e.operator,
                                        a = e.value,
                                        i = e.result,
                                        l = e.description;
                                    c()(null != t, "connectionMetadataField is null");
                                    c()(null != o, "operator is null");
                                    c()(null != a, "value is null");
                                    return (0, r.jsx)(ie, {
                                        connectionType: n,
                                        connectionMetadataField: t,
                                        operator: o,
                                        value: a,
                                        result: i,
                                        description: l
                                    }, t)
                                }))]
                            }), S]
                        }, e)
                    }))
                })
            }

            function ce(e) {
                var n = e.account,
                    t = e.setShowPreviewInvisibleIcon,
                    a = e.setShowPreviewMetadata,
                    i = ne(o.useState(n.friendSync), 2),
                    l = i[0],
                    c = i[1],
                    s = ne(o.useState(n.showActivity), 2),
                    u = s[0],
                    d = s[1],
                    C = ne(o.useState(1 === n.metadataVisibility), 2),
                    N = C[0],
                    h = C[1],
                    p = ne(o.useState(1 === n.visibility), 2),
                    E = p[0],
                    _ = p[1];
                o.useEffect((function() {
                    t(!E);
                    a(N)
                }), []);
                var m, v, S, y = T.Z.get(n.type);
                K.BFP.has(n.type) && (m = (0, r.jsx)(f.FormSwitch, {
                    className: z().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: l,
                    onChange: function(e) {
                        c(e);
                        O.Z.setFriendSync(n.type, n.id, e)
                    },
                    children: (0, r.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: Y.Z.Messages.SYNC_FRIENDS
                    })
                }));
                K.vbS.has(n.type) && (v = (0, r.jsx)(f.FormSwitch, {
                    className: z().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: u,
                    onChange: function(e) {
                        d(e);
                        O.Z.setShowActivity(n.type, n.id, e)
                    },
                    children: (0, r.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: Y.Z.Messages.DISPLAY_ACTIVITY.format({
                            platform: y.name
                        })
                    })
                }));
                !0 === y.hasMetadata && (S = (0, r.jsx)(f.FormSwitch, {
                    className: z().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: N,
                    disabled: !E,
                    onChange: function(e) {
                        a(e);
                        h(e);
                        O.Z.setMetadataVisibility(n.type, n.id, e ? 1 : 0)
                    },
                    children: (0, r.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: Y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
                    })
                }));
                return (0, r.jsxs)("div", {
                    className: z().accountConnectedPrivacyOptionsContainer,
                    children: [(0, r.jsx)(f.FormSwitch, {
                        className: z().accountConnectedPrivacyOptionsSwitchItem,
                        hideBorder: !0,
                        value: E,
                        onChange: function(e) {
                            t(!e);
                            _(e);
                            O.Z.setVisibility(n.type, n.id, e ? 1 : 0)
                        },
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-sm/semibold",
                            children: Y.Z.Messages.DISPLAY_ON_PROFILE
                        })
                    }), S, v, m]
                })
            }! function(e) {
                e[e.CHECKS_REQUIRED = 0] = "CHECKS_REQUIRED";
                e[e.ACCOUNT_CONNECTED = 1] = "ACCOUNT_CONNECTED";
                e[e.ROLE_GRANTED = 2] = "ROLE_GRANTED"
            }(te || (te = {}));

            function se(e) {
                var n = e.transitionState,
                    t = e.onClose,
                    a = e.guildId,
                    i = e.role,
                    l = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        null == t || t();
                        e && (0, f.closeModal)(F.s$, f.DEFAULT_MODAL_CONTEXT)
                    },
                    s = function() {
                        l(!0);
                        p.Z.open(K.oAB.AUTHORIZED_APPS)
                    },
                    u = function() {
                        l(!0);
                        p.Z.open(K.oAB.CONNECTIONS)
                    },
                    C = function() {
                        Z.default.track(K.rMx.PASSPORT_CHALLENGE_STARTED, J({
                            role_id: i.id
                        }, (0, m.hH)(a)))
                    },
                    N = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        Oe(e);
                        Ee(n);
                        S(te.ACCOUNT_CONNECTED);
                        null != n && (0, U.nj)().then((function(e) {
                            me(e)
                        })).catch((function() {}))
                    },
                    O = ne(o.useState(te.CHECKS_REQUIRED), 2),
                    E = O[0],
                    S = O[1],
                    b = ne(o.useState(null), 2),
                    L = b[0],
                    w = b[1],
                    P = ne(o.useState(!1), 2),
                    R = P[0],
                    k = P[1],
                    G = ne(o.useState(!0), 2),
                    H = G[0],
                    V = G[1],
                    Q = ne(o.useState(!1), 2),
                    q = Q[0],
                    W = Q[1],
                    $ = ne(o.useState(!0), 2),
                    ee = $[0],
                    oe = $[1],
                    ie = ne(o.useState(!1), 2),
                    se = ie[0],
                    ue = ie[1],
                    de = (0, d.e7)([j.Z], (function() {
                        return j.Z.getAccounts()
                    })),
                    Ce = (0, d.e7)([A.default], (function() {
                        return A.default.getId()
                    })),
                    Ne = ne(o.useState(null), 2),
                    fe = Ne[0],
                    Oe = Ne[1],
                    he = ne(o.useState(null), 2),
                    pe = he[0],
                    Ee = he[1],
                    _e = ne(o.useState(null), 2),
                    Te = _e[0],
                    me = _e[1],
                    ve = (0, _.ZP)(),
                    Se = (0, d.e7)([x.default], (function() {
                        return x.default.locale
                    })),
                    ye = (0, d.e7)([I.ZP], (function() {
                        return I.ZP.getMember(a, Ce)
                    })),
                    xe = (0, d.e7)([g.Z], (function() {
                        return g.Z.getMutableGuildChannelsForGuild(a)
                    })),
                    be = Object.values(xe).filter((function(e) {
                        return M.Z.can(K.Plq.VIEW_CHANNEL, e) && M.Z.can(K.Plq.SEND_MESSAGES, e) && (0, v.Z)(e).includes(i)
                    }));
                o.useEffect((function() {
                    h.Z.fetchGuildRoleConnectionsEligibility(a, i.id).then((function(e) {
                        w(e);
                        k(function(e) {
                            return e.some((function(e) {
                                return e.every((function(e) {
                                    return e.result
                                }))
                            }))
                        }(e));
                        V(!1)
                    }))
                }), [a, i.id, de]);
                o.useEffect((function() {
                    Z.default.track(K.rMx.PASSPORT_CHALLENGE_VIEWED, J({
                        role_id: i.id
                    }, (0, m.hH)(a)))
                }), [a, i.id]);
                o.useEffect((function() {
                    if (q && null != ye && ye.roles.includes(i.id)) {
                        W(!1);
                        be.length > 0 ? S(te.ROLE_GRANTED) : null == t || t();
                        Z.default.track(K.rMx.PASSPORT_CHALLENGE_FINISHED, J({
                            role_id: i.id
                        }, (0, m.hH)(a)))
                    }
                }), [q, be.length, ye, a, i.id, t]);

                function Ae() {
                    return (Ae = X((function() {
                        return re(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    W(!0);
                                    return [4, h.Z.assignGuildRoleConnection(a, i.id)];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return (0, r.jsxs)(f.ModalRoot, {
                    size: f.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-label": Y.Z.Messages.CONNECT_ACCOUNT_TITLE,
                    className: z().modalRoot,
                    children: [function() {
                        switch (E) {
                            case te.CHECKS_REQUIRED:
                                return (0, r.jsxs)(f.ModalHeader, {
                                    className: z().header,
                                    separator: !1,
                                    children: [(0, r.jsx)("div", {
                                        className: z().headerText,
                                        children: (0, r.jsx)(f.Heading, {
                                            variant: "heading-xl/extrabold",
                                            children: Y.Z.Messages.CONNECT_ACCOUNT_TITLE
                                        })
                                    }), (0, r.jsx)(f.ModalCloseButton, {
                                        onClick: function() {
                                            return l()
                                        }
                                    })]
                                });
                            case te.ACCOUNT_CONNECTED:
                                var e, n;
                                c()(null != fe, "lastPlatformConnected is null");
                                var t = null !== (n = null == pe ? void 0 : pe.name) && void 0 !== n ? n : null === (e = T.Z.get(fe)) || void 0 === e ? void 0 : e.name;
                                return (0, r.jsxs)(f.ModalHeader, {
                                    className: z().header,
                                    separator: !1,
                                    children: [(0, r.jsx)(f.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: z().headerText,
                                        children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                                            platformName: t
                                        })
                                    }), (0,
                                        r.jsx)(f.ModalCloseButton, {
                                        onClick: function() {
                                            return l()
                                        }
                                    })]
                                });
                            case te.ROLE_GRANTED:
                                return (0, r.jsxs)(f.ModalHeader, {
                                    className: z().header,
                                    separator: !1,
                                    children: [(0, r.jsx)(f.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: z().headerText,
                                        children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
                                    }), (0, r.jsx)(f.ModalCloseButton, {
                                        onClick: function() {
                                            return l(!0)
                                        }
                                    })]
                                });
                            default:
                                return null
                        }
                    }(), (0, r.jsx)(f.Sequencer, {
                        step: E,
                        steps: [te.CHECKS_REQUIRED, te.ACCOUNT_CONNECTED, te.ROLE_GRANTED],
                        children: function() {
                            switch (E) {
                                case te.CHECKS_REQUIRED:
                                    var e = null != L && L.length > 1;
                                    return (0, r.jsx)(f.ModalContent, {
                                        children: H || null == L ? (0, r.jsx)(f.Spinner, {
                                            className: z().connectionsChecksGroups
                                        }) : (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(f.Text, {
                                                variant: "text-md/medium",
                                                color: "header-secondary",
                                                children: e ? Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                                            }), (0, r.jsx)(f.ScrollerThin, {
                                                className: z().connectionsChecksGroups,
                                                children: (0, r.jsx)(le, {
                                                    eligibilityStatesGroups: L,
                                                    onPlatformConnect: C,
                                                    onPlatformConnected: N
                                                })
                                            }), (0, r.jsx)(f.Text, {
                                                variant: "text-xs/normal",
                                                className: z().footerText,
                                                color: "header-secondary",
                                                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                    privacyPolicyUrl: K.EYA.PRIVACY,
                                                    onAuthorizedApplicationsClick: function() {
                                                        return s()
                                                    },
                                                    onConnectionsClick: function() {
                                                        return u()
                                                    }
                                                })
                                            })]
                                        })
                                    });
                                case te.ACCOUNT_CONNECTED:
                                    c()(null != fe, "lastPlatformConnected is null");
                                    var n = de.find((function(e) {
                                            var n = e.type;
                                            return fe === n
                                        })),
                                        t = null == Te ? void 0 : Te.find((function(e) {
                                            return e.application.id === (null == pe ? void 0 : pe.id)
                                        }));
                                    return (0, r.jsxs)(f.ModalContent, {
                                        children: [(0, r.jsx)(f.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                privacyPolicyUrl: K.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: function() {
                                                    return s()
                                                },
                                                onConnectionsClick: function() {
                                                    return u()
                                                }
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: z().accountConnectedContainer,
                                            children: null == n && null == t ? (0, r.jsx)(f.Spinner, {
                                                className: z().accountConnectedLoading
                                            }) : (0, r.jsxs)(r.Fragment, {
                                                children: [null != n ? (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsxs)("div", {
                                                        className: z().accountConnectedContainerChild,
                                                        children: [(0, r.jsx)(f.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, r.jsx)(y.E3, {
                                                            connectedAccount: n,
                                                            userId: Ce,
                                                            theme: ve,
                                                            locale: Se,
                                                            className: z().accountConnectedPreviewConnectedUserAccount,
                                                            showMetadata: ee,
                                                            showInvisibleIcon: se
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: z().accountConnectedContainerChild,
                                                        children: [(0, r.jsx)(f.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                                                        }), (0, r.jsx)(ce, {
                                                            account: n,
                                                            setShowPreviewInvisibleIcon: ue,
                                                            setShowPreviewMetadata: oe
                                                        })]
                                                    })]
                                                }) : null, null != t ? (0, r.jsxs)("div", {
                                                    className: z().accountConnectedContainerChild,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: z().accountConnectedHeader,
                                                        children: [(0, r.jsx)(f.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, r.jsx)(f.Tooltip, {
                                                            text: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                                                            children: function(e) {
                                                                return (0, r.jsx)(D.Z, J({}, e))
                                                            }
                                                        })]
                                                    }), (0, r.jsx)(y.tH, {
                                                        applicationRoleConnection: t,
                                                        className: z().accountConnectedPreviewConnectedUserAccount,
                                                        locale: Se
                                                    })]
                                                }) : null]
                                            })
                                        })]
                                    });
                                case te.ROLE_GRANTED:
                                    return (0, r.jsxs)(f.ModalContent, {
                                        children: [(0, r.jsxs)("div", {
                                            className: z().roleGranted,
                                            children: [(0, r.jsx)(B.Z, {
                                                guildId: a,
                                                className: z().verifiedIcon,
                                                role: i,
                                                size: 24
                                            }), (0, r.jsx)(f.Text, {
                                                variant: "text-lg/semibold",
                                                color: "header-primary",
                                                className: z().roleGrantedName,
                                                children: i.name
                                            })]
                                        }), (0, r.jsx)(f.ScrollerThin, {
                                            className: z().channelsGranted,
                                            children: be.map((function(e) {
                                                return (0, r.jsx)(ae, {
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
                        var e, n = null !== (e = null == L ? void 0 : L.flat().some((function(e) {
                            return null == e.application_id
                        }))) && void 0 !== e && e;
                        switch (E) {
                            case te.CHECKS_REQUIRED:
                                return (0, r.jsxs)(f.ModalFooter, {
                                    children: [(0, r.jsx)(f.Button, {
                                        color: f.ButtonColors.BRAND,
                                        onClick: function() {
                                            return function() {
                                                return Ae.apply(this, arguments)
                                            }()
                                        },
                                        disabled: H || !R || q,
                                        children: Y.Z.Messages.FINISH
                                    }), n ? (0, r.jsx)("div", {
                                        className: z().manageConnectionsFooterButton,
                                        children: (0, r.jsx)(f.Button, {
                                            look: f.ButtonLooks.LINK,
                                            color: f.ButtonColors.LINK,
                                            onClick: u,
                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                });
                            case te.ACCOUNT_CONNECTED:
                                return (0, r.jsx)(f.ModalFooter, {
                                    children: (0, r.jsx)(f.Button, {
                                        color: f.ButtonColors.BRAND,
                                        onClick: function() {
                                            return S(te.CHECKS_REQUIRED)
                                        },
                                        children: Y.Z.Messages.DONE
                                    })
                                });
                            default:
                                return (0, r.jsxs)(f.ModalFooter, {
                                    children: [(0, r.jsx)(f.Button, {
                                        color: f.ButtonColors.BRAND,
                                        onClick: function() {
                                            return l(!0)
                                        },
                                        children: Y.Z.Messages.CLOSE
                                    }), n ? (0, r.jsx)("div", {
                                        className: z().manageConnectionsFooterButton,
                                        children: (0, r.jsx)(f.Button, {
                                            look: f.ButtonLooks.LINK,
                                            color: f.ButtonColors.LINK,
                                            onClick: u,
                                            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                })
                        }
                    }()]
                })
            }
        },
        6171: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                a = t(775428),
                i = t(633878);

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

            function s(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    o = e.height,
                    a = void 0 === o ? 16 : o,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    C = e.foreground,
                    N = s(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, i.Z)(N)), {
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        }), (0, r.jsx)("path", {
                            fill: d,
                            className: C,
                            d: "M9,7 L11,7 L11,5 L9,5 L9,7 Z M10,18 C5.59,18 2,14.41 2,10 C2,5.59 5.59,2 10,2 C14.41,2 18,5.59 18,10 C18,14.41 14.41,18 10,18 L10,18 Z M10,4.4408921e-16 C4.4771525,-1.77635684e-15 4.4408921e-16,4.4771525 0,10 C-1.33226763e-15,12.6521649 1.0535684,15.195704 2.92893219,17.0710678 C4.80429597,18.9464316 7.3478351,20 10,20 C12.6521649,20 15.195704,18.9464316 17.0710678,17.0710678 C18.9464316,15.195704 20,12.6521649 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,2.22044605e-16 10,0 L10,4.4408921e-16 Z M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z",
                            transform: "translate(2 2)"
                        })]
                    })
                }))
            }), a.d)
        }
    }
]);