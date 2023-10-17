"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79540], {
        79540: (e, s, r) => {
            r.r(s);
            r.d(s, {
                default: () => O
            });
            var o = r(785893),
                a = (r(667294), r(441143)),
                n = r.n(a),
                i = r(571657),
                t = r(202351),
                d = r(304548),
                l = r(320142),
                c = r(479373),
                u = r(217951),
                p = r(703790),
                m = r(968449),
                h = r(567403),
                g = r(319086),
                S = r(223430),
                N = r(443812),
                x = r(786170),
                _ = r(348592),
                R = r(2590),
                C = r(458947),
                j = r(241978),
                v = r(590594),
                I = r.n(v),
                L = [R.oNc.CREATOR_MONETIZABLE, R.oNc.CREATOR_MONETIZABLE_PROVISIONAL];

            function O(e) {
                var s = e.transitionState,
                    r = e.onClose,
                    a = e.guildId,
                    v = e.markAsDismissed,
                    O = (0, N.Dt)(),
                    Z = (0, t.e7)([h.Z], (function() {
                        return h.Z.getGuild(a)
                    }));
                n()(null != Z, "Guild must be defined");
                (0, c.Z)({
                    type: j.n.MODAL,
                    name: i.zs.GUILD_SHOP_UPSELL,
                    properties: {
                        passed_in_guild_id: a
                    }
                });
                var b = m.QK.useSetting();
                return (0, o.jsxs)(d.ModalRoot, {
                    size: d.ModalSize.LARGE,
                    className: I().root,
                    transitionState: s,
                    "aria-labelledby": O,
                    children: [(0, o.jsxs)(d.ModalHeader, {
                        separator: !1,
                        className: I().header,
                        children: [(0, o.jsx)(d.ModalCloseButton, {
                            className: I().closeButton,
                            onClick: r
                        }), (0, o.jsx)(d.Heading, {
                            variant: "heading-xl/medium",
                            color: "header-primary",
                            id: O,
                            children: "Server Shop is now open for business!"
                        }), (0, o.jsx)(S.Z, {
                            size: 6
                        }), (0, o.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: I().description,
                            color: "header-secondary",
                            children: "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise."
                        }), (0, o.jsx)(S.Z, {
                            size: 8
                        }), (0, o.jsx)(g.Z, {
                            onClick: function() {
                                v(C.L.SECONDARY);
                                var e = "".concat(_.Z.getCreatorSupportArticleURL(R.BhN.SERVER_SUBSCRIPTION_AND_PRODUCTS), "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1");
                                (0, l.Z)(e, !0)
                            },
                            children: "Learn more"
                        })]
                    }), (0, o.jsx)("div", {
                        className: I().divider
                    }), (0, o.jsxs)(d.ModalContent, {
                        className: I().content,
                        children: [b ? (0, o.jsx)("img", {
                            src: (0,
                                u.b)("server_products/upsell/demo2.png"),
                            alt: "",
                            className: I().demo
                        }) : (0, o.jsx)(x.Z, {
                            autoPlay: !0,
                            loop: !0,
                            className: I().demo,
                            width: 400,
                            poster: (0, u.b)("server_products/upsell/demo2.png"),
                            src: (0, u.b)("server_products/upsell/demo.mp4")
                        }), (0, o.jsx)("img", {
                            src: (0, u.b)("server_products/upsell/new_sales.png"),
                            alt: "",
                            className: I().earningsImage
                        })]
                    }), (0, o.jsxs)(d.ModalFooter, {
                        children: [(0, o.jsx)(d.Button, {
                            onClick: function() {
                                L.some((function(e) {
                                    return Z.hasFeature(e)
                                })) ? p.Z.open(a, R.pNK.GUILD_PRODUCTS) : p.Z.open(a, R.pNK.ROLE_SUBSCRIPTIONS);
                                v(C.L.PRIMARY);
                                r()
                            },
                            children: "Check it out"
                        }), (0, o.jsx)(S.Z, {
                            size: 12,
                            horizontal: !0
                        })]
                    })]
                })
            }
        }
    }
]);