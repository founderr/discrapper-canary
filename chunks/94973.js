"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("617258"),
  l = n("446674"),
  a = n("769846"),
  u = n("77078"),
  o = n("598981"),
  c = n("682777"),
  d = n("577357"),
  f = n("393414"),
  h = n("160299"),
  p = n("153160"),
  v = n("271560"),
  I = n("650509"),
  C = n("910861"),
  m = n("899604"),
  A = n("153335"),
  E = n("49111"),
  g = n("782340"),
  T = n("403946");
let N = (0, r.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  R = "start_application_subscription",
  _ = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, v.getAssetURL)(t.application_id, n, N);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: T.listingImage
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
    guildId: r,
    analyticsLocation: a,
    onComplete: v,
    forcesTransitionToGuild: N
  } = e, L = (0, l.useStateFromStores)([h.default], () => h.default.isSyncing), {
    activeSubscription: S,
    activeSubscriptionListing: P
  } = (0, I.useActiveSubscriptionListingForApplication)(t.application_id, r), {
    openModal: O,
    canOpenModal: j,
    cannotOpenReason: M
  } = (0, A.default)({
    listing: t,
    guildId: r,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: a,
    onComplete: v,
    forcesTransitionToGuild: N
  }), w = t.subscription_plans[0], b = 0 === w.price, D = (null == P ? void 0 : P.id) === t.id, y = (0, o.default)(), U = y && !j || L, V = () => {
    y ? O() : (0, c.redirectToLogin)({
      [R]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (y && !U && "true" === e.searchParams.get(R)) {
      e.searchParams.delete(R);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), O()
    }
  }, [y, O, U]), (0, s.jsxs)("div", {
    className: T.container,
    children: [(0, s.jsxs)("div", {
      className: T.cardHeader,
      children: [(0, s.jsx)(_, {
        listing: t
      }), (0, s.jsx)(u.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, s.jsxs)("div", {
        className: T.priceAndButtonContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: b ? g.default.Messages.APPLICATION_SUBSCRIPTION_FREE : g.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, p.formatPrice)(w.price, w.currency),
            period: (0, d.formatPlanInterval)(w)
          })
        }), (() => {
          var e;
          if (D) return (0, s.jsx)(x, {
            children: (null == S ? void 0 : S.status) === E.SubscriptionStatusTypes.CANCELED ? g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (b) return null == P ? (0, s.jsx)(x, {
            children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(u.Tooltip, {
            tooltipClassName: T.subscribeButtonTooltip,
            text: j || !y ? null : M,
            "aria-label": null !== (e = !j && M) && void 0 !== e && e,
            children: e => (0, s.jsx)(C.default, {
              ...e,
              disabled: U,
              submitting: !1,
              onClick: V,
              children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, s.jsx)("div", {
      className: T.benefitsContainer,
      children: (0, s.jsx)(m.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: T.benefit
      })
    })]
  })
}