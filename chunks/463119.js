"use strict";
n.r(t), n.d(t, {
  CollectiblesShopButton: function() {
    return b
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("924826"),
  o = n("442837"),
  u = n("780384"),
  d = n("481060"),
  c = n("596454"),
  f = n("515753"),
  E = n("410030"),
  h = n("607070"),
  _ = n("100527"),
  C = n("906732"),
  m = n("821982"),
  S = n("377171"),
  p = n("633302"),
  g = n("126900"),
  I = n("26290"),
  T = n("153066"),
  A = n("335131"),
  N = n("141594"),
  v = n("302800"),
  R = n("981631"),
  L = n("689938"),
  O = n("858666");
let M = e => {
    let {
      color: t
    } = e;
    return (0, a.jsx)(I.TextBadge, {
      className: O.newBadge,
      color: null != t ? t : S.default.STATUS_DANGER_BACKGROUND,
      text: L.default.Messages.NEW
    })
  },
  y = e => {
    let {
      selected: t,
      locationState: n,
      onMouseEnter: i,
      onMouseLeave: l,
      children: o,
      ...u
    } = e, d = (0, r.useListItem)("shop"), c = _.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: E
    } = (0, C.default)(c), h = s.useCallback(() => (0, A.openCollectiblesShop)({
      openInLayer: !1,
      analyticsSource: c,
      analyticsLocations: E
    }), [c, E]);
    return (0, a.jsx)(f.LinkButton, {
      selected: t,
      route: R.Routes.COLLECTIBLES_SHOP,
      icon: g.default,
      text: L.default.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...d,
      ...u,
      onMouseEnter: i,
      onMouseLeave: l,
      onClick: h,
      children: o
    })
  },
  P = s.memo(function(e) {
    let {
      displayOptions: t,
      assetId: n
    } = e, s = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), i = null != n ? (0, m.default)(n, d.AvatarSizes.SIZE_80, !s) : void 0;
    return (0, a.jsxs)("div", {
      className: O.shopMarketingTooltipContent,
      children: [(0, a.jsx)("div", {
        className: O.avatarContainer,
        children: (0, a.jsx)(d.Avatar, {
          className: O.avatar,
          src: t.imageSrc,
          avatarDecoration: i,
          size: d.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: O.shopMarketingTooltipText,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: O.marketingBadgeTooltipContent,
          children: t.body()
        })]
      })]
    })
  }),
  x = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: i
    } = e, [r, o] = s.useState(0), [c, f] = s.useState(!1), h = (0, E.default)(), _ = i.entrypointDecorationAssets, C = s.useCallback(e => {
      o(e => (e + 1) % i.assetIds.length), f(!0), null == e || e()
    }, [i.assetIds]), m = s.useCallback(e => {
      f(!1), null == e || e()
    }, []);
    return (0, a.jsx)(d.Tooltip, {
      text: (0, a.jsx)(P, {
        displayOptions: i,
        assetId: i.assetIds[r]
      }),
      tooltipClassName: O.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, a.jsxs)(y, {
        className: null != i.entryPointClassName ? (0, T.getClass)(O, i.entryPointClassName) : void 0,
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => C(e.onMouseEnter),
        onMouseLeave: () => m(e.onMouseLeave),
        children: [null != _ && (0, a.jsx)("img", {
          src: (0, u.isThemeDark)(h) ? _.srcDark : _.srcLight,
          className: l()(O.marketingButtonImage, {
            [O.marketingButtonImageHovered]: c
          }),
          alt: "",
          "aria-hidden": !0
        }), (0, a.jsx)(M, {
          color: i.badgeColor
        })]
      })
    })
  },
  D = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: i
    } = e, l = s.useMemo(() => {
      var e;
      let t = null != i.emojiName ? null === (e = p.default.getByName(i.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, a.jsxs)(d.Text, {
        variant: "text-sm/medium",
        className: O.marketingBadgeTooltipContent,
        children: [null != t && (0, a.jsx)(c.default, {
          emojiName: t
        }), i.title()]
      })
    }, [i]);
    return (0, a.jsx)(d.Tooltip, {
      text: l,
      tooltipClassName: O.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, a.jsx)(y, {
        selected: t,
        locationState: n,
        ...e,
        children: (0, a.jsx)(M, {
          color: i.badgeColor
        })
      })
    })
  },
  b = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabNewBadgeDisplayOptions: s
    } = (0, N.default)();
    if (null != s) switch (s.type) {
      case v.CollectiblesMarketingVariant.TOOLTIP:
        return (0, a.jsx)(D, {
          selected: t,
          locationState: n,
          displayOptions: s
        });
      case v.CollectiblesMarketingVariant.COACHTIP:
        return (0, a.jsx)(x, {
          selected: t,
          locationState: n,
          displayOptions: s
        })
    }
    return (0, a.jsx)(y, {
      selected: t,
      locationState: n
    })
  }