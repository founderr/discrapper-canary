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
  S = r("956089"),
  C = r("719923"),
  T = r("643070"),
  N = r("688318"),
  h = r("782340"),
  v = r("654353");
let R = () => 80,
  g = e => {
    let {
      children: t,
      className: r,
      onSelect: a,
      isSelected: i = !1,
      ...u
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: s(v.decorationGridItem, i ? v.selected : void 0, r),
      ...u,
      onClick: a,
      children: t
    })
  },
  O = e => {
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
    }), p = (0, l.default)([E.default], () => E.default.isItemViewed(r)), R = C.default.canUseCollectibles(t), O = s === T.Section.PREMIUM_PURCHASE && !R, [M, x] = a.useState(u);
    a.useEffect(() => {
      u && x(!0)
    }, [u]);
    let D = a.useRef(null),
      P = (0, d.default)(null != i ? i : D),
      {
        avatarDecorationSrc: b
      } = (0, N.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !P
      });
    return (0, n.jsxs)(g, {
      className: O ? v.decorationGridItemChurned : void 0,
      innerRef: null != i ? i : D,
      isSelected: u,
      ...c,
      children: [(0, n.jsx)("img", {
        className: v.presetDecorationImg,
        src: b,
        alt: r.label
      }), (() => {
        let e = s === T.Section.PURCHASE || s === T.Section.PREMIUM_PURCHASE && R;
        if (e) return null;
        let t = !p && !u && !M;
        return t ? (0, n.jsx)(S.PremiumBadge, {
          className: v.newBadge,
          text: (0, n.jsxs)("div", {
            className: v.newBadgeText,
            children: [(0, n.jsx)(m.default, {
              width: 12,
              height: 12
            }), h.default.Messages.NEW]
          })
        }) : (0, n.jsx)(S.IconBadge, {
          icon: A ? () => (0, n.jsx)(I.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(m.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: v.iconBadge
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
    className: v.list,
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
      return (0, u.match)(_[l]).with(T.NONE_ITEM, () => (0, n.jsxs)(g, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, n.jsx)(p.default, {
          className: v.notAllowedIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: h.default.Messages.NONE
        })]
      }, f)).with(T.SHOP_ITEM, () => (0, n.jsxs)(g, {
        style: d,
        onSelect: s,
        children: [(0, n.jsx)(A.default, {
          className: v.shopIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: h.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let s = (null == r ? void 0 : r.id) === e.id;
        return (0, n.jsx)(O, {
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
    getSectionHeight: e => o[e].height,
    getItemKey: (e, t) => o[e].items[t].id,
    getItemHeight: R
  })
}