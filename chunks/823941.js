"use strict";
l.r(t), l.d(t, {
  LOGO_SIZE: function() {
    return N
  },
  default: function() {
    return A
  }
});
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("180650"),
  o = l("399606"),
  u = l("481060"),
  c = l("906732"),
  d = l("963249"),
  f = l("594174"),
  C = l("68972"),
  m = l("754347"),
  p = l("74538"),
  E = l("884697"),
  h = l("624377"),
  g = l("141011"),
  x = l("813083"),
  b = l("372654"),
  L = l("994896"),
  T = l("215023"),
  v = l("474936"),
  S = l("689938"),
  I = l("897246");
let N = (0, E.getLogoSize)(96),
  _ = {
    [i.CollectiblesCategorySkuId.DISXCORE]: {
      left: () => l("136648"),
      right: () => l("850298")
    },
    [i.CollectiblesCategorySkuId.FANTASY]: {
      left: () => l("44602"),
      right: () => l("862392")
    },
    [i.CollectiblesCategorySkuId.CYBERPUNK]: {
      left: () => l("862358"),
      right: () => l("604083")
    },
    [i.CollectiblesCategorySkuId.ELEMENTS]: {
      left: () => l("534572"),
      right: () => l("905911"),
      leftOverflow: () => l("149653"),
      rightOverflow: () => l("183749")
    },
    [i.CollectiblesCategorySkuId.ANIME_V2]: {
      left: () => l("607668"),
      right: () => l("381436")
    },
    [i.CollectiblesCategorySkuId.SPRINGTOONS]: {
      left: () => l("138272"),
      right: () => l("392425")
    },
    [i.CollectiblesCategorySkuId.LOFI_VIBES]: {
      left: () => l("659813"),
      right: () => l("722603")
    },
    [i.CollectiblesCategorySkuId.GALAXY]: {
      left: () => l("236801"),
      right: () => l("537085")
    },
    [i.CollectiblesCategorySkuId.FEELIN_RETRO]: {
      left: () => l("616442"),
      right: () => l("250440")
    },
    [i.CollectiblesCategorySkuId.PIRATES]: {
      left: () => l("519741"),
      right: () => l("980112")
    }
  },
  O = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: l
    } = (0, c.default)(), r = s.useRef(null), n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, a.jsx)(a.Fragment, {
      children: t.summary
    }) : (0, a.jsx)(a.Fragment, {
      children: S.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, a.jsx)(u.Clickable, {
          innerRef: r,
          className: I.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: l,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, a.jsx)(u.Text, {
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
  var t, l, s, r;
  let {
    category: i,
    index: o
  } = e, u = _[i.skuId], c = o % 2 == 0, d = null !== (r = c ? null == u ? void 0 : u.left() : null == u ? void 0 : u.right()) && void 0 !== r ? r : (0, E.getCollectiblesAssetURL)(i.banner, {
    size: b.MAX_CONTENT_WIDTH,
    format: "jpg"
  }), f = c ? null == u ? void 0 : null === (t = u.leftOverflow) || void 0 === t ? void 0 : t.call(u) : null == u ? void 0 : null === (l = u.rightOverflow) || void 0 === l ? void 0 : l.call(u), {
    backgroundColors: C
  } = (0, h.default)(i.styles), m = {
    objectPosition: c ? "right" : "left",
    background: null != C ? "".concat((0, b.getBackgroundGradient)(C), " border-box border-box") : void 0,
    outlineColor: null != C ? C.border.toHslString() : void 0
  };
  return (0, a.jsxs)("div", {
    className: n()(I.condensedBannerContainer),
    children: [(0, a.jsx)("img", {
      src: d,
      style: m,
      className: I.condensedBannerImage,
      alt: ""
    }), null != f && (0, a.jsx)("img", {
      src: f,
      className: c ? I.overflowImage : I.overflowImageLeft,
      alt: ""
    }), (0, a.jsx)("img", {
      className: n()(I.condensedCategoryLogo, c ? I.condensedCategoryLogoLeft : I.condensedCategoryLogo),
      src: (0, E.getCollectiblesAssetURL)(i.logo, {
        size: N
      }),
      alt: i.name,
      style: {
        maxWidth: null === (s = T.categoryBannerOverrides[i.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth
      }
    }), (0, a.jsx)(x.default, {
      category: i,
      className: n()(I.limitedTimeBadge, c ? I.limitedTimeBadge : I.limitedTimeBadgeLeft),
      display: "banner"
    })]
  })
}

function A(e) {
  var t, l;
  let {
    category: s,
    className: r,
    hideLimitedTimeBadge: o = !1,
    index: c = 0
  } = e, {
    backgroundColors: d
  } = (0, h.default)(s.styles), f = !!(null === (t = T.categoryBannerOverrides[s.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: p
  } = (0, L.useCollectiblesCondensedBannersExperiment)({
    location: "Collectibles Shop Banner"
  });
  return p ? (0, a.jsx)(y, {
    category: s,
    index: c
  }) : (0, a.jsxs)(g.default, {
    asset: s.banner,
    className: n()(I.shopBanner, r),
    style: null != d ? {
      background: "".concat((0, b.getBackgroundGradient)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, a.jsxs)("div", {
      className: I.discordLogo,
      children: [(0, a.jsx)(C.default, {
        className: I.discordIcon
      }), (0, a.jsx)(m.default, {
        className: I.discordWordmark
      })]
    }), (0, a.jsx)("img", {
      className: I.categoryLogo,
      src: (0, E.getCollectiblesAssetURL)(s.logo, {
        size: N
      }),
      alt: s.name,
      style: {
        maxWidth: null === (l = T.categoryBannerOverrides[s.skuId]) || void 0 === l ? void 0 : l.logoMaxWidth
      }
    }), (0, a.jsx)(u.Text, {
      className: n()(I.summary, {
        [I.blackSummary]: f
      }),
      variant: "text-md/normal",
      children: s.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, a.jsx)(O, {
        category: s
      }) : s.summary
    }), !o && (0, a.jsx)(x.default, {
      category: s,
      className: I.limitedTimeBadge,
      display: "banner"
    })]
  })
}