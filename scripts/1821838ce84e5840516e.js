(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92930"], {
        584503: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55fda0412a4ff4072236.svg"
        },
        45656: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f4d8991602d4587f573e.svg"
        },
        890450: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var r = n("913144"),
                i = n("696605");

            function l(e, t) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t, n) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function s(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: r,
                    height: l,
                    rowHeight: u
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
                }
                let o = [];

                function c(e) {
                    let t = e + (i.MINIMUM_RANGE - 1);
                    return o.push([e, t]), t + 1
                }
                let d = s(.5 * l),
                    f = s(r, -d),
                    I = s(r + l, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / i.MINIMUM_RANGE) * i.MINIMUM_RANGE; f <= I;) f = c(f);
                a(t, n, o)
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("446674"),
                a = n("77078"),
                s = n("102985"),
                o = n("79798"),
                c = n("754474"),
                d = n("158998"),
                f = n("782340"),
                I = n("892802");

            function E(e) {
                if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return c.BotTypes.AI;
                if (e.bot) return c.BotTypes.BOT;
                return null
            }
            let _ = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: i,
                    botVerified: u,
                    discriminatorClass: s,
                    className: c,
                    usernameClass: d,
                    color: E,
                    botClass: _,
                    showStreamerModeTooltip: T
                } = e;
                return (0, r.jsxs)("div", {
                    className: l(I.info, c),
                    children: [(0, r.jsx)(a.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: T,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: l(I.username, d),
                            style: null != E ? {
                                color: E
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: l(I.infoSpacing, s),
                        children: n
                    }) : void 0, null != i && (0, r.jsx)(o.default, {
                        type: i,
                        className: l(I.infoSpacing, _),
                        verified: u
                    })]
                })
            };
            var T = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: l,
                    showAccountIdentifier: a,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...I
                } = e, T = (0, u.useStateFromStores)([s.default], () => s.default.hidePersonalInformation), S = T || t || n.isNonUserBot(), C = n.toString(), N = d.default.getName(n), p = l ? C : null != i ? i : N, m = n.isPomelo() || f;
                if (m || p !== C) {
                    let e = p === C && m && l ? d.default.getUserTag(n, {
                            forcePomelo: f
                        }) : p,
                        t = a && e !== "@".concat(C) ? d.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(_, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: E(n),
                        showStreamerModeTooltip: T && e !== N,
                        ...I
                    })
                }
                return (0, r.jsx)(c.default, {
                    name: p,
                    botType: E(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: S || p !== C ? null : null != o ? o : n.discriminator,
                    ...I
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: a = "",
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H6.99999C6.44771 13 5.99999 12.5523 5.99999 12C5.99999 11.4477 6.44771 11 6.99999 11H11V7C11 6.44771 11.4477 6 12 6Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })]
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7.18016 15.8698C6.55491 15.8698 6.00152 15.7081 5.52001 15.3847C5.03849 15.0613 4.66478 14.6085 4.39887 14.0264C4.13296 13.4371 4 12.7615 4 11.9997C4 11.2451 4.14014 10.5767 4.42043 9.99461C4.7079 9.41248 5.12114 8.95612 5.66015 8.62553C6.20635 8.29494 6.85675 8.12964 7.61137 8.12964C8.25099 8.12964 8.82234 8.26619 9.32542 8.53929C9.83568 8.81239 10.2202 9.19688 10.4789 9.69277L9.26074 10.566C8.89421 9.89041 8.34802 9.55263 7.62215 9.55263C6.96096 9.55263 6.45429 9.76823 6.10214 10.1994C5.74999 10.6235 5.57391 11.2236 5.57391 11.9997C5.57391 12.7831 5.74999 13.3868 6.10214 13.8108C6.45429 14.2348 6.96096 14.4468 7.62215 14.4468C7.91681 14.4468 8.18631 14.3929 8.43066 14.2851C8.6822 14.1701 8.87625 14.0156 9.0128 13.8216V12.8945H7.29874V11.4931H10.5436V15.7189H9.27152L9.0667 15.0074C8.64267 15.5824 8.01383 15.8698 7.18016 15.8698ZM13.5198 15.7189H11.9459V8.28056H13.5198V15.7189ZM15.0304 15.7189H16.6043V12.8945H19.3641V11.4715H16.6043V9.70355H20.0001V8.28056H15.0304V15.7189Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M13.9571 5.45711L18.5429 10.0429C18.9334 10.4334 19.5666 10.4334 19.9571 10.0429L21.3358 8.66422C22.1168 7.88317 22.1168 6.61684 21.3358 5.83579L18.1642 2.66422C17.3831 1.88317 16.1168 1.88317 15.3358 2.66422L13.9571 4.0429C13.5666 4.43342 13.5666 5.06659 13.9571 5.45711Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    }), (0, r.jsx)("path", {
                        d: "M2.11104 20.1559L2.8382 15.9383C2.94347 15.3278 3.23518 14.7648 3.67326 14.3267L11.5429 6.45711C11.9334 6.06658 12.5666 6.06659 12.9571 6.45711L17.5429 11.0429C17.9334 11.4334 17.9334 12.0666 17.5429 12.4571L9.67326 20.3267C9.23518 20.7648 8.6722 21.0565 8.06166 21.1618L3.84409 21.889C2.82284 22.065 1.93496 21.1771 2.11104 20.1559Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9024 4.68342 12.9024 5.31658 13.2929 5.70711L14.5858 7H13C9.68629 7 7 9.68629 7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 10.7909 10.7909 9 13 9H14.5858L13.2929 10.2929C12.9024 10.6834 12.9024 11.3166 13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071L17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    }), (0, r.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.558 1.09366C10.1049 1.153 9.85283 1.62553 9.92194 2.07732C10.1003 3.24346 9.73459 4.27926 8.93869 4.60893C8.14294 4.93854 7.15214 4.46496 6.45371 3.51461C6.1831 3.1464 5.67085 2.99054 5.30837 3.26877C4.54272 3.85645 3.85659 4.54257 3.2689 5.3082C2.99066 5.67069 3.14651 6.18296 3.51474 6.45356C4.46513 7.152 4.93874 8.14283 4.60912 8.93859C4.27944 9.73453 3.24356 10.1002 2.07736 9.92181C1.62557 9.85269 1.15302 10.1047 1.09368 10.5579C1.03188 11.0298 1 11.5112 1 12C1 12.4888 1.03188 12.9702 1.09369 13.4421C1.15303 13.8953 1.62558 14.1473 2.07736 14.0782C3.24356 13.8998 4.27944 14.2655 4.60913 15.0614C4.93874 15.8572 4.46514 16.848 3.51475 17.5465C3.14653 17.8171 2.99067 18.3293 3.26891 18.6918C3.85661 19.4575 4.54276 20.1436 5.30842 20.7313C5.67091 21.0095 6.18315 20.8536 6.45376 20.4854C7.15219 19.5351 8.143 19.0615 8.93875 19.3911C9.73465 19.7208 10.1004 20.7566 9.922 21.9227C9.85289 22.3745 10.1049 22.847 10.5581 22.9063C11.03 22.9681 11.5113 23 12 23C12.4889 23 12.9703 22.9681 13.4423 22.9063C13.8955 22.8469 14.1475 22.3744 14.0784 21.9226C13.9 20.7565 14.2657 19.7207 15.0616 19.391C15.8574 19.0614 16.8481 19.5349 17.5465 20.4852C17.8172 20.8534 18.3294 21.0093 18.6919 20.731C19.4574 20.1434 20.1435 19.4573 20.7311 18.6918C21.0094 18.3293 20.8535 17.817 20.4853 17.5464C19.5349 16.848 19.0613 15.8572 19.3909 15.0614C19.7206 14.2655 20.7565 13.8998 21.9226 14.0782C22.3744 14.1473 22.847 13.8953 22.9063 13.4421C22.9681 12.9702 23 12.4888 23 12C23 11.5112 22.9681 11.0299 22.9063 10.5579C22.847 10.1048 22.3744 9.85271 21.9227 9.92183C20.7565 10.1002 19.7206 9.73451 19.391 8.9386C19.0614 8.14284 19.5349 7.15204 20.4853 6.4536C20.8535 6.183 21.0094 5.67074 20.7311 5.30825C20.1435 4.54271 19.4575 3.85666 18.692 3.26903C18.3295 2.99079 17.8172 3.14662 17.5466 3.51482C16.8482 4.46508 15.8574 4.9386 15.0617 4.60901C14.2658 4.27933 13.9001 3.24352 14.0785 2.07737C14.1476 1.6256 13.8956 1.15308 13.4424 1.09372C12.9704 1.0319 12.4889 1 12 1C11.5112 1 11.0299 1.03188 10.558 1.09366ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM17.7863 5.37403C17.8815 5.20737 17.7612 5 17.5692 5H14.4352C14.1661 5 13.9176 5.14421 13.7841 5.3779L6.21373 18.626C6.1185 18.7926 6.23884 19 6.43079 19H9.56476C9.8339 19 10.0824 18.8558 10.2159 18.6221L17.7863 5.37403Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("599110");
            let l = () => r.useContext(i.AnalyticsContext)
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i(e, t) {
                let n = r.useRef(e);
                return r.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("37983");
            var r = n("884691"),
                i = n("917351"),
                l = n.n(i);
            n("233736");
            var u = n("666020");

            function a(e) {
                r.useEffect(() => (l.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        547356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BenefitsConfirmationLite: function() {
                    return s
                },
                PurchaseConfirmationLite: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("724038"),
                u = n("782340"),
                a = n("22019");
            let s = e => {
                let {
                    onConfirm: t,
                    onCancel: n,
                    title: s,
                    subtitle: o,
                    confirmCta: c,
                    showOpenDiscord: d = !0
                } = e;
                return (0, r.jsxs)("div", {
                    className: a.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: a.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: s
                    }), null != o ? (0, r.jsx)(i.Text, {
                        className: a.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: o
                    }) : null, (0, r.jsxs)("div", {
                        className: a.buttonContainer,
                        children: [d && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: u.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: c
                        }), null != n && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: n,
                            children: u.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                        })]
                    })]
                })
            };

            function o(e) {
                let {
                    onConfirm: t,
                    listing: n,
                    subscription: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: a.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: a.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: u.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: n.name
                        })
                    }), (0, r.jsx)(i.Text, {
                        className: a.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: u.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == s ? void 0 : s.currentPeriodEnd
                        })
                    }), (0, r.jsxs)("div", {
                        className: a.buttonContainer,
                        children: [(0, r.jsx)(i.Button, {
                            className: a.openDiscordButton,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: u.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            className: a.doneButton,
                            look: i.Button.Looks.BLANK,
                            onClick: t,
                            children: u.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                        })]
                    })]
                })
            }
        },
        724038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("597755"),
                i = n.n(r),
                l = n("742270"),
                u = n("815157"),
                a = n("391679"),
                s = n("327037"),
                o = n("393414"),
                c = n("271938"),
                d = n("476108"),
                f = n("599110"),
                I = n("65300"),
                E = n("49111");
            async function _(e) {
                var t, n;
                let r = null === (t = i.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === r || "iOS" === r) {
                    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
                        r = (0, u.generateAttemptId)();
                    if (null == t && c.default.isAuthenticated()) try {
                        await (0, s.fetchCurrentUser)(), t = c.default.getId()
                    } catch {}
                    return (0, u.default)((0, l.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: r
                    })
                }
                return "discord://"
            }
            async function T(e) {
                let t = await _(e),
                    n = (0, u.parseDynamicLink)(t);
                null != n && f.default.track(E.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, a.maybeExtractId)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                }), I.default.launch(t, e => {
                    !e && (0, o.replaceWith)(d.default.fallbackRoute)
                })
            }
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return p
                },
                BlockedPaymentsContentModal: function() {
                    return m
                },
                BlockedPaymentsWarning: function() {
                    return A
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("669491"),
                a = n("819855"),
                s = n("77078"),
                o = n("841098"),
                c = n("145131"),
                d = n("423487"),
                f = n("701909"),
                I = n("619935"),
                E = n("49111"),
                _ = n("782340"),
                T = n("653842"),
                S = n("584503"),
                C = n("45656");

            function N(e) {
                let {
                    className: t
                } = e, n = (0, o.default)(), i = (0, a.isThemeDark)(n) ? S : C;
                return (0, r.jsxs)("div", {
                    className: l(T.container, t),
                    children: [(0, r.jsx)(s.Heading, {
                        className: T.header,
                        variant: "heading-xl/semibold",
                        children: _.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(s.Text, {
                        className: T.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: _.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: _.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, r.jsx)("img", {
                        src: i,
                        className: T.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function p() {
                return (0, r.jsx)(N, {
                    className: T.settings
                })
            }

            function m(e) {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.ModalHeader, {
                        className: T.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, r.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, r.jsx)(s.ModalContent, {
                        className: T.blockedPaymentsModalContent,
                        children: (0, r.jsx)(N, {
                            className: T.modal
                        })
                    })]
                })
            }

            function A(e) {
                let {
                    className: t
                } = e, n = (0, I.useBlockedPaymentsConfig)();
                return n ? (0, r.jsxs)(s.Card, {
                    className: l(T.blockedPaymentsWarning, t),
                    type: s.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(d.default, {
                        className: T.blockedPaymentsWarningIcon,
                        color: u.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: _.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("516555"),
                u = n("65597"),
                a = n("206230"),
                s = n("49111");
            let o = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                c = i.createContext(o);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: s,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: I
                } = e, E = (0, l.useConfettiCannon)(n, s), _ = (0, u.default)([a.default], () => a.default.useReducedMotion), T = i.useMemo(() => _ ? o : {
                    confettiCanvas: n,
                    cannon: E,
                    createConfetti: (e, t) => E.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, r) => E.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, r),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return E.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return E.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, r, i)
                    },
                    addClickListener: f,
                    removeClickListener: I
                }, [f, d, E, n, _, I]);
                return (0, r.jsx)(c.Provider, {
                    value: T,
                    children: t
                })
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return l
                },
                COMMON_CONFETTI_COLORS: function() {
                    return u
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return a
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return s
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var r = n("516555"),
                i = n("839491");
            let l = i,
                u = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                a = [n("890450"), l, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                s = 28,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: s
                    }
                },
                c = new r.Environment
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");
            let i = r.createContext(void 0);
            var l = i
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return E
                },
                canGuildUseRoleIcons: function() {
                    return _
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                l = n("315102"),
                u = n("773336"),
                a = n("49111");
            let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, u.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: I(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
                I = (e, t) => {
                    let {
                        id: n,
                        icon: r
                    } = e;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let u = l.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != t && (d = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(r, ".").concat(u, "?").concat(d).concat(f) : "".concat(o).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                E = e => e.startsWith(s) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                _ = (e, t) => {
                    var n;
                    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || e.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return E
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return C
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return m
                },
                setDisableSubmit: function() {
                    return A
                }
            }), n("70102");
            var r = n("872717"),
                i = n("913144"),
                l = n("54239"),
                u = n("49111");
            async function a(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await r.default.patch({
                        url: u.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function s(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function d() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function E(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let r, i, l, u, a, s, o, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var f = n("446674"),
                I = n("913144"),
                E = n("49111");
            let _ = E.FormStates.CLOSED,
                T = {},
                S = !1;

            function C() {
                _ = E.FormStates.CLOSED, T = {}, o = null, c = void 0, d = []
            }

            function N() {
                p(), m(), T = {}, _ = E.FormStates.OPEN
            }

            function p() {
                r = void 0, a = void 0
            }

            function m() {
                i = void 0, l = void 0, u = void 0, s = void 0
            }
            class A extends f.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== r || void 0 !== i || void 0 !== l || void 0 !== u || void 0 !== a || void 0 !== s
                }
                getPendingAvatar() {
                    return r
                }
                getPendingBanner() {
                    return i
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return a
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: r,
                        pendingBanner: i,
                        pendingBio: l,
                        pendingPronouns: u,
                        pendingNickname: a,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            A.displayName = "GuildIdentitySettingsStore";
            var L = new A(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, _ = E.FormStates.OPEN, T = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: C,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), C()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = E.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== E.FormStates.SUBMITTING) return !1;
                    _ = E.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = E.FormStates.OPEN, T = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: m,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return s
                }
            });
            var r = n("913144"),
                i = n("599110"),
                l = n("49111");

            function u(e) {
                i.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function s(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                l = n("197881"),
                u = n("492397");
            let a = new Set,
                s = {};
            class o extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (s = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && s[e];
                    return !(u.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return s[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: s
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new o(i.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    s[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == s[t]) return !1;
                    delete s[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var i = n("597517");
            n.es(i, t);
            var l = n("269596")
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return u
                },
                addQueued: function() {
                    return a
                },
                setFailed: function() {
                    return s
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("49111");

            function u(e, t, n, r) {
                i.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function a(e, t) {
                let {
                    data: n,
                    messageId: r,
                    onCreate: l,
                    onSuccess: u,
                    onFailure: a
                } = t;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: l,
                    onSuccess: u,
                    onFailure: a
                })
            }

            function s(e, t, n) {
                i.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function o(e, t) {
                let n = await r.default.get({
                    url: l.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let r = n.body;
                    i.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: r
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var l = n("446674"),
                u = n("913144"),
                a = n("798609"),
                s = n("42203"),
                o = n("3765");
            let c = {},
                d = {},
                f = {};

            function I(e) {
                delete c[e];
                let t = f[e];
                null != t && delete d[t], delete f[e]
            }
            class E extends l.default.Store {
                getInteraction(e) {
                    let t = d[e.id];
                    return null != t ? c[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(c)) {
                        let r = f[t];
                        null != r && (e[r] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = d[e];
                    return (null == n || null == c[n] || c[n].state === o.InteractionState.FAILED) && (null == c[t] || c[t].state === o.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return i
                }
                getIFrameModalKey() {
                    return r
                }
            }
            E.displayName = "InteractionStore";
            var _ = new E(u.default, {
                LOGOUT: function() {
                    c = {}, d = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: r,
                        onCreate: i,
                        onCancel: l,
                        onSuccess: u,
                        onFailure: a
                    } = e;
                    null != n && (d[n] = t, f[t] = n), c[t] = {
                        state: o.InteractionState.QUEUED,
                        data: r,
                        onCreate: i,
                        onCancel: l,
                        onSuccess: u,
                        onFailure: a
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: r
                    } = e;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i || i.state !== o.InteractionState.QUEUED) return !1;
                    i.state = o.InteractionState.CREATED, null === (t = i.onCreate) || void 0 === t || t.call(i, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r), I(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: r,
                        errorMessage: i
                    } = e;
                    if (null == n) return !1;
                    let l = c[n];
                    if (null == l) return !1;
                    null === (t = l.onFailure) || void 0 === t || t.call(l, r, i), l.data.interactionType === a.InteractionTypes.APPLICATION_COMMAND ? I(n) : c[n] = {
                        ...l,
                        state: o.InteractionState.FAILED,
                        errorCode: r,
                        errorMessage: i
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = c[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), I(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(c)) t.state === o.InteractionState.FAILED && I(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    i = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    r = void 0, i = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    r = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.QUEUED = 0] = "QUEUED", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return S
                },
                executeMessageComponentInteraction: function() {
                    return C
                },
                handleInteractionResponse: function() {
                    return p
                },
                InteractionStatusViewState: function() {
                    return r
                },
                getInteractionStatusViewState: function() {
                    return m
                },
                canRetryInteractionData: function() {
                    return A
                }
            }), n("222007");
            var r, i, l = n("249654"),
                u = n("872717"),
                a = n("913144"),
                s = n("819689"),
                o = n("798609"),
                c = n("263024"),
                d = n("271938"),
                f = n("274800"),
                I = n("809810"),
                E = n("3765"),
                _ = n("606981"),
                T = n("49111");

            function S(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : l.default.extractTimestamp(e) + 9e5
            }
            let C = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: r,
                    customId: i,
                    indices: a,
                    applicationId: s,
                    channelId: E,
                    guildId: _,
                    localState: S
                } = e, C = l.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, C)) return;
                await c.default.unarchiveThreadIfNecessary(E), (0, f.addQueued)(C, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: a
                    },
                    onFailure: (e, t) => N(E, e, t)
                }), null != S && (0, f.queueInteractionComponentState)(n, C, S, a);
                let m = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: C,
                    guild_id: _,
                    channel_id: E,
                    message_flags: r,
                    message_id: n,
                    application_id: s,
                    session_id: d.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: i,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === o.ComponentType.STRING_SELECT || e.type === o.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(S)
                    }
                };
                await u.default.post({
                    url: T.Endpoints.INTERACTIONS,
                    body: m,
                    timeout: 3e3
                }, e => {
                    p(C, E, _, e)
                })
            }, N = (e, t, n) => {
                null == n && null != t && s.default.sendClydeError(e, t)
            }, p = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var i;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === T.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let i = (0, _.getFirstSkemaError)(r.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && a.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, f.setFailed)(e, void 0, r.body.message);
                            return
                        }(0, f.setFailed)(e, null === (i = r.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = r || (r = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let m = (e, t) => {
                var n;
                let r = null == t ? void 0 : t.state,
                    i = e.state === T.MessageStates.SENT && S(e.id) < Date.now();
                let u = e.state === T.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : l.default.extractTimestamp(n) + 3e3) < Date.now(),
                    a = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    s = e.isCommandType();
                if (a && r === E.InteractionState.QUEUED || s && e.state === T.MessageStates.SENDING && null != t) return 0;
                if (a && r === E.InteractionState.CREATED || e.hasFlag(T.MessageFlags.LOADING) && !i) return 1;
                if (null != e.interaction && e.hasFlag(T.MessageFlags.LOADING) && i) return 3;
                else if (null != e.interaction && !e.hasFlag(T.MessageFlags.LOADING) && u) return 3;
                else if (s && e.state === T.MessageStates.SEND_FAILED) return 2
            };

            function A(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return i
                }
            }), n("222007");
            let r = "_errors";

            function i(e) {
                return function e(t, n) {
                    let i = t[r];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, l] of Object.entries(t))
                        if (i !== r && null != l && "object" == typeof l) return e(l, null != n ? n : i);
                    return null
                }(e, void 0)
            }
        },
        559362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("446674"),
                u = n("834897"),
                a = n("90592"),
                s = n("333955"),
                o = n("547356"),
                c = n("305961"),
                d = n("642906"),
                f = n("85336"),
                I = n("159149"),
                E = n("650484"),
                _ = n("425480"),
                T = n("782340");

            function S(e) {
                let {
                    application: t,
                    listing: n,
                    handleStepChange: S,
                    handleClose: C
                } = e, {
                    subscriptionMetadataRequest: N
                } = (0, d.usePaymentContext)(), p = (0, u.default)(_.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, a.isApplicationUserSubscription)(n.sku_flags), A = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(null == N ? void 0 : N.guild_id)), L = i.useCallback(() => S(f.Step.REVIEW), [S]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.PaymentPortalBody, {
                        children: p ? (0, r.jsx)(o.BenefitsConfirmationLite, {
                            confirmCta: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                            onConfirm: L,
                            onCancel: C,
                            title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
                                guildName: null == A ? void 0 : A.name
                            }),
                            showOpenDiscord: !1
                        }) : (0, r.jsx)(s.BenefitsConfirmation, {
                            listing: n,
                            application: t,
                            title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                            description: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                                applicationName: t.name
                            }) : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                        })
                    }), !p && (0, r.jsx)(E.PaymentPortalFooter, {
                        children: (0, r.jsx)(I.default, {
                            onBack: C,
                            backText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                            onPrimary: L,
                            primaryCTA: I.CTAType.CONTINUE,
                            primaryText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
                        })
                    })]
                })
            }
        },
        671672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                u = n.n(l),
                a = n("252438"),
                s = n("834897"),
                o = n("206230"),
                c = n("90592"),
                d = n("333955"),
                f = n("547356"),
                I = n("526887"),
                E = n("642906"),
                _ = n("85336"),
                T = n("159149"),
                S = n("650484"),
                C = n("367767"),
                N = n("425480"),
                p = n("782340");

            function m(e) {
                let t, n, {
                        showBenefits: l,
                        application: m,
                        listing: A,
                        handleClose: L,
                        onSubscriptionConfirmation: h
                    } = e,
                    {
                        selectedPlan: P,
                        selectedSkuId: O,
                        step: g,
                        updatedSubscription: R,
                        readySlideId: M
                    } = (0, E.usePaymentContext)();
                u(null != P, "Expected plan to selected"), u(null != O, "Expected selectedSkuId"), u(null != g, "Step should be set");
                let v = (0, s.default)(N.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
                    {
                        createMultipleConfettiAt: U
                    } = i.useContext(I.ConfettiCannonContext),
                    D = () => {
                        L(), null == h || h()
                    },
                    y = M === _.Step.CONFIRM,
                    x = (0, c.isApplicationUserSubscription)(A.sku_flags),
                    B = i.useMemo(() => {
                        let e = 0,
                            t = 0;
                        for (let n of A.sku_benefits.benefits) n.ref_type === a.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === a.SKUBenefitTypes.INTANGIBLE && (t += 1);
                        let n = [];
                        return 0 !== e && n.push(p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
                            commandCount: e
                        })), 0 !== t && n.push(p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
                            benefitCount: t
                        })), n
                    }, [A]);
                return l ? v ? t = (0, r.jsx)(f.BenefitsConfirmationLite, {
                    title: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
                        tierName: A.name
                    }),
                    subtitle: B.length > 0 ? p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
                        benefits: new Intl.ListFormat(p.default.getLocale()).format(B)
                    }) : null,
                    onConfirm: D,
                    confirmCta: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                }) : (t = (0, r.jsx)(d.BenefitsConfirmation, {
                    listing: A,
                    application: m,
                    title: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
                        tier: A.name
                    }),
                    subtitle: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                    description: x ? p.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        applicationName: null == m ? void 0 : m.name
                    }) : p.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        tier: A.name
                    })
                }), n = (0, r.jsx)(T.default, {
                    onPrimary: D,
                    primaryCTA: T.CTAType.CONTINUE,
                    primaryText: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })) : t = v ? (0, r.jsx)(f.PurchaseConfirmationLite, {
                    listing: A,
                    onConfirm: D,
                    subscription: R
                }) : (0, r.jsx)(d.PurchaseConfirmation, {
                    listing: A,
                    onConfirm: D,
                    subscription: R
                }), i.useEffect(() => {
                    o.default.useReducedMotion && y && U(window.innerWidth / 2, window.innerHeight / 2)
                }, [U, y]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(S.PaymentPortalBody, {
                        children: [(0, r.jsx)(C.default, {}), t]
                    }), null != n && (0, r.jsx)(S.PaymentPortalFooter, {
                        children: n
                    })]
                })
            }
        },
        590749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getApplicationSubscriptionPaymentSteps: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("85336"),
                l = n("262683"),
                u = n("946359"),
                a = n("724269"),
                s = n("559362"),
                o = n("671672"),
                c = n("101432"),
                d = n("458985"),
                f = n("782340");

            function I(e) {
                let {
                    guildId: t,
                    eligibleApplicationSubscriptionGuilds: n,
                    application: I,
                    listing: E,
                    showBenefitsFirst: _
                } = e, T = [{
                    key: null,
                    renderStep: e => (0, r.jsx)(c.default, {
                        initialStep: _ ? i.Step.BENEFITS : i.Step.REVIEW,
                        guildId: t,
                        ...e
                    })
                }, {
                    key: i.Step.BENEFITS,
                    renderStep: e => (0, r.jsx)(s.default, {
                        application: I,
                        listing: E,
                        ...e
                    }),
                    options: {
                        useBreadcrumbLabel: () => f.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
                    }
                }, {
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(l.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM]
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                }, {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(a.default, {})
                }, {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(u.default, {})
                }, {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(d.default, {
                        application: I,
                        backButtonEligible: !!_ || void 0,
                        prevStep: _ ? i.Step.BENEFITS : void 0,
                        listing: E,
                        showGuildPicker: null == t,
                        eligibleApplicationSubscriptionGuilds: n,
                        ...e
                    }),
                    options: {
                        renderHeader: !0,
                        useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
                    }
                }, {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(o.default, {
                        application: I,
                        listing: E,
                        showBenefits: !_,
                        ...e
                    })
                }];
                return T
            }
        },
        101432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("245187"),
                u = n("10514"),
                a = n("599110"),
                s = n("719923"),
                o = n("635357"),
                c = n("642906"),
                d = n("628738"),
                f = n("49111");

            function I(e) {
                let {
                    initialStep: t,
                    initialPlanId: n,
                    guildId: I,
                    setAnalyticsData: E,
                    handleClose: _
                } = e, {
                    blockedPayments: T,
                    setStep: S,
                    hasFetchedSubscriptions: C,
                    hasFetchedSubscriptionPlans: N,
                    currencyLoading: p,
                    selectedSkuId: m,
                    setSelectedSkuId: A,
                    setSelectedPlanId: L,
                    priceOptions: h,
                    setSubscriptionMetadataRequest: P
                } = (0, c.usePaymentContext)(), {
                    isGift: O
                } = (0, o.useGiftContext)(), [g, R] = i.useState(!C || !N || p);
                return (i.useEffect(() => {
                    R(!C || !N || p)
                }, [p, N, C]), i.useEffect(() => {
                    null != I && P({
                        guild_id: I
                    })
                }, [I, P]), i.useEffect(() => {
                    L(n);
                    let e = null != n ? u.default.get(n) : null;
                    !g && !T && (E(t => {
                        let n = null != e ? (0, s.getPrice)(e.id, !1, O, h) : void 0,
                            r = {
                                ...t,
                                subscription_plan_id: null == e ? void 0 : e.id,
                                price: null == n ? void 0 : n.amount,
                                regular_price: null == e ? void 0 : e.price,
                                currency: h.currency
                            };
                        return a.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, r), r
                    }), null != e && (A(null == e ? void 0 : e.skuId), S(t)))
                }, [T, n, O, g, h, m, E, L, A, S, t]), g) ? (0, r.jsx)(d.default, {}) : T ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: _
                }) : null
            }
        },
        458985: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                u = n.n(l),
                a = n("77078"),
                s = n("612039"),
                o = n("90592"),
                c = n("527866"),
                d = n("642906"),
                f = n("85336"),
                I = n("286350"),
                E = n("153727"),
                _ = n("39065"),
                T = n("628738"),
                S = n("650484"),
                C = n("367767"),
                N = n("215774"),
                p = n("782340"),
                m = n("945598");

            function A(e) {
                let {
                    application: t,
                    backButtonEligible: n,
                    prevStep: l,
                    showGuildPicker: A,
                    handleStepChange: L,
                    trialFooterMessageOverride: h,
                    reviewWarningMessage: P,
                    planGroup: O,
                    openInvoiceId: g,
                    analyticsData: R,
                    analyticsLocation: M,
                    eligibleApplicationSubscriptionGuilds: v,
                    listing: U
                } = e, {
                    activeSubscription: D,
                    setUpdatedSubscription: y,
                    contextMetadata: x,
                    currencies: B,
                    paymentSources: G,
                    priceOptions: b,
                    purchaseError: F,
                    purchaseTokenAuthState: H,
                    selectedPlan: w,
                    setCurrency: j,
                    setPaymentSourceId: V,
                    setPurchaseState: k,
                    setPurchaseError: Y,
                    step: K,
                    purchaseState: Z,
                    subscriptionMetadataRequest: z,
                    setSubscriptionMetadataRequest: W,
                    setHasAcceptedTerms: Q
                } = (0, d.usePaymentContext)();
                u(null != w, "Expected plan to be selected"), u(null != K, "Step should be set");
                let X = i.useRef(null),
                    [q, J] = (0, s.default)(!1, 500),
                    [$, ee] = i.useState(null == z ? void 0 : z.guild_id),
                    et = (0, o.isApplicationUserSubscription)(U.sku_flags);
                i.useEffect(() => {
                    null != F && null != X.current && X.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [F]);
                let en = i.useCallback(e => {
                        y(e), L(f.Step.CONFIRM)
                    }, [L, y]),
                    er = i.useCallback(e => {
                        ee(e), W({
                            ...z,
                            guild_id: e
                        })
                    }, [ee, W, z]),
                    ei = i.useRef(null);
                return Z === I.PurchaseState.PURCHASING ? (0, r.jsx)(T.default, {}) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.default, {
                        className: m.breadcrumbs
                    }), (0, r.jsxs)(S.PaymentPortalBody, {
                        children: [(0, r.jsx)(C.default, {}), et && (0, r.jsxs)("div", {
                            className: m.userSubscriptionDetailsContainer,
                            children: [(0, r.jsx)(a.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: p.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: p.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
                                    applicationName: t.name
                                })
                            })]
                        }), A && !et && (0, r.jsxs)("div", {
                            className: m.guildPickerContainer,
                            children: [(0, r.jsx)(a.FormTitle, {
                                tag: a.FormTitleTags.H5,
                                children: p.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                            }), (0, r.jsx)(a.FormText, {
                                type: a.FormText.Types.DESCRIPTION,
                                className: m.guildPickerDescription,
                                children: p.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                            }), (0, r.jsx)(N.GuildPickerDropdown, {
                                selectedGuildId: $,
                                onGuildChange: er,
                                eligibleApplicationSubscriptionGuilds: v
                            })]
                        }), (0, r.jsx)(c.default, {
                            selectedPlanId: w.id,
                            paymentSources: G,
                            onPaymentSourceChange: e => V(null != e ? e.id : null),
                            priceOptions: b,
                            currencies: B,
                            onCurrencyChange: e => j(e),
                            handlePaymentSourceAdd: () => L(f.Step.ADD_PAYMENT_STEPS),
                            setHasAcceptedTerms: Q,
                            legalTermsNodeRef: ei,
                            hasLegalTermsFlash: q,
                            trialFooterMessageOverride: h,
                            reviewWarningMessage: P,
                            metadata: A || et ? void 0 : z,
                            purchaseState: Z,
                            hideSubscriptionDetails: !0
                        })]
                    }), (0, r.jsx)(S.PaymentPortalFooter, {
                        children: (0, r.jsx)(_.default, {
                            premiumSubscription: null != D ? D : null,
                            setPurchaseState: k,
                            onBack: () => null != l && L(l),
                            onNext: en,
                            onPurchaseError: e => Y(e),
                            legalTermsNodeRef: ei,
                            flashLegalTerms: () => J(!0),
                            analyticsLocation: M,
                            baseAnalyticsData: R,
                            flowStartTime: x.startTime,
                            planGroup: O,
                            purchaseTokenAuthState: H,
                            openInvoiceId: g,
                            metadata: et ? void 0 : z,
                            backButtonEligible: n,
                            invoiceError: null,
                            disablePurchase: (null == z ? void 0 : z.guild_id) == null && !et
                        })
                    })]
                })
            }
        },
        215774: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildPickerDropdown: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("782340"),
                u = n("336859");

            function a(e) {
                let {
                    selectedGuildId: t,
                    onGuildChange: n,
                    eligibleApplicationSubscriptionGuilds: a
                } = e, s = a.map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, r.jsx)(i.SearchableSelect, {
                    className: u.select,
                    maxVisibleItems: 5,
                    value: t,
                    placeholder: l.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
                    options: s,
                    onChange: e => {
                        n(e)
                    }
                })
            }
        },
        628738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("840339");

            function u() {
                return (0, r.jsx)(i.Spinner, {
                    className: l.spinner
                })
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return l
                },
                planSwitchLoadingShowSpinner: function() {
                    return u
                },
                getDefaultPlanOneStepCheckout: function() {
                    return a
                }
            });
            var r = n("719923"),
                i = n("646718");

            function l(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: r,
                    startedPaymentFlowWithPaymentSources: l
                } = e;
                return !t && !n && null != r && i.ACTIVE_PREMIUM_SKUS.includes(r) && l
            }

            function u(e, t, n) {
                let r = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (r = !0)
                }
                return r
            }

            function a(e, t, n) {
                let l = null != t ? (0, r.getPremiumPlanItem)(t) : null,
                    u = i.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    a = null != n ? n : u;
                return null != l ? a === l.planId && a === i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? a = i.PREMIUM_SKU_TO_YEARLY_PLAN[e] : a === l.planId && a === i.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? a = i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (l.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || l.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && a === i.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (a = i.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : a === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (a = i.SubscriptionPlans.PREMIUM_MONTH_TIER_1), a
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("65597"),
                l = n("880731");

            function u(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, u = (0, i.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return u ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("65597"),
                l = n("526887"),
                u = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(l.ConfettiCannonContext), t = (0, i.default)([u.default], () => u.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = r.useMemo(() => ({
                    fire: (r, i, l) => {
                        var u, a;
                        let s = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(s);
                        e(r, i, o, (null !== (u = null == l ? void 0 : l.count) && void 0 !== u ? u : s.confettiCount) * (null !== (a = null == l ? void 0 : l.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return T
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var r = n("884691"),
                i = n("65597"),
                l = n("872717"),
                u = n("913144"),
                a = n("775433"),
                s = n("697218"),
                o = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                I = n("49111");
            let E = "nonSubscriber";
            async function _() {
                try {
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: I.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = d.default.shouldFetchPremiumLikelihood(), i = s.default.getCurrentUser();
                C(i, r, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), u = (0, i.default)([s.default], () => s.default.getCurrentUser());
                r.useEffect(() => {
                    C(u, l, t, n)
                }, [u, l, t, n])
            }

            function C(e, t, n, r) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), r && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("446674"),
                i = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                u = l;
            class a extends r.default.Store {
                initialize() {
                    u = l
                }
                getState() {
                    return u
                }
                shouldFetchPremiumLikelihood() {
                    return !u.isFetching && !u.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var s = new a(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    u.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    u.premiumLikelihood = t, u.fetched = !0, u.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    u.isFetching = !1
                },
                LOGOUT: function() {
                    u.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = i
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                i = n("884691"),
                l = n("446674"),
                u = n("206230"),
                a = n("491605"),
                s = n("210721"),
                o = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, I = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), [E, _] = i.useState(d), T = i.useRef((0, s.getGiftAnimationData)(t, E)), [S, C] = i.useState(null == f), [N, p] = i.useState(!1), [m, A] = i.useState(-1), L = () => {
                    T.current = (0, s.getGiftAnimationData)(t, E), A(e => e + 1)
                }, h = () => {
                    C(!1), p(!0), A(-1), _(d)
                };
                i.useEffect(() => {
                    null == f && _(d)
                }, [f, d]), i.useEffect(() => {
                    if (null != f && m >= 0) {
                        h();
                        return
                    }
                    L()
                }, [t, f]), i.useEffect(() => {
                    (!N || null == f) && L()
                }, [E]), i.useEffect(() => {
                    N && (C(null == f), p(!1), L())
                }, [N]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(a.default, {
                    importData: T.current,
                    shouldAnimate: !I && c,
                    className: n,
                    versionKey: m,
                    onComplete: null != f ? () => {
                        null != f && (_(f), C(!0))
                    } : void 0,
                    loop: S
                })
            }
        },
        661128: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return I
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("404118"),
                u = n("10514"),
                a = n("437712"),
                s = n("719923"),
                o = n("843455"),
                c = n("782340");

            function d(e, t, n) {
                r.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (l.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, s.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function I(e, t) {
                let n = (0, i.useStateFromStores)([u.default], () => null != e ? u.default.get(e) : null),
                    l = (0, i.useStateFromStores)([a.default], () => {
                        var e;
                        return null != n && null !== (e = a.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    o = r.useMemo(() => Array.from(l).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [l]),
                    c = !t && null != n && null != o && o.length >= s.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: o
                }
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("79112"),
                l = n("685665"),
                u = n("929423");
            n("424562");
            var a = n("49111"),
                s = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: f
                } = (0, l.default)(), I = (0, r.useCallback)(() => {
                    null != t && (0, u.initGuildIdentitySettings)(t, null != c ? c : f), i.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, o, c, d, f]);
                return I
            }
        },
        506885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("913144"),
                i = n("327037"),
                l = n("462274"),
                u = n("535013"),
                a = n("42203"),
                s = n("26989"),
                o = n("713135"),
                c = n("386714");
            async function d(e, t) {
                var n, d, f;
                let I, {
                    withMutualGuilds: E = !1,
                    withMutualFriendsCount: _ = !1,
                    friendToken: T,
                    preloadUserBanner: S = !0,
                    dispatchWait: C = !1,
                    guildId: N,
                    channelId: p
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("" === e) return;
                null != t && (0, l.maybeFetchColors)(t), null != N && !E && (E = !0), null != N && (I = null !== (d = null === (n = (0, u.getVisibleConnectionsRole)({
                    guildMember: s.default.getMember(N, e),
                    channel: a.default.getChannel(p)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
                let m = o.default.getUserProfile(e),
                    A = o.default.getMutualGuilds(e),
                    L = o.default.getMutualFriendsCount(e),
                    h = o.default.isFetchingProfile(e),
                    P = (null == m ? void 0 : m.profileFetchFailed) || !h && (!Array.isArray(A) && E || null == L && _),
                    O = S ? c.default : void 0,
                    g = !1;
                if (null != N) {
                    let t = o.default.getGuildMemberProfile(e, N);
                    g = null == t
                }!(!P && !g && (h || Date.now() - (null !== (f = null == m ? void 0 : m.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (C ? await r.default.wait(() => (0, i.fetchProfile)(e, {
                    withMutualGuilds: E,
                    withMutualFriendsCount: _,
                    friendToken: T,
                    guildId: N,
                    connectionsRoleId: I
                }, O)) : await (0, i.fetchProfile)(e, {
                    withMutualGuilds: E,
                    withMutualFriendsCount: _,
                    friendToken: T,
                    guildId: N,
                    connectionsRoleId: I
                }, O))
            }
        },
        386714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("845579"),
                i = n("217513");

            function l(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, i.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let l = r.GifAutoPlay.getSetting(),
                    u = n.getBannerURL({
                        canAnimate: l,
                        size: 480
                    });
                if (null == u) return;
                let a = new Image;
                a.src = u
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                i = n("95410"),
                l = n("913144"),
                u = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                s = a,
                o = "LAST_VIEWED_PATH";
            class c extends r.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    s = null != e ? e : a
                }
                get defaultRoute() {
                    return u.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = s.lastViewedNonVoicePath) && void 0 !== e ? e : u.Routes.ME
                }
                get fallbackRoute() {
                    return u.Routes.ME
                }
                getState() {
                    return s
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = i.default.get(o, null);
                return i.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(l.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return s.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return s.lastViewedNonVoicePath = t, !0
                }
            })
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("77078"),
                u = n("393414"),
                a = n("49111"),
                s = i.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: s,
                        onClick: o,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, I = i.useCallback(e => {
                        !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, u.transitionTo)(n), null == o || o()), null == c || c(e))
                    }, [n, c, o]), E = i.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, u.transitionTo)(n), null == o || o())
                    }, [n, o]), _ = (0, r.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: E,
                        onKeyPress: I,
                        ...f,
                        children: s
                    });
                    return (0, r.jsx)(l.FocusRing, {
                        ...d,
                        children: _
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return a.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("79798"),
                a = n("988268"),
                s = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: i,
                        nameColor: a,
                        className: o,
                        botType: c,
                        usernameClass: d,
                        discriminatorClass: f,
                        botClass: I,
                        botVerified: E = !1,
                        style: _,
                        useRemSizes: T = !1,
                        usernameIcon: S
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l(o, s.nameTag),
                        style: _,
                        children: [(0, r.jsxs)("span", {
                            className: l(s.username, d),
                            style: null != a ? {
                                color: a
                            } : void 0,
                            children: [S, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != c ? (0, r.jsx)(u.default, {
                            type: c,
                            invertColor: i,
                            className: l(I, s.bot),
                            verified: E,
                            useRemSizes: T
                        }) : null]
                    })
                }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");

            function i(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, i = n ? t : 1, l = n ? 1 : t;
                return (0, r.jsx)("span", {
                    style: {
                        display: "block",
                        width: i,
                        minWidth: i,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("926001"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("197801"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, r.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, r.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("578478"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, l.ImageIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("504318"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: i
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 16
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("424823"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("31745"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        className: l,
                        foreground: u
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: u,
                            fill: i,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return C
                },
                default: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                a = n("627445"),
                s = n.n(a),
                o = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                I = n("697218"),
                E = n("368121"),
                _ = n("523096"),
                T = n("587974"),
                S = n("494101");
            let C = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function N(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class p extends i.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: i,
                        extraDetail: l
                    } = this.props, u = [], a = e.length === t ? e.length : t - 1, s = this.renderMoreUsers(a), o = 0;
                    for (; o < a && o < e.length;) {
                        var c;
                        let t = null == s && null == l && o === e.length - 1,
                            a = n(e[o], t, o);
                        u.push(t ? (0, r.jsx)("div", {
                            className: S.avatarContainer,
                            children: a
                        }, N(null !== (c = e[o]) && void 0 !== c ? c : null, o)) : (0, r.jsx)(T.default, {
                            className: S.avatarContainerMasked,
                            height: i,
                            width: i,
                            mask: T.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: a
                        }, N(e[o], o))), o++
                    }
                    return null != l ? u.push(l) : null != s && u.push(s), u
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: u,
                        users: a
                    } = this.props, s = Math.min(e, a.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(i.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > a.length) {
                                let e = n - a.length;
                                return (0, r.jsx)(i.Fragment, {
                                    children: u("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (s < a.length) {
                            let e = Math.min(a.length - s, 99);
                            return (0, r.jsx)(i.Fragment, {
                                children: u("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(E.default, {
                        foreground: S.foreground,
                        className: S.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: i,
                        showUserPopout: l,
                        useFallbackUserForPopout: a
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), _ = a && null == I.default.getUser(f);
                    return (0, r.jsx)(o.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, c.default)(E.id, E.getAvatarURL(i, 80), {
                            guildId: i
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (s(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: _ && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: u(e, S.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.SIZE_24;
                                switch (e) {
                                    case C.SIZE_16:
                                        return S.size16;
                                    case C.SIZE_24:
                                        return S.size24;
                                    case C.SIZE_32:
                                        return S.size32;
                                    case C.SIZE_56:
                                        return S.size56;
                                    default:
                                        return S.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = i.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: i,
                            guildId: l,
                            size: u
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: S.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % _.default.DEFAULT_AVATARS.length,
                                    t = _.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: S.avatar
                                })
                            }
                        }
                        let a = (0, r.jsx)("img", {
                            src: e.getAvatarURL(l, u),
                            alt: e.username,
                            className: S.avatar
                        }, e.id);
                        return i ? (0, r.jsx)(o.Clickable, {
                            className: S.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: a
                        }, e.id) : a
                    }
                }
            }
            p.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: S.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: C.SIZE_24
            };
            var m = p
        },
        252438: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                SKUBenefitTypes: function() {
                    return r
                }
            }), n("222007"), (i = r || (r = {}))[i.INTANGIBLE = 1] = "INTANGIBLE", i[i.APPLICATION_PREMIUM_COMMAND = 2] = "APPLICATION_PREMIUM_COMMAND"
        }
    }
]);