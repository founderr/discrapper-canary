r.d(n, {
    A2: function () {
        return b;
    },
    BU: function () {
        return y;
    },
    Pz: function () {
        return g;
    },
    Qf: function () {
        return C;
    },
    X_: function () {
        return E;
    },
    ZC: function () {
        return A;
    },
    kr: function () {
        return v;
    },
    t8: function () {
        return T;
    },
    tq: function () {
        return S;
    }
});
var i = r(789020);
var a = r(757143);
var s = r(544891),
    o = r(780384),
    l = r(706454),
    u = r(78839),
    c = r(431),
    d = r(630388),
    f = r(358085),
    _ = r(1844),
    h = r(474936),
    p = r(981631);
let m = '{code}';
function g(e, n) {
    let r = (0, o.wj)(n) ? 'logo-dark' : 'logo-light',
        i = window.GLOBAL_ENV.CDN_HOST,
        a = '?size=256';
    return null != i ? ''.concat(location.protocol, '//').concat(i, '/promotions/').concat(e, '/').concat(r).concat(a) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(r).concat(a);
}
function E(e) {
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
function v(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date
    };
}
function I(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: E(e.promotion)
    };
}
async function T() {
    return (
        await s.tn.get({
            url: p.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: l.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map(I);
}
async function b(e) {
    return I(
        (
            await s.tn.post({
                url: p.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
                rejectWithError: !1
            })
        ).body
    );
}
function y(e, n) {
    return null != n.outboundRedemptionUrlFormat ? n.outboundRedemptionUrlFormat.replace(m, encodeURIComponent(e)) : n.outboundRedemptionPageLink;
}
function S() {
    let e = _.Z.lastSeenOutboundPromotionStartDate,
        n = _.Z.outboundPromotions,
        r = _.Z.consumedInboundPromotionId,
        i = n.filter((e) => {
            let { id: n, flags: i } = e;
            return n !== r && !(0, d.yE)(i, h.TD.SUPPRESS_NOTIFICATION);
        }),
        a =
            null == e
                ? i
                : i.filter((n) => {
                      let { startDate: r } = n;
                      return new Date(r) > new Date(e);
                  }),
        s = _.Z.lastDismissedOutboundPromotionStartDate,
        o = u.ZP.getPremiumTypeSubscription(),
        l = (null == o ? void 0 : o.trialId) != null,
        f = c.Z.hasAnyUnexpiredOffer(),
        p = l || f ? a.filter((e) => N(e)) : a;
    return (
        0 !== p.length &&
        (null == s ||
            p.some((e) => {
                let { startDate: n } = e;
                return new Date(n) > new Date(s);
            }))
    );
}
function A(e) {
    return !(0, f.isIOS)() || !(0, d.yE)(e.flags, h.TD.IS_BLOCKED_IOS);
}
function N(e) {
    return (0, d.yE)(e.flags, h.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
}
function C(e, n) {
    return null != n[e.id] || N(e);
}
