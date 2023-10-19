(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99271], {
        483683: (e, s, a) => {
            e.exports = a.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, s, a) => {
            e.exports = a.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        99271: (e, s, a) => {
            "use strict";
            a.r(s);
            a.d(s, {
                default: () => h
            });
            var n = a(785893),
                l = (a(667294), a(70418)),
                t = a(116404),
                c = a(832642),
                r = a(443812),
                i = a(890251),
                o = a(242735),
                d = a(201441),
                N = a(473708),
                u = a(347542),
                _ = a.n(u);

            function h(e) {
                var s = e.channel,
                    a = e.transitionState,
                    u = e.onClose,
                    h = (0, r.Dt)(),
                    E = (0, d.qY)(s.id);
                if (null == E) return null;
                var I = function() {
                    t.default.selectVoiceChannel(null);
                    u()
                };
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: a,
                    "aria-labelledby": h,
                    size: l.ModalSize.SMALL,
                    children: [(0, n.jsxs)(l.ModalContent, {
                        className: _().content,
                        children: [(0, n.jsx)(c.Z, {
                            children: (0, n.jsx)("div", {
                                className: _().iconBackground,
                                children: (0, n.jsx)(i.Z, {
                                    height: 40,
                                    width: 40,
                                    className: _().icon
                                })
                            })
                        }), (0, n.jsx)(l.Heading, {
                            id: h,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: _().title,
                            children: N.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: _().subtitle,
                            children: N.Z.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, n.jsxs)(l.ModalFooter, {
                        children: [(0, n.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            onClick: function() {
                                o.Z.endEvent(E.id, E.guild_id);
                                I()
                            },
                            children: N.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, n.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: _().cancelButton,
                            onClick: I,
                            children: N.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        832642: (e, s, a) => {
            "use strict";
            a.d(s, {
                Z: () => _
            });
            var n = a(785893),
                l = (a(667294), a(294184)),
                t = a.n(l),
                c = a(473708),
                r = a(300443),
                i = a.n(r),
                o = a(483683),
                d = a.n(o),
                N = a(63685),
                u = a.n(N);

            function _(e) {
                var s = e.className,
                    a = e.children;
                return (0, n.jsxs)("div", {
                    className: t()(i().container, s),
                    children: [(0, n.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u(),
                        className: t()(i().sparkleIcon, i().sparkleBottom)
                    }), a, (0, n.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: t()(i().sparkleIcon, i().sparkleTop)
                    })]
                })
            }
        }
    }
]);