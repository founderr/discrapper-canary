(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26574"], {
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return l.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var r = n("14716"),
                l = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var r = n("884691");

            function l() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let l = {};

            function u(e) {
                let t = (0, r.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                l = n("48174");
            let u = [];

            function o(e, t) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(u);
                return o.current === u ? (n.current = e(), o.current = t) : !(0, l.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        646074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatXIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...i
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, u.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M15.2948 15.2929C15.6854 14.9024 16.3185 14.9024 16.7091 15.2929L19.002 17.5858L21.2948 15.2929C21.6854 14.9024 22.3185 14.9024 22.7091 15.2929C23.0996 15.6834 23.0996 16.3166 22.7091 16.7071L20.4162 19L22.7091 21.2929C23.0996 21.6834 23.0996 22.3166 22.7091 22.7071C22.3185 23.0976 21.6854 23.0976 21.2948 22.7071L19.002 20.4142L16.7091 22.7071C16.3185 23.0976 15.6854 23.0976 15.2948 22.7071C14.9043 22.3166 14.9043 21.6834 15.2948 21.2929L17.5877 19L15.2948 16.7071C14.9043 16.3166 14.9043 15.6834 15.2948 15.2929Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M18.6484 14.4038L18.1233 13.8787C16.9517 12.7071 15.0522 12.7071 13.8806 13.8787C12.7091 15.0503 12.7091 16.9497 13.8806 18.1213L14.4058 18.6464C14.601 18.8417 14.601 19.1583 14.4058 19.3536L13.8806 19.8787C13.4206 20.3387 13.1412 20.911 13.0424 21.5074C13.001 21.7579 12.8118 21.9709 12.5583 21.9848C12.3741 21.9949 12.1886 22 12.002 22L2.20196 22C1.3434 22 0.884005 20.9893 1.44853 20.3425L3.51543 17.9742C3.66589 17.8017 3.67897 17.5499 3.55623 17.3568C2.57201 15.8083 2.00196 13.9707 2.00196 12C2.00196 6.47715 6.47911 2 12.002 2C17.5248 2 22.002 6.47715 22.002 12C22.002 12.1867 21.9968 12.3722 21.9867 12.5564C21.9728 12.8098 21.7598 12.999 21.5093 13.0405C20.913 13.1392 20.3407 13.4186 19.8806 13.8787L19.3555 14.4038C19.1602 14.5991 18.8437 14.5991 18.6484 14.4038Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...i
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, u.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    })]
                })
            }
        },
        698210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClockWarningIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...i
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, u.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M12 23C12.0802 23 12.1352 22.9198 12.1115 22.8432C11.8911 22.1276 11.9452 21.3129 12.3956 20.5284L14.6065 16.6769C14.7799 16.3748 14.5392 15.9534 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11.3787C13 11.5113 13.0527 11.6385 13.1464 11.7322L15.7071 14.2929C15.7866 14.3724 15.9305 14.3703 15.9865 14.2728L16.3547 13.6314C17.5183 11.6043 20.4817 11.6044 21.6453 13.6314L21.9561 14.1728C22.1744 14.5532 22.7275 14.4835 22.8089 14.0525C22.9343 13.3875 23 12.7014 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.0892 14.6271C18.4841 13.9391 19.5159 13.9391 19.9108 14.6271L23.8699 21.5241C24.2509 22.1878 23.7497 23 22.959 23L15.0409 23C14.2503 23 13.7491 22.1878 14.1301 21.524L18.0892 14.6271ZM18.5543 16.5H19.4457C19.7421 16.5 19.9735 16.7565 19.943 17.0514L19.7346 19.0683C19.7181 19.2279 19.5576 19.3298 19.4007 19.296C19.274 19.2688 19.137 19.25 19 19.25C18.863 19.25 18.726 19.2688 18.5993 19.296C18.4424 19.3298 18.2819 19.2279 18.2654 19.0683L18.057 17.0514C18.0265 16.7565 18.2579 16.5 18.5543 16.5ZM19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    })]
                })
            }
        },
        346800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TextIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, u.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.9864 3.16437C11.0772 2.6196 10.7092 2.10437 10.1644 2.01358C9.61963 1.92278 9.1044 2.2908 9.01361 2.83557L8.15288 7.99991H4C3.44772 7.99991 3 8.44763 3 8.99991C3 9.5522 3.44772 9.99991 4 9.99991H7.81955L7.15288 13.9999H3C2.44772 13.9999 2 14.4476 2 14.9999C2 15.5522 2.44772 15.9999 3 15.9999H6.81955L6.01361 20.8356C5.92281 21.3803 6.29083 21.8956 6.8356 21.9864C7.38037 22.0772 7.8956 21.7091 7.98639 21.1644L8.84714 15.9999H13.8195L13.0136 20.8356C12.9228 21.3803 13.2908 21.8956 13.8356 21.9864C14.3804 22.0772 14.8956 21.7091 14.9864 21.1644L15.8471 15.9999H20C20.5523 15.9999 21 15.5522 21 14.9999C21 14.4476 20.5523 13.9999 20 13.9999H16.1805L16.8471 9.99991H21C21.5523 9.99991 22 9.5522 22 8.99991C22 8.44763 21.5523 7.99991 21 7.99991H17.1805L17.9864 3.16437C18.0772 2.6196 17.7092 2.10437 17.1644 2.01358C16.6196 1.92278 16.1044 2.2908 16.0136 2.83557L15.1529 7.99991H10.1805L10.9864 3.16437ZM14.1529 13.9999L14.8195 9.99991H9.84714L9.18047 13.9999H14.1529Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    })
                })
            }
        },
        462392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionInfo: function() {
                    return O
                }
            });
            var r = n("679653"),
                l = n("42203"),
                u = n("27618"),
                o = n("697218"),
                s = n("593195"),
                i = n("631236"),
                a = n("491401"),
                c = n("381546"),
                C = n("143460"),
                d = n("903639"),
                L = n("782340");
            let A = e => {
                    if (e === C.AutomodActionType.QUARANTINE_USER) return !1;
                    return !0
                },
                f = e => {
                    switch (e) {
                        case C.AutomodActionType.BLOCK_MESSAGE:
                        case C.AutomodActionType.FLAG_TO_CHANNEL:
                        case C.AutomodActionType.USER_COMMUNICATION_DISABLED:
                        case C.AutomodActionType.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                },
                _ = e => {
                    switch (e) {
                        case C.AutomodActionType.BLOCK_MESSAGE:
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case C.AutomodActionType.FLAG_TO_CHANNEL:
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case C.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case C.AutomodActionType.QUARANTINE_USER:
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                N = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.AutomodTriggerType.KEYWORD;
                    switch (e) {
                        case C.AutomodActionType.BLOCK_MESSAGE:
                            switch (t) {
                                case C.AutomodTriggerType.MENTION_SPAM:
                                    return L.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case C.AutomodTriggerType.ML_SPAM:
                                    return L.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return L.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case C.AutomodActionType.FLAG_TO_CHANNEL:
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case C.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case C.AutomodActionType.QUARANTINE_USER:
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                T = (e, t) => {
                    var n, s, i;
                    switch (e) {
                        case C.AutomodActionType.QUARANTINE_USER:
                        case C.AutomodActionType.BLOCK_MESSAGE:
                            return null;
                        case C.AutomodActionType.FLAG_TO_CHANNEL: {
                            let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == e) return null;
                            let s = l.default.getChannel(e);
                            if (null == s) return null;
                            let i = (0, r.computeChannelName)(s, o.default, u.default);
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: i
                            })
                        }
                        case C.AutomodActionType.USER_COMMUNICATION_DISABLED: {
                            let e = null !== (i = null == t ? void 0 : null === (s = t.metadata) || void 0 === s ? void 0 : s.durationSeconds) && void 0 !== i ? i : 0,
                                n = (0, d.getFriendlyDurationString)(e);
                            if (null == n) return null;
                            return L.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: n
                            })
                        }
                    }
                },
                I = e => {
                    switch (e) {
                        case C.AutomodActionType.BLOCK_MESSAGE:
                            return c.default;
                        case C.AutomodActionType.FLAG_TO_CHANNEL:
                            return s.default;
                        case C.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return a.default;
                        case C.AutomodActionType.QUARANTINE_USER:
                            return i.default
                    }
                };

            function O(e, t, n) {
                var r, l, u, o;
                return f(e) ? {
                    headerText: null !== (r = _(e)) && void 0 !== r ? r : "",
                    descriptionText: null !== (l = N(e, n)) && void 0 !== l ? l : "",
                    helperText: null !== (u = T(e, t)) && void 0 !== u ? u : null,
                    icon: null !== (o = I(e)) && void 0 !== o ? o : c.default,
                    isEditable: A(e)
                } : null
            }
        },
        998730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var r = n("37983"),
                l = n("884691"),
                u = n("446674"),
                o = n("77078"),
                s = n("679653"),
                i = n("42203"),
                a = n("923959"),
                c = n("27618"),
                C = n("697218"),
                d = n("476765"),
                L = n("462392"),
                A = n("782340"),
                f = n("643286");
            let _ = e => {
                let {
                    guildId: t,
                    channel: n,
                    onSelectChannel: l
                } = e, i = (0, u.useStateFromStoresArray)([a.default], () => a.default.getChannels(t)[a.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel()
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t
                }), [t]);
                return (0, r.jsx)(o.FormItem, {
                    className: f.channelSelector,
                    required: !0,
                    children: (0, r.jsx)(o.SearchableSelect, {
                        value: null == n ? void 0 : n.id,
                        options: i.map(e => ({
                            value: e.id,
                            label: (0, s.computeChannelName)(e, C.default, c.default, !0)
                        })),
                        onChange: e => {
                            let t = i.find(t => t.id === e);
                            l(null != t ? t : void 0)
                        },
                        placeholder: A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
                    })
                })
            };

            function N(e) {
                let {
                    action: t,
                    triggerType: n,
                    guildId: s,
                    isEdit: a,
                    onEditChannel: c,
                    onClose: C,
                    transitionState: N
                } = e, T = (0, d.useUID)(), [I, O] = l.useState(t.metadata.channelId), [E, M] = l.useState(null), h = (0, u.useStateFromStores)([i.default], () => i.default.getChannel(I), [I]), S = (0, L.getActionInfo)(t.type, t, n);
                if (null == S) return null;
                let {
                    headerText: v
                } = S;
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: N,
                    "aria-labelledby": T,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsxs)(o.ModalContent, {
                        className: f.actionContentContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            id: T,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: f.header,
                            children: v
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
                        }), (0, r.jsx)(_, {
                            guildId: s,
                            channel: h,
                            onSelectChannel: e => {
                                null != e && O(e.id)
                            }
                        }), null != E ? (0, r.jsx)(o.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: E
                        }) : (0, r.jsx)(o.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
                        })]
                    }), (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            onClick: () => {
                                if (null == I) {
                                    M(A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
                                    return
                                }
                                c(I)
                            },
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.SMALL,
                            children: a ? A.default.Messages.EDIT : A.default.Messages.SAVE
                        }), (0, r.jsx)(o.Button, {
                            onClick: () => {
                                C()
                            },
                            color: o.Button.Colors.TRANSPARENT,
                            look: o.Button.Looks.LINK,
                            children: A.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return i
                }
            });
            var r = n("995008"),
                l = n.n(r),
                u = n("775560");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                s = () => (0, u.useLazyValue)(() => o()),
                i = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        593195: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                u = n("346800"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        className: u,
                        foreground: s,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        className: u,
                        ...(0, o.default)(i),
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                        })
                    })
                }, u.TextIcon, void 0, {
                    size: 24
                })
        },
        631236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                u = n("646074"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        ...u
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        fill: "None",
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                            stroke: l,
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                            fill: l
                        })]
                    })
                }, u.ChatXIcon, void 0, {
                    size: 24
                })
        },
        491401: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                u = n("698210"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: l = 24,
                        ...u
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(u),
                        width: l,
                        height: n,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("path", {
                            d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                            fill: t
                        }), (0, r.jsx)("path", {
                            d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                            fill: t
                        })]
                    })
                }, u.ClockWarningIcon, void 0, {
                    size: 24
                })
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                u = n("505088"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: u,
                        backgroundColor: s,
                        ...i
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, r.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
                        }) : null, (0, r.jsx)("path", {
                            fill: l,
                            className: u,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, u.CircleXIcon, void 0, {
                    size: 24
                })
        }
    }
]);