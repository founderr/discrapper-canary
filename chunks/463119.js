"use strict";
n.r(t), n.d(t, {
  CollectiblesShopButton: function() {
    return b
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
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
  I = n("126900"),
  g = n("26290"),
  T = n("153066"),
  A = n("335131"),
  N = n("141594"),
  v = n("302800"),
  R = n("981631"),
  O = n("689938"),
  L = n("858666");
let M = e => {
    let {
      color: t
    } = e;
    return (0, a.jsx)(g.TextBadge, {
      className: L.newBadge,
      color: null != t ? t : S.default.STATUS_DANGER_BACKGROUND,
      text: O.default.Messages.NEW
    })
  },
  x = e => {
    let {
      selected: t,
      locationState: n,
      onMouseEnter: l,
      onMouseLeave: i,
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
      icon: I.default,
      text: O.default.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...d,
      ...u,
      onMouseEnter: l,
      onMouseLeave: i,
      onClick: h,
      children: o
    })
  },
  P = s.memo(function(e) {
    let {
      displayOptions: t,
      assetId: n
    } = e, s = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), l = null != n ? (0, m.default)(n, d.AvatarSizes.SIZE_80, !s) : void 0;
    return (0, a.jsxs)("div", {
      className: L.shopMarketingTooltipContent,
      children: [(0, a.jsx)("div", {
        className: L.avatarContainer,
        children: (0, a.jsx)(d.Avatar, {
          className: L.avatar,
          src: t.imageSrc,
          avatarDecoration: l,
          size: d.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: L.shopMarketingTooltipText,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: L.marketingBadgeTooltipContent,
          children: t.body()
        })]
      })]
    })
  }),
  y = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: l
    } = e, [r, o] = s.useState(0), [c, f] = s.useState(!1), h = (0, E.default)(), _ = l.entrypointDecorationAssets, C = s.useCallback(e => {
      o(e => (e + 1) % l.assetIds.length), f(!0), null == e || e()
    }, [l.assetIds]), m = s.useCallback(e => {
      f(!1), null == e || e()
    }, []);
    return (0, a.jsx)(d.Tooltip, {
      text: (0, a.jsx)(P, {
        displayOptions: l,
        assetId: l.assetIds[r]
      }),
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": l.title(),
      children: e => (0, a.jsxs)(x, {
        className: null != l.entryPointClassName ? (0, T.getClass)(L, l.entryPointClassName) : void 0,
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => C(e.onMouseEnter),
        onMouseLeave: () => m(e.onMouseLeave),
        children: [null != _ && (0, a.jsx)("img", {
          src: (0, u.isThemeDark)(h) ? _.srcDark : _.srcLight,
          className: i()(L.marketingButtonImage, {
            [L.marketingButtonImageHovered]: c
          }),
          alt: "",
          "aria-hidden": !0
        }), (0, a.jsx)(M, {
          color: l.badgeColor
        })]
      })
    })
  },
  D = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: l
    } = e, i = s.useMemo(() => {
      var e;
      let t = null != l.emojiName ? null === (e = p.default.getByName(l.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, a.jsxs)(d.Text, {
        variant: "text-sm/medium",
        className: L.marketingBadgeTooltipContent,
        children: [null != t && (0, a.jsx)(c.default, {
          emojiName: t
        }), l.title()]
      })
    }, [l]);
    return (0, a.jsx)(d.Tooltip, {
      text: i,
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": l.title(),
      children: e => (0, a.jsx)(x, {
        selected: t,
        locationState: n,
        ...e,
        children: (0, a.jsx)(M, {
          color: l.badgeColor
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
        return (0, a.jsx)(y, {
          selected: t,
          locationState: n,
          displayOptions: s
        })
    }
    return (0, a.jsx)(x, {
      selected: t,
      locationState: n
    })
  }