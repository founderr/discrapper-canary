"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1650], {
        101650: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => E
            });
            var s = r(785893),
                n = (r(667294), r(294184)),
                o = r.n(n),
                i = r(795308),
                a = r(70418),
                l = r(443812),
                c = r(856450),
                d = r(613665),
                m = r(813784),
                u = r(378974),
                h = r(659773),
                x = r(348592),
                j = r(2590),
                f = r(473708),
                v = r(95481),
                O = r.n(v);

            function p() {
                return (0, s.jsx)("div", {
                    className: O().dummySwitch,
                    children: (0, s.jsxs)("svg", {
                        className: O().dummySlider,
                        viewBox: "0 0 28 20",
                        preserveAspectRatio: "xMinYMid meet",
                        style: {
                            left: 9
                        },
                        children: [(0, s.jsx)("rect", {
                            fill: "white",
                            x: 4,
                            y: 0,
                            height: 20,
                            width: 20,
                            rx: "10"
                        }), (0, s.jsxs)("svg", {
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: [(0, s.jsx)("path", {
                                fill: i.Z.unsafe_rawColors.GREEN_360.css,
                                d: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"
                            }), (0, s.jsx)("path", {
                                fill: i.Z.unsafe_rawColors.GREEN_360.css,
                                d: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
                            })]
                        })]
                    })
                })
            }

            function E(e) {
                var t = e.transitionState,
                    r = e.onClose,
                    n = (0, l.Dt)();
                return (0, s.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": n,
                    size: a.ModalSize.LARGE,
                    children: [(0, s.jsx)(a.ModalCloseButton, {
                        className: O().closeButton,
                        onClick: r
                    }), (0, s.jsxs)(a.ModalContent, {
                        className: O().container,
                        children: [(0, s.jsx)(a.Heading, {
                            id: n,
                            color: "header-primary",
                            variant: "heading-xl/medium",
                            children: f.Z.Messages.GUILD_FEED_NUX_CURATION_TITLE
                        }), (0, s.jsx)(a.Text, {
                            className: O().subtitle,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: f.Z.Messages.GUILD_FEED_NUX_CURATION_SUBTITLE
                        }), (0, s.jsxs)("div", {
                            className: O().itemList,
                            children: [(0, s.jsx)("div", {
                                className: O().demoContainer,
                                children: (0, s.jsxs)("div", {
                                    className: O().demoList,
                                    children: [(0, s.jsxs)("div", {
                                        className: O().demoItem,
                                        children: [(0, s.jsx)(a.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: f.Z.Messages.ADD_REACTION
                                        }), (0, s.jsx)(c.Z, {
                                            className: O().demoIcon
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: o()(O().demoItem, O().demoItemSelected),
                                        children: [(0,
                                            s.jsx)(a.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: f.Z.Messages.GUILD_FEED_FEATURE_MESSAGE
                                        }), (0, s.jsx)(d.Z, {
                                            className: o()(O().demoIcon, O().demoIconActive, O().demoCaret)
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: O().demoItem,
                                        children: [(0, s.jsx)(a.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: f.Z.Messages.PIN_MESSAGE
                                        }), (0, s.jsx)(h.Z, {
                                            className: O().demoIcon
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: O().demoContainer,
                                children: (0, s.jsxs)("div", {
                                    className: O().demoList,
                                    children: [(0, s.jsxs)("div", {
                                        className: O().demoItem,
                                        children: [(0, s.jsx)(a.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: f.Z.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM
                                        }), (0, s.jsx)(m.Z, {
                                            className: O().demoIcon,
                                            foregroundColor: "currentColor"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: o()(O().demoItem, O().demoItemSelected),
                                        children: [(0, s.jsx)(a.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: f.Z.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM
                                        }), (0, s.jsx)(u.Z, {
                                            className: o()(O().demoIcon, O().demoIconActive),
                                            foregroundColor: "currentColor"
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: O().demoContainer,
                                children: (0, s.jsx)("div", {
                                    className: O().demoList,
                                    children: (0, s.jsxs)("div", {
                                        className: O().demoItem,
                                        style: {
                                            padding: 0
                                        },
                                        children: [(0, s.jsx)(a.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: f.Z.Messages.GUILD_FEED_DEMOTE_CHANNEL
                                        }), (0, s.jsx)(p, {})]
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: O().textContainer,
                                children: [(0, s.jsx)(a.Text, {
                                    className: O().itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: f.Z.Messages.GUILD_FEED_NUX_CURATION_FEATURE_TITLE
                                }), (0, s.jsx)(a.Text, {
                                    className: O().itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: f.Z.Messages.GUILD_FEED_NUX_CURATION_FEATURE_SUBTITLE
                                })]
                            }), (0, s.jsxs)("div", {
                                className: O().textContainer,
                                children: [(0, s.jsx)(a.Text, {
                                    className: O().itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: f.Z.Messages.GUILD_FEED_NUX_CURATION_REMOVE_TITLE
                                }), (0, s.jsx)(a.Text, {
                                    className: O().itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: f.Z.Messages.GUILD_FEED_NUX_CURATION_REMOVE_SUBTITLE
                                })]
                            }), (0, s.jsxs)("div", {
                                className: O().textContainer,
                                children: [(0, s.jsx)(a.Text, {
                                    className: O().itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: f.Z.Messages.GUILD_FEED_NUX_CURATION_BLOCK_TITLE
                                }), (0, s.jsx)(a.Text, {
                                    className: O().itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: f.Z.Messages.GUILD_FEED_NUX_CURATION_BLOCK_SUBTITLE
                                })]
                            })]
                        })]
                    }), (0, s.jsxs)(a.ModalFooter, {
                        children: [(0, s.jsx)(a.Button, {
                            onClick: r,
                            children: f.Z.Messages.OKAY
                        }), (0, s.jsx)(a.Anchor, {
                            className: o()(O().learnMore, (0, a.getButtonStyle)({
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY
                            })),
                            href: x.Z.getArticleURL(j.BhN.GUILD_HOME),
                            children: f.Z.Messages.LEARN_MORE
                        })]
                    })]
                })
            }
        },
        378974: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var s = r(785893),
                n = (r(667294), r(168075)),
                o = r(795308),
                i = r(633878);

            function a(e, t, r) {
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
                        var s = Object.getOwnPropertySymbols(e);
                        t && (s = s.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, s)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, s, n = function(e, t) {
                    if (null == e) return {};
                    var r, s, n = {},
                        o = Object.keys(e);
                    for (s = 0; s < o.length; s++) {
                        r = o[s];
                        t.indexOf(r) >= 0 || (n[r] = e[r])
                    }
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < o.length; s++) {
                        r = o[s];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                    }
                }
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

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        t && (s = s.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, s)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, s, n = function(e, t) {
                    if (null == e) return {};
                    var r, s, n = {},
                        o = Object.keys(e);
                    for (s = 0; s < o.length; s++) {
                        r = o[s];
                        t.indexOf(r) >= 0 || (n[r] = e[r])
                    }
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < o.length; s++) {
                        r = o[s];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                    }
                }
                return n
            }
            const h = (0, n.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    n = e.height,
                    o = void 0 === n ? 24 : n,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    c = e.foreground,
                    h = u(e, ["width", "height", "color", "foreground"]);
                return (0, s.jsxs)("svg", m(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            s = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        s.forEach((function(t) {
                            d(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(h)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, s.jsx)("rect", {
                        className: c,
                        x: "2.10049",
                        y: "20.4853",
                        width: "26",
                        height: "2",
                        transform: "rotate(-45 2.10049 20.4853)",
                        fill: l
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                        fill: l
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    n = e.height,
                    d = void 0 === n ? 24 : n,
                    m = e.color,
                    u = void 0 === m ? o.Z.colors.INTERACTIVE_NORMAL : m,
                    h = e.colorClass,
                    x = void 0 === h ? "" : h,
                    j = c(e, ["width", "height", "color", "colorClass"]);
                return (0, s.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            s = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        s.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(j)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: d,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20Zm-7.202.99a.5.5 0 0 1 .049.75L4.655 15.344a.5.5 0 0 1-.85-.304l-.272-2.712a.457.457 0 0 0-.355-.4C1.52 11.56 1.047 9.425 2.392 8.39l8.389-6.453a2 2 0 0 1 2.438 0l2.286 1.758ZM6.31 22c-.12 0-.169-.141-.084-.226l1.92-1.92a.5.5 0 0 1 .854.353V21a1 1 0 0 1-1 1H6.31Zm8.165-8.475c-.195.195-.191.51-.031.735.35.49.556 1.091.556 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.8l.787-7.871a.457.457 0 0 1 .355-.4c1.657-.369 2.131-2.503.786-3.538l-.782-.602a.5.5 0 0 0-.658.043l-5.693 5.693Z",
                        clipRule: "evenodd",
                        className: x
                    })
                }))
            }))
        }
    }
]);