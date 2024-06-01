"use strict";
l.r(t), l.d(t, {
  LOGO_SIZE: function() {
    return N
  },
  default: function() {
    return j
  }
});
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("180650"),
  o = l("399606"),
  c = l("481060"),
  u = l("906732"),
  d = l("963249"),
  f = l("594174"),
  C = l("68972"),
  p = l("754347"),
  m = l("74538"),
  g = l("884697"),
  E = l("624377"),
  h = l("141011"),
  b = l("813083"),
  x = l("372654"),
  S = l("994896"),
  v = l("215023"),
  I = l("474936"),
  L = l("689938"),
  T = l("897246");
let N = (0, g.getLogoSize)(96),
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
  y = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: l
    } = (0, u.default)(), r = s.useRef(null), n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return m.default.canUseCollectibles(n) ? (0, a.jsx)(a.Fragment, {
      children: t.summary
    }) : (0, a.jsx)(a.Fragment, {
      children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, a.jsx)(c.Clickable, {
          innerRef: r,
          className: T.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: l,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function A(e) {
  var t, l, s, r;
  let {
    category: i,
    index: o
  } = e, c = _[i.skuId], u = o % 2 == 1, d = null !== (r = u ? null == c ? void 0 : c.left() : null == c ? void 0 : c.right()) && void 0 !== r ? r : (0, g.getCollectiblesAssetURL)(i.banner, {
    size: x.MAX_CONTENT_WIDTH,
    format: "jpg"
  }), f = u ? null == c ? void 0 : null === (t = c.leftOverflow) || void 0 === t ? void 0 : t.call(c) : null == c ? void 0 : null === (l = c.rightOverflow) || void 0 === l ? void 0 : l.call(c), {
    backgroundColors: C
  } = (0, E.default)(i.styles), p = {
    objectPosition: u ? "left" : "right",
    background: null != C ? "".concat((0, x.getBackgroundGradient)(C), " border-box border-box") : void 0,
    outlineColor: null != C ? C.border.toHslString() : void 0
  };
  return (0, a.jsxs)("div", {
    className: n()(T.condensedBannerContainer),
    children: [(0, a.jsx)("img", {
      src: d,
      style: p,
      className: T.condensedBannerImage,
      alt: ""
    }), null != f && (0, a.jsx)("img", {
      src: f,
      className: n()(T.overflowImage, {
        [T.overflowImageLeft]: u
      }),
      alt: ""
    }), (0, a.jsx)("img", {
      className: n()(T.condensedCategoryLogo, {
        [T.condensedCategoryLogoLeft]: !u
      }),
      src: (0, g.getCollectiblesAssetURL)(i.logo, {
        size: N
      }),
      alt: i.name,
      style: {
        maxWidth: null === (s = v.categoryBannerOverrides[i.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth
      }
    }), (0, a.jsx)(b.default, {
      category: i,
      className: n()(T.limitedTimeBadge, {
        [T.limitedTimeBadgeLeft]: u
      }),
      display: "banner"
    })]
  })
}

function j(e) {
  var t, l;
  let {
    category: s,
    className: r,
    hideLimitedTimeBadge: o = !1,
    index: u = 0
  } = e, {
    backgroundColors: d
  } = (0, E.default)(s.styles), f = !!(null === (t = v.categoryBannerOverrides[s.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: m
  } = (0, S.useCollectiblesCondensedBannersExperiment)({
    location: "Collectibles Shop Banner"
  });
  return m ? (0, a.jsx)(A, {
    category: s,
    index: u
  }) : (0, a.jsxs)(h.default, {
    asset: s.banner,
    className: n()(T.shopBanner, r),
    style: null != d ? {
      background: "".concat((0, x.getBackgroundGradient)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, a.jsxs)("div", {
      className: T.discordLogo,
      children: [(0, a.jsx)(C.default, {
        className: T.discordIcon
      }), (0, a.jsx)(p.default, {
        className: T.discordWordmark
      })]
    }), (0, a.jsx)("img", {
      className: T.categoryLogo,
      src: (0, g.getCollectiblesAssetURL)(s.logo, {
        size: N
      }),
      alt: s.name,
      style: {
        maxWidth: null === (l = v.categoryBannerOverrides[s.skuId]) || void 0 === l ? void 0 : l.logoMaxWidth
      }
    }), (0, a.jsx)(c.Text, {
      className: n()(T.summary, {
        [T.blackSummary]: f
      }),
      variant: "text-md/normal",
      children: s.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, a.jsx)(y, {
        category: s
      }) : s.summary
    }), !o && (0, a.jsx)(b.default, {
      category: s,
      className: T.limitedTimeBadge,
      display: "banner"
    })]
  })
}