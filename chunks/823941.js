"use strict";
t.d(s, {
  Z: function() {
    return A
  },
  n: function() {
    return L
  }
});
var n = t(735250),
  a = t(470079),
  r = t(120356),
  l = t.n(r),
  i = t(180650),
  o = t(399606),
  c = t(481060),
  u = t(906732),
  d = t(963249),
  C = t(594174),
  E = t(754347),
  f = t(74538),
  m = t(884697),
  p = t(624377),
  g = t(141011),
  h = t(813083),
  I = t(372654),
  _ = t(994896),
  x = t(215023),
  T = t(474936),
  N = t(689938),
  S = t(12900);
let L = (0, m.IC)(96),
  b = {
    [i.T.DISXCORE]: {
      left: () => t(136648),
      right: () => t(850298)
    },
    [i.T.FANTASY]: {
      left: () => t(44602),
      right: () => t(862392)
    },
    [i.T.CYBERPUNK]: {
      left: () => t(862358),
      right: () => t(604083)
    },
    [i.T.ELEMENTS]: {
      left: () => t(534572),
      right: () => t(905911),
      leftOverflow: () => t(149653),
      rightOverflow: () => t(183749)
    },
    [i.T.ANIME_V2]: {
      left: () => t(607668),
      right: () => t(381436)
    },
    [i.T.SPRINGTOONS]: {
      left: () => t(138272),
      right: () => t(392425)
    },
    [i.T.LOFI_VIBES]: {
      left: () => t(659813),
      right: () => t(722603)
    },
    [i.T.GALAXY]: {
      left: () => t(236801),
      right: () => t(537085)
    },
    [i.T.FEELIN_RETRO]: {
      left: () => t(616442),
      right: () => t(250440)
    },
    [i.T.PIRATES]: {
      left: () => t(519741),
      right: () => t(980112)
    },
    [i.T.ARCADE]: {
      left: () => t(6414),
      right: () => t(959436)
    }
  },
  v = e => {
    let {
      category: s
    } = e, {
      analyticsLocations: t
    } = (0, u.ZP)(), r = a.useRef(null), l = (0, o.e7)([C.default], () => C.default.getCurrentUser());
    return f.ZP.canUseCollectibles(l) ? (0, n.jsx)(n.Fragment, {
      children: s.summary
    }) : (0, n.jsx)(n.Fragment, {
      children: N.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, n.jsx)(c.Clickable, {
          innerRef: r,
          className: S.getPremiumHook,
          onClick: () => {
            (0, d.Z)({
              subscriptionTier: T.Si.TIER_2,
              analyticsLocations: t,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, n.jsx)(c.Text, {
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
  var s, t, a, r;
  let {
    category: i,
    index: o
  } = e, c = b[i.skuId], u = o % 2 == 1, d = null !== (r = u ? null == c ? void 0 : c.left() : null == c ? void 0 : c.right()) && void 0 !== r ? r : (0, m.uV)(i.banner, {
    size: I.yV,
    format: "jpg"
  }), C = u ? null == c ? void 0 : null === (s = c.leftOverflow) || void 0 === s ? void 0 : s.call(c) : null == c ? void 0 : null === (t = c.rightOverflow) || void 0 === t ? void 0 : t.call(c), {
    backgroundColors: E
  } = (0, p.Z)(i.styles), f = {
    objectPosition: u ? "left" : "right",
    background: null != E ? "".concat((0, I.nH)(E), " border-box border-box") : void 0,
    outlineColor: null != E ? E.border.toHslString() : void 0
  };
  return (0, n.jsxs)("div", {
    className: l()(S.condensedBannerContainer),
    children: [(0, n.jsx)("img", {
      src: d,
      style: f,
      className: S.condensedBannerImage,
      alt: ""
    }), null != C && (0, n.jsx)("img", {
      src: C,
      className: l()(S.overflowImage, {
        [S.overflowImageLeft]: u
      }),
      alt: ""
    }), (0, n.jsx)("img", {
      className: l()(S.condensedCategoryLogo, {
        [S.condensedCategoryLogoLeft]: !u
      }),
      src: (0, m.uV)(i.logo, {
        size: L
      }),
      alt: i.name,
      style: {
        maxWidth: null === (a = x.Ve[i.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, n.jsx)(h.Z, {
      category: i,
      className: l()(S.limitedTimeBadge, {
        [S.limitedTimeBadgeLeft]: u
      }),
      display: "banner"
    })]
  })
}

function A(e) {
  var s, t;
  let {
    category: a,
    className: r,
    hideLimitedTimeBadge: o = !1,
    index: u = 0
  } = e, {
    backgroundColors: d
  } = (0, p.Z)(a.styles), C = !!(null === (s = x.Ve[a.skuId]) || void 0 === s ? void 0 : s.showDarkBannerText), {
    condensedBannersEnabled: f
  } = (0, _.O)({
    location: "Collectibles Shop Banner"
  });
  return f ? (0, n.jsx)(O, {
    category: a,
    index: u
  }) : (0, n.jsxs)(g.Z, {
    asset: a.banner,
    className: l()(S.shopBanner, r),
    style: null != d ? {
      background: "".concat((0, I.nH)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, n.jsxs)("div", {
      className: S.discordLogo,
      children: [(0, n.jsx)(c.ClydeIcon, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: S.discordIcon
      }), (0, n.jsx)(E.Z, {
        className: S.discordWordmark
      })]
    }), (0, n.jsx)("img", {
      className: S.categoryLogo,
      src: (0, m.uV)(a.logo, {
        size: L
      }),
      alt: a.name,
      style: {
        maxWidth: null === (t = x.Ve[a.skuId]) || void 0 === t ? void 0 : t.logoMaxWidth
      }
    }), (0, n.jsx)(c.Text, {
      className: l()(S.summary, {
        [S.blackSummary]: C
      }),
      variant: "text-md/normal",
      children: a.skuId === i.T.DISXCORE ? (0, n.jsx)(v, {
        category: a
      }) : a.summary
    }), !o && (0, n.jsx)(h.Z, {
      category: a,
      className: S.limitedTimeBadge,
      display: "banner"
    })]
  })
}