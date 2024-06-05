"use strict";
s.r(t), s.d(t, {
  LOGO_SIZE: function() {
    return b
  },
  default: function() {
    return P
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  r = s.n(n),
  i = s("180650"),
  o = s("399606"),
  u = s("481060"),
  c = s("906732"),
  d = s("963249"),
  f = s("594174"),
  C = s("68972"),
  E = s("754347"),
  p = s("74538"),
  m = s("884697"),
  g = s("624377"),
  S = s("141011"),
  h = s("813083"),
  I = s("372654"),
  T = s("994896"),
  x = s("215023"),
  _ = s("474936"),
  N = s("689938"),
  L = s("897246");
let b = (0, m.getLogoSize)(96),
  R = {
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
  v = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: s
    } = (0, c.default)(), n = l.useRef(null), r = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(r) ? (0, a.jsx)(a.Fragment, {
      children: t.summary
    }) : (0, a.jsx)(a.Fragment, {
      children: N.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, a.jsx)(u.Clickable, {
          innerRef: n,
          className: L.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: s,
              returnRef: n
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

function A(e) {
  var t, s, l, n;
  let {
    category: i,
    index: o
  } = e, u = R[i.skuId], c = o % 2 == 1, d = null !== (n = c ? null == u ? void 0 : u.left() : null == u ? void 0 : u.right()) && void 0 !== n ? n : (0, m.getCollectiblesAssetURL)(i.banner, {
    size: I.MAX_CONTENT_WIDTH,
    format: "jpg"
  }), f = c ? null == u ? void 0 : null === (t = u.leftOverflow) || void 0 === t ? void 0 : t.call(u) : null == u ? void 0 : null === (s = u.rightOverflow) || void 0 === s ? void 0 : s.call(u), {
    backgroundColors: C
  } = (0, g.default)(i.styles), E = {
    objectPosition: c ? "left" : "right",
    background: null != C ? "".concat((0, I.getBackgroundGradient)(C), " border-box border-box") : void 0,
    outlineColor: null != C ? C.border.toHslString() : void 0
  };
  return (0, a.jsxs)("div", {
    className: r()(L.condensedBannerContainer),
    children: [(0, a.jsx)("img", {
      src: d,
      style: E,
      className: L.condensedBannerImage,
      alt: ""
    }), null != f && (0, a.jsx)("img", {
      src: f,
      className: r()(L.overflowImage, {
        [L.overflowImageLeft]: c
      }),
      alt: ""
    }), (0, a.jsx)("img", {
      className: r()(L.condensedCategoryLogo, {
        [L.condensedCategoryLogoLeft]: !c
      }),
      src: (0, m.getCollectiblesAssetURL)(i.logo, {
        size: b
      }),
      alt: i.name,
      style: {
        maxWidth: null === (l = x.categoryBannerOverrides[i.skuId]) || void 0 === l ? void 0 : l.logoMaxWidth
      }
    }), (0, a.jsx)(h.default, {
      category: i,
      className: r()(L.limitedTimeBadge, {
        [L.limitedTimeBadgeLeft]: c
      }),
      display: "banner"
    })]
  })
}

function P(e) {
  var t, s;
  let {
    category: l,
    className: n,
    hideLimitedTimeBadge: o = !1,
    index: c = 0
  } = e, {
    backgroundColors: d
  } = (0, g.default)(l.styles), f = !!(null === (t = x.categoryBannerOverrides[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: p
  } = (0, T.useCollectiblesCondensedBannersExperiment)({
    location: "Collectibles Shop Banner"
  });
  return p ? (0, a.jsx)(A, {
    category: l,
    index: c
  }) : (0, a.jsxs)(S.default, {
    asset: l.banner,
    className: r()(L.shopBanner, n),
    style: null != d ? {
      background: "".concat((0, I.getBackgroundGradient)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, a.jsxs)("div", {
      className: L.discordLogo,
      children: [(0, a.jsx)(C.default, {
        className: L.discordIcon
      }), (0, a.jsx)(E.default, {
        className: L.discordWordmark
      })]
    }), (0, a.jsx)("img", {
      className: L.categoryLogo,
      src: (0, m.getCollectiblesAssetURL)(l.logo, {
        size: b
      }),
      alt: l.name,
      style: {
        maxWidth: null === (s = x.categoryBannerOverrides[l.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth
      }
    }), (0, a.jsx)(u.Text, {
      className: r()(L.summary, {
        [L.blackSummary]: f
      }),
      variant: "text-md/normal",
      children: l.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, a.jsx)(v, {
        category: l
      }) : l.summary
    }), !o && (0, a.jsx)(h.default, {
      category: l,
      className: L.limitedTimeBadge,
      display: "banner"
    })]
  })
}