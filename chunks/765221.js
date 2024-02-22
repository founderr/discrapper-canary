"use strict";
r.r(t), r.d(t, {
  default: function() {
    return N
  }
}), r("222007"), r("794252");
var a = r("37983"),
  n = r("884691"),
  u = r("414456"),
  i = r.n(u),
  l = r("506838"),
  s = r("171210"),
  o = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  E = r("426497"),
  m = r("491232"),
  p = r("743826"),
  S = r("216422"),
  C = r("468759"),
  h = r("600785"),
  I = r("956089"),
  _ = r("719923"),
  g = r("234251"),
  T = r("643070"),
  v = r("688318"),
  A = r("782340"),
  P = r("585872");
let R = () => 80,
  L = e => {
    let {
      children: t,
      className: r,
      onSelect: n,
      isSelected: u = !1,
      ...l
    } = e;
    return (0, a.jsx)(c.Clickable, {
      className: i(P.decorationGridItem, u ? P.selected : void 0, r),
      ...l,
      onClick: n,
      children: t
    })
  },
  y = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: u,
      section: i,
      isSelected: l = !1,
      ...c
    } = e, p = (0, o.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), C = (0, o.default)([E.default], () => E.default.isItemViewed(r)), g = _.default.canUseCollectibles(t), R = i === T.Section.PREMIUM_PURCHASE && !g, [y, N] = n.useState(l);
    n.useEffect(() => {
      l && N(!0)
    }, [l]);
    let O = n.useRef(null),
      b = (0, d.default)(null != u ? u : O),
      {
        avatarDecorationSrc: F
      } = (0, v.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !b
      });
    return (0, a.jsxs)(L, {
      className: R ? P.decorationGridItemChurned : void 0,
      innerRef: null != u ? u : O,
      isSelected: l,
      ...c,
      children: [(0, a.jsx)("img", {
        className: P.presetDecorationImg,
        src: F,
        alt: r.label
      }), (() => {
        let e = i === T.Section.PURCHASE || i === T.Section.PREMIUM_PURCHASE && g;
        if (e) return null;
        let t = !C && !l && !y;
        return t ? (0, a.jsx)(I.PremiumBadge, {
          className: P.newBadge,
          text: (0, a.jsxs)("div", {
            className: P.newBadgeText,
            children: [(0, a.jsx)(h.default, {
              width: 12,
              height: 12
            }), A.default.Messages.NEW]
          })
        }) : (0, a.jsx)(I.IconBadge, {
          icon: p ? () => (0, a.jsx)(S.default, {
            width: 14,
            height: 14
          }) : () => (0, a.jsx)(h.default, {
            width: 12,
            height: 12
          }),
          color: s.default.BACKGROUND_ACCENT,
          className: P.iconBadge
        })
      })()]
    })
  };
var N = e => {
  let {
    user: t,
    guild: r,
    pendingAvatarDecoration: n,
    selectedAvatarDecorationRef: u,
    onSelect: i,
    onOpenShop: s
  } = e, o = (0, T.default)();
  return (0, a.jsx)(c.MasonryList, {
    fade: !0,
    className: P.list,
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
    renderItem: (e, d, f, E) => {
      let {
        section: m,
        items: S
      } = o[e];
      return (0, l.match)(S[d]).with(T.NONE_ITEM, () => (0, a.jsxs)(L, {
        style: {
          ...f
        },
        isSelected: null === n,
        onSelect: () => i(null),
        children: [(0, a.jsx)(C.default, {
          className: P.notAllowedIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, g.hasGlobalDefaultAvatarDecoration)(t, r) ? A.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : A.default.Messages.NONE
        })]
      }, E)).with(T.SHOP_ITEM, () => (0, a.jsxs)(L, {
        style: f,
        onSelect: s,
        children: [(0, a.jsx)(p.default, {
          className: P.shopIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: A.default.Messages.COLLECTIBLES_SHOP
        })]
      }, E)).otherwise(e => {
        let r = (null == n ? void 0 : n.id) === e.id;
        return (0, a.jsx)(y, {
          style: {
            ...f
          },
          user: t,
          avatarDecoration: e,
          section: m,
          innerRef: r ? u : void 0,
          isSelected: r,
          onSelect: () => i(e)
        }, E)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = o[e];
      return (0, a.jsx)("div", {
        className: P.headings,
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
    getItemHeight: R
  })
}