(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32098"], {
        452113: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("37983");
            r("884691");
            var l = r("850068"),
                i = r("524503"),
                a = r("393414"),
                E = r("162771"),
                u = r("642906"),
                R = r("385179"),
                _ = r("49111");

            function s(e) {
                let {
                    onClose: t,
                    initialPlanId: r,
                    analyticsObject: s,
                    analyticsLocation: f,
                    analyticsLocations: d,
                    analyticsSubscriptionType: I,
                    renderHeader: o,
                    planGroup: c,
                    reviewWarningMessage: L,
                    applicationId: A,
                    guildId: T,
                    onComplete: S,
                    forcesTransitionToGuild: F,
                    skuId: p,
                    ...h
                } = e, {
                    subscriptionMetadataRequest: N
                } = (0, u.usePaymentContext)();
                return (0, n.jsx)(R.PaymentModal, {
                    ...h,
                    initialPlanId: r,
                    skuId: p,
                    onClose: e => {
                        t();
                        let r = null == N ? void 0 : N.guild_id;
                        e && null != r && (l.fetchSubscriptions(), (0, i.fetchEntitlementsForGuild)(r), null == S || S(), null != r && (F || E.default.getGuildId() !== r) && (0, a.transitionTo)(_.Routes.CHANNEL(r)))
                    },
                    analyticsLocations: d,
                    analyticsObject: s,
                    analyticsLocation: f,
                    analyticsSubscriptionType: I,
                    renderHeader: o,
                    planGroup: c,
                    reviewWarningMessage: L,
                    applicationId: A,
                    guildId: T,
                    forceNewPaymentModal: !0
                })
            }
        },
        179935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchReferralsRemaining: function() {
                    return u
                },
                checkRecipientEligibility: function() {
                    return R
                },
                createReferralTrial: function() {
                    return _
                },
                resolveReferralTrialOffer: function() {
                    return s
                }
            });
            var n = r("872717"),
                l = r("913144"),
                i = r("819689"),
                a = r("18494"),
                E = r("49111");
            let u = () => (l.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), n.default.get({
                    url: E.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    l.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    l.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                R = e => (l.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), n.default.post({
                    url: E.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    l.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    l.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function _(e) {
                try {
                    var t;
                    let r = await n.default.post({
                            url: E.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = r.body) && void 0 !== t ? t : null;
                    return l.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (e) {
                    if (l.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === E.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = a.default.getCurrentlySelectedChannelId();
                        null != t && i.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function s(e) {
                try {
                    var t;
                    let r = await n.default.get({
                            url: E.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = r.body) && void 0 !== t ? t : null;
                    return l.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (t) {
                    l.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            }), r("222007");
            var n = r("637612"),
                l = r("446674"),
                i = r("913144"),
                a = r("697218"),
                E = r("179935"),
                u = r("49111");
            let R = null,
                _ = {},
                s = [],
                f = new Set,
                d = !1,
                I = new Set,
                o = new Set,
                c = {},
                L = 0,
                A = null,
                T = () => !0;

            function S(e) {
                I.add(e)
            }

            function F(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => p(e))
            }

            function p(e) {
                let t = e.type === n.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!o.has(t) && !I.has(t)) {
                    var r;
                    r = t, I.add(r), i.default.wait(() => (0, E.resolveReferralTrialOffer)(t).catch(u.NOOP_NULL))
                }
            }
            class h extends l.default.Store {
                initialize() {
                    this.waitFor(a.default), this.syncWith([a.default], T)
                }
                checkAndFetchReferralsRemaining() {
                    null == R && !d && L < 5 && (null == A || A < Date.now()) && (0, E.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), R
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == s ? [] : s
                }
                isFetchingReferralsRemaining() {
                    return d
                }
                isFetchingRecipientEligibility(e) {
                    return f.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === _[e] && !f.has(e) && (0, E.checkRecipientEligibility)(e), _[e]
                }
                getRelevantUserTrialOffer(e) {
                    return c[e]
                }
                isResolving(e) {
                    return I.has(e)
                }
            }
            h.displayName = "ReferralTrialStore";
            var N = new h(i.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: r
                    } = e;
                    if (!d && (0, E.fetchReferralsRemaining)(), !f.has(r) && (0, E.checkRecipientEligibility)(r), !I.has(t)) {
                        var n;
                        n = t, I.add(n), i.default.wait(() => (0, E.resolveReferralTrialOffer)(t).catch(u.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    d = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: r
                    } = e;
                    d = !1, R = t, s = r
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    d = !1, L += 1, A = Date.now() + 1e3 * Math.pow(2, L)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    f.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: r
                    } = e;
                    _[t] = r, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    _[t] = !1, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, E.fetchReferralsRemaining)(), c[t.id] = t, s = [...s, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (I.delete(t.id), o.add(t.id), c[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    I.delete(t), o.add(t)
                },
                LOAD_MESSAGES_SUCCESS: F,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    p(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: F,
                LOGOUT: function() {
                    R = null, _ = {}, s = [], f = new Set, d = !1, I = new Set, o = new Set, c = {}, L = 0, A = null
                }
            })
        },
        917247: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                usePremiumTrialOffer: function() {
                    return u
                }
            });
            var n = r("65597"),
                l = r("340412"),
                i = r("540692"),
                a = r("833516"),
                E = r("646718");

            function u(e) {
                var t, r, u, R;
                let _ = (0, a.useTrialOffer)(E.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    s = (0, a.useTrialOffer)(E.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    f = (0, a.useTrialOffer)(E.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    d = (0, a.useTrialOffer)(l.default.getAnyOfUserTrialOfferId([E.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, E.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, E.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, E.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    I = (0, a.useTrialOffer)(E.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    o = (0, n.default)([i.default], () => void 0 === e ? null : i.default.getRelevantUserTrialOffer(e));
                return null !== (R = null !== (u = null !== (r = null !== (t = null != _ ? _ : o) && void 0 !== t ? t : s) && void 0 !== r ? r : f) && void 0 !== u ? u : d) && void 0 !== R ? R : I
            }
        },
        833516: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasUserTrialOfferExpired: function() {
                    return R
                },
                useTrialOffer: function() {
                    return _
                }
            }), r("222007");
            var n = r("884691"),
                l = r("446674"),
                i = r("862337"),
                a = r("697218"),
                E = r("340412"),
                u = r("719923");

            function R(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function _(e) {
                let t = (0, l.useStateFromStores)([E.default], () => E.default.getUserTrialOffer(e)),
                    [r, _] = n.useState(R(t)),
                    s = (0, l.useStateFromStores)([a.default], () => (0, u.isPremium)(a.default.getCurrentUser()));
                return n.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new i.Timeout,
                            n = () => {
                                let l = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(l, () => {
                                    !r && R(t) ? _(!0) : n()
                                })
                            };
                        return n(), () => e.stop()
                    }
                }, [r, t]), r || s ? null : t
            }
        }
    }
]);