"use strict";
r.r(t), r.d(t, {
  default: function() {
    return M
  }
}), r("222007"), r("794252");
var n = r("37983"),
  a = r("884691"),
  i = r("414456"),
  s = r.n(i),
  u = r("506838"),
  o = r("171210"),
  l = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  E = r("426497"),
  _ = r("491232"),
  A = r("743826"),
  I = r("216422"),
  p = r("468759"),
  m = r("600785"),
  C = r("956089"),
  S = r("719923"),
  T = r("643070"),
  N = r("688318"),
  R = r("782340"),
  h = r("654353");
let v = () => 80,
  O = e => {
    let {
      children: t,
      className: r,
      onSelect: a,
      isSelected: i = !1,
      ...u
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: s(h.decorationGridItem, i ? h.selected : void 0, r),
      ...u,
      onClick: a,
      children: t
    })
  },
  g = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: i,
      section: s,
      isSelected: u = !1,
      ...c
    } = e, A = (0, l.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, _.isPremiumCollectiblesProduct)(e)
    }), p = (0, l.default)([E.default], () => E.default.isItemViewed(r)), v = S.default.canUseCollectibles(t), g = s === T.Section.PREMIUM_PURCHASE && !v, [M, D] = a.useState(u);
    a.useEffect(() => {
      u && D(!0)
    }, [u]);
    let x = a.useRef(null),
      P = (0, d.default)(null != i ? i : x),
      {
        avatarDecorationSrc: b
      } = (0, N.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !P
      });
    return (0, n.jsxs)(O, {
      className: g ? h.decorationGridItemChurned : void 0,
      innerRef: null != i ? i : x,
      isSelected: u,
      ...c,
      children: [(0, n.jsx)("img", {
        className: h.presetDecorationImg,
        src: b,
        alt: r.label
      }), (() => {
        let e = s === T.Section.PURCHASE || s === T.Section.PREMIUM_PURCHASE && v;
        if (e) return null;
        let t = !p && !u && !M;
        return t ? (0, n.jsx)(C.PremiumBadge, {
          className: h.newBadge,
          text: (0, n.jsxs)("div", {
            className: h.newBadgeText,
            children: [(0, n.jsx)(m.default, {
              width: 12,
              height: 12
            }), R.default.Messages.NEW]
          })
        }) : (0, n.jsx)(C.IconBadge, {
          icon: A ? () => (0, n.jsx)(I.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(m.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: h.iconBadge
        })
      })()]
    })
  };
var M = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: a,
    onSelect: i,
    onOpenShop: s
  } = e, o = (0, T.default)();
  return (0, n.jsx)(c.MasonryList, {
    fade: !0,
    className: h.list,
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
        items: _
      } = o[e];
      return (0, u.match)(_[l]).with(T.NONE_ITEM, () => (0, n.jsxs)(O, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, n.jsx)(p.default, {
          className: h.notAllowedIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: R.default.Messages.NONE
        })]
      }, f)).with(T.SHOP_ITEM, () => (0, n.jsxs)(O, {
        style: d,
        onSelect: s,
        children: [(0, n.jsx)(A.default, {
          className: h.shopIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: R.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let s = (null == r ? void 0 : r.id) === e.id;
        return (0, n.jsx)(g, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: E,
          innerRef: s ? a : void 0,
          isSelected: s,
          onSelect: () => i(e)
        }, f)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = o[e];
      return (0, n.jsx)("div", {
        className: h.headings,
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
    getSectionHeight: e => o[e].height,
    getItemKey: (e, t) => o[e].items[t].id,
    getItemHeight: v
  })
}