"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [77703], {
        977703: (t, r, e) => {
            e.r(r);
            e.d(r, {
                openGuildProductLink: () => p
            });
            var n = e(785893),
                o = (e(667294), e(882723)),
                u = e(426089),
                i = e(567403),
                c = e(835807),
                a = e(2590);

            function l(t, r, e, n, o, u, i) {
                try {
                    var c = t[u](i),
                        a = c.value
                } catch (t) {
                    e(t);
                    return
                }
                c.done ? r(a) : Promise.resolve(a).then(n, o)
            }

            function f(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var u = t.apply(r, e);

                        function i(t) {
                            l(u, n, o, i, c, "next", t)
                        }

                        function c(t) {
                            l(u, n, o, i, c, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }

            function s(t, r, e) {
                r in t ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = e;
                return t
            }
            var d = function(t, r) {
                var e, n, o, u, i = {
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
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (e = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                                (n = 0, o) && (u = [2 & u[0], o.value]);
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
                                        n = u[1];
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
                                u = r.call(t, i)
                            } catch (t) {
                                u = [6, t];
                                n = 0
                            } finally {
                                e = o = 0
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

            function p(t, r) {
                var l, p = i.Z.getGuild(t);
                c.Z.getGuildProductFetchState(r) === c.M.FETCHED && !0 !== (null === (l = c.Z.getGuildProduct(r)) || void 0 === l ? void 0 : l.published) && null != p ? (0, o.openModalLazy)(f((function() {
                    var t, r;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([e.e(40532), e.e(38092)]).then(e.bind(e, 838092))];
                            case 1:
                                t = o.sent(), r = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(r, function(t) {
                                        for (var r = 1; r < arguments.length; r++) {
                                            var e = null != arguments[r] ? arguments[r] : {},
                                                n = Object.keys(e);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                                            }))));
                                            n.forEach((function(r) {
                                                s(t, r, e[r])
                                            }))
                                        }
                                        return t
                                    }({}, t))
                                }]
                        }
                    }))
                }))) : !0 === (null == p ? void 0 : p.hasFeature(a.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? (0, u.Z)(a.Z5c.GUILD_PRODUCT(t, r)) : (0, u.Z)(a.Z5c.CHANNEL(t))
            }
        },
        835807: (t, r, e) => {
            e.d(r, {
                M: () => p,
                Z: () => F
            });
            var n = e(842227),
                o = e(202351),
                u = e(575626),
                i = e(744564);

            function c(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function a(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function f(t, r) {
                return !r || "object" !== y(r) && "function" != typeof r ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : r
            }

            function s(t, r) {
                s = Object.setPrototypeOf || function(t, r) {
                    t.__proto__ = r;
                    return t
                };
                return s(t, r)
            }

            function d(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, r) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, r);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return c(t, r)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p, y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function h(t) {
                var r = function() {
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
                    var e, n = l(t);
                    if (r) {
                        var o = l(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return f(this, e)
                }
            }! function(t) {
                t[t.NOT_FETCHED = 0] = "NOT_FETCHED";
                t[t.FETCHING = 1] = "FETCHING";
                t[t.FETCHED = 2] = "FETCHED"
            }(p || (p = {}));
            var E = {},
                v = {},
                b = {},
                T = 6e5,
                C = 1e12;

            function _(t) {
                return "guild:".concat(t)
            }

            function P(t) {
                return "guild:".concat(t, ":published")
            }
            var O = new u.Z((function(t) {
                    var r = [_(t.guild_id)];
                    t.published && r.push(P(t.guild_id));
                    return r
                }), (function(t) {
                    return function(t) {
                        var r = n.default.extractTimestamp(t.id);
                        return t.published ? -r : -r + C
                    }(t)
                })),
                D = [];
            var g = function(t) {
                ! function(t, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && s(t, r)
                }(e, t);
                var r = h(e);

                function e() {
                    a(this, e);
                    return r.apply(this, arguments)
                }
                var n = e.prototype;
                n.getGuildProductsForGuildFetchState = function(t) {
                    var r;
                    return null !== (r = E[t]) && void 0 !== r ? r : p.NOT_FETCHED
                };
                n.getGuildProduct = function(t) {
                    return O.get(t)
                };
                n.getGuildProductsForGuild = function(t, r) {
                    var e = r.publishedOnly;
                    return null == t ? D : O.values(e ? P(t) : _(t))
                };
                n.getGuildProductFetchState = function(t) {
                    var r;
                    return null !== (r = v[t]) && void 0 !== r ? r : p.NOT_FETCHED
                };
                n.isGuildProductsCacheExpired = function(t) {
                    var r;
                    return Date.now() - (null !== (r = b[t]) && void 0 !== r ? r : 0) > T
                };
                n.__getLocalVars = function() {
                    return {
                        guildProductsForGuildFetchState: E,
                        guildProductFetchState: v,
                        lastProductsFetchTimestamp: b,
                        cacheTTL: T,
                        sortKeyPenalty: C,
                        productListings: O,
                        EMPTY_ARRAY: D
                    }
                };
                return e
            }(o.ZP.Store);
            g.displayName = "GuildProductsStore";
            const F = new g(i.Z, {
                CONNECTION_OPEN: function() {
                    O.clear();
                    E = {};
                    v = {};
                    b = {}
                },
                GUILD_PRODUCTS_FETCH: function(t) {
                    var r = t.guildId;
                    E[r] = p.FETCHING;
                    d(O.values(_(r))).forEach((function(t) {
                        O.delete(t.id)
                    }))
                },
                GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
                    var r = t.guildId,
                        e = t.products;
                    E[r] = p.FETCHED;
                    b[r] = Date.now();
                    e.forEach((function(t) {
                        O.set(t.id, t);
                        v[t.id] = p.FETCHED
                    }))
                },
                GUILD_PRODUCTS_FETCH_FAILURE: function(t) {
                    var r = t.guildId;
                    E[r] = p.FETCHED
                },
                GUILD_PRODUCT_CREATE: function(t) {
                    var r = t.product;
                    O.set(r.id, r)
                },
                GUILD_PRODUCT_UPDATE: function(t) {
                    var r = t.product;
                    O.set(r.id, r)
                },
                GUILD_PRODUCT_DELETE: function(t) {
                    var r = t.productId;
                    O.delete(r)
                },
                GUILD_PRODUCT_FETCH: function(t) {
                    var r = t.productId;
                    v[r] = p.FETCHING
                },
                GUILD_PRODUCT_FETCH_SUCCESS: function(t) {
                    var r = t.product;
                    v[r.id] = p.FETCHED;
                    O.set(r.id, r)
                },
                GUILD_PRODUCT_FETCH_FAILURE: function(t) {
                    var r = t.productId,
                        e = t.error;
                    v[r] = p.FETCHED;
                    404 === e.status && O.delete(r)
                }
            })
        }
    }
]);