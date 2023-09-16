(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27077], {
        561082: (e, s, l) => {
            e.exports = l.p + "74ede77bc5a3e035803f5ae409d273b9.png"
        },
        227077: (e, s, l) => {
            "use strict";
            l.r(s);
            l.d(s, {
                default: () => R
            });
            var a = l(785893),
                o = l(667294),
                t = l(202351),
                i = l(882723),
                n = l(153686),
                E = l(19585),
                _ = l(455706),
                r = l(473903),
                T = l(652591),
                c = l(116094),
                L = l(401080),
                S = l(2590),
                M = l(203600),
                d = l(131559),
                p = l(473708),
                U = l(547331),
                I = l.n(U);

            function R(e) {
                var s = e.analyticsLocations,
                    U = e.transitionState,
                    R = e.onClose,
                    u = e.title,
                    P = e.description,
                    N = (0, t.e7)([r.default], (function() {
                        return r.default.getCurrentUser()
                    })),
                    m = (0, E.Z)(s, n.Z.PROFILE_THEME_UPSELL_MODAL),
                    h = m.AnalyticsLocationProvider,
                    O = m.analyticsLocations;
                o.useEffect((function() {
                    T.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: M.cd.PROFILE_THEME_UPSELL_MODAL,
                        location_stack: s
                    })
                }), [s]);
                var f = (0, L.Z)({
                    scrollPosition: d.Y_.TRY_IT_OUT,
                    analyticsLocations: O
                });
                return (0, a.jsx)(h, {
                    children: (0, a.jsxs)(i.ModalRoot, {
                        className: I().profileThemesUpsellModal,
                        "aria-label": null != u ? u : p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
                        transitionState: U,
                        children: [(0, a.jsxs)(i.ModalHeader, {
                            className: I().profileThemesUpsellModalHeader,
                            separator: !1,
                            children: [(0, a.jsx)(i.Heading, {
                                variant: "heading-xl/extrabold",
                                className: I().profileThemesUpsellModalTitle,
                                children: null != u ? u : p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
                            }), (0, a.jsx)(i.ModalCloseButton, {
                                className: I().profileThemesUpsellModalCloseButton,
                                onClick: R
                            })]
                        }), (0, a.jsxs)(i.ModalContent, {
                            className: I().profileThemesUpsellModalContent,
                            children: [(0, a.jsx)(i.Text, {
                                className: I().profileThemesUpsellModalDescription,
                                variant: "text-md/normal",
                                children: null != P ? P : p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
                            }), (0, a.jsx)("img", {
                                className: I().profileThemesUpsellModalExampleImage,
                                src: l(561082),
                                alt: p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
                            })]
                        }), (0, a.jsxs)(i.ModalFooter, {
                            className: I().profileThemesUpsellModalFooter,
                            children: [(0, a.jsx)(_.Z, {
                                subscriptionTier: M.Si.TIER_2,
                                size: i.Button.Sizes.SMALL,
                                buttonText: c.ZP.isPremium(N) ? p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : p.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            }), (0, a.jsx)(i.Button, {
                                onClick: function() {
                                    R();
                                    f()
                                },
                                color: i.Button.Colors.PRIMARY,
                                look: i.Button.Looks.LINK,
                                size: i.Button.Sizes.SMALL,
                                children: p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
                            })]
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=9c77b5b1d96b038671ff.js.map