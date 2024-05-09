"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("524437"),
  i = n("481060"),
  l = n("570140"),
  r = n("317770"),
  o = n("605236"),
  u = n("594174"),
  d = n("295226"),
  c = n("74538"),
  f = n("374023"),
  E = n("960048"),
  h = n("913976"),
  _ = n("328882"),
  C = n("104494"),
  m = n("29920"),
  S = n("786397"),
  p = n("248042"),
  g = n("318199"),
  I = n("474936");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = "PremiumServerDriveAnnouncementModal";
class N extends r.default {
  _initialize() {
    l.default.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), l.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    l.default.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), l.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), T(this, "maybeOpenServerDriveAnnouncementModal", (e, t) => {
      let s = (0, g.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != s && ((0, i.closeModal)(A), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "318199"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t,
          properties: s
        })
      }, {
        modalKey: A
      }), !0)
    }), T(this, "handlePreview", e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }), T(this, "getOfferFromStore", () => {
      let e = u.default.getCurrentUser();
      if ((0, c.isPremium)(e)) return {};
      let t = [(0, I.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID), (0, I.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID), (0, I.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID), (0, I.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID)].map(e => d.default.getUserDiscountOffer(e)).filter(e => null != e && !(0, C.hasUserDiscountExpired)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = [(0, I.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID), (0, I.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID), (0, I.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID), (0, I.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID), (0, I.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID), (0, I.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID), (0, I.PREMIUM_TIER_2_AUTH3_TRIAL_ID), (0, I.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID)].map(e => d.default.getUserTrialOffer(e)).filter(e => null != e && !(0, S.hasUserTrialOfferExpired)(e)).shift();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), T(this, "mayShowAnnouncementModal", async () => {
      if (await (0, p.maybeFetchActiveBogoPromotion)(), !f.ProcessArgs.isDisallowPopupsSet()) {
        if (!(0, i.hasAnyModalOpen)() && h.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled) {
          let e = u.default.getCurrentUser();
          null != e && e.verified && !(0, c.isPremium)(e) && d.default.shouldFetchOffer() && E.default.captureMessage("Should not need to fetch premium User Offers again when opening announcement modal");
          let t = await (0, m.fetchPremiumMarketingContentWithUserOffer)(this.getOfferFromStore());
          if (null == t) {
            _.default.getCurrentConfig({
              location: "OfferAnnouncementManager"
            }).enabled && !(0, o.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_MODAL) && (0, i.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("99387"), n.e("54749")]).then(n.bind(n, "937733"));
              return t => (0, a.jsx)(e, {
                renderModalProps: t
              })
            });
            return
          }
          for (let e of t)
            if (this.maybeOpenServerDriveAnnouncementModal(e, !1)) break
        }
        if (!(0, i.hasAnyModalOpen)() && !h.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled && _.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled && !(0, o.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_MODAL)) {
          (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("54749")]).then(n.bind(n, "937733"));
            return t => (0, a.jsx)(e, {
              renderModalProps: t
            })
          });
          return
        }!(0, i.hasAnyModalOpen)() && await (0, p.isEligibleForBOGOAnnouncementModal)() && (0, i.openModalLazy)(async () => {
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
t.default = new N