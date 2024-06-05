"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("315314"), l("610138"), l("216116"), l("78328"), l("815648"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("468194"),
  i = l("442837"),
  r = l("477690"),
  o = l("481060"),
  d = l("887706"),
  u = l("34674"),
  c = l("817460"),
  f = l("703656"),
  I = l("351402"),
  m = l("937615"),
  T = l("73346"),
  E = l("270144"),
  N = l("359610"),
  _ = l("245561"),
  S = l("696906"),
  h = l("981631"),
  g = l("689938"),
  p = l("527023");
let O = (0, s.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  A = "start_application_subscription",
  C = e => {
    let {
      listing: t
    } = e, l = t.image_asset;
    if (null == l) return null;
    let a = (0, T.getAssetURL)(t.application_id, l, O);
    return (0, n.jsx)("div", {
      children: (0, n.jsx)("img", {
        src: a,
        alt: "",
        className: p.listingImage
      })
    })
  },
  x = e => {
    let {
      children: t
    } = e;
    return (0, n.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      disabled: !0,
      size: o.Button.Sizes.SMALL,
      children: t
    })
  };

function R(e) {
  let {
    listing: t,
    groupListingId: l,
    guildId: s,
    analyticsLocation: r,
    onComplete: T,
    forcesTransitionToGuild: O
  } = e, R = (0, i.useStateFromStores)([I.default], () => I.default.isSyncing), {
    activeSubscription: M,
    activeSubscriptionListing: L
  } = (0, E.useActiveSubscriptionListingForApplication)(t.application_id, s), {
    openModal: v,
    canOpenModal: j,
    cannotOpenReason: P
  } = (0, S.default)({
    guildId: s,
    groupListingId: l,
    showBenefitsFirst: !1,
    analyticsLocation: r,
    onComplete: T,
    forcesTransitionToGuild: O,
    skuId: t.id
  }), b = t.subscription_plans[0], D = 0 === b.price, y = (null == L ? void 0 : L.id) === t.id, G = (0, d.default)(), B = G && !j || R, k = () => {
    G ? v() : (0, u.redirectToLogin)({
      [A]: "true"
    })
  };
  return a.useEffect(() => {
    let e = new URL(location.href);
    if (G && !B && "true" === e.searchParams.get(A)) {
      e.searchParams.delete(A);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), v()
    }
  }, [G, v, B]), (0, n.jsxs)("div", {
    className: p.container,
    children: [(0, n.jsxs)("div", {
      className: p.cardHeader,
      children: [(0, n.jsx)(C, {
        listing: t
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, n.jsxs)("div", {
        className: p.priceAndButtonContainer,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: D ? g.default.Messages.APPLICATION_SUBSCRIPTION_FREE : g.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, m.formatPrice)(b.price, b.currency),
            period: (0, c.formatPlanInterval)(b)
          })
        }), (() => {
          var e;
          if (y) return (0, n.jsx)(x, {
            children: (null == M ? void 0 : M.status) === h.SubscriptionStatusTypes.CANCELED ? g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (D) return null == L ? (0, n.jsx)(x, {
            children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, n.jsx)(o.Tooltip, {
            tooltipClassName: p.subscribeButtonTooltip,
            text: j || !G ? null : P,
            "aria-label": null !== (e = !j && P) && void 0 !== e && e,
            children: e => (0, n.jsx)(N.default, {
              ...e,
              disabled: B,
              submitting: !1,
              onClick: k,
              children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, n.jsx)("div", {
      className: p.benefitsContainer,
      children: (0, n.jsx)(_.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: p.benefit
      })
    })]
  })
}