(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94157], {
        357605: (e, n, t) => {
            var r = {
                "./bg.png": 707532,
                "./cs.png": 585992,
                "./da.png": 466618,
                "./de.png": 519256,
                "./el.png": 783665,
                "./en-GB.png": 639809,
                "./en-US.png": 217038,
                "./es-ES.png": 645324,
                "./fi.png": 696646,
                "./fr.png": 333023,
                "./hi.png": 549513,
                "./hr.png": 820401,
                "./hu.png": 957005,
                "./it.png": 168306,
                "./ja.png": 367146,
                "./ko.png": 835685,
                "./lt.png": 6993,
                "./nl.png": 272595,
                "./no.png": 22956,
                "./pl.png": 92430,
                "./pt-BR.png": 460141,
                "./ro.png": 646036,
                "./ru.png": 254077,
                "./sv-SE.png": 190276,
                "./th.png": 258015,
                "./tr.png": 114821,
                "./uk.png": 907635,
                "./vi.png": 36718,
                "./zh-CN.png": 686588,
                "./zh-TW.png": 841367
            };

            function o(e) {
                var n = a(e);
                return t(n)
            }

            function a(e) {
                if (!t.o(r, e)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    n.code = "MODULE_NOT_FOUND";
                    throw n
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            };
            o.resolve = a;
            e.exports = o;
            o.id = 357605
        },
        855278: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => m
            });
            var r = t(785893),
                o = t(667294),
                a = t(285460),
                c = t(688466),
                u = t(174018),
                i = t(202351),
                p = t(944010),
                s = t(384411),
                l = t(652591),
                f = t(2590),
                h = t(473708),
                g = t(492036),
                d = t.n(g);

            function v(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function T(e, n) {
                return !n || "object" !== b(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function O(e, n) {
                O = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return O(e, n)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
                var n = function() {
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
                    var t, r = y(e);
                    if (n) {
                        var o = y(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return T(this, t)
                }
            }
            var _ = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && O(e, n)
                }(t, e);
                var n = N(t);

                function t() {
                    v(this, t);
                    var e;
                    (e = n.apply(this, arguments)).handleHeaderLocaleChange = function(n) {
                        n !== e.props.locale && p.ZP.overrideLocale(n)
                    };
                    return e
                }
                var i = t.prototype;
                i.shouldScrollToTop = function(e) {
                    var n = e.location;
                    return n.pathname.startsWith(f.Z5c.APPLICATION_STORE_LISTING_SKU("")) || n.pathname.startsWith(f.Z5c.APPLICATION_STORE_LISTING_APPLICATION(""))
                };
                i.render = function() {
                    var e = this,
                        n = this.props,
                        t = n.location,
                        i = n.className,
                        p = n.render,
                        s = n.locale;
                    return (0, r.jsx)(u.Z, {
                        className: i,
                        shouldScrollToTop: this.shouldScrollToTop,
                        render: function(n, u) {
                            return (0, r.jsxs)(o.Fragment, {
                                children: [(0, r.jsx)(c.Z, {
                                    avoidRouter: !0,
                                    locale: s,
                                    authRedirectTo: t.pathname,
                                    track: l.default.track,
                                    className: d().marketingHeader,
                                    onChangeLocale: e.handleHeaderLocaleChange,
                                    mobileClassName: d().marketingHeader,
                                    openNavAriaLabel: h.Z.Messages.OPEN_NAVIGATION,
                                    hideNavAriaLabel: h.Z.Messages.HIDE_NAVIGATION,
                                    skipToContentLabel: h.Z.Messages.SKIP_TO_CONTENT
                                }), p(n, u), (0, r.jsx)(a.Z, {
                                    locale: s,
                                    authRedirectTo: t.pathname,
                                    avoidRouter: !0,
                                    track: l.default.track,
                                    className: d().marketingFooter
                                })]
                            })
                        }
                    })
                };
                return t
            }(o.Component);
            const m = i.ZP.connectStores([s.default], (function() {
                return {
                    locale: s.default.locale
                }
            }))(_)
        }
    }
]);