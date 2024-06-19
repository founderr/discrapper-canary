"use strict";
t.d(s, {
  Z: function() {
    return A
  },
  n: function() {
    return S
  }
});
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(180650),
  o = t(399606),
  c = t(481060),
  u = t(906732),
  d = t(963249),
  C = t(594174),
  f = t(754347),
  E = t(74538),
  p = t(884697),
  g = t(624377),
  m = t(141011),
  x = t(813083),
  h = t(372654),
  I = t(994896),
  _ = t(215023),
  T = t(474936),
  N = t(689938),
  L = t(12900);
let S = (0, p.IC)(96),
  b = {
    [l.T.DISXCORE]: {
      left: () => t(136648),
      right: () => t(850298),
      leftLogo: () => t(407848),
      rightLogo: () => t(457734)
    },
    [l.T.FANTASY]: {
      left: () => t(44602),
      right: () => t(862392),
      leftLogo: () => t(150218),
      rightLogo: () => t(625591)
    },
    [l.T.CYBERPUNK]: {
      left: () => t(862358),
      right: () => t(604083),
      leftLogo: () => t(519293),
      rightLogo: () => t(769307)
    },
    [l.T.ELEMENTS]: {
      left: () => t(534572),
      right: () => t(905911),
      leftOverflow: () => t(149653),
      rightOverflow: () => t(183749),
      leftLogo: () => t(201651),
      rightLogo: () => t(47227)
    },
    [l.T.ANIME_V2]: {
      left: () => t(607668),
      right: () => t(381436),
      leftLogo: () => t(384970),
      rightLogo: () => t(906935)
    },
    [l.T.SPRINGTOONS]: {
      left: () => t(138272),
      right: () => t(392425),
      leftLogo: () => t(547470),
      rightLogo: () => t(204641)
    },
    [l.T.LOFI_VIBES]: {
      left: () => t(659813),
      right: () => t(722603),
      leftLogo: () => t(678747),
      rightLogo: () => t(178466)
    },
    [l.T.GALAXY]: {
      left: () => t(236801),
      right: () => t(537085),
      leftLogo: () => t(818198),
      rightLogo: () => t(959177)
    },
    [l.T.FEELIN_RETRO]: {
      left: () => t(616442),
      right: () => t(250440),
      leftLogo: () => t(662232),
      rightLogo: () => t(226107)
    },
    [l.T.PIRATES]: {
      left: () => t(519741),
      right: () => t(980112),
      leftLogo: () => t(379545),
      rightLogo: () => t(31847)
    },
    [l.T.ARCADE]: {
      left: () => t(6414),
      right: () => t(959436),
      leftLogo: () => t(23695),
      rightLogo: () => t(2235)
    }
  },
  v = e => {
    let {
      category: s
    } = e, {
      analyticsLocations: t
    } = (0, u.ZP)(), r = a.useRef(null), i = (0, o.e7)([C.default], () => C.default.getCurrentUser());
    return E.ZP.canUseCollectibles(i) ? (0, n.jsx)(n.Fragment, {
      children: s.summary
    }) : (0, n.jsx)(n.Fragment, {
      children: N.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, n.jsx)(c.Clickable, {
          innerRef: r,
          className: L.getPremiumHook,
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
  var s, t, a;
  let {
    category: r,
    index: l
  } = e, {
    backgroundColors: o
  } = (0, g.Z)(r.styles), c = b[r.skuId];
  if (null == c) return null;
  let u = l % 2 == 1,
    d = null !== (a = u ? c.left() : c.right()) && void 0 !== a ? a : (0, p.uV)(r.banner, {
      size: h.yV,
      format: "jpg"
    }),
    C = u ? null === (s = c.leftOverflow) || void 0 === s ? void 0 : s.call(c) : null === (t = c.rightOverflow) || void 0 === t ? void 0 : t.call(c),
    f = u ? c.rightLogo() : c.leftLogo(),
    E = {
      objectPosition: u ? "left" : "right",
      background: null != o ? "".concat((0, h.nH)(o), " border-box border-box") : void 0,
      outlineColor: null != o ? o.border.toHslString() : void 0
    };
  return (0, n.jsxs)("div", {
    className: i()(L.condensedBannerContainer),
    children: [(0, n.jsx)("img", {
      src: d,
      style: E,
      className: L.condensedBannerImage,
      alt: ""
    }), null != C && (0, n.jsx)("img", {
      src: C,
      className: i()(L.overflowImage, {
        [L.overflowImageLeft]: u
      }),
      alt: ""
    }), (0, n.jsx)("img", {
      className: i()(L.condensedCategoryLogo, {
        [L.condensedCategoryLogoLeft]: !u
      }),
      src: f,
      alt: r.name
    }), (0, n.jsx)(x.Z, {
      category: r,
      className: i()(L.limitedTimeBadge, {
        [L.limitedTimeBadgeLeft]: u
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
  } = (0, g.Z)(a.styles), C = !!(null === (s = _.Ve[a.skuId]) || void 0 === s ? void 0 : s.showDarkBannerText), {
    condensedBannersEnabled: E
  } = (0, I.O)({
    location: "Collectibles Shop Banner"
  });
  return E ? (0, n.jsx)(O, {
    category: a,
    index: u
  }) : (0, n.jsxs)(m.Z, {
    asset: a.banner,
    className: i()(L.shopBanner, r),
    style: null != d ? {
      background: "".concat((0, h.nH)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, n.jsxs)("div", {
      className: L.discordLogo,
      children: [(0, n.jsx)(c.ClydeIcon, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: L.discordIcon
      }), (0, n.jsx)(f.Z, {
        className: L.discordWordmark
      })]
    }), (0, n.jsx)("img", {
      className: L.categoryLogo,
      src: (0, p.uV)(a.logo, {
        size: S
      }),
      alt: a.name,
      style: {
        maxWidth: null === (t = _.Ve[a.skuId]) || void 0 === t ? void 0 : t.logoMaxWidth
      }
    }), (0, n.jsx)(c.Text, {
      className: i()(L.summary, {
        [L.blackSummary]: C
      }),
      variant: "text-md/normal",
      children: a.skuId === l.T.DISXCORE ? (0, n.jsx)(v, {
        category: a
      }) : a.summary
    }), !o && (0, n.jsx)(x.Z, {
      category: a,
      className: L.limitedTimeBadge,
      display: "banner"
    })]
  })
}