"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("524437"),
  l = n("481060"),
  i = n("570140"),
  r = n("317770"),
  o = n("605236"),
  u = n("594174"),
  d = n("295226"),
  c = n("74538"),
  f = n("374023"),
  E = n("913976"),
  h = n("328882"),
  _ = n("104494"),
  C = n("29920"),
  m = n("786397"),
  S = n("248042"),
  I = n("318199"),
  p = n("474936");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
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
        } = await Promise.resolve().then(n.bind(n, "318199"));
        return t => (0, a.jsx)(e, {
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
      let n = [(0, p.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID), (0, p.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID), (0, p.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID), (0, p.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID), (0, p.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID), (0, p.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID), (0, p.PREMIUM_TIER_2_AUTH3_TRIAL_ID), (0, p.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID)].map(e => d.default.getUserTrialOffer(e)).filter(e => null != e && !(0, m.hasUserTrialOfferExpired)(e)).shift();
      return null != n ? {
        userTrialOffer: n
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
              } = await Promise.all([n.e("99387"), n.e("54749")]).then(n.bind(n, "937733"));
              return t => (0, a.jsx)(e, {
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
            } = await Promise.all([n.e("99387"), n.e("54749")]).then(n.bind(n, "937733"));
            return t => (0, a.jsx)(e, {
              renderModalProps: t
            })
          });
          return
        }!(0, l.hasAnyModalOpen)() && await (0, S.isEligibleForBOGOAnnouncementModal)() && (0, l.openModalLazy)(async () => {
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
t.default = new A