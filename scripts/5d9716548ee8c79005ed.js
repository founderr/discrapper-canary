"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76141], {
        152702: (t, e, n) => {
            n.d(e, {
                Z: () => c
            });
            var r = n(730381),
                o = n.n(r),
                a = n(327499);

            function u(t, e, n, r, o, a, u) {
                try {
                    var i = t[a](u),
                        c = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(c) : Promise.resolve(c).then(r, o)
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
            const c = {
                setCommunicationDisabledDuration: function(t, e, n, r, c) {
                    return (l = function() {
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
                                        location: c
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
                            var o = l.apply(t, e);

                            function a(t) {
                                u(o, n, r, a, i, "next", t)
                            }

                            function i(t) {
                                u(o, n, r, a, i, "throw", t)
                            }
                            a(void 0)
                        }))
                    })();
                    var l
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
                return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function c(t, e) {
                c = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return c(t, e)
            }
            var l = function(t) {
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
                    e && c(t, e)
                }(n, t);
                var e = s(n);

                function n(t, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return e.call(this, t, r, null != r ? a.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.yXt.STATUS,
                        details: "".concat(r)
                    }) : a.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        916782: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => I
            });
            var r = n(785893),
                o = n(667294),
                a = n(202351),
                u = n(304548),
                i = n(152702),
                c = n(19585),
                l = n(473903),
                s = n(489881),
                f = n(443812),
                p = n(189865),
                d = n(652591),
                h = n(872017),
                y = n(515222),
                b = n(2590),
                v = n(473708),
                m = n(230013),
                O = n.n(m);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function g(t, e, n, r, o, a, u) {
                try {
                    var i = t[a](u),
                        c = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function w(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = t.apply(e, n);

                        function u(t) {
                            g(a, r, o, u, i, "next", t)
                        }

                        function i(t) {
                            g(a, r, o, u, i, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function E(t, e) {
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

            function I(t) {
                var e, n, m = t.guildId,
                    _ = t.userId,
                    g = t.anaylticsLocations,
                    I = t.transitionState,
                    N = t.onClose,
                    C = (0, f.Dt)(),
                    T = (0, c.Z)().analyticsLocations,
                    R = null !== (n = null !== (e = null == g ? void 0 : g[0]) && void 0 !== e ? e : null == T ? void 0 : T[0]) && void 0 !== n ? n : null,
                    M = (0, a.e7)([l.default], (function() {
                        return l.default.getUser(_)
                    }), [_]),
                    j = E((0, h.ZP)(_, m), 2),
                    A = j[0],
                    P = j[1],
                    U = E(o.useState(!1), 2),
                    x = U[0],
                    D = U[1],
                    Z = o.useCallback(w((function() {
                        return S(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (null == M) return [2];
                                    D(!0);
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, 4, 5]);
                                    return [4, i.Z.setCommunicationDisabledDuration(m, _, null, null, R)];
                                case 2:
                                    t.sent();
                                    (0, u.showToast)((0, u.createToast)(v.Z.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, u.ToastType.SUCCESS));
                                    N();
                                    return [3, 5];
                                case 3:
                                    t.sent();
                                    (0, u.showToast)((0,
                                        u.createToast)(v.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, u.ToastType.FAILURE));
                                    return [3, 5];
                                case 4:
                                    D(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [m, M, _, N, R]),
                    k = o.useCallback((function() {
                        P || N()
                    }), [P, N]);
                o.useEffect((function() {
                    null != M && d.default.track(b.rMx.OPEN_MODAL, {
                        type: y.av,
                        guild_id: m,
                        other_user_id: M.id
                    })
                }), []);
                o.useEffect((function() {
                    null != M && null != m || N()
                }));
                return null == M || null == m ? null : (0, r.jsxs)(u.ModalRoot, {
                    transitionState: I,
                    "aria-labelledby": C,
                    children: [(0, r.jsxs)(u.ModalHeader, {
                        className: O().header,
                        separator: !1,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: v.Z.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
                        }), (0, r.jsx)(u.Clickable, {
                            onClick: N,
                            className: O().closeButton,
                            "aria-label": v.Z.Messages.CLOSE,
                            children: (0, r.jsx)(p.Z, {
                                className: O().closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, r.jsxs)(u.ModalContent, {
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: v.Z.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
                                username: M.username,
                                countdown: function(t) {
                                    return null == A ? null : (0, r.jsx)(s.Z, {
                                        className: O().countdown,
                                        deadline: new Date(A),
                                        onInterval: k,
                                        showUnits: !0,
                                        stopAtOneSec: !0
                                    })
                                }
                            })
                        }), (0, r.jsx)(u.Text, {
                            className: O().cta,
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: v.Z.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
                                link: y.cu
                            })
                        })]
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            color: u.Button.Colors.RED,
                            onClick: Z,
                            submitting: x,
                            children: v.Z.Messages.REMOVE_TIME_OUT
                        }), (0, r.jsx)(u.Button, {
                            type: "button",
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: N,
                            children: v.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        489881: (t, e, n) => {
            n.d(e, {
                Z: () => b
            });
            var r = n(785893),
                o = n(667294),
                a = n(496486),
                u = n.n(a),
                i = n(70145),
                c = n(473708);

            function l(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return s(t)
            }

            function f(t, e) {
                return !e || "object" !== d(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t, e) {
                p = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return p(t, e)
            }
            var d = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function h(t) {
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
                    var n, r = s(t);
                    if (e) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && p(t, e)
                }(n, t);
                var e = h(n);

                function n() {
                    l(this, n);
                    return e.apply(this, arguments)
                }
                var o = n.prototype;
                o.componentDidMount = function() {
                    var t = this,
                        e = this.props,
                        n = e.intervalDuration,
                        r = e.onInterval;
                    this._interval = setInterval((function() {
                        t.forceUpdate();
                        null == r || r()
                    }), n)
                };
                o.componentWillUnmount = function() {
                    null != this._interval && clearInterval(this._interval)
                };
                o.defaultRender = function(t) {
                    var e = this.props,
                        n = e.showDays,
                        o = e.showUnits,
                        a = e.className,
                        i = [t.days, t.hours, t.minutes, t.seconds],
                        l = [c.Z.Messages.COUNTDOWN_UNITS_SECONDS, c.Z.Messages.COUNTDOWN_UNITS_MINUTES, c.Z.Messages.COUNTDOWN_UNITS_HOURS, c.Z.Messages.COUNTDOWN_UNITS_DAYS];
                    if (0 === t.days) i.shift();
                    else if (!n) {
                        var s = i.shift();
                        i[0] += 24 * s
                    }
                    var f = u()(i).map((function(t) {
                        return t < 10 ? "0".concat(t) : t
                    })).map((function(t, e) {
                        return [e > 0 && !o ? ":" : " ", (0,
                            r.jsxs)("span", {
                            children: [t, o ? l[i.length - e - 1] : null]
                        }, e)]
                    })).flatten().value();
                    return (0, r.jsx)("span", {
                        className: a,
                        children: f
                    })
                };
                o.render = function() {
                    var t = this.props,
                        e = t.deadline,
                        n = t.children,
                        o = t.className,
                        a = t.stopAtOneSec;
                    if (e === 1 / 0) return (0, r.jsx)("span", {
                        className: o,
                        "aria-label": c.Z.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    var u = (0, i.TD)(Date.now(), e, a);
                    return null != n ? n(u, this.defaultRender.bind(this, u)) : this.defaultRender(u)
                };
                return n
            }(o.PureComponent);
            y.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            const b = y
        },
        443812: (t, e, n) => {
            n.d(e, {
                hQ: () => u,
                Dt: () => i,
                FG: () => c
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
                c = function(t) {
                    return (0, t.children)(i())
                }
        },
        391438: (t, e, n) => {
            n.d(e, {
                Z: () => l
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

            function c(t, e, n) {
                var r = e.trackedActionData,
                    a = i(e, ["trackedActionData"]),
                    c = {
                        url: a.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(a).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status
                        }, c, n));
                        e(t)
                    })).catch((function(t) {
                        var e, a, i = r.properties;
                        "function" == typeof r.properties && (i = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (a = t.body) || void 0 === a ? void 0 : a.message
                        }, c, i));
                        n(t)
                    }))
                }))
            }
            const l = {
                get: function(t) {
                    return c(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return c(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return c(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return c(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return c(r.ZP.delete, t, "del")
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