"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30731], {
        430731: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => D
            });
            var n = r(785893),
                o = r(667294),
                i = r(441143),
                u = r.n(i),
                a = r(318715),
                l = r(882723),
                c = r(105783),
                s = r(567403),
                f = r(223430),
                d = r(818417),
                p = r(642901),
                b = r(835807),
                y = r(473708),
                O = r(902201),
                h = r.n(O);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e, t, r, n, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function v(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function E(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function _(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, t) {
                var r, n, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function I(e) {
                var t, r = e.guildProductListing,
                    o = e.guildId,
                    i = (0, a.ZP)([s.Z], (function() {
                        return s.Z.getGuild(o)
                    })),
                    u = null == i ? void 0 : i.roles[null !== (t = null == r ? void 0 : r.role_id) && void 0 !== t ? t : ""];
                return null == u ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l.Heading, {
                        className: h().warningSectionHeader,
                        variant: "text-md/medium",
                        color: "text-normal",
                        children: [(0, n.jsx)(d.Z, {
                            height: 18,
                            width: 18
                        }), (0, n.jsx)(f.Z, {
                            horizontal: !0,
                            size: 8
                        }), y.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING_HEADER]
                    }), (0, n.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: y.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING.format({
                            roleName: u.name
                        })
                    })]
                })
            }

            function D(e) {
                var t = e.guildId,
                    r = e.productId,
                    i = _(e, ["guildId", "productId"]),
                    a = w(o.useState((function() {
                        return b.Z.getGuildProduct(r)
                    })), 1)[0];
                u()(null != a, "guildProductListing cannot be null");
                var s, f, d = w(o.useState(!1), 2),
                    O = d[0],
                    g = d[1],
                    D = (f = (s = function() {
                        var e;
                        return j(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    n.trys.push([0, 2, 3, 4]);
                                    g(!0);
                                    return [4, p.mh(t, r)];
                                case 1:
                                    n.sent();
                                    return [3, 4];
                                case 2:
                                    e = n.sent();
                                    c.Z.show({
                                        title: y.Z.Messages.GUILD_PRODUCTS_DELETE_ERROR_TITLE,
                                        body: e.message
                                    });
                                    return [3, 4];
                                case 3:
                                    g(!1);
                                    return [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = s.apply(e, t);

                            function i(e) {
                                m(o, r, n, i, u, "next", e)
                            }

                            function u(e) {
                                m(o, r, n, i, u, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function() {
                        return f.apply(this, arguments)
                    });
                return (0, n.jsxs)(l.ConfirmModal, E(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            v(e, t, r[t])
                        }))
                    }
                    return e
                }({}, i), {
                    className: h().modalContainer,
                    header: y.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_HEADER,
                    confirmText: y.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BUTTON,
                    cancelText: y.Z.Messages.CANCEL,
                    loading: O,
                    onConfirm: D,
                    children: [(0, n.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: y.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY.format({
                            productName: a.name
                        })
                    }), (0, n.jsx)(I, {
                        guildProductListing: a,
                        guildId: t
                    })]
                }))
            }
        }
    }
]);