(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31475"], {
        88885: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                HomeSlashIcon: function() {
                    return r
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("669491"),
                i = t("75196");
            let r = e => {
                let {
                    width: s = 24,
                    height: t = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...n
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(n),
                    width: s,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        d: "M22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: d
                    }), (0, a.jsx)("path", {
                        d: "M15.5052 3.69629C15.7444 3.88031 15.7673 4.23273 15.5539 4.44615L4.65513 15.3449C4.35686 15.6431 3.84603 15.4608 3.80406 15.0411L3.53281 12.3286C3.5132 12.1325 3.36996 11.9711 3.17756 11.9284C1.52072 11.5602 1.04671 9.4256 2.39199 8.39076L10.7805 1.93799C11.4994 1.38498 12.5005 1.38498 13.2194 1.93799L15.5052 3.69629Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: d
                    }), (0, a.jsx)("path", {
                        d: "M6.30993 22C6.1902 22 6.14129 21.8587 6.22595 21.7741L8.1464 19.8536C8.46138 19.5386 8.99995 19.7617 8.99995 20.2072V21C8.99995 21.5523 8.55224 22 7.99995 22H6.30993Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: d
                    }), (0, a.jsx)("path", {
                        d: "M14.4748 13.5252C14.2796 13.7204 14.2836 14.0351 14.444 14.2599C14.794 14.7506 15 15.3513 15 16V21C15 21.5523 15.4477 22 16 22H17.69C18.7175 22 19.5778 21.2214 19.68 20.199L20.4671 12.3287C20.4867 12.1325 20.63 11.9711 20.8224 11.9284C22.4792 11.5602 22.9532 9.4256 21.6079 8.39076L20.8262 7.78944C20.6272 7.63631 20.3454 7.65461 20.1678 7.8322L14.4748 13.5252Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: d
                    })]
                })
            }
        },
        56657: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return L
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("414456"),
                i = t.n(l),
                r = t("669491"),
                d = t("77078"),
                n = t("476765"),
                o = t("79945"),
                c = t("256170"),
                m = t("867544"),
                x = t("399699"),
                u = t("566998"),
                h = t("701909"),
                E = t("49111"),
                N = t("782340"),
                _ = t("729819");

            function f() {
                return (0, a.jsx)("div", {
                    className: _.dummySwitch,
                    children: (0, a.jsxs)("svg", {
                        className: _.dummySlider,
                        viewBox: "0 0 28 20",
                        preserveAspectRatio: "xMinYMid meet",
                        style: {
                            left: 9
                        },
                        children: [(0, a.jsx)("rect", {
                            fill: "white",
                            x: 4,
                            y: 0,
                            height: 20,
                            width: 20,
                            rx: "10"
                        }), (0, a.jsxs)("svg", {
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                fill: r.default.unsafe_rawColors.GREEN_360.css,
                                d: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"
                            }), (0, a.jsx)("path", {
                                fill: r.default.unsafe_rawColors.GREEN_360.css,
                                d: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
                            })]
                        })]
                    })
                })
            }

            function L(e) {
                let {
                    transitionState: s,
                    onClose: t
                } = e, l = (0, n.useUID)();
                return (0, a.jsxs)(d.ModalRoot, {
                    transitionState: s,
                    "aria-labelledby": l,
                    size: d.ModalSize.LARGE,
                    children: [(0, a.jsx)(d.ModalCloseButton, {
                        className: _.closeButton,
                        onClick: t
                    }), (0, a.jsxs)(d.ModalContent, {
                        className: _.container,
                        children: [(0, a.jsx)(d.Heading, {
                            id: l,
                            color: "header-primary",
                            variant: "heading-xl/medium",
                            children: N.default.Messages.GUILD_FEED_NUX_CURATION_TITLE
                        }), (0, a.jsx)(d.Text, {
                            className: _.subtitle,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: N.default.Messages.GUILD_FEED_NUX_CURATION_SUBTITLE
                        }), (0, a.jsxs)("div", {
                            className: _.itemList,
                            children: [(0, a.jsx)("div", {
                                className: _.demoContainer,
                                children: (0, a.jsxs)("div", {
                                    className: _.demoList,
                                    children: [(0, a.jsxs)("div", {
                                        className: _.demoItem,
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: N.default.Messages.ADD_REACTION
                                        }), (0, a.jsx)(o.default, {
                                            className: _.demoIcon
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: i(_.demoItem, _.demoItemSelected),
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: N.default.Messages.GUILD_FEED_FEATURE_MESSAGE
                                        }), (0, a.jsx)(c.default, {
                                            className: i(_.demoIcon, _.demoIconActive, _.demoCaret)
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: _.demoItem,
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: N.default.Messages.PIN_MESSAGE
                                        }), (0, a.jsx)(u.default, {
                                            className: _.demoIcon
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: _.demoContainer,
                                children: (0, a.jsxs)("div", {
                                    className: _.demoList,
                                    children: [(0, a.jsxs)("div", {
                                        className: _.demoItem,
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: N.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM
                                        }), (0, a.jsx)(m.default, {
                                            className: _.demoIcon,
                                            foregroundColor: "currentColor"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: i(_.demoItem, _.demoItemSelected),
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: N.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM
                                        }), (0, a.jsx)(x.default, {
                                            className: i(_.demoIcon, _.demoIconActive),
                                            foregroundColor: "currentColor"
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: _.demoContainer,
                                children: (0, a.jsx)("div", {
                                    className: _.demoList,
                                    children: (0, a.jsxs)("div", {
                                        className: _.demoItem,
                                        style: {
                                            padding: 0
                                        },
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: N.default.Messages.GUILD_FEED_DEMOTE_CHANNEL
                                        }), (0, a.jsx)(f, {})]
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: _.textContainer,
                                children: [(0, a.jsx)(d.Text, {
                                    className: _.itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: N.default.Messages.GUILD_FEED_NUX_CURATION_FEATURE_TITLE
                                }), (0, a.jsx)(d.Text, {
                                    className: _.itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: N.default.Messages.GUILD_FEED_NUX_CURATION_FEATURE_SUBTITLE
                                })]
                            }), (0, a.jsxs)("div", {
                                className: _.textContainer,
                                children: [(0, a.jsx)(d.Text, {
                                    className: _.itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: N.default.Messages.GUILD_FEED_NUX_CURATION_REMOVE_TITLE
                                }), (0, a.jsx)(d.Text, {
                                    className: _.itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: N.default.Messages.GUILD_FEED_NUX_CURATION_REMOVE_SUBTITLE
                                })]
                            }), (0, a.jsxs)("div", {
                                className: _.textContainer,
                                children: [(0, a.jsx)(d.Text, {
                                    className: _.itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: N.default.Messages.GUILD_FEED_NUX_CURATION_BLOCK_TITLE
                                }), (0, a.jsx)(d.Text, {
                                    className: _.itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: N.default.Messages.GUILD_FEED_NUX_CURATION_BLOCK_SUBTITLE
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)(d.ModalFooter, {
                        children: [(0, a.jsx)(d.Button, {
                            onClick: t,
                            children: N.default.Messages.OKAY
                        }), (0, a.jsx)(d.Anchor, {
                            className: i(_.learnMore, (0, d.getButtonStyle)({
                                look: d.Button.Looks.LINK,
                                color: d.Button.Colors.PRIMARY
                            })),
                            href: h.default.getArticleURL(E.HelpdeskArticles.GUILD_HOME),
                            children: N.default.Messages.LEARN_MORE
                        })]
                    })]
                })
            }
        },
        399699: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("469563"),
                i = t("88885"),
                r = t("75196"),
                d = (0, l.replaceIcon)(function(e) {
                    let {
                        width: s = 24,
                        height: t = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...d
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(d),
                        width: s,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("rect", {
                            className: i,
                            x: "2.10049",
                            y: "20.4853",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2.10049 20.4853)",
                            fill: l
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                            fill: l
                        })]
                    })
                }, i.HomeSlashIcon, void 0, {
                    size: 24
                })
        }
    }
]);