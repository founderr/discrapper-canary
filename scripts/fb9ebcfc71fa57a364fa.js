"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [424], {
        638042: (e, t, r) => {
            r.d(t, {
                Z: () => f,
                e: () => m
            });
            var n = r(785893),
                o = (r(667294), r(712861)),
                i = r(142643),
                a = r(525044),
                l = r(675728);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        s(e, t, r[t])
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
            var d = (0, o.Mg)(i.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function f(e) {
                var t = e.listing,
                    r = e.imageSize,
                    o = e.alt,
                    i = u(e, ["listing", "imageSize", "alt"]),
                    l = (0, a.U)(t, r);
                return (0, n.jsx)("img", c({
                    src: l,
                    alt: o
                }, i))
            }

            function m(e) {
                var t = e.listing,
                    r = e.aspectRatio,
                    o = void 0 === r ? 16 / 9 : r,
                    i = e.height,
                    s = u(e, ["listing", "aspectRatio", "height"]),
                    f = (i - 2 * d) * o,
                    m = (0, a.U)(t, f),
                    O = (0, a.U)(t, f, {
                        shouldAnimate: !1
                    });
                return (0, n.jsx)(l.Z, c({
                    src: m,
                    backgroundSrc: O,
                    aspectRatio: o
                }, s))
            }
        },
        122536: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                i = r(223430),
                a = r(976334),
                l = r(588313),
                s = r.n(l);

            function c(e) {
                var t, r = e.attachment,
                    l = null !== (t = r.size) && void 0 !== t ? t : 0,
                    c = Math.round(l / 1024 / 1024 * 100) / 100;
                return (0, n.jsxs)("div", {
                    className: s().container,
                    children: [(0, n.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                        className: s().fileIcon
                    }), (0, n.jsx)(i.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: s().fileName,
                        children: r.filename
                    }), (0, n.jsx)(i.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)("div", {
                        className: s().dot
                    }), (0, n.jsx)(i.Z, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsxs)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [c, "MB"]
                    })]
                })
            }
        },
        550841: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                i = r(223430),
                a = r(349393),
                l = r.n(a);

            function s(e) {
                var t = e.children,
                    r = e.label;
                return (0, n.jsxs)("li", {
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: l().benefitLabel,
                        children: r
                    }), (0, n.jsx)(i.Z, {
                        size: 12
                    }), t]
                })
            }
        },
        200424: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => M
            });
            var n = r(785893),
                o = r(667294),
                i = r(441143),
                a = r.n(i),
                l = r(571657),
                s = r(202351),
                c = r(70418),
                u = r(153686),
                d = r(479373),
                f = r(434131),
                m = r(638042),
                O = r(567403),
                h = r(223430),
                p = r(835807),
                g = r(332013),
                b = r(718831),
                j = r(122536),
                y = r(550841),
                v = r(984560),
                x = r(473708),
                P = r(712329),
                Z = r.n(P);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var D = "expanded-area";

            function C(e) {
                var t = e.attachments,
                    r = e.role,
                    i = e.roleLocked,
                    a = _(o.useState(!1), 2),
                    l = a[0],
                    s = a[1];
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(c.Clickable, {
                        className: Z().viewContents,
                        onClick: function() {
                            s((function(e) {
                                return !e
                            }))
                        },
                        "aria-expanded": l,
                        "aria-controls": D,
                        children: [(0, n.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: l ? x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
                        }), (0, n.jsx)(b.Z, {
                            className: Z().caretIcon,
                            direction: l ? b.Z.Directions.UP : b.Z.Directions.DOWN
                        })]
                    }), (0, n.jsx)(h.Z, {
                        size: 12
                    }), l && (0, n.jsxs)("ul", {
                        className: Z().contentsContainer,
                        id: D,
                        children: [(0, n.jsx)(y.Z, {
                            label: x.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
                            children: (0, n.jsx)("ul", {
                                className: Z().attachmentGrid,
                                children: t.map((function(e) {
                                    return (0, n.jsx)(j.Z, {
                                        attachment: e
                                    }, e.id)
                                }))
                            })
                        }), null != r && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: Z().separator
                            }), (0, n.jsx)(y.Z, {
                                label: x.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
                                children: (0, n.jsx)(v.Z, {
                                    role: r,
                                    textVariant: "text-md/medium",
                                    locked: i
                                })
                            })]
                        })]
                    })]
                })
            }

            function N(e) {
                var t, r, o = e.listing,
                    i = null !== (t = o.attachments) && void 0 !== t ? t : [],
                    a = (0, s.e7)([O.Z], (function() {
                        var e;
                        return null === (e = O.Z.getGuild(o.guild_id)) || void 0 === e ? void 0 : e.roles[null !== (r = o.role_id) && void 0 !== r ? r : ""]
                    })),
                    l = !o.has_entitlement;
                return 0 === i.length && null == a ? null : 0 === i.length && null != a ? (0, n.jsx)(v.Z, {
                    role: a,
                    textVariant: "text-md/medium",
                    locked: l
                }) : (0, n.jsx)(C, {
                    attachments: i,
                    role: a,
                    roleLocked: l
                })
            }
            var L = r(486229),
                I = r(184496),
                S = r.n(I);

            function M(e) {
                var t, r = e.transitionState,
                    o = e.guildProductListingId,
                    i = e.analyticsLocation,
                    b = e.guildId,
                    j = e.onClose,
                    y = (0, s.e7)([p.Z], (function() {
                        return p.Z.getGuildProduct(o)
                    }));
                a()(null != y, "guildProductListing cannot be null");
                (0, d.Z)({
                    type: l.nv.MODAL,
                    name: l.zs.GUILD_PRODUCT_LISTING_INFO_MODAL,
                    properties: {
                        guild_product_listing_id: o,
                        has_entitlement: !0 === y.has_entitlement,
                        location: i
                    }
                });
                var v, P = null !== (t = (0, g.C)(y)) && void 0 !== t ? t : "",
                    Z = (0, g.k)(y),
                    w = (0, s.e7)([O.Z], (function() {
                        return O.Z.getGuild(b)
                    }));
                return (0, n.jsxs)(c.ModalRoot, {
                    className: S().modal,
                    size: c.ModalSize.MEDIUM,
                    transitionState: r,
                    "aria-label": y.name,
                    children: [(0, n.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, n.jsx)(m.e, {
                            height: 267,
                            listing: y,
                            className: S().headerImage,
                            alt: ""
                        }), (0, n.jsx)(c.ModalCloseButton, {
                            className: S().closeButton,
                            onClick: j,
                            withCircleBackground: !0
                        })]
                    }), (0, n.jsx)(c.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: S().body,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: y.name
                            }), (0, n.jsx)(h.Z, {
                                size: 4
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
                                    productType: P,
                                    personName: null !== (v = null == w ? void 0 : w.name) && void 0 !== v ? v : ""
                                })
                            }), (0, n.jsx)(h.Z, {
                                size: 16
                            }), (0, n.jsx)(N, {
                                listing: y
                            }), (0, n.jsx)(h.Z, {
                                size: 16
                            }), (0, n.jsx)("div", {
                                className: S().seperator
                            }), (0, n.jsx)(h.Z, {
                                size: 16
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-lg/medium",
                                color: "header-primary",
                                children: x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
                            }), (0, n.jsx)(h.Z, {
                                size: 12
                            }), (0, n.jsx)(f.Z, {
                                className: S().description,
                                variant: "text-md/normal",
                                color: "text-muted",
                                text: y.description
                            })]
                        })
                    }), (0, n.jsxs)(c.ModalFooter, {
                        className: S().footer,
                        children: [(0, n.jsx)(L.Z, {
                            guildId: b,
                            guildProductListingId: o,
                            sourceAnalyticsLocations: u.Z.GUILD_PRODUCT_INFO_MODAL
                        }), (0, n.jsx)(c.Text, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: Z
                        })]
                    })]
                })
            }
        },
        976334: (e, t, r) => {
            r.d(t, {
                Z: () => m
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
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

            function s(e, t) {
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

            function c(e, t) {
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
            const m = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    s = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    m = f(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, a.Z)(m)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                        fill: s,
                        className: c
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    m = e.colorClass,
                    O = void 0 === m ? "" : m,
                    h = c(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
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
                }({}, (0, a.Z)(h)), {
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
                        className: O
                    })
                }))
            }))
        }
    }
]);