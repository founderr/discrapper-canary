"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [15985], {
        615985: (e, a, t) => {
            t.r(a);
            t.d(a, {
                default: () => _
            });
            var s = t(785893),
                n = t(667294),
                o = t(882723),
                i = t(734691),
                r = t(455706),
                l = t(652591),
                c = t(2590),
                M = t(203600),
                d = t(473708),
                E = t(353098),
                L = t.n(E);
            const _ = function(e) {
                var a = e.transitionState,
                    t = e.onClose;
                n.useEffect((function() {
                    l.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: M.cd.EMOJI_AUTOCOMPLETE_MODAL
                    })
                }), []);
                return (0, s.jsxs)(o.ModalRoot, {
                    transitionState: a,
                    size: o.ModalSize.SMALL,
                    "aria-label": "",
                    children: [(0, s.jsxs)(o.ModalContent, {
                        className: L().content,
                        children: [(0, s.jsx)("div", {
                            role: "image",
                            className: L().image
                        }), (0, s.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            className: L().header,
                            children: d.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_HEADER
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: d.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_BLURB.format({
                                onLearnMore: function() {
                                    t();
                                    i.Z.open(c.oAB.PREMIUM)
                                }
                            })
                        })]
                    }), (0, s.jsx)(o.ModalFooter, {
                        children: (0, s.jsx)(r.Z, {
                            onClick: t,
                            buttonText: "Get Nitro",
                            subscriptionTier: M.Si.TIER_2,
                            premiumModalAnalyticsLocation: {
                                page: c.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL
                            }
                        })
                    }), (0, s.jsx)(o.ModalCloseButton, {
                        className: L().closeButton,
                        onClick: t
                    })]
                })
            }
        }
    }
]);