s.d(t, {
  Z: function() {
return Z;
  },
  n: function() {
return T;
  }
});
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(180650),
  l = s(399606),
  c = s(481060),
  d = s(906732),
  u = s(963249),
  p = s(594174),
  g = s(754347),
  f = s(74538),
  C = s(884697),
  m = s(624377),
  _ = s(141011),
  h = s(813083),
  b = s(67938),
  x = s(372654),
  I = s(994896),
  E = s(215023),
  L = s(474936),
  S = s(689938),
  v = s(995184);
let T = (0, C.IC)(96),
  N = {
[i.T.DISXCORE]: {
  left: () => s(136648),
  right: () => s(850298),
  leftLogo: () => s(407848),
  rightLogo: () => s(457734)
},
[i.T.FANTASY]: {
  left: () => s(44602),
  right: () => s(862392),
  leftLogo: () => s(150218),
  rightLogo: () => s(625591)
},
[i.T.CYBERPUNK]: {
  left: () => s(862358),
  right: () => s(604083),
  leftLogo: () => s(519293),
  rightLogo: () => s(769307)
},
[i.T.ELEMENTS]: {
  left: () => s(534572),
  right: () => s(905911),
  leftOverflow: () => s(149653),
  rightOverflow: () => s(183749),
  leftLogo: () => s(201651),
  rightLogo: () => s(47227)
},
[i.T.ANIME_V2]: {
  left: () => s(607668),
  right: () => s(381436),
  leftLogo: () => s(384970),
  rightLogo: () => s(906935)
},
[i.T.SPRINGTOONS]: {
  left: () => s(138272),
  right: () => s(392425),
  leftLogo: () => s(547470),
  rightLogo: () => s(204641)
},
[i.T.LOFI_VIBES]: {
  left: () => s(659813),
  right: () => s(722603),
  leftLogo: () => s(678747),
  rightLogo: () => s(178466)
},
[i.T.GALAXY]: {
  left: () => s(236801),
  right: () => s(537085),
  leftLogo: () => s(818198),
  rightLogo: () => s(959177)
},
[i.T.FEELIN_RETRO]: {
  left: () => s(616442),
  right: () => s(250440),
  leftLogo: () => s(662232),
  rightLogo: () => s(226107)
},
[i.T.PIRATES]: {
  left: () => s(519741),
  right: () => s(980112),
  leftLogo: () => s(379545),
  rightLogo: () => s(31847)
},
[i.T.ARCADE]: {
  left: () => s(6414),
  right: () => s(959436),
  leftLogo: () => s(23695),
  rightLogo: () => s(2235)
},
[i.T.TIDE]: {
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
} = (0, d.ZP)(), a = r.useRef(null), o = (0, l.e7)([p.default], () => p.default.getCurrentUser());
return f.ZP.canUseCollectibles(o) ? (0, n.jsx)(n.Fragment, {
  children: t.summary
}) : (0, n.jsx)(n.Fragment, {
  children: S.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
    getPremium: e => (0, n.jsx)(c.Clickable, {
      innerRef: a,
      className: v.getPremiumHook,
      onClick: () => {
        (0, u.Z)({
          subscriptionTier: L.Si.TIER_2,
          analyticsLocations: s,
          returnRef: a
        });
      },
      tag: 'span',
      children: (0, n.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'always-white',
        tag: 'span',
        children: e
      })
    })
  })
});
  };

function j(e) {
  var t, s, r;
  let {
config: a,
category: l,
index: c,
hideLimitedTimeBadge: d = !1
  } = e, u = c % 2 == 1, p = null !== (r = u ? a.left() : a.right()) && void 0 !== r ? r : (0, C.uV)(l.banner, {
size: x.yV,
format: 'jpg'
  }), g = u ? null === (t = a.leftOverflow) || void 0 === t ? void 0 : t.call(a) : null === (s = a.rightOverflow) || void 0 === s ? void 0 : s.call(a), f = u ? a.rightLogo() : a.leftLogo(), {
backgroundColors: _
  } = (0, m.Z)(l.styles), b = {
objectPosition: u ? 'left' : 'right',
background: null != _ ? ''.concat((0, x.nH)(_), ' border-box border-box') : void 0,
outlineColor: null != _ ? _.border.toHslString() : void 0
  };
  return (0, n.jsxs)('div', {
className: o()(v.condensedBannerContainer),
children: [
  (0, n.jsx)('img', {
    src: p,
    style: b,
    className: v.condensedBannerImage,
    alt: ''
  }),
  null != g && (0, n.jsx)('img', {
    src: g,
    className: o()(v.overflowImage, {
      [v.overflowImageLeft]: u,
      [v.tideOverflowImage]: l.skuId === i.T.TIDE
    }),
    alt: ''
  }),
  (0, n.jsx)('img', {
    className: o()(v.condensedCategoryLogo, {
      [v.condensedCategoryLogoLeft]: !u
    }),
    src: f,
    alt: l.name
  }),
  !d && (0, n.jsx)(h.Z, {
    category: l,
    className: o()(v.limitedTimeBadge, {
      [v.limitedTimeBadgeLeft]: u
    }),
    display: 'banner'
  })
]
  });
}

function Z(e) {
  var t, s, r, a;
  let {
category: l,
className: d,
hideLimitedTimeBadge: u = !1,
index: p = 0
  } = e, {
backgroundColors: f
  } = (0, m.Z)(l.styles), L = !!(null === (t = E.Ve[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
condensedBannersEnabled: S
  } = (0, I.O)({
location: 'Collectibles Shop Banner'
  });
  if (S) {
let e = N[l.skuId];
if (null != e)
  return (0, n.jsx)(j, {
    config: e,
    category: l,
    index: p,
    hideLimitedTimeBadge: u
  });
  }
  return l.skuId === i.T.TIDE ? (0, n.jsx)(b.G, {
category: l
  }) : (0, n.jsxs)(_.Z, {
asset: l.banner,
className: o()(v.shopBanner, d),
style: null != f ? {
  background: ''.concat((0, x.nH)(f), ' border-box border-box'),
  outlineColor: f.border.toHslString()
} : void 0,
children: [
  (null === (s = E.Ve[l.skuId]) || void 0 === s ? void 0 : s.hideAttributionLogos) === !0 ? (0, n.jsx)(c.Spacer, {
    size: 28
  }) : (0, n.jsxs)('div', {
    className: v.discordLogo,
    children: [
      (0, n.jsx)(c.ClydeIcon, {
        size: 'custom',
        width: 28,
        height: 28,
        color: 'currentColor',
        className: v.discordIcon
      }),
      (0, n.jsx)(g.Z, {
        className: v.discordWordmark
      })
    ]
  }),
  (null === (r = E.Ve[l.skuId]) || void 0 === r ? void 0 : r.hideLogoOnBanner) === !0 ? (0, n.jsx)(c.Spacer, {
    size: 96
  }) : (0, n.jsx)('img', {
    className: v.categoryLogo,
    src: (0, C.uV)(l.logo, {
      size: T
    }),
    alt: l.name,
    style: {
      maxWidth: null === (a = E.Ve[l.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
    }
  }),
  (0, n.jsx)(c.Text, {
    className: o()(v.summary, {
      [v.blackSummary]: L
    }),
    variant: 'text-md/normal',
    children: l.skuId === i.T.DISXCORE ? (0, n.jsx)(O, {
      category: l
    }) : l.summary
  }),
  !u && (0, n.jsx)(h.Z, {
    category: l,
    className: v.limitedTimeBadge,
    display: 'banner'
  })
]
  });
}