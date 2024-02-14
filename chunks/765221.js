"use strict";
r.r(t), r.d(t, {
  default: function() {
    return P
  }
}), r("222007"), r("794252");
var n = r("37983"),
  a = r("884691"),
  u = r("414456"),
  i = r.n(u),
  s = r("506838"),
  l = r("171210"),
  o = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  E = r("426497"),
  m = r("491232"),
  p = r("743826"),
  S = r("216422"),
  h = r("468759"),
  _ = r("600785"),
  C = r("956089"),
  I = r("719923"),
  g = r("643070"),
  T = r("688318"),
  N = r("782340"),
  v = r("585872");
let A = () => 80,
  R = e => {
    let {
      children: t,
      className: r,
      onSelect: a,
      isSelected: u = !1,
      ...s
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: i(v.decorationGridItem, u ? v.selected : void 0, r),
      ...s,
      onClick: a,
      children: t
    })
  },
  L = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: u,
      section: i,
      isSelected: s = !1,
      ...c
    } = e, p = (0, o.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), h = (0, o.default)([E.default], () => E.default.isItemViewed(r)), A = I.default.canUseCollectibles(t), L = i === g.Section.PREMIUM_PURCHASE && !A, [P, y] = a.useState(s);
    a.useEffect(() => {
      s && y(!0)
    }, [s]);
    let O = a.useRef(null),
      x = (0, d.default)(null != u ? u : O),
      {
        avatarDecorationSrc: b
      } = (0, T.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !x
      });
    return (0, n.jsxs)(R, {
      className: L ? v.decorationGridItemChurned : void 0,
      innerRef: null != u ? u : O,
      isSelected: s,
      ...c,
      children: [(0, n.jsx)("img", {
        className: v.presetDecorationImg,
        src: b,
        alt: r.label
      }), (() => {
        let e = i === g.Section.PURCHASE || i === g.Section.PREMIUM_PURCHASE && A;
        if (e) return null;
        let t = !h && !s && !P;
        return t ? (0, n.jsx)(C.PremiumBadge, {
          className: v.newBadge,
          text: (0, n.jsxs)("div", {
            className: v.newBadgeText,
            children: [(0, n.jsx)(_.default, {
              width: 12,
              height: 12
            }), N.default.Messages.NEW]
          })
        }) : (0, n.jsx)(C.IconBadge, {
          icon: p ? () => (0, n.jsx)(S.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(_.default, {
            width: 12,
            height: 12
          }),
          color: l.default.BACKGROUND_ACCENT,
          className: v.iconBadge
        })
      })()]
    })
  };
var P = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: a,
    onSelect: u,
    onOpenShop: i
  } = e, l = (0, g.default)();
  return (0, n.jsx)(c.MasonryList, {
    fade: !0,
    className: v.list,
    columns: 3,
    sections: l.map(e => {
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
    renderItem: (e, o, d, f) => {
      let {
        section: E,
        items: m
      } = l[e];
      return (0, s.match)(m[o]).with(g.NONE_ITEM, () => (0, n.jsxs)(R, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => u(null),
        children: [(0, n.jsx)(h.default, {
          className: v.notAllowedIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: N.default.Messages.NONE
        })]
      }, f)).with(g.SHOP_ITEM, () => (0, n.jsxs)(R, {
        style: d,
        onSelect: i,
        children: [(0, n.jsx)(p.default, {
          className: v.shopIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: N.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let i = (null == r ? void 0 : r.id) === e.id;
        return (0, n.jsx)(L, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: E,
          innerRef: i ? a : void 0,
          isSelected: i,
          onSelect: () => u(e)
        }, f)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = l[e];
      return (0, n.jsx)("div", {
        className: v.headings,
        children: (0, n.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, n.jsx)(c.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => l[e].height,
    getItemKey: (e, t) => l[e].items[t].id,
    getItemHeight: A
  })
}