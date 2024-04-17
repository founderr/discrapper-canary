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
  o = n("481060"),
  u = n("887706"),
  c = n("34674"),
  d = n("817460"),
  f = n("703656"),
  p = n("351402"),
  h = n("937615"),
  v = n("73346"),
  m = n("270144"),
  I = n("359610"),
  _ = n("245561"),
  g = n("696906"),
  C = n("981631"),
  T = n("689938"),
  A = n("160078");
let N = (0, l.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  R = "start_application_subscription",
  x = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, v.getAssetURL)(t.application_id, n, N);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: A.listingImage
      })
    })
  },
  E = e => {
    let {
      children: t
    } = e;
    return (0, s.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      disabled: !0,
      size: o.Button.Sizes.SMALL,
      children: t
    })
  };

function S(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: l,
    analyticsLocation: a,
    onComplete: v,
    forcesTransitionToGuild: N
  } = e, S = (0, r.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: P,
    activeSubscriptionListing: L
  } = (0, m.useActiveSubscriptionListingForApplication)(t.application_id, l), {
    openModal: j,
    canOpenModal: O,
    cannotOpenReason: M
  } = (0, g.default)({
    listing: t,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: a,
    onComplete: v,
    forcesTransitionToGuild: N
  }), w = t.subscription_plans[0], y = 0 === w.price, b = (null == L ? void 0 : L.id) === t.id, B = (0, u.default)(), U = B && !O || S, V = () => {
    B ? j() : (0, c.redirectToLogin)({
      [R]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (B && !U && "true" === e.searchParams.get(R)) {
      e.searchParams.delete(R);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), j()
    }
  }, [B, j, U]), (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsxs)("div", {
      className: A.cardHeader,
      children: [(0, s.jsx)(x, {
        listing: t
      }), (0, s.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, s.jsxs)("div", {
        className: A.priceAndButtonContainer,
        children: [(0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: y ? T.default.Messages.APPLICATION_SUBSCRIPTION_FREE : T.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, h.formatPrice)(w.price, w.currency),
            period: (0, d.formatPlanInterval)(w)
          })
        }), (() => {
          var e;
          if (b) return (0, s.jsx)(E, {
            children: (null == P ? void 0 : P.status) === C.SubscriptionStatusTypes.CANCELED ? T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (y) return null == L ? (0, s.jsx)(E, {
            children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(o.Tooltip, {
            tooltipClassName: A.subscribeButtonTooltip,
            text: O || !B ? null : M,
            "aria-label": null !== (e = !O && M) && void 0 !== e && e,
            children: e => (0, s.jsx)(I.default, {
              ...e,
              disabled: U,
              submitting: !1,
              onClick: V,
              children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, s.jsx)("div", {
      className: A.benefitsContainer,
      children: (0, s.jsx)(_.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: A.benefit
      })
    })]
  })
}