(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5456"], {
        88885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HomeSlashIcon: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, r.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, s.jsx)("path", {
                        d: "M22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: a
                    }), (0, s.jsx)("path", {
                        d: "M15.5052 3.69629C15.7444 3.88031 15.7673 4.23273 15.5539 4.44615L4.65513 15.3449C4.35686 15.6431 3.84603 15.4608 3.80406 15.0411L3.53281 12.3286C3.5132 12.1325 3.36996 11.9711 3.17756 11.9284C1.52072 11.5602 1.04671 9.4256 2.39199 8.39076L10.7805 1.93799C11.4994 1.38498 12.5005 1.38498 13.2194 1.93799L15.5052 3.69629Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: a
                    }), (0, s.jsx)("path", {
                        d: "M6.30993 22C6.1902 22 6.14129 21.8587 6.22595 21.7741L8.1464 19.8536C8.46138 19.5386 8.99995 19.7617 8.99995 20.2072V21C8.99995 21.5523 8.55224 22 7.99995 22H6.30993Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: a
                    }), (0, s.jsx)("path", {
                        d: "M14.4748 13.5252C14.2796 13.7204 14.2836 14.0351 14.444 14.2599C14.794 14.7506 15 15.3513 15 16V21C15 21.5523 15.4477 22 16 22H17.69C18.7175 22 19.5778 21.2214 19.68 20.199L20.4671 12.3287C20.4867 12.1325 20.63 11.9711 20.8224 11.9284C22.4792 11.5602 22.9532 9.4256 21.6079 8.39076L20.8262 7.78944C20.6272 7.63631 20.3454 7.65461 20.1678 7.8322L14.4748 13.5252Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: a
                    })]
                })
            }
        },
        437150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildFeedHideItem: function() {
                    return L
                },
                useGuildFeedRemoveItem: function() {
                    return I
                },
                targetToContext: function() {
                    return p
                },
                default: function() {
                    return x
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("118810"),
                r = n("65597"),
                o = n("77078"),
                a = n("272030"),
                i = n("861370"),
                u = n("126423"),
                d = n("518155"),
                c = n("447651"),
                f = n("26051"),
                E = n("271938"),
                C = n("957255"),
                M = n("867544"),
                h = n("399699"),
                m = n("713810"),
                _ = n("49111"),
                g = n("782340");

            function L(e, t) {
                return (0, s.jsx)(o.MenuItem, {
                    id: "hide-feed-message",
                    label: g.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
                    action: n => (n.stopPropagation(), (0, m.hideItemFromGuildFeed)(e, t)),
                    icon: M.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function I(e, t, n) {
                let l = (0, r.default)([E.default], () => E.default.getId()),
                    a = (0, r.default)([C.default], () => C.default.can(_.Permissions.MANAGE_MESSAGES, n), [n]),
                    i = t.author.id === l || a;
                return i ? (0, s.jsx)(o.MenuItem, {
                    id: "remove-feed-message",
                    label: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
                    action: t => {
                        t.stopPropagation();
                        let n = !0;
                        return t.shiftKey && (n = !1),
                            function(e, t) {
                                if (!t) {
                                    (0, m.removeItemFromGuildFeed)(e);
                                    return
                                }(0, o.openModal)(t => (0, s.jsx)(o.ConfirmModal, {
                                    header: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                                    confirmText: g.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                                    cancelText: g.default.Messages.CANCEL,
                                    onConfirm: () => (0, m.removeItemFromGuildFeed)(e),
                                    ...t,
                                    children: (0, s.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
                                    })
                                }))
                            }(e, n)
                    },
                    icon: h.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                }) : null
            }

            function p(e) {
                let t, n, s, r = e;
                for (;
                    (0, l.isElement)(r, Node);)(0, l.isElement)(r, HTMLImageElement) && null != r.src && (n = r.src), (0, l.isElement)(r, HTMLAnchorElement) && null != r.href && (t = r.href, s = r.textContent), r = r.parentNode;
                return {
                    href: t,
                    src: n,
                    textContent: s
                }
            }

            function x(e) {
                let {
                    channel: t,
                    message: n,
                    messageItem: l,
                    target: r,
                    onSelect: E
                } = e, {
                    href: C,
                    src: M,
                    textContent: h
                } = p(r), m = (0, d.default)(n, t), _ = (0, f.default)(null != C ? C : M, h), x = (0, c.default)(M), v = (0, i.default)({
                    id: n.id,
                    label: g.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(n.channel_id, "-").concat(n.id)
                }), G = L(l, t.guild_id), S = I(l, l.message, t), A = (0, u.default)(n, t, {
                    hoist: !1
                });
                return (0, s.jsxs)(o.Menu, {
                    navId: "message",
                    onClose: a.closeContextMenu,
                    "aria-label": g.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: E,
                    children: [(0, s.jsxs)(o.MenuGroup, {
                        children: [G, S, A]
                    }), (0, s.jsxs)(o.MenuGroup, {
                        children: [m, x, _, v]
                    })]
                })
            }
        },
        399699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("88885"),
                o = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, s.jsx)("rect", {
                            className: r,
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
                    })
                }, r.HomeSlashIcon, void 0, {
                    size: 24
                })
        }
    }
]);