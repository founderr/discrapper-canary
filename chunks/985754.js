n.d(t, {
    Gv: function () {
        return p;
    },
    Wo: function () {
        return f;
    },
    vB: function () {
        return m;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(217986),
    o = n(133080),
    s = n(63063),
    l = n(937615),
    u = n(981631),
    c = n(231338),
    d = n(689938);
let _ = new Set([c.pK.ARS, c.pK.CLP, c.pK.COP]),
    E = new Set([c.pK.USD, c.pK.JPY]),
    f = {
        [u.HeQ.CARD]: () => d.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
        [u.HeQ.PAYPAL]: () => d.Z.Messages.PAYMENT_SOURCE_PAYPAL,
        [u.HeQ.SOFORT]: () => d.Z.Messages.PAYMENT_SOURCE_SOFORT,
        [u.HeQ.GIROPAY]: () => d.Z.Messages.PAYMENT_SOURCE_GIROPAY,
        [u.HeQ.PRZELEWY24]: () => d.Z.Messages.PAYMENT_SOURCE_PRZELEWY24,
        [u.HeQ.PAYSAFE_CARD]: () => d.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
        [u.HeQ.GCASH]: () => d.Z.Messages.PAYMENT_SOURCE_GCASH,
        [u.HeQ.GRABPAY_MY]: () => d.Z.Messages.PAYMENT_SOURCE_GRABPAY,
        [u.HeQ.MOMO_WALLET]: () => d.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
        [u.HeQ.VENMO]: () => d.Z.Messages.PAYMENT_SOURCE_VENMO,
        [u.HeQ.KAKAOPAY]: () => d.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
        [u.HeQ.GOPAY_WALLET]: () => d.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
        [u.HeQ.BANCONTACT]: () => d.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
        [u.HeQ.EPS]: () => d.Z.Messages.PAYMENT_SOURCE_EPS,
        [u.HeQ.IDEAL]: () => d.Z.Messages.PAYMENT_SOURCE_IDEAL,
        [u.HeQ.CASH_APP]: () => d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
        [u.HeQ.APPLE]: () => d.Z.Messages.PAYMENT_SOURCE_APPLE
    },
    h = [u.HeQ.EPS, u.HeQ.BANCONTACT, u.HeQ.IDEAL, u.HeQ.SOFORT, u.HeQ.GIROPAY, u.HeQ.SEPA_DEBIT, u.HeQ.PAYSAFE_CARD],
    p = (e, t, n, r) => {
        if (null == e) return '';
        let i = (0, o.q9)(e);
        if (t === c.pK.EUR) return n ? d.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({ country: i }) : d.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({ currencyISOCode: t.toUpperCase() });
        return r ? d.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({ countryName: i }) : d.Z.Messages.LOCALIZED_PRICING_NOTICE.format({ country: i });
    },
    m = (e) => {
        let { localizedPricingPromo: t, subscription: n, forceSingleLine: r = !1, userLocale: i } = e,
            { countryCode: a, amount: p, currency: m, paymentSourceTypes: T } = t,
            g = 0 !== T.length,
            S = I(a),
            A = (0, l.T4)(p, m, {
                style: 'currency',
                currency: m,
                currencyDisplay: 'symbol',
                localeOverride: S
            }),
            v = d.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                currencyISOCode: m.toUpperCase(),
                localizedPriceWithCurrencySymbol: A
            });
        if (
            (E.has(m) &&
                (v = d.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                    helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: A
                })),
            _.has(m) &&
                (v = d.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                    helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                    currencyISOCode: m.toUpperCase(),
                    localizedPriceWithCurrencySymbol: A
                })),
            null != n &&
                !n.hasPremiumNitroMonthly &&
                (v = d.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                    helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                    currencyISOCode: m.toUpperCase()
                })),
            m === c.pK.EUR &&
                (v = r
                    ? d.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                          country: (0, o.q9)(a),
                          currencyISOCode: m.toUpperCase(),
                          helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                      })
                    : d.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                          currencyISOCode: m.toUpperCase(),
                          helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                      })),
            g)
        ) {
            let e = h.filter((e) => T.includes(e)),
                t = [...e, ...T.filter((e) => !h.includes(e))].slice(0, 2).map((e) => {
                    var t, n;
                    return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : d.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
                });
            T.length >= 3 && t.push(d.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
            let n = new Intl.ListFormat(i, {
                style: 'short',
                type: 'conjunction'
            });
            v = d.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                paymentMethods: n.format(t)
            });
        }
        return {
            localizedPricingBannerHeader: d.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({ country: (0, o.q9)(a) }),
            localizedPricingBannerBody: v,
            localizedPricingBannerLinkOnly: d.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({ helpCenterLink: s.Z.getArticleURL(u.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: g ? void 0 : d.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
        };
    },
    I = (e) => {
        let t = a.Z.find((t) => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
