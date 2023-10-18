(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [82871], {
        459897: (e, r, n) => {
            e.exports = n.p + "ba2f2540c2d139c6505d3e0d55575044.svg"
        },
        982871: (e, r, n) => {
            "use strict";
            n.r(r);
            n.d(r, {
                default: () => d
            });
            var t = n(785893),
                o = (n(667294), n(593166)),
                a = n(799066),
                i = n(245325),
                c = n(442212),
                s = n(203600),
                u = n(2590),
                l = n(473708),
                O = n(382422),
                p = n.n(O),
                f = n(459897),
                _ = n.n(f);

            function b(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function y(e, r) {
                if (null == e) return {};
                var n, t, o = function(e, r) {
                    if (null == e) return {};
                    var n, t, o = {},
                        a = Object.keys(e);
                    for (t = 0; t < a.length; t++) {
                        n = a[t];
                        r.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < a.length; t++) {
                        n = a[t];
                        r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function d(e) {
                var r = function() {
                        null == f || f();
                        n();
                        (0, o.z)()
                    },
                    n = e.onClose,
                    O = e.analyticsSource,
                    f = e.onLearnMore,
                    d = y(e, ["onClose", "analyticsSource", "onLearnMore"]),
                    g = (0, i.Z)({
                        autoTrackExposure: !0,
                        experiment: a.Z,
                        location: "video_backgrounds_upsell"
                    }),
                    E = g.isLoading,
                    L = g.suggestedPremiumType === s.p9.TIER_0 ? s.Si.TIER_0 : s.Si.TIER_2,
                    S = L === s.Si.TIER_0 ? l.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                        onLearnMore: r
                    }) : l.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                        onLearnMore: r
                    });
                return (0, t.jsx)(c.Z, function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {},
                            t = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        t.forEach((function(r) {
                            b(e, r, n[r])
                        }))
                    }
                    return e
                }({
                    artURL: _(),
                    artContainerClassName: p().videoBackgroundArt,
                    type: s.cd.VIDEO_BACKGROUNDS_MODAL,
                    title: l.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: S,
                    glowUp: S,
                    analyticsSource: O,
                    analyticsLocation: {
                        page: u.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: u.qAy.BUTTON_CTA
                    },
                    onClose: n,
                    subscriptionTier: L,
                    isLoading: E
                }, d))
            }
        }
    }
]);