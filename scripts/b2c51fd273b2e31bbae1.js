"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6331], {
        152702: (t, e, n) => {
            n.d(e, {
                Z: () => l
            });
            var r = n(730381),
                o = n.n(r),
                a = n(327499);

            function u(t, e, n, r, o, a, u) {
                try {
                    var i = t[a](u),
                        l = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(l) : Promise.resolve(l).then(r, o)
            }
            var i = function(t, e) {
                var n, r, o, a, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            u.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(a);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                a = e.call(t, u)
                            } catch (t) {
                                a = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };
            const l = {
                setCommunicationDisabledDuration: function(t, e, n, r, l) {
                    return (c = function() {
                        var u;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    u = null != n ? o()().add(n, "s").toISOString() : null;
                                    return [4, a.Z.setCommunicationDisabledUntil({
                                        guildId: t,
                                        userId: e,
                                        communicationDisabledUntilTimestamp: u,
                                        duration: n,
                                        reason: r,
                                        location: l
                                    })];
                                case 1:
                                    i.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var o = c.apply(t, e);

                            function a(t) {
                                u(o, n, r, a, i, "next", t)
                            }

                            function i(t) {
                                u(o, n, r, a, i, "throw", t)
                            }
                            a(void 0)
                        }))
                    })();
                    var c
                }
            }
        },
        973889: (t, e, n) => {
            n.d(e, {
                Z: () => f
            });
            var r = n(281110),
                o = n(2590),
                a = n(473708);

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function i(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l(t, e) {
                l = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return l(t, e)
            }
            var c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(t);
                    if (e) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && l(t, e)
                }(n, t);
                var e = s(n);

                function n(t, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return e.call(this, t, r, a.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        736576: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => A
            });
            var r = n(785893),
                o = n(667294),
                a = n(202351),
                u = n(304548),
                i = n(152702),
                l = n(19585),
                c = n(822003),
                s = n(473903),
                f = n(68543),
                d = n(443812),
                p = n(189865),
                h = n(652591),
                b = n(773148),
                v = n(515222),
                y = n(2590),
                m = n(473708),
                g = n(943799),
                O = n.n(g);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function N(t, e, n, r, o, a, u) {
                try {
                    var i = t[a](u),
                        l = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function I(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = t.apply(e, n);

                        function u(t) {
                            N(a, r, o, u, i, "next", t)
                        }

                        function i(t) {
                            N(a, r, o, u, i, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function C(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            u = !0,
                            i = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            i = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(t, e) {
                var n, r, o, a, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            u.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(a);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                a = e.call(t, u)
                            } catch (t) {
                                a = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function x(t) {
                return {
                    value: t,
                    get label() {
                        var e;
                        return null === (e = (0, v.L9)(t)) || void 0 === e ? void 0 : e.toLocaleUpperCase()
                    }
                }
            }
            var E = [x(v.UK.DURATION_60_SEC), x(v.UK.DURATION_5_MIN), x(v.UK.DURATION_10_MIN), x(v.UK.DURATION_1_HOUR), x(v.UK.DURATION_1_DAY), x(v.UK.DURATION_1_WEEK)];

            function A(t) {
                var e, n, g = t.guildId,
                    _ = t.userId,
                    N = t.anaylticsLocations,
                    x = t.transitionState,
                    A = t.onClose,
                    w = (0, d.Dt)(),
                    U = (0, l.Z)().analyticsLocations,
                    T = null !== (n = null !== (e = null == N ? void 0 : N[0]) && void 0 !== e ? e : null == U ? void 0 : U[0]) && void 0 !== n ? n : null,
                    D = (0, a.e7)([s.default], (function() {
                        return s.default.getUser(_)
                    }), [_]),
                    R = C(o.useState(v.UK.DURATION_60_SEC), 2),
                    Z = R[0],
                    j = R[1],
                    M = (0, c.sE)(g, {
                        location: T,
                        targetUserId: _
                    }),
                    P = C(o.useState(""), 2),
                    k = P[0],
                    L = P[1],
                    B = C(o.useState(!1), 2),
                    G = B[0],
                    K = B[1],
                    H = o.useCallback(I((function() {
                        return S(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (null == D) return [2];
                                    K(!0);
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, 4, 5]);
                                    return [4, i.Z.setCommunicationDisabledDuration(g, _, Z, k, T)];
                                case 2:
                                    t.sent();
                                    M(c.jQ.TIMEOUT);
                                    (0, u.showToast)((0, u.createToast)(m.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                        user: b.ZP.getName(g, null, D)
                                    }), u.ToastType.SUCCESS));
                                    A();
                                    return [3, 5];
                                case 3:
                                    t.sent();
                                    (0, u.showToast)((0, u.createToast)(m.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, u.ToastType.FAILURE));
                                    return [3, 5];
                                case 4:
                                    K(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [g, D, _, A, Z, k, T, M]);
                o.useEffect((function() {
                    null != D && h.default.track(y.rMx.OPEN_MODAL, {
                        type: v.Cl,
                        guild_id: g,
                        other_user_id: D.id
                    })
                }), []);
                o.useEffect((function() {
                    null != D && null != g || A()
                }), [g, D, A]);
                return null == D || null == g ? null : (0, r.jsxs)(u.ModalRoot, {
                    transitionState: x,
                    "aria-labelledby": w,
                    children: [(0, r.jsxs)(u.ModalHeader, {
                        className: O().header,
                        separator: !1,
                        children: [(0, r.jsx)(u.Heading, {
                            id: w,
                            variant: "heading-lg/semibold",
                            children: m.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                                user: b.ZP.getName(g, null, D)
                            })
                        }), (0, r.jsx)(u.Clickable, {
                            onClick: A,
                            className: O().closeButton,
                            "aria-label": m.Z.Messages.CLOSE,
                            children: (0, r.jsx)(p.Z, {
                                className: O().closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, r.jsxs)(u.ModalContent, {
                        className: O().contentContainer,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: m.Z.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
                                helpdeskArticle: v.cu
                            })
                        }), (0, r.jsx)(u.Text, {
                            className: O().selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.Z.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
                        }), (0, r.jsx)(f.Z, {
                            buttons: E.map((function(t) {
                                return function(t, e, n) {
                                    var o = t.value,
                                        a = t.label;
                                    return {
                                        content: (0, r.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            className: e ? O().selectorTextSelected : O().selectorText,
                                            children: a
                                        }),
                                        className: e ? O().selectorButtonSelected : O().selectorButton,
                                        onClick: function() {
                                            return n(o)
                                        }
                                    }
                                }(t, t.value === Z, j)
                            }))
                        }), (0, r.jsx)(u.Text, {
                            className: O().selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.Z.Messages.GUILD_COMMUNICATION_DISABLED_REASON
                        }), (0, r.jsx)(u.TextArea, {
                            value: k,
                            onChange: function(t) {
                                return L(t)
                            },
                            placeholder: m.Z.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
                            rows: 2,
                            maxLength: v.GN
                        })]
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            onClick: H,
                            color: u.Button.Colors.BRAND_NEW,
                            submitting: G,
                            children: m.Z.Messages.TIMEOUT_SUBMIT
                        }), (0, r.jsx)(u.Button, {
                            type: "button",
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: A,
                            children: m.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        68543: (t, e, n) => {
            n.d(e, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                a = n.n(o),
                u = n(304548),
                i = n(237702),
                l = n.n(i),
                c = function(t) {
                    var e = t.data,
                        n = t.disabled,
                        o = e.content,
                        i = e.className,
                        c = e.onClick,
                        s = e.disabled;
                    return (0, r.jsx)(u.FocusRing, {
                        children: (0, r.jsx)("button", {
                            type: "button",
                            className: a()(l().item, i),
                            onClick: c,
                            disabled: n || s,
                            children: o
                        })
                    })
                };
            const s = function(t) {
                var e = t.buttons,
                    n = t.disabled,
                    o = t.className;
                return (0, r.jsx)("div", {
                    role: "group",
                    className: a()(l().group, o),
                    children: e.map((function(t, e) {
                        return (0, r.jsx)(c, {
                            data: t,
                            disabled: n
                        }, e)
                    }))
                })
            }
        },
        443812: (t, e, n) => {
            n.d(e, {
                hQ: () => u,
                Dt: () => i,
                FG: () => l
            });
            var r = n(873955),
                o = n.n(r),
                a = n(989824),
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(t)
                },
                i = function() {
                    return (0, a.Z)((function() {
                        return u()
                    }))
                },
                l = function(t) {
                    return (0, t.children)(i())
                }
        },
        773148: (t, e, n) => {
            n.d(e, {
                ZP: () => f
            });
            var r = n(202351),
                o = n(61209),
                a = n(21372),
                u = n(840922),
                i = n(749565),
                l = n(473708);

            function c(t, e, n) {
                if (null == n) return null;
                if (null != t) return a.ZP.getNick(t, n.id);
                if (null != e) {
                    var r = o.Z.getChannel(e);
                    if (null == r ? void 0 : r.isPrivate()) return u.Z.getNickname(n.id)
                }
                return null
            }

            function s(t, e, n) {
                return null == n ? l.Z.Messages.UNKNOWN_USER : null !== (r = c(t, e, n)) && void 0 !== r ? r : i.ZP.getName(n);
                var r
            }
            const f = {
                getNickname: c,
                getName: s,
                useName: function(t, e, n) {
                    return (0, r.e7)([a.ZP, o.Z, u.Z], (function() {
                        return s(t, e, n)
                    }))
                }
            }
        },
        391438: (t, e, n) => {
            n.d(e, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        a(t, e, n[e])
                    }))
                }
                return t
            }

            function i(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function l(t, e, n) {
                var r = e.trackedActionData,
                    a = i(e, ["trackedActionData"]),
                    l = {
                        url: a.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(a).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status
                        }, l, n));
                        e(t)
                    })).catch((function(t) {
                        var e, a, i = r.properties;
                        "function" == typeof r.properties && (i = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (a = t.body) || void 0 === a ? void 0 : a.message
                        }, l, i));
                        n(t)
                    }))
                }))
            }
            const c = {
                get: function(t) {
                    return l(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return l(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return l(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return l(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return l(r.ZP.delete, t, "del")
                }
            }
        },
        989824: (t, e, n) => {
            n.d(e, {
                Z: () => a
            });
            var r = n(667294),
                o = {};

            function a(t) {
                var e = (0, r.useRef)(o);
                e.current === o && (e.current = t());
                return e.current
            }
        }
    }
]);