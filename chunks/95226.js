"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("37983"),
  i = n("884691"),
  l = n("617258"),
  r = n("446674"),
  a = n("769846"),
  u = n("77078"),
  o = n("598981"),
  c = n("682777"),
  d = n("577357"),
  f = n("393414"),
  h = n("160299"),
  p = n("153160"),
  v = n("271560"),
  I = n("991254"),
  _ = n("777053"),
  m = n("139737"),
  C = n("375010"),
  E = n("49111"),
  T = n("782340"),
  A = n("597550");
let g = (0, l.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  N = "start_application_subscription",
  R = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, v.getAssetURL)(t.application_id, n, g);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: A.listingImage
      })
    })
  },
  x = e => {
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

function L(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: l,
    analyticsLocation: a,
    onComplete: v,
    forcesTransitionToGuild: g
  } = e, L = (0, r.useStateFromStores)([h.default], () => h.default.isSyncing), {
    activeSubscription: S,
    activeSubscriptionListing: P
  } = (0, I.useActiveSubscriptionListingForApplication)(t.application_id, l), {
    openModal: O,
    canOpenModal: M,
    cannotOpenReason: j
  } = (0, C.default)({
    listing: t,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: a,
    onComplete: v,
    forcesTransitionToGuild: g
  }), y = t.subscription_plans[0], w = 0 === y.price, b = (null == P ? void 0 : P.id) === t.id, U = (0, o.default)(), D = U && !M || L, V = () => {
    U ? O() : (0, c.redirectToLogin)({
      [N]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (U && !D && "true" === e.searchParams.get(N)) {
      e.searchParams.delete(N);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), O()
    }
  }, [U, O, D]), (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsxs)("div", {
      className: A.cardHeader,
      children: [(0, s.jsx)(R, {
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
          children: w ? T.default.Messages.APPLICATION_SUBSCRIPTION_FREE : T.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, p.formatPrice)(y.price, y.currency),
            period: (0, d.formatPlanInterval)(y)
          })
        }), (() => {
          var e;
          if (b) return (0, s.jsx)(x, {
            children: (null == S ? void 0 : S.status) === E.SubscriptionStatusTypes.CANCELED ? T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (w) return null == P ? (0, s.jsx)(x, {
            children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(u.Tooltip, {
            tooltipClassName: A.subscribeButtonTooltip,
            text: M || !U ? null : j,
            "aria-label": null !== (e = !M && j) && void 0 !== e && e,
            children: e => (0, s.jsx)(_.default, {
              ...e,
              disabled: D,
              submitting: !1,
              onClick: V,
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