"use strict";
a.r(t), a.d(t, {
  CollectiblesShopButton: function() {
    return b
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("924826"),
  o = a("442837"),
  u = a("780384"),
  d = a("481060"),
  c = a("596454"),
  f = a("515753"),
  E = a("410030"),
  h = a("607070"),
  _ = a("100527"),
  C = a("906732"),
  m = a("821982"),
  S = a("377171"),
  p = a("633302"),
  I = a("126900"),
  T = a("26290"),
  g = a("153066"),
  A = a("335131"),
  N = a("141594"),
  v = a("302800"),
  R = a("981631"),
  O = a("689938"),
  L = a("592761");
let M = e => {
    let {
      color: t
    } = e;
    return (0, n.jsx)(T.TextBadge, {
      className: L.newBadge,
      color: null != t ? t : S.default.STATUS_DANGER_BACKGROUND,
      text: O.default.Messages.NEW
    })
  },
  P = e => {
    let {
      selected: t,
      locationState: a,
      onMouseEnter: s,
      onMouseLeave: l,
      onButtonClick: i,
      children: o,
      ...u
    } = e, d = (0, r.useListItem)("shop"), c = _.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: E
    } = (0, C.default)(c);
    return (0, n.jsx)(f.LinkButton, {
      selected: t,
      route: R.Routes.COLLECTIBLES_SHOP,
      icon: I.default,
      text: O.default.Messages.COLLECTIBLES_SHOP,
      locationState: a,
      ...d,
      ...u,
      onMouseEnter: s,
      onMouseLeave: l,
      onClick: () => {
        (0, A.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: c,
          analyticsLocations: E
        }), null == i || i()
      },
      children: o
    })
  },
  x = s.memo(function(e) {
    let {
      displayOptions: t,
      assetId: a
    } = e, s = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), l = null != a ? (0, m.default)(a, d.AvatarSizes.SIZE_80, !s) : void 0;
    return (0, n.jsxs)("div", {
      className: L.shopMarketingTooltipContent,
      children: [(0, n.jsx)("div", {
        className: L.avatarContainer,
        children: (0, n.jsx)(d.Avatar, {
          className: L.avatar,
          src: t.imageSrc,
          avatarDecoration: l,
          size: d.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, n.jsxs)("div", {
        className: L.shopMarketingTooltipText,
        children: [(0, n.jsx)(d.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, n.jsx)(d.Text, {
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
      locationState: a,
      onButtonClick: l,
      displayOptions: r
    } = e, [o, c] = s.useState(0), [f, h] = s.useState(!1), _ = (0, E.default)(), C = r.entrypointDecorationAssets, m = s.useCallback(e => {
      c(e => (e + 1) % r.assetIds.length), h(!0), null == e || e()
    }, [r.assetIds]), S = s.useCallback(e => {
      h(!1), null == e || e()
    }, []);
    return (0, n.jsx)(d.Tooltip, {
      text: (0, n.jsx)(x, {
        displayOptions: r,
        assetId: r.assetIds[o]
      }),
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": r.title(),
      children: e => (0, n.jsxs)(P, {
        className: null != r.entryPointClassName ? (0, g.getClass)(L, r.entryPointClassName) : void 0,
        selected: t,
        locationState: a,
        ...e,
        onMouseEnter: () => m(e.onMouseEnter),
        onMouseLeave: () => S(e.onMouseLeave),
        onButtonClick: l,
        children: [null != C && (0, n.jsx)("img", {
          src: (0, u.isThemeDark)(_) ? C.srcDark : C.srcLight,
          className: i()(L.marketingButtonImage, {
            [L.marketingButtonImageHovered]: f
          }),
          alt: "",
          "aria-hidden": !0
        }), (0, n.jsx)(M, {
          color: r.badgeColor
        })]
      })
    })
  },
  D = e => {
    let {
      selected: t,
      locationState: a,
      onButtonClick: l,
      displayOptions: i
    } = e, r = s.useMemo(() => {
      var e;
      let t = null != i.emojiName ? null === (e = p.default.getByName(i.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, n.jsxs)(d.Text, {
        variant: "text-sm/medium",
        className: L.marketingBadgeTooltipContent,
        children: [null != t && (0, n.jsx)(c.default, {
          emojiName: t
        }), i.title()]
      })
    }, [i]);
    return (0, n.jsx)(d.Tooltip, {
      text: r,
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, n.jsx)(P, {
        selected: t,
        locationState: a,
        ...e,
        onButtonClick: l,
        children: (0, n.jsx)(M, {
          color: i.badgeColor
        })
      })
    })
  },
  b = e => {
    let {
      selected: t,
      locationState: a
    } = e, {
      collectiblesShopTabNewBadgeDisplayOptions: s,
      dismissCollectiblesShopTabNewBadge: l
    } = (0, N.default)();
    if (null != s) switch (s.type) {
      case v.CollectiblesMarketingVariant.TOOLTIP:
        return (0, n.jsx)(D, {
          selected: t,
          locationState: a,
          onButtonClick: l,
          displayOptions: s
        });
      case v.CollectiblesMarketingVariant.COACHTIP:
        return (0, n.jsx)(y, {
          selected: t,
          locationState: a,
          onButtonClick: l,
          displayOptions: s
        })
    }
    return (0, n.jsx)(P, {
      selected: t,
      locationState: a
    })
  }