"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [62444], {
        525044: (e, t, r) => {
            r.d(t, {
                U: () => l
            });
            var n = r(667294),
                o = r(968449),
                i = r(534681),
                a = r(771333);

            function c() {
                return (0, a.n)()
            }

            function l(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = r.shouldAnimate,
                    l = void 0 === a || a,
                    s = o.QK.useSetting(),
                    u = c(),
                    f = l && u && s;
                return n.useMemo((function() {
                    if (null != (null == e ? void 0 : e.image_asset)) return (0, i._W)(e.application_id, e.image_asset, t, f ? void 0 : "webp")
                }), [t, e, f])
            }
        },
        675728: (e, t, r) => {
            r.d(t, {
                Z: () => g
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                a = r.n(i),
                c = r(882723),
                l = r(753054),
                s = r.n(l);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        f(e, t, r[t])
                    }))
                }
                return e
            }

            function p(e, t) {
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

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
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

            function m(e) {
                var t = e.alt,
                    r = b(e, ["alt"]),
                    i = O(o.useState(!0), 2),
                    a = i[0],
                    l = i[1];
                return (0, n.jsxs)(n.Fragment, {
                    children: [a && (0, n.jsx)(c.Spinner, {
                        type: c.Spinner.Type.LOW_MOTION,
                        className: s().loader
                    }), (0, n.jsx)("img", p(d({}, r), {
                        alt: t,
                        onLoad: function() {
                            return l(!1)
                        }
                    }))]
                })
            }

            function g(e) {
                var t = e.src,
                    r = e.backgroundSrc,
                    o = e.alt,
                    i = e.aspectRatio,
                    c = e.className,
                    l = e.imageChildClassName,
                    u = b(e, ["src", "backgroundSrc", "alt", "aspectRatio", "className", "imageChildClassName"]);
                return (0, n.jsxs)("div", {
                    className: a()(s().container, c),
                    children: [(0, n.jsx)("img", {
                        src: r,
                        alt: o,
                        className: s().backgroundImage
                    }), (0, n.jsx)("div", {
                        className: s().backgroundImageFilter
                    }), (0, n.jsx)("div", {
                        style: {
                            aspectRatio: i
                        },
                        className: s().imageContainer,
                        children: (0, n.jsx)(m, d({
                            src: t,
                            alt: o,
                            className: a()(s().image, l)
                        }, u))
                    })]
                })
            }
        },
        638042: (e, t, r) => {
            r.d(t, {
                Z: () => d,
                e: () => p
            });
            var n = r(785893),
                o = (r(667294), r(712861)),
                i = r(142643),
                a = r(525044),
                c = r(675728);

            function l(e, t, r) {
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
                        l(e, t, r[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var f = (0, o.Mg)(i.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function d(e) {
                var t = e.listing,
                    r = e.imageSize,
                    o = e.alt,
                    i = u(e, ["listing", "imageSize", "alt"]),
                    c = (0, a.U)(t, r);
                return (0, n.jsx)("img", s({
                    src: c,
                    alt: o
                }, i))
            }

            function p(e) {
                var t = e.listing,
                    r = e.aspectRatio,
                    o = void 0 === r ? 16 / 9 : r,
                    i = e.height,
                    l = u(e, ["listing", "aspectRatio", "height"]),
                    d = (i - 2 * f) * o,
                    p = (0, a.U)(t, d),
                    b = (0, a.U)(t, d, {
                        shouldAnimate: !1
                    });
                return (0, n.jsx)(c.Z, s({
                    src: p,
                    backgroundSrc: b,
                    aspectRatio: o
                }, l))
            }
        },
        122536: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                i = r(223430),
                a = r(976334),
                c = r(239803),
                l = r.n(c);

            function s(e) {
                var t, r = e.attachment,
                    c = null !== (t = r.size) && void 0 !== t ? t : 0,
                    s = Math.round(c / 1024 / 1024 * 100) / 100;
                return (0, n.jsxs)("div", {
                    className: l().container,
                    children: [(0, n.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                        className: l().fileIcon
                    }), (0, n.jsx)(i.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: l().fileName,
                        children: r.filename
                    }), (0, n.jsx)(i.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)("div", {
                        className: l().dot
                    }), (0, n.jsx)(i.Z, {
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
                i = r.n(o),
                a = r(712861),
                c = r(202351),
                l = r(142643),
                s = r(882723),
                u = r(638042),
                f = r(567403),
                d = r(223430),
                p = r(898652),
                b = r(835807),
                O = r(122536),
                m = r(329659),
                g = r(473708),
                y = r(436585),
                j = r.n(y),
                h = (0, a.Mg)(l.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

            function v(e) {
                var t = e.guildProductListing,
                    r = e.guildId,
                    o = e.onClose,
                    i = (0, c.e7)([f.Z], (function() {
                        var e;
                        return null === (e = f.Z.getGuild(r)) || void 0 === e ? void 0 : e.name
                    }));
                return (0, n.jsxs)(s.ModalHeader, {
                    className: j().header,
                    children: [(0, n.jsx)(u.Z, {
                        className: j().headerImage,
                        listing: t,
                        imageSize: h,
                        alt: ""
                    }), (0, n.jsx)(d.Z, {
                        size: 16,
                        horizontal: !0
                    }), (0, n.jsxs)("div", {
                        className: j().headerTextColumn,
                        children: [(0, n.jsx)(s.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, n.jsx)(d.Z, {
                            size: 8
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j().description,
                            children: i
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j().description,
                            children: g.Z.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
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
                    children: [(0, n.jsx)(O.Z, {
                        attachment: t
                    }), (0, n.jsx)(m.Z, {
                        className: j().attachmentDownloadButton,
                        guildId: r,
                        productId: o,
                        attachmentId: t.id,
                        children: (0, n.jsx)(p.Z, {})
                    })]
                })
            }

            function w(e) {
                var t, r = e.guildId,
                    o = e.productId,
                    a = e.onClose,
                    l = e.transitionState,
                    u = (0, c.e7)([b.Z], (function() {
                        return b.Z.getGuildProduct(o)
                    }));
                i()(null != u, "guildProductListing cannot be null");
                var f = null !== (t = u.attachments) && void 0 !== t ? t : [];
                return (0, n.jsxs)(s.ModalRoot, {
                    className: j().modal,
                    size: s.ModalSize.MEDIUM,
                    transitionState: l,
                    "aria-label": g.Z.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
                    children: [(0, n.jsx)(v, {
                        guildId: r,
                        guildProductListing: u,
                        onClose: a
                    }), (0, n.jsx)(s.ModalContent, {
                        children: (0, n.jsx)("ul", {
                            className: j().attachmentsList,
                            children: f.map((function(e) {
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
        976334: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                a = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
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

            function f(e, t) {
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

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    s = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
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
                }({}, (0, a.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                        fill: l,
                        className: s
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    O = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
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
                }({}, (0, a.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M6 22h12a4 4 0 0 0 4-4v-7.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4ZM21.66 8a.045.045 0 0 0 .04-.064 3 3 0 0 0-.579-.815L16.88 2.88a2.999 2.999 0 0 0-.815-.58.045.045 0 0 0-.064.042V5a3 3 0 0 0 3 3H21.659Zm-6.31 5.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);