(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28711"], {
        203966: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("476765"),
                o = n("151642"),
                a = n("29846"),
                i = n("782340"),
                c = n("699141");

            function u(e) {
                let {
                    channel: t,
                    onAccept: n,
                    transitionState: u,
                    onClose: d,
                    ...h
                } = e, f = (0, l.useUID)(), x = (0, o.useStageBlockedUsers)(t.id);
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: u,
                    "aria-labelledby": f,
                    ...h,
                    size: s.ModalSize.SMALL,
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        className: c.header,
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: i.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                                number: x.length
                            })
                        }), (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            className: c.description,
                            variant: "text-sm/normal",
                            children: i.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
                                number: x.length
                            })
                        })]
                    }), (0, r.jsx)(s.ModalContent, {
                        className: c.content,
                        children: x.map(e => {
                            let {
                                user: n,
                                id: s,
                                speaker: l
                            } = e;
                            return (0, r.jsx)(a.BlockedUser, {
                                user: n,
                                speaker: l,
                                showStatus: !0,
                                channelId: t.id
                            }, s)
                        })
                    }), (0, r.jsxs)(s.ModalFooter, {
                        className: c.footer,
                        children: [(0, r.jsx)(s.Button, {
                            onClick: () => {
                                n(t), d()
                            },
                            color: s.Button.Colors.BRAND,
                            children: i.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
                        }), (0, r.jsx)(s.Button, {
                            onClick: () => {
                                d()
                            },
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: i.default.Messages.STAGE_BLOCKED_USERS_CANCEL
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
                    return a
                },
                UID: function() {
                    return i
                }
            });
            var r = n("995008"),
                s = n.n(r),
                l = n("775560");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return s(e)
                },
                a = () => (0, l.useLazyValue)(() => o()),
                i = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        328275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("833222"),
                o = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: s = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: [(0, r.jsx)("clipPath", {
                            children: (0, r.jsx)("path", {
                                d: "m.000183 0h16v16h-16z"
                            })
                        }), (0, r.jsx)("g", {
                            clipPath: "url(#a)",
                            children: (0, r.jsx)("path", {
                                d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                                fill: s
                            })
                        })]
                    })
                }, l.DenyIcon, void 0, {
                    size: 32
                })
        }
    }
]);