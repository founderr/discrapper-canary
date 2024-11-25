n.d(t, {
    TB: function () {
        return S;
    },
    VY: function () {
        return y;
    },
    ZP: function () {
        return E;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    C = n(442837),
    a = n(481060),
    o = n(16084),
    d = n(987209),
    u = n(179118),
    c = n(912788),
    p = n(509545),
    x = n(55563),
    _ = n(74538),
    h = n(741245),
    f = n(474936),
    j = n(981631),
    L = n(388032),
    m = n(307862);
function g(e) {
    var t, n;
    let l,
        { planId: s, startingPremiumSubscriptionPlanId: a, paymentSourceType: o } = e,
        [d, u] = (0, C.Wu)([p.Z], () => [p.Z.get(a), p.Z.get(s)]);
    if ((r()(null != d && null != u, 'Missing startingPlan or newPlan'), (t = a), (n = s), f.Y1.indexOf(t) < f.Y1.indexOf(n)))
        switch (s) {
            case f.Xh.PREMIUM_MONTH_TIER_1:
                (l = L.intl.string(L.t.knvOV1)), j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.o6hBiY, {}));
                break;
            case f.Xh.PREMIUM_MONTH_TIER_2:
                (l = L.intl.string(L.t.f8Dqur)), j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.A4THYm, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_1:
                (l = L.intl.string(L.t.YZd5r6)), j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.MHAxpK, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_2:
                (l = L.intl.formatToPlainString(L.t['M/Lknp'], { numFreeGuildSubscriptions: f.cb })), j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.mULxLS, { numFreeGuildSubscriptions: f.cb }));
                break;
            case f.Xh.PREMIUM_3_MONTH_TIER_2:
            case f.Xh.PREMIUM_6_MONTH_TIER_2:
                l = L.intl.string(L.t.aaCoW1);
                break;
            case f.Xh.PREMIUM_MONTH_TIER_0:
            case f.Xh.PREMIUM_YEAR_TIER_0:
                l = L.intl.string(L.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(s));
        }
    else if (d.skuId === f.Si.TIER_2 && u.skuId === f.Si.TIER_1) l = L.intl.string(L.t.PNX4ND);
    else
        switch (u.skuId) {
            case f.Si.TIER_0:
                l = L.intl.string(L.t['XEoQ7+']);
                break;
            case f.Si.TIER_1:
                l = L.intl.string(L.t.nLI1Ki);
                break;
            case f.Si.TIER_2:
                l = 1 !== d.intervalCount ? L.intl.string(L.t.qSZZVF) : L.intl.string(L.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(u.skuId));
        }
    return (0, i.jsx)('div', {
        className: m.text,
        children: l
    });
}
function E(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: u, onClose: c, followupSKUInfo: E, isDowngrade: S, hideClose: y, postSuccessGuild: M, paymentSourceType: Z } = e,
        { theme: I } = (0, a.useThemeContext)(),
        P = (0, C.e7)([x.Z], () => (null != E ? x.Z.get(E.id) : null));
    l.useEffect(() => {
        if (null == E || null != P) return;
        let { applicationId: e, id: t } = E;
        (0, o.$N)(e, t).catch(j.VqG);
    }, [E, P]);
    let T = (e) => {
        if (e.skuId === f.Si.TIER_0) return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? L.intl.format(L.t.o6hBiY, {}) : L.intl.string(L.t['AGf/yc']);
        if (e.skuId === f.Si.TIER_1) return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? L.intl.format(L.t.o6hBiY, {}) : L.intl.string(L.t.knvOV1);
        return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? L.intl.format(L.t.A4THYm, {}) : d ? L.intl.string(L.t['g52y/v']) : L.intl.string(L.t.aTUr3d);
    };
    if (null != P)
        t = (0, i.jsx)('div', {
            className: m.text,
            children: L.intl.format(L.t.tsQOs7, { skuName: P.name })
        });
    else if (null != u)
        t = (0, i.jsx)(g, {
            planId: s,
            startingPremiumSubscriptionPlanId: u
        });
    else if (null != M) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: m.text,
                        children: T(e)
                    }),
                    (0, i.jsx)('div', {
                        className: m.text,
                        children: L.intl.format(L.t['6aZ0NT'], { guildName: M.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsx)('div', {
                className: m.text,
                children: T(e)
            }));
    }
    let v = _.ZP.getPremiumType(s);
    return (
        r()(null != v, 'premium type should not be null in purchase confirmation'),
        (n = null != P ? L.intl.formatToPlainString(L.t['1qGgm5'], { skuName: P.name }) : S ? L.intl.string(L.t.QJ9EyM) : null != M ? L.intl.string(L.t.ta3cXV) : L.intl.string(L.t.TkTvBw)),
        (0, i.jsxs)('div', {
            className: m.confirmation,
            children: [
                (0, i.jsx)(h.C, {
                    className: m.banner,
                    theme: I,
                    premiumType: v,
                    type: j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? h.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? h.C.Types.PREMIUM_UPDATED : h.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                y
                    ? null
                    : (0, i.jsx)(a.Button, {
                          onClick: c,
                          children: n
                      })
            ]
        })
    );
}
function S(e) {
    let { planId: t, onClose: n, halloweenDecoPurchase: l } = e,
        { giftRecipient: s, selectedGiftStyle: a, hasSentMessage: o, giftMessageError: x, isSendingMessage: _ } = (0, d.wD)(),
        h = (0, C.e7)([p.Z], () => p.Z.get(t));
    r()(null != h, 'Missing plan');
    let f = (0, C.e7)([c.Z], () => c.Z.getGiftCode(h.skuId));
    return (0, i.jsx)(u.Z, {
        giftCode: f,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: a,
        hasSentMessage: o,
        giftRecipient: s,
        giftMessageError: x,
        isSendingMessage: _,
        halloweenDecoPurchase: l
    });
}
function y() {
    return (0, i.jsxs)('div', {
        className: m.redirectConfirmation,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'heading-xl/bold',
                children: L.intl.string(L.t.Xtf9wM)
            }),
            (0, i.jsxs)('div', {
                className: m.redirectBody,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: L.intl.string(L.t.bIVRSU)
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: L.intl.string(L.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
