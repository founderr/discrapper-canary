"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return N
  },
  default: function() {
    return j
  }
});
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("180650"),
  o = a("399606"),
  c = a("481060"),
  u = a("906732"),
  d = a("963249"),
  f = a("594174"),
  C = a("68972"),
  m = a("754347"),
  p = a("74538"),
  g = a("884697"),
  E = a("624377"),
  h = a("141011"),
  b = a("813083"),
  x = a("372654"),
  v = a("994896"),
  I = a("215023"),
  S = a("474936"),
  L = a("689938"),
  T = a("897246");
let N = (0, g.getLogoSize)(96),
  _ = {
    [i.CollectiblesCategorySkuId.DISXCORE]: {
      left: () => a("136648"),
      right: () => a("850298")
    },
    [i.CollectiblesCategorySkuId.FANTASY]: {
      left: () => a("44602"),
      right: () => a("862392")
    },
    [i.CollectiblesCategorySkuId.CYBERPUNK]: {
      left: () => a("862358"),
      right: () => a("604083")
    },
    [i.CollectiblesCategorySkuId.ELEMENTS]: {
      left: () => a("534572"),
      right: () => a("905911"),
      leftOverflow: () => a("149653"),
      rightOverflow: () => a("183749")
    },
    [i.CollectiblesCategorySkuId.ANIME_V2]: {
      left: () => a("607668"),
      right: () => a("381436")
    },
    [i.CollectiblesCategorySkuId.SPRINGTOONS]: {
      left: () => a("138272"),
      right: () => a("392425")
    },
    [i.CollectiblesCategorySkuId.LOFI_VIBES]: {
      left: () => a("659813"),
      right: () => a("722603")
    },
    [i.CollectiblesCategorySkuId.GALAXY]: {
      left: () => a("236801"),
      right: () => a("537085")
    },
    [i.CollectiblesCategorySkuId.FEELIN_RETRO]: {
      left: () => a("616442"),
      right: () => a("250440")
    },
    [i.CollectiblesCategorySkuId.PIRATES]: {
      left: () => a("519741"),
      right: () => a("980112")
    }
  },
  y = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, u.default)(), r = s.useRef(null), n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
      children: t.summary
    }) : (0, l.jsx)(l.Fragment, {
      children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, l.jsx)(c.Clickable, {
          innerRef: r,
          className: T.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, l.jsx)(c.Text, {
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
  var t, a, s, r;
  let {
    category: i,
    index: o
  } = e, c = _[i.skuId], u = o % 2 == 1, d = null !== (r = u ? null == c ? void 0 : c.left() : null == c ? void 0 : c.right()) && void 0 !== r ? r : (0, g.getCollectiblesAssetURL)(i.banner, {
    size: x.MAX_CONTENT_WIDTH,
    format: "jpg"
  }), f = u ? null == c ? void 0 : null === (t = c.leftOverflow) || void 0 === t ? void 0 : t.call(c) : null == c ? void 0 : null === (a = c.rightOverflow) || void 0 === a ? void 0 : a.call(c), {
    backgroundColors: C
  } = (0, E.default)(i.styles), m = {
    objectPosition: u ? "left" : "right",
    background: null != C ? "".concat((0, x.getBackgroundGradient)(C), " border-box border-box") : void 0,
    outlineColor: null != C ? C.border.toHslString() : void 0
  };
  return (0, l.jsxs)("div", {
    className: n()(T.condensedBannerContainer),
    children: [(0, l.jsx)("img", {
      src: d,
      style: m,
      className: T.condensedBannerImage,
      alt: ""
    }), null != f && (0, l.jsx)("img", {
      src: f,
      className: n()(T.overflowImage, {
        [T.overflowImageLeft]: u
      }),
      alt: ""
    }), (0, l.jsx)("img", {
      className: n()(T.condensedCategoryLogo, {
        [T.condensedCategoryLogoLeft]: !u
      }),
      src: (0, g.getCollectiblesAssetURL)(i.logo, {
        size: N
      }),
      alt: i.name,
      style: {
        maxWidth: null === (s = I.categoryBannerOverrides[i.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth
      }
    }), (0, l.jsx)(b.default, {
      category: i,
      className: n()(T.limitedTimeBadge, {
        [T.limitedTimeBadgeLeft]: u
      }),
      display: "banner"
    })]
  })
}

function j(e) {
  var t, a;
  let {
    category: s,
    className: r,
    hideLimitedTimeBadge: o = !1,
    index: u = 0
  } = e, {
    backgroundColors: d
  } = (0, E.default)(s.styles), f = !!(null === (t = I.categoryBannerOverrides[s.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: p
  } = (0, v.useCollectiblesCondensedBannersExperiment)({
    location: "Collectibles Shop Banner"
  });
  return p ? (0, l.jsx)(A, {
    category: s,
    index: u
  }) : (0, l.jsxs)(h.default, {
    asset: s.banner,
    className: n()(T.shopBanner, r),
    style: null != d ? {
      background: "".concat((0, x.getBackgroundGradient)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, l.jsxs)("div", {
      className: T.discordLogo,
      children: [(0, l.jsx)(C.default, {
        className: T.discordIcon
      }), (0, l.jsx)(m.default, {
        className: T.discordWordmark
      })]
    }), (0, l.jsx)("img", {
      className: T.categoryLogo,
      src: (0, g.getCollectiblesAssetURL)(s.logo, {
        size: N
      }),
      alt: s.name,
      style: {
        maxWidth: null === (a = I.categoryBannerOverrides[s.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, l.jsx)(c.Text, {
      className: n()(T.summary, {
        [T.blackSummary]: f
      }),
      variant: "text-md/normal",
      children: s.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(y, {
        category: s
      }) : s.summary
    }), !o && (0, l.jsx)(b.default, {
      category: s,
      className: T.limitedTimeBadge,
      display: "banner"
    })]
  })
}