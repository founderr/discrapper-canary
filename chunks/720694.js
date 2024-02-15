"use strict";
n.r(t), n.d(t, {
  CollectiblesShopButton: function() {
    return x
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("974667"),
  i = n("446674"),
  r = n("151426"),
  o = n("77078"),
  u = n("430568"),
  d = n("570687"),
  c = n("206230"),
  f = n("812204"),
  E = n("685665"),
  h = n("897263"),
  _ = n("20606"),
  C = n("867805"),
  I = n("743826"),
  S = n("956089"),
  m = n("21526"),
  p = n("176555"),
  T = n("232374"),
  g = n("833514"),
  A = n("819852"),
  N = n("49111"),
  R = n("782340"),
  O = n("100172");
let v = e => {
    let {
      color: t
    } = e;
    return (0, a.jsx)(S.TextBadge, {
      color: null != t ? t : _.default.STATUS_DANGER_BACKGROUND,
      text: R.default.Messages.NEW
    })
  },
  L = e => {
    let {
      selected: t,
      locationState: n,
      onMouseEnter: s,
      onButtonClick: i,
      children: r,
      ...o
    } = e, u = (0, l.useListItem)("shop"), c = f.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: h
    } = (0, E.default)(c);
    return (0, a.jsx)(d.LinkButton, {
      selected: t,
      route: N.Routes.COLLECTIBLES_SHOP,
      icon: I.default,
      text: R.default.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...u,
      ...o,
      onMouseEnter: s,
      onClick: () => {
        (0, m.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: c,
          analyticsLocations: h
        }), null == i || i()
      },
      children: r
    })
  },
  M = s.memo(function(e) {
    let {
      displayOptions: t,
      assetId: n
    } = e, s = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), l = null != n ? (0, h.default)(n, o.AvatarSizes.SIZE_80, !s) : void 0;
    return (0, a.jsxs)("div", {
      className: O.shopMarketingTooltipContent,
      children: [(0, a.jsx)("div", {
        className: O.avatarContainer,
        children: (0, a.jsx)(o.Avatar, {
          className: O.avatar,
          src: t.imageSrc,
          avatarDecoration: l,
          size: o.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: O.shopMarketingTooltipText,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: O.marketingBadgeTooltipContent,
          children: t.body()
        })]
      })]
    })
  }),
  P = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: l,
      displayOptions: i
    } = e, [r, u] = s.useState(0), d = () => {
      u((r + 1) % i.assetIds.length)
    };
    return (0, a.jsx)(o.Tooltip, {
      text: (0, a.jsx)(M, {
        displayOptions: i,
        assetId: i.assetIds[r]
      }),
      tooltipClassName: O.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, a.jsx)(L, {
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onButtonClick: l,
        children: (0, a.jsx)(v, {
          color: i.badgeColor
        })
      })
    })
  },
  D = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: l,
      displayOptions: i
    } = e, r = s.useMemo(() => {
      var e;
      let t = null != i.emojiName ? null === (e = C.default.getByName(i.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, a.jsxs)(o.Text, {
        variant: "text-sm/medium",
        className: O.marketingBadgeTooltipContent,
        children: [null != t && (0, a.jsx)(u.default, {
          emojiName: t
        }), i.title()]
      })
    }, [i]);
    return (0, a.jsx)(o.Tooltip, {
      text: r,
      tooltipClassName: O.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, a.jsx)(L, {
        selected: t,
        locationState: n,
        ...e,
        onButtonClick: l,
        children: (0, a.jsx)(v, {
          color: i.badgeColor
        })
      })
    })
  },
  y = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: s
    } = e;
    return (0, a.jsx)(o.Popout, {
      renderPopout: () => (0, a.jsx)(p.default, {}),
      animation: o.Popout.Animation.TRANSLATE,
      align: "top",
      shouldShow: !0,
      children: () => (0, a.jsx)(L, {
        selected: t,
        locationState: n,
        onButtonClick: s
      })
    })
  },
  x = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabCoachmark: s,
      dismissCollectiblesShopTabCoachmark: l
    } = (0, T.default)(), {
      collectiblesShopTabNewBadgeDisplayOptions: i,
      dismissCollectiblesShopTabNewBadge: o
    } = (0, g.default)();
    if (null != i) switch (i.type) {
      case A.CollectiblesMarketingVariant.TOOLTIP:
        return (0, a.jsx)(D, {
          selected: t,
          locationState: n,
          onButtonClick: o,
          displayOptions: i
        });
      case A.CollectiblesMarketingVariant.COACHTIP:
        return (0, a.jsx)(P, {
          selected: t,
          locationState: n,
          onButtonClick: o,
          displayOptions: i
        })
    }
    return s === r.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK ? (0, a.jsx)(y, {
      selected: t,
      locationState: n,
      onButtonClick: l
    }) : (0, a.jsx)(L, {
      selected: t,
      locationState: n
    })
  }