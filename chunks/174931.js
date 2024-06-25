t.d(n, {
  Z: function() {
    return Z
  }
}), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(468194),
  a = t(442837),
  r = t(477690),
  o = t(481060),
  c = t(887706),
  d = t(34674),
  u = t(817460),
  I = t(703656),
  N = t(351402),
  E = t(937615),
  T = t(73346),
  m = t(270144),
  _ = t(359610),
  h = t(245561),
  g = t(696906),
  O = t(981631),
  A = t(689938),
  x = t(103046);
let C = (0, s.Mg)(r.Z.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  S = "start_application_subscription",
  p = e => {
    let {
      listing: n
    } = e, t = n.image_asset;
    if (null == t) return null;
    let l = (0, T._W)(n.application_id, t, C);
    return (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: l,
        alt: "",
        className: x.listingImage
      })
    })
  },
  R = e => {
    let {
      children: n
    } = e;
    return (0, i.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      disabled: !0,
      size: o.Button.Sizes.SMALL,
      children: n
    })
  };

function Z(e) {
  let {
    listing: n,
    groupListingId: t,
    guildId: s,
    analyticsLocation: r,
    onComplete: T,
    forcesTransitionToGuild: C
  } = e, Z = (0, a.e7)([N.Z], () => N.Z.isSyncing), {
    activeSubscription: f,
    activeSubscriptionListing: M
  } = (0, m.F5)(n.application_id, s), {
    openModal: L,
    canOpenModal: v,
    cannotOpenReason: j
  } = (0, g.Z)({
    guildId: s,
    groupListingId: t,
    showBenefitsFirst: !1,
    analyticsLocation: r,
    onComplete: T,
    forcesTransitionToGuild: C,
    skuId: n.id
  }), b = n.subscription_plans[0], P = 0 === b.price, D = (null == M ? void 0 : M.id) === n.id, B = (0, c.Z)(), G = B && !v || Z, y = () => {
    B ? L() : (0, d.rf)({
      [S]: "true"
    })
  };
  return l.useEffect(() => {
    let e = new URL(location.href);
    if (B && !G && "true" === e.searchParams.get(S)) {
      e.searchParams.delete(S);
      let n = e.pathname + e.search;
      (0, I.dL)(n), L()
    }
  }, [B, L, G]), (0, i.jsxs)("div", {
    className: x.container,
    children: [(0, i.jsxs)("div", {
      className: x.cardHeader,
      children: [(0, i.jsx)(p, {
        listing: n
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: n.name
      }), (0, i.jsxs)("div", {
        className: x.priceAndButtonContainer,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: P ? A.Z.Messages.APPLICATION_SUBSCRIPTION_FREE : A.Z.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, E.T4)(b.price, b.currency),
            period: (0, u.JE)(b)
          })
        }), (() => {
          var e;
          if (D) return (0, i.jsx)(R, {
            children: (null == f ? void 0 : f.status) === O.O0b.CANCELED ? A.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : A.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (P) return null == M ? (0, i.jsx)(R, {
            children: A.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, i.jsx)(o.Tooltip, {
            tooltipClassName: x.subscribeButtonTooltip,
            text: v || !B ? null : j,
            "aria-label": null !== (e = !v && j) && void 0 !== e && e,
            children: e => (0, i.jsx)(_.Z, {
              ...e,
              disabled: G,
              submitting: !1,
              onClick: y,
              children: A.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, i.jsx)("div", {
      className: x.benefitsContainer,
      children: (0, i.jsx)(h.GU, {
        applicationId: n.application_id,
        storeListingBenefits: n.store_listing_benefits,
        skuBenefits: n.sku_benefits.benefits,
        className: x.benefit
      })
    })]
  })
}