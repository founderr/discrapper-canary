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
  E = a("913976"),
  h = a("328882"),
  _ = a("104494"),
  C = a("29920"),
  m = a("786397"),
  S = a("248042"),
  I = a("318199"),
  p = a("474936");

function T(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let g = "PremiumServerDriveAnnouncementModal";
class A extends r.default {
  _initialize() {
    i.default.subscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), i.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    i.default.unsubscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), i.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), T(this, "maybeOpenServerDriveAnnouncementModal", (e, t) => {
      let s = (0, I.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != s && ((0, l.closeModal)(g), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "318199"));
        return t => (0, n.jsx)(e, {
          renderModalProps: t,
          properties: s
        })
      }, {
        modalKey: g
      }), !0)
    }), T(this, "handlePreview", e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }), T(this, "getOfferFromStore", () => {
      let e = u.default.getCurrentUser();
      if ((0, c.isPremium)(e)) return {};
      let t = [(0, p.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID), (0, p.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID), (0, p.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID), (0, p.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID)].map(e => d.default.getUserDiscountOffer(e)).filter(e => null != e && !(0, _.hasUserDiscountExpired)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let a = [(0, p.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID), (0, p.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID), (0, p.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID), (0, p.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID), (0, p.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID), (0, p.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID), (0, p.PREMIUM_TIER_2_AUTH3_TRIAL_ID), (0, p.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID)].map(e => d.default.getUserTrialOffer(e)).filter(e => null != e && !(0, m.hasUserTrialOfferExpired)(e)).shift();
      return null != a ? {
        userTrialOffer: a
      } : {}
    }), T(this, "mayShowAnnouncementModal", async () => {
      if (await (0, S.maybeFetchActiveBogoPromotion)(), !f.ProcessArgs.isDisallowPopupsSet()) {
        if (!(0, l.hasAnyModalOpen)() && E.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled) {
          let e = !(0, c.isPremium)(u.default.getCurrentUser()) && (!d.default.hasFetchedOffer() || d.default.shouldFetchOffer()) ? await (0, C.fetchPremiumMarketingContent)() : await (0, C.fetchPremiumMarketingContentWithUserOffer)(this.getOfferFromStore());
          if (null == e) {
            h.default.getCurrentConfig({
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
          for (let t of e)
            if (this.maybeOpenServerDriveAnnouncementModal(t, !1)) break
        }
        if (!(0, l.hasAnyModalOpen)() && !E.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled && h.default.getCurrentConfig({
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
        }!(0, l.hasAnyModalOpen)() && await (0, S.isEligibleForBOGOAnnouncementModal)() && (0, l.openModalLazy)(async () => {
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
t.default = new A