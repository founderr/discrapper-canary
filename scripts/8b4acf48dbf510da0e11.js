(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38833"], {
        77998: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ImageFileIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(u),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 22H18C20.2091 22 22 20.2091 22 18V10.5C22 10.2239 21.7761 10 21.5 10H19C16.2386 10 14 7.76142 14 5V2.5C14 2.22386 13.7761 2 13.5 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22ZM15.35 13.1333L18.85 17.8C19.2208 18.2944 18.868 19 18.25 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333ZM10.2045 5.9773C10.4329 5.06615 9.3243 4.4261 8.64942 5.07946C8.28739 5.42994 7.71258 5.42994 7.35055 5.07946C6.67567 4.4261 5.56706 5.06615 5.79545 5.9773C5.91797 6.46606 5.63056 6.96387 5.14602 7.10215C4.24275 7.35993 4.24275 8.64004 5.14602 8.89782C5.63056 9.0361 5.91797 9.53391 5.79545 10.0227C5.56706 10.9338 6.67567 11.5739 7.35055 10.9205C7.71258 10.57 8.28739 10.57 8.64942 10.9205C9.3243 11.5739 10.4329 10.9338 10.2045 10.0227C10.082 9.53391 10.3694 9.0361 10.854 8.89782C11.7572 8.64004 11.7572 7.35993 10.854 7.10215C10.3694 6.96387 10.082 6.46606 10.2045 5.9773Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, a.jsx)("path", {
                        d: "M21.6593 8C21.6927 8 21.7148 7.96556 21.7003 7.93555C21.5555 7.63646 21.3607 7.36074 21.1213 7.12132L16.8787 2.87868C16.6393 2.63926 16.3635 2.44448 16.0644 2.29972C16.0344 2.28519 16 2.30732 16 2.34066V5C16 6.65685 17.3431 8 19 8H21.6593Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        624180: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var a = n("866190");

            function s() {
                return (0, a.useIsWindowFocused)()
            }
        },
        801765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useListingThumbnailUrl: function() {
                    return r
                }
            });
            var a = n("884691"),
                s = n("845579"),
                l = n("271560"),
                i = n("624180");

            function r(t, e) {
                let {
                    shouldAnimate: n = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = s.GifAutoPlay.useSetting(), u = (0, i.useIsWindowFocused)(), o = n && u && r;
                return a.useMemo(() => {
                    if ((null == t ? void 0 : t.image_asset) != null) return (0, l.getAssetURL)(t.application_id, t.image_asset, e, o ? void 0 : "webp")
                }, [e, t, o])
            }
        },
        955735: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                u = n("511606");

            function o(t) {
                let {
                    alt: e,
                    ...n
                } = t, [l, i] = s.useState(!0);
                return (0, a.jsxs)(a.Fragment, {
                    children: [l && (0, a.jsx)(r.Spinner, {
                        type: r.Spinner.Type.LOW_MOTION,
                        className: u.loader
                    }), (0, a.jsx)("img", {
                        ...n,
                        alt: e,
                        onLoad: () => i(!1)
                    })]
                })
            }

            function d(t) {
                let {
                    src: e,
                    backgroundSrc: n,
                    alt: s,
                    aspectRatio: l,
                    className: r,
                    imageChildClassName: d,
                    ...c
                } = t;
                return (0, a.jsxs)("div", {
                    className: i(u.container, r),
                    children: [(0, a.jsx)("img", {
                        src: n,
                        alt: s,
                        className: u.backgroundImage
                    }), (0, a.jsx)("div", {
                        className: u.backgroundImageFilter
                    }), (0, a.jsx)("div", {
                        style: {
                            aspectRatio: l
                        },
                        className: u.imageContainer,
                        children: (0, a.jsx)(o, {
                            src: e,
                            alt: s,
                            className: i(u.image, d),
                            ...c
                        })
                    })]
                })
            }
        },
        750482: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                },
                MonetizationListingImageAspectStable: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("617258"),
                l = n("769846"),
                i = n("801765"),
                r = n("955735");
            let u = (0, s.cssValueToNumber)(l.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function o(t) {
                let {
                    listing: e,
                    imageSize: n,
                    alt: s,
                    ...l
                } = t, r = (0, i.useListingThumbnailUrl)(e, n);
                return (0, a.jsx)("img", {
                    src: r,
                    alt: s,
                    ...l
                })
            }

            function d(t) {
                let {
                    listing: e,
                    aspectRatio: n = 16 / 9,
                    height: s,
                    ...l
                } = t, o = (s - 2 * u) * n, d = (0, i.useListingThumbnailUrl)(e, o), c = (0, i.useListingThumbnailUrl)(e, o, {
                    shouldAnimate: !1
                });
                return (0, a.jsx)(r.default, {
                    src: d,
                    backgroundSrc: c,
                    aspectRatio: n,
                    ...l
                })
            }
        },
        153587: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                download: function() {
                    return s
                }
            });
            var a = n("545158");

            function s(t) {
                return (0, a.default)(t)
            }
        },
        158195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("884691"),
                s = n("404118"),
                l = n("448993"),
                i = n("242278"),
                r = n("153587"),
                u = n("782340");

            function o(t, e) {
                let [n, o] = a.useState(!1), d = a.useCallback(async n => {
                    if (null != t && null != e) {
                        o(!0);
                        try {
                            let {
                                url: a
                            } = await i.requestDownloadUrl({
                                guildId: t,
                                productId: e,
                                attachmentId: n
                            });
                            await r.download(a)
                        } catch (e) {
                            let t = e instanceof l.APIError ? e.getAnyErrorMessage() : void 0;
                            s.default.show({
                                title: u.default.Messages.ERROR_GENERIC_TITLE,
                                body: null != t ? t : u.default.Messages.GENERIC_ERROR_BODY
                            })
                        } finally {
                            o(!1)
                        }
                    }
                }, [t, e]);
                return {
                    isLoading: n,
                    downloadAttachment: d
                }
            }
        },
        911029: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("191814"),
                i = n("903635"),
                r = n("238953");

            function u(t) {
                var e;
                let {
                    attachment: n
                } = t, u = null !== (e = n.size) && void 0 !== e ? e : 0;
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [(0, a.jsx)(i.default, {
                        width: 16,
                        height: 16,
                        className: r.fileIcon
                    }), (0, a.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: r.fileName,
                        children: n.filename
                    }), (0, a.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsx)("div", {
                        className: r.dot
                    }), (0, a.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [Math.round(u / 1024 / 1024 * 100) / 100, "MB"]
                    })]
                })
            }
        },
        898998: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("158195");

            function i(t) {
                let {
                    guildId: e,
                    productId: n,
                    attachmentId: i,
                    ...r
                } = t, {
                    isLoading: u,
                    downloadAttachment: o
                } = (0, l.default)(e, n);
                return (0, a.jsx)(s.Button, {
                    ...r,
                    submitting: u,
                    onClick: function() {
                        o(i)
                    }
                })
            }
        },
        560057: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return L
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                i = n("617258"),
                r = n("446674"),
                u = n("769846"),
                o = n("77078"),
                d = n("750482"),
                c = n("305961"),
                f = n("191814"),
                m = n("195812"),
                h = n("565559"),
                x = n("911029"),
                C = n("898998"),
                g = n("782340"),
                v = n("681685");
            let j = (0, i.cssValueToNumber)(u.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

            function N(t) {
                let {
                    guildProductListing: e,
                    guildId: n,
                    onClose: s
                } = t, l = (0, r.useStateFromStores)([c.default], () => {
                    var t;
                    return null === (t = c.default.getGuild(n)) || void 0 === t ? void 0 : t.name
                });
                return (0, a.jsxs)(o.ModalHeader, {
                    className: v.header,
                    children: [(0, a.jsx)(d.default, {
                        className: v.headerImage,
                        listing: e,
                        imageSize: j,
                        alt: ""
                    }), (0, a.jsx)(f.default, {
                        size: 16,
                        horizontal: !0
                    }), (0, a.jsxs)("div", {
                        className: v.headerTextColumn,
                        children: [(0, a.jsx)(o.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: e.name
                        }), (0, a.jsx)(f.default, {
                            size: 8
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: v.description,
                            children: l
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: v.description,
                            children: g.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
                                count: e.attachments_count
                            })
                        })]
                    }), (0, a.jsx)(o.ModalCloseButton, {
                        className: v.closeButton,
                        onClick: s
                    })]
                })
            }

            function I(t) {
                let {
                    attachment: e,
                    guildId: n,
                    productId: s
                } = t;
                return (0, a.jsxs)("li", {
                    className: v.attachmentRow,
                    children: [(0, a.jsx)(x.default, {
                        attachment: e
                    }), (0, a.jsx)(C.default, {
                        className: v.attachmentDownloadButton,
                        guildId: n,
                        productId: s,
                        attachmentId: e.id,
                        children: (0, a.jsx)(m.default, {})
                    })]
                })
            }

            function L(t) {
                var e;
                let {
                    guildId: n,
                    productId: s,
                    onClose: i,
                    transitionState: u
                } = t, d = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(s));
                l(null != d, "guildProductListing cannot be null");
                let c = null !== (e = d.attachments) && void 0 !== e ? e : [];
                return (0, a.jsxs)(o.ModalRoot, {
                    className: v.modal,
                    size: o.ModalSize.MEDIUM,
                    transitionState: u,
                    "aria-label": g.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
                    children: [(0, a.jsx)(N, {
                        guildId: n,
                        guildProductListing: d,
                        onClose: i
                    }), (0, a.jsx)(o.ModalContent, {
                        children: (0, a.jsx)("ul", {
                            className: v.attachmentsList,
                            children: c.map(t => (0, a.jsx)(I, {
                                guildId: n,
                                productId: d.id,
                                attachment: t
                            }, t.id))
                        })
                    })]
                })
            }
        },
        903635: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("77998"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = t;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                            fill: s,
                            className: l
                        })
                    })
                }, l.ImageFileIcon, void 0, {
                    size: 16
                })
        }
    }
]);