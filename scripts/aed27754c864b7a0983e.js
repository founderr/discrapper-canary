"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76156, 58635], {
        758635: (e, t, n) => {
            n.d(t, {
                W: () => a
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                u = n(2590);

            function a() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: u.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => s
            });
            var r = n(473903),
                o = n(775173),
                i = n(72580),
                u = n(2590);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case u.d4z.DM:
                        var a = c(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            s = a[0];
                        return null == s ? null : s.getAvatarURL(void 0, t, n);
                    case u.d4z.GROUP_DM:
                        return o.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var d = 864e5,
                y = !1,
                v = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                b = s({}, v);

            function E() {
                b.affinityUserIds = new Set(b.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        b.userAffinities = e.userAffinities;
                        b.affinityUserIds = new Set(e.affinityUserIds);
                        b.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], E)
                };
                r.needsRefresh = function() {
                    return Date.now() - b.lastFetched > d
                };
                r.getFetching = function() {
                    return y
                };
                r.getState = function() {
                    return b
                };
                r.getUserAffinities = function() {
                    return b.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return b.affinityUserIds
                };
                r.__getLocalVars = function() {
                    return {
                        USER_AFFINITY_TTL: d,
                        fetching: y,
                        DEFAULT_AFFINITY_STORE_STATE: v,
                        state: b
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "UserAffinitiesStore";
            O.persistKey = "UserAffinitiesStore";
            O.migrations = [function(e) {
                return null
            }];
            const _ = new O(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    b.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    b.lastFetched = Date.now();
                    E();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    b = s({}, v)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => L
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                u = n(575626),
                a = n(744564),
                c = n(339432),
                s = n(996344),
                f = n(48315),
                l = n(382060),
                p = n(61209),
                h = n(567403),
                d = n(717091),
                y = n(9430),
                v = n(473903),
                b = n(102921),
                E = n(897196);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function I(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var m, A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(m || (m = {}));
            var S = new u.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? m.FAVORITE : m.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function C(e) {
                var t, n, r = null !== (n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var u = o()(i).valueOf(),
                        a = b.Z.fromTimestamp(u);
                    return b.Z.compare(r, a) > 0 ? r : a
                }
                return r
            }

            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: y.Z.isMessagesFavorite(e.id) && (0, c.cn)(),
                    isRequest: s.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function w() {
                S.clear();
                Object.values(p.Z.getMutablePrivateChannels()).forEach((function(e) {
                    S.set(e.id, T(e))
                }));
                (0, c.cn)() && y.Z.getAddedToMessages().forEach((function(e) {
                    var t = p.Z.getChannel(e);
                    null != t && (0, l.zi)(t.type) && S.set(t.id, T(t))
                }))
            }

            function F() {
                var e = p.Z.getMutablePrivateChannels();
                for (var t in e) S.set(t, T(e[t]))
            }
            var P, j, Z, N = (P = [], j = [], Z = [], function() {
                    var e = S.values(m.FAVORITE),
                        t = S.values(m.DEFAULT);
                    if (P !== e || j !== t) {
                        Z = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return Z.push(t)
                        }));
                        P = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return Z.push(t)
                        }));
                        j = t
                    }
                    return Z
                }),
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && g(e, t)
                    }(n, e);
                    var t = R(n);

                    function n() {
                        O(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(p.Z, h.Z, v.default, s.Z, y.Z);
                        this.syncWith([y.Z, s.Z], w)
                    };
                    r.getPrivateChannelIds = function() {
                        return N()
                    };
                    r.getSortedChannels = function() {
                        return [S.values(m.FAVORITE), S.values(m.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        S.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    r.__getLocalVars = function() {
                        return {
                            SortedChannelType: m,
                            data: S,
                            getPrivateChannelIds: N
                        }
                    };
                    return n
                }(i.ZP.Store);
            U.displayName = "PrivateChannelSortStore";
            const L = new U(a.Z, {
                CONNECTION_OPEN: w,
                CONNECTION_OPEN_SUPPLEMENTAL: w,
                OVERLAY_INITIALIZE: w,
                CACHE_LOADED: F,
                CACHE_LOADED_LAZY: F,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, l.hv)(e.type) || S.has(e.id)) && S.set(e.id, T(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, l.hv)(t.type)) return !1;
                    if (t.id === E.V) return !1;
                    S.set(t.id, T(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return S.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!S.has(t)) return !1;
                    var r = p.Z.getChannel(t);
                    return null != r && S.set(t, T(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return S.delete(t)
                }
            })
        },
        282898: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(882723),
                c = n(127661),
                s = n(361674),
                f = n(473708),
                l = n(357913),
                p = n.n(l);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function v(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    h(this, n);
                    var e;
                    (e = t.apply(this, arguments))._textInputRef = o.createRef();
                    e._containerRef = o.createRef();
                    e.handleClear = function() {
                        var t = e.props,
                            n = t.onClear,
                            r = t.forwardedRef,
                            o = (null != r ? r : e._textInputRef).current;
                        null != o && o.focus();
                        null != n && n()
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.autoFocus,
                        n = e.label,
                        o = e.placeholder,
                        i = e.searchTerm,
                        l = e.inputClassName,
                        h = e.className,
                        d = e.onChange,
                        y = e.onFocus,
                        v = e.onBlur,
                        b = e.onKeyPress,
                        E = e.autoComplete,
                        O = e.forwardedRef,
                        _ = e.closeIconClassName,
                        I = e.searchIconClassName,
                        g = e.cta,
                        m = null != i && i.length > 0,
                        A = null != O ? O : this._textInputRef;
                    return (0, r.jsx)(a.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: u()(p().searchBox, h),
                            ref: this._containerRef,
                            children: [(0, r.jsx)(a.TextInput, {
                                inputRef: A,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: p().searchBoxInputWrapper,
                                inputClassName: u()(p().searchBoxInput, l),
                                onChange: d,
                                onFocus: y,
                                onBlur: v,
                                onKeyPress: b,
                                value: m ? i : "",
                                placeholder: o,
                                autoFocus: t,
                                "aria-label": n,
                                autoComplete: E ? "on" : "off"
                            }), null != g ? (0, r.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: p().cta,
                                children: g
                            }) : null, m ? (0, r.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: p().clear,
                                "aria-label": f.Z.Messages.SEARCH_CLEAR,
                                children: (0, r.jsx)(c.Z, {
                                    className: u()(p().clearIcon, _)
                                })
                            }) : (0, r.jsx)(s.Z, {
                                className: u()(p().searchIcon, I),
                                "aria-label": f.Z.Messages.SEARCH
                            })]
                        })
                    })
                };
                return n
            }(o.Component);
            _.defaultProps = {
                autoComplete: !1
            };
            const I = o.forwardRef((function(e, t) {
                return (0, r.jsx)(_, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            d(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    forwardedRef: t
                }, e))
            }))
        }
    }
]);