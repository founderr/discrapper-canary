"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [16782], {
        152702: (t, e, n) => {
            n.d(e, {
                Z: () => s
            });
            var r = n(730381),
                o = n.n(r),
                a = n(327499);

            function l(t, e, n, r, o, a, l) {
                try {
                    var i = t[a](l),
                        s = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(s) : Promise.resolve(s).then(r, o)
            }
            var i = function(t, e) {
                var n, r, o, a, l = {
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
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = e.call(t, l)
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
            const s = {
                setCommunicationDisabledDuration: function(t, e, n, r, s) {
                    return (u = function() {
                        var l;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    l = null != n ? o()().add(n, "s").toISOString() : null;
                                    return [4, a.Z.setCommunicationDisabledUntil({
                                        guildId: t,
                                        userId: e,
                                        communicationDisabledUntilTimestamp: l,
                                        duration: n,
                                        reason: r,
                                        location: s
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
                            var o = u.apply(t, e);

                            function a(t) {
                                l(o, n, r, a, i, "next", t)
                            }

                            function i(t) {
                                l(o, n, r, a, i, "throw", t)
                            }
                            a(void 0)
                        }))
                    })();
                    var u
                }
            }
        },
        916782: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => E
            });
            var r = n(785893),
                o = n(667294),
                a = n(202351),
                l = n(70418),
                i = n(152702),
                s = n(19585),
                u = n(473903),
                c = n(489881),
                f = n(443812),
                d = n(189865),
                p = n(652591),
                h = n(872017),
                y = n(515222),
                v = n(2590),
                b = n(473708),
                m = n(230013),
                _ = n.n(m);

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function N(t, e, n, r, o, a, l) {
                try {
                    var i = t[a](l),
                        s = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(s) : Promise.resolve(s).then(r, o)
            }

            function C(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = t.apply(e, n);

                        function l(t) {
                            N(a, r, o, l, i, "next", t)
                        }

                        function i(t) {
                            N(a, r, o, l, i, "throw", t)
                        }
                        l(void 0)
                    }))
                }
            }

            function I(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            l = !0,
                            i = !1;
                        try {
                            for (n = n.call(t); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            i = !0;
                            o = t
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return w(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(t, e) {
                var n, r, o, a, l = {
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
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = e.call(t, l)
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

            function E(t) {
                var e, n, m = t.guildId,
                    w = t.userId,
                    N = t.anaylticsLocations,
                    E = t.transitionState,
                    g = t.onClose,
                    S = (0, f.Dt)(),
                    T = (0, s.Z)().analyticsLocations,
                    M = null !== (n = null !== (e = null == N ? void 0 : N[0]) && void 0 !== e ? e : null == T ? void 0 : T[0]) && void 0 !== n ? n : null,
                    U = (0, a.e7)([u.default], (function() {
                        return u.default.getUser(w)
                    }), [w]),
                    x = I((0, h.ZP)(w, m), 2),
                    A = x[0],
                    D = x[1],
                    R = I(o.useState(!1), 2),
                    j = R[0],
                    k = R[1],
                    Z = o.useCallback(C((function() {
                        return O(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (null == U) return [2];
                                    k(!0);
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, 4, 5]);
                                    return [4, i.Z.setCommunicationDisabledDuration(m, w, null, null, M)];
                                case 2:
                                    t.sent();
                                    (0, l.showToast)((0, l.createToast)(b.Z.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, l.ToastType.SUCCESS));
                                    g();
                                    return [3, 5];
                                case 3:
                                    t.sent();
                                    (0, l.showToast)((0, l.createToast)(b.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, l.ToastType.FAILURE));
                                    return [3, 5];
                                case 4:
                                    k(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [m, U, w, g, M]),
                    L = o.useCallback((function() {
                        D || g()
                    }), [D, g]);
                o.useEffect((function() {
                    null != U && p.default.track(v.rMx.OPEN_MODAL, {
                        type: y.av,
                        guild_id: m,
                        other_user_id: U.id
                    })
                }), []);
                o.useEffect((function() {
                    null != U && null != m || g()
                }));
                return null == U || null == m ? null : (0, r.jsxs)(l.ModalRoot, {
                    transitionState: E,
                    "aria-labelledby": S,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: _().header,
                        separator: !1,
                        children: [(0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: b.Z.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
                        }), (0, r.jsx)(l.Clickable, {
                            onClick: g,
                            className: _().closeButton,
                            "aria-label": b.Z.Messages.CLOSE,
                            children: (0, r.jsx)(d.Z, {
                                className: _().closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, r.jsxs)(l.ModalContent, {
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: b.Z.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
                                username: U.username,
                                countdown: function(t) {
                                    return null == A ? null : (0, r.jsx)(c.Z, {
                                        className: _().countdown,
                                        deadline: new Date(A),
                                        onInterval: L,
                                        showUnits: !0,
                                        stopAtOneSec: !0
                                    })
                                }
                            })
                        }), (0, r.jsx)(l.Text, {
                            className: _().cta,
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: b.Z.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
                                link: y.cu
                            })
                        })]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [(0, r.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            onClick: Z,
                            submitting: j,
                            children: b.Z.Messages.REMOVE_TIME_OUT
                        }), (0, r.jsx)(l.Button, {
                            type: "button",
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: g,
                            children: b.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        489881: (t, e, n) => {
            n.d(e, {
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                a = n(496486),
                l = n.n(a),
                i = n(70145),
                s = n(473708);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return c(t)
            }

            function f(t, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t, e) {
                d = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return d(t, e)
            }
            var p = function(t) {
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
                    var n, r = c(t);
                    if (e) {
                        var o = c(this).constructor;
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
                    e && d(t, e)
                }(n, t);
                var e = h(n);

                function n() {
                    u(this, n);
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
                        u = [s.Z.Messages.COUNTDOWN_UNITS_SECONDS, s.Z.Messages.COUNTDOWN_UNITS_MINUTES, s.Z.Messages.COUNTDOWN_UNITS_HOURS, s.Z.Messages.COUNTDOWN_UNITS_DAYS];
                    if (0 === t.days) i.shift();
                    else if (!n) {
                        var c = i.shift();
                        i[0] += 24 * c
                    }
                    var f = l()(i).map((function(t) {
                        return t < 10 ? "0".concat(t) : t
                    })).map((function(t, e) {
                        return [e > 0 && !o ? ":" : " ", (0, r.jsxs)("span", {
                            children: [t, o ? u[i.length - e - 1] : null]
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
                        "aria-label": s.Z.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    var l = (0, i.TD)(Date.now(), e, a);
                    return null != n ? n(l, this.defaultRender.bind(this, l)) : this.defaultRender(l)
                };
                return n
            }(o.PureComponent);
            y.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            const v = y
        }
    }
]);