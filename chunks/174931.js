"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var s = n("735250"),
  i = n("470079"),
  l = n("468194"),
  r = n("442837"),
  a = n("477690"),
  u = n("481060"),
  o = n("887706"),
  c = n("34674"),
  d = n("817460"),
  f = n("703656"),
  p = n("351402"),
  I = n("937615"),
  h = n("73346"),
  m = n("270144"),
  C = n("359610"),
  _ = n("245561"),
  g = n("696906"),
  v = n("981631"),
  A = n("689938"),
  R = n("527023");
let x = (0, l.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  T = "start_application_subscription",
  N = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, h.getAssetURL)(t.application_id, n, x);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: R.listingImage
      })
    })
  },
  E = e => {
    let {
      children: t
    } = e;
    return (0, s.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.PRIMARY,
      disabled: !0,
      size: u.Button.Sizes.SMALL,
      children: t
    })
  };

function S(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: l,
    analyticsLocation: a,
    onComplete: h,
    forcesTransitionToGuild: x
  } = e, S = (0, r.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: P,
    activeSubscriptionListing: L
  } = (0, m.useActiveSubscriptionListingForApplication)(t.application_id, l), {
    openModal: j,
    canOpenModal: O,
    cannotOpenReason: b
  } = (0, g.default)({
    listing: t,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: a,
    onComplete: h,
    forcesTransitionToGuild: x
  }), w = t.subscription_plans[0], M = 0 === w.price, y = (null == L ? void 0 : L.id) === t.id, B = (0, o.default)(), U = B && !O || S, V = () => {
    B ? j() : (0, c.redirectToLogin)({
      [T]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (B && !U && "true" === e.searchParams.get(T)) {
      e.searchParams.delete(T);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), j()
    }
  }, [B, j, U]), (0, s.jsxs)("div", {
    className: R.container,
    children: [(0, s.jsxs)("div", {
      className: R.cardHeader,
      children: [(0, s.jsx)(N, {
        listing: t
      }), (0, s.jsx)(u.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, s.jsxs)("div", {
        className: R.priceAndButtonContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: M ? A.default.Messages.APPLICATION_SUBSCRIPTION_FREE : A.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, I.formatPrice)(w.price, w.currency),
            period: (0, d.formatPlanInterval)(w)
          })
        }), (() => {
          var e;
          if (y) return (0, s.jsx)(E, {
            children: (null == P ? void 0 : P.status) === v.SubscriptionStatusTypes.CANCELED ? A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (M) return null == L ? (0, s.jsx)(E, {
            children: A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(u.Tooltip, {
            tooltipClassName: R.subscribeButtonTooltip,
            text: O || !B ? null : b,
            "aria-label": null !== (e = !O && b) && void 0 !== e && e,
            children: e => (0, s.jsx)(C.default, {
              ...e,
              disabled: U,
              submitting: !1,
              onClick: V,
              children: A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, s.jsx)("div", {
      className: R.benefitsContainer,
      children: (0, s.jsx)(_.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: R.benefit
      })
    })]
  })
}