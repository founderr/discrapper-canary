"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return N
  },
  default: function() {
    return O
  }
});
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("180650"),
  o = a("399606"),
  u = a("481060"),
  c = a("906732"),
  d = a("963249"),
  f = a("594174"),
  m = a("68972"),
  C = a("754347"),
  p = a("74538"),
  E = a("884697"),
  h = a("624377"),
  g = a("141011"),
  x = a("813083"),
  b = a("67938"),
  T = a("372654"),
  S = a("215023"),
  L = a("474936"),
  v = a("689938"),
  I = a("897246");
let N = (0, E.getLogoSize)(96),
  _ = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, c.default)(), r = s.useRef(null), n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
      children: t.summary
    }) : (0, l.jsx)(l.Fragment, {
      children: v.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, l.jsx)(u.Clickable, {
          innerRef: r,
          className: I.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function O(e) {
  var t, a;
  let {
    category: s,
    className: r,
    hideLimitedTimeBadge: o = !1
  } = e, {
    backgroundColors: c
  } = (0, h.default)(s.styles), d = !!(null === (t = S.categoryBannerOverrides[s.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
  return s.skuId === i.CollectiblesCategorySkuId.SHY ? (0, l.jsx)(b.ShyBanner, {
    category: s
  }) : (0, l.jsxs)(g.default, {
    asset: s.banner,
    className: n()(I.shopBanner, r),
    style: null != c ? {
      background: "".concat((0, T.getBackgroundGradient)(c), " border-box border-box"),
      outlineColor: c.border.toHslString()
    } : void 0,
    children: [(0, l.jsxs)("div", {
      className: I.discordLogo,
      children: [(0, l.jsx)(m.default, {
        className: I.discordIcon
      }), (0, l.jsx)(C.default, {
        className: I.discordWordmark
      })]
    }), (0, l.jsx)("img", {
      className: I.categoryLogo,
      src: (0, E.getCollectiblesAssetURL)(s.logo, {
        size: N
      }),
      alt: s.name,
      style: {
        maxWidth: null === (a = S.categoryBannerOverrides[s.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, l.jsx)(u.Text, {
      className: n()(I.summary, {
        [I.blackSummary]: d
      }),
      variant: "text-md/normal",
      children: s.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(_, {
        category: s
      }) : s.summary
    }), !o && (0, l.jsx)(x.default, {
      category: s,
      className: I.limitedTimeBadge,
      display: "banner"
    })]
  })
}