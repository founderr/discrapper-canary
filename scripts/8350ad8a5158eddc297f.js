(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [90469, 84237], {
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
        802547: (e, t, n) => {
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
                Nz: () => d,
                QQ: () => E,
                QY: () => S,
                j8: () => v,
                jn: () => h,
                m$: () => p,
                oO: () => y,
                qt: () => g,
                u$: () => m,
                yC: () => f
            });
            var r = n(744564),
                o = n(396043),
                i = n(923555),
                a = n(206823),
                l = n(2590);

            function u(e, t, n) {
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
                        u(e, t, n[t])
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

            function f(e, t, n) {
                (0, a.jW)(t, e);
                var u = Object.keys(t);
                o.ZP.trackWithMetadata(l.rMx.SEARCH_STARTED, {
                    search_type: i.Z.getSearchType(),
                    prev_search_id: i.Z.getAnalyticsId(e),
                    num_modifiers: u.length,
                    modifiers: u.reduce((function(e, n) {
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

            function d(e, t) {
                var n = i.Z.getQuery(e),
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
                return f(e, s(c({}, n, r), {
                    offset: 0
                }))
            }

            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.vpv;
                return b(e, t)
            }

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.vpv;
                return b(e, -t)
            }

            function y(e, t) {
                return O(e, t * l.vpv)
            }

            function b(e, t) {
                return O(e, i.Z.getOffset(e) + t)
            }

            function O(e, t) {
                var n = i.Z.getQuery(e),
                    r = i.Z.getTotalResults(e);
                if (!(t < 0 || t > r)) return f(e, s(c({}, n), {
                    offset: t
                }))
            }

            function E(e) {
                r.Z.dispatch({
                    type: "SEARCH_CLEAR_HISTORY",
                    searchId: e
                })
            }

            function v(e, t) {
                null != e && r.Z.dispatch({
                    type: "SEARCH_EDITOR_STATE_CHANGE",
                    searchId: e,
                    editorState: t
                })
            }

            function g(e) {
                o.ZP.trackWithMetadata(l.rMx.SEARCH_CLOSED, {
                    search_id: i.Z.getAnalyticsId(e)
                });
                r.Z.wait((function() {
                    return r.Z.dispatch({
                        type: "SEARCH_EDITOR_STATE_CLEAR",
                        searchId: e
                    })
                }))
            }

            function m(e, t, n) {
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

            function l(e, t) {
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
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = "".concat(i.dGm, "/api/v2/scheduled-maintenances"),
                c = "".concat(i.dGm, "/api/v2/incidents/unresolved.json");
            const s = {
                checkIncidents: function() {
                    Promise.all([r.ZP.get("".concat(u, "/active.json")), r.ZP.get(c)]).then((function(e) {
                        var t = l(e, 2),
                            n = t[0],
                            r = t[1],
                            i = l(n.body.scheduled_maintenances, 1)[0],
                            a = l(r.body.incidents, 1)[0];
                        o.Z.dispatch({
                            type: "STATUS_PAGE_INCIDENT",
                            incident: a || i
                        })
                    }))
                },
                checkScheduledMaintenances: function() {
                    r.ZP.get("".concat(u, "/upcoming.json")).then((function(e) {
                        var t = l(e.body.scheduled_maintenances, 1)[0];
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
            var r = n(571657),
                o = n(165695),
                i = n(744564),
                a = n(652591),
                l = n(391438),
                u = n(2590);

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
                t ? a.default.track(u.rMx.APP_NOTICE_CLOSED, {
                    notice_type: u.kVF.SURVEY,
                    survey_id: e,
                    dismissed: t
                }) : a.default.track(u.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: u.kVF.SURVEY
                })
            }

            function f(e) {
                var t = {};
                null != e && (t.survey_override = e);
                return l.Z.get({
                    url: u.ANM.USER_SURVEY,
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
                QV: () => Q,
                ZP: () => K,
                h4: () => V,
                nH: () => H
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(496486),
                u = n.n(l),
                c = n(457217),
                s = n(202351),
                f = n(70418),
                d = n(105783),
                p = n(720419),
                h = n(914964),
                y = n(487868),
                b = n(784426),
                O = n(64234),
                E = n(61209),
                v = n(352980),
                g = n(682776),
                m = n(623183),
                S = n(901654),
                _ = n(700223),
                I = n(189865),
                P = n(652591),
                T = n(930948),
                N = n(2590),
                A = n(473708),
                R = n(823510),
                C = n.n(R);

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

            function B(e) {
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

            function G(e) {
                e.stopPropagation()
            }
            var V = function(e) {
                    var t = e.title,
                        n = e.children,
                        o = e.className;
                    return (0, r.jsxs)("div", {
                        className: a()(o, C().header),
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
                        className: C().emptyPlaceholder,
                        children: [(0, r.jsx)("div", {
                            className: C().image,
                            style: {
                                backgroundImage: "url(".concat(n, ")")
                            }
                        }), (0, r.jsx)("div", {
                            className: C().body,
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
                    var t = B(n);

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
                            className: C().jumpButton,
                            onClick: this.handleClickJump,
                            children: [(0, r.jsx)("div", {
                                className: a()(C().text, {
                                    hidden: e
                                }),
                                children: A.Z.Messages.JUMP
                            }), (0, r.jsx)(f.Spinner, {
                                type: f.Spinner.Type.PULSING_ELLIPSIS,
                                className: a()(C().loading, D({}, C().visible, e))
                            })]
                        })
                    };
                    o.renderCloseButton = function() {
                        var e = this.props,
                            t = e.onCloseMessage,
                            n = e.canCloseAllMessages,
                            o = e.canManageMessages,
                            i = e.channel;
                        return null == t ? null : n || o || null != i && i.isPrivate() ? (0, r.jsx)(f.Button, {
                            look: f.Button.Looks.BLANK,
                            size: f.Button.Sizes.NONE,
                            onClick: this.handleClickClose,
                            children: (0, r.jsx)(I.Z, {
                                className: C().closeIcon
                            })
                        }) : null
                    };
                    o.render = function() {
                        return (0, r.jsxs)("div", {
                            className: C().actionButtons,
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
                    l = e.loading,
                    d = e.loadMore,
                    p = e.renderHeader,
                    y = e.renderEmptyState,
                    b = e.renderItem,
                    E = e.getProTip,
                    v = e.scrollerClassName,
                    g = e.className,
                    I = e.listName,
                    R = o.useRef(null),
                    j = (0, h.Z)(I, R),
                    w = (0, s.e7)([m.Z], (function() {
                        return m.Z.hasNotice()
                    })),
                    M = (0, s.e7)([S.Z], (function() {
                        return S.Z.windowSize()
                    }));
                o.useEffect((function() {
                    P.default.track(N.rMx.OPEN_POPOUT, {
                        type: t
                    })
                }), [t]);
                o.useEffect((function() {
                    var e = function() {
                            var e;
                            null === (e = R.current) || void 0 === e || e.scrollPageUp({
                                animate: !0
                            })
                        },
                        t = function() {
                            var e;
                            null === (e = R.current) || void 0 === e || e.scrollPageDown({
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
                        var e, t = null === (e = R.current) || void 0 === e ? void 0 : e.getScrollerState();
                        null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && i && !l && (null == d || d())
                    }), [i, d, l]),
                    k = [],
                    U = !0;
                if (null == n) k = [(0, r.jsx)("div", {
                    className: a()(C().emptyPlaceholder, C().loadingPlaceholder),
                    children: (0, r.jsx)(f.Spinner, {})
                }, "spinner")];
                else if (0 === n.length) k.push((0, r.jsx)(o.Fragment, {
                    children: y(O.Z.theme)
                }, "empty-state"));
                else {
                    U = !1;
                    k = [];
                    u().each(n, (function(e) {
                        var t;
                        (t = k).push.apply(t, F(b(e)))
                    }))
                }
                var B = null;
                null != n && n.length > 0 && null != d && (B = l ? (0, r.jsx)("div", {
                    className: C().loadingMore,
                    children: (0, r.jsx)(f.Spinner, {})
                }, "loading-more-after") : i ? (0, r.jsx)("div", {
                    className: C().hasMore,
                    children: (0, r.jsx)(f.Button, {
                        look: f.Button.Looks.FILLED,
                        color: f.Button.Colors.PRIMARY,
                        size: f.Button.Sizes.MAX,
                        onClick: d,
                        children: A.Z.Messages.LOAD_MORE_MESSAGES
                    })
                }) : (0, r.jsx)("div", {
                    className: C().scrollingFooterWrap,
                    children: y(O.Z.theme)
                }));
                var V = null == E ? void 0 : E(),
                    H = U && null != V ? (0, r.jsx)("div", {
                        className: C().footer,
                        children: (0, r.jsx)(_.Z, {
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
                    className: a()(g, C().messagesPopoutWrap),
                    style: Y,
                    onClick: G,
                    onDoubleClick: G,
                    "aria-label": e["aria-label"],
                    children: (0, r.jsxs)(f.HeadingLevel, {
                        component: p(),
                        children: [(0, r.jsxs)(f.AdvancedScroller, {
                            className: a()(C().messagesPopout, v),
                            onScroll: z ? Z : void 0,
                            ref: R,
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
                            }), B]
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
                            var l = E.Z.getChannel(a);
                            if (null != l) {
                                p.Z.trackJump(a, r, n);
                                (0, b.uL)(N.Z5c.CHANNEL(l.getGuildId(), a, r))
                            }
                            null == h || h(t)
                        }
                    },
                    n = e.analyticsName,
                    i = e.onFetch,
                    a = e.channel,
                    l = e.messages,
                    u = e.hasMore,
                    c = e.loading,
                    f = e.loadMore,
                    h = e.onJump,
                    O = e.canCloseAllMessages,
                    g = void 0 !== O && O,
                    m = e.renderHeader,
                    S = e.renderEmptyState,
                    _ = e.renderMessage,
                    I = e.getProTip,
                    P = e.scrollerClassName,
                    T = e.className,
                    R = e.onCloseMessage,
                    j = e.listName,
                    w = (0, s.e7)([v.Z], (function() {
                        var e = null != a ? v.Z.getMessages(a.id) : null;
                        return null != e && null != e.jumpTargetId && (e.loadingMore && null == e.get(e.jumpTargetId))
                    }));
                o.useEffect((function() {
                    i(a)
                }), [a, i]);
                var D = o.useMemo((function() {
                    return null == l ? void 0 : l.map((function(e) {
                        return {
                            message: e,
                            channel: a
                        }
                    }))
                }), [l, a]);
                return (0, r.jsx)(Q, {
                    className: T,
                    scrollerClassName: P,
                    items: D,
                    loading: c,
                    analyticsName: n,
                    renderEmptyState: S,
                    renderHeader: m,
                    hasMore: u,
                    loadMore: f,
                    getProTip: I,
                    renderItem: function(e) {
                        var n = e.message,
                            o = e.channel;
                        if (null == n) return [];
                        if (null != _) return _(n, (function(e) {
                            return t(n, e)
                        }));
                        var i = [];
                        if (null == o) return [];
                        i.push((0, r.jsxs)("div", {
                            className: C().messageGroupWrapper,
                            children: [(0, r.jsx)(y.Z, {
                                className: C().messageGroupCozy,
                                message: n,
                                channel: o
                            }), (0, r.jsx)(z, {
                                channel: a,
                                message: n,
                                jumping: w,
                                canCloseAllMessages: g,
                                jumpTo: t,
                                onCloseMessage: R
                            })]
                        }, n.id));
                        return i
                    },
                    listName: j,
                    "aria-label": e["aria-label"]
                })
            }
        },
        387043: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, i.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M19 22a1 1 0 0 1-1-1v-8.208a2.5 2.5 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-16a4.5 4.5 0 0 0-1 .113V3a1 1 0 1 1 2 0v3.113A4.5 4.5 0 0 0 19 6ZM5 22a1 1 0 0 1-1-1v-8.208a2.5 2.5 0 1 1 2 0V21a1 1 0 0 1-1 1ZM5 6a4.5 4.5 0 0 0-1 .113V3a1 1 0 1 1 2 0v3.113A4.5 4.5 0 0 0 5 6Zm6 15a1 1 0 1 0 2 0v-3.208a2.5 2.5 0 1 0-2 0V21Zm0-9.887a4.5 4.5 0 0 1 2 0V3a1 1 0 1 0-2 0v8.113Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
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
                Z: () => l
            });
            var r = n(667294),
                o = n(798159),
                i = n(202351),
                a = n(316878);

            function l(e, t, n) {
                var l = (0, i.e7)([a.Z], (function() {
                        return a.Z.keyboardModeEnabled
                    })),
                    u = r.useCallback((function(e) {
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
                    isEnabled: l,
                    setFocus: u,
                    scrollToStart: c,
                    scrollToEnd: s,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        221921: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p,
                c: () => d
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                a = n(201459),
                l = n(9430),
                u = n(2590),
                c = n(473708);

            function s(e) {
                switch (e.type) {
                    case u.d4z.GUILD_VOICE:
                        return null;
                    case u.d4z.GUILD_STAGE_VOICE:
                        return function(e) {
                            return [{
                                setting: u.bL.NULL,
                                label: null != e.parent_id ? c.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.Z.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: u.bL.ONLY_MENTIONS,
                                label: c.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                            }, {
                                setting: u.bL.NO_MESSAGES,
                                label: c.Z.Messages.FORM_LABEL_NOTHING
                            }]
                        }(e);
                    default:
                        return function(e) {
                            return [{
                                setting: u.bL.NULL,
                                label: null != e.parent_id ? c.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.Z.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: u.bL.ALL_MESSAGES,
                                label: c.Z.Messages.FORM_LABEL_ALL_MESSAGES
                            }, {
                                setting: u.bL.ONLY_MENTIONS,
                                label: c.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                            }, {
                                setting: u.bL.NO_MESSAGES,
                                label: c.Z.Messages.FORM_LABEL_NOTHING
                            }]
                        }(e)
                }
            }

            function f(e) {
                switch (e) {
                    case u.bL.ALL_MESSAGES:
                        return c.Z.Messages.FORM_LABEL_ALL_MESSAGES;
                    case u.bL.ONLY_MENTIONS:
                        return c.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                    case u.bL.NO_MESSAGES:
                        return c.Z.Messages.FORM_LABEL_NOTHING;
                    case u.bL.NULL:
                    default:
                        return
                }
            }

            function d(e) {
                var t = e.getGuildId(),
                    n = e.id,
                    d = (0, o.e7)([l.Z], (function() {
                        return l.Z.getChannelOverrides(t)[n]
                    }), [t, n]),
                    p = (0, o.e7)([l.Z], (function() {
                        var n = u.bL.NULL;
                        null != e.parent_id && (n = l.Z.getChannelMessageNotifications(t, e.parent_id));
                        return n !== u.bL.NULL ? n : l.Z.getMessageNotifications(t)
                    }), [t, e.parent_id]),
                    h = (0, o.e7)([l.Z], (function() {
                        return l.Z.getNewForumThreadsCreated(e)
                    })),
                    y = null == d ? u.bL.NULL : d.message_notifications,
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
                            l = e.label;
                        return (0, r.jsx)(i.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(o),
                            label: l,
                            subtext: o === u.bL.NULL ? f(p) : void 0,
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
                    f = (0, o.e7)([l.Z], (function() {
                        return l.Z.resolvedMessageNotifications(e)
                    }), [e]),
                    p = (0, o.e7)([l.Z], (function() {
                        return l.Z.getChannelOverrides(e.guild_id)[e.id]
                    }), [e.guild_id, e.id]),
                    h = (null == p ? u.bL.NULL : p.message_notifications) === u.bL.NULL && e.isGuildStageVoice() ? c.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = null === (t = s(e)) || void 0 === t ? void 0 : t.find((function(e) {
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

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
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
                    return l(this, n)
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
                    t && u(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getEligibleGuildsForNagActivate = function() {
                    return f
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
                BE: () => b,
                Nw: () => p,
                R5: () => h,
                RJ: () => O,
                VT: () => y,
                Vb: () => v,
                Vt: () => f,
                dN: () => d,
                m0: () => E
            });
            var r = n(281110),
                o = n(744564),
                i = n(177570),
                a = n(2590);

            function l(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            l(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            l(i, r, o, a, u, "throw", e)
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
                },
                f = (c = u((function(e) {
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
                    var e = u((function() {
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
                    var e = u((function(e) {
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
                    var e = u((function(e, t) {
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
                    var e = u((function() {
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
                    var e = u((function(e) {
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
                    var e = u((function(e) {
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
                O = function() {
                    var e = u((function(e) {
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
                E = function() {
                    var e = u((function(e, t, n) {
                        var l, u, c;
                        return s(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    l = i.Z.getViewerIds(t);
                                    s.label = 1;
                                case 1:
                                    s.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.post({
                                        url: a.ANM.DROPS_HEARTBEAT(e),
                                        query: {
                                            stream_key: t,
                                            application_id: n,
                                            viewer_count: l.length
                                        },
                                        retries: 2
                                    })];
                                case 2:
                                    u = s.sent();
                                    o.Z.dispatch({
                                        type: "DROPS_HEARTBEAT_SUCCESS",
                                        dropsQuestId: e,
                                        completed: u.body.completed,
                                        progress: u.body.progress
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
                    var e = u((function(e) {
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
                RN: () => c,
                X2: () => l,
                Zv: () => d,
                _e: () => u,
                fS: () => s,
                kS: () => i,
                n4: () => a,
                oL: () => f
            });
            var r = n(473708);
            var o = ["XBOX", "PLAYSTATION", "SWITCH", "PC"],
                i = 2592e4,
                a = "https://support.discord.com/hc/en-us/articles/9146392276375",
                l = {
                    FORTNITE: "FORTNITE"
                },
                u = {
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
                }({}, l.FORTNITE, {
                    title: "Fortnite",
                    gameSearchTerm: c[l.FORTNITE],
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
                Z: () => Z
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                a = n(513328),
                l = n(744564),
                u = n(306263),
                c = n(664625),
                s = n(671723),
                f = n(618887),
                d = n(293078),
                p = n(483255);

            function h(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            h(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            h(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function E(e, t, n) {
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
                        E(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var _ = function(e) {
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
                },
                T = null,
                N = null,
                A = {},
                R = {},
                C = p._e.LOADING_INITIAL_PROGRESS,
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
                    C = w.completed ? p._e.QUEST_COMPLETION : p._e.TRACK_PROGRESS
                },
                L = function(e, t, n) {
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
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && S(e, t)
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
                    return C
                };
                r.getIsPartnerGameQuestComplete = function(e) {
                    var t, n = (0, d.BS)(e);
                    if (null == n || null == N) return !1;
                    var r = Boolean(null === (t = N[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
                    return w.completed && w.gameTitle === n.title || r
                };
                ! function(e, t, n) {
                    t && O(e.prototype, t);
                    n && O(e, n)
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
                        return C
                    }
                }, {
                    key: "enrolledDropsByQuestId",
                    get: function() {
                        return R
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
            x.displayName = "DropsStore";
            const Z = new x(l.Z, {
                DROPS_ELIGIBILITY_FETCH_SUCCESS: function(e) {
                    A[e.dropsQuestId] = e.isEligible
                },
                DROPS_PLATFORM_AVAILABILITY_SUCCESS: function(e) {
                    T = e.availablePlatforms.filter((function(e) {
                        return p.El.includes(e)
                    }))
                },
                DROPS_USER_STATUS_FETCH_SUCCESS: function(e) {
                    var t;
                    N = null !== (t = e.codes) && void 0 !== t ? t : {}
                },
                DROPS_USER_STATUS_FETCH_FAILURE: function(e) {
                    N = {}
                },
                DROPS_ENROLLED_USER_FETCH_SUCCESS: function(e) {
                    R[e.dropsQuestId] = {
                        isEnrolled: e.isEnrolled,
                        enrolledUser: e.enrolledUser
                    }
                },
                DROPS_FETCH_PROGRESS_SUCCESS: M,
                DROPS_FETCH_PROGRESS_FAILURE: function(e) {
                    if (!w.initialProgressFetched) {
                        w.initialProgressFetched = !0;
                        C = p._e.STREAM_CTA
                    }
                },
                DROPS_HEARTBEAT_SUCCESS: function(e) {
                    M(e);
                    A[e.dropsQuestId] = !0;
                    D()
                },
                DROPS_HEARTBEAT_FAILURE: function(e) {
                    var t = e.dropsQuestId,
                        n = e.statusCode;
                    w.completed = !1;
                    w.initialProgressFetched = !0;
                    w.lastCheckedAt = o().now();
                    if (429 !== n || 0 !== w.retries) {
                        C = p._e.STREAM_CTA;
                        403 === n ? A[t] = !1 : w.interrupted = !0
                    } else {
                        w.retries = w.retries + 1;
                        D()
                    }
                },
                DROPS_UNENROLL_USER: function(e) {
                    N = null;
                    delete(A = g({}, A))[e.dropsQuestId];
                    delete(R = g({}, R))[e.dropsQuestId];
                    w.dropsQuestId === e.dropsQuestId && (w = {
                        completed: !1,
                        initialProgressFetched: !1,
                        interrupted: !1,
                        retries: 0
                    })
                },
                STREAM_CLOSE: function() {
                    w.completed && (C = p._e.QUEST_COMPLETION);
                    w.interrupted = !1;
                    w.retries = 0;
                    j.stop()
                },
                STREAM_START: function(e) {
                    var t, n = e.streamType,
                        r = e.guildId,
                        o = e.channelId,
                        i = e.pid,
                        a = (0, u.V9)({
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
                                var O = null === (t = (0, d.j7)(b)) || void 0 === t ? void 0 : t.getCurrentConfig({
                                    location: "1"
                                }, {
                                    autoTrackExposure: !1
                                });
                                if (null != O && O.dropsEnabled) {
                                    var E = O.autoEnrollment;
                                    null != R[b.dropsQuestId] && R[b.dropsQuestId].isEnrolled || E ? L(b, h, a) : l.Z.wait(y((function() {
                                        var e;
                                        return P(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, (0, f.BE)(b.dropsQuestId)];
                                                case 1:
                                                    t.sent();
                                                    if (!(null === (e = R[b.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled)) return [2];
                                                    L(b, h, a);
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
                    R = {};
                    N = {};
                    j.stop()
                }
            })
        },
        293078: (e, t, n) => {
            "use strict";
            n.d(t, {
                A5: () => f,
                BS: () => m,
                EW: () => S,
                FL: () => v,
                R9: () => h,
                Tn: () => E,
                Un: () => I,
                Xt: () => b,
                YK: () => y,
                hM: () => g,
                j7: () => d,
                wj: () => p,
                x8: () => _
            });
            var r = n(730381),
                o = n.n(r),
                i = n(968449),
                a = n(959207),
                l = n(671723),
                u = n(622816),
                c = n(483255),
                s = n(473708);

            function f(e) {
                var t = m(e);
                return null == t ? null : d(t)
            }

            function d(e) {
                return e.dropsQuestId === c.oL ? u.a : null
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
                return y(e, l.ZP.getGamesSeen(!1), h())
            }

            function O(e, t) {
                var n = e.endDate,
                    r = o()(),
                    i = o()(n, c.fS),
                    a = o()(r.clone().add(e.dropsNoticeBannerDurationDays, "days").format(c.fS)),
                    l = i.isSameOrBefore(a),
                    u = i.isBefore(r, "minute");
                return l && (t && !u || !t && u)
            }

            function E(e) {
                var t, n = m(e);
                if (null == n) return !1;
                if (!(null === (t = f(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).dropsEnabled)) return !1;
                var r = i.bh.getSetting(),
                    o = O(n, !0);
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
                    a = O(r, !1);
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

            function S(e) {
                return Object.values(c.Zv).find((function(t) {
                    return t.dropsQuestId === e
                }))
            }

            function _(e) {
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
                l = n(70418),
                u = n(201459),
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
                return null == n ? null : p ? (0, r.jsx)(l.MenuItem, {
                    id: "unmute-guild",
                    label: d.Z.Messages.UNMUTE_SERVER,
                    subtext: y,
                    action: function() {
                        return u.Z.updateGuildNotificationSettings(n, {
                            muted: !1
                        })
                    }
                }) : (0, r.jsx)(l.MenuItem, {
                    id: "mute-guild",
                    label: d.Z.Messages.MUTE_SERVER,
                    action: function() {
                        return u.Z.updateGuildNotificationSettings(n, {
                            muted: !0
                        })
                    },
                    children: (0, c.k)().map((function(e) {
                        var o = e.value,
                            a = e.label;
                        return (0, r.jsx)(l.MenuItem, {
                            id: "".concat(o),
                            label: a,
                            action: function() {
                                return function(e) {
                                    if (null != n) {
                                        var r = e > 0 ? i()().add(e, "second").toISOString() : null;
                                        u.Z.updateGuildNotificationSettings(n, {
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
                fh: () => O
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
                l = (0, r.B)({
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
                u = (0, r.B)({
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
                    n = l.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = u.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function O(e) {
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
                Z: () => N
            });
            var r = n(842227),
                o = n(202351),
                i = n(744564),
                a = n(769915),
                l = n(720637),
                u = n(61209),
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
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
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
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                S = {},
                _ = function(e) {
                    null != v[e] && delete v[e];
                    g++
                };

            function I(e) {
                ! function(e, t) {
                    var n = (0, a.hc)(e),
                        r = {
                            id: n,
                            isBlockedEdit: (0, a.Bz)(e),
                            messageData: e,
                            errorMessage: (0, s.uF)(e, t)
                        };
                    v[n] = r;
                    g++
                }(e.messageData, e.errorResponseBody);
                return !0
            }

            function P(e) {
                var t, n = e.channelId,
                    o = e.messages,
                    i = null === (t = u.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == i) return !1;
                var a = S[i],
                    l = o.reduce((function(e, t) {
                        var n;
                        if (!(t.type === d.uaV.AUTO_MODERATION_ACTION)) return e;
                        var o = null === (n = t.embeds) || void 0 === n ? void 0 : n.some((function(e) {
                            return e.type === d.hBH.AUTO_MODERATION_NOTIFICATION
                        }));
                        return o ? null == e || -1 === r.default.compare(e, t.id) ? t.id : void 0 : e
                    }), a);
                if (null != l && S[i] !== l) {
                    S[i] = l;
                    return !0
                }
                return !1
            }
            var T = function(e) {
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
                var t = E(n);

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
                        lastIncidentAlertMessage: S
                    }
                };
                r.getMessage = function(e) {
                    return null == e ? null : null !== (t = v[e]) && void 0 !== t ? t : null;
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
                    return null !== (t = S[e]) && void 0 !== t ? t : null
                };
                return n
            }(o.ZP.PersistedStore);
            T.displayName = "GuildAutomodMessageStore";
            T.persistKey = "GuildAutomodMessages";
            const N = new T(i.Z, {
                CONNECTION_OPEN: function(e) {
                    v = {};
                    g++;
                    return !0
                },
                LOAD_MESSAGES_SUCCESS: P,
                LOCAL_MESSAGES_LOADED: P,
                MESSAGE_CREATE: function(e) {
                    var t = e.guildId,
                        n = e.message;
                    if (null == t) return !1;
                    if (n.type !== d.uaV.AUTO_MODERATION_ACTION) return !1;
                    var r = (0, l.e5)(n);
                    if (!(0, f.nY)(r)) return !1;
                    if ((0, f.OP)(r)) {
                        S[t] = r.id;
                        return !0
                    }
                    return !1
                },
                MESSAGE_SEND_FAILED_AUTOMOD: I,
                MESSAGE_EDIT_FAILED_AUTOMOD: I,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    var t = e.messageId;
                    _(t);
                    return !0
                },
                MESSAGE_END_EDIT: function(e) {
                    var t = e.response;
                    if (null == (null == t ? void 0 : t.body)) return !1;
                    if (t.body.code === d.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    var n = t.body.id;
                    if (null == n) return !1;
                    _(n)
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
                i = n(70418),
                a = n(380477),
                l = n(221921),
                u = n(440997),
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
                    b = (0, u.Z)(y);
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
                        children: (0, l.c)(t)
                    })]
                })
            }
        },
        412448: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => cr,
                O: () => or
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(289283),
                u = n(202351),
                c = n(153686),
                s = n(19585),
                f = n(292376),
                d = n(37163),
                p = n(823493),
                h = n.n(p),
                y = n(70418),
                b = n(790405),
                O = n(650332),
                E = n(347149),
                v = n(92150),
                g = n(770272),
                m = n(316878),
                S = n(396043),
                _ = n(61209),
                I = n(5544),
                P = n(923555),
                T = n(715107),
                N = n(443812),
                A = n(930948),
                R = n(372185),
                C = n(206823),
                j = n(795472),
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
                B = n.n(U),
                G = n(496486),
                V = n.n(G),
                H = n(730381),
                Y = n.n(H),
                z = n(182569),
                Q = n(473708),
                K = n(384735),
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
                        l = t.onSelectQuery,
                        u = t.onHighlightQuery,
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
                        onMouseEnter: u,
                        onClick: l,
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
            const le = ae;
            var ue = n(773011),
                ce = n(344832),
                se = n(21372),
                fe = n(840922),
                de = n(744564),
                pe = n(456837),
                he = (n(318715), n(756221)),
                ye = n(473903);

            function be() {
                var e, t = !0 === (null === (e = ye.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()),
                    n = (0, he.n5)("showNewSearch");
                return t || n
            }
            var Oe = n(504275),
                Ee = n(607556),
                ve = n(749565),
                ge = n(793461);

            function me(e, t) {
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

            function _e(e) {
                _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _e(e)
            }

            function Ie(e, t) {
                return !t || "object" !== Te(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Pe(e, t) {
                Pe = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Pe(e, t)
            }
            var Te = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ne(e) {
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
                    var n, r = _e(e);
                    if (t) {
                        var o = _e(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ie(this, n)
                }
            }
            var Ae = {},
                Re = {},
                Ce = 10;

            function je(e) {
                var t = e.searchId,
                    n = e.query,
                    r = e.mode,
                    o = e.tokens,
                    i = e.cursorScope,
                    a = e.autocompletes,
                    l = Re[t];
                if (null == l) {
                    l = {
                        results: [],
                        context: pe.Z.getSearchContext(we.bind(null, t))
                    };
                    Re[t] = l
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

            function we(e, t) {
                var n = t.results,
                    r = Re[e],
                    o = Ae[e];
                if (null != r && null != o) {
                    var i = o.mode,
                        a = i.type,
                        l = i.filter;
                    if (a !== L.Sap.EMPTY && (a !== L.Sap.FILTER || l === L.dCx.FILTER_FROM || l === L.dCx.FILTER_MENTIONS)) {
                        var u = 3;
                        o.mode.type === L.Sap.FILTER && (u = Ce);
                        r.results = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ce;
                            (e = e.reduce((function(e, t) {
                                var n = ye.default.getUser(t.id);
                                if (null == n) return e;
                                e.push({
                                    id: n.id,
                                    text: ve.ZP.getUserTag(n),
                                    user: n
                                });
                                return e
                            }), [])).length > t && (e.length = t);
                            return e
                        }(n, u);
                        var c = o.query,
                            s = o.mode,
                            f = o.tokens,
                            d = o.cursorScope,
                            p = o.autocompletes;
                        p = xe(e, s);
                        Ae[e] = je({
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

            function De(e, t, n) {
                var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ce;
                if (null == e || "" === e) return null;
                var i = P.Z.getSearchType(n);
                if (i !== L.aib.GUILD || e !== L.dCx.FILTER_FROM && e !== L.dCx.FILTER_MENTIONS) {
                    var a, l = null === (a = v.ZP[e]) || void 0 === a ? void 0 : a.getAutocompletions,
                        u = (null != t ? t.getFullMatch() : "").trim();
                    r = null != l ? l(u, n, null != o ? o : Ce) : []
                } else {
                    var c = Re[n];
                    if (null == c) r = null;
                    else {
                        null != t && 0 !== t.getFullMatch().trim().length || (c.results = Oe.ZP.getRecentlyTalked(n, Ce).map((function(e) {
                            var t = e.record;
                            return {
                                user: t,
                                text: ve.ZP.getUserTag(t)
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

            function Me(e) {
                var t = (null != e ? e.getFullMatch() : "").trim(),
                    n = function() {
                        var e, t = be();
                        return Se(e = {}, L.dCx.FILTER_FROM, !ge.Z.hidePersonalInformation), Se(e, L.dCx.FILTER_MENTIONS, !ge.Z.hidePersonalInformation), Se(e, L.dCx.FILTER_HAS, !0), Se(e, L.dCx.FILTER_BEFORE, !0), Se(e, L.dCx.FILTER_AFTER, !0), Se(e, L.dCx.FILTER_ON, !0), Se(e, L.dCx.FILTER_IN, P.Z.getSearchType() === L.aib.GUILD), Se(e, L.dCx.FILTER_PINNED, !t), e
                    }(),
                    r = (0, v.nB)(t).filter((function(e) {
                        return n[e.token]
                    }));
                return {
                    group: L.rtL.SEARCH_OPTIONS,
                    results: r
                }
            }

            function Le(e, t) {
                var n = (null != e ? e.getFullMatch() : "").trim(),
                    r = [];
                if (null != n && "" !== n) {
                    (function(e) {
                        var t = P.Z.getSearchType(e),
                            n = [L.dCx.FILTER_HAS];
                        if (!ge.Z.hidePersonalInformation) {
                            n.push(L.dCx.FILTER_FROM);
                            n.push(L.dCx.FILTER_MENTIONS)
                        }
                        t === L.aib.GUILD && n.push(L.dCx.FILTER_IN);
                        return n
                    })(t).forEach((function(n) {
                        if (null != n) {
                            var o = De(n, e, t, 3);
                            null != o && r.push(o)
                        }
                    }));
                    r.push(function(e, t) {
                        var n = (null != e ? e.getFullMatch() : "").trim();
                        if (null != n && "" !== n) {
                            var r, o, i, a = null === (r = v.ZP[L.dCx.FILTER_BEFORE]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                l = null === (o = v.ZP[L.dCx.FILTER_ON]) || void 0 === o ? void 0 : o.getAutocompletions(n, t, 1)[0],
                                u = null === (i = v.ZP[L.dCx.FILTER_AFTER]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0];
                            if (null == a) return null;
                            var c = [a, l, u];
                            return {
                                group: L.rtL.DATES,
                                results: c
                            }
                        }
                    }(e, t))
                }(0, C.BU)(r) < 5 && r.push(Me(e));
                return r
            }

            function xe(e, t) {
                var n = [];
                if (t.type === L.Sap.FILTER) n.push(De(t.filter, t.token, e, Ce));
                else if (t.type === L.Sap.FILTER_ALL) n = Le(t.token, e);
                else if (t.type === L.Sap.EMPTY) {
                    n.push(Me(t.token));
                    be() || n.push(function(e) {
                        if (ge.Z.hidePersonalInformation) return null;
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

            function Ze() {
                (0,
                    C.WU)()
            }

            function ke(e) {
                var t = Ae[e];
                if (null != t) {
                    var n = t.query,
                        r = t.mode,
                        o = t.tokens,
                        i = t.cursorScope,
                        a = t.autocompletes;
                    Ae[e] = je({
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

            function Fe() {
                var e = P.Z.getCurrentSearchId();
                if (null != e && null != Ae[e]) {
                    var t = Ae[e],
                        n = t.query,
                        r = t.mode,
                        o = t.tokens,
                        i = t.cursorScope;
                    Ae[e] = je({
                        searchId: e,
                        query: n,
                        mode: r,
                        tokens: o,
                        cursorScope: i,
                        autocompletes: xe(e, r)
                    })
                }
            }
            var Ue = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Pe(e, t)
                }(n, e);
                var t = Ne(n);

                function n() {
                    me(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(se.ZP, ge.Z)
                };
                r.getState = function(e) {
                    var t;
                    return null !== (t = Ae[e]) && void 0 !== t ? t : je({
                        searchId: e
                    })
                };
                return n
            }(u.ZP.Store);
            Ue.displayName = "SearchAutocompleteStore";
            var Be = new Ue(de.Z, {
                SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
                    var t, n, r = e.searchId,
                        o = e.tokens,
                        i = e.cursorScope,
                        a = (0, C.cl)(o),
                        l = (0, C.qc)(i, o),
                        u = null !== (t = Ae[r]) && void 0 !== t ? t : {},
                        c = Re[r],
                        s = !0;
                    if (a !== u.query || null != u.mode && u.mode.filter !== l.filter) {
                        if (l.type === L.Sap.EMPTY || l.type === L.Sap.FILTER && l.filter !== L.dCx.FILTER_FROM && l.filter !== L.dCx.FILTER_MENTIONS) {
                            if (null != c) {
                                c.context.clearQuery();
                                c.results = []
                            }
                            n = xe(r, l)
                        } else if (null != c) {
                            var f = l.token;
                            if (null != f && f.getFullMatch().trim().length > 0) {
                                Ee.Z.requestMembers(r, f.getFullMatch(), Ce);
                                c.context.setQuery(f.getFullMatch().trim(), {
                                    guild: r
                                });
                                n = u.autocompletes;
                                s = !1
                            } else {
                                c.context.clearQuery();
                                n = xe(r, l)
                            }
                        }
                    } else {
                        n = u.autocompletes;
                        s = !1
                    }
                    Ae[r] = je({
                        searchId: r,
                        query: a,
                        mode: l,
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
                    delete Ae[t]
                },
                CHANNEL_CREATE: Ze,
                CHANNEL_DELETE: Ze,
                STREAMER_MODE_UPDATE: Fe,
                SEARCH_MODAL_OPEN: Fe,
                SEARCH_SCREEN_OPEN: Fe,
                SEARCH_CLEAR_HISTORY: function(e) {
                    var t = e.searchId;
                    null != t ? ke(t) : Object.keys(Ae).forEach(ke)
                },
                LOGOUT: function() {
                    Object.keys(Ae).forEach(ke)
                }
            });
            const Ge = Be;
            var Ve = n(464187),
                He = n(986979),
                Ye = n(795909),
                ze = n(994655),
                Qe = n(348592),
                Ke = n(182245),
                We = n.n(Ke);

            function qe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Je(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $e(e) {
                $e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return $e(e)
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Je(e, t, n[t])
                    }))
                }
                return e
            }

            function tt(e, t) {
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

            function nt(e, t) {
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

            function rt(e, t) {
                return !t || "object" !== at(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ot(e, t) {
                ot = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ot(e, t)
            }

            function it(e, t) {
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
                    if ("string" == typeof e) return qe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var at = function(e) {
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
                    var n, r = $e(e);
                    if (t) {
                        var o = $e(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return rt(this, n)
                }
            }
            var ut = Y()("2015-05-15").local(),
                ct = (0, z.Un)({
                    createPromise: function() {
                        return Promise.resolve().then(n.bind(n, 754065))
                    },
                    webpackId: 754065
                });

            function st(e) {
                var t = !0,
                    n = e.trim();
                V()(v.ZP).forOwn((function(e) {
                    "" !== e.key && null != e.key && n === e.key && (t = !1)
                }));
                return t
            }
            var ft, dt = function(e, t, n) {
                    var o = n.user,
                        i = n.text;
                    if (null == o) return (0, r.jsx)("strong", {
                        children: i
                    });
                    var a, l, u, c = ye.default.getUser(o.id),
                        s = _.Z.getChannel(e),
                        f = (null == s ? void 0 : s.isPrivate()) ? fe.Z.getNickname(o.id) : null,
                        d = null !== (l = null !== (a = se.ZP.getNick(e, o.id)) && void 0 !== a ? a : f) && void 0 !== l ? l : ve.ZP.getName(o),
                        p = null !== (u = null == c ? void 0 : c.getAvatarURL(e, 20)) && void 0 !== u ? u : o.getAvatarURL(null == s ? void 0 : s.guild_id, 20);
                    return [(0, r.jsx)("img", {
                        alt: "",
                        className: We().displayAvatar,
                        src: p
                    }, "avatar-".concat(t, "-").concat(o.id)), (0, r.jsx)("span", {
                        className: We().displayedNick,
                        children: d
                    }, "display-nick-".concat(t, "-").concat(o.id)), (0, r.jsx)("span", {
                        className: We().displayUsername,
                        children: ve.ZP.getUserTag(o, {
                            identifiable: ge.Z.enabled && ge.Z.hidePersonalInformation ? "never" : "always"
                        })
                    }, "display-username-".concat(t, "-").concat(o.id))]
                },
                pt = function(e, t, n) {
                    var o = n.channel,
                        i = n.text;
                    if (null == o) return (0, r.jsx)("strong", {
                        children: i
                    });
                    var a = _.Z.getChannel(o.parent_id),
                        l = (0, ce.KS)(o);
                    return (0, r.jsxs)("div", {
                        className: We().resultChannel,
                        children: [null != l ? (0,
                            r.jsx)(l, {
                            className: We().searchResultChannelIcon
                        }) : null, (0, r.jsx)("strong", {
                            children: (0, ue.F6)(o, ye.default, fe.Z)
                        }), null != a ? (0, r.jsx)("span", {
                            className: We().searchResultChannelCategory,
                            children: (0, ue.F6)(a, ye.default, fe.Z)
                        }) : null]
                    })
                },
                ht = function(e) {
                    var t, n, o = e.id,
                        i = e.searchId,
                        l = e.result,
                        u = e.group,
                        c = e.className,
                        s = e.role,
                        f = e.tabIndex,
                        d = e["aria-selected"],
                        p = e.onSelect,
                        h = e.onFocus,
                        b = e.showFilter,
                        O = e.renderResult;
                    if (b) {
                        var E, g;
                        t = (0, r.jsx)("span", {
                            className: We().filter,
                            children: null !== (g = null === (E = v.ZP[u]) || void 0 === E ? void 0 : E.key) && void 0 !== g ? g : "addme:"
                        })
                    }
                    n = null != O ? O(i, u, l) : (0, r.jsx)("strong", {
                        children: l.text
                    });
                    return (0, r.jsxs)(y.Clickable, {
                        tag: "li",
                        className: a()(We().option, c),
                        onClick: p,
                        onFocus: h,
                        id: o,
                        role: s,
                        tabIndex: f,
                        "aria-selected": d,
                        children: [t, n, (0, r.jsx)(Ye.Z, {
                            className: We().plusIcon
                        })]
                    })
                },
                yt = function(e) {
                    return (0, r.jsx)(ht, tt(et({}, e), {
                        className: We().user,
                        renderResult: dt
                    }))
                };
            var bt = (Je(ft = {}, L.dCx.FILTER_FROM, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_FROM
                    },
                    component: yt
                }), Je(ft, L.dCx.FILTER_MENTIONS, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_MENTIONS
                    },
                    component: yt
                }), Je(ft, L.dCx.FILTER_HAS, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_HAS
                    }
                }), Je(ft, L.dCx.FILTER_FILE_TYPE, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
                    }
                }), Je(ft, L.dCx.FILTER_IN, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_CHANNELS
                    },
                    component: function(e) {
                        return (0, r.jsx)(ht, tt(et({}, e), {
                            renderResult: pt
                        }))
                    }
                }), Je(ft, L.rtL.DATES, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_DATES
                    }
                }), Je(ft, L.rtL.HISTORY, {
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
                                return (0, r.jsx)(y.Clickable, {
                                    onClick: function() {
                                        return (0, b.QQ)(t)
                                    },
                                    onMouseEnter: n,
                                    onMouseLeave: o,
                                    className: We().searchClearHistory,
                                    title: Q.Z.Messages.SEARCH_CLEAR_HISTORY,
                                    "aria-label": Q.Z.Messages.SEARCH_CLEAR_HISTORY,
                                    children: (0, r.jsx)(ze.Z, {})
                                })
                            }
                        })
                    },
                    component: function(e) {
                        var t = e.onSelect,
                            n = e.onFocus,
                            i = e.result,
                            l = (e.showFilter, e.searchId, e.renderResult, e.group, nt(e, ["onSelect", "onFocus", "result", "showFilter", "searchId", "renderResult", "group"])),
                            u = "",
                            c = o.useMemo((function() {
                                return e = i.text, C.kG(e).map((function(e, t, n) {
                                    return C.Fr(e, n[t + 1]) ? e : new E.WU(e.getFullMatch(), E.Xe)
                                }));
                                var e
                            }), [i.text]).map((function(e) {
                                var t = e.getFullMatch();
                                if ("" === t.trim()) return null;
                                var n, o = L.TNx.test(e.type),
                                    i = L.KA4.test(e.type),
                                    l = !o && !i;
                                u += t;
                                return (0, r.jsx)("span", {
                                    className: a()((n = {}, Je(n, We().filter, o), Je(n, We().answer, i), Je(n, We().nonText, l), n)),
                                    children: t
                                }, e.type + t)
                            }));
                        return (0, r.jsxs)(y.Clickable, tt(et({
                            className: a()(We().option, We().history),
                            onClick: t,
                            onFocus: n
                        }, l), {
                            "aria-label": Q.Z.Messages.SEARCH_FROM_SUGGESTIONS.format({
                                suggestion: u
                            }),
                            children: [c, (0, r.jsx)(Ye.Z, {
                                className: We().plusIcon
                            })]
                        }))
                    }
                }), Je(ft, L.rtL.SEARCH_OPTIONS, {
                    titleText: function() {
                        return Q.Z.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS
                    },
                    groupTip: function() {
                        return (0, r.jsx)(y.Tooltip, {
                            text: Q.Z.Messages.LEARN_MORE,
                            position: "left",
                            children: function(e) {
                                return (0, r.jsx)("div", tt(et({
                                    className: We().searchLearnMore
                                }, e), {
                                    children: (0, r.jsx)(y.Anchor, {
                                        href: Qe.Z.getArticleURL(L.BhN.USING_SEARCH),
                                        title: Q.Z.Messages.LEARN_MORE,
                                        children: (0, r.jsx)(He.Z, {})
                                    })
                                }))
                            }
                        })
                    },
                    component: function(e) {
                        var t, n = e.result,
                            o = e.onSelect,
                            i = e.onFocus,
                            l = (e.showFilter, e.searchId, nt(e, ["result", "onSelect", "onFocus", "showFilter", "searchId"])),
                            u = C.Ko(null !== (t = n.token) && void 0 !== t ? t : "");
                        return (0, r.jsxs)(y.Clickable, tt(et({
                            className: a()(We().option, We().searchOption),
                            onClick: o,
                            onFocus: i
                        }, l), {
                            children: [(0, r.jsx)("span", {
                                className: We().filter,
                                children: n.text
                            }), (0, r.jsx)("span", {
                                className: a()(Je({}, We().answer, u)),
                                children: u
                            }), (0, r.jsx)(Ye.Z, {
                                className: We().plusIcon
                            })]
                        }))
                    }
                }), ft),
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
                        t && ot(e, t)
                    }(n, e);
                    var t = lt(n);

                    function n() {
                        Xe(this, n);
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
                                l = i.mode,
                                u = i.autocompletes,
                                c = t.resultsState;
                            if (l.type !== c.mode.type) e.setSelectedIndex(-1);
                            else if (n.selectedIndex >= 0 && (n.selectedIndex === r || c.autocompletes.length !== u.length)) {
                                var s = C.zV(c.autocompletes, c.mode.type)[n.selectedIndex - 1],
                                    f = C.zV(u, l.type).indexOf(s); - 1 !== f ? e.setSelectedIndex(f) : n.selectedIndex >= a && e.setSelectedIndex(a - 1)
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
                            C.Fz(r.mode.filter) || e.focusOption(n + t)
                        };
                        e.focusOption = function(t) {
                            var n = t,
                                r = e.props.resultsState.autocompletes,
                                o = e.shouldShowSearchQuery();
                            n < -1 || !o && n < 0 ? n = C.BU(r) - 1 : o && n >= C.BU(r) ? n = -1 : !o && n >= C.BU(r) && (n = 0);
                            e.setSelectedIndex(n)
                        };
                        e.selectOption = function(t) {
                            var n = t;
                            null == n && (n = e.state.selectedIndex);
                            if (n < 0) return !1;
                            var r = e.props.resultsState,
                                o = r.autocompletes,
                                i = r.mode;
                            if (!C.Fz(i.filter)) {
                                var a = C.zV(o, i.type);
                                if (n >= a.length) return !1;
                                var l = a[n],
                                    u = st(l);
                                e.setSearchQuery(l, u);
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
                            var l = null != o.token ? o.token.end : a;
                            A.S.dispatch(L.CkL.SET_SEARCH_QUERY, {
                                query: t,
                                anchor: a,
                                focus: l,
                                performSearch: n
                            });
                            e.setSelectedIndex(-1)
                        };
                        e.shouldShowSearchQuery = function() {
                            var t = e.props.resultsState.mode;
                            return t.type !== L.Sap.FILTER && t.type !== L.Sap.EMPTY && !C.Fz(t.filter)
                        };
                        e.renderDatePicker = function() {
                            return (0, r.jsxs)("div", {
                                className: We().datePicker,
                                children: [(0, r.jsx)(ct, {
                                    onSelect: e.handleDateChange,
                                    maxDate: Y()().local(),
                                    minDate: ut
                                }), (0, r.jsxs)("div", {
                                    className: We().datePickerHint,
                                    children: [(0, r.jsxs)("span", {
                                        className: We().hint,
                                        children: [Q.Z.Messages.SEARCH_DATE_PICKER_HINT, " "]
                                    }), (0, r.jsx)(y.Clickable, {
                                        tag: "span",
                                        className: We().hintValue,
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
                                l = a.autocompletes,
                                u = a.mode;
                            if (C.Fz(u.filter)) return e.renderDatePicker();
                            var c = -1;
                            return l.map((function(n) {
                                if (null == n || 0 === n.results.length) return null;
                                var a, l, s, f, d = null !== (a = bt[n.group]) && void 0 !== a ? a : {};
                                if (null != d.titleText) {
                                    s = "".concat(n.group, "-header");
                                    l = (0, r.jsx)("div", {
                                        id: s,
                                        className: We().header,
                                        children: d.titleText()
                                    })
                                }
                                var p, h = null !== (f = d.groupTip) && void 0 !== f ? f : null,
                                    y = null != h ? (0, r.jsx)(h, {
                                        searchId: i
                                    }) : null,
                                    b = null !== (p = d.component) && void 0 !== p ? p : ht,
                                    O = u.type === L.Sap.FILTER_ALL || !1;
                                return (0, r.jsxs)("ul", {
                                    role: "group",
                                    "aria-labelledby": s,
                                    className: We().resultsGroup,
                                    children: [l, y, n.results.map((function(a) {
                                        if (null == a || null == n) return null;
                                        var l, u, s = t === (c += 1);
                                        return (0, r.jsx)(b, et({
                                            searchId: i,
                                            group: null !== (l = a.group) && void 0 !== l ? l : n.group,
                                            result: a,
                                            showFilter: O,
                                            onSelect: e.selectOption.bind(null, c),
                                            onFocus: e.focusOption.bind(null, c)
                                        }, ie(o, c, s)), "".concat(n.group, "-").concat(a.text, "-").concat(null !== (u = a.key) && void 0 !== u ? u : ""))
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
                        return (0, r.jsx)(le, {
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
            const Et = o.forwardRef((function(e, t) {
                var n = it((0, u.Wu)([Ve.Z, T.Z, Ge], (function() {
                        var e = Ve.Z.getGuildId(),
                            t = T.Z.getChannelId(),
                            n = null != e ? e : t;
                        B()(null != n, "SearchPopout.getStateFromStores - invalid searchId");
                        var r = Ge.getState(n);
                        return [n, r, C.BU(r.autocompletes)]
                    })), 3),
                    o = n[0],
                    i = n[1],
                    a = n[2];
                return (0, r.jsx)(Ot, tt(et({}, e), {
                    searchId: o,
                    resultsState: i,
                    totalResults: a,
                    ref: t
                }))
            }));
            var vt = n(98305),
                gt = n.n(vt);
            n(632540);

            function mt(e) {
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

            function _t(e) {
                _t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _t(e)
            }

            function It(e, t) {
                return !t || "object" !== Tt(t) && "function" != typeof t ? mt(e) : t
            }

            function Pt(e, t) {
                Pt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Pt(e, t)
            }
            var Tt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Nt(e) {
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
                    var n, r = _t(e);
                    if (t) {
                        var o = _t(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return It(this, n)
                }
            }
            var At = 512,
                Rt = (0, N.hQ)(),
                Ct = h()(b.yC, 500),
                jt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Pt(e, t)
                    }(n, e);
                    var t = Nt(n);

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
                                l = i.props.editorState,
                                u = R.Sq(l);
                            " " !== t.charAt(t.length - 1) && (t += " ");
                            null != n && 0 !== n && " " !== u.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t);
                            if (a) {
                                l = R.c2(t, l);
                                n = 0
                            } else l = R.x0(t, l, n, r);
                            l = R.Hl(l, At);
                            l = i.tokenize(l);
                            var c = Number(n) + t.length;
                            l = R.iK(c, l);
                            i.setEditorState(l);
                            o && i.search(R.Sq(l))
                        };
                        i.handleSelectedIndexChanged = function(e) {
                            var t, n;
                            null === (t = i._editorRef) || void 0 === t || null === (n = t.editor) || void 0 === n || n.setAttribute("aria-activedescendant", null != e ? "".concat(Rt, "-").concat(e) : void 0);
                            i.setState({
                                selectedIndex: e
                            })
                        };
                        i.renderPopout = function() {
                            return (0, r.jsx)(Et, {
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
                                e = R.Sq(o)
                            }
                            if (null != n && !r) {
                                for (var a = C.kG(e), l = C.$G(a), u = 0; u < a.length; u++) C.Fr(a[u], a[u + 1]) || (e = e.substring(0, a[u].start) + e.substring(a[u].end));
                                if (0 === a.length || 0 === Object.keys(l).length) return !1;
                                Ct(n, l, e);
                                i.onBlur()
                            }
                            return !0
                        };
                        i.handleClearSearch = function(e) {
                            var t = i.props.editorState,
                                n = i.state.focused;
                            e.preventDefault();
                            e.stopPropagation();
                            if ("" !== R.Sq(t)) {
                                t = R.Hl(t, 0);
                                i.setEditorState(t);
                                n || Promise.resolve().then((function() {
                                    return i.blurEditor()
                                }))
                            } else i.focusEditor()
                        };
                        i.handleFocusSearch = function(e) {
                            if (e.prefillCurrentChannel) {
                                var t = T.Z.getChannelId(),
                                    n = _.Z.getChannel(t);
                                (null == n ? void 0 : n.isThread()) && (n = _.Z.getChannel(null == n ? void 0 : n.parent_id));
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
                            var e = mt(i)._editorRef;
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
                            S.ZP.trackWithMetadata(L.rMx.SEARCH_OPENED, {
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
                                R.xb(i.props.editorState) && i.clearSearch()
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
                            if (R.Sq(t).length >= At) return !0;
                            t = R.x0(e, t);
                            t = R.Hl(t, At);
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
                                    t = R.yd(e, t);
                                    t = i.tokenize(t);
                                    i.setEditorState(t);
                                    n || i.setState({
                                        focused: !0
                                    });
                                    return !0;
                                case "transpose-characters":
                                case "move-selection-to-start-of-block":
                                case "move-selection-to-end-of-block":
                                    t = R.Zn(e, t);
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
                            t = R.x0(e, t);
                            t = R.Hl(t, At);
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
                                l = o.searchId,
                                u = o.keyboardModeEnabled;
                            e.stopPropagation();
                            if ("Escape" === t) {
                                e.preventDefault();
                                if (R.xb(a)) i.blurEditor();
                                else {
                                    var c = R.FZ(a);
                                    b.j8(l, c);
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
                                if (u) return;
                                (0, g.Qj)();
                                return !0
                            }
                            if ("Home" === t || "ArrowLeft" === t && n) {
                                e.preventDefault();
                                a = r ? R.R8(a) : R.eE(a);
                                i.setEditorState(a);
                                return !0
                            }
                            if ("End" === t || "ArrowRight" === t && n) {
                                e.preventDefault();
                                a = r ? R.Wg(a) : R.NJ(a);
                                i.setEditorState(a);
                                return !0
                            }
                            if (("Delete" === t || "Backspace" === t) && n) {
                                var d = R.FZ(a);
                                i.setEditorState(d);
                                return !0
                            }
                            return R.q0(e)
                        };
                        C.WU();
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
                            var o = C.kG(R.Sq(n)),
                                i = function(e, t) {
                                    var n = t.getSelection(),
                                        r = n.focusOffset,
                                        o = n.anchorOffset;
                                    return (0, C.g9)(e, r, o)
                                }(o, n);
                            b.u$(r, o, i);
                            null != this._editorRef && R.iE(this._editorRef.editor)
                        }
                    };
                    i.componentWillUnmount = function() {
                        A.S.unsubscribe(L.CkL.PERFORM_SEARCH, this.search);
                        A.S.unsubscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery);
                        A.S.unsubscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch)
                    };
                    i.tokenize = function(e) {
                        var t = C.kG(R.Sq(e)).filter((function(e) {
                            return e.type !== E.ZP.NON_TOKEN_TYPE
                        }));
                        return R.lv(t, e, v.ZP)
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
                            l = t.className,
                            u = this.state.focused,
                            c = R.Sq(o).length > 0;
                        return null == n ? null : (0, r.jsx)(y.Popout, {
                            renderPopout: this.renderPopout,
                            position: "bottom",
                            animation: y.Popout.Animation.NONE,
                            shouldShow: u,
                            autoInvert: !1,
                            children: function(t, o) {
                                var s, f, d = o.isShown;
                                return (0, r.jsx)("div", {
                                    className: l,
                                    children: (0, r.jsx)("div", {
                                        className: a()(gt().search, (f = {}, St(f, gt().open, c || u), St(f, gt().focused, u), f)),
                                        children: (0, r.jsx)(y.FocusRing, {
                                            focusTarget: {
                                                current: null === (s = e._editorRef) || void 0 === s ? void 0 : s.editor
                                            },
                                            ringTarget: e._searchBarRef,
                                            children: (0, r.jsxs)("div", {
                                                className: gt().searchBar,
                                                ref: e._searchBarRef,
                                                children: [e.renderInput(d), (0, r.jsx)(O.BK, {
                                                    onClear: e.handleClearSearch,
                                                    hasContent: c || i,
                                                    className: gt().icon
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
            const wt = u.ZP.connectStores([m.Z, P.Z], (function() {
                var e, t = P.Z.getCurrentSearchId(),
                    n = P.Z.getSearchType(),
                    r = null != t && P.Z.isSearching(t),
                    o = null != t && null !== (e = P.Z.getEditorState(t)) && void 0 !== e ? e : R.nR(F(v.ZP)),
                    i = m.Z.keyboardModeEnabled;
                return {
                    searchId: t,
                    searchType: n,
                    isSearching: r,
                    editorState: o,
                    hasResults: P.Z.hasResults(t),
                    keyboardModeEnabled: i
                }
            }))(jt);
            var Dt = n(373438),
                Mt = n(120415),
                Lt = n(310126),
                xt = n(795308),
                Zt = n(384411),
                kt = n(652591),
                Ft = new Set(["ko", "ja"]);

            function Ut() {
                var e = (0, u.e7)([ye.default], (function() {
                        return ye.default.getCurrentUser()
                    })),
                    t = (0, u.e7)([Zt.default], (function() {
                        return Zt.default.locale
                    })),
                    n = (0, ve.EO)(e);
                return (0, r.jsx)(y.Anchor, {
                    href: Qe.w,
                    target: "_blank",
                    tabIndex: -1,
                    children: (0, r.jsx)(Dt.JO, {
                        color: n ? xt.Z.unsafe_rawColors.GREEN_360.css : "currentColor",
                        onClick: function() {
                            return kt.default.track(L.rMx.HELP_CLICKED, {
                                highlighted: n
                            })
                        },
                        icon: He.Z,
                        tooltipPosition: Ft.has(t) ? "left" : void 0,
                        tooltip: Q.Z.Messages.HELP
                    })
                })
            }
            var Bt = n(320142),
                Gt = n(762308),
                Vt = n(84841),
                Ht = n(671917),
                Yt = n(82829),
                zt = n(956054);

            function Qt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Kt(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Wt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Kt(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            Kt(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function qt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Xt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        qt(e, t, n[t])
                    }))
                }
                return e
            }

            function Jt(e, t) {
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

            function $t(e, t) {
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
                    if ("string" == typeof e) return Qt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var en = function(e, t) {
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
                        }([i, l])
                    }
                }
            };

            function tn() {
                var e = (0, u.e7)([Vt.Z], (function() {
                        return Vt.Z.devToolsEnabled
                    })),
                    t = $t(o.useState(!1), 2),
                    i = t[0],
                    a = t[1],
                    l = $t(o.useState(0), 2),
                    c = l[0],
                    s = l[1],
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
                                            icon: Ht.Z,
                                            action: function() {
                                                return (0, y.openModalLazy)(Wt((function() {
                                                    var e, t;
                                                    return en(this, (function(o) {
                                                        switch (o.label) {
                                                            case 0:
                                                                return [4, Promise.all([n.e(40532), n.e(78230), n.e(38826)]).then(n.bind(n, 938826))];
                                                            case 1:
                                                                e = o.sent(), t = e.default;
                                                                return [2, function(e) {
                                                                    return (0, r.jsx)(t, Xt({}, e))
                                                                }]
                                                        }
                                                    }))
                                                })))
                                            }
                                        }), o && (0, r.jsx)(y.MenuItem, {
                                            id: "staff-devtools",
                                            label: "Toggle DevTools",
                                            icon: Yt.Z,
                                            action: function() {
                                                return (0, Gt.SO)()
                                            }
                                        }), (0, r.jsx)(y.MenuItem, {
                                            id: "staff-help-center",
                                            label: "Go to Help Center",
                                            icon: zt.Z,
                                            action: function() {
                                                return (0, Bt.Z)(Qe.w)
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
                            return (0, r.jsx)(Dt.JO, Jt(Xt({}, e), {
                                icon: Ht.Z,
                                "aria-label": Q.Z.Messages.HELP,
                                selected: n
                            }))
                        }
                    })
                })
            }
            var nn = n(105783),
                rn = n(908056);

            function on(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function an(e) {
                an = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return an(e)
            }

            function ln(e, t) {
                return !t || "object" !== cn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function un(e, t) {
                un = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return un(e, t)
            }
            var cn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function sn(e) {
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
                    var n, r = an(e);
                    if (t) {
                        var o = an(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ln(this, n)
                }
            }
            var fn = "UPDATE_NOT_AVAILABLE";

            function dn(e) {
                fn = e.type
            }
            var pn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && un(e, t)
                }(n, e);
                var t = sn(n);

                function n() {
                    on(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getState = function() {
                    return fn
                };
                return n
            }(u.ZP.Store);
            pn.displayName = "AutoUpdateStore";
            const hn = new pn(de.Z, {
                CHECKING_FOR_UPDATES: dn,
                UPDATE_NOT_AVAILABLE: dn,
                UPDATE_AVAILABLE: dn,
                UPDATE_MANUALLY: dn,
                UPDATE_ERROR: dn,
                UPDATE_DOWNLOADED: dn
            });
            var yn = n(563367),
                bn = n(898652),
                On = n(168075),
                En = n(147092),
                vn = n(633878);

            function gn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function mn(e, t) {
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

            function Sn(e, t) {
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
            const _n = (0, On.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    c = e.background,
                    s = Sn(e, ["width", "height", "color", "foreground", "background"]);
                return (0, r.jsxs)("svg", mn(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            gn(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, vn.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13 0C16.5198 0 19.4422 2.61306 19.9288 6.00063C19.9525 6.00021 19.9762 6 20 6C22.2091 6 24 7.79086 24 10C24 10.7708 23.782 11.4907 23.4043 12.1013C21.9807 10.7964 20.0834 10 18 10C15.0389 10 12.4535 11.6088 11.0703 14H5C2.243 14 0 11.757 0 9C0 6.243 2.243 4 5 4C6.393 4 7.678 4.454 9.175 6.58L9.992 6.004C9.018 4.62 7.987 3.815 7.022 3.357C8.26 1.31 10.49 0 13 0Z"
                    }), (0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        d: "M21.293 17.292L19 19.585V13.999H17V19.585L14.707 17.292L13.293 18.706L18 23.413L22.707 18.706L21.293 17.292Z"
                    })]
                }))
            }), En._);
            var In = n(281110),
                Pn = n(630631),
                Tn = n(940007),
                Nn = n(296602),
                An = n(22176);

            function Rn(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Cn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var jn = function(e, t) {
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
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
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
                },
                wn = 36e5,
                Dn = 6048e5,
                Mn = 864e5,
                Ln = Pn.Z.get("lastNonRequiredUpdateShown", Date.now()),
                xn = new Nn.Z("AutoUpdateManager"),
                Zn = new(function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wn,
                            n = this;
                        Cn(this, e);
                        this.updateAvailable = !1;
                        this.hasNativeUpdate = !1;
                        this._callbacks = [];
                        this._bootstrapper = null;
                        this.checkForUpdates = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e || !n.hasNativeUpdate)
                                if (Mt.FB) {
                                    var t = "win32" === (0, Mt.y8)() && Lt.ZP.canBootstrapNewUpdater;
                                    t ? n._requestNewUpdaterBootstrap() : Lt.ZP.send("CHECK_FOR_UPDATES")
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
                            In.ZP.get({
                                url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
                                query: {
                                    _: Date.now() / 1e3 / 60 / 5 | 0
                                },
                                oldFormErrors: !0
                            }).then((function(e) {
                                if (null == e.body || "015ac3f1910980cdabc8e1c380ac01968ed79071" === e.body.hash) return n._handleUpdateNotAvailable();
                                if (e.body.required || (0, Tn.fD)()) return n._handleUpdateDownloaded(!1);
                                var t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? Dn : Mn;
                                if (Date.now() - Ln > t) {
                                    Pn.Z.set("lastNonRequiredUpdateShown", Date.now());
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
                        if (Mt.FB) {
                            Lt.ZP.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates);
                            Lt.ZP.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable);
                            Lt.ZP.on("UPDATE_AVAILABLE", (function() {
                                return n._handleUpdateAvailable(!0)
                            }));
                            Lt.ZP.on("UPDATE_ERROR", this._handleUpdateError);
                            Lt.ZP.on("UPDATE_DOWNLOADED", (function() {
                                return n._handleUpdateDownloaded(!0)
                            }));
                            Lt.ZP.on("UPDATE_MANUALLY", this._handleUpdateManually)
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
                        this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : Lt.ZP.send("QUIT_AND_INSTALL") : location.reload(!0))
                    };
                    t._requestNewUpdaterBootstrap = function() {
                        var e, t = this;
                        return (e = function() {
                            var e, n;
                            return jn(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        xn.log("Bootstrapping new updater host...");
                                        r.label = 1;
                                    case 1:
                                        r.trys.push([1, 3, , 4]);
                                        return [4, Lt.ZP.ensureModule("discord_updater_bootstrap")];
                                    case 2:
                                        r.sent();
                                        e = Lt.ZP.requireModule("discord_updater_bootstrap");
                                        t._bootstrapper = e;
                                        return [3, 4];
                                    case 3:
                                        r.sent();
                                        t._handleNativeUpdateNotAvailable();
                                        return [2];
                                    case 4:
                                        r.trys.push([4, 6, , 7]);
                                        t._handleCheckingForUpdates();
                                        return [4, e.bootstrap(Lt.ZP.releaseChannel, "win")];
                                    case 5:
                                        r.sent();
                                        t.updateAvailable = !0;
                                        t.hasNativeUpdate = !0;
                                        t._handleUpdateDownloaded(!0);
                                        return [3, 7];
                                    case 6:
                                        n = r.sent();
                                        xn.log("Failed to bootstrap new updater:", n);
                                        t._handleNativeUpdateNotAvailable();
                                        An.Z.captureException(n);
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
                                    Rn(i, r, o, a, l, "next", e)
                                }

                                function l(e) {
                                    Rn(i, r, o, a, l, "throw", e)
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

            function kn() {
                Zn.quitAndInstall()
            }
            var Fn = n(617671),
                Un = n.n(Fn);

            function Bn(e, t) {
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

            function Vn(e) {
                Vn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Vn(e)
            }

            function Hn(e, t) {
                return !t || "object" !== zn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Yn(e, t) {
                Yn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Yn(e, t)
            }
            var zn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Qn(e) {
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
                    var n, r = Vn(e);
                    if (t) {
                        var o = Vn(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Hn(this, n)
                }
            }
            var Kn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Yn(e, t)
                }(n, e);
                var t = Qn(n);

                function n() {
                    Bn(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        memoizedMode: e.props.mode,
                        clicked: !1
                    };
                    e.handleInstallDownload = function() {
                        yn.Z.isConnected() ? nn.Z.show({
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
                            kn()
                        }
                    };
                    return e
                }
                var o = n.prototype;
                o.handleDownloadApps = function() {
                    (0, y.openModal)((function(e) {
                        return (0, r.jsx)(rn.default, function(e) {
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
                            return (0, r.jsx)(Dt.JO, {
                                hideOnClick: !1,
                                tooltip: Q.Z.Messages.UPDATE_AVAILABLE,
                                foreground: Un().downloadArrow,
                                background: Un().cloud,
                                icon: _n
                            });
                        case "UPDATE_MANUALLY":
                        case "UPDATE_DOWNLOADED":
                            return (0, r.jsx)(Dt.JO, {
                                tooltip: Q.Z.Messages.UPDATE_DOWNLOADED,
                                foreground: Un().updateIconForeground,
                                onClick: this.handleInstallDownload,
                                icon: bn.Z
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
            const Wn = u.ZP.connectStores([hn], (function() {
                return {
                    mode: hn.getState()
                }
            }))(Kn);
            var qn = n(897196);

            function Xn(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Jn(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Xn(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            Xn(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function $n(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        $n(e, t, n[t])
                    }))
                }
                return e
            }

            function tr(e, t) {
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

            function nr(e, t) {
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
            var rr = function(e, t) {
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

            function or() {
                return ir.apply(this, arguments)
            }

            function ir() {
                return (ir = Jn((function() {
                    var e, t, n, r;
                    return rr(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return (0, Mt.V5)() && Mt.FB ? [4, null === (t = (e = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === t ? void 0 : t.call(e)] : [3, 2];
                            case 1:
                                "Minimize" === (r = null !== (n = o.sent()) && void 0 !== n ? n : "Maximize") ? Lt.ZP.minimize(): "Maximize" === r && Lt.ZP.maximize();
                                o.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ar(e) {
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
                    O = e.role,
                    E = e.hideSearch,
                    v = (0, u.e7)([ye.default], (function() {
                        return ye.default.getCurrentUser()
                    })),
                    g = (null == v ? void 0 : v.isStaff()) || (null == v ? void 0 : v.isStaffPersonal()) || !1;
                return (0, r.jsx)(Dt.ZP, {
                    className: n,
                    innerClassName: a,
                    toolbar: function() {
                        if (null == d) return null;
                        var e = null != o && !E;
                        return l.tq ? p : (0, r.jsxs)(r.Fragment, {
                            children: [d, e ? (0, r.jsx)(wt, {
                                className: Un().search
                            }, null != i ? i : o) : null, (0, r.jsx)(Wn, {}), (0, r.jsx)(f.Z, {}), g ? (0, r.jsx)(tn, {}) : (0, r.jsx)(Ut, {})]
                        })
                    }(),
                    transparent: s,
                    onDoubleClick: or,
                    "aria-label": h,
                    "aria-labelledby": y,
                    role: O,
                    scrollable: b,
                    children: t
                })
            }

            function lr(e) {
                var t = e.children,
                    n = e.className,
                    o = e["aria-label"],
                    i = e["aria-labelledby"],
                    a = e.role;
                return (0, r.jsx)(Dt.ZP, {
                    className: n,
                    onDoubleClick: or,
                    "aria-label": o,
                    "aria-labelledby": i,
                    role: a,
                    children: t
                })
            }

            function ur(e) {
                var t = e.isAuthenticated,
                    n = void 0 === t || t,
                    o = nr(e, ["isAuthenticated"]),
                    i = (0, s.Z)(c.Z.HEADER_BAR).AnalyticsLocationProvider,
                    l = a()(o.className, $n({}, Un().forumOrHome, null != o.channelType && L.TPd.GUILD_THREADS_ONLY.has(o.channelType) || o.channelId === qn.oC.GUILD_HOME));
                return (0, r.jsx)(i, {
                    children: n ? (0,
                        r.jsx)(ar, tr(er({}, o), {
                        className: l
                    })) : (0, r.jsx)(lr, tr(er({}, o), {
                        className: l
                    }))
                })
            }
            ur.Title = Dt.ZP.Title;
            ur.Icon = Dt.ZP.Icon;
            ur.Divider = Dt.ZP.Divider;
            ur.Caret = Dt.ZP.Caret;
            const cr = ur
        },
        101609: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => l,
                Z: () => u
            });
            var r = n(70145),
                o = n(928066),
                i = n(791707),
                a = n(2590);

            function l(e, t, n) {
                return null == t || (t.type === a.ys_.MESSAGE && t.content.id === t.content.channel_id || (t.type !== a.ys_.MESSAGE && t.type !== a.ys_.THREAD_STARTER_MESSAGE || u(e, t.content, n)))
            }

            function u(e, t, n) {
                return !(!n.hasFlag(a.iLy.HAS_THREAD) && !n.isCommandType()) || (n.type > a.uaV.DEFAULT ? !(0, i.Z)(t) || n.type === a.uaV.REPLY : !!(0, i.Z)(t) || (t.author.id !== n.author.id || (t.hasFlag(a.iLy.EPHEMERAL) !== n.hasFlag(a.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username || (!(!(null == e ? void 0 : e.isForumPost()) || t.id !== e.id) || (!(0,
                    r._w)(t.timestamp, n.timestamp, 42e4) || (!(!n.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS) || t.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS)) || (!(!t.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS) || n.hasFlag(a.iLy.SUPPRESS_NOTIFICATIONS) || !(n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || !!(0, o.Z)(n)))))))))
            }
        },
        349658: (e, t, n) => {
            "use strict";
            n.d(t, {
                DQ: () => a,
                P1: () => i
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
            var a = !1,
                l = new Set;
            window.addEventListener("keydown", (function(e) {
                u(e.shiftKey)
            }));
            window.addEventListener("keyup", (function(e) {
                u(e.shiftKey)
            }));
            window.addEventListener("mousemove", (function(e) {
                u(e.shiftKey)
            }));
            window.addEventListener("blur", (function() {
                u(!1)
            }));

            function u(e) {
                if (e !== a) {
                    a = e;
                    l.forEach((function(e) {
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
                    l.add(e);
                    return function() {
                        l.delete(e)
                    }
                }), []);
                return t
            }
        },
        50034: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => l,
                e: () => a
            });
            var r = n(318715),
                o = n(473903),
                i = n(704512),
                a = function() {
                    return u(o.default.getCurrentUser(), (0, i.JH)())
                },
                l = function() {
                    return u((0, r.ZP)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })), (0, i.o9)())
                };

            function u(e, t) {
                return null != e && !e.isPomelo() && (!!e.hasVerifiedEmailOrPhone() && !!t)
            }
        },
        189807: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => o,
                cI: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-10_premium_tier_2_trial_offer_expiring_notice",
                label: "Premium Tier 2 Trial Offer Expiring Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
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
                l = n(294184),
                u = n.n(l),
                c = n(273465),
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
                    l = e.isShown,
                    c = e.hasBackground,
                    f = void 0 !== c && c,
                    p = e.className,
                    h = e.backgroundClassName;
                if (!l) return (0, i.jsx)(i.Fragment, {
                    children: n
                });
                var y = d[a],
                    b = y.border,
                    O = y.background;
                return (0, i.jsx)("div", {
                    ref: t,
                    className: u()(b, p),
                    children: (0, i.jsx)("div", {
                        className: u()(f ? O : s().background, h),
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
                l = n(242715),
                u = n(744564),
                c = n(720637),
                s = n(435949),
                f = n(791707),
                d = n(384411),
                p = n(4798),
                h = n(664625),
                y = n(61209),
                b = n(352980),
                O = n(179913),
                E = n(840922),
                v = n(464187),
                g = n(9430),
                m = n(473903),
                S = n(2590);

            function _(e, t) {
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
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
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
            var R = function(e) {
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
                    guildFilter: S.NgX.ALL_SERVERS,
                    everyoneFilter: !0,
                    roleFilter: !0
                }),
                Z = !1,
                k = 0,
                F = !1,
                U = !1;

            function B(e) {
                if (e instanceof p.Z) return e;
                var t = b.Z.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, c.e5)(e)
            }

            function G(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((0, f.Z)(e)) return null;
                null == t && (t = e.channel_id);
                var n = y.Z.getChannel(t);
                if (null == n || n.type === S.d4z.DM) return null;
                if (x.guildFilter === S.NgX.THIS_SERVER && n.getGuildId() !== v.Z.getGuildId()) return null;
                var r = e.author.id,
                    o = h.default.getId();
                if (E.Z.isBlocked(r) || r === o) return null;
                e = B(e);
                var i = !x.everyoneFilter,
                    a = !x.roleFilter;
                if (!(0, s.ZP)({
                        message: e,
                        userId: o,
                        suppressEveryone: i,
                        suppressRoles: a
                    })) return null;
                U && O.ZP.ackMessageId(n.id) !== e.id && (0, s.ZP)({
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
                    r = n("guildFilter", S.NgX.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
                D = {};
                var i = [];
                r && w.forEach((function(e) {
                    var t = G(e);
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
                    return !E.Z.isBlocked(e.author.id)
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
                var t = C(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(m.default, y.Z, b.Z, O.ZP)
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
            const q = new W(u.Z, {
                LOAD_RECENT_MENTIONS: function(e) {
                    var t = e.guildId;
                    M = !0;
                    null == t && x.guildFilter === S.NgX.THIS_SERVER && Y({
                        guildFilter: S.NgX.ALL_SERVERS
                    })
                },
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    var t = e.hasMoreAfter,
                        n = e.messages,
                        r = e.isAfter,
                        i = o().map(n, B);
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
                    k = (0, l.zO)();
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
                    if (x.guildFilter !== S.NgX.THIS_SERVER) return !1;
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
                    var o = G(n, t);
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
                    null != r && (w[n] = (0, c.wi)(r, e.message))
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
        292376: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => el
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(725105),
                l = n(179913),
                u = n(473903),
                c = n(168075),
                s = n(795308),
                f = n(633878);

            function d(e, t, n) {
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

            function h(e, t) {
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

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e, t) {
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

            function O(e, t) {
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
            const E = (0, c.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    c = O(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", b(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            y(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z",
                        fill: l,
                        className: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? s.Z.colors.INTERACTIVE_NORMAL : a,
                    u = e.colorClass,
                    c = void 0 === u ? "" : u,
                    y = h(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", p(function(e) {
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
                }({}, (0, f.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-2.651c-.498 0-.849.502-.849 1a3 3 0 1 1-6 0c0-.498-.351-1-.849-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z",
                        clipRule: "evenodd",
                        className: c
                    })
                }))
            }));
            var v = n(373438),
                g = n(294184),
                m = n.n(g),
                S = n(853158),
                _ = n(318715),
                I = n(316878),
                P = n(229633),
                T = n(489981),
                N = n(286203),
                A = n.n(N);

            function R(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return C(e)
            }

            function j(e, t) {
                return !t || "object" !== D(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }
            var D = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
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
                    var n, r = C(e);
                    if (t) {
                        var o = C(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return j(this, n)
                }
            }
            var L = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && w(e, t)
                }(n, e);
                var t = M(n);

                function n() {
                    R(this, n);
                    var e;
                    (e = t.apply(this, arguments)).animationScale = new S.Z.Value(1);
                    return e
                }
                var o = n.prototype;
                o.componentDidUpdate = function(e) {
                    e.count < this.props.count && !this.props.reducedMotion && S.Z.sequence([S.Z.timing(this.animationScale, {
                        toValue: 1.8,
                        duration: 300
                    }), S.Z.timing(this.animationScale, {
                        toValue: 1,
                        duration: 200
                    })]).start()
                };
                o.render = function() {
                    var e = this.props,
                        t = e.count,
                        n = e.className;
                    return 0 === t ? null : (0, r.jsx)(S.Z.div, {
                        className: m()(A().badge, n),
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

            function x(e) {
                var t = e.className,
                    n = P.Z.useExperiment({
                        location: "f79435_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    o = (0, _.ZP)([T.Z], (function() {
                        return n ? T.Z.getOverdueMessageReminderCount() : 0
                    }), [n]),
                    i = (0, _.ZP)([I.Z], (function() {
                        return I.Z.useReducedMotion
                    }));
                return n ? (0, r.jsx)(L, {
                    count: o,
                    className: t,
                    reducedMotion: i
                }) : null
            }
            var Z = n(418705),
                k = n(70418),
                F = n(917019),
                U = n(473419),
                B = n(930948),
                G = n(842227),
                V = n(858311),
                H = n(369710),
                Y = n(106673),
                z = n(496916);
            const Q = function() {
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
            var K = n(523649),
                W = n(571657),
                q = n(281110),
                X = n(165695),
                J = n(744564),
                $ = n(968449),
                ee = n(391438),
                te = n(2590);

            function ne(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function re(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            ne(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            ne(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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
            var ae = function(e, t) {
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

            function le(e) {
                J.Z.dispatch({
                    type: "NOTIFICATION_CENTER_SET_ACTIVE",
                    active: e
                })
            }

            function ue() {
                J.Z.dispatch({
                    type: "RESET_NOTIFICATION_CENTER"
                })
            }

            function ce(e, t) {
                return se.apply(this, arguments)
            }

            function se() {
                return (se = re((function(e, t) {
                    var n, r;
                    return ae(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return V.Z.loading ? [2] : [4, J.Z.dispatch({
                                    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
                                })];
                            case 1:
                                o.sent();
                                n = Math.ceil(V.Z.items.length / e.limit);
                                o.label = 2;
                            case 2:
                                o.trys.push([2, 5, , 7]);
                                return [4, ee.Z.get({
                                    url: te.ANM.NOTIF_CENTER_ITEMS(),
                                    trackedActionData: {
                                        event: W.a9.NOTIFICATION_CENTER_PAGE_FETCH,
                                        properties: function(e) {
                                            var t, r = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map((function(e) {
                                                return e.type
                                            }));
                                            return (0, X.iG)({
                                                page: n,
                                                items: r,
                                                item_count: r.length
                                            })
                                        }
                                    },
                                    query: ie({}, e)
                                })];
                            case 3:
                                r = o.sent();
                                null == t || t();
                                return [4, J.Z.dispatch({
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
                                return [4, J.Z.dispatch({
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

            function fe(e) {
                null != e.local_id ? (n = [e.local_id], J.Z.dispatch({
                    type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
                    localIds: n
                })) : (0, Y.RB)(e) ? (t = e.id, J.Z.dispatch({
                    type: "NOTIFICATION_CENTER_ITEMS_ACK",
                    optimistic: !0,
                    ids: [t]
                })) : function(e) {
                    de.apply(this, arguments)
                }(e.id);
                var t, n
            }

            function de() {
                return (de = re((function(e) {
                    return ae(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                J.Z.dispatch({
                                    type: "NOTIFICATION_CENTER_ITEMS_ACK",
                                    optimistic: !0,
                                    ids: [e]
                                });
                                return [4, q.ZP.post({
                                    url: te.ANM.NOTIF_CENTER_ITEMS_ACK(e)
                                })];
                            case 1:
                                t.sent();
                                return [3, 3];
                            case 2:
                                t.sent();
                                J.Z.dispatch({
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

            function pe(e) {
                return he.apply(this, arguments)
            }

            function he() {
                return (he = re((function(e) {
                    var t, n;
                    return ae(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = $.d$.getSetting();
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                J.Z.dispatch({
                                    type: "NOTIFICATION_CENTER_ITEM_DELETE",
                                    id: e.id
                                });
                                return [4, ee.Z.delete({
                                    url: te.ANM.NOTIF_CENTER_ITEMS(e.id),
                                    body: {
                                        item_type: (0, Y.RB)(e) ? "mention" : "regular"
                                    },
                                    trackedActionData: {
                                        event: W.a9.NOTIFICATION_CENTER_ITEM_DELETE,
                                        properties: {
                                            notification_center_id: e.id,
                                            acked: (0, Y.r)(e, t),
                                            item_type: e.type
                                        }
                                    }
                                })];
                            case 2:
                                r.sent();
                                return [3, 4];
                            case 3:
                                n = r.sent();
                                J.Z.dispatch({
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
            var ye = n(202958);

            function be(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Oe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ee(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ve(e) {
                ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ve(e)
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ee(e, t, n[t])
                    }))
                }
                return e
            }

            function me(e, t) {
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

            function Se(e, t) {
                return !t || "object" !== Pe(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _e(e, t) {
                _e = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _e(e, t)
            }

            function Ie(e, t) {
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
                    if ("string" == typeof e) return be(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return be(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Pe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Te(e) {
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
                    var n, r = ve(e);
                    if (t) {
                        var o = ve(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Se(this, n)
                }
            }
            var Ne = {
                tab: null,
                localItemAcks: {},
                hasNewMentions: !1,
                isDataStale: !1,
                isRefreshing: !1
            };
            var Ae = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _e(e, t)
                }(n, e);
                var t = Te(n);

                function n() {
                    Oe(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(K.Z);
                    if (null != e) {
                        var t;
                        (Ne = e).localItemAcks = function(e) {
                            var t = {},
                                n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var i, a = Object.entries(e)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                    var l = Ie(i.value, 2),
                                        u = l[0],
                                        c = l[1];
                                    Date.now() - c < 7776e6 && (t[u] = c)
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
                        }(null !== (t = Ne.localItemAcks) && void 0 !== t ? t : {});
                        Ne.isDataStale = !0
                    }
                };
                r.getState = function() {
                    return Ne
                };
                r.getTab = function() {
                    var e;
                    return null !== (e = Ne.tab) && void 0 !== e ? e : H.b1.ForYou
                };
                r.isLocalItemAcked = function(e) {
                    return null != Ne.localItemAcks[e]
                };
                r.hasNewMentions = function() {
                    return Ne.hasNewMentions
                };
                r.isDataStale = function() {
                    return Ne.isDataStale
                };
                r.isRefreshing = function() {
                    return Ne.isRefreshing
                };
                r.shouldReload = function() {
                    return Ne.hasNewMentions || Ne.isDataStale || Ne.isRefreshing
                };
                return n
            }(i.ZP.PersistedStore);
            Ae.displayName = "NotificationCenterStore";
            Ae.persistKey = "NotificationCenterStore";

            function Re() {
                Ne.hasNewMentions = !1;
                Ne.isDataStale = !1;
                Ne.isRefreshing = !1
            }
            const Ce = new Ae(J.Z, {
                MESSAGE_CREATE: function(e) {
                    var t = e.message;
                    (0, ye.bY)() && K.Z.hasMention(t.id) && (Ne.hasNewMentions = !0)
                },
                NOTIFICATION_CENTER_SET_TAB: function(e) {
                    Ne = me(ge({}, Ne), {
                        tab: e.tab
                    })
                },
                NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
                    e.localIds.forEach((function(e) {
                        Ne = me(ge({}, Ne), {
                            localItemAcks: me(ge({}, Ne.localItemAcks), Ee({}, e, Date.now()))
                        })
                    }))
                },
                NOTIFICATION_CENTER_REFRESH: function() {
                    Ne.isRefreshing = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: Re,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Re
            });
            var je = n(290679);

            function we(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function De(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Me(e, t) {
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
                    if ("string" == typeof e) return we(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return we(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Le, xe = function(e, t) {
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
                                    if (n = 1,
                                        r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                },
                Ze = function(e) {
                    var t = e.isFocused,
                        n = e.navigatedAway,
                        r = e.isDesktop,
                        a = e.withMentions,
                        l = void 0 !== a && a,
                        u = e.initialPageSize,
                        c = (0, i.e7)([Ce], (function() {
                            return Ce.shouldReload()
                        })),
                        s = o.useRef(!1),
                        f = Me(o.useState(!1), 2),
                        d = f[0],
                        p = f[1],
                        h = (0, i.cj)([V.Z], (function() {
                            return {
                                initialized: V.Z.initialized,
                                loading: V.Z.loading,
                                items: V.Z.items,
                                hasMore: V.Z.hasMore,
                                cursor: V.Z.cursor,
                                errored: V.Z.errored
                            }
                        })),
                        y = h.initialized,
                        b = h.loading,
                        O = h.items,
                        E = h.hasMore,
                        v = h.cursor,
                        g = h.errored,
                        m = (0, i.cj)([K.Z], (function() {
                            return {
                                everyoneFilter: K.Z.everyoneFilter,
                                roleFilter: K.Z.roleFilter
                            }
                        })),
                        S = m.roleFilter,
                        _ = m.everyoneFilter;
                    o.useEffect((function() {
                        le(!0);
                        return function() {
                            return le(!1)
                        }
                    }), []);
                    o.useEffect((function() {
                        y && t && (0, z.FT)(je.W.NOTIFICATION_CENTER)
                    }), [t, y]);
                    var I = Q();
                    o.useEffect((function() {
                        return function() {
                            r ? !I() && (g || O.length > 100) && ue() : n && O.length > 100 && ue()
                        }
                    }), [n, O, r, I, g]);
                    o.useEffect((function() {
                        y && !(c && t) || ce({
                            limit: null != u ? u : l ? 8 : 20,
                            with_mentions: l,
                            roles_filter: S,
                            everyone_filter: _
                        })
                    }), [y, c, t, l, S, _, u]);
                    var P, T, N = o.useCallback((T = (P = function(e) {
                        return xe(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (s.current || !y || !E || null == v || !e && g) return [3, 2];
                                    s.current = !0;
                                    p(!0);
                                    return [4, ce({
                                        after: v,
                                        with_mentions: l,
                                        roles_filter: S,
                                        everyone_filter: _,
                                        limit: l ? 8 : 20
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
                                De(o, n, r, i, a, "next", e)
                            }

                            function a(e) {
                                De(o, n, r, i, a, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function(e) {
                        return T.apply(this, arguments)
                    }), [y, E, v, g, l, S, _]);
                    return {
                        initialized: y,
                        loading: b,
                        items: O,
                        hasMore: E,
                        loadMore: N,
                        loadingMore: d,
                        setReadNotifItemToAcked: function(e) {
                            e.acked || (e.acked = !0)
                        },
                        errored: g
                    }
                },
                ke = n(457217),
                Fe = n(914964),
                Ue = n(479373),
                Be = n(473708),
                Ge = n(159378),
                Ve = n.n(Ge),
                He = n(502101),
                Ye = n.n(He),
                ze = function() {
                    return (0, r.jsxs)("div", {
                        className: Ve().container,
                        children: [(0, r.jsx)("img", {
                            className: Ve().image,
                            alt: "",
                            src: Ye()
                        }), (0, r.jsx)("div", {
                            className: Ve().title,
                            children: Be.Z.Messages.FOR_YOU_EMPTY_TITLE
                        }), (0, r.jsx)("div", {
                            className: Ve().body,
                            children: Be.Z.Messages.FOR_YOU_EMPTY_BODY
                        })]
                    })
                },
                Qe = n(385028),
                Ke = n(426089),
                We = n(883064),
                qe = n(924417),
                Xe = n(722406),
                Je = n(652591),
                $e = n(585622),
                et = n(211482),
                tt = n(278435),
                nt = n.n(tt),
                rt = n(313106),
                ot = n.n(rt),
                it = n(802547),
                at = n.n(it),
                lt = n(403058),
                ut = n.n(lt),
                ct = n(102552),
                st = n.n(ct),
                ft = n(566240),
                dt = n.n(ft),
                pt = n(43009),
                ht = n.n(pt),
                yt = n(640846),
                bt = n.n(yt),
                Ot = n(613651),
                Et = n.n(Ot),
                vt = n(615306),
                gt = n.n(vt),
                mt = n(479467),
                St = n.n(mt),
                _t = n(704923),
                It = n.n(_t);
            ! function(e) {
                e.CHECKED = "CHECKED";
                e.FRIENDS = "FRIENDS";
                e.SHARE_SCREEN = "SHARE_SCREEN";
                e.NEW_MESSAGE = "NEW_MESSAGE"
            }(Le || (Le = {}));
            var Pt, Tt = {
                CHECKED: at(),
                FRIENDS: st(),
                SHARE_SCREEN: St(),
                NEW_MESSAGE: Et()
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
            }(Pt || (Pt = {}));
            var Nt = {
                    MISSED_MESSAGES: bt(),
                    FRIEND_REQUEST_REMINDER: dt(),
                    SCHEDULED_GUILD_EVENT: ut(),
                    TOP_MESSAGES: ht(),
                    NOTIFICATION_CENTER: ot(),
                    UPDATE_PROFILE: It(),
                    FIND_FRIENDS: nt(),
                    ADD_FRIEND: nt(),
                    FIRST_MESSAGE: gt()
                },
                At = function(e) {
                    switch (e.type) {
                        case "lifecycle_item":
                            return function(e) {
                                switch (e.item_enum) {
                                    case H.AM.ADD_FRIEND:
                                        return Pt.ADD_FRIEND;
                                    case H.AM.FIND_FRIENDS:
                                        return Pt.FIND_FRIENDS;
                                    case H.AM.FIRST_MESSAGE:
                                        return Pt.FIRST_MESSAGE;
                                    case H.AM.UPDATE_PROFILE:
                                        return Pt.UPDATE_PROFILE;
                                    default:
                                        return Pt.NOTIFICATION_CENTER
                                }
                            }(e);
                        case "missed_messages":
                            return Pt.MISSED_MESSAGES;
                        case "friend_request_reminder":
                            return Pt.FRIEND_REQUEST_REMINDER;
                        case "scheduled_guild_event_started":
                            return Pt.SCHEDULED_GUILD_EVENT;
                        case "top_messages":
                            return Pt.TOP_MESSAGES;
                        default:
                            return Pt.NOTIFICATION_CENTER
                    }
                },
                Rt = function(e) {
                    switch (e.item_enum) {
                        case H.AM.UPDATE_PROFILE:
                            return "#83DDC5";
                        case H.AM.ADD_FRIEND:
                        case H.AM.FIND_FRIENDS:
                            return "#F47FFF";
                        case H.AM.FIRST_MESSAGE:
                            return "#FFDE4D";
                        default:
                            return s.Z.unsafe_rawColors.BRAND_500.css
                    }
                },
                Ct = n(257436),
                jt = n.n(Ct),
                wt = function(e) {
                    var t = e.mask;
                    return null == t ? null : (0, r.jsx)("div", {
                        className: jt().maskBackground,
                        style: {
                            backgroundColor: t.color.css
                        },
                        children: (0, r.jsx)("img", {
                            className: jt().maskIcon,
                            alt: "",
                            src: t.icon
                        })
                    })
                },
                Dt = o.memo((function(e) {
                    var t, n = e.item,
                        o = null,
                        i = !1;
                    if (null != n.icon_name) o = (0, r.jsx)("img", {
                        alt: "",
                        src: Nt[(t = n.icon_name, "icHighlight" === t ? Pt.TOP_MESSAGES : Pt.NOTIFICATION_CENTER)]
                    });
                    else if (null != n.other_user) {
                        var a = n.other_user instanceof Xe.Z ? n.other_user : new Xe.Z(n.other_user);
                        o = (0, r.jsx)("img", {
                            alt: "",
                            className: jt().avatar,
                            src: a.getAvatarURL(void 0, 40)
                        });
                        i = !0
                    } else o = null != n.icon_url ? (0, r.jsx)("img", {
                        alt: "",
                        src: n.icon_url
                    }) : (0, r.jsx)("img", {
                        alt: "",
                        src: Nt[At(n)]
                    });
                    var l = function(e) {
                        switch (e) {
                            case H.DY.GO_LIVE_PUSH:
                                return {
                                    icon: Tt.SHARE_SCREEN, color: s.Z.colors.BACKGROUND_ACCENT
                                };
                            case H.DY.FRIEND_REQUEST_ACCEPTED:
                                return {
                                    icon: Tt.CHECKED, color: s.Z.colors.STATUS_POSITIVE_BACKGROUND
                                };
                            case H.DY.FRIEND_REQUEST_PENDING:
                            case H.DY.FRIEND_SUGGESTION_CREATED:
                                return {
                                    icon: Tt.FRIENDS, color: s.Z.colors.BACKGROUND_ACCENT
                                };
                            case H.DY.DM_FRIEND_NUDGE:
                                return {
                                    icon: Tt.NEW_MESSAGE, color: s.Z.colors.BACKGROUND_ACCENT
                                };
                            case H.O7.INCOMING_FRIEND_REQUESTS:
                            case H.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                                return {
                                    icon: Tt.FRIENDS, color: s.Z.colors.BACKGROUND_ACCENT
                                };
                            default:
                                return null
                        }
                    }(n.type);
                    return (0, r.jsxs)(et.ZP, {
                        mask: null == l ? et.QS.AVATAR_DEFAULT : et.QS.AVATAR_STATUS_ROUND_16,
                        width: 40,
                        height: 40,
                        rightOverhang: 3,
                        bottomOverhang: 3,
                        className: jt().mask,
                        children: [(0, r.jsx)("div", {
                            className: jt().container,
                            style: i ? void 0 : {
                                backgroundColor: Rt(n)
                            },
                            children: o
                        }), (0, r.jsx)(wt, {
                            mask: l
                        })]
                    })
                })),
                Mt = n(560923),
                Lt = n(633338),
                xt = n.n(Lt);

            function Zt(e) {
                var t = e.userId,
                    n = o.useCallback((function(e) {
                        e.stopPropagation();
                        Mt.Z.cancelFriendRequest(t)
                    }), [t]),
                    i = o.useCallback((function(e) {
                        e.stopPropagation();
                        Mt.Z.addRelationship({
                            userId: t
                        })
                    }), [t]);
                return (0, r.jsxs)("div", {
                    className: xt().friendRequestContainer,
                    children: [(0, r.jsx)(k.Button, {
                        className: xt().acceptButton,
                        look: k.Button.Looks.FILLED,
                        color: k.Button.Colors.GREEN,
                        size: k.Button.Sizes.NONE,
                        onClick: i,
                        children: (0, r.jsx)(k.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: Be.Z.Messages.FRIEND_REQUEST_ACCEPT
                        })
                    }), (0, r.jsx)(k.Button, {
                        className: xt().ignoreButton,
                        look: k.Button.Looks.FILLED,
                        color: k.Button.Colors.PRIMARY,
                        size: k.Button.Sizes.NONE,
                        onClick: n,
                        children: (0, r.jsx)(k.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: Be.Z.Messages.FRIEND_REQUEST_IGNORE
                        })
                    })]
                })
            }
            var kt = n(839184),
                Ft = n(154451),
                Ut = n(994655);

            function Bt(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Gt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Bt(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            Bt(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Vt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ht(e, t) {
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
            var Yt = function(e, t) {
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
                            }([i, l])
                        }
                    }
                },
                zt = function(e) {
                    var t = e.item,
                        n = e.closePopout;
                    return (0, r.jsx)(k.Menu, {
                        navId: "notification-actions",
                        onClose: n,
                        onSelect: n,
                        "aria-label": Be.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                        children: (0, r.jsx)(k.MenuItem, {
                            id: "delete",
                            label: Be.Z.Messages.DELETE,
                            icon: Ut.Z,
                            action: Gt((function() {
                                return Yt(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, pe(t)];
                                        case 1:
                                            e.sent();
                                            return [2]
                                    }
                                }))
                            }))
                        })
                    })
                },
                Qt = o.memo((function(e) {
                    var t = e.item;
                    return (0, r.jsx)(k.Popout, {
                        renderPopout: function(e) {
                            return (0,
                                r.jsx)(zt, Ht(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        Vt(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                item: t
                            }))
                        },
                        position: "bottom",
                        align: "right",
                        animation: k.Popout.Animation.NONE,
                        children: function(e) {
                            var t = e.onClick;
                            return (0, r.jsx)(kt.ZP, {
                                tooltip: Be.Z.Messages.MORE,
                                color: kt.YX.TERTIARY,
                                icon: (0, r.jsx)(Ft.Z, {
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
                Kt = n(25300),
                Wt = n.n(Kt),
                qt = n(572149),
                Xt = n.n(qt);

            function Jt(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function $t(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Jt(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            Jt(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function en(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
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

            function nn(e) {
                var t, n, o, i = e.item,
                    a = null === (t = i.message) || void 0 === t ? void 0 : t.content;
                if (null == a) return (0, r.jsx)("div", {
                    children: " "
                });
                var l = null !== (o = u.default.getUser(null === (n = i.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== o ? o : new Xe.Z(i.other_user),
                    c = We.Z.parse(a);
                return (0, r.jsxs)("div", {
                    className: xt().messagePreviewContainer,
                    children: [(0, r.jsx)(Qe.Z, {
                        user: l,
                        size: k.AvatarSizes.SIZE_24
                    }), (0, r.jsx)(k.Text, {
                        className: xt().messagePreviewText,
                        variant: "text-sm/normal",
                        lineClamp: 2,
                        children: c
                    })]
                })
            }

            function rn(e) {
                var t = e.item.callout;
                if (null == t) return null;
                var n = We.Z.parse(t);
                return (0, r.jsx)("div", {
                    className: xt().calloutContainer,
                    children: (0, r.jsx)(k.Text, {
                        variant: "text-sm/normal",
                        lineClamp: 2,
                        children: n
                    })
                })
            }

            function on(e) {
                var t = e.item,
                    n = Xt(),
                    o = Be.Z.Messages.NOTIFICATION_CENTER_TODO;
                if (t.completed) {
                    n = Wt();
                    o = Be.Z.Messages.NOTIFICATION_CENTER_DONE
                }
                return (0, r.jsxs)("div", {
                    className: xt().lifecycleContainer,
                    children: [(0, r.jsx)("img", {
                        className: xt().checkbox,
                        alt: "",
                        src: n
                    }), (0, r.jsx)(k.Text, {
                        className: xt().lifecycleText,
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        children: o
                    })]
                })
            }
            var an = o.memo((function(e) {
                    var t, a = e.item,
                        l = e.ackedBeforeId,
                        u = function(e, t) {
                            var n = (0, i.e7)([Ce], (function() {
                                return null != e.local_id && Ce.isLocalItemAcked(e.local_id)
                            }));
                            return !e.forceUnacked && (n || (0, Y.r)(e, t))
                        }(a, l),
                        c = o.useCallback($t((function() {
                            var e, t, o, i;
                            return tn(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        u || fe(a);
                                        if (null != a.item_enum && a.item_enum === H.AM.FIND_FRIENDS) {
                                            (0, k.openModalLazy)($t((function() {
                                                var e, t;
                                                return tn(this, (function(o) {
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
                                                                            en(e, t, n[t])
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
                                        if (null == (e = $e.Z.safeParseWithQuery(a.deeplink))) return [2];
                                        t = e.hostname;
                                        o = e.path;
                                        if (null == t || null == o) return [2];
                                        if (!$e.Z.isDiscordHostname(t)) return [3, 3];
                                        if (null == (i = o.match("^/users/(\\d+)")) || 2 !== i.length) return [3, 1];
                                        (0, qe.m)({
                                            userId: i[1],
                                            analyticsLocation: {
                                                section: te.jXE.NOTIFICATION_CENTER
                                            }
                                        });
                                        return [3, 3];
                                    case 1:
                                        return [4, (0, Ke.Z)(o)];
                                    case 2:
                                        l.sent();
                                        l.label = 3;
                                    case 3:
                                        Je.default.track(te.rMx.NOTIFICATION_CENTER_ACTION, {
                                            action_type: H.ud.CLICKED,
                                            notification_center_id: a.id,
                                            item_type: a.type,
                                            acked: u
                                        });
                                        l.label = 4;
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), [a, u]),
                        s = null;
                    a.type === H.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user && (s = (0, r.jsx)(Zt, {
                        userId: a.other_user.id
                    }));
                    var f = null != a.local_id;
                    return (0, r.jsxs)("div", {
                        className: xt().row,
                        children: [(0, r.jsxs)(k.ClickableContainer, {
                            className: xt().rowContent,
                            focusProps: {
                                offset: 4
                            },
                            "aria-label": a.body,
                            onClick: c,
                            children: [u ? null : (0, r.jsx)("div", {
                                className: xt().unread
                            }), (0, r.jsx)(Dt, {
                                item: a
                            }), (0, r.jsxs)("div", {
                                className: xt().body,
                                children: ["lifecycle_item" === a.type && null != a.item_enum && (0, r.jsx)(on, {
                                    item: a
                                }), (0, r.jsx)(k.Text, {
                                    variant: "text-md/normal",
                                    color: u ? "text-muted" : "text-normal",
                                    children: We.Z.parse(a.body)
                                }), null != (null === (t = a.message) || void 0 === t ? void 0 : t.content) ? (0, r.jsx)(nn, {
                                    item: a
                                }) : null, null != a.callout ? (0, r.jsx)(rn, {
                                    item: a
                                }) : null, (0, r.jsx)(k.Text, {
                                    variant: "text-xs/medium",
                                    color: u ? "text-muted" : "header-secondary",
                                    children: (0, Y.a3)(G.default.extractTimestamp(a.id))
                                }), s]
                            })]
                        }), f ? null : (0, r.jsx)(Qt, {
                            item: a
                        })]
                    })
                })),
                ln = o.memo((function(e) {
                    var t = e.items,
                        n = $.d$.useSetting();
                    return (0, r.jsx)(r.Fragment, {
                        children: t.map((function(e) {
                            return (0, r.jsx)(an, {
                                item: e,
                                ackedBeforeId: n
                            }, e.id)
                        }))
                    })
                })),
                un = n(452506),
                cn = n.n(un);

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
                var t = e.initialized,
                    n = e.items,
                    i = e.loading,
                    a = e.loadMore,
                    l = o.useRef(null),
                    u = (0, Fe.Z)("for-you", l);
                (0, Ue.Z)({
                    type: W.nv.VIEW,
                    name: W.zs.NOTIFICATION_CENTER_LANDING,
                    properties: {
                        empty: 0 === n.length
                    }
                }, {
                    disableTrack: !t
                }, [t]);
                var c = function() {
                    var e, t = null === (e = l.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null != t) {
                        t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && a()
                    }
                };
                return t ? 0 === n.length ? (0, r.jsx)(ze, {}) : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(ke.bG, {
                        navigator: u,
                        children: (0, r.jsx)(ke.SJ, {
                            children: function(e) {
                                var t = e.ref,
                                    o = dn(e, ["ref"]);
                                return (0, r.jsxs)(k.AdvancedScroller, fn(function(e) {
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
                                }({
                                    className: cn().container,
                                    ref: function(e) {
                                        l.current = e;
                                        var n;
                                        t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    }
                                }, o), {
                                    onScroll: c,
                                    children: [(0, r.jsx)(ln, {
                                        items: n
                                    }), i ? (0, r.jsx)(k.Spinner, {
                                        className: cn().spinner
                                    }) : null]
                                }))
                            }
                        })
                    })
                }) : (0, r.jsx)(k.Spinner, {
                    className: cn().loadingPlaceholder
                })
            }

            function hn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function yn(e, t) {
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

            function bn(e, t) {
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

            function On(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function En(e, t) {
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

            function vn(e, t) {
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
            const gn = (0, c.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    c = vn(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", En(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            On(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M12 4.66668L11.06 3.72668L6.83332 7.95335L7.77332 8.89335L12 4.66668ZM14.8266 3.72668L7.77332 10.78L4.98665 8.00002L4.04665 8.94002L7.77332 12.6667L15.7733 4.66668L14.8266 3.72668ZM0.273315 8.94002L3.99998 12.6667L4.93998 11.7267L1.21998 8.00002L0.273315 8.94002Z",
                        fill: l,
                        className: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? s.Z.colors.INTERACTIVE_NORMAL : a,
                    u = e.colorClass,
                    c = void 0 === u ? "" : u,
                    d = bn(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", yn(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            hn(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M16.707 8.707a1 1 0 0 0-1.414-1.414l-3.25 3.25a1 1 0 0 0 1.414 1.414l3.25-3.25Zm-13 2.586a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414-1.414l-4.5-4.5Zm18-1.586a1 1 0 0 0-1.414-1.414L13 15.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8Z",
                        clipRule: "evenodd",
                        className: c
                    })
                }))
            }));
            var mn = n(813357),
                Sn = n(87931),
                _n = n(531441),
                In = n(299192),
                Pn = n(784426),
                Tn = n(840922),
                Nn = n(180695),
                An = n(362987),
                Rn = n.n(An);

            function Cn(e) {
                var t = e.closePopout,
                    n = (0, i.e7)([Tn.Z], (function() {
                        return Tn.Z.getPendingCount()
                    }));
                return (0, r.jsx)(k.TooltipContainer, {
                    text: Be.Z.Messages.VIEW_FRIEND_REQUESTS,
                    children: (0, r.jsxs)(k.Clickable, {
                        className: Rn().friendRequestsButton,
                        onClick: function() {
                            Je.default.track(te.rMx.NOTIFICATION_CENTER_ACTION, {
                                action_type: H.ud.FRIEND_REQUESTS_BUTTON_CLICK
                            });
                            (0, Pn.uL)(te.Z5c.FRIENDS);
                            In.Z.setSection(te.pJs.PENDING);
                            t()
                        },
                        children: [(0, r.jsx)(Nn.Z, {}), (0, r.jsx)(_n.mA, {
                            count: n,
                            color: Sn.Z.BACKGROUND_ACCENT
                        })]
                    })
                })
            }
            var jn = n(349385),
                wn = n.n(jn);

            function Dn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Mn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Dn(e, t, n[t])
                    }))
                }
                return e
            }

            function Ln(e) {
                return (0, a.sv)() ? (0, r.jsx)(xn, Mn({}, e)) : (0, r.jsx)(Zn, Mn({}, e))
            }

            function xn(e) {
                var t = e.tab,
                    n = e.setTab,
                    o = e.children,
                    i = e.badgeState,
                    a = e.closePopout,
                    l = P.Z.useExperiment({
                        location: "489e3f_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    u = (0, _.ZP)([T.Z], (function() {
                        return T.Z.getMessageReminders()
                    })).length;
                return (0, r.jsxs)(mn.h4, {
                    className: m()(wn().header, wn().expanded),
                    children: [(0, r.jsxs)("div", {
                        className: m()(wn().expandedInboxHeader),
                        children: [(0, r.jsx)(E, {
                            className: wn().inboxIcon
                        }), (0, r.jsx)(k.Text, {
                            className: wn().inboxTitle,
                            variant: "text-lg/semibold",
                            children: Be.Z.Messages.INBOX
                        }), (0, r.jsx)(Cn, {
                            closePopout: a
                        })]
                    }), (0, r.jsxs)("div", {
                        className: m()(wn().expandedTabSection),
                        children: [(0, r.jsxs)(k.TabBar, {
                            selectedItem: t,
                            type: "top-pill",
                            onItemSelect: n,
                            children: [(0, r.jsxs)(k.TabBar.Item, {
                                id: Z.X.FOR_YOU,
                                "aria-label": Be.Z.Messages.FOR_YOU,
                                className: m()(wn().tab, wn().expanded, Dn({}, wn().active, t === Z.X.FOR_YOU)),
                                children: [Be.Z.Messages.FOR_YOU, (null == i ? void 0 : i.badgeForYou) ? (0, r.jsx)(_n.fW, {
                                    color: Sn.Z.STATUS_DANGER,
                                    className: m()(wn().iconBadge)
                                }) : null]
                            }), (0, r.jsx)(k.TabBar.Item, {
                                id: Z.X.UNREADS,
                                className: m()(wn().tab, wn().expanded, Dn({}, wn().active, t === Z.X.UNREADS)),
                                children: Be.Z.Messages.UNREADS_TAB_LABEL
                            }), (0, r.jsx)(k.TabBar.Item, {
                                "aria-label": Be.Z.Messages.MENTIONS,
                                id: Z.X.MENTIONS,
                                className: m()(wn().tab, wn().expanded, Dn({}, wn().active, t === Z.X.MENTIONS)),
                                children: Be.Z.Messages.MENTIONS
                            }), l ? (0, r.jsxs)(k.TabBar.Item, {
                                "aria-label": "todos",
                                id: Z.X.TODOS,
                                className: m()(wn().tab, wn().expanded, Dn({}, wn().active, t === Z.X.TODOS)),
                                children: [Be.Z.Messages.MESSAGE_REMINDERS_HEADER, u > 0 ? (0, r.jsx)(_n.fW, {
                                    color: Sn.Z.STATUS_DANGER,
                                    className: m()(wn().iconBadge)
                                }) : null]
                            }) : null]
                        }), (0, r.jsx)("div", {
                            className: wn().controls,
                            children: o
                        })]
                    })]
                })
            }

            function Zn(e) {
                var t = e.tab,
                    n = e.setTab,
                    o = e.children,
                    i = P.Z.useExperiment({
                        location: "489e3f_2"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    l = (0, a.sv)();
                return (0, r.jsxs)(mn.h4, {
                    className: wn().header,
                    children: [(0, r.jsxs)(k.TabBar, {
                        selectedItem: t,
                        type: "top-pill",
                        onItemSelect: n,
                        className: wn().tabBar,
                        children: [l ? (0, r.jsx)(k.TabBar.Item, {
                            id: Z.X.FOR_YOU,
                            className: m()(wn().tab, Dn({}, wn().active, t === Z.X.FOR_YOU)),
                            children: Be.Z.Messages.FOR_YOU
                        }) : null, (0, r.jsx)(k.TabBar.Item, {
                            id: Z.X.MENTIONS,
                            className: m()(wn().tab, Dn({}, wn().active, t === Z.X.MENTIONS)),
                            children: Be.Z.Messages.MENTIONS
                        }), (0, r.jsx)(k.TabBar.Item, {
                            id: Z.X.UNREADS,
                            className: m()(wn().tab, Dn({}, wn().active, t === Z.X.UNREADS)),
                            children: Be.Z.Messages.UNREADS_TAB_LABEL
                        }), i ? (0,
                            r.jsx)(k.TabBar.Item, {
                            id: Z.X.TODOS,
                            className: m()(wn().tab, Dn({}, wn().active, t === Z.X.TODOS)),
                            children: Be.Z.Messages.MESSAGE_REMINDERS_HEADER
                        }) : null]
                    }), (0, r.jsx)("div", {
                        className: wn().controls,
                        children: o
                    })]
                })
            }
            var kn = n(807933),
                Fn = n.n(kn);

            function Un(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Bn(e) {
                return function(e) {
                    if (Array.isArray(e)) return Un(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Un(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Un(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Gn(e) {
                var t = e.onClick;
                return (0, r.jsx)(kt.ZP, {
                    tooltip: Be.Z.Messages.MARK_ALL_AS_READ,
                    color: kt.YX.SECONDARY,
                    icon: (0, r.jsx)(gn, {}),
                    onClick: t
                })
            }

            function Vn(e) {
                var t = e.setTab,
                    n = e.badgeState,
                    a = e.closePopout,
                    l = function() {
                        var e = Ze({
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
                    u = l.initialized,
                    c = l.items,
                    s = l.loading,
                    f = l.loadMore,
                    d = (0, i.e7)([V.Z], (function() {
                        return V.Z.localItems
                    })),
                    p = o.useMemo((function() {
                        return Bn(Bn(c).concat(Bn(d)).sort((function(e, t) {
                            return -1 * G.default.compare(e.id, t.id)
                        })))
                    }), [c, d]),
                    h = c.length > 0 ? c[0] : null,
                    y = $.d$.useSetting(),
                    b = o.useMemo((function() {
                        if (null != h && G.default.compare(h.id, y) <= 0) return !1;
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, o = p[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var i = r.value;
                                if (G.default.compare(i.id, y) <= 0) break;
                                if (!(0, Y.r)(i, y)) return !0
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
                    className: Fn().container,
                    children: [(0, r.jsx)(Ln, {
                        tab: Z.X.FOR_YOU,
                        setTab: t,
                        badgeState: n,
                        closePopout: a,
                        children: b ? (0, r.jsx)(Gn, {
                            onClick: function() {
                                if (null != h) {
                                    $.d$.updateSetting(h.id);
                                    Je.default.track(te.rMx.NOTIFICATION_CENTER_ACTION, {
                                        action_type: H.ud.MARK_ALL_READ
                                    })
                                }
                            }
                        }) : null
                    }), (0, r.jsx)(pn, {
                        initialized: u,
                        items: p,
                        loading: s,
                        loadMore: f
                    })]
                })
            }
            var Hn = n(441143),
                Yn = n.n(Hn),
                zn = n(730381),
                Qn = n.n(zn),
                Kn = n(971402),
                Wn = n(720419),
                qn = n(621647),
                Xn = n(773011),
                Jn = n(931893),
                $n = n(343318),
                er = n(61209),
                tr = n(352980);

            function nr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function rr(e, t) {
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
                    if ("string" == typeof e) return nr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var or = n(210595),
                ir = n(382060),
                ar = n(4798);
            var lr = n(487868),
                ur = n(567403),
                cr = n(124251),
                sr = n(457997);

            function fr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function dr(e, t) {
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

            function pr(e, t) {
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

            function hr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function yr(e, t) {
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

            function br(e, t) {
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
            const Or = (0, c.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    c = br(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", yr(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            hr(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        d: "M6.11111111,3.88888889 L6.11111111,0.833333333 L9.16666667,3.88888889 L6.11111111,3.88888889 Z M1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,3.33333333 L6.66666667,0 L1.11111111,0 Z",
                        transform: "translate(3 3)"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? s.Z.colors.INTERACTIVE_NORMAL : a,
                    u = e.colorClass,
                    c = void 0 === u ? "" : u,
                    d = pr(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsxs)("svg", dr(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            fr(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, r.jsx)("path", {
                            fill: "string" == typeof l ? l : l.css,
                            fillRule: "evenodd",
                            d: "M18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5a.5.5 0 0 1 .5.5V5a5 5 0 0 0 5 5h2.5a.5.5 0 0 1 .5.5V18a4 4 0 0 1-4 4Zm3.7-14.064a.045.045 0 0 1-.04.064H19a3 3 0 0 1-3-3V2.341c0-.034.034-.056.064-.041.3.144.575.34.815.579L21.12 7.12a3 3 0 0 1 .58.815Z",
                            clipRule: "evenodd",
                            className: c
                        })
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "a",
                            children: (0, r.jsx)("path", {
                                fill: "#fff",
                                d: "M0 0h24v24H0z"
                            })
                        })
                    })]
                }))
            }));
            var Er = n(465637),
                vr = n(797085),
                gr = n.n(vr);

            function mr(e) {
                var t = e.Icon,
                    n = e.header,
                    o = e.tip;
                return (0, r.jsxs)("div", {
                    className: gr().container,
                    children: [(0, r.jsxs)("div", {
                        className: gr().iconContainer,
                        children: [(0, r.jsx)(t, {
                            className: gr().icon,
                            width: 36,
                            height: 36
                        }), (0, r.jsx)(Er.Z, {
                            className: gr().stars
                        })]
                    }), (0, r.jsx)(k.Heading, {
                        className: gr().header,
                        variant: "heading-xl/semibold",
                        children: n
                    }), (0, r.jsxs)(k.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: [(0, r.jsxs)(k.Text, {
                            tag: "span",
                            className: gr().protip,
                            variant: "text-xs/bold",
                            color: "text-positive",
                            children: [Be.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":", " "]
                        }), o]
                    })]
                })
            }
            var Sr = n(452148),
                _r = n.n(Sr),
                Ir = n(74244),
                Pr = n.n(Ir);

            function Tr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Nr(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Ar(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Nr(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            Nr(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Rr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Cr(e, t) {
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

            function jr(e, t) {
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
                    if ("string" == typeof e) return Tr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var wr = function(e, t) {
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
                },
                Dr = {
                    offset: {
                        left: 4,
                        right: -12
                    }
                };

            function Mr(e) {
                var t = e.setTab,
                    n = e.closePopout,
                    a = (0, i.e7)([T.Z], (function() {
                        return T.Z.getMessageReminders()
                    }));
                o.useEffect((function() {
                    return function() {
                        (0, Jn.Mf)()
                    }
                }), []);
                var l = jr(o.useState(!1), 2),
                    u = l[0],
                    c = l[1],
                    s = o.useMemo((function() {
                        return a.filter((function(e) {
                            return null == e.dueAt || e.dueAt < new Date
                        }))
                    }), [a]),
                    f = u ? a : s;
                ! function(e) {
                    var t = (0, i.Wu)([er.Z, tr.Z], (function() {
                            return e.filter((function(e) {
                                return null != er.Z.getChannel(e.channelId)
                            })).map((function(e) {
                                return tr.Z.getMessage(e.channelId, e.messageId)
                            })).filter((function(e) {
                                return null != e
                            }))
                        })),
                        n = e.filter((function(e) {
                            return null == tr.Z.getMessage(e.channelId, e.messageId)
                        })),
                        r = rr(o.useState(0 === n.length), 2),
                        a = r[0],
                        l = r[1];
                    o.useEffect((function() {
                        (0, Jn.sE)()
                    }), []);
                    o.useEffect((function() {
                        if (!a) {
                            n.forEach((function(e) {
                                try {
                                    Wn.Z.fetchMessages({
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
                            l(!0)
                        }
                    }), [n, a])
                }(f.filter((function(e) {
                    return !(0, $n.uX)(e)
                })));
                return (0, r.jsxs)("div", {
                    className: _r().container,
                    children: [(0, r.jsx)(Ln, {
                        tab: Z.X.TODOS,
                        setTab: t,
                        closePopout: n
                    }), (0, r.jsxs)("div", {
                        className: _r().headerText,
                        children: [(0, r.jsx)(k.Heading, {
                            variant: "heading-lg/bold",
                            children: u ? Be.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : Be.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                        }), (0, r.jsx)(k.Anchor, {
                            onClick: function() {
                                return c(!u)
                            },
                            children: (0, r.jsx)(k.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: u ? Be.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
                                    count: s.length
                                }) : Be.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
                                    count: a.length
                                })
                            })
                        })]
                    }), 0 === f.length ? (0, r.jsx)(xr, {}) : null, (0, r.jsx)(k.AdvancedScrollerThin, {
                        children: f.map((function(e) {
                            return t = e, [(0, r.jsx)(Lr, {
                                messageId: t.messageId
                            }, t.messageId)];
                            var t
                        }))
                    })]
                })
            }

            function Lr(e) {
                var t = e.messageId,
                    o = (0, i.e7)([T.Z], (function() {
                        return T.Z.getMessageReminders().find((function(e) {
                            return e.messageId === t
                        }))
                    }));
                Yn()(null != o, "should not be rendering a to-do message without a to-do message");
                var a = o.complete,
                    l = (0, i.e7)([tr.Z], (function() {
                        return tr.Z.getMessage(o.channelId, o.messageId)
                    })),
                    c = function(e) {
                        var t, n, r, o = tr.Z.getMessage(e.channelId, e.messageId),
                            i = u.default.getUser(e.authorId),
                            a = er.Z.getChannel(e.channelId),
                            l = null != i ? i : new Xe.Z({
                                id: e.authorId,
                                username: e.authorSummary
                            }),
                            c = new ar.Z({
                                id: e.messageId,
                                channel_id: e.channelId,
                                author: l,
                                content: e.messageSummary
                            }),
                            s = null == e.guildId ? new ir.cE({
                                id: e.channelId,
                                type: or.d.DM,
                                name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
                                guild_id: "",
                                recipients: [null !== (n = e.authorId) && void 0 !== n ? n : ""]
                            }) : new ir.DA({
                                id: e.channelId,
                                type: null == e.guildId ? or.d.DM : or.d.GUILD_TEXT,
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
                    d = er.Z.getChannel(f.id),
                    p = (0, Xn.ZP)(d, !0),
                    h = null != p ? p : f.name,
                    y = (0, i.e7)([ur.Z], (function() {
                        return ur.Z.getGuild(null == f ? void 0 : f.guild_id)
                    })),
                    b = null != f ? (0, qn.x)(f) : null,
                    O = null,
                    E = void 0;
                if (null != o.dueAt)
                    if (o.dueAt > new Date) {
                        E = "text-muted";
                        O = Be.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                            duration: Qn().duration(o.dueAt.getTime() - Date.now(), "millisecond").humanize()
                        })
                    } else {
                        E = "text-danger";
                        O = Be.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                            duration: Qn().duration(Date.now() - o.dueAt.getTime(), "millisecond").humanize()
                        })
                    } return (0, r.jsxs)("div", {
                    className: Pr().container,
                    children: [(0, r.jsxs)("div", {
                        className: _r().messageHeader,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: _r().messageInfo,
                                children: [null != y ? (0, r.jsx)(cr.Z, {
                                    className: _r().guildIcon,
                                    guild: y,
                                    size: cr.Z.Sizes.SMALL,
                                    active: !0
                                }) : (0, r.jsx)(k.Avatar, {
                                    "aria-hidden": !0,
                                    src: null != b ? b : n(823653),
                                    size: k.AvatarSizes.SIZE_32
                                }), (0, r.jsx)(k.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    selectable: !0,
                                    children: h
                                })]
                            }), null != o.notes && o.notes.length > 0 ? (0, r.jsxs)(k.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: _r().notes,
                                selectable: !0,
                                children: [(0,
                                    r.jsx)(Or, {
                                    width: 12,
                                    height: 12
                                }), o.notes]
                            }) : null, null != O ? (0, r.jsx)(k.Text, {
                                variant: "text-sm/medium",
                                color: E,
                                style: {
                                    marginTop: 4
                                },
                                children: O
                            }) : null]
                        }), (0, r.jsxs)("div", {
                            className: _r().reminderActions,
                            children: [(0, r.jsx)(k.TooltipContainer, {
                                text: Be.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
                                children: (0, r.jsx)(k.Clickable, {
                                    onClick: function(e) {
                                        return (0, Kn.jW)(e, Ar((function() {
                                            var e, t;
                                            return wr(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, n.e(3404).then(n.bind(n, 903404))];
                                                    case 1:
                                                        e = o.sent(), t = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(t, Cr(function(e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        r = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                    }))));
                                                                    r.forEach((function(t) {
                                                                        Rr(e, t, n[t])
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
                                    className: _r().clock,
                                    children: (0, r.jsx)(sr.Z, {})
                                })
                            }), (0, r.jsx)(k.Checkbox, {
                                type: k.Checkbox.Types.INVERTED,
                                value: a,
                                onChange: function(e, t) {
                                    (0, Jn.Y_)(o.messageId, t)
                                }
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: m()(Pr().messageContainer, _r().unloadedMessage, Rr({}, _r().disabledMessage, a)),
                        children: [(0, r.jsx)(lr.Z, {
                            message: s,
                            channel: f,
                            className: Pr().message,
                            compact: $.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: Dr,
                            trackAnnouncementViews: !0
                        }, s.id), (0, r.jsxs)("div", {
                            className: _r().actions,
                            children: [null == l ? (0, r.jsx)(k.Button, {
                                onClick: function() {
                                    Wn.Z.fetchMessages({
                                        channelId: o.channelId,
                                        limit: 1,
                                        jump: {
                                            messageId: o.messageId,
                                            flash: !1,
                                            offset: 1
                                        }
                                    })
                                },
                                size: k.Button.Sizes.MIN,
                                color: k.Button.Colors.TRANSPARENT,
                                className: _r().loadButton,
                                children: (0, r.jsx)(k.Text, {
                                    variant: "text-xs/normal",
                                    children: "Load"
                                })
                            }) : null, (0, r.jsx)(k.Button, {
                                onClick: function() {
                                    (0, Pn.uL)(te.Z5c.CHANNEL(null == f ? void 0 : f.getGuildId(), o.channelId, o.messageId))
                                },
                                size: k.Button.Sizes.MIN,
                                color: k.Button.Colors.TRANSPARENT,
                                className: _r().loadButton,
                                children: (0, r.jsx)(k.Text, {
                                    variant: "text-xs/normal",
                                    children: Be.Z.Messages.JUMP
                                })
                            })]
                        })]
                    })]
                })
            }

            function xr() {
                return (0, i.e7)([T.Z], (function() {
                    return T.Z.getMessageReminders().length > 0
                })) ? null : (0, r.jsx)(mr, {
                    Icon: gn,
                    header: Be.Z.Messages.MESSAGE_REMINDERS_EMPTY,
                    tip: Be.Z.Messages.MESSAGE_REMINDERS_EMPTY_TIP
                })
            }
            const Zr = function(e) {
                    var t = e.guildFilter,
                        n = e.roleFilter,
                        r = e.everyoneFilter;
                    J.Z.dispatch({
                        type: "SET_RECENT_MENTIONS_FILTER",
                        guildFilter: t,
                        roleFilter: n,
                        everyoneFilter: r
                    })
                },
                kr = function(e) {
                    J.Z.dispatch({
                        type: "TRUNCATE_MENTIONS",
                        size: e
                    })
                },
                Fr = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : te.DJj,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    J.Z.dispatch({
                        type: "LOAD_RECENT_MENTIONS",
                        guildId: n
                    });
                    q.ZP.get({
                        url: te.ANM.MENTIONS,
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
                        J.Z.dispatch({
                            type: "LOAD_RECENT_MENTIONS_SUCCESS",
                            messages: n,
                            isAfter: null != e,
                            hasMoreAfter: n.length >= te.DJj
                        })
                    }), (function() {
                        J.Z.dispatch({
                            type: "LOAD_RECENT_MENTIONS_FAILURE"
                        })
                    }))
                },
                Ur = function(e) {
                    q.ZP.delete({
                        url: te.ANM.MENTIONS_MESSAGE_ID(e),
                        retries: 2,
                        oldFormErrors: !0
                    });
                    J.Z.dispatch({
                        type: "RECENT_MENTION_DELETE",
                        id: e
                    })
                };
            var Br = n(634698),
                Gr = n(715107),
                Vr = n(208541),
                Hr = n(189865),
                Yr = n(416575),
                zr = n.n(Yr);

            function Qr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Kr(e, t) {
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
                    if ("string" == typeof e) return Qr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Wr(e) {
                var t = e.className,
                    n = e.onJump,
                    i = Kr(o.useState(!1), 2),
                    a = i[0],
                    l = i[1];
                return (0, r.jsx)(k.Clickable, {
                    className: m()(zr().jumpButton, t),
                    onClick: function(e) {
                        l(!0);
                        n(e)
                    },
                    children: a ? (0, r.jsx)(k.Spinner, {
                        type: k.Spinner.Type.PULSING_ELLIPSIS
                    }) : (0, r.jsx)(k.Text, {
                        variant: "text-xs/normal",
                        className: zr().text,
                        children: Be.Z.Messages.JUMP
                    })
                })
            }
            var qr = n(879999),
                Xr = n(226436),
                Jr = n.n(Xr),
                $r = function(e) {
                    var t = e.text,
                        n = e.icon,
                        o = e.onClick,
                        i = n;
                    return (0, r.jsxs)(k.Button, {
                        className: Jr().button,
                        innerClassName: Jr().buttonInner,
                        onClick: o,
                        children: [(0, r.jsx)(i, {}), (0, r.jsx)(k.Text, {
                            variant: "text-md/semibold",
                            color: "none",
                            children: t
                        })]
                    })
                };

            function eo(e) {
                var t = e.closePopout,
                    n = e.onSelect,
                    o = (0, i.e7)([er.Z, Gr.Z], (function() {
                        return er.Z.getChannel(Gr.Z.getChannelId())
                    })),
                    a = (0, i.cj)([K.Z], (function() {
                        return {
                            everyoneFilter: K.Z.everyoneFilter,
                            roleFilter: K.Z.roleFilter,
                            guildFilter: K.Z.guildFilter
                        }
                    })),
                    l = a.everyoneFilter,
                    u = a.roleFilter,
                    c = a.guildFilter;
                return (0, r.jsxs)(k.Menu, {
                    navId: "mentions-filter",
                    "aria-label": Be.Z.Messages.FILTER,
                    onClose: t,
                    onSelect: n,
                    children: [(0, r.jsx)(k.MenuCheckboxItem, {
                        id: "Everyone",
                        label: Be.Z.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
                        action: function() {
                            Zr({
                                everyoneFilter: !l
                            })
                        },
                        checked: l
                    }), (0, r.jsx)(k.MenuCheckboxItem, {
                        id: "Roles",
                        label: Be.Z.Messages.RECENT_MENTIONS_FILTER_ROLES,
                        action: function() {
                            Zr({
                                roleFilter: !u
                            })
                        },
                        checked: u
                    }), null == o || o.isPrivate() ? null : (0, r.jsx)(k.MenuCheckboxItem, {
                        id: "All Servers",
                        label: Be.Z.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                        action: function() {
                            Zr({
                                guildFilter: c === te.NgX.THIS_SERVER ? te.NgX.ALL_SERVERS : te.NgX.THIS_SERVER
                            })
                        },
                        checked: c === te.NgX.ALL_SERVERS
                    })]
                })
            }

            function to() {
                return (0, r.jsx)(k.Popout, {
                    align: "right",
                    animation: k.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: function(e) {
                        var t = e.closePopout;
                        return (0, r.jsx)(eo, {
                            closePopout: t
                        })
                    },
                    children: function(e) {
                        var t = e.onClick;
                        return (0, r.jsx)(kt.ZP, {
                            tooltip: Be.Z.Messages.FILTER,
                            color: kt.YX.SECONDARY,
                            icon: (0, r.jsx)(qr.Z, {}),
                            onClick: t
                        })
                    }
                })
            }
            var no = n(106555),
                ro = n(344832),
                oo = n(177570),
                io = n(491260),
                ao = n(901165),
                lo = n(443812),
                uo = n(834423),
                co = n.n(uo);

            function so(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function fo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        so(e, t, n[t])
                    }))
                }
                return e
            }

            function po(e, t) {
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
            var ho = {
                top: 8,
                bottom: 8,
                left: -4,
                right: -4
            };

            function yo(e) {
                var t = e.channel,
                    n = e.children,
                    o = e.gotoChannel,
                    i = e.mentionCount,
                    a = e.channelState,
                    l = e.toggleCollapsed,
                    u = (0, ke.JA)("recents-header-".concat(t.id, "-").concat((0, lo.Dt)()));
                return (0, r.jsx)(k.FocusRing, {
                    offset: ho,
                    children: (0, r.jsxs)("div", po(fo({
                        className: co().channelHeader
                    }, u), {
                        tabIndex: 0,
                        "data-recents-channel": t.id,
                        onKeyDown: function(e) {
                            null != l && null != a && ("ArrowRight" === e.key && a.collapsed || "ArrowLeft" === e.key && !a.collapsed) && (null == l || l(a))
                        },
                        children: [(0, r.jsx)(bo, {
                            channel: t,
                            gotoChannel: o
                        }), (0, r.jsx)(vo, {
                            channel: t,
                            gotoChannel: o,
                            mentionCount: i
                        }), n]
                    }))
                })
            }

            function bo(e) {
                var t = e.channel,
                    n = e.gotoChannel;
                return t.isPrivate() ? (0, r.jsx)(Oo, {
                    channel: t,
                    gotoChannel: n
                }) : (0, r.jsx)(Eo, {
                    channel: t,
                    gotoChannel: n
                })
            }

            function Oo(e) {
                var t = e.channel,
                    n = e.gotoChannel,
                    o = (0, i.e7)([u.default], (function() {
                        return t.isDM() ? u.default.getUser(t.getRecipientId()) : null
                    })),
                    a = null == o ? (0, qn.x)(t) : o.getAvatarURL(void 0, 40);
                return (0, r.jsx)(k.Clickable, {
                    onClick: n,
                    tabIndex: -1,
                    children: (0, r.jsx)("img", {
                        className: co().dmIcon,
                        src: a,
                        alt: "",
                        "aria-hidden": !0
                    })
                })
            }

            function Eo(e) {
                var t = e.channel,
                    n = e.gotoChannel,
                    o = (0, i.e7)([ur.Z], (function() {
                        return ur.Z.getGuild(t.guild_id)
                    }));
                return null == o ? null : (0, r.jsx)(cr.Z, {
                    "aria-hidden": !0,
                    className: co().guildIcon,
                    guild: o,
                    size: cr.Z.Sizes.MEDIUM,
                    active: !0,
                    onClick: n,
                    tabIndex: -1
                })
            }

            function vo(e) {
                var t = e.channel,
                    n = e.gotoChannel,
                    o = e.mentionCount,
                    a = (0, i.e7)([ur.Z], (function() {
                        return ur.Z.getGuild(t.guild_id)
                    })),
                    l = (0, i.e7)([er.Z], (function() {
                        return er.Z.getChannel(t.parent_id)
                    })),
                    u = (0, ro.KS)(t, a),
                    c = (0,
                        Xn.ZP)(t, !1),
                    s = null == l ? null == a ? void 0 : a.name : "".concat(null == a ? void 0 : a.name, " › ").concat(l.name),
                    f = t.isMultiUserDM() ? Be.Z.Messages.MEMBERS_HEADER.format({
                        members: t.recipients.length + 1
                    }) : t.isPrivate() ? (0, r.jsx)(go, {
                        channel: t
                    }) : (0, r.jsx)(k.Clickable, {
                        className: m()(co().subtext, co().guildName),
                        onClick: n,
                        children: s
                    });
                return (0, r.jsxs)("div", {
                    className: co().channelNameSection,
                    children: [(0, r.jsx)(k.Heading, {
                        variant: "heading-md/semibold",
                        className: co().channelNameHeader,
                        children: (0, r.jsxs)(k.Clickable, {
                            className: co().channelName,
                            onClick: n,
                            children: [t.isThread() || t.isGroupDM() || null == u ? null : (0, r.jsx)(u, {
                                className: t.isForumLikeChannel() ? co().forumIcon : void 0,
                                width: 18,
                                height: 18
                            }), (0, r.jsx)("span", {
                                className: co().channelNameSpan,
                                children: c
                            }), null != o && o > 0 ? (0, r.jsx)(ao.Z, {
                                value: o,
                                className: co().badge
                            }) : null]
                        })
                    }), (0, r.jsx)(k.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        className: co().subtextContainer,
                        children: f
                    })]
                })
            }

            function go(e) {
                var t = e.channel,
                    n = (0,
                        i.cj)([u.default, io.Z, oo.Z], (function() {
                        var e = u.default.getUser(t.getRecipientId());
                        return {
                            activities: null != e ? io.Z.getActivities(e.id) : null,
                            applicationStream: null != e ? oo.Z.getAnyStreamForUser(e.id) : null
                        }
                    })),
                    o = n.activities,
                    a = n.applicationStream;
                return null == o ? null : (0, r.jsx)(no.Z, {
                    className: co().activityStatus,
                    emojiClassName: co().activityEmoji,
                    activities: o,
                    applicationStream: a,
                    hideTooltip: !0
                })
            }
            var mo = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function So(e, t, n) {
                var r = t ? K.Z.guildFilter : null,
                    o = t ? K.Z.roleFilter : null,
                    i = t ? K.Z.everyoneFilter : null,
                    a = null;
                null != e && null != r && (a = r === te.NgX.ALL_SERVERS ? null : e.getGuildId());
                Fr(n, te.DJj, a, o, i)
            }

            function _o(e) {
                var t = e.setTab,
                    n = e.onJump,
                    a = e.badgeState,
                    l = e.closePopout,
                    u = (0, i.e7)([er.Z, Gr.Z], (function() {
                        return er.Z.getChannel(Gr.Z.getChannelId())
                    })),
                    c = (0, i.cj)([K.Z], (function() {
                        return {
                            messages: K.Z.getMentions(),
                            hasMore: K.Z.hasMore,
                            loading: K.Z.loading,
                            guildFilter: K.Z.guildFilter,
                            roleFilter: K.Z.roleFilter,
                            everyoneFilter: K.Z.everyoneFilter
                        }
                    })),
                    s = c.messages,
                    f = c.hasMore,
                    d = c.loading,
                    p = c.guildFilter,
                    h = c.roleFilter,
                    y = c.everyoneFilter,
                    b = !0,
                    O = (0, Br.Z)(p),
                    E = (0, Br.Z)(h),
                    v = (0, Br.Z)(y);
                o.useEffect((function() {
                    K.Z.hasLoadedEver ? b && (null != O && p !== O || null != E && h !== E || null != v && y !== v) && So(u, b) : So(u, b)
                }), [O, p, E, h, v, y, u, b]);
                o.useEffect((function() {
                    return function() {
                        kr(te.DJj)
                    }
                }), []);
                var g = o.useCallback((function() {
                    return (0, r.jsx)(Ln, {
                        tab: Z.X.MENTIONS,
                        setTab: t,
                        badgeState: a,
                        closePopout: l,
                        children: b ? (0, r.jsx)(to, {}) : null
                    })
                }), [b, t, a, l]);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(mn.ZP, {
                        className: Pr().recentMentionsPopout,
                        scrollerClassName: Pr().scroller,
                        onFetch: function() {
                            return null
                        },
                        onJump: n,
                        onCloseMessage: function(e) {
                            Ur(e.id)
                        },
                        channel: u,
                        messages: s,
                        loading: d,
                        hasMore: f,
                        analyticsName: "Recent Mentions",
                        loadMore: function() {
                            var e = null != s && s.length > 0 ? s[s.length - 1].id : null;
                            So(u, b, e)
                        },
                        canCloseAllMessages: !0,
                        renderHeader: g,
                        renderEmptyState: No,
                        renderMessage: b ? Po : Io,
                        "aria-label": Be.Z.Messages.RECENT_MENTIONS,
                        listName: "recents"
                    })
                })
            }

            function Io(e, t) {
                return [(0, r.jsx)(To, {
                    message: e,
                    gotoMessage: t
                }, e.id)]
            }

            function Po(e, t) {
                return [(0, r.jsx)(To, {
                    message: e,
                    gotoMessage: t,
                    dismissible: !0
                }, e.id)]
            }

            function To(e) {
                var t = e.message,
                    n = e.gotoMessage,
                    o = e.dismissible;
                if (null == t) return null;
                var i = er.Z.getChannel(t.channel_id);
                return null == i ? null : (0, r.jsxs)("div", {
                    className: Pr().container,
                    children: [(0, r.jsx)(yo, {
                        channel: i,
                        gotoChannel: n,
                        children: null != o ? (0, r.jsx)(kt.ZP, {
                            className: Pr().closeButton,
                            tooltip: Be.Z.Messages.CLOSE,
                            color: kt.YX.TERTIARY,
                            icon: (0, r.jsx)(Hr.Z, {
                                width: 16,
                                height: 16
                            }),
                            onClick: function() {
                                return Ur(t.id)
                            }
                        }) : null
                    }), (0, r.jsxs)("div", {
                        className: Pr().messageContainer,
                        children: [(0, r.jsx)(Wr, {
                            className: Pr().jumpButton,
                            onJump: n
                        }), (0, r.jsx)(lr.Z, {
                            message: t,
                            channel: i,
                            className: Pr().message,
                            compact: $.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: mo,
                            trackAnnouncementViews: !0
                        }, t.id)]
                    })]
                })
            }

            function No(e) {
                return (0, r.jsx)(mr, {
                    Icon: Vr.Z,
                    header: Be.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
                    tip: Be.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
                })
            }
            var Ao = n(131795),
                Ro = n.n(Ao);

            function Co(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function jo(e, t) {
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
                    if ("string" == typeof e) return Co(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Co(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function wo(e) {
                var t = e.type,
                    n = e.onClick,
                    i = jo(o.useState(!1), 2),
                    l = i[0],
                    u = i[1],
                    c = (0, a.sv)(),
                    s = function() {
                        n();
                        Je.default.track(te.rMx.INBOX_CHANNEL_ACKED, {
                            marked_all_channels_as_read: !0,
                            num_unread_channels_remaining: 0
                        })
                    },
                    f = function(e) {
                        e.shiftKey ? s() : u(!0)
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [l ? (0, r.jsx)(Do, {
                        confirm: s,
                        cancel: function() {
                            return u(!1)
                        }
                    }) : null, "bottom-floating" === t ? (0, r.jsx)($r, {
                        text: Be.Z.Messages.MARK_ALL_AS_READ,
                        icon: gn,
                        onClick: f
                    }) : (0, r.jsx)(kt.ZP, {
                        tooltip: c ? Be.Z.Messages.MARK_ALL_AS_READ : Be.Z.Messages.UNREADS_MARK_READ,
                        color: kt.YX.SECONDARY,
                        icon: (0, r.jsx)(gn, {}),
                        onClick: f
                    })]
                })
            }

            function Do(e) {
                var t = e.cancel,
                    n = e.confirm;
                return (0, r.jsx)(k.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: Be.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
                    confirmText: Be.Z.Messages.MARK_AS_READ,
                    cancelText: Be.Z.Messages.CANCEL,
                    confirmButtonColor: k.Button.Colors.BRAND,
                    onCancel: t,
                    onConfirm: n,
                    children: (0, r.jsx)(k.Text, {
                        color: "text-normal",
                        variant: "text-sm/normal",
                        children: Be.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
                    })
                })
            }
            var Mo = n(496486),
                Lo = n.n(Mo),
                xo = n(34225),
                Zo = n(248088),
                ko = n(396043),
                Fo = n(343557),
                Uo = n(512291),
                Bo = n(718831),
                Go = n(621329),
                Vo = n(140567),
                Ho = n(551856),
                Yo = n(414392);

            function zo(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Qo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        zo(e, t, n[t])
                    }))
                }
                return e
            }

            function Ko(e, t) {
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

            function Wo(e) {
                var t = e.channel;
                return (0, r.jsx)(k.Popout, {
                    align: "right",
                    animation: k.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: function(e) {
                        return t.isThread() ? (0, r.jsx)(Ho.Z, Ko(Qo({}, e), {
                            channel: t,
                            navId: "recents-thread-notifications",
                            label: Be.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
                        })) : (0, r.jsx)(Vo.Z, Ko(Qo({}, e), {
                            channel: t,
                            navId: "recents-notifications",
                            label: Be.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                            location: {
                                section: te.jXE.INBOX
                            },
                            includeGuildMute: !0
                        }))
                    },
                    children: function(e) {
                        var t = e.onClick;
                        return (0, r.jsx)(kt.ZP, {
                            tooltip: Be.Z.Messages.NOTIFICATION_SETTINGS,
                            color: kt.YX.TERTIARY,
                            icon: (0, r.jsx)(Yo.Z, {
                                width: 16,
                                height: 16
                            }),
                            onClick: t
                        })
                    }
                })
            }
            var qo = n(607544),
                Xo = n(503871),
                Jo = n(536945),
                $o = n(367406),
                ei = n(72580),
                ti = n(379364),
                ni = n(641816),
                ri = n.n(ni);

            function oi(e) {
                var t = e.channel,
                    n = e.channelRecord,
                    a = e.deleteChannel,
                    l = (0, i.Wu)([Jo.Z, er.Z], (function() {
                        return Lo()(Jo.Z.getThreadsForParent(n.guild_id, n.id)).values().filter((function(e) {
                            var n = e.id;
                            return G.default.compare(n, t.oldestReadMessageId) > 0
                        })).map((function(e) {
                            var t = e.id;
                            return er.Z.getChannel(t)
                        })).filter(ei.lm).sort((function(e, t) {
                            return G.default.compare(e.id, t.id)
                        })).value()
                    }), [t.oldestReadMessageId, n.guild_id, n.id]),
                    u = o.useCallback((function(e, t) {
                        (0, $o.ok)(e, t, ti.on.INBOX)
                    }), []);
                o.useEffect((function() {
                    null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== l.length || J.Z.wait((function() {
                        (0, z.In)(t.channelId, !0);
                        a(t.channelId)
                    }))
                }));
                return (0, r.jsx)("div", {
                    className: ri().container,
                    children: l.map((function(e) {
                        return (0, r.jsx)(Xo.oL, {
                            createStore: function() {
                                return (0, Xo.NU)(n)
                            },
                            children: (0, r.jsx)(qo.ZP, {
                                className: ri().forumPost,
                                threadId: e.id,
                                goToThread: u
                            })
                        }, e.id)
                    }))
                })
            }
            var ii = n(385983),
                ai = n(321705),
                li = n(101609),
                ui = n(349658),
                ci = n(4361),
                si = n(356845),
                fi = n(490355),
                di = n(508754),
                pi = n(732827),
                hi = n(661123),
                yi = n(791707),
                bi = n(550131),
                Oi = n(30778),
                Ei = n(934039),
                vi = n(283285),
                gi = n(329790),
                mi = n(323725),
                Si = n(545516),
                _i = n(317657),
                Ii = n(649252),
                Pi = n(714357),
                Ti = n(989011),
                Ni = n.n(Ti),
                Ai = n(46427),
                Ri = n.n(Ai);

            function Ci(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ji(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ci(e, t, n[t])
                    }))
                }
                return e
            }

            function wi(e, t) {
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

            function Di(e) {
                var t, n, o, a, l, u = e.channel,
                    c = e.message,
                    s = e.compact,
                    f = void 0 !== s && s,
                    d = e.className,
                    p = e.onContextMenu,
                    h = e.onClick,
                    y = e.disableInteraction,
                    b = void 0 !== y && y,
                    O = e.hasThread,
                    E = e.treatSpam,
                    v = te.OBS.has(c.type) ? c.messageReference : void 0,
                    g = (0, i.e7)([fi.Z], (function() {
                        return fi.Z.getMessageByReference(v)
                    })),
                    S = (0, i.e7)([er.Z], (function() {
                        return c.type === te.uaV.THREAD_STARTER_MESSAGE && g.state === fi.Y.LOADED ? er.Z.getChannel(g.message.channel_id) : null
                    })),
                    _ = $.x4.useSetting(),
                    I = $.RS.useSetting(),
                    P = $.NA.useSetting() && !c.author.isClyde(),
                    T = $.QK.useSetting(),
                    N = (0, ci.dj)((null !== (t = c.editedTimestamp) && void 0 !== t ? t : c.timestamp).valueOf()),
                    A = (0,
                        ci.tu)(null !== (n = null == u ? void 0 : u.guild_id) && void 0 !== n ? n : "", (null !== (o = c.editedTimestamp) && void 0 !== o ? o : c.timestamp).valueOf()),
                    R = (0, si.Z)(null == u ? void 0 : u.id),
                    C = (0, Oi.Z)(u).disableReactionCreates,
                    j = (0, vi.Z)(c, {
                        hideSimpleEmbedContent: I && P,
                        allowList: N.showListsAndHeaders || A.showListsAndHeaders,
                        allowHeading: N.showListsAndHeaders || A.showListsAndHeaders,
                        allowLinks: N.showMaskedLinks || A.showMaskedLinks,
                        previewLinkTarget: N.showMaskedLinks || A.showMaskedLinks
                    }),
                    w = j.content,
                    D = j.hasSpoilerEmbeds,
                    M = (0, bi.ZP)(c),
                    L = (0, i.e7)([er.Z], (function() {
                        return c.hasFlag(te.iLy.HAS_THREAD) && er.Z.getChannel(c.id)
                    })),
                    x = c.type === te.uaV.THREAD_STARTER_MESSAGE && g.state === fi.Y.LOADED && null != S,
                    Z = !x && void 0 === a,
                    k = (0, gi.Z)({
                        message: c,
                        channel: u,
                        enabled: Z
                    });
                if (x) return (0, r.jsx)(Di, wi(ji({}, e), {
                    message: g.message,
                    channel: S,
                    hasThread: !1
                }));
                Tn.Z.isBlocked(c.author.id) ? a = Be.Z.Messages.BLOCKED_MESSAGE_COUNT : (0, ui.DQ)(c) && E && (a = Be.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT);
                return void 0 !== a ? (0, r.jsx)(Li, {
                    className: d,
                    compact: f,
                    count: 1,
                    collapsedReason: a
                }) : (0, r.jsx)(di.Z, {
                    compact: f,
                    className: m()(d, (l = {}, Ci(l, Ri().ephemeral, (0, hi.yE)(c.flags, te.iLy.EPHEMERAL)), Ci(l, Ri().disableInteraction, b), Ci(l, Ri().groupStart, e.isGroupStart), l)),
                    childrenRepliedMessage: (0, Pi.Z)(c, u, v, g, f),
                    childrenHeader: (0, Si.Z)(wi(ji({}, e), {
                        author: M,
                        guildId: u.guild_id
                    })),
                    childrenAccessories: (0, r.jsx)(Ei.BB, {
                        channel: u,
                        message: c,
                        hasSpoilerEmbeds: D,
                        compact: f,
                        canSuppressEmbeds: !1,
                        canDeleteAttachments: !1,
                        disableReactionReads: !1,
                        disableReactionCreates: C,
                        disableReactionUpdates: !1,
                        renderThreadAccessory: O,
                        renderComponentAccessory: !1,
                        inlineAttachmentMedia: _,
                        inlineEmbedMedia: I,
                        renderEmbeds: P,
                        gifAutoPlay: T,
                        showListsAndHeaders: N.showListsAndHeaders || A.showListsAndHeaders,
                        showMaskedLinks: N.showMaskedLinks || A.showMaskedLinks,
                        shouldHideMediaOptions: R,
                        showClydeAiEmbeds: !1
                    }),
                    childrenExecutedCommand: (0, Ii.Z)(c, u, f),
                    childrenMessageContent: (0, mi.Z)(e, w),
                    childrenSystemMessage: (0, _i.Z)(e),
                    onContextMenu: p,
                    onClick: h,
                    hasThread: !1 !== O && null != L && c.hasFlag(te.iLy.HAS_THREAD),
                    hasReply: c.type === te.uaV.REPLY,
                    isSystemMessage: (0, yi.Z)(c),
                    messageRef: k
                })
            }
            const Mi = o.memo(Di);

            function Li(e) {
                var t = e.className,
                    n = e.count,
                    o = e.compact,
                    i = e.collapsedReason;
                return (0, r.jsx)(di.Z, {
                    className: t,
                    compact: o,
                    role: "group",
                    childrenMessageContent: (0, r.jsx)(pi.Z, {
                        compact: o,
                        className: Ni().blockedSystemMessage,
                        iconNode: (0, r.jsx)(Hr.Z, {
                            className: Ni().blockedIcon
                        }),
                        children: (0, r.jsx)("div", {
                            className: Ni().blockedMessageText,
                            children: i.format({
                                count: n
                            })
                        })
                    })
                })
            }
            var xi = n(664625),
                Zi = n(682776),
                ki = n(70145),
                Fi = n(717187),
                Ui = n(419051),
                Bi = n(33014),
                Gi = n(18882),
                Vi = n(487685),
                Hi = n(665783),
                Yi = n(5544),
                zi = n(747126),
                Qi = n(107218),
                Ki = n(9430),
                Wi = n(102921);

            function qi(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xi(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ji(e) {
                Ji = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ji(e)
            }

            function $i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Xi(e, t, n[t])
                    }))
                }
                return e
            }

            function ea(e, t) {
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

            function ta(e, t) {
                return !t || "object" !== aa(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function na(e, t) {
                na = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return na(e, t)
            }

            function ra(e, t) {
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
                    if ("string" == typeof e) return qi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qi(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var oa, ia, aa = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function la(e) {
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
                    var n, r = Ji(e);
                    if (t) {
                        var o = Ji(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ta(this, n)
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
            }(oa || (oa = {}));
            ! function(e) {
                e.Loading = "loading";
                e.Loaded = "loaded";
                e.Done = "done"
            }(ia || (ia = {}));
            var ua = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && na(e, t)
                }(n, e);
                var t = la(n);

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
                                return "messages" === e.type && e.hasLoadedAnything ? ca(e, !1, !0) : e
                            }))
                        })
                    };
                    o.getNumUnreadChannels = function() {
                        return o.state.channels.length
                    };
                    o.markChannelRead = function(e) {
                        var t = e.channelId,
                            n = e.newestUnreadMessageId;
                        J.Z.wait((function() {
                            return z.In(t, !0, void 0, n, {
                                section: te.jXE.INBOX
                            })
                        }));
                        if (1 !== o.state.channels.length) {
                            o.setState({
                                channels: o.updateChannel(t, (function(e) {
                                    return ea($i({}, e), {
                                        deleted: !0
                                    })
                                }))
                            });
                            I.Z.useReducedMotion && o.deleteChannel(t);
                            o.maybeLoadMore()
                        } else o.deleteChannel(t)
                    };
                    o.markGuildRead = function(e) {
                        J.Z.wait((function() {
                            return (0, Bi.Z)([e], te.jXE.INBOX)
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
                            scrollToChannelIndex: Lo().findIndex(o.state.channels, (function(t) {
                                return t.channelId === e
                            })),
                            channels: o.state.channels.filter((function(t) {
                                return t.channelId !== e
                            }))
                        });
                        o.maybeLoadMore()
                    };
                    o.markAllRead = function() {
                        z.y5(o.state.channels.map((function(e) {
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
                            l = r.loadState,
                            u = Lo().findIndex(i, (function(e) {
                                return e.channelId === t
                            })),
                            c = i[u],
                            s = !c.collapsed;
                        a[t] = s;
                        (0, F.BU)(n, t, (function(e) {
                            e.collapsedInInbox = s
                        }), F.fy.FREQUENT_USER_ACTION);
                        o.setState({
                            scrollToChannelIndex: u,
                            collapsedChannels: a,
                            loadState: l !== ia.Done || s || c.isFullyLoaded ? l : ia.Loaded,
                            channels: o.updateChannel(t, (function(e) {
                                return ea($i({}, e), {
                                    collapsed: s
                                })
                            }))
                        });
                        c.collapsed ? c.isFullyLoaded || o.loadMore() : o.maybeLoadMore()
                    };
                    o.handleUserGuildSettingsStoreChange = function() {
                        var e = o.state.channels.filter((function(e) {
                            return !Ki.Z.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId)
                        }));
                        e.length !== o.state.channels.length && o.setState({
                            channels: e
                        })
                    };
                    o.handleJoinedThreadsStoreChange = function() {
                        var e = o.state.channels.filter((function(e) {
                            return !Vi.Z.isMuted(e.channelId)
                        }));
                        e.length !== o.state.channels.length && o.setState({
                            channels: e
                        })
                    };
                    o.handleActiveThreadsStoreChange = function() {
                        var e = o.state.channels.map((function(e) {
                            if ("forum" === e.type) {
                                var t = Jo.Z.hasLoaded(e.guildId);
                                return ea($i({}, e), {
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
                    if (n === ia.Loaded) {
                        var o = !1,
                            i = r.map((function(t) {
                                if (t.isFullyLoaded || t.deleted || o) return t;
                                if (t.collapsed) return t.hasLoadedAnything ? t : ea($i({}, t), {
                                    hasLoadedAnything: !0
                                });
                                if ((t = e.populateInitialStateFromStore(t)).isFullyLoaded) return t;
                                Yn()("nsfw" !== t.type, "this channel should already be loaded");
                                "messages" === t.type && e.loadChannelMessages(t) && (o = !0);
                                return t
                            }));
                        o && !i.some((function(e, t) {
                            return e !== r[t]
                        })) || this.setState({
                            channels: i,
                            loadState: o ? this.state.loadState : ia.Done
                        })
                    }
                };
                r.populateInitialStateFromStore = function(e) {
                    if ("messages" === e.type) return ca(e, !1);
                    if ("nsfw" === e.type) return ea($i({}, e), {
                        isFullyLoaded: !0,
                        hasLoadedAnything: !0
                    });
                    if ("forum" === e.type) {
                        var t = Jo.Z.hasLoaded(e.guildId);
                        return ea($i({}, e), {
                            isFullyLoaded: t,
                            hasLoadedAnything: t
                        })
                    }(0, ei.vE)(e)
                };
                r.clearScrollToChannelIndex = function() {
                    this.setState({
                        scrollToChannelIndex: null
                    })
                };
                r.loadChannelMessages = function(e) {
                    var t = this;
                    Wn.Z.clearChannel(e.channelId);
                    var n = Wn.Z.fetchMessages({
                        channelId: e.channelId,
                        limit: te.AQB,
                        jump: {
                            messageId: e.oldestReadMessageId,
                            flash: !0
                        }
                    });
                    if (null == n || !1 === n) return !1;
                    this.setState({
                        loadState: ia.Loading
                    });
                    n.then((function(n) {
                        t.setState({
                            loadState: ia.Loaded,
                            channels: t.updateChannel(e.channelId, (function(e) {
                                Yn()("messages" === e.type, "channel cannot change type");
                                var t = ca(e, !0);
                                0 !== t.messages.length && t.messages.length !== e.messages.length || (t = ea($i({}, t), {
                                    hasLoadedAnything: !0,
                                    isFullyLoaded: !0,
                                    hasError: !n
                                }));
                                return t
                            }))
                        })
                    }), (function() {
                        t.setState({
                            loadState: ia.Loaded,
                            channels: t.updateChannel(e.channelId, (function(e) {
                                var t;
                                Yn()("messages" === e.type, "channel cannot change type");
                                return ea($i({}, ca(e, !0)), {
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
                            this.state = $i({}, this.state, e);
                            this.emit("change", this.state);
                            return
                        }
                };
                return n
            }(Fi.EventEmitter);

            function ca(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = tr.Z.getMessages(e.channelId),
                    i = o.toArray().filter((function(t) {
                        return Wi.Z.compare(t.id, e.oldestReadMessageId) > 0 && Wi.Z.compare(t.id, e.newestUnreadMessageId) <= 0
                    })),
                    a = i.length === e.messages.length && i.every((function(t, n) {
                        return e.messages[n] === t
                    }));
                if (a && r) return e;
                var l = null != o.getAfter(e.oldestReadMessageId) || (null === (n = i[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
                    u = i[i.length - 1],
                    c = Wi.Z.compare(null == u ? void 0 : u.id, e.newestUnreadMessageId) >= 0 || i.length >= 25;
                return ea($i({}, e), {
                    messages: i,
                    hasLoadedAnything: e.hasLoadedAnything || l || t,
                    hasLoadedFirst: e.hasLoadedFirst || l || t,
                    isFullyLoaded: e.isFullyLoaded || l && c || t && !o.hasMoreAfter
                })
            }

            function sa() {
                var e = function() {
                        var e, t, n = {},
                            r = null !== (t = null === (e = U.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
                        for (var o in r)
                            for (var i in r[o].channels) {
                                var a = er.Z.getChannel(i);
                                i in n && (null == a ? void 0 : a.guild_id) !== o || (n[i] = r[o].channels[i].collapsedInInbox)
                            }
                        return n
                    }(),
                    t = function(e) {
                        var t = [];
                        er.Z.getSortedPrivateChannels().forEach((function(n) {
                            return fa(e, t, null, n.id)
                        }));
                        Qi.Z.getFlattenedGuildIds().forEach((function(n) {
                            if (null != n) {
                                var r = Yi.ZP.getSelectableChannelIds(n),
                                    o = Gi.Z.getActiveJoinedUnreadThreadsForGuild(n);
                                r.forEach((function(r) {
                                    fa(e, t, n, r);
                                    var i, a = null !== (i = o[r]) && void 0 !== i ? i : {};
                                    for (var l in a) fa(e, t, n, l)
                                }))
                            }
                        }));
                        return Lo().sortBy(t, (function(e) {
                            return e.sortOrder
                        }))
                    }(e);
                return {
                    collapsedChannels: e,
                    loadState: ia.Loaded,
                    channels: t,
                    scrollToChannelIndex: null
                }
            }

            function fa(e, t, n, r) {
                if (null != r) {
                    var o = er.Z.getChannel(r);
                    if (null != o) {
                        if (ir.Ec.has(o.type) || !Ki.Z.isGuildOrCategoryOrChannelMuted(n, o.id)) {
                            if (o.isPrivate()) {
                                if (0 === l.ZP.getMentionCount(r)) return
                            } else if (!l.ZP.hasRelevantUnread(o) && 0 === l.ZP.getMentionCount(r)) return;
                            if (o.isPrivate() || Zi.Z.can(te.Plq.READ_MESSAGE_HISTORY, o)) {
                                var i = l.ZP.ackMessageId(r);
                                if (null == i) {
                                    var a = ur.Z.getGuild(o.guild_id);
                                    if (null == a || null == a.joinedAt) return;
                                    i = Wi.Z.fromTimestamp(a.joinedAt.getTime())
                                }
                                var u = l.ZP.getOldestUnreadMessageId(r),
                                    c = l.ZP.lastMessageId(r),
                                    s = l.ZP.getMentionCount(r),
                                    f = s > 0 || o.isPrivate();
                                if (null != c && !(Wi.Z.compare(i, c) >= 0)) {
                                    var d = {
                                        guildId: n,
                                        channelId: r,
                                        oldestReadMessageId: i,
                                        oldestUnreadMessageId: u,
                                        newestUnreadMessageId: c,
                                        collapsed: !0 === e[r],
                                        hasLoadedAnything: !1,
                                        hasLoadedFirst: !1,
                                        isFullyLoaded: !1,
                                        hasError: !1,
                                        hasMentionsOrUnreads: f,
                                        mentionCount: s,
                                        sortOrder: da(n, r, u)
                                    };
                                    o.isNSFW() && zi.Z.didAgree(o.guild_id) ? t.push(ea($i({}, d), {
                                        type: "nsfw"
                                    })) : o.isForumLikeChannel() ? t.push(ea($i({}, d), {
                                        type: "forum"
                                    })) : t.push(ea($i({}, d), {
                                        type: "messages",
                                        messages: []
                                    }))
                                }
                            }
                        }
                    }
                }
            }

            function da(e, t, n) {
                var r = er.Z.getChannel(t);
                if (Ui.Z.isFavorite(t)) return oa.Favorite;
                if (r.isPrivate()) return oa.PrivateChannel;
                if (l.ZP.getMentionCount(t) > 0) return oa.Mentioned;
                if (null != n) {
                    var o = Wi.Z.extractTimestamp(n);
                    if (Date.now() - o > 864e6) return oa.ReallyOldChannel;
                    if (Date.now() - o > 1728e5) return oa.OldChannel
                }
                if (r.isThread()) {
                    var i = (0, Hi.J)(r);
                    return i === ti.iN.ALL_MESSAGES ? oa.AllMessagesNotifications : i === ti.iN.NO_MESSAGES ? oa.NoNotifications : oa.GuildChannel
                }
                var a = Ki.Z.getChannelMessageNotifications(e, t),
                    u = a === te.bL.NULL ? Ki.Z.getMessageNotifications(e) : a;
                return u === te.bL.ALL_MESSAGES ? oa.AllMessagesNotifications : u === te.bL.NO_MESSAGES ? oa.NoNotifications : oa.GuildChannel
            }
            var pa = n(977166),
                ha = n.n(pa);

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

            function Oa(e, t) {
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
            var Ea = {
                left: 4,
                right: -12
            };

            function va(e) {
                var t, n = e.channel,
                    i = e.message,
                    a = e.compact,
                    l = e.isGroupStart,
                    u = e.treatSpam,
                    c = e.gotoChannel,
                    s = (0, ke.JA)(null !== (t = i.id) && void 0 !== t ? t : ""),
                    f = o.useCallback((function(e) {
                        if ("ArrowLeft" === e.key) {
                            var t;
                            null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
                        }
                    }), [n.id]);
                return (0, r.jsx)(k.FocusRing, {
                    offset: Ea,
                    children: (0, r.jsxs)("div", Oa(ba({
                        className: ha().messageContainer,
                        onKeyDown: f
                    }, s), {
                        children: [(0, r.jsx)(Wr, {
                            className: ha().jumpButton,
                            onJump: function(e) {
                                return c(e, i.id)
                            }
                        }), (0, r.jsx)(Mi, {
                            id: i.id,
                            message: i,
                            channel: n,
                            className: ha().message,
                            compact: a,
                            animateAvatar: !1,
                            isGroupStart: l,
                            onKeyDown: f,
                            treatSpam: u
                        })]
                    }), i.id)
                })
            }

            function ga(e) {
                var t, n, o = e.channel,
                    a = e.channelRecord,
                    l = e.gotoChannel,
                    c = ii.Z.useExperiment({
                        location: "20e3b0_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    s = $.jU.useSetting(),
                    f = (0, i.e7)([Zi.Z], (function() {
                        return Zi.Z.can(te.Plq.CREATE_INSTANT_INVITE, a)
                    })),
                    d = (0, ui.P1)(a),
                    p = !1,
                    h = 0 === o.messages.length || o.messages[0].timestamp.isSame(Qn()(), "day"),
                    y = null !== (n = null === (t = u.default.getUser(xi.default.getId())) || void 0 === t ? void 0 : t.hasFlag(te.xW$.SPAMMER)) && void 0 !== n && n,
                    b = [];
                if (!o.collapsed) {
                    var O = null,
                        E = null,
                        v = o.messages.slice(0, 25);
                    v.forEach((function(e) {
                        if (!(0, ai.Z)(e, f)) {
                            if (!(h || null != O && O.isSame(e.timestamp, "day"))) {
                                var t = (0, ki.vc)(e.timestamp, "LL");
                                b.push((0, r.jsx)(xo.Z, {
                                    className: ha().divider,
                                    children: t
                                }, t));
                                O = e.timestamp
                            }
                            var n = null == E || (0, li.Z)(a, E, e);
                            E = e;
                            p = p || (0, ui.DQ)(e);
                            b.push((0, r.jsx)(va, {
                                channel: a,
                                message: e,
                                compact: s,
                                isGroupStart: n,
                                treatSpam: !y && c && (0, ui.DQ)(e) && d,
                                gotoChannel: l
                            }, e.id))
                        }
                    }));
                    o.messages.length >= 25 && b.push((0, r.jsxs)(k.Button, {
                        color: k.Button.Colors.LINK,
                        look: k.Button.Looks.LINK,
                        onClick: function(e) {
                            return l(e, v[v.length - 1].id)
                        },
                        children: [Be.Z.Messages.UNREADS_VIEW_CHANNEL, " ›"]
                    }, "view-all"));
                    0 === b.length && (b = [(0, r.jsx)(k.Spinner, {}, "spinner")])
                }
                p && d && ii.Z.trackExposure({
                    location: "20e3b0_2"
                });
                return (0, r.jsx)("div", {
                    className: ha().messages,
                    children: b
                })
            }
            var ma = n(372878),
                Sa = n.n(ma);

            function _a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ia(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Pa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ia(e, t, n[t])
                    }))
                }
                return e
            }

            function Ta(e, t) {
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

            function Na(e, t) {
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
                    if ("string" == typeof e) return _a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Aa(e) {
                var t = e.channel,
                    n = e.deleteChannel,
                    i = o.useRef(null),
                    a = Na(o.useState([0, 0]), 2),
                    l = Na(a[0], 2),
                    u = l[0],
                    c = l[1],
                    s = a[1],
                    f = t.deleted && u > 0;
                if (t.deleted && 0 === u && null != i.current) {
                    var d = i.current.offsetHeight,
                        p = i.current.offsetTop,
                        h = i.current.parentElement.scrollTop;
                    s([d, d - (h > p ? d - (h - p) : d)])
                }
                var y = (0,
                        Zo.useSpring)({
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
                            }(u, c, e) : "auto"
                        }))
                    };
                return (0, r.jsx)(Zo.animated.div, {
                    ref: i,
                    style: b,
                    children: (0, r.jsx)(ja, Pa({}, e))
                })
            }
            const Ra = o.memo(Aa);

            function Ca(e) {
                var t = e.channel,
                    n = e.onJump,
                    a = e.deleteChannel,
                    l = e.toggle,
                    u = (0, i.e7)([er.Z], (function() {
                        return er.Z.getChannel(t.channelId)
                    })),
                    c = (0, i.e7)([Uo.Z], (function() {
                        return null == t.guildId || Uo.Z.isSubscribedToThreads(t.guildId)
                    }));
                o.useEffect((function() {
                    null == u || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || J.Z.wait((function() {
                        (0, z.In)(t.channelId, !0);
                        a(t.channelId)
                    }))
                }));
                o.useEffect((function() {
                    t.hasLoadedAnything && null != t.guildId && !c && J.Z.dispatch({
                        type: "GUILD_SUBSCRIPTIONS",
                        guildId: t.guildId
                    })
                }), [t.hasLoadedAnything, t.guildId, c]);
                if (null == u) return null;
                if (!t.hasLoadedAnything) return null;
                var s = function(e, r) {
                    (0,
                        ko.yw)(te.rMx.INBOX_CHANNEL_CLICKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId
                    });
                    var o = null != r ? r : t.oldestUnreadMessageId;
                    (0, Pn.uL)(te.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : o));
                    n(e)
                };
                return (0, r.jsx)("div", {
                    className: Sa().channel,
                    children: (0, r.jsx)(k.HeadingLevel, {
                        component: (0, r.jsxs)(yo, {
                            channel: u,
                            gotoChannel: s,
                            mentionCount: t.mentionCount,
                            toggleCollapsed: l,
                            channelState: t,
                            children: [(0, r.jsx)(Wo, {
                                channel: u
                            }), (0, r.jsx)(wa, Pa({}, e)), "nsfw" === t.type ? null : (0, r.jsx)(Da, Pa({}, e))]
                        }),
                        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(ga, {
                            channel: t,
                            channelRecord: u,
                            gotoChannel: s
                        }) : "forum" === t.type ? (0, r.jsx)(oi, {
                            channel: t,
                            channelRecord: u,
                            deleteChannel: a
                        }) : null
                    })
                })
            }
            var ja = o.memo(Ca);

            function wa(e) {
                var t = e.channel,
                    n = e.markChannelRead,
                    o = e.markGuildRead,
                    i = e.getNumUnreadChannels,
                    a = (0, Fo.Z)() && null != t.guildId;
                return (0, r.jsx)(kt.ZP, {
                    className: Sa().markReadButton,
                    tooltip: a ? Be.Z.Messages.MARK_GUILD_AS_READ : Be.Z.Messages.MARK_AS_READ,
                    color: kt.YX.TERTIARY,
                    icon: a ? (0, r.jsx)(gn, {
                        width: 16,
                        height: 16
                    }) : (0, r.jsx)(Go.Z, {
                        width: 16,
                        height: 16
                    }),
                    onClick: function() {
                        a && null != t.guildId ? o(t.guildId) : n(t);
                        (0, ko.yw)(te.rMx.INBOX_CHANNEL_ACKED, {
                            channel_id: t.channelId,
                            guild_id: t.guildId,
                            marked_all_channels_as_read: !1,
                            num_unread_channels_remaining: i() - 1
                        })
                    }
                })
            }

            function Da(e) {
                var t = e.channel,
                    n = e.toggle,
                    o = e.getNumUnreadChannels,
                    i = function() {
                        n(t);
                        (0, ko.yw)(te.rMx.INBOX_CHANNEL_COLLAPSED, {
                            channel_id: t.channelId,
                            guild_id: t.guildId,
                            num_unread_channels_remaining: o(),
                            is_now_collapsed: !t.collapsed
                        })
                    };
                return (0, r.jsx)(k.Tooltip, {
                    text: Be.Z.Messages.COLLAPSE,
                    children: function(e) {
                        return (0, r.jsx)(k.Clickable, Ta(Pa({}, e), {
                            className: m()(Sa().collapseButton, Ia({}, Sa().collapsed, t.collapsed)),
                            onClick: i,
                            children: (0, r.jsx)(Bo.Z, {
                                width: 16,
                                height: 16
                            })
                        }))
                    }
                })
            }
            var Ma = n(199950),
                La = n.n(Ma);

            function xa(e, t, n) {
                var o = t.markChannelRead,
                    i = t.markGuildRead,
                    a = t.deleteChannel,
                    l = t.toggle,
                    u = t.getNumUnreadChannels,
                    c = null;
                return Lo().flatMap(e, (function(e) {
                    var t = e.sortOrder !== c;
                    c = e.sortOrder;
                    var s = [];
                    t && (e.hasLoadedAnything && e.sortOrder === oa.ReallyOldChannel ? s.push((0, r.jsx)(xo.Z, {
                        className: La().divider,
                        contentClassName: La().dividerContent,
                        children: Be.Z.Messages.UNREADS_OLD_CHANNELS_DIVIDER
                    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === oa.NoNotifications && s.push((0, r.jsx)(xo.Z, {
                        className: La().divider,
                        contentClassName: La().dividerContent,
                        children: Be.Z.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
                    }, "disabled-divider")));
                    s.push((0, r.jsx)(Ra, {
                        channel: e,
                        markChannelRead: o,
                        markGuildRead: i,
                        toggle: l,
                        deleteChannel: a,
                        onJump: n,
                        getNumUnreadChannels: u
                    }, e.channelId));
                    return s
                }))
            }
            var Za = n(475553),
                ka = n.n(Za);

            function Fa(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ua(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ba(e, t) {
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

            function Ga(e, t) {
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

            function Va(e, t) {
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
                    if ("string" == typeof e) return Fa(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fa(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ha(e) {
                var t = e.setTab,
                    n = e.onJump,
                    a = e.showTutorial,
                    l = e.setSeenTutorial,
                    u = e.closePopout,
                    c = e.badgeState,
                    s = o.useRef(null),
                    f = Va(function(e) {
                        var t = ra(o.useState((function() {
                                return new ua(sa(), e)
                            })), 2),
                            n = t[0],
                            r = t[1],
                            i = ra(o.useState(!1), 2),
                            a = i[0],
                            l = i[1],
                            u = o.useRef(Date.now()),
                            c = ra(o.useState((function() {
                                return sa()
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
                                    n = sa();
                                if (0 === n.channels.length || t - u.current < 1e4) l(!0);
                                else {
                                    u.current = Date.now();
                                    r(new ua(n, e))
                                }
                            }
                        }), [s, a, e]);
                        o.useLayoutEffect(n.maybeLoadMore, [null == s ? void 0 : s.channels, null == s ? void 0 : s.loadState]);
                        o.useEffect((function() {
                            tr.Z.addChangeListener(n.reloadMessages);
                            return function() {
                                return tr.Z.removeChangeListener(n.reloadMessages)
                            }
                        }), [n.reloadMessages]);
                        o.useEffect((function() {
                            Ki.Z.addChangeListener(n.handleUserGuildSettingsStoreChange);
                            return function() {
                                return Ki.Z.removeChangeListener(n.handleUserGuildSettingsStoreChange)
                            }
                        }), [n]);
                        o.useEffect((function() {
                            Vi.Z.addChangeListener(n.handleJoinedThreadsStoreChange);
                            return function() {
                                return Vi.Z.removeChangeListener(n.handleJoinedThreadsStoreChange)
                            }
                        }), [n]);
                        o.useEffect((function() {
                            Jo.Z.addChangeListener(n.handleActiveThreadsStoreChange);
                            return function() {
                                return Jo.Z.removeChangeListener(n.handleActiveThreadsStoreChange)
                            }
                        }), [n]);
                        return [s, n]
                    }(s), 2),
                    d = f[0],
                    p = f[1],
                    h = d.loadState,
                    y = d.channels,
                    b = p.maybeLoadMore,
                    O = p.markAllRead;
                ! function(e, t, n) {
                    o.useLayoutEffect((function() {
                        var r, o = t.scrollToChannelIndex;
                        n.clearScrollToChannelIndex();
                        var i = e.current;
                        if (null != i && null != o) {
                            var a = null === (r = i.getScrollerNode()) || void 0 === r ? void 0 : r.children;
                            if (null != a) {
                                var l = a[o];
                                if (null != l) {
                                    var u = i.getScrollerState(),
                                        c = u.scrollTop,
                                        s = c + u.scrollHeight;
                                    (l.offsetTop < c || l.offsetTop > s) && i.scrollTo({
                                        to: l.offsetTop
                                    })
                                }
                            }
                        }
                    }))
                }(s, d, p);
                ! function(e, t) {
                    o.useEffect((function() {
                        var n = function() {
                            var n = e.channels.find((function(e) {
                                return !e.collapsed
                            }));
                            null != n && t.markChannelRead(n)
                        };
                        B.S.subscribe(te.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
                        return function() {
                            B.S.unsubscribe(te.CkL.MARK_TOP_INBOX_CHANNEL_READ, n)
                        }
                    }), [t, e.channels])
                }(d, p);
                o.useEffect((function() {
                    Je.default.track(te.rMx.OPEN_POPOUT, {
                        type: "Inbox"
                    })
                }), []);
                o.useEffect((function() {
                    J.Z.subscribe("CONNECTION_OPEN", u);
                    return function() {
                        J.Z.unsubscribe("CONNECTION_OPEN", u)
                    }
                }), [u]);
                var v = (0,
                        i.e7)([I.Z], (function() {
                        return I.Z.messageGroupSpacing
                    })),
                    g = (0, Fe.Z)("unreads", s);
                if (0 === y.length) {
                    var S;
                    return (0, r.jsxs)("div", {
                        className: ka().container,
                        children: [(0, r.jsx)(Ln, {
                            tab: Z.X.UNREADS,
                            setTab: t,
                            badgeState: c,
                            closePopout: u
                        }), (0, r.jsx)(mr, {
                            Icon: E,
                            header: Be.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
                            tip: "OS X" === (null === (S = Ro().os) || void 0 === S ? void 0 : S.family) ? Be.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : Be.Z.Messages.UNREADS_EMPTY_STATE_TIP
                        })]
                    })
                }
                return (0, r.jsxs)("div", {
                    className: m()(ka().container, "group-spacing-".concat(v)),
                    "aria-label": Be.Z.Messages.UNREADS_TAB_LABEL,
                    children: [(0, r.jsx)(Ln, {
                        tab: Z.X.UNREADS,
                        setTab: t,
                        badgeState: c,
                        closePopout: u,
                        children: (0, r.jsx)(wo, {
                            type: "top-header",
                            onClick: O
                        })
                    }), (0, r.jsx)(ke.bG, {
                        navigator: g,
                        children: (0, r.jsx)(ke.SJ, {
                            children: function(e) {
                                var t = e.ref,
                                    o = Ga(e, ["ref"]);
                                return (0, r.jsxs)(k.AdvancedScrollerThin, Ba(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            Ua(e, t, n[t])
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
                                    onScroll: h === ia.Done ? void 0 : b,
                                    className: ka().scroller,
                                    children: [a ? (0, r.jsx)(Ya, {
                                        setSeenTutorial: l
                                    }) : null, xa(y, p, n), h === ia.Done ? null : (0, r.jsx)(k.Spinner, {
                                        className: ka().spinner
                                    })]
                                }))
                            }
                        })
                    })]
                })
            }

            function Ya(e) {
                var t = e.setSeenTutorial;
                return (0, r.jsxs)("div", {
                    className: ka().tutorial,
                    children: [(0, r.jsx)("div", {
                        className: ka().tutorialIcon,
                        children: (0, r.jsx)(E, {
                            width: 24,
                            height: 24
                        })
                    }), (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(k.Heading, {
                            className: ka().tutorialHeader,
                            variant: "heading-md/semibold",
                            children: Be.Z.Messages.UNREADS_TUTORIAL_HEADER
                        }), (0, r.jsx)(k.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: Be.Z.Messages.UNREADS_TUTORIAL_BODY
                        }), (0,
                            r.jsx)(k.Button, {
                            className: ka().tutorialButton,
                            onClick: t,
                            size: k.Button.Sizes.SMALL,
                            children: Be.Z.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function za(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Qa(e, t) {
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
                    if ("string" == typeof e) return za(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return za(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ka(e) {
                var t = e.onOpen,
                    n = e.onClose,
                    l = e.children,
                    u = e.badgeState,
                    c = e.popoutPosition,
                    s = e.popoutAlign,
                    f = Qa(o.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    h = Qa(function() {
                        var e, t = (0, i.e7)([U.Z], (function() {
                                var t;
                                return null !== (e = null === (t = U.Z.settings.inbox) || void 0 === t ? void 0 : t.currentTab) && void 0 !== e ? e : Z.X.UNREADS
                            })),
                            n = o.useCallback((function(e) {
                                F.hW.updateAsync("inbox", (function(t) {
                                    if (t.currentTab === e) return !1;
                                    t.currentTab = e
                                }), F.fy.FREQUENT_USER_ACTION)
                            }), []);
                        return [t, n]
                    }(), 2),
                    y = h[0],
                    b = h[1],
                    O = function(e) {
                        var t, n = (0, i.e7)([U.Z], (function() {
                                var e;
                                return null !== (t = null === (e = U.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
                            })),
                            r = o.useCallback((function() {
                                F.hW.updateAsync("inbox", (function(e) {
                                    e.viewedTutorial = !0
                                }), F.fy.INFREQUENT_USER_ACTION)
                            }), []);
                        return {
                            showTutorial: !n && e === Z.X.UNREADS,
                            setSeenTutorial: r
                        }
                    }(y),
                    E = O.showTutorial,
                    v = O.setSeenTutorial,
                    g = o.useCallback((function() {
                        p(!1);
                        d && (null == n || n())
                    }), [n, d]),
                    m = o.useCallback((function() {
                        p(!d);
                        d ? null == n || n() : null == t || t()
                    }), [n, t, d]),
                    S = o.useCallback((function() {
                        m();
                        b(Z.X.UNREADS)
                    }), [b, m]);
                o.useEffect((function() {
                    B.S.subscribe(te.CkL.TOGGLE_INBOX_UNREADS_TAB, S);
                    return function() {
                        B.S.unsubscribe(te.CkL.TOGGLE_INBOX_UNREADS_TAB, S)
                    }
                }), [S]);
                var _ = P.Z.useExperiment({
                        location: "46fcf8_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    I = (0, a.sv)();
                o.useEffect((function() {
                    _ || y !== Z.X.TODOS || b(Z.X.MENTIONS)
                }));
                var T = o.useCallback((function(e) {
                    e.shiftKey || g()
                }), [g]);
                return (0, r.jsx)(k.Popout, {
                    animation: k.Popout.Animation.NONE,
                    position: c,
                    align: s,
                    autoInvert: !1,
                    shouldShow: d,
                    onRequestClose: g,
                    renderPopout: function() {
                        return (0, r.jsx)(k.Dialog, {
                            "aria-label": Be.Z.Messages.INBOX,
                            children: y === Z.X.FOR_YOU && I ? (0, r.jsx)(Vn, {
                                setTab: b,
                                badgeState: u,
                                closePopout: g
                            }) : y === Z.X.MENTIONS ? (0, r.jsx)(_o, {
                                setTab: b,
                                onJump: T,
                                badgeState: u,
                                closePopout: g
                            }) : _ && y === Z.X.TODOS ? (0, r.jsx)(Mr, {
                                setTab: b,
                                onJump: T,
                                closePopout: g
                            }) : (0, r.jsx)(Ha, {
                                setTab: b,
                                onJump: T,
                                showTutorial: E,
                                setSeenTutorial: v,
                                closePopout: g,
                                badgeState: u
                            })
                        })
                    },
                    ignoreModalClicks: !0,
                    children: function(e, t) {
                        var n = t.isShown;
                        return l(m, n, e)
                    }
                })
            }
            var Wa = n(699138),
                qa = n.n(Wa);

            function Xa(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ja(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Xa(e, t, n[t])
                    }))
                }
                return e
            }

            function $a(e, t) {
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

            function el(e) {
                var t = e.onOpen,
                    n = e.onClose,
                    o = e.className,
                    c = (0, a.sv)(),
                    s = (0, i.e7)([u.default], (function() {
                        return u.default.getCurrentUser()
                    })),
                    f = (0, i.e7)([l.ZP], (function() {
                        return !(!c || null == (null == s ? void 0 : s.id)) && l.ZP.getMentionCount(s.id, je.W.NOTIFICATION_CENTER) > 0
                    }));
                return (0, r.jsx)(Ka, {
                    onOpen: t,
                    onClose: n,
                    badgeState: {
                        badgeForYou: f
                    },
                    popoutPosition: "bottom",
                    popoutAlign: "right",
                    children: function(e, t, n) {
                        return (0, r.jsx)("div", {
                            className: qa().recentsIcon,
                            children: (0, r.jsx)(v.JO, $a(Ja({}, n), {
                                className: o,
                                onClick: e,
                                icon: E,
                                "aria-label": Be.Z.Messages.INBOX,
                                tooltip: t ? null : Be.Z.Messages.INBOX,
                                selected: t,
                                showBadge: f,
                                children: (0, r.jsx)(x, {
                                    className: qa().todoBadge
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
                l = n(473419),
                u = (0, n(260561).B)({
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
                    var n = null === (t = l.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
                        r = null != n ? i.E.toDate(n) : void 0,
                        a = null != r ? o()().diff(r, "days") : null;
                    return (null == n || null != a && a > 30) && u.getCurrentConfig({
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
                o = (n(667294), n(70418)),
                i = n(874710),
                a = n(218318),
                l = n(457581),
                u = n(665783),
                c = n(379364);

            function s(e) {
                var t = e.channel,
                    n = e.closePopout,
                    s = e.onSelect,
                    f = e.navId,
                    d = e.label,
                    p = (0, i.Z)(t, "Notifications Bell"),
                    h = (0, a.Z)(t),
                    y = (0, u.B)(t);
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
                                    return l.Z.setNotificationSettings(t, {
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
                e: () => f
            });
            var r = n(228721),
                o = n(306472),
                i = n(652591),
                a = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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
            var c = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.loadId = (0, r.Z)();
                        this.appUIViewed = !1
                    }
                    var t = e.prototype;
                    t.trackEvent = function(e, t) {
                        var n = this,
                            r = Date.now();
                        requestIdleCallback((function() {
                            i.default.track(e, u(function(e) {
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
                                    i = null !== (n = null === o.Z || void 0 === o.Z || null === (e = o.Z.processUtils) || void 0 === e || null === (t = e.getMainArgvSync) || void 0 === t ? void 0 : t.call(e)) && void 0 !== n ? n : [],
                                    a = !0,
                                    l = !1,
                                    u = void 0;
                                try {
                                    for (var c, s = i[Symbol.iterator](); !(a = (c = s.next()).done); a = !0) {
                                        var f = c.value;
                                        if (f.startsWith(r)) return {
                                            referrer: f.substr(r.length)
                                        }
                                    }
                                } catch (e) {
                                    l = !0;
                                    u = e
                                } finally {
                                    try {
                                        a || null == s.return || s.return()
                                    } finally {
                                        if (l) throw u
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
                            this.trackEvent(a.rMx.APP_UI_VIEWED, e);
                            this.appUIViewed = !0
                        }
                    };
                    return e
                }(),
                s = new c;

            function f(e) {
                s.trackAppUIViewed(e)
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
                l = n(352980);

            function u(e, t) {
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
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(i.Z, a.Z, l.Z)
                };
                r.getApps = function() {
                    return h
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
                Z: () => b
            });
            var r = n(202351),
                o = n(744564),
                i = n(102921),
                a = n(664625),
                l = n(840922);

            function u(e, t) {
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
            var h = !1;
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
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.Z, a.default)
                };
                r.isEligible = function() {
                    return h
                };
                return n
            }(r.ZP.Store);
            y.displayName = "PremiumPromoStore";
            const b = new y(o.Z, {
                CONNECTION_OPEN: function() {
                    return h !== (h = l.Z.getFriendIDs().length >= 10 && i.Z.extractTimestamp(a.default.getId()) < Date.now() - 15552e6)
                }
            })
        },
        219264: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(202351),
                o = n(630631),
                i = n(744564),
                a = n(481117);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = "MaintenanceStore",
                h = null,
                y = null,
                b = null;
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
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    l(this, n);
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
                return n
            }(r.ZP.Store);
            O.displayName = "MaintenanceStore";
            const E = new O(i.Z, {
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
                l = n(762572),
                u = n(27851),
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

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var E, v = function(e) {
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
            var m, S = {
                    hiddenSurveys: {},
                    validSurveys: {},
                    currentSurvey: null,
                    surveyOverride: null,
                    iosIsPushNotificationClicked: !1,
                    iosIsInviteShown: !1,
                    iosFirstRunDate: null !== (E = i.Z.get(p.z7k)) && void 0 !== E ? E : null,
                    lastFetched: null
                },
                _ = S;
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
            var I = new Set(Object.values(m));

            function P(e) {
                var t = e.guild_requirements,
                    n = void 0 === t ? [] : t,
                    o = e.guild_size,
                    i = void 0 === o ? [null, null] : o,
                    a = e.guild_permissions,
                    l = void 0 === a ? [] : a;
                if (0 === n.length) return !0;
                var h = !0,
                    y = !1,
                    b = void 0;
                try {
                    for (var O, E = n[Symbol.iterator](); !(h = (O = E.next()).done); h = !0) {
                        var v = O.value;
                        if (!I.has(v)) return !1
                    }
                } catch (e) {
                    y = !0;
                    b = e
                } finally {
                    try {
                        h || null == E.return || E.return()
                    } finally {
                        if (y) throw b
                    }
                }
                var g = n.includes(m.GUILD_SIZE_ALL),
                    S = !0,
                    P = Object.values(c.Z.getGuilds()),
                    T = !0,
                    N = !1,
                    A = void 0;
                try {
                    for (var R, C = P[Symbol.iterator](); !(T = (R = C.next()).done); T = !0) {
                        var j = R.value;
                        if (g || n.includes(m.GUILD_SIZE)) {
                            var w = u.Z.getMemberCount(j.id);
                            if (null == w) {
                                S = !1;
                                continue
                            }
                            if (null != i[0] && w < i[0]) {
                                S = !1;
                                continue
                            }
                            if (null != i[1] && w > i[1]) {
                                S = !1;
                                continue
                            }
                        }
                        if ((!n.includes(m.IS_COMMUNITY) || j.hasFeature(p.oNc.COMMUNITY)) && (!n.includes(m.IS_HUB) || j.hasFeature(p.oNc.HUB))) {
                            if (n.includes(m.GUILD_PERMISSIONS)) {
                                if (0 === l.length) continue;
                                var D = !1,
                                    M = !0,
                                    L = !1,
                                    x = void 0;
                                try {
                                    for (var Z, k = l[Symbol.iterator](); !(M = (Z = k.next()).done); M = !0) {
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
                            var B = d.default.getCurrentUser(),
                                G = (null == B ? void 0 : B.id) === j.ownerId,
                                V = s.Z.can(p.Plq.ADMINISTRATOR, j);
                            if ((!n.includes(m.IS_OWNER) || G) && (!n.includes(m.IS_ADMIN) || V)) {
                                var H;
                                _.validSurveys = null !== (H = _.validSurveys) && void 0 !== H ? H : {};
                                null == _.validSurveys[e.key] && (_.validSurveys[e.key] = e);
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
                        T || null == C.return || C.return()
                    } finally {
                        if (N) throw A
                    }
                }
                return !(!g || !S)
            }

            function T(e) {
                var t = e.survey,
                    n = _.hiddenSurveys;
                _.iosIsPushNotificationClicked, _.iosIsInviteShown;
                _.lastFetched = Date.now();
                if (null != t && null == n[t.key]) {
                    if (!P(t)) return;
                    0;
                    _.currentSurvey = t
                }
            }

            function N() {
                if (null != _.currentSurvey && function(e) {
                        if (P(e)) return !0;
                        _.currentSurvey = null;
                        return !1
                    }(_.currentSurvey)) return !1;
                ! function() {
                    var e;
                    _.validSurveys = null !== (e = _.validSurveys) && void 0 !== e ? e : {};
                    var t = Object.values(_.validSurveys)[0];
                    if (null != t && P(t)) T({
                        type: "SURVEY_FETCHED",
                        survey: t
                    });
                    else {
                        if (null == _.currentSurvey) return !1;
                        _.currentSurvey = null
                    }
                }()
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
                    t && O(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    _ = null != e ? e : S;
                    this.syncWith([f.Z], N)
                };
                r.getState = function() {
                    return _
                };
                r.getCurrentSurvey = function() {
                    return _.currentSurvey
                };
                r.getSurveyOverride = function() {
                    return _.surveyOverride
                };
                return n
            }(o.ZP.PersistedStore);
            A.displayName = "SurveyStore";
            A.persistKey = "SurveyStore";
            const R = new A(a.Z, {
                CONNECTION_OPEN: function() {
                    var e;
                    null != _.lastFetched && Date.now() - (null !== (e = _.lastFetched) && void 0 !== e ? e : 0) < 864e5 && null == _.surveyOverride || (0, l.wk)(_.surveyOverride)
                },
                SURVEY_FETCHED: T,
                SURVEY_HIDE: function(e) {
                    var t, n = e.key;
                    _.hiddenSurveys[n] = !0;
                    _.currentSurvey = null;
                    _.validSurveys = null !== (t = _.validSurveys) && void 0 !== t ? t : {};
                    delete _.validSurveys[n]
                },
                SURVEY_OVERRIDE: function(e) {
                    var t = e.id;
                    _.surveyOverride = t;
                    null != t && delete _.hiddenSurveys[t];
                    (0, l.wk)(_.surveyOverride)
                },
                PUSH_NOTIFICATION_CLICK: function() {
                    _.iosIsPushNotificationClicked = !0
                },
                DISPLAYED_INVITE_SHOW: function() {
                    _.iosIsInviteShown = !0
                },
                LOGOUT: function() {
                    _.hiddenSurveys = {}
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

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
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
                    return l(this, n)
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
                        t && u(e, t)
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

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function u(e, t) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
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
                n.prototype.getLastError = function() {
                    return d
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
        623183: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Zt,
                m: () => gt
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                a = n(780964),
                l = n(418705),
                u = n(630631),
                c = n(744564),
                s = n(306472),
                f = n(265688),
                d = n(603927),
                p = n(683323),
                h = n(515169),
                y = n(99827),
                b = n(293078),
                O = n(264076),
                E = n(652555),
                v = n(260561);
            const g = (0, v.B)({
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
            var m = n(827289),
                S = n(46396),
                _ = n(36058),
                I = n(489684),
                P = n(883650),
                T = n(688891),
                N = n(861426),
                A = n(944522),
                R = n(50034),
                C = n(54709),
                j = n(473903),
                w = n(116094);

            function D(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function L(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function x(e, t) {
                x = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return x(e, t)
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function k(e) {
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
                    return L(this, n)
                }
            }
            var F = !1;
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && x(e, t)
                }(n, e);
                var t = k(n);

                function n() {
                    D(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.shouldShowReactivateNotice = function() {
                    var e = j.default.getCurrentUser();
                    return !(0, w.I5)(e) && F
                };
                return n
            }(i.ZP.Store);
            U.displayName = "SubscriptionRemindersStore";
            const B = new U(c.Z, {
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
                    var t = e.subscription;
                    if (null != t) {
                        var n, r = C.Z.createFromServer(t);
                        if (null == (0, w.Af)(r) || null == (null === (n = r.metadata) || void 0 === n ? void 0 : n.ended_at)) return;
                        var i = o()(r.metadata.ended_at);
                        o()().isBetween(i.clone().add(4, "days"), i.clone().add(11, "days")) && (F = !0)
                    }
                }
            });
            var G = n(189807);
            const V = (0, v.B)({
                kind: "user",
                id: "2023-09_window_32_deprecation_message",
                label: "show deprecation message for 32-bit Windows",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "show message",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var H = n(803548),
                Y = n(188435);
            const z = (0, v.B)({
                kind: "user",
                id: "2023-09_proxy_block_notice",
                label: "Proxy Block Experiment",
                defaultConfig: {
                    eligibleForNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show nag bar when proxy blocks an API request",
                    config: {
                        eligibleForNotice: !0
                    }
                }]
            });

            function Q(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function K(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function W(e) {
                W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return W(e)
            }

            function q(e, t) {
                return !t || "object" !== J(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function X(e, t) {
                X = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return X(e, t)
            }
            var J = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function $(e) {
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
                    var n, r = W(e);
                    if (t) {
                        var o = W(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return q(this, n)
                }
            }
            var ee = !1;
            var te = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && X(e, t)
                }(n, e);
                var t = $(n);

                function n() {
                    Q(this, n);
                    return t.apply(this, arguments)
                }! function(e, t, n) {
                    t && K(e.prototype, t);
                    n && K(e, n)
                }(n, [{
                    key: "blockedByProxy",
                    get: function() {
                        return ee
                    }
                }]);
                return n
            }(i.ZP.Store);
            te.displayName = "ProxyBlockStore";
            const ne = new te(c.Z, {
                PROXY_BLOCKED_REQUEST: function(e) {
                    ee = !0
                }
            });
            var re = n(822816),
                oe = n(73727),
                ie = n(525261),
                ae = n(473419),
                le = n(664625),
                ue = n(13066),
                ce = n(912735),
                se = n(61209),
                fe = n(629223),
                de = n(496486),
                pe = n.n(de),
                he = n(595138),
                ye = n(875700),
                be = n(315804),
                Oe = n(959207),
                Ee = n(671723),
                ve = n(151367),
                ge = n(746974),
                me = n(2590);

            function Se(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _e(e) {
                _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _e(e)
            }

            function Ie(e, t) {
                return !t || "object" !== Te(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Pe(e, t) {
                Pe = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Pe(e, t)
            }
            var Te = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ne(e) {
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
                    var n, r = _e(e);
                    if (t) {
                        var o = _e(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ie(this, n)
                }
            }
            var Ae = "DetectedOffPlatformPremiumPerksStore",
                Re = {},
                Ce = {},
                je = [];

            function we() {
                var e = !1,
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = pe().values(Ce)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value,
                            l = a.skuId,
                            u = a.applicationId;
                        if (!je.includes(l)) {
                            var c = Oe.Z.getGame(u);
                            if (null != c) {
                                var s = ge.Z.get(l);
                                if (null != s)
                                    if (ve.Z.applicationIdsFetching.has(c.id) || ve.Z.isEntitledToSku(j.default.getCurrentUser(), l, c.id, c.id) || !s.available) {
                                        if (null != Re[l]) {
                                            delete Re[l];
                                            e = !0
                                        }
                                    } else {
                                        Re[l] = {
                                            skuId: l,
                                            applicationId: u
                                        };
                                        e = !0
                                    }
                                else ge.Z.isFetching(l) || ge.Z.didFetchingSkuFail(l) || be.jU(c.id, l)
                            } else Oe.Z.isFetching(u) || Oe.Z.didFetchingFail(u) || ye.Z.fetchApplication(u)
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
            var De = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Pe(e, t)
                }(n, e);
                var t = Ne(n);

                function n() {
                    Se(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(Ee.ZP, ge.Z, ve.Z);
                    var e;
                    je = null !== (e = u.Z.get(Ae)) && void 0 !== e ? e : je
                };
                r.getDetectedOffPlatformPremiumPerks = function() {
                    return pe().values(Re)
                };
                return n
            }(i.ZP.Store);
            De.displayName = "DetectedOffPlatformPremiumPerksStore";
            const Me = new De(c.Z, {
                LOGOUT: function() {
                    Re = {};
                    Ce = {}
                },
                SKU_FETCH_SUCCESS: we,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: we,
                ENTITLEMENT_CREATE: we,
                APPLICATION_FETCH_SUCCESS: we,
                DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
                    var t = e.skuId;
                    delete Re[t];
                    if (je.includes(t)) return !1;
                    je.push(t);
                    u.Z.set(Ae, je)
                },
                RUNNING_GAMES_CHANGE: function() {
                    var e = !1,
                        t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Ee.ZP.getRunningGames()[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value,
                                l = a.id,
                                u = a.distributor;
                            if (null != l && u !== me.GQo.DISCORD) {
                                var c = !0,
                                    s = !1,
                                    f = void 0;
                                try {
                                    for (var d, p = me.Lg6[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                        var h = d.value,
                                            y = h.skuId,
                                            b = h.applicationId;
                                        if (b === l && (!je.includes(y) && null == Ce[y])) {
                                            ve.Z.applicationIdsFetched.has(b) || ve.Z.applicationIdsFetching.has(b) || null != ve.Z.getForSku(y) || he.yD(b);
                                            Ce[y] = {
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
                    e && we();
                    return e
                }
            });
            var Le = n(21372),
                xe = n(567403),
                Ze = n(602351),
                ke = n(288263),
                Fe = n(682776),
                Ue = n(40134),
                Be = n(563367),
                Ge = n(715107),
                Ve = n(464187),
                He = n(219264),
                Ye = n(793461),
                ze = n(688013),
                Qe = n(984237),
                Ke = n(407561),
                We = n(615796),
                qe = n(711531),
                Xe = n(536392),
                Je = n(732054),
                $e = n(325213),
                et = n(120415),
                tt = n(364581),
                nt = n(448200),
                rt = n(454708),
                ot = n(199790),
                it = n(483255),
                at = n(203600),
                lt = n(520453),
                ut = n(36256);

            function ct(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function st(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ft(e) {
                ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ft(e)
            }

            function dt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        st(e, t, n[t])
                    }))
                }
                return e
            }

            function pt(e, t) {
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

            function ht(e, t) {
                return !t || "object" !== Ot(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function yt(e, t) {
                yt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return yt(e, t)
            }
            var bt, Ot = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Et(e) {
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
                    var n, r = ft(e);
                    if (t) {
                        var o = ft(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ht(this, n)
                }
            }
            var vt, gt = (st(bt = {}, me.kVF.LOCALIZED_PRICING, l.z$.NAGBAR_NOTICE_LOCALIZED_PRICING), st(bt, me.kVF.DOWNLOAD_NAG, l.z$.NAGBAR_NOTICE_DOWNLOAD), st(bt, me.kVF.CONNECT_SPOTIFY, l.z$.NAGBAR_NOTICE_CONNECT_SPOTIFY), st(bt, me.kVF.CONNECT_PLAYSTATION, l.z$.NAGBAR_NOTICE_CONNECT_PLAYSTATION), st(bt, me.kVF.MFA_SMS_BACKUP, l.z$.NAGBAR_NOTICE_MFA_SMS_BACKUP), st(bt, me.kVF.PREMIUM_TIER_2_TRIAL_ENDING, l.z$.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), st(bt, me.kVF.PREMIUM_REACTIVATE, l.z$.NAGBAR_NOTICE_PREMIUM_REACTIVATE), st(bt, me.kVF.DROPS_GO_LIVE_BANNER, l.z$.QUEST_2_GO_LIVE_BANNER), st(bt, me.kVF.DROPS_ENDED_INCOMPLETE, l.z$.QUEST_2_ENDED_INCOMPLETE),
                    st(bt, me.kVF.BOUNCED_EMAIL_DETECTED, l.z$.NAGBAR_BOUNCED_EMAIL_NOTICE), st(bt, me.kVF.ACTIVATE_SERVER_SUBSCRIPTION, l.z$.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION), st(bt, me.kVF.PREMIUM_TIER_0_TRIAL_ENDING, l.z$.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING), st(bt, me.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR, l.z$.GUILD_ONBOARDING_UPSELL_NAGBAR), st(bt, me.kVF.POMELO_ELIGIBLE, l.z$.NAGBAR_NOTICE_POMELO), bt),
                mt = (st(vt = {}, me.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, "hideDetectedOffPlatformPremiumPerkUpsell"), st(vt, me.kVF.PREMIUM_UNCANCEL, "hideUncancelReminder"), st(vt, me.kVF.PREMIUM_MISSING_PAYMENT, "hideMissingPaymentReminder"), st(vt, me.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, "hidePastDueMissingPaymentReminder"), st(vt, me.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, "hidePastDueInvalidPaymentReminder"), st(vt, me.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, "hidePastDueOneTimePaymentReminder"), st(vt, me.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, "hideAutoModerationMentionRaidDetectionNotice"),
                    st(vt, me.kVF.GUILD_RAID_NOTIFICATION, "hideGuildRaidDetectionNotice"), st(vt, me.kVF.SERVER_USAGE_SURVEY, "hideServerUsageSurvey"), st(vt, me.kVF.WIN32_DEPRECATED_MESSAGE, "hideWin32DeprecationMessageNotice"), st(vt, me.kVF.PREMIUM_TIER_2_TRIAL_ENDING, "hidePremiumTier2TrialOfferEndingNotice"), vt),
                St = new Set([me.kVF.NO_INPUT_DETECTED, me.kVF.STREAMER_MODE, me.kVF.VIDEO_UNSUPPORTED_BROWSER, me.kVF.SPOTIFY_AUTO_PAUSED, me.kVF.DISPATCH_ERROR, me.kVF.DISPATCH_ERROR, me.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, me.kVF.BLOCKED_BY_PROXY]),
                _t = {},
                It = Object.freeze({
                    id: null,
                    message: null,
                    buttonText: null,
                    callback: void 0,
                    metadata: null
                }),
                Pt = null;

            function Tt(e) {
                return mt[e] + "-untilAtLeast"
            }

            function Nt(e, t, n) {
                if (null != e) {
                    var r = mt[e];
                    null == r || t || u.Z.set(r, !0);
                    St.has(e) && (_t[e] = !0);
                    null != n && null != r ? function(e, t) {
                        u.Z.set(Tt(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
                    }(e, n) : function(e) {
                        u.Z.remove(Tt(e))
                    }(e)
                }
            }

            function At(e) {
                if (null == e) return !1;
                var t = function(e) {
                    return G.cI.getCurrentConfig({
                        location: "NoticeStore_isNoticeDismissed"
                    }, {
                        autoTrackExposure: !0,
                        disable: e !== me.kVF.PREMIUM_TIER_2_TRIAL_ENDING
                    }).enabled ? null : gt[e]
                }(e);
                if (null != t) return (0, h.un)(t);
                var n = mt[e];
                if (null != n) {
                    var r = function(e) {
                        var t = u.Z.get(Tt(e));
                        return null != t ? o()(t) : null
                    }(e);
                    if (null != r) return null == r ? void 0 : r.isAfter(o()())
                }
                var i = _t[e];
                return !!i || (null != n && "" !== n ? u.Z.get(n) : !!St.has(e) && i)
            }
            var Rt, Ct, jt = [me.kVF.QUARANTINED, me.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, me.kVF.VIEWING_ROLES, me.kVF.INVITED_TO_SPEAK, me.kVF.LURKING_GUILD, me.kVF.VOICE_DISABLED, me.kVF.NO_INPUT_DETECTED, me.kVF.HARDWARE_MUTE, me.kVF.H264_DISABLED, me.kVF.DISPATCH_ERROR, me.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, me.kVF.SPOTIFY_AUTO_PAUSED, me.kVF.DROPS_PROGRESS_INTERRUPTION, me.kVF.WIN32_DEPRECATED_MESSAGE, me.kVF.BLOCKED_BY_PROXY, me.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, me.kVF.GUILD_RAID_NOTIFICATION, me.kVF.UNCLAIMED_ACCOUNT, me.kVF.POMELO_ELIGIBLE, me.kVF.PENDING_MEMBER, me.kVF.OUTBOUND_PROMOTION, me.kVF.CORRUPT_INSTALLATION, me.kVF.VIDEO_UNSUPPORTED_BROWSER, me.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, me.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, me.kVF.STREAMER_MODE, me.kVF.SCHEDULED_MAINTENANCE, me.kVF.BOUNCED_EMAIL_DETECTED, me.kVF.UNVERIFIED_ACCOUNT, me.kVF.PREMIUM_TIER_2_TRIAL_ENDING, me.kVF.PREMIUM_TIER_0_TRIAL_ENDING, me.kVF.PREMIUM_UNCANCEL, me.kVF.PREMIUM_MISSING_PAYMENT, me.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, me.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, me.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, me.kVF.PREMIUM_REACTIVATE, me.kVF.ACTIVATE_SERVER_SUBSCRIPTION, me.kVF.MFA_SMS_BACKUP, me.kVF.APPLICATION_TEST_MODE, me.kVF.LOCALIZED_PRICING, me.kVF.DOWNLOAD_NAG, me.kVF.CONNECT_SPOTIFY, me.kVF.CONNECT_PLAYSTATION, me.kVF.SURVEY, me.kVF.SERVER_USAGE_SURVEY, me.kVF.SAFETY_USER_SENTIMENT_NAGBAR, me.kVF.DROPS_GO_LIVE_BANNER, me.kVF.DROPS_ENDED_INCOMPLETE, me.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR],
                wt = [me.kVF.QUARANTINED, me.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, me.kVF.VIEWING_ROLES, me.kVF.INVITED_TO_SPEAK, me.kVF.LURKING_GUILD, me.kVF.VOICE_DISABLED, me.kVF.NO_INPUT_DETECTED, me.kVF.HARDWARE_MUTE, me.kVF.H264_DISABLED, me.kVF.DISPATCH_ERROR, me.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, me.kVF.SPOTIFY_AUTO_PAUSED, me.kVF.BLOCKED_BY_PROXY, me.kVF.PENDING_MEMBER, me.kVF.STREAMER_MODE, me.kVF.SCHEDULED_MAINTENANCE],
                Dt = (st(Ct = {}, me.kVF.GUILD_RAID_NOTIFICATION, {
                        predicate: function() {
                            return (0, m.g)().show && !At(me.kVF.GUILD_RAID_NOTIFICATION)
                        },
                        metadata: function() {
                            return {
                                dismissUntil: o()().add(3, "hours").toDate()
                            }
                        }
                    }), st(Ct, me.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, {
                        predicate: function(e) {
                            var t = e.currentUser,
                                n = e.selectedGuildId;
                            if (null == n) return !1;
                            var r = Le.ZP.getMember(n, t.id);
                            return null != r && !r.isPending && (0, _.EY)(r)
                        }
                    }), st(Ct, me.kVF.QUARANTINED, {
                        predicate: function(e) {
                            return e.currentUser.hasFlag(me.xW$.QUARANTINED)
                        }
                    }), st(Ct, me.kVF.VIEWING_ROLES, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return N.Z.isViewingRoles(t)
                        }
                    }), st(Ct, me.kVF.INVITED_TO_SPEAK, {
                        predicate: function(e) {
                            var t = e.voiceState;
                            return (0, ie.gf)(t) === ie.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                        }
                    }), st(Ct, me.kVF.LURKING_GUILD, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return null != t && A.Z.isLurking(t)
                        }
                    }), st(Ct, me.kVF.VOICE_DISABLED, {
                        predicate: function() {
                            return null != Be.Z.getRemoteDisconnectVoiceChannelId()
                        }
                    }), st(Ct, me.kVF.NO_INPUT_DETECTED, {
                        predicate: function(e) {
                            var t = e.voiceChannelId,
                                n = e.voiceState,
                                r = se.Z.getChannel(t),
                                o = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                            return !1 === Ze.Z.getInputDetected() && !o
                        }
                    }), st(Ct, me.kVF.H264_DISABLED, {
                        predicate: function(e) {
                            var t = e.voiceChannelId,
                                n = se.Z.getChannel(t);
                            return !Ze.Z.getOpenH264() && null != t && Ke.Z.hasVideo(t) && null != n && n.isGuildStageVoice()
                        }
                    }), st(Ct, me.kVF.HARDWARE_MUTE, {
                        predicate: function() {
                            return Be.Z.isConnected() && Ze.Z.isHardwareMute()
                        },
                        metadata: function() {
                            var e = Ze.Z.getInputDeviceId(),
                                t = ce.Z.getVendor(e),
                                n = ce.Z.getModel(e);
                            if (null != t && null != n) return {
                                vendor: t,
                                model: n
                            }
                        }
                    }), st(Ct, me.kVF.DISPATCH_ERROR, {
                        predicate: function() {
                            return null != tt.Z.getLastError()
                        },
                        metadata: function() {
                            return {
                                error: tt.Z.getLastError()
                            }
                        }
                    }), st(Ct, me.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, {
                        predicate: function() {
                            return null != nt.Z.getLastProgress()
                        },
                        metadata: function() {
                            return nt.Z.getLastProgress()
                        }
                    }), st(Ct, me.kVF.SPOTIFY_AUTO_PAUSED, {
                        predicate: function() {
                            return oe.Z.wasAutoPaused()
                        }
                    }),
                    st(Ct, me.kVF.BLOCKED_BY_PROXY, {
                        predicate: function() {
                            return !At(me.kVF.BLOCKED_BY_PROXY) && ne.blockedByProxy && z.getCurrentConfig({
                                location: "notice_store"
                            }).eligibleForNotice
                        }
                    }), st(Ct, me.kVF.UNCLAIMED_ACCOUNT, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null != t && !t.isClaimed()
                        }
                    }), st(Ct, me.kVF.PENDING_MEMBER, {
                        predicate: function(e) {
                            var t, n, r = e.selectedGuildId,
                                o = e.currentUser;
                            return null !== (Rt = null != r && null != o && !(null === (t = xe.Z.getGuild(r)) || void 0 === t ? void 0 : t.hasFeature(me.oNc.GUILD_ONBOARDING)) && (null === (n = Le.ZP.getMember(r, o.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== Rt && Rt
                        }
                    }), st(Ct, me.kVF.OUTBOUND_PROMOTION, {
                        predicate: function() {
                            return (0, H.tq)()
                        }
                    }), st(Ct, me.kVF.CORRUPT_INSTALLATION, {
                        predicate: function() {
                            return et.FB && (!a.Z.supported() || rt.Z.isCorruptInstallation())
                        }
                    }), st(Ct, me.kVF.VIDEO_UNSUPPORTED_BROWSER, {
                        predicate: function(e) {
                            var t = e.voiceChannelId;
                            return null != t && Ke.Z.hasVideo(t) && !Ze.Z.supports(ut.AN.VIDEO) && !At(me.kVF.VIDEO_UNSUPPORTED_BROWSER)
                        }
                    }),
                    st(Ct, me.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return w.ZP.canRedeemPremiumPerks(t) && Me.getDetectedOffPlatformPremiumPerks().length > 0
                        },
                        metadata: function() {
                            return Me.getDetectedOffPlatformPremiumPerks()[0]
                        }
                    }), st(Ct, me.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, {
                        predicate: function() {
                            return !At(me.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Me.getDetectedOffPlatformPremiumPerks().length > 0
                        },
                        metadata: function() {
                            return Me.getDetectedOffPlatformPremiumPerks()[0]
                        }
                    }), st(Ct, me.kVF.STREAMER_MODE, {
                        predicate: function() {
                            return Ye.Z.enabled
                        }
                    }), st(Ct, me.kVF.DOWNLOAD_NAG, {
                        predicate: function() {
                            return !et.FB && !At(me.kVF.DOWNLOAD_NAG)
                        }
                    }), st(Ct, me.kVF.SCHEDULED_MAINTENANCE, {
                        predicate: function() {
                            return null != He.Z.getScheduledMaintenance()
                        },
                        metadata: function() {
                            var e = He.Z.getScheduledMaintenance();
                            if (null != e) return {
                                id: e.id,
                                start: new Date(e.scheduled_for),
                                end: new Date(e.scheduled_until)
                            }
                        }
                    }), st(Ct, me.kVF.SURVEY, {
                        predicate: function() {
                            return null != ze.Z.getCurrentSurvey()
                        },
                        metadata: function() {
                            return ze.Z.getCurrentSurvey()
                        }
                    }), st(Ct, me.kVF.SERVER_USAGE_SURVEY, {
                        predicate: function(e) {
                            return null != e.selectedGuildId && g.getCurrentConfig({
                                location: "notice_store"
                            }).showSurvey && !At(me.kVF.SERVER_USAGE_SURVEY)
                        },
                        metadata: function(e) {
                            return {
                                selectedGuildId: e.selectedGuildId,
                                currentUser: e.currentUser
                            }
                        }
                    }), st(Ct, me.kVF.UNVERIFIED_ACCOUNT, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null != (null == t ? void 0 : t.email) && !t.verified
                        }
                    }), st(Ct, me.kVF.BOUNCED_EMAIL_DETECTED, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null == t ? void 0 : t.hasBouncedEmail
                        }
                    }), st(Ct, me.kVF.CONNECT_SPOTIFY, {
                        predicate: function() {
                            return !oe.Z.hasConnectedAccount() && Ee.ZP.isObservedAppRunning(f.Z.get(me.ABu.SPOTIFY).name) && !At(me.kVF.CONNECT_SPOTIFY)
                        }
                    }), st(Ct, me.kVF.WIN32_DEPRECATED_MESSAGE, {
                        predicate: function() {
                            return V.getCurrentConfig({
                                location: "window32_deprecation_message"
                            }).enabled && "ia32" === (null === s.Z || void 0 === s.Z ? void 0 : s.Z.os.arch) && "win32" === (null === s.Z || void 0 === s.Z ? void 0 : s.Z.process.platform)
                        },
                        metadata: function() {
                            return {
                                dismissUntil: o()().add(5, "days").toDate()
                            }
                        }
                    }), st(Ct, me.kVF.CONNECT_PLAYSTATION, {
                        predicate: function() {
                            return fe.Z.isSuggestedAccountType(me.ABu.PLAYSTATION) && null == fe.Z.getAccount(null, me.ABu.PLAYSTATION) && !At(me.kVF.CONNECT_PLAYSTATION)
                        }
                    }), st(Ct, me.kVF.PREMIUM_TIER_2_TRIAL_ENDING, {
                        predicate: function() {
                            for (var e in at.nG) {
                                var t, n = Je.Z.getUserTrialOffer(at.nG[e].id);
                                if (null != n && (null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === at.Si.TIER_2 && null != n.expires_at && Date.parse(n.expires_at) < Date.now() + at.ff && !At(me.kVF.PREMIUM_TIER_2_TRIAL_ENDING)) return !0
                            }
                            return !1
                        }
                    }), st(Ct, me.kVF.PREMIUM_TIER_0_TRIAL_ENDING, {
                        predicate: function() {
                            for (var e in at.nG) {
                                var t, n = Je.Z.getUserTrialOffer(at.nG[e].id);
                                if (null != n && (null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === at.Si.TIER_0 && null != n.expires_at && Date.parse(n.expires_at) < Date.now() + at.ff && !At(me.kVF.PREMIUM_TIER_0_TRIAL_ENDING)) return !0
                            }
                            return !1
                        }
                    }), st(Ct, me.kVF.PREMIUM_UNCANCEL, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = null != (null == t ? void 0 : t.canceledAt) && (null == t ? void 0 : t.status) === me.O0b.CANCELED && o()().diff(o()(t.canceledAt), "days") <= 1,
                                a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                l = null != t && t.status === me.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0, w.M5)(n, at.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !At(me.kVF.PREMIUM_UNCANCEL) && l
                        },
                        metadata: function(e) {
                            var t, n = e.premiumSubscription,
                                r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = null != n ? null === (t = (0, w.Af)(n)) || void 0 === t ? void 0 : t.planId : null;
                            return {
                                daysLeft: r,
                                premiumType: null != i ? w.ZP.getPremiumType(i) : null,
                                premiumSubscription: n
                            }
                        }
                    }), st(Ct, me.kVF.PREMIUM_MISSING_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = (null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf("day"), "days") : 0) > 14 ? 7 : 2,
                                a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                l = ve.Z.applicationIdsFetched.has(at.RQ),
                                u = ve.Z.getForApplication(at.RQ),
                                c = null != t ? (0, w.Af)(t) : null,
                                s = null != c ? w.ZP.getSkuIdForPlan(c.planId) : null,
                                f = null != u && null != c && Array.from(u).filter((function(e) {
                                    var t = e.skuId;
                                    return !e.consumed && t === s
                                })).length > 0,
                                d = null != t && r <= i && r >= 0 && t.status !== me.O0b.PAST_DUE && !a && l && !f && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !At(me.kVF.PREMIUM_MISSING_PAYMENT) && d
                        },
                        metadata: function(e) {
                            var t, n = e.premiumSubscription,
                                r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0,
                                i = null != n ? null === (t = (0, w.Af)(n)) || void 0 === t ? void 0 : t.planId : null;
                            return {
                                daysLeft: r,
                                premiumType: null != i ? w.ZP.getPremiumType(i) : null,
                                premiumSubscription: n
                            }
                        }
                    }), st(Ct, me.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t && null != t.paymentSourceId ? qe.Z.getPaymentSource(t.paymentSourceId) : null,
                                i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                a = null != t && t.status === me.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !At(me.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a
                        },
                        metadata: function(e) {
                            return {
                                premiumSubscription: e.premiumSubscription
                            }
                        }
                    }), st(Ct, me.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                i = null != t && t.status === me.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !At(me.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i
                        },
                        metadata: function(e) {
                            return {
                                premiumSubscription: e.premiumSubscription
                            }
                        }
                    }), st(Ct, me.kVF.MFA_SMS_BACKUP, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return null != t && t.mfaEnabled && !t.hasFlag(me.xW$.MFA_SMS) && !t.hasFlag(me.xW$.STAFF) && !t.hasFlag(me.xW$.PARTNER) && !At(me.kVF.MFA_SMS_BACKUP)
                        }
                    }), st(Ct, me.kVF.APPLICATION_TEST_MODE, {
                        predicate: function() {
                            return null != $e.Z.testModeApplicationId
                        },
                        metadata: function() {
                            if (null == $e.Z.testModeApplicationId) return {};
                            var e = $e.Z.testModeApplicationId,
                                t = Oe.Z.getGame(e);
                            return {
                                applicationName: null != t ? t.name : e,
                                applicationId: e
                            }
                        }
                    }), st(Ct, me.kVF.PREMIUM_REACTIVATE, {
                        predicate: function() {
                            return !At(me.kVF.PREMIUM_REACTIVATE) && B.shouldShowReactivateNotice()
                        }
                    }), st(Ct, me.kVF.LOCALIZED_PRICING, {
                        predicate: function(e) {
                            var t = e.isLocalizedPromoEnabled;
                            return !At(me.kVF.LOCALIZED_PRICING) && t
                        },
                        metadata: function(e) {
                            return {
                                premiumSubscription: e.premiumSubscription
                            }
                        }
                    }), st(Ct, me.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, {
                        predicate: function(e) {
                            var t = e.premiumSubscription,
                                n = e.currentUser,
                                r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                                i = null != t && null != t.paymentSourceId ? qe.Z.getPaymentSource(t.paymentSourceId) : null,
                                a = null != i && lt.Uk.has(i.type),
                                l = null != t && t.status === me.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !At(me.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && l
                        },
                        metadata: function(e) {
                            var t = e.premiumSubscription;
                            return {
                                daysPastDue: (null == t ? void 0 : t.status) === me.O0b.PAST_DUE ? o()().diff(o()(t.currentPeriodStart), "days") : 0,
                                dismissUntil: o()(null == t ? void 0 : t.currentPeriodStart).add((0, w.lU)(t), "days").toDate()
                            }
                        }
                    }), st(Ct, me.kVF.DROPS_GO_LIVE_BANNER, {
                        predicate: function() {
                            return !At(me.kVF.DROPS_GO_LIVE_BANNER) && (0, h.un)(l.z$.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.un)(l.z$.QUEST_2_COMPLETION_TOOLTIP) && (0, b.Tn)(it.X2.FORTNITE)
                        },
                        metadata: function() {
                            return {
                                partnerGame: it.X2.FORTNITE
                            }
                        }
                    }), st(Ct, me.kVF.DROPS_PROGRESS_INTERRUPTION, {
                        predicate: function() {
                            return y.Z.isCurrentQuestInterrupted && null != y.Z.currentDropQuestGameTitle
                        },
                        metadata: function() {
                            return {
                                gameTitle: y.Z.currentDropQuestGameTitle,
                                reloadCallback: function() {
                                    return window.location.reload(!0)
                                }
                            }
                        }
                    }), st(Ct, me.kVF.POMELO_ELIGIBLE, {
                        predicate: function() {
                            return (0, R.e)() && !At(me.kVF.POMELO_ELIGIBLE)
                        }
                    }), st(Ct, me.kVF.DROPS_ENDED_INCOMPLETE, {
                        predicate: function() {
                            return !At(me.kVF.DROPS_ENDED_INCOMPLETE) && (0, h.un)(l.z$.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.un)(l.z$.QUEST_2_COMPLETION_TOOLTIP) && (0, b.FL)(it.X2.FORTNITE)
                        },
                        metadata: function() {
                            return {
                                partnerGame: it.X2.FORTNITE
                            }
                        }
                    }), st(Ct, me.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return null != t && null != P.Z.getMentionRaidDetected(t) && (0, I.o3)(t) && !At(me.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)
                        },
                        metadata: function(e) {
                            var t = e.selectedGuildId,
                                n = {
                                    dismissUntil: o()().add(2, "hours").toDate()
                                };
                            if (null != t) {
                                var r = P.Z.getMentionRaidDetected(t);
                                null != r && (n.decisionId = r.decisionId)
                            }
                            return n
                        }
                    }),
                    st(Ct, me.kVF.ACTIVATE_SERVER_SUBSCRIPTION, {
                        predicate: function() {
                            return !At(me.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.Z.getEligibleGuildsForNagActivate().length && (0, d.Lm)()
                        }
                    }), st(Ct, me.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR, {
                        predicate: function(e) {
                            var t = e.selectedGuildId;
                            return !At(me.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, T.S)(t, l.z$.GUILD_ONBOARDING_UPSELL_NAGBAR)
                        }
                    }), st(Ct, me.kVF.SAFETY_USER_SENTIMENT_NAGBAR, {
                        predicate: function(e) {
                            var t = e.currentUser;
                            return re.SI(t)
                        }
                    }), Ct);

            function Mt() {
                if (!E.Z.isConnected()) return !1;
                Pt = null;
                var e = j.default.getCurrentUser();
                if (null == e) return !1;
                var t = Xe.Z.getPremiumSubscription(),
                    n = We.Z.isLocalizedPromoEnabled,
                    r = Ve.Z.getGuildId(),
                    o = Ge.Z.getVoiceChannelId(),
                    i = null != o ? Ke.Z.getVoiceStateForChannel(o) : null,
                    a = ot.a ? wt : jt,
                    l = !0,
                    u = !1,
                    c = void 0;
                try {
                    for (var s, f = a[Symbol.iterator](); !(l = (s = f.next()).done); l = !0) {
                        var d = s.value;
                        if (null != Dt[d]) {
                            if (Dt[d].predicate({
                                    selectedGuildId: r,
                                    voiceChannelId: o,
                                    voiceState: i,
                                    currentUser: e,
                                    premiumSubscription: t,
                                    isLocalizedPromoEnabled: n
                                })) {
                                var p, h, y = null === (h = (p = Dt[d]).metadata) || void 0 === h ? void 0 : h.call(p, {
                                    currentUser: e,
                                    premiumSubscription: t,
                                    selectedGuildId: r
                                });
                                Pt = pt(dt({}, It), {
                                    type: d,
                                    metadata: y
                                });
                                break
                            }
                        } else 0
                    }
                } catch (e) {
                    u = !0;
                    c = e
                } finally {
                    try {
                        l || null == f.return || f.return()
                    } finally {
                        if (u) throw c
                    }
                }
                null != Pt && At(Pt.type) && (Pt = null)
            }

            function Lt() {
                Ye.Z.enabled || delete _t[me.kVF.STREAMER_MODE];
                return Mt()
            }
            var xt = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && yt(e, t)
                }(n, e);
                var t = Et(n);

                function n() {
                    ct(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.syncWith([ze.Z, Ue.Z, Me, Ve.Z, Y.Z, Je.Z, ue.Z, fe.Z, ae.Z, S.Z], Mt);
                    this.waitFor(j.default, He.Z, xe.Z, Le.ZP, Be.Z, Ze.Z, Ye.Z, O.Z, Ve.Z, Qe.Z, oe.Z, Ee.ZP, Ue.Z, tt.Z, nt.Z, $e.Z, ke.Z, Xe.Z, rt.Z, Me, qe.Z, Fe.Z, Y.Z, ve.Z, Je.Z, fe.Z, A.Z, y.Z, p.Z, ne)
                };
                r.hasNotice = function() {
                    return null != Pt && null != Pt.type
                };
                r.getNotice = function() {
                    return null == Qe.Z.getAction() ? Pt : null
                };
                r.isNoticeDismissed = function(e) {
                    return At(e)
                };
                return n
            }(i.ZP.Store);
            xt.displayName = "NoticeStore";
            const Zt = new xt(c.Z, {
                CURRENT_USER_UPDATE: Mt,
                MEDIA_ENGINE_SET_AUDIO_ENABLED: Mt,
                CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: Mt,
                STATUS_PAGE_SCHEDULED_MAINTENANCE: Mt,
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: Mt,
                GUILD_CREATE: Mt,
                GUILD_DELETE: Mt,
                AUDIO_INPUT_DETECTED: Mt,
                AUDIO_SET_DISPLAY_SILENCE_WARNING: Mt,
                CERTIFIED_DEVICES_SET: Mt,
                AUDIO_SET_INPUT_DEVICE: Mt,
                AUDIO_SET_OUTPUT_DEVICE: Mt,
                MEDIA_ENGINE_DEVICES: Mt,
                RTC_CONNECTION_STATE: Mt,
                RPC_APP_AUTHENTICATED: Mt,
                RPC_APP_DISCONNECTED: Mt,
                USER_CONNECTIONS_UPDATE: Mt,
                WINDOW_FOCUS: Mt,
                INSTANT_INVITE_CREATE: Mt,
                INSTANT_INVITE_REVOKE_SUCCESS: Mt,
                SPOTIFY_PLAYER_PAUSE: Mt,
                RUNNING_GAMES_CHANGE: Mt,
                EXPERIMENTS_FETCH_SUCCESS: Mt,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: Mt,
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: Mt,
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: Mt,
                DEVELOPER_TEST_MODE_RESET: Mt,
                BILLING_SUBSCRIPTION_FETCH_SUCCESS: Mt,
                DISPATCH_APPLICATION_INSTALL: Mt,
                IMPERSONATE_STOP: Mt,
                IMPERSONATE_UPDATE: Mt,
                GUILD_MEMBER_ADD: function(e) {
                    return e.user.id === le.default.getId() && Mt()
                },
                GUILD_MEMBER_UPDATE: Mt,
                SURVEY_FETCHED: Mt,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: Mt,
                BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: Mt,
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: Mt,
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: Mt,
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.some((function(e) {
                        return e.userId !== le.default.getId()
                    })) && Mt()
                },
                STREAMER_MODE_UPDATE: Lt,
                RUNNING_STREAMER_TOOLS_CHANGE: Lt,
                DISPATCH_APPLICATION_ERROR: function() {
                    delete _t[me.kVF.DISPATCH_ERROR];
                    return Mt()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    delete _t[me.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS];
                    return Mt()
                },
                DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
                    return Mt()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
                    return Mt()
                },
                NOTICE_SHOW: function(e) {
                    Pt = e.notice
                },
                NOTICE_DISMISS: function(e) {
                    if (null == Pt) return !1;
                    if (null != e.id && e.id !== Pt.id) return !1;
                    Nt(Pt.type, e.isTemporary, e.untilAtLeast);
                    return Mt()
                },
                NOTICE_DISABLE: function(e) {
                    Nt(e.noticeType);
                    return Mt()
                },
                LOGOUT: function() {
                    _t = {};
                    Pt = null
                },
                SUBSCRIPTION_PLANS_FETCH_SUCCESS: Mt,
                AUTO_MODERATION_MENTION_RAID_DETECTION: Mt,
                CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: Mt,
                PROXY_BLOCKED_REQUEST: Mt
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
                a = n(543263),
                l = n.n(a);

            function u(e, t, n) {
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
                        u(e, t, n[t])
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
                    u = f(e, ["value", "text", "className"]);
                return null != o ? (0, r.jsx)("div", s(c({
                    className: i()(l().wrapper, a)
                }, u), {
                    children: o
                })) : n > 0 ? (0, r.jsx)("div", s(c({
                    className: i()(l().wrapper, a)
                }, u), {
                    children: n
                })) : null
            }
        },
        839184: (e, t, n) => {
            "use strict";
            n.d(t, {
                YX: () => d,
                ZP: () => h,
                tT: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(70418),
                l = n(882640),
                u = n.n(l);

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
                    TERTIARY: u().tertiary,
                    SECONDARY: u().secondary,
                    PRIMARY: u().primary
                },
                p = {
                    SIZE_24: u().size24,
                    SIZE_32: u().size32,
                    SIZE_36: u().size36
                };

            function h(e) {
                var t = e.className,
                    n = e.tooltip,
                    o = e.color,
                    l = e.size,
                    d = void 0 === l ? p.SIZE_32 : l,
                    h = e.icon,
                    y = e.onClick,
                    b = e.disabled,
                    O = e.focusProps;
                return (0, r.jsx)(a.Tooltip, {
                    text: n,
                    shouldShow: !b,
                    children: function(e) {
                        var l = e.onClick,
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
                            className: i()(t, u().button, o, d, c({}, u().disabled, b)),
                            onClick: function(e) {
                                null == l || l();
                                y(e)
                            },
                            focusProps: O,
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
                l = n(70418),
                u = n(107364),
                c = n(932179),
                s = n.n(c),
                f = n(380203),
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
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
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
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                var t = E(n);

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
                    return (0, r.jsxs)(u.Z, {
                        className: s().gatedContent,
                        justify: u.Z.Justify.CENTER,
                        align: u.Z.Align.CENTER,
                        direction: u.Z.Direction.VERTICAL,
                        children: [(0, r.jsx)("div", {
                            className: a()(s().image, p)
                        }), (0,
                            r.jsx)("div", {
                            className: a()(s().title, d().marginBottom8),
                            children: t
                        }), (0, r.jsx)("div", {
                            className: a()(s().description, d().marginBottom20),
                            children: n
                        }), (0, r.jsxs)(u.Z, {
                            justify: u.Z.Justify.CENTER,
                            align: u.Z.Align.CENTER,
                            grow: 0,
                            children: [null != i ? (0, r.jsx)(l.Button, {
                                className: s().action,
                                size: l.ButtonSizes.LARGE,
                                color: l.ButtonColors.PRIMARY,
                                onClick: f,
                                children: i
                            }) : null, null != o ? (0, r.jsx)(l.Button, {
                                className: s().action,
                                color: l.Button.Colors.RED,
                                size: l.ButtonSizes.LARGE,
                                onClick: c,
                                children: o
                            }) : null]
                        })]
                    })
                };
                return n
            }(o.PureComponent)
        },
        671917: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
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

            function u(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    c = d(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", f(function(e) {
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
                }({}, (0, a.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, r.jsxs)("g", {
                        clipPath: "url(#clip0)",
                        children: [(0, r.jsx)("path", {
                            d: "M17.5053 1.76605C17.5053 1.76605 26.7154 8.05195 23.2155 16.8783C19.7157 25.7047 12.7544 23.2563 15.3562 20.6775C17.9581 18.0986 12.2862 16.3487 8.65588 13.0024L17.4976 1.76605",
                            fill: u,
                            fillOpacity: "0.6"
                        }), (0, r.jsx)("path", {
                            d: "M16.945 10.4082C15.0032 12.8796 12.2632 14.1153 10.1449 13.6701L2.75381 23.0875C2.62942 23.2463 2.47493 23.3791 2.29918 23.4782C2.12343 23.5774 1.92987 23.6408 1.72956 23.6651C1.52925 23.6893 1.32613 23.6738 1.13181 23.6195C0.937493 23.5652 0.755794 23.473 0.597107 23.3484C0.436561 23.2245 0.302154 23.0701 0.201652 22.8939C0.101149 22.7178 0.0365434 22.5235 0.011566 22.3222C-0.0134115 22.121 0.00173486 21.9168 0.0561299 21.7214C0.110525 21.5261 0.203091 21.3434 0.328479 21.184L7.68121 11.7821C6.70648 9.83259 7.24373 6.84698 9.21623 4.35258C11.6646 1.25185 15.3563 0.0929071 17.4977 1.76608C19.639 3.43925 19.378 7.30749 16.945 10.4082Z",
                            fill: u
                        })]
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0",
                            children: (0, r.jsx)("rect", {
                                width: n,
                                height: i,
                                fill: u
                            })
                        })
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = c(e, ["width", "height", "color", "colorClass"]);
                return (0,
                    r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M9.543 3.278a3 3 0 0 0-.378.74C8.985 4.54 9.448 5 10 5h4c.552 0 1.016-.46.835-.982a2.96 2.96 0 0 0-.378-.74c.234-.162.562-.278.992-.278a1 1 0 1 0 0-2c-1 0-2.013.4-2.68 1.1a3 3 0 0 0-1.539 0C10.564 1.4 9.55 1 8.551 1a1 1 0 0 0 0 2c.43 0 .758.116.992.278Zm8.47 15.576a.254.254 0 0 0 .047.292l1.511 1.51a1 1 0 0 1-1.414 1.415l-1.181-1.18a.257.257 0 0 0-.368.008c-.793.842-1.743 1.47-2.79 1.812-.429.14-.842-.193-.865-.642l-.428-8.57a.526.526 0 0 0-1.05 0l-.428 8.57c-.023.45-.436.781-.864.642-1.048-.341-1.998-.97-2.79-1.812a.257.257 0 0 0-.369-.009l-1.18 1.181a1 1 0 0 1-1.415-1.414l1.51-1.51a.255.255 0 0 0 .048-.293 9.678 9.678 0 0 1-.915-3.128.255.255 0 0 0-.251-.226H3a1 1 0 1 1 0-2h1.82a.255.255 0 0 0 .252-.226 9.677 9.677 0 0 1 .915-3.128.254.254 0 0 0-.047-.292l-1.511-1.51a1 1 0 1 1 1.414-1.415l1.181 1.18c.102.103.27.097.368-.008.833-.885 1.841-1.535 2.952-1.862.376-.11.75.137.845.517l.569 2.274c.063.252.421.252.485 0l.568-2.274c.095-.38.469-.628.845-.517 1.111.327 2.119.977 2.952 1.862a.257.257 0 0 0 .368.009l1.18-1.181a1 1 0 1 1 1.415 1.414l-1.51 1.51a.254.254 0 0 0-.048.293c.463.94.78 1.998.915 3.128a.254.254 0 0 0 .251.226H21a1 1 0 1 1 0 2h-1.82a.254.254 0 0 0-.252.226 9.68 9.68 0 0 1-.915 3.128ZM12.006 6h-.012.012Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        879999: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(387043),
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

            function u(e, t) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                        fill: f,
                        className: d
                    })
                }))
            }), i.A)
        },
        869209: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
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

            function u(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: u,
                        d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M14.414 8.086A2 2 0 0 0 15 6.672V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2.672a2 2 0 0 0 .586 1.414l1.707 1.707a1 1 0 0 0 1.414 0l1.707-1.707Zm-6.328 1.5A2 2 0 0 0 6.672 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2.672a2 2 0 0 0 1.414-.586l1.707-1.707a1 1 0 0 0 0-1.414L8.086 9.586Zm1.5 6.328A2 2 0 0 0 9 17.328V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.672a2 2 0 0 0-.586-1.414l-1.707-1.707a1 1 0 0 0-1.414 0l-1.707 1.707ZM17.328 9a2 2 0 0 0-1.414.586l-1.707 1.707a1 1 0 0 0 0 1.414l1.707 1.707a2 2 0 0 0 1.414.586H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2.672Z",
                        className: h
                    })
                }))
            }))
        },
        82829: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
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

            function u(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 22 23",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: c,
                            fill: u,
                            d: "M4.3231,4.4332 C4.3231,4.4332 4.5811,4.0472 4.6881,3.8762 C4.7951,3.7052 4.4111,3.3012 4.2621,3.1732 C4.1131,3.0452 3.8781,3.1092 3.8781,3.1092 C2.0031,3.9402 1.0651,5.6452 0.9371,5.9862 C0.8091,6.3272 1.2631,6.6992 1.5981,6.8812 C1.7521,6.9652 1.9971,6.7792 2.1481,6.6412 L2.1991,6.5892 L2.2781,6.5092 L2.2791,6.5082 L7.3801,11.5892 L8.0771,10.8922 L9.3581,9.6112 L4.3161,4.4402 L4.3231,4.4332 Z"
                        }), (0, r.jsx)("path", {
                            className: c,
                            fill: u,
                            d: "M16.3738,9.7931 L16.6428,9.5371 L19.0598,11.9311 C19.0768,11.9461 19.0948,11.9521 19.1108,11.9521 C19.1568,11.9521 19.1948,11.9101 19.1948,11.9101 C19.1948,11.9101 21.8708,9.2551 21.8798,9.2461 C21.9588,9.1681 21.8798,9.1251 21.8798,9.1251 L19.8158,7.0471 L19.8128,7.0501 L19.5298,6.7731 L19.6878,6.6211 L20.0258,6.6601 L19.9618,6.2121 L20.0468,6.1261 L19.9198,5.4801 C19.4788,4.8551 18.2708,3.8541 18.2708,3.8541 L17.6388,3.7401 L17.5748,3.8251 L17.0988,3.7541 L17.1448,4.1601 L17.1748,4.1901 L17.0338,4.3321 L16.2538,3.5691 C16.2538,3.5691 11.7278,1.1111 11.4868,0.9971 C11.3508,0.9341 11.2508,0.8921 11.1548,0.8921 C11.0808,0.8921 11.0088,0.9171 10.9258,0.9761 C10.7338,1.1111 10.8468,1.3831 10.8468,1.3831 L13.6608,6.5831 L14.2238,7.1411 L14.0478,7.3171 L14.0478,7.3171 L13.9828,7.3821 L13.5328,7.3201 L13.6018,7.7661 L13.4718,7.8961 L13.4488,7.8731 C13.4278,7.8521 13.3988,7.8411 13.3708,7.8411 C13.3428,7.8411 13.3148,7.8521 13.2928,7.8731 C13.2498,7.9161 13.2498,7.9861 13.2928,8.0291 L13.3158,8.0521 L13.2538,8.1151 L13.2378,8.0981 C13.2158,8.0771 13.1878,8.0661 13.1598,8.0661 C13.1308,8.0661 13.1028,8.0771 13.0818,8.0981 C13.0388,8.1411 13.0388,8.2111 13.0818,8.2541 L13.0988,8.2711 L11.9148,9.4611 L11.8878,9.4341 C11.8658,9.4131 11.8378,9.4021 11.8098,9.4021 C11.7818,9.4021 11.7538,9.4131 11.7318,9.4341 C11.6888,9.4771 11.6888,9.5471 11.7318,9.5901 L11.7598,9.6171 L11.6968,9.6801 L11.6758,9.6601 C11.6548,9.6381 11.6258,9.6271 11.5988,9.6271 C11.5698,9.6271 11.5418,9.6381 11.5198,9.6601 C11.4778,9.7031 11.4778,9.7721 11.5198,9.8151 L11.5408,9.8361 L11.3868,9.9921 L11.3658,10.1901 L11.4468,10.2731 L11.4448,10.2741 L11.3468,10.3741 L4.9578,16.7621 L4.8748,16.6931 L4.6098,16.7311 L4.4598,16.8831 L4.4498,16.8731 C4.4278,16.8511 4.3998,16.8401 4.3718,16.8401 C4.3438,16.8401 4.3148,16.8511 4.2938,16.8731 C4.2508,16.9161 4.2508,16.9851 4.2938,17.0281 L4.3058,17.0401 L4.2438,17.1041 L4.2378,17.0981 C4.2168,17.0761 4.1878,17.0651 4.1598,17.0651 C4.1318,17.0651 4.1038,17.0761 4.0818,17.0981 C4.0398,17.1411 4.0398,17.2101 4.0818,17.2531 L4.0888,17.2611 L2.9198,18.4501 L2.8958,18.4261 C2.8738,18.4041 2.8468,18.3941 2.8178,18.3941 C2.7898,18.3941 2.7618,18.4041 2.7398,18.4261 C2.6968,18.4691 2.6968,18.5391 2.7398,18.5821 L2.7658,18.6071 L2.7038,18.6701 L2.6848,18.6511 C2.6628,18.6301 2.6348,18.6191 2.6058,18.6191 C2.5788,18.6191 2.5498,18.6301 2.5288,18.6511 C2.4858,18.6941 2.4858,18.7641 2.5288,18.8071 L2.5488,18.8281 L2.4618,18.9171 L2.0088,18.8361 L2.0428,19.3421 L1.8998,19.4881 L2.0238,20.1701 C2.0238,20.1701 2.2138,20.7641 2.6048,21.1581 C2.9838,21.5401 3.5618,21.7231 3.5868,21.7421 L4.2398,21.8561 L4.4008,21.6981 L4.8508,21.7711 L4.7768,21.3261 L4.9138,21.1921 L4.9768,21.2551 C4.9978,21.2761 5.0258,21.2871 5.0538,21.2871 C5.0818,21.2871 5.1108,21.2761 5.1318,21.2551 C5.1748,21.2111 5.1748,21.1421 5.1318,21.0991 L5.0698,21.0371 L5.1338,20.9751 L5.1878,21.0291 C5.2088,21.0511 5.2378,21.0621 5.2658,21.0621 C5.2938,21.0621 5.3218,21.0511 5.3438,21.0291 C5.3868,20.9861 5.3868,20.9171 5.3438,20.8741 L5.2908,20.8201 L6.4778,19.6491 L6.5298,19.7011 C6.5508,19.7231 6.5798,19.7331 6.6078,19.7331 C6.6358,19.7331 6.6638,19.7231 6.6858,19.7011 C6.7278,19.6581 6.7278,19.5881 6.6858,19.5451 L6.6348,19.4951 L6.6978,19.4321 L6.7418,19.4761 C6.7628,19.4971 6.7908,19.5081 6.8188,19.5081 C6.8478,19.5081 6.8758,19.4971 6.8968,19.4761 C6.9398,19.4331 6.9398,19.3631 6.8968,19.3201 L6.8538,19.2771 L6.9868,19.1471 L7.0348,18.8621 L6.9638,18.7911 L6.9648,18.7901 L7.0938,18.6621 L13.4398,12.3141 L13.4368,12.3081 L13.5608,12.4361 L13.7598,12.4141 L13.9388,12.2341 L13.9678,12.2631 C13.9898,12.2841 14.0178,12.2951 14.0458,12.2951 C14.0738,12.2951 14.1028,12.2841 14.1238,12.2631 C14.1668,12.2201 14.1668,12.1501 14.1238,12.1071 L14.0948,12.0781 L14.1578,12.0161 L14.1798,12.0381 C14.2008,12.0591 14.2288,12.0701 14.2578,12.0701 C14.2858,12.0701 14.3138,12.0591 14.3348,12.0381 C14.3778,11.9951 14.3778,11.9251 14.3348,11.8821 L14.3128,11.8591 L15.4988,10.6711 L15.5298,10.7021 C15.5508,10.7231 15.5788,10.7341 15.6068,10.7341 C15.6358,10.7341 15.6638,10.7231 15.6848,10.7021 C15.7278,10.6591 15.7278,10.5891 15.6848,10.5461 L15.6538,10.5151 L15.7168,10.4521 L15.7408,10.4771 C15.7628,10.4981 15.7908,10.5091 15.8188,10.5091 C15.8468,10.5091 15.8748,10.4981 15.8968,10.4771 C15.9398,10.4331 15.9398,10.3641 15.8968,10.3211 L15.8728,10.2961 L16.0048,10.1641 L16.4458,10.2331 L16.3738,9.7931 Z"
                        }), (0, r.jsx)("polygon", {
                            className: c,
                            fill: u,
                            points: "17.255 16.968 14.442 14.836 13.941 14.32 12 16.261 12.488 16.727 14.321 19.476 16.793 22.183 19.642 19.525"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2 20.586v-1.172a1 1 0 0 1 .293-.707l2.414-2.414A1 1 0 0 1 5.414 16H6l9-9-.855-.855a1 1 0 0 1-.221-.336l-1.49-3.726a.5.5 0 0 1 .65-.65l3.725 1.49c.126.051.24.126.336.222l.648.648a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l1.586 1.586a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0L17 9l-9 9v.586a1 1 0 0 1-.293.707l-2.414 2.414a1 1 0 0 1-.707.293H3.414a1 1 0 0 1-.707-.293l-.414-.414A1 1 0 0 1 2 20.586Zm6.232-10.354a.5.5 0 0 0 .707 0l1.293-1.293a.5.5 0 0 0 0-.707L6.5 4.5l.293-.293a1 1 0 0 0 0-1.414l-.5-.5c-.188-.188-.445-.29-.698-.211-.426.134-1.164.487-2.095 1.418-.93.93-1.284 1.67-1.418 2.095-.08.253.023.51.21.698l.5.5a1 1 0 0 0 1.415 0L4.5 6.5l3.732 3.732Zm5.536 4.829a.5.5 0 0 0 0 .707L15.5 17.5l1.437 2.394c.042.07.092.135.15.193l1.736 1.736a.25.25 0 0 0 .354 0l2.646-2.646a.25.25 0 0 0 0-.354l-1.736-1.736a.994.994 0 0 0-.193-.15L17.5 15.5l-1.732-1.732a.5.5 0 0 0-.707 0l-1.293 1.293Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        986979: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
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

            function u(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: u,
                        d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0,
                    a.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        795909: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(147751),
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

            function u(e, t) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 18 : t,
                    o = e.height,
                    i = void 0 === o ? 18 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 18 18",
                    children: (0, r.jsx)("polygon", {
                        fillRule: "nonzero",
                        className: d,
                        fill: f,
                        points: "15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                    })
                }))
            }), i.q)
        },
        940547: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
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

            function l(e, t) {
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

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    u = e.height,
                    c = void 0 === u ? 16 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = e.background,
                    h = l(e, ["width", "height", "color", "foreground", "background"]);
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
        373438: (e, t, n) => {
            "use strict";
            n.d(t, {
                JO: () => O,
                ZP: () => g,
                iz: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(108717),
                u = n(289283),
                c = n(70418),
                s = n(570814),
                f = n(249697),
                d = n(136317),
                p = n(211482),
                h = n(526976),
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
            var O = function(e) {
                    var t = e.className,
                        n = e.iconClassName,
                        o = e.children,
                        i = e.selected,
                        l = void 0 !== i && i,
                        u = e.disabled,
                        s = void 0 !== u && u,
                        f = e.showBadge,
                        d = void 0 !== f && f,
                        h = e.color,
                        O = e.foreground,
                        E = e.background,
                        v = e.icon,
                        g = e.onClick,
                        m = e.onContextMenu,
                        S = e.tooltip,
                        _ = void 0 === S ? null : S,
                        I = e.tooltipColor,
                        P = e.tooltipPosition,
                        T = void 0 === P ? "bottom" : P,
                        N = e.hideOnClick,
                        A = void 0 === N || N,
                        R = e.role,
                        C = e["aria-label"],
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
                            foreground: null != O ? O : void 0,
                            background: null != E ? E : void 0,
                            color: h
                        }),
                        x = C;
                    null == x && "string" == typeof _ && (x = _);
                    return (0,
                        r.jsx)(c.Tooltip, {
                        text: _,
                        color: I,
                        position: T,
                        hideOnClick: A,
                        children: function(e) {
                            var i, u = e.onMouseEnter,
                                f = e.onMouseLeave,
                                S = e.onFocus,
                                _ = e.onBlur;
                            return null == g ? (0, r.jsx)("div", {
                                className: a()(t, [y().iconWrapper]),
                                children: (0, r.jsx)(v, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: a()(n, y().icon),
                                    foreground: null != O ? O : void 0,
                                    background: null != E ? E : void 0,
                                    color: h,
                                    "aria-hidden": j,
                                    onMouseEnter: u,
                                    onMouseLeave: f,
                                    onFocus: S,
                                    onBlur: _
                                })
                            }) : (0, r.jsxs)(c.Clickable, {
                                tag: "div",
                                onClick: s ? void 0 : g,
                                onContextMenu: s ? void 0 : m,
                                onMouseEnter: u,
                                onMouseLeave: f,
                                onFocus: S,
                                onBlur: _,
                                className: a()(t, (i = {}, b(i, y().iconWrapper, !0), b(i, y().clickable, !s && null != g), b(i, y().selected, l), i)),
                                role: R,
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
                E = function(e) {
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
                    O = e["aria-label"],
                    E = e["aria-labelledby"],
                    v = e.role,
                    g = e.scrollable,
                    m = e.transparent,
                    S = void 0 !== m && m,
                    _ = o.useRef(null),
                    I = o.useContext(s.Z);
                return (0, r.jsx)("section", {
                    className: a()(n, y().container, (t = {}, b(t, y().themed, !S), b(t, y().transparent, S), b(t, y().themedMobile, u.tq), t)),
                    "aria-label": O,
                    "aria-labelledby": E,
                    role: v,
                    ref: _,
                    children: (0, r.jsxs)(c.FocusRingScope, {
                        containerRef: _,
                        children: [(0, r.jsxs)("div", {
                            className: y().upperContainer,
                            children: [(0, r.jsxs)("div", {
                                className: a()(y().children, i, b({}, y().scrollable, g)),
                                onDoubleClick: h,
                                children: [u.tq && null != I ? (0, r.jsx)(l.Z, {
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
            v.Icon = O;
            v.Title = function(e) {
                var t = e.className,
                    n = e.wrapperClassName,
                    o = e.children,
                    i = e.onContextMenu,
                    l = e.onClick,
                    u = e.id,
                    s = e.muted,
                    f = void 0 !== s && s,
                    d = e.level,
                    p = void 0 === d ? 1 : d,
                    h = (0,
                        r.jsx)(c.HeadingLevel, {
                        forceLevel: p,
                        children: (0, r.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            color: f ? "header-secondary" : void 0,
                            className: a()(t, y().title),
                            id: u,
                            children: o
                        })
                    });
                return null != l ? (0, r.jsx)(c.Clickable, {
                    onClick: l,
                    onContextMenu: i,
                    className: a()(n, y().titleWrapper),
                    children: h
                }) : (0, r.jsx)("div", {
                    className: a()(n, y().titleWrapper),
                    onContextMenu: i,
                    children: h
                })
            };
            v.Divider = E;
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
                FZ: () => D,
                Hl: () => U,
                NJ: () => x,
                R8: () => k,
                Sq: () => C,
                Wg: () => F,
                Zn: () => R,
                c2: () => M,
                eE: () => Z,
                iE: () => B,
                iK: () => L,
                lv: () => j,
                nR: () => w,
                q0: () => i.a,
                x0: () => N,
                xb: () => G,
                yd: () => A
            });
            var r = n(37163),
                o = n(441714),
                i = n.n(o),
                a = n(42128),
                l = n.n(a),
                u = n(649779),
                c = n.n(u),
                s = n(751050),
                f = n.n(s),
                d = n(313767),
                p = n.n(d),
                h = n(867217),
                y = n.n(h),
                b = n(808425),
                O = n.n(b),
                E = n(662800),
                v = n.n(E),
                g = n(113998),
                m = n.n(g),
                S = n(753318),
                _ = n.n(S);

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
                    var l;
                    a = (i = (l = i).createEntity.apply(l, P(e))).getLastCreatedEntityKey()
                }
                var u = i.getFirstBlock(),
                    c = new r.SelectionState({
                        anchorKey: u.getKey(),
                        anchorOffset: t,
                        focusKey: u.getKey(),
                        focusOffset: n
                    });
                i = r.Modifier.applyEntity(i, c, a);
                return r.EditorState.set(o, {
                    currentContent: i
                })
            }

            function N(e, t, n, o) {
                var i, a = t.getCurrentContent(),
                    u = a.getFirstBlock(),
                    c = u.getText();
                if ("number" == typeof n) {
                    n > c.length && (n = c.length);
                    null != o && o > c.length && (o = c.length);
                    i = new r.SelectionState({
                        anchorKey: u.getKey(),
                        anchorOffset: n,
                        focusKey: u.getKey(),
                        focusOffset: null != o && 0 !== o ? o : n
                    })
                } else i = t.getSelection();
                var s, f = t.getCurrentInlineStyle(),
                    d = l()(a, i);
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

            function R(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return _()(t);
                    case "move-selection-to-start-of-block":
                        return O()(t);
                    case "move-selection-to-end-of-block":
                        return y()(t);
                    default:
                        return t
                }
            }

            function C(e) {
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
                        l = i.substring(e, t);
                    a.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: l
                    })
                }));
                e.forEach((function(e) {
                    var r = !1;
                    a.forEach((function(n) {
                        var o = e.type,
                            i = e.start,
                            a = e.end,
                            l = e.getFullMatch();
                        if (!n.processed)
                            if (n.type === o && n.start === i && n.text === l) {
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
                return N(e, t, 0, C(t).length)
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
                var t = C(e),
                    n = e.getSelection();
                n = (n = n.set("focusOffset", t.length)).set("isBackward", !1);
                return r.EditorState.forceSelection(e, n)
            }

            function U(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = C(e);
                if (n.length > t) {
                    var o = e.getSelection();
                    e = N("", e, t, n.length);
                    o.getAnchorOffset() > t && (o = o.set("anchorOffset", t));
                    o.getFocusOffset() > t && (o = o.set("focusOffset", t));
                    e = r.EditorState.forceSelection(e, o)
                }
                return e
            }

            function B(e) {
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

            function G(e) {
                return 0 === C(e).length
            }
        }
    }
]);