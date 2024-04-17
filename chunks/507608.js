"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("905322"),
  l = n("512100"),
  a = n("200207"),
  o = n("269210"),
  d = n("752843"),
  c = n("442837"),
  u = n("481060"),
  f = n("607070"),
  h = n("100527"),
  m = n("906732"),
  p = n("87484"),
  S = n("171246"),
  x = n("889989"),
  g = n("696906"),
  v = n("580130"),
  C = n("551428"),
  T = n("768581"),
  j = n("937615"),
  N = n("73346"),
  L = n("624138"),
  I = n("591759"),
  E = n("981631"),
  _ = n("474936"),
  R = n("689938"),
  b = n("836092");

function y(e) {
  var t, n;
  let {
    app: l,
    subscriptionGroupListing: a,
    guildId: o,
    products: d
  } = e, h = null !== (n = null == a ? void 0 : null === (t = a.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published)) && void 0 !== n ? n : [], m = r.useMemo(() => {
    let e = l.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = I.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [l]), {
    bot: p
  } = l, x = r.useMemo(() => {
    var e;
    if ((null == p ? void 0 : p.banner) == null) return;
    let t = (0, T.getUserBannerURL)({
      id: p.id,
      banner: p.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = I.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [p]), g = r.useMemo(() => {
    var e;
    if ((null == p ? void 0 : p.banner) == null) return;
    let t = (0, T.getUserBannerURL)({
      id: p.id,
      banner: p.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = I.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [p]), v = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion);
  return (0, i.jsxs)("div", {
    className: b.wrapper,
    children: [(0, i.jsx)("div", {
      className: b.banner,
      children: (0, i.jsx)(s.Banner, {
        title: l.name,
        iconSrc: m,
        backgroundSrc: x,
        animatedBackgroundSrc: g,
        prefersReducedMotion: v
      })
    }), h.length > 0 && null != a && (0, i.jsxs)("div", {
      className: b.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: R.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: b.productList,
        children: h.map(e => (0, i.jsx)(A, {
          appId: l.id,
          groupListingId: a.id,
          guildId: o,
          listing: e,
          groupListingType: (0, S.isApplicationUserSubscription)(a.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), d.length > 0 && (0, i.jsxs)("div", {
      className: b.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: R.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: b.productList,
        children: d.map(e => (0, i.jsx)(M, {
          sku: e,
          appId: l.id
        }, e.id))
      })]
    })]
  })
}

function A(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: s,
    listing: a,
    groupListingType: f
  } = e, {
    openModal: h
  } = (0, g.default)({
    listing: a,
    guildId: s,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: E.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), m = r.useMemo(() => {
    var e;
    return null === (e = a.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, x.getBenefitIcon)(t, e.icon)
    }))
  }, [t, a.store_listing_benefits]), p = (0, c.useStateFromStores)([v.default], () => {
    let e = v.default.getForSku(a.id);
    if (null == e) return !1;
    let t = 0;
    for (let r of e) {
      var n, i;
      let e = null !== (i = null === (n = r.endsAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 1 / 0;
      e >= t && (t = e)
    }
    return t > new Date().getTime()
  }, [a.id]), S = r.useMemo(() => {
    var e;
    return null != a.image_asset && null !== (e = I.default.toURLSafe((0, N.getAssetURL)(t, a.image_asset, 64))) && void 0 !== e ? e : void 0
  }, [t, a.image_asset]), C = a.subscription_plans.length > 0 ? a.subscription_plans[0] : null;
  if (null === C) return null;
  let T = "guild" === f || "user" === f && !p,
    L = e => {
      var t;
      return T ? (0, i.jsx)(u.Button, {
        onClick: null !== (t = e.onClick) && void 0 !== t ? t : h,
        className: e.className,
        children: R.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
          rate: (0, j.formatRate)((0, j.formatPrice)(C.price, C.currency), _.SubscriptionIntervalTypes.MONTH, 1)
        })
      }) : (0, i.jsx)(u.Button, {
        disabled: !0,
        className: e.className,
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        children: R.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
      })
    };
  return (0, i.jsx)(o.SubscriptionCard, {
    title: a.name,
    description: a.description,
    imgSrc: S,
    subscriptionType: f,
    onPurchase: h,
    PurchaseButton: L,
    benefitItems: null != m ? m.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != m ? () => {
      (0, u.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(u.ModalRoot, {
          transitionState: n,
          size: u.ModalSize.DYNAMIC,
          className: b.subDetailsModal,
          children: [(0, i.jsx)(l.CardDetails, {
            benefits: m.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: a.description,
            imgSrc: S,
            title: a.name,
            tag: (0, i.jsx)(d.SubscriptionTag, {
              type: f
            }),
            onClose: t
          }), (0, i.jsxs)(u.ModalFooter, {
            className: b.footer,
            children: [(0, i.jsx)(u.Button, {
              className: b.backButton,
              onClick: t,
              look: u.ButtonLooks.BLANK,
              children: (0, i.jsx)(u.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: R.default.Messages.BACK
              })
            }), (0, i.jsx)(L, {})]
          })]
        })
      })
    } : void 0
  })
}

function M(e) {
  var t, n, r;
  let {
    sku: s,
    appId: o
  } = e, {
    analyticsLocations: f
  } = (0, m.default)(h.default.APP_STOREFRONT), S = (0, c.useStateFromStores)([C.default], () => C.default.getForSKU(s.id), [s]), x = s.name, g = null !== (n = null == S ? void 0 : null === (t = S.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, v = (null == S ? void 0 : S.headerBackground) != null && null !== (r = I.default.toURLSafe((0, N.getAssetURL)(o, S.headerBackground, 256))) && void 0 !== r ? r : void 0, T = s.type === E.SKUTypes.DURABLE ? R.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: _
  } = s;
  if (null == _) return null;
  let y = () => {
      (0, p.default)({
        applicationId: o,
        skuId: s.id,
        analyticsLocations: f
      })
    },
    A = (0, i.jsx)(u.Button, {
      onClick: y,
      children: R.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, j.formatPrice)(_.amount, _.currency)
      })
    });
  return (0, i.jsx)(a.ProductCard, {
    title: x,
    description: g,
    headerImage: v,
    availabilityLabel: T,
    onDetails: (0, L.isNullOrEmpty)(g) ? void 0 : () => {
      (0, u.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(u.ModalRoot, {
          transitionState: n,
          size: u.ModalSize.DYNAMIC,
          className: b.subDetailsModal,
          children: [(0, i.jsx)(l.CardDetails, {
            title: x,
            description: g,
            imgSrc: v,
            tag: null != T ? (0, i.jsx)(d.Tag, {
              text: T
            }) : void 0,
            onClose: t
          }), (0, i.jsxs)(u.ModalFooter, {
            className: b.footer,
            children: [(0, i.jsx)(u.Button, {
              className: b.backButton,
              onClick: t,
              look: u.ButtonLooks.BLANK,
              children: (0, i.jsx)(u.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: R.default.Messages.BACK
              })
            }), A]
          })]
        })
      })
    },
    PurchaseButton: e => (0, i.jsx)(u.Button, {
      ...e,
      children: R.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, j.formatPrice)(_.amount, _.currency)
      })
    }),
    onPurchase: y
  })
}