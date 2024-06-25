n.d(t, {
  i: function() {
    return M
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(821982),
  g = n(377171),
  p = n(633302),
  N = n(153066),
  S = n(335131),
  C = n(141594),
  A = n(302800),
  f = n(981631),
  Z = n(689938),
  L = n(120053);
let O = e => {
    let {
      color: t
    } = e;
    return (0, s.jsx)(u.TextBadge, {
      className: L.newBadge,
      color: null != t ? t : g.Z.STATUS_DANGER_BACKGROUND,
      text: Z.Z.Messages.NEW
    })
  },
  v = e => {
    let {
      selected: t,
      locationState: n,
      onMouseEnter: l,
      onMouseLeave: a,
      children: o,
      ...c
    } = e, d = (0, r.JA)("shop"), h = I.Z.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: _
    } = (0, m.ZP)(h), T = i.useCallback(() => (0, S.mK)({
      openInLayer: !1,
      analyticsSource: h,
      analyticsLocations: _
    }), [h, _]);
    return (0, s.jsx)(E.Qj, {
      selected: t,
      route: f.Z5c.COLLECTIBLES_SHOP,
      icon: u.ShopIcon,
      text: Z.Z.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...d,
      ...c,
      onMouseEnter: l,
      onMouseLeave: a,
      onClick: T,
      children: o
    })
  },
  R = i.memo(function(e) {
    let {
      displayOptions: t,
      assetId: n
    } = e, i = (0, o.e7)([_.Z], () => _.Z.useReducedMotion), l = null != n ? (0, T.Z)(n, u.AvatarSizes.SIZE_80, !i) : void 0;
    return (0, s.jsxs)("div", {
      className: L.shopMarketingTooltipContent,
      children: [(0, s.jsx)("div", {
        className: L.avatarContainer,
        children: (0, s.jsx)(u.Avatar, {
          className: L.avatar,
          src: t.imageSrc,
          avatarDecoration: l,
          size: u.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, s.jsxs)("div", {
        className: L.shopMarketingTooltipText,
        children: [(0, s.jsx)(u.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          className: L.marketingBadgeTooltipContent,
          children: t.body()
        })]
      })]
    })
  }),
  P = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: l
    } = e, [r, o] = i.useState(0), [d, E] = i.useState(!1), _ = (0, h.ZP)(), I = l.entrypointDecorationAssets, m = i.useCallback(e => {
      o(e => (e + 1) % l.assetIds.length), E(!0), null == e || e()
    }, [l.assetIds]), T = i.useCallback(e => {
      E(!1), null == e || e()
    }, []);
    return (0, s.jsx)(u.Tooltip, {
      text: (0, s.jsx)(R, {
        displayOptions: l,
        assetId: l.assetIds[r]
      }),
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": l.title(),
      children: e => (0, s.jsxs)(v, {
        className: null != l.entryPointClassName ? (0, N.l)(L, l.entryPointClassName) : void 0,
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => m(e.onMouseEnter),
        onMouseLeave: () => T(e.onMouseLeave),
        children: [null != I && (0, s.jsx)("img", {
          src: (0, c.wj)(_) ? I.srcDark : I.srcLight,
          className: a()(L.marketingButtonImage, {
            [L.marketingButtonImageHovered]: d
          }),
          alt: "",
          "aria-hidden": !0
        }), (0, s.jsx)(O, {
          color: l.badgeColor
        })]
      })
    })
  },
  x = e => {
    let {
      selected: t,
      locationState: n,
      displayOptions: l
    } = e, a = i.useMemo(() => {
      var e;
      let t = null != l.emojiName ? null === (e = p.ZP.getByName(l.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, s.jsxs)(u.Text, {
        variant: "text-sm/medium",
        className: L.marketingBadgeTooltipContent,
        children: [null != t && (0, s.jsx)(d.Z, {
          emojiName: t
        }), l.title()]
      })
    }, [l]);
    return (0, s.jsx)(u.Tooltip, {
      text: a,
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": l.title(),
      children: e => (0, s.jsx)(v, {
        selected: t,
        locationState: n,
        ...e,
        children: (0, s.jsx)(O, {
          color: l.badgeColor
        })
      })
    })
  },
  M = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabNewBadgeDisplayOptions: i
    } = (0, C.Z)();
    if (null != i) switch (i.type) {
      case A.k2.TOOLTIP:
        return (0, s.jsx)(x, {
          selected: t,
          locationState: n,
          displayOptions: i
        });
      case A.k2.COACHTIP:
        return (0, s.jsx)(P, {
          selected: t,
          locationState: n,
          displayOptions: i
        })
    }
    return (0, s.jsx)(v, {
      selected: t,
      locationState: n
    })
  }