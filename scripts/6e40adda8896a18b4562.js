"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89938], {
        789938: (s, e, t) => {
            t.r(e);
            t.d(e, {
                default: () => M
            });
            var a = t(785893),
                i = (t(667294), t(70418)),
                n = t(107364),
                o = t(443812),
                l = t(181763),
                r = t(473708),
                d = t(24370),
                c = t.n(d);

            function M(s) {
                var e = s.transitionState,
                    t = s.onClose,
                    d = (0, o.Dt)();
                return (0, a.jsxs)(i.ModalRoot, {
                    "aria-labelledby": d,
                    transitionState: e,
                    size: i.ModalSize.SMALL,
                    children: [(0, a.jsx)(i.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(i.Heading, {
                            id: d,
                            variant: "heading-lg/semibold",
                            children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
                        })
                    }), (0, a.jsxs)(i.ModalContent, {
                        children: [(0, a.jsx)(n.Z, {
                            justify: n.Z.Justify.CENTER,
                            children: (0, a.jsx)("div", {
                                className: c().image
                            })
                        }), (0, a.jsx)(i.Text, {
                            className: c().text,
                            variant: "text-sm/normal",
                            children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        children: [(0, a.jsx)(i.Button, {
                            onClick: function() {
                                (0, l.KK)();
                                t()
                            },
                            children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
                        }), (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: r.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);