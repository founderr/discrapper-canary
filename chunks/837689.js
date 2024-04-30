"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("524437"),
  l = a("481060"),
  i = a("570140"),
  r = a("317770"),
  o = a("605236"),
  u = a("594174"),
  d = a("295226"),
  c = a("74538"),
  f = a("374023"),
  E = a("960048"),
  h = a("913976"),
  _ = a("328882"),
  C = a("104494"),
  m = a("29920"),
  S = a("786397"),
  p = a("248042"),
  I = a("318199"),
  T = a("474936");

function g(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let A = "PremiumServerDriveAnnouncementModal";
class N extends r.default {
  _initialize() {
    i.default.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), i.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    i.default.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), i.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), g(this, "maybeOpenServerDriveAnnouncementModal", (e, t) => {
      let s = (0, I.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != s && ((0, l.closeModal)(A), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "318199"));
        return t => (0, n.jsx)(e, {
          renderModalProps: t,
          properties: s
        })
      }, {
        modalKey: A
      }), !0)
    }), g(this, "handlePreview", e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }), g(this, "getOfferFromStore", () => {
      let e = u.default.getCurrentUser();
      if ((0, c.isPremium)(e)) return {};
      let t = [(0, T.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID), (0, T.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID), (0, T.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID), (0, T.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID)].map(e => d.default.getUserDiscountOffer(e)).filter(e => null != e && !(0, C.hasUserDiscountExpired)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let a = [(0, T.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID), (0, T.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID), (0, T.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID), (0, T.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID), (0, T.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID), (0, T.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID), (0, T.PREMIUM_TIER_2_AUTH3_TRIAL_ID), (0, T.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID)].map(e => d.default.getUserTrialOffer(e)).filter(e => null != e && !(0, S.hasUserTrialOfferExpired)(e)).shift();
      return null != a ? {
        userTrialOffer: a
      } : {}
    }), g(this, "mayShowAnnouncementModal", async () => {
      if (await (0, p.maybeFetchActiveBogoPromotion)(), !f.ProcessArgs.isDisallowPopupsSet()) {
        if (!(0, l.hasAnyModalOpen)() && h.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled) {
          let e = u.default.getCurrentUser();
          null != e && e.verified && !(0, c.isPremium)(e) && d.default.shouldFetchOffer() && E.default.captureMessage("Should not need to fetch premium User Offers again when opening announcement modal");
          let t = await (0, m.fetchPremiumMarketingContentWithUserOffer)(this.getOfferFromStore());
          if (null == t) {
            _.default.getCurrentConfig({
              location: "OfferAnnouncementManager"
            }).enabled && !(0, o.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_MODAL) && (0, l.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([a.e("99387"), a.e("54749")]).then(a.bind(a, "937733"));
              return t => (0, n.jsx)(e, {
                renderModalProps: t
              })
            });
            return
          }
          for (let e of t)
            if (this.maybeOpenServerDriveAnnouncementModal(e, !1)) break
        }
        if (!(0, l.hasAnyModalOpen)() && !h.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled && _.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled && !(0, o.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_MODAL)) {
          (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("54749")]).then(a.bind(a, "937733"));
            return t => (0, n.jsx)(e, {
              renderModalProps: t
            })
          });
          return
        }!(0, l.hasAnyModalOpen)() && await (0, p.isEligibleForBOGOAnnouncementModal)() && (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("28614")]).then(a.bind(a, "868508"));
          return t => (0, n.jsx)(e, {
            renderModalProps: t
          })
        })
      }
    })
  }
}
t.default = new N