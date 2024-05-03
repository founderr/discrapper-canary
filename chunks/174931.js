"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
}), a("315314"), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("468194"),
  s = a("442837"),
  l = a("477690"),
  o = a("481060"),
  c = a("887706"),
  d = a("34674"),
  u = a("817460"),
  f = a("703656"),
  m = a("351402"),
  h = a("937615"),
  E = a("73346"),
  T = a("270144"),
  p = a("359610"),
  _ = a("245561"),
  C = a("696906"),
  g = a("981631"),
  x = a("689938"),
  I = a("976622");
let v = (0, i.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  N = "start_application_subscription",
  A = e => {
    let {
      listing: t
    } = e, a = t.image_asset;
    if (null == a) return null;
    let r = (0, E.getAssetURL)(t.application_id, a, v);
    return (0, n.jsx)("div", {
      children: (0, n.jsx)("img", {
        src: r,
        alt: "",
        className: I.listingImage
      })
    })
  },
  S = e => {
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
    groupListingId: a,
    guildId: i,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: v
  } = e, R = (0, s.useStateFromStores)([m.default], () => m.default.isSyncing), {
    activeSubscription: L,
    activeSubscriptionListing: M
  } = (0, T.useActiveSubscriptionListingForApplication)(t.application_id, i), {
    openModal: b,
    canOpenModal: j,
    cannotOpenReason: y
  } = (0, C.default)({
    listing: t,
    guildId: i,
    groupListingId: a,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: v
  }), O = t.subscription_plans[0], D = 0 === O.price, P = (null == M ? void 0 : M.id) === t.id, F = (0, c.default)(), w = F && !j || R, G = () => {
    F ? b() : (0, d.redirectToLogin)({
      [N]: "true"
    })
  };
  return r.useEffect(() => {
    let e = new URL(location.href);
    if (F && !w && "true" === e.searchParams.get(N)) {
      e.searchParams.delete(N);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), b()
    }
  }, [F, b, w]), (0, n.jsxs)("div", {
    className: I.container,
    children: [(0, n.jsxs)("div", {
      className: I.cardHeader,
      children: [(0, n.jsx)(A, {
        listing: t
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, n.jsxs)("div", {
        className: I.priceAndButtonContainer,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: D ? x.default.Messages.APPLICATION_SUBSCRIPTION_FREE : x.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, h.formatPrice)(O.price, O.currency),
            period: (0, u.formatPlanInterval)(O)
          })
        }), (() => {
          var e;
          if (P) return (0, n.jsx)(S, {
            children: (null == L ? void 0 : L.status) === g.SubscriptionStatusTypes.CANCELED ? x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (D) return null == M ? (0, n.jsx)(S, {
            children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, n.jsx)(o.Tooltip, {
            tooltipClassName: I.subscribeButtonTooltip,
            text: j || !F ? null : y,
            "aria-label": null !== (e = !j && y) && void 0 !== e && e,
            children: e => (0, n.jsx)(p.default, {
              ...e,
              disabled: w,
              submitting: !1,
              onClick: G,
              children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, n.jsx)("div", {
      className: I.benefitsContainer,
      children: (0, n.jsx)(_.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: I.benefit
      })
    })]
  })
}