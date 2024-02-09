"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("222007"), r("794252");
var a = r("37983"),
  s = r("884691"),
  n = r("414456"),
  i = r.n(n),
  l = r("506838"),
  u = r("171210"),
  o = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  E = r("426497"),
  m = r("491232"),
  C = r("743826"),
  p = r("216422"),
  _ = r("468759"),
  S = r("600785"),
  A = r("956089"),
  g = r("719923"),
  h = r("643070"),
  v = r("688318"),
  I = r("782340"),
  N = r("654353");
let T = () => 80,
  x = e => {
    let {
      children: t,
      className: r,
      onSelect: s,
      isSelected: n = !1,
      ...l
    } = e;
    return (0, a.jsx)(c.Clickable, {
      className: i(N.decorationGridItem, n ? N.selected : void 0, r),
      ...l,
      onClick: s,
      children: t
    })
  },
  O = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: n,
      section: i,
      isSelected: l = !1,
      ...c
    } = e, C = (0, o.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), _ = (0, o.default)([E.default], () => E.default.isItemViewed(r)), T = g.default.canUseCollectibles(t), O = i === h.Section.PREMIUM_PURCHASE && !T, [R, M] = s.useState(l);
    s.useEffect(() => {
      l && M(!0)
    }, [l]);
    let D = s.useRef(null),
      b = (0, d.default)(null != n ? n : D),
      {
        avatarDecorationSrc: P
      } = (0, v.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !b
      });
    return (0, a.jsxs)(x, {
      className: O ? N.decorationGridItemChurned : void 0,
      innerRef: null != n ? n : D,
      isSelected: l,
      ...c,
      children: [(0, a.jsx)("img", {
        className: N.presetDecorationImg,
        src: P,
        alt: r.label
      }), (() => {
        let e = i === h.Section.PURCHASE || i === h.Section.PREMIUM_PURCHASE && T;
        if (e) return null;
        let t = !_ && !l && !R;
        return t ? (0, a.jsx)(A.PremiumBadge, {
          className: N.newBadge,
          text: (0, a.jsxs)("div", {
            className: N.newBadgeText,
            children: [(0, a.jsx)(S.default, {
              width: 12,
              height: 12
            }), I.default.Messages.NEW]
          })
        }) : (0, a.jsx)(A.IconBadge, {
          icon: C ? () => (0, a.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, a.jsx)(S.default, {
            width: 12,
            height: 12
          }),
          color: u.default.BACKGROUND_ACCENT,
          className: N.iconBadge
        })
      })()]
    })
  };
var R = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: s,
    onSelect: n,
    onOpenShop: i
  } = e, u = (0, h.default)();
  return (0, a.jsx)(c.MasonryList, {
    fade: !0,
    className: N.list,
    columns: 3,
    sections: u.map(e => {
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
      } = u[e];
      return (0, l.match)(m[o]).with(h.NONE_ITEM, () => (0, a.jsxs)(x, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => n(null),
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
        children: [(0, a.jsx)(C.default, {
          className: N.shopIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: I.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let i = (null == r ? void 0 : r.id) === e.id;
        return (0, a.jsx)(O, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: E,
          innerRef: i ? s : void 0,
          isSelected: i,
          onSelect: () => n(e)
        }, f)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = u[e];
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
    getSectionHeight: e => u[e].height,
    getItemKey: (e, t) => u[e].items[t].id,
    getItemHeight: T
  })
}