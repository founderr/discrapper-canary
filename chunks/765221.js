"use strict";
r.r(t), r.d(t, {
  default: function() {
    return O
  }
}), r("222007"), r("794252");
var a = r("37983"),
  n = r("884691"),
  s = r("414456"),
  i = r.n(s),
  u = r("506838"),
  o = r("171210"),
  l = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  E = r("426497"),
  m = r("491232"),
  p = r("743826"),
  C = r("216422"),
  _ = r("468759"),
  g = r("600785"),
  A = r("956089"),
  S = r("719923"),
  h = r("643070"),
  v = r("688318"),
  I = r("782340"),
  N = r("654353");
let T = () => 80,
  x = e => {
    let {
      children: t,
      className: r,
      onSelect: n,
      isSelected: s = !1,
      ...u
    } = e;
    return (0, a.jsx)(c.Clickable, {
      className: i(N.decorationGridItem, s ? N.selected : void 0, r),
      ...u,
      onClick: n,
      children: t
    })
  },
  R = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: s,
      section: i,
      isSelected: u = !1,
      ...c
    } = e, p = (0, l.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), _ = (0, l.default)([E.default], () => E.default.isItemViewed(r)), T = S.default.canUseCollectibles(t), R = i === h.Section.PREMIUM_PURCHASE && !T, [O, M] = n.useState(u);
    n.useEffect(() => {
      u && M(!0)
    }, [u]);
    let b = n.useRef(null),
      D = (0, d.default)(null != s ? s : b),
      {
        avatarDecorationSrc: P
      } = (0, v.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !D
      });
    return (0, a.jsxs)(x, {
      className: R ? N.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : b,
      isSelected: u,
      ...c,
      children: [(0, a.jsx)("img", {
        className: N.presetDecorationImg,
        src: P,
        alt: r.label
      }), (() => {
        let e = i === h.Section.PURCHASE || i === h.Section.PREMIUM_PURCHASE && T;
        if (e) return null;
        let t = !_ && !u && !O;
        return t ? (0, a.jsx)(A.PremiumBadge, {
          className: N.newBadge,
          text: (0, a.jsxs)("div", {
            className: N.newBadgeText,
            children: [(0, a.jsx)(g.default, {
              width: 12,
              height: 12
            }), I.default.Messages.NEW]
          })
        }) : (0, a.jsx)(A.IconBadge, {
          icon: p ? () => (0, a.jsx)(C.default, {
            width: 14,
            height: 14
          }) : () => (0, a.jsx)(g.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: N.iconBadge
        })
      })()]
    })
  };
var O = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: n,
    onSelect: s,
    onOpenShop: i
  } = e, o = (0, h.default)();
  return (0, a.jsx)(c.MasonryList, {
    fade: !0,
    className: N.list,
    columns: 3,
    sections: o.map(e => {
      let {
        items: t
      } = e;
      return t.length
    }),
    sectionGutter: 16,
    itemGutter: 12,
    paddingHorizontal: 12,
    paddingVertical: 0,
    removeEdgeItemGutters: !0,
    renderItem: (e, l, d, f) => {
      let {
        section: E,
        items: m
      } = o[e];
      return (0, u.match)(m[l]).with(h.NONE_ITEM, () => (0, a.jsxs)(x, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => s(null),
        children: [(0, a.jsx)(_.default, {
          className: N.notAllowedIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: I.default.Messages.NONE
        })]
      }, f)).with(h.SHOP_ITEM, () => (0, a.jsxs)(x, {
        style: d,
        onSelect: i,
        children: [(0, a.jsx)(p.default, {
          className: N.shopIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: I.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let i = (null == r ? void 0 : r.id) === e.id;
        return (0, a.jsx)(R, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: E,
          innerRef: i ? n : void 0,
          isSelected: i,
          onSelect: () => s(e)
        }, f)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = o[e];
      return (0, a.jsx)("div", {
        className: N.headings,
        children: (0, a.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, a.jsx)(c.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => o[e].height,
    getItemKey: (e, t) => o[e].items[t].id,
    getItemHeight: T
  })
}