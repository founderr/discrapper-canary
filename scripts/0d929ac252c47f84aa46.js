"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76141], {
        152702: (t, e, n) => {
            n.d(e, {
                Z: () => c
            });
            var r = n(730381),
                o = n.n(r),
                u = n(327499);

            function a(t, e, n, r, o, u, a) {
                try {
                    var i = t[u](a),
                        c = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(c) : Promise.resolve(c).then(r, o)
            }
            var i = function(t, e) {
                var n, r, o, u, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function i(u) {
                    return function(i) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            a.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(u);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                u = e.call(t, a)
                            } catch (t) {
                                u = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, i])
                    }
                }
            };
            const c = {
                setCommunicationDisabledDuration: function(t, e, n, r, c) {
                    return (l = function() {
                        var a;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    a = null != n ? o()().add(n, "s").toISOString() : null;
                                    return [4, u.Z.setCommunicationDisabledUntil({
                                        guildId: t,
                                        userId: e,
                                        communicationDisabledUntilTimestamp: a,
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

                            function u(t) {
                                a(o, n, r, u, i, "next", t)
                            }

                            function i(t) {
                                a(o, n, r, u, i, "throw", t)
                            }
                            u(void 0)
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
                u = n(473708);

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
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
                    var n, r = a(t);
                    if (e) {
                        var o = a(this).constructor;
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
                    return e.call(this, t, r, u.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        916782: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => N
            });
            var r = n(785893),
                o = n(667294),
                u = n(202351),
                a = n(882723),
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
                m = n(846702),
                O = n.n(m);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function w(t, e, n, r, o, u, a) {
                try {
                    var i = t[u](a),
                        c = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function g(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = t.apply(e, n);

                        function a(t) {
                            w(u, r, o, a, i, "next", t)
                        }

                        function i(t) {
                            w(u, r, o, a, i, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            a = !0,
                            i = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (t) {
                            i = !0;
                            o = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return u
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
                var n, r, o, u, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function i(u) {
                    return function(i) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            a.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(u);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                u = e.call(t, a)
                            } catch (t) {
                                u = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, i])
                    }
                }
            };

            function N(t) {
                var e, n, m = t.guildId,
                    _ = t.userId,
                    w = t.anaylticsLocations,
                    N = t.transitionState,
                    I = t.onClose,
                    C = (0, f.Dt)(),
                    T = (0, c.Z)().analyticsLocations,
                    j = null !== (n = null !== (e = null == w ? void 0 : w[0]) && void 0 !== e ? e : null == T ? void 0 : T[0]) && void 0 !== n ? n : null,
                    M = (0, u.e7)([l.default], (function() {
                        return l.default.getUser(_)
                    }), [_]),
                    R = E((0, h.ZP)(_, m), 2),
                    P = R[0],
                    A = R[1],
                    x = E(o.useState(!1), 2),
                    U = x[0],
                    D = x[1],
                    Z = o.useCallback(g((function() {
                        return S(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (null == M) return [2];
                                    D(!0);
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, 4, 5]);
                                    return [4, i.Z.setCommunicationDisabledDuration(m, _, null, null, j)];
                                case 2:
                                    t.sent();
                                    (0, a.showToast)((0, a.createToast)(v.Z.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, a.ToastType.SUCCESS));
                                    I();
                                    return [3, 5];
                                case 3:
                                    t.sent();
                                    (0, a.showToast)((0,
                                        a.createToast)(v.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, a.ToastType.FAILURE));
                                    return [3, 5];
                                case 4:
                                    D(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [m, M, _, I, j]),
                    k = o.useCallback((function() {
                        A || I()
                    }), [A, I]);
                o.useEffect((function() {
                    null != M && d.default.track(b.rMx.OPEN_MODAL, {
                        type: y.av,
                        guild_id: m,
                        other_user_id: M.id
                    })
                }), []);
                o.useEffect((function() {
                    null != M && null != m || I()
                }));
                return null == M || null == m ? null : (0, r.jsxs)(a.ModalRoot, {
                    transitionState: N,
                    "aria-labelledby": C,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        className: O().header,
                        separator: !1,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: v.Z.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
                        }), (0, r.jsx)(a.Clickable, {
                            onClick: I,
                            className: O().closeButton,
                            "aria-label": v.Z.Messages.CLOSE,
                            children: (0, r.jsx)(p.Z, {
                                className: O().closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: v.Z.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
                                username: M.username,
                                countdown: function(t) {
                                    return null == P ? null : (0, r.jsx)(s.Z, {
                                        className: O().countdown,
                                        deadline: new Date(P),
                                        onInterval: k,
                                        showUnits: !0,
                                        stopAtOneSec: !0
                                    })
                                }
                            })
                        }), (0, r.jsx)(a.Text, {
                            className: O().cta,
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: v.Z.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
                                link: y.cu
                            })
                        })]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [(0, r.jsx)(a.Button, {
                            color: a.Button.Colors.RED,
                            onClick: Z,
                            submitting: U,
                            children: v.Z.Messages.REMOVE_TIME_OUT
                        }), (0, r.jsx)(a.Button, {
                            type: "button",
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: I,
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
                u = n(496486),
                a = n.n(u),
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
                        u = e.className,
                        i = [t.days, t.hours, t.minutes, t.seconds],
                        l = [c.Z.Messages.COUNTDOWN_UNITS_SECONDS, c.Z.Messages.COUNTDOWN_UNITS_MINUTES, c.Z.Messages.COUNTDOWN_UNITS_HOURS, c.Z.Messages.COUNTDOWN_UNITS_DAYS];
                    if (0 === t.days) i.shift();
                    else if (!n) {
                        var s = i.shift();
                        i[0] += 24 * s
                    }
                    var f = a()(i).map((function(t) {
                        return t < 10 ? "0".concat(t) : t
                    })).map((function(t, e) {
                        return [e > 0 && !o ? ":" : " ", (0,
                            r.jsxs)("span", {
                            children: [t, o ? l[i.length - e - 1] : null]
                        }, e)]
                    })).flatten().value();
                    return (0, r.jsx)("span", {
                        className: u,
                        children: f
                    })
                };
                o.render = function() {
                    var t = this.props,
                        e = t.deadline,
                        n = t.children,
                        o = t.className,
                        u = t.stopAtOneSec;
                    if (e === 1 / 0) return (0, r.jsx)("span", {
                        className: o,
                        "aria-label": c.Z.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    var a = (0, i.TD)(Date.now(), e, u);
                    return null != n ? n(a, this.defaultRender.bind(this, a)) : this.defaultRender(a)
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
                hQ: () => a,
                Dt: () => i,
                FG: () => c
            });
            var r = n(873955),
                o = n.n(r),
                u = n(989824),
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(t)
                },
                i = function() {
                    return (0, u.Z)((function() {
                        return a()
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

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        u(t, e, n[e])
                    }))
                }
                return t
            }

            function i(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        u = Object.keys(t);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function c(t, e, n) {
                var r = e.trackedActionData,
                    u = i(e, ["trackedActionData"]),
                    c = {
                        url: u.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(u).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: t.status
                        }, c, n));
                        e(t)
                    })).catch((function(t) {
                        var e, u, i = r.properties;
                        "function" == typeof r.properties && (i = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (u = t.body) || void 0 === u ? void 0 : u.message
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
                Z: () => u
            });
            var r = n(667294),
                o = {};

            function u(t) {
                var e = (0, r.useRef)(o);
                e.current === o && (e.current = t());
                return e.current
            }
        }
    }
]);
//# sourceMappingURL=0d929ac252c47f84aa46.js.map