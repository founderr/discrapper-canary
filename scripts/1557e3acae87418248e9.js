(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66769"], {
        88885: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                HomeSlashIcon: function() {
                    return a
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, r.default)(o),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    }), (0, n.jsx)("path", {
                        d: "M15.5052 3.69629C15.7444 3.88031 15.7673 4.23273 15.5539 4.44615L4.65513 15.3449C4.35686 15.6431 3.84603 15.4608 3.80406 15.0411L3.53281 12.3286C3.5132 12.1325 3.36996 11.9711 3.17756 11.9284C1.52072 11.5602 1.04671 9.4256 2.39199 8.39076L10.7805 1.93799C11.4994 1.38498 12.5005 1.38498 13.2194 1.93799L15.5052 3.69629Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    }), (0, n.jsx)("path", {
                        d: "M6.30993 22C6.1902 22 6.14129 21.8587 6.22595 21.7741L8.1464 19.8536C8.46138 19.5386 8.99995 19.7617 8.99995 20.2072V21C8.99995 21.5523 8.55224 22 7.99995 22H6.30993Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    }), (0, n.jsx)("path", {
                        d: "M14.4748 13.5252C14.2796 13.7204 14.2836 14.0351 14.444 14.2599C14.794 14.7506 15 15.3513 15 16V21C15 21.5523 15.4477 22 16 22H17.69C18.7175 22 19.5778 21.2214 19.68 20.199L20.4671 12.3287C20.4867 12.1325 20.63 11.9711 20.8224 11.9284C22.4792 11.5602 22.9532 9.4256 21.6079 8.39076L20.8262 7.78944C20.6272 7.63631 20.3454 7.65461 20.1678 7.8322L14.4748 13.5252Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    })]
                })
            }
        },
        814781: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("611221"),
                r = s("77078"),
                a = s("272030"),
                u = s("861370"),
                o = s("518155"),
                d = s("447651"),
                i = s("26051"),
                c = s("449008"),
                f = s("437150"),
                E = s("782340");

            function M(e) {
                let {
                    channel: t,
                    item: s,
                    target: M,
                    onSelect: m
                } = e, C = function(e) {
                    switch (e.type) {
                        case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return e.messages[0].message;
                        case l.GuildFeedItemTypes.CONVERSATION:
                            return e.root.messages[0];
                        default:
                            (0, c.assertNever)(e)
                    }
                }(s), h = function(e) {
                    switch (e.type) {
                        case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return e.messages[e.messages.length - 1].message;
                        case l.GuildFeedItemTypes.CONVERSATION:
                            return e.root.messages[e.root.messages.length - 1];
                        default:
                            (0, c.assertNever)(e)
                    }
                }(s), {
                    href: g,
                    src: I,
                    textContent: _
                } = (0, f.targetToContext)(M), p = (0, o.default)(C, t), L = (0, i.default)(null != g ? g : I, _), G = (0, d.default)(I), x = (0, u.default)({
                    id: h.id,
                    label: E.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(t.id, "-").concat(h.id)
                }), S = (0, f.useGuildFeedHideItem)(s, t.guild_id), v = (0, f.useGuildFeedRemoveItem)(s, h, t);
                return (0, n.jsxs)(r.Menu, {
                    navId: "message",
                    onClose: a.closeContextMenu,
                    "aria-label": E.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: m,
                    children: [(0, n.jsxs)(r.MenuGroup, {
                        children: [S, v]
                    }), (0, n.jsxs)(r.MenuGroup, {
                        children: [p, G, L, x]
                    })]
                })
            }
        },
        437150: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useGuildFeedHideItem: function() {
                    return _
                },
                useGuildFeedRemoveItem: function() {
                    return p
                },
                targetToContext: function() {
                    return L
                },
                default: function() {
                    return G
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("118810"),
                r = s("65597"),
                a = s("77078"),
                u = s("272030"),
                o = s("861370"),
                d = s("126423"),
                i = s("518155"),
                c = s("447651"),
                f = s("26051"),
                E = s("271938"),
                M = s("957255"),
                m = s("867544"),
                C = s("399699"),
                h = s("713810"),
                g = s("49111"),
                I = s("782340");

            function _(e, t) {
                return (0, n.jsx)(a.MenuItem, {
                    id: "hide-feed-message",
                    label: I.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
                    action: s => (s.stopPropagation(), (0, h.hideItemFromGuildFeed)(e, t)),
                    icon: m.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function p(e, t, s) {
                let l = (0, r.default)([E.default], () => E.default.getId()),
                    u = (0, r.default)([M.default], () => M.default.can(g.Permissions.MANAGE_MESSAGES, s), [s]),
                    o = t.author.id === l || u;
                return o ? (0, n.jsx)(a.MenuItem, {
                    id: "remove-feed-message",
                    label: I.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
                    action: t => {
                        t.stopPropagation();
                        let s = !0;
                        return t.shiftKey && (s = !1),
                            function(e, t) {
                                if (!t) {
                                    (0, h.removeItemFromGuildFeed)(e);
                                    return
                                }(0, a.openModal)(t => (0, n.jsx)(a.ConfirmModal, {
                                    header: I.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                                    confirmText: I.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                                    cancelText: I.default.Messages.CANCEL,
                                    onConfirm: () => (0, h.removeItemFromGuildFeed)(e),
                                    ...t,
                                    children: (0, n.jsx)(a.Text, {
                                        variant: "text-md/normal",
                                        children: I.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
                                    })
                                }))
                            }(e, s)
                    },
                    icon: C.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                }) : null
            }

            function L(e) {
                let t, s, n, r = e;
                for (;
                    (0, l.isElement)(r, Node);)(0, l.isElement)(r, HTMLImageElement) && null != r.src && (s = r.src), (0, l.isElement)(r, HTMLAnchorElement) && null != r.href && (t = r.href, n = r.textContent), r = r.parentNode;
                return {
                    href: t,
                    src: s,
                    textContent: n
                }
            }

            function G(e) {
                let {
                    channel: t,
                    message: s,
                    messageItem: l,
                    target: r,
                    onSelect: E
                } = e, {
                    href: M,
                    src: m,
                    textContent: C
                } = L(r), h = (0, i.default)(s, t), g = (0, f.default)(null != M ? M : m, C), G = (0, c.default)(m), x = (0, o.default)({
                    id: s.id,
                    label: I.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(s.channel_id, "-").concat(s.id)
                }), S = _(l, t.guild_id), v = p(l, l.message, t), N = (0, d.default)(s, t, {
                    hoist: !1
                });
                return (0, n.jsxs)(a.Menu, {
                    navId: "message",
                    onClose: u.closeContextMenu,
                    "aria-label": I.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: E,
                    children: [(0, n.jsxs)(a.MenuGroup, {
                        children: [S, v, N]
                    }), (0, n.jsxs)(a.MenuGroup, {
                        children: [h, G, g, x]
                    })]
                })
            }
        },
        399699: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("88885"),
                a = s("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, n.jsx)("rect", {
                            className: r,
                            x: "2.10049",
                            y: "20.4853",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2.10049 20.4853)",
                            fill: l
                        }), (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                            fill: l
                        })]
                    })
                }, r.HomeSlashIcon, void 0, {
                    size: 24
                })
        }
    }
]);