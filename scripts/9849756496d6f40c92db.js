"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83015], {
        583015: (e, t, r) => {
            r.r(t);
            r.d(t, {
                AddRoleMembersModalContent: () => T,
                default: () => _
            });
            var n = r(785893),
                o = r(667294),
                a = r(547308),
                i = r(202351),
                l = r(882723),
                u = r(650332),
                s = r(276190),
                c = r(118442),
                f = r(107364),
                d = r(855595),
                b = r(607556),
                m = r(749565),
                y = r(302685),
                h = r(703790),
                p = r(631675),
                v = r(153881),
                g = r(2590),
                R = r(449518),
                S = r(876986),
                M = r(473708),
                E = r(58638),
                j = r.n(E);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function C(e, t, r, n, o, a, i) {
                try {
                    var l = e[a](i),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function w(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            C(a, n, o, i, l, "next", e)
                        }

                        function l(e) {
                            C(a, n, o, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function k(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function A(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e) {
                var t = function(e, t) {
                    if ("object" !== L(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== L(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === L(t) ? t : String(t)
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
            var I = function(e, t) {
                var r, n, o, a, i = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                (n = 0, o) && (a = [2 & a[0], o.value]);
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
                                        n = a[1];
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
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
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

            function T(e) {
                var t = e.onClose,
                    r = e.roleId,
                    E = e.guildId,
                    x = e.onBack,
                    C = e.isCreateRoleFlow,
                    L = e.focusSearchAfterReady,
                    T = e.isReady,
                    _ = (0, i.e7)([p.Z], (function() {
                        return p.Z.getRole(r)
                    }), [r]),
                    N = A(o.useState(""), 2),
                    P = N[0],
                    Z = N[1],
                    D = A(o.useState({}), 2),
                    U = D[0],
                    z = D[1],
                    F = A(o.useState(!1), 2),
                    H = F[0],
                    K = F[1];
                o.useEffect((function() {
                    b.Z.requestMembers(E, P.trim().toLowerCase(), v._4)
                }), [E, P]);
                var Y = o.useCallback((function(e) {
                        return !e.roles.includes(r)
                    }), [r]),
                    q = (0, v.lJ)(E, Y),
                    G = o.useMemo((function() {
                        return q.filter((function(e) {
                            return (0, v.eg)(P, e)
                        }))
                    }), [P, q]);
                G = G.filter((function(e) {
                    return e.id !== S.fL
                }));
                var J, Q = o.useCallback(w((function() {
                        var e;
                        return I(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e = Object.values(U).map((function(e) {
                                        return e.row.id
                                    }));
                                    K(!0);
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    return [4, h.Z.bulkAddMemberRoles(E, r, e)];
                                case 2:
                                    n.sent();
                                    (0, y.H)(E, r, !1);
                                    t();
                                    return [3, 4];
                                case 3:
                                    n.sent();
                                    K(!1);
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), [E, r, U, t]),
                    V = o.useCallback((function(e) {
                        var t = e;
                        z((function(e) {
                            var r = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            k(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, e),
                                n = (0, c.G)(t);
                            if (n in r) {
                                delete r[n];
                                return r
                            }
                            r[n] = {
                                display: {
                                    type: u.Fj.MEMBER,
                                    label: t.name,
                                    avatar: t.avatarURL
                                },
                                row: t
                            };
                            return r
                        }))
                    }), []),
                    $ = o.useCallback((function(e) {
                        z((function(t) {
                            t[e];
                            return O(t, [e].map(B))
                        }))
                    }), []),
                    W = o.useMemo((function() {
                        return G.map((function(e) {
                            var t, r = m.ZP.getUserTag(e.user);
                            return {
                                rowType: R.aC.MEMBER,
                                name: null !== (t = e.name) && void 0 !== t ? t : r,
                                nickname: e.name,
                                username: r,
                                id: e.id,
                                avatarURL: e.avatarURL,
                                bot: e.bot,
                                verifiedBot: e.verifiedBot,
                                disabled: !1,
                                key: e.id
                            }
                        }))
                    }), [G]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        className: j().header,
                        separator: !1,
                        direction: f.Z.Direction.VERTICAL,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: M.Z.Messages.ROLE_ADD_MEMBERS_TITLE
                        }), C ? (0, n.jsx)(l.Text, {
                            className: j().subtitle,
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: M.Z.Messages.ROLE_CREATE_ADD_MEMBERS_SUBTITLE
                        }) : (0, n.jsxs)("div", {
                            className: j().roleContainer,
                            children: [(0, n.jsx)(d.Z, {
                                color: null !== (J = null == _ ? void 0 : _.colorString) && void 0 !== J ? J : (0, a.Rf)(g.p6O),
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(l.Text, {
                                className: j().roleName,
                                color: "text-normal",
                                variant: "text-md/normal",
                                children: null == _ ? void 0 : _.name
                            })]
                        })]
                    }), (0, n.jsx)(s.MemberRoleSelector, {
                        listClassName: j().list,
                        pendingAdditions: U,
                        query: P,
                        onQueryChange: Z,
                        onClickRow: V,
                        onRemovePendingAddition: $,
                        roles: [],
                        members: W,
                        placeholderText: M.Z.Messages.ROLE_ADD_MEMBERS_SEARCH,
                        renderEmptyText: function(e) {
                            return M.Z.Messages.ROLE_EDIT_MEMBERS_NO_RESULTS.format({
                                query: e
                            })
                        },
                        focusSearchAfterReady: L,
                        isReady: T
                    }), (0, n.jsxs)(l.ModalFooter, {
                        className: j().footer,
                        children: [(0, n.jsxs)("div", {
                            className: j().buttonsRight,
                            children: [C && 0 === Object.keys(U).length ? (0, n.jsx)(l.Button, {
                                onClick: t,
                                color: l.Button.Colors.PRIMARY,
                                children: M.Z.Messages.ROLE_CREATION_SKIP
                            }) : (0, n.jsx)(l.Button, {
                                onClick: Q,
                                submitting: H,
                                children: M.Z.Messages.ADD
                            }), !C && (0, n.jsx)(l.Button, {
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                size: l.Button.Sizes.SMALL,
                                onClick: t,
                                children: M.Z.Messages.CANCEL
                            })]
                        }), null != x && (0, n.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            size: l.Button.Sizes.TINY,
                            onClick: x,
                            className: j().backButton,
                            children: M.Z.Messages.BACK
                        })]
                    })]
                })
            }

            function _(e) {
                var t = e.transitionState,
                    r = e.onClose,
                    o = e.roleId,
                    a = e.guildId;
                return (0, n.jsx)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.SMALL,
                    children: (0, n.jsx)(T, {
                        onClose: r,
                        roleId: o,
                        guildId: a
                    })
                })
            }
        }
    }
]);