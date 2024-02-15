"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("222007"), r("794252");
var a = r("37983"),
  n = r("884691"),
  u = r("414456"),
  i = r.n(u),
  s = r("506838"),
  l = r("171210"),
  o = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  m = r("426497"),
  p = r("491232"),
  E = r("743826"),
  S = r("216422"),
  h = r("468759"),
  _ = r("600785"),
  C = r("956089"),
  I = r("719923"),
  g = r("643070"),
  T = r("688318"),
  v = r("782340"),
  A = r("585872");
let P = () => 80,
  N = e => {
    let {
      children: t,
      className: r,
      onSelect: n,
      isSelected: u = !1,
      ...s
    } = e;
    return (0, a.jsx)(c.Clickable, {
      className: i(A.decorationGridItem, u ? A.selected : void 0, r),
      ...s,
      onClick: n,
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
    } = e, E = (0, o.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, p.isPremiumCollectiblesProduct)(e)
    }), h = (0, o.default)([m.default], () => m.default.isItemViewed(r)), P = I.default.canUseCollectibles(t), L = i === g.Section.PREMIUM_PURCHASE && !P, [R, y] = n.useState(s);
    n.useEffect(() => {
      s && y(!0)
    }, [s]);
    let x = n.useRef(null),
      b = (0, d.default)(null != u ? u : x),
      {
        avatarDecorationSrc: M
      } = (0, T.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !b
      });
    return (0, a.jsxs)(N, {
      className: L ? A.decorationGridItemChurned : void 0,
      innerRef: null != u ? u : x,
      isSelected: s,
      ...c,
      children: [(0, a.jsx)("img", {
        className: A.presetDecorationImg,
        src: M,
        alt: r.label
      }), (() => {
        let e = i === g.Section.PURCHASE || i === g.Section.PREMIUM_PURCHASE && P;
        if (e) return null;
        let t = !h && !s && !R;
        return t ? (0, a.jsx)(C.PremiumBadge, {
          className: A.newBadge,
          text: (0, a.jsxs)("div", {
            className: A.newBadgeText,
            children: [(0, a.jsx)(_.default, {
              width: 12,
              height: 12
            }), v.default.Messages.NEW]
          })
        }) : (0, a.jsx)(C.IconBadge, {
          icon: E ? () => (0, a.jsx)(S.default, {
            width: 14,
            height: 14
          }) : () => (0, a.jsx)(_.default, {
            width: 12,
            height: 12
          }),
          color: l.default.BACKGROUND_ACCENT,
          className: A.iconBadge
        })
      })()]
    })
  };
var R = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: n,
    onSelect: u,
    onOpenShop: i
  } = e, l = (0, g.default)();
  return (0, a.jsx)(c.MasonryList, {
    fade: !0,
    className: A.list,
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
        section: m,
        items: p
      } = l[e];
      return (0, s.match)(p[o]).with(g.NONE_ITEM, () => (0, a.jsxs)(N, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => u(null),
        children: [(0, a.jsx)(h.default, {
          className: A.notAllowedIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: v.default.Messages.NONE
        })]
      }, f)).with(g.SHOP_ITEM, () => (0, a.jsxs)(N, {
        style: d,
        onSelect: i,
        children: [(0, a.jsx)(E.default, {
          className: A.shopIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: v.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let i = (null == r ? void 0 : r.id) === e.id;
        return (0, a.jsx)(L, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: m,
          innerRef: i ? n : void 0,
          isSelected: i,
          onSelect: () => u(e)
        }, f)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = l[e];
      return (0, a.jsx)("div", {
        className: A.headings,
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
    getSectionHeight: e => l[e].height,
    getItemKey: (e, t) => l[e].items[t].id,
    getItemHeight: P
  })
}