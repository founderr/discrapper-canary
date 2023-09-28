"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79540], {
        79540: (e, s, o) => {
            o.r(s);
            o.d(s, {
                default: () => j
            });
            var r = o(785893),
                n = (o(667294), o(441143)),
                a = o.n(n),
                t = o(993231),
                i = o(202351),
                d = o(304548),
                l = o(320142),
                c = o(479373),
                u = o(217951),
                p = o(703790),
                m = o(968449),
                h = o(567403),
                g = o(223430),
                S = o(443812),
                N = o(786170),
                R = o(348592),
                _ = o(2590),
                x = o(458947),
                C = o(241978),
                v = o(590594),
                I = o.n(v),
                L = [_.oNc.CREATOR_MONETIZABLE, _.oNc.CREATOR_MONETIZABLE_PROVISIONAL];

            function j(e) {
                var s = e.transitionState,
                    o = e.onClose,
                    n = e.guildId,
                    v = e.markAsDismissed,
                    j = (0, S.Dt)(),
                    O = (0, i.e7)([h.Z], (function() {
                        return h.Z.getGuild(n)
                    }));
                a()(null != O, "Guild must be defined");
                (0, c.Z)({
                    type: C.n.MODAL,
                    name: t.zs.GUILD_SHOP_UPSELL,
                    properties: {
                        passed_in_guild_id: n
                    }
                });
                var b = m.QK.useSetting();
                return (0, r.jsxs)(d.ModalRoot, {
                    size: d.ModalSize.LARGE,
                    className: I().root,
                    transitionState: s,
                    "aria-labelledby": j,
                    children: [(0, r.jsxs)(d.ModalHeader, {
                        separator: !1,
                        className: I().header,
                        children: [(0, r.jsx)(d.ModalCloseButton, {
                            className: I().closeButton,
                            onClick: o
                        }), (0, r.jsx)(d.Heading, {
                            variant: "heading-xl/medium",
                            color: "header-primary",
                            id: j,
                            children: "Server Shop is now open for business!"
                        }), (0, r.jsx)(g.Z, {
                            size: 6
                        }), (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: I().description,
                            color: "header-secondary",
                            children: "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise."
                        })]
                    }), (0, r.jsx)("div", {
                        className: I().divider
                    }), (0, r.jsxs)(d.ModalContent, {
                        className: I().content,
                        children: [b ? (0, r.jsx)("img", {
                            src: (0, u.b)("server_products/upsell/demo2.png"),
                            alt: "",
                            className: I().demo
                        }) : (0, r.jsx)(N.Z, {
                            autoPlay: !0,
                            loop: !0,
                            className: I().demo,
                            width: 400,
                            poster: (0, u.b)("server_products/upsell/demo2.png"),
                            src: (0, u.b)("server_products/upsell/demo.mp4")
                        }), (0, r.jsx)("img", {
                            src: (0,
                                u.b)("server_products/upsell/new_sales.png"),
                            alt: "",
                            className: I().earningsImage
                        })]
                    }), (0, r.jsxs)(d.ModalFooter, {
                        children: [(0, r.jsx)(d.Button, {
                            onClick: function() {
                                L.some((function(e) {
                                    return O.hasFeature(e)
                                })) ? p.Z.open(n, _.pNK.GUILD_PRODUCTS) : p.Z.open(n, _.pNK.ROLE_SUBSCRIPTIONS);
                                v(x.L.PRIMARY);
                                o()
                            },
                            children: "Check it out"
                        }), (0, r.jsx)(g.Z, {
                            size: 12,
                            horizontal: !0
                        }), (0, r.jsx)(d.Button, {
                            look: d.Button.Looks.OUTLINED,
                            color: d.Button.Colors.PRIMARY,
                            onClick: function() {
                                v(x.L.SECONDARY);
                                var e = "".concat(R.Z.getCreatorSupportArticleURL(_.BhN.SERVER_SUBSCRIPTION_AND_PRODUCTS), "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1");
                                (0, l.Z)(e, !0)
                            },
                            children: "Learn more"
                        })]
                    })]
                })
            }
        }
    }
]);