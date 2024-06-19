n.d(t, {
  i: function() {
    return P
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(91192),
  o = n(442837),
  c = n(780384),
  u = n(481060),
  d = n(596454),
  E = n(515753),
  h = n(410030),
  _ = n(607070),
  I = n(100527),
  m = n(906732),
  g = n(821982),
  p = n(377171),
  T = n(633302),
  N = n(153066),
  S = n(335131),
  C = n(141594),
  A = n(302800),
  f = n(981631),
  Z = n(689938),
  v = n(120053);
let L = e => {
    let {
      color: t
    } = e;
    return (0, i.jsx)(u.TextBadge, {
      className: v.newBadge,
      color: null != t ? t : p.Z.STATUS_DANGER_BACKGROUND,
      text: Z.Z.Messages.NEW
    })
  },
  O = e => {
    let {
      selected: t,
      locationState: n,
      onMouseEnter: l,
      onMouseLeave: a,
      children: o,
      ...c
    } = e, d = (0, r.JA)("shop"), h = I.Z.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: _
    } = (0, m.ZP)(h), g = s.useCallback(() => (0, S.mK)({
      openInLayer: !1,
      analyticsSource: h,
      analyticsLocations: _
    }), [h, _]);
    return (0, i.jsx)(E.Qj, {
      selected: t,
      route: f.Z5c.COLLECTIBLES_SHOP,
      icon: u.ShopIcon,
      text: Z.Z.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...d,
      ...c,
      onMouseEnter: l,
      onMouseLeave: a,
      onClick: g,
      children: o
    })
  },
  R = s.memo(function(e) {
    let {
      displayOptions: t,
      assetId: n
    } = e, s = (0, o.e7)([_.Z], () => _.Z.useReducedMotion), l = null != n ? (0, g.Z)(n, u.AvatarSizes.SIZE_80, !s) : void 0;
    return (0, i.jsxs)("div", {
      className: v.shopMarketingTooltipContent,
      children: [(0, i.jsx)("div", {
        className: v.avatarContainer,
        children: (0, i.jsx)(u.Avatar, {
          className: v.avatar,
          src: t.imageSrc,
          avatarDecoration: l,
          size: u.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, i.jsxs)("div", {
        className: v.shopMarketingTooltipText,
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          className: v.marketingBadgeTooltipContent,
          children: t.body()
        })]
      })]
    })
  }),
  x = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: l
    } = e, [r, o] = s.useState(0), [d, E] = s.useState(!1), _ = (0, h.ZP)(), I = l.entrypointDecorationAssets, m = s.useCallback(e => {
      o(e => (e + 1) % l.assetIds.length), E(!0), null == e || e()
    }, [l.assetIds]), g = s.useCallback(e => {
      E(!1), null == e || e()
    }, []);
    return (0, i.jsx)(u.Tooltip, {
      text: (0, i.jsx)(R, {
        displayOptions: l,
        assetId: l.assetIds[r]
      }),
      tooltipClassName: v.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": l.title(),
      children: e => (0, i.jsxs)(O, {
        className: null != l.entryPointClassName ? (0, N.l)(v, l.entryPointClassName) : void 0,
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => m(e.onMouseEnter),
        onMouseLeave: () => g(e.onMouseLeave),
        children: [null != I && (0, i.jsx)("img", {
          src: (0, c.wj)(_) ? I.srcDark : I.srcLight,
          className: a()(v.marketingButtonImage, {
            [v.marketingButtonImageHovered]: d
          }),
          alt: "",
          "aria-hidden": !0
        }), (0, i.jsx)(L, {
          color: l.badgeColor
        })]
      })
    })
  },
  M = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: l
    } = e, a = s.useMemo(() => {
      var e;
      let t = null != l.emojiName ? null === (e = T.ZP.getByName(l.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, i.jsxs)(u.Text, {
        variant: "text-sm/medium",
        className: v.marketingBadgeTooltipContent,
        children: [null != t && (0, i.jsx)(d.Z, {
          emojiName: t
        }), l.title()]
      })
    }, [l]);
    return (0, i.jsx)(u.Tooltip, {
      text: a,
      tooltipClassName: v.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": l.title(),
      children: e => (0, i.jsx)(O, {
        selected: t,
        locationState: n,
        ...e,
        children: (0, i.jsx)(L, {
          color: l.badgeColor
        })
      })
    })
  },
  P = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabNewBadgeDisplayOptions: s
    } = (0, C.Z)();
    if (null != s) switch (s.type) {
      case A.k2.TOOLTIP:
        return (0, i.jsx)(M, {
          selected: t,
          locationState: n,
          displayOptions: s
        });
      case A.k2.COACHTIP:
        return (0, i.jsx)(x, {
          selected: t,
          locationState: n,
          displayOptions: s
        })
    }
    return (0, i.jsx)(O, {
      selected: t,
      locationState: n
    })
  }