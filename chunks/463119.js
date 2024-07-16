n.d(t, {
  i: function() {
return M;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(91192),
  o = n(442837),
  c = n(780384),
  d = n(481060),
  u = n(596454),
  _ = n(515753),
  E = n(410030),
  h = n(607070),
  I = n(100527),
  m = n(906732),
  g = n(821982),
  p = n(377171),
  T = n(633302),
  S = n(153066),
  f = n(335131),
  C = n(141594),
  N = n(302800),
  A = n(981631),
  v = n(689938),
  Z = n(383980);
let L = e => {
let {
  color: t
} = e;
return (0, i.jsx)(d.TextBadge, {
  className: Z.newBadge,
  color: null != t ? t : p.Z.STATUS_DANGER_BACKGROUND,
  text: v.Z.Messages.NEW
});
  },
  O = e => {
let {
  selected: t,
  locationState: n,
  icon: a,
  onMouseEnter: r,
  onMouseLeave: o,
  children: c,
  ...u
} = e, E = (0, l.JA)('shop'), h = I.Z.HOME_PAGE_SHOP_TAB, {
  analyticsLocations: g
} = (0, m.ZP)(h), p = s.useCallback(() => (0, f.mK)({
  openInLayer: !1,
  analyticsSource: h,
  analyticsLocations: g
}), [
  h,
  g
]);
return (0, i.jsx)(_.Qj, {
  selected: t,
  route: A.Z5c.COLLECTIBLES_SHOP,
  icon: null != a ? a : d.ShopIcon,
  text: v.Z.Messages.COLLECTIBLES_SHOP,
  locationState: n,
  ...E,
  ...u,
  onMouseEnter: r,
  onMouseLeave: o,
  onClick: p,
  children: c
});
  },
  R = e => {
let {
  selected: t,
  locationState: n
} = e;
return (0, i.jsx)(O, {
  selected: t,
  locationState: n,
  children: (0, i.jsx)(L, {})
});
  },
  x = s.memo(function(e) {
let {
  displayOptions: t,
  assetId: n,
  reducedMotion: s = !1
} = e, a = null != n ? (0, g.Z)(n, d.AvatarSizes.SIZE_80, !s) : void 0, r = t.title(), l = t.type === N.k2.COACHTIP_HEADLINE_ONLY;
return (0, i.jsxs)('div', {
  className: Z.shopMarketingTooltipContent,
  children: [
    (0, i.jsx)('div', {
      className: Z.avatarContainer,
      children: (0, i.jsx)(d.Avatar, {
        className: Z.avatar,
        src: t.imageSrc,
        avatarDecoration: a,
        size: d.AvatarSizes.SIZE_80,
        'aria-hidden': !0
      })
    }),
    (0, i.jsxs)('div', {
      className: Z.shopMarketingTooltipText,
      children: [
        (0, i.jsx)(d.Heading, {
          variant: l ? 'heading-sm/medium' : 'heading-sm/bold',
          children: 'string' == typeof r ? r : r.format()
        }),
        null != t.body && (0, i.jsx)(d.Text, {
          variant: 'text-xs/normal',
          className: Z.marketingBadgeTooltipContent,
          children: t.body()
        })
      ]
    })
  ]
});
  }),
  b = e => {
let {
  selected: t,
  locationState: n,
  displayOptions: a
} = e, l = (0, o.e7)([h.Z], () => h.Z.useReducedMotion), [u, _] = s.useState(0), [I, m] = s.useState(!1), g = (0, E.ZP)(), p = a.entrypointDecorationAssets, T = a.entryPointBackgroundAssets, f = s.useCallback(e => {
  _(e => (e + 1) % a.assetIds.length), m(!0), null == e || e();
}, [a.assetIds]), C = s.useCallback(e => {
  m(!1), null == e || e();
}, []), N = a.title();
return (0, i.jsx)(d.Tooltip, {
  text: (0, i.jsx)(x, {
    displayOptions: a,
    assetId: a.assetIds[u],
    reducedMotion: l
  }),
  tooltipClassName: Z.marketingBadgeTooltip,
  position: 'right',
  delay: 100,
  allowOverflow: !0,
  hideOnClick: !1,
  'aria-label': 'string' == typeof N ? N : v.Z.Messages.COLLECTIBLES_SEE_WHATS_NEW,
  children: e => (0, i.jsxs)(O, {
    className: null != a.entryPointClassName ? (0, S.l)(Z, a.entryPointClassName) : void 0,
    selected: t,
    locationState: n,
    icon: a.entryPointIcon,
    ...e,
    onMouseEnter: () => f(e.onMouseEnter),
    onMouseLeave: () => C(e.onMouseLeave),
    children: [
      null != T && (0, i.jsx)('img', {
        src: (0, c.wj)(g) ? T.srcDark : T.srcLight,
        className: Z.marketingButtonBackgroundImage,
        alt: '',
        'aria-hidden': !0
      }),
      null != p && !l && (0, i.jsx)('img', {
        src: (0, c.wj)(g) ? p.srcDark : p.srcLight,
        className: r()(Z.marketingButtonImage, {
          [Z.marketingButtonImageHovered]: I
        }),
        alt: '',
        'aria-hidden': !0
      }),
      (0, i.jsx)(L, {
        color: a.badgeColor
      })
    ]
  })
});
  },
  P = e => {
let {
  selected: t,
  locationState: n,
  displayOptions: a
} = e, r = s.useMemo(() => {
  var e;
  let t = null != a.emojiName ? null === (e = T.ZP.getByName(a.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
  return (0, i.jsxs)(d.Text, {
    variant: 'text-sm/medium',
    className: Z.marketingBadgeTooltipContent,
    children: [
      null != t && (0, i.jsx)(u.Z, {
        emojiName: t
      }),
      a.title()
    ]
  });
}, [a]);
return (0, i.jsx)(d.Tooltip, {
  text: r,
  tooltipClassName: Z.marketingBadgeTooltip,
  position: 'right',
  delay: 100,
  hideOnClick: !1,
  'aria-label': a.title(),
  children: e => (0, i.jsx)(O, {
    selected: t,
    locationState: n,
    ...e,
    children: (0, i.jsx)(L, {
      color: a.badgeColor
    })
  })
});
  },
  M = e => {
let {
  selected: t,
  locationState: n
} = e, {
  collectiblesShopTabNewBadgeDisplayOptions: s
} = (0, C.Z)();
if (null != s)
  switch (s.type) {
    case N.k2.TOOLTIP:
      return (0, i.jsx)(P, {
        selected: t,
        locationState: n,
        displayOptions: s
      });
    case N.k2.COACHTIP_HEADLINE_ONLY:
    case N.k2.COACHTIP:
      return (0, i.jsx)(b, {
        selected: t,
        locationState: n,
        displayOptions: s
      });
    case N.k2.BADGE:
      return (0, i.jsx)(R, {
        selected: t,
        locationState: n
      });
  }
return (0, i.jsx)(O, {
  selected: t,
  locationState: n
});
  };