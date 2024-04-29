"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("468194"),
  a = n("442837"),
  l = n("477690"),
  o = n("481060"),
  u = n("887706"),
  c = n("34674"),
  d = n("817460"),
  f = n("703656"),
  p = n("351402"),
  m = n("937615"),
  E = n("73346"),
  I = n("270144"),
  _ = n("359610"),
  h = n("245561"),
  T = n("696906"),
  g = n("981631"),
  C = n("689938"),
  x = n("976622");
let v = (0, s.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  N = "start_application_subscription",
  R = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let r = (0, E.getAssetURL)(t.application_id, n, v);
    return (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: r,
        alt: "",
        className: x.listingImage
      })
    })
  },
  A = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)(o.Button, {
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
    guildId: s,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: v
  } = e, S = (0, a.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: M,
    activeSubscriptionListing: b
  } = (0, I.useActiveSubscriptionListingForApplication)(t.application_id, s), {
    openModal: O,
    canOpenModal: L,
    cannotOpenReason: F
  } = (0, T.default)({
    listing: t,
    guildId: s,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: v
  }), y = t.subscription_plans[0], D = 0 === y.price, j = (null == b ? void 0 : b.id) === t.id, P = (0, u.default)(), w = P && !L || S, G = () => {
    P ? O() : (0, c.redirectToLogin)({
      [N]: "true"
    })
  };
  return r.useEffect(() => {
    let e = new URL(location.href);
    if (P && !w && "true" === e.searchParams.get(N)) {
      e.searchParams.delete(N);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), O()
    }
  }, [P, O, w]), (0, i.jsxs)("div", {
    className: x.container,
    children: [(0, i.jsxs)("div", {
      className: x.cardHeader,
      children: [(0, i.jsx)(R, {
        listing: t
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, i.jsxs)("div", {
        className: x.priceAndButtonContainer,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: D ? C.default.Messages.APPLICATION_SUBSCRIPTION_FREE : C.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, m.formatPrice)(y.price, y.currency),
            period: (0, d.formatPlanInterval)(y)
          })
        }), (() => {
          var e;
          if (j) return (0, i.jsx)(A, {
            children: (null == M ? void 0 : M.status) === g.SubscriptionStatusTypes.CANCELED ? C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (D) return null == b ? (0, i.jsx)(A, {
            children: C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, i.jsx)(o.Tooltip, {
            tooltipClassName: x.subscribeButtonTooltip,
            text: L || !P ? null : F,
            "aria-label": null !== (e = !L && F) && void 0 !== e && e,
            children: e => (0, i.jsx)(_.default, {
              ...e,
              disabled: w,
              submitting: !1,
              onClick: G,
              children: C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, i.jsx)("div", {
      className: x.benefitsContainer,
      children: (0, i.jsx)(h.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: x.benefit
      })
    })]
  })
}