"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83015], {
        583015: (e, t, r) => {
            r.r(t);
            r.d(t, {
                AddRoleMembersModalContent: () => L,
                default: () => T
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
                S = r(473708),
                M = r(655782),
                E = r.n(M);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function x(e, t, r, n, o, a, i) {
                try {
                    var l = e[a](i),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function C(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            x(a, n, o, i, l, "next", e)
                        }

                        function l(e) {
                            x(a, n, o, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function w(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function k(e, t) {
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

            function O(e, t) {
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
                    if ("string" == typeof e) return j(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                var t = function(e, t) {
                    if ("object" !== B(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== B(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === B(t) ? t : String(t)
            }
            var B = function(e) {
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

            function L(e) {
                var t = e.onClose,
                    r = e.roleId,
                    M = e.guildId,
                    j = e.onBack,
                    x = e.isCreateRoleFlow,
                    B = e.focusSearchAfterReady,
                    L = e.isReady,
                    T = (0, i.e7)([p.Z], (function() {
                        return p.Z.getRole(r)
                    }), [r]),
                    _ = O(o.useState(""), 2),
                    N = _[0],
                    P = _[1],
                    Z = O(o.useState({}), 2),
                    D = Z[0],
                    U = Z[1],
                    z = O(o.useState(!1), 2),
                    F = z[0],
                    H = z[1];
                o.useEffect((function() {
                    b.Z.requestMembers(M, N.trim().toLowerCase(), v._4)
                }), [M, N]);
                var K, Y = o.useCallback((function(e) {
                        return !e.roles.includes(r)
                    }), [r]),
                    q = (0, v.lJ)(M, Y),
                    G = o.useMemo((function() {
                        return q.filter((function(e) {
                            return (0, v.eg)(N, e)
                        }))
                    }), [N, q]),
                    J = o.useCallback(C((function() {
                        var e;
                        return I(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e = Object.values(D).map((function(e) {
                                        return e.row.id
                                    }));
                                    H(!0);
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    return [4, h.Z.bulkAddMemberRoles(M, r, e)];
                                case 2:
                                    n.sent();
                                    (0, y.H)(M, r, !1);
                                    t();
                                    return [3, 4];
                                case 3:
                                    n.sent();
                                    H(!1);
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), [M, r, D, t]),
                    Q = o.useCallback((function(e) {
                        var t = e;
                        U((function(e) {
                            var r = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            w(e, t, r[t])
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
                    V = o.useCallback((function(e) {
                        U((function(t) {
                            t[e];
                            return k(t, [e].map(A))
                        }))
                    }), []),
                    $ = o.useMemo((function() {
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
                        className: E().header,
                        separator: !1,
                        direction: f.Z.Direction.VERTICAL,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: S.Z.Messages.ROLE_ADD_MEMBERS_TITLE
                        }), x ? (0, n.jsx)(l.Text, {
                            className: E().subtitle,
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: S.Z.Messages.ROLE_CREATE_ADD_MEMBERS_SUBTITLE
                        }) : (0,
                            n.jsxs)("div", {
                            className: E().roleContainer,
                            children: [(0, n.jsx)(d.Z, {
                                color: null !== (K = null == T ? void 0 : T.colorString) && void 0 !== K ? K : (0, a.Rf)(g.p6O),
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(l.Text, {
                                className: E().roleName,
                                color: "text-normal",
                                variant: "text-md/normal",
                                children: null == T ? void 0 : T.name
                            })]
                        })]
                    }), (0, n.jsx)(s.MemberRoleSelector, {
                        listClassName: E().list,
                        pendingAdditions: D,
                        query: N,
                        onQueryChange: P,
                        onClickRow: Q,
                        onRemovePendingAddition: V,
                        roles: [],
                        members: $,
                        placeholderText: S.Z.Messages.ROLE_ADD_MEMBERS_SEARCH,
                        renderEmptyText: function(e) {
                            return S.Z.Messages.ROLE_EDIT_MEMBERS_NO_RESULTS.format({
                                query: e
                            })
                        },
                        focusSearchAfterReady: B,
                        isReady: L
                    }), (0, n.jsxs)(l.ModalFooter, {
                        className: E().footer,
                        children: [(0, n.jsxs)("div", {
                            className: E().buttonsRight,
                            children: [x && 0 === Object.keys(D).length ? (0, n.jsx)(l.Button, {
                                onClick: t,
                                color: l.Button.Colors.PRIMARY,
                                children: S.Z.Messages.ROLE_CREATION_SKIP
                            }) : (0, n.jsx)(l.Button, {
                                onClick: J,
                                submitting: F,
                                children: S.Z.Messages.ADD
                            }), !x && (0, n.jsx)(l.Button, {
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                size: l.Button.Sizes.SMALL,
                                onClick: t,
                                children: S.Z.Messages.CANCEL
                            })]
                        }), null != j && (0, n.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            size: l.Button.Sizes.TINY,
                            onClick: j,
                            className: E().backButton,
                            children: S.Z.Messages.BACK
                        })]
                    })]
                })
            }

            function T(e) {
                var t = e.transitionState,
                    r = e.onClose,
                    o = e.roleId,
                    a = e.guildId;
                return (0, n.jsx)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.SMALL,
                    children: (0, n.jsx)(L, {
                        onClose: r,
                        roleId: o,
                        guildId: a
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=6ef8a184f4701b1fa1c3.js.map