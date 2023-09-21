(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14575, 84237], {
        296228: (e, t, n) => {
            e.exports = n.p + "31e9104ec280e397857c57635dac2352.jpg"
        },
        309038: (e, t, n) => {
            e.exports = n.p + "1cee7187f0916a9cce015c404de4e717.jpg"
        },
        211117: (e, t, n) => {
            e.exports = n.p + "62cbd27914f81784edf17c7ecf65315e.png"
        },
        823653: (e, t, n) => {
            e.exports = n.p + "861ab526aa1fabb04c6b7da8074e3e21.png"
        },
        278435: (e, t, n) => {
            e.exports = n.p + "2b161f52b9b84596354ac9579510d6dd.svg"
        },
        313106: (e, t, n) => {
            e.exports = n.p + "3faf617f2b0829505a37a3bf84d22939.svg"
        },
        699426: (e, t, n) => {
            e.exports = n.p + "b22c24eaa3dc943933753254734ed38d.svg"
        },
        502101: (e, t, n) => {
            e.exports = n.p + "ba03b22afa207964ab300c481a96dd4d.svg"
        },
        403058: (e, t, n) => {
            e.exports = n.p + "f0adef6f99ba5d66953de12662a754c1.svg"
        },
        102552: (e, t, n) => {
            e.exports = n.p + "33945de473a35f3cda1136c730b3dbf2.svg"
        },
        566240: (e, t, n) => {
            e.exports = n.p + "29873d798f326fb07e2d8e768b14f2d3.svg"
        },
        43009: (e, t, n) => {
            e.exports = n.p + "1b6864562222718532fdda8198fc359b.svg"
        },
        640846: (e, t, n) => {
            e.exports = n.p + "985195b3d11f0b5de20e75e83c8dc3ff.svg"
        },
        613651: (e, t, n) => {
            e.exports = n.p + "e5804f259532f5e18407b29c48bd4d28.svg"
        },
        25300: (e, t, n) => {
            e.exports = n.p + "5e4c2460f3706ab8ebabe787fb2e3bc6.svg"
        },
        572149: (e, t, n) => {
            e.exports = n.p + "41d04ee94a1e4407994284c320729101.svg"
        },
        615306: (e, t, n) => {
            e.exports = n.p + "973c782b732fbf67089956115691ba16.svg"
        },
        479467: (e, t, n) => {
            e.exports = n.p + "19cf92849be2284eb401172e435265d9.svg"
        },
        704923: (e, t, n) => {
            e.exports = n.p + "1b16169ee6f3b942ef7cc96718144bfa.svg"
        },
        790405: (e, t, n) => {
            "use strict";
            n.d(t, {
                yC: () => d,
                Nz: () => p,
                m$: () => h,
                jn: () => y,
                oO: () => b,
                QQ: () => v,
                j8: () => g,
                qt: () => m,
                u$: () => _,
                QY: () => S
            });
            var r = n(744564),
                o = n(396043),
                i = n(747126),
                a = n(923555),
                u = n(473903),
                l = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
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

            function d(e, t, n) {
                if (i.Z.didAgree(e)) {
                    var c = u.default.getCurrentUser();
                    if (null == c) return;
                    t.include_nsfw = null == c.nsfwAllowed || c.nsfwAllowed
                }
                var s = Object.keys(t);
                o.ZP.trackWithMetadata(l.rMx.SEARCH_STARTED, {
                    search_type: a.Z.getSearchType(),
                    prev_search_id: a.Z.getAnalyticsId(e),
                    num_modifiers: s.length,
                    modifiers: s.reduce((function(e, n) {
                        var r = t[n];
                        e[n] = Array.isArray(r) ? r.length : 1;
                        return e
                    }), {})
                });
                r.Z.dispatch({
                    type: "SEARCH_START",
                    query: t,
                    searchId: e,
                    queryString: n
                })
            }

            function p(e, t) {
                var n = a.Z.getQuery(e),
                    r = function(e) {
                        switch (e) {
                            case l.QIO.MOST_RELEVANT:
                                return {
                                    sort_by: "relevance", sort_order: "desc"
                                };
                            case l.QIO.OLDEST:
                                return {
                                    sort_by: "timestamp", sort_order: "asc"
                                };
                            case l.QIO.NEWEST:
                            default:
                                return {
                                    sort_by: "timestamp", sort_order: "desc"
                                }
                        }
                    }(t);
                return d(e, f(s({}, n, r), {
                    offset: 0
                }))
            }

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.vpv;
                return E(e, t)
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.vpv;
                return E(e, -t)
            }

            function b(e, t) {
                return O(e, t * l.vpv)
            }

            function E(e, t) {
                return O(e, a.Z.getOffset(e) + t)
            }

            function O(e, t) {
                var n = a.Z.getQuery(e),
                    r = a.Z.getTotalResults(e);
                if (!(t < 0 || t > r)) return d(e, f(s({}, n), {
                    offset: t
                }))
            }

            function v(e) {
                r.Z.dispatch({
                    type: "SEARCH_CLEAR_HISTORY",
                    searchId: e
                })
            }

            function g(e, t) {
                null != e && r.Z.dispatch({
                    type: "SEARCH_EDITOR_STATE_CHANGE",
                    searchId: e,
                    editorState: t
                })
            }

            function m(e) {
                o.ZP.trackWithMetadata(l.rMx.SEARCH_CLOSED, {
                    search_id: a.Z.getAnalyticsId(e)
                });
                r.Z.wait((function() {
                    return r.Z.dispatch({
                        type: "SEARCH_EDITOR_STATE_CLEAR",
                        searchId: e
                    })
                }))
            }

            function _(e, t, n) {
                null != e && r.Z.dispatch({
                    type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
                    searchId: e,
                    tokens: t,
                    cursorScope: n
                })
            }

            function S(e, t) {
                r.Z.dispatch({
                    type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
                    searchId: e,
                    showBlocked: t
                })
            }
        },
        481117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
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
            var l = "".concat(i.dGm, "/api/v2/scheduled-maintenances"),
                c = "".concat(i.dGm, "/api/v2/incidents/unresolved.json");
            const s = {
                checkIncidents: function() {
                    Promise.all([r.ZP.get("".concat(l, "/active.json")), r.ZP.get(c)]).then((function(e) {
                        var t = u(e, 2),
                            n = t[0],
                            r = t[1],
                            i = u(n.body.scheduled_maintenances, 1)[0],
                            a = u(r.body.incidents, 1)[0];
                        o.Z.dispatch({
                            type: "STATUS_PAGE_INCIDENT",
                            incident: a || i
                        })
                    }))
                },
                checkScheduledMaintenances: function() {
                    r.ZP.get("".concat(l, "/upcoming.json")).then((function(e) {
                        var t = u(e.body.scheduled_maintenances, 1)[0];
                        o.Z.dispatch({
                            type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                            maintenance: t
                        })
                    }))
                },
                ackScheduledMaintenance: function() {
                    o.Z.dispatch({
                        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
                    })
                }
            }
        },
        762572: (e, t, n) => {
            "use strict";
            n.d(t, {
                Xq: () => c,
                hZ: () => s,
                wk: () => f
            });
            var r = n(993231),
                o = n(165695),
                i = n(744564),
                a = n(652591),
                u = n(391438),
                l = n(2590);

            function c(e) {
                i.Z.dispatch({
                    type: "SURVEY_OVERRIDE",
                    id: e
                })
            }

            function s(e, t) {
                i.Z.dispatch({
                    type: "SURVEY_HIDE",
                    key: e
                });
                t ? a.default.track(l.rMx.APP_NOTICE_CLOSED, {
                    notice_type: l.kVF.SURVEY,
                    survey_id: e,
                    dismissed: t
                }) : a.default.track(l.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: l.kVF.SURVEY
                })
            }

            function f(e) {
                var t = {};
                null != e && (t.survey_override = e);
                return u.Z.get({
                    url: l.ANM.USER_SURVEY,
                    query: t,
                    trackedActionData: {
                        event: r.a9.USER_SURVEY_FETCH,
                        properties: function(e) {
                            var t, n = null == e || null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                            return (0, o.iG)({
                                key: null == n ? void 0 : n.key
                            })
                        }
                    }
                }).then((function(e) {
                    var t;
                    i.Z.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null == e || null === (t = e.body) || void 0 === t ? void 0 : t.survey
                    })
                }), (function() {
                    i.Z.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null
                    })
                }))
            }
        },
        813357: (e, t, n) => {
            "use strict";
            n.d(t, {
                h4: () => V,
                nH: () => H,
                QV: () => Q,
                ZP: () => K
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(496486),
                l = n.n(u),
                c = n(457217),
                s = n(202351),
                f = n(882723),
                d = n(105783),
                p = n(720419),
                h = n(914964),
                y = n(487868),
                b = n(784426),
                E = n(64234),
                O = n(61209),
                v = n(352980),
                g = n(682776),
                m = n(110680),
                _ = n(901654),
                S = n(700223),
                I = n(189865),
                P = n(652591),
                T = n(930948),
                N = n(2590),
                A = n(473708),
                C = n(127919),
                R = n.n(C);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function w(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function D(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function L(e, t) {
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

            function x(e, t) {
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

            function Z(e, t) {
                return !t || "object" !== U(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function k(e, t) {
                k = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return k(e, t)
            }

            function F(e) {
                return function(e) {
                    if (Array.isArray(e)) return j(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function G(e) {
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
                    var n, r = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Z(this, n)
                }
            }

            function B(e) {
                e.stopPropagation()
            }
            var V = function(e) {
                    var t = e.title,
                        n = e.children,
                        o = e.className;
                    return (0, r.jsxs)("div", {
                        className: a()(o, R().header),
                        children: [null == t ? null : (0, r.jsx)(f.Heading, {
                            variant: "heading-md/medium",
                            children: t
                        }), n]
                    })
                },
                H = function(e) {
                    var t = e.msg,
                        n = e.image;
                    return (0, r.jsxs)("div", {
                        className: R().emptyPlaceholder,
                        children: [(0, r.jsx)("div", {
                            className: R().image,
                            style: {
                                backgroundImage: "url(".concat(n, ")")
                            }
                        }), (0, r.jsx)("div", {
                            className: R().body,
                            children: t
                        })]
                    })
                },
                Y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && k(e, t)
                    }(n, e);
                    var t = G(n);

                    function n() {
                        w(this, n);
                        var e;
                        (e = t.apply(this, arguments)).handleClickJump = function(t) {
                            var n = e.props;
                            (0, n.jumpTo)(n.message, t)
                        };
                        e.handleClickClose = function(t) {
                            var n = e.props,
                                r = n.onCloseMessage,
                                o = n.message;
                            null != r && r(o, t)
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.renderJumpButton = function() {
                        var e = this.props.jumping;
                        return (0, r.jsxs)(f.Clickable, {
                            className: R().jumpButton,
                            onClick: this.handleClickJump,
                            children: [(0, r.jsx)("div", {
                                className: a()(R().text, {
                                    hidden: e
                                }),
                                children: A.Z.Messages.JUMP
                            }), (0, r.jsx)(f.Spinner, {
                                type: f.Spinner.Type.PULSING_ELLIPSIS,
                                className: a()(R().loading, D({}, R().visible, e))
                            })]
                        })
                    };
                    o.renderCloseButton = function() {
                        var e = this.props,
                            t = e.onCloseMessage,
                            n = e.canCloseAllMessages,
                            o = e.canManageMessages,
                            i = e.channel;
                        return null == t ? null : n || o || null != i && i.isPrivate() ? (0,
                            r.jsx)(f.Button, {
                            look: f.Button.Looks.BLANK,
                            size: f.Button.Sizes.NONE,
                            onClick: this.handleClickClose,
                            children: (0, r.jsx)(I.Z, {
                                className: R().closeIcon
                            })
                        }) : null
                    };
                    o.render = function() {
                        return (0, r.jsxs)("div", {
                            className: R().actionButtons,
                            children: [this.renderJumpButton(), this.renderCloseButton()]
                        })
                    };
                    return n
                }(o.PureComponent),
                z = s.ZP.connectStores([g.Z], (function(e) {
                    var t = e.channel;
                    return {
                        canManageMessages: null != t && g.Z.can(N.Plq.MANAGE_MESSAGES, t)
                    }
                }))(Y);

            function Q(e) {
                var t = e.analyticsName,
                    n = e.items,
                    i = e.hasMore,
                    u = e.loading,
                    d = e.loadMore,
                    p = e.renderHeader,
                    y = e.renderEmptyState,
                    b = e.renderItem,
                    O = e.getProTip,
                    v = e.scrollerClassName,
                    g = e.className,
                    I = e.listName,
                    C = o.useRef(null),
                    j = (0, h.Z)(I, C),
                    w = (0, s.e7)([m.Z], (function() {
                        return m.Z.hasNotice()
                    })),
                    M = (0, s.e7)([_.Z], (function() {
                        return _.Z.windowSize()
                    }));
                o.useEffect((function() {
                    P.default.track(N.rMx.OPEN_POPOUT, {
                        type: t
                    })
                }), [t]);
                o.useEffect((function() {
                    var e = function() {
                            var e;
                            null === (e = C.current) || void 0 === e || e.scrollPageUp({
                                animate: !0
                            })
                        },
                        t = function() {
                            var e;
                            null === (e = C.current) || void 0 === e || e.scrollPageDown({
                                animate: !0
                            })
                        };
                    T.S.subscribe(N.CkL.SCROLL_PAGE_DOWN, t);
                    T.S.subscribe(N.CkL.SCROLL_PAGE_UP, e);
                    return function() {
                        T.S.unsubscribe(N.CkL.SCROLL_PAGE_DOWN, t);
                        T.S.unsubscribe(N.CkL.SCROLL_PAGE_UP, e)
                    }
                }), []);
                var Z = o.useCallback((function() {
                        var e, t = null === (e = C.current) || void 0 === e ? void 0 : e.getScrollerState();
                        null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && i && !u && (null == d || d())
                    }), [i, d, u]),
                    k = [],
                    U = !0;
                if (null == n) k = [(0, r.jsx)("div", {
                    className: a()(R().emptyPlaceholder, R().loadingPlaceholder),
                    children: (0, r.jsx)(f.Spinner, {})
                }, "spinner")];
                else if (0 === n.length) k.push((0, r.jsx)(o.Fragment, {
                    children: y(E.Z.theme)
                }, "empty-state"));
                else {
                    U = !1;
                    k = [];
                    l().each(n, (function(e) {
                        var t;
                        (t = k).push.apply(t, F(b(e)))
                    }))
                }
                var G = null;
                null != n && n.length > 0 && null != d && (G = u ? (0, r.jsx)("div", {
                    className: R().loadingMore,
                    children: (0, r.jsx)(f.Spinner, {})
                }, "loading-more-after") : i ? (0, r.jsx)("div", {
                    className: R().hasMore,
                    children: (0, r.jsx)(f.Button, {
                        look: f.Button.Looks.FILLED,
                        color: f.Button.Colors.PRIMARY,
                        size: f.Button.Sizes.MAX,
                        onClick: d,
                        children: A.Z.Messages.LOAD_MORE_MESSAGES
                    })
                }) : (0, r.jsx)("div", {
                    className: R().scrollingFooterWrap,
                    children: y(E.Z.theme)
                }));
                var V = null == O ? void 0 : O(),
                    H = U && null != V ? (0, r.jsx)("div", {
                        className: R().footer,
                        children: (0, r.jsx)(S.Z, {
                            style: {
                                width: "100%",
                                paddingTop: 10
                            },
                            children: V
                        })
                    }) : null,
                    Y = {
                        maxHeight: M.height - 43 - 25
                    };
                w && (Y.maxHeight -= 40);
                var z = null != d && i;
                return (0, r.jsx)("div", {
                    className: a()(g, R().messagesPopoutWrap),
                    style: Y,
                    onClick: B,
                    onDoubleClick: B,
                    "aria-label": e["aria-label"],
                    children: (0, r.jsxs)(f.HeadingLevel, {
                        component: p(),
                        children: [(0, r.jsxs)(f.AdvancedScroller, {
                            className: a()(R().messagesPopout, v),
                            onScroll: z ? Z : void 0,
                            ref: C,
                            children: [(0, r.jsx)(c.bG, {
                                navigator: j,
                                children: (0, r.jsx)(c.SJ, {
                                    children: function(e) {
                                        var t = e.ref,
                                            n = x(e, ["ref"]);
                                        return (0, r.jsx)("div", L(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    D(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({
                                            ref: t
                                        }, n), {
                                            children: k
                                        }))
                                    }
                                })
                            }), G]
                        }), H]
                    })
                })
            }

            function K(e) {
                var t = function(e, t) {
                        var r = e.id,
                            o = e.blocked,
                            i = e.author,
                            a = e.channel_id;
                        if (o) d.Z.show({
                            title: A.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                            body: A.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
                                name: i.username
                            }),
                            confirmText: A.Z.Messages.OKAY
                        });
                        else if (!w) {
                            var u = O.Z.getChannel(a);
                            if (null != u) {
                                p.Z.trackJump(a, r, n);
                                (0, b.uL)(N.Z5c.CHANNEL(u.getGuildId(), a, r))
                            }
                            null == h || h(t)
                        }
                    },
                    n = e.analyticsName,
                    i = e.onFetch,
                    a = e.channel,
                    u = e.messages,
                    l = e.hasMore,
                    c = e.loading,
                    f = e.loadMore,
                    h = e.onJump,
                    E = e.canCloseAllMessages,
                    g = void 0 !== E && E,
                    m = e.renderHeader,
                    _ = e.renderEmptyState,
                    S = e.renderMessage,
                    I = e.getProTip,
                    P = e.scrollerClassName,
                    T = e.className,
                    C = e.onCloseMessage,
                    j = e.listName,
                    w = (0, s.e7)([v.Z], (function() {
                        var e = null != a ? v.Z.getMessages(a.id) : null;
                        return null != e && null != e.jumpTargetId && (e.loadingMore && null == e.get(e.jumpTargetId))
                    }));
                o.useEffect((function() {
                    i(a)
                }), [a, i]);
                var D = o.useMemo((function() {
                    return null == u ? void 0 : u.map((function(e) {
                        return {
                            message: e,
                            channel: a
                        }
                    }))
                }), [u, a]);
                return (0, r.jsx)(Q, {
                    className: T,
                    scrollerClassName: P,
                    items: D,
                    loading: c,
                    analyticsName: n,
                    renderEmptyState: _,
                    renderHeader: m,
                    hasMore: l,
                    loadMore: f,
                    getProTip: I,
                    renderItem: function(e) {
                        var n = e.message,
                            o = e.channel;
                        if (null == n) return [];
                        if (null != S) return S(n, (function(e) {
                            return t(n, e)
                        }));
                        var i = [];
                        if (null == o) return [];
                        i.push((0, r.jsxs)("div", {
                            className: R().messageGroupWrapper,
                            children: [(0, r.jsx)(y.Z, {
                                className: R().messageGroupCozy,
                                message: n,
                                channel: o
                            }), (0, r.jsx)(z, {
                                channel: a,
                                message: n,
                                jumping: w,
                                canCloseAllMessages: g,
                                jumpTo: t,
                                onCloseMessage: C
                            })]
                        }, n.id));
                        return i
                    },
                    listName: j,
                    "aria-label": e["aria-label"]
                })
            }
        },
        570814: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(667294).createContext(void 0)
        },
        914964: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(667294),
                o = n(798159),
                i = n(202351),
                a = n(316878);

            function u(e, t, n) {
                var u = (0, i.e7)([a.Z], (function() {
                        return a.Z.keyboardModeEnabled
                    })),
                    l = r.useCallback((function(e) {
                        var n = document.querySelector(e),
                            r = t.current;
                        if (null != n && null != r) {
                            n.focus();
                            r.scrollIntoViewNode({
                                node: n,
                                padding: 80
                            })
                        }
                    }), [t]),
                    c = r.useCallback((function() {
                        return new Promise((function(e) {
                            var n = t.current;
                            if (null == n) return e();
                            n.scrollTo({
                                to: 0,
                                callback: function() {
                                    return requestAnimationFrame((function() {
                                        return e()
                                    }))
                                }
                            })
                        }))
                    }), [t]),
                    s = r.useCallback((function() {
                        return new Promise((function(e) {
                            var n = t.current;
                            if (null == n) return e();
                            n.scrollTo({
                                to: Number.MAX_SAFE_INTEGER,
                                callback: function() {
                                    return requestAnimationFrame((function() {
                                        return e()
                                    }))
                                }
                            })
                        }))
                    }), [t]);
                return (0, o.ZP)({
                    id: e,
                    isEnabled: u,
                    setFocus: l,
                    scrollToStart: c,
                    scrollToEnd: s,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        221921: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => d,
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                a = n(201459),
                u = n(9430),
                l = n(2590),
                c = n(473708);

            function s(e) {
                switch (e.type) {
                    case l.d4z.GUILD_VOICE:
                        return null;
                    case l.d4z.GUILD_STAGE_VOICE:
                        return function(e) {
                            return [{
                                setting: l.bL.NULL,
                                label: null != e.parent_id ? c.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.Z.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: l.bL.ONLY_MENTIONS,
                                label: c.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                            }, {
                                setting: l.bL.NO_MESSAGES,
                                label: c.Z.Messages.FORM_LABEL_NOTHING
                            }]
                        }(e);
                    default:
                        return function(e) {
                            return [{
                                setting: l.bL.NULL,
                                label: null != e.parent_id ? c.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.Z.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: l.bL.ALL_MESSAGES,
                                label: c.Z.Messages.FORM_LABEL_ALL_MESSAGES
                            }, {
                                setting: l.bL.ONLY_MENTIONS,
                                label: c.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                            }, {
                                setting: l.bL.NO_MESSAGES,
                                label: c.Z.Messages.FORM_LABEL_NOTHING
                            }]
                        }(e)
                }
            }

            function f(e) {
                switch (e) {
                    case l.bL.ALL_MESSAGES:
                        return c.Z.Messages.FORM_LABEL_ALL_MESSAGES;
                    case l.bL.ONLY_MENTIONS:
                        return c.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                    case l.bL.NO_MESSAGES:
                        return c.Z.Messages.FORM_LABEL_NOTHING;
                    case l.bL.NULL:
                    default:
                        return
                }
            }

            function d(e) {
                var t = e.getGuildId(),
                    n = e.id,
                    d = (0, o.e7)([u.Z], (function() {
                        return u.Z.getChannelOverrides(t)[n]
                    }), [t, n]),
                    p = (0, o.e7)([u.Z], (function() {
                        var n = l.bL.NULL;
                        null != e.parent_id && (n = u.Z.getChannelMessageNotifications(t, e.parent_id));
                        return n !== l.bL.NULL ? n : u.Z.getMessageNotifications(t)
                    }), [t, e.parent_id]),
                    h = (0, o.e7)([u.Z], (function() {
                        return u.Z.getNewForumThreadsCreated(e)
                    })),
                    y = null == d ? l.bL.NULL : d.message_notifications,
                    b = s(e);
                return null == b ? null : (0, r.jsxs)(r.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: c.Z.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: h,
                            action: function() {
                                return a.Z.setForumThreadsCreated(e, !h)
                            }
                        }), (0, r.jsx)(i.MenuSeparator, {})]
                    }) : null, b.map((function(e) {
                        var o = e.setting,
                            u = e.label;
                        return (0, r.jsx)(i.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(o),
                            label: u,
                            subtext: o === l.bL.NULL ? f(p) : void 0,
                            action: function() {
                                return function(e) {
                                    null != t && a.Z.updateChannelOverrideSettings(t, n, {
                                        message_notifications: e
                                    })
                                }(o)
                            },
                            checked: o === y
                        }, o)
                    }))]
                })
            }

            function p(e) {
                var t, n, a = d(e),
                    f = (0, o.e7)([u.Z], (function() {
                        return u.Z.resolvedMessageNotifications(e)
                    }), [e]),
                    p = (0, o.e7)([u.Z], (function() {
                        return u.Z.getChannelOverrides(e.guild_id)[e.id]
                    }), [e.guild_id, e.id]),
                    h = (null == p ? l.bL.NULL : p.message_notifications) === l.bL.NULL && e.isGuildStageVoice() ? c.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = null === (t = s(e)) || void 0 === t ? void 0 : t.find((function(e) {
                        return e.setting === f
                    }))) || void 0 === n ? void 0 : n.label;
                return null != a ? (0, r.jsx)(i.MenuItem, {
                    id: "channel-notifications",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    subtext: h,
                    children: a
                }) : null
            }
        },
        683323: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
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
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = [];
            var d = function(e) {
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
                var t = s(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getEligibleGuildsForNagActivate = function() {
                    return f
                };
                r.__getLocalVars = function() {
                    return {
                        eligibleGuildsForNagActivate: f
                    }
                };
                return n
            }(r.ZP.Store);
            d.displayName = "CreatorMonetizationMarketingStore";
            const p = new d(o.Z, {
                CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
                    var t = e.eligibleGuilds;
                    f = t
                }
            })
        },
        385983: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2021-12_inferno_spam_redaction",
                label: "Inferno Spam Redaction",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow guild channel messages from spammers to be collapsed",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        618887: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vt: () => f,
                dN: () => d,
                Nw: () => p,
                R5: () => h,
                VT: () => y,
                BE: () => b,
                RJ: () => E,
                m0: () => O,
                Vb: () => v
            });
            var r = n(281110),
                o = n(744564),
                i = n(177570),
                a = n(2590);

            function u(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            u(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            u(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var c, s = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
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
                            }([i, u])
                        }
                    }
                },
                f = (c = l((function(e) {
                    var t, n;
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = !1;
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: a.ANM.DROPS_ELIGIBILITY,
                                    query: {
                                        drops_quest_id: e
                                    }
                                })];
                            case 2:
                                n = i.sent();
                                t = n.body.eligible;
                                return [3, 4];
                            case 3:
                                i.sent();
                                t = !1;
                                return [3, 4];
                            case 4:
                                o.Z.dispatch({
                                    type: "DROPS_ELIGIBILITY_FETCH_SUCCESS",
                                    isEligible: t,
                                    dropsQuestId: e
                                });
                                return [2]
                        }
                    }))
                })), function(e) {
                    return c.apply(this, arguments)
                }),
                d = (function() {
                    var e = l((function() {
                        var e;
                        return s(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.ZP.get({
                                        url: a.ANM.DROPS_REWARD_CODE
                                    })];
                                case 1:
                                    e = t.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_REWARD_CODE_FETCH_SUCCESS",
                                        rewardCode: e.body
                                    });
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var e = l((function(e) {
                        var t, n;
                        return s(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    t = [];
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.get({
                                        url: a.ANM.DROPS_PLATFORM_AVAILABILITY,
                                        query: {
                                            drops_quest_id: e
                                        }
                                    })];
                                case 2:
                                    n = i.sent();
                                    t = n.body.available_platforms;
                                    return [3, 4];
                                case 3:
                                    i.sent();
                                    t = [];
                                    return [3, 4];
                                case 4:
                                    o.Z.dispatch({
                                        type: "DROPS_PLATFORM_AVAILABILITY_SUCCESS",
                                        availablePlatforms: t
                                    });
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                p = function() {
                    var e = l((function(e, t) {
                        var n;
                        return s(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 2, , 3]);
                                    return [4, r.ZP.post({
                                        url: a.ANM.DROPS_CLAIM_REWARD_CODE,
                                        query: {
                                            drops_quest_id: e,
                                            platform: t
                                        }
                                    })];
                                case 1:
                                    n = i.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_REWARD_CODE_CLAIM_SUCCESS",
                                        rewardCode: n.body.code
                                    });
                                    return [2, n.body.code];
                                case 2:
                                    throw i.sent();
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = l((function() {
                        var e;
                        return s(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    return [4, r.ZP.get({
                                        url: a.ANM.DROPS_USER_STATUS
                                    })];
                                case 1:
                                    e = t.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_USER_STATUS_FETCH_SUCCESS",
                                        codes: e.body
                                    });
                                    return [3, 3];
                                case 2:
                                    t.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_USER_STATUS_FETCH_FAILURE"
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var e = l((function(e) {
                        return s(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.ZP.delete({
                                        url: a.ANM.DROPS_ENROLL_USER,
                                        query: {
                                            drops_quest_id: e
                                        }
                                    })];
                                case 1:
                                    t.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_UNENROLL_USER",
                                        dropsQuestId: e
                                    });
                                    return [4, h()];
                                case 2:
                                    t.sent();
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = l((function(e) {
                        var t;
                        return s(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, r.ZP.get({
                                        url: a.ANM.DROPS_ENROLL_USER,
                                        query: {
                                            drops_quest_id: e
                                        }
                                    })];
                                case 1:
                                    t = n.sent();
                                    return [4, o.Z.dispatch({
                                        type: "DROPS_ENROLLED_USER_FETCH_SUCCESS",
                                        enrolledUser: t.body.user,
                                        isEnrolled: t.body.enrolled,
                                        dropsQuestId: e
                                    })];
                                case 2:
                                    n.sent();
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = l((function(e) {
                        return s(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.ZP.post({
                                        url: a.ANM.DROPS_ENROLL_USER,
                                        query: {
                                            drops_quest_id: e
                                        }
                                    })];
                                case 1:
                                    t.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_ENROLL_SUCCESS"
                                    });
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = l((function(e, t, n) {
                        var u, l, c;
                        return s(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    u = i.Z.getViewerIds(t);
                                    s.label = 1;
                                case 1:
                                    s.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.post({
                                        url: a.ANM.DROPS_HEARTBEAT(e),
                                        query: {
                                            stream_key: t,
                                            application_id: n,
                                            viewer_count: u.length
                                        },
                                        retries: 2
                                    })];
                                case 2:
                                    l = s.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_HEARTBEAT_SUCCESS",
                                        dropsQuestId: e,
                                        completed: l.body.completed,
                                        progress: l.body.progress
                                    });
                                    return [3, 4];
                                case 3:
                                    c = s.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_HEARTBEAT_FAILURE",
                                        dropsQuestId: e,
                                        statusCode: null == c ? void 0 : c.status
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = l((function(e) {
                        var t;
                        return s(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    n.trys.push([0, 2, , 3]);
                                    return [4, r.ZP.get({
                                        url: a.ANM.DROPS_PROGRESS(e)
                                    })];
                                case 1:
                                    t = n.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_FETCH_PROGRESS_SUCCESS",
                                        dropsQuestId: e,
                                        completed: t.body.completed,
                                        progress: t.body.progress
                                    });
                                    return [3, 3];
                                case 2:
                                    n.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_FETCH_PROGRESS_FAILURE",
                                        dropsQuestId: e
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        483255: (e, t, n) => {
            "use strict";
            n.d(t, {
                El: () => o,
                kS: () => i,
                n4: () => a,
                X2: () => u,
                _e: () => l,
                RN: () => c,
                fS: () => s,
                oL: () => f,
                Zv: () => d
            });
            var r = n(473708);
            var o = ["XBOX", "PLAYSTATION", "SWITCH", "PC"],
                i = 2592e4,
                a = "https://support.discord.com/hc/en-us/articles/9146392276375",
                u = {
                    FORTNITE: "FORTNITE"
                },
                l = {
                    STREAM_CTA: "STREAM_CTA",
                    LOADING_INITIAL_PROGRESS: "LOADING_INITIAL_PROGRESS",
                    TRACK_PROGRESS: "TRACK_PROGRESS",
                    QUEST_COMPLETION: "QUEST_COMPLETION"
                },
                c = {
                    FORTNITE: ["Fortnite"]
                },
                s = "YYYY-MM-DD HH:mm",
                f = "1022633972510752774",
                d = function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }({}, u.FORTNITE, {
                    title: "Fortnite",
                    gameSearchTerm: c[u.FORTNITE],
                    assets: {
                        iconSrc: n(309038),
                        tooltipSrc: n(211117),
                        rewardSrc: n(296228)
                    },
                    dropsQuestId: f,
                    dropsGameId: "432980957394370572",
                    endDate: "2023-05-22 23:59",
                    finalClaimDate: "2023-5-29 08:00",
                    dropsNoticeBannerDurationDays: 3,
                    articleUrl: a,
                    messages: {
                        claimTip: function() {
                            return r.Z.Messages.FORTNITE_REDEMPTION_TIP.format({
                                learnMoreUrl: "https://discord.com/blog/fortnite-quest"
                            })
                        },
                        giftInfo: function() {
                            return r.Z.Messages.FORTNITE_GIFT_INVENTORY_INFO.format({
                                guardOutfitName: r.Z.Messages.FORNITE_GUARD_OUTPUT,
                                rewardName: r.Z.Messages.FORTNITE_REWARD_NAME
                            })
                        },
                        enrollmentTooltip: function(e) {
                            return r.Z.Messages.FORTNITE_DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP.format({
                                rewardName: r.Z.Messages.FORTNITE_REWARD_NAME,
                                streamLengthRequirement: e
                            })
                        },
                        completionTooltip: function(e) {
                            return r.Z.Messages.FORTNITE_DROPS_COMPLETION_TOOLTIP.format({
                                rewardName: r.Z.Messages.FORTNITE_REWARD_NAME,
                                streamLengthRequirement: e
                            })
                        }
                    }
                })
        },
        622816: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-05_go_live_quest_fortnite",
                label: "Fortnite: Go Live Quest",
                defaultConfig: {
                    dropsEnabled: !1,
                    streamLengthRequirement: 0,
                    viewerCountRequirement: 0,
                    autoEnrollment: !1,
                    showUnenroll: !1
                },
                treatments: [{
                    id: 1,
                    label: "15 min stream req + auto enrollment",
                    config: {
                        dropsEnabled: !0,
                        streamLengthRequirement: 15,
                        viewerCountRequirement: 1,
                        autoEnrollment: !0,
                        showUnenroll: !1
                    }
                }, {
                    id: 99,
                    label: "2 minute stream req + auto enrollment",
                    config: {
                        dropsEnabled: !0,
                        streamLengthRequirement: 2,
                        viewerCountRequirement: 1,
                        autoEnrollment: !0,
                        showUnenroll: !0
                    }
                }]
            })
        },
        99827: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Q
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                a = n(513328),
                u = n(744564),
                l = n(306263),
                c = n(664625),
                s = n(671723),
                f = n(618887),
                d = n(293078),
                p = n(483255);

            function h(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            h(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            h(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
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
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function g(e) {
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

            function m(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
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
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var P = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
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
                            }([i, u])
                        }
                    }
                },
                T = null,
                N = null,
                A = {},
                C = {},
                R = p._e.LOADING_INITIAL_PROGRESS,
                j = new a.V7,
                w = {
                    completed: !1,
                    initialProgressFetched: !1,
                    interrupted: !1,
                    retries: 0
                },
                D = function(e) {
                    var t = w.dropsQuestId,
                        n = w.streamKey,
                        r = w.game,
                        o = w.completed,
                        i = w.gameTitle;
                    null == t || null == i || o || null == r || null == n || j.isStarted() || (e ? (0, f.m0)(t, n, r.pid) : j.start(6e4, (function() {
                        (0, f.m0)(t, n, r.pid)
                    })))
                },
                M = function(e) {
                    w.retries = 0;
                    w.completed = e.completed;
                    w.initialProgressFetched = !0;
                    w.progress = e.progress;
                    w.lastCheckedAt = o().now();
                    R = w.completed ? p._e.QUEST_COMPLETION : p._e.TRACK_PROGRESS
                },
                L = function(e) {
                    if (!w.initialProgressFetched) {
                        w.initialProgressFetched = !0;
                        R = p._e.STREAM_CTA
                    }
                },
                x = function(e) {
                    M(e);
                    A[e.dropsQuestId] = !0;
                    D()
                },
                Z = function(e) {
                    var t = e.dropsQuestId,
                        n = e.statusCode;
                    w.completed = !1;
                    w.initialProgressFetched = !0;
                    w.lastCheckedAt = o().now();
                    if (429 !== n || 0 !== w.retries) {
                        R = p._e.STREAM_CTA;
                        403 === n ? A[t] = !1 : w.interrupted = !0
                    } else {
                        w.retries = w.retries + 1;
                        D()
                    }
                },
                k = function() {
                    w.completed && (R = p._e.QUEST_COMPLETION);
                    w.interrupted = !1;
                    w.retries = 0;
                    j.stop()
                },
                F = function(e, t, n) {
                    if (!w.completed || e.dropsQuestId !== w.dropsQuestId) {
                        w.game = t;
                        w.dropsQuestId = e.dropsQuestId;
                        w.gameTitle = e.title;
                        w.completed = !1;
                        w.interrupted = !1;
                        w.streamKey = n;
                        w.retries = 0;
                        w.lastCheckedAt = o().now();
                        j.start(5e3, (function() {
                            return D(!0)
                        }))
                    }
                };
            var U = function(e) {
                    A[e.dropsQuestId] = e.isEligible
                },
                G = function(e) {
                    T = e.availablePlatforms.filter((function(e) {
                        return p.El.includes(e)
                    }))
                },
                B = function(e) {
                    var t;
                    N = null !== (t = e.codes) && void 0 !== t ? t : {}
                },
                V = function(e) {
                    N = {}
                },
                H = function(e) {
                    C[e.dropsQuestId] = {
                        isEnrolled: e.isEnrolled,
                        enrolledUser: e.enrolledUser
                    }
                },
                Y = function(e) {
                    N = null;
                    delete(A = g({}, A))[e.dropsQuestId];
                    delete(C = g({}, C))[e.dropsQuestId];
                    w.dropsQuestId === e.dropsQuestId && (w = {
                        completed: !1,
                        initialProgressFetched: !1,
                        interrupted: !1,
                        retries: 0
                    })
                };
            var z = function(e) {
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
                var t = I(n);

                function n() {
                    b(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.ZP)
                };
                r.getActivityPanelTooltipAction = function() {
                    return R
                };
                r.getIsPartnerGameQuestComplete = function(e) {
                    var t, n = (0, d.BS)(e);
                    if (null == n || null == N) return !1;
                    var r = Boolean(null === (t = N[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
                    return w.completed && w.gameTitle === n.title || r
                };
                r.__getLocalVars = function() {
                    return {
                        availablePlatforms: T,
                        userStatus: N,
                        serverEligibleByQuestIds: A,
                        enrolledDropsByQuestId: C,
                        activityPanelTooltipAction: R,
                        heartbeatTimer: j,
                        questProgress: w,
                        heartbeat: D,
                        handleDropsProgressSuccess: M,
                        handleDropsProgressFailure: L,
                        handleDropsHeartbeatSuccess: x,
                        handleDropsHeartbeatFailure: Z,
                        handleStreamClose: k,
                        initiateHeartbeat: F,
                        handleDropsEligibilityFetch: U,
                        handleDropsPlatformAvailabilityFetch: G,
                        handleUserStatusFetch: B,
                        handleUserStatusFetchFailure: V,
                        handleDropsEnrolledUser: H,
                        handleDropsUnenrollUser: Y
                    }
                };
                ! function(e, t, n) {
                    t && E(e.prototype, t);
                    n && E(e, n)
                }(n, [{
                    key: "serverEligibleByQuestIds",
                    get: function() {
                        return A
                    }
                }, {
                    key: "platformAvailability",
                    get: function() {
                        return T
                    }
                }, {
                    key: "userStatus",
                    get: function() {
                        return N
                    }
                }, {
                    key: "activityPanelTooltipAction",
                    get: function() {
                        return R
                    }
                }, {
                    key: "enrolledDropsByQuestId",
                    get: function() {
                        return C
                    }
                }, {
                    key: "hasInitialProgressFetched",
                    get: function() {
                        return w.initialProgressFetched
                    }
                }, {
                    key: "isCurrentQuestCompleted",
                    get: function() {
                        return w.completed
                    }
                }, {
                    key: "isCurrentQuestInterrupted",
                    get: function() {
                        return w.interrupted
                    }
                }, {
                    key: "currentDropQuestGameTitle",
                    get: function() {
                        return w.gameTitle
                    }
                }, {
                    key: "currentDropQuestStreamProgress",
                    get: function() {
                        var e = w.progress;
                        if (null == e || null == e.steps || 0 === e.steps.length) return 0;
                        var t = e.steps.find((function(e) {
                            return "stream_length" === e.name
                        }));
                        return null == t ? 0 : t.percent
                    }
                }]);
                return n
            }(i.ZP.Store);
            z.displayName = "DropsStore";
            const Q = new z(u.Z, {
                DROPS_ELIGIBILITY_FETCH_SUCCESS: U,
                DROPS_PLATFORM_AVAILABILITY_SUCCESS: G,
                DROPS_USER_STATUS_FETCH_SUCCESS: B,
                DROPS_USER_STATUS_FETCH_FAILURE: V,
                DROPS_ENROLLED_USER_FETCH_SUCCESS: H,
                DROPS_FETCH_PROGRESS_SUCCESS: M,
                DROPS_FETCH_PROGRESS_FAILURE: L,
                DROPS_HEARTBEAT_SUCCESS: x,
                DROPS_HEARTBEAT_FAILURE: Z,
                DROPS_UNENROLL_USER: Y,
                STREAM_CLOSE: k,
                STREAM_START: function(e) {
                    var t, n = e.streamType,
                        r = e.guildId,
                        o = e.channelId,
                        i = e.pid,
                        a = (0, l.V9)({
                            streamType: n,
                            guildId: r,
                            channelId: o,
                            ownerId: c.default.getId()
                        });
                    if (null != i) {
                        var h = s.ZP.getGameForPID(i);
                        if (null != h) {
                            var b = Object.values(p.Zv).find((function(e) {
                                return e.gameSearchTerm.find((function(e) {
                                    var t;
                                    return e.toLowerCase() === (null === (t = h.name) || void 0 === t ? void 0 : t.toLowerCase())
                                }))
                            }));
                            if (null != b && !(0, d.hM)(b)) {
                                var E = null === (t = (0, d.j7)(b)) || void 0 === t ? void 0 : t.getCurrentConfig({
                                    location: "1"
                                }, {
                                    autoTrackExposure: !1
                                });
                                if (null != E && E.dropsEnabled) {
                                    var O = E.autoEnrollment;
                                    null != C[b.dropsQuestId] && C[b.dropsQuestId].isEnrolled || O ? F(b, h, a) : u.Z.wait(y((function() {
                                        var e;
                                        return P(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, (0, f.BE)(b.dropsQuestId)];
                                                case 1:
                                                    t.sent();
                                                    if (!(null === (e = C[b.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled)) return [2];
                                                    F(b, h, a);
                                                    return [2]
                                            }
                                        }))
                                    })))
                                }
                            }
                        }
                    }
                },
                LOGOUT: function() {
                    A = {};
                    C = {};
                    N = {};
                    j.stop()
                }
            })
        },
        293078: (e, t, n) => {
            "use strict";
            n.d(t, {
                A5: () => f,
                j7: () => d,
                wj: () => p,
                R9: () => h,
                YK: () => y,
                Xt: () => b,
                Tn: () => O,
                FL: () => v,
                hM: () => g,
                BS: () => m,
                EW: () => _,
                x8: () => S,
                Un: () => I
            });
            var r = n(730381),
                o = n.n(r),
                i = n(968449),
                a = n(959207),
                u = n(671723),
                l = n(622816),
                c = n(483255),
                s = n(473708);

            function f(e) {
                var t = m(e);
                return null == t ? null : d(t)
            }

            function d(e) {
                return e.dropsQuestId === c.oL ? l.a : null
            }

            function p(e, t) {
                if (null == e) return !1;
                var n = a.Z.getGameByName(e);
                return !(null == n || !t.some((function(e) {
                    var t;
                    return e.toLowerCase() === (null == n || null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
                })))
            }

            function h() {
                return Math.floor(Date.now() / 1e3) - c.kS
            }

            function y(e, t, n) {
                if (null == m(e)) return !1;
                var r = function(e, t) {
                    var n;
                    return null !== (n = e.find((function(e) {
                        return p(e.name, t)
                    }))) && void 0 !== n ? n : null
                }(t, c.RN[e]);
                if (null != r) {
                    var o, i = null !== (o = null == r ? void 0 : r.lastLaunched) && void 0 !== o ? o : 0;
                    return n <= r.lastFocused || 1e3 * n <= i
                }
                return !1
            }

            function b(e) {
                return y(e, u.ZP.getGamesSeen(!1), h())
            }

            function E(e, t) {
                var n = e.endDate,
                    r = o()(),
                    i = o()(n, c.fS),
                    a = o()(r.clone().add(e.dropsNoticeBannerDurationDays, "days").format(c.fS)),
                    u = i.isSameOrBefore(a),
                    l = i.isBefore(r, "minute");
                return u && (t && !l || !t && l)
            }

            function O(e) {
                var t, n = m(e);
                if (null == n) return !1;
                if (!(null === (t = f(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).dropsEnabled)) return !1;
                var r = i.bh.getSetting(),
                    o = E(n, !0);
                return !r && o
            }

            function v(e) {
                var t, n, r = m(e);
                if (null == r) return !1;
                if (!(null === (n = null === (t = f(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "2"
                    }, {
                        autoTrackExposure: !1
                    })) || void 0 === n ? void 0 : n.dropsEnabled)) return !1;
                var o = i.bh.getSetting(),
                    a = E(r, !1);
                return g(r) && !o && a
            }

            function g(e) {
                var t = e.endDate,
                    n = o()(t, "YYYY-MM-DD HH:mm");
                return o()() > n
            }

            function m(e) {
                return c.Zv[e]
            }

            function _(e) {
                return Object.values(c.Zv).find((function(t) {
                    return t.dropsQuestId === e
                }))
            }

            function S(e) {
                return Object.keys(c.Zv).find((function(t) {
                    return c.Zv[t].dropsQuestId === e
                }))
            }

            function I(e) {
                switch (e) {
                    case "SWITCH":
                        return s.Z.Messages.DROPS_PLATFORM_SWITCH;
                    case "PC":
                        return s.Z.Messages.DROPS_PLATFORM_PC;
                    case "PLAYSTATION":
                        return s.Z.Messages.DROPS_PLATFORM_PLAYSTATION;
                    case "XBOX":
                        return s.Z.Messages.DROPS_PLATFORM_XBOX;
                    default:
                        return ""
                }
            }
        },
        440997: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(730381)),
                i = n.n(o),
                a = n(202351),
                u = n(882723),
                l = n(201459),
                c = n(380477),
                s = n(70983),
                f = n(9430),
                d = n(473708);

            function p(e, t) {
                var n = null == e ? void 0 : e.id,
                    o = (0, a.cj)([f.Z], (function() {
                        return {
                            muted: null != n ? f.Z.isMuted(n) : void 0,
                            muteConfig: null != n ? f.Z.getMuteConfig(n) : void 0
                        }
                    }), [n]),
                    p = o.muted,
                    h = o.muteConfig,
                    y = (0, s.U)(h);
                return null == n ? null : p ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-guild",
                    label: d.Z.Messages.UNMUTE_SERVER,
                    subtext: y,
                    action: function() {
                        return l.Z.updateGuildNotificationSettings(n, {
                            muted: !1
                        })
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-guild",
                    label: d.Z.Messages.MUTE_SERVER,
                    action: function() {
                        return l.Z.updateGuildNotificationSettings(n, {
                            muted: !0
                        })
                    },
                    children: (0, c.k)().map((function(e) {
                        var o = e.value,
                            a = e.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(o),
                            label: a,
                            action: function() {
                                return function(e) {
                                    if (null != n) {
                                        var r = e > 0 ? i()().add(e, "second").toISOString() : null;
                                        l.Z.updateGuildNotificationSettings(n, {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: r
                                            }
                                        }, t)
                                    }
                                }(o)
                            }
                        }, o)
                    }))
                })
            }
        },
        489684: (e, t, n) => {
            "use strict";
            n.d(t, {
                H7: () => d,
                o3: () => h,
                n7: () => s,
                Ac: () => y,
                ky: () => f,
                au: () => p,
                mZ: () => b,
                fh: () => E
            });
            var r = n(260561),
                o = (0, r.B)({
                    kind: "guild",
                    id: "2022-11_automod_non_community_guilds_release",
                    label: "Automod Non-Community Guilds Release",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Non-Community Guilds Release",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, r.B)({
                    kind: "guild",
                    id: "2022-12_mention_raid_limit",
                    label: "Automod Mention Raid Limit",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Limit",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, r.B)({
                    kind: "guild",
                    id: "2023-01_mention_raid_notice",
                    label: "Automod Mention Raid Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, r.B)({
                    kind: "guild",
                    id: "2023-02_automod_custom_message",
                    label: "Automod Custom Message",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Custom Message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, r.B)({
                    kind: "guild",
                    id: "2023-02_free_form",
                    label: "Automod Server Policy",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Server Policy",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 10,
                        label: "Automod Server Policy Rules Summarization",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                c = (0, r.B)({
                    kind: "guild",
                    id: "2023-05_automod_user_profile_ab",
                    label: "Automod on User Profile A/B",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod on User Profile enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function s(e) {
                return o.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                }).enabled
            }

            function f(e) {
                return o.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function d(e) {
                return i.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                }).enabled
            }

            function p(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = i.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function h(e) {
                return null != e && a.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                }).enabled
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = u.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = l.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = c.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }
        },
        883650: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n(842227),
                o = n(202351),
                i = n(744564),
                a = n(769915),
                u = n(649536),
                l = n(61209),
                c = n(352980),
                s = n(201891),
                f = n(190084),
                d = n(2590);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e, t) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var v = {},
                g = 0,
                m = {},
                _ = {},
                S = function(e, t) {
                    var n = (0, a.hc)(e),
                        r = {
                            id: n,
                            isBlockedEdit: (0, a.Bz)(e),
                            messageData: e,
                            errorMessage: (0, s.uF)(e, t)
                        };
                    v[n] = r;
                    g++
                },
                I = function(e) {
                    return v[e]
                },
                P = function(e) {
                    null != v[e] && delete v[e];
                    g++
                };

            function T(e) {
                var t = e.messageData,
                    n = e.errorResponseBody;
                S(t, n);
                return !0
            }

            function N(e) {
                var t, n = e.channelId,
                    o = e.messages,
                    i = null === (t = l.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == i) return !1;
                var a = _[i],
                    c = o.reduce((function(e, t) {
                        var n = (0, u.e5)(t);
                        return (0, f.nY)(n) && (0, f.OP)(n) ? null == e || -1 === r.default.compare(e, n.id) ? n.id : void 0 : e
                    }), a);
                if (null != c && _[i] !== c) {
                    _[i] = c;
                    return !0
                }
                return !1
            }
            var A = function(e) {
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
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(c.Z);
                    if (null != e) {
                        v = e.automodFailedMessages;
                        m = e.mentionRaidDetectionByGuild
                    }
                };
                r.getState = function() {
                    return {
                        automodFailedMessages: v,
                        mentionRaidDetectionByGuild: m,
                        lastIncidentAlertMessage: _
                    }
                };
                r.getMessage = function(e) {
                    return null == e ? null : null !== (t = I(e)) && void 0 !== t ? t : null;
                    var t
                };
                r.getMessagesVersion = function() {
                    return g
                };
                r.getMentionRaidDetected = function(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : null
                };
                r.getLastIncidentAlertMessage = function(e) {
                    var t;
                    return null !== (t = _[e]) && void 0 !== t ? t : null
                };
                r.__getLocalVars = function() {
                    return {
                        automodFailedMessages: v,
                        automodFailedMessagesVersion: g,
                        mentionRaidDetectionByGuild: m,
                        lastIncidentAlertMessage: _,
                        setFailedMessage: S,
                        getFailedMessage: I,
                        removeFailedMessage: P
                    }
                };
                return n
            }(o.ZP.PersistedStore);
            A.displayName = "GuildAutomodMessageStore";
            A.persistKey = "GuildAutomodMessages";
            const C = new A(i.Z, {
                CONNECTION_OPEN: function(e) {
                    v = {};
                    g++;
                    return !0
                },
                CACHE_LOADED: function(e) {
                    var t = e.guilds,
                        n = e.messages,
                        o = !1;
                    t.forEach((function(e) {
                        var t = e.getSafetyAlertsChannelId();
                        if (null != t) {
                            var i = n[t];
                            if (null != i) {
                                var a = i[i.length - 1],
                                    l = (0, u.e5)(a);
                                if ((0, f.nY)(l) && (0, f.OP)(l)) {
                                    var c = _[e.id];
                                    if (-1 === r.default.compare(c, l.id)) {
                                        _[e.id] = l.id;
                                        o = !0
                                    }
                                }
                            }
                        }
                    }));
                    return o
                },
                LOAD_MESSAGES_SUCCESS: N,
                LOCAL_MESSAGES_LOADED: N,
                MESSAGE_CREATE: function(e) {
                    var t = e.guildId,
                        n = e.message;
                    if (null == t) return !1;
                    var r = (0, u.e5)(n);
                    if (!(0, f.nY)(r)) return !1;
                    if ((0, f.OP)(r)) {
                        _[t] = r.id;
                        return !0
                    }
                    return !1
                },
                MESSAGE_SEND_FAILED_AUTOMOD: T,
                MESSAGE_EDIT_FAILED_AUTOMOD: T,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    var t = e.messageId;
                    P(t);
                    return !0
                },
                MESSAGE_END_EDIT: function(e) {
                    var t = e.response;
                    if (null == (null == t ? void 0 : t.body)) return !1;
                    if (t.body.code === d.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    var n = t.body.id;
                    if (null == n) return !1;
                    P(n)
                },
                AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
                    var t = e.guildId,
                        n = e.decisionId,
                        r = e.suspiciousMentionActivityUntil;
                    m[t] = {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: r
                    };
                    return !0
                },
                AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
                    var t = e.guildId;
                    delete m[t];
                    return !0
                }
            })
        },
        140567: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                a = n(380477),
                u = n(221921),
                l = n(440997),
                c = n(567403);

            function s(e) {
                var t = e.channel,
                    n = e.closePopout,
                    s = e.onSelect,
                    f = e.navId,
                    d = e.label,
                    p = e.location,
                    h = e.includeGuildMute,
                    y = (0, o.e7)([c.Z], (function() {
                        return c.Z.getGuild(t.guild_id)
                    })),
                    b = (0, l.Z)(y);
                return (0, r.jsxs)(i.Menu, {
                    navId: f,
                    onClose: n,
                    "aria-label": d,
                    onSelect: s,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: (0, a.ZP)(t, p)
                    }), h ? (0, r.jsx)(i.MenuGroup, {
                        children: b
                    }) : null, (0, r.jsx)(i.MenuGroup, {
                        children: (0, u.c)(t)
                    })]
                })
            }
        },
        412448: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => lr,
                O: () => rr
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(289283),
                l = n(202351),
                c = n(153686),
                s = n(19585),
                f = n(915029),
                d = n(37163),
                p = n(823493),
                h = n.n(p),
                y = n(882723),
                b = n(790405),
                E = n(650332),
                O = n(347149),
                v = n(92150),
                g = n(770272),
                m = n(316878),
                _ = n(396043),
                S = n(61209),
                I = n(5544),
                P = n(923555),
                T = n(715107),
                N = n(443812),
                A = n(930948),
                C = n(372185),
                R = n(206823),
                j = n(485486),
                w = n.n(j);

            function D(e, t) {
                var n = e.children;
                return (0, r.jsx)("span", {
                    className: t,
                    children: n
                })
            }
            var M, L = n(2590);

            function x(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var Z = (x(M = {}, v.Qe.FILTER, (function(e) {
                return D(e, w().searchFilter)
            })), x(M, v.Qe.ANSWER, (function(e) {
                return D(e, w().searchAnswer)
            })), M);

            function k(e, t, n, r) {
                t.findEntityRanges((function(t) {
                    var n = t.getEntity();
                    return null !== n && e.getEntity(n).getType() === r
                }), n)
            }

            function F() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = [];
                Object.keys(e).forEach((function(n) {
                    var r = e[n];
                    t.push({
                        strategy: function(e, t, r) {
                            return k(r, e, t, n)
                        },
                        component: Z[r.componentType]
                    })
                }));
                return t
            }
            var U = n(441143),
                G = n.n(U),
                B = n(496486),
                V = n.n(B),
                H = n(730381),
                Y = n.n(H),
                z = n(182569),
                Q = n(473708),
                K = n(756002),
                W = n.n(K);

            function q(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function X(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function J(e) {
                J = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return J(e)
            }

            function $(e, t) {
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

            function ee(e, t) {
                return !t || "object" !== ne(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function te(e, t) {
                te = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return te(e, t)
            }
            var ne = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function re(e) {
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
                    var n, r = J(e);
                    if (t) {
                        var o = J(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ee(this, n)
                }
            }

            function oe(e) {
                e.stopPropagation();
                e.preventDefault()
            }

            function ie(e, t, n) {
                return {
                    id: "".concat(e, "-").concat(t),
                    role: "option",
                    tabIndex: -1,
                    "aria-selected": n
                }
            }
            var ae = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && te(e, t)
                }(n, e);
                var t = re(n);

                function n() {
                    q(this, n);
                    return t.apply(this, arguments)
                }
                var o = n.prototype;
                o.renderQuery = function(e) {
                    var t = this.props,
                        n = t.query,
                        o = t.navId,
                        i = t.focusedIndex,
                        u = t.onSelectQuery,
                        l = t.onHighlightQuery,
                        c = t.hideQuery;
                    if (e || c) return null;
                    var s = -1 === i;
                    return (0, r.jsxs)(y.Clickable, $(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                X(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        className: a()(W().queryContainer, X({}, W().focused, s))
                    }, ie(o, -1, s)), {
                        onMouseEnter: l,
                        onClick: u,
                        children: [(0, r.jsx)("div", {
                            className: W().queryText,
                            children: Q.Z.Messages.SEARCH_FOR_VALUE.format({
                                value: n
                            })
                        }), (0, r.jsx)("div", {
                            className: W().queryShortcut,
                            "aria-hidden": !0,
                            children: (0, r.jsx)(y.KeyCombo, {
                                shortcut: "return",
                                dim: !0,
                                className: W().keyCombo
                            })
                        })]
                    }))
                };
                o.renderResults = function(e) {
                    var t = this.props,
                        n = t.numResults,
                        r = t.renderNoResults,
                        o = t.renderInitialState,
                        i = t.renderResult,
                        a = t.renderCustomResults;
                    if (e) return o();
                    if (0 === n) return r();
                    if (null != i) return Array.from({
                        length: n
                    }).map((function(e, t) {
                        return i(t)
                    }));
                    if (null != a) return a();
                    throw new Error("SearchResultsPopout.renderResults: Flow should never allow this...")
                };
                o.render = function() {
                    var e = this.props,
                        t = e.query,
                        n = e.focusedIndex,
                        o = e.navId,
                        i = e.width,
                        a = "" === t.trim();
                    return (0, r.jsxs)("div", {
                        className: W().container,
                        style: {
                            width: i
                        },
                        onMouseDown: oe,
                        role: "listbox",
                        id: o,
                        tabIndex: -1,
                        "aria-activedescendant": "".concat(o, "-").concat(n),
                        children: [this.renderQuery(a), this.renderResults(a)]
                    })
                };
                return n
            }(o.PureComponent);
            ae.defaultProps = {
                renderInitialState: function() {
                    return null
                },
                hideQuery: !1,
                width: 320
            };
            const ue = ae;
            var le = n(773011),
                ce = n(239813),
                se = n(21372),
                fe = n(840922),
                de = n(744564),
                pe = n(456837),
                he = (n(318715), n(232334)),
                ye = (n(86171), n(860535)),
                be = n(473903);

            function Ee() {
                var e, t = he.Z.get("disable_new_search"),
                    n = !0 === (null === (e = be.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()),
                    r = (0, ye.n5)("showNewSearch");
                return !t && (n || r)
            }
            var Oe = n(504275),
                ve = n(607556),
                ge = n(749565),
                me = n(793461);

            function _e(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Se(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ie(e) {
                Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ie(e)
            }

            function Pe(e, t) {
                return !t || "object" !== Ne(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Te(e, t) {
                Te = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Te(e, t)
            }
            var Ne = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ae(e) {
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
                    var n, r = Ie(e);
                    if (t) {
                        var o = Ie(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Pe(this, n)
                }
            }
            var Ce = {},
                Re = {},
                je = 10;

            function we(e) {
                var t = e.searchId,
                    n = e.query,
                    r = e.mode,
                    o = e.tokens,
                    i = e.cursorScope,
                    a = e.autocompletes,
                    u = Re[t];
                if (null == u) {
                    u = {
                        results: [],
                        context: pe.Z.getSearchContext(De.bind(null, t))
                    };
                    Re[t] = u
                }
                return {
                    query: null != n ? n : "",
                    mode: null != r ? r : {
                        type: L.Sap.EMPTY,
                        filter: null,
                        token: null
                    },
                    tokens: null != o ? o : [],
                    cursorScope: null != i ? i : null,
                    autocompletes: null != a ? a : []
                }
            }

            function De(e, t) {
                var n = t.results,
                    r = Re[e],
                    o = Ce[e];
                if (null != r && null != o) {
                    var i = o.mode,
                        a = i.type,
                        u = i.filter;
                    if (a !== L.Sap.EMPTY && (a !== L.Sap.FILTER || u === L.dCx.FILTER_FROM || u === L.dCx.FILTER_MENTIONS)) {
                        var l = 3;
                        o.mode.type === L.Sap.FILTER && (l = je);
                        r.results = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : je;
                            (e = e.reduce((function(e, t) {
                                var n = be.default.getUser(t.id);
                                if (null == n) return e;
                                e.push({
                                    id: n.id,
                                    text: ge.ZP.getUserTag(n),
                                    user: n
                                });
                                return e
                            }), [])).length > t && (e.length = t);
                            return e
                        }(n, l);
                        var c = o.query,
                            s = o.mode,
                            f = o.tokens,
                            d = o.cursorScope,
                            p = o.autocompletes;
                        p = Ze(e, s);
                        Ce[e] = we({
                            searchId: e,
                            query: c,
                            mode: s,
                            tokens: f,
                            cursorScope: d,
                            autocompletes: p
                        });
                        Be.emitChange()
                    }
                }
            }

            function Me(e, t, n) {
                var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : je;
                if (null == e || "" === e) return null;
                var i = P.Z.getSearchType(n);
                if (i !== L.aib.GUILD || e !== L.dCx.FILTER_FROM && e !== L.dCx.FILTER_MENTIONS) {
                    var a, u = null === (a = v.ZP[e]) || void 0 === a ? void 0 : a.getAutocompletions,
                        l = (null != t ? t.getFullMatch() : "").trim();
                    r = null != u ? u(l, n, null != o ? o : je) : []
                } else {
                    var c = Re[n];
                    if (null == c) r = null;
                    else {
                        null != t && 0 !== t.getFullMatch().trim().length || (c.results = Oe.ZP.getRecentlyTalked(n, je).map((function(e) {
                            var t = e.record;
                            return {
                                user: t,
                                text: ge.ZP.getUserTag(t)
                            }
                        })));
                        r = c.results
                    }
                }
                return null == r || 0 === r.length ? null : {
                    group: e,
                    results: r
                }
            }

            function Le(e) {
                var t = (null != e ? e.getFullMatch() : "").trim(),
                    n = function() {
                        var e, t = Ee();
                        return Se(e = {}, L.dCx.FILTER_FROM, !me.Z.hidePersonalInformation), Se(e, L.dCx.FILTER_MENTIONS, !me.Z.hidePersonalInformation), Se(e, L.dCx.FILTER_HAS, !0), Se(e, L.dCx.FILTER_BEFORE, !0), Se(e, L.dCx.FILTER_AFTER, !0), Se(e, L.dCx.FILTER_ON, !0), Se(e, L.dCx.FILTER_IN, P.Z.getSearchType() === L.aib.GUILD), Se(e, L.dCx.FILTER_PINNED, !t), e
                    }(),
                    r = (0, v.nB)(t).filter((function(e) {
                        return n[e.token]
                    }));
                return {
                    group: L.rtL.SEARCH_OPTIONS,
                    results: r
                }
            }

            function xe(e, t) {
                var n = (null != e ? e.getFullMatch() : "").trim(),
                    r = [];
                if (null != n && "" !== n) {
                    (function(e) {
                        var t = P.Z.getSearchType(e),
                            n = [L.dCx.FILTER_HAS];
                        if (!me.Z.hidePersonalInformation) {
                            n.push(L.dCx.FILTER_FROM);
                            n.push(L.dCx.FILTER_MENTIONS)
                        }
                        t === L.aib.GUILD && n.push(L.dCx.FILTER_IN);
                        return n
                    })(t).forEach((function(n) {
                        if (null != n) {
                            var o = Me(n, e, t, 3);
                            null != o && r.push(o)
                        }
                    }));
                    r.push(function(e, t) {
                        var n = (null != e ? e.getFullMatch() : "").trim();
                        if (null != n && "" !== n) {
                            var r, o, i, a = null === (r = v.ZP[L.dCx.FILTER_BEFORE]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                u = null === (o = v.ZP[L.dCx.FILTER_ON]) || void 0 === o ? void 0 : o.getAutocompletions(n, t, 1)[0],
                                l = null === (i = v.ZP[L.dCx.FILTER_AFTER]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0];
                            if (null == a) return null;
                            var c = [a, u, l];
                            return {
                                group: L.rtL.DATES,
                                results: c
                            }
                        }
                    }(e, t))
                }(0, R.BU)(r) < 5 && r.push(Le(e));
                return r
            }

            function Ze(e, t) {
                var n = [];
                if (t.type === L.Sap.FILTER) n.push(Me(t.filter, t.token, e, je));
                else if (t.type === L.Sap.FILTER_ALL) n = xe(t.token, e);
                else if (t.type === L.Sap.EMPTY) {
                    n.push(Le(t.token));
                    Ee() || n.push(function(e) {
                        if (me.Z.hidePersonalInformation) return null;
                        var t = P.Z.getHistory(e);
                        return null == t ? null : {
                            group: L.rtL.HISTORY,
                            results: t.map((function(e) {
                                return {
                                    text: e
                                }
                            }))
                        }
                    }(e))
                }
                return n
            }

            function ke() {
                (0,
                    R.WU)()
            }

            function Fe(e) {
                var t = Ce[e];
                if (null != t) {
                    var n = t.query,
                        r = t.mode,
                        o = t.tokens,
                        i = t.cursorScope,
                        a = t.autocompletes;
                    Ce[e] = we({
                        searchId: e,
                        query: n,
                        mode: r,
                        tokens: o,
                        cursorScope: i,
                        autocompletes: a.map((function(e) {
                            return (null == e ? void 0 : e.group) === L.rtL.HISTORY ? null : e
                        }))
                    })
                }
            }

            function Ue() {
                var e = P.Z.getCurrentSearchId();
                if (null != e && null != Ce[e]) {
                    var t = Ce[e],
                        n = t.query,
                        r = t.mode,
                        o = t.tokens,
                        i = t.cursorScope;
                    Ce[e] = we({
                        searchId: e,
                        query: n,
                        mode: r,
                        tokens: o,
                        cursorScope: i,
                        autocompletes: Ze(e, r)
                    })
                }
            }
            var Ge = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Te(e, t)
                }(n, e);
                var t = Ae(n);

                function n() {
                    _e(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(se.ZP, me.Z)
                };
                r.getState = function(e) {
                    var t;
                    return null !== (t = Ce[e]) && void 0 !== t ? t : we({
                        searchId: e
                    })
                };
                r.__getLocalVars = function() {
                    return {
                        results: Ce,
                        userSearchContexts: Re,
                        MAX_FILTER_RESULTS: je,
                        MAX_GENERAL_RESULTS: 3,
                        instance: Be
                    }
                };
                return n
            }(l.ZP.Store);
            Ge.displayName = "SearchAutocompleteStore";
            var Be = new Ge(de.Z, {
                SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
                    var t, n, r = e.searchId,
                        o = e.tokens,
                        i = e.cursorScope,
                        a = (0, R.cl)(o),
                        u = (0, R.qc)(i, o),
                        l = null !== (t = Ce[r]) && void 0 !== t ? t : {},
                        c = Re[r],
                        s = !0;
                    if (a !== l.query || null != l.mode && l.mode.filter !== u.filter) {
                        if (u.type === L.Sap.EMPTY || u.type === L.Sap.FILTER && u.filter !== L.dCx.FILTER_FROM && u.filter !== L.dCx.FILTER_MENTIONS) {
                            if (null != c) {
                                c.context.clearQuery();
                                c.results = []
                            }
                            n = Ze(r, u)
                        } else if (null != c) {
                            var f = u.token;
                            if (null != f && f.getFullMatch().trim().length > 0) {
                                ve.Z.requestMembers(r, f.getFullMatch(), je);
                                c.context.setQuery(f.getFullMatch().trim(), {
                                    guild: r
                                });
                                n = l.autocompletes;
                                s = !1
                            } else {
                                c.context.clearQuery();
                                n = Ze(r, u)
                            }
                        }
                    } else {
                        n = l.autocompletes;
                        s = !1
                    }
                    Ce[r] = we({
                        searchId: r,
                        query: a,
                        mode: u,
                        tokens: o,
                        cursorScope: i,
                        autocompletes: n
                    });
                    return s
                },
                SEARCH_EDITOR_STATE_CLEAR: function(e) {
                    var t = e.searchId,
                        n = Re[t];
                    if (null != n) {
                        n.context.destroy();
                        n.results = [];
                        delete Re[t]
                    }
                    delete Ce[t]
                },
                CHANNEL_CREATE: ke,
                CHANNEL_DELETE: ke,
                STREAMER_MODE_UPDATE: Ue,
                SEARCH_MODAL_OPEN: Ue,
                SEARCH_SCREEN_OPEN: Ue,
                SEARCH_CLEAR_HISTORY: function(e) {
                    var t = e.searchId;
                    null != t ? Fe(t) : Object.keys(Ce).forEach(Fe)
                },
                LOGOUT: function() {
                    Object.keys(Ce).forEach(Fe)
                }
            });
            const Ve = Be;
            var He = n(464187),
                Ye = n(771966),
                ze = n(795909),
                Qe = n(813749),
                Ke = n(348592),
                We = n(630701),
                qe = n.n(We);

            function Xe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Je(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function $e(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function et(e) {
                et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return et(e)
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        $e(e, t, n[t])
                    }))
                }
                return e
            }

            function nt(e, t) {
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

            function rt(e, t) {
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

            function ot(e, t) {
                return !t || "object" !== ut(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function it(e, t) {
                it = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return it(e, t)
            }

            function at(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Xe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ut = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function lt(e) {
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
                    var n, r = et(e);
                    if (t) {
                        var o = et(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ot(this, n)
                }
            }
            var ct = Y()("2015-05-15").local(),
                st = (0, z.Un)({
                    createPromise: function() {
                        return Promise.resolve().then(n.bind(n, 754065))
                    },
                    webpackId: 754065
                });

            function ft(e) {
                var t = !0,
                    n = e.trim();
                V()(v.ZP).forOwn((function(e) {
                    "" !== e.key && null != e.key && n === e.key && (t = !1)
                }));
                return t
            }
            var dt, pt = function(e, t, n) {
                    var o = n.user,
                        i = n.text;
                    if (null == o) return (0, r.jsx)("strong", {
                        children: i
                    });
                    var a, u, l, c = be.default.getUser(o.id),
                        s = S.Z.getChannel(e),
                        f = (null == s ? void 0 : s.isPrivate()) ? fe.Z.getNickname(o.id) : null,
                        d = null !== (u = null !== (a = se.ZP.getNick(e, o.id)) && void 0 !== a ? a : f) && void 0 !== u ? u : ge.ZP.getName(o),
                        p = null !== (l = null == c ? void 0 : c.getAvatarURL(e, 20)) && void 0 !== l ? l : o.getAvatarURL(null == s ? void 0 : s.guild_id, 20);
                    return [(0, r.jsx)("img", {
                        alt: "",
                        className: qe().displayAvatar,
                        src: p
                    }, "avatar-".concat(t, "-").concat(o.id)), (0, r.jsx)("span", {
                        className: qe().displayedNick,
                        children: d
                    }, "display-nick-".concat(t, "-").concat(o.id)), (0, r.jsx)("span", {
                        className: qe().displayUsername,
                        children: ge.ZP.getUserTag(o, {
                            identifiable: me.Z.enabled && me.Z.hidePersonalInformation ? "never" : "always"
                        })
                    }, "display-username-".concat(t, "-").concat(o.id))]
                },
                ht = function(e, t, n) {
                    var o = n.channel,
                        i = n.text;
                    if (null == o) return (0, r.jsx)("strong", {
                        children: i
                    });
                    var a = S.Z.getChannel(o.parent_id),
                        u = (0, ce.KS)(o);
                    return (0, r.jsxs)("div", {
                        className: qe().resultChannel,
                        children: [null != u ? (0, r.jsx)(u, {
                            className: qe().searchResultChannelIcon
                        }) : null, (0, r.jsx)("strong", {
                            children: (0, le.F6)(o, be.default, fe.Z)
                        }), null != a ? (0, r.jsx)("span", {
                            className: qe().searchResultChannelCategory,
                            children: (0, le.F6)(a, be.default, fe.Z)
                        }) : null]
                    })
                },
                yt = function(e) {
                    var t, n, o = e.id,
                        i = e.searchId,
                        u = e.result,
                        l = e.group,
                        c = e.className,
                        s = e.role,
                        f = e.tabIndex,
                        d = e["aria-selected"],
                        p = e.onSelect,
                        h = e.onFocus,
                        b = e.showFilter,
                        E = e.renderResult;
                    if (b) {
                        var O, g;
                        t = (0, r.jsx)("span", {
                            className: qe().filter,
                            children: null !== (g = null === (O = v.ZP[l]) || void 0 === O ? void 0 : O.key) && void 0 !== g ? g : "addme:"
                        })
                    }
                    n = null != E ? E(i, l, u) : (0, r.jsx)("strong", {
                        children: u.text
                    });
                    return (0, r.jsxs)(y.Clickable, {
                        tag: "li",
                        className: a()(qe().option, c),
                        onClick: p,
                        onFocus: h,
                        id: o,
                        role: s,
                        tabIndex: f,
                        "aria-selected": d,
                        children: [t, n, (0, r.jsx)(ze.Z, {
                            className: qe().plusIcon
                        })]
                    })
                },
                bt = function(e) {
                    return (0, r.jsx)(yt, nt(tt({}, e), {
                        className: qe().user,
                        renderResult: pt
                    }))
                };
            var Et = ($e(dt = {}, L.dCx.FILTER_FROM, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_FROM
                    },
                    component: bt
                }), $e(dt, L.dCx.FILTER_MENTIONS, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_MENTIONS
                    },
                    component: bt
                }), $e(dt, L.dCx.FILTER_HAS, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_HAS
                    }
                }), $e(dt, L.dCx.FILTER_FILE_TYPE, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
                    }
                }), $e(dt, L.dCx.FILTER_IN, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_CHANNELS
                    },
                    component: function(e) {
                        return (0, r.jsx)(yt, nt(tt({}, e), {
                            renderResult: ht
                        }))
                    }
                }), $e(dt, L.rtL.DATES, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_DATES
                    }
                }), $e(dt, L.rtL.HISTORY, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_HISTORY
                    },
                    groupTip: function(e) {
                        var t = e.searchId;
                        return (0, r.jsx)(y.Tooltip, {
                            text: Q.Z.Messages.SEARCH_CLEAR_HISTORY,
                            position: "left",
                            children: function(e) {
                                var n = e.onMouseEnter,
                                    o = e.onMouseLeave;
                                return (0,
                                    r.jsx)(y.Clickable, {
                                    onClick: function() {
                                        return (0, b.QQ)(t)
                                    },
                                    onMouseEnter: n,
                                    onMouseLeave: o,
                                    className: qe().searchClearHistory,
                                    title: Q.Z.Messages.SEARCH_CLEAR_HISTORY,
                                    "aria-label": Q.Z.Messages.SEARCH_CLEAR_HISTORY,
                                    children: (0, r.jsx)(Qe.Z, {})
                                })
                            }
                        })
                    },
                    component: function(e) {
                        var t = e.onSelect,
                            n = e.onFocus,
                            i = e.result,
                            u = (e.showFilter, e.searchId, e.renderResult, e.group, rt(e, ["onSelect", "onFocus", "result", "showFilter", "searchId", "renderResult", "group"])),
                            l = "",
                            c = o.useMemo((function() {
                                return e = i.text, R.kG(e).map((function(e, t, n) {
                                    return R.Fr(e, n[t + 1]) ? e : new O.WU(e.getFullMatch(), O.Xe)
                                }));
                                var e
                            }), [i.text]).map((function(e) {
                                var t = e.getFullMatch();
                                if ("" === t.trim()) return null;
                                var n, o = L.TNx.test(e.type),
                                    i = L.KA4.test(e.type),
                                    u = !o && !i;
                                l += t;
                                return (0, r.jsx)("span", {
                                    className: a()((n = {}, $e(n, qe().filter, o), $e(n, qe().answer, i), $e(n, qe().nonText, u), n)),
                                    children: t
                                }, e.type + t)
                            }));
                        return (0, r.jsxs)(y.Clickable, nt(tt({
                            className: a()(qe().option, qe().history),
                            onClick: t,
                            onFocus: n
                        }, u), {
                            "aria-label": Q.Z.Messages.SEARCH_FROM_SUGGESTIONS.format({
                                suggestion: l
                            }),
                            children: [c, (0, r.jsx)(ze.Z, {
                                className: qe().plusIcon
                            })]
                        }))
                    }
                }), $e(dt, L.rtL.SEARCH_OPTIONS, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS
                    },
                    groupTip: function() {
                        return (0, r.jsx)(y.Tooltip, {
                            text: Q.Z.Messages.LEARN_MORE,
                            position: "left",
                            children: function(e) {
                                return (0, r.jsx)("div", nt(tt({
                                    className: qe().searchLearnMore
                                }, e), {
                                    children: (0, r.jsx)(y.Anchor, {
                                        href: Ke.Z.getArticleURL(L.BhN.USING_SEARCH),
                                        title: Q.Z.Messages.LEARN_MORE,
                                        children: (0, r.jsx)(Ye.Z, {})
                                    })
                                }))
                            }
                        })
                    },
                    component: function(e) {
                        var t, n = e.result,
                            o = e.onSelect,
                            i = e.onFocus,
                            u = (e.showFilter, e.searchId, rt(e, ["result", "onSelect", "onFocus", "showFilter", "searchId"])),
                            l = R.Ko(null !== (t = n.token) && void 0 !== t ? t : "");
                        return (0, r.jsxs)(y.Clickable, nt(tt({
                            className: a()(qe().option, qe().searchOption),
                            onClick: o,
                            onFocus: i
                        }, u), {
                            children: [(0, r.jsx)("span", {
                                className: qe().filter,
                                children: n.text
                            }), (0, r.jsx)("span", {
                                className: a()($e({}, qe().answer, l)),
                                children: l
                            }), (0,
                                r.jsx)(ze.Z, {
                                className: qe().plusIcon
                            })]
                        }))
                    }
                }), dt),
                Ot = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && it(e, t)
                    }(n, e);
                    var t = lt(n);

                    function n() {
                        Je(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            dateHint: (0, v.Pr)(),
                            selectedIndex: -1
                        };
                        e.handleDateChange = function(t) {
                            e.setSearchQuery(t.format(L.b2L) + " ", !0)
                        };
                        e.keepCurrentOptionSelected = function(t, n) {
                            var r = e.state.selectedIndex,
                                o = e.props,
                                i = o.resultsState,
                                a = o.totalResults,
                                u = i.mode,
                                l = i.autocompletes,
                                c = t.resultsState;
                            if (u.type !== c.mode.type) e.setSelectedIndex(-1);
                            else if (n.selectedIndex >= 0 && (n.selectedIndex === r || c.autocompletes.length !== l.length)) {
                                var s = R.zV(c.autocompletes, c.mode.type)[n.selectedIndex - 1],
                                    f = R.zV(l, u.type).indexOf(s); - 1 !== f ? e.setSelectedIndex(f) : n.selectedIndex >= a && e.setSelectedIndex(a - 1)
                            }
                        };
                        e.focusNextOption = function() {
                            e.focusOtherOption(1)
                        };
                        e.focusPreviousOption = function() {
                            e.focusOtherOption(-1)
                        };
                        e.focusOtherOption = function(t) {
                            var n = e.state.selectedIndex,
                                r = e.props.resultsState;
                            R.Fz(r.mode.filter) || e.focusOption(n + t)
                        };
                        e.focusOption = function(t) {
                            var n = t,
                                r = e.props.resultsState.autocompletes,
                                o = e.shouldShowSearchQuery();
                            n < -1 || !o && n < 0 ? n = R.BU(r) - 1 : o && n >= R.BU(r) ? n = -1 : !o && n >= R.BU(r) && (n = 0);
                            e.setSelectedIndex(n)
                        };
                        e.selectOption = function(t) {
                            var n = t;
                            null == n && (n = e.state.selectedIndex);
                            if (n < 0) return !1;
                            var r = e.props.resultsState,
                                o = r.autocompletes,
                                i = r.mode;
                            if (!R.Fz(i.filter)) {
                                var a = R.zV(o, i.type);
                                if (n >= a.length) return !1;
                                var u = a[n],
                                    l = ft(u);
                                e.setSearchQuery(u, l);
                                return !0
                            }
                        };
                        e.setSearchQuery = function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = e.props.resultsState,
                                o = r.mode,
                                i = r.cursorScope,
                                a = 0;
                            null != o.token ? a = o.token.start : null != (null == i ? void 0 : i.currentToken) && (a = i.currentToken.end);
                            var u = null != o.token ? o.token.end : a;
                            A.S.dispatch(L.CkL.SET_SEARCH_QUERY, {
                                query: t,
                                anchor: a,
                                focus: u,
                                performSearch: n
                            });
                            e.setSelectedIndex(-1)
                        };
                        e.shouldShowSearchQuery = function() {
                            var t = e.props.resultsState.mode;
                            return t.type !== L.Sap.FILTER && t.type !== L.Sap.EMPTY && !R.Fz(t.filter)
                        };
                        e.renderDatePicker = function() {
                            return (0, r.jsxs)("div", {
                                className: qe().datePicker,
                                children: [(0, r.jsx)(st, {
                                    onSelect: e.handleDateChange,
                                    maxDate: Y()().local(),
                                    minDate: ct
                                }), (0, r.jsxs)("div", {
                                    className: qe().datePickerHint,
                                    children: [(0, r.jsxs)("span", {
                                        className: qe().hint,
                                        children: [Q.Z.Messages.SEARCH_DATE_PICKER_HINT, " "]
                                    }), (0, r.jsx)(y.Clickable, {
                                        tag: "span",
                                        className: qe().hintValue,
                                        onClick: e.handleHintClick,
                                        children: e.state.dateHint
                                    })]
                                })]
                            })
                        };
                        e.handleHintClick = function() {
                            e.setSearchQuery(e.state.dateHint, !0)
                        };
                        e.performSearch = function() {
                            A.S.dispatch(L.CkL.PERFORM_SEARCH)
                        };
                        e.renderAutocompletes = function() {
                            var t = e.state.selectedIndex,
                                n = e.props,
                                o = n.navId,
                                i = n.searchId,
                                a = e.props.resultsState,
                                u = a.autocompletes,
                                l = a.mode;
                            if (R.Fz(l.filter)) return e.renderDatePicker();
                            var c = -1;
                            return u.map((function(n) {
                                if (null == n || 0 === n.results.length) return null;
                                var a, u, s, f, d = null !== (a = Et[n.group]) && void 0 !== a ? a : {};
                                if (null != d.titleText) {
                                    s = "".concat(n.group, "-header");
                                    u = (0, r.jsx)("div", {
                                        id: s,
                                        className: qe().header,
                                        children: d.titleText()
                                    })
                                }
                                var p, h = null !== (f = d.groupTip) && void 0 !== f ? f : null,
                                    y = null != h ? (0, r.jsx)(h, {
                                        searchId: i
                                    }) : null,
                                    b = null !== (p = d.component) && void 0 !== p ? p : yt,
                                    E = l.type === L.Sap.FILTER_ALL || !1;
                                return (0, r.jsxs)("ul", {
                                    role: "group",
                                    "aria-labelledby": s,
                                    className: qe().resultsGroup,
                                    children: [u, y, n.results.map((function(a) {
                                        if (null == a || null == n) return null;
                                        var u, l, s = t === (c += 1);
                                        return (0, r.jsx)(b, tt({
                                            searchId: i,
                                            group: null !== (u = a.group) && void 0 !== u ? u : n.group,
                                            result: a,
                                            showFilter: E,
                                            onSelect: e.selectOption.bind(null, c),
                                            onFocus: e.focusOption.bind(null, c)
                                        }, ie(o, c, s)), "".concat(n.group, "-").concat(a.text, "-").concat(null !== (l = a.key) && void 0 !== l ? l : ""))
                                    }))]
                                }, n.group)
                            }))
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidUpdate = function(e, t) {
                        var n = this.props,
                            r = n.resultsState,
                            o = n.totalResults,
                            i = r.mode,
                            a = e.resultsState;
                        null != i.filter && null == a.mode.filter && o > 0 ? this.setSelectedIndex(0) : i.type === L.Sap.FILTER_ALL && a.mode.type !== i.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
                    };
                    o.setSelectedIndex = function(e) {
                        var t = this;
                        this.setState({
                            selectedIndex: e
                        }, (function() {
                            return t.props.onSelectedIndexChanged(e)
                        }))
                    };
                    o.render = function() {
                        var e = this,
                            t = this.state.selectedIndex,
                            n = this.props,
                            o = n.navId,
                            i = n.resultsState,
                            a = n.totalResults;
                        return (0, r.jsx)(ue, {
                            numResults: a,
                            query: i.query,
                            navId: o,
                            hideQuery: !this.shouldShowSearchQuery(),
                            focusedIndex: t,
                            renderCustomResults: this.renderAutocompletes,
                            renderInitialState: this.renderAutocompletes,
                            onHighlightQuery: function() {
                                return e.focusOption(-1)
                            },
                            onSelectQuery: this.performSearch,
                            renderNoResults: function() {
                                return null
                            }
                        })
                    };
                    return n
                }(o.PureComponent);
            const vt = o.forwardRef((function(e, t) {
                var n = at((0, l.Wu)([He.Z, T.Z, Ve], (function() {
                        var e = He.Z.getGuildId(),
                            t = T.Z.getChannelId(),
                            n = null != e ? e : t;
                        G()(null != n, "SearchPopout.getStateFromStores - invalid searchId");
                        var r = Ve.getState(n);
                        return [n, r, R.BU(r.autocompletes)]
                    })), 3),
                    o = n[0],
                    i = n[1],
                    a = n[2];
                return (0, r.jsx)(Ot, nt(tt({}, e), {
                    searchId: o,
                    resultsState: i,
                    totalResults: a,
                    ref: t
                }))
            }));
            var gt = n(966805),
                mt = n.n(gt);
            n(517364);

            function _t(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function St(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function It(e) {
                It = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return It(e)
            }

            function Pt(e, t) {
                return !t || "object" !== Nt(t) && "function" != typeof t ? _t(e) : t
            }

            function Tt(e, t) {
                Tt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Tt(e, t)
            }
            var Nt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function At(e) {
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
                    var n, r = It(e);
                    if (t) {
                        var o = It(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Pt(this, n)
                }
            }
            var Ct = 512,
                Rt = (0, N.hQ)(),
                jt = h()(b.yC, 500),
                wt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Tt(e, t)
                    }(n, e);
                    var t = At(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var i;
                        (i = t.call(this, e)).state = {
                            focused: !1,
                            selectedIndex: void 0
                        };
                        i._searchBarRef = o.createRef();
                        i._searchPopoutRef = o.createRef();
                        i.handleSetSearchQuery = function(e) {
                            var t = e.query,
                                n = e.anchor,
                                r = e.focus,
                                o = e.performSearch,
                                a = e.replace,
                                u = i.props.editorState,
                                l = C.Sq(u);
                            " " !== t.charAt(t.length - 1) && (t += " ");
                            null != n && 0 !== n && " " !== l.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t);
                            if (a) {
                                u = C.c2(t, u);
                                n = 0
                            } else u = C.x0(t, u, n, r);
                            u = C.Hl(u, Ct);
                            u = i.tokenize(u);
                            var c = Number(n) + t.length;
                            u = C.iK(c, u);
                            i.setEditorState(u);
                            o && i.search(C.Sq(u))
                        };
                        i.handleSelectedIndexChanged = function(e) {
                            var t, n;
                            null === (t = i._editorRef) || void 0 === t || null === (n = t.editor) || void 0 === n || n.setAttribute("aria-activedescendant", null != e ? "".concat(Rt, "-").concat(e) : void 0);
                            i.setState({
                                selectedIndex: e
                            })
                        };
                        i.renderPopout = function() {
                            return (0, r.jsx)(vt, {
                                ref: i._searchPopoutRef,
                                navId: Rt,
                                onSelectedIndexChanged: i.handleSelectedIndexChanged
                            })
                        };
                        i.search = function(e) {
                            var t = i.props,
                                n = t.searchId,
                                r = t.isSearching;
                            if (null == e || "" === e) {
                                var o = i.props.editorState;
                                e = C.Sq(o)
                            }
                            if (null != n && !r) {
                                for (var a = R.kG(e), u = R.$G(a), l = 0; l < a.length; l++) R.Fr(a[l], a[l + 1]) || (e = e.substring(0, a[l].start) + e.substring(a[l].end));
                                if (0 === a.length || 0 === Object.keys(u).length) return !1;
                                jt(n, u, e);
                                i.onBlur()
                            }
                            return !0
                        };
                        i.handleClearSearch = function(e) {
                            var t = i.props.editorState,
                                n = i.state.focused;
                            e.preventDefault();
                            e.stopPropagation();
                            if ("" !== C.Sq(t)) {
                                t = C.Hl(t, 0);
                                i.setEditorState(t);
                                n || Promise.resolve().then((function() {
                                    return i.blurEditor()
                                }))
                            } else i.focusEditor()
                        };
                        i.handleFocusSearch = function(e) {
                            if (e.prefillCurrentChannel) {
                                var t = T.Z.getChannelId(),
                                    n = S.Z.getChannel(t);
                                (null == n ? void 0 : n.isThread()) && (n = S.Z.getChannel(null == n ? void 0 : n.parent_id));
                                if (null == n || n.isPrivate()) i.focusEditor();
                                else {
                                    var r = I.ZP.getTextChannelNameDisambiguations(n.getGuildId())[n.id],
                                        o = null != r ? r.name : n.name;
                                    i.handleSetSearchQuery({
                                        query: v.ZP[L.dCx.FILTER_IN].key + "#".concat(o, " "),
                                        replace: !0
                                    })
                                }
                            } else i.focusEditor()
                        };
                        i.focusEditor = function() {
                            var e = _t(i)._editorRef;
                            null != e && Promise.resolve().then((function() {
                                return e.focus()
                            }))
                        };
                        i.blurEditor = function() {
                            var e;
                            null === (e = i._editorRef) || void 0 === e || e.blur()
                        };
                        i.setEditorRef = function(e) {
                            i._editorRef = e
                        };
                        i.onFocus = function() {
                            var e = i.props.searchType;
                            _.ZP.trackWithMetadata(L.rMx.SEARCH_OPENED, {
                                search_type: e
                            });
                            i.setState({
                                focused: !0
                            })
                        };
                        i.onBlur = function() {
                            i.setState({
                                focused: !1
                            }, (function() {
                                C.xb(i.props.editorState) && i.clearSearch()
                            }))
                        };
                        i.handleReturn = function(e) {
                            e.preventDefault();
                            var t = i._searchPopoutRef.current;
                            null != t && t.selectOption() || i.search();
                            return !0
                        };
                        i.handleBeforeInput = function(e) {
                            var t = i.props.editorState,
                                n = i.state.focused;
                            if (C.Sq(t).length >= Ct) return !0;
                            t = C.x0(e, t);
                            t = C.Hl(t, Ct);
                            t = i.tokenize(t);
                            i.setEditorState(t);
                            n || i.setState({
                                focused: !0
                            });
                            return !0
                        };
                        i.handleKeyCommand = function(e) {
                            var t = i.props.editorState,
                                n = i.state.focused;
                            switch (e) {
                                case "backspace":
                                case "backspace-word":
                                case "backspace-to-start-of-line":
                                case "delete":
                                case "delete-word":
                                    t = C.yd(e, t);
                                    t = i.tokenize(t);
                                    i.setEditorState(t);
                                    n || i.setState({
                                        focused: !0
                                    });
                                    return !0;
                                case "transpose-characters":
                                case "move-selection-to-start-of-block":
                                case "move-selection-to-end-of-block":
                                    t = C.Zn(e, t);
                                    t = i.tokenize(t);
                                    i.setEditorState(t);
                                    return !0;
                                case "split-block":
                                case "underline":
                                case "bold":
                                case "italic":
                                    return !0
                            }
                        };
                        i.handlePastedText = function(e) {
                            var t = i.props.editorState,
                                n = i.state.focused;
                            e = null != e ? e.replace(/\n/g, "") : "";
                            t = C.x0(e, t);
                            t = C.Hl(t, Ct);
                            t = i.tokenize(t);
                            n || i.setState({
                                focused: !0
                            });
                            i.setEditorState(t);
                            return !0
                        };
                        i.setEditorState = function(e) {
                            var t = i.props.searchId;
                            b.j8(t, e)
                        };
                        i.handleKeyBind = function(e) {
                            var t = e.key,
                                n = e.metaKey,
                                r = e.shiftKey,
                                o = i.props,
                                a = o.editorState,
                                u = o.searchId,
                                l = o.keyboardModeEnabled;
                            e.stopPropagation();
                            if ("Escape" === t) {
                                e.preventDefault();
                                if (C.xb(a)) i.blurEditor();
                                else {
                                    var c = C.FZ(a);
                                    b.j8(u, c);
                                    i.setState({
                                        focused: !0
                                    })
                                }
                                return !0
                            }
                            if ("ArrowUp" === t) {
                                e.preventDefault();
                                var s = i._searchPopoutRef.current;
                                null != s && s.focusPreviousOption();
                                return !0
                            }
                            if ("ArrowDown" === t) {
                                e.preventDefault();
                                var f = i._searchPopoutRef.current;
                                null != f && f.focusNextOption();
                                return !0
                            }
                            if ("Tab" === t) {
                                if (l) return;
                                (0, g.Qj)();
                                return !0
                            }
                            if ("Home" === t || "ArrowLeft" === t && n) {
                                e.preventDefault();
                                a = r ? C.R8(a) : C.eE(a);
                                i.setEditorState(a);
                                return !0
                            }
                            if ("End" === t || "ArrowRight" === t && n) {
                                e.preventDefault();
                                a = r ? C.Wg(a) : C.NJ(a);
                                i.setEditorState(a);
                                return !0
                            }
                            if (("Delete" === t || "Backspace" === t) && n) {
                                var d = C.FZ(a);
                                i.setEditorState(d);
                                return !0
                            }
                            return C.q0(e)
                        };
                        R.WU();
                        return i
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e, t;
                        A.S.subscribe(L.CkL.PERFORM_SEARCH, this.search);
                        A.S.subscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery);
                        A.S.subscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch);
                        null === (e = this._editorRef) || void 0 === e || null === (t = e.editor) || void 0 === t || t.setAttribute("aria-haspopup", "listbox")
                    };
                    i.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.editorState,
                            r = t.searchId;
                        if (n !== e.editorState) {
                            var o = R.kG(C.Sq(n)),
                                i = function(e, t) {
                                    var n = t.getSelection(),
                                        r = n.focusOffset,
                                        o = n.anchorOffset;
                                    return (0, R.g9)(e, r, o)
                                }(o, n);
                            b.u$(r, o, i);
                            null != this._editorRef && C.iE(this._editorRef.editor)
                        }
                    };
                    i.componentWillUnmount = function() {
                        A.S.unsubscribe(L.CkL.PERFORM_SEARCH, this.search);
                        A.S.unsubscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery);
                        A.S.unsubscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch)
                    };
                    i.tokenize = function(e) {
                        var t = R.kG(C.Sq(e)).filter((function(e) {
                            return e.type !== O.ZP.NON_TOKEN_TYPE
                        }));
                        return C.lv(t, e, v.ZP)
                    };
                    i.clearSearch = function() {
                        var e = this.props.searchId;
                        null != e && b.qt(e)
                    };
                    i.handlePastedFiles = function() {
                        return !0
                    };
                    i.handleDroppedFiles = function() {
                        return !0
                    };
                    i.handleDrop = function() {
                        return !0
                    };
                    i.renderInput = function(e) {
                        var t = this.props.editorState;
                        return (0, r.jsx)(d.Editor, {
                            autoCorrect: "off",
                            ref: this.setEditorRef,
                            onBlur: this.onBlur,
                            onFocus: this.onFocus,
                            handleReturn: this.handleReturn,
                            handleBeforeInput: this.handleBeforeInput,
                            handleKeyCommand: this.handleKeyCommand,
                            handlePastedText: this.handlePastedText,
                            handlePastedFiles: this.handlePastedFiles,
                            handleDroppedFiles: this.handleDroppedFiles,
                            handleDrop: this.handleDrop,
                            keyBindingFn: this.handleKeyBind,
                            placeholder: Q.Z.Messages.SEARCH,
                            editorState: t,
                            onChange: this.setEditorState,
                            role: "combobox",
                            ariaExpanded: e,
                            ariaControls: e ? Rt : void 0,
                            ariaLabel: Q.Z.Messages.SEARCH,
                            ariaAutocomplete: "list"
                        })
                    };
                    i.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.searchId,
                            o = t.editorState,
                            i = t.hasResults,
                            u = t.className,
                            l = this.state.focused,
                            c = C.Sq(o).length > 0;
                        return null == n ? null : (0, r.jsx)(y.Popout, {
                            renderPopout: this.renderPopout,
                            position: "bottom",
                            animation: y.Popout.Animation.NONE,
                            shouldShow: l,
                            autoInvert: !1,
                            children: function(t, o) {
                                var s, f, d = o.isShown;
                                return (0, r.jsx)("div", {
                                    className: u,
                                    children: (0, r.jsx)("div", {
                                        className: a()(mt().search, (f = {}, St(f, mt().open, c || l), St(f, mt().focused, l), f)),
                                        children: (0, r.jsx)(y.FocusRing, {
                                            focusTarget: {
                                                current: null === (s = e._editorRef) || void 0 === s ? void 0 : s.editor
                                            },
                                            ringTarget: e._searchBarRef,
                                            children: (0, r.jsxs)("div", {
                                                className: mt().searchBar,
                                                ref: e._searchBarRef,
                                                children: [e.renderInput(d), (0, r.jsx)(E.BK, {
                                                    onClear: e.handleClearSearch,
                                                    hasContent: c || i,
                                                    className: mt().icon
                                                })]
                                            }, n)
                                        })
                                    })
                                })
                            }
                        })
                    };
                    return n
                }(o.PureComponent);
            const Dt = l.ZP.connectStores([m.Z, P.Z], (function() {
                var e, t = P.Z.getCurrentSearchId(),
                    n = P.Z.getSearchType(),
                    r = null != t && P.Z.isSearching(t),
                    o = null != t && null !== (e = P.Z.getEditorState(t)) && void 0 !== e ? e : C.nR(F(v.ZP)),
                    i = m.Z.keyboardModeEnabled;
                return {
                    searchId: t,
                    searchType: n,
                    isSearching: r,
                    editorState: o,
                    hasResults: P.Z.hasResults(t),
                    keyboardModeEnabled: i
                }
            }))(wt);
            var Mt = n(373438),
                Lt = n(120415),
                xt = n(310126),
                Zt = n(795308),
                kt = n(384411),
                Ft = n(652591),
                Ut = new Set(["ko", "ja"]);

            function Gt() {
                var e = (0, l.e7)([be.default], (function() {
                        return be.default.getCurrentUser()
                    })),
                    t = (0, l.e7)([kt.default], (function() {
                        return kt.default.locale
                    })),
                    n = (0, ge.EO)(e);
                return (0, r.jsx)(y.Anchor, {
                    href: Ke.w,
                    target: "_blank",
                    tabIndex: -1,
                    children: (0, r.jsx)(Mt.JO, {
                        color: n ? Zt.Z.unsafe_rawColors.GREEN_360.css : "currentColor",
                        onClick: function() {
                            return Ft.default.track(L.rMx.HELP_CLICKED, {
                                highlighted: n
                            })
                        },
                        icon: Ye.Z,
                        tooltipPosition: Ut.has(t) ? "left" : void 0,
                        tooltip: Q.Z.Messages.HELP
                    })
                })
            }
            var Bt = n(320142),
                Vt = n(762308),
                Ht = n(84841),
                Yt = n(562545),
                zt = n(154232),
                Qt = n(824456);

            function Kt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Wt(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function qt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Wt(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            Wt(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Xt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Jt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Xt(e, t, n[t])
                    }))
                }
                return e
            }

            function $t(e, t) {
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

            function en(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Kt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var tn = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                                        if (!(o = a.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                        }([i, u])
                    }
                }
            };

            function nn() {
                var e = (0, l.e7)([Ht.Z], (function() {
                        return Ht.Z.devToolsEnabled
                    })),
                    t = en(o.useState(!1), 2),
                    i = t[0],
                    a = t[1],
                    u = en(o.useState(0), 2),
                    c = u[0],
                    s = u[1],
                    f = function(e) {
                        clearTimeout(c);
                        s(setTimeout((function() {
                            a(e)
                        }), 100))
                    };
                return (0, r.jsx)("div", {
                    onMouseEnter: function() {
                        return f(!0)
                    },
                    onMouseLeave: function() {
                        return f(!1)
                    },
                    children: (0, r.jsx)(y.Popout, {
                        shouldShow: i,
                        animation: y.Popout.Animation.NONE,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        onRequestOpen: function() {
                            return a(!0)
                        },
                        onRequestClose: function() {
                            return a(!1)
                        },
                        renderPopout: function() {
                            return function(e) {
                                var t = e.onClose,
                                    o = e.devToolsEnabled;
                                return (0,
                                    r.jsx)(y.Menu, {
                                    onSelect: function() {},
                                    navId: "staff-help-popout",
                                    variant: "fixed",
                                    onClose: t,
                                    "aria-label": Q.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                                    children: (0, r.jsxs)(y.MenuGroup, {
                                        children: [(0, r.jsx)(y.MenuItem, {
                                            id: "staff-help-bug-reporter",
                                            label: Q.Z.Messages.BUG_REPORT_TITLE,
                                            icon: Yt.Z,
                                            action: function() {
                                                return (0, y.openModalLazy)(qt((function() {
                                                    var e, t;
                                                    return tn(this, (function(o) {
                                                        switch (o.label) {
                                                            case 0:
                                                                return [4, Promise.all([n.e(40532), n.e(78230), n.e(38826)]).then(n.bind(n, 938826))];
                                                            case 1:
                                                                e = o.sent(), t = e.default;
                                                                return [2, function(e) {
                                                                    return (0, r.jsx)(t, Jt({}, e))
                                                                }]
                                                        }
                                                    }))
                                                })))
                                            }
                                        }), o && (0, r.jsx)(y.MenuItem, {
                                            id: "staff-devtools",
                                            label: "Toggle DevTools",
                                            icon: zt.Z,
                                            action: function() {
                                                return (0, Vt.SO)()
                                            }
                                        }), (0, r.jsx)(y.MenuItem, {
                                            id: "staff-help-center",
                                            label: "Go to Help Center",
                                            icon: Qt.Z,
                                            action: function() {
                                                return (0, Bt.Z)(Ke.w)
                                            }
                                        })]
                                    })
                                })
                            }({
                                onClose: function() {
                                    return a(!1)
                                },
                                devToolsEnabled: e
                            })
                        },
                        children: function(e, t) {
                            var n = t.isShown;
                            return (0, r.jsx)(Mt.JO, $t(Jt({}, e), {
                                icon: Yt.Z,
                                "aria-label": Q.Z.Messages.HELP,
                                selected: n
                            }))
                        }
                    })
                })
            }
            var rn = n(105783),
                on = n(908056);

            function an(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function un(e) {
                un = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return un(e)
            }

            function ln(e, t) {
                return !t || "object" !== sn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function cn(e, t) {
                cn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return cn(e, t)
            }
            var sn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function fn(e) {
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
                    var n, r = un(e);
                    if (t) {
                        var o = un(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ln(this, n)
                }
            }
            var dn = "UPDATE_NOT_AVAILABLE";

            function pn(e) {
                dn = e.type
            }
            var hn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && cn(e, t)
                }(n, e);
                var t = fn(n);

                function n() {
                    an(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getState = function() {
                    return dn
                };
                r.__getLocalVars = function() {
                    return {
                        state: dn
                    }
                };
                return n
            }(l.ZP.Store);
            hn.displayName = "AutoUpdateStore";
            const yn = new hn(de.Z, {
                CHECKING_FOR_UPDATES: pn,
                UPDATE_NOT_AVAILABLE: pn,
                UPDATE_AVAILABLE: pn,
                UPDATE_MANUALLY: pn,
                UPDATE_ERROR: pn,
                UPDATE_DOWNLOADED: pn
            });
            var bn = n(563367),
                En = n(898652),
                On = n(633878);

            function vn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function gn(e, t) {
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

            function mn(e, t) {
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

            function _n(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    c = e.background,
                    s = mn(e, ["width", "height", "color", "foreground", "background"]);
                return (0, r.jsxs)("svg", gn(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            vn(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, On.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: c,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13 0C16.5198 0 19.4422 2.61306 19.9288 6.00063C19.9525 6.00021 19.9762 6 20 6C22.2091 6 24 7.79086 24 10C24 10.7708 23.782 11.4907 23.4043 12.1013C21.9807 10.7964 20.0834 10 18 10C15.0389 10 12.4535 11.6088 11.0703 14H5C2.243 14 0 11.757 0 9C0 6.243 2.243 4 5 4C6.393 4 7.678 4.454 9.175 6.58L9.992 6.004C9.018 4.62 7.987 3.815 7.022 3.357C8.26 1.31 10.49 0 13 0Z"
                    }), (0, r.jsx)("path", {
                        className: l,
                        fill: u,
                        d: "M21.293 17.292L19 19.585V13.999H17V19.585L14.707 17.292L13.293 18.706L18 23.413L22.707 18.706L21.293 17.292Z"
                    })]
                }))
            }
            var Sn = n(281110),
                In = n(630631),
                Pn = n(940007),
                Tn = n(296602),
                Nn = n(22176);

            function An(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Cn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var Rn = function(e, t) {
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
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                    function u(i) {
                        return function(u) {
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
                            }([i, u])
                        }
                    }
                },
                jn = 36e5,
                wn = 6048e5,
                Dn = 864e5,
                Mn = In.Z.get("lastNonRequiredUpdateShown", Date.now()),
                Ln = new Tn.Z("AutoUpdateManager"),
                xn = new(function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn,
                            n = this;
                        Cn(this, e);
                        this.updateAvailable = !1;
                        this.hasNativeUpdate = !1;
                        this._callbacks = [];
                        this._bootstrapper = null;
                        this.checkForUpdates = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e || !n.hasNativeUpdate)
                                if (Lt.FB) {
                                    var t = "win32" === (0, Lt.y8)() && xt.ZP.canBootstrapNewUpdater;
                                    t ? n._requestNewUpdaterBootstrap() : xt.ZP.send("CHECK_FOR_UPDATES")
                                } else n._handleNativeUpdateNotAvailable();
                            return new Promise((function(e) {
                                n.updateAvailable ? e(!0) : n._callbacks.push(e)
                            }))
                        };
                        this._handleCheckingForUpdates = function() {
                            de.Z.dispatch({
                                type: "CHECKING_FOR_UPDATES"
                            })
                        };
                        this._handleNativeUpdateNotAvailable = function() {
                            n._handleCheckingForUpdates();
                            Sn.ZP.get({
                                url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
                                query: {
                                    _: Date.now() / 1e3 / 60 / 5 | 0
                                },
                                oldFormErrors: !0
                            }).then((function(e) {
                                if (null == e.body || "274727b67a4ef4e36ae57449eaf79a0c04c2510a" === e.body.hash) return n._handleUpdateNotAvailable();
                                if (e.body.required || (0, Pn.fD)()) return n._handleUpdateDownloaded(!1);
                                var t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? wn : Dn;
                                if (Date.now() - Mn > t) {
                                    In.Z.set("lastNonRequiredUpdateShown", Date.now());
                                    return n._handleUpdateDownloaded(!1)
                                }
                            }), (function() {
                                return n._handleUpdateError()
                            }))
                        };
                        this._handleUpdateNotAvailable = function() {
                            de.Z.dispatch({
                                type: "UPDATE_NOT_AVAILABLE"
                            });
                            n._emitCallbacks()
                        };
                        this._handleUpdateAvailable = function(e) {
                            n.updateAvailable = !0;
                            n.hasNativeUpdate = e;
                            de.Z.dispatch({
                                type: "UPDATE_AVAILABLE"
                            })
                        };
                        this._handleUpdateManually = function() {
                            n.updateAvailable = !0;
                            n.hasNativeUpdate = !0;
                            de.Z.dispatch({
                                type: "UPDATE_MANUALLY"
                            })
                        };
                        this._handleUpdateError = function(e) {
                            n.updateAvailable = !1;
                            de.Z.dispatch({
                                type: "UPDATE_ERROR",
                                message: e
                            })
                        };
                        this._handleUpdateDownloaded = function(e, t, r, o, i) {
                            n._handleUpdateAvailable(e);
                            de.Z.dispatch({
                                type: "UPDATE_DOWNLOADED",
                                releaseNotes: t,
                                releaseName: r,
                                releaseDate: o,
                                updateURL: i
                            });
                            n._emitCallbacks()
                        };
                        if (Lt.FB) {
                            xt.ZP.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates);
                            xt.ZP.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable);
                            xt.ZP.on("UPDATE_AVAILABLE", (function() {
                                return n._handleUpdateAvailable(!0)
                            }));
                            xt.ZP.on("UPDATE_ERROR", this._handleUpdateError);
                            xt.ZP.on("UPDATE_DOWNLOADED", (function() {
                                return n._handleUpdateDownloaded(!0)
                            }));
                            xt.ZP.on("UPDATE_MANUALLY", this._handleUpdateManually)
                        }
                        de.Z.wait((function() {
                            n.checkForUpdates()
                        }));
                        this._checkInterval = setInterval(this.checkForUpdates, t)
                    }
                    var t = e.prototype;
                    t.destroy = function() {
                        clearInterval(this._checkInterval)
                    };
                    t.quitAndInstall = function() {
                        this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : xt.ZP.send("QUIT_AND_INSTALL") : location.reload(!0))
                    };
                    t._requestNewUpdaterBootstrap = function() {
                        var e, t = this;
                        return (e = function() {
                            var e, n;
                            return Rn(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        Ln.log("Bootstrapping new updater host...");
                                        r.label = 1;
                                    case 1:
                                        r.trys.push([1, 3, , 4]);
                                        return [4, xt.ZP.ensureModule("discord_updater_bootstrap")];
                                    case 2:
                                        r.sent();
                                        e = xt.ZP.requireModule("discord_updater_bootstrap");
                                        t._bootstrapper = e;
                                        return [3, 4];
                                    case 3:
                                        r.sent();
                                        t._handleNativeUpdateNotAvailable();
                                        return [2];
                                    case 4:
                                        r.trys.push([4, 6, , 7]);
                                        t._handleCheckingForUpdates();
                                        return [4, e.bootstrap(xt.ZP.releaseChannel, "win")];
                                    case 5:
                                        r.sent();
                                        t.updateAvailable = !0;
                                        t.hasNativeUpdate = !0;
                                        t._handleUpdateDownloaded(!0);
                                        return [3, 7];
                                    case 6:
                                        n = r.sent();
                                        Ln.log("Failed to bootstrap new updater:", n);
                                        t._handleNativeUpdateNotAvailable();
                                        Nn.Z.captureException(n);
                                        return [3, 7];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = e.apply(t, n);

                                function a(e) {
                                    An(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    An(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            }))
                        })()
                    };
                    t._emitCallbacks = function() {
                        var e = this;
                        this._callbacks.forEach((function(t) {
                            return t(e.updateAvailable)
                        }));
                        this._callbacks = []
                    };
                    return e
                }());

            function Zn() {
                xn.quitAndInstall()
            }
            var kn = n(43429),
                Fn = n.n(kn);

            function Un(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Gn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Bn(e) {
                Bn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Bn(e)
            }

            function Vn(e, t) {
                return !t || "object" !== Yn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Hn(e, t) {
                Hn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Hn(e, t)
            }
            var Yn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function zn(e) {
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
                    var n, r = Bn(e);
                    if (t) {
                        var o = Bn(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Vn(this, n)
                }
            }
            var Qn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Hn(e, t)
                }(n, e);
                var t = zn(n);

                function n() {
                    Un(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        memoizedMode: e.props.mode,
                        clicked: !1
                    };
                    e.handleInstallDownload = function() {
                        bn.Z.isConnected() ? rn.Z.show({
                            title: Q.Z.Messages.UPDATE_DURING_CALL_TITLE,
                            body: Q.Z.Messages.UPDATE_DURING_CALL_BODY,
                            onConfirm: e.doUpdate,
                            cancelText: Q.Z.Messages.CANCEL,
                            confirmText: Q.Z.Messages.UPDATE_DURING_CALL_CONTINUE
                        }) : e.doUpdate()
                    };
                    e.doUpdate = function() {
                        if (!e.state.clicked) {
                            e.setState({
                                clicked: !0
                            });
                            Zn()
                        }
                    };
                    return e
                }
                var o = n.prototype;
                o.handleDownloadApps = function() {
                    (0, y.openModal)((function(e) {
                        return (0, r.jsx)(on.default, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    Gn(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            source: "Links"
                        }, e))
                    }))
                };
                o.render = function() {
                    switch (this.props.mode) {
                        case "UPDATE_AVAILABLE":
                            return (0, r.jsx)(Mt.JO, {
                                hideOnClick: !1,
                                tooltip: Q.Z.Messages.UPDATE_AVAILABLE,
                                foreground: Fn().downloadArrow,
                                background: Fn().cloud,
                                icon: _n
                            });
                        case "UPDATE_MANUALLY":
                        case "UPDATE_DOWNLOADED":
                            return (0, r.jsx)(Mt.JO, {
                                tooltip: Q.Z.Messages.UPDATE_DOWNLOADED,
                                foreground: Fn().updateIconForeground,
                                onClick: this.handleInstallDownload,
                                icon: En.Z
                            });
                        default:
                            return null
                    }
                };
                n.getDerivedStateFromProps = function(e, t) {
                    return e.mode !== t.memoizedMode ? {
                        memoizedMode: e.mode,
                        clicked: !1
                    } : null
                };
                return n
            }(o.PureComponent);
            const Kn = l.ZP.connectStores([yn], (function() {
                return {
                    mode: yn.getState()
                }
            }))(Qn);
            var Wn = n(897196);

            function qn(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Xn(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            qn(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            qn(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Jn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Jn(e, t, n[t])
                    }))
                }
                return e
            }

            function er(e, t) {
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

            function tr(e, t) {
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
            var nr = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function rr() {
                return or.apply(this, arguments)
            }

            function or() {
                return (or = Xn((function() {
                    var e, t, n, r;
                    return nr(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return (0, Lt.V5)() && Lt.FB ? [4, null === (t = (e = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === t ? void 0 : t.call(e)] : [3, 2];
                            case 1:
                                "Minimize" === (r = null !== (n = o.sent()) && void 0 !== n ? n : "Maximize") ? xt.ZP.minimize(): "Maximize" === r && xt.ZP.maximize();
                                o.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ir(e) {
                var t = e.children,
                    n = e.className,
                    o = e.channelId,
                    i = e.guildId,
                    a = e.innerClassname,
                    c = e.transparent,
                    s = void 0 !== c && c,
                    d = e.toolbar,
                    p = e.mobileToolbar,
                    h = e["aria-label"],
                    y = e["aria-labelledby"],
                    b = e.scrollable,
                    E = e.role,
                    O = e.hideSearch,
                    v = (0, l.e7)([be.default], (function() {
                        return be.default.getCurrentUser()
                    })),
                    g = (null == v ? void 0 : v.isStaff()) || (null == v ? void 0 : v.isStaffPersonal()) || !1;
                return (0, r.jsx)(Mt.ZP, {
                    className: n,
                    innerClassName: a,
                    toolbar: function() {
                        if (null == d) return null;
                        var e = null != o && !O;
                        return u.tq ? p : (0, r.jsxs)(r.Fragment, {
                            children: [d, e ? (0, r.jsx)(Dt, {
                                className: Fn().search
                            }, null != i ? i : o) : null, (0, r.jsx)(Kn, {}), (0, r.jsx)(f.Z, {}), g ? (0, r.jsx)(nn, {}) : (0, r.jsx)(Gt, {})]
                        })
                    }(),
                    transparent: s,
                    onDoubleClick: rr,
                    "aria-label": h,
                    "aria-labelledby": y,
                    role: E,
                    scrollable: b,
                    children: t
                })
            }

            function ar(e) {
                var t = e.children,
                    n = e.className,
                    o = e["aria-label"],
                    i = e["aria-labelledby"],
                    a = e.role;
                return (0, r.jsx)(Mt.ZP, {
                    className: n,
                    onDoubleClick: rr,
                    "aria-label": o,
                    "aria-labelledby": i,
                    role: a,
                    children: t
                })
            }

            function ur(e) {
                var t = e.isAuthenticated,
                    n = void 0 === t || t,
                    o = tr(e, ["isAuthenticated"]),
                    i = (0, s.Z)(c.Z.HEADER_BAR).AnalyticsLocationProvider,
                    u = a()(o.className, Jn({}, Fn().forumOrHome, null != o.channelType && L.TPd.GUILD_THREADS_ONLY.has(o.channelType) || o.channelId === Wn.oC.GUILD_HOME));
                return (0, r.jsx)(i, {
                    children: n ? (0,
                        r.jsx)(ir, er($n({}, o), {
                        className: u
                    })) : (0, r.jsx)(ar, er($n({}, o), {
                        className: u
                    }))
                })
            }
            ur.Title = Mt.ZP.Title;
            ur.Icon = Mt.ZP.Icon;
            ur.Divider = Mt.ZP.Divider;
            ur.Caret = Mt.ZP.Caret;
            const lr = ur
        },
        101609: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => u,
                Z: () => l
            });
            var r = n(70145),
                o = n(928066),
                i = n(791707),
                a = n(2590);

            function u(e, t, n) {
                return null == t || (t.type === a.ys_.MESSAGE && t.content.id === t.content.channel_id || (t.type !== a.ys_.MESSAGE && t.type !== a.ys_.THREAD_STARTER_MESSAGE || l(e, t.content, n)))
            }

            function l(e, t, n) {
                return !(!n.hasFlag(a.iLy.HAS_THREAD) && !n.isCommandType()) || (n.type > a.uaV.DEFAULT ? !(0, i.Z)(t) || n.type === a.uaV.REPLY : !!(0, i.Z)(t) || (t.author.id !== n.author.id || (t.hasFlag(a.iLy.EPHEMERAL) !== n.hasFlag(a.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username || (!(!(null == e ? void 0 : e.isForumPost()) || t.id !== e.id) || (!(0,
                    r._w)(t.timestamp, n.timestamp, 42e4) || (!(!n.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS) || t.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS)) || (!(!t.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS) || n.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS) || !(n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || !!(0, o.Z)(n)))))))))
            }
        },
        349658: (e, t, n) => {
            "use strict";
            n.d(t, {
                P1: () => i,
                DQ: () => a
            });
            var r = n(473903),
                o = n(2590);

            function i(e) {
                return void 0 !== e && e.type !== o.d4z.DM
            }

            function a(e) {
                return t = e.author.id, null !== (i = null === (n = r.default.getUser(t)) || void 0 === n ? void 0 : n.hasFlag(o.xW$.SPAMMER)) && void 0 !== i && i;
                var t, n, i
            }
        },
        343557: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
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
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
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
            var a = !1,
                u = new Set;
            window.addEventListener("keydown", (function(e) {
                l(e.shiftKey)
            }));
            window.addEventListener("keyup", (function(e) {
                l(e.shiftKey)
            }));
            window.addEventListener("mousemove", (function(e) {
                l(e.shiftKey)
            }));
            window.addEventListener("blur", (function() {
                l(!1)
            }));

            function l(e) {
                if (e !== a) {
                    a = e;
                    u.forEach((function(e) {
                        return e(a)
                    }))
                }
            }

            function c() {
                var e = i(r.useState(a), 2),
                    t = e[0],
                    n = e[1];
                r.useEffect((function() {
                    var e = function(e) {
                        n(e)
                    };
                    u.add(e);
                    return function() {
                        u.delete(e)
                    }
                }), []);
                return t
            }
        },
        753557: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(882723));

            function i(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            i(a, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
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

            function l(e) {
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

            function s(e, t) {
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
            var f = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function d(e) {
                var t = e.initialPlanId,
                    i = e.activeSubscription,
                    u = e.trialId,
                    d = e.trialFooterMessageOverride,
                    p = e.onClose,
                    h = e.analyticsObject,
                    y = e.analyticsLocation,
                    b = e.analyticsLocations,
                    E = e.analyticsSubscriptionType,
                    O = e.renderHeader,
                    v = e.renderPurchaseConfirmation,
                    g = e.planGroup,
                    m = e.reviewWarningMessage,
                    _ = e.skuId;
                (0, o.openModalLazy)(a((function() {
                    var e, o, a;
                    return f(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                return [4, Promise.resolve().then(n.bind(n, 782786))];
                            case 1:
                                e = f.sent().PaymentContextProvider;
                                return [4, Promise.all([n.e(40532), n.e(1162), n.e(86611)]).then(n.bind(n, 586611))];
                            case 2:
                                o = f.sent().PaymentModal;
                                return [4, Promise.all([n.e(40532), n.e(92224), n.e(20637), n.e(99676), n.e(98847), n.e(52171), n.e(66885), n.e(86159), n.e(38039), n.e(46285), n.e(1162), n.e(78230), n.e(5023), n.e(27059), n.e(43814), n.e(70301), n.e(513), n.e(89609)]).then(n.bind(n, 786763))];
                            case 3:
                                a = f.sent().STEPS;
                                return [2, function(n) {
                                    var f = n.onClose,
                                        S = s(n, ["onClose"]);
                                    return (0, r.jsx)(e, {
                                        activeSubscription: i,
                                        stepConfigs: a,
                                        skuIDs: [_],
                                        children: (0,
                                            r.jsx)(o, c(l({}, S), {
                                            initialPlanId: t,
                                            onClose: function(e) {
                                                f();
                                                null == p || p(e)
                                            },
                                            analyticsLocations: b,
                                            analyticsObject: h,
                                            analyticsLocation: y,
                                            analyticsSubscriptionType: E,
                                            skuId: _,
                                            renderHeader: O,
                                            renderPurchaseConfirmation: v,
                                            planGroup: g,
                                            trialId: u,
                                            trialFooterMessageOverride: d,
                                            reviewWarningMessage: m
                                        }))
                                    })
                                }]
                        }
                    }))
                })), {
                    onCloseCallback: function() {
                        null == p || p(!1)
                    }
                })
            }
        },
        50034: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => a,
                b: () => u
            });
            var r = n(318715),
                o = n(473903),
                i = n(704512),
                a = function() {
                    return l(o.default.getCurrentUser(), (0, i.JH)())
                },
                u = function() {
                    return l((0, r.ZP)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })), (0, i.o9)())
                };

            function l(e, t) {
                return null != e && !e.isPomelo() && (!!e.hasVerifiedEmailOrPhone() && !!t)
            }
        },
        968507: (e, t, n) => {
            "use strict";
            n.d(t, {
                F_: () => o,
                JP: () => i,
                YQ: () => a,
                as: () => u
            });
            var r = n(260561),
                o = (0, r.B)({
                    kind: "user",
                    id: "2023-09_whats_new_drop_1_flip",
                    label: "What's New Drop 1",
                    defaultConfig: {
                        flipped: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Flipped",
                        config: {
                            flipped: !0
                        }
                    }]
                }),
                i = function() {
                    return o.useExperiment({
                        location: "experiment_hook"
                    })
                },
                a = (0, r.B)({
                    kind: "user",
                    id: "2023-09_whats_new_drop_2_flip",
                    label: "What's New Drop 2",
                    defaultConfig: {
                        flipped: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Flipped",
                        config: {
                            flipped: !0
                        }
                    }]
                }),
                u = function() {
                    return a.useExperiment({
                        location: "experiment_hook"
                    })
                }
        },
        84536: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-09_whats_new_phase_2",
                label: "What's New Phase 2",
                defaultConfig: {
                    enabled: !1,
                    isInAnyBucket: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        enabled: !1,
                        isInAnyBucket: !0
                    }
                }, {
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        isInAnyBucket: !0
                    }
                }]
            });
            const o = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return r.useExperiment({
                    location: "experiment_hook"
                }, {
                    autoTrackExposure: e,
                    disable: t
                })
            }
        },
        598679: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r,
                Z: () => p
            });
            var r, o, i = n(785893),
                a = n(667294),
                u = n(294184),
                l = n.n(u),
                c = n(483913),
                s = n.n(c);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.PREMIUM = "premium";
                e.LIMITED = "limited"
            }(r || (r = {}));
            var d = (f(o = {}, r.PREMIUM, {
                border: s().premiumFeatureBorder,
                background: s().premiumBackground
            }), f(o, r.LIMITED, {
                border: s().limitedFeatureBorder,
                background: s().limitedBackground
            }), o);
            const p = a.forwardRef((function(e, t) {
                var n = e.children,
                    o = e.type,
                    a = void 0 === o ? r.PREMIUM : o,
                    u = e.isShown,
                    c = e.hasBackground,
                    f = void 0 !== c && c,
                    p = e.className,
                    h = e.backgroundClassName;
                if (!u) return (0, i.jsx)(i.Fragment, {
                    children: n
                });
                var y = d[a],
                    b = y.border,
                    E = y.background;
                return (0, i.jsx)("div", {
                    ref: t,
                    className: l()(b, p),
                    children: (0, i.jsx)("div", {
                        className: l()(f ? E : s().background, h),
                        children: n
                    })
                })
            }))
        },
        523649: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => q
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                a = n(630631),
                u = n(242715),
                l = n(744564),
                c = n(649536),
                s = n(435949),
                f = n(791707),
                d = n(384411),
                p = n(4798),
                h = n(664625),
                y = n(61209),
                b = n(352980),
                E = n(179913),
                O = n(840922),
                v = n(464187),
                g = n(9430),
                m = n(473903),
                _ = n(2590);

            function S(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function N(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function A(e, t) {
                A = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return A(e, t)
            }
            var C = function(e) {
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
                    var n, r = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return N(this, n)
                }
            }
            var j = "recentMentionFilterSettings",
                w = [],
                D = {},
                M = !1,
                L = !0,
                x = a.Z.get(j, {
                    guildFilter: _.NgX.ALL_SERVERS,
                    everyoneFilter: !0,
                    roleFilter: !0
                }),
                Z = !1,
                k = 0,
                F = !1,
                U = !1;

            function G(e) {
                if (e instanceof p.Z) return e;
                var t = b.Z.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, c.e5)(e)
            }

            function B(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((0, f.Z)(e)) return null;
                null == t && (t = e.channel_id);
                var n = y.Z.getChannel(t);
                if (null == n || n.type === _.d4z.DM) return null;
                if (x.guildFilter === _.NgX.THIS_SERVER && n.getGuildId() !== v.Z.getGuildId()) return null;
                var r = e.author.id,
                    o = h.default.getId();
                if (O.Z.isBlocked(r) || r === o) return null;
                e = G(e);
                var i = !x.everyoneFilter,
                    a = !x.roleFilter;
                if (!(0, s.ZP)({
                        message: e,
                        userId: o,
                        suppressEveryone: i,
                        suppressRoles: a
                    })) return null;
                U && E.ZP.ackMessageId(n.id) !== e.id && (0, s.ZP)({
                    message: e,
                    userId: o,
                    suppressEveryone: g.Z.isSuppressEveryoneEnabled(n.getGuildId()),
                    suppressRoles: g.Z.isSuppressRolesEnabled(n.getGuildId())
                }) && (U = !1);
                return e
            }

            function V(e) {
                if (null == D[e]) return !1;
                delete D[e];
                w = o().filter(w, (function(t) {
                    return t.id !== e
                }))
            }

            function H(e) {
                return V(e.id)
            }

            function Y(e) {
                var t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            P(e, t, n[t])
                        }))
                    }
                    return e
                }({}, x);
                x = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), x);
                a.Z.set(j, x);
                var n = function(e, n) {
                        return t[e] !== x[e] && x[e] === n
                    },
                    r = n("guildFilter", _.NgX.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
                D = {};
                var i = [];
                r && w.forEach((function(e) {
                    var t = B(e);
                    if (null != t) {
                        i.push(t);
                        D[t.id] = !0
                    }
                }));
                0 === (w = i).length && (Z = !1)
            }

            function z() {
                o().forEach(w, (function(e) {
                    e.timestamp.locale(d.default.locale)
                }))
            }

            function Q() {
                w = w.filter((function(e) {
                    return !O.Z.isBlocked(e.author.id)
                }))
            }

            function K(e) {
                var t = e.channel;
                w = o().filter(w, (function(e) {
                    if (e.channel_id === t.id) {
                        delete D[e.id];
                        return !1
                    }
                    return !0
                }))
            }
            var W = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && A(e, t)
                }(n, e);
                var t = R(n);

                function n() {
                    S(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(m.default, y.Z, b.Z, E.ZP)
                };
                r.isOpen = function() {
                    return F
                };
                r.getMentions = function() {
                    return Z || w.length > 0 ? w : null
                };
                r.hasMention = function(e) {
                    return D[e]
                };
                r.__getLocalVars = function() {
                    return {
                        STORAGE_SETTINGS_KEY: j,
                        mentions: w,
                        map: D,
                        loading: M,
                        hasMore: L,
                        filterSettings: x,
                        hasLoadedEver: Z,
                        lastLoaded: k,
                        mentionModalOpen: F,
                        mentionsAreStale: U
                    }
                };
                ! function(e, t, n) {
                    t && I(e.prototype, t);
                    n && I(e, n)
                }(n, [{
                    key: "hasLoadedEver",
                    get: function() {
                        return Z
                    }
                }, {
                    key: "lastLoaded",
                    get: function() {
                        return k
                    }
                }, {
                    key: "loading",
                    get: function() {
                        return M
                    }
                }, {
                    key: "hasMore",
                    get: function() {
                        return L
                    }
                }, {
                    key: "guildFilter",
                    get: function() {
                        return x.guildFilter
                    }
                }, {
                    key: "everyoneFilter",
                    get: function() {
                        return x.everyoneFilter
                    }
                }, {
                    key: "roleFilter",
                    get: function() {
                        return x.roleFilter
                    }
                }, {
                    key: "mentionsAreStale",
                    get: function() {
                        return U
                    }
                }]);
                return n
            }(i.ZP.Store);
            W.displayName = "RecentMentionsStore";
            const q = new W(l.Z, {
                LOAD_RECENT_MENTIONS: function(e) {
                    var t = e.guildId;
                    M = !0;
                    null == t && x.guildFilter === _.NgX.THIS_SERVER && Y({
                        guildFilter: _.NgX.ALL_SERVERS
                    })
                },
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    var t = e.hasMoreAfter,
                        n = e.messages,
                        r = e.isAfter,
                        i = o().map(n, G);
                    if (r) w = w.concat(i);
                    else {
                        w = i;
                        D = {}
                    }
                    o().forEach(i, (function(e) {
                        D[e.id] = !0
                    }));
                    M = !1;
                    L = t;
                    k = (0, u.zO)();
                    Z = !0
                },
                LOAD_RECENT_MENTIONS_FAILURE: function() {
                    M = !1
                },
                SET_RECENT_MENTIONS_FILTER: Y,
                TRUNCATE_MENTIONS: function(e) {
                    for (var t = e.size, n = t; n < w.length; ++n) delete D[w[n].id];
                    w.length > (w = w.slice(0, t)).length && (L = !0)
                },
                CHANNEL_SELECT: function() {
                    if (x.guildFilter !== _.NgX.THIS_SERVER) return !1;
                    Z = !1
                },
                CONNECTION_OPEN: function() {
                    w = [];
                    D = {};
                    Z = !1;
                    U = !1
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    w = o().filter(w, (function(e) {
                        var n = y.Z.getChannel(e.channel_id);
                        if (null == n || n.getGuildId() === t.id) {
                            delete D[e.id];
                            return !1
                        }
                        return !0
                    }))
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message,
                        r = m.default.getCurrentUser();
                    if (null == r || !(0, s.Hl)({
                            rawMessage: n,
                            userId: r.id,
                            suppressRoles: !1,
                            suppressEveryone: !1
                        })) return !1;
                    var o = B(n, t);
                    if (null == o) return !1;
                    (w = w.slice()).unshift(o);
                    D[o.id] = !0
                },
                MESSAGE_UPDATE: function(e) {
                    var t = e.message.id;
                    if (null == D[String(t)]) return !1;
                    var n = o().findIndex(w, (function(e) {
                            return e.id === t
                        })),
                        r = (w = w.slice())[n];
                    null != r && (w[n] = (0,
                        c.wi)(r, e.message))
                },
                MESSAGE_DELETE: H,
                RECENT_MENTION_DELETE: H,
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids;
                    o().forEach(t, V)
                },
                USER_SETTINGS_PROTO_UPDATE: z,
                I18N_LOAD_SUCCESS: z,
                CHANNEL_DELETE: K,
                THREAD_DELETE: K,
                RELATIONSHIP_ADD: Q,
                RELATIONSHIP_REMOVE: Q,
                MENTION_MODAL_OPEN: function() {
                    F = !0
                },
                MENTION_MODAL_CLOSE: function() {
                    F = !1
                },
                SET_RECENT_MENTIONS_STALE: function(e) {
                    U = !0
                }
            })
        },
        915029: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Ya
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(725105),
                u = n(179913),
                l = n(473903),
                c = n(633878);

            function s(e, t, n) {
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

            function p(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, c.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z",
                        fill: u,
                        className: l
                    })
                }))
            }
            var h = n(373438),
                y = n(294184),
                b = n.n(y),
                E = n(853158),
                O = n(318715),
                v = n(316878),
                g = n(229633),
                m = n(489981),
                _ = n(956827),
                S = n.n(_);

            function I(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function P(e) {
                P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return P(e)
            }

            function T(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, r = P(e);
                    if (t) {
                        var o = P(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var R = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && N(e, t)
                }(n, e);
                var t = C(n);

                function n() {
                    I(this, n);
                    var e;
                    (e = t.apply(this, arguments)).animationScale = new E.Z.Value(1);
                    return e
                }
                var o = n.prototype;
                o.componentDidUpdate = function(e) {
                    e.count < this.props.count && !this.props.reducedMotion && E.Z.sequence([E.Z.timing(this.animationScale, {
                        toValue: 1.8,
                        duration: 300
                    }), E.Z.timing(this.animationScale, {
                        toValue: 1,
                        duration: 200
                    })]).start()
                };
                o.render = function() {
                    var e = this.props,
                        t = e.count,
                        n = e.className;
                    return 0 === t ? null : (0, r.jsx)(E.Z.div, {
                        className: b()(S().badge, n),
                        style: {
                            transform: [{
                                scale: this.animationScale
                            }]
                        },
                        children: t
                    })
                };
                return n
            }(o.PureComponent);

            function j(e) {
                var t = e.className,
                    n = g.Z.useExperiment({
                        location: "f79435_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    o = (0, O.ZP)([m.Z], (function() {
                        return n ? m.Z.getOverdueMessageReminderCount() : 0
                    }), [n]),
                    i = (0, O.ZP)([v.Z], (function() {
                        return v.Z.useReducedMotion
                    }));
                return n ? (0, r.jsx)(R, {
                    count: o,
                    className: t,
                    reducedMotion: i
                }) : null
            }
            var w = n(418705),
                D = n(882723),
                M = n(917019),
                L = n(473419),
                x = n(930948),
                Z = n(842227),
                k = n(858311),
                F = n(369710),
                U = n(106673),
                G = n(496916);
            const B = function() {
                var e = o.useRef(!0);
                o.useEffect((function() {
                    return function() {
                        e.current = !1
                    }
                }), []);
                return o.useCallback((function() {
                    return e.current
                }), [])
            };
            var V = n(523649),
                H = n(993231),
                Y = n(281110),
                z = n(165695),
                Q = n(744564),
                K = n(968449),
                W = n(391438),
                q = n(2590);

            function X(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function J(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            X(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            X(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function $(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        $(e, t, n[t])
                    }))
                }
                return e
            }
            var te = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function ne(e) {
                Q.Z.dispatch({
                    type: "NOTIFICATION_CENTER_SET_ACTIVE",
                    active: e
                })
            }

            function re() {
                Q.Z.dispatch({
                    type: "RESET_NOTIFICATION_CENTER"
                })
            }

            function oe(e, t) {
                return ie.apply(this, arguments)
            }

            function ie() {
                return (ie = J((function(e, t) {
                    var n, r;
                    return te(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return k.Z.loading ? [2] : [4, Q.Z.dispatch({
                                    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
                                })];
                            case 1:
                                o.sent();
                                n = Math.ceil(k.Z.items.length / e.limit);
                                o.label = 2;
                            case 2:
                                o.trys.push([2, 5, , 7]);
                                return [4, W.Z.get({
                                    url: q.ANM.NOTIF_CENTER_ITEMS(),
                                    trackedActionData: {
                                        event: H.a9.NOTIFICATION_CENTER_PAGE_FETCH,
                                        properties: function(e) {
                                            var t, r = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map((function(e) {
                                                return e.type
                                            }));
                                            return (0, z.iG)({
                                                page: n,
                                                items: r,
                                                item_count: r.length
                                            })
                                        }
                                    },
                                    query: ee({}, e)
                                })];
                            case 3:
                                r = o.sent();
                                null == t || t();
                                return [4, Q.Z.dispatch({
                                    type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                                    items: r.body.items,
                                    cursor: r.body.cursor,
                                    hasMore: r.body.has_more
                                })];
                            case 4:
                                o.sent();
                                return [3, 7];
                            case 5:
                                o.sent();
                                null == t || t();
                                return [4, Q.Z.dispatch({
                                    type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE"
                                })];
                            case 6:
                                o.sent();
                                return [3, 7];
                            case 7:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ae(e) {
                null != e.local_id ? (n = [e.local_id], Q.Z.dispatch({
                    type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
                    localIds: n
                })) : (0, U.RB)(e) ? (t = e.id, Q.Z.dispatch({
                    type: "NOTIFICATION_CENTER_ITEMS_ACK",
                    optimistic: !0,
                    ids: [t]
                })) : function(e) {
                    ue.apply(this, arguments)
                }(e.id);
                var t, n
            }

            function ue() {
                return (ue = J((function(e) {
                    return te(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                Q.Z.dispatch({
                                    type: "NOTIFICATION_CENTER_ITEMS_ACK",
                                    optimistic: !0,
                                    ids: [e]
                                });
                                return [4, Y.ZP.post({
                                    url: q.ANM.NOTIF_CENTER_ITEMS_ACK(e)
                                })];
                            case 1:
                                t.sent();
                                return [3, 3];
                            case 2:
                                t.sent();
                                Q.Z.dispatch({
                                    type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
                                    ids: [e]
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function le(e) {
                return ce.apply(this, arguments)
            }

            function ce() {
                return (ce = J((function(e) {
                    var t, n;
                    return te(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = K.d$.getSetting();
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                Q.Z.dispatch({
                                    type: "NOTIFICATION_CENTER_ITEM_DELETE",
                                    id: e.id
                                });
                                return [4, W.Z.delete({
                                    url: q.ANM.NOTIF_CENTER_ITEMS(e.id),
                                    body: {
                                        item_type: (0, U.RB)(e) ? "mention" : "regular"
                                    },
                                    trackedActionData: {
                                        event: H.a9.NOTIFICATION_CENTER_ITEM_DELETE,
                                        properties: {
                                            notification_center_id: e.id,
                                            acked: (0, U.r)(e, t),
                                            item_type: e.type
                                        }
                                    }
                                })];
                            case 2:
                                r.sent();
                                return [3, 4];
                            case 3:
                                n = r.sent();
                                Q.Z.dispatch({
                                    type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
                                    item: e
                                });
                                throw n;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var se = n(202958);

            function fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function de(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function pe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function he(e) {
                he = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return he(e)
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        pe(e, t, n[t])
                    }))
                }
                return e
            }

            function be(e, t) {
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

            function Ee(e, t) {
                return !t || "object" !== ge(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Oe(e, t) {
                Oe = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Oe(e, t)
            }

            function ve(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return fe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ge = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function me(e) {
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
                    var n, r = he(e);
                    if (t) {
                        var o = he(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ee(this, n)
                }
            }
            var _e = 7776e6,
                Se = {
                    tab: null,
                    localItemAcks: {},
                    hasNewMentions: !1,
                    isDataStale: !1,
                    isRefreshing: !1
                };
            var Ie = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Oe(e, t)
                }(n, e);
                var t = me(n);

                function n() {
                    de(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(V.Z);
                    if (null != e) {
                        var t;
                        (Se = e).localItemAcks = function(e) {
                            var t = {},
                                n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var i, a = Object.entries(e)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                    var u = ve(i.value, 2),
                                        l = u[0],
                                        c = u[1];
                                    Date.now() - c < _e && (t[l] = c)
                                }
                            } catch (e) {
                                r = !0;
                                o = e
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            return t
                        }(null !== (t = Se.localItemAcks) && void 0 !== t ? t : {});
                        Se.isDataStale = !0
                    }
                };
                r.getState = function() {
                    return Se
                };
                r.getTab = function() {
                    var e;
                    return null !== (e = Se.tab) && void 0 !== e ? e : F.b1.ForYou
                };
                r.isLocalItemAcked = function(e) {
                    return null != Se.localItemAcks[e]
                };
                r.hasNewMentions = function() {
                    return Se.hasNewMentions
                };
                r.isDataStale = function() {
                    return Se.isDataStale
                };
                r.isRefreshing = function() {
                    return Se.isRefreshing
                };
                r.shouldReload = function() {
                    return Se.hasNewMentions || Se.isDataStale || Se.isRefreshing
                };
                r.__getLocalVars = function() {
                    return {
                        NINETY_DAYS_MS: _e,
                        state: Se
                    }
                };
                return n
            }(i.ZP.PersistedStore);
            Ie.displayName = "NotificationCenterStore";
            Ie.persistKey = "NotificationCenterStore";

            function Pe() {
                Se.hasNewMentions = !1;
                Se.isDataStale = !1;
                Se.isRefreshing = !1
            }
            const Te = new Ie(Q.Z, {
                MESSAGE_CREATE: function(e) {
                    var t = e.message;
                    (0, se.bY)() && V.Z.hasMention(t.id) && (Se.hasNewMentions = !0)
                },
                NOTIFICATION_CENTER_SET_TAB: function(e) {
                    Se = be(ye({}, Se), {
                        tab: e.tab
                    })
                },
                NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
                    e.localIds.forEach((function(e) {
                        Se = be(ye({}, Se), {
                            localItemAcks: be(ye({}, Se.localItemAcks), pe({}, e, Date.now()))
                        })
                    }))
                },
                NOTIFICATION_CENTER_REFRESH: function() {
                    Se.isRefreshing = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: Pe,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Pe
            });
            var Ne = n(290679);

            function Ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ce(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Re(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ae(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ae(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var je, we = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
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
                            }([i, u])
                        }
                    }
                },
                De = function(e) {
                    var t = e.isFocused,
                        n = e.navigatedAway,
                        r = e.isDesktop,
                        a = e.withMentions,
                        u = void 0 !== a && a,
                        l = e.initialPageSize,
                        c = (0, i.e7)([Te], (function() {
                            return Te.shouldReload()
                        })),
                        s = o.useRef(!1),
                        f = Re(o.useState(!1), 2),
                        d = f[0],
                        p = f[1],
                        h = (0, i.cj)([k.Z], (function() {
                            return {
                                initialized: k.Z.initialized,
                                loading: k.Z.loading,
                                items: k.Z.items,
                                hasMore: k.Z.hasMore,
                                cursor: k.Z.cursor,
                                errored: k.Z.errored
                            }
                        })),
                        y = h.initialized,
                        b = h.loading,
                        E = h.items,
                        O = h.hasMore,
                        v = h.cursor,
                        g = h.errored,
                        m = (0, i.cj)([V.Z], (function() {
                            return {
                                everyoneFilter: V.Z.everyoneFilter,
                                roleFilter: V.Z.roleFilter
                            }
                        })),
                        _ = m.roleFilter,
                        S = m.everyoneFilter;
                    o.useEffect((function() {
                        ne(!0);
                        return function() {
                            return ne(!1)
                        }
                    }), []);
                    o.useEffect((function() {
                        y && t && (0, G.FT)(Ne.W.NOTIFICATION_CENTER)
                    }), [t, y]);
                    var I = B();
                    o.useEffect((function() {
                        return function() {
                            r ? !I() && (g || E.length > 100) && re() : n && E.length > 100 && re()
                        }
                    }), [n, E, r, I, g]);
                    o.useEffect((function() {
                        y && !(c && t) || oe({
                            limit: null != l ? l : u ? 8 : 20,
                            with_mentions: u,
                            roles_filter: _,
                            everyone_filter: S
                        })
                    }), [y, c, t, u, _, S, l]);
                    var P, T, N = o.useCallback((T = (P = function(e) {
                        return we(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (s.current || !y || !O || null == v || !e && g) return [3, 2];
                                    s.current = !0;
                                    p(!0);
                                    return [4, oe({
                                        after: v,
                                        with_mentions: u,
                                        roles_filter: _,
                                        everyone_filter: S,
                                        limit: u ? 8 : 20
                                    }, (function() {
                                        s.current = !1
                                    }))];
                                case 1:
                                    t.sent();
                                    p(!1);
                                    t.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var o = P.apply(e, t);

                            function i(e) {
                                Ce(o, n, r, i, a, "next", e)
                            }

                            function a(e) {
                                Ce(o, n, r, i, a, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function(e) {
                        return T.apply(this, arguments)
                    }), [y, O, v, g, u, _, S]);
                    return {
                        initialized: y,
                        loading: b,
                        items: E,
                        hasMore: O,
                        loadMore: N,
                        loadingMore: d,
                        setReadNotifItemToAcked: function(e) {
                            e.acked || (e.acked = !0)
                        },
                        errored: g
                    }
                },
                Me = n(457217),
                Le = n(914964),
                xe = n(479373),
                Ze = n(473708),
                ke = n(59574),
                Fe = n.n(ke),
                Ue = n(502101),
                Ge = n.n(Ue),
                Be = function() {
                    return (0, r.jsxs)("div", {
                        className: Fe().container,
                        children: [(0, r.jsx)("img", {
                            className: Fe().image,
                            alt: "",
                            src: Ge()
                        }), (0, r.jsx)("div", {
                            className: Fe().title,
                            children: Ze.Z.Messages.FOR_YOU_EMPTY_TITLE
                        }), (0, r.jsx)("div", {
                            className: Fe().body,
                            children: Ze.Z.Messages.FOR_YOU_EMPTY_BODY
                        })]
                    })
                },
                Ve = n(385028),
                He = n(426089),
                Ye = n(883064),
                ze = n(924417),
                Qe = n(722406),
                Ke = n(652591),
                We = n(585622),
                qe = n(211482),
                Xe = n(795308),
                Je = n(278435),
                $e = n.n(Je),
                et = n(313106),
                tt = n.n(et),
                nt = n(699426),
                rt = n.n(nt),
                ot = n(403058),
                it = n.n(ot),
                at = n(102552),
                ut = n.n(at),
                lt = n(566240),
                ct = n.n(lt),
                st = n(43009),
                ft = n.n(st),
                dt = n(640846),
                pt = n.n(dt),
                ht = n(613651),
                yt = n.n(ht),
                bt = n(615306),
                Et = n.n(bt),
                Ot = n(479467),
                vt = n.n(Ot),
                gt = n(704923),
                mt = n.n(gt);
            ! function(e) {
                e.CHECKED = "CHECKED";
                e.FRIENDS = "FRIENDS";
                e.SHARE_SCREEN = "SHARE_SCREEN";
                e.NEW_MESSAGE = "NEW_MESSAGE"
            }(je || (je = {}));
            var _t, St = {
                CHECKED: rt(),
                FRIENDS: ut(),
                SHARE_SCREEN: vt(),
                NEW_MESSAGE: yt()
            };
            ! function(e) {
                e.MISSED_MESSAGES = "MISSED_MESSAGES";
                e.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER";
                e.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT";
                e.TOP_MESSAGES = "TOP_MESSAGES";
                e.NOTIFICATION_CENTER = "NOTIFICATION_CENTER";
                e.UPDATE_PROFILE = "UPDATE_PROFILE";
                e.FIND_FRIENDS = "FIND_FRIENDS";
                e.ADD_FRIEND = "ADD_FRIEND";
                e.FIRST_MESSAGE = "FIRST_MESSAGE"
            }(_t || (_t = {}));
            var It = {
                    MISSED_MESSAGES: pt(),
                    FRIEND_REQUEST_REMINDER: ct(),
                    SCHEDULED_GUILD_EVENT: it(),
                    TOP_MESSAGES: ft(),
                    NOTIFICATION_CENTER: tt(),
                    UPDATE_PROFILE: mt(),
                    FIND_FRIENDS: $e(),
                    ADD_FRIEND: $e(),
                    FIRST_MESSAGE: Et()
                },
                Pt = function(e) {
                    switch (e.type) {
                        case "lifecycle_item":
                            return function(e) {
                                switch (e.item_enum) {
                                    case F.AM.ADD_FRIEND:
                                        return _t.ADD_FRIEND;
                                    case F.AM.FIND_FRIENDS:
                                        return _t.FIND_FRIENDS;
                                    case F.AM.FIRST_MESSAGE:
                                        return _t.FIRST_MESSAGE;
                                    case F.AM.UPDATE_PROFILE:
                                        return _t.UPDATE_PROFILE;
                                    default:
                                        return _t.NOTIFICATION_CENTER
                                }
                            }(e);
                        case "missed_messages":
                            return _t.MISSED_MESSAGES;
                        case "friend_request_reminder":
                            return _t.FRIEND_REQUEST_REMINDER;
                        case "scheduled_guild_event_started":
                            return _t.SCHEDULED_GUILD_EVENT;
                        case "top_messages":
                            return _t.TOP_MESSAGES;
                        default:
                            return _t.NOTIFICATION_CENTER
                    }
                },
                Tt = function(e) {
                    switch (e.item_enum) {
                        case F.AM.UPDATE_PROFILE:
                            return "#83DDC5";
                        case F.AM.ADD_FRIEND:
                        case F.AM.FIND_FRIENDS:
                            return "#F47FFF";
                        case F.AM.FIRST_MESSAGE:
                            return "#FFDE4D";
                        default:
                            return Xe.Z.unsafe_rawColors.BRAND_500.css
                    }
                },
                Nt = n(399910),
                At = n.n(Nt),
                Ct = function(e) {
                    var t = e.mask;
                    return null == t ? null : (0, r.jsx)("div", {
                        className: At().maskBackground,
                        style: {
                            backgroundColor: t.color.css
                        },
                        children: (0, r.jsx)("img", {
                            className: At().maskIcon,
                            alt: "",
                            src: t.icon
                        })
                    })
                },
                Rt = o.memo((function(e) {
                    var t, n = e.item,
                        o = null,
                        i = !1;
                    if (null != n.icon_name) o = (0, r.jsx)("img", {
                        alt: "",
                        src: It[(t = n.icon_name, "icHighlight" === t ? _t.TOP_MESSAGES : _t.NOTIFICATION_CENTER)]
                    });
                    else if (null != n.other_user) {
                        var a = n.other_user instanceof Qe.Z ? n.other_user : new Qe.Z(n.other_user);
                        o = (0, r.jsx)("img", {
                            alt: "",
                            className: At().avatar,
                            src: a.getAvatarURL(void 0, 40)
                        });
                        i = !0
                    } else o = null != n.icon_url ? (0, r.jsx)("img", {
                        alt: "",
                        src: n.icon_url
                    }) : (0, r.jsx)("img", {
                        alt: "",
                        src: It[Pt(n)]
                    });
                    var u = function(e) {
                        switch (e) {
                            case F.DY.GO_LIVE_PUSH:
                                return {
                                    icon: St.SHARE_SCREEN, color: Xe.Z.colors.BACKGROUND_ACCENT
                                };
                            case F.DY.FRIEND_REQUEST_ACCEPTED:
                                return {
                                    icon: St.CHECKED, color: Xe.Z.colors.STATUS_POSITIVE_BACKGROUND
                                };
                            case F.DY.FRIEND_REQUEST_PENDING:
                            case F.DY.FRIEND_SUGGESTION_CREATED:
                                return {
                                    icon: St.FRIENDS, color: Xe.Z.colors.BACKGROUND_ACCENT
                                };
                            case F.DY.DM_FRIEND_NUDGE:
                                return {
                                    icon: St.NEW_MESSAGE, color: Xe.Z.colors.BACKGROUND_ACCENT
                                };
                            case F.O7.INCOMING_FRIEND_REQUESTS:
                            case F.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                                return {
                                    icon: St.FRIENDS, color: Xe.Z.colors.BACKGROUND_ACCENT
                                };
                            default:
                                return null
                        }
                    }(n.type);
                    return (0, r.jsxs)(qe.ZP, {
                        mask: null == u ? qe.QS.AVATAR_DEFAULT : qe.QS.AVATAR_STATUS_ROUND_16,
                        width: 40,
                        height: 40,
                        rightOverhang: 3,
                        bottomOverhang: 3,
                        className: At().mask,
                        children: [(0, r.jsx)("div", {
                            className: At().container,
                            style: i ? void 0 : {
                                backgroundColor: Tt(n)
                            },
                            children: o
                        }), (0, r.jsx)(Ct, {
                            mask: u
                        })]
                    })
                })),
                jt = n(560923),
                wt = n(252132),
                Dt = n.n(wt);

            function Mt(e) {
                var t = e.userId,
                    n = o.useCallback((function(e) {
                        e.stopPropagation();
                        jt.Z.cancelFriendRequest(t)
                    }), [t]),
                    i = o.useCallback((function(e) {
                        e.stopPropagation();
                        jt.Z.addRelationship({
                            userId: t
                        })
                    }), [t]);
                return (0, r.jsxs)("div", {
                    className: Dt().friendRequestContainer,
                    children: [(0, r.jsx)(D.Button, {
                        className: Dt().acceptButton,
                        look: D.Button.Looks.FILLED,
                        color: D.Button.Colors.GREEN,
                        size: D.Button.Sizes.NONE,
                        onClick: i,
                        children: (0, r.jsx)(D.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: Ze.Z.Messages.FRIEND_REQUEST_ACCEPT
                        })
                    }), (0, r.jsx)(D.Button, {
                        className: Dt().ignoreButton,
                        look: D.Button.Looks.FILLED,
                        color: D.Button.Colors.PRIMARY,
                        size: D.Button.Sizes.NONE,
                        onClick: n,
                        children: (0, r.jsx)(D.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: Ze.Z.Messages.FRIEND_REQUEST_IGNORE
                        })
                    })]
                })
            }
            var Lt = n(839184),
                xt = n(186440),
                Zt = n(813749);

            function kt(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Ft(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            kt(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            kt(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Ut(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Gt(e, t) {
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
            var Bt = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
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
                                                value: i[1],
                                                    done: !1
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
                            }([i, u])
                        }
                    }
                },
                Vt = function(e) {
                    var t = e.item,
                        n = e.closePopout;
                    return (0, r.jsx)(D.Menu, {
                        navId: "notification-actions",
                        onClose: n,
                        onSelect: n,
                        "aria-label": Ze.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                        children: (0, r.jsx)(D.MenuItem, {
                            id: "delete",
                            label: Ze.Z.Messages.DELETE,
                            icon: Zt.Z,
                            action: Ft((function() {
                                return Bt(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, le(t)];
                                        case 1:
                                            e.sent();
                                            return [2]
                                    }
                                }))
                            }))
                        })
                    })
                },
                Ht = o.memo((function(e) {
                    var t = e.item;
                    return (0, r.jsx)(D.Popout, {
                        renderPopout: function(e) {
                            return (0,
                                r.jsx)(Vt, Gt(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        Ut(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                item: t
                            }))
                        },
                        position: "bottom",
                        align: "right",
                        animation: D.Popout.Animation.NONE,
                        children: function(e) {
                            var t = e.onClick;
                            return (0, r.jsx)(Lt.ZP, {
                                tooltip: Ze.Z.Messages.MORE,
                                color: Lt.YX.TERTIARY,
                                icon: (0, r.jsx)(xt.Z, {
                                    height: 16,
                                    width: 16
                                }),
                                onClick: function(e) {
                                    e.stopPropagation();
                                    t(e)
                                },
                                "aria-haspopup": "menu"
                            })
                        }
                    })
                })),
                Yt = n(25300),
                zt = n.n(Yt),
                Qt = n(572149),
                Kt = n.n(Qt);

            function Wt(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function qt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Wt(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            Wt(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Xt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var Jt = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function $t(e) {
                var t, n, o, i = e.item,
                    a = null === (t = i.message) || void 0 === t ? void 0 : t.content;
                if (null == a) return (0, r.jsx)("div", {
                    children: " "
                });
                var u = null !== (o = l.default.getUser(null === (n = i.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== o ? o : new Qe.Z(i.other_user),
                    c = Ye.Z.parse(a);
                return (0, r.jsxs)("div", {
                    className: Dt().messagePreviewContainer,
                    children: [(0, r.jsx)(Ve.Z, {
                        user: u,
                        size: D.AvatarSizes.SIZE_24
                    }), (0, r.jsx)(D.Text, {
                        className: Dt().messagePreviewText,
                        variant: "text-sm/normal",
                        lineClamp: 2,
                        children: c
                    })]
                })
            }

            function en(e) {
                var t = e.item,
                    n = Kt(),
                    o = Ze.Z.Messages.NOTIFICATION_CENTER_TODO;
                if (t.completed) {
                    n = zt();
                    o = Ze.Z.Messages.NOTIFICATION_CENTER_DONE
                }
                return (0, r.jsxs)("div", {
                    className: Dt().lifecycleContainer,
                    children: [(0, r.jsx)("img", {
                        className: Dt().checkbox,
                        alt: "",
                        src: n
                    }), (0, r.jsx)(D.Text, {
                        className: Dt().lifecycleText,
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        children: o
                    })]
                })
            }
            var tn = o.memo((function(e) {
                    var t, a = e.item,
                        u = e.ackedBeforeId,
                        l = function(e, t) {
                            var n = (0, i.e7)([Te], (function() {
                                return null != e.local_id && Te.isLocalItemAcked(e.local_id)
                            }));
                            return !e.forceUnacked && (n || (0, U.r)(e, t))
                        }(a, u),
                        c = o.useCallback(qt((function() {
                            var e, t, o, i;
                            return Jt(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        l || ae(a);
                                        if (null != a.item_enum && a.item_enum === F.AM.FIND_FRIENDS) {
                                            (0, D.openModalLazy)(qt((function() {
                                                var e, t;
                                                return Jt(this, (function(o) {
                                                    switch (o.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(41666)]).then(n.bind(n, 241666))];
                                                        case 1:
                                                            e = o.sent(), t = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(t, function(e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                                            r = Object.keys(n);
                                                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                        }))));
                                                                        r.forEach((function(t) {
                                                                            Xt(e, t, n[t])
                                                                        }))
                                                                    }
                                                                    return e
                                                                }({
                                                                    source: "Notification Center"
                                                                }, e))
                                                            }]
                                                    }
                                                }))
                                            })));
                                            return [2]
                                        }
                                        if (null == a.deeplink) return [3, 4];
                                        if (null == (e = We.Z.safeParseWithQuery(a.deeplink))) return [2];
                                        t = e.hostname;
                                        o = e.path;
                                        if (null == t || null == o) return [2];
                                        if (!We.Z.isDiscordHostname(t)) return [3, 3];
                                        if (null == (i = o.match("^/users/(\\d+)")) || 2 !== i.length) return [3, 1];
                                        (0, ze.m)({
                                            userId: i[1],
                                            analyticsLocation: {
                                                section: q.jXE.NOTIFICATION_CENTER
                                            }
                                        });
                                        return [3, 3];
                                    case 1:
                                        return [4, (0, He.Z)(o)];
                                    case 2:
                                        u.sent();
                                        u.label = 3;
                                    case 3:
                                        Ke.default.track(q.rMx.NOTIFICATION_CENTER_ACTION, {
                                            action_type: F.ud.CLICKED,
                                            notification_center_id: a.id,
                                            item_type: a.type,
                                            acked: l
                                        });
                                        u.label = 4;
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), [a, l]),
                        s = null;
                    a.type === F.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user && (s = (0, r.jsx)(Mt, {
                        userId: a.other_user.id
                    }));
                    var f = null != a.local_id;
                    return (0, r.jsxs)("div", {
                        className: Dt().row,
                        children: [(0, r.jsxs)(D.ClickableContainer, {
                            className: Dt().rowContent,
                            focusProps: {
                                offset: 4
                            },
                            "aria-label": a.body,
                            onClick: c,
                            children: [l ? null : (0,
                                r.jsx)("div", {
                                className: Dt().unread
                            }), (0, r.jsx)(Rt, {
                                item: a
                            }), (0, r.jsxs)("div", {
                                className: Dt().body,
                                children: ["lifecycle_item" === a.type && null != a.item_enum && (0, r.jsx)(en, {
                                    item: a
                                }), (0, r.jsx)(D.Text, {
                                    variant: "text-md/normal",
                                    color: l ? "text-muted" : "text-normal",
                                    children: Ye.Z.parse(a.body)
                                }), null != (null === (t = a.message) || void 0 === t ? void 0 : t.content) ? (0, r.jsx)($t, {
                                    item: a
                                }) : null, (0, r.jsx)(D.Text, {
                                    variant: "text-xs/medium",
                                    color: l ? "text-muted" : "header-secondary",
                                    children: (0, U.a3)(Z.default.extractTimestamp(a.id))
                                }), s]
                            })]
                        }), f ? null : (0, r.jsx)(Ht, {
                            item: a
                        })]
                    })
                })),
                nn = o.memo((function(e) {
                    var t = e.items,
                        n = K.d$.useSetting();
                    return (0, r.jsx)(r.Fragment, {
                        children: t.map((function(e) {
                            return (0, r.jsx)(tn, {
                                item: e,
                                ackedBeforeId: n
                            }, e.id)
                        }))
                    })
                })),
                rn = n(427440),
                on = n.n(rn);

            function an(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function un(e, t) {
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

            function ln(e, t) {
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

            function cn(e) {
                var t = e.initialized,
                    n = e.items,
                    i = e.loading,
                    a = e.loadMore,
                    u = o.useRef(null),
                    l = (0, Le.Z)("for-you", u);
                (0, xe.Z)({
                    type: H.nv.VIEW,
                    name: H.zs.NOTIFICATION_CENTER_LANDING,
                    properties: {
                        empty: 0 === n.length
                    }
                }, {
                    disableTrack: !t
                }, [t]);
                var c = function() {
                    var e, t = null === (e = u.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null != t) {
                        t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && a()
                    }
                };
                return t ? 0 === n.length ? (0, r.jsx)(Be, {}) : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(Me.bG, {
                        navigator: l,
                        children: (0, r.jsx)(Me.SJ, {
                            children: function(e) {
                                var t = e.ref,
                                    o = ln(e, ["ref"]);
                                return (0, r.jsxs)(D.AdvancedScroller, un(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            an(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({
                                    className: on().container,
                                    ref: function(e) {
                                        u.current = e;
                                        var n;
                                        t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    }
                                }, o), {
                                    onScroll: c,
                                    children: [(0, r.jsx)(nn, {
                                        items: n
                                    }), i ? (0, r.jsx)(D.Spinner, {
                                        className: on().spinner
                                    }) : null]
                                }))
                            }
                        })
                    })
                }) : (0,
                    r.jsx)(D.Spinner, {
                    className: on().loadingPlaceholder
                })
            }

            function sn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function fn(e, t) {
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

            function dn(e, t) {
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

            function pn(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    s = dn(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", fn(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            sn(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M12 4.66668L11.06 3.72668L6.83332 7.95335L7.77332 8.89335L12 4.66668ZM14.8266 3.72668L7.77332 10.78L4.98665 8.00002L4.04665 8.94002L7.77332 12.6667L15.7733 4.66668L14.8266 3.72668ZM0.273315 8.94002L3.99998 12.6667L4.93998 11.7267L1.21998 8.00002L0.273315 8.94002Z",
                        fill: u,
                        className: l
                    })
                }))
            }
            var hn = n(813357),
                yn = n(87931),
                bn = n(531441),
                En = n(299192),
                On = n(784426),
                vn = n(840922),
                gn = n(491275),
                mn = n(551890),
                _n = n.n(mn);

            function Sn(e) {
                var t = e.closePopout,
                    n = (0, i.e7)([vn.Z], (function() {
                        return vn.Z.getPendingCount()
                    }));
                return (0, r.jsx)(D.TooltipContainer, {
                    text: Ze.Z.Messages.VIEW_FRIEND_REQUESTS,
                    children: (0, r.jsxs)(D.Clickable, {
                        className: _n().friendRequestsButton,
                        onClick: function() {
                            Ke.default.track(q.rMx.NOTIFICATION_CENTER_ACTION, {
                                action_type: F.ud.FRIEND_REQUESTS_BUTTON_CLICK
                            });
                            (0, On.uL)(q.Z5c.FRIENDS);
                            En.Z.setSection(q.pJs.PENDING);
                            t()
                        },
                        children: [(0, r.jsx)(gn.Z, {}), (0, r.jsx)(bn.mA, {
                            count: n,
                            color: yn.Z.BACKGROUND_ACCENT
                        })]
                    })
                })
            }
            var In = n(286385),
                Pn = n.n(In);

            function Tn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Tn(e, t, n[t])
                    }))
                }
                return e
            }

            function An(e) {
                return (0, a.sv)() ? (0, r.jsx)(Cn, Nn({}, e)) : (0, r.jsx)(Rn, Nn({}, e))
            }

            function Cn(e) {
                var t = e.tab,
                    n = e.setTab,
                    o = e.children,
                    i = e.badgeState,
                    a = e.closePopout,
                    u = g.Z.useExperiment({
                        location: "489e3f_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    l = (0, O.ZP)([m.Z], (function() {
                        return m.Z.getMessageReminders()
                    })).length;
                return (0, r.jsxs)(hn.h4, {
                    className: b()(Pn().header, Pn().expanded),
                    children: [(0, r.jsxs)("div", {
                        className: b()(Pn().expandedInboxHeader),
                        children: [(0, r.jsx)(p, {
                            className: Pn().inboxIcon
                        }), (0, r.jsx)(D.Text, {
                            className: Pn().inboxTitle,
                            variant: "text-lg/semibold",
                            children: Ze.Z.Messages.INBOX
                        }), (0, r.jsx)(Sn, {
                            closePopout: a
                        })]
                    }), (0, r.jsxs)("div", {
                        className: b()(Pn().expandedTabSection),
                        children: [(0, r.jsxs)(D.TabBar, {
                            selectedItem: t,
                            type: "top-pill",
                            onItemSelect: n,
                            children: [(0,
                                r.jsxs)(D.TabBar.Item, {
                                id: w.X.FOR_YOU,
                                "aria-label": Ze.Z.Messages.FOR_YOU,
                                className: b()(Pn().tab, Pn().expanded, Tn({}, Pn().active, t === w.X.FOR_YOU)),
                                children: [Ze.Z.Messages.FOR_YOU, (null == i ? void 0 : i.badgeForYou) ? (0, r.jsx)(bn.fW, {
                                    color: yn.Z.STATUS_DANGER,
                                    className: b()(Pn().iconBadge)
                                }) : null]
                            }), (0, r.jsx)(D.TabBar.Item, {
                                id: w.X.UNREADS,
                                className: b()(Pn().tab, Pn().expanded, Tn({}, Pn().active, t === w.X.UNREADS)),
                                children: Ze.Z.Messages.UNREADS_TAB_LABEL
                            }), (0, r.jsx)(D.TabBar.Item, {
                                "aria-label": Ze.Z.Messages.MENTIONS,
                                id: w.X.MENTIONS,
                                className: b()(Pn().tab, Pn().expanded, Tn({}, Pn().active, t === w.X.MENTIONS)),
                                children: Ze.Z.Messages.MENTIONS
                            }), u ? (0, r.jsxs)(D.TabBar.Item, {
                                "aria-label": "todos",
                                id: w.X.TODOS,
                                className: b()(Pn().tab, Pn().expanded, Tn({}, Pn().active, t === w.X.TODOS)),
                                children: [Ze.Z.Messages.MESSAGE_REMINDERS_HEADER, l > 0 ? (0, r.jsx)(bn.fW, {
                                    color: yn.Z.STATUS_DANGER,
                                    className: b()(Pn().iconBadge)
                                }) : null]
                            }) : null]
                        }), (0, r.jsx)("div", {
                            className: Pn().controls,
                            children: o
                        })]
                    })]
                })
            }

            function Rn(e) {
                var t = e.tab,
                    n = e.setTab,
                    o = e.children,
                    i = g.Z.useExperiment({
                        location: "489e3f_2"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    u = (0, a.sv)();
                return (0, r.jsxs)(hn.h4, {
                    className: Pn().header,
                    children: [(0, r.jsxs)(D.TabBar, {
                        selectedItem: t,
                        type: "top-pill",
                        onItemSelect: n,
                        className: Pn().tabBar,
                        children: [u ? (0, r.jsx)(D.TabBar.Item, {
                            id: w.X.FOR_YOU,
                            className: b()(Pn().tab, Tn({}, Pn().active, t === w.X.FOR_YOU)),
                            children: Ze.Z.Messages.FOR_YOU
                        }) : null, (0, r.jsx)(D.TabBar.Item, {
                            id: w.X.MENTIONS,
                            className: b()(Pn().tab, Tn({}, Pn().active, t === w.X.MENTIONS)),
                            children: Ze.Z.Messages.MENTIONS
                        }), (0, r.jsx)(D.TabBar.Item, {
                            id: w.X.UNREADS,
                            className: b()(Pn().tab, Tn({}, Pn().active, t === w.X.UNREADS)),
                            children: Ze.Z.Messages.UNREADS_TAB_LABEL
                        }), i ? (0, r.jsx)(D.TabBar.Item, {
                            id: w.X.TODOS,
                            className: b()(Pn().tab, Tn({}, Pn().active, t === w.X.TODOS)),
                            children: Ze.Z.Messages.MESSAGE_REMINDERS_HEADER
                        }) : null]
                    }), (0, r.jsx)("div", {
                        className: Pn().controls,
                        children: o
                    })]
                })
            }
            var jn = n(31129),
                wn = n.n(jn);

            function Dn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Mn(e) {
                return function(e) {
                    if (Array.isArray(e)) return Dn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Dn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dn(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ln(e) {
                var t = e.onClick;
                return (0, r.jsx)(Lt.ZP, {
                    tooltip: Ze.Z.Messages.MARK_ALL_AS_READ,
                    color: Lt.YX.SECONDARY,
                    icon: (0, r.jsx)(pn, {}),
                    onClick: t
                })
            }

            function xn(e) {
                var t = e.setTab,
                    n = e.badgeState,
                    a = e.closePopout,
                    u = function() {
                        var e = De({
                                isFocused: !0,
                                isDesktop: !0
                            }),
                            t = e.initialized,
                            n = e.loading,
                            r = e.items,
                            o = e.hasMore,
                            i = e.loadMore;
                        return {
                            initialized: t,
                            loading: n,
                            items: r.filter((function(e) {
                                return "notification-center-item" === e.kind
                            })),
                            hasMore: o,
                            loadMore: i
                        }
                    }(),
                    l = u.initialized,
                    c = u.items,
                    s = u.loading,
                    f = u.loadMore,
                    d = (0, i.e7)([k.Z], (function() {
                        return k.Z.localItems
                    })),
                    p = o.useMemo((function() {
                        return Mn(Mn(c).concat(Mn(d)).sort((function(e, t) {
                            return -1 * Z.default.compare(e.id, t.id)
                        })))
                    }), [c, d]),
                    h = c.length > 0 ? c[0] : null,
                    y = K.d$.useSetting(),
                    b = o.useMemo((function() {
                        if (null != h && Z.default.compare(h.id, y) <= 0) return !1;
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, o = p[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var i = r.value;
                                if (Z.default.compare(i.id, y) <= 0) break;
                                if (!(0, U.r)(i, y)) return !0
                            }
                        } catch (e) {
                            t = !0;
                            n = e
                        } finally {
                            try {
                                e || null == o.return || o.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                        return !1
                    }), [h, y, p]);
                return (0, r.jsxs)("div", {
                    className: wn().container,
                    children: [(0, r.jsx)(An, {
                        tab: w.X.FOR_YOU,
                        setTab: t,
                        badgeState: n,
                        closePopout: a,
                        children: b ? (0, r.jsx)(Ln, {
                            onClick: function() {
                                if (null != h) {
                                    K.d$.updateSetting(h.id);
                                    Ke.default.track(q.rMx.NOTIFICATION_CENTER_ACTION, {
                                        action_type: F.ud.MARK_ALL_READ
                                    })
                                }
                            }
                        }) : null
                    }), (0, r.jsx)(cn, {
                        initialized: l,
                        items: p,
                        loading: s,
                        loadMore: f
                    })]
                })
            }
            var Zn = n(441143),
                kn = n.n(Zn),
                Fn = n(730381),
                Un = n.n(Fn),
                Gn = n(971402),
                Bn = n(720419),
                Vn = n(621647),
                Hn = n(773011),
                Yn = n(931893),
                zn = n(343318),
                Qn = n(61209),
                Kn = n(352980);

            function Wn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function qn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Wn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Xn = n(210595),
                Jn = n(382060),
                $n = n(4798);
            var er = n(487868),
                tr = n(567403),
                nr = n(124251),
                rr = n(457997);

            function or(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ir(e, t) {
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

            function ar(e, t) {
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

            function ur(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    s = ar(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", ir(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            or(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: u,
                        d: "M6.11111111,3.88888889 L6.11111111,0.833333333 L9.16666667,3.88888889 L6.11111111,3.88888889 Z M1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,3.33333333 L6.66666667,0 L1.11111111,0 Z",
                        transform: "translate(3 3)"
                    })
                }))
            }
            var lr = n(465637),
                cr = n(277380),
                sr = n.n(cr);

            function fr(e) {
                var t = e.Icon,
                    n = e.header,
                    o = e.tip;
                return (0, r.jsxs)("div", {
                    className: sr().container,
                    children: [(0, r.jsxs)("div", {
                        className: sr().iconContainer,
                        children: [(0, r.jsx)(t, {
                            className: sr().icon,
                            width: 36,
                            height: 36
                        }), (0, r.jsx)(lr.Z, {
                            className: sr().stars
                        })]
                    }), (0, r.jsx)(D.Heading, {
                        className: sr().header,
                        variant: "heading-xl/semibold",
                        children: n
                    }), (0, r.jsxs)(D.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: [(0, r.jsxs)(D.Text, {
                            tag: "span",
                            className: sr().protip,
                            variant: "text-xs/bold",
                            color: "text-positive",
                            children: [Ze.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":", " "]
                        }), o]
                    })]
                })
            }
            var dr = n(695972),
                pr = n.n(dr),
                hr = n(161101),
                yr = n.n(hr);

            function br(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Er(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Or(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Er(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            Er(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function vr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function gr(e, t) {
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

            function mr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return br(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return br(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _r = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
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
                            }([i, u])
                        }
                    }
                },
                Sr = {
                    offset: {
                        left: 4,
                        right: -12
                    }
                };

            function Ir(e) {
                var t = e.setTab,
                    n = e.closePopout,
                    a = (0, i.e7)([m.Z], (function() {
                        return m.Z.getMessageReminders()
                    }));
                o.useEffect((function() {
                    return function() {
                        (0, Yn.Mf)()
                    }
                }), []);
                var u = mr(o.useState(!1), 2),
                    l = u[0],
                    c = u[1],
                    s = o.useMemo((function() {
                        return a.filter((function(e) {
                            return null == e.dueAt || e.dueAt < new Date
                        }))
                    }), [a]),
                    f = l ? a : s;
                ! function(e) {
                    var t = (0, i.Wu)([Qn.Z, Kn.Z], (function() {
                            return e.filter((function(e) {
                                return null != Qn.Z.getChannel(e.channelId)
                            })).map((function(e) {
                                return Kn.Z.getMessage(e.channelId, e.messageId)
                            })).filter((function(e) {
                                return null != e
                            }))
                        })),
                        n = e.filter((function(e) {
                            return null == Kn.Z.getMessage(e.channelId, e.messageId)
                        })),
                        r = qn(o.useState(0 === n.length), 2),
                        a = r[0],
                        u = r[1];
                    o.useEffect((function() {
                        (0, Yn.sE)()
                    }), []);
                    o.useEffect((function() {
                        if (!a) {
                            n.forEach((function(e) {
                                try {
                                    Bn.Z.fetchMessages({
                                        channelId: e.channelId,
                                        limit: 1,
                                        jump: {
                                            messageId: e.messageId,
                                            flash: !1,
                                            offset: 1
                                        }
                                    })
                                } catch (e) {}
                            }));
                            u(!0)
                        }
                    }), [n, a])
                }(f.filter((function(e) {
                    return !(0, zn.uX)(e)
                })));
                return (0, r.jsxs)("div", {
                    className: pr().container,
                    children: [(0, r.jsx)(An, {
                        tab: w.X.TODOS,
                        setTab: t,
                        closePopout: n
                    }), (0, r.jsxs)("div", {
                        className: pr().headerText,
                        children: [(0, r.jsx)(D.Heading, {
                            variant: "heading-lg/bold",
                            children: l ? Ze.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : Ze.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                        }), (0, r.jsx)(D.Anchor, {
                            onClick: function() {
                                return c(!l)
                            },
                            children: (0, r.jsx)(D.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: l ? Ze.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
                                    count: s.length
                                }) : Ze.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
                                    count: a.length
                                })
                            })
                        })]
                    }), 0 === f.length ? (0, r.jsx)(Tr, {}) : null, (0, r.jsx)(D.AdvancedScrollerThin, {
                        children: f.map((function(e) {
                            return t = e, [(0, r.jsx)(Pr, {
                                messageId: t.messageId
                            }, t.messageId)];
                            var t
                        }))
                    })]
                })
            }

            function Pr(e) {
                var t = e.messageId,
                    o = (0, i.e7)([m.Z], (function() {
                        return m.Z.getMessageReminders().find((function(e) {
                            return e.messageId === t
                        }))
                    }));
                kn()(null != o, "should not be rendering a to-do message without a to-do message");
                var a = o.complete,
                    u = (0, i.e7)([Kn.Z], (function() {
                        return Kn.Z.getMessage(o.channelId, o.messageId)
                    })),
                    c = function(e) {
                        var t, n, r, o = Kn.Z.getMessage(e.channelId, e.messageId),
                            i = l.default.getUser(e.authorId),
                            a = Qn.Z.getChannel(e.channelId),
                            u = null != i ? i : new Qe.Z({
                                id: e.authorId,
                                username: e.authorSummary
                            }),
                            c = new $n.Z({
                                id: e.messageId,
                                channel_id: e.channelId,
                                author: u,
                                content: e.messageSummary
                            }),
                            s = null == e.guildId ? new Jn.cE({
                                id: e.channelId,
                                type: Xn.d.DM,
                                name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
                                guild_id: "",
                                recipients: [null !== (n = e.authorId) && void 0 !== n ? n : ""]
                            }) : new Jn.DA({
                                id: e.channelId,
                                type: null == e.guildId ? Xn.d.DM : Xn.d.GUILD_TEXT,
                                name: null !== (r = e.channelSummary) && void 0 !== r ? r : "",
                                guild_id: e.guildId
                            });
                        return {
                            channel: null != a ? a : s,
                            message: null != o ? o : c
                        }
                    }(o),
                    s = c.message,
                    f = c.channel,
                    d = Qn.Z.getChannel(f.id),
                    p = (0, Hn.ZP)(d, !0),
                    h = null != p ? p : f.name,
                    y = (0, i.e7)([tr.Z], (function() {
                        return tr.Z.getGuild(null == f ? void 0 : f.guild_id)
                    })),
                    E = null != f ? (0, Vn.x)(f) : null,
                    O = null,
                    v = void 0;
                if (null != o.dueAt)
                    if (o.dueAt > new Date) {
                        v = "text-muted";
                        O = Ze.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                            duration: Un().duration(o.dueAt.getTime() - Date.now(), "millisecond").humanize()
                        })
                    } else {
                        v = "text-danger";
                        O = Ze.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                            duration: Un().duration(Date.now() - o.dueAt.getTime(), "millisecond").humanize()
                        })
                    } return (0, r.jsxs)("div", {
                    className: yr().container,
                    children: [(0, r.jsxs)("div", {
                        className: pr().messageHeader,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: pr().messageInfo,
                                children: [null != y ? (0, r.jsx)(nr.Z, {
                                    className: pr().guildIcon,
                                    guild: y,
                                    size: nr.Z.Sizes.SMALL,
                                    active: !0
                                }) : (0, r.jsx)(D.Avatar, {
                                    "aria-hidden": !0,
                                    src: null != E ? E : n(823653),
                                    size: D.AvatarSizes.SIZE_32
                                }), (0, r.jsx)(D.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    selectable: !0,
                                    children: h
                                })]
                            }), null != o.notes && o.notes.length > 0 ? (0, r.jsxs)(D.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: pr().notes,
                                selectable: !0,
                                children: [(0, r.jsx)(ur, {
                                    width: 12,
                                    height: 12
                                }), o.notes]
                            }) : null, null != O ? (0, r.jsx)(D.Text, {
                                variant: "text-sm/medium",
                                color: v,
                                style: {
                                    marginTop: 4
                                },
                                children: O
                            }) : null]
                        }), (0, r.jsxs)("div", {
                            className: pr().reminderActions,
                            children: [(0, r.jsx)(D.TooltipContainer, {
                                text: Ze.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
                                children: (0, r.jsx)(D.Clickable, {
                                    onClick: function(e) {
                                        return (0, Gn.jW)(e, Or((function() {
                                            var e, t;
                                            return _r(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, n.e(20089).then(n.bind(n, 903404))];
                                                    case 1:
                                                        e = o.sent(), t = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(t, gr(function(e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        r = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                    }))));
                                                                    r.forEach((function(t) {
                                                                        vr(e, t, n[t])
                                                                    }))
                                                                }
                                                                return e
                                                            }({}, e), {
                                                                message: s
                                                            }))
                                                        }]
                                                }
                                            }))
                                        })))
                                    },
                                    className: pr().clock,
                                    children: (0, r.jsx)(rr.Z, {})
                                })
                            }), (0, r.jsx)(D.Checkbox, {
                                type: D.Checkbox.Types.INVERTED,
                                value: a,
                                onChange: function(e, t) {
                                    (0, Yn.Y_)(o.messageId, t)
                                }
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: b()(yr().messageContainer, pr().unloadedMessage, vr({}, pr().disabledMessage, a)),
                        children: [(0, r.jsx)(er.Z, {
                            message: s,
                            channel: f,
                            className: yr().message,
                            compact: K.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: Sr,
                            trackAnnouncementViews: !0
                        }, s.id), (0, r.jsxs)("div", {
                            className: pr().actions,
                            children: [null == u ? (0, r.jsx)(D.Button, {
                                onClick: function() {
                                    Bn.Z.fetchMessages({
                                        channelId: o.channelId,
                                        limit: 1,
                                        jump: {
                                            messageId: o.messageId,
                                            flash: !1,
                                            offset: 1
                                        }
                                    })
                                },
                                size: D.Button.Sizes.MIN,
                                color: D.Button.Colors.TRANSPARENT,
                                className: pr().loadButton,
                                children: (0, r.jsx)(D.Text, {
                                    variant: "text-xs/normal",
                                    children: "Load"
                                })
                            }) : null, (0, r.jsx)(D.Button, {
                                onClick: function() {
                                    (0, On.uL)(q.Z5c.CHANNEL(null == f ? void 0 : f.getGuildId(), o.channelId, o.messageId))
                                },
                                size: D.Button.Sizes.MIN,
                                color: D.Button.Colors.TRANSPARENT,
                                className: pr().loadButton,
                                children: (0, r.jsx)(D.Text, {
                                    variant: "text-xs/normal",
                                    children: Ze.Z.Messages.JUMP
                                })
                            })]
                        })]
                    })]
                })
            }

            function Tr() {
                return (0, i.e7)([m.Z], (function() {
                    return m.Z.getMessageReminders().length > 0
                })) ? null : (0, r.jsx)(fr, {
                    Icon: pn,
                    header: Ze.Z.Messages.MESSAGE_REMINDERS_EMPTY,
                    tip: Ze.Z.Messages.MESSAGE_REMINDERS_EMPTY_TIP
                })
            }
            const Nr = function(e) {
                    var t = e.guildFilter,
                        n = e.roleFilter,
                        r = e.everyoneFilter;
                    Q.Z.dispatch({
                        type: "SET_RECENT_MENTIONS_FILTER",
                        guildFilter: t,
                        roleFilter: n,
                        everyoneFilter: r
                    })
                },
                Ar = function(e) {
                    Q.Z.dispatch({
                        type: "TRUNCATE_MENTIONS",
                        size: e
                    })
                },
                Cr = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q.DJj,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    Q.Z.dispatch({
                        type: "LOAD_RECENT_MENTIONS",
                        guildId: n
                    });
                    Y.ZP.get({
                        url: q.ANM.MENTIONS,
                        query: {
                            before: e,
                            limit: t,
                            guild_id: n,
                            roles: r,
                            everyone: o
                        },
                        retries: 2,
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        Q.Z.dispatch({
                            type: "LOAD_RECENT_MENTIONS_SUCCESS",
                            messages: n,
                            isAfter: null != e,
                            hasMoreAfter: n.length >= q.DJj
                        })
                    }), (function() {
                        Q.Z.dispatch({
                            type: "LOAD_RECENT_MENTIONS_FAILURE"
                        })
                    }))
                },
                Rr = function(e) {
                    Y.ZP.delete({
                        url: q.ANM.MENTIONS_MESSAGE_ID(e),
                        retries: 2,
                        oldFormErrors: !0
                    });
                    Q.Z.dispatch({
                        type: "RECENT_MENTION_DELETE",
                        id: e
                    })
                };
            var jr = n(634698),
                wr = n(715107),
                Dr = n(749131),
                Mr = n(189865),
                Lr = n(399185),
                xr = n.n(Lr);

            function Zr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function kr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Zr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Fr(e) {
                var t = e.className,
                    n = e.onJump,
                    i = kr(o.useState(!1), 2),
                    a = i[0],
                    u = i[1];
                return (0, r.jsx)(D.Clickable, {
                    className: b()(xr().jumpButton, t),
                    onClick: function(e) {
                        u(!0);
                        n(e)
                    },
                    children: a ? (0, r.jsx)(D.Spinner, {
                        type: D.Spinner.Type.PULSING_ELLIPSIS
                    }) : (0, r.jsx)(D.Text, {
                        variant: "text-xs/normal",
                        className: xr().text,
                        children: Ze.Z.Messages.JUMP
                    })
                })
            }
            var Ur = n(879999),
                Gr = n(358125),
                Br = n.n(Gr),
                Vr = function(e) {
                    var t = e.text,
                        n = e.icon,
                        o = e.onClick,
                        i = n;
                    return (0, r.jsxs)(D.Button, {
                        className: Br().button,
                        innerClassName: Br().buttonInner,
                        onClick: o,
                        children: [(0, r.jsx)(i, {}), (0, r.jsx)(D.Text, {
                            variant: "text-md/semibold",
                            color: "none",
                            children: t
                        })]
                    })
                };

            function Hr(e) {
                var t = e.closePopout,
                    n = e.onSelect,
                    o = (0, i.e7)([Qn.Z, wr.Z], (function() {
                        return Qn.Z.getChannel(wr.Z.getChannelId())
                    })),
                    a = (0, i.cj)([V.Z], (function() {
                        return {
                            everyoneFilter: V.Z.everyoneFilter,
                            roleFilter: V.Z.roleFilter,
                            guildFilter: V.Z.guildFilter
                        }
                    })),
                    u = a.everyoneFilter,
                    l = a.roleFilter,
                    c = a.guildFilter;
                return (0, r.jsxs)(D.Menu, {
                    navId: "mentions-filter",
                    "aria-label": Ze.Z.Messages.FILTER,
                    onClose: t,
                    onSelect: n,
                    children: [(0, r.jsx)(D.MenuCheckboxItem, {
                        id: "Everyone",
                        label: Ze.Z.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
                        action: function() {
                            Nr({
                                everyoneFilter: !u
                            })
                        },
                        checked: u
                    }), (0, r.jsx)(D.MenuCheckboxItem, {
                        id: "Roles",
                        label: Ze.Z.Messages.RECENT_MENTIONS_FILTER_ROLES,
                        action: function() {
                            Nr({
                                roleFilter: !l
                            })
                        },
                        checked: l
                    }), null == o || o.isPrivate() ? null : (0, r.jsx)(D.MenuCheckboxItem, {
                        id: "All Servers",
                        label: Ze.Z.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                        action: function() {
                            Nr({
                                guildFilter: c === q.NgX.THIS_SERVER ? q.NgX.ALL_SERVERS : q.NgX.THIS_SERVER
                            })
                        },
                        checked: c === q.NgX.ALL_SERVERS
                    })]
                })
            }

            function Yr() {
                return (0, r.jsx)(D.Popout, {
                    align: "right",
                    animation: D.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: function(e) {
                        var t = e.closePopout;
                        return (0, r.jsx)(Hr, {
                            closePopout: t
                        })
                    },
                    children: function(e) {
                        var t = e.onClick;
                        return (0, r.jsx)(Lt.ZP, {
                            tooltip: Ze.Z.Messages.FILTER,
                            color: Lt.YX.SECONDARY,
                            icon: (0, r.jsx)(Ur.Z, {}),
                            onClick: t
                        })
                    }
                })
            }
            var zr = n(106555),
                Qr = n(239813),
                Kr = n(177570),
                Wr = n(491260),
                qr = n(901165),
                Xr = n(443812),
                Jr = n(164973),
                $r = n.n(Jr);

            function eo(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function to(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        eo(e, t, n[t])
                    }))
                }
                return e
            }

            function no(e, t) {
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
            var ro = {
                top: 8,
                bottom: 8,
                left: -4,
                right: -4
            };

            function oo(e) {
                var t = e.channel,
                    n = e.children,
                    o = e.gotoChannel,
                    i = e.mentionCount,
                    a = e.channelState,
                    u = e.toggleCollapsed,
                    l = (0, Me.JA)("recents-header-".concat(t.id, "-").concat((0, Xr.Dt)()));
                return (0, r.jsx)(D.FocusRing, {
                    offset: ro,
                    children: (0, r.jsxs)("div", no(to({
                        className: $r().channelHeader
                    }, l), {
                        tabIndex: 0,
                        "data-recents-channel": t.id,
                        onKeyDown: function(e) {
                            null != u && null != a && ("ArrowRight" === e.key && a.collapsed || "ArrowLeft" === e.key && !a.collapsed) && (null == u || u(a))
                        },
                        children: [(0,
                            r.jsx)(io, {
                            channel: t,
                            gotoChannel: o
                        }), (0, r.jsx)(lo, {
                            channel: t,
                            gotoChannel: o,
                            mentionCount: i
                        }), n]
                    }))
                })
            }

            function io(e) {
                var t = e.channel,
                    n = e.gotoChannel;
                return t.isPrivate() ? (0, r.jsx)(ao, {
                    channel: t,
                    gotoChannel: n
                }) : (0, r.jsx)(uo, {
                    channel: t,
                    gotoChannel: n
                })
            }

            function ao(e) {
                var t = e.channel,
                    n = e.gotoChannel,
                    o = (0, i.e7)([l.default], (function() {
                        return t.isDM() ? l.default.getUser(t.getRecipientId()) : null
                    })),
                    a = null == o ? (0, Vn.x)(t) : o.getAvatarURL(void 0, 40);
                return (0, r.jsx)(D.Clickable, {
                    onClick: n,
                    tabIndex: -1,
                    children: (0, r.jsx)("img", {
                        className: $r().dmIcon,
                        src: a,
                        alt: "",
                        "aria-hidden": !0
                    })
                })
            }

            function uo(e) {
                var t = e.channel,
                    n = e.gotoChannel,
                    o = (0, i.e7)([tr.Z], (function() {
                        return tr.Z.getGuild(t.guild_id)
                    }));
                return null == o ? null : (0, r.jsx)(nr.Z, {
                    "aria-hidden": !0,
                    className: $r().guildIcon,
                    guild: o,
                    size: nr.Z.Sizes.MEDIUM,
                    active: !0,
                    onClick: n,
                    tabIndex: -1
                })
            }

            function lo(e) {
                var t = e.channel,
                    n = e.gotoChannel,
                    o = e.mentionCount,
                    a = (0, i.e7)([tr.Z], (function() {
                        return tr.Z.getGuild(t.guild_id)
                    })),
                    u = (0, i.e7)([Qn.Z], (function() {
                        return Qn.Z.getChannel(t.parent_id)
                    })),
                    l = (0, Qr.KS)(t, a),
                    c = (0, Hn.ZP)(t, !1),
                    s = null == u ? null == a ? void 0 : a.name : "".concat(null == a ? void 0 : a.name, " › ").concat(u.name),
                    f = t.isMultiUserDM() ? Ze.Z.Messages.MEMBERS_HEADER.format({
                        members: t.recipients.length + 1
                    }) : t.isPrivate() ? (0, r.jsx)(co, {
                        channel: t
                    }) : (0, r.jsx)(D.Clickable, {
                        className: b()($r().subtext, $r().guildName),
                        onClick: n,
                        children: s
                    });
                return (0, r.jsxs)("div", {
                    className: $r().channelNameSection,
                    children: [(0, r.jsx)(D.Heading, {
                        variant: "heading-md/semibold",
                        className: $r().channelNameHeader,
                        children: (0, r.jsxs)(D.Clickable, {
                            className: $r().channelName,
                            onClick: n,
                            children: [t.isThread() || t.isGroupDM() || null == l ? null : (0, r.jsx)(l, {
                                className: t.isForumLikeChannel() ? $r().forumIcon : void 0,
                                width: 18,
                                height: 18
                            }), (0, r.jsx)("span", {
                                className: $r().channelNameSpan,
                                children: c
                            }), null != o && o > 0 ? (0, r.jsx)(qr.Z, {
                                value: o,
                                className: $r().badge
                            }) : null]
                        })
                    }), (0, r.jsx)(D.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        className: $r().subtextContainer,
                        children: f
                    })]
                })
            }

            function co(e) {
                var t = e.channel,
                    n = (0, i.cj)([l.default, Wr.Z, Kr.Z], (function() {
                        var e = l.default.getUser(t.getRecipientId());
                        return {
                            activities: null != e ? Wr.Z.getActivities(e.id) : null,
                            applicationStream: null != e ? Kr.Z.getAnyStreamForUser(e.id) : null
                        }
                    })),
                    o = n.activities,
                    a = n.applicationStream;
                return null == o ? null : (0, r.jsx)(zr.Z, {
                    className: $r().activityStatus,
                    emojiClassName: $r().activityEmoji,
                    activities: o,
                    applicationStream: a,
                    hideTooltip: !0
                })
            }
            var so = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function fo(e, t, n) {
                var r = t ? V.Z.guildFilter : null,
                    o = t ? V.Z.roleFilter : null,
                    i = t ? V.Z.everyoneFilter : null,
                    a = null;
                null != e && null != r && (a = r === q.NgX.ALL_SERVERS ? null : e.getGuildId());
                Cr(n, q.DJj, a, o, i)
            }

            function po(e) {
                var t = e.setTab,
                    n = e.onJump,
                    a = e.badgeState,
                    u = e.closePopout,
                    l = (0, i.e7)([Qn.Z, wr.Z], (function() {
                        return Qn.Z.getChannel(wr.Z.getChannelId())
                    })),
                    c = (0, i.cj)([V.Z], (function() {
                        return {
                            messages: V.Z.getMentions(),
                            hasMore: V.Z.hasMore,
                            loading: V.Z.loading,
                            guildFilter: V.Z.guildFilter,
                            roleFilter: V.Z.roleFilter,
                            everyoneFilter: V.Z.everyoneFilter
                        }
                    })),
                    s = c.messages,
                    f = c.hasMore,
                    d = c.loading,
                    p = c.guildFilter,
                    h = c.roleFilter,
                    y = c.everyoneFilter,
                    b = !0,
                    E = (0, jr.Z)(p),
                    O = (0, jr.Z)(h),
                    v = (0, jr.Z)(y);
                o.useEffect((function() {
                    V.Z.hasLoadedEver ? b && (null != E && p !== E || null != O && h !== O || null != v && y !== v) && fo(l, b) : fo(l, b)
                }), [E, p, O, h, v, y, l, b]);
                o.useEffect((function() {
                    return function() {
                        Ar(q.DJj)
                    }
                }), []);
                var g = o.useCallback((function() {
                    return (0, r.jsx)(An, {
                        tab: w.X.MENTIONS,
                        setTab: t,
                        badgeState: a,
                        closePopout: u,
                        children: b ? (0, r.jsx)(Yr, {}) : null
                    })
                }), [b, t, a, u]);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(hn.ZP, {
                        className: yr().recentMentionsPopout,
                        scrollerClassName: yr().scroller,
                        onFetch: function() {
                            return null
                        },
                        onJump: n,
                        onCloseMessage: function(e) {
                            Rr(e.id)
                        },
                        channel: l,
                        messages: s,
                        loading: d,
                        hasMore: f,
                        analyticsName: "Recent Mentions",
                        loadMore: function() {
                            var e = null != s && s.length > 0 ? s[s.length - 1].id : null;
                            fo(l, b, e)
                        },
                        canCloseAllMessages: !0,
                        renderHeader: g,
                        renderEmptyState: Eo,
                        renderMessage: b ? yo : ho,
                        "aria-label": Ze.Z.Messages.RECENT_MENTIONS,
                        listName: "recents"
                    })
                })
            }

            function ho(e, t) {
                return [(0, r.jsx)(bo, {
                    message: e,
                    gotoMessage: t
                }, e.id)]
            }

            function yo(e, t) {
                return [(0, r.jsx)(bo, {
                    message: e,
                    gotoMessage: t,
                    dismissible: !0
                }, e.id)]
            }

            function bo(e) {
                var t = e.message,
                    n = e.gotoMessage,
                    o = e.dismissible;
                if (null == t) return null;
                var i = Qn.Z.getChannel(t.channel_id);
                return null == i ? null : (0, r.jsxs)("div", {
                    className: yr().container,
                    children: [(0, r.jsx)(oo, {
                        channel: i,
                        gotoChannel: n,
                        children: null != o ? (0, r.jsx)(Lt.ZP, {
                            className: yr().closeButton,
                            tooltip: Ze.Z.Messages.CLOSE,
                            color: Lt.YX.TERTIARY,
                            icon: (0, r.jsx)(Mr.Z, {
                                width: 16,
                                height: 16
                            }),
                            onClick: function() {
                                return Rr(t.id)
                            }
                        }) : null
                    }), (0, r.jsxs)("div", {
                        className: yr().messageContainer,
                        children: [(0, r.jsx)(Fr, {
                            className: yr().jumpButton,
                            onJump: n
                        }), (0, r.jsx)(er.Z, {
                            message: t,
                            channel: i,
                            className: yr().message,
                            compact: K.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: so,
                            trackAnnouncementViews: !0
                        }, t.id)]
                    })]
                })
            }

            function Eo(e) {
                return (0, r.jsx)(fr, {
                    Icon: Dr.Z,
                    header: Ze.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
                    tip: Ze.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
                })
            }
            var Oo = n(131795),
                vo = n.n(Oo);

            function go(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function mo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return go(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return go(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _o(e) {
                var t = e.type,
                    n = e.onClick,
                    i = mo(o.useState(!1), 2),
                    u = i[0],
                    l = i[1],
                    c = (0, a.sv)(),
                    s = function() {
                        n();
                        Ke.default.track(q.rMx.INBOX_CHANNEL_ACKED, {
                            marked_all_channels_as_read: !0,
                            num_unread_channels_remaining: 0
                        })
                    },
                    f = function(e) {
                        e.shiftKey ? s() : l(!0)
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [u ? (0, r.jsx)(So, {
                        confirm: s,
                        cancel: function() {
                            return l(!1)
                        }
                    }) : null, "bottom-floating" === t ? (0, r.jsx)(Vr, {
                        text: Ze.Z.Messages.MARK_ALL_AS_READ,
                        icon: pn,
                        onClick: f
                    }) : (0, r.jsx)(Lt.ZP, {
                        tooltip: c ? Ze.Z.Messages.MARK_ALL_AS_READ : Ze.Z.Messages.UNREADS_MARK_READ,
                        color: Lt.YX.SECONDARY,
                        icon: (0, r.jsx)(pn, {}),
                        onClick: f
                    })]
                })
            }

            function So(e) {
                var t = e.cancel,
                    n = e.confirm;
                return (0, r.jsx)(D.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: Ze.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
                    confirmText: Ze.Z.Messages.MARK_AS_READ,
                    cancelText: Ze.Z.Messages.CANCEL,
                    confirmButtonColor: D.Button.Colors.BRAND,
                    onCancel: t,
                    onConfirm: n,
                    children: (0, r.jsx)(D.Text, {
                        color: "text-normal",
                        variant: "text-sm/normal",
                        children: Ze.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
                    })
                })
            }
            var Io = n(496486),
                Po = n.n(Io),
                To = n(34225),
                No = n(248088),
                Ao = n(396043),
                Co = n(343557),
                Ro = n(512291),
                jo = n(718831),
                wo = n(621329),
                Do = n(140567),
                Mo = n(551856),
                Lo = n(312682);

            function xo(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Zo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        xo(e, t, n[t])
                    }))
                }
                return e
            }

            function ko(e, t) {
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

            function Fo(e) {
                var t = e.channel;
                return (0, r.jsx)(D.Popout, {
                    align: "right",
                    animation: D.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: function(e) {
                        return t.isThread() ? (0, r.jsx)(Mo.Z, ko(Zo({}, e), {
                            channel: t,
                            navId: "recents-thread-notifications",
                            label: Ze.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
                        })) : (0, r.jsx)(Do.Z, ko(Zo({}, e), {
                            channel: t,
                            navId: "recents-notifications",
                            label: Ze.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                            location: {
                                section: q.jXE.INBOX
                            },
                            includeGuildMute: !0
                        }))
                    },
                    children: function(e) {
                        var t = e.onClick;
                        return (0, r.jsx)(Lt.ZP, {
                            tooltip: Ze.Z.Messages.NOTIFICATION_SETTINGS,
                            color: Lt.YX.TERTIARY,
                            icon: (0, r.jsx)(Lo.Z, {
                                width: 16,
                                height: 16
                            }),
                            onClick: t
                        })
                    }
                })
            }
            var Uo = n(607544),
                Go = n(503871),
                Bo = n(536945),
                Vo = n(367406),
                Ho = n(72580),
                Yo = n(379364),
                zo = n(242857),
                Qo = n.n(zo);

            function Ko(e) {
                var t = e.channel,
                    n = e.channelRecord,
                    a = e.deleteChannel,
                    u = (0, i.Wu)([Bo.Z, Qn.Z], (function() {
                        return Po()(Bo.Z.getThreadsForParent(n.guild_id, n.id)).values().filter((function(e) {
                            var n = e.id;
                            return Z.default.compare(n, t.oldestReadMessageId) > 0
                        })).map((function(e) {
                            var t = e.id;
                            return Qn.Z.getChannel(t)
                        })).filter(Ho.lm).sort((function(e, t) {
                            return Z.default.compare(e.id, t.id)
                        })).value()
                    }), [t.oldestReadMessageId, n.guild_id, n.id]),
                    l = o.useCallback((function(e, t) {
                        (0, Vo.ok)(e, t, Yo.on.INBOX)
                    }), []);
                o.useEffect((function() {
                    null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== u.length || Q.Z.wait((function() {
                        (0, G.In)(t.channelId, !0);
                        a(t.channelId)
                    }))
                }));
                return (0, r.jsx)("div", {
                    className: Qo().container,
                    children: u.map((function(e) {
                        return (0, r.jsx)(Go.oL, {
                            createStore: function() {
                                return (0, Go.NU)(n)
                            },
                            children: (0, r.jsx)(Uo.ZP, {
                                className: Qo().forumPost,
                                threadId: e.id,
                                goToThread: l
                            })
                        }, e.id)
                    }))
                })
            }
            var Wo = n(385983),
                qo = n(321705),
                Xo = n(101609),
                Jo = n(349658),
                $o = n(4361),
                ei = n(356845),
                ti = n(490355),
                ni = n(508754),
                ri = n(732827),
                oi = n(661123),
                ii = n(791707),
                ai = n(550131),
                ui = n(30778),
                li = n(149061),
                ci = n(283285),
                si = n(329790),
                fi = n(323725),
                di = n(545516),
                pi = n(317657),
                hi = n(649252),
                yi = n(714357),
                bi = n(326763),
                Ei = n.n(bi),
                Oi = n(13489),
                vi = n.n(Oi);

            function gi(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function mi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        gi(e, t, n[t])
                    }))
                }
                return e
            }

            function _i(e, t) {
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

            function Si(e) {
                var t, n, o, a, u, l = e.channel,
                    c = e.message,
                    s = e.compact,
                    f = void 0 !== s && s,
                    d = e.className,
                    p = e.onContextMenu,
                    h = e.onClick,
                    y = e.disableInteraction,
                    E = void 0 !== y && y,
                    O = e.hasThread,
                    v = e.treatSpam,
                    g = q.OBS.has(c.type) ? c.messageReference : void 0,
                    m = (0, i.e7)([ti.Z], (function() {
                        return ti.Z.getMessageByReference(g)
                    })),
                    _ = (0, i.e7)([Qn.Z], (function() {
                        return c.type === q.uaV.THREAD_STARTER_MESSAGE && m.state === ti.Y.LOADED ? Qn.Z.getChannel(m.message.channel_id) : null
                    })),
                    S = K.x4.useSetting(),
                    I = K.RS.useSetting(),
                    P = K.NA.useSetting() && !c.author.isClyde(),
                    T = K.QK.useSetting(),
                    N = (0, $o.dj)((null !== (t = c.editedTimestamp) && void 0 !== t ? t : c.timestamp).valueOf()),
                    A = (0,
                        $o.tu)(null !== (n = null == l ? void 0 : l.guild_id) && void 0 !== n ? n : "", (null !== (o = c.editedTimestamp) && void 0 !== o ? o : c.timestamp).valueOf()),
                    C = (0, ei.Z)(null == l ? void 0 : l.id),
                    R = (0, ui.Z)(l).disableReactionCreates,
                    j = (0, ci.Z)(c, {
                        hideSimpleEmbedContent: I && P,
                        allowList: N.showListsAndHeaders || A.showListsAndHeaders,
                        allowHeading: N.showListsAndHeaders || A.showListsAndHeaders,
                        allowLinks: N.showMaskedLinks || A.showMaskedLinks,
                        previewLinkTarget: N.showMaskedLinks || A.showMaskedLinks
                    }),
                    w = j.content,
                    D = j.hasSpoilerEmbeds,
                    M = (0, ai.ZP)(c),
                    L = (0, i.e7)([Qn.Z], (function() {
                        return c.hasFlag(q.iLy.HAS_THREAD) && Qn.Z.getChannel(c.id)
                    })),
                    x = c.type === q.uaV.THREAD_STARTER_MESSAGE && m.state === ti.Y.LOADED && null != _,
                    Z = !x && void 0 === a,
                    k = (0, si.Z)({
                        message: c,
                        channel: l,
                        enabled: Z
                    });
                if (x) return (0, r.jsx)(Si, _i(mi({}, e), {
                    message: m.message,
                    channel: _,
                    hasThread: !1
                }));
                vn.Z.isBlocked(c.author.id) ? a = Ze.Z.Messages.BLOCKED_MESSAGE_COUNT : (0, Jo.DQ)(c) && v && (a = Ze.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT);
                return void 0 !== a ? (0, r.jsx)(Pi, {
                    className: d,
                    compact: f,
                    count: 1,
                    collapsedReason: a
                }) : (0, r.jsx)(ni.Z, {
                    compact: f,
                    className: b()(d, (u = {}, gi(u, vi().ephemeral, (0, oi.yE)(c.flags, q.iLy.EPHEMERAL)), gi(u, vi().disableInteraction, E), gi(u, vi().groupStart, e.isGroupStart), u)),
                    childrenRepliedMessage: (0, yi.Z)(c, l, g, m, f),
                    childrenHeader: (0, di.Z)(_i(mi({}, e), {
                        author: M,
                        guildId: l.guild_id
                    })),
                    childrenAccessories: (0, r.jsx)(li.BB, {
                        channel: l,
                        message: c,
                        hasSpoilerEmbeds: D,
                        compact: f,
                        canSuppressEmbeds: !1,
                        canDeleteAttachments: !1,
                        disableReactionReads: !1,
                        disableReactionCreates: R,
                        disableReactionUpdates: !1,
                        renderThreadAccessory: O,
                        renderComponentAccessory: !1,
                        inlineAttachmentMedia: S,
                        inlineEmbedMedia: I,
                        renderEmbeds: P,
                        gifAutoPlay: T,
                        showListsAndHeaders: N.showListsAndHeaders || A.showListsAndHeaders,
                        showMaskedLinks: N.showMaskedLinks || A.showMaskedLinks,
                        shouldHideMediaOptions: C,
                        showClydeAiEmbeds: !1
                    }),
                    childrenExecutedCommand: (0, hi.Z)(c, l, f),
                    childrenMessageContent: (0, fi.Z)(e, w),
                    childrenSystemMessage: (0, pi.Z)(e),
                    onContextMenu: p,
                    onClick: h,
                    hasThread: !1 !== O && null != L && c.hasFlag(q.iLy.HAS_THREAD),
                    hasReply: c.type === q.uaV.REPLY,
                    isSystemMessage: (0, ii.Z)(c),
                    messageRef: k
                })
            }
            const Ii = o.memo(Si);

            function Pi(e) {
                var t = e.className,
                    n = e.count,
                    o = e.compact,
                    i = e.collapsedReason;
                return (0, r.jsx)(ni.Z, {
                    className: t,
                    compact: o,
                    role: "group",
                    childrenMessageContent: (0, r.jsx)(ri.Z, {
                        compact: o,
                        className: Ei().blockedSystemMessage,
                        iconNode: (0, r.jsx)(Mr.Z, {
                            className: Ei().blockedIcon
                        }),
                        children: (0, r.jsx)("div", {
                            className: Ei().blockedMessageText,
                            children: i.format({
                                count: n
                            })
                        })
                    })
                })
            }
            var Ti = n(664625),
                Ni = n(682776),
                Ai = n(70145),
                Ci = n(717187),
                Ri = n.n(Ci),
                ji = n(419051),
                wi = n(33014),
                Di = n(18882),
                Mi = n(487685),
                Li = n(665783),
                xi = n(5544),
                Zi = n(747126),
                ki = n(107218),
                Fi = n(9430),
                Ui = n(102921);

            function Gi(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Bi(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Vi(e) {
                Vi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Vi(e)
            }

            function Hi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Bi(e, t, n[t])
                    }))
                }
                return e
            }

            function Yi(e, t) {
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

            function zi(e, t) {
                return !t || "object" !== Xi(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Qi(e, t) {
                Qi = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Qi(e, t)
            }

            function Ki(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Gi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gi(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Wi, qi, Xi = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ji(e) {
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
                    var n, r = Vi(e);
                    if (t) {
                        var o = Vi(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return zi(this, n)
                }
            }! function(e) {
                e[e.Favorite = 0] = "Favorite";
                e[e.PrivateChannel = 1] = "PrivateChannel";
                e[e.Mentioned = 2] = "Mentioned";
                e[e.AllMessagesNotifications = 3] = "AllMessagesNotifications";
                e[e.GuildChannel = 4] = "GuildChannel";
                e[e.OldChannel = 5] = "OldChannel";
                e[e.NoNotifications = 6] = "NoNotifications";
                e[e.ReallyOldChannel = 7] = "ReallyOldChannel"
            }(Wi || (Wi = {}));
            ! function(e) {
                e.Loading = "loading";
                e.Loaded = "loaded";
                e.Done = "done"
            }(qi || (qi = {}));
            var $i = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Qi(e, t)
                }(n, e);
                var t = Ji(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var o;
                    (o = t.call(this)).state = e;
                    o.scrollerRef = r;
                    o.maybeLoadMore = function() {
                        var e, t = null === (e = o.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null != t) {
                            t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && o.loadMore()
                        }
                    };
                    o.reloadMessages = function() {
                        o.setState({
                            channels: o.state.channels.map((function(e) {
                                return "messages" === e.type && e.hasLoadedAnything ? ea(e, !1, !0) : e
                            }))
                        })
                    };
                    o.getNumUnreadChannels = function() {
                        return o.state.channels.length
                    };
                    o.markChannelRead = function(e) {
                        var t = e.channelId,
                            n = e.newestUnreadMessageId;
                        Q.Z.wait((function() {
                            return G.In(t, !0, void 0, n, {
                                section: q.jXE.INBOX
                            })
                        }));
                        if (1 !== o.state.channels.length) {
                            o.setState({
                                channels: o.updateChannel(t, (function(e) {
                                    return Yi(Hi({}, e), {
                                        deleted: !0
                                    })
                                }))
                            });
                            v.Z.useReducedMotion && o.deleteChannel(t);
                            o.maybeLoadMore()
                        } else o.deleteChannel(t)
                    };
                    o.markGuildRead = function(e) {
                        Q.Z.wait((function() {
                            return (0, wi.Z)([e], q.jXE.INBOX)
                        }));
                        o.setState({
                            channels: o.state.channels.filter((function(t) {
                                return t.guildId !== e
                            }))
                        });
                        o.maybeLoadMore()
                    };
                    o.deleteChannel = function(e) {
                        o.setState({
                            scrollToChannelIndex: Po().findIndex(o.state.channels, (function(t) {
                                return t.channelId === e
                            })),
                            channels: o.state.channels.filter((function(t) {
                                return t.channelId !== e
                            }))
                        });
                        o.maybeLoadMore()
                    };
                    o.markAllRead = function() {
                        G.y5(o.state.channels.map((function(e) {
                            return {
                                channelId: e.channelId,
                                messageId: e.newestUnreadMessageId
                            }
                        })));
                        o.setState({
                            channels: []
                        })
                    };
                    o.toggle = function(e) {
                        var t = e.channelId,
                            n = e.guildId,
                            r = o.state,
                            i = r.channels,
                            a = r.collapsedChannels,
                            u = r.loadState,
                            l = Po().findIndex(i, (function(e) {
                                return e.channelId === t
                            })),
                            c = i[l],
                            s = !c.collapsed;
                        a[t] = s;
                        (0, M.BU)(n, t, (function(e) {
                            e.collapsedInInbox = s
                        }), M.fy.FREQUENT_USER_ACTION);
                        o.setState({
                            scrollToChannelIndex: l,
                            collapsedChannels: a,
                            loadState: u !== qi.Done || s || c.isFullyLoaded ? u : qi.Loaded,
                            channels: o.updateChannel(t, (function(e) {
                                return Yi(Hi({}, e), {
                                    collapsed: s
                                })
                            }))
                        });
                        c.collapsed ? c.isFullyLoaded || o.loadMore() : o.maybeLoadMore()
                    };
                    o.handleUserGuildSettingsStoreChange = function() {
                        var e = o.state.channels.filter((function(e) {
                            return !Fi.Z.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId)
                        }));
                        e.length !== o.state.channels.length && o.setState({
                            channels: e
                        })
                    };
                    o.handleJoinedThreadsStoreChange = function() {
                        var e = o.state.channels.filter((function(e) {
                            return !Mi.Z.isMuted(e.channelId)
                        }));
                        e.length !== o.state.channels.length && o.setState({
                            channels: e
                        })
                    };
                    o.handleActiveThreadsStoreChange = function() {
                        var e = o.state.channels.map((function(e) {
                            if ("forum" === e.type) {
                                var t = Bo.Z.hasLoaded(e.guildId);
                                return Yi(Hi({}, e), {
                                    isFullyLoaded: t,
                                    hasLoadedAnything: t
                                })
                            }
                            return e
                        }));
                        o.setState({
                            channels: e
                        })
                    };
                    return o
                }
                var r = n.prototype;
                r.loadMore = function() {
                    var e = this,
                        t = this.state,
                        n = t.loadState,
                        r = t.channels;
                    if (n === qi.Loaded) {
                        var o = !1,
                            i = r.map((function(t) {
                                if (t.isFullyLoaded || t.deleted || o) return t;
                                if (t.collapsed) return t.hasLoadedAnything ? t : Yi(Hi({}, t), {
                                    hasLoadedAnything: !0
                                });
                                if ((t = e.populateInitialStateFromStore(t)).isFullyLoaded) return t;
                                kn()("nsfw" !== t.type, "this channel should already be loaded");
                                "messages" === t.type && e.loadChannelMessages(t) && (o = !0);
                                return t
                            }));
                        o && !i.some((function(e, t) {
                            return e !== r[t]
                        })) || this.setState({
                            channels: i,
                            loadState: o ? this.state.loadState : qi.Done
                        })
                    }
                };
                r.populateInitialStateFromStore = function(e) {
                    if ("messages" === e.type) return ea(e, !1);
                    if ("nsfw" === e.type) return Yi(Hi({}, e), {
                        isFullyLoaded: !0,
                        hasLoadedAnything: !0
                    });
                    if ("forum" === e.type) {
                        var t = Bo.Z.hasLoaded(e.guildId);
                        return Yi(Hi({}, e), {
                            isFullyLoaded: t,
                            hasLoadedAnything: t
                        })
                    }(0, Ho.vE)(e)
                };
                r.clearScrollToChannelIndex = function() {
                    this.setState({
                        scrollToChannelIndex: null
                    })
                };
                r.loadChannelMessages = function(e) {
                    var t = this;
                    Bn.Z.clearChannel(e.channelId);
                    var n = Bn.Z.fetchMessages({
                        channelId: e.channelId,
                        limit: q.AQB,
                        jump: {
                            messageId: e.oldestReadMessageId,
                            flash: !0
                        }
                    });
                    if (null == n || !1 === n) return !1;
                    this.setState({
                        loadState: qi.Loading
                    });
                    n.then((function(n) {
                        t.setState({
                            loadState: qi.Loaded,
                            channels: t.updateChannel(e.channelId, (function(e) {
                                kn()("messages" === e.type, "channel cannot change type");
                                var t = ea(e, !0);
                                0 !== t.messages.length && t.messages.length !== e.messages.length || (t = Yi(Hi({}, t), {
                                    hasLoadedAnything: !0,
                                    isFullyLoaded: !0,
                                    hasError: !n
                                }));
                                return t
                            }))
                        })
                    }), (function() {
                        t.setState({
                            loadState: qi.Loaded,
                            channels: t.updateChannel(e.channelId, (function(e) {
                                var t;
                                kn()("messages" === e.type, "channel cannot change type");
                                return Yi(Hi({}, ea(e, !0)), {
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
                                })
                            }))
                        })
                    }));
                    return !0
                };
                r.updateChannel = function(e, t) {
                    return this.state.channels.map((function(n) {
                        return n.channelId === e ? t(n) : n
                    }))
                };
                r.setState = function(e) {
                    for (var t in e)
                        if (e[t] !== this.state[t]) {
                            this.state = Hi({}, this.state, e);
                            this.emit("change", this.state);
                            return
                        }
                };
                return n
            }(Ri());

            function ea(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = Kn.Z.getMessages(e.channelId),
                    i = o.toArray().filter((function(t) {
                        return Ui.Z.compare(t.id, e.oldestReadMessageId) > 0 && Ui.Z.compare(t.id, e.newestUnreadMessageId) <= 0
                    })),
                    a = i.length === e.messages.length && i.every((function(t, n) {
                        return e.messages[n] === t
                    }));
                if (a && r) return e;
                var u = null != o.getAfter(e.oldestReadMessageId) || (null === (n = i[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
                    l = i[i.length - 1],
                    c = Ui.Z.compare(null == l ? void 0 : l.id, e.newestUnreadMessageId) >= 0 || i.length >= 25;
                return Yi(Hi({}, e), {
                    messages: i,
                    hasLoadedAnything: e.hasLoadedAnything || u || t,
                    hasLoadedFirst: e.hasLoadedFirst || u || t,
                    isFullyLoaded: e.isFullyLoaded || u && c || t && !o.hasMoreAfter
                })
            }

            function ta() {
                var e = function() {
                        var e, t, n = {},
                            r = null !== (t = null === (e = L.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
                        for (var o in r)
                            for (var i in r[o].channels) {
                                var a = Qn.Z.getChannel(i);
                                i in n && (null == a ? void 0 : a.guild_id) !== o || (n[i] = r[o].channels[i].collapsedInInbox)
                            }
                        return n
                    }(),
                    t = function(e) {
                        var t = [];
                        Qn.Z.getSortedPrivateChannels().forEach((function(n) {
                            return na(e, t, null, n.id)
                        }));
                        ki.Z.getFlattenedGuildIds().forEach((function(n) {
                            if (null != n) {
                                var r = xi.ZP.getSelectableChannelIds(n),
                                    o = Di.Z.getActiveJoinedUnreadThreadsForGuild(n);
                                r.forEach((function(r) {
                                    na(e, t, n, r);
                                    var i, a = null !== (i = o[r]) && void 0 !== i ? i : {};
                                    for (var u in a) na(e, t, n, u)
                                }))
                            }
                        }));
                        return Po().sortBy(t, (function(e) {
                            return e.sortOrder
                        }))
                    }(e);
                return {
                    collapsedChannels: e,
                    loadState: qi.Loaded,
                    channels: t,
                    scrollToChannelIndex: null
                }
            }

            function na(e, t, n, r) {
                if (null != r) {
                    var o = Qn.Z.getChannel(r);
                    if (null != o) {
                        if (Jn.Ec.has(o.type) || !Fi.Z.isGuildOrCategoryOrChannelMuted(n, o.id)) {
                            if (o.isPrivate()) {
                                if (0 === u.ZP.getMentionCount(r)) return
                            } else if (!u.ZP.hasRelevantUnread(o) && 0 === u.ZP.getMentionCount(r)) return;
                            if (o.isPrivate() || Ni.Z.can(q.Plq.READ_MESSAGE_HISTORY, o)) {
                                var i = u.ZP.ackMessageId(r);
                                if (null == i) {
                                    var a = tr.Z.getGuild(o.guild_id);
                                    if (null == a || null == a.joinedAt) return;
                                    i = Ui.Z.fromTimestamp(a.joinedAt.getTime())
                                }
                                var l = u.ZP.getOldestUnreadMessageId(r),
                                    c = u.ZP.lastMessageId(r),
                                    s = u.ZP.getMentionCount(r),
                                    f = s > 0 || o.isPrivate();
                                if (null != c && !(Ui.Z.compare(i, c) >= 0)) {
                                    var d = {
                                        guildId: n,
                                        channelId: r,
                                        oldestReadMessageId: i,
                                        oldestUnreadMessageId: l,
                                        newestUnreadMessageId: c,
                                        collapsed: !0 === e[r],
                                        hasLoadedAnything: !1,
                                        hasLoadedFirst: !1,
                                        isFullyLoaded: !1,
                                        hasError: !1,
                                        hasMentionsOrUnreads: f,
                                        mentionCount: s,
                                        sortOrder: ra(n, r, l)
                                    };
                                    o.isNSFW() && Zi.Z.didAgree(o.guild_id) ? t.push(Yi(Hi({}, d), {
                                        type: "nsfw"
                                    })) : o.isForumLikeChannel() ? t.push(Yi(Hi({}, d), {
                                        type: "forum"
                                    })) : t.push(Yi(Hi({}, d), {
                                        type: "messages",
                                        messages: []
                                    }))
                                }
                            }
                        }
                    }
                }
            }

            function ra(e, t, n) {
                var r = Qn.Z.getChannel(t);
                if (ji.Z.isFavorite(t)) return Wi.Favorite;
                if (r.isPrivate()) return Wi.PrivateChannel;
                if (u.ZP.getMentionCount(t) > 0) return Wi.Mentioned;
                if (null != n) {
                    var o = Ui.Z.extractTimestamp(n);
                    if (Date.now() - o > 864e6) return Wi.ReallyOldChannel;
                    if (Date.now() - o > 1728e5) return Wi.OldChannel
                }
                if (r.isThread()) {
                    var i = (0, Li.J)(r);
                    return i === Yo.iN.ALL_MESSAGES ? Wi.AllMessagesNotifications : i === Yo.iN.NO_MESSAGES ? Wi.NoNotifications : Wi.GuildChannel
                }
                var a = Fi.Z.getChannelMessageNotifications(e, t),
                    l = a === q.bL.NULL ? Fi.Z.getMessageNotifications(e) : a;
                return l === q.bL.ALL_MESSAGES ? Wi.AllMessagesNotifications : l === q.bL.NO_MESSAGES ? Wi.NoNotifications : Wi.GuildChannel
            }
            var oa = n(464977),
                ia = n.n(oa);

            function aa(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ua(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        aa(e, t, n[t])
                    }))
                }
                return e
            }

            function la(e, t) {
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
            var ca = {
                left: 4,
                right: -12
            };

            function sa(e) {
                var t, n = e.channel,
                    i = e.message,
                    a = e.compact,
                    u = e.isGroupStart,
                    l = e.treatSpam,
                    c = e.gotoChannel,
                    s = (0, Me.JA)(null !== (t = i.id) && void 0 !== t ? t : ""),
                    f = o.useCallback((function(e) {
                        if ("ArrowLeft" === e.key) {
                            var t;
                            null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
                        }
                    }), [n.id]);
                return (0, r.jsx)(D.FocusRing, {
                    offset: ca,
                    children: (0, r.jsxs)("div", la(ua({
                        className: ia().messageContainer,
                        onKeyDown: f
                    }, s), {
                        children: [(0, r.jsx)(Fr, {
                            className: ia().jumpButton,
                            onJump: function(e) {
                                return c(e, i.id)
                            }
                        }), (0, r.jsx)(Ii, {
                            id: i.id,
                            message: i,
                            channel: n,
                            className: ia().message,
                            compact: a,
                            animateAvatar: !1,
                            isGroupStart: u,
                            onKeyDown: f,
                            treatSpam: l
                        })]
                    }), i.id)
                })
            }

            function fa(e) {
                var t, n, o = e.channel,
                    a = e.channelRecord,
                    u = e.gotoChannel,
                    c = Wo.Z.useExperiment({
                        location: "20e3b0_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    s = K.jU.useSetting(),
                    f = (0, i.e7)([Ni.Z], (function() {
                        return Ni.Z.can(q.Plq.CREATE_INSTANT_INVITE, a)
                    })),
                    d = (0, Jo.P1)(a),
                    p = !1,
                    h = 0 === o.messages.length || o.messages[0].timestamp.isSame(Un()(), "day"),
                    y = null !== (n = null === (t = l.default.getUser(Ti.default.getId())) || void 0 === t ? void 0 : t.hasFlag(q.xW$.SPAMMER)) && void 0 !== n && n,
                    b = [];
                if (!o.collapsed) {
                    var E = null,
                        O = null,
                        v = o.messages.slice(0, 25);
                    v.forEach((function(e) {
                        if (!(0, qo.Z)(e, f)) {
                            if (!(h || null != E && E.isSame(e.timestamp, "day"))) {
                                var t = (0, Ai.vc)(e.timestamp, "LL");
                                b.push((0, r.jsx)(To.Z, {
                                    className: ia().divider,
                                    children: t
                                }, t));
                                E = e.timestamp
                            }
                            var n = null == O || (0, Xo.Z)(a, O, e);
                            O = e;
                            p = p || (0, Jo.DQ)(e);
                            b.push((0, r.jsx)(sa, {
                                channel: a,
                                message: e,
                                compact: s,
                                isGroupStart: n,
                                treatSpam: !y && c && (0,
                                    Jo.DQ)(e) && d,
                                gotoChannel: u
                            }, e.id))
                        }
                    }));
                    o.messages.length >= 25 && b.push((0, r.jsxs)(D.Button, {
                        color: D.Button.Colors.LINK,
                        look: D.Button.Looks.LINK,
                        onClick: function(e) {
                            return u(e, v[v.length - 1].id)
                        },
                        children: [Ze.Z.Messages.UNREADS_VIEW_CHANNEL, " ›"]
                    }, "view-all"));
                    0 === b.length && (b = [(0, r.jsx)(D.Spinner, {}, "spinner")])
                }
                p && d && Wo.Z.trackExposure({
                    location: "20e3b0_2"
                });
                return (0, r.jsx)("div", {
                    className: ia().messages,
                    children: b
                })
            }
            var da = n(679005),
                pa = n.n(da);

            function ha(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ya(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ba(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ya(e, t, n[t])
                    }))
                }
                return e
            }

            function Ea(e, t) {
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

            function Oa(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ha(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ha(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function va(e) {
                var t = e.channel,
                    n = e.deleteChannel,
                    i = o.useRef(null),
                    a = Oa(o.useState([0, 0]), 2),
                    u = Oa(a[0], 2),
                    l = u[0],
                    c = u[1],
                    s = a[1],
                    f = t.deleted && l > 0;
                if (t.deleted && 0 === l && null != i.current) {
                    var d = i.current.offsetHeight,
                        p = i.current.offsetTop,
                        h = i.current.parentElement.scrollTop;
                    s([d, d - (h > p ? d - (h - p) : d)])
                }
                var y = (0, No.useSpring)({
                        config: {
                            clamp: !0,
                            friction: 18,
                            tension: 200
                        },
                        opacity: f ? 0 : 1,
                        size: f ? 0 : 1,
                        onRest: function() {
                            n(t.channelId)
                        }
                    }),
                    b = {
                        opacity: y.opacity,
                        height: y.size.to((function(e) {
                            return f ? function(e, t, n) {
                                return t + (e - t) * n
                            }(l, c, e) : "auto"
                        }))
                    };
                return (0, r.jsx)(No.animated.div, {
                    ref: i,
                    style: b,
                    children: (0, r.jsx)(_a, ba({}, e))
                })
            }
            const ga = o.memo(va);

            function ma(e) {
                var t = e.channel,
                    n = e.onJump,
                    a = e.deleteChannel,
                    u = e.toggle,
                    l = (0, i.e7)([Qn.Z], (function() {
                        return Qn.Z.getChannel(t.channelId)
                    })),
                    c = (0, i.e7)([Ro.Z], (function() {
                        return null == t.guildId || Ro.Z.isSubscribedToThreads(t.guildId)
                    }));
                o.useEffect((function() {
                    null == l || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || Q.Z.wait((function() {
                        (0, G.In)(t.channelId, !0);
                        a(t.channelId)
                    }))
                }));
                o.useEffect((function() {
                    t.hasLoadedAnything && null != t.guildId && !c && Q.Z.dispatch({
                        type: "GUILD_SUBSCRIPTIONS",
                        guildId: t.guildId
                    })
                }), [t.hasLoadedAnything, t.guildId, c]);
                if (null == l) return null;
                if (!t.hasLoadedAnything) return null;
                var s = function(e, r) {
                    (0, Ao.yw)(q.rMx.INBOX_CHANNEL_CLICKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId
                    });
                    var o = null != r ? r : t.oldestUnreadMessageId;
                    (0, On.uL)(q.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : o));
                    n(e)
                };
                return (0, r.jsx)("div", {
                    className: pa().channel,
                    children: (0, r.jsx)(D.HeadingLevel, {
                        component: (0, r.jsxs)(oo, {
                            channel: l,
                            gotoChannel: s,
                            mentionCount: t.mentionCount,
                            toggleCollapsed: u,
                            channelState: t,
                            children: [(0, r.jsx)(Fo, {
                                channel: l
                            }), (0, r.jsx)(Sa, ba({}, e)), "nsfw" === t.type ? null : (0, r.jsx)(Ia, ba({}, e))]
                        }),
                        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(fa, {
                            channel: t,
                            channelRecord: l,
                            gotoChannel: s
                        }) : "forum" === t.type ? (0, r.jsx)(Ko, {
                            channel: t,
                            channelRecord: l,
                            deleteChannel: a
                        }) : null
                    })
                })
            }
            var _a = o.memo(ma);

            function Sa(e) {
                var t = e.channel,
                    n = e.markChannelRead,
                    o = e.markGuildRead,
                    i = e.getNumUnreadChannels,
                    a = (0, Co.Z)() && null != t.guildId;
                return (0, r.jsx)(Lt.ZP, {
                    className: pa().markReadButton,
                    tooltip: a ? Ze.Z.Messages.MARK_GUILD_AS_READ : Ze.Z.Messages.MARK_AS_READ,
                    color: Lt.YX.TERTIARY,
                    icon: a ? (0, r.jsx)(pn, {
                        width: 16,
                        height: 16
                    }) : (0, r.jsx)(wo.Z, {
                        width: 16,
                        height: 16
                    }),
                    onClick: function() {
                        a && null != t.guildId ? o(t.guildId) : n(t);
                        (0, Ao.yw)(q.rMx.INBOX_CHANNEL_ACKED, {
                            channel_id: t.channelId,
                            guild_id: t.guildId,
                            marked_all_channels_as_read: !1,
                            num_unread_channels_remaining: i() - 1
                        })
                    }
                })
            }

            function Ia(e) {
                var t = e.channel,
                    n = e.toggle,
                    o = e.getNumUnreadChannels,
                    i = function() {
                        n(t);
                        (0, Ao.yw)(q.rMx.INBOX_CHANNEL_COLLAPSED, {
                            channel_id: t.channelId,
                            guild_id: t.guildId,
                            num_unread_channels_remaining: o(),
                            is_now_collapsed: !t.collapsed
                        })
                    };
                return (0, r.jsx)(D.Tooltip, {
                    text: Ze.Z.Messages.COLLAPSE,
                    children: function(e) {
                        return (0, r.jsx)(D.Clickable, Ea(ba({}, e), {
                            className: b()(pa().collapseButton, ya({}, pa().collapsed, t.collapsed)),
                            onClick: i,
                            children: (0, r.jsx)(jo.Z, {
                                width: 16,
                                height: 16
                            })
                        }))
                    }
                })
            }
            var Pa = n(194504),
                Ta = n.n(Pa);

            function Na(e, t, n) {
                var o = t.markChannelRead,
                    i = t.markGuildRead,
                    a = t.deleteChannel,
                    u = t.toggle,
                    l = t.getNumUnreadChannels,
                    c = null;
                return Po().flatMap(e, (function(e) {
                    var t = e.sortOrder !== c;
                    c = e.sortOrder;
                    var s = [];
                    t && (e.hasLoadedAnything && e.sortOrder === Wi.ReallyOldChannel ? s.push((0, r.jsx)(To.Z, {
                        className: Ta().divider,
                        contentClassName: Ta().dividerContent,
                        children: Ze.Z.Messages.UNREADS_OLD_CHANNELS_DIVIDER
                    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === Wi.NoNotifications && s.push((0, r.jsx)(To.Z, {
                        className: Ta().divider,
                        contentClassName: Ta().dividerContent,
                        children: Ze.Z.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
                    }, "disabled-divider")));
                    s.push((0, r.jsx)(ga, {
                        channel: e,
                        markChannelRead: o,
                        markGuildRead: i,
                        toggle: u,
                        deleteChannel: a,
                        onJump: n,
                        getNumUnreadChannels: l
                    }, e.channelId));
                    return s
                }))
            }
            var Aa = n(377565),
                Ca = n.n(Aa);

            function Ra(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ja(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function wa(e, t) {
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

            function Da(e, t) {
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

            function Ma(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ra(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ra(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function La(e) {
                var t = e.setTab,
                    n = e.onJump,
                    a = e.showTutorial,
                    u = e.setSeenTutorial,
                    l = e.closePopout,
                    c = e.badgeState,
                    s = o.useRef(null),
                    f = Ma(function(e) {
                        var t = Ki(o.useState((function() {
                                return new $i(ta(), e)
                            })), 2),
                            n = t[0],
                            r = t[1],
                            i = Ki(o.useState(!1), 2),
                            a = i[0],
                            u = i[1],
                            l = o.useRef(Date.now()),
                            c = Ki(o.useState((function() {
                                return ta()
                            })), 2),
                            s = c[0],
                            f = c[1];
                        o.useEffect((function() {
                            var e = function(e) {
                                return f(e)
                            };
                            n.on("change", e);
                            f(n.state);
                            return function() {
                                n.off("change", e)
                            }
                        }), [n]);
                        o.useEffect((function() {
                            if (!(null == s || s.channels.length > 0 || a)) {
                                var t = Date.now(),
                                    n = ta();
                                if (0 === n.channels.length || t - l.current < 1e4) u(!0);
                                else {
                                    l.current = Date.now();
                                    r(new $i(n, e))
                                }
                            }
                        }), [s, a, e]);
                        o.useLayoutEffect(n.maybeLoadMore, [null == s ? void 0 : s.channels, null == s ? void 0 : s.loadState]);
                        o.useEffect((function() {
                            Kn.Z.addChangeListener(n.reloadMessages);
                            return function() {
                                return Kn.Z.removeChangeListener(n.reloadMessages)
                            }
                        }), [n.reloadMessages]);
                        o.useEffect((function() {
                            Fi.Z.addChangeListener(n.handleUserGuildSettingsStoreChange);
                            return function() {
                                return Fi.Z.removeChangeListener(n.handleUserGuildSettingsStoreChange)
                            }
                        }), [n]);
                        o.useEffect((function() {
                            Mi.Z.addChangeListener(n.handleJoinedThreadsStoreChange);
                            return function() {
                                return Mi.Z.removeChangeListener(n.handleJoinedThreadsStoreChange)
                            }
                        }), [n]);
                        o.useEffect((function() {
                            Bo.Z.addChangeListener(n.handleActiveThreadsStoreChange);
                            return function() {
                                return Bo.Z.removeChangeListener(n.handleActiveThreadsStoreChange)
                            }
                        }), [n]);
                        return [s, n]
                    }(s), 2),
                    d = f[0],
                    h = f[1],
                    y = d.loadState,
                    E = d.channels,
                    O = h.maybeLoadMore,
                    g = h.markAllRead;
                ! function(e, t, n) {
                    o.useLayoutEffect((function() {
                        var r, o = t.scrollToChannelIndex;
                        n.clearScrollToChannelIndex();
                        var i = e.current;
                        if (null != i && null != o) {
                            var a = null === (r = i.getScrollerNode()) || void 0 === r ? void 0 : r.children;
                            if (null != a) {
                                var u = a[o];
                                if (null != u) {
                                    var l = i.getScrollerState(),
                                        c = l.scrollTop,
                                        s = c + l.scrollHeight;
                                    (u.offsetTop < c || u.offsetTop > s) && i.scrollTo({
                                        to: u.offsetTop
                                    })
                                }
                            }
                        }
                    }))
                }(s, d, h);
                ! function(e, t) {
                    o.useEffect((function() {
                        var n = function() {
                            var n = e.channels.find((function(e) {
                                return !e.collapsed
                            }));
                            null != n && t.markChannelRead(n)
                        };
                        x.S.subscribe(q.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
                        return function() {
                            x.S.unsubscribe(q.CkL.MARK_TOP_INBOX_CHANNEL_READ, n)
                        }
                    }), [t, e.channels])
                }(d, h);
                o.useEffect((function() {
                    Ke.default.track(q.rMx.OPEN_POPOUT, {
                        type: "Inbox"
                    })
                }), []);
                o.useEffect((function() {
                    Q.Z.subscribe("CONNECTION_OPEN", l);
                    return function() {
                        Q.Z.unsubscribe("CONNECTION_OPEN", l)
                    }
                }), [l]);
                var m = (0, i.e7)([v.Z], (function() {
                        return v.Z.messageGroupSpacing
                    })),
                    _ = (0, Le.Z)("unreads", s);
                if (0 === E.length) {
                    var S;
                    return (0, r.jsxs)("div", {
                        className: Ca().container,
                        children: [(0, r.jsx)(An, {
                            tab: w.X.UNREADS,
                            setTab: t,
                            badgeState: c,
                            closePopout: l
                        }), (0,
                            r.jsx)(fr, {
                            Icon: p,
                            header: Ze.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
                            tip: "OS X" === (null === (S = vo().os) || void 0 === S ? void 0 : S.family) ? Ze.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : Ze.Z.Messages.UNREADS_EMPTY_STATE_TIP
                        })]
                    })
                }
                return (0, r.jsxs)("div", {
                    className: b()(Ca().container, "group-spacing-".concat(m)),
                    "aria-label": Ze.Z.Messages.UNREADS_TAB_LABEL,
                    children: [(0, r.jsx)(An, {
                        tab: w.X.UNREADS,
                        setTab: t,
                        badgeState: c,
                        closePopout: l,
                        children: (0, r.jsx)(_o, {
                            type: "top-header",
                            onClick: g
                        })
                    }), (0, r.jsx)(Me.bG, {
                        navigator: _,
                        children: (0, r.jsx)(Me.SJ, {
                            children: function(e) {
                                var t = e.ref,
                                    o = Da(e, ["ref"]);
                                return (0, r.jsxs)(D.AdvancedScrollerThin, wa(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            ja(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({
                                    ref: function(e) {
                                        s.current = e;
                                        var n;
                                        t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    }
                                }, o), {
                                    onScroll: y === qi.Done ? void 0 : O,
                                    className: Ca().scroller,
                                    children: [a ? (0, r.jsx)(xa, {
                                        setSeenTutorial: u
                                    }) : null, Na(E, h, n), y === qi.Done ? null : (0, r.jsx)(D.Spinner, {
                                        className: Ca().spinner
                                    })]
                                }))
                            }
                        })
                    })]
                })
            }

            function xa(e) {
                var t = e.setSeenTutorial;
                return (0, r.jsxs)("div", {
                    className: Ca().tutorial,
                    children: [(0, r.jsx)("div", {
                        className: Ca().tutorialIcon,
                        children: (0, r.jsx)(p, {
                            width: 24,
                            height: 24
                        })
                    }), (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(D.Heading, {
                            className: Ca().tutorialHeader,
                            variant: "heading-md/semibold",
                            children: Ze.Z.Messages.UNREADS_TUTORIAL_HEADER
                        }), (0, r.jsx)(D.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: Ze.Z.Messages.UNREADS_TUTORIAL_BODY
                        }), (0, r.jsx)(D.Button, {
                            className: Ca().tutorialButton,
                            onClick: t,
                            size: D.Button.Sizes.SMALL,
                            children: Ze.Z.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function Za(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ka(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Za(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Za(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Fa(e) {
                var t = e.onOpen,
                    n = e.onClose,
                    u = e.children,
                    l = e.badgeState,
                    c = e.popoutPosition,
                    s = e.popoutAlign,
                    f = ka(o.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    h = ka(function() {
                        var e, t = (0, i.e7)([L.Z], (function() {
                                var t;
                                return null !== (e = null === (t = L.Z.settings.inbox) || void 0 === t ? void 0 : t.currentTab) && void 0 !== e ? e : w.X.UNREADS
                            })),
                            n = o.useCallback((function(e) {
                                M.hW.updateAsync("inbox", (function(t) {
                                    if (t.currentTab === e) return !1;
                                    t.currentTab = e
                                }), M.fy.FREQUENT_USER_ACTION)
                            }), []);
                        return [t, n]
                    }(), 2),
                    y = h[0],
                    b = h[1],
                    E = function(e) {
                        var t, n = (0, i.e7)([L.Z], (function() {
                                var e;
                                return null !== (t = null === (e = L.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
                            })),
                            r = o.useCallback((function() {
                                M.hW.updateAsync("inbox", (function(e) {
                                    e.viewedTutorial = !0
                                }), M.fy.INFREQUENT_USER_ACTION)
                            }), []);
                        return {
                            showTutorial: !n && e === w.X.UNREADS,
                            setSeenTutorial: r
                        }
                    }(y),
                    O = E.showTutorial,
                    v = E.setSeenTutorial,
                    m = o.useCallback((function() {
                        p(!1);
                        d && (null == n || n())
                    }), [n, d]),
                    _ = o.useCallback((function() {
                        p(!d);
                        d ? null == n || n() : null == t || t()
                    }), [n, t, d]),
                    S = o.useCallback((function() {
                        _();
                        b(w.X.UNREADS)
                    }), [b, _]);
                o.useEffect((function() {
                    x.S.subscribe(q.CkL.TOGGLE_INBOX_UNREADS_TAB, S);
                    return function() {
                        x.S.unsubscribe(q.CkL.TOGGLE_INBOX_UNREADS_TAB, S)
                    }
                }), [S]);
                var I = g.Z.useExperiment({
                        location: "46fcf8_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    P = (0, a.sv)();
                o.useEffect((function() {
                    I || y !== w.X.TODOS || b(w.X.MENTIONS)
                }));
                var T = o.useCallback((function(e) {
                    e.shiftKey || m()
                }), [m]);
                return (0, r.jsx)(D.Popout, {
                    animation: D.Popout.Animation.NONE,
                    position: c,
                    align: s,
                    autoInvert: !1,
                    shouldShow: d,
                    onRequestClose: m,
                    renderPopout: function() {
                        return (0, r.jsx)(D.Dialog, {
                            "aria-label": Ze.Z.Messages.INBOX,
                            children: y === w.X.FOR_YOU && P ? (0, r.jsx)(xn, {
                                setTab: b,
                                badgeState: l,
                                closePopout: m
                            }) : y === w.X.MENTIONS ? (0, r.jsx)(po, {
                                setTab: b,
                                onJump: T,
                                badgeState: l,
                                closePopout: m
                            }) : I && y === w.X.TODOS ? (0, r.jsx)(Ir, {
                                setTab: b,
                                onJump: T,
                                closePopout: m
                            }) : (0, r.jsx)(La, {
                                setTab: b,
                                onJump: T,
                                showTutorial: O,
                                setSeenTutorial: v,
                                closePopout: m,
                                badgeState: l
                            })
                        })
                    },
                    ignoreModalClicks: !0,
                    children: function(e, t) {
                        var n = t.isShown;
                        return u(_, n, e)
                    }
                })
            }
            var Ua = n(930674),
                Ga = n.n(Ua);

            function Ba(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Va(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ba(e, t, n[t])
                    }))
                }
                return e
            }

            function Ha(e, t) {
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

            function Ya(e) {
                var t = e.onOpen,
                    n = e.onClose,
                    o = e.className,
                    c = (0, a.sv)(),
                    s = (0, i.e7)([l.default], (function() {
                        return l.default.getCurrentUser()
                    })),
                    f = (0, i.e7)([u.ZP], (function() {
                        return !(!c || null == (null == s ? void 0 : s.id)) && u.ZP.getMentionCount(s.id, Ne.W.NOTIFICATION_CENTER) > 0
                    }));
                return (0, r.jsx)(Fa, {
                    onOpen: t,
                    onClose: n,
                    badgeState: {
                        badgeForYou: f
                    },
                    popoutPosition: "bottom",
                    popoutAlign: "right",
                    children: function(e, t, n) {
                        return (0, r.jsx)("div", {
                            className: Ga().recentsIcon,
                            children: (0, r.jsx)(h.JO, Ha(Va({}, n), {
                                className: o,
                                onClick: e,
                                icon: p,
                                "aria-label": Ze.Z.Messages.INBOX,
                                tooltip: t ? null : Ze.Z.Messages.INBOX,
                                selected: t,
                                showBadge: f,
                                children: (0, r.jsx)(j, {
                                    className: Ga().todoBadge
                                })
                            }))
                        })
                    }
                })
            }
        },
        822816: (e, t, n) => {
            "use strict";
            n.d(t, {
                SI: () => c,
                hZ: () => f
            });
            var r = n(730381),
                o = n.n(r),
                i = n(82375),
                a = n(917019),
                u = n(473419),
                l = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-05_safety_user_sentiment",
                    label: "Safety User Sentiment Feedback Eligible",
                    defaultConfig: {
                        isEligible: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Eligible",
                        config: {
                            isEligible: !0
                        }
                    }]
                }),
                c = function(e) {
                    var t;
                    if (!s(e)) return !1;
                    var n = null === (t = u.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
                        r = null != n ? i.E.toDate(n) : void 0,
                        a = null != r ? o()().diff(r, "days") : null;
                    return (null == n || null != a && a > 30) && l.getCurrentConfig({
                        location: "657a81_1"
                    }, {
                        autoTrackExposure: !0
                    }).isEligible
                },
                s = function(e) {
                    return null != e && Date.now() - e.createdAt.getTime() > 2592e6
                },
                f = function() {
                    var e = i.E.now();
                    a.hW.updateAsync("userContent", (function(t) {
                        t.safetyUserSentimentNoticeDismissedAt = e
                    }), a.fy.INFREQUENT_USER_ACTION)
                }
        },
        551856: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(874710),
                a = n(218318),
                u = n(671293),
                l = n(665783),
                c = n(379364);

            function s(e) {
                var t = e.channel,
                    n = e.closePopout,
                    s = e.onSelect,
                    f = e.navId,
                    d = e.label,
                    p = (0, i.Z)(t, "Notifications Bell"),
                    h = (0, a.Z)(t),
                    y = (0, l.B)(t);
                return (0, r.jsxs)(o.Menu, {
                    navId: f,
                    onClose: n,
                    "aria-label": d,
                    onSelect: s,
                    children: [(0, r.jsxs)(o.MenuGroup, {
                        children: [t.isForumPost() ? p : null, h]
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: (0, c.zb)().map((function(e) {
                            var n = e.setting,
                                i = e.label;
                            return (0, r.jsx)(o.MenuRadioItem, {
                                group: "thread-notifications",
                                id: "".concat(n),
                                label: i,
                                action: function() {
                                    return u.Z.setNotificationSettings(t, {
                                        flags: n
                                    })
                                },
                                checked: n === y
                            }, n)
                        }))
                    })]
                })
            }
        },
        686874: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => d
            });
            var r = n(468811),
                o = n.n(r),
                i = n(306472),
                a = n(652591),
                u = n(2590);

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
            var s = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.loadId = o().v4();
                        this.appUIViewed = !1
                    }
                    var t = e.prototype;
                    t.trackEvent = function(e, t) {
                        var n = this,
                            r = Date.now();
                        requestIdleCallback((function() {
                            a.default.track(e, c(function(e) {
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
                            }({}, function() {
                                var e, t, n, r = "--campaign-id=",
                                    o = null !== (n = null === i.Z || void 0 === i.Z || null === (e = i.Z.processUtils) || void 0 === e || null === (t = e.getMainArgvSync) || void 0 === t ? void 0 : t.call(e)) && void 0 !== n ? n : [],
                                    a = !0,
                                    u = !1,
                                    l = void 0;
                                try {
                                    for (var c, s = o[Symbol.iterator](); !(a = (c = s.next()).done); a = !0) {
                                        var f = c.value;
                                        if (f.startsWith(r)) return {
                                            referrer: f.substr(r.length)
                                        }
                                    }
                                } catch (e) {
                                    u = !0;
                                    l = e
                                } finally {
                                    try {
                                        a || null == s.return || s.return()
                                    } finally {
                                        if (u) throw l
                                    }
                                }
                                return {}
                            }(), function() {
                                var e = !1,
                                    t = {
                                        total_compressed_byte_size: 0,
                                        total_uncompressed_byte_size: 0,
                                        total_transfer_byte_size: 0,
                                        js_compressed_byte_size: 0,
                                        js_uncompressed_byte_size: 0,
                                        js_transfer_byte_size: 0,
                                        css_compressed_byte_size: 0,
                                        css_uncompressed_byte_size: 0,
                                        css_transfer_byte_size: 0
                                    };
                                null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach((function(n) {
                                    var r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                        o = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        i = n.transferSize;
                                    if (null != o && null != r) {
                                        e = !0;
                                        t.total_compressed_byte_size += r;
                                        t.total_uncompressed_byte_size += o;
                                        null != i && (t.total_uncompressed_byte_size += i);
                                        if ("resource" === n.entryType) {
                                            if ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/)) {
                                                t.js_compressed_byte_size += r;
                                                t.js_uncompressed_byte_size += o;
                                                null != i && (t.js_uncompressed_byte_size += i)
                                            }
                                            if ("link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/)) {
                                                t.css_compressed_byte_size += r;
                                                t.css_uncompressed_byte_size += o;
                                                null != i && (t.css_uncompressed_byte_size += i)
                                            }
                                        }
                                    }
                                }));
                                return e ? t : {}
                            }()), {
                                load_id: n.loadId,
                                screen_name: t,
                                duration_ms_since_app_opened: r - window.GLOBAL_ENV.HTML_TIMESTAMP
                            }))
                        }))
                    };
                    t.trackAppUIViewed = function(e) {
                        if (!this.appUIViewed) {
                            this.trackEvent(u.rMx.APP_UI_VIEWED, e);
                            this.appUIViewed = !0
                        }
                    };
                    return e
                }(),
                f = new s;

            function d(e) {
                f.trackAppUIViewed(e)
            }
        },
        13066: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                o = n(744564),
                i = n(61209),
                a = n(476020),
                u = n(352980);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    return s(this, n)
                }
            }
            var h = null;
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(i.Z, a.Z, u.Z)
                };
                r.getApps = function() {
                    return h
                };
                r.__getLocalVars = function() {
                    return {
                        apps: h
                    }
                };
                return n
            }(r.ZP.Store);
            y.displayName = "AuthorizedAppsStore";
            const b = new y(o.Z, {
                USER_AUTHORIZED_APPS_UPDATE: function(e) {
                    h = e.apps
                }
            })
        },
        40134: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(202351),
                o = n(744564),
                i = n(102921),
                a = n(664625),
                u = n(840922);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    return s(this, n)
                }
            }
            var h = 15552e6,
                y = !1;
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.Z, a.default)
                };
                r.isEligible = function() {
                    return y
                };
                r.__getLocalVars = function() {
                    return {
                        MINIMUM_FRIENDS: 10,
                        MINIMUM_AGE: h,
                        isEligible: y
                    }
                };
                return n
            }(r.ZP.Store);
            b.displayName = "PremiumPromoStore";
            const E = new b(o.Z, {
                CONNECTION_OPEN: function() {
                    return y !== (y = u.Z.getFriendIDs().length >= 10 && i.Z.extractTimestamp(a.default.getId()) < Date.now() - h)
                }
            })
        },
        219264: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(630631),
                i = n(744564),
                a = n(481117);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = "MaintenanceStore",
                h = null,
                y = null,
                b = null;
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    b = o.Z.get(p)
                };
                r.getIncident = function() {
                    return h
                };
                r.getScheduledMaintenance = function() {
                    return null != y && y.id !== b ? y : null
                };
                r.__getLocalVars = function() {
                    return {
                        MAINTENANCE_KEY: p,
                        incident: h,
                        scheduledMaintenance: y,
                        scheduledMaintenanceAck: b
                    }
                };
                return n
            }(r.ZP.Store);
            E.displayName = "MaintenanceStore";
            const O = new E(i.Z, {
                CONNECTION_OPEN: function() {
                    h = null;
                    a.Z.checkScheduledMaintenances()
                },
                STATUS_PAGE_INCIDENT: function(e) {
                    h = e.incident
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
                    y = e.maintenance
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
                    if (null == y) return !1;
                    b = y.id;
                    o.Z.set(p, b)
                }
            })
        },
        688013: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R
            });
            n(730381);
            var r = n(940060),
                o = n(202351),
                i = n(630631),
                a = n(744564),
                u = n(762572),
                l = n(27851),
                c = n(567403),
                s = n(682776),
                f = n(464187),
                d = n(473903),
                p = n(2590);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function b(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var O, v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    return b(this, n)
                }
            }
            var m, _ = {
                    hiddenSurveys: {},
                    validSurveys: {},
                    currentSurvey: null,
                    surveyOverride: null,
                    iosIsPushNotificationClicked: !1,
                    iosIsInviteShown: !1,
                    iosFirstRunDate: null !== (O = i.Z.get(p.z7k)) && void 0 !== O ? O : null,
                    lastFetched: null
                },
                S = _,
                I = 864e5;
            ! function(e) {
                e.IS_OWNER = "is_owner";
                e.IS_ADMIN = "is_admin";
                e.IS_COMMUNITY = "is_community";
                e.GUILD_SIZE = "guild_size";
                e.IS_HUB = "is_hub";
                e.IS_VIEWING = "is_viewing";
                e.GUILD_PERMISSIONS = "guild_permissions";
                e.GUILD_SIZE_ALL = "guild_size_all"
            }(m || (m = {}));
            var P = new Set(Object.values(m));

            function T(e) {
                var t = e.guild_requirements,
                    n = void 0 === t ? [] : t,
                    o = e.guild_size,
                    i = void 0 === o ? [null, null] : o,
                    a = e.guild_permissions,
                    u = void 0 === a ? [] : a;
                if (0 === n.length) return !0;
                var h = !0,
                    y = !1,
                    b = void 0;
                try {
                    for (var E, O = n[Symbol.iterator](); !(h = (E = O.next()).done); h = !0) {
                        var v = E.value;
                        if (!P.has(v)) return !1
                    }
                } catch (e) {
                    y = !0;
                    b = e
                } finally {
                    try {
                        h || null == O.return || O.return()
                    } finally {
                        if (y) throw b
                    }
                }
                var g = n.includes(m.GUILD_SIZE_ALL),
                    _ = !0,
                    I = Object.values(c.Z.getGuilds()),
                    T = !0,
                    N = !1,
                    A = void 0;
                try {
                    for (var C, R = I[Symbol.iterator](); !(T = (C = R.next()).done); T = !0) {
                        var j = C.value;
                        if (g || n.includes(m.GUILD_SIZE)) {
                            var w = l.Z.getMemberCount(j.id);
                            if (null == w) {
                                _ = !1;
                                continue
                            }
                            if (null != i[0] && w < i[0]) {
                                _ = !1;
                                continue
                            }
                            if (null != i[1] && w > i[1]) {
                                _ = !1;
                                continue
                            }
                        }
                        if ((!n.includes(m.IS_COMMUNITY) || j.hasFeature(p.oNc.COMMUNITY)) && (!n.includes(m.IS_HUB) || j.hasFeature(p.oNc.HUB))) {
                            if (n.includes(m.GUILD_PERMISSIONS)) {
                                if (0 === u.length) continue;
                                var D = !1,
                                    M = !0,
                                    L = !1,
                                    x = void 0;
                                try {
                                    for (var Z, k = u[Symbol.iterator](); !(M = (Z = k.next()).done); M = !0) {
                                        var F = Z.value;
                                        try {
                                            var U = r.Z.deserialize(F);
                                            if (s.Z.can(U, j)) {
                                                D = !0;
                                                break
                                            }
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    L = !0;
                                    x = e
                                } finally {
                                    try {
                                        M || null == k.return || k.return()
                                    } finally {
                                        if (L) throw x
                                    }
                                }
                                if (!D) continue
                            }
                            var G = d.default.getCurrentUser(),
                                B = (null == G ? void 0 : G.id) === j.ownerId,
                                V = s.Z.can(p.Plq.ADMINISTRATOR, j);
                            if ((!n.includes(m.IS_OWNER) || B) && (!n.includes(m.IS_ADMIN) || V)) {
                                var H;
                                S.validSurveys = null !== (H = S.validSurveys) && void 0 !== H ? H : {};
                                null == S.validSurveys[e.key] && (S.validSurveys[e.key] = e);
                                var Y = f.Z.getGuildId(),
                                    z = null != Y && Y === j.id;
                                if ((!n.includes(m.IS_VIEWING) || z) && !g) return !0
                            }
                        }
                    }
                } catch (e) {
                    N = !0;
                    A = e
                } finally {
                    try {
                        T || null == R.return || R.return()
                    } finally {
                        if (N) throw A
                    }
                }
                return !(!g || !_)
            }

            function N(e) {
                var t = e.survey,
                    n = S.hiddenSurveys;
                S.iosIsPushNotificationClicked, S.iosIsInviteShown;
                S.lastFetched = Date.now();
                if (null != t && null == n[t.key]) {
                    if (!T(t)) return;
                    0;
                    S.currentSurvey = t
                }
            }

            function A() {
                if (null != S.currentSurvey && function(e) {
                        if (T(e)) return !0;
                        S.currentSurvey = null;
                        return !1
                    }(S.currentSurvey)) return !1;
                ! function() {
                    var e;
                    S.validSurveys = null !== (e = S.validSurveys) && void 0 !== e ? e : {};
                    var t = Object.values(S.validSurveys)[0];
                    if (null != t && T(t)) N({
                        type: "SURVEY_FETCHED",
                        survey: t
                    });
                    else {
                        if (null == S.currentSurvey) return !1;
                        S.currentSurvey = null
                    }
                }()
            }
            var C = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    S = null != e ? e : _;
                    this.syncWith([f.Z], A)
                };
                r.getState = function() {
                    return S
                };
                r.getCurrentSurvey = function() {
                    return S.currentSurvey
                };
                r.getSurveyOverride = function() {
                    return S.surveyOverride
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: _,
                        state: S,
                        REFETCH_INTERVAL: I,
                        MINIMUM_INSTALL_DAYS: 7,
                        GuildRequirements: m,
                        IMPLEMENTED_GUILD_REQUIREMENTS: P
                    }
                };
                return n
            }(o.ZP.PersistedStore);
            C.displayName = "SurveyStore";
            C.persistKey = "SurveyStore";
            const R = new C(a.Z, {
                CONNECTION_OPEN: function() {
                    var e;
                    null != S.lastFetched && Date.now() - (null !== (e = S.lastFetched) && void 0 !== e ? e : 0) < I && null == S.surveyOverride || (0, u.wk)(S.surveyOverride)
                },
                SURVEY_FETCHED: N,
                SURVEY_HIDE: function(e) {
                    var t, n = e.key;
                    S.hiddenSurveys[n] = !0;
                    S.currentSurvey = null;
                    S.validSurveys = null !== (t = S.validSurveys) && void 0 !== t ? t : {};
                    delete S.validSurveys[n]
                },
                SURVEY_OVERRIDE: function(e) {
                    var t = e.id;
                    S.surveyOverride = t;
                    null != t && delete S.hiddenSurveys[t];
                    (0, u.wk)(S.surveyOverride)
                },
                PUSH_NOTIFICATION_CLICK: function() {
                    S.iosIsPushNotificationClicked = !0
                },
                DISPLAYED_INVITE_SHOW: function() {
                    S.iosIsInviteShown = !0
                },
                LOGOUT: function() {
                    S.hiddenSurveys = {}
                }
            })
        },
        984237: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
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
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = null,
                d = function(e) {
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
                    var t = s(n);

                    function n() {
                        i(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.hasAction = function() {
                        return null != f
                    };
                    r.getAction = function() {
                        return f
                    };
                    r.__getLocalVars = function() {
                        return {
                            requiredAction: f
                        }
                    };
                    return n
                }(r.ZP.Store);
            d.displayName = "UserRequiredActionStore";

            function p(e) {
                f = e.requiredAction
            }
            const h = new d(o.Z, {
                CONNECTION_OPEN: p,
                USER_REQUIRED_ACTION_UPDATE: p
            })
        },
        364581: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                o = n(744564),
                i = n(2590);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var d = null,
                p = [i.ff_.REDISTRIBUTABLE_INSTALL_FAILED, i.ff_.POST_INSTALL_FAILED, i.ff_.POST_INSTALL_CANCELLED],
                h = [i.ff_.APPLICATION_NOT_FOUND, i.ff_.APPLICATION_LOAD_FAILED, i.ff_.INTERRUPTED, i.ff_.DESERIALIZATION_FAILED];
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getLastError = function() {
                    return d
                };
                r.__getLocalVars = function() {
                    return {
                        lastError: d,
                        LAUNCH_SETUP_ERROR_CODES: p,
                        IGNORABLE_ERROR_CODES: h
                    }
                };
                return n
            }(r.ZP.Store);
            y.displayName = "DispatchApplicationErrorStore";
            const b = new y(o.Z, {
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    null != d && null != d.code && p.includes(d.code) && (d = null)
                },
                DISPATCH_APPLICATION_ERROR: function(e) {
                    var t = e.error;
                    d = null != t.code && h.includes(t.code) ? null : t
                }
            })
        },
        110680: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _t,
                m: () => it
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                a = n(780964),
                u = n(418705),
                l = n(630631),
                c = n(744564),
                s = n(265688),
                f = n(603927),
                d = n(683323),
                p = n(896490),
                h = n(99827),
                y = n(293078),
                b = n(264076),
                E = n(652555);
            const O = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_guild_usage_survey",
                label: "Guild Usage Survey",
                defaultConfig: {
                    showSurvey: !1
                },
                treatments: [{
                    id: 1,
                    label: "show survey nag bar",
                    config: {
                        showSurvey: !0
                    }
                }]
            });
            var v = n(827289),
                g = n(46396),
                m = n(36058),
                _ = n(489684),
                S = n(883650),
                I = n(688891),
                P = n(861426),
                T = n(944522),
                N = n(50034),
                A = n(54709),
                C = n(473903),
                R = n(116094);

            function j(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function w(e) {
                w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return w(e)
            }

            function D(e, t) {
                return !t || "object" !== L(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function M(e, t) {
                M = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return M(e, t)
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function x(e) {
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
                    var n, r = w(e);
                    if (t) {
                        var o = w(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return D(this, n)
                }
            }
            var Z = !1;
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
                    t && M(e, t)
                }(n, e);
                var t = x(n);

                function n() {
                    j(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.shouldShowReactivateNotice = function() {
                    var e = C.default.getCurrentUser();
                    return !(0, R.I5)(e) && Z
                };
                r.__getLocalVars = function() {
                    return {
                        shouldShowPostChurnNotice: Z
                    }
                };
                return n
            }(i.ZP.Store);
            k.displayName = "SubscriptionRemindersStore";
            const F = new k(c.Z, {
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
                    var t = e.subscription;
                    if (null != t) {
                        var n, r = A.Z.createFromServer(t);
                        if (null == (0, R.Af)(r) || null == (null === (n = r.metadata) || void 0 === n ? void 0 : n.ended_at)) return;
                        var i = o()(r.metadata.ended_at);
                        o()().isBetween(i.clone().add(4, "days"), i.clone().add(11, "days")) && (Z = !0)
                    }
                }
            });
            var U = n(803548),
                G = n(188435),
                B = n(822816),
                V = n(73727),
                H = n(525261),
                Y = n(473419),
                z = n(664625),
                Q = n(13066),
                K = n(912735),
                W = n(61209),
                q = n(629223),
                X = n(496486),
                J = n.n(X),
                $ = n(595138),
                ee = n(875700),
                te = n(315804),
                ne = n(959207),
                re = n(671723),
                oe = n(151367),
                ie = n(746974),
                ae = n(2590);

            function ue(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function le(e) {
                le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return le(e)
            }

            function ce(e, t) {
                return !t || "object" !== fe(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function se(e, t) {
                se = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return se(e, t)
            }
            var fe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function de(e) {
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
                    var n, r = le(e);
                    if (t) {
                        var o = le(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ce(this, n)
                }
            }
            var pe = "DetectedOffPlatformPremiumPerksStore",
                he = {},
                ye = {},
                be = [];

            function Ee() {
                var e = !1,
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = J().values(ye)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value,
                            u = a.skuId,
                            l = a.applicationId;
                        if (!be.includes(u)) {
                            var c = ne.Z.getGame(l);
                            if (null != c) {
                                var s = ie.Z.get(u);
                                if (null != s)
                                    if (oe.Z.applicationIdsFetching.has(c.id) || oe.Z.isEntitledToSku(C.default.getCurrentUser(), u, c.id, c.id) || !s.available) {
                                        if (null != he[u]) {
                                            delete he[u];
                                            e = !0
                                        }
                                    } else {
                                        he[u] = {
                                            skuId: u,
                                            applicationId: l
                                        };
                                        e = !0
                                    }
                                else ie.Z.isFetching(u) || ie.Z.didFetchingSkuFail(u) || te.jU(c.id, u)
                            } else ne.Z.isFetching(l) || ne.Z.didFetchingFail(l) || ee.Z.fetchApplication(l)
                        }
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                return e
            }
            var Oe = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && se(e, t)
                }(n, e);
                var t = de(n);

                function n() {
                    ue(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(re.ZP, ie.Z, oe.Z);
                    var e;
                    be = null !== (e = l.Z.get(pe)) && void 0 !== e ? e : be
                };
                r.getDetectedOffPlatformPremiumPerks = function() {
                    return J().values(he)
                };
                r.__getLocalVars = function() {
                    return {
                        STORAGE_KEY: pe,
                        detectedOffPlatformPremiumPerks: he,
                        seenOffPlatformPerks: ye,
                        dismissedOffPlatformPremiumPerkSKUs: be
                    }
                };
                return n
            }(i.ZP.Store);
            Oe.displayName = "DetectedOffPlatformPremiumPerksStore";
            const ve = new Oe(c.Z, {
                LOGOUT: function() {
                    he = {};
                    ye = {}
                },
                SKU_FETCH_SUCCESS: Ee,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: Ee,
                ENTITLEMENT_CREATE: Ee,
                APPLICATION_FETCH_SUCCESS: Ee,
                DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
                    var t = e.skuId;
                    delete he[t];
                    if (be.includes(t)) return !1;
                    be.push(t);
                    l.Z.set(pe, be)
                },
                RUNNING_GAMES_CHANGE: function() {
                    var e = !1,
                        t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = re.ZP.getRunningGames()[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value,
                                u = a.id,
                                l = a.distributor;
                            if (null != u && l !== ae.GQo.DISCORD) {
                                var c = !0,
                                    s = !1,
                                    f = void 0;
                                try {
                                    for (var d, p = ae.Lg6[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                        var h = d.value,
                                            y = h.skuId,
                                            b = h.applicationId;
                                        if (b === u && (!be.includes(y) && null == ye[y])) {
                                            oe.Z.applicationIdsFetched.has(b) || oe.Z.applicationIdsFetching.has(b) || null != oe.Z.getForSku(y) || $.yD(b);
                                            ye[y] = {
                                                skuId: y,
                                                applicationId: b
                                            };
                                            e = !0
                                        }
                                    }
                                } catch (e) {
                                    s = !0;
                                    f = e
                                } finally {
                                    try {
                                        c || null == p.return || p.return()
                                    } finally {
                                        if (s) throw f
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    e && Ee();
                    return e
                }
            });
            var ge = n(21372),
                me = n(567403),
                _e = n(525077),
                Se = n(288263),
                Ie = n(682776),
                Pe = n(40134),
                Te = n(563367),
                Ne = n(715107),
                Ae = n(464187),
                Ce = n(219264),
                Re = n(793461),
                je = n(688013),
                we = n(984237),
                De = n(407561),
                Me = n(615796),
                Le = n(711531),
                xe = n(536392),
                Ze = n(732054),
                ke = n(325213),
                Fe = n(120415),
                Ue = n(364581),
                Ge = n(448200),
                Be = n(454708),
                Ve = n(199790),
                He = n(483255),
                Ye = n(203600),
                ze = n(520453),
                Qe = n(36256);

            function Ke(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function We(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function qe(e) {
                qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return qe(e)
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        We(e, t, n[t])
                    }))
                }
                return e
            }

            function Je(e, t) {
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

            function $e(e, t) {
                return !t || "object" !== nt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function et(e, t) {
                et = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return et(e, t)
            }
            var tt, nt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function rt(e) {
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
                    var n, r = qe(e);
                    if (t) {
                        var o = qe(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return $e(this, n)
                }
            }
            var ot, it = (We(tt = {}, ae.kVF.LOCALIZED_PRICING, u.z$.NAGBAR_NOTICE_LOCALIZED_PRICING), We(tt, ae.kVF.DOWNLOAD_NAG, u.z$.NAGBAR_NOTICE_DOWNLOAD), We(tt, ae.kVF.CONNECT_SPOTIFY, u.z$.NAGBAR_NOTICE_CONNECT_SPOTIFY), We(tt, ae.kVF.CONNECT_PLAYSTATION, u.z$.NAGBAR_NOTICE_CONNECT_PLAYSTATION), We(tt, ae.kVF.MFA_SMS_BACKUP, u.z$.NAGBAR_NOTICE_MFA_SMS_BACKUP), We(tt, ae.kVF.PREMIUM_TIER_2_TRIAL_ENDING, u.z$.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), We(tt, ae.kVF.PREMIUM_REACTIVATE, u.z$.NAGBAR_NOTICE_PREMIUM_REACTIVATE), We(tt, ae.kVF.DROPS_GO_LIVE_BANNER, u.z$.QUEST_2_GO_LIVE_BANNER), We(tt, ae.kVF.DROPS_ENDED_INCOMPLETE, u.z$.QUEST_2_ENDED_INCOMPLETE),
                    We(tt, ae.kVF.BOUNCED_EMAIL_DETECTED, u.z$.NAGBAR_BOUNCED_EMAIL_NOTICE), We(tt, ae.kVF.ACTIVATE_SERVER_SUBSCRIPTION, u.z$.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION), We(tt, ae.kVF.PREMIUM_TIER_0_TRIAL_ENDING, u.z$.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING), We(tt, ae.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR, u.z$.GUILD_ONBOARDING_UPSELL_NAGBAR), We(tt, ae.kVF.POMELO_ELIGIBLE, u.z$.NAGBAR_NOTICE_POMELO), tt),
                at = (We(ot = {}, ae.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, "hideDetectedOffPlatformPremiumPerkUpsell"), We(ot, ae.kVF.PREMIUM_UNCANCEL, "hideUncancelReminder"), We(ot, ae.kVF.PREMIUM_MISSING_PAYMENT, "hideMissingPaymentReminder"), We(ot, ae.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, "hidePastDueMissingPaymentReminder"), We(ot, ae.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, "hidePastDueInvalidPaymentReminder"), We(ot, ae.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, "hidePastDueOneTimePaymentReminder"), We(ot, ae.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, "hideAutoModerationMentionRaidDetectionNotice"),
                    We(ot, ae.kVF.GUILD_RAID_NOTIFICATION, "hideGuildRaidDetectionNotice"), We(ot, ae.kVF.SERVER_USAGE_SURVEY, "hideServerUsageSurvey"), ot),
                ut = new Set([ae.kVF.NO_INPUT_DETECTED, ae.kVF.STREAMER_MODE, ae.kVF.VIDEO_UNSUPPORTED_BROWSER, ae.kVF.SPOTIFY_AUTO_PAUSED, ae.kVF.DISPATCH_ERROR, ae.kVF.DISPATCH_ERROR, ae.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]),
                lt = {},
                ct = Object.freeze({
                    id: null,
                    message: null,
                    buttonText: null,
                    callback: void 0,
                    metadata: null
                }),
                st = null;

            function ft(e) {
                return at[e] + "-untilAtLeast"
            }

            function dt(e, t, n) {
                if (null != e) {
                    var r = at[e];
                    null == r || t || l.Z.set(r, !0);
                    ut.has(e) && (lt[e] = !0);
                    null != n && null != r ? function(e, t) {
                        l.Z.set(ft(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
                    }(e, n) : function(e) {
                        l.Z.remove(ft(e))
                    }(e)
                }
            }

            function pt(e) {
                if (null == e) return !1;
                var t = it[e];
                if (null != t) return (0, p.un)(t);
                var n = at[e];
                if (null != n) {
                    var r = function(e) {
                        var t = l.Z.get(ft(e));
                        return null != t ? o()(t) : null
                    }(e);
                    if (null != r) return null == r ? void 0 : r.isAfter(o()())
                }
                var i = lt[e];
                return !!i || (null != n && "" !== n ? l.Z.get(n) : !!ut.has(e) && i)
            }
            var ht, yt, bt = [ae.kVF.QUARANTINED, ae.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ae.kVF.VIEWING_ROLES, ae.kVF.INVITED_TO_SPEAK, ae.kVF.LURKING_GUILD, ae.kVF.VOICE_DISABLED, ae.kVF.NO_INPUT_DETECTED, ae.kVF.HARDWARE_MUTE, ae.kVF.H264_DISABLED, ae.kVF.DISPATCH_ERROR, ae.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ae.kVF.SPOTIFY_AUTO_PAUSED, ae.kVF.DROPS_PROGRESS_INTERRUPTION, ae.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, ae.kVF.GUILD_RAID_NOTIFICATION, ae.kVF.UNCLAIMED_ACCOUNT, ae.kVF.POMELO_ELIGIBLE, ae.kVF.PENDING_MEMBER, ae.kVF.OUTBOUND_PROMOTION, ae.kVF.CORRUPT_INSTALLATION, ae.kVF.VIDEO_UNSUPPORTED_BROWSER, ae.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ae.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ae.kVF.STREAMER_MODE, ae.kVF.SCHEDULED_MAINTENANCE, ae.kVF.BOUNCED_EMAIL_DETECTED, ae.kVF.UNVERIFIED_ACCOUNT, ae.kVF.PREMIUM_TIER_2_TRIAL_ENDING, ae.kVF.PREMIUM_TIER_0_TRIAL_ENDING, ae.kVF.PREMIUM_UNCANCEL, ae.kVF.PREMIUM_MISSING_PAYMENT, ae.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, ae.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, ae.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ae.kVF.PREMIUM_REACTIVATE, ae.kVF.ACTIVATE_SERVER_SUBSCRIPTION, ae.kVF.MFA_SMS_BACKUP, ae.kVF.APPLICATION_TEST_MODE, ae.kVF.LOCALIZED_PRICING, ae.kVF.DOWNLOAD_NAG, ae.kVF.CONNECT_SPOTIFY, ae.kVF.CONNECT_PLAYSTATION, ae.kVF.SURVEY, ae.kVF.SERVER_USAGE_SURVEY, ae.kVF.SAFETY_USER_SENTIMENT_NAGBAR, ae.kVF.DROPS_GO_LIVE_BANNER, ae.kVF.DROPS_ENDED_INCOMPLETE, ae.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR],
                Et = [ae.kVF.QUARANTINED, ae.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ae.kVF.VIEWING_ROLES, ae.kVF.INVITED_TO_SPEAK, ae.kVF.LURKING_GUILD, ae.kVF.VOICE_DISABLED, ae.kVF.NO_INPUT_DETECTED, ae.kVF.HARDWARE_MUTE, ae.kVF.H264_DISABLED, ae.kVF.DISPATCH_ERROR, ae.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ae.kVF.SPOTIFY_AUTO_PAUSED, ae.kVF.PENDING_MEMBER, ae.kVF.STREAMER_MODE, ae.kVF.SCHEDULED_MAINTENANCE],
                Ot = (We(yt = {}, ae.kVF.GUILD_RAID_NOTIFICATION, {
                        predicate: function() {
                            return (0, v.g)().show && !pt(ae.kVF.GUILD_RAID_NOTIFICATION)
                        },
                        metadata: function() {
                            return {
                                dismissUntil: o()().add(3, "hours").toDate()
                            }
                        }
                    }), We(yt, ae.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, {
                        predicate: function(e) {
                            var t = e.currentUser,
                                n = e.selectedGuildId;
                            if (null == n) return !1;
                            var r = ge.ZP.getMember(n, t.id);
                            return null != r && !r.isPending && (0, m.EY)(r)
                        }
                    }), We(yt, ae.kVF.QUARANTINED, {
                        predicate: function(e) {
                            return e.currentUser.hasFlag(ae.xW$.QUARANTINED)
                        }
                    }), We(yt, ae.kVF.VIEWING_ROLES, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return P.Z.isViewingRoles(t)
                        }
                    }), We(yt, ae.kVF.INVITED_TO_SPEAK, {
                        predicate: function(e) {
                            var t = e.voiceState;
                            return (0, H.gf)(t) === H.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                        }
                    }), We(yt, ae.kVF.LURKING_GUILD, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return null != t && T.Z.isLurking(t)
                        }
                    }), We(yt, ae.kVF.VOICE_DISABLED, {
                        predicate: function() {
                            return null != Te.Z.getRemoteDisconnectVoiceChannelId()
                        }
                    }), We(yt, ae.kVF.NO_INPUT_DETECTED, {
                        predicate: function(e) {
                            var t = e.voiceChannelId,
                                n = e.voiceState,
                                r = W.Z.getChannel(t),
                                o = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                            return !1 === _e.Z.getInputDetected() && !o
                        }
                    }), We(yt, ae.kVF.H264_DISABLED, {
                        predicate: function(e) {
                            var t = e.voiceChannelId,
                                n = W.Z.getChannel(t);
                            return !_e.Z.getOpenH264() && null != t && De.Z.hasVideo(t) && null != n && n.isGuildStageVoice()
                        }
                    }), We(yt, ae.kVF.HARDWARE_MUTE, {
                        predicate: function() {
                            return Te.Z.isConnected() && _e.Z.isHardwareMute()
                        },
                        metadata: function() {
                            var e = _e.Z.getInputDeviceId(),
                                t = K.Z.getVendor(e),
                                n = K.Z.getModel(e);
                            if (null != t && null != n) return {
                                vendor: t,
                                model: n
                            }
                        }
                    }), We(yt, ae.kVF.DISPATCH_ERROR, {
                        predicate: function() {
                            return null != Ue.Z.getLastError()
                        },
                        metadata: function() {
                            return {
                                error: Ue.Z.getLastError()
                            }
                        }
                    }), We(yt, ae.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, {
                        predicate: function() {
                            return null != Ge.Z.getLastProgress()
                        },
                        metadata: function() {
                            return Ge.Z.getLastProgress()
                        }
                    }), We(yt, ae.kVF.SPOTIFY_AUTO_PAUSED, {
                        predicate: function() {
                            return V.Z.wasAutoPaused()
                        }
                    }),
                    We(yt, ae.kVF.UNCLAIMED_ACCOUNT, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null != t && !t.isClaimed()
                        }
                    }), We(yt, ae.kVF.PENDING_MEMBER, {
                        predicate: function(e) {
                            var t, n, r = e.selectedGuildId,
                                o = e.currentUser;
                            return null !== (ht = null != r && null != o && !(null === (t = me.Z.getGuild(r)) || void 0 === t ? void 0 : t.hasFeature(ae.oNc.GUILD_ONBOARDING)) && (null === (n = ge.ZP.getMember(r, o.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== ht && ht
                        }
                    }), We(yt, ae.kVF.OUTBOUND_PROMOTION, {
                        predicate: function() {
                            return (0, U.tq)()
                        }
                    }), We(yt, ae.kVF.CORRUPT_INSTALLATION, {
                        predicate: function() {
                            return Fe.FB && (!a.Z.supported() || Be.Z.isCorruptInstallation())
                        }
                    }), We(yt, ae.kVF.VIDEO_UNSUPPORTED_BROWSER, {
                        predicate: function(e) {
                            var t = e.voiceChannelId;
                            return null != t && De.Z.hasVideo(t) && !_e.Z.supports(Qe.AN.VIDEO) && !pt(ae.kVF.VIDEO_UNSUPPORTED_BROWSER)
                        }
                    }), We(yt, ae.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return R.ZP.canRedeemPremiumPerks(t) && ve.getDetectedOffPlatformPremiumPerks().length > 0
                        },
                        metadata: function() {
                            return ve.getDetectedOffPlatformPremiumPerks()[0]
                        }
                    }), We(yt, ae.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, {
                        predicate: function() {
                            return !pt(ae.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ve.getDetectedOffPlatformPremiumPerks().length > 0
                        },
                        metadata: function() {
                            return ve.getDetectedOffPlatformPremiumPerks()[0]
                        }
                    }), We(yt, ae.kVF.STREAMER_MODE, {
                        predicate: function() {
                            return Re.Z.enabled
                        }
                    }), We(yt, ae.kVF.DOWNLOAD_NAG, {
                        predicate: function() {
                            return !Fe.FB && !pt(ae.kVF.DOWNLOAD_NAG)
                        }
                    }), We(yt, ae.kVF.SCHEDULED_MAINTENANCE, {
                        predicate: function() {
                            return null != Ce.Z.getScheduledMaintenance()
                        },
                        metadata: function() {
                            var e = Ce.Z.getScheduledMaintenance();
                            if (null != e) return {
                                id: e.id,
                                start: new Date(e.scheduled_for),
                                end: new Date(e.scheduled_until)
                            }
                        }
                    }), We(yt, ae.kVF.SURVEY, {
                        predicate: function() {
                            return null != je.Z.getCurrentSurvey()
                        },
                        metadata: function() {
                            return je.Z.getCurrentSurvey()
                        }
                    }), We(yt, ae.kVF.SERVER_USAGE_SURVEY, {
                        predicate: function(e) {
                            return null != e.selectedGuildId && O.getCurrentConfig({
                                location: "notice_store"
                            }).showSurvey && !pt(ae.kVF.SERVER_USAGE_SURVEY)
                        },
                        metadata: function(e) {
                            return {
                                selectedGuildId: e.selectedGuildId,
                                currentUser: e.currentUser
                            }
                        }
                    }), We(yt, ae.kVF.UNVERIFIED_ACCOUNT, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null != (null == t ? void 0 : t.email) && !t.verified
                        }
                    }), We(yt, ae.kVF.BOUNCED_EMAIL_DETECTED, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null == t ? void 0 : t.hasBouncedEmail
                        }
                    }), We(yt, ae.kVF.CONNECT_SPOTIFY, {
                        predicate: function() {
                            return !V.Z.hasConnectedAccount() && re.ZP.isObservedAppRunning(s.Z.get(ae.ABu.SPOTIFY).name) && !pt(ae.kVF.CONNECT_SPOTIFY)
                        }
                    }), We(yt, ae.kVF.CONNECT_PLAYSTATION, {
                        predicate: function() {
                            return q.Z.isSuggestedAccountType(ae.ABu.PLAYSTATION) && null == q.Z.getAccount(null, ae.ABu.PLAYSTATION) && !pt(ae.kVF.CONNECT_PLAYSTATION)
                        }
                    }), We(yt, ae.kVF.PREMIUM_TIER_2_TRIAL_ENDING, {
                        predicate: function() {
                            for (var e in Ye.nG) {
                                var t, n = Ze.Z.getUserTrialOffer(Ye.nG[e].id);
                                if (null != n && (null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Ye.Si.TIER_2 && null != n.expires_at && Date.parse(n.expires_at) < Date.now() + Ye.ff && !pt(ae.kVF.PREMIUM_TIER_2_TRIAL_ENDING)) return !0
                            }
                            return !1
                        }
                    }), We(yt, ae.kVF.PREMIUM_TIER_0_TRIAL_ENDING, {
                        predicate: function() {
                            for (var e in Ye.nG) {
                                var t, n = Ze.Z.getUserTrialOffer(Ye.nG[e].id);
                                if (null != n && (null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Ye.Si.TIER_0 && null != n.expires_at && Date.parse(n.expires_at) < Date.now() + Ye.ff && !pt(ae.kVF.PREMIUM_TIER_0_TRIAL_ENDING)) return !0
                            }
                            return !1
                        }
                    }), We(yt, ae.kVF.PREMIUM_UNCANCEL, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = null != (null == t ? void 0 : t.canceledAt) && (null == t ? void 0 : t.status) === ae.O0b.CANCELED && o()().diff(o()(t.canceledAt), "days") <= 1,
                                a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                u = null != t && t.status === ae.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0,
                                    R.M5)(n, Ye.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !pt(ae.kVF.PREMIUM_UNCANCEL) && u
                        },
                        metadata: function(e) {
                            var t, n = e.premiumSubscription,
                                r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = null != n ? null === (t = (0, R.Af)(n)) || void 0 === t ? void 0 : t.planId : null;
                            return {
                                daysLeft: r,
                                premiumType: null != i ? R.ZP.getPremiumType(i) : null,
                                premiumSubscription: n
                            }
                        }
                    }), We(yt, ae.kVF.PREMIUM_MISSING_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = (null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf("day"), "days") : 0) > 14 ? 7 : 2,
                                a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                u = oe.Z.applicationIdsFetched.has(Ye.RQ),
                                l = oe.Z.getForApplication(Ye.RQ),
                                c = null != t ? (0, R.Af)(t) : null,
                                s = null != c ? R.ZP.getSkuIdForPlan(c.planId) : null,
                                f = null != l && null != c && Array.from(l).filter((function(e) {
                                    var t = e.skuId;
                                    return !e.consumed && t === s
                                })).length > 0,
                                d = null != t && r <= i && r >= 0 && t.status !== ae.O0b.PAST_DUE && !a && u && !f && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !pt(ae.kVF.PREMIUM_MISSING_PAYMENT) && d
                        },
                        metadata: function(e) {
                            var t, n = e.premiumSubscription,
                                r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = null != n ? null === (t = (0, R.Af)(n)) || void 0 === t ? void 0 : t.planId : null;
                            return {
                                daysLeft: r,
                                premiumType: null != i ? R.ZP.getPremiumType(i) : null,
                                premiumSubscription: n
                            }
                        }
                    }), We(yt, ae.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t && null != t.paymentSourceId ? Le.Z.getPaymentSource(t.paymentSourceId) : null,
                                i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                a = null != t && t.status === ae.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !pt(ae.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a
                        },
                        metadata: function(e) {
                            return {
                                premiumSubscription: e.premiumSubscription
                            }
                        }
                    }),
                    We(yt, ae.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                i = null != t && t.status === ae.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !pt(ae.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i
                        },
                        metadata: function(e) {
                            return {
                                premiumSubscription: e.premiumSubscription
                            }
                        }
                    }), We(yt, ae.kVF.MFA_SMS_BACKUP, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null != t && t.mfaEnabled && !t.hasFlag(ae.xW$.MFA_SMS) && !t.hasFlag(ae.xW$.STAFF) && !t.hasFlag(ae.xW$.PARTNER) && !pt(ae.kVF.MFA_SMS_BACKUP)
                        }
                    }), We(yt, ae.kVF.APPLICATION_TEST_MODE, {
                        predicate: function() {
                            return null != ke.Z.testModeApplicationId
                        },
                        metadata: function() {
                            if (null == ke.Z.testModeApplicationId) return {};
                            var e = ke.Z.testModeApplicationId,
                                t = ne.Z.getGame(e);
                            return {
                                applicationName: null != t ? t.name : e,
                                applicationId: e
                            }
                        }
                    }), We(yt, ae.kVF.PREMIUM_REACTIVATE, {
                        predicate: function() {
                            return !pt(ae.kVF.PREMIUM_REACTIVATE) && F.shouldShowReactivateNotice()
                        }
                    }), We(yt, ae.kVF.LOCALIZED_PRICING, {
                        predicate: function(e) {
                            var t = e.isLocalizedPromoEnabled;
                            return !pt(ae.kVF.LOCALIZED_PRICING) && t
                        },
                        metadata: function(e) {
                            return {
                                premiumSubscription: e.premiumSubscription
                            }
                        }
                    }), We(yt, ae.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                i = null != t && null != t.paymentSourceId ? Le.Z.getPaymentSource(t.paymentSourceId) : null,
                                a = null != i && ze.Uk.has(i.type),
                                u = null != t && t.status === ae.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !pt(ae.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && u
                        },
                        metadata: function(e) {
                            var t = e.premiumSubscription;
                            return {
                                daysPastDue: (null == t ? void 0 : t.status) === ae.O0b.PAST_DUE ? o()().diff(o()(t.currentPeriodStart), "days") : 0,
                                dismissUntil: o()(null == t ? void 0 : t.currentPeriodStart).add((0, R.lU)(t), "days").toDate()
                            }
                        }
                    }), We(yt, ae.kVF.DROPS_GO_LIVE_BANNER, {
                        predicate: function() {
                            return !pt(ae.kVF.DROPS_GO_LIVE_BANNER) && (0, p.un)(u.z$.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, p.un)(u.z$.QUEST_2_COMPLETION_TOOLTIP) && (0, y.Tn)(He.X2.FORTNITE)
                        },
                        metadata: function() {
                            return {
                                partnerGame: He.X2.FORTNITE
                            }
                        }
                    }), We(yt, ae.kVF.DROPS_PROGRESS_INTERRUPTION, {
                        predicate: function() {
                            return h.Z.isCurrentQuestInterrupted && null != h.Z.currentDropQuestGameTitle
                        },
                        metadata: function() {
                            return {
                                gameTitle: h.Z.currentDropQuestGameTitle,
                                reloadCallback: function() {
                                    return window.location.reload(!0)
                                }
                            }
                        }
                    }), We(yt, ae.kVF.POMELO_ELIGIBLE, {
                        predicate: function() {
                            return (0, N.e)() && !pt(ae.kVF.POMELO_ELIGIBLE)
                        }
                    }), We(yt, ae.kVF.DROPS_ENDED_INCOMPLETE, {
                        predicate: function() {
                            return !pt(ae.kVF.DROPS_ENDED_INCOMPLETE) && (0, p.un)(u.z$.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, p.un)(u.z$.QUEST_2_COMPLETION_TOOLTIP) && (0, y.FL)(He.X2.FORTNITE)
                        },
                        metadata: function() {
                            return {
                                partnerGame: He.X2.FORTNITE
                            }
                        }
                    }), We(yt, ae.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return null != t && null != S.Z.getMentionRaidDetected(t) && (0, _.o3)(t) && !pt(ae.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)
                        },
                        metadata: function(e) {
                            var t = e.selectedGuildId,
                                n = {
                                    dismissUntil: o()().add(2, "hours").toDate()
                                };
                            if (null != t) {
                                var r = S.Z.getMentionRaidDetected(t);
                                null != r && (n.decisionId = r.decisionId)
                            }
                            return n
                        }
                    }), We(yt, ae.kVF.ACTIVATE_SERVER_SUBSCRIPTION, {
                        predicate: function() {
                            return !pt(ae.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== d.Z.getEligibleGuildsForNagActivate().length && (0, f.Lm)()
                        }
                    }), We(yt, ae.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return !pt(ae.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, I.S)(t, u.z$.GUILD_ONBOARDING_UPSELL_NAGBAR)
                        }
                    }), We(yt, ae.kVF.SAFETY_USER_SENTIMENT_NAGBAR, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return B.SI(t)
                        }
                    }), yt);

            function vt() {
                if (!E.Z.isConnected()) return !1;
                st = null;
                var e = C.default.getCurrentUser();
                if (null == e) return !1;
                var t = xe.Z.getPremiumSubscription(),
                    n = Me.Z.isLocalizedPromoEnabled,
                    r = Ae.Z.getGuildId(),
                    o = Ne.Z.getVoiceChannelId(),
                    i = null != o ? De.Z.getVoiceStateForChannel(o) : null,
                    a = Ve.a ? Et : bt,
                    u = !0,
                    l = !1,
                    c = void 0;
                try {
                    for (var s, f = a[Symbol.iterator](); !(u = (s = f.next()).done); u = !0) {
                        var d = s.value;
                        if (null != Ot[d]) {
                            if (Ot[d].predicate({
                                    selectedGuildId: r,
                                    voiceChannelId: o,
                                    voiceState: i,
                                    currentUser: e,
                                    premiumSubscription: t,
                                    isLocalizedPromoEnabled: n
                                })) {
                                var p, h, y = null === (h = (p = Ot[d]).metadata) || void 0 === h ? void 0 : h.call(p, {
                                    currentUser: e,
                                    premiumSubscription: t,
                                    selectedGuildId: r
                                });
                                st = Je(Xe({}, ct), {
                                    type: d,
                                    metadata: y
                                });
                                break
                            }
                        } else 0
                    }
                } catch (e) {
                    l = !0;
                    c = e
                } finally {
                    try {
                        u || null == f.return || f.return()
                    } finally {
                        if (l) throw c
                    }
                }
                null != st && pt(st.type) && (st = null)
            }

            function gt() {
                Re.Z.enabled || delete lt[ae.kVF.STREAMER_MODE];
                return vt()
            }
            var mt = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && et(e, t)
                }(n, e);
                var t = rt(n);

                function n() {
                    Ke(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.syncWith([je.Z, Pe.Z, ve, Ae.Z, G.Z, Ze.Z, Q.Z, q.Z, Y.Z, g.Z], vt);
                    this.waitFor(C.default, Ce.Z, me.Z, ge.ZP, Te.Z, _e.Z, Re.Z, b.Z, Ae.Z, we.Z, V.Z, re.ZP, Pe.Z, Ue.Z, Ge.Z, ke.Z, Se.Z, xe.Z, Be.Z, ve, Le.Z, Ie.Z, G.Z, oe.Z, Ze.Z, q.Z, T.Z, h.Z, d.Z)
                };
                r.hasNotice = function() {
                    return null != st && null != st.type
                };
                r.getNotice = function() {
                    return null == we.Z.getAction() ? st : null
                };
                r.isNoticeDismissed = function(e) {
                    return pt(e)
                };
                r.__getLocalVars = function() {
                    return {
                        typeToStorageKeys: at,
                        typeToTemporaryKeys: ut,
                        temporaryDismisses: lt,
                        DEFAULT_NOTICE_SETTINGS: ct,
                        notice: st,
                        NoticeOrder: bt,
                        ConferenceNoticeOrder: Et,
                        NoticeDefinition: Ot
                    }
                };
                return n
            }(i.ZP.Store);
            mt.displayName = "NoticeStore";
            const _t = new mt(c.Z, {
                CURRENT_USER_UPDATE: vt,
                MEDIA_ENGINE_SET_AUDIO_ENABLED: vt,
                CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: vt,
                STATUS_PAGE_SCHEDULED_MAINTENANCE: vt,
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: vt,
                GUILD_CREATE: vt,
                GUILD_DELETE: vt,
                AUDIO_INPUT_DETECTED: vt,
                AUDIO_SET_DISPLAY_SILENCE_WARNING: vt,
                CERTIFIED_DEVICES_SET: vt,
                AUDIO_SET_INPUT_DEVICE: vt,
                AUDIO_SET_OUTPUT_DEVICE: vt,
                MEDIA_ENGINE_DEVICES: vt,
                RTC_CONNECTION_STATE: vt,
                RPC_APP_AUTHENTICATED: vt,
                RPC_APP_DISCONNECTED: vt,
                USER_CONNECTIONS_UPDATE: vt,
                WINDOW_FOCUS: vt,
                INSTANT_INVITE_CREATE: vt,
                INSTANT_INVITE_REVOKE_SUCCESS: vt,
                SPOTIFY_PLAYER_PAUSE: vt,
                RUNNING_GAMES_CHANGE: vt,
                EXPERIMENTS_FETCH_SUCCESS: vt,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: vt,
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: vt,
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: vt,
                DEVELOPER_TEST_MODE_RESET: vt,
                BILLING_SUBSCRIPTION_FETCH_SUCCESS: vt,
                DISPATCH_APPLICATION_INSTALL: vt,
                IMPERSONATE_STOP: vt,
                IMPERSONATE_UPDATE: vt,
                GUILD_MEMBER_ADD: function(e) {
                    return e.user.id === z.default.getId() && vt()
                },
                GUILD_MEMBER_UPDATE: vt,
                SURVEY_FETCHED: vt,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: vt,
                BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: vt,
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: vt,
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: vt,
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.some((function(e) {
                        return e.userId !== z.default.getId()
                    })) && vt()
                },
                STREAMER_MODE_UPDATE: gt,
                RUNNING_STREAMER_TOOLS_CHANGE: gt,
                DISPATCH_APPLICATION_ERROR: function() {
                    delete lt[ae.kVF.DISPATCH_ERROR];
                    return vt()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    delete lt[ae.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS];
                    return vt()
                },
                DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
                    return vt()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
                    return vt()
                },
                NOTICE_SHOW: function(e) {
                    st = e.notice
                },
                NOTICE_DISMISS: function(e) {
                    if (null == st) return !1;
                    if (null != e.id && e.id !== st.id) return !1;
                    dt(st.type, e.isTemporary, e.untilAtLeast);
                    return vt()
                },
                NOTICE_DISABLE: function(e) {
                    dt(e.noticeType);
                    return vt()
                },
                LOGOUT: function() {
                    lt = {};
                    st = null
                },
                SUBSCRIPTION_PLANS_FETCH_SUCCESS: vt,
                AUTO_MODERATION_MENTION_RAID_DETECTION: vt,
                CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: vt
            })
        },
        901165: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(336513),
                u = n.n(a);

            function l(e, t, n) {
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
                        l(e, t, n[t])
                    }))
                }
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

            function f(e, t) {
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
            const d = function(e) {
                var t = e.value,
                    n = void 0 === t ? 0 : t,
                    o = e.text,
                    a = e.className,
                    l = f(e, ["value", "text", "className"]);
                return null != o ? (0, r.jsx)("div", s(c({
                    className: i()(u().wrapper, a)
                }, l), {
                    children: o
                })) : n > 0 ? (0, r.jsx)("div", s(c({
                    className: i()(u().wrapper, a)
                }, l), {
                    children: n
                })) : null
            }
        },
        839184: (e, t, n) => {
            "use strict";
            n.d(t, {
                YX: () => d,
                tT: () => p,
                ZP: () => h
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(882723),
                u = n(787498),
                l = n.n(u);

            function c(e, t, n) {
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

            function f(e, t) {
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
            var d = {
                    TERTIARY: l().tertiary,
                    SECONDARY: l().secondary,
                    PRIMARY: l().primary
                },
                p = {
                    SIZE_24: l().size24,
                    SIZE_32: l().size32,
                    SIZE_36: l().size36
                };

            function h(e) {
                var t = e.className,
                    n = e.tooltip,
                    o = e.color,
                    u = e.size,
                    d = void 0 === u ? p.SIZE_32 : u,
                    h = e.icon,
                    y = e.onClick,
                    b = e.disabled,
                    E = e.focusProps;
                return (0, r.jsx)(a.Tooltip, {
                    text: n,
                    shouldShow: !b,
                    children: function(e) {
                        var u = e.onClick,
                            p = f(e, ["onClick"]);
                        return (0, r.jsx)(a.Clickable, s(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    c(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, p), {
                            "aria-label": n,
                            "aria-disabled": b,
                            className: i()(t, l().button, o, d, c({}, l().disabled, b)),
                            onClick: function(e) {
                                null == u || u();
                                y(e)
                            },
                            focusProps: E,
                            children: h
                        }))
                    }
                })
            }
        },
        554904: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(882723),
                l = n(107364),
                c = n(479477),
                s = n.n(c),
                f = n(518280),
                d = n.n(f);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e, t) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            const v = function(e) {
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
                    p(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.title,
                        n = e.description,
                        o = e.agreement,
                        i = e.disagreement,
                        c = e.onAgree,
                        f = e.onDisagree,
                        p = e.imageClassName;
                    return (0, r.jsxs)(l.Z, {
                        className: s().gatedContent,
                        justify: l.Z.Justify.CENTER,
                        align: l.Z.Align.CENTER,
                        direction: l.Z.Direction.VERTICAL,
                        children: [(0, r.jsx)("div", {
                            className: a()(s().image, p)
                        }), (0, r.jsx)("div", {
                            className: a()(s().title, d().marginBottom8),
                            children: t
                        }), (0, r.jsx)("div", {
                            className: a()(s().description, d().marginBottom20),
                            children: n
                        }), (0, r.jsxs)(l.Z, {
                            justify: l.Z.Justify.CENTER,
                            align: l.Z.Align.CENTER,
                            grow: 0,
                            children: [null != i ? (0, r.jsx)(u.Button, {
                                className: s().action,
                                size: u.ButtonSizes.LARGE,
                                color: u.ButtonColors.PRIMARY,
                                onClick: f,
                                children: i
                            }) : null, null != o ? (0, r.jsx)(u.Button, {
                                className: s().action,
                                color: u.Button.Colors.RED,
                                size: u.ButtonSizes.LARGE,
                                onClick: c,
                                children: o
                            }) : null]
                        })]
                    })
                };
                return n
            }(o.PureComponent)
        },
        562545: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    l = e.height,
                    c = void 0 === l ? 32 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = u(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, r.jsxs)("g", {
                        clipPath: "url(#clip0)",
                        children: [(0, r.jsx)("path", {
                            d: "M17.5053 1.76605C17.5053 1.76605 26.7154 8.05195 23.2155 16.8783C19.7157 25.7047 12.7544 23.2563 15.3562 20.6775C17.9581 18.0986 12.2862 16.3487 8.65588 13.0024L17.4976 1.76605",
                            fill: f,
                            fillOpacity: "0.6"
                        }), (0, r.jsx)("path", {
                            d: "M16.945 10.4082C15.0032 12.8796 12.2632 14.1153 10.1449 13.6701L2.75381 23.0875C2.62942 23.2463 2.47493 23.3791 2.29918 23.4782C2.12343 23.5774 1.92987 23.6408 1.72956 23.6651C1.52925 23.6893 1.32613 23.6738 1.13181 23.6195C0.937493 23.5652 0.755794 23.473 0.597107 23.3484C0.436561 23.2245 0.302154 23.0701 0.201652 22.8939C0.101149 22.7178 0.0365434 22.5235 0.011566 22.3222C-0.0134115 22.121 0.00173486 21.9168 0.0561299 21.7214C0.110525 21.5261 0.203091 21.3434 0.328479 21.184L7.68121 11.7821C6.70648 9.83259 7.24373 6.84698 9.21623 4.35258C11.6646 1.25185 15.3563 0.0929071 17.4977 1.76608C19.639 3.43925 19.378 7.30749 16.945 10.4082Z",
                            fill: f
                        })]
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0",
                            children: (0, r.jsx)("rect", {
                                width: n,
                                height: c,
                                fill: f
                            })
                        })
                    })]
                }))
            }
        },
        879999: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                        fill: f,
                        className: d
                    })
                }))
            }
        },
        119141: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
                    })
                }))
            }
        },
        154232: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 22 23",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M4.3231,4.4332 C4.3231,4.4332 4.5811,4.0472 4.6881,3.8762 C4.7951,3.7052 4.4111,3.3012 4.2621,3.1732 C4.1131,3.0452 3.8781,3.1092 3.8781,3.1092 C2.0031,3.9402 1.0651,5.6452 0.9371,5.9862 C0.8091,6.3272 1.2631,6.6992 1.5981,6.8812 C1.7521,6.9652 1.9971,6.7792 2.1481,6.6412 L2.1991,6.5892 L2.2781,6.5092 L2.2791,6.5082 L7.3801,11.5892 L8.0771,10.8922 L9.3581,9.6112 L4.3161,4.4402 L4.3231,4.4332 Z"
                        }), (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M16.3738,9.7931 L16.6428,9.5371 L19.0598,11.9311 C19.0768,11.9461 19.0948,11.9521 19.1108,11.9521 C19.1568,11.9521 19.1948,11.9101 19.1948,11.9101 C19.1948,11.9101 21.8708,9.2551 21.8798,9.2461 C21.9588,9.1681 21.8798,9.1251 21.8798,9.1251 L19.8158,7.0471 L19.8128,7.0501 L19.5298,6.7731 L19.6878,6.6211 L20.0258,6.6601 L19.9618,6.2121 L20.0468,6.1261 L19.9198,5.4801 C19.4788,4.8551 18.2708,3.8541 18.2708,3.8541 L17.6388,3.7401 L17.5748,3.8251 L17.0988,3.7541 L17.1448,4.1601 L17.1748,4.1901 L17.0338,4.3321 L16.2538,3.5691 C16.2538,3.5691 11.7278,1.1111 11.4868,0.9971 C11.3508,0.9341 11.2508,0.8921 11.1548,0.8921 C11.0808,0.8921 11.0088,0.9171 10.9258,0.9761 C10.7338,1.1111 10.8468,1.3831 10.8468,1.3831 L13.6608,6.5831 L14.2238,7.1411 L14.0478,7.3171 L14.0478,7.3171 L13.9828,7.3821 L13.5328,7.3201 L13.6018,7.7661 L13.4718,7.8961 L13.4488,7.8731 C13.4278,7.8521 13.3988,7.8411 13.3708,7.8411 C13.3428,7.8411 13.3148,7.8521 13.2928,7.8731 C13.2498,7.9161 13.2498,7.9861 13.2928,8.0291 L13.3158,8.0521 L13.2538,8.1151 L13.2378,8.0981 C13.2158,8.0771 13.1878,8.0661 13.1598,8.0661 C13.1308,8.0661 13.1028,8.0771 13.0818,8.0981 C13.0388,8.1411 13.0388,8.2111 13.0818,8.2541 L13.0988,8.2711 L11.9148,9.4611 L11.8878,9.4341 C11.8658,9.4131 11.8378,9.4021 11.8098,9.4021 C11.7818,9.4021 11.7538,9.4131 11.7318,9.4341 C11.6888,9.4771 11.6888,9.5471 11.7318,9.5901 L11.7598,9.6171 L11.6968,9.6801 L11.6758,9.6601 C11.6548,9.6381 11.6258,9.6271 11.5988,9.6271 C11.5698,9.6271 11.5418,9.6381 11.5198,9.6601 C11.4778,9.7031 11.4778,9.7721 11.5198,9.8151 L11.5408,9.8361 L11.3868,9.9921 L11.3658,10.1901 L11.4468,10.2731 L11.4448,10.2741 L11.3468,10.3741 L4.9578,16.7621 L4.8748,16.6931 L4.6098,16.7311 L4.4598,16.8831 L4.4498,16.8731 C4.4278,16.8511 4.3998,16.8401 4.3718,16.8401 C4.3438,16.8401 4.3148,16.8511 4.2938,16.8731 C4.2508,16.9161 4.2508,16.9851 4.2938,17.0281 L4.3058,17.0401 L4.2438,17.1041 L4.2378,17.0981 C4.2168,17.0761 4.1878,17.0651 4.1598,17.0651 C4.1318,17.0651 4.1038,17.0761 4.0818,17.0981 C4.0398,17.1411 4.0398,17.2101 4.0818,17.2531 L4.0888,17.2611 L2.9198,18.4501 L2.8958,18.4261 C2.8738,18.4041 2.8468,18.3941 2.8178,18.3941 C2.7898,18.3941 2.7618,18.4041 2.7398,18.4261 C2.6968,18.4691 2.6968,18.5391 2.7398,18.5821 L2.7658,18.6071 L2.7038,18.6701 L2.6848,18.6511 C2.6628,18.6301 2.6348,18.6191 2.6058,18.6191 C2.5788,18.6191 2.5498,18.6301 2.5288,18.6511 C2.4858,18.6941 2.4858,18.7641 2.5288,18.8071 L2.5488,18.8281 L2.4618,18.9171 L2.0088,18.8361 L2.0428,19.3421 L1.8998,19.4881 L2.0238,20.1701 C2.0238,20.1701 2.2138,20.7641 2.6048,21.1581 C2.9838,21.5401 3.5618,21.7231 3.5868,21.7421 L4.2398,21.8561 L4.4008,21.6981 L4.8508,21.7711 L4.7768,21.3261 L4.9138,21.1921 L4.9768,21.2551 C4.9978,21.2761 5.0258,21.2871 5.0538,21.2871 C5.0818,21.2871 5.1108,21.2761 5.1318,21.2551 C5.1748,21.2111 5.1748,21.1421 5.1318,21.0991 L5.0698,21.0371 L5.1338,20.9751 L5.1878,21.0291 C5.2088,21.0511 5.2378,21.0621 5.2658,21.0621 C5.2938,21.0621 5.3218,21.0511 5.3438,21.0291 C5.3868,20.9861 5.3868,20.9171 5.3438,20.8741 L5.2908,20.8201 L6.4778,19.6491 L6.5298,19.7011 C6.5508,19.7231 6.5798,19.7331 6.6078,19.7331 C6.6358,19.7331 6.6638,19.7231 6.6858,19.7011 C6.7278,19.6581 6.7278,19.5881 6.6858,19.5451 L6.6348,19.4951 L6.6978,19.4321 L6.7418,19.4761 C6.7628,19.4971 6.7908,19.5081 6.8188,19.5081 C6.8478,19.5081 6.8758,19.4971 6.8968,19.4761 C6.9398,19.4331 6.9398,19.3631 6.8968,19.3201 L6.8538,19.2771 L6.9868,19.1471 L7.0348,18.8621 L6.9638,18.7911 L6.9648,18.7901 L7.0938,18.6621 L13.4398,12.3141 L13.4368,12.3081 L13.5608,12.4361 L13.7598,12.4141 L13.9388,12.2341 L13.9678,12.2631 C13.9898,12.2841 14.0178,12.2951 14.0458,12.2951 C14.0738,12.2951 14.1028,12.2841 14.1238,12.2631 C14.1668,12.2201 14.1668,12.1501 14.1238,12.1071 L14.0948,12.0781 L14.1578,12.0161 L14.1798,12.0381 C14.2008,12.0591 14.2288,12.0701 14.2578,12.0701 C14.2858,12.0701 14.3138,12.0591 14.3348,12.0381 C14.3778,11.9951 14.3778,11.9251 14.3348,11.8821 L14.3128,11.8591 L15.4988,10.6711 L15.5298,10.7021 C15.5508,10.7231 15.5788,10.7341 15.6068,10.7341 C15.6358,10.7341 15.6638,10.7231 15.6848,10.7021 C15.7278,10.6591 15.7278,10.5891 15.6848,10.5461 L15.6538,10.5151 L15.7168,10.4521 L15.7408,10.4771 C15.7628,10.4981 15.7908,10.5091 15.8188,10.5091 C15.8468,10.5091 15.8748,10.4981 15.8968,10.4771 C15.9398,10.4331 15.9398,10.3641 15.8968,10.3211 L15.8728,10.2961 L16.0048,10.1641 L16.4458,10.2331 L16.3738,9.7931 Z"
                        }), (0, r.jsx)("polygon", {
                            className: d,
                            fill: f,
                            points: "17.255 16.968 14.442 14.836 13.941 14.32 12 16.261 12.488 16.727 14.321 19.476 16.793 22.183 19.642 19.525"
                        })]
                    })
                }))
            }
        },
        771966: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    c = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                    })
                }))
            }
        },
        795909: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 18 : t,
                    l = e.height,
                    c = void 0 === l ? 18 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 18 18",
                    children: (0, r.jsx)("polygon", {
                        fillRule: "nonzero",
                        className: d,
                        fill: f,
                        points: "15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                    })
                }))
            }
        },
        940547: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = e.background,
                    h = u(e, ["width", "height", "color", "foreground", "background"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: p,
                            fill: f,
                            fillRule: "nonzero",
                            d: "M22.031 12.665c-.923-.4338-1.9384-.665-2.9778-.665-.695 0-1.3663.1013-2 .29V11h-4V7h-2v4h-4v2h4v4h1.29c-.1887.6337-.29 1.305-.29 2 0 1.0394.2312 2.055.665 2.978-.2207.0146-.4424.022-.665.022-2.6522 0-5.1957-1.0536-7.071-2.929C3.1067 17.1958 2.053 14.6523 2.053 12c0-5.5228 4.4772-10 10-10 2.6522 0 5.1957 1.0536 7.071 2.929 1.8754 1.8753 2.929 4.4188 2.929 7.071 0 .2225-.0074.4443-.022.665zM15.4457 13c-.9793.59-1.8023 1.413-2.3924 2.3924V13h2.3924z"
                        }), (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M19.0532 14c1.326 0 2.598.5268 3.5355 1.4645.9377.9376 1.4645 2.2094 1.4645 3.5355 0 1.326-.5268 2.598-1.4645 3.5355C21.651 23.4732 20.3793 24 19.0532 24c-1.326 0-2.5978-.5268-3.5355-1.4645C14.58 21.598 14.0532 20.326 14.0532 19c0-2.7614 2.2386-5 5-5zm-1 7l3-2-3-2v4z"
                        })]
                    })
                }))
            }
        },
        413297: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    c = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    viewBox: "0 0 24 24"
                }, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    children: [(0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                    }), (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                    })]
                }))
            }
        },
        34225: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(633878);

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

            function s(e, t) {
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

            function f(e) {
                var t = e.width,
                    n = void 0 === t ? 8 : t,
                    o = e.height,
                    i = void 0 === o ? 13 : o,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 8 13",
                    children: (0, r.jsx)("path", {
                        className: null != d ? d : void 0,
                        stroke: f,
                        fill: "transparent",
                        d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z"
                    })
                }))
            }
            var d = n(473708),
                p = n(192834),
                h = n.n(p);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            const b = o.forwardRef((function(e, t) {
                var n, o = e.className,
                    i = e.contentClassName,
                    u = e.isUnread,
                    l = e.children,
                    c = e.id,
                    s = e.role,
                    p = e["aria-label"];
                return (0, r.jsxs)("div", {
                    className: a()(o, (n = {}, y(n, h().divider, !0), y(n, h().isUnread, u), y(n, h().hasContent, null != l), n)),
                    ref: t,
                    id: c,
                    role: s,
                    "aria-label": p,
                    children: [null != l ? (0, r.jsx)("span", {
                        className: a()(h().content, i),
                        children: l
                    }) : null, u ? (0, r.jsxs)("span", {
                        className: h().unreadPill,
                        children: [(0, r.jsx)(f, {
                            foreground: h().unreadPillCapStroke,
                            className: h().unreadPillCap
                        }), d.Z.Messages.NEW]
                    }) : null]
                })
            }))
        },
        373438: (e, t, n) => {
            "use strict";
            n.d(t, {
                JO: () => E,
                iz: () => O,
                ZP: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(108717),
                l = n(289283),
                c = n(882723),
                s = n(570814),
                f = n(249697),
                d = n(136317),
                p = n(211482),
                h = n(25327),
                y = n.n(h);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var E = function(e) {
                    var t = e.className,
                        n = e.iconClassName,
                        o = e.children,
                        i = e.selected,
                        u = void 0 !== i && i,
                        l = e.disabled,
                        s = void 0 !== l && l,
                        f = e.showBadge,
                        d = void 0 !== f && f,
                        h = e.color,
                        E = e.foreground,
                        O = e.background,
                        v = e.icon,
                        g = e.onClick,
                        m = e.onContextMenu,
                        _ = e.tooltip,
                        S = void 0 === _ ? null : _,
                        I = e.tooltipColor,
                        P = e.tooltipPosition,
                        T = void 0 === P ? "bottom" : P,
                        N = e.hideOnClick,
                        A = void 0 === N || N,
                        C = e.role,
                        R = e["aria-label"],
                        j = e["aria-hidden"],
                        w = e["aria-checked"],
                        D = e["aria-expanded"],
                        M = e["aria-haspopup"],
                        L = (0, r.jsx)(v, {
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 24,
                            className: a()(n, y().icon),
                            foreground: null != E ? E : void 0,
                            background: null != O ? O : void 0,
                            color: h
                        }),
                        x = R;
                    null == x && "string" == typeof S && (x = S);
                    return (0, r.jsx)(c.Tooltip, {
                        text: S,
                        color: I,
                        position: T,
                        hideOnClick: A,
                        children: function(e) {
                            var i, l = e.onMouseEnter,
                                f = e.onMouseLeave,
                                _ = e.onFocus,
                                S = e.onBlur;
                            return null == g ? (0, r.jsx)("div", {
                                className: a()(t, [y().iconWrapper]),
                                children: (0, r.jsx)(v, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: a()(n, y().icon),
                                    foreground: null != E ? E : void 0,
                                    background: null != O ? O : void 0,
                                    color: h,
                                    "aria-hidden": j,
                                    onMouseEnter: l,
                                    onMouseLeave: f,
                                    onFocus: _,
                                    onBlur: S
                                })
                            }) : (0, r.jsxs)(c.Clickable, {
                                tag: "div",
                                onClick: s ? void 0 : g,
                                onContextMenu: s ? void 0 : m,
                                onMouseEnter: l,
                                onMouseLeave: f,
                                onFocus: _,
                                onBlur: S,
                                className: a()(t, (i = {}, b(i, y().iconWrapper, !0), b(i, y().clickable, !s && null != g), b(i, y().selected, u), i)),
                                role: C,
                                "aria-label": x,
                                "aria-hidden": j,
                                "aria-checked": w,
                                "aria-haspopup": M,
                                "aria-expanded": D,
                                tabIndex: s || null == g ? -1 : 0,
                                children: [d ? (0, r.jsx)(p.ZP, {
                                    mask: p.ZP.Masks.HEADER_BAR_BADGE,
                                    children: L
                                }) : L, d ? (0, r.jsx)("span", {
                                    className: y().iconBadge
                                }) : null, o]
                            })
                        }
                    })
                },
                O = function(e) {
                    var t = e.className;
                    return (0, r.jsx)("div", {
                        className: a()(y().divider, t)
                    })
                };
            var v = function(e) {
                var t, n = e.className,
                    i = e.innerClassName,
                    f = e.children,
                    d = e.childrenBottom,
                    p = e.toolbar,
                    h = e.onDoubleClick,
                    E = e["aria-label"],
                    O = e["aria-labelledby"],
                    v = e.role,
                    g = e.scrollable,
                    m = e.transparent,
                    _ = void 0 !== m && m,
                    S = o.useRef(null),
                    I = o.useContext(s.Z);
                return (0, r.jsx)("section", {
                    className: a()(n, y().container, (t = {}, b(t, y().themed, !_), b(t, y().transparent, _), b(t, y().themedMobile, l.tq), t)),
                    "aria-label": E,
                    "aria-labelledby": O,
                    role: v,
                    ref: S,
                    children: (0, r.jsxs)(c.FocusRingScope, {
                        containerRef: S,
                        children: [(0, r.jsxs)("div", {
                            className: y().upperContainer,
                            children: [(0, r.jsxs)("div", {
                                className: a()(y().children, i, b({}, y().scrollable, g)),
                                onDoubleClick: h,
                                children: [l.tq && null != I ? (0, r.jsx)(u.Z, {
                                    onClick: I,
                                    className: y().hamburger
                                }) : null, f]
                            }), null != p ? (0, r.jsx)("div", {
                                className: y().toolbar,
                                children: p
                            }) : null]
                        }), d]
                    })
                })
            };
            v.Icon = E;
            v.Title = function(e) {
                var t = e.className,
                    n = e.wrapperClassName,
                    o = e.children,
                    i = e.onContextMenu,
                    u = e.onClick,
                    l = e.id,
                    s = e.muted,
                    f = void 0 !== s && s,
                    d = e.level,
                    p = void 0 === d ? 1 : d,
                    h = (0, r.jsx)(c.HeadingLevel, {
                        forceLevel: p,
                        children: (0, r.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            color: f ? "header-secondary" : void 0,
                            className: a()(t, y().title),
                            id: l,
                            children: o
                        })
                    });
                return null != u ? (0, r.jsx)(c.Clickable, {
                    onClick: u,
                    onContextMenu: i,
                    className: a()(n, y().titleWrapper),
                    children: h
                }) : (0, r.jsx)("div", {
                    className: a()(n, y().titleWrapper),
                    onContextMenu: i,
                    children: h
                })
            };
            v.Divider = O;
            v.Caret = function(e) {
                var t = e.direction;
                return "right" === (void 0 === t ? "right" : t) ? (0, r.jsx)(d.Z, {
                    className: y().caret
                }) : (0, r.jsx)(f.Z, {
                    className: y().caret
                })
            };
            const g = v
        },
        372185: (e, t, n) => {
            "use strict";
            n.d(t, {
                q0: () => i.a,
                x0: () => N,
                yd: () => A,
                Zn: () => C,
                Sq: () => R,
                lv: () => j,
                nR: () => w,
                FZ: () => D,
                c2: () => M,
                iK: () => L,
                NJ: () => x,
                eE: () => Z,
                R8: () => k,
                Wg: () => F,
                Hl: () => U,
                iE: () => G,
                xb: () => B
            });
            var r = n(37163),
                o = n(441714),
                i = n.n(o),
                a = n(42128),
                u = n.n(a),
                l = n(649779),
                c = n.n(l),
                s = n(751050),
                f = n.n(s),
                d = n(313767),
                p = n.n(d),
                h = n(867217),
                y = n.n(h),
                b = n(808425),
                E = n.n(b),
                O = n(662800),
                v = n.n(O),
                g = n(113998),
                m = n.n(g),
                _ = n(753318),
                S = n.n(_);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e, t, n, o) {
                var i = o.getCurrentContent(),
                    a = null;
                if (null != e) {
                    var u;
                    a = (i = (u = i).createEntity.apply(u, P(e))).getLastCreatedEntityKey()
                }
                var l = i.getFirstBlock(),
                    c = new r.SelectionState({
                        anchorKey: l.getKey(),
                        anchorOffset: t,
                        focusKey: l.getKey(),
                        focusOffset: n
                    });
                i = r.Modifier.applyEntity(i, c, a);
                return r.EditorState.set(o, {
                    currentContent: i
                })
            }

            function N(e, t, n, o) {
                var i, a = t.getCurrentContent(),
                    l = a.getFirstBlock(),
                    c = l.getText();
                if ("number" == typeof n) {
                    n > c.length && (n = c.length);
                    null != o && o > c.length && (o = c.length);
                    i = new r.SelectionState({
                        anchorKey: l.getKey(),
                        anchorOffset: n,
                        focusKey: l.getKey(),
                        focusOffset: null != o && 0 !== o ? o : n
                    })
                } else i = t.getSelection();
                var s, f = t.getCurrentInlineStyle(),
                    d = u()(a, i);
                if (i.isCollapsed()) {
                    a = r.Modifier.insertText(a, i, e, f, d);
                    s = "insert-characters"
                } else {
                    a = r.Modifier.replaceText(a, i, e, f, d);
                    s = "replace-characters"
                }
                return r.EditorState.push(t, a, s)
            }

            function A(e, t) {
                switch (e) {
                    case "delete":
                        return m()(t);
                    case "delete-word":
                        return p()(t);
                    case "backspace":
                        return v()(t);
                    case "backspace-word":
                        return f()(t);
                    case "backspace-to-start-of-line":
                        return c()(t);
                    default:
                        return t
                }
            }

            function C(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return S()(t);
                    case "move-selection-to-start-of-block":
                        return E()(t);
                    case "move-selection-to-end-of-block":
                        return y()(t);
                    default:
                        return t
                }
            }

            function R(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function j(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = t.getCurrentContent(),
                    o = r.getFirstBlock(),
                    i = o.getText(),
                    a = [];
                o.findEntityRanges((function(e) {
                    return null !== e.getEntity()
                }), (function(e, t) {
                    var n = r.getEntity(o.getEntityAt(e)).getType(),
                        u = i.substring(e, t);
                    a.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: u
                    })
                }));
                e.forEach((function(e) {
                    var r = !1;
                    a.forEach((function(n) {
                        var o = e.type,
                            i = e.start,
                            a = e.end,
                            u = e.getFullMatch();
                        if (!n.processed)
                            if (n.type === o && n.start === i && n.text === u) {
                                n.processed = !0;
                                r = !0
                            } else if (i >= n.start && i < n.end || a > n.start && a <= n.end) {
                            n.processed = !0;
                            t = T(null, n.start, n.end, t)
                        }
                    }));
                    if (!r) {
                        var o = n[e.type];
                        t = T([e.type, null != o && o.mutable ? "MUTABLE" : "IMMUTABLE", {
                            token: e
                        }], e.start, e.end, t)
                    }
                }));
                a.forEach((function(e) {
                    e.processed || (t = T(null, e.start, e.end, t))
                }));
                return t
            }

            function w(e) {
                return r.EditorState.createEmpty(new r.CompositeDecorator(e))
            }

            function D(e) {
                var t = r.EditorState.push(e, r.ContentState.createFromText("")),
                    n = e.getSelection();
                null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t));
                return t
            }

            function M(e, t) {
                return N(e, t, 0, R(t).length)
            }

            function L(e, t) {
                var n = t.getSelection();
                n = (n = n.set("focusOffset", e)).set("anchorOffset", e);
                return r.EditorState.forceSelection(t, n)
            }

            function x(e) {
                return L(e.getCurrentContent().getFirstBlock().getText().length, e)
            }

            function Z(e) {
                return L(0, e)
            }

            function k(e) {
                var t = e.getSelection();
                t = (t = t.set("focusOffset", 0)).set("isBackward", !0);
                return r.EditorState.forceSelection(e, t)
            }

            function F(e) {
                var t = R(e),
                    n = e.getSelection();
                n = (n = n.set("focusOffset", t.length)).set("isBackward", !1);
                return r.EditorState.forceSelection(e, n)
            }

            function U(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = R(e);
                if (n.length > t) {
                    var o = e.getSelection();
                    e = N("", e, t, n.length);
                    o.getAnchorOffset() > t && (o = o.set("anchorOffset", t));
                    o.getFocusOffset() > t && (o = o.set("focusOffset", t));
                    e = r.EditorState.forceSelection(e, o)
                }
                return e
            }

            function G(e) {
                var t = window.getSelection();
                if (null != t && "Caret" === t.type && null != e) {
                    var n = t.getRangeAt(0);
                    if (function(e, t) {
                            for (; null != e;) {
                                if (e === t) return !0;
                                e = e.parentNode
                            }
                            return !1
                        }(n.commonAncestorContainer, e)) {
                        var r = n.getClientRects()[0],
                            o = e.getClientRects()[0];
                        if (null != r && null != o) {
                            var i = r.left - o.left + e.scrollLeft;
                            i < e.scrollLeft ? e.scrollLeft = i - 10 : i > e.scrollLeft + e.offsetWidth && (e.scrollLeft = i - e.offsetWidth + 3)
                        }
                    }
                }
            }

            function B(e) {
                return 0 === R(e).length
            }
        }
    }
]);