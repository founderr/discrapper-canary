"use strict";
r.r(t), r.d(t, {
  default: function() {
    return L
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
  m = r("426497"),
  p = r("491232"),
  E = r("743826"),
  S = r("216422"),
  h = r("468759"),
  _ = r("600785"),
  C = r("956089"),
  I = r("719923"),
  T = r("643070"),
  g = r("688318"),
  v = r("782340"),
  N = r("585872");
let A = () => 80,
  P = e => {
    let {
      children: t,
      className: r,
      onSelect: a,
      isSelected: u = !1,
      ...s
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: i(N.decorationGridItem, u ? N.selected : void 0, r),
      ...s,
      onClick: a,
      children: t
    })
  },
  R = e => {
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
    }), h = (0, o.default)([m.default], () => m.default.isItemViewed(r)), A = I.default.canUseCollectibles(t), R = i === T.Section.PREMIUM_PURCHASE && !A, [L, y] = a.useState(s);
    a.useEffect(() => {
      s && y(!0)
    }, [s]);
    let x = a.useRef(null),
      b = (0, d.default)(null != u ? u : x),
      {
        avatarDecorationSrc: M
      } = (0, g.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !b
      });
    return (0, n.jsxs)(P, {
      className: R ? N.decorationGridItemChurned : void 0,
      innerRef: null != u ? u : x,
      isSelected: s,
      ...c,
      children: [(0, n.jsx)("img", {
        className: N.presetDecorationImg,
        src: M,
        alt: r.label
      }), (() => {
        let e = i === T.Section.PURCHASE || i === T.Section.PREMIUM_PURCHASE && A;
        if (e) return null;
        let t = !h && !s && !L;
        return t ? (0, n.jsx)(C.PremiumBadge, {
          className: N.newBadge,
          text: (0, n.jsxs)("div", {
            className: N.newBadgeText,
            children: [(0, n.jsx)(_.default, {
              width: 12,
              height: 12
            }), v.default.Messages.NEW]
          })
        }) : (0, n.jsx)(C.IconBadge, {
          icon: E ? () => (0, n.jsx)(S.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(_.default, {
            width: 12,
            height: 12
          }),
          color: l.default.BACKGROUND_ACCENT,
          className: N.iconBadge
        })
      })()]
    })
  };
var L = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: a,
    onSelect: u,
    onOpenShop: i
  } = e, l = (0, T.default)();
  return (0, n.jsx)(c.MasonryList, {
    fade: !0,
    className: N.list,
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
      return (0, s.match)(p[o]).with(T.NONE_ITEM, () => (0, n.jsxs)(P, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => u(null),
        children: [(0, n.jsx)(h.default, {
          className: N.notAllowedIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: v.default.Messages.NONE
        })]
      }, f)).with(T.SHOP_ITEM, () => (0, n.jsxs)(P, {
        style: d,
        onSelect: i,
        children: [(0, n.jsx)(E.default, {
          className: N.shopIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: v.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let i = (null == r ? void 0 : r.id) === e.id;
        return (0, n.jsx)(R, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: m,
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
        className: N.headings,
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