"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7544], {
        531304: (e, t, n) => {
            n.d(t, {
                Z: () => ve
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                s = n(496486),
                l = n.n(s),
                c = n(730381),
                u = n.n(c),
                f = n(853158),
                d = n(547308),
                h = n(202351),
                p = n(795308),
                m = n(882723),
                g = n(744564),
                y = n(652591),
                b = n(2590);
            const v = function(e) {
                g.Z.dispatch({
                    type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
                    key: e,
                    value: !0
                });
                y.default.track(b.rMx.CLOSE_TUTORIAL, {
                    tutorial: "activity-invite-nux-inline",
                    application_id: e,
                    acknowledged: !0
                })
            };
            var O = n(661123),
                j = n(545580);
            var S = n(627342),
                w = n(44616),
                x = n(795470),
                P = n(673383),
                T = n(809433),
                C = n(473708),
                E = n(148956),
                Z = n.n(E);

            function N(e) {
                var t = e.channelId,
                    n = (0, T.Z)(t);
                if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
                var i = n.multiplier,
                    o = (0, P.yz)(i).color;
                return (0, r.jsxs)("div", {
                    className: Z().container,
                    children: [(0, r.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        children: C.Z.Messages.POGGERMODE_COMBO_BAR
                    }), (0, r.jsx)(m.Progress, {
                        foregroundColor: (0, x.Lq)(o),
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

            function _(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
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
                        var i = A(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
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
                    t && I(e, t)
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
                r.__getLocalVars = function() {
                    return {
                        state: D
                    }
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
                J = n(901654),
                $ = n(570662),
                K = n(930948),
                Q = n(72580),
                X = n(773148),
                ee = n(567622),
                te = n.n(ee);

            function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function re(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ie(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function oe(e) {
                oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return oe(e)
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

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ie(e, t, n[t])
                    }))
                }
                return e
            }

            function le(e, t) {
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
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
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
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
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
                    var n, r = oe(e);
                    if (t) {
                        var i = oe(this).constructor;
                        n = Reflect.construct(r, arguments, i)
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
                            null != t && null != t.application_id && v(t.application_id)
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this;
                        this.timeout = setTimeout((function() {
                            e.setState({
                                fadeIn: !0
                            });
                            e.timeout = null;
                            e.logShownEventIfNeeded()
                        }), 100)
                    };
                    i.componentDidUpdate = function() {
                        this.logShownEventIfNeeded()
                    };
                    i.logShownEventIfNeeded = function() {
                        var e = this.props.activity.application_id;
                        if (null != e && -1 === me.indexOf(e)) {
                            y.default.track(b.rMx.SHOW_TUTORIAL, {
                                tutorial: "activity-invite-nux-inline",
                                application_id: e
                            });
                            me.push(e)
                        }
                    };
                    i.componentWillUnmount = function() {
                        null !== this.timeout && clearTimeout(this.timeout)
                    };
                    i.render = function() {
                        var e = this.props.activity;
                        return (0, r.jsxs)("div", {
                            className: a()(te().activityInviteEducation, ie({}, te().activityInviteEducationFadeIn, this.state.fadeIn)),
                            children: [(0, r.jsx)("div", {
                                className: te().activityInviteEducationArrow
                            }), (0, r.jsx)("span", {
                                children: C.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
                                    game: e.name,
                                    dismissOnClick: this.handleDismissInviteEducation
                                })
                            })]
                        })
                    };
                    return n
                }(i.PureComponent);

            function ye(e) {
                e.channel, e.guild;
                return (0, r.jsx)(S.Z, {
                    contentTypes: [],
                    children: function(e) {
                        e.visibleContent, e.markAsDismissed;
                        return null
                    }
                })
            }
            var be = function(e) {
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
                var i = n.prototype;
                i.componentDidMount = function() {
                    K.S.subscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
                };
                i.componentWillUnmount = function() {
                    K.S.unsubscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
                };
                i.getCooldownTextStyle = function() {
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
                i.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.guildId,
                        i = t.activity,
                        o = t.showInviteEducation,
                        s = t.isFocused,
                        c = t.typingUsers,
                        d = t.className,
                        h = t.slowmodeCooldownGuess,
                        p = t.isBypassSlowmode,
                        g = t.channel,
                        y = t.isThreadCreation,
                        v = t.renderDots,
                        O = t.poggermodeEnabled,
                        j = t.isComboing,
                        S = g.rateLimitPerUser,
                        w = q.default.getCurrentUser(),
                        x = B.Z.getGuild(n),
                        P = S > 0,
                        T = y ? [] : l()(c).keys().filter((function(e) {
                            return e !== (null == w ? void 0 : w.id)
                        })).reject(G.Z.isBlocked).map((function(e) {
                            return q.default.getUser(e)
                        })).filter(Q.lm).map((function(t) {
                            return X.ZP.getName(n, e.props.channel.id, t)
                        })).value();
                    if (0 === T.length && !P && !j) return o && null != i ? (0, r.jsx)(ge, {
                        activity: i,
                        isFocused: s
                    }) : (0, r.jsx)(ye, {
                        channel: g,
                        guild: x
                    });
                    var E = "",
                        Z = null,
                        M = "";
                    if (P) {
                        Z = (0, r.jsx)($.Z, {
                            className: te().slowModeIcon
                        });
                        if (S >= b.UF9.HOUR) {
                            var A = Math.floor(S / b.UF9.HOUR),
                                _ = Math.floor((S - A * b.UF9.HOUR) / b.UF9.MINUTE),
                                I = S - A * b.UF9.HOUR - _ * b.UF9.MINUTE;
                            M = C.Z.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
                                hours: A,
                                minutes: _,
                                seconds: I
                            })
                        } else if (S >= 60) {
                            var R = Math.floor(S / 60),
                                L = S - 60 * R;
                            M = C.Z.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
                                minutes: R,
                                seconds: L
                            })
                        } else M = C.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
                            seconds: S
                        });
                        if (!p && h > 0) {
                            var D = u().duration(h);
                            if (h > 1e3 * b.UF9.HOUR) {
                                var k = "".concat(D.minutes()).padStart(2, "0"),
                                    F = "".concat(D.seconds()).padStart(2, "0");
                                E = "".concat(D.hours(), ":").concat(k, ":").concat(F)
                            } else {
                                var U = "".concat(D.seconds()).padStart(2, "0");
                                E = "".concat(D.minutes(), ":").concat(U)
                            }
                        } else 0 === T.length && (E = p ? C.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : C.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT)
                    }
                    var H, z = de(T, 3),
                        W = z[0],
                        V = z[1],
                        Y = z[2];
                    H = 0 === T.length ? "" : 1 === T.length ? C.Z.Messages.ONE_USER_TYPING.format({
                        a: W
                    }) : 2 === T.length ? C.Z.Messages.TWO_USERS_TYPING.format({
                        a: W,
                        b: V
                    }) : 3 === T.length ? C.Z.Messages.THREE_USERS_TYPING.format({
                        a: W,
                        b: V,
                        c: Y
                    }) : C.Z.Messages.SEVERAL_USERS_TYPING;
                    return (0, r.jsxs)("div", {
                        className: a()(te().typing, ie({
                            "stop-animation": !s
                        }, te().isComboing, O && j), d),
                        children: [(0, r.jsxs)("div", {
                            className: te().typingDots,
                            children: [T.length > 0 && !1 !== v && (0,
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
                                return (0, r.jsxs)(f.Z.div, le(se({
                                    style: e.getCooldownTextStyle(),
                                    className: te().cooldownWrapper
                                }, t), {
                                    children: [E, Z]
                                }))
                            }
                        }), O && j && (0, r.jsx)(N, {
                            channelId: g.id
                        })]
                    })
                };
                return n
            }(i.PureComponent);

            function ve(e) {
                var t = e.channel,
                    n = e.isThreadCreation,
                    i = void 0 !== n && n,
                    o = ce(e, ["channel", "isThreadCreation"]),
                    a = (0, h.e7)([W.Z], (function() {
                        return W.Z.findActivity((function(e) {
                            return null != e.application_id
                        }))
                    })),
                    s = (0, h.e7)([w.ZP, U.default], (function() {
                        return w.ZP.getUserCombo(U.default.getId(), t.id)
                    })),
                    l = (0, h.e7)([F, H.Z], (function() {
                        return function(e, t, n, r) {
                            var i = null == t ? void 0 : t.application_id;
                            if (null == e || null == t || !(0, j.Z)(t, b.xjy.JOIN) || null == i) return !1;
                            var o = r.getGame(i);
                            return null != o && !(0, O.yE)(o.flags, b.udG.EMBEDDED) && n.shouldShowEducation(i)
                        }(t, a, F, H.Z)
                    })),
                    c = (0, h.e7)([V.Z], (function() {
                        return V.Z.getSlowmodeCooldownGuess(t.id, i ? V.S.CreateThread : V.S.SendMessage)
                    })),
                    u = (0, h.e7)([z.Z], (function() {
                        return i ? z.Z.can(b.Plq.MANAGE_THREADS, t) : z.Z.can(b.Plq.MANAGE_CHANNELS, t) || z.Z.can(b.Plq.MANAGE_MESSAGES, t)
                    })),
                    f = le(se({}, o), {
                        baseTextColor: (0, m.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
                        activeTextColor: (0, m.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
                        showInviteEducation: l,
                        activity: a,
                        typingUsers: (0, h.e7)([Y.Z], (function() {
                            return Y.Z.getTypingUsers(t.id)
                        })),
                        isFocused: (0, h.e7)([J.Z], (function() {
                            return J.Z.isFocused()
                        })),
                        guildId: t.guild_id,
                        slowmodeCooldownGuess: c,
                        isComboing: null != s,
                        isBypassSlowmode: u,
                        channel: t,
                        isThreadCreation: i
                    });
                return (0, r.jsx)(be, se({}, f))
            }
        },
        840474: (e, t, n) => {
            n.d(t, {
                nC: () => h
            });
            var r = n(496486),
                i = n.n(r),
                o = n(470661),
                a = n.n(o),
                s = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

            function l(e) {
                return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
            }

            function c(e) {
                return e.toLowerCase()
            }

            function u(e) {
                return s.has(e)
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
                                return !f(e = c(l(e))) && !u(e) && t.has(a()(e))
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
                var t, n = new Set((t = e, i()(t.split(/\W+/)).map(l).reject(f).map(c).reject(u).map(a()).value()));
                return function(e) {
                    return d(e, n)
                }
            }
        },
        621862: (e, t, n) => {
            n.d(t, {
                H: () => y,
                v: () => b
            });
            var r = n(441143),
                i = n.n(r),
                o = n(38736),
                a = n(797186),
                s = n(920883),
                l = n(202351),
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
                    sortOrder: s.z.CREATION_DATE,
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
                            i = r.getChannelState(e),
                            o = d({}, n.channelStates);
                        o[e] = d({}, i, t);
                        r.set({
                            channelStates: o
                        })
                    };
                    this.getChannelState = function(e) {
                        if (null == e) return p;
                        var t = r.get().channelStates[e];
                        if (null == t) {
                            var n = c.Z.getChannel(e);
                            i()(null != n, "[Forum Channel Store] The channel should not be missing.");
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
                            i = new Set(n.tagFilter);
                        i.has(t) ? i.delete(t) : i.add(t);
                        r.setTagFilter(e, i)
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
                g = (0, o.Z)((function(e, t) {
                    return new m(e, t)
                })),
                y = function(e) {
                    var t = g();
                    return null == (0, l.e7)([c.Z], (function() {
                        return c.Z.getChannel(e)
                    })) ? p : t.getChannelState(e)
                },
                b = function() {
                    return g
                }
        },
        822110: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(498964)),
                o = n(210643),
                a = n(413297);
            const s = function(e) {
                var t = e.obscureReason,
                    n = e.iconClassname;
                return (0, i.EQ)(t).with(o.wk.EXPLICIT_CONTENT, (function() {
                    return (0, r.jsx)(a.Z, {
                        className: n
                    })
                })).with(o.wk.SPOILER, (function() {
                    return (0, r.jsx)(a.Z, {
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
                m9: () => Oe,
                au: () => Se,
                ZP: () => pe,
                NN: () => ge
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                s = n(441143),
                l = n.n(s),
                c = n(730381),
                u = n.n(c),
                f = n(457217),
                d = n(202351),
                h = n(795308),
                p = n(882723),
                m = n(531304),
                g = n(677681),
                y = n(840474),
                b = n(210643),
                v = n(841150),
                O = n(916286),
                j = n(804808),
                S = n(30778),
                w = n(386364),
                x = n(203244),
                P = n(968449),
                T = n(804185),
                C = n(61209),
                E = n(682776),
                Z = n(840922),
                N = n(901654),
                M = n(579722),
                A = n(439610),
                _ = n(507488),
                I = n(921122),
                R = n(763536),
                L = n(531441),
                D = n(96606),
                k = n(70145),
                F = n(621862),
                U = n(358969),
                H = n(234798),
                B = n(572615),
                z = n(524600),
                G = n(822110),
                W = n(503871),
                V = n(16896),
                Y = n(589519),
                q = n(661076);

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
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
            var K = n(630097),
                Q = n(2590),
                X = n(493254),
                ee = n(939198),
                te = n(473708),
                ne = n(687014),
                re = n.n(ne),
                ie = n(913198),
                oe = n.n(ie);

            function ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function se(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        se(e, t, n[t])
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
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function fe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
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
            const pe = i.memo((function(e) {
                var t = e.threadId,
                    n = e.goToThread,
                    o = e.observePostVisibilityAnalytics,
                    s = e.overrideMedia,
                    c = e.className,
                    u = e.containerWidth,
                    h = function(e) {
                        var t = e.threadId,
                            n = e.overrideMedia,
                            r = (0, d.e7)([C.Z], (function() {
                                return C.Z.getChannel(t)
                            }));
                        l()(null != r, "the thread should not be null here, a store must have missed an update");
                        var i = (0, d.e7)([T.ZP], (function() {
                                return T.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id
                            })),
                            o = (0, H.cl)(r).firstMessage,
                            a = (0, U.mX)({
                                firstMessage: o
                            }),
                            s = a.content,
                            c = a.firstMedia,
                            u = null != n ? n : c,
                            f = (0, U.nP)(r).messageCountText;
                        return {
                            channel: r,
                            isOpen: i,
                            messageCount: f,
                            firstMessage: o,
                            content: s,
                            media: u
                        }
                    }({
                        threadId: t,
                        overrideMedia: s
                    }),
                    m = h.channel,
                    y = h.isOpen,
                    b = h.messageCount,
                    v = h.firstMessage,
                    O = h.content,
                    j = h.media,
                    S = (0, g.Z)(),
                    w = S.ref,
                    x = S.height,
                    P = (0, W.xH)((function(e) {
                        return e.setCardHeight
                    }));
                i.useEffect((function() {
                    null != x && P(t, x)
                }), [x, P, t]);
                i.useEffect((function() {
                    null == o || o(w.current, t)
                }), [w, o, t]);
                var E = i.useRef(null),
                    Z = (0, K.Z)({
                        facepileRef: E,
                        goToThread: n,
                        channel: m
                    }),
                    N = Z.handleLeftClick,
                    M = Z.handleRightClick,
                    A = (0, f.JA)(t),
                    _ = (A.role, A.onFocus),
                    I = ue(A, ["role", "onFocus"]),
                    R = (0, q.Z)(_),
                    L = R.isFocused,
                    D = R.handleFocus,
                    k = R.handleBlur;
                return (0, r.jsxs)("div", {
                    ref: w,
                    "data-item-id": t,
                    onClick: N,
                    onContextMenu: M,
                    className: a()(re().container, c, se({}, re().isOpen, y)),
                    children: [(0, r.jsx)(p.Clickable, le({
                        onClick: N,
                        focusProps: {
                            ringTarget: w
                        },
                        onContextMenu: M,
                        "aria-label": te.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: m.name,
                            count: b
                        }),
                        className: re().focusTarget,
                        onFocus: D,
                        onBlur: k
                    }, I)), (0, r.jsxs)("div", {
                        className: re().left,
                        children: [(0, r.jsx)(p.HeadingLevel, {
                            children: (0, r.jsx)(me, {
                                channel: m,
                                firstMessage: v,
                                content: O,
                                hasMediaAttachment: null != j,
                                containerWidth: u
                            })
                        }), (0, r.jsx)(p.FocusBlock, {
                            enabled: !L,
                            children: (0, r.jsx)(ve, {
                                channel: m,
                                firstMessage: v,
                                facepileRef: E
                            })
                        })]
                    }), (null == v ? void 0 : v.blocked) || null == j ? null : (0, r.jsx)(Pe, {
                        channel: m,
                        firstMedia: j
                    })]
                })
            }));

            function me(e) {
                var t = e.channel,
                    n = e.firstMessage,
                    o = e.content,
                    s = e.hasMediaAttachment,
                    l = e.containerWidth,
                    c = (0, U.J$)(t),
                    u = c.isNew,
                    f = c.hasUnreads,
                    d = ge(t),
                    m = function(e, t, n) {
                        var r = i.useRef(null),
                            o = $(i.useState(!1), 2),
                            a = o[0],
                            s = o[1],
                            l = i.useCallback((function() {
                                if (e && null !== r.current) {
                                    var n;
                                    s((null === (n = r.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t)
                                }
                            }), [s, e, t]);
                        i.useLayoutEffect((function() {
                            l()
                        }), [l, e, n]);
                        return {
                            postTitleRef: r,
                            isNewBadgeOverflow: a
                        }
                    }(u, 24, l),
                    g = m.postTitleRef,
                    y = m.isNewBadgeOverflow;
                return (0, r.jsxs)("div", {
                    className: re().body,
                    children: [(0, r.jsx)(Y.ZP, {
                        channel: t
                    }), (0, r.jsx)("div", {
                        className: a()(re().header, se({}, re().withNewBadgeOverflow, y)),
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
                                        children: (0, r.jsx)(L.IG, {
                                            className: re().newBadge,
                                            color: h.Z.unsafe_rawColors.BRAND_260.css,
                                            text: te.Z.Messages.NEW
                                        })
                                    })]
                                })
                            }), u && y && (0, r.jsx)(L.IG, {
                                className: re().newBadge,
                                color: h.Z.unsafe_rawColors.BRAND_260.css,
                                text: te.Z.Messages.NEW
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: re().message,
                        children: (0, r.jsx)(be, {
                            channel: t,
                            message: n,
                            content: o,
                            hasMediaAttachment: s,
                            hasUnreads: f
                        })
                    })]
                })
            }

            function ge(e) {
                var t = (0, d.e7)([z.Z], (function() {
                        return z.Z.getHasSearchResults(e.parent_id)
                    })),
                    n = (0, d.e7)([z.Z], (function() {
                        return z.Z.getSearchQuery(e.parent_id)
                    })),
                    r = i.useMemo((function() {
                        return (0, y.nC)(t && null != n ? n : "")
                    }), [t, n]);
                return i.useMemo((function() {
                    return (0, j.ZP)({
                        content: e.name,
                        embeds: []
                    }, {
                        postProcessor: r
                    }).content
                }), [e.name, r])
            }

            function ye(e) {
                var t = e.message,
                    n = e.channel,
                    i = e.content,
                    o = e.hasMediaAttachment,
                    s = e.hasUnreads,
                    l = (0, d.e7)([Z.Z], (function() {
                        return null != t && Z.Z.isBlocked(t.author.id)
                    })),
                    c = (0, d.e7)([B.Z], (function() {
                        return B.Z.isLoading(n.id)
                    })),
                    u = (0, d.e7)([E.Z], (function() {
                        return E.Z.can(Q.Plq.MANAGE_MESSAGES, n)
                    })),
                    f = P.cC.useSetting(),
                    h = null;
                if (l) h = (0, r.jsx)(p.Text, {
                    className: re().blockedMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: te.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
                });
                else {
                    var m = null == t ? {
                            contentPlaceholder: null,
                            renderedContent: null
                        } : (0, R.f)(t, i, l, a()(re().messageContent, oe().inlineFormat, oe().smallFontSize), {
                            iconClass: re().messageContentIcon,
                            iconSize: ee.WW
                        }),
                        g = m.contentPlaceholder,
                        y = m.renderedContent;
                    h = null != y ? (0, r.jsx)(p.Text, {
                        variant: "text-sm/semibold",
                        color: s ? "header-secondary" : "text-muted",
                        children: y
                    }) : o ? null : (0, r.jsx)(p.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: s ? "header-secondary" : "text-muted",
                        className: re().messageContent,
                        children: null == t ? c ? null : te.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED : g
                    })
                }
                return (0, r.jsxs)(_.a.Provider, {
                    value: (0, O.Z)(f, u),
                    children: [!l && (0, r.jsx)(V.Z, {
                        channel: n,
                        message: t,
                        renderColon: null != h,
                        hasUnreads: s
                    }), (0, r.jsx)(p.FocusBlock, {
                        className: re().messageFocusBlock,
                        children: h
                    })]
                })
            }
            var be = i.memo(ye);

            function ve(e) {
                var t = e.channel,
                    n = e.facepileRef,
                    i = e.firstMessage,
                    o = (0, U.Q)(t),
                    a = null != (null == i ? void 0 : i.reactions) && i.reactions.length > 0;
                return (0, r.jsxs)("div", {
                    className: re().footer,
                    children: [a || null == i ? null : (0, r.jsx)(je, {
                        firstMessage: i,
                        channel: t
                    }), null == i ? null : (0, r.jsx)(Se, {
                        firstMessage: i,
                        channel: t
                    }), (0, r.jsx)(Oe, {
                        channel: t,
                        iconSize: 14
                    }), (0, r.jsx)("span", {
                        className: re().bullet,
                        children: "•"
                    }), o.length > 0 ? (0, r.jsxs)("div", {
                        className: re().typing,
                        children: [(0, r.jsx)(xe, {
                            channel: t,
                            userIds: o,
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
                    }) : (0, r.jsx)(we, {
                        channel: t
                    })]
                })
            }

            function Oe(e) {
                var t = e.channel,
                    n = e.iconSize,
                    i = e.showReadState,
                    o = void 0 !== i && i,
                    s = (0, U.nP)(t),
                    l = s.messageCountText,
                    c = s.unreadCount,
                    u = o && null == c;
                return (0, r.jsxs)("div", {
                    className: a()(re().messageCountBox, se({}, re().hasRead, u)),
                    children: [(0, r.jsx)("span", {
                        className: re().messageCountIcon,
                        children: (0, r.jsx)(I.Z, {
                            width: n,
                            height: n
                        })
                    }), "number" == typeof l ? (0, r.jsx)(M.Z, {
                        value: l,
                        digitWidth: 9,
                        className: re().messageCountText
                    }) : (0, r.jsx)("div", {
                        className: re().messageCountText,
                        children: l
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
                    i = (0, d.e7)([C.Z], (function() {
                        return C.Z.getChannel(n.parent_id)
                    })),
                    o = (0, U.Bs)(i),
                    a = (0, S.Z)(n),
                    s = a.disableReactionCreates,
                    l = a.isLurking,
                    c = a.isPendingMember;
                return null == o || s ? null : (0, r.jsx)(x.le, {
                    className: re().updateReactionButton,
                    message: t,
                    readOnly: n.isArchivedLockedThread(),
                    useChatFontScaling: !1,
                    isLurking: l,
                    isPendingMember: c,
                    emoji: o,
                    hideCount: !0,
                    count: 0,
                    burst_count: 0,
                    me: !1,
                    me_burst: !1,
                    type: v.O.NORMAL,
                    emojiSize: "reaction"
                })
            }

            function Se(e) {
                var t, n = e.firstMessage,
                    i = e.channel,
                    o = (0, U.IN)(n),
                    a = (0, S.Z)(i),
                    s = a.disableReactionUpdates,
                    l = a.isLurking,
                    c = a.isPendingMember;
                return null == o ? null : (0, r.jsx)(x.le, le({
                    className: re().updateReactionButton,
                    message: n,
                    readOnly: s || i.isArchivedLockedThread(),
                    isLurking: l,
                    isPendingMember: c,
                    useChatFontScaling: !1,
                    type: o.burst_count >= o.count ? v.O.BURST : v.O.NORMAL,
                    emojiSize: "reaction"
                }, o), "".concat(null !== (t = o.emoji.id) && void 0 !== t ? t : 0, ":").concat(o.emoji.name))
            }

            function we(e) {
                var t, n = e.channel,
                    i = (0, F.H)(n.parent_id).sortOrder,
                    o = (0, U.xw)(n, i),
                    a = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    s = null == a ? null : te.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                        timestamp: (0, k.vc)(u()(a), "LLLL")
                    });
                return (0, r.jsx)(p.Tooltip, {
                    text: s,
                    tooltipClassName: re().timestampTooltip,
                    children: function(e) {
                        return (0, r.jsx)(p.Text, ce(le({
                            className: re().activityText,
                            variant: "text-sm/normal",
                            color: "header-secondary"
                        }, e), {
                            children: o
                        }))
                    }
                })
            }

            function xe(e) {
                var t = e.channel,
                    n = e.userIds,
                    i = e.facepileRef,
                    o = (0, U.iM)(t, n);
                return (0, r.jsx)("div", {
                    ref: i,
                    children: (0, r.jsx)(D.Z, {
                        className: re().facepile,
                        showDefaultAvatarsForNullUsers: !0,
                        guildId: t.guild_id,
                        users: o,
                        max: 5,
                        size: 16,
                        hideMoreUsers: !0,
                        showUserPopout: !0
                    })
                })
            }

            function Pe(e) {
                var t, n, i, o = e.channel,
                    s = e.firstMedia,
                    l = (0, d.e7)([N.Z], (function() {
                        return N.Z.isFocused()
                    })),
                    c = X.LR.test(s.src),
                    u = P.QK.useSetting(),
                    f = fe((0, b.hL)({
                        media: s,
                        channel: o
                    }), 2),
                    h = f[0],
                    m = f[1],
                    g = (0, b.MC)(m),
                    y = s.src,
                    v = s.width,
                    O = s.height,
                    j = s.alt;
                O > v ? n = he : t = de;
                return (0, r.jsx)(p.FocusBlock, {
                    enabled: !0,
                    children: (0, r.jsxs)("div", {
                        className: re().bodyMedia,
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        children: [y.startsWith("data:") ? (0, r.jsx)(A.Z, {
                            src: y,
                            maxHeight: t,
                            maxWidth: n,
                            width: v,
                            height: O,
                            alt: null != j && h ? g : j,
                            className: re().thumbnailContainer,
                            imageClassName: a()((i = {}, se(i, re().obscured, h), se(i, re().thumbnailOverride, !0), i))
                        }) : (0, w.Yi)({
                            src: y,
                            maxHeight: t,
                            maxWidth: n,
                            width: v,
                            height: O,
                            alt: null != j && h ? g : j,
                            autoPlay: u,
                            animated: c && !h && l,
                            containerClassName: re().thumbnailContainer,
                            imageClassName: a()(se({}, re().obscured, h))
                        }), h && (0, r.jsx)(G.Z, {
                            iconClassname: re().obscuredTag,
                            obscureReason: m
                        })]
                    })
                })
            }
        },
        503871: (e, t, n) => {
            n.d(t, {
                oL: () => h,
                xH: () => p,
                AF: () => m,
                NU: () => g
            });
            var r = n(38736),
                i = n(652286),
                o = n(943469),
                a = n(855483),
                s = n(61209),
                l = n(284610),
                c = n(372518),
                u = n(854602);
            var f = function e(t, n, r) {
                    var i = this;
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
                        i.set({
                            editorHeight: e
                        })
                    };
                    this.setEditorAdditionRowHeight = function(e) {
                        i.set({
                            editorAdditionRowHeight: e
                        })
                    };
                    this.setCardHeight = function(e, t) {
                        var n = i.get(),
                            r = n.listViewCardHeights,
                            o = n.cardHeightVersion;
                        if (r[e] !== t) {
                            r[e] = t;
                            i.set({
                                cardHeightVersion: o + 1
                            })
                        }
                    };
                    this.setNameError = function(e) {
                        i.set({
                            nameError: e
                        })
                    };
                    this.setMessageError = function(e) {
                        i.set({
                            messageError: e
                        })
                    };
                    this.toggleAppliedTag = function(e) {
                        var t = i.get().appliedTags;
                        (t = new Set(t)).has(e) ? t.delete(e) : t.add(e);
                        i.set({
                            appliedTags: t
                        });
                        o.Z.changeThreadSettings(i.channelId, {
                            appliedTags: t
                        })
                    };
                    this.setPopoutOpen = function(e) {
                        i.set({
                            popoutOpen: e
                        })
                    };
                    this.setGuidelinesOpen = function(e) {
                        i.set({
                            guidelinesOpen: e
                        })
                    };
                    this.setSubmitting = function(e) {
                        i.set({
                            submitting: e
                        })
                    };
                    this.setFormOpen = function(e) {
                        i.set({
                            formOpen: e
                        });
                        c.Z.clearForumSearch(i.channelId)
                    };
                    this.setOnboardingExpanded = function(e) {
                        i.set({
                            onboardingExpanded: e
                        })
                    };
                    this.setTitleFocused = function(e) {
                        i.set({
                            titleFocused: e
                        })
                    };
                    this.setBodyFocused = function(e) {
                        i.set({
                            bodyFocused: e
                        })
                    };
                    this.setName = function(e) {
                        i.set({
                            name: e
                        });
                        o.Z.changeThreadSettings(i.channelId, {
                            name: e
                        })
                    };
                    this.setTextAreaState = function(e) {
                        i.set({
                            textAreaState: e
                        });
                        o.Z.saveDraft(i.channelId, e.textValue, l.d.FirstThreadMessage)
                    };
                    this.setHasClickedForm = function(e) {
                        i.set({
                            hasClickedForm: e
                        })
                    };
                    this.resetFormState = function() {
                        var e = s.Z.getChannel(i.channelId),
                            t = null == e || null == e.template ? "" : e.template.trim();
                        i.set({
                            name: "",
                            textAreaState: (0, a.eK)(t),
                            appliedTags: new Set,
                            hasClickedForm: !1
                        });
                        c.Z.clearForumSearch(i.channelId)
                    };
                    this.setFormOpenFromUserAction = function() {
                        if (!i.hasClickedForm) {
                            var e = s.Z.getChannel(i.channelId);
                            null != e && (0, u.HR)({
                                guildId: e.guild_id,
                                channelId: i.channelId
                            });
                            i.set({
                                hasClickedForm: !0,
                                formOpen: !0
                            });
                            c.Z.clearForumSearch(i.channelId)
                        }
                    };
                    var f = s.Z.getChannel(t);
                    if (null != f) {
                        var d, h, p, m = null !== (d = l.Z.getThreadSettings(f.id)) && void 0 !== d ? d : {},
                            g = null == f.template ? "" : f.template.trim(),
                            y = l.Z.getDraft(f.id, l.d.FirstThreadMessage),
                            b = (0, a.eK)(null != y && "" !== y.trim() ? y : g);
                        this.name = null !== (h = m.name) && void 0 !== h ? h : "";
                        this.appliedTags = null !== (p = new Set(m.appliedTags)) && void 0 !== p ? p : new Set;
                        this.formOpen = this.name.length > 0;
                        this.textAreaState = b
                    }
                },
                d = (0, i.Z)(),
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
                f7: () => w,
                yJ: () => x,
                ZP: () => P,
                fz: () => T
            });
            var r, i = n(785893),
                o = n(667294),
                a = n(294184),
                s = n.n(a),
                l = n(457217),
                c = n(202351),
                u = n(882723),
                f = n(77413),
                d = n(316878),
                h = n(245353),
                p = n(189865),
                m = n(473708),
                g = n(174233),
                y = n.n(g);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
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

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e[e.SMALL = 0] = "SMALL";
                e[e.MEDIUM = 1] = "MEDIUM"
            }(r || (r = {}));

            function w(e) {
                var t, n = e.tag,
                    a = e.size,
                    g = void 0 === a ? r.MEDIUM : a,
                    b = e.disabled,
                    w = e.className,
                    x = e.onClick,
                    P = e.onRemove,
                    T = e.selected,
                    C = e.ariaLabel,
                    E = n.name,
                    Z = n.emojiId,
                    N = n.emojiName,
                    M = null != P,
                    A = S(o.useState(!1), 2),
                    _ = A[0],
                    I = A[1],
                    R = (0, c.e7)([h.Z], (function() {
                        return null != Z ? h.Z.getUsableCustomEmojiById(Z) : null
                    })),
                    L = M || null != x,
                    D = !(M && _ || null == Z && null == N),
                    k = g === r.SMALL,
                    F = o.useRef(null),
                    U = (0, c.e7)([d.Z], (function() {
                        return d.Z.keyboardModeEnabled
                    })),
                    H = (0, i.jsxs)(i.Fragment, {
                        children: [D ? (0, i.jsx)(f.Z, {
                            className: s()(y().emoji, v({}, y().small, k)),
                            emojiId: Z,
                            emojiName: N,
                            animated: Boolean(null == R ? void 0 : R.animated),
                            size: "reaction",
                            alt: ""
                        }) : null, _ && M && (0, i.jsx)("div", {
                            className: y().closeCircle,
                            children: (0, i.jsx)(p.Z, {
                                className: y().close
                            })
                        }), (0, i.jsx)(u.Text, {
                            className: y().increasedActivityText,
                            variant: "text-xs/medium",
                            lineClamp: 1,
                            children: E
                        })]
                    }),
                    B = {
                        key: n.id,
                        className: s()(y().pill, y().increasedActivityPill, (t = {}, v(t, y().disabled, b), v(t, y().clickable, L), v(t, y().increasedActivitySmall, k), v(t, y().selected, T), t), w),
                        onClick: function(e) {
                            null == x || x(e);
                            null == P || P(n);
                            U || null == F.current || F.current.blur()
                        },
                        onMouseEnter: function() {
                            return M && I(!0)
                        },
                        onMouseLeave: function() {
                            return M && I(!1)
                        }
                    },
                    z = (0, l.JA)("forum-tag-".concat(n.id));
                return L ? (0, i.jsx)(u.Clickable, j(O(j(O({}, z), {
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != C ? C : m.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: E
                    }),
                    role: "button",
                    "aria-pressed": T
                }), B), {
                    children: H
                })) : (0, i.jsx)("div", j(O({
                    "aria-label": null != C ? C : m.Z.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: E
                    })
                }, B), {
                    children: H
                }))
            }

            function x(e) {
                var t = e.tags,
                    n = e.count,
                    o = e.size,
                    a = (void 0 === o ? r.MEDIUM : o) === r.SMALL;
                return (0, i.jsx)(u.Tooltip, {
                    "aria-label": m.Z.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map((function(e) {
                            return (0, i.jsx)(P, {
                                tag: e,
                                className: y().tooltipPill,
                                size: P.Sizes.SMALL
                            }, e.id)
                        }))
                    }),
                    children: function(e) {
                        return (0, i.jsx)("div", j(O({}, e), {
                            className: s()(y().pill, y().increasedActivityPill, v({}, y().increasedActivitySmall, a)),
                            children: (0, i.jsxs)(u.Text, {
                                className: y().increasedActivityText,
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
                    b = e.disabled,
                    w = e.className,
                    x = e.onClick,
                    P = e.onRemove,
                    T = e.selected,
                    C = e.ariaLabel,
                    E = n.name,
                    Z = n.emojiId,
                    N = n.emojiName,
                    M = null != P,
                    A = S(o.useState(!1), 2),
                    _ = A[0],
                    I = A[1],
                    R = (0, c.e7)([h.Z], (function() {
                        return null != Z ? h.Z.getUsableCustomEmojiById(Z) : null
                    })),
                    L = M || null != x,
                    D = !(M && _ || null == Z && null == N),
                    k = g === r.SMALL,
                    F = o.useRef(null),
                    U = (0, c.e7)([d.Z], (function() {
                        return d.Z.keyboardModeEnabled
                    })),
                    H = (0, i.jsxs)(i.Fragment, {
                        children: [D ? (0, i.jsx)(f.Z, {
                            className: s()(y().emoji, v({}, y().small, k)),
                            emojiId: Z,
                            emojiName: N,
                            animated: Boolean(null == R ? void 0 : R.animated),
                            size: "reaction"
                        }) : null, _ && M && (0, i.jsx)("div", {
                            className: y().closeCircle,
                            children: (0, i.jsx)(p.Z, {
                                className: y().close
                            })
                        }), (0, i.jsx)(u.Text, {
                            variant: k ? "text-xs/semibold" : "text-sm/semibold",
                            lineClamp: 1,
                            children: E
                        })]
                    }),
                    B = {
                        key: n.id,
                        className: s()(y().pill, (t = {}, v(t, y().disabled, b), v(t, y().clickable, L), v(t, y().small, k), v(t, y().selected, T), t), w),
                        onClick: function(e) {
                            null == x || x(e);
                            null == P || P(n);
                            U || null == F.current || F.current.blur()
                        },
                        onMouseEnter: function() {
                            return M && I(!0)
                        },
                        onMouseLeave: function() {
                            return M && I(!1)
                        }
                    },
                    z = (0, l.JA)("forum-tag-".concat(n.id));
                return L ? (0, i.jsx)(u.Clickable, j(O(j(O({}, z), {
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != C ? C : m.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: E
                    }),
                    role: "button",
                    "aria-pressed": T
                }), B), {
                    children: H
                })) : (0, i.jsx)("div", j(O({}, B), {
                    children: H
                }))
            }

            function T(e) {
                var t = e.tags,
                    n = e.count,
                    o = e.size,
                    a = (void 0 === o ? r.MEDIUM : o) === r.SMALL;
                return (0, i.jsx)(u.Tooltip, {
                    "aria-label": m.Z.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map((function(e) {
                            return (0, i.jsx)(P, {
                                tag: e,
                                className: y().tooltipPill,
                                size: P.Sizes.SMALL
                            }, e.id)
                        }))
                    }),
                    children: function(e) {
                        return (0, i.jsx)("div", j(O({}, e), {
                            className: s()(y().pill, v({}, y().small, a)),
                            children: (0, i.jsxs)(u.Text, {
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
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(882723),
                s = n(952273),
                l = n(358969),
                c = n(473708),
                u = n(569495),
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
                var t, n, i = e.message,
                    u = e.channel,
                    h = e.renderColon,
                    p = e.hasUnreads,
                    m = (0, l.AJ)(u),
                    g = m.user,
                    y = m.author,
                    b = null !== (n = null !== (t = null == y ? void 0 : y.nick) && void 0 !== t ? t : null == g ? void 0 : g.username) && void 0 !== n ? n : "",
                    v = (0, s.l)(null == i ? void 0 : i.author, u.id, u.guild_id, !0, c.Z.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
                        name: b
                    }))(null != y ? y : void 0)((0, r.jsx)(r.Fragment, {
                        children: b
                    }), u.id);
                return (0, r.jsxs)(a.Text, {
                    tag: "span",
                    className: o()(f().author, d({}, f().hasUnreads, p)),
                    variant: "text-sm/semibold",
                    children: [v, !0 === h ? ": " : null]
                })
            }
        },
        589519: (e, t, n) => {
            n.d(t, {
                qS: () => T,
                DM: () => C,
                f6: () => E,
                ZP: () => Z
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                s = n(795308),
                l = n(882723),
                c = n(258985),
                u = n(715173),
                f = n(531441),
                d = n(621862),
                h = n(358969),
                p = n(727081),
                m = n(897196),
                g = n(473708),
                y = n(687014),
                b = n.n(y),
                v = n(531179),
                O = n.n(v),
                j = n(971196),
                S = n.n(j);

            function w(e, t, n) {
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
                        w(e, t, n[t])
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
            var T = 16;

            function C(e) {
                var t = e.channel,
                    n = e.isNew,
                    r = (0, h.eV)(t),
                    i = r.slice(void 0, 3),
                    o = r.slice(3),
                    a = r.length > 3 ? r.length - 3 : 0,
                    s = t.hasFlag(m.zZ.PINNED);
                return {
                    shownTags: i,
                    remainingTags: o,
                    moreTagsCount: a,
                    isPinned: s,
                    shouldRenderTagsRow: i.length > 0 || s || n,
                    forumPostContainsTags: r.length > 0
                }
            }

            function E(e) {
                var t = e.channel,
                    n = e.isNew,
                    o = e.tagsClassName,
                    s = e.className,
                    f = C({
                        channel: t,
                        isNew: n
                    }),
                    h = f.shownTags,
                    m = f.remainingTags,
                    y = f.moreTagsCount,
                    b = f.isPinned,
                    v = f.shouldRenderTagsRow,
                    j = (0, d.H)(t.id).tagFilter;
                return v ? (0, r.jsxs)("div", {
                    className: a()(S().increasedActivityTags, s),
                    children: [b && (0, r.jsx)("div", {
                        className: O().pinIcon,
                        children: (0, r.jsx)(l.Tooltip, {
                            text: g.Z.Messages.PINNED_POST,
                            children: function(e) {
                                return (0, r.jsx)(u.Z, P(x({}, e), {
                                    width: T,
                                    height: T,
                                    color: "white"
                                }))
                            }
                        })
                    }), h.map((function(e, t) {
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(p.f7, {
                                tag: e,
                                size: p.ZP.Sizes.SMALL,
                                className: a()(o, w({}, S().tagFiltered, j.has(e.id)))
                            }), (t < h.length - 1 || y > 0) && (0, r.jsx)(c.Z, {
                                height: 4,
                                width: 4,
                                "aria-hidden": "true",
                                className: S().increasedActivityDotIcon
                            }, e.id.concat(t.toString()))]
                        }, e.id)
                    })), y > 0 ? (0, r.jsx)(p.yJ, {
                        tags: m,
                        count: y,
                        size: p.ZP.Sizes.SMALL
                    }) : null]
                }) : null
            }

            function Z(e) {
                var t = e.channel,
                    n = e.isNew,
                    i = e.tagsClassName,
                    o = e.className,
                    c = C({
                        channel: t,
                        isNew: n
                    }),
                    h = c.shownTags,
                    m = c.remainingTags,
                    y = c.moreTagsCount,
                    v = c.isPinned,
                    O = c.shouldRenderTagsRow,
                    j = (0, d.H)(t.id).tagFilter;
                return O ? (0, r.jsxs)("div", {
                    className: a()(S().tags, o),
                    children: [n ? (0, r.jsx)(f.IG, {
                        className: a()(b().newBadge, b().inTagsRow),
                        color: s.Z.unsafe_rawColors.BRAND_260.css,
                        text: g.Z.Messages.NEW
                    }) : null, v && (0, r.jsx)("div", {
                        className: S().pinIcon,
                        children: (0, r.jsx)(l.Tooltip, {
                            text: g.Z.Messages.PINNED_POST,
                            children: function(e) {
                                return (0, r.jsx)(u.Z, P(x({}, e), {
                                    width: T,
                                    height: T,
                                    color: "white"
                                }))
                            }
                        })
                    }), h.map((function(e) {
                        return (0, r.jsx)(p.ZP, {
                            tag: e,
                            size: p.ZP.Sizes.SMALL,
                            className: a()(i, w({}, S().tagFiltered, j.has(e.id)))
                        }, e.id)
                    })), y > 0 ? (0, r.jsx)(p.fz, {
                        tags: m,
                        count: y,
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

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const a = function(e) {
                var t = o(r.useState(!1), 2),
                    n = t[0],
                    i = t[1];
                return {
                    isFocused: n,
                    handleFocus: r.useCallback((function(t) {
                        e(t);
                        i(!0)
                    }), [e, i]),
                    handleBlur: function() {
                        i(!1)
                    }
                }
            }
        },
        630097: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                i = (n(667294), n(809784)),
                o = n(971402);

            function a(e, t, n, r, i, o, a) {
                try {
                    var s = e[o](a),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            a(o, r, i, s, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, i, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function l(e, t, n) {
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
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
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
                        (0, i.k)(e.target) && (null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target)) || a(f, e.shiftKey)
                    },
                    handleRightClick: function(e) {
                        return (0, o.jW)(e, s((function() {
                            var e, t;
                            return u(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(47405), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(43586), n.e(27499), n.e(79913), n.e(27764), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(54602), n.e(61953), n.e(6565), n.e(20419), n.e(47749), n.e(43043), n.e(95305)]).then(n.bind(n, 881580))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, c(function(e) {
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
                i = n(872017),
                o = n(944522),
                a = n(225386),
                s = n(21372),
                l = n(746477),
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
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
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
                var t = (0, r.e7)([l.Z], (function() {
                        return null == (null == e ? void 0 : e.guild_id) || l.Z.canChatInGuild(e.guild_id)
                    }), [e]),
                    n = (0,
                        r.e7)([o.Z], (function() {
                        return null != (null == e ? void 0 : e.guild_id) && o.Z.isLurking(e.guild_id)
                    }), [e]),
                    d = (0, r.e7)([s.ZP], (function() {
                        return null != (null == e ? void 0 : e.guild_id) && s.ZP.isCurrentUserGuest(e.guild_id)
                    }), [e]),
                    g = (0, r.e7)([c.Z], (function() {
                        return t && c.Z.can(f.Plq.ADD_REACTIONS, e)
                    }), [t, e]),
                    y = m((0, i.AB)(null == e ? void 0 : e.guild_id), 2)[1],
                    b = (0, a.$R)(e);
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
                    communicationDisabled: y,
                    isActiveChannelOrUnarchivableThread: b
                })), {
                    isLurking: n,
                    isGuest: d,
                    isPendingMember: !1
                })
            }
        },
        809433: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(202351),
                i = n(664625),
                o = n(785085),
                a = n(44616);

            function s(e, t) {
                return e === t || (null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && ((null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier))
            }

            function l(e) {
                var t = (0, r.e7)([o.Z], (function() {
                    return !!o.Z.isEnabled() && o.Z.combosEnabled
                }));
                return (0, r.e7)([a.ZP, i.default], (function() {
                    return t ? a.ZP.getUserCombo(i.default.getId(), e) : void 0
                }), [e, t], s)
            }
        },
        715173: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    c = void 0 === l ? 24 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    h = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(h)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                    })
                }))
            }
        },
        570662: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    h = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(h)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            fillRule: "nonzero",
                            d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                        })
                    })
                }))
            }
        }
    }
]);