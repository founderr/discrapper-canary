(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [80068], {
        698242: (e, n, t) => {
            e.exports = t.p + "f3767d455e70dcdd1c8a3102e42c6d34.svg"
        },
        634737: (e, n, t) => {
            e.exports = t.p + "8d224aa39e763dff664f330fdadeda3e.svg"
        },
        680068: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => ke
            });
            var r = t(785893),
                i = t(667294),
                o = t(294184),
                s = t.n(o),
                l = t(202351),
                a = t(882723),
                u = t(84441),
                c = t(579194),
                d = t(316878),
                f = t(245353),
                I = t(848285),
                m = t(27851),
                p = t(21372),
                O = t(567403),
                E = t(473903),
                h = t(107364),
                b = t(124251),
                v = t(776009),
                g = t(652591),
                y = t(775173),
                M = t(714305),
                j = t(976685),
                _ = t(528497),
                N = t(886391),
                R = t(895657),
                A = t(770393),
                C = t(2590);

            function x(e) {
                var n = e.guildId,
                    t = (0, l.e7)([j.Z], (function() {
                        return j.Z.get(n)
                    })),
                    r = null == t ? void 0 : t.guild;
                return (0, l.e7)([O.Z], (function() {
                    var e, t = null === (e = O.Z.getGuild(n)) || void 0 === e ? void 0 : e.verificationLevel,
                        i = null == r ? void 0 : r.verification_level;
                    return (null != t ? t : i) === C.sFg.VERY_HIGH
                }), [n, r])
            }
            var T = t(218372),
                F = t(668844),
                w = t(473708),
                S = t(318658),
                P = t.n(S);

            function L(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Z(e, n, t, r, i, o, s) {
                try {
                    var l = e[o](s),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function V(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function B(e, n) {
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

            function D(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return L(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return L(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e, n) {
                var t, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
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
                        }([o, l])
                    }
                }
            };

            function U() {
                var e = D(i.useState(!1), 2),
                    n = e[0],
                    t = e[1],
                    o = D(i.useState(!1), 2),
                    s = o[0],
                    l = o[1],
                    c = D(i.useState(!1), 2),
                    d = c[0],
                    f = c[1];
                i.useEffect((function() {
                    var e;
                    s && (e = setTimeout((function() {
                        l(!1)
                    }), 2e3));
                    return function() {
                        null != e && clearTimeout(e)
                    }
                }), [s]);
                var I, m, p = (m = (I = function() {
                    return k(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                if (n) return [2];
                                t(!0);
                                e.label = 1;
                            case 1:
                                e.trys.push([1, 3, 4, 5]);
                                return [4, u.Z.verifyResend()];
                            case 2:
                                e.sent();
                                l(!0);
                                f(!0);
                                return [3, 5];
                            case 3:
                                e.sent();
                                return [3, 5];
                            case 4:
                                t(!1);
                                return [7];
                            case 5:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(t, r) {
                        var i = I.apply(e, n);

                        function o(e) {
                            Z(i, t, r, o, s, "next", e)
                        }

                        function s(e) {
                            Z(i, t, r, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }), function() {
                    return m.apply(this, arguments)
                });
                return s ? (0, r.jsx)(a.Text, {
                    className: P().verifyConfirmText,
                    variant: "text-sm/normal",
                    color: "text-positive",
                    children: w.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT
                }) : (0, r.jsx)(a.Button, {
                    size: a.Button.Sizes.SMALL,
                    submitting: n,
                    onClick: p,
                    children: d ? w.Z.Messages.RESEND_EMAIL_SHORT : w.Z.Messages.VERIFY
                })
            }

            function G() {
                return (0, r.jsx)(F.PU, {
                    icon: T.Z,
                    text: w.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,
                    footnote: w.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                    meetsRequirement: !1,
                    children: (0, r.jsx)(a.Tooltip, {
                        text: w.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
                        children: function(e) {
                            return (0, r.jsx)(a.Button, B(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        V(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, e), {
                                size: a.Button.Sizes.SMALL,
                                disabled: !0,
                                children: w.Z.Messages.VERIFY
                            }))
                        }
                    })
                })
            }

            function H(e) {
                var n = e.isUserVerified,
                    t = n ? w.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED : w.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;
                return (0, r.jsx)(F.PU, {
                    icon: T.Z,
                    text: t,
                    footnote: w.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                    meetsRequirement: n,
                    children: (0, r.jsx)(U, {})
                })
            }
            var z = t(448124),
                Y = t(434823),
                J = t(426797),
                q = t(410068),
                Q = t(58118);

            function W(e, n, t, r, i, o, s) {
                try {
                    var l = e[o](s),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function X(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function s(e) {
                            W(o, r, i, s, l, "next", e)
                        }

                        function l(e) {
                            W(o, r, i, s, l, "throw", e)
                        }
                        s(void 0)
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

            function K(e) {
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
            var ne = function(e, n) {
                var t, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
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
                        }([o, l])
                    }
                }
            };

            function te() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(F.PU, {
                        icon: q.Z,
                        text: w.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
                        footnote: w.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                        meetsRequirement: !1,
                        children: (0, r.jsx)(a.Tooltip, {
                            text: w.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
                            children: function(e) {
                                return (0, r.jsx)(a.Button, ee(K({}, e), {
                                    size: a.Button.Sizes.SMALL,
                                    disabled: !0,
                                    children: w.Z.Messages.VERIFY
                                }))
                            }
                        })
                    })
                })
            }

            function re(e) {
                var n = e.isUserVerified,
                    i = n ? w.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED : w.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(F.PU, {
                        icon: q.Z,
                        text: i,
                        footnote: w.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                        meetsRequirement: n,
                        children: (0, r.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            onClick: function() {
                                (0, a.openModalLazy)(X((function() {
                                    var e, n;
                                    return ne(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(11177), t.e(84237)]).then(t.bind(t, 411177))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(n, K({
                                                        reason: J.L.GUILD_PHONE_REQUIRED
                                                    }, e))
                                                }]
                                        }
                                    }))
                                })), {
                                    modalKey: Q.M
                                })
                            },
                            children: w.Z.Messages.VERIFY
                        })
                    })
                })
            }
            var ie = t(388025),
                oe = t(880213);

            function se(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function le(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ae(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        le(e, n, t[n])
                    }))
                }
                return e
            }

            function ue(e, n) {
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

            function ce(e) {
                return function(e) {
                    if (Array.isArray(e)) return se(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return se(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return se(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function de(e) {
                var n = e.guildId,
                    t = e.formFields,
                    i = e.updateFormFields,
                    o = (0, l.e7)([O.Z], (function() {
                        var e;
                        return null === (e = O.Z.getGuild(n)) || void 0 === e ? void 0 : e.rulesChannelId
                    })),
                    s = function(e, n) {
                        var r = t[e];
                        i(ce(t.slice(0, e)).concat([ue(ae({}, r), {
                            response: n
                        })], ce(t.slice(e + 1))))
                    },
                    a = function(e, n) {
                        switch (e.field_type) {
                            case N.QJ.TERMS:
                                return (0, r.jsx)(ie.dd, {
                                    channelId: o,
                                    formField: e,
                                    onChange: function(e, r) {
                                        return function(e, n) {
                                            var r = t[e];
                                            i(ce(t.slice(0, e)).concat([ue(ae({}, r), {
                                                response: n
                                            })], ce(t.slice(e + 1))))
                                        }(n, r)
                                    }
                                }, n);
                            case N.QJ.TEXT_INPUT:
                                return (0, r.jsx)(oe.zY, {
                                    formField: e,
                                    onChange: function(e) {
                                        return s(n, e)
                                    }
                                }, n);
                            case N.QJ.PARAGRAPH:
                                return (0, r.jsx)(Y.lX, {
                                    formField: e,
                                    onChange: function(e) {
                                        return s(n, e)
                                    }
                                }, n);
                            case N.QJ.MULTIPLE_CHOICE:
                                return (0, r.jsx)(z.sp, {
                                    formField: e,
                                    onChange: function(e) {
                                        return function(e, n) {
                                            var r = n.value,
                                                o = t[e];
                                            i(ce(t.slice(0, e)).concat([ue(ae({}, o), {
                                                response: r
                                            })], ce(t.slice(e + 1))))
                                        }(n, e)
                                    }
                                }, n)
                        }
                    };
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((function(e, n) {
                        return a(e, n)
                    }))
                })
            }

            function fe(e) {
                var n = e.guildId,
                    t = e.formFields,
                    i = e.updateFormFields,
                    o = (0, l.e7)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    s = x({
                        guildId: n
                    }) ? te : G;
                return null == o ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s, {}), (0, r.jsx)(de, {
                        guildId: n,
                        formFields: t,
                        updateFormFields: i
                    })]
                })
            }

            function Ie(e) {
                var n = e.guildId,
                    t = e.formFields,
                    o = e.updateFormFields,
                    s = (0, l.e7)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    a = function(e) {
                        var n = e.guildId,
                            t = (0, l.e7)([E.default], (function() {
                                return E.default.getCurrentUser()
                            })),
                            r = x({
                                guildId: n
                            }),
                            i = (null == t ? void 0 : t.isPhoneVerified()) || (null == t ? void 0 : t.isStaff()),
                            o = (null == t ? void 0 : t.verified) || i;
                        return {
                            isPhoneVerificationLevel: r,
                            isCurrentUserVerified: !!(r ? i : o)
                        }
                    }({
                        guildId: n
                    }),
                    u = a.isPhoneVerificationLevel,
                    c = a.isCurrentUserVerified,
                    d = i.useRef(c),
                    f = u ? re : H;
                return null == s ? null : (0, r.jsxs)(r.Fragment, {
                    children: [!d.current && (0, r.jsx)(f, {
                        isUserVerified: c
                    }), (0, r.jsx)(de, {
                        guildId: n,
                        formFields: t,
                        updateFormFields: o
                    })]
                })
            }
            var me = t(198181),
                pe = t(571094),
                Oe = t.n(pe),
                Ee = t(698242),
                he = t.n(Ee),
                be = t(483683),
                ve = t.n(be),
                ge = t(63685),
                ye = t.n(ge),
                Me = t(634737),
                je = t.n(Me);

            function _e(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ne(e, n, t, r, i, o, s) {
                try {
                    var l = e[o](s),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function Re(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function s(e) {
                            Ne(o, r, i, s, l, "next", e)
                        }

                        function l(e) {
                            Ne(o, r, i, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function Ae(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ce(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ae(e, n, t[n])
                    }))
                }
                return e
            }

            function xe(e, n) {
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

            function Te(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || we(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Fe(e) {
                return function(e) {
                    if (Array.isArray(e)) return _e(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || we(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function we(e, n) {
                if (e) {
                    if ("string" == typeof e) return _e(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _e(e, n) : void 0
                }
            }
            var Se, Pe = function(e, n) {
                var t, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
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
                        }([o, l])
                    }
                }
            };
            ! function(e) {
                e[e.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT";
                e[e.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION";
                e[e.VERIFICATION_FORM = 2] = "VERIFICATION_FORM"
            }(Se || (Se = {}));
            var Le = function(e) {
                    var n = e.headerId,
                        t = e.email,
                        i = e.password,
                        o = e.setEmail,
                        s = e.setPassword,
                        l = e.emailError,
                        u = e.passwordError;
                    return (0, r.jsxs)("div", {
                        className: Oe().content,
                        children: [(0, r.jsx)("div", {
                            className: Oe().applicationIconContainer,
                            children: (0, r.jsx)("img", {
                                alt: w.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
                                src: he(),
                                className: Oe().applicationIcon
                            })
                        }), (0, r.jsx)(a.Heading, {
                            id: n,
                            variant: "heading-xl/semibold",
                            className: Oe().header,
                            children: w.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: w.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE
                        }), (0, r.jsx)("hr", {
                            className: Oe().divider
                        }), (0, r.jsx)(a.FormItem, {
                            title: w.Z.Messages.FORM_LABEL_EMAIL,
                            className: Oe().formItem,
                            children: (0, r.jsx)(a.TextInput, {
                                value: t,
                                error: l,
                                onChange: o,
                                autoFocus: !0
                            })
                        }), (0, r.jsx)(a.FormItem, {
                            title: w.Z.Messages.FORM_LABEL_PASSWORD,
                            className: Oe().formItem,
                            children: (0, r.jsx)(a.TextInput, {
                                type: "password",
                                value: i,
                                error: u,
                                onChange: s
                            })
                        })]
                    })
                },
                Ze = function(e) {
                    var n = e.headerId,
                        t = e.email;
                    return (0, r.jsxs)("div", {
                        className: Oe().content,
                        children: [(0, r.jsx)("img", {
                            alt: w.Z.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
                            src: je(),
                            className: Oe().applicationIcon
                        }), (0, r.jsx)(a.Heading, {
                            id: n,
                            variant: "heading-xl/semibold",
                            className: Oe().header,
                            children: w.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({
                                email: t
                            })
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: w.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE
                        }), (0, r.jsx)(a.Button, {
                            className: Oe().resendButton,
                            size: a.Button.Sizes.NONE,
                            look: a.Button.Looks.LINK,
                            onClick: function() {
                                return u.Z.verifyResend()
                            },
                            children: w.Z.Messages.MEMBER_VERIFICATION_EMAIL_RESEND
                        })]
                    })
                },
                Ve = function(e) {
                    var n, t = e.guildId,
                        i = e.formState,
                        o = e.updateFormState,
                        s = e.isPreview,
                        a = void 0 !== s && s,
                        u = (0, l.e7)([j.Z], (function() {
                            return j.Z.get(t)
                        }));
                    if (null == u) return null;
                    var c = null !== (n = null != i ? i : null == u ? void 0 : u.formFields) && void 0 !== n ? n : [],
                        d = a ? fe : Ie;
                    return (0, r.jsx)(d, {
                        guildId: t,
                        formFields: c,
                        updateFormFields: o
                    })
                },
                Be = function() {
                    return t.e(61029).then(t.t.bind(t, 640002, 19)).then((function(e) {
                        return e.default
                    }))
                },
                De = function(e) {
                    var n = e.headerId,
                        t = e.guildId,
                        i = e.formState,
                        o = e.updateFormState,
                        l = e.useReducedMotion,
                        u = e.isPreview,
                        c = void 0 !== u && u;
                    return (0, r.jsxs)("div", {
                        className: Oe().content,
                        children: [(0, r.jsxs)("div", {
                            className: Oe().animationAndSparklesContainer,
                            children: [(0, r.jsx)("img", {
                                alt: w.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                                src: ye(),
                                className: s()(Oe().sparkleIcon, Oe().sparkleBottom)
                            }), (0, r.jsx)(v.Z, {
                                importData: Be,
                                shouldAnimate: !l,
                                className: Oe().animation
                            }), (0, r.jsx)("img", {
                                alt: w.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                                src: ve(),
                                className: s()(Oe().sparkleIcon, Oe().sparkleTop)
                            })]
                        }), (0, r.jsx)(a.Heading, {
                            id: n,
                            variant: "heading-xl/semibold",
                            className: Oe().header,
                            children: w.Z.Messages.MEMBER_VERIFICATION_MODAL_TITLE
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Oe().subheader,
                            children: w.Z.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE
                        }), (0, r.jsx)("hr", {
                            className: Oe().divider
                        }), (0, r.jsx)(Ve, {
                            guildId: t,
                            formState: i,
                            updateFormState: o,
                            isPreview: c
                        })]
                    })
                };
            const ke = function(e) {
                var n, t = e.headerId,
                    o = e.guildId,
                    u = e.onClose,
                    v = e.onComplete,
                    x = e.inviteCode,
                    T = e.isPreview,
                    F = void 0 !== T && T,
                    S = (0, A.rb)((function(e) {
                        return e.hasUnsubmittedChanges
                    })),
                    P = (0, l.e7)([O.Z], (function() {
                        return O.Z.getGuild(o)
                    })),
                    L = (0, l.e7)([j.Z], (function() {
                        return j.Z.get(o)
                    })),
                    Z = (0, l.e7)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    V = !(null == Z ? void 0 : Z.isClaimed()),
                    B = null == Z ? void 0 : Z.verified,
                    D = null == Z ? void 0 : Z.isPhoneVerified(),
                    k = (0, l.e7)([f.Z], (function() {
                        return f.Z.getGuildEmoji(o)
                    })),
                    U = (0, l.cj)([m.Z], (function() {
                        return {
                            storeMemberCount: m.Z.getMemberCount(o),
                            storeOnlineCount: m.Z.getOnlineCount(o)
                        }
                    })),
                    G = U.storeMemberCount,
                    H = U.storeOnlineCount,
                    z = Te(i.useState(null !== (n = null == L ? void 0 : L.formFields) && void 0 !== n ? n : []), 2),
                    Y = z[0],
                    J = z[1],
                    q = Te(i.useState(!1), 2),
                    Q = q[0],
                    W = q[1],
                    X = Te(i.useState(null), 2),
                    $ = X[0],
                    K = X[1],
                    ee = Te(i.useState(V ? Se.CLAIM_ACCOUNT : Se.VERIFICATION_FORM), 2),
                    ne = ee[0],
                    te = ee[1],
                    re = Te(i.useState(""), 2),
                    ie = re[0],
                    oe = re[1],
                    se = Te(i.useState(""), 2),
                    le = se[0],
                    ae = se[1],
                    ue = Te(i.useState(null), 2),
                    ce = ue[0],
                    de = ue[1],
                    fe = Te(i.useState(null), 2),
                    Ie = fe[0],
                    pe = fe[1],
                    Ee = (0, _.e)(o),
                    he = null == L ? void 0 : L.guild,
                    be = i.useMemo((function() {
                        return null != P ? P : null != he ? new I.Z(he) : null
                    }), [P, he]),
                    ve = i.useMemo((function() {
                        var e, n = Fe(null !== (e = 0 === k.length ? null == he ? void 0 : he.emojis : k) && void 0 !== e ? e : []).reverse(),
                            t = 0,
                            r = n.length;
                        if (r > 12 && null != n) {
                            n = n.slice(0, 11);
                            t = Math.min(r - n.length, 99)
                        }
                        return {
                            emojisToRender: n,
                            remainingEmojis: t,
                            numGuildEmoji: r
                        }
                    }), [he, k]),
                    ge = ve.emojisToRender,
                    ye = ve.remainingEmojis,
                    Me = ve.numGuildEmoji,
                    je = null != G ? G : null == he ? void 0 : he.approximate_member_count,
                    _e = null != H ? H : null == he ? void 0 : he.approximate_presence_count;
                i.useEffect((function() {
                    (0, A.a5)(!1);
                    return function() {
                        (0, A.a5)(!1)
                    }
                }), []);
                i.useEffect((function() {
                    M.Z.fetchVerificationForm(o, x)
                }), [o, x]);
                i.useEffect((function() {
                    null != L && J(L.formFields)
                }), [L]);
                i.useEffect((function() {
                    null != Z && Z.isClaimed() && te(Se.VERIFICATION_FORM)
                }), [Z]);
                i.useEffect((function() {
                    ne === Se.EMAIL_CONFIRMATION && B && te(Se.VERIFICATION_FORM)
                }), [ne, B]);
                i.useEffect((function() {
                    null != o && g.default.track(C.rMx.OPEN_MODAL, {
                        type: me.N4,
                        guild_id: o
                    })
                }), [o]);
                i.useEffect((function() {
                    var e = Y.some((function(e) {
                        return e.field_type !== N.QJ.TERMS && (0, R.OA)(e)
                    }));
                    e && !S ? (0, A.a5)(!0) : !e && S && (0, A.a5)(!1)
                }), [Y, S]);
                var Ne = i.useMemo((function() {
                        return !(((null == be ? void 0 : be.verificationLevel) !== C.sFg.VERY_HIGH || (null == Z ? void 0 : Z.isStaff())) && B || D) || Y.some((function(e) {
                            return !(0, R.OA)(e)
                        }))
                    }), [Y, be, D, B, Z]),
                    we = (0,
                        l.e7)([d.Z], (function() {
                        return d.Z.useReducedMotion
                    }));
                if (null == be) return null;
                var Ve, Be = (Ve = Re((function() {
                        var e, n, t;
                        return Pe(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    W(!0);
                                    de(null);
                                    pe(null);
                                    r.label = 1;
                                case 1:
                                    r.trys.push([1, 3, 4, 5]);
                                    return [4, (0, c.S2)({
                                        email: ie,
                                        password: le
                                    })];
                                case 2:
                                    r.sent();
                                    W(!1);
                                    te(Se.EMAIL_CONFIRMATION);
                                    return [3, 5];
                                case 3:
                                    e = r.sent();
                                    de(null == e || null === (n = e.body) || void 0 === n ? void 0 : n.email);
                                    pe(null == e || null === (t = e.body) || void 0 === t ? void 0 : t.password);
                                    return [3, 5];
                                case 4:
                                    W(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), function() {
                        return Ve.apply(this, arguments)
                    }),
                    ke = function() {
                        var e = Re((function() {
                            var e, n, t, r, i;
                            return Pe(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        W(!0);
                                        K(null);
                                        if (null != (e = null != Z ? p.ZP.getMember(o, Z.id) : null) && !e.isPending) {
                                            null == u || u(!0);
                                            return [2]
                                        }
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 3, , 4]);
                                        return [4, null == v ? void 0 : v(xe(Ce({}, null != L ? L : j.t), {
                                            formFields: Y
                                        }))];
                                    case 2:
                                        s.sent();
                                        null == u || u(!0);
                                        return [3, 4];
                                    case 3:
                                        n = s.sent();
                                        null != (null == (i = null == n ? void 0 : n.body) || null === (t = i.errors) || void 0 === t ? void 0 : t.version) || null != (null == i || null === (r = i.errors) || void 0 === r ? void 0 : r.form_fields) ? K(w.Z.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR) : K(null == i ? void 0 : i.message);
                                        W(!1);
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(h.Z, {
                        direction: h.Z.Direction.VERTICAL,
                        justify: h.Z.Justify.BETWEEN,
                        className: Oe().guildSidebar,
                        shrink: 0,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(b.Z, {
                                guild: be,
                                active: !0,
                                className: s()(Oe().guildIcon, Ae({}, Oe().guildIconNoIcon, null == be.icon))
                            }), (0, r.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                className: Oe().guildName,
                                children: null == be ? void 0 : be.name
                            }), (0, r.jsx)(a.Text, {
                                className: Oe().guildDescription,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: null == L ? void 0 : L.description
                            }), null != ge && ge.length > 0 ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("hr", {
                                    className: Oe().divider
                                }), (0,
                                    r.jsx)(a.FormTitle, {
                                    children: w.Z.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({
                                        emojis: Me
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: Oe().emojisContainer,
                                    children: [ge.map((function(e) {
                                        var n = y.ZP.getEmojiURL({
                                            id: e.id,
                                            animated: !1,
                                            size: 24
                                        });
                                        return (0, r.jsx)(a.Tooltip, {
                                            text: ":".concat(e.name, ":"),
                                            children: function(e) {
                                                return (0, r.jsx)("img", xe(Ce({}, e), {
                                                    width: 24,
                                                    height: 24,
                                                    src: n,
                                                    className: Oe().emoji,
                                                    alt: ""
                                                }))
                                            }
                                        }, e.id)
                                    })), null != ye && ye > 0 ? (0, r.jsx)(a.Heading, {
                                        variant: "heading-deprecated-12/semibold",
                                        className: Oe().emoji,
                                        color: "header-secondary",
                                        children: "+".concat(ye)
                                    }) : null]
                                })]
                            }) : null]
                        }), (0, r.jsxs)("div", {
                            children: [null != _e && (0, r.jsxs)(h.Z, {
                                align: h.Z.Align.CENTER,
                                className: Oe().onlineCount,
                                children: [(0, r.jsx)("div", {
                                    className: Oe().dotOnline
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    children: w.Z.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                                        membersOnline: _e
                                    })
                                })]
                            }), null != je && (0, r.jsxs)(h.Z, {
                                align: h.Z.Align.CENTER,
                                children: [(0, r.jsx)("div", {
                                    className: Oe().dotMembers
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    children: w.Z.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
                                        members: je
                                    })
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: Oe().modal,
                        children: [(0, r.jsx)(a.ModalContent, {
                            className: Oe().modalContent,
                            children: (0, r.jsx)(a.Sequencer, {
                                className: s()(Oe().sequencer, Ae({}, Oe().centerContent, ne !== Se.VERIFICATION_FORM)),
                                steps: [Se.CLAIM_ACCOUNT, Se.EMAIL_CONFIRMATION, Se.VERIFICATION_FORM],
                                step: ne,
                                children: function() {
                                    switch (ne) {
                                        case Se.CLAIM_ACCOUNT:
                                            return (0, r.jsx)(Le, {
                                                headerId: t,
                                                email: ie,
                                                password: le,
                                                setEmail: oe,
                                                setPassword: ae,
                                                emailError: ce,
                                                passwordError: Ie
                                            });
                                        case Se.EMAIL_CONFIRMATION:
                                            return (0, r.jsx)(Ze, {
                                                headerId: t,
                                                email: ie
                                            });
                                        case Se.VERIFICATION_FORM:
                                            return (0, r.jsx)(De, {
                                                headerId: t,
                                                guildId: o,
                                                formState: Y,
                                                updateFormState: J,
                                                isPreview: F,
                                                useReducedMotion: we
                                            })
                                    }
                                }()
                            })
                        }), function() {
                            switch (ne) {
                                case Se.CLAIM_ACCOUNT:
                                    return (0, r.jsxs)(a.ModalFooter, {
                                        className: Oe().footer,
                                        children: [(0, r.jsx)(a.Button, {
                                            className: Oe().submitButton,
                                            type: "submit",
                                            submitting: Q,
                                            onClick: Be,
                                            disabled: 0 === ie.length || 0 === le.length,
                                            children: w.Z.Messages.NEXT
                                        }), (0, r.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-secondary",
                                            children: w.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO
                                        })]
                                    });
                                case Se.EMAIL_CONFIRMATION:
                                    return null;
                                case Se.VERIFICATION_FORM:
                                    return (0, r.jsxs)(a.ModalFooter, {
                                        className: Oe().footer,
                                        children: [(0, r.jsx)(a.Button, {
                                            className: Oe().submitButton,
                                            type: "submit",
                                            submitting: Q,
                                            onClick: ke,
                                            color: a.Button.Colors.GREEN,
                                            disabled: null == v || Ne,
                                            children: w.Z.Messages.SUBMIT
                                        }), null != $ && (0, r.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-danger",
                                            children: $
                                        }), null == $ && Ee && (0, r.jsx)(a.Text, {
                                            color: "header-secondary",
                                            variant: "text-xs/normal",
                                            children: w.Z.Messages.MEMBER_VERIFICATION_WARNING
                                        })]
                                    })
                            }
                        }()]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=ff5b6ed687cccee53fc3.js.map