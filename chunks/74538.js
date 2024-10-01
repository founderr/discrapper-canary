n.d(t, {
    Af: function () {
        return H;
    },
    Ap: function () {
        return eC;
    },
    CY: function () {
        return Y;
    },
    Gf: function () {
        return ee;
    },
    I5: function () {
        return D.I5;
    },
    JE: function () {
        return ej;
    },
    JP: function () {
        return Q;
    },
    L7: function () {
        return X;
    },
    M5: function () {
        return D.M5;
    },
    MY: function () {
        return eK;
    },
    PK: function () {
        return eM;
    },
    PV: function () {
        return eg;
    },
    Px: function () {
        return ea;
    },
    Qo: function () {
        return eW;
    },
    Rd: function () {
        return J;
    },
    Rt: function () {
        return eH;
    },
    T4: function () {
        return K;
    },
    U2: function () {
        return i;
    },
    Ue: function () {
        return ez;
    },
    V7: function () {
        return ec;
    },
    W_: function () {
        return eF;
    },
    Wz: function () {
        return tv;
    },
    XK: function () {
        return eQ;
    },
    Z8: function () {
        return eT;
    },
    Zx: function () {
        return eX;
    },
    _O: function () {
        return tN;
    },
    a5: function () {
        return eV;
    },
    aS: function () {
        return j;
    },
    al: function () {
        return eq;
    },
    aq: function () {
        return en;
    },
    bt: function () {
        return eb;
    },
    dn: function () {
        return eZ;
    },
    eP: function () {
        return $;
    },
    gB: function () {
        return e$;
    },
    gq: function () {
        return ei;
    },
    gy: function () {
        return eD;
    },
    he: function () {
        return e3;
    },
    if: function () {
        return eY;
    },
    jP: function () {
        return et;
    },
    k5: function () {
        return e2;
    },
    lY: function () {
        return eA;
    },
    qV: function () {
        return es;
    },
    u0: function () {
        return tO;
    },
    uV: function () {
        return eh;
    },
    uZ: function () {
        return eI;
    },
    v6: function () {
        return eL;
    },
    v9: function () {
        return eJ;
    },
    yd: function () {
        return D.yd;
    },
    zL: function () {
        return el;
    },
    zV: function () {
        return ex;
    }
});
var r,
    i,
    a = n(411104);
var o = n(47120);
var s = n(733860);
var l = n(724458);
var u = n(653041);
var c = n(512722),
    d = n.n(c),
    _ = n(913527),
    E = n.n(_),
    f = n(848246);
n(442837);
var h = n(782568),
    p = n(710845),
    m = n(114064),
    I = n(803905),
    T = n(439017),
    g = n(301766),
    S = n(594174),
    A = n(351402),
    v = n(853872),
    N = n(509545),
    O = n(78839),
    R = n(122289),
    C = n(55935),
    y = n(424218),
    L = n(358085),
    b = n(380684),
    D = n(111361),
    M = n(937615),
    P = n(981631),
    U = n(334431),
    w = n(474936),
    x = n(231338),
    G = n(689938);
let k = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    B = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    F = new p.Z('PremiumUtils.tsx'),
    Z = {
        [w.Xh.NONE_MONTH]: [w.Xh.NONE_YEAR, w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1],
        [w.Xh.NONE_YEAR]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1],
        [w.Xh.PREMIUM_MONTH_TIER_0]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1, w.Xh.PREMIUM_YEAR_TIER_0],
        [w.Xh.PREMIUM_YEAR_TIER_0]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1],
        [w.Xh.PREMIUM_MONTH_TIER_1]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1],
        [w.Xh.PREMIUM_YEAR_TIER_1]: [w.Xh.PREMIUM_YEAR_TIER_2],
        [w.Xh.PREMIUM_MONTH_TIER_2]: [w.Xh.PREMIUM_YEAR_TIER_2],
        [w.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [w.Xh.NONE_MONTH, w.Xh.NONE_YEAR, w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1, w.Xh.PREMIUM_YEAR_TIER_0, w.Xh.PREMIUM_MONTH_TIER_0]
    },
    V = 2592000000;
!(function (e) {
    (e.BUNDLE = 'bundle'), (e.TIER_0 = 'tier_0'), (e.TIER_1 = 'tier_1'), (e.TIER_2 = 'tier_2'), (e.PREMIUM_GUILD = 'premium_guild');
})(r || (r = {})),
    !(function (e) {
        (e.MID = 'mid'), (e.HIGH = 'high');
    })(i || (i = {}));
function H(e) {
    return e.items.find((e) => w.dJ.has(e.planId));
}
function Y(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null !== (t = v.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        a = O.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (i = a.paymentSourceId), j(e, n, r, { paymentSourceId: i });
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != N.Z.get(e)) {
        let r = P.tuJ.DEFAULT;
        n ? (r = P.tuJ.GIFT) : t && (r = P.tuJ.PREMIUM_TIER_1);
        let o = z(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: a
        });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                ((0, R.q2)(t, {
                    extra: { paymentSourceId: i },
                    tags: {
                        purchaseType: r.toString(),
                        planId: e,
                        currency: null != a ? a : 'unknown'
                    }
                }),
                t)
            );
        }
        return o;
    }
    let o = Error('Plan not found');
    throw (
        ((0, R.q2)(o, {
            tags: {
                planId: e,
                currency: null != a ? a : 'unknown'
            },
            extra: {
                ...r,
                isGift: n
            }
        }),
        o)
    );
}
function W(e, t) {
    let n = N.Z.get(e);
    if (null == n) {
        let n = Error('Plan not found');
        throw (
            ((0, R.q2)(n, {
                tags: {
                    planId: e,
                    purchaseType: t.toString()
                }
            }),
            n)
        );
    }
    if (null == n.prices) throw Error('No prices returned for '.concat(e, ', is your user in the experiment?'));
    let r = n.prices[t];
    if (null == r) throw (F.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return r;
}
function K(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.tuJ.DEFAULT },
        r = W(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            F.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), F.info('prices: '.concat(i));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, R.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        F.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, R.q2)(t, {
                tags: {
                    countryCode: r.countryPrices.countryCode,
                    planId: e
                }
            }),
            t)
        );
    }
    return r.countryPrices.prices;
}
function z(e) {
    let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: P.tuJ.DEFAULT },
        i = K(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === i.length && F.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
}
function q(e) {
    let t = w.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, R.q2)(n, { tags: { planId: e } }), n);
}
function Q(e) {
    switch (e) {
        case w.EA.MONTH:
            return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        case w.EA.YEAR:
            return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        case w.EA.DAY:
        case w.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function X(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : w.p9.TIER_2;
    if (t || n)
        switch (e) {
            case w.rV.MONTH:
                let o = (a === w.p9.TIER_0 ? G.Z.Messages.BASIC_GIFT_DURATION : G.Z.Messages.GIFT_DURATION).format({ timeInterval: G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH });
                return i ? o : G.Z.Messages.PAYMENT_MODAL_ONE_MONTH;
            case w.rV.YEAR:
                let s = (a === w.p9.TIER_0 ? G.Z.Messages.BASIC_GIFT_DURATION : G.Z.Messages.GIFT_DURATION).format({ timeInterval: G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR });
                return i ? s : G.Z.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case w.rV.MONTH:
            if (1 !== r) return G.Z.Messages.MULTI_MONTHS.format({ intervalCount: r });
            return G.Z.Messages.MONTHLY;
        case w.rV.YEAR:
            return G.Z.Messages.YEARLY;
        default:
            throw Error('Unexpected interval');
    }
}
function $(e) {
    switch (e) {
        case w.rV.MONTH:
            return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        case w.rV.YEAR:
            return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        default:
            throw Error('Unexpected interval');
    }
}
function J(e) {
    let t = w.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, R.q2)(n, { tags: { planId: e } }), n);
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
            return t ? G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0;
        case w.Xh.PREMIUM_YEAR_TIER_0:
            return t ? G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0;
        case w.Xh.PREMIUM_MONTH_TIER_1:
            return n ? G.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_1;
        case w.Xh.PREMIUM_YEAR_TIER_1:
            return n ? G.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_1;
        case w.Xh.PREMIUM_MONTH_TIER_2:
            return t ? G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2;
        case w.Xh.PREMIUM_YEAR_TIER_2:
            return t ? G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2;
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
            return G.Z.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
            return G.Z.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
        case w.Xh.PREMIUM_MONTH_GUILD:
            return n ? G.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : G.Z.Messages.PREMIUM_GUILD_PLAN_MONTH;
        case w.Xh.PREMIUM_YEAR_GUILD:
            return n ? G.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : G.Z.Messages.PREMIUM_GUILD_PLAN_YEAR;
        case w.Xh.PREMIUM_3_MONTH_GUILD:
            return G.Z.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
        case w.Xh.PREMIUM_6_MONTH_GUILD:
            return G.Z.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
        case w.Xh.PREMIUM_MONTH_LEGACY:
            return G.Z.Messages.PREMIUM_PLAN_MONTH;
        case w.Xh.PREMIUM_YEAR_LEGACY:
            return G.Z.Messages.PREMIUM_PLAN_YEAR;
    }
    let i = Error('Unsupported plan');
    throw ((0, R.q2)(i, { tags: { planId: e } }), i);
}
function et(e) {
    switch (e) {
        case w.Si.TIER_0:
            return G.Z.Messages.PREMIUM_TIER_0;
        case w.Si.TIER_1:
            return G.Z.Messages.PREMIUM_TIER_1;
        case w.Si.TIER_2:
            return G.Z.Messages.PREMIUM_TIER_2;
    }
    let t = Error('Unsupported sku');
    throw ((0, R.q2)(t, { tags: { skuId: e } }), t);
}
function en(e) {
    switch (e) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
        case w.Xh.PREMIUM_YEAR_TIER_0:
            return G.Z.Messages.PREMIUM_TIER_0;
        case w.Xh.PREMIUM_MONTH_TIER_1:
        case w.Xh.PREMIUM_YEAR_TIER_1:
            return G.Z.Messages.PREMIUM_TIER_1;
        case w.Xh.PREMIUM_MONTH_TIER_2:
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
        case w.Xh.PREMIUM_YEAR_TIER_2:
            return G.Z.Messages.PREMIUM_TIER_2;
    }
    let t = Error('Unsupported plan');
    throw ((0, R.q2)(t, { tags: { planId: e } }), t);
}
function er(e, t) {
    if (e === w.rV.MONTH) return t;
    if (e === w.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
        case w.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case w.Xh.PREMIUM_MONTH_TIER_1:
        case w.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case w.Xh.PREMIUM_MONTH_TIER_2:
        case w.Xh.PREMIUM_YEAR_TIER_2:
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, R.q2)(n, { tags: { planId: e } }), n);
}
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case w.p9.TIER_0:
            return t ? 'Basic' : G.Z.Messages.PREMIUM_TIER_0;
        case w.p9.TIER_1:
            return t ? 'Classic' : G.Z.Messages.PREMIUM_TIER_1;
        case w.p9.TIER_2:
            return G.Z.Messages.PREMIUM_TIER_2;
    }
}
function eo(e) {
    var t, n, r, i, a, o, s, l, u, c, d, _, f;
    let { subscription: p, planId: m, price: I, includePremiumGuilds: T, hasDiscountApplied: g, activeDiscountInfo: A, renewalInvoicePreview: v } = e,
        N = w.GP[m],
        O = tA(Y(N.id), N.interval),
        R = ew(p) || (null == p.paymentSourceId && !p.isPurchasedExternally && !(null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        y = null != I,
        L = p.status === P.O0b.UNPAID && null !== p.latestInvoice && (null === (n = p.latestInvoice) || void 0 === n ? void 0 : n.status) === P.hUK.OPEN,
        b = R ? P.O0b.CANCELED : L ? P.O0b.UNPAID : p.status,
        D = null === (a = null !== (i = null == v ? void 0 : v.taxInclusive) && void 0 !== i ? i : null === (r = p.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === a || a,
        M = w.cb + (T ? eh(p.additionalPlans) : 0);
    switch (m) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
        case w.Xh.PREMIUM_YEAR_TIER_0:
            switch (b) {
                case P.O0b.CANCELED:
                    return y ? (D ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({ price: I }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: I })) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                case P.O0b.ACCOUNT_HOLD:
                    return y ? (D ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({ price: I }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: I })) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                case P.O0b.UNPAID:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                case P.O0b.PAUSE_PENDING:
                    let U = null != p.pauseEndsAt ? E()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: p.currentPeriodEnd });
                case P.O0b.PAUSED:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: null !== (o = p.pauseEndsAt) && void 0 !== o ? o : void 0 });
                case P.O0b.PAST_DUE:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, C.vc)(eA(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, h.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return y ? (D ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({ price: I }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({ price: I })) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE;
            }
        case w.Xh.PREMIUM_MONTH_TIER_1:
        case w.Xh.PREMIUM_YEAR_TIER_1:
            switch (b) {
                case P.O0b.CANCELED:
                    return y ? (D ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({ price: I }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: I })) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                case P.O0b.ACCOUNT_HOLD:
                    return y ? (D ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({ price: I }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: I })) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                case P.O0b.UNPAID:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                case P.O0b.PAUSE_PENDING:
                    let x = null != p.pauseEndsAt ? E()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != x
                        ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: x
                          })
                        : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: p.currentPeriodEnd });
                case P.O0b.PAUSED:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: null !== (s = p.pauseEndsAt) && void 0 !== s ? s : void 0 });
                case P.O0b.PAST_DUE:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, C.vc)(eA(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, h.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return y ? (D ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({ price: I }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({ price: I })) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE;
            }
        case w.Xh.PREMIUM_MONTH_TIER_2:
        case w.Xh.PREMIUM_YEAR_TIER_2:
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (b) {
                case P.O0b.CANCELED:
                    return y
                        ? D
                            ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                                  price: I,
                                  num: M
                              })
                            : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                                  price: I,
                                  num: M
                              })
                        : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({ num: M });
                case P.O0b.ACCOUNT_HOLD:
                    return y
                        ? D
                            ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                                  price: I,
                                  num: M
                              })
                            : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                                  price: I,
                                  num: M
                              })
                        : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({ num: M });
                case P.O0b.UNPAID:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({ num: M });
                case P.O0b.PAUSE_PENDING:
                    let k = null != p.pauseEndsAt ? E()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != k
                        ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: k
                          })
                        : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: p.currentPeriodEnd });
                case P.O0b.PAUSED:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: null !== (l = p.pauseEndsAt) && void 0 !== l ? l : void 0 });
                case P.O0b.BILLING_RETRY:
                    return G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({ endDate: E()(p.currentPeriodStart).add(w.A5, 'days').toDate() });
                case P.O0b.PAST_DUE:
                    return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, C.vc)(eA(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, h.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return g
                        ? m === w.Xh.PREMIUM_YEAR_TIER_2
                            ? G.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                  percent: null !== (u = null == A ? void 0 : A.percentage) && void 0 !== u ? u : w.Bo,
                                  regularPrice: O
                              })
                            : D
                              ? G.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                    percent: null !== (c = null == A ? void 0 : A.percentage) && void 0 !== c ? c : w.M_,
                                    regularPrice: O,
                                    numMonths: null !== (d = null == A ? void 0 : A.duration) && void 0 !== d ? d : w.rt
                                })
                              : G.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
                                    percent: null !== (_ = null == A ? void 0 : A.percentage) && void 0 !== _ ? _ : w.M_,
                                    regularPrice: O,
                                    numMonths: null !== (f = null == A ? void 0 : A.duration) && void 0 !== f ? f : w.rt
                                })
                        : y
                          ? D
                              ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                                    price: I,
                                    num: M
                                })
                              : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
                                    price: I,
                                    num: M
                                })
                          : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({ num: M });
            }
        default:
            throw Error('Invalid planId '.concat(m));
    }
}
function es(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: i = !1, hasDiscountApplied: a = !1, activeDiscountInfo: o } = e,
        s = N.Z.get(r);
    return (
        d()(null != s, 'Missing plan'),
        eo({
            subscription: n,
            planId: s.id,
            price: eG(t, n, s),
            includePremiumGuilds: i,
            hasDiscountApplied: a,
            activeDiscountInfo: o,
            renewalInvoicePreview: t
        })
    );
}
function el(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, g.Q0)(t) ? null : ee(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return w.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === w.Xh.PREMIUM_MONTH_GUILD ? G.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == i ? void 0 : i.planId) === w.Xh.PREMIUM_YEAR_GUILD ? G.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null,
        o = null != a ? a.format({ num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != o)
        return G.Z.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: r,
            premiumGuildDescription: o
        });
    if (null != r) return r;
    if (null != o) return o;
    else throw Error('Subscription without premium or premium guild subscription');
}
function eu(e) {
    return e === w.Si.TIER_0 || e === w.Si.TIER_1 || e === w.Si.TIER_2;
}
function ec(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, isGift: a, isEligibleForTrial: o, defaultPlanId: s, defaultToMonthlyPlan: l } = e;
    if (null == t || !n) return [];
    let u = void 0 !== s && t === w.GP[s].skuId ? s : void 0;
    void 0 === u && l && !a && (u = w.IW[t]), o && !a && (void 0 === s || (l && w.No.has(s))) && T.k.trackExposure({ location: 'de805e_1' });
    let c = [];
    switch (t) {
        case w.Si.TIER_0:
            c = [w.Xh.PREMIUM_YEAR_TIER_0, w.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case w.Si.TIER_1:
            c = [w.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case w.Si.TIER_2:
            let d = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (w.o4.has(e)) {
                    let t = w.GP[e];
                    d = [...w.o4].filter((e) => {
                        let n = w.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === w.Si.TIER_2;
                    });
                } else d = [];
            }
            c = [w.Xh.PREMIUM_YEAR_TIER_2, ...d, w.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(t));
    }
    if (void 0 !== u) {
        let e = c.indexOf(u);
        c.splice(e, 1), c.unshift(u);
    }
    return c;
}
function ed(e) {
    let t = w.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, R.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e_(e) {
    switch (e) {
        case w.p9.TIER_0:
            return w.Si.TIER_0;
        case w.p9.TIER_1:
            return w.Si.TIER_1;
        case w.p9.TIER_2:
            return w.Si.TIER_2;
    }
}
function eE(e) {
    var t;
    return null == e ? Z.ALL : null !== (t = Z[e]) && void 0 !== t ? t : [];
}
function ef(e) {
    let t = w.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        r = eE(e);
    for (let e of Object.keys(w.GP)) {
        let { interval: t } = w.GP[e];
        if (n === t && r.includes(e)) return e;
    }
    return null;
}
function eh(e) {
    let t = N.Z.getPlanIdsForSkus([tv(w.Si.GUILD)]);
    d()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
function ep(e) {
    let { additionalPlans: t } = e;
    return eh(t) > 0;
}
let em = new Set([w.Xh.NONE_MONTH, w.Xh.NONE_3_MONTH, w.Xh.NONE_6_MONTH, w.Xh.NONE_YEAR, w.Xh.PREMIUM_MONTH_TIER_0, w.Xh.PREMIUM_MONTH_TIER_1, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_0, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_3_MONTH_TIER_2, w.Xh.PREMIUM_6_MONTH_TIER_2]);
function eI(e) {
    return em.has(e);
}
function eT(e) {
    return w.Z1.has(e);
}
function eg(e) {
    return eI(e) || eT(e);
}
function eS(e) {
    if (J(e) === w.p9.TIER_2) return w.cb;
    return 0;
}
function eA(e) {
    var t, n, r, i, a;
    if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = E()(e.metadata.apple_grace_period_expires_date);
        return {
            days: E().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_original_expires_date) != null) {
        let t = E()(e.metadata.google_grace_period_expires_date),
            n = E()(e.metadata.google_original_expires_date);
        return {
            days: E().duration(t.diff(n)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? w.$7 : w.Ue;
        return {
            days: t,
            expiresDate: E()(e.currentPeriodStart).add(t, 'days')
        };
    }
    if ((null === (i = e.metadata) || void 0 === i ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: E()(null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: E()(e.metadata.grace_period_expires_date)
        };
    {
        let t = null == e.paymentSourceId ? w.UA : w.zp;
        return {
            days: t,
            expiresDate: E()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function ev(e, t) {
    var n, r, i;
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = a
            ? (0, M.T4)(
                  t.invoiceItems
                      .filter((e) => w.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, M.T4)(t.total, t.currency);
    if (null != e.trialId && w.h8.includes(e.trialId) && null == e.paymentSourceId) return G.Z.Messages.REVERSE_TRIAL_PAYMENT_MODAL_INFO.format({ trialEnd: e.currentPeriodEnd });
    if (e.status === P.O0b.CANCELED) return G.Z.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({ endDate: t.subscriptionPeriodStart });
    if (e.status === P.O0b.PAUSE_PENDING)
        return G.Z.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
            pauseDate: e.currentPeriodEnd,
            resumeDate: null !== (n = e.pauseEndsAt) && void 0 !== n ? n : void 0
        });
    if (e.status === P.O0b.PAUSED)
        return null == e.pauseEndsAt
            ? a
                ? G.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                      planName: G.Z.Messages.PREMIUM,
                      price: o
                  })
                : G.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO
            : a
              ? G.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                    planName: G.Z.Messages.PREMIUM,
                    resumeDate: e.pauseEndsAt,
                    price: o
                })
              : G.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({ resumeDate: e.pauseEndsAt });
    else if (e.status === P.O0b.PAST_DUE) {
        let t = eA(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = E()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (i = e.metadata) || void 0 === i ? void 0 : i.apple_grace_period_expires_date) != null && (t = E()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? G.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                  endDate: t.toDate(),
                  paymentGatewayName: x.Vz[e.paymentGateway],
                  paymentSourceLink: ej(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : G.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                  endDate: t.toDate(),
                  price: o
              });
    } else if (e.status === P.O0b.BILLING_RETRY)
        return G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
            endDate: E()(e.currentPeriodStart).add(w.A5, 'days').toDate(),
            price: o
        });
    else if (e.status === P.O0b.ACCOUNT_HOLD)
        return e.isPurchasedViaGoogle && !(0, L.isAndroid)()
            ? G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                  endDate: E()(e.currentPeriodStart).add(w.gh, 'days').toDate(),
                  paymentGatewayName: x.Vz[e.paymentGateway],
                  paymentSourceLink: ej(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                  endDate: E()(e.currentPeriodStart).add(w.gh, 'days').toDate(),
                  price: o
              });
    else
        return eR(e)
            ? G.Z.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({ prepaidEndDate: e.currentPeriodEnd })
            : e.status === P.O0b.UNPAID
              ? G.Z.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({ maxProcessingTimeInDays: w.Rg })
              : e.isPurchasedExternally
                ? G.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                      renewalDate: t.subscriptionPeriodStart,
                      paymentGatewayName: x.Vz[e.paymentGateway],
                      subscriptionManagementLink: ej(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                  })
                : a
                  ? G.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                        planName: G.Z.Messages.PREMIUM,
                        renewalDate: t.subscriptionPeriodStart,
                        price: o
                    })
                  : G.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                        renewalDate: t.subscriptionPeriodStart,
                        price: o
                    });
}
function eN(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === P.O0b.PAST_DUE;
}
function eO(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? G.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : G.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != e.trialEndsAt && (t = G.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), t;
}
function eR(e) {
    return null != e.paymentSourceId && eC(e.paymentSourceId);
}
function eC(e) {
    if (null == e) return !1;
    let t = v.Z.getPaymentSource(e);
    return null != t && x.Uk.has(t.type);
}
function ey(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = eh(n);
    return 0 === (null != t ? eh(t.additionalPlans) : null) && 0 !== i ? P.O0b.CANCELED : r;
}
function eL(e) {
    return e.isPurchasedExternally ? e.status === P.O0b.CANCELED : ey(e) === P.O0b.CANCELED;
}
function eb(e) {
    var t, n, r;
    let { subscription: i, user: a, price: o, renewalInvoicePreview: s } = e,
        { planId: l, additionalPlans: u } = i,
        c = N.Z.get(l);
    d()(null != c, 'Missing plan');
    let _ = eh(u),
        E = ek(i.planId, i.paymentSourceId, i.currency, a).amount * _;
    if (null != s) {
        let e = s.invoiceItems.find((e) => w.Z1.has(e.subscriptionPlanId));
        null != e && (E = e.amount);
    }
    o = null != o ? o : (0, M.T4)(E, i.currency);
    let f = null === (r = null !== (n = null == s ? void 0 : s.taxInclusive) && void 0 !== n ? n : null === (t = i.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
    if (eL(i))
        return i.isPurchasedViaGoogle
            ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({ quantity: _ })
            : f
              ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
                    quantity: _,
                    rate: (0, M.og)(o, c.interval, c.intervalCount)
                })
              : G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                    quantity: _,
                    rate: (0, M.og)(o, c.interval, c.intervalCount)
                });
    switch (i.status) {
        case P.O0b.ACCOUNT_HOLD:
            return i.isPurchasedViaGoogle
                ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
                      quantity: _,
                      boostQuantity: _
                  })
                : f
                  ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, M.og)(o, c.interval, c.intervalCount)
                    })
                  : G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, M.og)(o, c.interval, c.intervalCount)
                    });
        case P.O0b.PAUSE_PENDING:
        case P.O0b.PAUSED:
            return G.Z.Messages.GUILD_BOOSTING_DISABLED_HEADER;
        default:
            return i.isPurchasedViaGoogle
                ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({ quantity: _ })
                : f
                  ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
                        quantity: _,
                        rate: (0, M.og)(o, c.interval, c.intervalCount)
                    })
                  : G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
                        quantity: _,
                        rate: (0, M.og)(o, c.interval, c.intervalCount)
                    });
    }
}
function eD(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? j(e.id, !1, r, t) : Y(e.id, !1, r),
        a = (0, M.T4)(i.amount, i.currency);
    return e.currency !== x.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function eM(e, t, n) {
    let r = eD(e, t, n);
    return (0, M.og)(r, e.interval, e.intervalCount);
}
function eP(e, t) {
    let { planId: n } = e;
    if (e.status === P.O0b.CANCELED || e.status === P.O0b.PAUSE_PENDING) return n;
    d()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eI(t);
    });
    return (n = null == r || (0, g.Q0)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId);
}
function eU(e, t) {
    let { status: n } = e;
    if (e.status === P.O0b.CANCELED || e.status === P.O0b.PAUSE_PENDING) return n;
    d()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eI(t);
    });
    return (null == r || (0, g.Q0)(r.subscriptionPlanId)) && (n = P.O0b.CANCELED), n;
}
function ew(e) {
    let { status: t, renewalMutations: n } = e;
    return t === P.O0b.CANCELED || (null != n && (0, g.Q0)(n.planId) && !e.isPurchasedExternally);
}
function ex(e) {
    return e === P.O0b.PAST_DUE || e === P.O0b.ACCOUNT_HOLD || e === P.O0b.BILLING_RETRY;
}
function eG(e, t, n) {
    let r = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return t === n.id;
        }),
        i =
            null == r
                ? j(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency
                  }).amount
                : r.amount;
    return (0, M.og)((0, M.T4)(i, e.currency), n.interval, n.intervalCount);
}
function ek(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: A.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        a = N.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, R.q2)(t, { tags: { planId: e } }), t);
    }
    let o = N.Z.getForSkuAndInterval(tv(w.Si.GUILD), a.interval, a.intervalCount);
    if (null == o) {
        let t = Error('Unsupported plan');
        throw ((0, R.q2)(t, { tags: { planId: e } }), t);
    }
    return j(o.id, (0, D.I5)(r), !1, i);
}
function eB(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eF(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case w.Xh.PREMIUM_MONTH_TIER_0:
                return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case w.Xh.PREMIUM_YEAR_TIER_0:
                return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case w.Xh.PREMIUM_MONTH_TIER_1:
                return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case w.Xh.PREMIUM_YEAR_TIER_1:
                return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case w.Xh.PREMIUM_MONTH_TIER_2:
                return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case w.Xh.PREMIUM_YEAR_TIER_2:
                return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2;
        }
    switch (r) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
            return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
        case w.Xh.PREMIUM_YEAR_TIER_0:
            return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
        case w.Xh.PREMIUM_MONTH_TIER_1:
            return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
        case w.Xh.PREMIUM_YEAR_TIER_1:
            return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
        case w.Xh.PREMIUM_MONTH_TIER_2:
            return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
        case w.Xh.PREMIUM_YEAR_TIER_2:
            return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
            return G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({ intervalCount: t.intervalCount });
        case w.Xh.NONE_MONTH:
        case w.Xh.NONE_YEAR:
        case w.Xh.NONE_3_MONTH:
        case w.Xh.NONE_6_MONTH:
        case w.Xh.PREMIUM_MONTH_GUILD:
        case w.Xh.PREMIUM_YEAR_GUILD:
        case w.Xh.PREMIUM_3_MONTH_GUILD:
        case w.Xh.PREMIUM_6_MONTH_GUILD:
            return G.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT;
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, R.q2)(i, { tags: { planId: r } }), i);
}
function eZ(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = N.Z.get(t);
    return (
        d()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eV(e) {
    let { intervalType: t = w.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({ weeks: n / 7 }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({ weeks: n / 7 });
            return r ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({ days: n }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({ days: n });
        case w.rV.MONTH:
            return r ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({ months: n }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({ months: n });
        case w.rV.YEAR:
            return r ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({ years: n }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eH(e) {
    let { intervalType: t = w.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case w.rV.DAY:
            if (n >= 7 && n % 7 == 0) return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({ weeks: n / 7 });
            return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({ days: n });
        case w.rV.MONTH:
            return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({ months: n });
        case w.rV.YEAR:
            return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eY(e) {
    let { intervalType: t = w.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? G.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({ weeks: n / 7 }) : G.Z.Messages.DURATION_WEEKS.format({ weeks: n / 7 });
            return r ? G.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: n }) : G.Z.Messages.DURATION_DAYS.format({ days: n });
        case w.rV.MONTH:
            return r ? G.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: n }) : G.Z.Messages.DURATION_MONTHS.format({ months: n });
        case w.rV.YEAR:
            return r ? G.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: n }) : G.Z.Messages.DURATION_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function ej(e, t) {
    switch (e) {
        case P.gg$.APPLE_PARTNER:
        case P.gg$.APPLE:
            return k[t];
        case P.gg$.GOOGLE:
            return B[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eW(e, t) {
    return (0, D.I5)(e) || ex(null == t ? void 0 : t.status);
}
function eK(e, t) {
    var n, r;
    let i = [],
        a = (null !== (r = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : e.items).find((e) => w.dJ.has(e.planId));
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items)
                if (t.planId === n.planId)
                    return {
                        ...n,
                        ...t
                    };
            return t;
        })
    );
}
function ez(e) {
    return e.filter((e) => !w.dJ.has(e.planId));
}
function eq(e, t, n, r) {
    var i, a;
    d()(r.has(t), 'Expected planId in group');
    let o = !1,
        s = (null !== (a = null === (i = e.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== a ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((o = !0),
                  {
                      ...e,
                      quantity: n,
                      planId: t
                  })
                : e
        );
    if (!o) {
        let r = {
                planId: t,
                quantity: n
            },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), s.push(r);
    }
    return s.filter((e) => 0 !== e.quantity);
}
function eQ(e, t) {
    return eq(e, t, 1, w.dJ);
}
function eX(e, t, n) {
    return eq(e, n, t, w.Z1);
}
function e$(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => w.dJ.has(e.planId));
    if (null != n) {
        let t = N.Z.get(n.planId);
        d()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = N.Z.get(e.planId);
                d()(null != r, 'Missing plan');
                let i = N.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return (
                    d()(null != i, 'Missing planForInterval'),
                    {
                        ...e,
                        planId: i.id
                    }
                );
            }));
    }
    return e;
}
function eJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = w.a1[e].fileSize;
    return (0, y.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function e0(e) {
    return null == e ? null : e.items.find((e) => w.Z1.has(e.planId));
}
function e1(e) {
    return null != e && null == H(e) && null != e0(e);
}
function e2(e) {
    let t = null != e ? H(e) : null;
    return null != t ? ed(t.planId) : null;
}
function e3(e) {
    if (null != e) {
        let t = H(e);
        if (null != t) return J(t.planId);
    }
}
function e4(e) {
    if (null != e && null != e.renewalMutations) {
        let t = H(e.renewalMutations);
        if (null != t) return J(t.planId);
    }
}
function e5(e) {
    switch (e) {
        case w.p9.TIER_0:
            return U.Rj.PREMIUM_TIER_0;
        case w.p9.TIER_1:
            return U.Rj.PREMIUM_TIER_1;
        case w.p9.TIER_2:
            return U.Rj.PREMIUM_TIER_2;
    }
}
let e6 = (e) => null != e && Date.now() - e.createdAt.getTime() < V;
function e7(e) {
    return (0, I.ks)(I.g_, e);
}
function e8(e) {
    return (0, I.ks)(I.m_, e);
}
function e9(e) {
    return (0, I.ks)(I._y, e);
}
function te(e) {
    return (0, I.ks)(I.tj, e);
}
function tt(e) {
    return (0, I.ks)(I.EQ, e);
}
function tn(e) {
    return (0, I.ks)(I.Pl, e);
}
function tr(e) {
    return (0, I.ks)(I.wN, e);
}
function ti(e) {
    return (0, I.ks)(I._G, e);
}
function ta(e) {
    return (0, I.ks)(I.j4, e);
}
function to(e) {
    return (0, I.ks)(I.lX, e);
}
function ts(e) {
    return (0, I.ks)(I.Uw, e);
}
function tl(e) {
    return (0, I.ks)(I.zm, e);
}
function tu(e) {
    return (0, I.ks)(I.zZ, e);
}
function tc(e) {
    return (0, I.ks)(I.do, e);
}
function td(e) {
    return (0, I.ks)(I.ZE, e);
}
function t_(e) {
    return (0, I.ks)(I.Ej, e);
}
function tE(e) {
    return (0, I.ks)(I.Ct, e);
}
function tf(e) {
    return (0, I.ks)(I.O1, e);
}
function th(e) {
    return (0, I.ks)(I.uw, e);
}
function tp(e, t) {
    return !!m.Z.hasActiveDemo(f.q.STREAM_HIGH_QUALITY) || ('high' === e ? (0, I.ks)(I.O8, t) : 'mid' === e && (0, I.ks)(I.g7, t));
}
function tm(e) {
    return (0, I.ks)(I.$0, e);
}
function tI(e) {
    return (0, I.ks)(I.ME, e);
}
function tT(e) {
    return (0, I.ks)(I.AN, e);
}
function tg(e) {
    return (0, I.ks)(I._O, e);
}
function tS(e) {
    return (0, I.ks)(I.qH, e);
}
function tA(e, t) {
    let n = (0, M.T4)(e.amount, e.currency),
        r = $(t);
    return ''.concat(n, '/').concat(r);
}
function tv(e) {
    return e;
}
function tN(e) {
    return 'isNitroLocked' in e;
}
function tO(e) {
    return null != e && w.OT.includes(e) ? 1 : 2;
}
function tR(e) {
    return null != e && !e.isProvisional && !e.bot;
}
t.ZP = Object.freeze({
    isNewUser: e6,
    isPremiumAtLeast: D.yd,
    isPremium: D.I5,
    isPremiumExactly: D.M5,
    isPremiumEligible: tR,
    getPrice: j,
    getDefaultPrice: Y,
    getInterval: q,
    getIntervalString: X,
    getIntervalStringAsNoun: $,
    getPremiumType: J,
    getDisplayName: ee,
    getDisplayPremiumType: ei,
    getPremiumPlanOptions: ec,
    getUpgradeEligibilities: eE,
    getReverseTrialWeeks: tO,
    getPlanDescription: eo,
    isPremiumSku: eu,
    getClosestUpgrade: ef,
    getIntervalMonths: er,
    getUserMaxFileSize: b.h6,
    getSkuIdForPlan: ed,
    getSkuIdForPremiumType: e_,
    getNumIncludedPremiumGuildSubscriptionSlots: eS,
    getBillingInformationString: ev,
    isSwitchingPlansDisabled: eN,
    getSwitchingPlansDisabledMessage: eO,
    isNoneSubscription: g.Q0,
    getPlanIdFromInvoice: eP,
    getStatusFromInvoice: eU,
    isBaseSubscriptionCanceled: ew,
    getPremiumGuildIntervalPrice: ek,
    hasAccountCredit: eB,
    getBillingReviewSubheader: eF,
    getIntervalForInvoice: eZ,
    getPremiumPlanItem: H,
    getGuildBoostPlanItem: e0,
    isBoostOnlySubscription: e1,
    getPremiumSkuIdForSubscription: e2,
    getPremiumTypeFromSubscription: e3,
    getPremiumTypeFromSubscriptionRenewalMutations: e4,
    getPremiumGradientColor: e5,
    castPremiumSubscriptionAsSkuId: tv,
    canUseAnimatedEmojis: e7,
    canUseEmojisEverywhere: e8,
    canUseSoundboardEverywhere: e9,
    canUseCustomCallSounds: te,
    canUploadLargeFiles: tt,
    canUseBadges: tn,
    canUseHighVideoUploadQuality: tr,
    canEditDiscriminator: ti,
    hasBoostDiscount: ta,
    canUseAnimatedAvatar: to,
    canUseFancyVoiceChannelReactions: ts,
    canInstallPremiumApplications: tl,
    canUseIncreasedMessageLength: tu,
    canUseIncreasedGuildCap: tc,
    canRedeemPremiumPerks: td,
    canUsePremiumProfileCustomization: t_,
    canUsePremiumAppIcons: tE,
    canUsePremiumGuildMemberProfile: tf,
    canUseClientThemes: th,
    canStreamQuality: tp,
    hasFreeBoosts: tm,
    canUseCustomStickersEverywhere: tI,
    canUseCustomBackgrounds: tT,
    canUseCollectibles: tg,
    canUseCustomNotificationSounds: tS,
    formatPriceString: tA,
    StreamQuality: i
});
