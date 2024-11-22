n.d(t, {
    Af: function () {
        return Z;
    },
    Am: function () {
        return ef;
    },
    Ap: function () {
        return e_;
    },
    CY: function () {
        return F;
    },
    Gf: function () {
        return z;
    },
    I5: function () {
        return O.I5;
    },
    JE: function () {
        return eC;
    },
    JP: function () {
        return H;
    },
    L7: function () {
        return Y;
    },
    M5: function () {
        return O.M5;
    },
    MY: function () {
        return eO;
    },
    PK: function () {
        return eg;
    },
    PV: function () {
        return eu;
    },
    Px: function () {
        return J;
    },
    Qo: function () {
        return eR;
    },
    Rd: function () {
        return K;
    },
    Rt: function () {
        return ey;
    },
    T4: function () {
        return j;
    },
    U2: function () {
        return i;
    },
    Ue: function () {
        return eD;
    },
    V7: function () {
        return en;
    },
    W_: function () {
        return eb;
    },
    Wz: function () {
        return eZ;
    },
    XK: function () {
        return ex;
    },
    Z8: function () {
        return el;
    },
    Zx: function () {
        return ew;
    },
    _O: function () {
        return eF;
    },
    a5: function () {
        return eS;
    },
    aS: function () {
        return V;
    },
    al: function () {
        return eL;
    },
    aq: function () {
        return Q;
    },
    bt: function () {
        return eh;
    },
    dn: function () {
        return eT;
    },
    eP: function () {
        return W;
    },
    fr: function () {
        return eA;
    },
    gB: function () {
        return eM;
    },
    gq: function () {
        return X;
    },
    gy: function () {
        return em;
    },
    he: function () {
        return eG;
    },
    if: function () {
        return eN;
    },
    jP: function () {
        return q;
    },
    k5: function () {
        return eU;
    },
    lY: function () {
        return ec;
    },
    qV: function () {
        return ee;
    },
    u0: function () {
        return eV;
    },
    uV: function () {
        return ea;
    },
    uZ: function () {
        return eo;
    },
    v6: function () {
        return ep;
    },
    v9: function () {
        return eP;
    },
    xG: function () {
        return eH;
    },
    yd: function () {
        return O.yd;
    },
    zL: function () {
        return et;
    },
    zV: function () {
        return ev;
    }
}),
    n(411104),
    n(47120),
    n(733860),
    n(724458),
    n(653041);
var r,
    i,
    a,
    s,
    o = n(512722),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(848246);
n(442837);
var f = n(782568),
    _ = n(710845),
    p = n(114064),
    h = n(803905),
    m = n(439017),
    g = n(301766),
    E = n(594174),
    v = n(351402),
    I = n(853872),
    b = n(509545),
    T = n(78839),
    S = n(122289),
    y = n(55935),
    A = n(70956),
    N = n(424218),
    C = n(358085),
    R = n(380684),
    O = n(111361),
    D = n(937615),
    L = n(981631),
    x = n(334431),
    w = n(474936),
    M = n(231338),
    P = n(388032);
let k = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    U = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    G = new _.Z('PremiumUtils.tsx'),
    B = {
        [w.Xh.NONE_MONTH]: [w.Xh.NONE_YEAR, w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1],
        [w.Xh.NONE_YEAR]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1],
        [w.Xh.PREMIUM_MONTH_TIER_0]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1, w.Xh.PREMIUM_YEAR_TIER_0],
        [w.Xh.PREMIUM_YEAR_TIER_0]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1],
        [w.Xh.PREMIUM_MONTH_TIER_1]: [w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1],
        [w.Xh.PREMIUM_YEAR_TIER_1]: [w.Xh.PREMIUM_YEAR_TIER_2],
        [w.Xh.PREMIUM_MONTH_TIER_2]: [w.Xh.PREMIUM_YEAR_TIER_2],
        [w.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [w.Xh.NONE_MONTH, w.Xh.NONE_YEAR, w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_MONTH_TIER_1, w.Xh.PREMIUM_YEAR_TIER_0, w.Xh.PREMIUM_MONTH_TIER_0]
    };
function Z(e) {
    return e.items.find((e) => w.dJ.has(e.planId));
}
function F(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null !== (t = I.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        a = T.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (i = a.paymentSourceId), V(e, n, r, { paymentSourceId: i });
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != b.Z.get(e)) {
        let r = L.tuJ.DEFAULT;
        n ? (r = L.tuJ.GIFT) : t && (r = L.tuJ.PREMIUM_TIER_1);
        let s = (function (e) {
            let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: L.tuJ.DEFAULT },
                i = j(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
            return (0 === i.length && G.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
        })(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: a
        });
        if (null == s) {
            let t = Error("Couldn't find price");
            throw (
                ((0, S.q2)(t, {
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
        return s;
    }
    let s = Error('Plan not found');
    throw (
        ((0, S.q2)(s, {
            tags: {
                planId: e,
                currency: null != a ? a : 'unknown'
            },
            extra: {
                ...r,
                isGift: n
            }
        }),
        s)
    );
}
((a = r || (r = {})).BUNDLE = 'bundle'), (a.TIER_0 = 'tier_0'), (a.TIER_1 = 'tier_1'), (a.TIER_2 = 'tier_2'), (a.PREMIUM_GUILD = 'premium_guild'), ((s = i || (i = {})).MID = 'mid'), (s.HIGH = 'high');
function j(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: L.tuJ.DEFAULT },
        r = (function (e, t) {
            let n = b.Z.get(e);
            if (null == n) {
                let n = Error('Plan not found');
                throw (
                    ((0, S.q2)(n, {
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
            if (null == r) throw (G.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
            return r;
        })(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            G.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), G.info('prices: '.concat(i));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, S.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        G.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, S.q2)(t, {
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
function H(e) {
    switch (e) {
        case w.EA.MONTH:
            return P.intl.string(P.t.FPybU1);
        case w.EA.YEAR:
            return P.intl.string(P.t.tfqrho);
        case w.EA.DAY:
        case w.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function Y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : w.p9.TIER_2;
    if (t || n)
        switch (e) {
            case w.rV.MONTH:
                let s = P.intl.formatToPlainString(a === w.p9.TIER_0 ? P.t.NPKsLy : P.t.poEovb, { timeInterval: P.intl.string(P.t.FPybU1) });
                return i ? s : P.intl.string(P.t.Mh9bTk);
            case w.rV.YEAR:
                let o = P.intl.formatToPlainString(a === w.p9.TIER_0 ? P.t.NPKsLy : P.t.poEovb, { timeInterval: P.intl.string(P.t.tfqrho) });
                return i ? o : P.intl.string(P.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case w.rV.MONTH:
            if (1 !== r) return P.intl.formatToPlainString(P.t['0UlZnJ'], { intervalCount: r });
            return P.intl.string(P.t['DKzs9/']);
        case w.rV.YEAR:
            return P.intl.string(P.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function W(e) {
    switch (e) {
        case w.rV.MONTH:
            return P.intl.string(P.t.FPybU1);
        case w.rV.YEAR:
            return P.intl.string(P.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function K(e) {
    let t = w.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, S.q2)(n, { tags: { planId: e } }), n);
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
            return t ? P.intl.format(P.t.TZXHNj, { duration: r }) : n ? P.intl.string(P.t['81iAgo']) : P.intl.string(P.t['0efVPz']);
        case w.Xh.PREMIUM_YEAR_TIER_0:
            return t ? P.intl.format(P.t.eqRhCw, { duration: r }) : n ? P.intl.string(P.t.UvzqY2) : P.intl.string(P.t.eoVuBg);
        case w.Xh.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t['g/dH5u']) : P.intl.string(P.t['7O6qSk']);
        case w.Xh.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.pdZJam) : P.intl.string(P.t.Md5xbm);
        case w.Xh.PREMIUM_MONTH_TIER_2:
            return t ? P.intl.format(P.t.aI6QX1, { duration: r }) : n ? P.intl.string(P.t.SmVbHR) : P.intl.string(P.t.FKYNCw);
        case w.Xh.PREMIUM_YEAR_TIER_2:
            return t ? P.intl.format(P.t['1wBcPj'], { duration: r }) : n ? P.intl.string(P.t.JIq4Oz) : P.intl.string(P.t['cfu/5e']);
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
            return P.intl.string(P.t.wCbINj);
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
            return P.intl.string(P.t['e3/Ara']);
        case w.Xh.PREMIUM_MONTH_GUILD:
            return n ? P.intl.string(P.t['6ZR3Bw']) : P.intl.string(P.t.h80cx8);
        case w.Xh.PREMIUM_YEAR_GUILD:
            return n ? P.intl.string(P.t.YDpAzc) : P.intl.string(P.t.ZHkls7);
        case w.Xh.PREMIUM_3_MONTH_GUILD:
            return P.intl.string(P.t.EZHHBw);
        case w.Xh.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.X2KDOz);
        case w.Xh.PREMIUM_MONTH_LEGACY:
            return P.intl.string(P.t['PD6k7+']);
        case w.Xh.PREMIUM_YEAR_LEGACY:
            return P.intl.string(P.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, S.q2)(i, { tags: { planId: e } }), i);
}
function q(e) {
    switch (e) {
        case w.Si.TIER_0:
            return P.intl.string(P.t['t9uG/v']);
        case w.Si.TIER_1:
            return P.intl.string(P.t['FSOz7+']);
        case w.Si.TIER_2:
            return P.intl.string(P.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, S.q2)(t, { tags: { skuId: e } }), t);
}
function Q(e) {
    switch (e) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
        case w.Xh.PREMIUM_YEAR_TIER_0:
            return P.intl.string(P.t['t9uG/v']);
        case w.Xh.PREMIUM_MONTH_TIER_1:
        case w.Xh.PREMIUM_YEAR_TIER_1:
            return P.intl.string(P.t['FSOz7+']);
        case w.Xh.PREMIUM_MONTH_TIER_2:
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
        case w.Xh.PREMIUM_YEAR_TIER_2:
            return P.intl.string(P.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, S.q2)(t, { tags: { planId: e } }), t);
}
function X(e) {
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
    throw ((0, S.q2)(n, { tags: { planId: e } }), n);
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case w.p9.TIER_0:
            return t ? 'Basic' : P.intl.string(P.t['t9uG/v']);
        case w.p9.TIER_1:
            return t ? 'Classic' : P.intl.string(P.t['FSOz7+']);
        case w.p9.TIER_2:
            return P.intl.string(P.t['lG6a5+']);
    }
}
function $(e) {
    var t, n, r, i, a, s, o, l, u, d;
    let { subscription: _, planId: p, price: h, includePremiumGuilds: m, hasDiscountApplied: g, activeDiscountInfo: v, renewalInvoicePreview: I, hasFractionalPremiumWithSub: b } = e,
        T = w.GP[p],
        S = eB(F(T.id), T.interval),
        A = eE(_) || (null == _.paymentSourceId && !_.isPurchasedExternally && !(null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        N = null != h,
        C = _.status === L.O0b.UNPAID && null !== _.latestInvoice && (null === (n = _.latestInvoice) || void 0 === n ? void 0 : n.status) === L.hUK.OPEN,
        R = A ? L.O0b.CANCELED : C ? L.O0b.UNPAID : _.status,
        O = null === (a = null !== (i = null == I ? void 0 : I.taxInclusive) && void 0 !== i ? i : null === (r = _.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === a || a,
        D = w.cb + (m ? ea(_.additionalPlans) : 0),
        x = N ? (O ? P.intl.format(P.t['cd+hqK'], { price: h }) : P.intl.format(P.t.NUkcpK, { price: h })) : P.intl.string(P.t.zYx3Y2),
        M = N ? (O ? P.intl.format(P.t.VsKcFB, { price: h }) : P.intl.format(P.t.hJ5xER, { price: h })) : P.intl.string(P.t['8rSipK']),
        k = N
            ? O
                ? P.intl.format(P.t['jRy6/P'], {
                      price: h,
                      num: D
                  })
                : P.intl.format(P.t.tTNE8P, {
                      price: h,
                      num: D
                  })
            : P.intl.format(P.t['U+z/HB'], { num: D });
    switch (p) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
        case w.Xh.PREMIUM_YEAR_TIER_0:
            switch (R) {
                case L.O0b.CANCELED:
                    return N ? (O ? P.intl.format(P.t['USi/nZ'], { price: h }) : P.intl.format(P.t['FS//l5'], { price: h })) : P.intl.string(P.t.JshLzs);
                case L.O0b.ACCOUNT_HOLD:
                    return N ? (O ? P.intl.format(P.t['5mv+2t'], { price: h }) : P.intl.format(P.t.nkAEfX, { price: h })) : P.intl.format(P.t.SsLIXV, {});
                case L.O0b.UNPAID:
                    return P.intl.format(P.t.cmkbFB, {});
                case L.O0b.PAUSE_PENDING:
                    let U = null != _.pauseEndsAt ? c()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? P.intl.format(P.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : P.intl.format(P.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case L.O0b.PAUSED:
                    if (b) return x;
                    return P.intl.format(P.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case L.O0b.PAST_DUE:
                    return P.intl.format(P.t['d+0vws'], {
                        endDate: (0, y.vc)(ec(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, f.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return x;
            }
        case w.Xh.PREMIUM_MONTH_TIER_1:
        case w.Xh.PREMIUM_YEAR_TIER_1:
            switch (R) {
                case L.O0b.CANCELED:
                    return N ? (O ? P.intl.format(P.t.cXy8Bg, { price: h }) : P.intl.format(P.t['C/XsHh'], { price: h })) : P.intl.string(P.t.K6tYFR);
                case L.O0b.ACCOUNT_HOLD:
                    return N ? (O ? P.intl.format(P.t.HBkIBg, { price: h }) : P.intl.format(P.t.ZsO1S0, { price: h })) : P.intl.format(P.t['0+/WHx'], {});
                case L.O0b.UNPAID:
                    return P.intl.format(P.t.McIzws, {});
                case L.O0b.PAUSE_PENDING:
                    let G = null != _.pauseEndsAt ? c()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? P.intl.format(P.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : P.intl.format(P.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case L.O0b.PAUSED:
                    if (b) return M;
                    return P.intl.format(P.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case L.O0b.PAST_DUE:
                    return P.intl.format(P.t['d+0vws'], {
                        endDate: (0, y.vc)(ec(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, f.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return M;
            }
        case w.Xh.PREMIUM_MONTH_TIER_2:
        case w.Xh.PREMIUM_YEAR_TIER_2:
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (R) {
                case L.O0b.CANCELED:
                    return N
                        ? O
                            ? P.intl.format(P.t.xoFgRk, {
                                  price: h,
                                  num: D
                              })
                            : P.intl.format(P.t.nXdbKi, {
                                  price: h,
                                  num: D
                              })
                        : P.intl.format(P.t.EcSdRE, { num: D });
                case L.O0b.ACCOUNT_HOLD:
                    return N
                        ? O
                            ? P.intl.format(P.t['5C/0QE'], {
                                  price: h,
                                  num: D
                              })
                            : P.intl.format(P.t.xfYkho, {
                                  price: h,
                                  num: D
                              })
                        : P.intl.format(P.t.ivjxcn, { num: D });
                case L.O0b.UNPAID:
                    return P.intl.format(P.t['0HopYW'], { num: D });
                case L.O0b.PAUSE_PENDING:
                    let B = null != _.pauseEndsAt ? c()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != B
                        ? P.intl.format(P.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: B
                          })
                        : P.intl.format(P.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case L.O0b.PAUSED:
                    if (b) return k;
                    return P.intl.format(P.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case L.O0b.BILLING_RETRY:
                    return P.intl.format(P.t['IlJ/HR'], { endDate: c()(_.currentPeriodStart).add(w.A5, 'days').toDate() });
                case L.O0b.PAST_DUE:
                    return P.intl.format(P.t['d+0vws'], {
                        endDate: (0, y.vc)(ec(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, f.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return g
                        ? p === w.Xh.PREMIUM_YEAR_TIER_2
                            ? P.intl.format(P.t['+qqh6u'], {
                                  percent: null !== (s = null == v ? void 0 : v.percentage) && void 0 !== s ? s : w.Bo,
                                  regularPrice: S
                              })
                            : O
                              ? P.intl.formatToPlainString(P.t['3Ziutb'], {
                                    percent: null !== (o = null == v ? void 0 : v.percentage) && void 0 !== o ? o : w.M_,
                                    regularPrice: S,
                                    numMonths: null !== (l = null == v ? void 0 : v.duration) && void 0 !== l ? l : w.rt
                                })
                              : P.intl.formatToPlainString(P.t['G6+XOT'], {
                                    percent: null !== (u = null == v ? void 0 : v.percentage) && void 0 !== u ? u : w.M_,
                                    regularPrice: S,
                                    numMonths: null !== (d = null == v ? void 0 : v.duration) && void 0 !== d ? d : w.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(p));
    }
}
function ee(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: i = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: o = !1 } = e,
        u = b.Z.get(r);
    return (
        l()(null != u, 'Missing plan'),
        $({
            subscription: n,
            planId: u.id,
            price: (function (e, t, n) {
                let r = e.invoiceItems.find((e) => {
                        let { subscriptionPlanId: t } = e;
                        return t === n.id;
                    }),
                    i =
                        null == r
                            ? V(n.id, !1, !1, {
                                  paymentSourceId: t.paymentSourceId,
                                  currency: t.currency
                              }).amount
                            : r.amount;
                return (0, D.og)((0, D.T4)(i, e.currency), n.interval, n.intervalCount);
            })(t, n, u),
            includePremiumGuilds: i,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: o
        })
    );
}
function et(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, g.Q0)(t) ? null : z(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return w.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === w.Xh.PREMIUM_MONTH_GUILD ? P.t.Pi5yMD : (null == i ? void 0 : i.planId) === w.Xh.PREMIUM_YEAR_GUILD ? P.t.Pi5yMD : null,
        s = null != a ? P.intl.formatToPlainString(a, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != s)
        return P.intl.formatToPlainString(P.t.FN5T9v, {
            premiumDescription: r,
            premiumGuildDescription: s
        });
    if (null != r) return r;
    if (null != s) return s;
    else throw Error('Subscription without premium or premium guild subscription');
}
function en(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, isGift: a, isEligibleForTrial: s, defaultPlanId: o, defaultToMonthlyPlan: l } = e;
    if (null == t || !n) return [];
    let u = void 0 !== o && t === w.GP[o].skuId ? o : void 0;
    void 0 === u && l && !a && (u = w.IW[t]), s && !a && (void 0 === o || (l && w.No.has(o))) && m.k.trackExposure({ location: 'de805e_1' });
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
function er(e) {
    let t = w.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, S.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ei(e) {
    var t;
    return null == e ? B.ALL : null !== (t = B[e]) && void 0 !== t ? t : [];
}
function ea(e) {
    let t = b.Z.getPlanIdsForSkus([eZ(w.Si.GUILD)]);
    l()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let es = new Set([w.Xh.NONE_MONTH, w.Xh.NONE_3_MONTH, w.Xh.NONE_6_MONTH, w.Xh.NONE_YEAR, w.Xh.PREMIUM_MONTH_TIER_0, w.Xh.PREMIUM_MONTH_TIER_1, w.Xh.PREMIUM_MONTH_TIER_2, w.Xh.PREMIUM_YEAR_TIER_0, w.Xh.PREMIUM_YEAR_TIER_1, w.Xh.PREMIUM_YEAR_TIER_2, w.Xh.PREMIUM_3_MONTH_TIER_2, w.Xh.PREMIUM_6_MONTH_TIER_2]);
function eo(e) {
    return es.has(e);
}
function el(e) {
    return w.Z1.has(e);
}
function eu(e) {
    return eo(e) || el(e);
}
function ec(e) {
    var t, n, r, i, a;
    if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = c()(e.metadata.apple_grace_period_expires_date);
        return {
            days: c().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_original_expires_date) != null) {
        let t = c()(e.metadata.google_grace_period_expires_date),
            n = c()(e.metadata.google_original_expires_date);
        return {
            days: c().duration(t.diff(n)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? w.$7 : w.Ue;
        return {
            days: t,
            expiresDate: c()(e.currentPeriodStart).add(t, 'days')
        };
    }
    if ((null === (i = e.metadata) || void 0 === i ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: c()(null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: c()(e.metadata.grace_period_expires_date)
        };
    {
        let t = null == e.paymentSourceId ? w.UA : w.zp;
        return {
            days: t,
            expiresDate: c()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function ed(e, t) {
    let n = c()(e);
    if (t.length > 0) {
        let e = ej(t);
        n = n.add(e, 'hours');
    }
    return n.toDate();
}
function ef(e, t) {
    let n = ej(t);
    if (!(n > 0 && e.fractionalState === w.a$.NONE)) return '';
    let r = {
            days: P.t.fYmir6,
            hours: P.t['C3RO+v'],
            minutes: P.t.r77oHR
        },
        i = (0, y.TD)(0, n * A.Z.Millis.HOUR);
    return (0, y.QX)(i, r);
}
function e_(e) {
    if (null == e) return !1;
    let t = I.Z.getPaymentSource(e);
    return null != t && M.Uk.has(t.type);
}
function ep(e) {
    return e.isPurchasedExternally
        ? e.status === L.O0b.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: r } = e,
                  i = ea(n);
              return 0 === (null != t ? ea(t.additionalPlans) : null) && 0 !== i ? L.O0b.CANCELED : r;
          })(e) === L.O0b.CANCELED;
}
function eh(e) {
    var t, n, r;
    let { subscription: i, user: a, price: s, renewalInvoicePreview: o } = e,
        { planId: u, additionalPlans: c } = i,
        d = b.Z.get(u);
    l()(null != d, 'Missing plan');
    let f = ea(c),
        _ = eI(i.planId, i.paymentSourceId, i.currency, a).amount * f;
    if (null != o) {
        let e = o.invoiceItems.find((e) => w.Z1.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    s = null != s ? s : (0, D.T4)(_, i.currency);
    let p = null === (r = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = i.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
    if (ep(i))
        return i.isPurchasedViaGoogle
            ? P.intl.format(P.t['3/WTrK'], { quantity: f })
            : p
              ? P.intl.format(P.t['0ozBSE'], {
                    quantity: f,
                    rate: (0, D.og)(s, d.interval, d.intervalCount)
                })
              : P.intl.format(P.t['yjsv/v'], {
                    quantity: f,
                    rate: (0, D.og)(s, d.interval, d.intervalCount)
                });
    switch (i.status) {
        case L.O0b.ACCOUNT_HOLD:
            return i.isPurchasedViaGoogle
                ? P.intl.format(P.t.Nlf3nZ, {
                      quantity: f,
                      boostQuantity: f
                  })
                : p
                  ? P.intl.format(P.t.oiRy7u, {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, D.og)(s, d.interval, d.intervalCount)
                    })
                  : P.intl.format(P.t['0QxOAg'], {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, D.og)(s, d.interval, d.intervalCount)
                    });
        case L.O0b.PAUSE_PENDING:
        case L.O0b.PAUSED:
            return P.intl.string(P.t.CduWAg);
        default:
            return i.isPurchasedViaGoogle
                ? P.intl.format(P.t['5iud9v'], { quantity: f })
                : p
                  ? P.intl.format(P.t.eDwrLC, {
                        quantity: f,
                        rate: (0, D.og)(s, d.interval, d.intervalCount)
                    })
                  : P.intl.format(P.t.ijSDcH, {
                        quantity: f,
                        rate: (0, D.og)(s, d.interval, d.intervalCount)
                    });
    }
}
function em(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? V(e.id, !1, r, t) : F(e.id, !1, r),
        a = (0, D.T4)(i.amount, i.currency);
    return e.currency !== M.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function eg(e, t, n) {
    let r = em(e, t, n);
    return (0, D.og)(r, e.interval, e.intervalCount);
}
function eE(e) {
    let { status: t, renewalMutations: n } = e;
    return t === L.O0b.CANCELED || (null != n && (0, g.Q0)(n.planId) && !e.isPurchasedExternally);
}
function ev(e) {
    return e === L.O0b.PAST_DUE || e === L.O0b.ACCOUNT_HOLD || e === L.O0b.BILLING_RETRY;
}
function eI(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: v.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        a = b.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, S.q2)(t, { tags: { planId: e } }), t);
    }
    let s = b.Z.getForSkuAndInterval(eZ(w.Si.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error('Unsupported plan');
        throw ((0, S.q2)(t, { tags: { planId: e } }), t);
    }
    return V(s.id, (0, O.I5)(r), !1, i);
}
function eb(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case w.Xh.PREMIUM_MONTH_TIER_0:
                return P.intl.string(P.t['0ggVqK']);
            case w.Xh.PREMIUM_YEAR_TIER_0:
                return P.intl.string(P.t['jm+ZQ0']);
            case w.Xh.PREMIUM_MONTH_TIER_1:
                return P.intl.string(P.t.uph4Jy);
            case w.Xh.PREMIUM_YEAR_TIER_1:
                return P.intl.string(P.t['D/l7Ym']);
            case w.Xh.PREMIUM_MONTH_TIER_2:
                return P.intl.string(P.t['5l1Mub']);
            case w.Xh.PREMIUM_YEAR_TIER_2:
                return P.intl.string(P.t.G0mISU);
        }
    switch (r) {
        case w.Xh.PREMIUM_MONTH_TIER_0:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['/G3aKy']);
        case w.Xh.PREMIUM_YEAR_TIER_0:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['2eQpsL']);
        case w.Xh.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t.gueLg4);
        case w.Xh.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['MhH/vb']);
        case w.Xh.PREMIUM_MONTH_TIER_2:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t.LQVQIi);
        case w.Xh.PREMIUM_YEAR_TIER_2:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['0nfg19']);
        case w.Xh.PREMIUM_3_MONTH_TIER_2:
        case w.Xh.PREMIUM_6_MONTH_TIER_2:
            return P.intl.formatToPlainString(P.t.BCD4fX, { intervalCount: t.intervalCount });
        case w.Xh.NONE_MONTH:
        case w.Xh.NONE_YEAR:
        case w.Xh.NONE_3_MONTH:
        case w.Xh.NONE_6_MONTH:
        case w.Xh.PREMIUM_MONTH_GUILD:
        case w.Xh.PREMIUM_YEAR_GUILD:
        case w.Xh.PREMIUM_3_MONTH_GUILD:
        case w.Xh.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.eUEeCg);
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, S.q2)(i, { tags: { planId: r } }), i);
}
function eT(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = b.Z.get(t);
    return (
        l()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eS(e) {
    let { intervalType: t = w.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? P.intl.formatToPlainString(P.t.fRNBRU, { weeks: n / 7 }) : P.intl.formatToPlainString(P.t.EIpHEh, { weeks: n / 7 });
            return r ? P.intl.formatToPlainString(P.t['6Cdzo6'], { days: n }) : P.intl.formatToPlainString(P.t['kbBj/v'], { days: n });
        case w.rV.MONTH:
            return r ? P.intl.formatToPlainString(P.t.x5Mgxc, { months: n }) : P.intl.formatToPlainString(P.t['4SEnCQ'], { months: n });
        case w.rV.YEAR:
            return r ? P.intl.formatToPlainString(P.t['h+63ys'], { years: n }) : P.intl.formatToPlainString(P.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function ey(e) {
    let { intervalType: t = w.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case w.rV.DAY:
            if (n >= 7 && n % 7 == 0) return P.intl.formatToPlainString(P.t['8awlzM'], { weeks: n / 7 });
            return P.intl.formatToPlainString(P.t.ZsgnLC, { days: n });
        case w.rV.MONTH:
            return P.intl.formatToPlainString(P.t.Y0HCVV, { months: n });
        case w.rV.YEAR:
            return P.intl.formatToPlainString(P.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eA(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return ey({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eN(e) {
    let { intervalType: t = w.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case w.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? P.intl.formatToPlainString(P.t.iVZYys, { weeks: n / 7 }) : P.intl.formatToPlainString(P.t.EmoBDw, { weeks: n / 7 });
            return r ? P.intl.formatToPlainString(P.t.jzH70d, { days: n }) : P.intl.formatToPlainString(P.t.k2UNz8, { days: n });
        case w.rV.MONTH:
            return r ? P.intl.formatToPlainString(P.t.erUSmJ, { months: n }) : P.intl.formatToPlainString(P.t.kridzM, { months: n });
        case w.rV.YEAR:
            return r ? P.intl.formatToPlainString(P.t.IfYQVF, { years: n }) : P.intl.formatToPlainString(P.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eC(e, t) {
    switch (e) {
        case L.gg$.APPLE_PARTNER:
        case L.gg$.APPLE:
            return k[t];
        case L.gg$.GOOGLE:
            return U[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eR(e, t) {
    return (0, O.I5)(e) || ev(null == t ? void 0 : t.status);
}
function eO(e, t) {
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
function eD(e) {
    return e.filter((e) => !w.dJ.has(e.planId));
}
function eL(e, t, n, r) {
    var i, a;
    l()(r.has(t), 'Expected planId in group');
    let s = !1,
        o = (null !== (a = null === (i = e.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== a ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  {
                      ...e,
                      quantity: n,
                      planId: t
                  })
                : e
        );
    if (!s) {
        let r = {
                planId: t,
                quantity: n
            },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), o.push(r);
    }
    return o.filter((e) => 0 !== e.quantity);
}
function ex(e, t) {
    return eL(e, t, 1, w.dJ);
}
function ew(e, t, n) {
    return eL(e, n, t, w.Z1);
}
function eM(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => w.dJ.has(e.planId));
    if (null != n) {
        let t = b.Z.get(n.planId);
        l()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = b.Z.get(e.planId);
                l()(null != r, 'Missing plan');
                let i = b.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return (
                    l()(null != i, 'Missing planForInterval'),
                    {
                        ...e,
                        planId: i.id
                    }
                );
            }));
    }
    return e;
}
function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = w.a1[e].fileSize;
    return (0, N.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function ek(e) {
    return null == e ? null : e.items.find((e) => w.Z1.has(e.planId));
}
function eU(e) {
    let t = null != e ? Z(e) : null;
    return null != t ? er(t.planId) : null;
}
function eG(e) {
    if (null != e) {
        let t = Z(e);
        if (null != t) return K(t.planId);
    }
}
function eB(e, t) {
    let n = (0, D.T4)(e.amount, e.currency),
        r = W(t);
    return ''.concat(n, '/').concat(r);
}
function eZ(e) {
    return e;
}
function eF(e) {
    return 'isNitroLocked' in e;
}
function eV(e) {
    return null != e && w.OT.includes(e) ? 1 : 2;
}
function ej(e) {
    return eH(e.map((e) => e.skuId));
}
function eH(e) {
    return e.reduce((e, t) => {
        let [n, r] = w.Cx[t],
            i = 1;
        switch (n) {
            case w.Se.HOUR:
                i = 1;
                break;
            case w.Se.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
t.ZP = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < 2592000000,
    isPremiumAtLeast: O.yd,
    isPremium: O.I5,
    isPremiumExactly: O.M5,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: V,
    getDefaultPrice: F,
    getInterval: function (e) {
        let t = w.GP[e];
        if (null != t)
            return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
        let n = Error('Unsupported plan');
        throw ((0, S.q2)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: Y,
    getIntervalStringAsNoun: W,
    getPremiumType: K,
    getDisplayName: z,
    getDisplayPremiumType: X,
    getPremiumPlanOptions: en,
    getUpgradeEligibilities: ei,
    getReverseTrialWeeks: eV,
    getPlanDescription: $,
    isPremiumSku: function (e) {
        return e === w.Si.TIER_0 || e === w.Si.TIER_1 || e === w.Si.TIER_2;
    },
    getClosestUpgrade: function (e) {
        let t = w.GP[e];
        if (null == t) throw Error('Unrecognized plan.');
        let { interval: n } = t,
            r = ei(e);
        for (let e of Object.keys(w.GP)) {
            let { interval: t } = w.GP[e];
            if (n === t && r.includes(e)) return e;
        }
        return null;
    },
    getIntervalMonths: function (e, t) {
        if (e === w.rV.MONTH) return t;
        if (e === w.rV.YEAR) return 12 * t;
        throw Error(''.concat(e, ' interval subscription period not implemented'));
    },
    getUserMaxFileSize: R.h6,
    getSkuIdForPlan: er,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case w.p9.TIER_0:
                return w.Si.TIER_0;
            case w.p9.TIER_1:
                return w.Si.TIER_1;
            case w.p9.TIER_2:
                return w.Si.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        if (K(e) === w.p9.TIER_2) return w.cb;
        return 0;
    },
    getBillingInformationString: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            i =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {
                          fractionalState: w.a$.NONE,
                          endsAt: c()(0),
                          currentEntitlementId: ''
                      },
            a = n
                ? (0, D.T4)(
                      t.invoiceItems
                          .filter((e) => w.UD.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      t.currency
                  )
                : (0, D.T4)(t.total, t.currency);
        if (null != e.trialId && w.h8.includes(e.trialId) && null == e.paymentSourceId) return P.intl.format(P.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
        if (e.status === L.O0b.CANCELED) return P.intl.format(P.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
        if (e.status === L.O0b.PAUSE_PENDING)
            return P.intl.format(P.t.uBLUGR, {
                pauseDate: e.currentPeriodEnd,
                resumeDate: e.pauseEndsAt
            });
        if (e.status === L.O0b.PAUSED)
            return i.fractionalState !== w.a$.NONE
                ? P.intl.format(P.t.Q18lRE, {
                      renewalDate: i.endsAt.toDate(),
                      price: a
                  })
                : null == e.pauseEndsAt
                  ? n
                      ? P.intl.format(P.t.KTYQCg, {
                            planName: P.intl.string(P.t.Ipxkoq),
                            price: a
                        })
                      : P.intl.string(P.t.fMz6Li)
                  : n
                    ? P.intl.format(P.t.zcgtzc, {
                          planName: P.intl.string(P.t.Ipxkoq),
                          resumeDate: e.pauseEndsAt,
                          price: a
                      })
                    : P.intl.format(P.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
        else if (e.status === L.O0b.PAST_DUE) {
            var s, o;
            let t = ec(e).expiresDate;
            return (e.isPurchasedViaGoogle && (null === (s = e.metadata) || void 0 === s ? void 0 : s.google_grace_period_expires_date) != null && (t = c()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (o = e.metadata) || void 0 === o ? void 0 : o.apple_grace_period_expires_date) != null && (t = c()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
                ? P.intl.format(P.t.U2hb3d, {
                      endDate: t.toDate(),
                      paymentGatewayName: M.Vz[e.paymentGateway],
                      paymentSourceLink: eC(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : P.intl.format(P.t.qEIzys, {
                      endDate: t.toDate(),
                      price: a
                  });
        } else {
            if (e.status === L.O0b.BILLING_RETRY)
                return P.intl.format(P.t.EMTLOT, {
                    endDate: c()(e.currentPeriodStart).add(w.A5, 'days').toDate(),
                    price: a
                });
            if (e.status === L.O0b.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, C.isAndroid)()
                    ? P.intl.format(P.t.dtcxw8, {
                          endDate: c()(e.currentPeriodStart).add(w.gh, 'days').toDate(),
                          paymentGatewayName: M.Vz[e.paymentGateway],
                          paymentSourceLink: eC(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                      })
                    : P.intl.format(P.t.EMTLOT, {
                          endDate: c()(e.currentPeriodStart).add(w.gh, 'days').toDate(),
                          price: a
                      });
            if (
                (function (e) {
                    return null != e.paymentSourceId && e_(e.paymentSourceId);
                })(e)
            )
                return P.intl.format(P.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === L.O0b.UNPAID) return P.intl.format(P.t.CzTKoq, { maxProcessingTimeInDays: w.Rg });
            if (e.isPurchasedExternally)
                return P.intl.format(P.t.ZlWXgY, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: M.Vz[e.paymentGateway],
                    subscriptionManagementLink: eC(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                });
            let i = new Date(t.subscriptionPeriodStart);
            return (
                !e.isBoostOnly && (i = ed(i, r)),
                n
                    ? P.intl.format(P.t.Vl3cEB, {
                          planName: P.intl.string(P.t.Ipxkoq),
                          renewalDate: i,
                          price: a
                      })
                    : P.intl.format(P.t.Q18lRE, {
                          renewalDate: i,
                          price: a
                      })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: ed,
    getUnactivatedFractionalPremiumHoursString: ef,
    isSwitchingPlansDisabled: function (e, t) {
        return (null != t && t !== w.a$.NONE) || null != e.renewalMutations || null != e.trialEndsAt || e.status === L.O0b.PAST_DUE;
    },
    getSwitchingPlansDisabledMessage: function (e) {
        let t = null;
        return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? P.intl.string(P.t['0rzJ4O']) : P.intl.string(P.t['9dLQ09'])), null != e.trialEndsAt && (t = P.intl.string(P.t.a9Mdb2)), t;
    },
    isNoneSubscription: g.Q0,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === L.O0b.CANCELED || e.status === L.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eo(t);
        });
        return (n = null == r || (0, g.Q0)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId);
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === L.O0b.CANCELED || e.status === L.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eo(t);
        });
        return (null == r || (0, g.Q0)(r.subscriptionPlanId)) && (n = L.O0b.CANCELED), n;
    },
    isBaseSubscriptionCanceled: eE,
    getPremiumGuildIntervalPrice: eI,
    hasAccountCredit: function (e) {
        return (
            null != e &&
            0 !== e.size &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
                return null != t && null != n && !r;
            })
        );
    },
    getBillingReviewSubheader: eb,
    getIntervalForInvoice: eT,
    getPremiumPlanItem: Z,
    getGuildBoostPlanItem: ek,
    isBoostOnlySubscription: function (e) {
        return null != e && null == Z(e) && null != ek(e);
    },
    getPremiumSkuIdForSubscription: eU,
    getPremiumTypeFromSubscription: eG,
    getPremiumTypeFromSubscriptionRenewalMutations: function (e) {
        if (null != e && null != e.renewalMutations) {
            let t = Z(e.renewalMutations);
            if (null != t) return K(t.planId);
        }
    },
    getPremiumGradientColor: function (e) {
        switch (e) {
            case w.p9.TIER_0:
                return x.Rj.PREMIUM_TIER_0;
            case w.p9.TIER_1:
                return x.Rj.PREMIUM_TIER_1;
            case w.p9.TIER_2:
                return x.Rj.PREMIUM_TIER_2;
        }
    },
    getUnactivatedFractionalPremiumHours: ej,
    castPremiumSubscriptionAsSkuId: eZ,
    canUseAnimatedEmojis: function (e) {
        return (0, h.ks)(h.g_, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, h.ks)(h.m_, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, h.ks)(h._y, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, h.ks)(h.tj, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, h.ks)(h.EQ, e);
    },
    canUseBadges: function (e) {
        return (0, h.ks)(h.Pl, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, h.ks)(h.wN, e);
    },
    canEditDiscriminator: function (e) {
        return (0, h.ks)(h._G, e);
    },
    hasBoostDiscount: function (e) {
        return (0, h.ks)(h.j4, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, h.ks)(h.lX, e);
    },
    canUseFancyVoiceChannelReactions: function (e) {
        return (0, h.ks)(h.Uw, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, h.ks)(h.zm, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, h.ks)(h.zZ, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, h.ks)(h.do, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, h.ks)(h.ZE, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, h.ks)(h.Ej, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, h.ks)(h.Ct, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, h.ks)(h.O1, e);
    },
    canUseClientThemes: function (e) {
        return (0, h.ks)(h.uw, e);
    },
    canStreamQuality: function (e, t) {
        return !!p.Z.hasActiveDemo(d.q.STREAM_HIGH_QUALITY) || ('high' === e ? (0, h.ks)(h.O8, t) : 'mid' === e && (0, h.ks)(h.g7, t));
    },
    hasFreeBoosts: function (e) {
        return (0, h.ks)(h.$0, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, h.ks)(h.ME, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, h.ks)(h.AN, e);
    },
    canUseCollectibles: function (e) {
        return (0, h.ks)(h._O, e);
    },
    canUseCustomNotificationSounds: function (e) {
        return (0, h.ks)(h.qH, e);
    },
    formatPriceString: eB,
    StreamQuality: i
});
