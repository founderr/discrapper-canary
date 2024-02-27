"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("617258"),
  a = n("446674"),
  l = n("769846"),
  o = n("77078"),
  u = n("598981"),
  c = n("682777"),
  d = n("577357"),
  f = n("393414"),
  p = n("160299"),
  _ = n("153160"),
  E = n("271560"),
  m = n("991254"),
  I = n("777053"),
  T = n("139737"),
  h = n("375010"),
  g = n("49111"),
  C = n("782340"),
  S = n("597550");
let A = (0, s.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  v = "start_application_subscription",
  N = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, E.getAssetURL)(t.application_id, n, A);
    return (0, r.jsx)("div", {
      children: (0, r.jsx)("img", {
        src: i,
        alt: "",
        className: S.listingImage
      })
    })
  },
  x = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(o.Button, {
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
    guildId: s,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: A
  } = e, R = (0, a.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: O,
    activeSubscriptionListing: D
  } = (0, m.useActiveSubscriptionListingForApplication)(t.application_id, s), {
    openModal: b,
    canOpenModal: M,
    cannotOpenReason: L
  } = (0, h.default)({
    listing: t,
    guildId: s,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: A
  }), y = t.subscription_plans[0], P = 0 === y.price, G = (null == D ? void 0 : D.id) === t.id, U = (0, u.default)(), j = U && !M || R, F = () => {
    U ? b() : (0, c.redirectToLogin)({
      [v]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (U && !j && "true" === e.searchParams.get(v)) {
      e.searchParams.delete(v);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), b()
    }
  }, [U, b, j]), (0, r.jsxs)("div", {
    className: S.container,
    children: [(0, r.jsxs)("div", {
      className: S.cardHeader,
      children: [(0, r.jsx)(N, {
        listing: t
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, r.jsxs)("div", {
        className: S.priceAndButtonContainer,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: P ? C.default.Messages.APPLICATION_SUBSCRIPTION_FREE : C.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, _.formatPrice)(y.price, y.currency),
            period: (0, d.formatPlanInterval)(y)
          })
        }), (() => {
          var e;
          if (G) return (0, r.jsx)(x, {
            children: (null == O ? void 0 : O.status) === g.SubscriptionStatusTypes.CANCELED ? C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (P) return null == D ? (0, r.jsx)(x, {
            children: C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, r.jsx)(o.Tooltip, {
            tooltipClassName: S.subscribeButtonTooltip,
            text: M || !U ? null : L,
            "aria-label": null !== (e = !M && L) && void 0 !== e && e,
            children: e => (0, r.jsx)(I.default, {
              ...e,
              disabled: j,
              submitting: !1,
              onClick: F,
              children: C.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, r.jsx)("div", {
      className: S.benefitsContainer,
      children: (0, r.jsx)(T.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: S.benefit
      })
    })]
  })
}