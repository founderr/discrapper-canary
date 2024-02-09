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
  E = r("853987"),
  f = r("426497"),
  _ = r("491232"),
  A = r("743826"),
  C = r("216422"),
  p = r("468759"),
  I = r("600785"),
  m = r("956089"),
  T = r("719923"),
  S = r("643070"),
  N = r("688318"),
  R = r("782340"),
  g = r("654353");
let O = () => 80,
  h = e => {
    let {
      children: t,
      className: r,
      onSelect: a,
      isSelected: i = !1,
      ...u
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: s(g.decorationGridItem, i ? g.selected : void 0, r),
      ...u,
      onClick: a,
      children: t
    })
  },
  v = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: i,
      section: s,
      isSelected: u = !1,
      ...c
    } = e, A = (0, l.default)([E.default], () => {
      let e = E.default.getProduct(r.skuId);
      return (0, _.isPremiumCollectiblesProduct)(e)
    }), p = (0, l.default)([f.default], () => f.default.isItemViewed(r)), O = T.default.canUseCollectibles(t), v = s === S.Section.PREMIUM_PURCHASE && !O, [M, D] = a.useState(u);
    a.useEffect(() => {
      u && D(!0)
    }, [u]);
    let x = a.useRef(null),
      b = (0, d.default)(null != i ? i : x),
      {
        avatarDecorationSrc: P
      } = (0, N.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !b
      });
    return (0, n.jsxs)(h, {
      className: v ? g.decorationGridItemChurned : void 0,
      innerRef: null != i ? i : x,
      isSelected: u,
      ...c,
      children: [(0, n.jsx)("img", {
        className: g.presetDecorationImg,
        src: P,
        alt: r.label
      }), (() => {
        let e = s === S.Section.PURCHASE || s === S.Section.PREMIUM_PURCHASE && O;
        if (e) return null;
        let t = !p && !u && !M;
        return t ? (0, n.jsx)(m.PremiumBadge, {
          className: g.newBadge,
          text: (0, n.jsxs)("div", {
            className: g.newBadgeText,
            children: [(0, n.jsx)(I.default, {
              width: 12,
              height: 12
            }), R.default.Messages.NEW]
          })
        }) : (0, n.jsx)(m.IconBadge, {
          icon: A ? () => (0, n.jsx)(C.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(I.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: g.iconBadge
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
  } = e, o = (0, S.default)();
  return (0, n.jsx)(c.MasonryList, {
    fade: !0,
    className: g.list,
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
    renderItem: (e, l, d, E) => {
      let {
        section: f,
        items: _
      } = o[e];
      return (0, u.match)(_[l]).with(S.NONE_ITEM, () => (0, n.jsxs)(h, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, n.jsx)(p.default, {
          className: g.notAllowedIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: R.default.Messages.NONE
        })]
      }, E)).with(S.SHOP_ITEM, () => (0, n.jsxs)(h, {
        style: d,
        onSelect: s,
        children: [(0, n.jsx)(A.default, {
          className: g.shopIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: R.default.Messages.COLLECTIBLES_SHOP
        })]
      }, E)).otherwise(e => {
        let s = (null == r ? void 0 : r.id) === e.id;
        return (0, n.jsx)(v, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: f,
          innerRef: s ? a : void 0,
          isSelected: s,
          onSelect: () => i(e)
        }, E)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = o[e];
      return (0, n.jsx)("div", {
        className: g.headings,
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
    getItemHeight: O
  })
}