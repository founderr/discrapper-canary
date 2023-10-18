"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54104, 73496], {
        854104: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => N
            });
            var r = n(785893),
                o = n(667294),
                l = n(294184),
                i = n.n(l),
                a = n(70418),
                u = n(84441),
                s = n(579194),
                c = n(415879),
                f = n(107364),
                d = n(652591),
                m = n(646161),
                p = n(463473),
                v = n(2590),
                g = n(571680),
                y = n(473708),
                S = n(446646),
                b = n.n(S);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n, r, o, l, i) {
                try {
                    var a = e[l](i),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, l = [],
                            i = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                l.push(r.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w = function(e, t) {
                var n, r, o, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o;
                                (r = 0, o) && (l = [2 & l[0], o.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        o = l;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = l;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(l);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                l = t.call(e, i)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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

            function C(e) {
                var t = e.email,
                    n = e.setEmail,
                    l = e.claimRequired,
                    d = e.onSuccess,
                    m = e.onClose,
                    S = h(o.useState(), 2),
                    O = S[0],
                    C = S[1],
                    A = h(o.useState(""), 2),
                    N = A[0],
                    T = A[1],
                    x = h(o.useState(""), 2),
                    E = x[0],
                    I = x[1],
                    M = h(o.useState(!1), 2),
                    j = M[0],
                    L = M[1];
                o.useEffect((function() {
                    return c.Z.flowStep(g.MK.ANY, g.mx.CLAIM_ACCOUNT)
                }), []);
                var P, R, U = (R = (P = function(e) {
                    var n, r, o;
                    return w(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                e.preventDefault();
                                L(!0);
                                C("");
                                I("");
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, (0, s.S2)({
                                    email: t,
                                    password: N
                                })];
                            case 2:
                                l.sent();
                                L(!1);
                                d();
                                return [3, 4];
                            case 3:
                                (null == (n = l.sent()) || null === (r = n.body) || void 0 === r ? void 0 : r.email) && C(n.body.email);
                                (null == n || null === (o = n.body) || void 0 === o ? void 0 : o.password) && I(n.body.password);
                                L(!1);
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = P.apply(e, t);

                        function l(e) {
                            _(o, n, r, l, i, "next", e)
                        }

                        function i(e) {
                            _(o, n, r, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }), function(e) {
                    return R.apply(this, arguments)
                });
                return (0, r.jsxs)("div", {
                    className: i()(b().modalLight, (0, p.Q)(v.BRd.LIGHT)),
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        className: b().formHeader,
                        direction: f.Z.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: b().formImage
                        }), (0, r.jsx)(a.Heading, {
                            className: b().formTitle,
                            variant: "heading-xl/semibold",
                            children: y.Z.Messages.FINISH_SIGNING_UP
                        }), (0, r.jsx)(a.Text, {
                            className: b().formBody,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: l ? y.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : y.Z.Messages.CLAIM_ACCOUNT_BODY_2
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            className: b().closeButton,
                            onClick: m
                        })]
                    }), (0, r.jsx)(a.ModalContent, {
                        children: (0, r.jsxs)("form", {
                            className: b().formContent,
                            onSubmit: U,
                            children: [(0, r.jsx)(a.FormItem, {
                                title: y.Z.Messages.FORM_LABEL_EMAIL,
                                className: b().formItem,
                                children: (0, r.jsx)(a.TextInput, {
                                    value: t,
                                    error: O,
                                    onChange: function(e) {
                                        return n(e)
                                    },
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(a.FormItem, {
                                title: y.Z.Messages.FORM_LABEL_PASSWORD,
                                className: b().formItem,
                                children: (0, r.jsx)(a.TextInput, {
                                    type: "password",
                                    value: N,
                                    error: E,
                                    onChange: function(e) {
                                        return T(e)
                                    }
                                })
                            }), (0, r.jsx)(a.Button, {
                                type: "submit",
                                size: a.Button.Sizes.LARGE,
                                fullWidth: !0,
                                submitting: j,
                                disabled: 0 === t.length || 0 === N.length,
                                children: y.Z.Messages.CLAIM_ACCOUNT
                            }), l && (0, r.jsx)(a.Button, {
                                className: b().logoutButton,
                                color: a.Button.Colors.PRIMARY,
                                look: a.Button.Looks.LINK,
                                size: a.Button.Sizes.NONE,
                                onClick: function() {
                                    u.Z.logout();
                                    m()
                                },
                                children: y.Z.Messages.LOGOUT
                            })]
                        })
                    })]
                })
            }

            function A(e) {
                var t = e.email,
                    n = e.claimRequired,
                    l = e.onClose,
                    u = function() {
                        window.open((0, m.t3)(), "_blank");
                        d.default.track(v.rMx.DOWNLOAD_APP, {
                            platform: (0, m.DW)(),
                            ptb: !1,
                            released: !0,
                            has_e_mail: !0,
                            referring_location: "Claim Modal",
                            qr_code: !1
                        })
                    },
                    s = n ? y.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : y.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
                o.useEffect((function() {
                    return c.Z.flowStep(g.MK.ANY, g.mx.CLAIM_ACCOUNT_SUCCESS)
                }), []);
                return (0, r.jsxs)("div", {
                    className: i()(b().modalLight, (0, p.Q)(v.BRd.LIGHT)),
                    children: [(0, r.jsxs)(a.ModalContent, {
                        className: b().successContent,
                        children: [!n && (0, r.jsx)(a.ModalCloseButton, {
                            className: b().closeButton,
                            onClick: l
                        }), (0, r.jsx)("div", {
                            className: b().successImage
                        }), (0, r.jsx)(a.Text, {
                            className: b().successTitle,
                            variant: "text-lg/semibold",
                            children: s.format({
                                email: t
                            })
                        }), (0, r.jsx)(a.Text, {
                            className: b().successPromotion,
                            variant: "text-md/normal",
                            children: y.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })]
                    }), n ? (0, r.jsx)(a.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0,
                            r.jsx)(a.Button, {
                            size: a.Button.Sizes.LARGE,
                            onClick: l,
                            children: y.Z.Messages.OKAY
                        })
                    }) : (0, r.jsx)(a.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(a.Button, {
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.LARGE,
                            onClick: u,
                            children: y.Z.Messages.CLAIM_ACCOUNT_GET_APP
                        })
                    })]
                })
            }

            function N(e) {
                var t = e.onClose,
                    n = e.transitionState,
                    l = e.claimRequired,
                    i = void 0 !== l && l,
                    u = h(o.useState(""), 2),
                    s = u[0],
                    c = u[1],
                    f = h(o.useState(!1), 2),
                    d = f[0],
                    m = f[1];
                return d ? (0, r.jsx)(a.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(A, {
                        email: s,
                        claimRequired: i,
                        onClose: t
                    })
                }) : (0, r.jsx)(a.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(C, {
                        email: s,
                        setEmail: c,
                        claimRequired: i,
                        onSuccess: function() {
                            return m(!0)
                        },
                        onClose: t
                    })
                })
            }
        },
        571680: (e, t, n) => {
            n.d(t, {
                EW: () => a,
                FF: () => o,
                MK: () => r,
                X2: () => i,
                mx: () => l
            });
            var r, o, l, i, a;
            ! function(e) {
                e.UNKNOWN = "unknown";
                e.ANY = "any";
                e.INVITE = "invite";
                e.ORGANIC = "organic_registration";
                e.ORGANIC_MARKETING = "organic_marketing";
                e.ORGANIC_GUILD_TEMPLATES = "organic_guild_template";
                e.CREATE_GUILD = "create_guild"
            }(r || (r = {}));
            ! function(e) {
                e.AGE_GATE = "age_gate";
                e.AGE_GATE_UNDERAGE = "age_gate_underage"
            }(o || (o = {}));
            ! function(e) {
                e.CLAIM_ACCOUNT = "claim_account";
                e.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"
            }(l || (l = {}));
            ! function(e) {
                e.GUILD_TEMPLATES = "guild_templates";
                e.GUILD_CREATE = "guild_create";
                e.CREATION_INTENT = "creation_intent";
                e.CHANNEL_PROMPT = "channel_prompt";
                e.JOIN_GUILD = "join_guild";
                e.SUCCESS = "create_success"
            }(i || (i = {}));
            ! function(e) {
                e.NUF_STARTED = "nuf_started";
                e.AGE_GATE = "age_gate";
                e.NUF_COMPLETE = "nuf_complete";
                e.HUB_CONNECTION = "hub_connection"
            }(a || (a = {}))
        },
        415879: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(38736),
                o = n(630631),
                l = n(296602),
                i = n(652591),
                a = n(571680),
                u = n(2590);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        n = l[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        n = l[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function m(e) {
                var t = function(e, t) {
                    if ("object" !== p(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== p(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === p(t) ? t : String(t)
            }
            var p = function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                v = "UserFlowAnalyticsStore_current",
                g = "UserFlowAnalyticsStore";
            new l.Z("UserFlowAnalytics");

            function y(e) {
                if (e === a.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(g, "-").concat(e));
                if (null == t) return null;
                var n = t.version,
                    r = d(t, ["version"]);
                return 1 !== n ? null : r
            }
            var S = (0, r.Z)((function(e, t) {
                return s({
                    flows: {},
                    currentFlow: null
                }, "activeFlow", (function() {
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(v);
                    if (null == n) return null;
                    var r = t().flows[n],
                        l = null != r ? r : y(n);
                    return null != (null == l ? void 0 : l.currentStep) ? n : null
                }))
            }));
            S.subscribe((function(e) {
                var t;
                if (null != e) {
                    ! function(e) {
                        if (e.type !== a.MK.UNKNOWN) {
                            var t = "".concat(g, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(v)
                            } else {
                                o.Z.set("".concat(g, "-").concat(e.type), f(c({}, e), {
                                    version: 1
                                }));
                                o.Z.set(v, e.type)
                            }
                        }
                    }(e);
                    i.default.track(u.rMx.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    });
                    if (e.ended) {
                        var n = c({}, S.getState().flows);
                        delete n[e.type];
                        S.setState({
                            flows: n,
                            currentFlow: null
                        })
                    }
                }
            }), (function(e) {
                return null != e.currentFlow ? e.flows[e.currentFlow] : void 0
            }));

            function b(e, t) {
                var n = S.getState().flows,
                    r = n[e],
                    o = d(n, [e].map(m)),
                    l = null != r ? r : y(e);
                if (null != (null == l ? void 0 : l.currentStep)) {
                    if (l.currentStep === t) return;
                    0
                }
                S.setState({
                    flows: f(c({}, o), s({}, e, {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date,
                        skipped: !1
                    })),
                    currentFlow: e
                })
            }

            function O(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === a.MK.ANY) {
                    var o;
                    r = null !== (o = S.getState().activeFlow()) && void 0 !== o ? o : a.MK.UNKNOWN
                }
                var l = S.getState().flows,
                    i = l[r],
                    u = d(l, [r].map(m)),
                    p = null != i ? i : y(r);
                null != p && null != p.currentStep && p.currentStep !== t && S.setState({
                    flows: f(c({}, u), s({}, r, f(c({}, p), {
                        lastStep: p.currentStep,
                        lastTimestamp: p.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date,
                        ended: n
                    }))),
                    currentFlow: r
                })
            }

            function _() {
                return null != S.getState().activeFlow()
            }
            const h = {
                flowStart: b,
                flowStepOrStart: function(e, t) {
                    _() ? O(e, t) : b(e, t)
                },
                flowStep: O,
                hasActiveFlow: _
            }
        },
        646161: (e, t, n) => {
            n.d(t, {
                DW: () => h,
                Gn: () => C,
                t3: () => w,
                w4: () => O
            });
            var r, o = n(131795),
                l = n.n(o),
                i = n(58964),
                a = n(664625),
                u = n(2590);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var c = "Ubuntu",
                f = "Debian",
                d = "Fedora",
                m = "Red Hat",
                p = "SuSE",
                v = "Linux",
                g = "OS X",
                y = "win",
                S = "osx",
                b = "linux";

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(u.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(o)
            }

            function _() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = l().os) || void 0 === r ? void 0 : r.family;
                return null == e ? y : -1 !== e.indexOf(c) || -1 !== e.indexOf(f) || -1 !== e.indexOf(d) || -1 !== e.indexOf(m) || -1 !== e.indexOf(p) || -1 !== e.indexOf(v) ? b : -1 !== e.indexOf(g) ? S : y
            }

            function h(e) {
                var t;
                return (s(t = {}, y, "Windows"), s(t, S, "Mac"), s(t, b, "Linux"), t)[_(e)]
            }

            function w() {
                var e = _();
                return O(e, !1, e === b ? "tar.gz" : null)
            }

            function C(e, t, n) {
                var r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, i.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    case "Android":
                        return (0, i.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        }
    }
]);