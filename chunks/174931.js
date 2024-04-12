"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var s = n("735250"),
  i = n("470079"),
  a = n("468194"),
  l = n("442837"),
  r = n("477690"),
  u = n("481060"),
  o = n("887706"),
  c = n("34674"),
  d = n("817460"),
  f = n("703656"),
  p = n("351402"),
  h = n("937615"),
  I = n("73346"),
  _ = n("270144"),
  m = n("359610"),
  A = n("245561"),
  T = n("696906"),
  E = n("981631"),
  v = n("689938"),
  S = n("160078");
let g = (0, a.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  C = "start_application_subscription",
  N = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, I.getAssetURL)(t.application_id, n, g);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: S.listingImage
      })
    })
  },
  R = e => {
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

function P(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: a,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: g
  } = e, P = (0, l.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: x,
    activeSubscriptionListing: L
  } = (0, _.useActiveSubscriptionListingForApplication)(t.application_id, a), {
    openModal: O,
    canOpenModal: y,
    cannotOpenReason: b
  } = (0, T.default)({
    listing: t,
    guildId: a,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: g
  }), j = t.subscription_plans[0], M = 0 === j.price, w = (null == L ? void 0 : L.id) === t.id, U = (0, o.default)(), D = U && !y || P, B = () => {
    U ? O() : (0, c.redirectToLogin)({
      [C]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (U && !D && "true" === e.searchParams.get(C)) {
      e.searchParams.delete(C);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), O()
    }
  }, [U, O, D]), (0, s.jsxs)("div", {
    className: S.container,
    children: [(0, s.jsxs)("div", {
      className: S.cardHeader,
      children: [(0, s.jsx)(N, {
        listing: t
      }), (0, s.jsx)(u.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, s.jsxs)("div", {
        className: S.priceAndButtonContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: M ? v.default.Messages.APPLICATION_SUBSCRIPTION_FREE : v.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, h.formatPrice)(j.price, j.currency),
            period: (0, d.formatPlanInterval)(j)
          })
        }), (() => {
          var e;
          if (w) return (0, s.jsx)(R, {
            children: (null == x ? void 0 : x.status) === E.SubscriptionStatusTypes.CANCELED ? v.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : v.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (M) return null == L ? (0, s.jsx)(R, {
            children: v.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(u.Tooltip, {
            tooltipClassName: S.subscribeButtonTooltip,
            text: y || !U ? null : b,
            "aria-label": null !== (e = !y && b) && void 0 !== e && e,
            children: e => (0, s.jsx)(m.default, {
              ...e,
              disabled: D,
              submitting: !1,
              onClick: B,
              children: v.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, s.jsx)("div", {
      className: S.benefitsContainer,
      children: (0, s.jsx)(A.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: S.benefit
      })
    })]
  })
}