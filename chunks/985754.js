n.d(t, {
    Gv: function () {
        return h;
    },
    Wo: function () {
        return m;
    },
    vB: function () {
        return A;
    }
}),
    n(47120),
    n(653041);
var a = n(217986),
    r = n(133080),
    l = n(63063),
    i = n(937615),
    s = n(981631),
    o = n(231338),
    c = n(388032);
let u = new Set([o.pK.ARS, o.pK.CLP, o.pK.COP]),
    d = new Set([o.pK.USD, o.pK.JPY]),
    m = {
        [s.HeQ.CARD]: () => c.intl.string(c.t['ei5/p6']),
        [s.HeQ.PAYPAL]: () => c.intl.string(c.t['2dgEq6']),
        [s.HeQ.SOFORT]: () => c.intl.string(c.t['edKX//']),
        [s.HeQ.GIROPAY]: () => c.intl.string(c.t['y+0MQU']),
        [s.HeQ.PRZELEWY24]: () => c.intl.string(c.t.u25uLy),
        [s.HeQ.PAYSAFE_CARD]: () => c.intl.string(c.t.boznHB),
        [s.HeQ.GCASH]: () => c.intl.string(c.t.PjehcH),
        [s.HeQ.GRABPAY_MY]: () => c.intl.string(c.t.T5davL),
        [s.HeQ.MOMO_WALLET]: () => c.intl.string(c.t.J0A1Vl),
        [s.HeQ.VENMO]: () => c.intl.string(c.t.jYOezc),
        [s.HeQ.KAKAOPAY]: () => c.intl.string(c.t.CSVexs),
        [s.HeQ.GOPAY_WALLET]: () => c.intl.string(c.t['43J8JC']),
        [s.HeQ.BANCONTACT]: () => c.intl.string(c.t['1ITkfn']),
        [s.HeQ.EPS]: () => c.intl.string(c.t['5BSDU1']),
        [s.HeQ.IDEAL]: () => c.intl.string(c.t.nSbwqK),
        [s.HeQ.CASH_APP]: () => c.intl.string(c.t['+rbTmJ']),
        [s.HeQ.APPLE]: () => c.intl.string(c.t.RFi12t)
    },
    p = [s.HeQ.EPS, s.HeQ.BANCONTACT, s.HeQ.IDEAL, s.HeQ.SOFORT, s.HeQ.GIROPAY, s.HeQ.SEPA_DEBIT, s.HeQ.PAYSAFE_CARD],
    h = (e, t, n, a) => {
        if (null == e) return '';
        let l = (0, r.q9)(e);
        if (t === o.pK.EUR) return n ? c.intl.formatToPlainString(c.t['+5bXbW'], { country: l }) : c.intl.formatToPlainString(c.t['0jblPj'], { currencyISOCode: t.toUpperCase() });
        return a ? c.intl.formatToPlainString(c.t['dBFL//'], { countryName: l }) : c.intl.formatToPlainString(c.t.RJ4939, { country: l });
    },
    A = (e) => {
        let { localizedPricingPromo: t, subscription: n, forceSingleLine: a = !1, userLocale: h } = e,
            { countryCode: A, amount: N, currency: f, paymentSourceTypes: b } = t,
            _ = 0 !== b.length,
            y = E(A),
            P = (0, i.T4)(N, f, {
                style: 'currency',
                currency: f,
                currencyDisplay: 'symbol',
                localeOverride: y
            }),
            g = c.intl.format(c.t['4cHbQ0'], {
                helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                currencyISOCode: f.toUpperCase(),
                localizedPriceWithCurrencySymbol: P
            });
        if (
            (d.has(f) &&
                (g = c.intl.format(c.t['5kvQMz'], {
                    helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: P
                })),
            u.has(f) &&
                (g = c.intl.format(c.t.BrYPGh, {
                    helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    currencyISOCode: f.toUpperCase(),
                    localizedPriceWithCurrencySymbol: P
                })),
            null != n &&
                !n.hasPremiumNitroMonthly &&
                (g = c.intl.format(c.t.xnD0NT, {
                    helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    currencyISOCode: f.toUpperCase()
                })),
            f === o.pK.EUR &&
                (g = a
                    ? c.intl.format(c.t.o60rUF, {
                          country: (0, r.q9)(A),
                          currencyISOCode: f.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                      })
                    : c.intl.format(c.t['N1xw/f'], {
                          currencyISOCode: f.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                      })),
            _)
        ) {
            let e = p.filter((e) => b.includes(e)),
                t = [...e, ...b.filter((e) => !p.includes(e))].slice(0, 2).map((e) => {
                    var t, n;
                    return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.call(m)) && void 0 !== n ? n : c.intl.string(c.t.jdPblp);
                });
            b.length >= 3 && t.push(c.intl.string(c.t.Tp5NkZ));
            let n = new Intl.ListFormat(h, {
                style: 'short',
                type: 'conjunction'
            });
            g = c.intl.format(c.t.QqRQPj, {
                helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                paymentMethods: n.format(t)
            });
        }
        return {
            localizedPricingBannerHeader: c.intl.formatToPlainString(c.t.BuFSam, { country: (0, r.q9)(A) }),
            localizedPricingBannerBody: g,
            localizedPricingBannerLinkOnly: c.intl.format(c.t.XufWPj, { helpCenterLink: l.Z.getArticleURL(s.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: _ ? void 0 : c.intl.string(c.t.YDdBe3)
        };
    },
    E = (e) => {
        let t = a.Z.find((t) => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
