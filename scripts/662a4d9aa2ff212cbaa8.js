"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [11266], {
        811266: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => d
            });
            var n = t(785893),
                o = t(667294),
                a = t(882723),
                c = t(327499),
                i = t(822003),
                u = t(749565),
                l = t(2590),
                s = t(473708),
                f = t(343809),
                b = t.n(f);

            function p(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function y(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function O(e, r) {
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

            function g(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function m(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, a = [],
                            c = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(c = (n = t.next()).done); c = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == t.return || t.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                var r = e.guildId,
                    t = e.user,
                    f = e.location,
                    p = g(e, ["guildId", "user", "location"]),
                    d = m(o.useState(""), 2),
                    j = d[0],
                    h = d[1],
                    v = (0, i.sE)(r, {
                        location: f,
                        targetUserId: t.id
                    }),
                    w = o.useCallback((function() {
                        c.Z.kickUser(r, t.id, j);
                        v(i.jQ.KICK)
                    }), [r, t.id, j, v]),
                    S = o.useCallback((function(e) {
                        h(e)
                    }), []);
                return (0, n.jsxs)(a.ConfirmModal, O(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            y(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    header: s.Z.Messages.KICK_USER_FROM_SERVER.format({
                        user: t.username
                    }),
                    confirmText: s.Z.Messages.KICK,
                    cancelText: s.Z.Messages.CANCEL,
                    onConfirm: w
                }, p), {
                    children: [(0, n.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: b().spacing,
                        children: s.Z.Messages.KICK_USER_BODY.format({
                            user: "@".concat(u.ZP.getName(t))
                        })
                    }), (0, n.jsx)(a.FormItem, {
                        title: s.Z.Messages.FORM_LABEL_REASON_KICK,
                        className: b().spacing,
                        children: (0, n.jsx)(a.TextArea, {
                            maxLength: l.GNZ,
                            onChange: S,
                            value: j,
                            rows: 2
                        })
                    })]
                }))
            }
        }
    }
]);
//# sourceMappingURL=662a4d9aa2ff212cbaa8.js.map