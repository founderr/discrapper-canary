"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
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
  v = n("245561"),
  A = n("696906"),
  T = n("981631"),
  C = n("689938"),
  g = n("160078");
let E = (0, a.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  S = "start_application_subscription",
  N = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, I.getAssetURL)(t.application_id, n, E);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: g.listingImage
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
    guildId: a,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: E
  } = e, x = (0, l.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: L,
    activeSubscriptionListing: P
  } = (0, _.useActiveSubscriptionListingForApplication)(t.application_id, a), {
    openModal: y,
    canOpenModal: O,
    cannotOpenReason: j
  } = (0, A.default)({
    listing: t,
    guildId: a,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: E
  }), M = t.subscription_plans[0], b = 0 === M.price, w = (null == P ? void 0 : P.id) === t.id, U = (0, o.default)(), B = U && !O || x, D = () => {
    U ? y() : (0, c.redirectToLogin)({
      [S]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (U && !B && "true" === e.searchParams.get(S)) {
      e.searchParams.delete(S);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), y()
    }
  }, [U, y, B]), (0, s.jsxs)("div", {
    className: g.container,
    children: [(0, s.jsxs)("div", {
      className: g.cardHeader,
      children: [(0, s.jsx)(N, {
        listing: t
      }), (0, s.jsx)(u.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, s.jsxs)("div", {
        className: g.priceAndButtonContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: b ? C.default.Messages.APPLICATION_SUBSCRIPTION_FREE : C.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, h.formatPrice)(M.price, M.currency),
            period: (0, d.formatPlanInterval)(M)
          })
        }), (() => {
          var e;
          if (w) return (0, s.jsx)(R, {
            children: (null == L ? void 0 : L.status) === T.SubscriptionStatusTypes.CANCELED ? C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (b) return null == P ? (0, s.jsx)(R, {
            children: C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(u.Tooltip, {
            tooltipClassName: g.subscribeButtonTooltip,
            text: O || !U ? null : j,
            "aria-label": null !== (e = !O && j) && void 0 !== e && e,
            children: e => (0, s.jsx)(m.default, {
              ...e,
              disabled: B,
              submitting: !1,
              onClick: D,
              children: C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, s.jsx)("div", {
      className: g.benefitsContainer,
      children: (0, s.jsx)(v.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: g.benefit
      })
    })]
  })
}