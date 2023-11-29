(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22032"], {
        202998: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PhoneCallIcon: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("669491"),
                n = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, n.default)(o),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M2 7.4C2 4.41766 4.41766 2 7.4 2C7.76333 2 8.09103 2.21846 8.23077 2.55385L10.1605 7.18512C10.3544 7.65065 10.1714 8.18777 9.73353 8.43798L7 10C7.5982 13.5892 10.4108 16.4018 14 17L15.1212 14.7577C15.3398 14.3205 15.8424 14.1054 16.3097 14.2491L21.3715 15.8066C21.7451 15.9216 22 16.2667 22 16.6576C22 19.6081 19.6081 22 16.6576 22H16.2857C8.39593 22 2 15.6041 2 7.71429V7.4Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, i.jsx)("path", {
                        d: "M13 3C13 2.44772 13.4477 2 14 2C18.4183 2 22 5.58172 22 10C22 10.5523 21.5523 11 21 11C20.4477 11 20 10.5523 20 10C20 6.68629 17.3137 4 14 4C13.4477 4 13 3.55228 13 3Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, i.jsx)("path", {
                        d: "M13 7C13 6.44772 13.4477 6 14 6C16.2091 6 18 7.79086 18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10C16 8.89543 15.1046 8 14 8C13.4477 8 13 7.55228 13 7Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })]
                })
            }
        },
        538969: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("222007");
            var i = s("37983");
            s("884691");
            var l = s("750485"),
                n = s("77078"),
                a = s("887657"),
                r = s("549586"),
                o = s("564875"),
                d = s("404158"),
                c = s("368874"),
                C = s("775032"),
                u = s("821586"),
                h = s("922832"),
                f = s("782340"),
                T = s("353530"),
                p = s("392963");
            let x = {
                    [h.TeenActionDisplayType.USER_INTERACTION]: (0, i.jsx)(u.default, {
                        width: 18,
                        height: 18
                    }),
                    [h.TeenActionDisplayType.USER_CALLED]: (0, i.jsx)(a.default, {
                        width: 22,
                        height: 22
                    }),
                    [h.TeenActionDisplayType.USER_ADD]: (0, i.jsx)(o.default, {
                        className: T.personWavingIcon,
                        width: 22,
                        height: 22
                    }),
                    [h.TeenActionDisplayType.GUILD_ADD]: (0, i.jsx)(r.default, {
                        width: 22,
                        height: 22
                    }),
                    [h.TeenActionDisplayType.GUILD_INTERACTION]: (0, i.jsx)(d.default, {
                        className: T.threadIcon,
                        width: 22,
                        height: 22
                    })
                },
                g = e => {
                    let {
                        header: t,
                        description: s,
                        icon: a
                    } = e;
                    return (0, i.jsxs)(l.default, {
                        className: T.row,
                        grow: 0,
                        children: [(0, i.jsx)("div", {
                            className: T.iconContainer,
                            children: a
                        }), (0, i.jsxs)("div", {
                            className: T.rowContent,
                            children: [(0, i.jsx)(n.Text, {
                                className: T.rowHeader,
                                variant: "text-sm/bold",
                                children: t
                            }), (0, i.jsx)(n.Text, {
                                variant: "text-xs/medium",
                                children: s
                            })]
                        })]
                    })
                };
            var A = e => {
                let {
                    transitionState: t,
                    onClose: s
                } = e, a = (0, c.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, C.default)(), o = Array.from(h.ACTION_TO_TEXT.entries());
                return (0, i.jsxs)(n.ModalRoot, {
                    transitionState: t,
                    children: [(0, i.jsx)("img", {
                        className: T.art,
                        src: p,
                        alt: f.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
                    }), (0, i.jsx)(n.ModalContent, {
                        className: T.content,
                        children: (0, i.jsxs)(l.default, {
                            direction: l.default.Direction.VERTICAL,
                            align: l.default.Align.CENTER,
                            children: [(0, i.jsx)(n.Heading, {
                                className: T.header,
                                color: "header-primary",
                                variant: "heading-lg/semibold",
                                children: (0, i.jsx)(n.HeadingLevel, {
                                    children: a
                                })
                            }), o.map(e => {
                                let [t, s] = e;
                                return (0, i.jsx)(g, {
                                    icon: x[t],
                                    header: s.tooltipHeader(),
                                    description: s.tooltipDescription(null != r ? r : void 0)
                                }, t)
                            })]
                        })
                    }), (0, i.jsx)(n.ModalFooter, {
                        children: (0, i.jsx)(n.Button, {
                            className: T.button,
                            type: "button",
                            color: n.Button.Colors.BRAND,
                            onClick: s,
                            children: f.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        821586: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("75196");

            function n(e) {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: n = "currentColor",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: s,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                        fill: n
                    }), (0, i.jsx)("path", {
                        d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                        fill: n
                    })]
                })
            }
        },
        887657: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("469563"),
                n = s("202998"),
                a = s("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: n,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: n,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z"
                        })
                    })
                }, n.PhoneCallIcon, void 0, {
                    size: 24
                })
        }
    }
]);