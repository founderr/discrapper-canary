"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("468194"),
  s = n("442837"),
  l = n("477690"),
  o = n("481060"),
  d = n("887706"),
  c = n("34674"),
  u = n("817460"),
  f = n("703656"),
  m = n("351402"),
  h = n("937615"),
  E = n("73346"),
  T = n("270144"),
  p = n("359610"),
  _ = n("245561"),
  C = n("696906"),
  g = n("981631"),
  x = n("689938"),
  I = n("976622");
let v = (0, r.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  N = "start_application_subscription",
  S = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, E.getAssetURL)(t.application_id, n, v);
    return (0, a.jsx)("div", {
      children: (0, a.jsx)("img", {
        src: i,
        alt: "",
        className: I.listingImage
      })
    })
  },
  A = e => {
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

function R(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: r,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: v
  } = e, R = (0, s.useStateFromStores)([m.default], () => m.default.isSyncing), {
    activeSubscription: M,
    activeSubscriptionListing: L
  } = (0, T.useActiveSubscriptionListingForApplication)(t.application_id, r), {
    openModal: b,
    canOpenModal: y,
    cannotOpenReason: j
  } = (0, C.default)({
    listing: t,
    guildId: r,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: v
  }), O = t.subscription_plans[0], D = 0 === O.price, P = (null == L ? void 0 : L.id) === t.id, F = (0, d.default)(), w = F && !y || R, G = () => {
    F ? b() : (0, c.redirectToLogin)({
      [N]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (F && !w && "true" === e.searchParams.get(N)) {
      e.searchParams.delete(N);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), b()
    }
  }, [F, b, w]), (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsxs)("div", {
      className: I.cardHeader,
      children: [(0, a.jsx)(S, {
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
          if (P) return (0, a.jsx)(A, {
            children: (null == M ? void 0 : M.status) === g.SubscriptionStatusTypes.CANCELED ? x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (D) return null == L ? (0, a.jsx)(A, {
            children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, a.jsx)(o.Tooltip, {
            tooltipClassName: I.subscribeButtonTooltip,
            text: y || !F ? null : j,
            "aria-label": null !== (e = !y && j) && void 0 !== e && e,
            children: e => (0, a.jsx)(p.default, {
              ...e,
              disabled: w,
              submitting: !1,
              onClick: G,
              children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, a.jsx)("div", {
      className: I.benefitsContainer,
      children: (0, a.jsx)(_.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: I.benefit
      })
    })]
  })
}