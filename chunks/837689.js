"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("594174"),
  o = n("295226"),
  u = n("74538"),
  d = n("374023"),
  c = n("913976"),
  f = n("328882"),
  E = n("104494"),
  h = n("29920"),
  _ = n("786397"),
  C = n("248042"),
  m = n("318199"),
  S = n("474936");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = "PremiumServerDriveAnnouncementModal";
class T extends i.default {
  _initialize() {
    l.default.subscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), l.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    l.default.unsubscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), l.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), I(this, "maybeOpenServerDriveAnnouncementModal", (e, t) => {
      let l = (0, m.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != l && ((0, s.closeModal)(p), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "318199"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t,
          properties: l
        })
      }, {
        modalKey: p
      }), !0)
    }), I(this, "handlePreview", e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }), I(this, "getOfferFromStore", () => {
      let e = r.default.getCurrentUser();
      if ((0, u.isPremium)(e)) return {};
      let t = [(0, S.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID), (0, S.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID), (0, S.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID), (0, S.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID)].map(e => o.default.getUserDiscountOffer(e)).filter(e => null != e && !(0, E.hasUserDiscountExpired)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = [(0, S.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID), (0, S.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID), (0, S.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID), (0, S.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID), (0, S.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID), (0, S.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID), (0, S.PREMIUM_TIER_2_AUTH3_TRIAL_ID), (0, S.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID)].map(e => o.default.getUserTrialOffer(e)).filter(e => null != e && !(0, _.hasUserTrialOfferExpired)(e)).shift();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), I(this, "mayShowAnnouncementModal", async () => {
      if (await (0, C.maybeFetchActiveBogoPromotion)(), !d.ProcessArgs.isDisallowPopupsSet()) {
        if (!(0, s.hasAnyModalOpen)() && c.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled) {
          let e = !(0, u.isPremium)(r.default.getCurrentUser()) && (!o.default.hasFetchedOffer() || o.default.shouldFetchOffer()) ? await (0, h.fetchPremiumMarketingContent)() : await (0, h.fetchPremiumMarketingContentWithUserOffer)(this.getOfferFromStore());
          if (null == e) {
            f.default.getCurrentConfig({
              location: "OfferAnnouncementManager"
            }).enabled;
            return
          }
          for (let t of e)
            if (this.maybeOpenServerDriveAnnouncementModal(t, !1)) break
        }(0, s.hasAnyModalOpen)() || c.default.getCurrentConfig({
          location: "OfferAnnouncementManager"
        }).enabled || f.default.getCurrentConfig({
          location: "OfferAnnouncementManager"
        }).enabled, !(0, s.hasAnyModalOpen)() && await (0, C.isEligibleForBOGOAnnouncementModal)() && (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("28614")]).then(n.bind(n, "868508"));
          return t => (0, a.jsx)(e, {
            renderModalProps: t
          })
        })
      }
    })
  }
}
t.default = new T