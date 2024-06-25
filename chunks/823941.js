"use strict";
s.d(t, {
  Z: function() {
    return A
  },
  n: function() {
    return b
  }
});
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  l = s(180650),
  o = s(399606),
  c = s(481060),
  u = s(906732),
  d = s(963249),
  C = s(594174),
  f = s(754347),
  p = s(74538),
  g = s(884697),
  E = s(624377),
  m = s(141011),
  h = s(813083),
  x = s(67938),
  I = s(372654),
  _ = s(994896),
  T = s(215023),
  L = s(474936),
  N = s(689938),
  S = s(12900);
let b = (0, g.IC)(96),
  v = {
    [l.T.DISXCORE]: {
      left: () => s(136648),
      right: () => s(850298),
      leftLogo: () => s(407848),
      rightLogo: () => s(457734)
    },
    [l.T.FANTASY]: {
      left: () => s(44602),
      right: () => s(862392),
      leftLogo: () => s(150218),
      rightLogo: () => s(625591)
    },
    [l.T.CYBERPUNK]: {
      left: () => s(862358),
      right: () => s(604083),
      leftLogo: () => s(519293),
      rightLogo: () => s(769307)
    },
    [l.T.ELEMENTS]: {
      left: () => s(534572),
      right: () => s(905911),
      leftOverflow: () => s(149653),
      rightOverflow: () => s(183749),
      leftLogo: () => s(201651),
      rightLogo: () => s(47227)
    },
    [l.T.ANIME_V2]: {
      left: () => s(607668),
      right: () => s(381436),
      leftLogo: () => s(384970),
      rightLogo: () => s(906935)
    },
    [l.T.SPRINGTOONS]: {
      left: () => s(138272),
      right: () => s(392425),
      leftLogo: () => s(547470),
      rightLogo: () => s(204641)
    },
    [l.T.LOFI_VIBES]: {
      left: () => s(659813),
      right: () => s(722603),
      leftLogo: () => s(678747),
      rightLogo: () => s(178466)
    },
    [l.T.GALAXY]: {
      left: () => s(236801),
      right: () => s(537085),
      leftLogo: () => s(818198),
      rightLogo: () => s(959177)
    },
    [l.T.FEELIN_RETRO]: {
      left: () => s(616442),
      right: () => s(250440),
      leftLogo: () => s(662232),
      rightLogo: () => s(226107)
    },
    [l.T.PIRATES]: {
      left: () => s(519741),
      right: () => s(980112),
      leftLogo: () => s(379545),
      rightLogo: () => s(31847)
    },
    [l.T.ARCADE]: {
      left: () => s(6414),
      right: () => s(959436),
      leftLogo: () => s(23695),
      rightLogo: () => s(2235)
    },
    [l.T.TIDE]: {
      left: () => s(960088),
      right: () => s(402313),
      leftOverflow: () => s(757631),
      rightOverflow: () => s(17142),
      leftLogo: () => s(237457),
      rightLogo: () => s(958609)
    }
  },
  O = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: s
    } = (0, u.ZP)(), a = r.useRef(null), i = (0, o.e7)([C.default], () => C.default.getCurrentUser());
    return p.ZP.canUseCollectibles(i) ? (0, n.jsx)(n.Fragment, {
      children: t.summary
    }) : (0, n.jsx)(n.Fragment, {
      children: N.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, n.jsx)(c.Clickable, {
          innerRef: a,
          className: S.getPremiumHook,
          onClick: () => {
            (0, d.Z)({
              subscriptionTier: L.Si.TIER_2,
              analyticsLocations: s,
              returnRef: a
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

function Z(e) {
  var t, s, r;
  let {
    config: a,
    category: o,
    index: c
  } = e, u = c % 2 == 1, d = null !== (r = u ? a.left() : a.right()) && void 0 !== r ? r : (0, g.uV)(o.banner, {
    size: I.yV,
    format: "jpg"
  }), C = u ? null === (t = a.leftOverflow) || void 0 === t ? void 0 : t.call(a) : null === (s = a.rightOverflow) || void 0 === s ? void 0 : s.call(a), f = u ? a.rightLogo() : a.leftLogo(), {
    backgroundColors: p
  } = (0, E.Z)(o.styles), m = {
    objectPosition: u ? "left" : "right",
    background: null != p ? "".concat((0, I.nH)(p), " border-box border-box") : void 0,
    outlineColor: null != p ? p.border.toHslString() : void 0
  };
  return (0, n.jsxs)("div", {
    className: i()(S.condensedBannerContainer),
    children: [(0, n.jsx)("img", {
      src: d,
      style: m,
      className: S.condensedBannerImage,
      alt: ""
    }), null != C && (0, n.jsx)("img", {
      src: C,
      className: i()(S.overflowImage, {
        [S.overflowImageLeft]: u,
        [S.tideOverflowImage]: o.skuId === l.T.TIDE
      }),
      alt: ""
    }), (0, n.jsx)("img", {
      className: i()(S.condensedCategoryLogo, {
        [S.condensedCategoryLogoLeft]: !u
      }),
      src: f,
      alt: o.name
    }), (0, n.jsx)(h.Z, {
      category: o,
      className: i()(S.limitedTimeBadge, {
        [S.limitedTimeBadgeLeft]: u
      }),
      display: "banner"
    })]
  })
}

function A(e) {
  var t, s;
  let {
    category: r,
    className: a,
    hideLimitedTimeBadge: o = !1,
    index: u = 0
  } = e, {
    backgroundColors: d
  } = (0, E.Z)(r.styles), C = !!(null === (t = T.Ve[r.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: p
  } = (0, _.O)({
    location: "Collectibles Shop Banner"
  });
  if (p) {
    let e = v[r.skuId];
    if (null != e) return (0, n.jsx)(Z, {
      config: e,
      category: r,
      index: u
    })
  }
  return r.skuId === l.T.TIDE ? (0, n.jsx)(x.G, {
    category: r
  }) : (0, n.jsxs)(m.Z, {
    asset: r.banner,
    className: i()(S.shopBanner, a),
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
      }), (0, n.jsx)(f.Z, {
        className: S.discordWordmark
      })]
    }), (0, n.jsx)("img", {
      className: S.categoryLogo,
      src: (0, g.uV)(r.logo, {
        size: b
      }),
      alt: r.name,
      style: {
        maxWidth: null === (s = T.Ve[r.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth
      }
    }), (0, n.jsx)(c.Text, {
      className: i()(S.summary, {
        [S.blackSummary]: C
      }),
      variant: "text-md/normal",
      children: r.skuId === l.T.DISXCORE ? (0, n.jsx)(O, {
        category: r
      }) : r.summary
    }), !o && (0, n.jsx)(h.Z, {
      category: r,
      className: S.limitedTimeBadge,
      display: "banner"
    })]
  })
}