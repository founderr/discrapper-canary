(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4984"], {
        943659: function(e, t, s) {
            "use strict";
            e.exports = s.p + "0cabe542ca3eaad8cc5b.png"
        },
        936562: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ec683d33b845563d2f44.png"
        },
        451347: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9cb6e1bab83e6ac54932.png"
        },
        14050: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7134a1b421c45a9bcc1d.png"
        },
        471536: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                r = s.n(i),
                n = s("917351"),
                d = s.n(n),
                o = s("77078"),
                c = s("446674"),
                u = s("272030"),
                x = s("305961"),
                m = s("677099"),
                h = s("476263"),
                T = s("380353"),
                I = s("782340"),
                g = s("471665");

            function C(e) {
                let {
                    guildPlans: t,
                    overrideGuild: s
                } = e, [i, r] = l.useState(!1), n = (0, c.useStateFromStores)([m.default], () => m.default.getFlattenedGuildIds()), u = l.useMemo(() => d(t).values().filter(e => i || e.confidence === T.Confidence.Low).sortBy(e => {
                    let t = n.indexOf(e.guildId);
                    return -1 === t ? n.length : t
                }).value(), [t, n, i]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: g.container,
                        children: [(0, a.jsx)(M, {
                            header: I.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_TITLE.format(),
                            subtitle: I.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_SUBTITLE,
                            className: g.everything,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === T.Mode.CareALot
                            }),
                            overrideGuild: s
                        }), (0, a.jsx)(M, {
                            header: I.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_TITLE.format(),
                            subtitle: I.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_SUBTITLE,
                            className: g.essentials,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === T.Mode.CareALittle
                            }),
                            overrideGuild: s
                        }), (0, a.jsx)(M, {
                            header: I.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_TITLE.format(),
                            subtitle: I.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_SUBTITLE,
                            className: g.none,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === T.Mode.DontCare
                            }),
                            overrideGuild: s
                        })]
                    }), (0, a.jsx)("div", {
                        className: g.showAllCheckboxContainer,
                        children: (0, a.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: i,
                            onChange: (e, t) => r(t),
                            className: g.showAllCheckbox,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: I.default.Messages.NOTIFICATION_MIGRATION_SHOW_ALL
                            })
                        })
                    })]
                })
            }

            function M(e) {
                let {
                    header: t,
                    subtitle: s,
                    className: l,
                    guildPlans: i,
                    overrideGuild: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: r(g.column, l),
                    children: [(0, a.jsxs)("div", {
                        className: g.header,
                        children: [(0, a.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: s
                        })]
                    }), (0, a.jsx)(o.Scroller, {
                        className: g.guilds,
                        children: i.map(e => (0, a.jsx)(j, {
                            plan: e,
                            overrideGuild: n
                        }, e.guildId))
                    })]
                })
            }

            function j(e) {
                let {
                    plan: t,
                    overrideGuild: s
                } = e, l = (0, c.useStateFromStores)([x.default], () => x.default.getGuild(t.guildId));
                return null == l ? null : (0, a.jsx)(o.Tooltip, {
                    text: (0, a.jsx)("pre", {
                        children: l.name + "\n" + t.debugReason
                    }),
                    "aria-label": t.debugReason,
                    tooltipClassName: g.tooltip,
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: g.guild,
                        onContextMenu: e => (0, u.openContextMenu)(e, e => {
                            var i, r, n;
                            let {
                                onSelect: d
                            } = e;
                            return (0, a.jsx)(o.Menu, {
                                navId: "notifications-migration",
                                onClose: u.closeContextMenu,
                                "aria-label": I.default.Messages.THREAD_ACTIONS_MENU_LABEL,
                                onSelect: d,
                                children: (0, a.jsxs)(o.MenuGroup, {
                                    children: [(0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(T.Mode.CareALot),
                                        label: "Move to Everything",
                                        action: () => {
                                            s(l.id, T.Mode.CareALot), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (i = t.overrideMode) && void 0 !== i ? i : t.mode) === T.Mode.CareALot
                                    }, String(T.Mode.CareALot)), (0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(T.Mode.CareALittle),
                                        label: "Move to Essentials",
                                        action: () => {
                                            s(l.id, T.Mode.CareALittle), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (r = t.overrideMode) && void 0 !== r ? r : t.mode) === T.Mode.CareALittle
                                    }, String(T.Mode.CareALittle)), (0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(T.Mode.DontCare),
                                        label: "Move to Nothing",
                                        action: () => {
                                            s(l.id, T.Mode.DontCare), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (n = t.overrideMode) && void 0 !== n ? n : t.mode) === T.Mode.DontCare
                                    }, String(T.Mode.DontCare))]
                                }, "change-mode")
                            })
                        }),
                        children: (0, a.jsx)(h.default, {
                            "aria-hidden": !0,
                            className: g.guildIcon,
                            guild: l,
                            size: h.default.Sizes.MEDIUM,
                            active: !0,
                            tabIndex: -1
                        })
                    })
                })
            }
        },
        923660: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return j
                }
            }), s("222007"), s("781738");
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                r = s.n(i),
                n = s("77078"),
                d = s("367376"),
                o = s("531470"),
                c = s("538137"),
                u = s("36694"),
                x = s("306160"),
                m = s("439932"),
                h = s("699668"),
                T = s("471536"),
                I = s("71941"),
                g = s("49111"),
                C = s("782340"),
                M = s("650287");

            function j(e) {
                let {
                    onClose: t,
                    transitionState: s
                } = e, [i, r] = l.useState(I.Tab.Intro), [d, x] = l.useState(!1), {
                    guildPlans: T,
                    overrideGuild: j,
                    getDebug: b,
                    showWarning: p
                } = (0, h.useGuildMigrationSteps)();
                return p ? (0, a.jsx)("div", {
                    className: (0, m.getThemeClass)(g.ThemeTypes.DARK),
                    children: (0, a.jsxs)(n.ModalRoot, {
                        className: M.modal,
                        transitionState: s,
                        "aria-label": C.default.Messages.NOTIFICATIONS,
                        size: n.ModalSize.DYNAMIC,
                        children: [(0, a.jsx)(n.Text, {
                            style: {
                                maxWidth: 400,
                                padding: 16
                            },
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: C.default.Messages.NOTIF_MIGRATION_WARNING.format()
                        }), (0, a.jsx)(n.ModalFooter, {
                            className: M.buttons,
                            children: (0, a.jsx)("div", {
                                className: M.left,
                                children: (0, a.jsx)(n.Clickable, {
                                    className: M.dismiss,
                                    onClick: t,
                                    children: (0, a.jsx)(n.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: i === I.Tab.Intro ? C.default.Messages.DISMISS : C.default.Messages.CANCEL
                                    })
                                })
                            })
                        })]
                    })
                }) : (0, a.jsx)("div", {
                    className: (0, m.getThemeClass)(g.ThemeTypes.DARK),
                    children: (0, a.jsxs)(n.ModalRoot, {
                        className: M.modal,
                        transitionState: s,
                        "aria-label": C.default.Messages.NOTIFICATIONS,
                        size: n.ModalSize.DYNAMIC,
                        children: [(0, a.jsx)(I.default, {
                            selectedTab: i,
                            onClick: r
                        }), i === I.Tab.Intro ? (0, a.jsx)(N, {}) : i === I.Tab.Customize ? (0, a.jsx)(v, {
                            guildPlans: T,
                            overrideGuild: j,
                            getDebug: b
                        }) : (0, a.jsx)(f, {
                            guildPlans: T
                        }), (0, a.jsxs)(n.ModalFooter, {
                            className: M.buttons,
                            children: [(0, a.jsx)("div", {
                                className: M.left,
                                children: (0, a.jsx)(n.Clickable, {
                                    className: M.dismiss,
                                    onClick: t,
                                    children: (0, a.jsx)(n.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: i === I.Tab.Intro ? C.default.Messages.DISMISS : C.default.Messages.CANCEL
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: M.right,
                                children: [i !== I.Tab.Intro ? (0, a.jsxs)(n.Button, {
                                    onClick: () => r(i === I.Tab.Review ? I.Tab.Customize : I.Tab.Intro),
                                    color: n.Button.Colors.TRANSPARENT,
                                    children: [(0, a.jsx)(o.default, {
                                        width: 16,
                                        height: 16
                                    }), " ", C.default.Messages.BACK]
                                }) : null, i === I.Tab.Intro ? (0, a.jsxs)(n.Button, {
                                    onClick: () => r(I.Tab.Customize),
                                    children: [C.default.Messages.TRY_IT_OUT, " ", (0, a.jsx)(c.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : i === I.Tab.Customize ? (0, a.jsxs)(n.Button, {
                                    onClick: () => r(I.Tab.Review),
                                    children: [C.default.Messages.NEXT, " ", (0, a.jsx)(c.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : (0, a.jsxs)(n.Button, {
                                    submitting: d,
                                    onClick: async () => {
                                        x(!0), await (0, h.saveSettings)(T), x(!1), t()
                                    },
                                    children: [(0, a.jsx)(u.default, {
                                        width: 16,
                                        height: 16
                                    }), " ", C.default.Messages.FINISH]
                                })]
                            })]
                        })]
                    })
                })
            }

            function N() {
                return (0, a.jsxs)("div", {
                    className: M.content,
                    children: [(0, a.jsxs)("div", {
                        className: M.header,
                        children: [(0, a.jsxs)("svg", {
                            className: M.introIcon,
                            width: "40",
                            height: "40",
                            viewBox: "0 0 40 40",
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                d: "M35.3032 4.69685L34.5569 2.70687C34.4217 2.34641 33.9118 2.34641 33.7766 2.70687L33.0303 4.69685L31.0403 5.44318C30.6798 5.57837 30.6798 6.08825 31.0403 6.22344L33.0303 6.96977L33.7766 8.95974C33.9118 9.32021 34.4217 9.32021 34.5569 8.95974L35.3032 6.96977L37.2932 6.22344C37.6536 6.08825 37.6536 5.57837 37.2932 5.44318L35.3032 4.69685Z",
                                fill: "currentColor"
                            }), (0, a.jsx)("path", {
                                d: "M11.6137 7.08044L12.879 10.4544L16.2529 11.7197C16.9739 11.9901 16.9739 13.0099 16.2529 13.2802L12.879 14.5456L11.6137 17.9195C11.3433 18.6404 10.3235 18.6404 10.0531 17.9195L8.78776 14.5456L5.41385 13.2802C4.69292 13.0099 4.69292 11.9901 5.41385 11.7197L8.78776 10.4544L10.0531 7.08044C10.3235 6.35951 11.3433 6.3595 11.6137 7.08044Z",
                                fill: "currentColor"
                            }), (0, a.jsx)("path", {
                                d: "M30.8841 12.6516C31.3723 12.1635 31.3723 11.372 30.8841 10.8838L29.1164 9.11608C28.6282 8.62792 27.8368 8.62792 27.3486 9.11608L24.1164 12.3483C23.6282 12.8365 23.6282 13.6279 24.1164 14.1161L25.8841 15.8838C26.3723 16.372 27.1637 16.372 27.6519 15.8838L30.8841 12.6516Z",
                                fill: "currentColor"
                            }), (0, a.jsx)("path", {
                                d: "M24.2175 19.3183C24.7056 18.8301 24.7056 18.0387 24.2175 17.5505L22.4497 15.7827C21.9615 15.2946 21.1701 15.2946 20.6819 15.7827L4.11636 32.3483C3.62821 32.8365 3.6282 33.6279 4.11636 34.1161L5.88413 35.8838C6.37228 36.372 7.16374 36.372 7.65189 35.8838L24.2175 19.3183Z",
                                fill: "currentColor"
                            }), (0, a.jsx)("path", {
                                d: "M34.5457 22.121L33.2803 18.7471C33.0099 18.0262 31.9902 18.0262 31.7198 18.7471L30.4544 22.121L27.0805 23.3864C26.3596 23.6568 26.3596 24.6765 27.0805 24.9469L30.4544 26.2123L31.7198 29.5862C31.9902 30.3071 33.0099 30.3071 33.2803 29.5862L34.5457 26.2123L37.9196 24.9469C38.6405 24.6765 38.6405 23.6568 37.9196 23.3864L34.5457 22.121Z",
                                fill: "currentColor"
                            }), (0, a.jsx)("path", {
                                d: "M17.8902 2.70687L18.6365 4.69685L20.6265 5.44318C20.987 5.57837 20.987 6.08825 20.6265 6.22344L18.6365 6.96977L17.8902 8.95974C17.755 9.32021 17.2451 9.32021 17.1099 8.95974L16.3636 6.96977L14.3736 6.22344C14.0132 6.08825 14.0132 5.57837 14.3736 5.44318L16.3636 4.69685L17.1099 2.70687C17.2451 2.34641 17.755 2.34641 17.8902 2.70687Z",
                                fill: "currentColor"
                            })]
                        }), (0, a.jsx)(n.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: C.default.Messages.NOTIF_MIGRATION_INTRO_TITLE
                        }), (0, a.jsx)(n.Text, {
                            className: M.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: C.default.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE.format()
                        })]
                    }), (0, a.jsx)("img", {
                        width: 912,
                        src: s("943659"),
                        alt: "yo"
                    })]
                })
            }

            function v(e) {
                let {
                    guildPlans: t,
                    overrideGuild: s,
                    getDebug: i
                } = e, [r, o] = l.useState(!1);
                return (0, a.jsxs)("div", {
                    className: M.content,
                    children: [(0, a.jsxs)("div", {
                        className: M.header,
                        onDoubleClick: () => o(e => !e),
                        children: [(0, a.jsx)(n.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: C.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
                        }), (0, a.jsx)(n.Text, {
                            className: M.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: C.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE
                        })]
                    }), r ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n.Button, {
                            onClick: () => (0, x.copy)(i()),
                            children: "Copy"
                        }), (0, a.jsx)("div", {
                            style: {
                                whiteSpace: "pre",
                                overflow: "auto",
                                textAlign: "left",
                                height: 450
                            },
                            children: function(e) {
                                return e.split("\n").map((e, t) => e.startsWith("### ") ? (0, a.jsx)(n.Heading, {
                                    variant: "heading-md/medium",
                                    style: {
                                        marginTop: 16
                                    },
                                    children: e.replace("### ", "")
                                }, t) : e.startsWith("# ") ? (0, a.jsx)(n.Heading, {
                                    variant: "heading-lg/medium",
                                    style: {
                                        marginTop: 80
                                    },
                                    children: e.replace("# ", "")
                                }, t) : e.startsWith("    - ") ? (0, a.jsx)("li", {
                                    style: {
                                        color: "var(--text-normal)",
                                        marginLeft: 48
                                    },
                                    children: (0, a.jsx)(n.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        style: {
                                            display: "inline"
                                        },
                                        children: d.default.parseTopic(e.replace("    - ", ""))
                                    })
                                }, t) : e.startsWith("- ") ? (0, a.jsx)("li", {
                                    style: {
                                        color: "var(--text-normal)",
                                        marginLeft: 16
                                    },
                                    children: (0, a.jsx)(n.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        style: {
                                            display: "inline"
                                        },
                                        children: d.default.parseTopic(e.replace("- ", ""))
                                    })
                                }, t) : (0, a.jsx)(n.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: d.default.parseTopic(e)
                                }, t))
                            }(i())
                        })]
                    }) : (0, a.jsx)(T.default, {
                        guildPlans: t,
                        overrideGuild: s
                    })]
                })
            }

            function f(e) {
                let [t, i] = l.useState(1);
                return (0, a.jsxs)("div", {
                    className: M.content,
                    children: [(0, a.jsxs)("div", {
                        className: M.header,
                        children: [(0, a.jsx)(n.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: C.default.Messages.NOTIF_MIGRATION_REVIEW_TITLE
                        }), (0, a.jsx)(n.Text, {
                            className: M.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: C.default.Messages.NOTIF_MIGRATION_REVIEW_SUB_TITLE.format()
                        })]
                    }), (0, a.jsxs)("div", {
                        className: M.subTabs,
                        children: [(0, a.jsxs)(n.Clickable, {
                            className: r(M.subTab, {
                                [M.active]: 0 === t
                            }),
                            onClick: () => i(0),
                            children: [(0, a.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                color: 0 === t ? "header-primary" : "text-muted",
                                children: "Everything"
                            }), (0, a.jsxs)(n.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                className: M.subtitle,
                                children: ["Stay up to date with ", (0, a.jsx)("strong", {
                                    children: "every"
                                }), " updates."]
                            })]
                        }), (0, a.jsxs)(n.Clickable, {
                            className: r(M.subTab, {
                                [M.active]: 1 === t
                            }),
                            onClick: () => i(1),
                            children: [(0, a.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                color: 1 === t ? "header-primary" : "text-muted",
                                children: "Essentials"
                            }), (0, a.jsxs)(n.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                className: M.subtitle,
                                children: ["Stay up to date with ", (0, a.jsx)("strong", {
                                    children: "relevant"
                                }), " updates."]
                            })]
                        }), (0, a.jsxs)(n.Clickable, {
                            className: r(M.subTab, {
                                [M.active]: 2 === t
                            }),
                            onClick: () => i(2),
                            children: [(0, a.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                color: 2 === t ? "header-primary" : "text-muted",
                                children: "Nothing"
                            }), (0, a.jsx)(n.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                className: M.subtitle,
                                children: "No push notifications or unreads"
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: M.reviewContainer,
                        children: 0 === t ? (0, a.jsx)("img", {
                            src: s("936562"),
                            alt: "yo",
                            width: 568,
                            style: {
                                marginLeft: 46
                            }
                        }) : 1 === t ? (0, a.jsx)("img", {
                            src: s("451347"),
                            alt: "yo",
                            width: 869,
                            style: {
                                marginLeft: 30
                            }
                        }) : (0, a.jsx)("img", {
                            src: s("14050"),
                            alt: "yo",
                            width: 872,
                            style: {
                                marginLeft: 29
                            }
                        })
                    })]
                })
            }
        },
        71941: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Tab: function() {
                    return l
                },
                default: function() {
                    return u
                }
            });
            var a, l, i = s("37983");
            s("884691");
            var r = s("414456"),
                n = s.n(r),
                d = s("77078"),
                o = s("782340"),
                c = s("805986");

            function u(e) {
                let {
                    selectedTab: t,
                    onClick: s
                } = e;
                return (0, i.jsxs)("div", {
                    className: c.tabs,
                    children: [(0, i.jsxs)(d.Clickable, {
                        onClick: () => s(0),
                        className: n(c.tab, {
                            [c.current]: 0 === t
                        }),
                        children: [(0, i.jsx)("div", {
                            className: c.progressBar
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-xs/semibold",
                            color: 0 === t ? "text-brand" : "text-muted",
                            children: o.default.Messages.NOTIF_MIGRATION_INTRO_TAB
                        })]
                    }), (0, i.jsxs)(d.Clickable, {
                        onClick: () => s(1),
                        className: n(c.tab, {
                            [c.current]: 1 === t
                        }),
                        children: [(0, i.jsx)("div", {
                            className: c.progressBar
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-xs/semibold",
                            color: 1 === t ? "text-brand" : "text-muted",
                            children: o.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB
                        })]
                    }), (0, i.jsxs)(d.Clickable, {
                        onClick: () => s(2),
                        className: n(c.tab, {
                            [c.current]: 2 === t
                        }),
                        children: [(0, i.jsx)("div", {
                            className: c.progressBar
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-xs/semibold",
                            color: 2 === t ? "text-brand" : "text-muted",
                            children: o.default.Messages.NOTIF_MIGRATION_REVIEW_TAB
                        })]
                    })]
                })
            }(a = l || (l = {}))[a.Intro = 0] = "Intro", a[a.Customize = 1] = "Customize", a[a.Review = 2] = "Review"
        }
    }
]);