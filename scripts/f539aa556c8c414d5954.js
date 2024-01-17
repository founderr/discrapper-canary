(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93074"], {
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("845579"),
                s = n("662255"),
                l = n("306160");

            function i(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: i,
                    shiftId: c,
                    showIconFirst: d
                } = e, o = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !o || !l.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, u.jsx)(a.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != c && e.shiftKey ? c : t;
                        (0, l.copy)(n), null == i || i()
                    },
                    icon: s.default,
                    showIconFirst: d
                }, f)
            }
        },
        327054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var u = n("300322"),
                a = n("913491"),
                r = n("49111");

            function s(e, t, n) {
                let s = t.isSystemDM(),
                    l = !s && !(0, a.default)(e);
                return l && (n || t.isPrivate()) && (0, u.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== r.ChannelTypes.GUILD_VOICE && t.type !== r.ChannelTypes.GUILD_STAGE_VOICE
            }
        },
        13406: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("118810"),
                r = n("77078"),
                s = n("272030"),
                l = n("861370"),
                i = n("152298"),
                c = n("26051"),
                d = n("667358"),
                o = n("518155"),
                f = n("718381"),
                h = n("875834"),
                M = n("780657"),
                p = n("782340");

            function E(e) {
                var t;
                let n, E, I, {
                        channel: S,
                        message: m,
                        target: v,
                        attachment: _,
                        onSelect: x
                    } = e,
                    N = v;
                if (null != _) E = n = _.url;
                else
                    for (;
                        (0, a.isElement)(N);)(0, a.isElement)(N, HTMLImageElement) && null != N.src && (E = N.src), (0, a.isElement)(N, HTMLAnchorElement) && null != N.href && (n = N.href, I = N.textContent), N = N.parentNode;
                let A = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
                    g = (0, i.default)(A),
                    G = (0, d.default)(A),
                    O = (0, M.default)(m, S),
                    C = (0, h.default)(m, S),
                    j = (0, o.default)(m, S),
                    T = (0, f.default)(m, S),
                    P = (0, c.default)(null != n ? n : E, I),
                    y = (0, l.default)({
                        id: m.id,
                        label: p.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(m.channel_id, "-").concat(m.id)
                    }),
                    R = (0, l.default)({
                        id: m.author.id,
                        label: p.default.Messages.COPY_ID_AUTHOR
                    });
                return (0, u.jsxs)(r.Menu, {
                    navId: "message",
                    onClose: s.closeContextMenu,
                    "aria-label": p.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: x,
                    children: [(0, u.jsx)(r.MenuGroup, {
                        children: g
                    }), (0, u.jsx)(r.MenuGroup, {
                        children: G
                    }), (0, u.jsxs)(r.MenuGroup, {
                        children: [O, C, j, T]
                    }), (0, u.jsx)(r.MenuGroup, {
                        children: P
                    }), (0, u.jsxs)(r.MenuGroup, {
                        children: [y, R]
                    })]
                })
            }
        },
        780657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                s = n("828986"),
                l = n("249561"),
                i = n("957255"),
                c = n("566998"),
                d = n("327054"),
                o = n("49111"),
                f = n("782340");

            function h(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => i.default.can(o.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== o.MessageStates.SEND_FAILED && (0, d.default)(e, t, n) ? !1 === e.pinned ? (0, u.jsx)(r.MenuItem, {
                    id: "pin",
                    action: function(n) {
                        n.shiftKey ? s.default.pinMessage(t, e.id) : l.default.confirmPin(t, e)
                    },
                    label: f.default.Messages.PIN_MESSAGE,
                    icon: c.default
                }) : (0, u.jsx)(r.MenuItem, {
                    id: "unpin",
                    action: function(n) {
                        n.shiftKey ? s.default.unpinMessage(t, e.id) : l.default.confirmUnpin(t, e)
                    },
                    label: f.default.Messages.UNPIN_MESSAGE,
                    icon: c.default
                }) : null
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return M
                }
            });
            var u, a, r = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                c = n("36694"),
                d = n("381546"),
                o = n("68238"),
                f = n("423487"),
                h = n("557296");
            (u = a || (a = {}))[u.WARNING = 0] = "WARNING", u[u.INFO = 1] = "INFO", u[u.ERROR = 2] = "ERROR", u[u.POSITIVE = 3] = "POSITIVE";
            var M = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: u,
                    textColor: a = "text-normal",
                    textVariant: s = "text-sm/medium"
                } = e, M = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return o.default;
                        case 2:
                            return d.default;
                        case 3:
                            return c.default
                    }
                }(n), p = function(e) {
                    switch (e) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(n);
                return (0, r.jsxs)("div", {
                    className: l(h.container, p, u),
                    children: [(0, r.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, r.jsx)(M, {
                            className: h.icon
                        })
                    }), (0, r.jsx)(i.Text, {
                        className: h.text,
                        color: a,
                        variant: s,
                        children: t
                    })]
                })
            }
        }
    }
]);