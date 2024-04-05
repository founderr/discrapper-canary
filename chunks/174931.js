"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var s = n("735250"),
  i = n("470079"),
  l = n("468194"),
  a = n("442837"),
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
  v = n("359610"),
  m = n("245561"),
  C = n("696906"),
  g = n("981631"),
  T = n("689938"),
  A = n("160078");
let E = (0, l.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  N = "start_application_subscription",
  S = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, I.getAssetURL)(t.application_id, n, E);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: A.listingImage
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

function x(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: l,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: E
  } = e, x = (0, a.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: L,
    activeSubscriptionListing: P
  } = (0, _.useActiveSubscriptionListingForApplication)(t.application_id, l), {
    openModal: y,
    canOpenModal: j,
    cannotOpenReason: M
  } = (0, C.default)({
    listing: t,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: E
  }), O = t.subscription_plans[0], b = 0 === O.price, w = (null == P ? void 0 : P.id) === t.id, B = (0, o.default)(), D = B && !j || x, U = () => {
    B ? y() : (0, c.redirectToLogin)({
      [N]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (B && !D && "true" === e.searchParams.get(N)) {
      e.searchParams.delete(N);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), y()
    }
  }, [B, y, D]), (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsxs)("div", {
      className: A.cardHeader,
      children: [(0, s.jsx)(S, {
        listing: t
      }), (0, s.jsx)(u.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, s.jsxs)("div", {
        className: A.priceAndButtonContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: b ? T.default.Messages.APPLICATION_SUBSCRIPTION_FREE : T.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, h.formatPrice)(O.price, O.currency),
            period: (0, d.formatPlanInterval)(O)
          })
        }), (() => {
          var e;
          if (w) return (0, s.jsx)(R, {
            children: (null == L ? void 0 : L.status) === g.SubscriptionStatusTypes.CANCELED ? T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (b) return null == P ? (0, s.jsx)(R, {
            children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(u.Tooltip, {
            tooltipClassName: A.subscribeButtonTooltip,
            text: j || !B ? null : M,
            "aria-label": null !== (e = !j && M) && void 0 !== e && e,
            children: e => (0, s.jsx)(v.default, {
              ...e,
              disabled: D,
              submitting: !1,
              onClick: U,
              children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, s.jsx)("div", {
      className: A.benefitsContainer,
      children: (0, s.jsx)(m.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: A.benefit
      })
    })]
  })
}