"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79540], {
        217951: (e, s, o) => {
            o.d(s, {
                b: () => r
            });

            function r(e) {
                return "".concat("https://cdn.discordapp.com/assets", "/").concat(e)
            }
        },
        79540: (e, s, o) => {
            o.r(s);
            o.d(s, {
                default: () => j
            });
            var r = o(785893),
                n = (o(667294), o(441143)),
                t = o.n(n),
                a = o(202351),
                i = o(882723),
                d = o(320142),
                l = o(217951),
                c = o(703790),
                u = o(968449),
                p = o(567403),
                m = o(223430),
                h = o(443812),
                g = o(786170),
                N = o(348592),
                R = o(2590),
                S = o(458947),
                x = o(82251),
                C = o.n(x),
                v = [R.oNc.CREATOR_MONETIZABLE, R.oNc.CREATOR_MONETIZABLE_PROVISIONAL];

            function j(e) {
                var s = e.transitionState,
                    o = e.onClose,
                    n = e.guildId,
                    x = e.markAsDismissed,
                    j = (0, h.Dt)(),
                    I = (0, a.e7)([p.Z], (function() {
                        return p.Z.getGuild(n)
                    }));
                t()(null != I, "Guild must be defined");
                var _ = u.QK.useSetting();
                return (0, r.jsxs)(i.ModalRoot, {
                    size: i.ModalSize.LARGE,
                    className: C().root,
                    transitionState: s,
                    "aria-labelledby": j,
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: C().header,
                        children: [(0, r.jsx)(i.ModalCloseButton, {
                            className: C().closeButton,
                            onClick: o
                        }), (0, r.jsx)(i.Heading, {
                            variant: "heading-xl/medium",
                            color: "header-primary",
                            id: j,
                            children: "Server Shop is now open for business!"
                        }), (0, r.jsx)(m.Z, {
                            size: 6
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: C().description,
                            color: "header-secondary",
                            children: "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise."
                        })]
                    }), (0, r.jsx)("div", {
                        className: C().divider
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: C().content,
                        children: [_ ? (0, r.jsx)("img", {
                            src: (0, l.b)("server_products/upsell/demo2.png"),
                            alt: "",
                            className: C().demo
                        }) : (0, r.jsx)(g.Z, {
                            autoPlay: !0,
                            loop: !0,
                            className: C().demo,
                            width: 400,
                            poster: (0, l.b)("server_products/upsell/demo2.png"),
                            src: (0, l.b)("server_products/upsell/demo.mp4")
                        }), (0, r.jsx)("img", {
                            src: (0,
                                l.b)("server_products/upsell/new_sales.png"),
                            alt: "",
                            className: C().earningsImage
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        children: [(0, r.jsx)(i.Button, {
                            onClick: function() {
                                v.some((function(e) {
                                    return I.hasFeature(e)
                                })) ? c.Z.open(n, R.pNK.GUILD_PRODUCTS) : c.Z.open(n, R.pNK.ROLE_SUBSCRIPTIONS);
                                x(S.L.PRIMARY);
                                o()
                            },
                            children: "Check it out"
                        }), (0, r.jsx)(m.Z, {
                            size: 12,
                            horizontal: !0
                        }), (0, r.jsx)(i.Button, {
                            look: i.Button.Looks.OUTLINED,
                            color: i.Button.Colors.PRIMARY,
                            onClick: function() {
                                x(S.L.SECONDARY);
                                var e = "".concat(N.Z.getCreatorSupportArticleURL(R.BhN.SERVER_SUBSCRIPTION_AND_PRODUCTS), "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1");
                                (0, d.Z)(e, !0)
                            },
                            children: "Learn more"
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=18403b779173bd7cbe1b.js.map