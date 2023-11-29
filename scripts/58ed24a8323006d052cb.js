(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20153"], {
        77998: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ImageFileIcon: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("669491"),
                n = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, n.default)(d),
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 22H18C20.2091 22 22 20.2091 22 18V10.5C22 10.2239 21.7761 10 21.5 10H19C16.2386 10 14 7.76142 14 5V2.5C14 2.22386 13.7761 2 13.5 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22ZM15.35 13.1333L18.85 17.8C19.2208 18.2944 18.868 19 18.25 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333ZM10.2045 5.9773C10.4329 5.06615 9.3243 4.4261 8.64942 5.07946C8.28739 5.42994 7.71258 5.42994 7.35055 5.07946C6.67567 4.4261 5.56706 5.06615 5.79545 5.9773C5.91797 6.46606 5.63056 6.96387 5.14602 7.10215C4.24275 7.35993 4.24275 8.64004 5.14602 8.89782C5.63056 9.0361 5.91797 9.53391 5.79545 10.0227C5.56706 10.9338 6.67567 11.5739 7.35055 10.9205C7.71258 10.57 8.28739 10.57 8.64942 10.9205C9.3243 11.5739 10.4329 10.9338 10.2045 10.0227C10.082 9.53391 10.3694 9.0361 10.854 8.89782C11.7572 8.64004 11.7572 7.35993 10.854 7.10215C10.3694 6.96387 10.082 6.46606 10.2045 5.9773Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M21.6593 8C21.6927 8 21.7148 7.96556 21.7003 7.93555C21.5555 7.63646 21.3607 7.36074 21.1213 7.12132L16.8787 2.87868C16.6393 2.63926 16.3635 2.44448 16.0644 2.29972C16.0344 2.28519 16 2.30732 16 2.34066V5C16 6.65685 17.3431 8 19 8H21.6593Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        750482: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                },
                MonetizationListingImageAspectStable: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("617258"),
                n = a("769846"),
                i = a("801765"),
                r = a("955735");
            let d = (0, s.cssValueToNumber)(n.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function o(e) {
                let {
                    listing: t,
                    imageSize: a,
                    alt: s,
                    ...n
                } = e, r = (0, i.useListingThumbnailUrl)(t, a);
                return (0, l.jsx)("img", {
                    src: r,
                    alt: s,
                    ...n
                })
            }

            function u(e) {
                let {
                    listing: t,
                    aspectRatio: a = 16 / 9,
                    height: s,
                    ...n
                } = e, o = (s - 2 * d) * a, u = (0, i.useListingThumbnailUrl)(t, o), c = (0, i.useListingThumbnailUrl)(t, o, {
                    shouldAnimate: !1
                });
                return (0, l.jsx)(r.default, {
                    src: u,
                    backgroundSrc: c,
                    aspectRatio: a,
                    ...n
                })
            }
        },
        911029: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("191814"),
                i = a("903635"),
                r = a("238953");

            function d(e) {
                var t;
                let {
                    attachment: a
                } = e, d = null !== (t = a.size) && void 0 !== t ? t : 0;
                return (0, l.jsxs)("div", {
                    className: r.container,
                    children: [(0, l.jsx)(i.default, {
                        width: 16,
                        height: 16,
                        className: r.fileIcon
                    }), (0, l.jsx)(n.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: r.fileName,
                        children: a.filename
                    }), (0, l.jsx)(n.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsx)("div", {
                        className: r.dot
                    }), (0, l.jsx)(n.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [Math.round(d / 1024 / 1024 * 100) / 100, "MB"]
                    })]
                })
            }
        },
        856246: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("191814"),
                i = a("295737");

            function r(e) {
                let {
                    children: t,
                    label: a
                } = e;
                return (0, l.jsxs)("li", {
                    children: [(0, l.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: i.benefitLabel,
                        children: a
                    }), (0, l.jsx)(n.default, {
                        size: 12
                    }), t]
                })
            }
        },
        999009: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                n = a("446674"),
                i = a("77078"),
                r = a("305961"),
                d = a("191814"),
                o = a("461380"),
                u = a("911029"),
                c = a("856246"),
                m = a("246421"),
                f = a("782340"),
                x = a("820011");
            let h = "expanded-area";

            function C(e) {
                let {
                    attachments: t,
                    role: a,
                    roleLocked: n
                } = e, [r, C] = s.useState(!1);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i.Clickable, {
                        className: x.viewContents,
                        onClick: () => {
                            C(e => !e)
                        },
                        "aria-expanded": r,
                        "aria-controls": h,
                        children: [(0, l.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: r ? f.default.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : f.default.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
                        }), (0, l.jsx)(o.default, {
                            className: x.caretIcon,
                            direction: r ? o.default.Directions.UP : o.default.Directions.DOWN
                        })]
                    }), (0, l.jsx)(d.default, {
                        size: 12
                    }), r && (0, l.jsxs)("ul", {
                        className: x.contentsContainer,
                        id: h,
                        children: [(0, l.jsx)(c.default, {
                            label: f.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
                            children: (0, l.jsx)("ul", {
                                className: x.attachmentGrid,
                                children: t.map(e => (0, l.jsx)(u.default, {
                                    attachment: e
                                }, e.id))
                            })
                        }), null != a && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: x.separator
                            }), (0, l.jsx)(c.default, {
                                label: f.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
                                children: (0, l.jsx)(m.default, {
                                    role: a,
                                    textVariant: "text-md/medium",
                                    locked: n
                                })
                            })]
                        })]
                    })]
                })
            }

            function g(e) {
                var t;
                let {
                    listing: a
                } = e, s = null !== (t = a.attachments) && void 0 !== t ? t : [], i = (0, n.useStateFromStores)([r.default], () => {
                    var e, t;
                    return null === (e = r.default.getGuild(a.guild_id)) || void 0 === e ? void 0 : e.roles[null !== (t = a.role_id) && void 0 !== t ? t : ""]
                }), d = !a.has_entitlement;
                return 0 === s.length && null == i ? null : 0 === s.length && null != i ? (0, l.jsx)(m.default, {
                    role: i,
                    textVariant: "text-md/medium",
                    locked: d
                }) : (0, l.jsx)(C, {
                    attachments: s,
                    role: i,
                    roleLocked: d
                })
            }
        },
        962276: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("627445"),
                n = a.n(s),
                i = a("759843"),
                r = a("446674"),
                d = a("77078"),
                o = a("812204"),
                u = a("428958"),
                c = a("17692"),
                m = a("750482"),
                f = a("305961"),
                x = a("191814"),
                h = a("565559"),
                C = a("928576"),
                g = a("999009"),
                j = a("875746"),
                _ = a("782340"),
                v = a("110899");

            function L(e) {
                var t, a;
                let {
                    transitionState: s,
                    guildProductListingId: L,
                    analyticsLocation: N,
                    guildId: p,
                    onClose: I
                } = e, D = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(L));
                n(null != D, "guildProductListing cannot be null"), (0, u.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
                    properties: {
                        guild_product_listing_id: L,
                        has_entitlement: !0 === D.has_entitlement,
                        location: N
                    }
                });
                let M = null !== (t = (0, C.useProductType)(D)) && void 0 !== t ? t : "",
                    T = (0, C.usePrice)(D),
                    O = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(p));
                return (0, l.jsxs)(d.ModalRoot, {
                    className: v.modal,
                    size: d.ModalSize.MEDIUM,
                    transitionState: s,
                    "aria-label": D.name,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(m.MonetizationListingImageAspectStable, {
                            height: 267,
                            listing: D,
                            className: v.headerImage,
                            alt: ""
                        }), (0, l.jsx)(d.ModalCloseButton, {
                            className: v.closeButton,
                            onClick: I,
                            withCircleBackground: !0
                        })]
                    }), (0, l.jsx)(d.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: v.body,
                            children: [(0, l.jsx)(d.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: D.name
                            }), (0, l.jsx)(x.default, {
                                size: 4
                            }), (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
                                    productType: M,
                                    personName: null !== (a = null == O ? void 0 : O.name) && void 0 !== a ? a : ""
                                })
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)(g.default, {
                                listing: D
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)("div", {
                                className: v.seperator
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)(d.Heading, {
                                variant: "heading-lg/medium",
                                color: "header-primary",
                                children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
                            }), (0, l.jsx)(x.default, {
                                size: 12
                            }), (0, l.jsx)(c.default, {
                                className: v.description,
                                variant: "text-md/normal",
                                color: "text-muted",
                                text: D.description
                            })]
                        })
                    }), (0, l.jsxs)(d.ModalFooter, {
                        className: v.footer,
                        children: [(0, l.jsx)(j.default, {
                            guildId: p,
                            guildProductListingId: L,
                            sourceAnalyticsLocations: o.default.GUILD_PRODUCT_INFO_MODAL
                        }), (0, l.jsx)(d.Text, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: T
                        })]
                    })]
                })
            }
        },
        903635: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("469563"),
                n = a("77998"),
                i = a("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: s = "currentColor",
                        foreground: n,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                            fill: s,
                            className: n
                        })
                    })
                }, n.ImageFileIcon, void 0, {
                    size: 16
                })
        }
    }
]);