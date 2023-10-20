"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7544], {
        531304: (e, t, n) => {
            n.d(t, {
                Z: () => Oe
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(496486),
                s = n.n(l),
                c = n(730381),
                u = n.n(c),
                f = n(853158),
                d = n(547308),
                h = n(202351),
                p = n(795308),
                m = n(70418),
                g = n(744564),
                b = n(652591),
                y = n(2590);
            const O = function(e) {
                g.Z.dispatch({
                    type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
                    key: e,
                    value: !0
                });
                b.default.track(y.rMx.CLOSE_TUTORIAL, {
                    tutorial: "activity-invite-nux-inline",
                    application_id: e,
                    acknowledged: !0
                })
            };
            var v = n(661123),
                j = n(545580);
            var w = n(627342),
                S = n(44616),
                x = n(795470),
                P = n(673383),
                E = n(809433),
                T = n(473708),
                C = n(981352),
                Z = n.n(C);

            function N(e) {
                var t = e.channelId,
                    n = (0, E.Z)(t);
                if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
                var o = n.multiplier,
                    i = (0, P.yz)(o).color;
                return (0, r.jsxs)("div", {
                    className: Z().container,
                    children: [(0, r.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        children: T.Z.Messages.POGGERMODE_COMBO_BAR
                    }), (0, r.jsx)(m.Progress, {
                        foregroundColor: (0, x.Lq)(i),
                        className: Z().progress,
                        size: m.Progress.Sizes.LARGE,
                        percent: 100 * (0, P.nc)(n),
                        animate: !0
                    })]
                })
            }

            function M(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function A(e) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return A(e)
            }

            function I(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function L(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = A(e);
                    if (t) {
                        var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var D = {};
            var k = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = L(n);

                function n() {
                    M(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    Object.assign(D, e)
                };
                r.getState = function() {
                    return D
                };
                r.shouldShowEducation = function(e) {
                    return !0 !== D[e]
                };
                return n
            }(h.ZP.PersistedStore);
            k.displayName = "ActivityInviteEducationStore";
            k.persistKey = "ActivityInviteEducationExperimentStore";
            const F = new k(g.Z, {
                ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
                    D[e.key] = e.value;
                    return !0
                }
            });
            var U = n(664625),
                H = n(959207),
                B = n(567403),
                z = n(682776),
                G = n(840922),
                W = n(436154),
                V = n(539273),
                Y = n(788169),
                q = n(473903),
                $ = n(901654),
                J = n(498619),
                K = n(930948),
                Q = n(72580),
                X = n(773148),
                ee = n(145100),
                te = n.n(ee);

            function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function re(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function oe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ie(e) {
                ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ie(e)
            }

            function ae(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && fe(e, t)
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        oe(e, t, n[t])
                    }))
                }
                return e
            }

            function se(e, t) {
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

            function ce(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function ue(e, t) {
                return !t || "object" !== he(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function fe(e, t) {
                fe = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return fe(e, t)
            }

            function de(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ne(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var he = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function pe(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = ie(e);
                    if (t) {
                        var o = ie(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ue(this, n)
                }
            }
            var me = [],
                ge = function(e) {
                    ae(n, e);
                    var t = pe(n);

                    function n() {
                        re(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            fadeIn: !1
                        };
                        e.timeout = null;
                        e.handleDismissInviteEducation = function() {
                            var t = e.props.activity;
                            null != t && null != t.application_id && O(t.application_id)
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        var e = this;
                        this.timeout = setTimeout((function() {
                            e.setState({
                                fadeIn: !0
                            });
                            e.timeout = null;
                            e.logShownEventIfNeeded()
                        }), 100)
                    };
                    o.componentDidUpdate = function() {
                        this.logShownEventIfNeeded()
                    };
                    o.logShownEventIfNeeded = function() {
                        var e = this.props.activity.application_id;
                        if (null != e && -1 === me.indexOf(e)) {
                            b.default.track(y.rMx.SHOW_TUTORIAL, {
                                tutorial: "activity-invite-nux-inline",
                                application_id: e
                            });
                            me.push(e)
                        }
                    };
                    o.componentWillUnmount = function() {
                        null !== this.timeout && clearTimeout(this.timeout)
                    };
                    o.render = function() {
                        var e = this.props.activity;
                        return (0, r.jsxs)("div", {
                            className: a()(te().activityInviteEducation, oe({}, te().activityInviteEducationFadeIn, this.state.fadeIn)),
                            children: [(0, r.jsx)("div", {
                                className: te().activityInviteEducationArrow
                            }), (0, r.jsx)("span", {
                                children: T.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
                                    game: e.name,
                                    dismissOnClick: this.handleDismissInviteEducation
                                })
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);

            function be(e) {
                e.channel, e.guild;
                return (0, r.jsx)(w.Z, {
                    contentTypes: [],
                    children: function(e) {
                        e.visibleContent, e.markAsDismissed;
                        return null
                    }
                })
            }
            var ye = function(e) {
                ae(n, e);
                var t = pe(n);

                function n() {
                    re(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        color: new f.Z.Value(0)
                    };
                    e.emphasizeSlowmodeCooldown = function() {
                        var t = e.state.color;
                        f.Z.sequence([f.Z.timing(t, {
                            toValue: 1,
                            duration: 100,
                            easing: f.Z.Easing.quad
                        }), f.Z.timing(t, {
                            delay: 250,
                            toValue: 0,
                            duration: 100,
                            easing: f.Z.Easing.quad
                        })]).start()
                    };
                    return e
                }
                var o = n.prototype;
                o.componentDidMount = function() {
                    K.S.subscribe(y.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
                };
                o.componentWillUnmount = function() {
                    K.S.unsubscribe(y.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
                };
                o.getCooldownTextStyle = function() {
                    var e = this.state.color,
                        t = this.props,
                        n = t.baseTextColor,
                        r = t.activeTextColor;
                    return {
                        color: e.interpolate({
                            inputRange: [0, 1],
                            outputRange: [n, (0, d.wK)(r, .9)]
                        })
                    }
                };
                o.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.guildId,
                        o = t.activity,
                        i = t.showInviteEducation,
                        l = t.isFocused,
                        c = t.typingUsers,
                        d = t.className,
                        h = t.slowmodeCooldownGuess,
                        p = t.isBypassSlowmode,
                        g = t.channel,
                        b = t.isThreadCreation,
                        O = t.renderDots,
                        v = t.poggermodeEnabled,
                        j = t.isComboing,
                        w = g.rateLimitPerUser,
                        S = q.default.getCurrentUser(),
                        x = B.Z.getGuild(n),
                        P = w > 0,
                        E = b ? [] : s()(c).keys().filter((function(e) {
                            return e !== (null == S ? void 0 : S.id)
                        })).reject(G.Z.isBlocked).map((function(e) {
                            return q.default.getUser(e)
                        })).filter(Q.lm).map((function(t) {
                            return X.ZP.getName(n, e.props.channel.id, t)
                        })).value();
                    if (0 === E.length && !P && !j) return i && null != o ? (0, r.jsx)(ge, {
                        activity: o,
                        isFocused: l
                    }) : (0, r.jsx)(be, {
                        channel: g,
                        guild: x
                    });
                    var C = "",
                        Z = null,
                        M = "";
                    if (P) {
                        Z = (0, r.jsx)(J.Z, {
                            className: te().slowModeIcon
                        });
                        if (w >= y.UF9.HOUR) {
                            var A = Math.floor(w / y.UF9.HOUR),
                                I = Math.floor((w - A * y.UF9.HOUR) / y.UF9.MINUTE),
                                _ = w - A * y.UF9.HOUR - I * y.UF9.MINUTE;
                            M = T.Z.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
                                hours: A,
                                minutes: I,
                                seconds: _
                            })
                        } else if (w >= 60) {
                            var R = Math.floor(w / 60),
                                L = w - 60 * R;
                            M = T.Z.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
                                minutes: R,
                                seconds: L
                            })
                        } else M = T.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
                            seconds: w
                        });
                        if (!p && h > 0) {
                            var D = u().duration(h);
                            if (h > 1e3 * y.UF9.HOUR) {
                                var k = "".concat(D.minutes()).padStart(2, "0"),
                                    F = "".concat(D.seconds()).padStart(2, "0");
                                C = "".concat(D.hours(), ":").concat(k, ":").concat(F)
                            } else {
                                var U = "".concat(D.seconds()).padStart(2, "0");
                                C = "".concat(D.minutes(), ":").concat(U)
                            }
                        } else 0 === E.length && (C = p ? T.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : T.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT)
                    }
                    var H, z = de(E, 3),
                        W = z[0],
                        V = z[1],
                        Y = z[2];
                    H = 0 === E.length ? "" : 1 === E.length ? T.Z.Messages.ONE_USER_TYPING.format({
                        a: W
                    }) : 2 === E.length ? T.Z.Messages.TWO_USERS_TYPING.format({
                        a: W,
                        b: V
                    }) : 3 === E.length ? T.Z.Messages.THREE_USERS_TYPING.format({
                        a: W,
                        b: V,
                        c: Y
                    }) : T.Z.Messages.SEVERAL_USERS_TYPING;
                    return (0, r.jsxs)("div", {
                        className: a()(te().typing, oe({
                            "stop-animation": !l
                        }, te().isComboing, v && j), d),
                        children: [(0, r.jsxs)("div", {
                            className: te().typingDots,
                            children: [E.length > 0 && !1 !== O && (0,
                                r.jsx)(m.Dots, {
                                className: te().ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }), (0, r.jsx)("span", {
                                className: te().text,
                                "aria-live": "polite",
                                "aria-atomic": !0,
                                children: H
                            })]
                        }), P && (0, r.jsx)(m.Tooltip, {
                            text: M,
                            children: function(t) {
                                return (0, r.jsxs)(f.Z.div, se(le({
                                    style: e.getCooldownTextStyle(),
                                    className: te().cooldownWrapper
                                }, t), {
                                    children: [C, Z]
                                }))
                            }
                        }), v && j && (0, r.jsx)(N, {
                            channelId: g.id
                        })]
                    })
                };
                return n
            }(o.PureComponent);

            function Oe(e) {
                var t = e.channel,
                    n = e.isThreadCreation,
                    o = void 0 !== n && n,
                    i = ce(e, ["channel", "isThreadCreation"]),
                    a = (0, h.e7)([W.Z], (function() {
                        return W.Z.findActivity((function(e) {
                            return null != e.application_id
                        }))
                    })),
                    l = (0, h.e7)([S.ZP, U.default], (function() {
                        return S.ZP.getUserCombo(U.default.getId(), t.id)
                    })),
                    s = (0, h.e7)([F, H.Z], (function() {
                        return function(e, t, n, r) {
                            var o = null == t ? void 0 : t.application_id;
                            if (null == e || null == t || !(0, j.Z)(t, y.xjy.JOIN) || null == o) return !1;
                            var i = r.getGame(o);
                            return null != i && !(0, v.yE)(i.flags, y.udG.EMBEDDED) && n.shouldShowEducation(o)
                        }(t, a, F, H.Z)
                    })),
                    c = (0, h.e7)([V.Z], (function() {
                        return V.Z.getSlowmodeCooldownGuess(t.id, o ? V.S.CreateThread : V.S.SendMessage)
                    })),
                    u = (0, h.e7)([z.Z], (function() {
                        return o ? z.Z.can(y.Plq.MANAGE_THREADS, t) : z.Z.can(y.Plq.MANAGE_CHANNELS, t) || z.Z.can(y.Plq.MANAGE_MESSAGES, t)
                    })),
                    f = se(le({}, i), {
                        baseTextColor: (0, m.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
                        activeTextColor: (0, m.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
                        showInviteEducation: s,
                        activity: a,
                        typingUsers: (0, h.e7)([Y.Z], (function() {
                            return Y.Z.getTypingUsers(t.id)
                        })),
                        isFocused: (0, h.e7)([$.Z], (function() {
                            return $.Z.isFocused()
                        })),
                        guildId: t.guild_id,
                        slowmodeCooldownGuess: c,
                        isComboing: null != l,
                        isBypassSlowmode: u,
                        channel: t,
                        isThreadCreation: o
                    });
                return (0, r.jsx)(ye, le({}, f))
            }
        },
        840474: (e, t, n) => {
            n.d(t, {
                nC: () => h
            });
            var r = n(496486),
                o = n.n(r),
                i = n(470661),
                a = n.n(i),
                l = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

            function s(e) {
                return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
            }

            function c(e) {
                return e.toLowerCase()
            }

            function u(e) {
                return l.has(e)
            }

            function f(e) {
                return 0 === e.length
            }

            function d(e, t) {
                if (Array.isArray(e)) e.forEach((function(e) {
                    return d(e, t)
                }));
                else if ("string" == typeof e.content && "codeBlock" !== e.type) {
                    var n = [],
                        r = "";
                    e.content.split(/(\W+)/g).forEach((function(e) {
                        if (function(e, t) {
                                return !f(e = c(s(e))) && !u(e) && t.has(a()(e))
                            }(e, t)) {
                            r.length > 0 && n.push({
                                type: "text",
                                content: r
                            });
                            n.push({
                                type: "highlight",
                                content: e
                            });
                            r = ""
                        } else r += e
                    }));
                    if (n.length > 0) {
                        r.length > 0 && n.push({
                            type: "text",
                            content: r
                        });
                        "text" === e.type ? e.content = n : e.content = [{
                            type: "text",
                            content: n
                        }]
                    }
                } else null != e.content && d(e.content, t);
                return e
            }

            function h(e) {
                var t, n = new Set((t = e, o()(t.split(/\W+/)).map(s).reject(f).map(c).reject(u).map(a()).value()));
                return function(e) {
                    return d(e, n)
                }
            }
        },
        621862: (e, t, n) => {
            n.d(t, {
                H: () => b,
                v: () => y
            });
            var r = n(441143),
                o = n.n(r),
                i = n(38736),
                a = n(797186),
                l = n(920883),
                s = n(202351),
                c = n(61209),
                u = n(583507);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }
            var h = new Set,
                p = {
                    layoutType: a.X.LIST,
                    sortOrder: l.z.CREATION_DATE,
                    tagFilter: h,
                    scrollPosition: 0
                },
                m = function e(t, n) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.set = t;
                    this.get = n;
                    this.channelStates = {};
                    this.setChannelState = function(e, t) {
                        var n = r.get(),
                            o = r.getChannelState(e),
                            i = d({}, n.channelStates);
                        i[e] = d({}, o, t);
                        r.set({
                            channelStates: i
                        })
                    };
                    this.getChannelState = function(e) {
                        if (null == e) return p;
                        var t = r.get().channelStates[e];
                        if (null == t) {
                            var n = c.Z.getChannel(e);
                            o()(null != n, "[Forum Channel Store] The channel should not be missing.");
                            t = {
                                layoutType: n.getDefaultLayout(),
                                sortOrder: n.getDefaultSortOrder(),
                                tagFilter: h,
                                scrollPosition: 0
                            }
                        }
                        return t
                    };
                    this.toggleTagFilter = function(e, t) {
                        var n = r.getChannelState(e),
                            o = new Set(n.tagFilter);
                        o.has(t) ? o.delete(t) : o.add(t);
                        r.setTagFilter(e, o)
                    };
                    this.setTagFilter = function(e, t) {
                        r.setChannelState(e, {
                            tagFilter: t
                        });
                        u.Z.setFilterTagIds(t)
                    };
                    this.setSortOrder = function(e, t) {
                        r.setChannelState(e, {
                            sortOrder: t
                        });
                        u.Z.setSortOrder(t)
                    };
                    this.setLayoutType = function(e, t) {
                        r.setChannelState(e, {
                            layoutType: t
                        });
                        u.Z.setLayout(t)
                    };
                    this.setScrollPosition = function(e, t) {
                        r.setChannelState(e, {
                            scrollPosition: t
                        })
                    }
                },
                g = (0, i.Z)((function(e, t) {
                    return new m(e, t)
                })),
                b = function(e) {
                    var t = g();
                    return null == (0, s.e7)([c.Z], (function() {
                        return c.Z.getChannel(e)
                    })) ? p : t.getChannelState(e)
                },
                y = function() {
                    return g
                }
        },
        822110: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(498964),
                l = n(409687),
                s = n(210643),
                c = n(413297),
                u = n(286720),
                f = n.n(u);
            const d = function(e) {
                var t = e.obscureReason,
                    n = e.iconClassname;
                return (0, a.EQ)(t).with(s.wk.EXPLICIT_CONTENT, (function() {
                    return (0, r.jsx)(l.f, {
                        className: i()(n, f().obscuredIcon),
                        color: "white"
                    })
                })).with(s.wk.SPOILER, (function() {
                    return (0, r.jsx)(c.Z, {
                        className: n
                    })
                })).otherwise((function() {
                    return null
                }))
            }
        },
        607544: (e, t, n) => {
            n.d(t, {
                kZ: () => je,
                og: () => xe,
                Lp: () => de,
                TJ: () => he,
                m9: () => ve,
                au: () => we,
                ZP: () => pe,
                NN: () => ge
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(441143),
                s = n.n(l),
                c = n(730381),
                u = n.n(c),
                f = n(457217),
                d = n(202351),
                h = n(795308),
                p = n(70418),
                m = n(531304),
                g = n(677681),
                b = n(840474),
                y = n(957992),
                O = n(210643),
                v = n(841150),
                j = n(916286),
                w = n(804808),
                S = n(30778),
                x = n(386364),
                P = n(203244),
                E = n(968449),
                T = n(804185),
                C = n(61209),
                Z = n(682776),
                N = n(840922),
                M = n(901654),
                A = n(579722),
                I = n(490932),
                _ = n(507488),
                R = n(921122),
                L = n(763536),
                D = n(531441),
                k = n(96606),
                F = n(70145),
                U = n(621862),
                H = n(358969),
                B = n(234798),
                z = n(572615),
                G = n(524600),
                W = n(822110),
                V = n(503871),
                Y = n(16896),
                q = n(589519),
                $ = n(661076);

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Q = n(630097),
                X = n(2590),
                ee = n(939198),
                te = n(473708),
                ne = n(581145),
                re = n.n(ne),
                oe = n(169595),
                ie = n.n(oe);

            function ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function le(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        le(e, t, n[t])
                    }))
                }
                return e
            }

            function ce(e, t) {
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

            function ue(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function fe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ae(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var de = 72,
                he = 72;
            const pe = o.memo((function(e) {
                var t = e.threadId,
                    n = e.goToThread,
                    i = e.observePostVisibilityAnalytics,
                    l = e.overrideMedia,
                    c = e.className,
                    u = e.containerWidth,
                    h = function(e) {
                        var t = e.threadId,
                            n = e.overrideMedia,
                            r = (0, d.e7)([C.Z], (function() {
                                return C.Z.getChannel(t)
                            }));
                        s()(null != r, "the thread should not be null here, a store must have missed an update");
                        var o = (0, d.e7)([T.ZP], (function() {
                                return T.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id
                            })),
                            i = (0, B.cl)(r).firstMessage,
                            a = (0, H.mX)({
                                firstMessage: i
                            }),
                            l = a.content,
                            c = a.firstMedia,
                            u = null != n ? n : c,
                            f = (0, H.nP)(r).messageCountText;
                        return {
                            channel: r,
                            isOpen: o,
                            messageCount: f,
                            firstMessage: i,
                            content: l,
                            media: u
                        }
                    }({
                        threadId: t,
                        overrideMedia: l
                    }),
                    m = h.channel,
                    b = h.isOpen,
                    y = h.messageCount,
                    O = h.firstMessage,
                    v = h.content,
                    j = h.media,
                    w = (0, g.Z)(),
                    S = w.ref,
                    x = w.height,
                    P = (0, V.xH)((function(e) {
                        return e.setCardHeight
                    }));
                o.useEffect((function() {
                    null != x && P(t, x)
                }), [x, P, t]);
                o.useEffect((function() {
                    null == i || i(S.current, t)
                }), [S, i, t]);
                var E = o.useRef(null),
                    Z = (0, Q.Z)({
                        facepileRef: E,
                        goToThread: n,
                        channel: m
                    }),
                    N = Z.handleLeftClick,
                    M = Z.handleRightClick,
                    A = (0, f.JA)(t),
                    I = (A.role, A.onFocus),
                    _ = ue(A, ["role", "onFocus"]),
                    R = (0, $.Z)(I),
                    L = R.isFocused,
                    D = R.handleFocus,
                    k = R.handleBlur;
                return (0, r.jsxs)("div", {
                    ref: S,
                    "data-item-id": t,
                    onClick: N,
                    onContextMenu: M,
                    className: a()(re().container, c, le({}, re().isOpen, b)),
                    children: [(0, r.jsx)(p.Clickable, se({
                        onClick: N,
                        focusProps: {
                            ringTarget: S
                        },
                        onContextMenu: M,
                        "aria-label": te.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: m.name,
                            count: y
                        }),
                        className: re().focusTarget,
                        onFocus: D,
                        onBlur: k
                    }, _)), (0, r.jsxs)("div", {
                        className: re().left,
                        children: [(0, r.jsx)(p.HeadingLevel, {
                            children: (0, r.jsx)(me, {
                                channel: m,
                                firstMessage: O,
                                content: v,
                                hasMediaAttachment: null != j,
                                containerWidth: u
                            })
                        }), (0, r.jsx)(p.FocusBlock, {
                            enabled: !L,
                            children: (0, r.jsx)(Oe, {
                                channel: m,
                                firstMessage: O,
                                facepileRef: E
                            })
                        })]
                    }), (null == O ? void 0 : O.blocked) || null == j ? null : (0, r.jsx)(Pe, {
                        channel: m,
                        firstMedia: j
                    })]
                })
            }));

            function me(e) {
                var t = e.channel,
                    n = e.firstMessage,
                    i = e.content,
                    l = e.hasMediaAttachment,
                    s = e.containerWidth,
                    c = (0, H.J$)(t),
                    u = c.isNew,
                    f = c.hasUnreads,
                    d = ge(t),
                    m = function(e, t, n) {
                        var r = o.useRef(null),
                            i = K(o.useState(!1), 2),
                            a = i[0],
                            l = i[1],
                            s = o.useCallback((function() {
                                if (e && null !== r.current) {
                                    var n;
                                    l((null === (n = r.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t)
                                }
                            }), [l, e, t]);
                        o.useLayoutEffect((function() {
                            s()
                        }), [s, e, n]);
                        return {
                            postTitleRef: r,
                            isNewBadgeOverflow: a
                        }
                    }(u, 24, s),
                    g = m.postTitleRef,
                    b = m.isNewBadgeOverflow;
                return (0, r.jsxs)("div", {
                    className: re().body,
                    children: [(0, r.jsx)(q.ZP, {
                        channel: t
                    }), (0, r.jsx)("div", {
                        className: a()(re().header, le({}, re().withNewBadgeOverflow, b)),
                        children: (0, r.jsxs)("div", {
                            className: re().headerText,
                            children: [(0, r.jsx)(p.Heading, {
                                variant: "heading-lg/semibold",
                                color: f ? "header-primary" : "text-muted",
                                lineClamp: 2,
                                className: re().postTitleText,
                                children: (0, r.jsxs)("span", {
                                    ref: g,
                                    children: [d, u && (0, r.jsx)("span", {
                                        className: re().newBadgeWrapper,
                                        children: (0, r.jsx)(D.IG, {
                                            className: re().newBadge,
                                            color: h.Z.unsafe_rawColors.BRAND_260.css,
                                            text: te.Z.Messages.NEW
                                        })
                                    })]
                                })
                            }), u && b && (0, r.jsx)(D.IG, {
                                className: re().newBadge,
                                color: h.Z.unsafe_rawColors.BRAND_260.css,
                                text: te.Z.Messages.NEW
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: re().message,
                        children: (0, r.jsx)(ye, {
                            channel: t,
                            message: n,
                            content: i,
                            hasMediaAttachment: l,
                            hasUnreads: f
                        })
                    })]
                })
            }

            function ge(e) {
                var t = (0, d.e7)([G.Z], (function() {
                        return G.Z.getHasSearchResults(e.parent_id)
                    })),
                    n = (0, d.e7)([G.Z], (function() {
                        return G.Z.getSearchQuery(e.parent_id)
                    })),
                    r = o.useMemo((function() {
                        return (0, b.nC)(t && null != n ? n : "")
                    }), [t, n]);
                return o.useMemo((function() {
                    return (0, w.ZP)({
                        content: e.name,
                        embeds: []
                    }, {
                        postProcessor: r
                    }).content
                }), [e.name, r])
            }

            function be(e) {
                var t = e.message,
                    n = e.channel,
                    o = e.content,
                    i = e.hasMediaAttachment,
                    l = e.hasUnreads,
                    s = (0, d.e7)([N.Z], (function() {
                        return null != t && N.Z.isBlocked(t.author.id)
                    })),
                    c = (0, d.e7)([z.Z], (function() {
                        return z.Z.isLoading(n.id)
                    })),
                    u = (0, d.e7)([Z.Z], (function() {
                        return Z.Z.can(X.Plq.MANAGE_MESSAGES, n)
                    })),
                    f = E.cC.useSetting(),
                    h = null;
                if (s) h = (0, r.jsx)(p.Text, {
                    className: re().blockedMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: te.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
                });
                else {
                    var m = null == t ? {
                            contentPlaceholder: null,
                            renderedContent: null
                        } : (0, L.f)(t, o, s, a()(re().messageContent, ie().inlineFormat, ie().smallFontSize), {
                            iconClass: re().messageContentIcon,
                            iconSize: ee.WW
                        }),
                        g = m.contentPlaceholder,
                        b = m.renderedContent;
                    h = null != b ? (0, r.jsx)(p.Text, {
                        variant: "text-sm/semibold",
                        color: l ? "header-secondary" : "text-muted",
                        children: b
                    }) : i ? null : (0, r.jsx)(p.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: l ? "header-secondary" : "text-muted",
                        className: re().messageContent,
                        children: null == t ? c ? null : te.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED : g
                    })
                }
                return (0, r.jsxs)(_.a.Provider, {
                    value: (0, j.Z)(f, u),
                    children: [!s && (0, r.jsx)(Y.Z, {
                        channel: n,
                        message: t,
                        renderColon: null != h,
                        hasUnreads: l
                    }), (0, r.jsx)(p.FocusBlock, {
                        className: re().messageFocusBlock,
                        children: h
                    })]
                })
            }
            var ye = o.memo(be);

            function Oe(e) {
                var t = e.channel,
                    n = e.facepileRef,
                    o = e.firstMessage,
                    i = (0, H.Q)(t),
                    a = null != (null == o ? void 0 : o.reactions) && o.reactions.length > 0;
                return (0, r.jsxs)("div", {
                    className: re().footer,
                    children: [a || null == o ? null : (0, r.jsx)(je, {
                        firstMessage: o,
                        channel: t
                    }), null == o ? null : (0, r.jsx)(we, {
                        firstMessage: o,
                        channel: t
                    }), (0, r.jsx)(ve, {
                        channel: t,
                        iconSize: 14
                    }), (0, r.jsx)("span", {
                        className: re().bullet,
                        children: "•"
                    }), i.length > 0 ? (0, r.jsxs)("div", {
                        className: re().typing,
                        children: [(0, r.jsx)(xe, {
                            channel: t,
                            userIds: i,
                            facepileRef: n
                        }), (0, r.jsx)("div", {
                            className: re().dots,
                            children: (0, r.jsx)(p.Dots, {
                                themed: !0,
                                dotRadius: 2
                            })
                        }), (0, r.jsx)(m.Z, {
                            channel: t,
                            className: re().typingUsers,
                            renderDots: !1
                        })]
                    }) : (0, r.jsx)(Se, {
                        channel: t
                    })]
                })
            }

            function ve(e) {
                var t = e.channel,
                    n = e.iconSize,
                    o = e.showReadState,
                    i = void 0 !== o && o,
                    l = (0, H.nP)(t),
                    s = l.messageCountText,
                    c = l.unreadCount,
                    u = i && null == c;
                return (0, r.jsxs)("div", {
                    className: a()(re().messageCountBox, le({}, re().hasRead, u)),
                    children: [(0, r.jsx)("span", {
                        className: re().messageCountIcon,
                        children: (0, r.jsx)(R.Z, {
                            width: n,
                            height: n
                        })
                    }), "number" == typeof s ? (0, r.jsx)(A.Z, {
                        value: s,
                        digitWidth: 9,
                        className: re().messageCountText
                    }) : (0, r.jsx)("div", {
                        className: re().messageCountText,
                        children: s
                    }), null == c ? null : (0, r.jsxs)(p.Text, {
                        className: re().newMessageCount,
                        variant: "text-sm/semibold",
                        color: "text-brand",
                        children: ["(", te.Z.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
                            count: c
                        }), ")"]
                    })]
                })
            }

            function je(e) {
                var t = e.firstMessage,
                    n = e.channel,
                    o = (0, d.e7)([C.Z], (function() {
                        return C.Z.getChannel(n.parent_id)
                    })),
                    i = (0, H.Bs)(o),
                    a = (0, S.Z)(n),
                    l = a.disableReactionCreates,
                    s = a.isLurking,
                    c = a.isPendingMember;
                return null == i || l ? null : (0, r.jsx)(P.le, {
                    className: re().updateReactionButton,
                    message: t,
                    readOnly: n.isArchivedLockedThread(),
                    useChatFontScaling: !1,
                    isLurking: s,
                    isPendingMember: c,
                    emoji: i,
                    hideCount: !0,
                    count: 0,
                    burst_count: 0,
                    me: !1,
                    me_burst: !1,
                    type: v.O.NORMAL,
                    emojiSize: "reaction"
                })
            }

            function we(e) {
                var t, n = e.firstMessage,
                    o = e.channel,
                    i = (0, H.IN)(n),
                    a = (0, S.Z)(o),
                    l = a.disableReactionUpdates,
                    s = a.isLurking,
                    c = a.isPendingMember;
                return null == i ? null : (0, r.jsx)(P.le, se({
                    className: re().updateReactionButton,
                    message: n,
                    readOnly: l || o.isArchivedLockedThread(),
                    isLurking: s,
                    isPendingMember: c,
                    useChatFontScaling: !1,
                    type: i.burst_count >= i.count ? v.O.BURST : v.O.NORMAL,
                    emojiSize: "reaction"
                }, i), "".concat(null !== (t = i.emoji.id) && void 0 !== t ? t : 0, ":").concat(i.emoji.name))
            }

            function Se(e) {
                var t, n = e.channel,
                    o = (0, U.H)(n.parent_id).sortOrder,
                    i = (0, H.xw)(n, o),
                    a = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    l = null == a ? null : te.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                        timestamp: (0, F.vc)(u()(a), "LLLL")
                    });
                return (0, r.jsx)(p.Tooltip, {
                    text: l,
                    tooltipClassName: re().timestampTooltip,
                    children: function(e) {
                        return (0, r.jsx)(p.Text, ce(se({
                            className: re().activityText,
                            variant: "text-sm/normal",
                            color: "header-secondary"
                        }, e), {
                            children: i
                        }))
                    }
                })
            }

            function xe(e) {
                var t = e.channel,
                    n = e.userIds,
                    o = e.facepileRef,
                    i = (0, H.iM)(t, n);
                return (0, r.jsx)("div", {
                    ref: o,
                    children: (0, r.jsx)(k.Z, {
                        className: re().facepile,
                        showDefaultAvatarsForNullUsers: !0,
                        guildId: t.guild_id,
                        users: i,
                        max: 5,
                        size: 16,
                        hideMoreUsers: !0,
                        showUserPopout: !0
                    })
                })
            }

            function Pe(e) {
                var t, n, o, i = e.channel,
                    l = e.firstMedia,
                    s = (0, d.e7)([M.Z], (function() {
                        return M.Z.isFocused()
                    })),
                    c = (0, y.d$)(l.src),
                    u = E.QK.useSetting(),
                    f = fe((0, O.hL)({
                        media: l,
                        channel: i
                    }), 2),
                    h = f[0],
                    m = f[1],
                    g = (0, O.MC)(m),
                    b = l.src,
                    v = l.width,
                    j = l.height,
                    w = l.alt;
                j > v ? n = he : t = de;
                return (0, r.jsx)(p.FocusBlock, {
                    enabled: !0,
                    children: (0, r.jsxs)("div", {
                        className: re().bodyMedia,
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        children: [b.startsWith("data:") ? (0, r.jsx)(I.Z, {
                            src: b,
                            maxHeight: t,
                            maxWidth: n,
                            width: v,
                            height: j,
                            alt: null != w && h ? g : w,
                            className: re().thumbnailContainer,
                            imageClassName: a()((o = {}, le(o, re().obscured, h), le(o, re().thumbnailOverride, !0), o))
                        }) : (0, x.Yi)({
                            src: b,
                            maxHeight: t,
                            maxWidth: n,
                            width: v,
                            height: j,
                            alt: null != w && h ? g : w,
                            autoPlay: u,
                            animated: c && !h && s,
                            containerClassName: re().thumbnailContainer,
                            imageClassName: a()(le({}, re().obscured, h))
                        }), h && (0, r.jsx)(W.Z, {
                            iconClassname: re().obscuredTag,
                            obscureReason: m
                        })]
                    })
                })
            }
        },
        503871: (e, t, n) => {
            n.d(t, {
                AF: () => m,
                NU: () => g,
                oL: () => h,
                xH: () => p
            });
            var r = n(38736),
                o = n(652286),
                i = n(943469),
                a = n(855483),
                l = n(61209),
                s = n(284610),
                c = n(372518),
                u = n(854602);
            var f = function e(t, n, r) {
                    var o = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.channelId = t;
                    this.set = n;
                    this.get = r;
                    this.editorHeight = 64;
                    this.editorAdditionRowHeight = 0;
                    this.listViewCardHeights = {};
                    this.cardHeightVersion = 0;
                    this.nameError = null;
                    this.messageError = null;
                    this.appliedTags = new Set;
                    this.popoutOpen = !1;
                    this.guidelinesOpen = !1;
                    this.onboardingExpanded = !1;
                    this.submitting = !1;
                    this.formOpen = !1;
                    this.name = "";
                    this.textAreaState = (0, a.eK)("");
                    this.hasClickedForm = !1;
                    this.titleFocused = !1;
                    this.bodyFocused = !1;
                    this.setEditorHeight = function(e) {
                        o.set({
                            editorHeight: e
                        })
                    };
                    this.setEditorAdditionRowHeight = function(e) {
                        o.set({
                            editorAdditionRowHeight: e
                        })
                    };
                    this.setCardHeight = function(e, t) {
                        var n = o.get(),
                            r = n.listViewCardHeights,
                            i = n.cardHeightVersion;
                        if (r[e] !== t) {
                            r[e] = t;
                            o.set({
                                cardHeightVersion: i + 1
                            })
                        }
                    };
                    this.setNameError = function(e) {
                        o.set({
                            nameError: e
                        })
                    };
                    this.setMessageError = function(e) {
                        o.set({
                            messageError: e
                        })
                    };
                    this.toggleAppliedTag = function(e) {
                        var t = o.get().appliedTags;
                        (t = new Set(t)).has(e) ? t.delete(e) : t.add(e);
                        o.set({
                            appliedTags: t
                        });
                        i.Z.changeThreadSettings(o.channelId, {
                            appliedTags: t
                        })
                    };
                    this.setPopoutOpen = function(e) {
                        o.set({
                            popoutOpen: e
                        })
                    };
                    this.setGuidelinesOpen = function(e) {
                        o.set({
                            guidelinesOpen: e
                        })
                    };
                    this.setSubmitting = function(e) {
                        o.set({
                            submitting: e
                        })
                    };
                    this.setFormOpen = function(e) {
                        o.set({
                            formOpen: e
                        });
                        c.Z.clearForumSearch(o.channelId)
                    };
                    this.setOnboardingExpanded = function(e) {
                        o.set({
                            onboardingExpanded: e
                        })
                    };
                    this.setTitleFocused = function(e) {
                        o.set({
                            titleFocused: e
                        })
                    };
                    this.setBodyFocused = function(e) {
                        o.set({
                            bodyFocused: e
                        })
                    };
                    this.setName = function(e) {
                        o.set({
                            name: e
                        });
                        i.Z.changeThreadSettings(o.channelId, {
                            name: e
                        })
                    };
                    this.setTextAreaState = function(e) {
                        o.set({
                            textAreaState: e
                        });
                        i.Z.saveDraft(o.channelId, e.textValue, s.d.FirstThreadMessage)
                    };
                    this.setHasClickedForm = function(e) {
                        o.set({
                            hasClickedForm: e
                        })
                    };
                    this.resetFormState = function() {
                        var e = l.Z.getChannel(o.channelId),
                            t = null == e || null == e.template ? "" : e.template.trim();
                        o.set({
                            name: "",
                            textAreaState: (0, a.eK)(t),
                            appliedTags: new Set,
                            hasClickedForm: !1
                        });
                        c.Z.clearForumSearch(o.channelId)
                    };
                    this.setFormOpenFromUserAction = function() {
                        if (!o.hasClickedForm) {
                            var e = l.Z.getChannel(o.channelId);
                            null != e && (0, u.HR)({
                                guildId: e.guild_id,
                                channelId: o.channelId
                            });
                            o.set({
                                hasClickedForm: !0,
                                formOpen: !0
                            });
                            c.Z.clearForumSearch(o.channelId)
                        }
                    };
                    var f = l.Z.getChannel(t);
                    if (null != f) {
                        var d, h, p, m = null !== (d = s.Z.getThreadSettings(f.id)) && void 0 !== d ? d : {},
                            g = null == f.template ? "" : f.template.trim(),
                            b = s.Z.getDraft(f.id, s.d.FirstThreadMessage),
                            y = (0, a.eK)(null != b && "" !== b.trim() ? b : g);
                        this.name = null !== (h = m.name) && void 0 !== h ? h : "";
                        this.appliedTags = null !== (p = new Set(m.appliedTags)) && void 0 !== p ? p : new Set;
                        this.formOpen = this.name.length > 0;
                        this.textAreaState = y
                    }
                },
                d = (0, o.Z)(),
                h = d.Provider,
                p = d.useStore,
                m = d.useStoreApi;

            function g(e) {
                return (0, r.Z)((function(t, n) {
                    return new f(e.id, t, n)
                }))
            }
        },
        727081: (e, t, n) => {
            n.d(t, {
                ZP: () => P,
                f7: () => S,
                fz: () => E,
                yJ: () => x
            });
            var r, o = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                s = n(457217),
                c = n(202351),
                u = n(70418),
                f = n(77413),
                d = n(316878),
                h = n(245353),
                p = n(189865),
                m = n(473708),
                g = n(727510),
                b = n.n(g);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function j(e, t) {
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

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e[e.SMALL = 0] = "SMALL";
                e[e.MEDIUM = 1] = "MEDIUM"
            }(r || (r = {}));

            function S(e) {
                var t, n = e.tag,
                    a = e.size,
                    g = void 0 === a ? r.MEDIUM : a,
                    y = e.disabled,
                    S = e.className,
                    x = e.onClick,
                    P = e.onRemove,
                    E = e.selected,
                    T = e.ariaLabel,
                    C = n.name,
                    Z = n.emojiId,
                    N = n.emojiName,
                    M = null != P,
                    A = w(i.useState(!1), 2),
                    I = A[0],
                    _ = A[1],
                    R = (0, c.e7)([h.Z], (function() {
                        return null != Z ? h.Z.getUsableCustomEmojiById(Z) : null
                    })),
                    L = M || null != x,
                    D = !(M && I || null == Z && null == N),
                    k = g === r.SMALL,
                    F = i.useRef(null),
                    U = (0, c.e7)([d.Z], (function() {
                        return d.Z.keyboardModeEnabled
                    })),
                    H = (0, o.jsxs)(o.Fragment, {
                        children: [D ? (0, o.jsx)(f.Z, {
                            className: l()(b().emoji, O({}, b().small, k)),
                            emojiId: Z,
                            emojiName: N,
                            animated: Boolean(null == R ? void 0 : R.animated),
                            size: "reaction",
                            alt: ""
                        }) : null, I && M && (0, o.jsx)("div", {
                            className: b().closeCircle,
                            children: (0, o.jsx)(p.Z, {
                                className: b().close
                            })
                        }), (0, o.jsx)(u.Text, {
                            className: b().increasedActivityText,
                            variant: "text-xs/medium",
                            lineClamp: 1,
                            children: C
                        })]
                    }),
                    B = {
                        key: n.id,
                        className: l()(b().pill, b().increasedActivityPill, (t = {}, O(t, b().disabled, y), O(t, b().clickable, L), O(t, b().increasedActivitySmall, k), O(t, b().selected, E), t), S),
                        onClick: function(e) {
                            null == x || x(e);
                            null == P || P(n);
                            U || null == F.current || F.current.blur()
                        },
                        onMouseEnter: function() {
                            return M && _(!0)
                        },
                        onMouseLeave: function() {
                            return M && _(!1)
                        }
                    },
                    z = (0, s.JA)("forum-tag-".concat(n.id));
                return L ? (0, o.jsx)(u.Clickable, j(v(j(v({}, z), {
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != T ? T : m.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: C
                    }),
                    role: "button",
                    "aria-pressed": E
                }), B), {
                    children: H
                })) : (0, o.jsx)("div", j(v({
                    "aria-label": null != T ? T : m.Z.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: C
                    })
                }, B), {
                    children: H
                }))
            }

            function x(e) {
                var t = e.tags,
                    n = e.count,
                    i = e.size,
                    a = (void 0 === i ? r.MEDIUM : i) === r.SMALL;
                return (0, o.jsx)(u.Tooltip, {
                    "aria-label": m.Z.Messages.FORUM_TAGS,
                    text: (0, o.jsx)(o.Fragment, {
                        children: t.map((function(e) {
                            return (0, o.jsx)(P, {
                                tag: e,
                                className: b().tooltipPill,
                                size: P.Sizes.SMALL
                            }, e.id)
                        }))
                    }),
                    children: function(e) {
                        return (0, o.jsx)("div", j(v({}, e), {
                            className: l()(b().pill, b().increasedActivityPill, O({}, b().increasedActivitySmall, a)),
                            children: (0, o.jsxs)(u.Text, {
                                className: b().increasedActivityText,
                                variant: a ? "text-xs/medium" : "text-sm/medium",
                                children: ["+", n]
                            })
                        }))
                    }
                })
            }

            function P(e) {
                var t, n = e.tag,
                    a = e.size,
                    g = void 0 === a ? r.MEDIUM : a,
                    y = e.disabled,
                    S = e.className,
                    x = e.onClick,
                    P = e.onRemove,
                    E = e.selected,
                    T = e.ariaLabel,
                    C = n.name,
                    Z = n.emojiId,
                    N = n.emojiName,
                    M = null != P,
                    A = w(i.useState(!1), 2),
                    I = A[0],
                    _ = A[1],
                    R = (0, c.e7)([h.Z], (function() {
                        return null != Z ? h.Z.getUsableCustomEmojiById(Z) : null
                    })),
                    L = M || null != x,
                    D = !(M && I || null == Z && null == N),
                    k = g === r.SMALL,
                    F = i.useRef(null),
                    U = (0, c.e7)([d.Z], (function() {
                        return d.Z.keyboardModeEnabled
                    })),
                    H = (0, o.jsxs)(o.Fragment, {
                        children: [D ? (0, o.jsx)(f.Z, {
                            className: l()(b().emoji, O({}, b().small, k)),
                            emojiId: Z,
                            emojiName: N,
                            animated: Boolean(null == R ? void 0 : R.animated),
                            size: "reaction"
                        }) : null, I && M && (0, o.jsx)("div", {
                            className: b().closeCircle,
                            children: (0, o.jsx)(p.Z, {
                                className: b().close
                            })
                        }), (0, o.jsx)(u.Text, {
                            variant: k ? "text-xs/semibold" : "text-sm/semibold",
                            lineClamp: 1,
                            children: C
                        })]
                    }),
                    B = {
                        key: n.id,
                        className: l()(b().pill, (t = {}, O(t, b().disabled, y), O(t, b().clickable, L), O(t, b().small, k), O(t, b().selected, E), t), S),
                        onClick: function(e) {
                            null == x || x(e);
                            null == P || P(n);
                            U || null == F.current || F.current.blur()
                        },
                        onMouseEnter: function() {
                            return M && _(!0)
                        },
                        onMouseLeave: function() {
                            return M && _(!1)
                        }
                    },
                    z = (0, s.JA)("forum-tag-".concat(n.id));
                return L ? (0, o.jsx)(u.Clickable, j(v(j(v({}, z), {
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != T ? T : m.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: C
                    }),
                    role: "button",
                    "aria-pressed": E
                }), B), {
                    children: H
                })) : (0, o.jsx)("div", j(v({}, B), {
                    children: H
                }))
            }

            function E(e) {
                var t = e.tags,
                    n = e.count,
                    i = e.size,
                    a = (void 0 === i ? r.MEDIUM : i) === r.SMALL;
                return (0, o.jsx)(u.Tooltip, {
                    "aria-label": m.Z.Messages.FORUM_TAGS,
                    text: (0, o.jsx)(o.Fragment, {
                        children: t.map((function(e) {
                            return (0, o.jsx)(P, {
                                tag: e,
                                className: b().tooltipPill,
                                size: P.Sizes.SMALL
                            }, e.id)
                        }))
                    }),
                    children: function(e) {
                        return (0, o.jsx)("div", j(v({}, e), {
                            className: l()(b().pill, O({}, b().small, a)),
                            children: (0, o.jsxs)(u.Text, {
                                variant: a ? "text-xs/semibold" : "text-sm/semibold",
                                children: ["+", n]
                            })
                        }))
                    }
                })
            }
            P.Sizes = r
        },
        16896: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(70418),
                l = n(952273),
                s = n(358969),
                c = n(473708),
                u = n(560891),
                f = n.n(u);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            const h = function(e) {
                var t, n, o = e.message,
                    u = e.channel,
                    h = e.renderColon,
                    p = e.hasUnreads,
                    m = (0, s.AJ)(u),
                    g = m.user,
                    b = m.author,
                    y = null !== (n = null !== (t = null == b ? void 0 : b.nick) && void 0 !== t ? t : null == g ? void 0 : g.username) && void 0 !== n ? n : "",
                    O = (0, l.l)(null == o ? void 0 : o.author, u.id, u.guild_id, !0, c.Z.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
                        name: y
                    }))(null != b ? b : void 0)((0, r.jsx)(r.Fragment, {
                        children: y
                    }), u.id);
                return (0, r.jsxs)(a.Text, {
                    tag: "span",
                    className: i()(f().author, d({}, f().hasUnreads, p)),
                    variant: "text-sm/semibold",
                    children: [O, !0 === h ? ": " : null]
                })
            }
        },
        589519: (e, t, n) => {
            n.d(t, {
                DM: () => T,
                ZP: () => Z,
                f6: () => C,
                qS: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(795308),
                s = n(70418),
                c = n(258985),
                u = n(659773),
                f = n(531441),
                d = n(621862),
                h = n(358969),
                p = n(727081),
                m = n(897196),
                g = n(473708),
                b = n(581145),
                y = n.n(b),
                O = n(611191),
                v = n.n(O),
                j = n(422093),
                w = n.n(j);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e, t) {
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
            var E = 16;

            function T(e) {
                var t = e.channel,
                    n = e.isNew,
                    r = (0, h.eV)(t),
                    o = r.slice(void 0, 3),
                    i = r.slice(3),
                    a = r.length > 3 ? r.length - 3 : 0,
                    l = t.hasFlag(m.zZ.PINNED);
                return {
                    shownTags: o,
                    remainingTags: i,
                    moreTagsCount: a,
                    isPinned: l,
                    shouldRenderTagsRow: o.length > 0 || l || n,
                    forumPostContainsTags: r.length > 0
                }
            }

            function C(e) {
                var t = e.channel,
                    n = e.isNew,
                    i = e.tagsClassName,
                    l = e.className,
                    f = T({
                        channel: t,
                        isNew: n
                    }),
                    h = f.shownTags,
                    m = f.remainingTags,
                    b = f.moreTagsCount,
                    y = f.isPinned,
                    O = f.shouldRenderTagsRow,
                    j = (0, d.H)(t.id).tagFilter;
                return O ? (0, r.jsxs)("div", {
                    className: a()(w().increasedActivityTags, l),
                    children: [y && (0, r.jsx)("div", {
                        className: v().pinIcon,
                        children: (0, r.jsx)(s.Tooltip, {
                            text: g.Z.Messages.PINNED_POST,
                            children: function(e) {
                                return (0, r.jsx)(u.Z, P(x({}, e), {
                                    width: E,
                                    height: E,
                                    color: "white"
                                }))
                            }
                        })
                    }), h.map((function(e, t) {
                        return (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(p.f7, {
                                tag: e,
                                size: p.ZP.Sizes.SMALL,
                                className: a()(i, S({}, w().tagFiltered, j.has(e.id)))
                            }), (t < h.length - 1 || b > 0) && (0, r.jsx)(c.Z, {
                                height: 4,
                                width: 4,
                                "aria-hidden": "true",
                                className: w().increasedActivityDotIcon
                            }, e.id.concat(t.toString()))]
                        }, e.id)
                    })), b > 0 ? (0, r.jsx)(p.yJ, {
                        tags: m,
                        count: b,
                        size: p.ZP.Sizes.SMALL
                    }) : null]
                }) : null
            }

            function Z(e) {
                var t = e.channel,
                    n = e.isNew,
                    o = e.tagsClassName,
                    i = e.className,
                    c = T({
                        channel: t,
                        isNew: n
                    }),
                    h = c.shownTags,
                    m = c.remainingTags,
                    b = c.moreTagsCount,
                    O = c.isPinned,
                    v = c.shouldRenderTagsRow,
                    j = (0, d.H)(t.id).tagFilter;
                return v ? (0, r.jsxs)("div", {
                    className: a()(w().tags, i),
                    children: [n ? (0, r.jsx)(f.IG, {
                        className: a()(y().newBadge, y().inTagsRow),
                        color: l.Z.unsafe_rawColors.BRAND_260.css,
                        text: g.Z.Messages.NEW
                    }) : null, O && (0, r.jsx)("div", {
                        className: w().pinIcon,
                        children: (0, r.jsx)(s.Tooltip, {
                            text: g.Z.Messages.PINNED_POST,
                            children: function(e) {
                                return (0, r.jsx)(u.Z, P(x({}, e), {
                                    width: E,
                                    height: E,
                                    color: "white"
                                }))
                            }
                        })
                    }), h.map((function(e) {
                        return (0, r.jsx)(p.ZP, {
                            tag: e,
                            size: p.ZP.Sizes.SMALL,
                            className: a()(o, S({}, w().tagFiltered, j.has(e.id)))
                        }, e.id)
                    })), b > 0 ? (0, r.jsx)(p.fz, {
                        tags: m,
                        count: b,
                        size: p.ZP.Sizes.SMALL
                    }) : null]
                }) : null
            }
        },
        661076: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(667294);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const a = function(e) {
                var t = i(r.useState(!1), 2),
                    n = t[0],
                    o = t[1];
                return {
                    isFocused: n,
                    handleFocus: r.useCallback((function(t) {
                        e(t);
                        o(!0)
                    }), [e, o]),
                    handleBlur: function() {
                        o(!1)
                    }
                }
            }
        },
        630097: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = (n(667294), n(809784)),
                i = n(971402);

            function a(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            a(i, r, o, l, s, "next", e)
                        }

                        function s(e) {
                            a(i, r, o, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
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
            var u = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };
            const f = function(e) {
                var t = e.facepileRef,
                    a = e.goToThread,
                    f = e.channel;
                return {
                    handleLeftClick: function(e) {
                        var n;
                        (0, o.k)(e.target) && (null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target)) || a(f, e.shiftKey)
                    },
                    handleRightClick: function(e) {
                        return (0, i.jW)(e, l((function() {
                            var e, t;
                            return u(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(51493), n.e(40396)]).then(n.bind(n, 881580))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, c(function(e) {
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
                                            }({}, e), {
                                                channel: f
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }
            }
        },
        30778: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(872017),
                i = n(944522),
                a = n(225386),
                l = n(21372),
                s = n(746477),
                c = n(682776),
                u = n(728521),
                f = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var t = (0, r.e7)([s.Z], (function() {
                        return null == (null == e ? void 0 : e.guild_id) || s.Z.canChatInGuild(e.guild_id)
                    }), [e]),
                    n = (0, r.e7)([i.Z], (function() {
                        return null != (null == e ? void 0 : e.guild_id) && i.Z.isLurking(e.guild_id)
                    }), [e]),
                    d = (0, r.e7)([l.ZP], (function() {
                        return null != (null == e ? void 0 : e.guild_id) && l.ZP.isCurrentUserGuest(e.guild_id)
                    }), [e]),
                    g = (0, r.e7)([c.Z], (function() {
                        return t && c.Z.can(f.Plq.ADD_REACTIONS, e)
                    }), [t, e]),
                    b = m((0,
                        o.AB)(null == e ? void 0 : e.guild_id), 2)[1],
                    y = (0, a.$R)(e);
                return null == e ? {
                    disableReactionReads: !0,
                    disableReactionCreates: !0,
                    disableReactionUpdates: !0,
                    isLurking: !1,
                    isGuest: !1,
                    isPendingMember: !1
                } : p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            h(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)({
                    channel: e,
                    canChat: t,
                    renderReactions: !0,
                    canAddNewReactions: g,
                    isLurking: n,
                    isGuest: d,
                    communicationDisabled: b,
                    isActiveChannelOrUnarchivableThread: y
                })), {
                    isLurking: n,
                    isGuest: d,
                    isPendingMember: !1
                })
            }
        },
        809433: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(202351),
                o = n(664625),
                i = n(785085),
                a = n(44616);

            function l(e, t) {
                return e === t || (null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && ((null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier))
            }

            function s(e) {
                var t = (0, r.e7)([i.Z], (function() {
                    return !!i.Z.isEnabled() && i.Z.combosEnabled
                }));
                return (0, r.e7)([a.ZP, o.default], (function() {
                    return t ? a.ZP.getUserCombo(o.default.getId(), e) : void 0
                }), [e, t], l)
            }
        },
        659773: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const h = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    s = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    h = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(h)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: s,
                        d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    h = e.colorClass,
                    p = void 0 === h ? "" : h,
                    m = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(m)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M19.379 11.379a3 3 0 0 0 4.242 0l.025-.025a.5.5 0 0 0 0-.708L13.353.353a.5.5 0 0 0-.707 0l-.025.026a3 3 0 0 0 0 4.242L13 5l-2.917 2.917-3.65-.332a2 2 0 0 0-1.595.577l-.631.63a1 1 0 0 0 0 1.415l9.586 9.586a1 1 0 0 0 1.414 0l.63-.63a2 2 0 0 0 .578-1.596l-.332-3.65L19 11l.379.379Zm-10.31 5.69a.5.5 0 0 1-.077.77l-5.151 3.434a.5.5 0 0 1-.63-.063l-.421-.42a.5.5 0 0 1-.063-.631l3.435-5.152a.5.5 0 0 1 .77-.076l2.137 2.138Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        498619: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const h = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    s = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    h = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(h)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: c,
                            fill: s,
                            fillRule: "nonzero",
                            d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                        })
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    h = e.colorClass,
                    p = void 0 === h ? "" : h,
                    m = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(m)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 22a9 9 0 0 0 7.032-14.618l.675-.675a1 1 0 0 0-1.414-1.414l-.675.675A8.957 8.957 0 0 0 13 4.055V3h2a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h2v1.055a8.957 8.957 0 0 0-4.618 1.913l-.675-.675a1 1 0 0 0-1.414 1.414l.675.675A9 9 0 0 0 12 22Zm3.707-11.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414l3-3Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        }
    }
]);