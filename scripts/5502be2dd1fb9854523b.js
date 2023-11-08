(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67990"], {
        452113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("850068"),
                l = n("524503"),
                u = n("393414"),
                s = n("162771"),
                o = n("642906"),
                r = n("385179"),
                d = n("49111");

            function c(e) {
                let {
                    onClose: t,
                    initialPlanId: n,
                    analyticsObject: c,
                    analyticsLocation: f,
                    analyticsLocations: p,
                    analyticsSubscriptionType: g,
                    renderHeader: b,
                    planGroup: w,
                    reviewWarningMessage: y,
                    applicationId: h,
                    guildId: m,
                    onComplete: v,
                    forcesTransitionToGuild: k,
                    skuId: C,
                    ...I
                } = e, {
                    subscriptionMetadataRequest: G
                } = (0, o.usePaymentContext)();
                return (0, i.jsx)(r.PaymentModal, {
                    ...I,
                    initialPlanId: n,
                    skuId: C,
                    onClose: e => {
                        t();
                        let n = null == G ? void 0 : G.guild_id;
                        e && null != n && (a.fetchSubscriptions(), (0, l.fetchEntitlementsForGuild)(n), null == v || v(), null != n && (k || s.default.getGuildId() !== n) && (0, u.transitionTo)(d.Routes.CHANNEL(n)))
                    },
                    analyticsLocations: p,
                    analyticsObject: c,
                    analyticsLocation: f,
                    analyticsSubscriptionType: g,
                    renderHeader: b,
                    planGroup: w,
                    reviewWarningMessage: y,
                    applicationId: h,
                    guildId: m,
                    forceNewPaymentModal: !0
                })
            }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return c
                },
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("884691"),
                a = n("866227"),
                l = n.n(a),
                u = n("862337"),
                s = n("296892");
            let o = new Date("2023-01-01T07:59:59.000Z"),
                r = l(o),
                d = (0, s.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function c() {
                let [e, t] = i.useState(() => r.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new u.Timeout,
                        i = () => {
                            let e = r.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                r.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var f = d
        }
    }
]);