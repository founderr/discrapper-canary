(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72439"], {
        68422: function(e, s, l) {
            "use strict";
            e.exports = l.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, s, l) {
            "use strict";
            e.exports = l.p + "d4d9f2bff23beec65b1f.svg"
        },
        276825: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                CheckmarkSmallIcon: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var t = l("669491"),
                n = l("75196");
            let i = e => {
                let {
                    width: s = 24,
                    height: l = 24,
                    color: i = t.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(r),
                    width: s,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L10 14.5858L17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: d
                    })
                })
            }
        },
        502155: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return x
                }
            }), l("222007");
            var a = l("37983"),
                t = l("884691"),
                n = l("446674"),
                i = l("77078"),
                d = l("716241"),
                r = l("592407"),
                c = l("525065"),
                o = l("476765"),
                u = l("324105"),
                m = l("49111"),
                f = l("782340"),
                h = l("140631"),
                x = e => {
                    let {
                        transitionState: s,
                        onClose: l,
                        guild: x
                    } = e, v = (0, o.useUID)();
                    t.useEffect(() => {
                        d.default.trackWithMetadata(m.AnalyticEvents.OPEN_MODAL, {
                            type: m.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
                        })
                    }, []);
                    let [N, C] = (0, n.useStateFromStoresArray)([c.default], () => [c.default.getOnlineCount(x.id), c.default.getMemberCount(x.id)], [x.id]);
                    return (0, a.jsxs)(i.ModalRoot, {
                        transitionState: s,
                        "aria-labelledby": v,
                        className: h.root,
                        children: [(0, a.jsx)(i.ModalHeader, {
                            className: h.modalHeader,
                            separator: !1,
                            children: (0, a.jsx)(i.ModalCloseButton, {
                                onClick: l,
                                className: h.modalCloseButton
                            })
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            id: v,
                            className: h.header,
                            children: f.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER
                        }), (0, a.jsxs)(i.ModalContent, {
                            className: h.modalContent,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: h.subheader,
                                children: f.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format({
                                    onServerSettingsClick: () => {
                                        l(), r.default.setSection(m.GuildSettingsSections.DISCOVERY), d.default.trackWithMetadata(m.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                                            settings_type: "guild",
                                            origin_pane: "DISCOVERY",
                                            destination_pane: "DISCOVERY"
                                        })
                                    }
                                })
                            }), (0, a.jsx)(u.default, {
                                className: h.previewCard,
                                guild: x,
                                presenceCount: N,
                                memberCount: C
                            })]
                        }), (0, a.jsx)(i.ModalFooter, {
                            children: (0, a.jsx)(i.Button, {
                                onClick: l,
                                children: f.default.Messages.GOT_IT
                            })
                        })]
                    })
                }
        },
        324105: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return g
                }
            }), l("222007");
            var a = l("37983"),
                t = l("884691"),
                n = l("414456"),
                i = l.n(n),
                d = l("819855"),
                r = l("77078"),
                c = l("841098"),
                o = l("407063"),
                u = l("580357"),
                m = l("587974"),
                f = l("315102"),
                h = l("159885"),
                x = l("782340"),
                v = l("583810"),
                N = l("68422"),
                C = l("578817");
            let S = [16, 16, 14, 14, 12, 10, 8];
            var g = function(e) {
                var s, l;
                let {
                    guild: n,
                    disabled: g,
                    small: j,
                    loading: p = !1,
                    description: I,
                    memberCount: E,
                    presenceCount: _,
                    className: M
                } = e, R = (0, c.default)(), [T, O] = t.useState(!1);
                if (null == n || p) return (0, a.jsx)("div", {
                    className: i(M, v.card, v.cardPlaceholder, {
                        [v.cardSmall]: j,
                        [v.cardDisabled]: g
                    })
                });
                let {
                    name: A
                } = n, L = null != n.discoverySplash && /^data:/.test(n.discoverySplash) ? n.discoverySplash : f.default.getGuildDiscoverySplashURL({
                    id: n.id,
                    splash: n.discoverySplash,
                    size: 240 * (0, o.getDevicePixelRatio)()
                }), k = (0, d.isThemeDark)(R) ? N : C, D = null !== (s = f.default.getGuildIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 40
                })) && void 0 !== s ? s : void 0, w = null != n.description ? n.description : I, y = null != E ? E : null == n ? void 0 : n.memberCount, b = null != _ ? _ : null == n ? void 0 : n.presenceCount, U = null;
                if (null != D) U = (0, a.jsx)("img", {
                    src: D,
                    alt: "",
                    className: v.avatar
                });
                else {
                    let e = (0, h.getAcronym)(n.name);
                    U = (0, a.jsx)("div", {
                        className: v.defaultIcon,
                        children: (0, a.jsx)(r.Text, {
                            className: v.acronym,
                            style: {
                                fontSize: null !== (l = S[e.length]) && void 0 !== l ? l : S[S.length - 1]
                            },
                            variant: "text-sm/normal",
                            children: e
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: i(M, v.card, {
                        [v.cardSmall]: j,
                        [v.cardDisabled]: g,
                        [v.splashLoaded]: T
                    }),
                    children: [(0, a.jsxs)("div", {
                        className: v.cardHeader,
                        children: [(0, a.jsx)("div", {
                            className: v.splash,
                            children: (0, a.jsx)("img", {
                                src: null != L ? L : k,
                                alt: "",
                                className: v.splashImage,
                                onLoad: () => O(!0)
                            })
                        }), (0, a.jsx)("div", {
                            className: v.guildIcon,
                            children: (0, a.jsx)(m.default, {
                                mask: m.default.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, a.jsx)("div", {
                                    className: v.iconMask,
                                    children: (0, a.jsx)(m.default, {
                                        mask: m.default.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != U ? U : null
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: v.guildInfo,
                        children: [(0, a.jsxs)("div", {
                            className: v.title,
                            children: [(0, a.jsx)(u.default, {
                                className: v.verifiedIcon,
                                guild: n,
                                tooltipColor: r.Tooltip.Colors.PRIMARY
                            }), (0, a.jsx)(r.Text, {
                                className: v.guildName,
                                variant: "text-md/normal",
                                children: (0, a.jsx)("span", {
                                    children: A
                                })
                            })]
                        }), (0, a.jsx)(r.Text, {
                            className: v.description,
                            variant: "text-sm/normal",
                            children: (0, a.jsx)("span", {
                                children: w
                            })
                        }), (0, a.jsxs)("div", {
                            className: v.memberInfo,
                            children: [null != b && (0, a.jsxs)("div", {
                                className: v.memberCount,
                                children: [(0, a.jsx)("div", {
                                    className: v.dotOnline
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: j ? x.default.Messages.NUMBERS_ONLY.format({
                                        count: b
                                    }) : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: b
                                    })
                                })]
                            }), null != y && (0, a.jsxs)("div", {
                                className: v.memberCount,
                                children: [(0, a.jsx)("div", {
                                    className: v.dotOffline
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: j ? x.default.Messages.NUMBERS_ONLY.format({
                                        count: y
                                    }) : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: y
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        931138: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return o
                }
            });
            var a = l("37983"),
                t = l("884691"),
                n = l("414456"),
                i = l.n(n),
                d = l("77078"),
                r = l("760607"),
                c = l("89976");

            function o(e) {
                let {
                    children: s,
                    size: l = 16,
                    className: n,
                    flowerStarClassName: o,
                    ...u
                } = e, m = t.Children.only(s), f = (0, d.useRedesignIconContext)().enabled;
                return (0, a.jsxs)("div", {
                    className: i(c.flowerStarContainer, n),
                    style: {
                        width: l,
                        height: l
                    },
                    children: [(0, a.jsx)(r.default, {
                        ...u,
                        className: i(o, c.flowerStar)
                    }), (0, a.jsx)("div", {
                        className: i(c.childContainer, {
                            [c.redesignIconChildContainer]: f
                        }),
                        children: m
                    })]
                })
            }
        },
        760607: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return n
                }
            });
            var a = l("37983");
            l("884691");
            var t = l("75196"),
                n = function(e) {
                    let {
                        width: s = 16,
                        height: l = 16,
                        color: n = "currentColor",
                        foreground: i,
                        ...d
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, t.default)(d),
                        width: s,
                        height: l,
                        viewBox: "0 0 16 15.2",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: n,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        486952: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return d
                }
            });
            var a = l("37983");
            l("884691");
            var t = l("469563"),
                n = l("276825"),
                i = l("75196"),
                d = (0, t.replaceIcon)(function(e) {
                    let {
                        width: s = 16,
                        height: l = 16,
                        color: t = "currentColor",
                        ...n
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(n),
                        width: s,
                        height: l,
                        viewBox: "0 0 16 15.2",
                        children: (0, a.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: t
                        })
                    })
                }, n.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        }
    }
]);