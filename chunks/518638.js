"use strict";
n.r(t), n.d(t, {
  bogoPromotionFromServer: function() {
    return T
  },
  claimOutboundPromotion: function() {
    return h
  },
  fetchClaimedOutboundPromotionCodes: function() {
    return S
  },
  getOutboundPromotionRedemptionUrl: function() {
    return A
  },
  getPromotionImageURL: function() {
    return E
  },
  isOutboundPromotionRedeemableByTrialUsers: function() {
    return p
  },
  isTrialUserEligibleToSeeOutboundPromotion: function() {
    return O
  },
  outboundPromotionFromServer: function() {
    return I
  },
  shouldShowOutboundPromotionNotice: function() {
    return m
  },
  shouldShowOutboundPromotionOnPlatform: function() {
    return N
  }
}), n("789020"), n("757143");
var i = n("544891"),
  r = n("780384"),
  s = n("706454"),
  a = n("78839"),
  o = n("295226"),
  l = n("630388"),
  u = n("358085"),
  d = n("1844"),
  _ = n("474936"),
  c = n("981631");

function E(e, t) {
  let n = (0, r.isThemeDark)(t) ? "logo-dark" : "logo-light",
    i = window.GLOBAL_ENV.CDN_HOST,
    s = "?size=256";
  return null != i ? "".concat(location.protocol, "//").concat(i, "/promotions/").concat(e, "/").concat(n).concat(s) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(s)
}

function I(e) {
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

function T(e) {
  return {
    id: e.id,
    startDate: e.start_date,
    endDate: e.end_date
  }
}

function f(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: I(e.promotion)
  }
}
async function S() {
  return (await i.HTTP.get({
    url: c.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
    query: {
      locale: s.default.locale
    },
    oldFormErrors: !0
  })).body.map(f)
}
async function h(e) {
  return f((await i.HTTP.post({
    url: c.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
  })).body)
}

function A(e, t) {
  return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
}

function m() {
  let e = d.default.lastSeenOutboundPromotionStartDate,
    t = d.default.outboundPromotions,
    n = d.default.consumedInboundPromotionId,
    i = t.filter(e => {
      let {
        id: t,
        flags: i
      } = e;
      return t !== n && !(0, l.hasFlag)(i, _.PromotionFlags.SUPPRESS_NOTIFICATION)
    }),
    r = null == e ? i : i.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    }),
    s = d.default.lastDismissedOutboundPromotionStartDate,
    u = a.default.getPremiumTypeSubscription(),
    c = (null == u ? void 0 : u.trialId) != null,
    E = o.default.hasAnyUnexpiredOffer(),
    I = c || E ? r.filter(e => p(e)) : r;
  return 0 !== I.length && (null == s || I.some(e => {
    let {
      startDate: t
    } = e;
    return new Date(t) > new Date(s)
  }))
}

function N(e) {
  return !(0, u.isIOS)() || !(0, l.hasFlag)(e.flags, _.PromotionFlags.IS_BLOCKED_IOS)
}

function p(e) {
  return (0, l.hasFlag)(e.flags, _.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
}

function O(e, t) {
  return null != t[e.id] || p(e)
}