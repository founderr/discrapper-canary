"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return _
  },
  default: function() {
    return y
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
  h = a("884697"),
  g = a("624377"),
  E = a("141011"),
  b = a("813083"),
  S = a("67938"),
  T = a("372654"),
  x = a("414592"),
  L = a("474936"),
  v = a("689938"),
  I = a("380762");
let _ = (0, h.getLogoSize)(96),
  N = e => {
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

function y(e) {
  var t, a;
  let {
    category: s,
    className: r,
    hideLimitedTimeBadge: o = !1
  } = e, {
    backgroundColors: c
  } = (0, g.default)(s.styles), d = !!(null === (t = x.categoryBannerOverrides[s.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
  return s.skuId === i.CollectiblesCategorySkuId.SHY ? (0, l.jsx)(S.ShyBanner, {
    category: s
  }) : (0, l.jsxs)(E.default, {
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
      src: (0, h.getCollectiblesAssetURL)(s.logo, {
        size: _
      }),
      alt: s.name,
      style: {
        maxWidth: null === (a = x.categoryBannerOverrides[s.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, l.jsx)(u.Text, {
      className: n()(I.summary, {
        [I.blackSummary]: d
      }),
      variant: "text-md/normal",
      children: s.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(N, {
        category: s
      }) : s.summary
    }), !o && (0, l.jsx)(b.default, {
      category: s,
      className: I.limitedTimeBadge,
      display: "banner"
    })]
  })
}