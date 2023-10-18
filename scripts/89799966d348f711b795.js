"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [77703], {
        977703: (t, n, r) => {
            r.r(n);
            r.d(n, {
                openGuildProductLink: () => p
            });
            var e = r(785893),
                o = (r(667294), r(70418)),
                u = r(426089),
                i = r(567403),
                c = r(835807),
                a = r(2590);

            function l(t, n, r, e, o, u, i) {
                try {
                    var c = t[u](i),
                        a = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(e, o)
            }

            function f(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(e, o) {
                        var u = t.apply(n, r);

                        function i(t) {
                            l(u, e, o, i, c, "next", t)
                        }

                        function c(t) {
                            l(u, e, o, i, c, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }

            function s(t, n, r) {
                n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r;
                return t
            }
            var d = function(t, n) {
                var r, e, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function c(u) {
                    return function(c) {
                        return function(u) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, e && (o = 2 & u[0] ? e.return : u[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, u[1])).done) return o;
                                (e = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        e = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = n.call(t, i)
                            } catch (t) {
                                u = [6, t];
                                e = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, c])
                    }
                }
            };

            function p(t, n) {
                var l, p = i.Z.getGuild(t);
                c.Z.getGuildProductFetchState(n) === c.M.FETCHED && !0 !== (null === (l = c.Z.getGuildProduct(n)) || void 0 === l ? void 0 : l.published) && null != p ? (0, o.openModalLazy)(f((function() {
                    var t, n;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(38092)]).then(r.bind(r, 838092))];
                            case 1:
                                t = o.sent(), n = t.default;
                                return [2, function(t) {
                                    return (0, e.jsx)(n, function(t) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var r = null != arguments[n] ? arguments[n] : {},
                                                e = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                                                return Object.getOwnPropertyDescriptor(r, t).enumerable
                                            }))));
                                            e.forEach((function(n) {
                                                s(t, n, r[n])
                                            }))
                                        }
                                        return t
                                    }({}, t))
                                }]
                        }
                    }))
                }))) : !0 === (null == p ? void 0 : p.hasFeature(a.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? (0, u.Z)(a.Z5c.GUILD_PRODUCT(t, n)) : (0, u.Z)(a.Z5c.CHANNEL(t))
            }
        },
        835807: (t, n, r) => {
            r.d(n, {
                M: () => p,
                Z: () => P
            });
            var e = r(842227),
                o = r(202351),
                u = r(575626),
                i = r(744564);

            function c(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
                return e
            }

            function a(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function f(t, n) {
                return !n || "object" !== y(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function s(t, n) {
                s = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return s(t, n)
            }

            function d(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, n)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p, y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t) {
                var n = function() {
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
                    var r, e = l(t);
                    if (n) {
                        var o = l(this).constructor;
                        r = Reflect.construct(e, arguments, o)
                    } else r = e.apply(this, arguments);
                    return f(this, r)
                }
            }! function(t) {
                t[t.NOT_FETCHED = 0] = "NOT_FETCHED";
                t[t.FETCHING = 1] = "FETCHING";
                t[t.FETCHED = 2] = "FETCHED"
            }(p || (p = {}));
            var E = {},
                b = {},
                h = {};

            function C(t) {
                return "guild:".concat(t)
            }

            function T(t) {
                return "guild:".concat(t, ":published")
            }
            var _ = new u.Z((function(t) {
                    var n = [C(t.guild_id)];
                    t.published && n.push(T(t.guild_id));
                    return n
                }), (function(t) {
                    return function(t) {
                        var n = e.default.extractTimestamp(t.id);
                        return t.published ? -n : 1e12 - n
                    }(t)
                })),
                O = [];
            var D = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && s(t, n)
                }(r, t);
                var n = v(r);

                function r() {
                    a(this, r);
                    return n.apply(this, arguments)
                }
                var e = r.prototype;
                e.getGuildProductsForGuildFetchState = function(t) {
                    var n;
                    return null !== (n = E[t]) && void 0 !== n ? n : p.NOT_FETCHED
                };
                e.getGuildProduct = function(t) {
                    return _.get(t)
                };
                e.getGuildProductsForGuild = function(t, n) {
                    var r = n.publishedOnly;
                    return null == t ? O : _.values(r ? T(t) : C(t))
                };
                e.getGuildProductFetchState = function(t) {
                    var n;
                    return null !== (n = b[t]) && void 0 !== n ? n : p.NOT_FETCHED
                };
                e.isGuildProductsCacheExpired = function(t) {
                    var n;
                    return Date.now() - (null !== (n = h[t]) && void 0 !== n ? n : 0) > 6e5
                };
                return r
            }(o.ZP.Store);
            D.displayName = "GuildProductsStore";
            const P = new D(i.Z, {
                CONNECTION_OPEN: function() {
                    _.clear();
                    E = {};
                    b = {};
                    h = {}
                },
                GUILD_PRODUCTS_FETCH: function(t) {
                    var n = t.guildId;
                    E[n] = p.FETCHING;
                    d(_.values(C(n))).forEach((function(t) {
                        _.delete(t.id)
                    }))
                },
                GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
                    var n = t.guildId,
                        r = t.products;
                    E[n] = p.FETCHED;
                    h[n] = Date.now();
                    r.forEach((function(t) {
                        _.set(t.id, t);
                        b[t.id] = p.FETCHED
                    }))
                },
                GUILD_PRODUCTS_FETCH_FAILURE: function(t) {
                    var n = t.guildId;
                    E[n] = p.FETCHED
                },
                GUILD_PRODUCT_CREATE: function(t) {
                    var n = t.product;
                    _.set(n.id, n)
                },
                GUILD_PRODUCT_UPDATE: function(t) {
                    var n = t.product;
                    _.set(n.id, n)
                },
                GUILD_PRODUCT_DELETE: function(t) {
                    var n = t.productId;
                    _.delete(n)
                },
                GUILD_PRODUCT_FETCH: function(t) {
                    var n = t.productId;
                    b[n] = p.FETCHING
                },
                GUILD_PRODUCT_FETCH_SUCCESS: function(t) {
                    var n = t.product;
                    b[n.id] = p.FETCHED;
                    _.set(n.id, n)
                },
                GUILD_PRODUCT_FETCH_FAILURE: function(t) {
                    var n = t.productId,
                        r = t.error;
                    b[n] = p.FETCHED;
                    404 === r.status && _.delete(n)
                }
            })
        }
    }
]);