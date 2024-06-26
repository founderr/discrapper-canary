"use strict";
n.d(t, {
  Z: function() {
    return B
  },
  n: function() {
    return L
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(180650),
  c = n(399606),
  l = n(481060),
  d = n(906732),
  u = n(963249),
  p = n(594174),
  f = n(754347),
  g = n(74538),
  _ = n(884697),
  C = n(624377),
  b = n(141011),
  m = n(813083),
  h = n(67938),
  x = n(372654),
  I = n(994896),
  E = n(215023),
  v = n(474936),
  S = n(689938),
  T = n(12900);
let L = (0, _.IC)(96),
  N = {
    [s.T.DISXCORE]: {
      left: () => n(136648),
      right: () => n(850298),
      leftLogo: () => n(407848),
      rightLogo: () => n(457734)
    },
    [s.T.FANTASY]: {
      left: () => n(44602),
      right: () => n(862392),
      leftLogo: () => n(150218),
      rightLogo: () => n(625591)
    },
    [s.T.CYBERPUNK]: {
      left: () => n(862358),
      right: () => n(604083),
      leftLogo: () => n(519293),
      rightLogo: () => n(769307)
    },
    [s.T.ELEMENTS]: {
      left: () => n(534572),
      right: () => n(905911),
      leftOverflow: () => n(149653),
      rightOverflow: () => n(183749),
      leftLogo: () => n(201651),
      rightLogo: () => n(47227)
    },
    [s.T.ANIME_V2]: {
      left: () => n(607668),
      right: () => n(381436),
      leftLogo: () => n(384970),
      rightLogo: () => n(906935)
    },
    [s.T.SPRINGTOONS]: {
      left: () => n(138272),
      right: () => n(392425),
      leftLogo: () => n(547470),
      rightLogo: () => n(204641)
    },
    [s.T.LOFI_VIBES]: {
      left: () => n(659813),
      right: () => n(722603),
      leftLogo: () => n(678747),
      rightLogo: () => n(178466)
    },
    [s.T.GALAXY]: {
      left: () => n(236801),
      right: () => n(537085),
      leftLogo: () => n(818198),
      rightLogo: () => n(959177)
    },
    [s.T.FEELIN_RETRO]: {
      left: () => n(616442),
      right: () => n(250440),
      leftLogo: () => n(662232),
      rightLogo: () => n(226107)
    },
    [s.T.PIRATES]: {
      left: () => n(519741),
      right: () => n(980112),
      leftLogo: () => n(379545),
      rightLogo: () => n(31847)
    },
    [s.T.ARCADE]: {
      left: () => n(6414),
      right: () => n(959436),
      leftLogo: () => n(23695),
      rightLogo: () => n(2235)
    },
    [s.T.TIDE]: {
      left: () => n(960088),
      right: () => n(402313),
      leftOverflow: () => n(757631),
      rightOverflow: () => n(17142),
      leftLogo: () => n(237457),
      rightLogo: () => n(958609)
    }
  },
  O = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: n
    } = (0, d.ZP)(), a = i.useRef(null), o = (0, c.e7)([p.default], () => p.default.getCurrentUser());
    return g.ZP.canUseCollectibles(o) ? (0, r.jsx)(r.Fragment, {
      children: t.summary
    }) : (0, r.jsx)(r.Fragment, {
      children: S.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, r.jsx)(l.Clickable, {
          innerRef: a,
          className: T.getPremiumHook,
          onClick: () => {
            (0, u.Z)({
              subscriptionTier: v.Si.TIER_2,
              analyticsLocations: n,
              returnRef: a
            })
          },
          tag: "span",
          children: (0, r.jsx)(l.Text, {
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
  var t, n, i;
  let {
    config: a,
    category: c,
    index: l,
    hideLimitedTimeBadge: d = !1
  } = e, u = l % 2 == 1, p = null !== (i = u ? a.left() : a.right()) && void 0 !== i ? i : (0, _.uV)(c.banner, {
    size: x.yV,
    format: "jpg"
  }), f = u ? null === (t = a.leftOverflow) || void 0 === t ? void 0 : t.call(a) : null === (n = a.rightOverflow) || void 0 === n ? void 0 : n.call(a), g = u ? a.rightLogo() : a.leftLogo(), {
    backgroundColors: b
  } = (0, C.Z)(c.styles), h = {
    objectPosition: u ? "left" : "right",
    background: null != b ? "".concat((0, x.nH)(b), " border-box border-box") : void 0,
    outlineColor: null != b ? b.border.toHslString() : void 0
  };
  return (0, r.jsxs)("div", {
    className: o()(T.condensedBannerContainer),
    children: [(0, r.jsx)("img", {
      src: p,
      style: h,
      className: T.condensedBannerImage,
      alt: ""
    }), null != f && (0, r.jsx)("img", {
      src: f,
      className: o()(T.overflowImage, {
        [T.overflowImageLeft]: u,
        [T.tideOverflowImage]: c.skuId === s.T.TIDE
      }),
      alt: ""
    }), (0, r.jsx)("img", {
      className: o()(T.condensedCategoryLogo, {
        [T.condensedCategoryLogoLeft]: !u
      }),
      src: g,
      alt: c.name
    }), !d && (0, r.jsx)(m.Z, {
      category: c,
      className: o()(T.limitedTimeBadge, {
        [T.limitedTimeBadgeLeft]: u
      }),
      display: "banner"
    })]
  })
}

function B(e) {
  var t, n;
  let {
    category: i,
    className: a,
    hideLimitedTimeBadge: c = !1,
    index: d = 0
  } = e, {
    backgroundColors: u
  } = (0, C.Z)(i.styles), p = !!(null === (t = E.Ve[i.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: g
  } = (0, I.O)({
    location: "Collectibles Shop Banner"
  });
  if (g) {
    let e = N[i.skuId];
    if (null != e) return (0, r.jsx)(j, {
      config: e,
      category: i,
      index: d,
      hideLimitedTimeBadge: c
    })
  }
  return i.skuId === s.T.TIDE ? (0, r.jsx)(h.G, {
    category: i
  }) : (0, r.jsxs)(b.Z, {
    asset: i.banner,
    className: o()(T.shopBanner, a),
    style: null != u ? {
      background: "".concat((0, x.nH)(u), " border-box border-box"),
      outlineColor: u.border.toHslString()
    } : void 0,
    children: [(0, r.jsxs)("div", {
      className: T.discordLogo,
      children: [(0, r.jsx)(l.ClydeIcon, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: T.discordIcon
      }), (0, r.jsx)(f.Z, {
        className: T.discordWordmark
      })]
    }), (0, r.jsx)("img", {
      className: T.categoryLogo,
      src: (0, _.uV)(i.logo, {
        size: L
      }),
      alt: i.name,
      style: {
        maxWidth: null === (n = E.Ve[i.skuId]) || void 0 === n ? void 0 : n.logoMaxWidth
      }
    }), (0, r.jsx)(l.Text, {
      className: o()(T.summary, {
        [T.blackSummary]: p
      }),
      variant: "text-md/normal",
      children: i.skuId === s.T.DISXCORE ? (0, r.jsx)(O, {
        category: i
      }) : i.summary
    }), !c && (0, r.jsx)(m.Z, {
      category: i,
      className: T.limitedTimeBadge,
      display: "banner"
    })]
  })
}