"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71630, 87283], {
        737264: e => {
            e.exports.Q = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var r = null,
                    o = [];
                if (n[2]) {
                    r = (t = n[2].split("-")).shift();
                    o = t
                }
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var c = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var a, u = []; t.length;) {
                        var l = t.shift();
                        if (1 === l.length)
                            if (a) {
                                c.push({
                                    singleton: a,
                                    extension: u
                                });
                                a = l;
                                u = []
                            } else a = l;
                        else u.push(l)
                    }
                    c.push({
                        singleton: a,
                        extension: u
                    })
                }
                var f = [];
                if (n[7]) {
                    (f = n[7].split("-")).shift();
                    f.shift()
                }
                var s = [];
                n[8] && (s = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: o
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: i,
                        extension: c,
                        privateuse: f
                    },
                    privateuse: s,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(968449),
                c = n(416644),
                a = n(691797);

            function u(e) {
                var t = e.id,
                    n = e.label,
                    u = e.onSuccess,
                    l = e.shiftId,
                    f = e.showIconFirst,
                    s = i.Sb.useSetting();
                if (__OVERLAY__ || !s || !a.wS) return null;
                var p = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: p,
                    label: n,
                    action: function(e) {
                        var n = null != l && e.shiftKey ? l : t;
                        (0, a.JG)(n);
                        null == u || u()
                    },
                    icon: c.Z,
                    showIconFirst: f
                }, p)
            }
        },
        564333: (e, t, n) => {
            n.d(t, {
                Rh: () => u,
                Yz: () => l,
                GB: () => f
            });
            n(608575);
            var r = n(575494),
                o = n(281110),
                i = n(744564),
                c = (n(585622), n(948832)),
                a = n(2590);
            n(520453), n(473708);

            function u() {
                if (c.Z.getApplicationsShelfFetchState() === c.M.NOT_FETCHED) {
                    i.Z.dispatch({
                        type: "APPLICATIONS_SHELF_FETCH_START"
                    });
                    o.ZP.get(a.ANM.APPLICATIONS_SHELF).then((function(e) {
                        return i.Z.dispatch({
                            type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                            applications: e.body.applications
                        })
                    })).catch((function(e) {
                        return i.Z.dispatch({
                            type: "APPLICATIONS_SHELF_FETCH_FAIL"
                        })
                    }))
                }
            }

            function l(e) {
                var t = new r.Z(1e3, 5e3);
                i.Z.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                });
                o.ZP.get({
                    url: a.ANM.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then((function(t) {
                    i.Z.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                })).catch((function() {
                    i.Z.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                }))
            }

            function f(e, t) {
                return o.ZP.delete(a.ANM.CHANNEL_INTEGRATION(e, t)).then((function(e) {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw new Error(e.body.message)
                }))
            }
        },
        948832: (e, t, n) => {
            n.d(t, {
                M: () => d,
                Z: () => I
            });
            var r = n(202351),
                o = n(744564),
                i = n(451936),
                c = n(223397);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function f(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
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

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return a(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var d, h = function(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }! function(e) {
                e[e.NOT_FETCHED = 0] = "NOT_FETCHED";
                e[e.FETCHING = 1] = "FETCHING";
                e[e.FETCHED = 2] = "FETCHED";
                e[e.FETCH_FAILED = 3] = "FETCH_FAILED"
            }(d || (d = {}));
            var y = new Map,
                g = new Map,
                O = [],
                b = d.NOT_FETCHED,
                v = [],
                C = function(e) {
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
                    var t = E(n);

                    function n() {
                        u(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.getIntegrations = function(e) {
                        var t;
                        return null !== (t = y.get(e)) && void 0 !== t ? t : v
                    };
                    r.getIntegration = function(e, t) {
                        var n;
                        return null === (n = y.get(e)) || void 0 === n ? void 0 : n.find((function(e) {
                            return e.application.id === t
                        }))
                    };
                    r.getAllIntegrations = function() {
                        return y
                    };
                    r.getIntegrationsFetchState = function(e) {
                        var t;
                        return null !== (t = g.get(e)) && void 0 !== t ? t : d.NOT_FETCHED
                    };
                    r.getApplicationsShelfFetchState = function() {
                        return b
                    };
                    r.getApplicationsShelf = function() {
                        return O
                    };
                    return n
                }(r.ZP.Store);
            C.displayName = "PrivateChannelIntegrationStore";

            function T(e) {
                return e.sort((function(e, t) {
                    return e.application.name.localeCompare(t.application.name)
                }))
            }
            const I = new C(o.Z, {
                LOGOUT: function() {
                    y.clear()
                },
                CONNECTION_OPEN: function() {
                    y.clear();
                    g.clear()
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == t || g.get(t) !== d.FETCH_FAILED) return !1;
                    g.set(t, d.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START: function() {
                    b = d.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS: function(e) {
                    var t = e.applications;
                    O = t.map(i.Z.createFromServer).sort((function(e, t) {
                        return e.name.localeCompare(t.name)
                    }));
                    b = d.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL: function() {
                    b = d.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START: function(e) {
                    var t = e.channelId;
                    y.set(t, null);
                    g.set(t, d.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.integrations;
                    y.set(t, T(n.map(c.F)));
                    g.set(t, d.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL: function(e) {
                    var t = e.channelId;
                    g.set(t, d.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    var t = e.integration,
                        n = y.get(t.channel_id);
                    if (null == n) return !1;
                    y.set(t.channel_id, T(p(n).concat([(0, c.F)(t)])))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    var t = e.integration,
                        n = y.get(t.channel_id);
                    if (null == n) return !1;
                    var r = (0, c.F)(t),
                        o = n.findIndex((function(e) {
                            return e.application.id === r.application.id
                        })),
                        i = p(n); - 1 === o ? i.push(r) : i[o] = r;
                    y.set(r.channel_id, T(i))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
                    var t = e.channelId,
                        n = e.applicationId,
                        r = y.get(t);
                    if (null == r) return !1;
                    y.set(t, r.filter((function(e) {
                        return e.application.id !== n
                    })))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return y.delete(t.id)
                }
            })
        },
        953572: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => l
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(971402),
                c = n(112897),
                a = n(564333),
                u = n(473708);

            function l(e) {
                var t = e.channel,
                    n = e.integration,
                    l = e.onSelect,
                    f = (0, c.Z)({
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
                                (0, a.GB)(t.id, n.application.id);
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
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
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

            function f(e, t, n) {
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

            function p(e, t) {
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
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    f = void 0 === o ? 24 : o,
                    s = e.color,
                    p = void 0 === s ? i.Z.colors.INTERACTIVE_NORMAL : s,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, c.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: f,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        691797: (e, t, n) => {
            n.d(t, {
                wS: () => c,
                JG: () => a
            });
            var r = n(482507),
                o = n(120415),
                i = n(310126),
                c = function() {
                    if (o.FB) return null != i.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function a(e) {
                if (!c) return !1;
                if (o.FB) {
                    i.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        482507: (e, t, n) => {
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                n.selectNodeContents(o);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                o.focus();
                o.setSelectionRange(0, e.length);
                var i = document.execCommand("copy");
                t.removeChild(o);
                return i
            }
        }
    }
]);