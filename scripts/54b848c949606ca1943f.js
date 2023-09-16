"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47797], {
        122536: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                i = (r(667294), r(882723)),
                a = r(223430),
                o = r(324784),
                l = r(239803),
                s = r.n(l);

            function c(e) {
                var t, r = e.attachment,
                    l = null !== (t = r.size) && void 0 !== t ? t : 0,
                    c = Math.round(l / 1024 / 1024 * 100) / 100;
                return (0, n.jsxs)("div", {
                    className: s().container,
                    children: [(0, n.jsx)(o.Z, {
                        width: 16,
                        height: 16,
                        className: s().fileIcon
                    }), (0, n.jsx)(a.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: s().fileName,
                        children: r.filename
                    }), (0, n.jsx)(a.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)("div", {
                        className: s().dot
                    }), (0, n.jsx)(a.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsxs)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [c, "MB"]
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
                a = r(294184),
                o = r.n(a),
                l = r(441143),
                s = r.n(l),
                c = r(202351),
                u = r(304221),
                d = r(882723),
                f = r(638042),
                h = r(264817);

            function m(e, t, r, n, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(n, i)
            }

            function x(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, r);

                        function o(e) {
                            m(a, n, i, o, l, "next", e)
                        }

                        function l(e) {
                            m(a, n, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var b = function(e, t) {
                var r, n, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                (n = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function v(e) {
                (0, h.ZD)(x((function() {
                    var t, i;
                    return b(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, r.e(31649).then(r.bind(r, 542586))];
                            case 1:
                                t = a.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(i, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                p(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, e, t))
                                }]
                        }
                    }))
                })))
            }
            var O = r(567403),
                y = r(223430),
                j = r(189865),
                g = r(249052),
                _ = r(642901),
                w = r(835807),
                N = r(332013),
                C = r(122536),
                I = r(888722),
                D = r(984560),
                P = r(473708),
                T = r(357368),
                M = r.n(T);

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function L(e, t, r, n, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(n, i)
            }

            function A(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, r);

                        function o(e) {
                            L(a, n, i, o, l, "next", e)
                        }

                        function l(e) {
                            L(a, n, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function R(e, t, r) {
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
                        var n, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Z(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e, t) {
                var r, n, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1,
                                    n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                (n = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function k(e) {
                var t = e.guildProductListing,
                    r = e.guildId,
                    i = e.skuPricePreview,
                    a = (0, N.C)(t),
                    o = (0, g.T4)(i.amount, i.currency),
                    l = (0, c.e7)([O.Z], (function() {
                        return O.Z.getGuild(r)
                    }));
                s()(null != l, "guild cannot be null");
                return (0, n.jsxs)("div", {
                    className: M().purchaseSummaryContainer,
                    children: [(0,
                        n.jsx)(f.Z, {
                        alt: "",
                        className: M().purchaseSummaryImage,
                        listing: t,
                        imageSize: 100
                    }), (0, n.jsxs)("div", {
                        className: M().purchaseSummarInfo,
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: t.name
                        }), (0, n.jsx)(y.Z, {
                            size: 4
                        }), (0, n.jsxs)("div", {
                            className: M().productTypeContainer,
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: a
                            }), (0, n.jsx)("div", {
                                className: M().dotSeparator
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                lineClamp: 2,
                                children: l.name
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: M().purchaseSummaryPrice,
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: o
                        }), (0, n.jsx)(y.Z, {
                            size: 4
                        }), (0, n.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: P.Z.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
                        })]
                    })]
                })
            }

            function z(e) {
                var t = e.children,
                    r = e.label;
                return (0, n.jsxs)("li", {
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: M().benefitLabel,
                        children: r
                    }), (0, n.jsx)(y.Z, {
                        size: 12
                    }), t]
                })
            }

            function E(e) {
                var t, r = e.guildProductListing,
                    i = e.guildId,
                    a = null !== (t = r.attachments) && void 0 !== t ? t : [],
                    l = a.length > 1;
                return 0 === a.length ? null : (0, n.jsx)(z, {
                    label: P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
                    children: (0, n.jsxs)("div", {
                        className: o()(M().attachmentsContainer, R({}, M().attachmentsContainerMultiple, l)),
                        children: [(0, n.jsx)("div", {
                            className: M().attachmentGrid,
                            children: a.map((function(e) {
                                return (0, n.jsx)(C.Z, {
                                    attachment: e
                                }, e.id)
                            }))
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)(I.Z, {
                                guildId: i,
                                productId: r.id
                            })
                        })]
                    })
                })
            }

            function G(e) {
                var t = e.role;
                return null == t ? null : (0, n.jsx)(z, {
                    label: P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
                    children: (0, n.jsx)(D.Z, {
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
                    a = e.guildProductListingId,
                    o = e.guildId,
                    l = e.skuPricePreview,
                    f = (0,
                        c.e7)([w.Z], (function() {
                        return w.Z.getGuildProduct(a)
                    }));
                s()(null != f, "guildProductListing cannot be null");
                var h, m = S(i.useState(!1), 2),
                    x = m[0],
                    p = m[1];
                i.useEffect((function() {
                    function e() {
                        return (e = A((function() {
                            return U(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        e.trys.push([0, 2, , 3]);
                                        p(!0);
                                        return [4, (0, _.cf)(o, a)];
                                    case 1:
                                        e.sent();
                                        p(!1);
                                        return [3, 3];
                                    case 2:
                                        e.sent();
                                        t();
                                        v({
                                            body: P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
                                            confirmText: P.Z.Messages.GOT_IT,
                                            header: P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
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
                }), [o, a, t]);
                var b = (null !== (h = f.attachments) && void 0 !== h ? h : []).length > 0,
                    g = f.role_id,
                    N = (0, c.e7)([O.Z], (function() {
                        var e;
                        return null != g ? null === (e = O.Z.getGuild(o)) || void 0 === e ? void 0 : e.roles[g] : void 0
                    }), [o, g]);
                return (0, n.jsx)(d.ModalRoot, {
                    className: M().modal,
                    size: d.ModalSize.DYNAMIC,
                    transitionState: r,
                    "aria-label": f.name,
                    children: (0, n.jsx)(d.ModalContent, {
                        children: (0, n.jsx)("div", {
                            className: M().container,
                            children: x ? (0, n.jsx)(d.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: M().header,
                                    children: [(0, n.jsx)(d.Heading, {
                                        variant: "heading-xl/semibold",
                                        color: "header-primary",
                                        children: P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
                                    }), (0, n.jsx)(d.Clickable, {
                                        onClick: t,
                                        children: (0, n.jsx)(j.Z, {
                                            width: 24,
                                            height: 24,
                                            className: M().close
                                        })
                                    })]
                                }), (0, n.jsx)(y.Z, {
                                    size: 16
                                }), (0, n.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
                                        productName: f.name,
                                        emphasisHook: H
                                    })
                                }), (0, n.jsx)(y.Z, {
                                    size: 12
                                }), (0, n.jsxs)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: [b ? P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != N ? P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
                                        roleName: N.name,
                                        emphasisHook: H
                                    }) : ""]
                                }), (0, n.jsx)(y.Z, {
                                    size: 12
                                }), (0, n.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: P.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
                                }), (0, n.jsx)(y.Z, {
                                    size: 24
                                }), (0, n.jsx)(k, {
                                    guildProductListing: f,
                                    guildId: o,
                                    skuPricePreview: l
                                }), (0, n.jsx)(y.Z, {
                                    size: 32
                                }), (0, n.jsx)("div", {
                                    className: M().divider
                                }), (0, n.jsx)(y.Z, {
                                    size: 32
                                }), (0, n.jsxs)("ul", {
                                    className: M().benefitsContainer,
                                    children: [(0, n.jsx)(E, {
                                        guildProductListing: f,
                                        guildId: o
                                    }), (0, n.jsx)(G, {
                                        role: N
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
                    a = i ? t : 1,
                    o = i ? 1 : t;
                return (0, n.jsx)("span", {
                    style: {
                        display: "block",
                        width: a,
                        minWidth: a,
                        height: o,
                        minHeight: o
                    }
                })
            }
        },
        324784: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function o(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function s(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    s = e.height,
                    c = void 0 === s ? 16 : s,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    h = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", o(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(h)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                        fill: d,
                        className: f
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=54b848c949606ca1943f.js.map