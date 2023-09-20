(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [91142], {
        495068: (e, n, t) => {
            e.exports = t.p + "3255f24f5123fd8769d97157e48cb796.svg"
        },
        377236: (e, n, t) => {
            e.exports = t.p + "6cf42ec75591247991e68cfaf7801a29.svg"
        },
        123435: (e, n, t) => {
            "use strict";
            t.d(n, {
                c8: () => p,
                Vq: () => g,
                oQ: () => O
            });
            var a = t(785893),
                r = (t(667294), t(294184)),
                l = t.n(r),
                s = t(795308),
                i = t(575945),
                c = t(882723),
                o = t(74535),
                u = t(265367),
                E = t(348592),
                d = t(387099),
                _ = t(2590),
                f = t(473708),
                R = t(14373),
                h = t.n(R),
                T = t(495068),
                M = t.n(T),
                I = t(377236),
                N = t.n(I);

            function m(e) {
                var n = e.className,
                    t = (0, o.ZP)(),
                    r = (0, i.wj)(t) ? M() : N();
                return (0, a.jsxs)("div", {
                    className: l()(h().container, n),
                    children: [(0, a.jsx)(c.Heading, {
                        className: h().header,
                        variant: "heading-xl/semibold",
                        children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, a.jsxs)(c.Text, {
                        className: h().description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, a.jsx)("p", {
                            children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, a.jsx)("p", {
                            children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: E.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, a.jsx)("img", {
                        src: r,
                        className: h().splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function p() {
                return (0, a.jsx)(m, {
                    className: h().settings
                })
            }

            function g() {
                return (0, a.jsx)(m, {
                    className: h().modal
                })
            }

            function O(e) {
                var n = e.className;
                return (0, d.Q)() ? (0, a.jsxs)(c.Card, {
                    className: l()(h().blockedPaymentsWarning, n),
                    type: c.Card.Types.CUSTOM,
                    children: [(0, a.jsx)(u.Z, {
                        className: h().blockedPaymentsWarningIcon,
                        color: s.Z.unsafe_rawColors.YELLOW_300.css
                    }), (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: E.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        470387: (e, n, t) => {
            "use strict";
            t.d(n, {
                R: () => a,
                Z: () => l
            });
            var a, r = t(260561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(a || (a = {}));
            const l = (0, r.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: a.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: a.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: a.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            })
        },
        818103: (e, n, t) => {
            "use strict";
            t.d(n, {
                Wt: () => c,
                $g: () => o,
                D3: () => u
            });
            var a = t(260561),
                r = t(116094),
                l = t(470387),
                s = t(203600),
                i = (0, a.B)({
                    id: "2023-07_move_plan_select_to_review",
                    label: "Move plan select to review step",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1,
                        defaultToMonthlyPlan: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled with monthly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !0
                        }
                    }, {
                        id: 2,
                        label: "Enabled with yearly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !1
                        }
                    }]
                });

            function c(e) {
                var n = e.isTrial,
                    t = e.isGift,
                    a = e.selectedSkuId;
                if (n || t || null == a || !s.YQ.includes(a)) return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                };
                if (l.Z.getCurrentConfig({
                        location: "fa931a_1"
                    }).experiment === l.R.MERGE_PLAN_SELECT_TO_REVIEW) {
                    return i.getCurrentConfig({
                        location: "fa931a_2"
                    }, {
                        autoTrackExposure: !0
                    })
                }
                return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                }
            }

            function o(e, n, t) {
                var a = !1;
                if (e && null != n) {
                    null == n.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === t.id
                    })) && (a = !0)
                }
                return a
            }

            function u(e, n, t, a) {
                var l = e.defaultToMonthlyPlan,
                    i = null != t ? (0, r.Af)(t) : null,
                    c = l ? s.IW[n] : s.mn[n],
                    o = null != a ? a : c;
                null != i ? o === i.planId && o === s.IW[n] ? o = s.mn[n] : o === i.planId && o === s.mn[n] ? o = s.IW[n] : i.planId !== s.Xh.PREMIUM_YEAR_TIER_0 && i.planId !== s.Xh.PREMIUM_YEAR_TIER_1 || o !== s.Xh.PREMIUM_MONTH_TIER_2 || (o = s.Xh.PREMIUM_YEAR_TIER_2) : o === s.Xh.PREMIUM_YEAR_TIER_1 && (o = s.Xh.PREMIUM_MONTH_TIER_1);
                return o
            }
        },
        685269: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var a = t(667294);
            var r = [];

            function l(e, n) {
                var t = (0, a.useRef)(),
                    l = (0, a.useRef)(r);
                if (l.current === r) {
                    t.current = e();
                    l.current = n
                } else if (! function(e, n) {
                        if (e.length !== n.length) return !1;
                        for (var t = 0; t < n.length && t < e.length; t++)
                            if (!Object.is(e[t], n[t])) return !1;
                        return !0
                    }(n, l.current)) {
                    t.current = e();
                    l.current = n
                }
                return t.current
            }
        }
    }
]);