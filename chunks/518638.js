n.d(t, {
    A2: function () {
        return E;
    },
    BU: function () {
        return v;
    },
    Pz: function () {
        return _;
    },
    Qf: function () {
        return b;
    },
    X_: function () {
        return h;
    },
    ZC: function () {
        return S;
    },
    kr: function () {
        return p;
    },
    t8: function () {
        return g;
    },
    tq: function () {
        return I;
    }
}),
    n(789020),
    n(757143);
var r = n(544891),
    i = n(780384),
    a = n(706454),
    s = n(78839),
    o = n(431),
    l = n(630388),
    u = n(358085),
    c = n(1844),
    d = n(474936),
    f = n(981631);
function _(e, t) {
    let n = (0, i.wj)(t) ? 'logo-dark' : 'logo-light',
        r = window.GLOBAL_ENV.CDN_HOST,
        a = '?size=256';
    return null != r ? ''.concat(location.protocol, '//').concat(r, '/promotions/').concat(e, '/').concat(n).concat(a) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(n).concat(a);
}
function h(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date,
        outboundRedemptionEndDate: e.outbound_redemption_end_date,
        outboundTitle: e.outbound_title,
        outboundRedemptionModalBody: e.outbound_redemption_modal_body,
        outboundRedemptionPageLink: e.outbound_redemption_page_link,
        outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
        outboundTermsAndConditions: e.outbound_terms_and_conditions,
        flags: e.flags
    };
}
function p(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date
    };
}
function m(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: h(e.promotion)
    };
}
async function g() {
    return (
        await r.tn.get({
            url: f.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: a.default.locale },
            oldFormErrors: !0
        })
    ).body.map(m);
}
async function E(e) {
    return m((await r.tn.post({ url: f.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e) })).body);
}
function v(e, t) {
    return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace('{code}', encodeURIComponent(e)) : t.outboundRedemptionPageLink;
}
function I() {
    let e = c.Z.lastSeenOutboundPromotionStartDate,
        t = c.Z.outboundPromotions,
        n = c.Z.consumedInboundPromotionId,
        r = t.filter((e) => {
            let { id: t, flags: r } = e;
            return t !== n && !(0, l.yE)(r, d.TD.SUPPRESS_NOTIFICATION);
        }),
        i =
            null == e
                ? r
                : r.filter((t) => {
                      let { startDate: n } = t;
                      return new Date(n) > new Date(e);
                  }),
        a = c.Z.lastDismissedOutboundPromotionStartDate,
        u = s.ZP.getPremiumTypeSubscription(),
        f = (null == u ? void 0 : u.trialId) != null,
        _ = o.Z.hasAnyUnexpiredOffer(),
        h = f || _ ? i.filter((e) => T(e)) : i;
    return (
        0 !== h.length &&
        (null == a ||
            h.some((e) => {
                let { startDate: t } = e;
                return new Date(t) > new Date(a);
            }))
    );
}
function S(e) {
    return !(0, u.isIOS)() || !(0, l.yE)(e.flags, d.TD.IS_BLOCKED_IOS);
}
function T(e) {
    return (0, l.yE)(e.flags, d.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
}
function b(e, t) {
    return null != t[e.id] || T(e);
}
