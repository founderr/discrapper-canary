"use strict";
a.r(t), a("627341");
var s = a("735250"),
  r = a("470079"),
  l = a("803997"),
  i = a.n(l),
  o = a("278074"),
  n = a("831209"),
  u = a("399606"),
  c = a("481060"),
  d = a("727637"),
  h = a("597688"),
  m = a("884697"),
  f = a("295177"),
  g = a("126900"),
  C = a("466111"),
  v = a("783014"),
  E = a("242411"),
  S = a("26290"),
  p = a("74538"),
  A = a("864106"),
  I = a("439959"),
  _ = a("125988"),
  x = a("689938"),
  P = a("566253");
let T = () => 80,
  w = e => {
    let {
      children: t,
      className: a,
      onSelect: r,
      isSelected: l = !1,
      ...o
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: i()(P.decorationGridItem, l ? P.selected : void 0, a),
      ...o,
      onClick: r,
      children: t
    })
  },
  D = e => {
    let {
      user: t,
      avatarDecoration: a,
      innerRef: l,
      section: i,
      isSelected: o = !1,
      ...c
    } = e, g = (0, u.useStateFromStores)([h.default], () => {
      let e = h.default.getProduct(a.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), v = (0, f.default)(a, o), A = p.default.canUseCollectibles(t), T = i === I.Section.PREMIUM_PURCHASE && !A, D = r.useRef(null), N = (0, d.default)(null != l ? l : D), {
      avatarDecorationSrc: R
    } = (0, _.default)({
      user: t,
      avatarDecorationOverride: a,
      size: 80,
      animateOnHover: !N
    });
    return (0, s.jsxs)(w, {
      className: T ? P.decorationGridItemChurned : void 0,
      innerRef: null != l ? l : D,
      isSelected: o,
      ...c,
      children: [(0, s.jsx)("img", {
        className: P.presetDecorationImg,
        src: R,
        alt: a.label
      }), i === I.Section.PURCHASE || i === I.Section.PREMIUM_PURCHASE && A ? null : v ? (0, s.jsx)(S.PremiumBadge, {
        className: P.newBadge,
        text: (0, s.jsxs)("div", {
          className: P.newBadgeText,
          children: [(0, s.jsx)(E.default, {
            width: 12,
            height: 12
          }), x.default.Messages.NEW]
        })
      }) : (0, s.jsx)(S.IconBadge, {
        icon: g ? () => (0, s.jsx)(C.default, {
          width: 14,
          height: 14
        }) : () => (0, s.jsx)(E.default, {
          width: 12,
          height: 12
        }),
        color: n.default.BACKGROUND_ACCENT,
        className: P.iconBadge
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    guild: a,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: l,
    onSelect: i,
    onOpenShop: n
  } = e, u = (0, I.default)();
  return (0, s.jsx)(c.MasonryList, {
    fade: !0,
    className: P.list,
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
    renderItem: (e, d, h, m) => {
      let {
        section: f,
        items: C
      } = u[e];
      return (0, o.match)(C[d]).with(I.NONE_ITEM, () => (0, s.jsxs)(w, {
        style: {
          ...h
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, s.jsx)(v.default, {
          className: P.notAllowedIcon
        }), (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, A.hasGlobalDefaultAvatarDecoration)(t, a) ? x.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : x.default.Messages.NONE
        })]
      }, m)).with(I.SHOP_ITEM, () => (0, s.jsxs)(w, {
        style: h,
        onSelect: n,
        children: [(0, s.jsx)(g.default, {
          className: P.shopIcon
        }), (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: x.default.Messages.COLLECTIBLES_SHOP
        })]
      }, m)).otherwise(e => {
        let a = (null == r ? void 0 : r.id) === e.id;
        return (0, s.jsx)(D, {
          style: {
            ...h
          },
          user: t,
          avatarDecoration: e,
          section: f,
          innerRef: a ? l : void 0,
          isSelected: a,
          onSelect: () => i(e)
        }, m)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = u[e];
      return (0, s.jsx)("div", {
        className: P.headings,
        children: (0, s.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, s.jsx)(c.Heading, {
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