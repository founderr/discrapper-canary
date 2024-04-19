"use strict";
i.r(t), i.d(t, {
  default: function() {
    return S
  }
}), i("315314"), i("610138"), i("216116"), i("78328"), i("815648"), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("468194"),
  a = i("442837"),
  l = i("477690"),
  o = i("481060"),
  u = i("887706"),
  c = i("34674"),
  d = i("817460"),
  f = i("703656"),
  p = i("351402"),
  C = i("937615"),
  m = i("73346"),
  h = i("270144"),
  _ = i("359610"),
  E = i("245561"),
  I = i("696906"),
  T = i("981631"),
  x = i("689938"),
  g = i("160078");
let v = (0, s.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  R = "start_application_subscription",
  A = e => {
    let {
      listing: t
    } = e, i = t.image_asset;
    if (null == i) return null;
    let r = (0, m.getAssetURL)(t.application_id, i, v);
    return (0, n.jsx)("div", {
      children: (0, n.jsx)("img", {
        src: r,
        alt: "",
        className: g.listingImage
      })
    })
  },
  N = e => {
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

function S(e) {
  let {
    listing: t,
    groupListingId: i,
    guildId: s,
    analyticsLocation: l,
    onComplete: m,
    forcesTransitionToGuild: v
  } = e, S = (0, a.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: M,
    activeSubscriptionListing: L
  } = (0, h.useActiveSubscriptionListingForApplication)(t.application_id, s), {
    openModal: j,
    canOpenModal: b,
    cannotOpenReason: O
  } = (0, I.default)({
    listing: t,
    guildId: s,
    groupListingId: i,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: m,
    forcesTransitionToGuild: v
  }), y = t.subscription_plans[0], F = 0 === y.price, D = (null == L ? void 0 : L.id) === t.id, P = (0, u.default)(), w = P && !b || S, B = () => {
    P ? j() : (0, c.redirectToLogin)({
      [R]: "true"
    })
  };
  return r.useEffect(() => {
    let e = new URL(location.href);
    if (P && !w && "true" === e.searchParams.get(R)) {
      e.searchParams.delete(R);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), j()
    }
  }, [P, j, w]), (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsxs)("div", {
      className: g.cardHeader,
      children: [(0, n.jsx)(A, {
        listing: t
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, n.jsxs)("div", {
        className: g.priceAndButtonContainer,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: F ? x.default.Messages.APPLICATION_SUBSCRIPTION_FREE : x.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, C.formatPrice)(y.price, y.currency),
            period: (0, d.formatPlanInterval)(y)
          })
        }), (() => {
          var e;
          if (D) return (0, n.jsx)(N, {
            children: (null == M ? void 0 : M.status) === T.SubscriptionStatusTypes.CANCELED ? x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (F) return null == L ? (0, n.jsx)(N, {
            children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, n.jsx)(o.Tooltip, {
            tooltipClassName: g.subscribeButtonTooltip,
            text: b || !P ? null : O,
            "aria-label": null !== (e = !b && O) && void 0 !== e && e,
            children: e => (0, n.jsx)(_.default, {
              ...e,
              disabled: w,
              submitting: !1,
              onClick: B,
              children: x.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, n.jsx)("div", {
      className: g.benefitsContainer,
      children: (0, n.jsx)(E.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: g.benefit
      })
    })]
  })
}