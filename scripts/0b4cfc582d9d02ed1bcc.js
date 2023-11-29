(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84648"], {
        804090: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HammerIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M1.23283 21.1341C0.84231 20.7436 0.84231 20.1104 1.23283 19.7199L8.70769 12.245C8.90295 12.0498 9.21953 12.0498 9.4148 12.245L11.5361 14.3663C11.7314 14.5616 11.7314 14.8782 11.5361 15.0734L4.06126 22.5483C3.67074 22.9388 3.03757 22.9388 2.64705 22.5483L1.23283 21.1341Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        d: "M7.75794 7.75975L16.2432 16.245C17.0243 17.0261 18.2906 17.0261 19.0716 16.245L22.6072 12.7095C23.3882 11.9284 23.3882 10.6621 22.6072 9.88107L19.6678 6.94171L20.3247 6.28489C20.7152 5.89436 20.7152 5.2612 20.3247 4.87067L18.9104 3.45646C18.5199 3.06594 17.8867 3.06594 17.4962 3.45646L16.8394 4.11329L14.1219 1.39579C13.3409 0.614739 12.0745 0.614739 11.2935 1.39579L7.75794 4.93132C6.97689 5.71237 6.97689 6.9787 7.75794 7.75975Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    })]
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M15.2979 14.48C14.8405 14.928 14.2199 15.152 13.4359 15.152H12.0499V9.18803H13.4359C14.2199 9.18803 14.8405 9.41203 15.2979 9.86003C15.7552 10.308 15.9839 11.078 15.9839 12.17C15.9839 13.262 15.7552 14.032 15.2979 14.48Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM6 17H8.044V7.34003H6V17ZM10.0059 7.34003V17H13.4359C14.9012 17 16.0305 16.5847 16.8239 15.754C17.6265 14.9234 18.0279 13.7287 18.0279 12.17C18.0279 10.6114 17.6265 9.41669 16.8239 8.58603C16.0305 7.75536 14.9012 7.34003 13.4359 7.34003H10.0059Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    })]
                })
            }
        },
        176032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                r = n("77078"),
                i = n("272030"),
                a = n("957255"),
                o = n("530346"),
                d = n("662255"),
                u = n("306160"),
                c = n("49111"),
                C = n("782340"),
                f = n("297298"),
                h = function(e) {
                    var t;
                    let {
                        guild: h,
                        user: p,
                        onSelect: v
                    } = e, M = null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : "", L = (0, s.useStateFromStores)([a.default], () => null != h && a.default.canManageUser(c.Permissions.BAN_MEMBERS, p, h), [h, p]);
                    return (0, l.jsx)(r.Menu, {
                        navId: "member-application-context-menu",
                        className: f.contextMenu,
                        onClose: i.closeContextMenu,
                        "aria-label": C.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: v,
                        children: (0, l.jsxs)(r.MenuGroup, {
                            children: [L && (0, l.jsx)(r.MenuItem, {
                                id: "ban",
                                label: C.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
                                icon: o.default,
                                color: "danger",
                                action: () => (0, r.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("743506").then(n.bind(n, "743506"));
                                    return t => (0, l.jsx)(e, {
                                        ...t,
                                        guildId: M,
                                        user: p
                                    })
                                })
                            }, "ban"), (0, l.jsx)(r.MenuItem, {
                                id: "copyUserId",
                                label: "Copy User ID",
                                icon: d.default,
                                action: () => (0, u.copy)(p.id)
                            }, "copyUserId")]
                        })
                    })
                }
        },
        530346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("804090"),
                i = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.75 0.5L15.5 6.5V8L11.751 11.751H10.25L3.5 5.75V4.25L7.25 0.5H8.75ZM12.2803 1.03033C12.5732 0.737437 13.0458 0.735124 13.346 1.0353L14.3967 2.08602C14.6923 2.38166 14.6966 2.85672 14.4017 3.15165C14.1088 3.44454 13.6362 3.44686 13.336 3.14668L12.2853 2.09596C11.9897 1.80032 11.9854 1.32527 12.2803 1.03033V1.03033ZM5.27297 8.75L6.86396 10.341L2.09099 15.114L0.5 13.523L5.27297 8.75Z",
                            fill: s
                        })
                    })
                }, r.HammerIcon, void 0, {
                    size: 24
                })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("35647"),
                i = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon, void 0, {
                    size: 24
                })
        }
    }
]);