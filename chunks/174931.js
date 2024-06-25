t.d(n, {
  Z: function() {
    return R
  }
}), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(468194),
  o = t(442837),
  l = t(477690),
  s = t(481060),
  c = t(887706),
  d = t(34674),
  u = t(817460),
  _ = t(703656),
  p = t(351402),
  m = t(937615),
  I = t(73346),
  f = t(270144),
  g = t(359610),
  h = t(245561),
  C = t(696906),
  v = t(981631),
  E = t(689938),
  x = t(103046);
let b = (0, r.Mg)(l.Z.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  A = "start_application_subscription",
  P = e => {
    let {
      listing: n
    } = e, t = n.image_asset;
    if (null == t) return null;
    let a = (0, I._W)(n.application_id, t, b);
    return (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: a,
        alt: "",
        className: x.listingImage
      })
    })
  },
  T = e => {
    let {
      children: n
    } = e;
    return (0, i.jsx)(s.Button, {
      look: s.Button.Looks.OUTLINED,
      color: s.Button.Colors.PRIMARY,
      disabled: !0,
      size: s.Button.Sizes.SMALL,
      children: n
    })
  };

function R(e) {
  let {
    listing: n,
    groupListingId: t,
    guildId: r,
    analyticsLocation: l,
    onComplete: I,
    forcesTransitionToGuild: b
  } = e, R = (0, o.e7)([p.Z], () => p.Z.isSyncing), {
    activeSubscription: N,
    activeSubscriptionListing: S
  } = (0, f.F5)(n.application_id, r), {
    openModal: L,
    canOpenModal: O,
    cannotOpenReason: j
  } = (0, C.Z)({
    guildId: r,
    groupListingId: t,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: I,
    forcesTransitionToGuild: b,
    skuId: n.id
  }), y = n.subscription_plans[0], D = 0 === y.price, Z = (null == S ? void 0 : S.id) === n.id, M = (0, c.Z)(), B = M && !O || R, k = () => {
    M ? L() : (0, d.rf)({
      [A]: "true"
    })
  };
  return a.useEffect(() => {
    let e = new URL(location.href);
    if (M && !B && "true" === e.searchParams.get(A)) {
      e.searchParams.delete(A);
      let n = e.pathname + e.search;
      (0, _.dL)(n), L()
    }
  }, [M, L, B]), (0, i.jsxs)("div", {
    className: x.container,
    children: [(0, i.jsxs)("div", {
      className: x.cardHeader,
      children: [(0, i.jsx)(P, {
        listing: n
      }), (0, i.jsx)(s.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: n.name
      }), (0, i.jsxs)("div", {
        className: x.priceAndButtonContainer,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: D ? E.Z.Messages.APPLICATION_SUBSCRIPTION_FREE : E.Z.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, m.T4)(y.price, y.currency),
            period: (0, u.JE)(y)
          })
        }), (() => {
          var e;
          if (Z) return (0, i.jsx)(T, {
            children: (null == N ? void 0 : N.status) === v.O0b.CANCELED ? E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (D) return null == S ? (0, i.jsx)(T, {
            children: E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, i.jsx)(s.Tooltip, {
            tooltipClassName: x.subscribeButtonTooltip,
            text: O || !M ? null : j,
            "aria-label": null !== (e = !O && j) && void 0 !== e && e,
            children: e => (0, i.jsx)(g.Z, {
              ...e,
              disabled: B,
              submitting: !1,
              onClick: k,
              children: E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
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