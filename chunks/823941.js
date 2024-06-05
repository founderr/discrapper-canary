"use strict";
s.r(t), s.d(t, {
  LOGO_SIZE: function() {
    return N
  },
  default: function() {
    return A
  }
});
var a = s("735250"),
  l = s("470079"),
  r = s("120356"),
  n = s.n(r),
  i = s("180650"),
  o = s("399606"),
  c = s("481060"),
  u = s("906732"),
  d = s("963249"),
  f = s("594174"),
  C = s("68972"),
  p = s("754347"),
  m = s("74538"),
  g = s("884697"),
  E = s("624377"),
  h = s("141011"),
  b = s("813083"),
  x = s("372654"),
  S = s("994896"),
  v = s("215023"),
  I = s("474936"),
  L = s("689938"),
  T = s("897246");
let N = (0, g.getLogoSize)(96),
  _ = {
    [i.CollectiblesCategorySkuId.DISXCORE]: {
      left: () => s("136648"),
      right: () => s("850298")
    },
    [i.CollectiblesCategorySkuId.FANTASY]: {
      left: () => s("44602"),
      right: () => s("862392")
    },
    [i.CollectiblesCategorySkuId.CYBERPUNK]: {
      left: () => s("862358"),
      right: () => s("604083")
    },
    [i.CollectiblesCategorySkuId.ELEMENTS]: {
      left: () => s("534572"),
      right: () => s("905911"),
      leftOverflow: () => s("149653"),
      rightOverflow: () => s("183749")
    },
    [i.CollectiblesCategorySkuId.ANIME_V2]: {
      left: () => s("607668"),
      right: () => s("381436")
    },
    [i.CollectiblesCategorySkuId.SPRINGTOONS]: {
      left: () => s("138272"),
      right: () => s("392425")
    },
    [i.CollectiblesCategorySkuId.LOFI_VIBES]: {
      left: () => s("659813"),
      right: () => s("722603")
    },
    [i.CollectiblesCategorySkuId.GALAXY]: {
      left: () => s("236801"),
      right: () => s("537085")
    },
    [i.CollectiblesCategorySkuId.FEELIN_RETRO]: {
      left: () => s("616442"),
      right: () => s("250440")
    },
    [i.CollectiblesCategorySkuId.PIRATES]: {
      left: () => s("519741"),
      right: () => s("980112")
    },
    [i.CollectiblesCategorySkuId.ARCADE]: {
      left: () => s("6414"),
      right: () => s("959436")
    }
  },
  y = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: s
    } = (0, u.default)(), r = l.useRef(null), n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
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
              analyticsLocations: s,
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

function j(e) {
  var t, s, l, r;
  let {
    category: i,
    index: o
  } = e, c = _[i.skuId], u = o % 2 == 1, d = null !== (r = u ? null == c ? void 0 : c.left() : null == c ? void 0 : c.right()) && void 0 !== r ? r : (0, g.getCollectiblesAssetURL)(i.banner, {
    size: x.MAX_CONTENT_WIDTH,
    format: "jpg"
  }), f = u ? null == c ? void 0 : null === (t = c.leftOverflow) || void 0 === t ? void 0 : t.call(c) : null == c ? void 0 : null === (s = c.rightOverflow) || void 0 === s ? void 0 : s.call(c), {
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
        maxWidth: null === (l = v.categoryBannerOverrides[i.skuId]) || void 0 === l ? void 0 : l.logoMaxWidth
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

function A(e) {
  var t, s;
  let {
    category: l,
    className: r,
    hideLimitedTimeBadge: o = !1,
    index: u = 0
  } = e, {
    backgroundColors: d
  } = (0, E.default)(l.styles), f = !!(null === (t = v.categoryBannerOverrides[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: m
  } = (0, S.useCollectiblesCondensedBannersExperiment)({
    location: "Collectibles Shop Banner"
  });
  return m ? (0, a.jsx)(j, {
    category: l,
    index: u
  }) : (0, a.jsxs)(h.default, {
    asset: l.banner,
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
      src: (0, g.getCollectiblesAssetURL)(l.logo, {
        size: N
      }),
      alt: l.name,
      style: {
        maxWidth: null === (s = v.categoryBannerOverrides[l.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth
      }
    }), (0, a.jsx)(c.Text, {
      className: n()(T.summary, {
        [T.blackSummary]: f
      }),
      variant: "text-md/normal",
      children: l.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, a.jsx)(y, {
        category: l
      }) : l.summary
    }), !o && (0, a.jsx)(b.default, {
      category: l,
      className: T.limitedTimeBadge,
      display: "banner"
    })]
  })
}