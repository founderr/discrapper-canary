"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return I
  },
  default: function() {
    return P
  }
});
var s = a("735250"),
  r = a("470079"),
  n = a("120356"),
  l = a.n(n),
  o = a("180650"),
  i = a("399606"),
  c = a("481060"),
  u = a("906732"),
  d = a("963249"),
  f = a("594174"),
  C = a("68972"),
  p = a("754347"),
  m = a("74538"),
  g = a("884697"),
  E = a("624377"),
  b = a("141011"),
  h = a("813083"),
  S = a("372654"),
  T = a("994896"),
  v = a("215023"),
  y = a("474936"),
  x = a("689938"),
  _ = a("897246");
let I = (0, g.getLogoSize)(96),
  L = {
    [o.CollectiblesCategorySkuId.DISXCORE]: {
      left: () => a("136648"),
      right: () => a("850298")
    },
    [o.CollectiblesCategorySkuId.FANTASY]: {
      left: () => a("44602"),
      right: () => a("862392")
    },
    [o.CollectiblesCategorySkuId.CYBERPUNK]: {
      left: () => a("862358"),
      right: () => a("604083")
    },
    [o.CollectiblesCategorySkuId.ELEMENTS]: {
      left: () => a("534572"),
      right: () => a("905911"),
      leftOverflow: () => a("149653"),
      rightOverflow: () => a("183749")
    },
    [o.CollectiblesCategorySkuId.ANIME_V2]: {
      left: () => a("607668"),
      right: () => a("381436")
    },
    [o.CollectiblesCategorySkuId.SPRINGTOONS]: {
      left: () => a("138272"),
      right: () => a("392425")
    },
    [o.CollectiblesCategorySkuId.LOFI_VIBES]: {
      left: () => a("659813"),
      right: () => a("722603")
    },
    [o.CollectiblesCategorySkuId.GALAXY]: {
      left: () => a("236801"),
      right: () => a("537085")
    },
    [o.CollectiblesCategorySkuId.FEELIN_RETRO]: {
      left: () => a("616442"),
      right: () => a("250440")
    },
    [o.CollectiblesCategorySkuId.PIRATES]: {
      left: () => a("519741"),
      right: () => a("980112")
    }
  },
  A = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, u.default)(), n = r.useRef(null), l = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return m.default.canUseCollectibles(l) ? (0, s.jsx)(s.Fragment, {
      children: t.summary
    }) : (0, s.jsx)(s.Fragment, {
      children: x.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, s.jsx)(c.Clickable, {
          innerRef: n,
          className: _.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: n
            })
          },
          tag: "span",
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function N(e) {
  var t, a, r, n;
  let {
    category: o,
    index: i
  } = e, c = L[o.skuId], u = i % 2 == 1, d = null !== (n = u ? null == c ? void 0 : c.left() : null == c ? void 0 : c.right()) && void 0 !== n ? n : (0, g.getCollectiblesAssetURL)(o.banner, {
    size: S.MAX_CONTENT_WIDTH,
    format: "jpg"
  }), f = u ? null == c ? void 0 : null === (t = c.leftOverflow) || void 0 === t ? void 0 : t.call(c) : null == c ? void 0 : null === (a = c.rightOverflow) || void 0 === a ? void 0 : a.call(c), {
    backgroundColors: C
  } = (0, E.default)(o.styles), p = {
    objectPosition: u ? "left" : "right",
    background: null != C ? "".concat((0, S.getBackgroundGradient)(C), " border-box border-box") : void 0,
    outlineColor: null != C ? C.border.toHslString() : void 0
  };
  return (0, s.jsxs)("div", {
    className: l()(_.condensedBannerContainer),
    children: [(0, s.jsx)("img", {
      src: d,
      style: p,
      className: _.condensedBannerImage,
      alt: ""
    }), null != f && (0, s.jsx)("img", {
      src: f,
      className: l()(_.overflowImage, {
        [_.overflowImageLeft]: u
      }),
      alt: ""
    }), (0, s.jsx)("img", {
      className: l()(_.condensedCategoryLogo, {
        [_.condensedCategoryLogoLeft]: !u
      }),
      src: (0, g.getCollectiblesAssetURL)(o.logo, {
        size: I
      }),
      alt: o.name,
      style: {
        maxWidth: null === (r = v.categoryBannerOverrides[o.skuId]) || void 0 === r ? void 0 : r.logoMaxWidth
      }
    }), (0, s.jsx)(h.default, {
      category: o,
      className: l()(_.limitedTimeBadge, {
        [_.limitedTimeBadgeLeft]: u
      }),
      display: "banner"
    })]
  })
}

function P(e) {
  var t, a;
  let {
    category: r,
    className: n,
    hideLimitedTimeBadge: i = !1,
    index: u = 0
  } = e, {
    backgroundColors: d
  } = (0, E.default)(r.styles), f = !!(null === (t = v.categoryBannerOverrides[r.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: m
  } = (0, T.useCollectiblesCondensedBannersExperiment)({
    location: "Collectibles Shop Banner"
  });
  return m ? (0, s.jsx)(N, {
    category: r,
    index: u
  }) : (0, s.jsxs)(b.default, {
    asset: r.banner,
    className: l()(_.shopBanner, n),
    style: null != d ? {
      background: "".concat((0, S.getBackgroundGradient)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, s.jsxs)("div", {
      className: _.discordLogo,
      children: [(0, s.jsx)(C.default, {
        className: _.discordIcon
      }), (0, s.jsx)(p.default, {
        className: _.discordWordmark
      })]
    }), (0, s.jsx)("img", {
      className: _.categoryLogo,
      src: (0, g.getCollectiblesAssetURL)(r.logo, {
        size: I
      }),
      alt: r.name,
      style: {
        maxWidth: null === (a = v.categoryBannerOverrides[r.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, s.jsx)(c.Text, {
      className: l()(_.summary, {
        [_.blackSummary]: f
      }),
      variant: "text-md/normal",
      children: r.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, s.jsx)(A, {
        category: r
      }) : r.summary
    }), !i && (0, s.jsx)(h.default, {
      category: r,
      className: _.limitedTimeBadge,
      display: "banner"
    })]
  })
}