"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var i = n("735250"),
  r = n("470079"),
  l = n("905322"),
  s = n("512100"),
  a = n("200207"),
  o = n("269210"),
  c = n("752843"),
  d = n("368072"),
  u = n("790472"),
  f = n("442837"),
  m = n("481060"),
  h = n("607070"),
  p = n("100527"),
  S = n("906732"),
  v = n("87484"),
  g = n("171246"),
  x = n("889989"),
  T = n("696906"),
  C = n("551428"),
  j = n("768581"),
  N = n("937615"),
  L = n("73346"),
  E = n("624138"),
  I = n("591759"),
  _ = n("110742"),
  R = n("981631"),
  y = n("474936"),
  b = n("689938"),
  A = n("836092");

function O(e) {
  var t, n;
  let {
    app: s,
    subscriptionGroupListing: a,
    guildId: o,
    products: c
  } = e, d = null !== (n = null == a ? void 0 : null === (t = a.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published)) && void 0 !== n ? n : [], u = r.useMemo(() => {
    let e = s.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = I.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [s]), {
    bot: p
  } = s, S = r.useMemo(() => {
    var e;
    if ((null == p ? void 0 : p.banner) == null) return;
    let t = (0, j.getUserBannerURL)({
      id: p.id,
      banner: p.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = I.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [p]), v = r.useMemo(() => {
    var e;
    if ((null == p ? void 0 : p.banner) == null) return;
    let t = (0, j.getUserBannerURL)({
      id: p.id,
      banner: p.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = I.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [p]), x = (0, f.useStateFromStores)([h.default], () => h.default.useReducedMotion);
  return (0, i.jsxs)("div", {
    className: A.wrapper,
    children: [(0, i.jsx)(l.Banner, {
      title: s.name,
      iconSrc: u,
      backgroundSrc: S,
      animatedBackgroundSrc: v,
      prefersReducedMotion: x
    }), d.length > 0 && null != a && (0, i.jsxs)("div", {
      className: A.productSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: A.productList,
        children: d.map(e => (0, i.jsx)(M, {
          appId: s.id,
          groupListingId: a.id,
          guildId: o,
          listing: e,
          groupListingType: (0, g.isApplicationUserSubscription)(a.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), c.length > 0 && (0, i.jsxs)("div", {
      className: A.productSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: A.productList,
        children: c.map(e => (0, i.jsx)(B, {
          sku: e,
          appId: s.id
        }, e.id))
      })]
    }), (0, i.jsx)(m.Text, {
      variant: "text-md/normal",
      className: A.legalText,
      children: null != s.termsOfServiceUrl && null != s.privacyPolicyUrl ? b.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: s.termsOfServiceUrl,
        ppUrl: s.privacyPolicyUrl
      }) : b.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function M(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: l,
    listing: a,
    groupListingType: u
  } = e, {
    openModal: f
  } = (0, T.default)({
    listing: a,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: R.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), h = r.useMemo(() => {
    var e;
    return null === (e = a.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, x.getBenefitIcon)(t, e.icon)
    }))
  }, [t, a.store_listing_benefits]), p = (0, _.useHasActiveEntitlement)(a.id), S = r.useMemo(() => {
    var e;
    return null != a.image_asset && null !== (e = I.default.toURLSafe((0, L.getAssetURL)(t, a.image_asset, 64))) && void 0 !== e ? e : void 0
  }, [t, a.image_asset]), v = a.subscription_plans.length > 0 ? a.subscription_plans[0] : null;
  if (null === v) return null;
  let g = "guild" === u || "user" === u && !p,
    C = e => {
      var t;
      return g ? (0, i.jsx)(m.Button, {
        onClick: null !== (t = e.onClick) && void 0 !== t ? t : f,
        className: e.className,
        children: b.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
          rate: (0, N.formatRate)((0, N.formatPrice)(v.price, v.currency), y.SubscriptionIntervalTypes.MONTH, 1)
        })
      }) : (0, i.jsx)(U, {
        className: e.className,
        children: b.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
      })
    };
  return (0, i.jsx)(o.SubscriptionCard, {
    title: a.name,
    description: a.description,
    imgSrc: S,
    subscriptionType: u,
    onPurchase: f,
    PurchaseButton: C,
    benefitItems: null != h ? h.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != h ? () => {
      (0, m.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(m.ModalRoot, {
          transitionState: n,
          size: m.ModalSize.DYNAMIC,
          className: A.subDetailsModal,
          children: [(0, i.jsx)(s.CardDetails, {
            benefits: h.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: a.description,
            imgSrc: S,
            title: a.name,
            tag: (0, i.jsx)(c.SubscriptionTag, {
              type: u
            }),
            onClose: t,
            FallbackIcon: d.BadgeIcon
          }), (0, i.jsxs)(m.ModalFooter, {
            className: A.footer,
            children: [(0, i.jsx)(m.Button, {
              className: A.backButton,
              onClick: t,
              look: m.ButtonLooks.BLANK,
              children: (0, i.jsx)(m.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: b.default.Messages.BACK
              })
            }), (0, i.jsx)(C, {})]
          })]
        })
      })
    } : void 0
  })
}

function B(e) {
  var t, n, r;
  let {
    sku: l,
    appId: o
  } = e, {
    analyticsLocations: d
  } = (0, S.default)(p.default.APP_STOREFRONT), h = (0, f.useStateFromStores)([C.default], () => C.default.getForSKU(l.id), [l]), g = l.name, x = null !== (n = null == h ? void 0 : null === (t = h.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, T = (null == h ? void 0 : h.headerBackground) != null && null !== (r = I.default.toURLSafe((0, L.getAssetURL)(o, h.headerBackground, 256))) && void 0 !== r ? r : void 0, j = (0, _.useHasActiveEntitlement)(l.id), y = l.type === R.SKUTypes.DURABLE && j, O = l.type === R.SKUTypes.DURABLE ? y ? b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: M
  } = l;
  if (null == M) return null;
  let B = () => {
      (0, v.default)({
        applicationId: o,
        skuId: l.id,
        analyticsLocations: d
      })
    },
    P = e => {
      var t;
      return y ? (0, i.jsx)(U, {
        className: e.className,
        children: b.default.Messages.COLLECTIBLES_ALREADY_OWNED
      }) : (0, i.jsx)(m.Button, {
        onClick: null !== (t = e.onClick) && void 0 !== t ? t : B,
        className: e.className,
        children: b.default.Messages.STOREFRONT_PURCHASE_FOR.format({
          price: (0, N.formatPrice)(M.amount, M.currency)
        })
      })
    };
  return (0, i.jsx)(a.ProductCard, {
    title: g,
    description: x,
    headerImage: T,
    availabilityLabel: O,
    onDetails: (0, E.isNullOrEmpty)(x) ? void 0 : () => {
      (0, m.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(m.ModalRoot, {
          transitionState: n,
          size: m.ModalSize.DYNAMIC,
          className: A.subDetailsModal,
          children: [(0, i.jsx)(s.CardDetails, {
            title: g,
            description: x,
            imgSrc: T,
            tag: null != O ? (0, i.jsx)(c.Tag, {
              text: O
            }) : void 0,
            onClose: t,
            FallbackIcon: u.TicketIcon
          }), (0, i.jsxs)(m.ModalFooter, {
            className: A.footer,
            children: [(0, i.jsx)(m.Button, {
              className: A.backButton,
              onClick: t,
              look: m.ButtonLooks.BLANK,
              children: (0, i.jsx)(m.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: b.default.Messages.BACK
              })
            }), (0, i.jsx)(P, {})]
          })]
        })
      })
    },
    PurchaseButton: P,
    onPurchase: B
  })
}

function U(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(m.Button, {
    disabled: !0,
    className: t,
    look: m.Button.Looks.OUTLINED,
    color: m.Button.Colors.PRIMARY,
    size: m.Button.Sizes.SMALL,
    children: n
  })
}