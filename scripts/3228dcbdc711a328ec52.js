"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47797], {
        122536: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(882723)),
                o = r(223430),
                a = r(976334),
                l = r(239803),
                c = r.n(l);

            function s(e) {
                var t, r = e.attachment,
                    l = null !== (t = r.size) && void 0 !== t ? t : 0,
                    s = Math.round(l / 1024 / 1024 * 100) / 100;
                return (0, n.jsxs)("div", {
                    className: c().container,
                    children: [(0, n.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                        className: c().fileIcon
                    }), (0, n.jsx)(o.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: c().fileName,
                        children: r.filename
                    }), (0, n.jsx)(o.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)("div", {
                        className: c().dot
                    }), (0, n.jsx)(o.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsxs)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [s, "MB"]
                    })]
                })
            }
        },
        247797: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => B
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                a = r.n(o),
                l = r(441143),
                c = r.n(l),
                s = r(202351),
                u = r(304221),
                d = r(882723),
                f = r(638042),
                h = r(264817);

            function p(e, t, r, n, i, o, a) {
                try {
                    var l = e[o](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function m(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function a(e) {
                            p(o, n, i, a, l, "next", e)
                        }

                        function l(e) {
                            p(o, n, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var O = function(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                (n = 0, i) && (o = [2 & o[0], i.value]);
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
                                        n = o[1];
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
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function v(e) {
                (0, h.ZD)(m((function() {
                    var t, i;
                    return O(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, r.e(31649).then(r.bind(r, 542586))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(i, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                b(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, e, t))
                                }]
                        }
                    }))
                })))
            }
            var y = r(567403),
                x = r(223430),
                j = r(155349),
                g = r(249052),
                w = r(642901),
                P = r(835807),
                _ = r(332013),
                N = r(122536),
                D = r(888722),
                C = r(984560),
                I = r(473708),
                T = r(357368),
                Z = r.n(T);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function L(e, t, r, n, i, o, a) {
                try {
                    var l = e[o](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function R(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function a(e) {
                            L(o, n, i, a, l, "next", e)
                        }

                        function l(e) {
                            L(o, n, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function A(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1,
                                    n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                (n = 0, i) && (o = [2 & o[0], i.value]);
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
                                        n = o[1];
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
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function E(e) {
                var t = e.guildProductListing,
                    r = e.guildId,
                    i = e.skuPricePreview,
                    o = (0, _.C)(t),
                    a = (0, g.T4)(i.amount, i.currency),
                    l = (0, s.e7)([y.Z], (function() {
                        return y.Z.getGuild(r)
                    }));
                c()(null != l, "guild cannot be null");
                return (0, n.jsxs)("div", {
                    className: Z().purchaseSummaryContainer,
                    children: [(0,
                        n.jsx)(f.Z, {
                        alt: "",
                        className: Z().purchaseSummaryImage,
                        listing: t,
                        imageSize: 100
                    }), (0, n.jsxs)("div", {
                        className: Z().purchaseSummarInfo,
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: t.name
                        }), (0, n.jsx)(x.Z, {
                            size: 4
                        }), (0, n.jsxs)("div", {
                            className: Z().productTypeContainer,
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: o
                            }), (0, n.jsx)("div", {
                                className: Z().dotSeparator
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                lineClamp: 2,
                                children: l.name
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: Z().purchaseSummaryPrice,
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: a
                        }), (0, n.jsx)(x.Z, {
                            size: 4
                        }), (0, n.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.Z.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
                        })]
                    })]
                })
            }

            function U(e) {
                var t = e.children,
                    r = e.label;
                return (0, n.jsxs)("li", {
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: Z().benefitLabel,
                        children: r
                    }), (0, n.jsx)(x.Z, {
                        size: 12
                    }), t]
                })
            }

            function z(e) {
                var t, r = e.guildProductListing,
                    i = e.guildId,
                    o = null !== (t = r.attachments) && void 0 !== t ? t : [],
                    l = o.length > 1;
                return 0 === o.length ? null : (0, n.jsx)(U, {
                    label: I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
                    children: (0, n.jsxs)("div", {
                        className: a()(Z().attachmentsContainer, A({}, Z().attachmentsContainerMultiple, l)),
                        children: [(0, n.jsx)("div", {
                            className: Z().attachmentGrid,
                            children: o.map((function(e) {
                                return (0, n.jsx)(N.Z, {
                                    attachment: e
                                }, e.id)
                            }))
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)(D.Z, {
                                guildId: i,
                                productId: r.id
                            })
                        })]
                    })
                })
            }

            function G(e) {
                var t = e.role;
                return null == t ? null : (0, n.jsx)(U, {
                    label: I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
                    children: (0, n.jsx)(C.Z, {
                        role: t
                    })
                })
            }

            function H(e) {
                return (0, n.jsx)(d.Text, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "text-normal",
                    children: e
                })
            }

            function B(e) {
                var t = e.onClose,
                    r = e.transitionState,
                    o = e.guildProductListingId,
                    a = e.guildId,
                    l = e.skuPricePreview,
                    f = (0,
                        s.e7)([P.Z], (function() {
                        return P.Z.getGuildProduct(o)
                    }));
                c()(null != f, "guildProductListing cannot be null");
                var h, p = S(i.useState(!1), 2),
                    m = p[0],
                    b = p[1];
                i.useEffect((function() {
                    function e() {
                        return (e = R((function() {
                            return k(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        e.trys.push([0, 2, , 3]);
                                        b(!0);
                                        return [4, (0, w.cf)(a, o)];
                                    case 1:
                                        e.sent();
                                        b(!1);
                                        return [3, 3];
                                    case 2:
                                        e.sent();
                                        t();
                                        v({
                                            body: I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
                                            confirmText: I.Z.Messages.GOT_IT,
                                            header: I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
                                            confirmButtonColor: u.zx.Colors.BRAND
                                        });
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [a, o, t]);
                var O = (null !== (h = f.attachments) && void 0 !== h ? h : []).length > 0,
                    g = f.role_id,
                    _ = (0, s.e7)([y.Z], (function() {
                        var e;
                        return null != g ? null === (e = y.Z.getGuild(a)) || void 0 === e ? void 0 : e.roles[g] : void 0
                    }), [a, g]);
                return (0, n.jsx)(d.ModalRoot, {
                    className: Z().modal,
                    size: d.ModalSize.DYNAMIC,
                    transitionState: r,
                    "aria-label": f.name,
                    children: (0, n.jsx)(d.ModalContent, {
                        children: (0, n.jsx)("div", {
                            className: Z().container,
                            children: m ? (0, n.jsx)(d.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: Z().header,
                                    children: [(0, n.jsx)(d.Heading, {
                                        variant: "heading-xl/semibold",
                                        color: "header-primary",
                                        children: I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
                                    }), (0, n.jsx)(d.Clickable, {
                                        onClick: t,
                                        children: (0, n.jsx)(j.Z, {
                                            width: 24,
                                            height: 24,
                                            className: Z().close
                                        })
                                    })]
                                }), (0, n.jsx)(x.Z, {
                                    size: 16
                                }), (0, n.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
                                        productName: f.name,
                                        emphasisHook: H
                                    })
                                }), (0, n.jsx)(x.Z, {
                                    size: 12
                                }), (0, n.jsxs)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: [O ? I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != _ ? I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
                                        roleName: _.name,
                                        emphasisHook: H
                                    }) : ""]
                                }), (0, n.jsx)(x.Z, {
                                    size: 12
                                }), (0, n.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: I.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
                                }), (0, n.jsx)(x.Z, {
                                    size: 24
                                }), (0, n.jsx)(E, {
                                    guildProductListing: f,
                                    guildId: a,
                                    skuPricePreview: l
                                }), (0, n.jsx)(x.Z, {
                                    size: 32
                                }), (0, n.jsx)("div", {
                                    className: Z().divider
                                }), (0, n.jsx)(x.Z, {
                                    size: 32
                                }), (0, n.jsxs)("ul", {
                                    className: Z().benefitsContainer,
                                    children: [(0, n.jsx)(z, {
                                        guildProductListing: f,
                                        guildId: a
                                    }), (0, n.jsx)(G, {
                                        role: _
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        223430: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(785893);
            r(667294);

            function i(e) {
                var t = e.size,
                    r = e.horizontal,
                    i = void 0 !== r && r,
                    o = i ? t : 1,
                    a = i ? 1 : t;
                return (0, n.jsx)("span", {
                    style: {
                        display: "block",
                        width: o,
                        minWidth: o,
                        height: a,
                        minHeight: a
                    }
                })
            }
        },
        976334: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(795308),
                a = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const h = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    i = e.height,
                    o = void 0 === i ? 16 : i,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    s = e.foreground,
                    h = f(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(h)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                        fill: c,
                        className: s
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    h = e.colorClass,
                    p = void 0 === h ? "" : h,
                    m = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(m)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M6 22h12a4 4 0 0 0 4-4v-7.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4ZM21.66 8a.045.045 0 0 0 .04-.064 3 3 0 0 0-.579-.815L16.88 2.88a2.999 2.999 0 0 0-.815-.58.045.045 0 0 0-.064.042V5a3 3 0 0 0 3 3H21.659Zm-6.31 5.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        }
    }
]);