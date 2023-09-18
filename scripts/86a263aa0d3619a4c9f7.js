"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71630, 87283], {
        737264: n => {
            n.exports.Q = function(n) {
                var t, e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(n);
                if (!e) return null;
                e.shift();
                var r = null,
                    o = [];
                if (e[2]) {
                    r = (t = e[2].split("-")).shift();
                    o = t
                }
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var a = [];
                if (e[6]) {
                    (t = e[6].split("-")).shift();
                    for (var c, u = []; t.length;) {
                        var l = t.shift();
                        if (1 === l.length)
                            if (c) {
                                a.push({
                                    singleton: c,
                                    extension: u
                                });
                                c = l;
                                u = []
                            } else c = l;
                        else u.push(l)
                    }
                    a.push({
                        singleton: c,
                        extension: u
                    })
                }
                var f = [];
                if (e[7]) {
                    (f = e[7].split("-")).shift();
                    f.shift()
                }
                var s = [];
                e[8] && (s = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: o
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: f
                    },
                    privateuse: s,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        112897: (n, t, e) => {
            e.d(t, {
                Z: () => u
            });
            var r = e(785893),
                o = (e(667294), e(882723)),
                i = e(968449),
                a = e(763933),
                c = e(691797);

            function u(n) {
                var t = n.id,
                    e = n.label,
                    u = n.onSuccess,
                    l = n.shiftId,
                    f = n.showIconFirst,
                    s = i.Sb.useSetting();
                if (__OVERLAY__ || !s || !c.wS) return null;
                var p = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: p,
                    label: e,
                    action: function(n) {
                        var e = null != l && n.shiftKey ? l : t;
                        (0, c.JG)(e);
                        null == u || u()
                    },
                    icon: a.Z,
                    showIconFirst: f
                }, p)
            }
        },
        564333: (n, t, e) => {
            e.d(t, {
                Rh: () => u,
                Yz: () => l,
                GB: () => f
            });
            e(608575);
            var r = e(575494),
                o = e(281110),
                i = e(744564),
                a = (e(585622), e(948832)),
                c = e(2590);
            e(520453), e(473708);

            function u() {
                if (a.Z.getApplicationsShelfFetchState() === a.M.NOT_FETCHED) {
                    i.Z.dispatch({
                        type: "APPLICATIONS_SHELF_FETCH_START"
                    });
                    o.ZP.get(c.ANM.APPLICATIONS_SHELF).then((function(n) {
                        return i.Z.dispatch({
                            type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                            applications: n.body.applications
                        })
                    })).catch((function(n) {
                        return i.Z.dispatch({
                            type: "APPLICATIONS_SHELF_FETCH_FAIL"
                        })
                    }))
                }
            }

            function l(n) {
                var t = new r.Z(1e3, 5e3);
                i.Z.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: n
                });
                o.ZP.get({
                    url: c.ANM.CHANNEL_INTEGRATIONS(n),
                    backoff: t,
                    retries: 10
                }).then((function(t) {
                    i.Z.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: n,
                        integrations: t.body
                    })
                })).catch((function() {
                    i.Z.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: n
                    })
                }))
            }

            function f(n, t) {
                return o.ZP.delete(c.ANM.CHANNEL_INTEGRATION(n, t)).then((function(n) {
                    var t;
                    if (null === (t = n.body) || void 0 === t ? void 0 : t.message) throw new Error(n.body.message)
                }))
            }
        },
        948832: (n, t, e) => {
            e.d(t, {
                M: () => d,
                Z: () => N
            });
            var r = e(202351),
                o = e(744564),
                i = e(451936),
                a = e(223397);

            function c(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
                return r
            }

            function u(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(n) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                };
                return l(n)
            }

            function f(n, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(n) {
                    if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return n
                }(n) : t
            }

            function s(n, t) {
                s = Object.setPrototypeOf || function(n, t) {
                    n.__proto__ = t;
                    return n
                };
                return s(n, t)
            }

            function p(n) {
                return function(n) {
                    if (Array.isArray(n)) return c(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, t) {
                    if (!n) return;
                    if ("string" == typeof n) return c(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return c(n, t)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var d, E = function(n) {
                return n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
            };

            function h(n) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (n) {
                        return !1
                    }
                }();
                return function() {
                    var e, r = l(n);
                    if (t) {
                        var o = l(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return f(this, e)
                }
            }! function(n) {
                n[n.NOT_FETCHED = 0] = "NOT_FETCHED";
                n[n.FETCHING = 1] = "FETCHING";
                n[n.FETCHED = 2] = "FETCHED";
                n[n.FETCH_FAILED = 3] = "FETCH_FAILED"
            }(d || (d = {}));
            var C = new Map,
                T = new Map,
                g = [],
                y = d.NOT_FETCHED,
                _ = [],
                I = function(n) {
                    ! function(n, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        n.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && s(n, t)
                    }(e, n);
                    var t = h(e);

                    function e() {
                        u(this, e);
                        return t.apply(this, arguments)
                    }
                    var r = e.prototype;
                    r.getIntegrations = function(n) {
                        var t;
                        return null !== (t = C.get(n)) && void 0 !== t ? t : _
                    };
                    r.getIntegration = function(n, t) {
                        var e;
                        return null === (e = C.get(n)) || void 0 === e ? void 0 : e.find((function(n) {
                            return n.application.id === t
                        }))
                    };
                    r.getAllIntegrations = function() {
                        return C
                    };
                    r.getIntegrationsFetchState = function(n) {
                        var t;
                        return null !== (t = T.get(n)) && void 0 !== t ? t : d.NOT_FETCHED
                    };
                    r.getApplicationsShelfFetchState = function() {
                        return y
                    };
                    r.getApplicationsShelf = function() {
                        return g
                    };
                    r.__getLocalVars = function() {
                        return {
                            integrationsByChannel: C,
                            integrationsByChannelFetchState: T,
                            applicationsShelf: g,
                            applicationsShelfFetchState: y,
                            EMPTY: _,
                            store: A
                        }
                    };
                    return e
                }(r.ZP.Store);
            I.displayName = "PrivateChannelIntegrationStore";

            function v(n) {
                return n.sort((function(n, t) {
                    return n.application.name.localeCompare(t.application.name)
                }))
            }
            var A = new I(o.Z, {
                LOGOUT: function() {
                    C.clear()
                },
                CONNECTION_OPEN: function() {
                    C.clear();
                    T.clear()
                },
                CHANNEL_SELECT: function(n) {
                    var t = n.channelId;
                    if (null == t || T.get(t) !== d.FETCH_FAILED) return !1;
                    T.set(t, d.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START: function() {
                    y = d.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS: function(n) {
                    var t = n.applications;
                    g = t.map(i.Z.createFromServer).sort((function(n, t) {
                        return n.name.localeCompare(t.name)
                    }));
                    y = d.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL: function() {
                    y = d.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START: function(n) {
                    var t = n.channelId;
                    C.set(t, null);
                    T.set(t, d.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(n) {
                    var t = n.channelId,
                        e = n.integrations;
                    C.set(t, v(e.map(a.F)));
                    T.set(t, d.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL: function(n) {
                    var t = n.channelId;
                    T.set(t, d.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(n) {
                    var t = n.integration,
                        e = C.get(t.channel_id);
                    if (null == e) return !1;
                    C.set(t.channel_id, v(p(e).concat([(0, a.F)(t)])))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(n) {
                    var t = n.integration,
                        e = C.get(t.channel_id);
                    if (null == e) return !1;
                    var r = (0, a.F)(t),
                        o = e.findIndex((function(n) {
                            return n.application.id === r.application.id
                        })),
                        i = p(e); - 1 === o ? i.push(r) : i[o] = r;
                    C.set(r.channel_id, v(i))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(n) {
                    var t = n.channelId,
                        e = n.applicationId,
                        r = C.get(t);
                    if (null == r) return !1;
                    C.set(t, r.filter((function(n) {
                        return n.application.id !== e
                    })))
                },
                CHANNEL_DELETE: function(n) {
                    var t = n.channel;
                    return C.delete(t.id)
                }
            });
            const N = A
        },
        953572: (n, t, e) => {
            e.r(t);
            e.d(t, {
                default: () => l
            });
            var r = e(785893),
                o = (e(667294), e(882723)),
                i = e(971402),
                a = e(112897),
                c = e(564333),
                u = e(473708);

            function l(n) {
                var t = n.channel,
                    e = n.integration,
                    l = n.onSelect,
                    f = (0, a.Z)({
                        id: t.id,
                        label: u.Z.Messages.COPY_ID_APPLICATION
                    });
                return (0, r.jsxs)(o.Menu, {
                    "aria-label": u.Z.Messages.MANAGE_INTEGRATION,
                    navId: "manage-integration",
                    onClose: i.Zy,
                    onSelect: l,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: (0, r.jsx)(o.MenuItem, {
                            id: "remove-integration",
                            label: u.Z.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                            action: function() {
                                (0, c.GB)(t.id, e.application.id);
                                null != l && l()
                            },
                            color: "danger"
                        })
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: f
                    })]
                })
            }
        },
        763933: (n, t, e) => {
            e.d(t, {
                Z: () => u
            });
            var r = e(785893),
                o = (e(667294), e(633878));

            function i(n, t, e) {
                t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e;
                return n
            }

            function a(n, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : function(n, t) {
                    var e = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }));
                return n
            }

            function c(n, t) {
                if (null == n) return {};
                var e, r, o = function(n, t) {
                    if (null == n) return {};
                    var e, r, o = {},
                        i = Object.keys(n);
                    for (r = 0; r < i.length; r++) {
                        e = i[r];
                        t.indexOf(e) >= 0 || (o[e] = n[e])
                    }
                    return o
                }(n, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < i.length; r++) {
                        e = i[r];
                        t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(n, e) && (o[e] = n[e])
                    }
                }
                return o
            }

            function u(n) {
                var t = n.width,
                    e = void 0 === t ? 24 : t,
                    u = n.height,
                    l = void 0 === u ? 24 : u,
                    f = n.color,
                    s = void 0 === f ? "currentColor" : f,
                    p = n.foreground,
                    d = c(n, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(e);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(n, t, e[t])
                        }))
                    }
                    return n
                }({}, (0, o.Z)(d)), {
                    width: e,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }
        },
        691797: (n, t, e) => {
            e.d(t, {
                wS: () => a,
                JG: () => c
            });
            var r = e(482507),
                o = e(120415),
                i = e(310126),
                a = function() {
                    if (o.FB) return null != i.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (n) {
                        return !1
                    }
                }();

            function c(n) {
                if (!a) return !1;
                if (o.FB) {
                    i.ZP.copy(n);
                    return !0
                }
                return r.J(n)
            }
        },
        482507: (n, t, e) => {
            e.d(t, {
                J: () => r
            });

            function r(n) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var e = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = n;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                e.selectNodeContents(o);
                null == r || r.removeAllRanges();
                null == r || r.addRange(e);
                o.focus();
                o.setSelectionRange(0, n.length);
                var i = document.execCommand("copy");
                t.removeChild(o);
                return i
            }
        }
    }
]);
//# sourceMappingURL=86a263aa0d3619a4c9f7.js.map