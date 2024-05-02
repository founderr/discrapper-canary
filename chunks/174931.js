"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("468194"),
  i = n("442837"),
  l = n("477690"),
  o = n("481060"),
  c = n("887706"),
  d = n("34674"),
  u = n("817460"),
  f = n("703656"),
  m = n("351402"),
  h = n("937615"),
  p = n("73346"),
  E = n("270144"),
  T = n("359610"),
  C = n("245561"),
  _ = n("696906"),
  g = n("981631"),
  x = n("689938"),
  I = n("976622");
let N = (0, s.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  v = "start_application_subscription",
  A = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let r = (0, p.getAssetURL)(t.application_id, n, N);
    return (0, a.jsx)("div", {
      children: (0, a.jsx)("img", {
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
    return (0, a.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      disabled: !0,
      size: o.Button.Sizes.SMALL,
      children: t
    })
  };

function L(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: s,
    analyticsLocation: l,
    onComplete: p,
    forcesTransitionToGuild: N
  } = e, L = (0, i.useStateFromStores)([m.default], () => m.default.isSyncing), {
    activeSubscription: R,
    activeSubscriptionListing: y
  } = (0, E.useActiveSubscriptionListingForApplication)(t.application_id, s), {
    openModal: b,
    canOpenModal: j,
    cannotOpenReason: M
  } = (0, _.default)({
    listing: t,
    guildId: s,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: p,
    forcesTransitionToGuild: N
  }), O = t.subscription_plans[0], D = 0 === O.price, P = (null == y ? void 0 : y.id) === t.id, F = (0, c.default)(), B = F && !j || L, w = () => {
    F ? b() : (0, d.redirectToLogin)({
      [v]: "true"
    })
  };
  return r.useEffect(() => {
    let e = new URL(location.href);
    if (F && !B && "true" === e.searchParams.get(v)) {
      e.searchParams.delete(v);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), b()
    }
  }, [F, b, B]), (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsxs)("div", {
      className: I.cardHeader,
      children: [(0, a.jsx)(A, {
        listing: t
      }), (0, a.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, a.jsxs)("div", {
        className: I.priceAndButtonContainer,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: D ? x.default.Messages.APPLICATION_SUBSCRIPTION_FREE : x.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, h.formatPrice)(O.price, O.currency),
            period: (0, u.formatPlanInterval)(O)
          })
        }), (() => {
          var e;
          if (P) return (0, a.jsx)(S, {
            children: (null == R ? void 0 : R.status) === g.SubscriptionStatusTypes.CANCELED ? x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (D) return null == y ? (0, a.jsx)(S, {
            children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, a.jsx)(o.Tooltip, {
            tooltipClassName: I.subscribeButtonTooltip,
            text: j || !F ? null : M,
            "aria-label": null !== (e = !j && M) && void 0 !== e && e,
            children: e => (0, a.jsx)(T.default, {
              ...e,
              disabled: B,
              submitting: !1,
              onClick: w,
              children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, a.jsx)("div", {
      className: I.benefitsContainer,
      children: (0, a.jsx)(C.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: I.benefit
      })
    })]
  })
}