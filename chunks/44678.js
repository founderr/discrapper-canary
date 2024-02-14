"use strict";
n.r(t), n.d(t, {
  getPromotionImageURL: function() {
    return f
  },
  outboundPromotionFromServer: function() {
    return m
  },
  bogoPromotionFromServer: function() {
    return _
  },
  fetchClaimedOutboundPromotionCodes: function() {
    return T
  },
  claimOutboundPromotion: function() {
    return I
  },
  getOutboundPromotionRedemptionUrl: function() {
    return C
  },
  shouldShowOutboundPromotionNotice: function() {
    return p
  },
  shouldShowOutboundPromotionOnPlatform: function() {
    return P
  },
  isOutboundPromotionRedeemableByTrialUsers: function() {
    return S
  },
  isTrialUserEligibleToSeeOutboundPromotion: function() {
    return R
  }
}), n("702976"), n("781738");
var i = n("872717"),
  r = n("819855"),
  l = n("915639"),
  a = n("521012"),
  s = n("568734"),
  o = n("773336"),
  u = n("807345"),
  d = n("646718"),
  c = n("49111");

function f(e, t) {
  let n = (0, r.isThemeDark)(t) ? "logo-dark" : "logo-light",
    i = window.GLOBAL_ENV.CDN_HOST,
    l = "?size=256";
  return null != i ? "".concat(location.protocol, "//").concat(i, "/promotions/").concat(e, "/").concat(n).concat(l) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(l)
}

function m(e) {
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
  }
}

function _(e) {
  return {
    id: e.id,
    startDate: e.start_date,
    endDate: e.end_date
  }
}

function E(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: m(e.promotion)
  }
}
async function T() {
  let e = await i.default.get({
      url: c.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
      query: {
        locale: l.default.locale
      },
      oldFormErrors: !0
    }),
    t = e.body;
  return t.map(E)
}
async function I(e) {
  let t = await i.default.post({
      url: c.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
    }),
    n = t.body;
  return E(n)
}

function C(e, t) {
  return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
}

function p() {
  let e = u.default.lastSeenOutboundPromotionStartDate,
    t = u.default.outboundPromotions,
    n = u.default.consumedInboundPromotionId,
    i = t.filter(e => {
      let {
        id: t,
        flags: i
      } = e;
      return t !== n && !(0, s.hasFlag)(i, d.PromotionFlags.SUPPRESS_NOTIFICATION)
    }),
    r = null == e ? i : i.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    }),
    l = u.default.lastDismissedOutboundPromotionStartDate,
    o = a.default.getPremiumTypeSubscription(),
    c = (null == o ? void 0 : o.trialId) != null,
    f = c ? r.filter(e => S(e)) : r;
  return 0 !== f.length && (null == l || f.some(e => {
    let {
      startDate: t
    } = e;
    return new Date(t) > new Date(l)
  }))
}

function P(e) {
  return !(0, o.isIOS)() || !(0, s.hasFlag)(e.flags, d.PromotionFlags.IS_BLOCKED_IOS)
}

function S(e) {
  return (0, s.hasFlag)(e.flags, d.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
}

function R(e, t) {
  return null != t[e.id] || S(e)
}