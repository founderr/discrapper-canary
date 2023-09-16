"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [62444], {
        525044: (e, t, r) => {
            r.d(t, {
                U: () => c
            });
            var n = r(667294),
                o = r(968449),
                a = r(534681),
                i = r(771333);

            function l() {
                return (0, i.n)()
            }

            function c(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = r.shouldAnimate,
                    c = void 0 === i || i,
                    s = o.QK.useSetting(),
                    u = l(),
                    d = c && u && s;
                return n.useMemo((function() {
                    if (null != e) return (0, a._W)(e.application_id, e.image_asset, t, d ? void 0 : "webp")
                }), [t, e, d])
            }
        },
        675728: (e, t, r) => {
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = r(667294),
                a = r(294184),
                i = r.n(a),
                l = r(882723),
                c = r(753054),
                s = r.n(c);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        d(e, t, r[t])
                    }))
                }
                return e
            }

            function m(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var t = e.alt,
                    r = p(e, ["alt"]),
                    a = b(o.useState(!0), 2),
                    i = a[0],
                    c = a[1];
                return (0, n.jsxs)(n.Fragment, {
                    children: [i && (0, n.jsx)(l.Spinner, {
                        type: l.Spinner.Type.LOW_MOTION,
                        className: s().loader
                    }), (0, n.jsx)("img", m(f({}, r), {
                        alt: t,
                        onLoad: function() {
                            return c(!1)
                        }
                    }))]
                })
            }

            function O(e) {
                var t = e.src,
                    r = e.backgroundSrc,
                    o = e.alt,
                    a = e.aspectRatio,
                    l = e.className,
                    c = e.imageChildClassName,
                    u = p(e, ["src", "backgroundSrc", "alt", "aspectRatio", "className", "imageChildClassName"]);
                return (0, n.jsxs)("div", {
                    className: i()(s().container, l),
                    children: [(0, n.jsx)("img", {
                        src: r,
                        alt: o,
                        className: s().backgroundImage
                    }), (0, n.jsx)("div", {
                        className: s().backgroundImageFilter
                    }), (0, n.jsx)("div", {
                        style: {
                            aspectRatio: a
                        },
                        className: s().imageContainer,
                        children: (0, n.jsx)(g, f({
                            src: t,
                            alt: o,
                            className: i()(s().image, c)
                        }, u))
                    })]
                })
            }
        },
        638042: (e, t, r) => {
            r.d(t, {
                Z: () => f,
                e: () => m
            });
            var n = r(785893),
                o = (r(667294), r(712861)),
                a = r(142643),
                i = r(525044),
                l = r(675728);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        c(e, t, r[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var d = (0, o.Mg)(a.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function f(e) {
                var t = e.listing,
                    r = e.imageSize,
                    o = e.alt,
                    a = u(e, ["listing", "imageSize", "alt"]),
                    l = (0, i.U)(t, r);
                return (0, n.jsx)("img", s({
                    src: l,
                    alt: o
                }, a))
            }

            function m(e) {
                var t = e.listing,
                    r = e.aspectRatio,
                    o = void 0 === r ? 16 / 9 : r,
                    a = e.height,
                    c = u(e, ["listing", "aspectRatio", "height"]),
                    f = (a - 2 * d) * o,
                    m = (0, i.U)(t, f),
                    p = (0, i.U)(t, f, {
                        shouldAnimate: !1
                    });
                return (0, n.jsx)(l.Z, s({
                    src: m,
                    backgroundSrc: p,
                    aspectRatio: o
                }, c))
            }
        },
        122536: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                a = r(223430),
                i = r(324784),
                l = r(239803),
                c = r.n(l);

            function s(e) {
                var t, r = e.attachment,
                    l = null !== (t = r.size) && void 0 !== t ? t : 0,
                    s = Math.round(l / 1024 / 1024 * 100) / 100;
                return (0, n.jsxs)("div", {
                    className: c().container,
                    children: [(0, n.jsx)(i.Z, {
                        width: 16,
                        height: 16,
                        className: c().fileIcon
                    }), (0, n.jsx)(a.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: c().fileName,
                        children: r.filename
                    }), (0, n.jsx)(a.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)("div", {
                        className: c().dot
                    }), (0, n.jsx)(a.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsxs)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [s, "MB"]
                    })]
                })
            }
        },
        262444: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => w
            });
            var n = r(785893),
                o = (r(667294),
                    r(441143)),
                a = r.n(o),
                i = r(712861),
                l = r(202351),
                c = r(142643),
                s = r(882723),
                u = r(638042),
                d = r(567403),
                f = r(223430),
                m = r(898652),
                p = r(835807),
                b = r(122536),
                g = r(329659),
                O = r(473708),
                h = r(436585),
                j = r.n(h),
                y = (0, i.Mg)(c.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

            function v(e) {
                var t = e.guildProductListing,
                    r = e.guildId,
                    o = e.onClose,
                    a = (0, l.e7)([d.Z], (function() {
                        var e;
                        return null === (e = d.Z.getGuild(r)) || void 0 === e ? void 0 : e.name
                    }));
                return (0, n.jsxs)(s.ModalHeader, {
                    className: j().header,
                    children: [(0, n.jsx)(u.Z, {
                        className: j().headerImage,
                        listing: t,
                        imageSize: y,
                        alt: ""
                    }), (0, n.jsx)(f.Z, {
                        size: 16,
                        horizontal: !0
                    }), (0, n.jsxs)("div", {
                        className: j().headerTextColumn,
                        children: [(0, n.jsx)(s.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, n.jsx)(f.Z, {
                            size: 8
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j().description,
                            children: a
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j().description,
                            children: O.Z.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
                                count: t.attachments_count
                            })
                        })]
                    }), (0, n.jsx)(s.ModalCloseButton, {
                        className: j().closeButton,
                        onClick: o
                    })]
                })
            }

            function x(e) {
                var t = e.attachment,
                    r = e.guildId,
                    o = e.productId;
                return (0, n.jsxs)("li", {
                    className: j().attachmentRow,
                    children: [(0, n.jsx)(b.Z, {
                        attachment: t
                    }), (0, n.jsx)(g.Z, {
                        className: j().attachmentDownloadButton,
                        guildId: r,
                        productId: o,
                        attachmentId: t.id,
                        children: (0, n.jsx)(m.Z, {})
                    })]
                })
            }

            function w(e) {
                var t, r = e.guildId,
                    o = e.productId,
                    i = e.onClose,
                    c = e.transitionState,
                    u = (0, l.e7)([p.Z], (function() {
                        return p.Z.getGuildProduct(o)
                    }));
                a()(null != u, "guildProductListing cannot be null");
                var d = null !== (t = u.attachments) && void 0 !== t ? t : [];
                return (0, n.jsxs)(s.ModalRoot, {
                    className: j().modal,
                    size: s.ModalSize.MEDIUM,
                    transitionState: c,
                    "aria-label": O.Z.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
                    children: [(0, n.jsx)(v, {
                        guildId: r,
                        guildProductListing: u,
                        onClose: i
                    }), (0, n.jsx)(s.ModalContent, {
                        children: (0, n.jsx)("ul", {
                            className: j().attachmentsList,
                            children: d.map((function(e) {
                                return (0, n.jsx)(x, {
                                    guildId: r,
                                    productId: u.id,
                                    attachment: e
                                }, e.id)
                            }))
                        })
                    })]
                })
            }
        },
        324784: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
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
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function c(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    c = e.height,
                    s = void 0 === c ? 16 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    m = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", i(function(e) {
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
                }({}, (0, o.Z)(m)), {
                    width: r,
                    height: s,
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
//# sourceMappingURL=2e006f86d3f013af4e9f.js.map